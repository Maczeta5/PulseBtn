const searchInput = document.querySelector('.search-input')
const searchBtn = document.querySelector('.search-btn')


const showSearchBar = () => {
    searchInput.classList.toggle('active')
}

searchBtn.addEventListener('click', showSearchBar)