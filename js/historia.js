document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.horizontal-sidebar-Hitem a');
  
    const contenidos = {
      prehistoria: document.getElementById('periodo-1'),
      chinchorro: document.getElementById('periodo-2'),
      inca: document.getElementById('periodo-3'),
      conquista: document.getElementById('periodo-4'),
      toma: document.getElementById('periodo-5'),
      actual: document.getElementById('periodo-6')
    };
  
    function mostrarContenido(periodo) {
      for (const key in contenidos) {
        contenidos[key].style.display = 'none';
      }
      if (contenidos[periodo]) {
        contenidos[periodo].style.display = 'block';
      }
    }
  
    function activarYMostrar(link) {
      const periodo = link.dataset.periodo;
  
      link.parentElement.classList.add('active');
  
      mostrarContenido(periodo);
  
      const parentContainer = link.closest('.horizontal-sidebar-Hcontainer');
      if (parentContainer) {
        link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  
    if (sidebarLinks.length > 0) {
      activarYMostrar(sidebarLinks[0]);
    }
  
    sidebarLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        activarYMostrar(link);
        sidebarLinks.forEach(otherLink => {
          if (otherLink !== link) {
            otherLink.parentElement.classList.remove('active');
          }
        });
      });
    });
  
    const nextHistbutton = document.getElementById('nextHistbutton');
    if (nextHistbutton) {
      nextHistbutton.addEventListener('click', (event) => {
        event.preventDefault();
        selectNextItem(sidebarLinks);
      });
    }
  
    const prevHistbutton = document.getElementById('prevHistbutton');
    if (prevHistbutton) {
      prevHistbutton.addEventListener('click', (event) => {
        event.preventDefault();
        selectPreviousItem(sidebarLinks);
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
      nextLink.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
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
      prevLink.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  });
  