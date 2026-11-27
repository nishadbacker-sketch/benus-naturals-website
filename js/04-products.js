    // =========================================================================
    // 4. RENDER PRODUCT GRID & FILTERING
    // =========================================================================
    function renderProducts() {
      const grid = document.getElementById("productGrid");
      const emptyState = document.getElementById("emptySearchState");

      const filtered = products.filter(p => {
        const matchesCat = activeCategory === "All" || p.category === activeCategory;
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch = !q ||
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.ingredients.toLowerCase().includes(q);
        return matchesCat && matchesSearch;
      });

      if (filtered.length === 0) {
        grid.innerHTML = "";
        emptyState.classList.remove("hidden");
        return;
      }

      emptyState.classList.add("hidden");
      grid.innerHTML = filtered.map(product => {
        const isWished = wishlist.includes(product.id);
        return `
          <article class="group bg-cream/65 rounded-3xl border border-umber/12 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-luxury hover:border-bronze/40">
            <!-- Top Visual Stage -->
            <div class="relative bg-gradient-to-b from-blush/50 to-ivory/90 pt-7 pb-5 px-6">
              <div class="flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-ivory/90 border border-umber/15 text-[10px] tracking-[0.2em] uppercase text-umber font-medium">
                  ${product.badge}
                </span>
                <button onclick="toggleWishlist(${product.id})" aria-label="Save to Wishlist" class="p-2 rounded-full bg-ivory/90 hover:bg-blush text-umber transition shadow-xs">
                  <svg class="w-4 h-4 ${isWished ? 'fill-bronze text-bronze' : ''}" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </button>
              </div>

              <div onclick="openQuickView(${product.id})" class="cursor-pointer mt-2">
                ${renderVesselIllustration(product)}
              </div>

              <button onclick="openQuickView(${product.id})" class="w-full mt-2 py-2 rounded-full bg-ivory/80 hover:bg-ivory text-[11px] tracking-[0.2em] uppercase text-umber font-medium transition opacity-90 group-hover:opacity-100">
                Quick View & Ingredients
              </button>
            </div>

            <!-- Product Info -->
            <div class="p-6 flex-1 flex flex-col justify-between bg-ivory/75">
              <div>
                <div class="flex items-center justify-between text-[11px] text-bronze">
                  <span class="uppercase tracking-[0.18em] font-medium">${product.category}</span>
                  <span>★ ${product.rating} (${product.reviews})</span>
                </div>
                <h3 onclick="openQuickView(${product.id})" class="font-serif text-2xl text-umber mt-1.5 leading-snug cursor-pointer hover:text-bronze transition">
                  ${product.name}
                </h3>
                <p class="text-xs text-umber/70 mt-1.5 font-light">${product.subtitle}</p>
              </div>

              <div class="mt-6 pt-4 border-t border-umber/10 flex items-center justify-between gap-3">
                <div>
                  <span class="font-serif text-xl font-semibold text-umber">₹${product.price.toLocaleString('en-IN')}</span>
                  <span class="text-[11px] text-umber/60 ml-1">/ ${product.size}</span>
                </div>
                <button onclick="addToBag(${product.id})" class="px-5 py-2.5 rounded-full bg-umber text-ivory text-[11px] tracking-[0.18em] uppercase font-medium hover:bg-espresso transition shadow-xs">
                  Add to Bag
                </button>
              </div>
            </div>
          </article>
        `;
      }).join("");
    }

