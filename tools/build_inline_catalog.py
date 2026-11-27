#!/usr/bin/env python3
"""Rebuild the inline storefront runtime from editable js/ source modules."""
from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
html_path = root / "index.html"
html = html_path.read_text(encoding="utf-8")
modules = ["01-catalog", "02-state", "03-vessel", "04-products",
           "05-filters", "06-quick-view", "07-ritual", "08-shopping"]
scripts = "\n;\n".join((root / "js" / f"{name}.js").read_text(encoding="utf-8")
                      for name in modules)
if "</script" in scripts.lower():
    raise SystemExit("Unsafe end-script sequence inside module")
marker = r'(<script id="benus-inline-storefront-runtime">)[\s\S]*?(</script>)'
replacement = r'\g<1>' + "\n" + scripts + "\n" + r'\g<2>'
if len(re.findall(marker, html)) != 1:
    raise SystemExit("Expected exactly one storefront runtime block")
updated = re.sub(marker, lambda m: m.group(1) + "\n" + scripts + "\n" + m.group(2), html)
html_path.write_text(updated, encoding="utf-8")
print(f"Built {len(scripts)}-character storefront runtime in index.html")
