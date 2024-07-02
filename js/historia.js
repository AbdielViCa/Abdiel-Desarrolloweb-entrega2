document.addEventListener('DOMContentLoaded', function() {
    const horizontalLinks = document.querySelectorAll('.horizontal-sidebar-Hitem a');
  
    const contenidos = {
        'Antes de 10,000 a.C.': document.getElementById('contenido-1'),
        '7000 a.C. - 1500 a.C.': document.getElementById('contenido-2'),
        'Siglo XV - 1535 d. C.': document.getElementById('contenido-3'),
        '1535 - 1821': document.getElementById('contenido-4'),
        '1879 - 1884': document.getElementById('contenido-5'),
        '1884 - Actualidad': document.getElementById('contenido-6')
    };
  
    function mostrarContenido(periodo) {
        for (const key in contenidos) {
            if (contenidos[key]) {
                contenidos[key].style.display = 'none';
            }
        }
        if (contenidos[periodo]) {
            contenidos[periodo].style.display = 'block';
        }
    }
  
    function activarYMostrar(link) {
        const periodo = link.querySelector('p').textContent;
  
        link.parentElement.classList.add('active');
  
        mostrarContenido(periodo);
  
        link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  
    if (horizontalLinks.length > 0) {
        activarYMostrar(horizontalLinks[0]);
    }
  
    horizontalLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            activarYMostrar(link);
            horizontalLinks.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.parentElement.classList.remove('active');
                }
            });
        });
    });
  
    const nextHButton = document.getElementById('nextHbutton');
    if (nextHButton) {
        nextHButton.addEventListener('click', (event) => {
            event.preventDefault();
            selectNextItem(horizontalLinks);
        });
    }
  
    const prevHButton = document.getElementById('prevHbutton');
    if (prevHButton) {
        prevHButton.addEventListener('click', (event) => {
            event.preventDefault();
            selectPreviousItem(horizontalLinks);
        });
    }
  
    function selectNextItem(links) {
        const currentActive = document.querySelector('.horizontal-sidebar-Hitem.active a');
        let currentIndex = Array.from(links).indexOf(currentActive);
  
        if (currentActive) {
            currentActive.parentElement.classList.remove('active');
        }
  
        currentIndex = (currentIndex + 1) % links.length;
        const nextLink = links[currentIndex];
        activarYMostrar(nextLink);
    }
  
    function selectPreviousItem(links) {
        const currentActive = document.querySelector('.horizontal-sidebar-Hitem.active a');
        let currentIndex = Array.from(links).indexOf(currentActive);
  
        if (currentActive) {
            currentActive.parentElement.classList.remove('active');
        }
  
        currentIndex = (currentIndex - 1 + links.length) % links.length;
        const prevLink = links[currentIndex];
        activarYMostrar(prevLink);
    }
});