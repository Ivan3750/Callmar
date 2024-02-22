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
const searchListShow = document.querySelector('.search-list');


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



searchInput.addEventListener("input",(e)=>{
    for (const element of searchList) {
        
        let inputWord = (element.name).substring(0,e.target.value.length);
        if(e.target.value.includes(inputWord) && e.target.value.length > 0){
            console.log("This")
            ShowSearchList(element.name, element.content, true)
        }else{
            
        }
    }

})

let ActiveWords = []

function ShowSearchList(element = "", link = "",){
    if(!ActiveWords.includes(element)){
        ActiveWords = []
        searchListShow.innerHTML = ""
        ActiveWords.push(element)
        let searchLink = document.createElement("a")
        searchLink.href = "./search.html"
        searchLink.textContent= element
        searchListShow.append(searchLink)
        let id = document.getElementById(link).outerHTML
        sessionStorage.setItem("Result", id)
        searchListShow.classList.add("show")
        
    }
    


}

// EVENT BTN => SEARCH WORD IN THE ANOTHER WEBSITE 


btnSearch.addEventListener("click", function(){
    let searchInputValue = searchInput.value.toLowerCase()
    for(let word of searchList){
        console.log(word)
        if(word.name === searchInputValue){
            let id = document.getElementById(word.content).outerHTML
            sessionStorage.setItem("Result", id)
            window.location.href="./search.html";
            return
        }
    }
    alert('Please enter correct data!');

})

window.addEventListener("click", ()=>{
    searchListShow.classList.removes("show")

})

// EVENT ENTER => SEARCH WORD IN THE ANOTHER WEBSITE 

window.addEventListener("keydown", function(){
    if(event.which == 13){
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
}
    
})

