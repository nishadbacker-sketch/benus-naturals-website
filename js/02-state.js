    // =========================================================================
    // 2. APPLICATION STATE
    // =========================================================================
    let activeCategory = "All";
    let searchQuery = "";
    let wishlist = [];
    let cart = [];
    let promoDiscount = 0;
    const BAG_STORAGE_KEY = 'benus_cart_v1';
    const WISH_STORAGE_KEY = 'benus_wishlist_v1';
    const MAX_ITEM_QTY = 99;
    function restoreShoppingState() {
      try {
        const savedCart = JSON.parse(localStorage.getItem(BAG_STORAGE_KEY) || '[]');
        const savedWishlist = JSON.parse(localStorage.getItem(WISH_STORAGE_KEY) || '[]');
        if (Array.isArray(savedCart)) {
          cart = savedCart.filter(item => item && products.some(p => p.id === item.id) && Number.isInteger(item.qty) && item.qty > 0)
            .map(item => ({ id: item.id, qty: Math.min(MAX_ITEM_QTY, item.qty) }));
          cart = [...new Map(cart.map(item => [item.id, item])).values()];
        }
        if (Array.isArray(savedWishlist)) wishlist = [...new Set(savedWishlist.filter(id => products.some(p => p.id === id)))];
      } catch (e) { cart = []; wishlist = []; }
    }
    function persistShoppingState() {
      try { localStorage.setItem(BAG_STORAGE_KEY, JSON.stringify(cart)); localStorage.setItem(WISH_STORAGE_KEY, JSON.stringify(wishlist)); } catch(e) { /* storage may be blocked */ }
    }
    function cartTotals() {
      const subtotal = cart.reduce((sum, item) => {
        const p = products.find(product => product.id === item.id);
        return sum + (p ? p.price * item.qty : 0);
      }, 0);
      const discount = Math.round(subtotal * promoDiscount);
      return { subtotal, discount, total: subtotal - discount };
    }
    let selectedSkinType = "";
    let selectedSkinConcern = "";
    let currentRecommendedIds = [3, 1, 2];

