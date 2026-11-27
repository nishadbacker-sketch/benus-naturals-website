    // =========================================================================
    // 6. QUICK VIEW MODAL
    // =========================================================================
    function openQuickView(productId) {
      const product = products.find(p => p.id === productId);
      if (!product) return;

      const modal = document.getElementById("quickViewModal");
      const content = document.getElementById("quickViewContent");

      content.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div class="md:col-span-5 bg-gradient-to-b from-blush/60 to-cream rounded-2xl p-6 border border-umber/10 text-center">
            <span class="inline-block px-3 py-1 rounded-full bg-ivory text-[10px] tracking-[0.2em] uppercase text-umber mb-2">${product.badge}</span>
            ${renderVesselIllustration(product)}
            <p class="text-[11px] uppercase tracking-[0.2em] text-umber/70 mt-3">${product.size}${product.vesselType === "shampoo-bar" ? " • Illustrated Shampoo Bar Concept" : product.vesselType === "soap" ? " • Illustrated Soap Concept" : product.vesselType === "millet" ? " • Illustrative Millet Pack" : " • UV-Protected Glass"}</p>
          </div>
          <div class="md:col-span-7">
            <span class="text-[11px] uppercase tracking-[0.22em] text-bronze font-semibold">${product.category}</span>
            <h3 class="font-serif text-3xl text-umber mt-1 leading-tight">${product.name}</h3>
            <p class="text-xs text-umber/75 mt-1">${product.subtitle}</p>
            
            <div class="mt-4 flex items-center gap-4">
              <span class="font-serif text-2xl font-semibold text-umber">${product.priceIndicative ? "Indicative " : ""}₹${product.price.toLocaleString('en-IN')}</span>
              <span class="text-xs text-bronze">${product.rating == null ? "New concept • Reviews not yet available" : `★ ${product.rating} (${product.reviews} Verified Rituals)`}</span>
            </div>

            <p class="mt-4 text-xs sm:text-sm text-umber/85 leading-relaxed font-light">${product.description}</p>

            <div class="mt-5 p-4 rounded-2xl bg-blush/45 border border-umber/10">
              <h4 class="text-[10px] uppercase tracking-[0.22em] text-umber font-semibold">${product.vesselType === "shampoo-bar" ? "Proposed Hair-Care Ingredients — Details Pending" : product.vesselType === "millet" ? "Proposed Ingredients — Final Details Pending" : product.vesselType === "soap" ? "Proposed Botanicals — Final Ingredients Pending" : "Full Botanical Ingredient List"}</h4>
              <p class="text-xs text-umber/80 mt-1.5 leading-relaxed">${product.ingredients}</p>
            </div>

            <div class="mt-4">
              <h4 class="text-[10px] uppercase tracking-[0.22em] text-umber font-semibold">${product.vesselType === "millet" ? "Preparation Suggestions" : "Application Ritual"}</h4>
              <p class="text-xs text-umber/80 mt-1 leading-relaxed italic font-serif text-base">${product.ritual}</p>
            </div>

            <div class="mt-6 flex flex-col sm:flex-row gap-3">
              <button onclick="addToBag(${product.id}); closeQuickView();" class="flex-1 py-3.5 px-6 rounded-full bg-umber text-ivory text-xs tracking-[0.2em] uppercase font-medium hover:bg-espresso transition shadow-soft">
                ${product.priceIndicative ? "Enquire / Add to Bag" : `Add to Bag — ₹${product.price.toLocaleString('en-IN')}`}
              </button>
              <button onclick="toggleWishlist(${product.id})" class="py-3.5 px-5 rounded-full border border-umber/25 text-umber text-xs tracking-[0.18em] uppercase hover:bg-blush transition">
                Save
              </button>
            </div>
          </div>
        </div>
      `;

      modal.classList.remove("hidden");
      modal.classList.add("flex");
    }

    function closeQuickView() {
      const modal = document.getElementById("quickViewModal");
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
    document.getElementById("quickViewBackdrop").addEventListener("click", closeQuickView);

