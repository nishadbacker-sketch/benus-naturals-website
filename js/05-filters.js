    // =========================================================================
    // 5. CATEGORY & SEARCH INTERACTIONS
    // =========================================================================
    document.querySelectorAll(".category-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".category-btn").forEach(b => {
          b.classList.remove("bg-umber", "text-ivory", "shadow-soft");
          b.classList.add("bg-cream", "text-umber");
        });
        btn.classList.remove("bg-cream", "text-umber");
        btn.classList.add("bg-umber", "text-ivory", "shadow-soft");
        activeCategory = btn.dataset.category;
        renderProducts();
      });
    });

    const searchToggleBtn = document.getElementById("searchToggleBtn");
    const searchBarContainer = document.getElementById("searchBarContainer");
    const productSearchInput = document.getElementById("productSearchInput");
    const clearSearchBtn = document.getElementById("clearSearchBtn");

    searchToggleBtn.addEventListener("click", () => {
      searchBarContainer.classList.toggle("hidden");
      if (!searchBarContainer.classList.contains("hidden")) {
        productSearchInput.focus();
      }
    });

    productSearchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });

    clearSearchBtn.addEventListener("click", () => {
      searchQuery = "";
      productSearchInput.value = "";
      renderProducts();
    });

    function resetFilters() {
      activeCategory = "All";
      searchQuery = "";
      productSearchInput.value = "";
      document.querySelectorAll(".category-btn").forEach(b => {
        b.classList.remove("bg-umber", "text-ivory", "shadow-soft");
        b.classList.add("bg-cream", "text-umber");
        if (b.dataset.category === "All") {
          b.classList.remove("bg-cream", "text-umber");
          b.classList.add("bg-umber", "text-ivory", "shadow-soft");
        }
      });
      renderProducts();
    }

