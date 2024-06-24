
const toggleBtn = document.querySelector('.toggle_btn');
const dropdown = document.querySelector('.drop_down');

toggleBtn.onclick = function () {
    dropdown.classList.toggle('open');
}


const toggleButtons = document.querySelectorAll('#toggleButton');
const container = document.getElementById('container');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        container.classList.toggle('right-panel-active');
        toggleButtons.forEach(btn => {
            btn.textContent = btn.textContent === 'Sign Up' ? 'Sign In' : 'Sign Up';
        });
    });
});

