export function projectsSectionFunctionality() {
  const projects = [
    {
      image: 'project.gif',
      title: 'Project Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Exercitationem quos ipsam porro est? Hic sapiente, ipsam ad doloretempora, rerum vitae iure numquam ea eveniet nobis',
      role: 'Designer',
      clientSatisfaction: '95%'
    },
    {
      image: 'project.gif',
      title: 'Project Title 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eligendi maxime harum quo doloribus iusto praesentium',
      role: 'Designer',
      clientSatisfaction: '95%'
    },
    {
      image: 'project.gif',
      title: 'Project Title 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eligendi maxime harum quo doloribus iusto praesentium',
      role: 'Designer',
      clientSatisfaction: '95%'
    }
  ];

  let projectHTML = '';

  projects.forEach(project => {
    projectHTML += `
      <div class="carousel-item">
        <div class="img-container">
          <img src="./images and icons/icons/${project.image}" alt="${project.title}" class="carousel-image" />
        </div>
        <div class="daftar-isi">
          <h2 class="carousel-title">${project.title}</h2>
          <p class="carousel-description">
            ${project.description}
          </p>
          <button class="btn">Lihat Project</button>
        </div>
      </div>
    `;
  });

  document.querySelector('.carousel').innerHTML = projectHTML;

  window.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    let currentIndex = 0;

    function updateCarousel() {
      const offset = -currentIndex * 100;
      carousel.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
      updateCarousel();
    });

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
      updateCarousel();
    });

    updateCarousel();
  });
}

// Call the function to initialize the carousel
projectsSectionFunctionality();
