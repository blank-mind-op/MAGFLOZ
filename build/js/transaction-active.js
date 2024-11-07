document.addEventListener("DOMContentLoaded", function () {
    // Récupérer les boutons de tab
    const depenseTab = document.getElementById('depense-tab');
    const revenuTab = document.getElementById('revenu-tab');

    // Fonction pour activer un onglet
    function setActiveTab(activeTab) {
        // Réinitialiser l'aria-selected et la classe de background
        depenseTab.setAttribute('aria-selected', 'false');
        revenuTab.setAttribute('aria-selected', 'false');
        depenseTab.classList.remove('underline');
        revenuTab.classList.remove('underline');
        
        // Appliquer les styles et l'aria-selected en fonction de l'onglet actif
        if (activeTab === 'depense') {
            depenseTab.setAttribute('aria-selected', 'true');
            depenseTab.classList.add('underline');
        } else {
            revenuTab.setAttribute('aria-selected', 'true');
            revenuTab.classList.add('underline');
        }
    }

    // Initialiser l'onglet actif au chargement
    setActiveTab('depense');

    // Ajouter des écouteurs d'événements pour les clics
    depenseTab.addEventListener('click', function () {
        setActiveTab('depense');
    });

    revenuTab.addEventListener('click', function () {
        setActiveTab('revenu');
    });
});
