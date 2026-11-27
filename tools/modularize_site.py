from pathlib import Path
import re,base64,sys,hashlib

root=Path(".")
p=root/"index.html"
s=p.read_text(encoding="utf-8")
if 'js/01-catalog.js' in s:
    print("Already modularized");sys.exit(0)
for folder in ("assets","js","css"):
    (root/folder).mkdir(exist_ok=True)
img_hash_to_path={}
def extract_png(m):
    raw=base64.b64decode(m.group(1),validate=True)
    digest=hashlib.sha256(raw).hexdigest()
    if digest not in img_hash_to_path:
        name=f"brand-{len(img_hash_to_path)+1}.png"
        (root/"assets"/name).write_bytes(raw)
        img_hash_to_path[digest]="assets/"+name
    return img_hash_to_path[digest]
s=re.sub(r"data:image/png;base64,([A-Za-z0-9+/=]+)",extract_png,s)
m=re.search(r"(?s)<style>(.*?)</style>",s)
assert m,"Missing inline CSS"
(root/"css/style.css").write_text(m.group(1),encoding="utf-8")
s=s[:m.start()]+'<link rel="stylesheet" href="css/style.css">'+s[m.end():]
m=re.search(r"(?s)<script>([\s\S]*?tailwind\.config[\s\S]*?)</script>",s)
assert m,"Missing Tailwind config"
(root/"js/00-tailwind-config.js").write_text(m.group(1),encoding="utf-8")
s=s[:m.start()]+'<script src="js/00-tailwind-config.js"></script>'+s[m.end():]
scripts=list(re.finditer(r"(?s)<script>(.*?)</script>",s))
assert len(scripts)==1,f"Unexpected inline JS count: {len(scripts)}"
m=scripts[-1]
js=m.group(1)
sections=list(re.finditer(r"(?m)^[ \t]*// ={10,}\n[ \t]*// (\d+)\. ",js))
assert len(sections)==8,f"Unexpected section count {len(sections)}"
labels=["catalog","state","vessel","products","filters","quick-view","ritual","shopping"]
files=[]
for i,a in enumerate(sections):
    start=a.start()
    end=sections[i+1].start() if i+1<len(sections) else len(js)
    name=f"{i+1:02d}-{labels[i]}.js"
    (root/"js"/name).write_text(js[start:end],encoding="utf-8")
    files.append(name)
replacement="\n".join('<script src="js/'+name+'"></script>' for name in files)
s=s[:m.start()]+replacement+s[m.end():]
p.write_text(s,encoding="utf-8")
print("Modularized:",p.stat().st_size,"bytes HTML and",len(files),"JS modules",len(img_hash_to_path),"unique image assets")
