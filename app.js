"use strict"

// **************************** GET ELEMENT BY ID ****************************

let HeaderTitle = document.getElementById("header-title")
// let mainHeader = document.getElementById("main-header")

// let itemsId = document.getElementById("list-group-items") // Dose Not Create Array Of All Existing Elements

// HeaderTitle.innerHTML = "Hello"
// HeaderTitle.innerHTML = "<h3>Hello</h3>" // Will Create h3 Element Inside H1

// HeaderTitle.innerText = "<h3>Hello</h3>"
// console.log(HeaderTitle.innerText); style doesn't matter

// HeaderTitle.textContent = "<h3>Hello</h3>"
// console.log(HeaderTitle.textContent); style does matter

// mainHeader.style.borderBottom = "3px solid #000"

// console.log(HeaderTitle);

// console.log(itemsId);


// **************************** GET ELEMENT BY CLASS NAME ****************************

// let itemsClass = document.getElementsByClassName("list-group-item") // Dose Create Array Of All Existing Elements

// console.log(items);
// console.log(items[1]);
// items[1].style.color = "green"
// items[1].style.backgroundColor = "blue"
// items.style.backgroundColor = "blue" //Will Give Error

// for (let i = 0; i < items.length; i++) {


// if(i % 2 === 0){
//     items[i].style.backgroundColor = "blue"
//     console.log(i);
// }

// i % 2 === 0 ? items[i].style.backgroundColor = "blue" : "" 

// items[i].style.backgroundColor = "blue"

// }


// **************************** GET ELEMENT BY TAG NAME ****************************

// let itemsTag = document.getElementsByTagName("li") // Dose Create Array Of All Existing Elements

// console.log(itemsTag);
// console.log(itemsTag[1]);
// itemsTag[1].style.color = "green"
// itemsTag[1].style.backgroundColor = "blue"
// itemsTag.style.backgroundColor = "blue" //Will Give Error

// for (let i = 0; i < itemsTag.length; i++) {


//     if(i % 2 === 0){
//         itemsTag[i].style.backgroundColor = "blue"
//         console.log(i);
//     }

//     i % 2 === 0 ? itemsTag[i].style.backgroundColor = "blue" : "" 

//     itemsTag[i].style.backgroundColor = "blue"

// }


// **************************** GET ELEMENT BY Query Selector NAME **************************** 


// var header = document.querySelector("#main-header") 
// header.style.borderBottom = "4px solid blue"

// var header = document.querySelector(".list-group-item") // Dose Not Create Array Of All Existing Elements
// console.log(header);


// **************************** GET ELEMENT BY Query Selector All NAME ****************************


// let titles = document.querySelectorAll(".title") // Dose Create Array Of All Existing Elements

// let oddListItems = document.querySelectorAll(".list-group-item:nth-child(odd)")

// oddListItems.forEach(function(elements){
//     elements.style.backgroundColor = "#ccc"
// })

// console.log(titles);



// **************************** TRAVERSING DOM **************************** 

let itemList = document.querySelector("#items")
// console.log(itemList);

// Parent Node 

// ************** PARENT NODE **************

// let itemListParentNode = itemList.parentNode
// // let itemListParentNode = itemList.parentNode.parentNode
// itemListParentNode.style.backgroundColor = "#ccc"
// console.log(itemListParentNode);


// ************** PARENT ELEMENT **************  //Same As Parent Node


// let itemListParentElement = itemList.parentElement
// // let itemListParentElement = itemList.parentElement.parentElement
// itemListParentElement.style.backgroundColor = "#ccc"
// console.log(itemListParentElement);


// ************** CHILD NODE ************** // Also Includes Line Brakes So Do Not Use It

// let itemListChildNode = itemList.childNodes
// console.log(itemListChildNode);

// ************** CHILDREN NODE ************** 

// let itemListChildren = itemList.children
// console.log(itemListChildren);


// ************** FIRST CHILD ************** // Also Includes Line Brakes So Do Not Use It

// let item_List_First_ChildNode = itemList.firstChild
// console.log(item_List_First_ChildNode);

// ************** FIRST ELEMENT CHILDREN ************** 

// let item_List_First_Element_Children = itemList.firstElementChild
// console.log(item_List_First_Element_Children);


// ************** LAST CHILD ************** // Also Includes Line Brakes So Do Not Use It

// let item_List_Last_ChildNode = itemList.lastChild
// console.log(item_List_Last_ChildNode);

// ************** LAST ELEMENT CHILDREN ************** 

// let item_List_Last_Element_Children = itemList.lastElementChild
// console.log(item_List_Last_Element_Children);


// ************** NEXT SIBLING ************** 

// let item_List_Next_Sibling = itemList.nextSibling
// console.log(item_List_Next_Sibling);


// ************** NEXT ELEMENT SIBLING ************** 

// let item_List_Next_Element_Sibling = itemList.nextElementSibling
// console.log(item_List_Next_Element_Sibling);


// ************** PREVIOUS SIBLING ************** 

// let item_List_Previous_Sibling = itemList.previousSibling
// console.log(item_List_Previous_Sibling);


// ************** PREVIOUS ELEMENT SIBLING ************** 

