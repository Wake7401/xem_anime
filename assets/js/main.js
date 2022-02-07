const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const showSearch = $('.search-box')
const searchResult = $('#search-result')
const overlay = $('.overlay')

showSearch.addEventListener('click', function() {
    searchResult.classList.add("activated");
    overlay.classList.add("activated");
})

overlay.addEventListener('click', function() {
    searchResult.classList.remove("activated");
    overlay.classList.remove("activated");
})