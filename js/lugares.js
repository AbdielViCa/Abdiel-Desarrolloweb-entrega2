document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar-item a');
    const horizontalLinks = document.querySelectorAll('.horizontal-sidebar-item a');
  
    const contenidos = {
      morro: document.getElementById('contenido-1'),
      azapa: document.getElementById('contenido-2'),
      catedral: document.getElementById('contenido-3'),
      cuevas: document.getElementById('contenido-4'),
      museoazapa: document.getElementById('contenido-5'),
      lisera: document.getElementById('contenido-6'),
      chungara: document.getElementById('contenido-7'),
      exaduana: document.getElementById('contenido-8')
    };
  
    function mostrarContenido(lugar) {
      for (const key in contenidos) {
        contenidos[key].style.display = 'none';
      }
      if (contenidos[lugar]) {
        contenidos[lugar].style.display = 'block';
      }
    }
  
    function activarYMostrar(link) {
      const lugar = link.dataset.lugar;
  
      link.parentElement.classList.add('active');
  
      mostrarContenido(lugar);
  
      const parentContainer = link.closest('.sidebar-container') || link.closest('.horizontal-sidebar-container');
      if (parentContainer) {
        link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  
    if (sidebarLinks.length > 0 && horizontalLinks.length > 0) {
      activarYMostrar(sidebarLinks[0]);
      activarYMostrar(horizontalLinks[0]);
    }
  
    sidebarLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        activarYMostrar(link);
        sidebarLinks.forEach(otherLink => {
          if (otherLink !== link) {
            otherLink.parentElement.classList.remove('active');
          }
        });
      });
    });
  
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
  
    const nextPlaceBtn = document.getElementById('next-place-btn');
    if (nextPlaceBtn) {
      nextPlaceBtn.addEventListener('click', (event) => {
        event.preventDefault();
        selectNextItem(sidebarLinks);
      });
    }
  
    const nextHButton = document.getElementById('nextHbutton');
    if (nextHButton) {
      nextHButton.addEventListener('click', (event) => {
        event.preventDefault();
        selectNextItem(horizontalLinks);
      });
    }
  
    const prevPlaceBtn = document.getElementById('prev-place-btn');
    if (prevPlaceBtn) {
      prevPlaceBtn.addEventListener('click', (event) => {
        event.preventDefault();
        selectPreviousItem(sidebarLinks);
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
      const currentActive = document.querySelector('.sidebar-item.active a') || document.querySelector('.horizontal-sidebar-item.active a');
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
      const currentActive = document.querySelector('.sidebar-item.active a') || document.querySelector('.horizontal-sidebar-item.active a');
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
  