// let item_List_Previous_Element_Sibling = itemList.previousElementSibling
// console.log(item_List_Previous_Element_Sibling);


// **************************** CREATE ELEMENT IN DOM **************************** 

// ************** CREATE DIV ************** 

// let newDiv = document.createElement("h5")

// ************** ADD CLASS TO DIV ************** 

// newDiv.className = "heading"

// ************** ADD ID TO DIV ************** 

// newDiv.id = "heading1"

// ************** ADD ATTRIBUTE TO DIV ************** 

// newDiv.setAttribute("title", "heading")
// console.log(newDiv.getAttribute("title"));
// console.log(newDiv.getAttributeNames());



// ************** ADD TEXT TO DIV ************** 

// let newDivText = document.createTextNode("Hello Heading")
// newDiv.appendChild(newDivText)

// newDiv.innerText = "Hello Heading"
// newDiv.innerHTML = "Hello Heading"
// newDiv.textContent = "Hello Heading"

// console.log(newDiv);

// **************************** INSERT DIV TO DOM **************************** 

// let container = document.querySelector(".container")
// let h1 = document.querySelector("#header-title")


// ************** INSERT BEFORE ************** 


// container.insertBefore(newDiv, h1)


// **************************** EVENT LISTENER **************************** 


// ************** TYPE OF EVENT ************** 


// (1) click 
// (2) dblclick 
// (3) mousedown 
// (3) mouseup 
// (3) mouseenter 
// (3) mouseleave 
// (3) mouseover 
// (3) mouseout 
// (3) mousemove 
// (3) keyup 
// (3) keydown 
// (3) keypress 
// (3) focus 
// (3) blur 
// (3) cut
// (3) paste
// (3) input 


// let btn = document.querySelector("#btn-dark")
// let input  = document.querySelector('input[type="text"]')


// ************** METHODS TO TAGGER EVENT LISTENER ************** 



// btn.addEventListener("click", ()=>{
//     alert("ok")
// })

// btn.addEventListener("click", function(){
//     alert("ok")
// })


// btn.addEventListener("click",  handelClick)


// ************** TYPE OF EVENT IN USE ************** 


// btn.addEventListener("click",  eventType)
// btn.addEventListener("dblclick",  eventType)
// btn.addEventListener("mousedown",  eventType)
// btn.addEventListener("mouseup",  eventType)
// btn.addEventListener("mouseenter",  eventType)
// btn.addEventListener("mouseleave",  eventType)
// btn.addEventListener("mouseover",  eventType) // Also Trigger When Mouse Enter Element Inside Element
// btn.addEventListener("mouseout",  eventType) // Also Trigger When Mouse Enter Element Inside Element
// btn.addEventListener("mousemove",  eventType)


// input.addEventListener("keyup", eventType)
// input.addEventListener("keydown", eventType)
// input.addEventListener("keypress", eventType)
// input.addEventListener("focus", eventType)
// input.addEventListener("blur", eventType)
// input.addEventListener("cut", eventType)
// input.addEventListener("paste", eventType)
// input.addEventListener("input", eventType)



function handelClick(e) {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);

    // let btnId = e.target.id
    // let btnClass = e.target.className
    // let btnClassList = e.target.classList

    // document.querySelector(".demo").innerHTML = `<h4>Button ID: ${btnId} <br /> Button Classes: ${btnClass}</h4>`

    // console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);

}

function eventType(e) {
    // console.log(`Event Type = ${e.type}`);
}



// **************************** START PROJECT ****************************


// ************** SELECTING ELEMENT FROM DOM ************** 


// let addListBtn = document.querySelector("input[type='submit']")
// let items = document.querySelector("#items")
// let input = document.querySelector("input[type='text']")



// // ************** ADD ITEM IN LIST ************** 


// // ******* CLICK EVENT LISTENER *******

// addListBtn.addEventListener('click', addItem)

// function addItem(e) {
//     e.preventDefault()

//     // ******* CREATING LI *******

//     let newItem = document.createElement("li")
//     newItem.innerText = input.value
//     newItem.className = "list-group-item"

//     // ******* CREATING DELETE BUTTON *******

//     let deleteBtn = document.createElement("button")
//     deleteBtn.className = "btn btn-danger btn-sm float-end"
//     deleteBtn.innerText = "X"

//     // ******* ADD BUTTON IN LI *******

//     newItem.appendChild(deleteBtn)

//     // ******* ADD LI IN UL *******

//     items.appendChild(newItem)

//     let DeleteListBtns = document.querySelectorAll(".btn-danger")


//     DeleteListBtns.forEach(function (e) {
//         console.log(e);
//         e.addEventListener("click", deleteFun)
//     })

//     function deleteFun(e) {
//         console.log(e.target);
//         console.log(e.target.parentElement);
//         items.removeChild(e.target.parentElement)
//     }

// }



// // ************** DELETE ITEM IN LIST ************** 


// let DeleteListBtns = document.querySelectorAll(".btn-danger")


// DeleteListBtns.forEach(function (e) {
//     console.log(e);
//     e.addEventListener("click", deleteFun)
// })

// function deleteFun(e) {
//     console.log(e.target);
//     console.log(e.target.parentElement);
//     items.removeChild(e.target.parentElement)
// }
