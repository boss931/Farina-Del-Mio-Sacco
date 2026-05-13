// Aspettiamo che l'HTML sia caricato del tutto prima di eseguire il codice
document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. FILTRI DELLA GALLERIA ---
    const bottoniFiltro = document.querySelectorAll('.btn-filtro');
    const fotoItems = document.querySelectorAll('.foto-item');

    // Se i bottoni esistono in questa pagina, attiva i filtri
    if (bottoniFiltro.length > 0) {
        bottoniFiltro.forEach(bottone => {
            bottone.addEventListener('click', function() {
                
                // Togliamo il colore oro a tutti i bottoni e lo diamo a quello cliccato
                bottoniFiltro.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const categoriaScelta = this.getAttribute('data-filter');
                
                // Mostra/Nascondi le foto
                fotoItems.forEach(foto => {
                    if (categoriaScelta === 'tutte' || foto.getAttribute('data-category') === categoriaScelta) {
                        foto.classList.remove('nascosto');
                    } else {
                        foto.classList.add('nascosto');
                    }
                });
            });
        });
    }

    // --- 2. MODALE SCHERMO INTERO (LIGHTBOX) ---
    const modal = document.getElementById('modal-galleria');
    const imgModale = document.getElementById('img-modale');
    const chiudiBtn = document.querySelector('.chiudi-modal');

    // Controlliamo che la "scatola nera" esista in questa pagina prima di attivarla
    if (modal) {
        // Quando clicchi su una foto della griglia...
        fotoItems.forEach(item => {
            item.addEventListener('click', function() {
                const imgCliccata = this.querySelector('img');
                imgModale.src = imgCliccata.src; // Copia l'immagine nel modale
                modal.style.display = 'flex';    // Fai apparire lo schermo intero
            });
        });

        // Quando clicchi sulla 'X' chiudi il modale
        chiudiBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        // Chiudi il modale anche se clicchi fuori dall'immagine (sullo sfondo scuro)
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
});
// Effetto Shrink Header allo scorrimento
window.onscroll = function() {
    const header = document.querySelector("header");
    
    // Se scendiamo più di 50px dall'alto...
    if (window.scrollY > 50) {
        header.classList.add("scrolled"); // Aggiungi la classe per rimpicciolire
    } else {
        header.classList.remove("scrolled"); // Togli la classe quando torni in cima
    }
};