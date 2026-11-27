    // =========================================================================
    // 7. 3-STEP SKIN RITUAL CONSULTATION LOGIC
    // =========================================================================
    function goToQuizStep(step) {
      document.querySelectorAll(".quiz-step").forEach(el => el.classList.add("hidden"));
      document.getElementById(`quizStep${step}`).classList.remove("hidden");

      [1, 2, 3].forEach(i => {
        const dot = document.getElementById(`stepDot${i}`);
        if (i <= step) {
          dot.classList.remove("bg-cream", "text-umber", "border", "border-umber/20");
          dot.classList.add("bg-umber", "text-ivory");
        } else {
          dot.classList.add("bg-cream", "text-umber", "border", "border-umber/20");
          dot.classList.remove("bg-umber", "text-ivory");
        }
      });
    }

    function selectSkinType(type) {
      selectedSkinType = type;
      goToQuizStep(2);
    }

    function selectSkinConcern(concern) {
      selectedSkinConcern = concern;
      generateRitualRecommendation();
      goToQuizStep(3);
    }

    function generateRitualRecommendation() {
      document.getElementById("ritualSummaryTag").textContent = `${selectedSkinType} • ${selectedSkinConcern}`;

      // Tailor 3-step regimen: Step 1 Cleanse/Tone, Step 2 Treat/Elixir, Step 3 Seal/Moisture
      if (selectedSkinConcern === "Radiance & Even Tone") {
        currentRecommendedIds = [3, 1, 2];
      } else if (selectedSkinConcern === "Deep Barrier Repair") {
        currentRecommendedIds = [5, 1, 6];
      } else {
        currentRecommendedIds = [5, 4, 2];
      }

      const stepsLabels = ["Step I • Purify & Prep", "Step II • Potent Elixir", "Step III • Seal & Nourish"];
      const grid = document.getElementById("recommendedRitualGrid");

      grid.innerHTML = currentRecommendedIds.map((id, idx) => {
        const p = products.find(item => item.id === id);
        return `
          <div class="bg-cream/70 rounded-2xl p-5 border border-umber/15 text-center flex flex-col justify-between">
            <div>
              <span class="text-[10px] uppercase tracking-[0.2em] text-bronze font-semibold">${stepsLabels[idx]}</span>
              <div class="my-3 transform scale-90">
                ${renderVesselIllustration(p)}
              </div>
              <h4 class="font-serif text-xl text-umber leading-snug">${p.name}</h4>
              <p class="text-[11px] text-umber/70 mt-1">${p.subtitle}</p>
            </div>
            <p class="font-serif text-lg font-semibold text-umber mt-4">₹${p.price.toLocaleString('en-IN')}</p>
          </div>
        `;
      }).join("");
    }

    function addFullRitualToBag() {
      currentRecommendedIds.forEach(id => {
        const existing = cart.find(item => item.id === id);
        if (existing) {
          existing.qty += 1;
        } else {
          cart.push({ id, qty: 1 });
        }
      });
      updateCartUI();
      openCartDrawer();
      showToast("Complete 3-Step Ritual Added to Bag");
    }

