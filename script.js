
var main = document.querySelector('.main');
var contact = document.querySelector(".contact")



//Functions for Index page
function cleanUpIndex(parent) {

  while (main.lastChild){
    main.lastChild.remove()
  }}


function createSingleIndex (object){
  const link = document.createElement("a")
  const div = document.createElement("div")
  const ptag = document.createElement("p")
  link.href = "page3.html"
  div.classList.add("contact")
  div.innerHTML=object.name
  link.append(div)
  return link
  
}

function renderIndex(array){
  for (let index = 0; index < array.length; index++) {
    var element = array[index];
    main.append(createSingleIndex(element))
  }

}


  

//Functions for View Page(Page3)
function cleanUpView(parent){
  while(main.lastChild)
    main.lastChild.remove()

}


function renderView(){
  location.reload();
 }
   
  //Functions for Create Page
function cleanUpCreate(parent){
  while(main.lastChild)
    main.lastChild.remove()


}
function renderCreate() {
  location.reload();

}