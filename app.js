const inputBtn = document.getElementById("save-el");
let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

localStorage.setItem("link","shrunkhal.com")




inputBtn.addEventListener("click", function()
{
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
})

function renderLeads(){
    let listItems = ""
    for(let i=0; i< myLeads.length; i++){
     //   listItems += "<li><a target='_blank' href='#'>"+ myLeads[i] +"</a></li>"
     //Template String
    listItems += `
          <li>
             <a target='_blank' href='${myLeads[i]}'>
             ${myLeads[i]}
             </a>
           </li>  
           `
    }
    ulEl.innerHTML = listItems
}


