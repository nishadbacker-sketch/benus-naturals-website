    // =========================================================================
    // 8. SHOPPING BAG, WISHLIST & CHECKOUT SIMULATION
    // =========================================================================
    function addToBag(productId) {
      const product = products.find(item => item.id === productId);
      if (!product) return;
      const existing = cart.find(item => item.id === productId);
      if (existing) {
        if (existing.qty >= MAX_ITEM_QTY) { showToast('Maximum quantity reached'); return; }
        existing.qty += 1;
      } else {
        cart.push({ id: productId, qty: 1 });
      }
      updateCartUI();
      const prod = products.find(p => p.id === productId);
      showToast(`${prod.name} added to bag`);
    }

    function updateQty(productId, delta) {
      const idx = cart.findIndex(item => item.id === productId);
      if (idx === -1) return;
      if (!Number.isInteger(delta)) return;
      cart[idx].qty = Math.min(MAX_ITEM_QTY, cart[idx].qty + delta);
      if (cart[idx].qty <= 0) {
        cart.splice(idx, 1);
      }
      updateCartUI();
    }

    function applyPromoCode() {
      const code = document.getElementById("promoInput").value.trim().toUpperCase();
      const msg = document.getElementById("promoMessage");
      if (code === "BENU15") {
        promoDiscount = 0.15;
        msg.textContent = "Code BENU15 applied — 15% Botanical Privilege unlocked.";
        msg.classList.remove("hidden");
        updateCartUI();
      } else {
        promoDiscount = 0;
        msg.textContent = code ? "Code not recognised. Try BENU15." : "Enter a promo code to apply it.";
        msg.classList.remove("hidden");
        updateCartUI();
      }
    }

    function updateCartUI() {
      const container = document.getElementById("cartItemsContainer");
      const badge = document.getElementById("cartCountBadge");
      const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
      badge.textContent = totalItems;

      if (cart.length === 0) {
        container.innerHTML = `
          <div class="text-center py-16">
            <p class="font-serif text-2xl text-umber">Your apothecary bag is empty.</p>
            <p class="text-xs text-umber/70 mt-2">Explore our cold-pressed botanical formulations to begin your ritual.</p>
            <button onclick="closeCartDrawer()" class="mt-6 px-6 py-3 rounded-full bg-umber text-ivory text-xs tracking-[0.2em] uppercase">Explore Collection</button>
          </div>
        `;
      } else {
        container.innerHTML = cart.map(item => {
          const p = products.find(prod => prod.id === item.id);
          return `
            <div class="flex items-center gap-4 bg-cream/60 p-3.5 rounded-2xl border border-umber/10">
              <div class="w-16 h-20 bg-blush/50 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                <span class="font-serif italic text-2xl text-umber">B’N</span>
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="font-serif text-lg text-umber leading-tight truncate">${p.name}</h4>
                <p class="text-[11px] text-umber/65 mt-0.5">${p.size} • ₹${p.price.toLocaleString('en-IN')}</p>
                <div class="mt-2.5 flex items-center gap-3">
                  <div class="inline-flex items-center border border-umber/20 rounded-full bg-ivory">
                    <button onclick="updateQty(${p.id}, -1)" class="w-7 h-7 flex items-center justify-center text-umber hover:bg-blush rounded-l-full">−</button>
                    <span class="px-2.5 text-xs font-medium text-umber">${item.qty}</span>
                    <button onclick="updateQty(${p.id}, 1)" class="w-7 h-7 flex items-center justify-center text-umber hover:bg-blush rounded-r-full">+</button>
                  </div>
                </div>
              </div>
              <div class="text-right">
                <span class="font-serif text-base font-semibold text-umber">₹${(p.price * item.qty).toLocaleString('en-IN')}</span>
              </div>
            </div>
          `;
        }).join("");
      }

      const { subtotal, discount: discountAmount, total: finalTotal } = cartTotals();

      document.getElementById("cartSubtotal").textContent = `₹${subtotal.toLocaleString('en-IN')}`;
      document.getElementById("cartTotal").textContent = `₹${finalTotal.toLocaleString('en-IN')}`;
      document.getElementById("checkoutBtn").disabled = cart.length === 0;
      persistShoppingState();

      const discountRow = document.getElementById("discountRow");
      if (promoDiscount > 0 && subtotal > 0) {
        discountRow.classList.remove("hidden");
        document.getElementById("cartDiscount").textContent = `-₹${discountAmount.toLocaleString('en-IN')}`;
      } else {
        discountRow.classList.add("hidden");
      }

      // Update Complimentary Gift Bar (Threshold ₹4,500)
      const threshold = 4500;
      const pct = Math.min(100, Math.round((subtotal / threshold) * 100));
      document.getElementById("giftProgressBar").style.width = `${pct}%`;
      const giftText = document.getElementById("giftThresholdText");
      if (subtotal >= threshold) {
        giftText.innerHTML = `✦ Complimentary <strong>Naturals Elixir Sample Trio</strong> unlocked!`;
      } else {
        const diff = threshold - subtotal;
        giftText.innerHTML = `Add <strong>₹${diff.toLocaleString('en-IN')}</strong> more for a complimentary Naturals Sample Trio`;
      }
    }

    const checkoutModal = document.getElementById("checkoutModal");
    function openCheckout() {
      if (cart.length === 0) { showToast("Your bag is currently empty"); return; }
      const t = cartTotals();
      document.getElementById("checkoutSummary").textContent =
        `Items: ${cart.reduce((n, item) => n + item.qty, 0)} • Estimated product total: ₹${t.total.toLocaleString('en-IN')}${promoDiscount ? ' (BENU15 applied)' : ''}`;
      closeCartDrawer();
      checkoutModal.classList.remove("hidden");
      document.getElementById("orderName").focus();
    }
    function closeCheckout() { checkoutModal.classList.add("hidden"); }
    document.getElementById("closeCheckoutBtn").addEventListener("click", closeCheckout);
    document.getElementById("checkoutBackdrop").addEventListener("click", closeCheckout);
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && !checkoutModal.classList.contains("hidden")) closeCheckout();
    });
    document.getElementById("checkoutForm").addEventListener("submit", e => {
      e.preventDefault();
      const form = e.currentTarget;
      if (!form.reportValidity() || cart.length === 0) return;
      const fields = ['orderName','orderPhone','orderAddress','orderCity','orderPin','orderNotes'];
      const [name, phone, address, city, pin, notes] = fields.map(id => document.getElementById(id).value.trim());
      const phoneDigits = phone.replace(/\D/g, '');
      if (!(phoneDigits.length === 10 || (phoneDigits.length === 12 && phoneDigits.startsWith('91')))) {
        document.getElementById('orderPhone').setCustomValidity('Enter a valid 10-digit Indian mobile number');
        document.getElementById('orderPhone').reportValidity();
        return;
      }
      const t = cartTotals();
      const itemLines = cart.map(item => {
        const p = products.find(product => product.id === item.id);
        return `• ${p.name} (${p.size}) x ${item.qty} = ₹${(p.price * item.qty).toLocaleString('en-IN')}`;
      });
      const message = [
        "Hello BENU'S NATURALS, I would like to enquire about this order:",
        '', ...itemLines, '',
        `Subtotal: ₹${t.subtotal.toLocaleString('en-IN')}`,
        ...(promoDiscount ? [`Promo BENU15 (15%): -₹${t.discount.toLocaleString('en-IN')}`] : []),
        `Estimated product total: ₹${t.total.toLocaleString('en-IN')}`,
        '', `Name: ${name}`, `Phone: ${phone}`, `Address: ${address}`, `City: ${city}`, `PIN: ${pin}`,
        ...(notes ? [`Notes: ${notes}`] : []), '',
        'Please confirm availability, any delivery charges, final payable amount and payment instructions. This is an enquiry, not a confirmed or paid order.'
      ].join('\n');
      const url = `https://wa.me/919656604002?text=${encodeURIComponent(message)}`;
      window.location.href = url;
    });
    document.getElementById('orderPhone').addEventListener('input', e => e.target.setCustomValidity(''));

    // Wishlist Functions
    function toggleWishlist(productId) {
      const idx = wishlist.indexOf(productId);
      const prod = products.find(p => p.id === productId);
      if (idx === -1) {
        wishlist.push(productId);
        showToast(`Saved ${prod.name} to Wishlist`);
      } else {
        wishlist.splice(idx, 1);
        showToast(`Removed from Wishlist`);
      }
      updateWishlistUI();
      renderProducts();
    }

    function updateWishlistUI() {
      const badge = document.getElementById("wishlistBadge");
      const container = document.getElementById("wishlistItemsContainer");
      if (wishlist.length > 0) {
        badge.textContent = wishlist.length;
        badge.classList.remove("hidden");
      } else {
        badge.classList.add("hidden");
      }

      persistShoppingState();
      if (wishlist.length === 0) {
        container.innerHTML = `<p class="text-center py-12 font-serif text-xl text-umber/75">No saved botanicals yet.</p>`;
      } else {
        container.innerHTML = wishlist.map(id => {
          const p = products.find(item => item.id === id);
          return `
            <div class="flex items-center justify-between gap-3 bg-cream/60 p-4 rounded-2xl border border-umber/10">
              <div>
                <h4 class="font-serif text-lg text-umber">${p.name}</h4>
                <p class="text-xs text-umber/70">₹${p.price.toLocaleString('en-IN')} • ${p.size}</p>
              </div>
              <div class="flex items-center gap-2">
                <button onclick="addToBag(${p.id}); toggleWishlist(${p.id}); closeWishlistDrawer(); openCartDrawer();" class="px-3.5 py-2 rounded-full bg-umber text-ivory text-[10px] uppercase tracking-widest">Move to Bag</button>
                <button onclick="toggleWishlist(${p.id})" class="p-1.5 text-umber/60 hover:text-umber">✕</button>
              </div>
            </div>
          `;
        }).join("");
      }
    }

    // Drawer Controls
    const cartDrawer = document.getElementById("cartDrawer");
    const wishlistDrawer = document.getElementById("wishlistDrawer");
    const mobileNavDrawer = document.getElementById("mobileNavDrawer");

    function openCartDrawer() { cartDrawer.classList.remove("hidden"); }
    function closeCartDrawer() { cartDrawer.classList.add("hidden"); }
    function openWishlistDrawer() { wishlistDrawer.classList.remove("hidden"); }
    function closeWishlistDrawer() { wishlistDrawer.classList.add("hidden"); }

    document.getElementById("cartBtn").addEventListener("click", openCartDrawer);
    document.getElementById("closeCartBtn").addEventListener("click", closeCartDrawer);
    document.getElementById("cartBackdrop").addEventListener("click", closeCartDrawer);

    document.getElementById("wishlistBtn").addEventListener("click", openWishlistDrawer);
    document.getElementById("closeWishlistBtn").addEventListener("click", closeWishlistDrawer);
    document.getElementById("wishlistBackdrop").addEventListener("click", closeWishlistDrawer);

    document.getElementById("mobileMenuBtn").addEventListener("click", () => mobileNavDrawer.classList.remove("hidden"));
    document.getElementById("closeMobileNavBtn").addEventListener("click", () => mobileNavDrawer.classList.add("hidden"));
    document.getElementById("mobileNavBackdrop").addEventListener("click", () => mobileNavDrawer.classList.add("hidden"));
    document.querySelectorAll(".mobile-nav-link").forEach(link => {
      link.addEventListener("click", () => mobileNavDrawer.classList.add("hidden"));
    });

    // Newsletter Form
    document.getElementById("newsletterForm").addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("newsletterFeedback").classList.remove("hidden");
      e.target.reset();
    });

    // Toast Helper
    let toastTimeout;
    function showToast(message) {
      const toast = document.getElementById("toastNotification");
      document.getElementById("toastMessage").textContent = message;
      toast.classList.remove("opacity-0", "translate-y-4");
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.add("opacity-0", "translate-y-4");
      }, 2600);
    }

    // Initialize App
    restoreShoppingState();
    renderProducts();
    updateCartUI();
    updateWishlistUI();
  