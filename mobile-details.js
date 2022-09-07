const projectBtn = document.querySelector('.project-btn');
const modalBg = document.querySelector('.modal-bg');

// projectBtn.addEventListener('click', () => {
//     modalBg.style.diplay = 'block';
// });

// projectBtn.addEventListener('click', () => {
//     modalBg.classList.add('.modal');
// })

// document.querySelector('.project-btn').addEventListener('click', () => {
//     modalBg.style.display = 'block';
// })

projectBtn.addEventListener('click', () => {
    modalBg.classList.add('bg-active');
})