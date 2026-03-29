const toggle = document.querySelector('.toggle')
const button = document.querySelector('.cakeRecipeBtn');

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light'
    }
})

const handleSubmit = (event) => {
    event.preventDefault();

    window.location = 'cakeindex.html';
}