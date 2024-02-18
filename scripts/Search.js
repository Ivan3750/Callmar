

/* let searchList = ["video", "price", "free","instrustion","try","відео","ціна","безкоштовно", "інструкція", "спробуйте"];
 */

let searchList = {
    price: "#price",   
    video: "#video",   
    free: "#price",   
    instrustion: "#instrustion",   
    try: "#price",
    ціна: "#price",   
    відео: "#video",   
    безкоштовно: "#price",   
    інструкція: "#instrustion",   
    спробувати: "#price",

}

const searchInput = document.querySelector('#search');
/* const searchBox = document.querySelector('.search-list'); //  Пошукова коробка
 */

function getSearch(){
return document.querySelector('#search').value.toLowerCase()
}








const searchBox = document.querySelector('.search-list');

class Result{
    _find
    constructor (find,name,link = ""){
        searchBox.innerHTML = ""
        console.log(searchBox)
        this._find = find
        searchBox.classList.add("show")
        if(find){ // find
            this.result = document.createElement("a")
            this.result.classList.add("Result-link")
            this.result.textContent = name
            this.result.href = link
            searchBox.append(this.result)
        }else{ // not find
                this.result = document.createElement("p")
                this.result.classList.add("Result-link")
                this.result.textContent ="Не знайдено"
                searchBox.append(this.result)

           
            setTimeout(()=>{
                searchBox.classList.remove("show")

            },5000)
        }
        
    
    }


    get find(){
        return this._find 
    }
    set find(value){
        this._find = value
    }

}


let newResult;

let theSame = false;

searchInput.addEventListener("change", ()=>{
    let searchValue = getSearch()
    console.log(searchValue)

    /* Object.keys(searchList).forEach((search)=>{
        for(let i = 0; i != searchValue.length;i++){

            if(search[i] === searchValue[i]){
                console.log(true)
                theSame = true
            }else{
                console.log(false)
                theSame = false
                break;
            }
            
        }
        if(theSame){

            newResult = new Result(true,search,searchList[search])
        }else{
            newResult = new Result(false)
        }
    }) */
    
/* 

    Note
let searchList = {
    video: "#video",   
    proce: "#",   
    free: "#",   
    instrustion: "#",   
    try: "#"
}


video
proce
free
instrustion
try


vision


*/

let notFound = false


Object.keys(searchList).forEach((searchWord)=>{
    let keys = Object.keys(searchList);
let lastKey = keys[keys.length - 1];
console.log(lastKey)
    console.log(searchValue + "-" + searchWord)

        if(searchValue == searchWord)  {
            console.log("find")
            newResult = new Result(true, searchWord, searchList[searchWord])
            notFound = "stop"
            
        }else if(searchWord == lastKey && notFound != "stop"){
            console.log("nfind")
            notFound = true

        }
})

console.log(notFound)
    if(notFound == true){
        let newResult = new Result(false)
    }
    
})







