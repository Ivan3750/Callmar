const bubles = document.querySelectorAll('.main__decoration');
let x = 0;

window.addEventListener("scroll", ()=>{
    if(screen.availWidth > 1100){
        bubles.forEach(element => {
            element.style.transform = `translateY(-${scrollY/2}px)`
        });

    }

})



// SEARCH

let searchInput = document.querySelector('#search')
let btnSearch = document.querySelector(".search-btn")




let searchList = [
    {name: 'video', content: "video"},
    {name:'paid',content: "paid"},
    {name: 'free', content: "free"},
    {name:'price',content: "price"},
    {name:'instruction',content: "instruction"},
    {name: 'відео', content: "video"},
    {name:'платно',content: "paid"},
    {name: 'безкоштовно', content: "free"},
    {name:'ціна',content: "price"},
    {name:'інструкція',content: "instruction"}
]


btnSearch.addEventListener("click", function(){

    let searchInputValue = searchInput.value.toLowerCase()
    for(let word of searchList){
        console.log(word)
        if(word.name === searchInputValue){
            let id = document.getElementById(word.content).outerHTML
            console.log(id)
            sessionStorage.setItem("Result", id)
            window.location.href="./search.html";
            return
        }
        
    }
    alert('Please enter correct data!');

})