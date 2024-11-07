document.addEventListener("DOMContentLoaded", function () {
    // Récupérer les boutons de tab
    const jourTab = document.getElementById('jour-tab');
    const semaineTab = document.getElementById('semaine-tab');
    const moisTab = document.getElementById('mois-tab');
    const anneeTab = document.getElementById('annee-tab');
    const periodeTab = document.getElementById('periode-tab');

    // Fonction pour activer un onglet
    function setActiveTab(activeTab) {
        // Réinitialiser l'aria-selected et la classe de background
        jourTab.setAttribute('aria-selected', 'false');
        semaineTab.setAttribute('aria-selected', 'false');
        moisTab.setAttribute('aria-selected', 'false');
        anneeTab.setAttribute('aria-selected', 'false');
        periodeTab.setAttribute('aria-selected', 'false');

        jourTab.classList.remove('text-black', 'underline');
        semaineTab.classList.remove('text-black', 'underline');
        moisTab.classList.remove('text-black', 'underline');
        anneeTab.classList.remove('text-black', 'underline');
        periodeTab.classList.remove('text-black', 'underline');
        
        // Appliquer les styles et l'aria-selected en fonction de l'onglet actif
        if (activeTab === 'jour') {
            jourTab.setAttribute('aria-selected', 'true');
            jourTab.classList.add('text-black', 'underline');
        } else if (activeTab === 'semaine') {
            semaineTab.setAttribute('aria-selected', 'true');
            semaineTab.classList.add('text-black', 'underline');
        } else if (activeTab === 'mois') {
            moisTab.setAttribute('aria-selected', 'true');
            moisTab.classList.add('text-black', 'underline');
        } else if (activeTab === 'annee') {
            anneeTab.setAttribute('aria-selected', 'true');
            anneeTab.classList.add('text-black', 'underline');
        } else {
            periodeTab.setAttribute('aria-selected', 'true');
            periodeTab.classList.add('text-black', 'underline');
        }
    }

    // Initialiser l'onglet actif au chargement
    setActiveTab('jour');

    // Ajouter des écouteurs d'événements pour les clics
    jourTab.addEventListener('click', function () {
        setActiveTab('jour');
    });

    semaineTab.addEventListener('click', function () {
        setActiveTab('semaine');
    });

    moisTab.addEventListener('click', function () {
        setActiveTab('mois');
    });

    anneeTab.addEventListener('click', function () {
        setActiveTab('annee');
    });

    periodeTab.addEventListener('click', function () {
        setActiveTab('periode');
    });
});
