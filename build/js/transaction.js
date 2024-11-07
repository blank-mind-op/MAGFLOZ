  document.addEventListener("DOMContentLoaded", function () {
    const depenseTab = document.getElementById("depense-tab");
    const revenuTab = document.getElementById("revenu-tab");
    const dateTabs = ["jour", "semaine", "mois", "annee", "periode"];
    const sections = {
      "depense": document.getElementById("depense-content"),
      "revenu": document.getElementById("revenu-content")
    };

    // Fonction pour gérer l'affichage
    function showContent(category, period) {
      Object.values(sections).forEach(section => section.classList.add("hidden"));
      sections[category].classList.remove("hidden");

      // Masque tout le contenu des périodes et affiche seulement le contenu sélectionné
      dateTabs.forEach(date => {
        const element = document.getElementById(`${category}-${date}`);
        if (element) {
          if (date === period) {
            element.classList.remove("hidden");
          } else {
            element.classList.add("hidden");
          }
        }
      });
    }

    // Gestionnaire d'événement pour les onglets de catégories
    depenseTab.addEventListener("click", function () {
      depenseTab.setAttribute("aria-selected", "true");
      revenuTab.setAttribute("aria-selected", "false");
      showContent("depense", selectedDate);
    });

    revenuTab.addEventListener("click", function () {
      revenuTab.setAttribute("aria-selected", "true");
      depenseTab.setAttribute("aria-selected", "false");
      showContent("revenu", selectedDate);
    });

    // Gestionnaire d'événements pour les onglets de dates
    let selectedDate = "jour";
    dateTabs.forEach(date => {
      const dateTab = document.getElementById(`${date}-tab`);
      dateTab.addEventListener("click", function () {
        selectedDate = date;
        const selectedCategory = depenseTab.getAttribute("aria-selected") === "true" ? "depense" : "revenu";
        showContent(selectedCategory, selectedDate);
      });
    });

    // Affiche le contenu par défaut
    showContent("depense", "jour");
  });