    // =========================================================================
    // 1. PRODUCT CATALOG DATA (BENU'S NATURALS)
    // =========================================================================
    const originalWordmark = "assets/brand-2.png";
    const products = [
      {
        id: 1,
        name: "Saffron & Rosehip Luminescence Elixir",
        category: "Facial Elixirs",
        subtitle: "Kashmiri Mongra Saffron • Cold-Pressed Rosehip",
        price: 2850,
        size: "30 ml",
        rating: 4.9,
        reviews: 142,
        badge: "Bestseller",
        vesselType: "dropper",
        accentColor: "#C59B76",
        description: "A golden, fast-absorbing facial nectar infused for 45 days with hand-harvested Kashmiri saffron threads and organic Andean rosehip oil to visibly brighten and even complexion.",
        ingredients: "Rosa Canina (Organic Rosehip) Seed Oil*, Crocus Sativus (Kashmiri Saffron) Stigma*, Simmondsia Chinensis (Jojoba) Oil*, Punica Granatum (Pomegranate) Seed Oil*, Tocopherol (Natural Vitamin E). *Certified Organic",
        ritual: "Warm 3–4 drops between fingertips and press gently onto damp skin morning and evening."
      },
      {
        id: 2,
        name: "Sandalwood & Neroli Velvet Moisture Cream",
        category: "Botanical Creams",
        subtitle: "Mysore Sandalwood • Moroccan Neroli Blossom",
        price: 2450,
        size: "50 g",
        rating: 4.9,
        reviews: 98,
        badge: "Cult Favorite",
        vesselType: "jar",
        accentColor: "#A97954",
        description: "A cloud-like whipped botanical soufflé that drenches thirsty skin in lasting hydration while calming redness with pure steam-distilled sandalwood and neroli.",
        ingredients: "Aloe Barbadensis Leaf Juice*, Santalum Album (Mysore Sandalwood) Hydrosol*, Citrus Aurantium (Neroli) Flower Oil*, Butyrospermum Parkii (Shea) Butter*, Squalane (Olive-Derived), Vegetable Glycerin*.",
        ritual: "Massage a pearl-sized amount over face and neck after your elixir to seal in moisture."
      },
      {
        id: 3,
        name: "Wild Turmeric & Raw Honey Purifying Nectar",
        category: "Herbal Cleansers",
        subtitle: "Kasturi Manjal • Forest Wildflower Honey",
        price: 1650,
        size: "100 ml",
        rating: 4.8,
        reviews: 116,
        badge: "Pure Harvest",
        vesselType: "pump",
        accentColor: "#B88655",
        description: "A soap-free, pH-balanced silky cleanser formulated with non-staining wild Kasturi turmeric and raw forest honey to dissolve impurities without stripping natural lipids.",
        ingredients: "Mel (Raw Forest Honey)*, Curcuma Aromatica (Wild Kasturi Turmeric) Root Extract*, Coco-Glucoside (Coconut Derived), Matricaria Recutita (Chamomile) Flower Water*, Calendula Officinalis*.",
        ritual: "Massage onto dry or damp skin for 60 seconds, then rinse with lukewarm water."
      },
      {
        id: 4,
        name: "Bakuchiol & Cold-Pressed Moringa Renewal Oil",
        category: "Sacred Oils",
        subtitle: "1% Pure Babchi Bio-Retinol • Himalayan Moringa",
        price: 3150,
        size: "30 ml",
        rating: 5.0,
        reviews: 84,
        badge: "Age-Defying",
        vesselType: "dropper",
        accentColor: "#8E6445",
        description: "Clinically revered plant-derived Bakuchiol suspended in nutrient-dense Himalayan Moringa oil to refine fine lines, boost firmness, and restore youthful bounce gently.",
        ingredients: "Moringa Oleifera Seed Oil*, Bakuchiol (1% Psoralea Corylifolia Extract), Hippophae Rhamnoides (Sea Buckthorn) Berry Oil*, Boswellia Serrata (Frankincense) Resin Oil*.",
        ritual: "Apply 4 drops nightly as the final step of your evening skincare ritual."
      },
      {
        id: 5,
        name: "Damask Rose & Vetiver Cooling Hydrosol Mist",
        category: "Herbal Cleansers",
        subtitle: "Kannauj Damask Rose • Wild Earth Vetiver",
        price: 1450,
        size: "100 ml",
        rating: 4.8,
        reviews: 163,
        badge: "Refreshing",
        vesselType: "mist",
        accentColor: "#CFA382",
        description: "First-distillation steam hydrosol from heritage Kannauj roses paired with cooling vetiver roots to tone, balance skin pH, and awaken dull skin throughout the day.",
        ingredients: "100% Pure Steam-Distilled Rosa Damascena (Kannauj Rose) Flower Water*, Vetiveria Zizanoides (Vetiver) Root Distillate*. Zero alcohol or added fragrance.",
        ritual: "Mist generously over cleansed skin before applying facial oils or anytime for instant calm."
      },
      {
        id: 6,
        name: "Shea & Kokum Butter Restorative Night Balm",
        category: "Botanical Creams",
        subtitle: "Western Ghats Kokum • Unrefined Ivory Shea",
        price: 2650,
        size: "50 g",
        rating: 4.9,
        reviews: 77,
        badge: "Overnight Repair",
        vesselType: "jar",
        accentColor: "#7C5A43",
        description: "A rich, cocooning overnight recovery balm that melts upon contact to repair compromised skin barriers and awaken velvety, dewy skin by morning.",
        ingredients: "Garcinia Indica (Kokum) Seed Butter*, Butyrospermum Parkii (Unrefined Shea) Butter*, Prunus Amygdalus Dulcis (Sweet Almond) Oil*, Jasminum Grandiflorum (Jasmine) Wax*.",
        ritual: "Warm a small scoop between palms until translucent and press onto dry areas before sleep."
      }
    ];

