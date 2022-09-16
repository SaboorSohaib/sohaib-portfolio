const data = [
  {
    projectId: 1,
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: 'assest/Snapshoot Portfolio.png',
    githubIcon: 'assest/Vector.png',
    liveIcon: 'assest/icon-Export.png',
    technologiesMobile: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologiesDesktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: 'https://github.com/SaboorSohaib/Protfilo',
    liveLink: 'https://saboorsohaib.github.io/Protfilo/',
  },

  {
    projectId: 2,
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: 'assest/Snapshoot Portfolio.png',
    githubIcon: 'assest/Vector.png',
    liveIcon: 'assest/icon-Export.png',
    technologiesMobile: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologiesDesktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: 'https://github.com/SaboorSohaib/Protfilo',
    liveLink: 'https://saboorsohaib.github.io/Protfilo/',
  },

  {
    projectId: 3,
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: 'assest/Snapshoot Portfolio.png',
    githubIcon: 'assest/Vector.png',
    liveIcon: 'assest/icon-Export.png',
    technologiesMobile: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologiesDesktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: 'https://github.com/SaboorSohaib/Protfilo',
    liveLink: 'https://saboorsohaib.github.io/Protfilo/',
  },

  {
    projectId: 4,
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: 'assest/Snapshoot Portfolio.png',
    githubIcon: 'assest/Vector.png',
    liveIcon: 'assest/icon-Export.png',
    technologiesMobile: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologiesDesktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: 'https://github.com/SaboorSohaib/Protfilo',
    liveLink: 'https://saboorsohaib.github.io/Protfilo/',
  },

  {
    projectId: 5,
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: 'assest/Snapshoot Portfolio.png',
    githubIcon: 'assest/Vector.png',
    liveIcon: 'assest/icon-Export.png',
    technologiesMobile: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologiesDesktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: 'https://github.com/SaboorSohaib/Protfilo',
    liveLink: 'https://saboorsohaib.github.io/Protfilo/',
  },

  {
    projectId: 6,
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: 'assest/Snapshoot Portfolio.png',
    githubIcon: 'assest/Vector.png',
    liveIcon: 'assest/icon-Export.png',
    technologiesMobile: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologiesDesktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: 'https://github.com/SaboorSohaib/Protfilo',
    liveLink: 'https://saboorsohaib.github.io/Protfilo/',
  },
];

const popModal = document.getElementById('popModal');

// eslint-disable-next-line no-unused-vars
const closeModal = () => {
  popModal.style.display = 'none';
};

window.onclick = function modal(event) {
  if (event.target === popModal) {
    popModal.style.display = 'none';
  }
};

// eslint-disable-next-line no-unused-vars
function projectsDetails(projectIdx) {
  const myProject = data[projectIdx];
  popModal.innerHTML = `<div class="pop-modal-content">
      <div class="pop-modal-header">
        <div class="bg-image">
        <span onclick="closeModal()" id="close-btn" class="close">&times;</span>
        <img class="desktop-img" src="${myProject.imageDesktop}"/>
        </div>
      </div>
      <div class="pop-modal-body">
        <div class="title-container">
          <h3 id="title">${myProject.name}</h3>
        </div>
        <ul class="tags" id="mytech">
        ${myProject.technologiesDesktop.map((ele) => `<li>${ele}</>`)}
        </ul>
        <ul class="tags" id="mobile-ul">
        ${myProject.technologiesMobile.map((ele) => `<li>${ele}</>`)}
        </ul>
        <p id="projectDescription">${myProject.projectDescription}</p>
        <div class="pop-modal-footer">
        <a href="${myProject.liveLink}" class"bt-tag">
          <button type="submit" class="show-project-btn">
          <span>See Live</span>
          <img src="${myProject.liveIcon}" alt="see the peoject live"/>
          </button>
        </a>
        <a href="${myProject.sourceLink}" class"bt-tag">
          <button type="submit" class="show-project-btn">
          <span>See Source</span>
          <img src="${myProject.githubIcon}" alt="see the source code"/>
          </button>
        </a>
      </div>
      </div>
      </div> 
      `;
  popModal.style.display = 'block';
}