    // =========================================================================
    // 3. CUSTOM APOTHECARY VESSEL SVG GENERATOR (Matches Brand Aesthetic)
    // =========================================================================
    function renderVesselIllustration(product) {
      const { vesselType, accentColor, name } = product;
      if (vesselType === "millet") {
        // Illustrative premium pouch concept; no real-product photograph or certification is implied.
        return `
          <svg viewBox="0 0 180 210" class="w-40 h-44 mx-auto drop-shadow-md transition-transform duration-500 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${name} pack illustration">
            <ellipse cx="90" cy="193" rx="58" ry="8" fill="#7C5A43" fill-opacity="0.10" />
            <path d="M51 29 L129 29 L140 186 Q90 196 40 186 Z" fill="#E8D7BF" stroke="#7C5A43" stroke-width="1.3"/>
            <path d="M51 29 L129 29 L132 47 L48 47 Z" fill="#B89A72" stroke="#7C5A43" stroke-width="1.1"/>
            <path d="M45 177 Q90 186 135 177 L140 186 Q90 196 40 186 Z" fill="${accentColor}" fill-opacity=".6"/>
            <rect x="50" y="59" width="80" height="102" rx="4" fill="#FAF6EE" stroke="#C59B76" stroke-width="1"/>
            <image href="${originalWordmark}" x="58" y="68" width="64" height="43" preserveAspectRatio="xMidYMid meet" />
            <line x1="62" y1="114" x2="118" y2="114" stroke="#C59B76"/>
            <text x="90" y="126" text-anchor="middle" fill="#7C5A43" font-family="Cormorant Garamond,serif" font-size="12" font-style="italic">Millet Collection</text>
            <text x="90" y="140" text-anchor="middle" fill="#A97954" font-family="Montserrat,sans-serif" font-size="5" letter-spacing="1">PRODUCT CONCEPT</text>
            <path d="M75 154 L80 145 L85 154 M93 154 L98 145 L103 154" fill="none" stroke="${accentColor}" stroke-width="1.2"/>
          </svg>
        `;
      }
      if (vesselType === "hair-oil") {
        // Matching luxury hair-oil bottle illustration, not a photograph or verified product pack.
        return `
          <svg viewBox="0 0 180 210" class="w-40 h-44 mx-auto drop-shadow-md transition-transform duration-500 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${name} hair oil bottle illustration">
            <ellipse cx="90" cy="193" rx="46" ry="7" fill="#7C5A43" fill-opacity=".09"/>
            <rect x="79" y="24" width="22" height="18" rx="3" fill="#6A4D39"/>
            <rect x="75" y="42" width="30" height="11" rx="3" fill="#C59B76" stroke="#80583E" stroke-width="1"/>
            <path d="M77 53H103V66Q123 69 127 83V178Q127 190 115 190H65Q53 190 53 178V83Q57 69 77 66Z" fill="#F1E4D4" stroke="#7C5A43" stroke-width="1.4"/>
            <path d="M55 101H125V178Q125 188 114 188H66Q55 188 55 178Z" fill="${accentColor}" fill-opacity=".4"/>
            <rect x="61" y="99" width="58" height="75" rx="5" fill="#FAF6EE" stroke="#C59B76" stroke-width="1"/>
            <image href="${originalWordmark}" x="67" y="105" width="46" height="34" preserveAspectRatio="xMidYMid meet"/>
            <path d="M70 141H110" stroke="#C59B76" stroke-width=".8"/>
            <text x="90" y="152" text-anchor="middle" fill="#7C5A43" font-family="Cormorant Garamond,serif" font-size="11" font-style="italic">Hair Oil</text>
            <text x="90" y="164" text-anchor="middle" fill="#A97954" font-family="Montserrat,sans-serif" font-size="4.5" letter-spacing=".7">KERALA INSPIRED</text>
          </svg>
        `;
      }
      if (vesselType === "shampoo-bar") {
        // Illustrative solid shampoo bar and paper sleeve; not a photograph of a finished product.
        return `
          <svg viewBox="0 0 180 210" class="w-40 h-44 mx-auto drop-shadow-md transition-transform duration-500 group-hover:scale-105" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${name} illustrated shampoo bar">
            <ellipse cx="90" cy="182" rx="60" ry="9" fill="#7C5A43" fill-opacity=".10" />
            <rect x="34" y="47" width="112" height="124" rx="28" fill="${accentColor}" stroke="#7C5A43" stroke-width="1.4" />
            <rect x="40" y="53" width="100" height="112" rx="24" fill="#F8F4ED" fill-opacity=".15" stroke="#F8F4ED" stroke-opacity=".45" />
            <path d="M37 89 Q90 81 143 89 L143 145 Q90 151 37 145 Z" fill="#F8F4ED" stroke="#C59B76" stroke-width="1.1" />
            <image href="${originalWordmark}" x="53" y="92" width="74" height="31" preserveAspectRatio="xMidYMid meet" />
            <path d="M65 124 H115" stroke="#C59B76" stroke-width=".8"/>
            <text x="90" y="135" text-anchor="middle" fill="#7C5A43" font-family="Cormorant Garamond,serif" font-size="10.5" font-style="italic">Shampoo Bar</text>
            <text x="90" y="142" text-anchor="middle" fill="#A97954" font-family="Montserrat,sans-serif" font-size="4.4" letter-spacing=".6">HAIR CARE CONCEPT</text>
          </svg>
        `;
      }
      if (vesselType === "soap") {
        // Brand-matched illustrated bath bar; no product photograph or certification implied.
        return `
          <svg viewBox="0 0 180 210" class="w-40 h-44 mx-auto drop-shadow-md transition-transform duration-500 group-hover:scale-105" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${name} soap bar illustration">
            <ellipse cx="91" cy="181" rx="62" ry="9" fill="#7C5A43" fill-opacity="0.09" />
            <rect x="30" y="45" width="120" height="127" rx="23" fill="${accentColor}" stroke="#7C5A43" stroke-width="1.2"/>
            <rect x="37" y="52" width="106" height="113" rx="18" fill="#F8F4ED" fill-opacity="0.22" stroke="#F8F4ED" stroke-opacity="0.45"/>
            <rect x="44" y="85" width="92" height="61" rx="5" fill="#F8F4ED" stroke="#C59B76" stroke-width="1.3"/>
            <image href="${originalWordmark}" x="51" y="90" width="78" height="33" preserveAspectRatio="xMidYMid meet" />
            <line x1="60" y1="124" x2="120" y2="124" stroke="#C59B76" stroke-width="0.8"/>
            <text x="90" y="135" text-anchor="middle" fill="#7C5A43" font-family="Cormorant Garamond, serif" font-style="italic" font-size="9">Botanical Soap</text>
            <text x="90" y="141.5" text-anchor="middle" fill="#A97954" font-family="Montserrat, sans-serif" font-size="4.6" letter-spacing="0.75">100 G · CONCEPT</text>
          </svg>
        `;
      }
      if (vesselType === "dropper") {
        return `
          <svg viewBox="0 0 180 210" class="w-40 h-44 mx-auto drop-shadow-md transition-transform duration-500 group-hover:scale-105" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Dropper Bulb -->
            <path d="M81 24C81 17 99 17 99 24V44H81V24Z" fill="#5A3E2B"/>
            <!-- Metallic Copper Collar -->
            <rect x="76" y="44" width="28" height="12" rx="2" fill="url(#copperCollar)"/>
            <!-- Glass Shoulder & Bottle -->
            <path d="M62 72C62 63 72 56 80 56H100C108 56 118 63 118 72V178C118 186 112 192 104 192H76C68 192 62 186 62 178V72Z" fill="#F2E4D5" stroke="#7C5A43" stroke-width="1.4"/>
            <!-- Golden Elixir Liquid Fill -->
            <path d="M64 95H116V177C116 184 110 190 103 190H77C70 190 64 184 64 177V95Z" fill="${accentColor}" fill-opacity="0.32"/>
            <!-- Cream Apothecary Label -->
            <rect x="67" y="96" width="46" height="72" rx="4" fill="#F8F4ED" stroke="#C59B76" stroke-width="0.9"/>
            <image href="${originalWordmark}" x="70" y="101" width="40" height="29" preserveAspectRatio="xMidYMid meet" />
            <line x1="76" y1="134" x2="104" y2="134" stroke="#C59B76" stroke-width="0.7"/>
            <text x="90" y="146" text-anchor="middle" fill="#7C5A43" font-family="Cormorant Garamond, serif" font-style="italic" font-size="7.5">Pure Elixir</text>
            <text x="90" y="159" text-anchor="middle" fill="#A97954" font-family="Montserrat, sans-serif" font-size="4.5" letter-spacing="1">30 ML • NATURALS</text>
            <defs>
              <linearGradient id="copperCollar" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#8C6244"/>
                <stop offset="50%" stop-color="#DFB892"/>
                <stop offset="100%" stop-color="#7C5A43"/>
              </linearGradient>
            </defs>
          </svg>
        `;
      } else if (vesselType === "jar") {
        return `
          <svg viewBox="0 0 180 210" class="w-40 h-44 mx-auto drop-shadow-md transition-transform duration-500 group-hover:scale-105" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Bronze Lid -->
            <rect x="48" y="68" width="84" height="18" rx="5" fill="url(#jarLid)"/>
            <rect x="52" y="86" width="76" height="4" fill="#5A3E2B"/>
            <!-- Frosted Cream Glass Jar -->
            <rect x="46" y="90" width="88" height="94" rx="14" fill="#F4E7DA" stroke="#7C5A43" stroke-width="1.4"/>
            <!-- Label -->
            <rect x="54" y="106" width="72" height="62" rx="5" fill="#F8F4ED" stroke="#C59B76" stroke-width="0.9"/>
            <image href="${originalWordmark}" x="58" y="110" width="64" height="27" preserveAspectRatio="xMidYMid meet" />
            <text x="90" y="148" text-anchor="middle" fill="#7C5A43" font-family="Cormorant Garamond, serif" font-style="italic" font-size="8.5">Botanical Balm</text>
            <text x="90" y="160" text-anchor="middle" fill="#A97954" font-family="Montserrat, sans-serif" font-size="4.8" letter-spacing="1.2">50 G • COLD-PRESSED</text>
            <defs>
              <linearGradient id="jarLid" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#7C5A43"/>
                <stop offset="50%" stop-color="#D4AC86"/>
                <stop offset="100%" stop-color="#6B4B36"/>
              </linearGradient>
            </defs>
          </svg>
        `;
      } else {
        return `
          <svg viewBox="0 0 180 210" class="w-40 h-44 mx-auto drop-shadow-md transition-transform duration-500 group-hover:scale-105" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Mist / Pump Cap -->
            <rect x="78" y="24" width="24" height="24" rx="4" fill="#F5E2D6" stroke="#7C5A43" stroke-width="1.2"/>
            <rect x="74" y="48" width="32" height="10" rx="2" fill="url(#mistCollar)"/>
            <!-- Tall Apothecary Bottle -->
            <path d="M64 70C64 62 72 58 80 58H100C108 58 116 62 116 70V180C116 187 110 192 103 192H77C70 192 64 187 64 180V70Z" fill="#F6EBE0" stroke="#7C5A43" stroke-width="1.4"/>
            <path d="M66 86H114V179C114 185 109 190 103 190H77C71 190 66 185 66 179V86Z" fill="${accentColor}" fill-opacity="0.24"/>
            <!-- Label -->
            <rect x="69" y="92" width="42" height="78" rx="4" fill="#F8F4ED" stroke="#C59B76" stroke-width="0.9"/>
            <image href="${originalWordmark}" x="71" y="97" width="38" height="30" preserveAspectRatio="xMidYMid meet" />
            <line x1="77" y1="133" x2="103" y2="133" stroke="#C59B76" stroke-width="0.7"/>
            <text x="90" y="146" text-anchor="middle" fill="#7C5A43" font-family="Cormorant Garamond, serif" font-style="italic" font-size="7.5">Pure Hydrosol</text>
            <text x="90" y="160" text-anchor="middle" fill="#A97954" font-family="Montserrat, sans-serif" font-size="4.5" letter-spacing="1">100 ML • NATURALS</text>
            <defs>
              <linearGradient id="mistCollar" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#8C6244"/>
                <stop offset="50%" stop-color="#DFB892"/>
                <stop offset="100%" stop-color="#7C5A43"/>
              </linearGradient>
            </defs>
          </svg>
        `;
      }
    }

