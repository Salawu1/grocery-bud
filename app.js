// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById(".grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID ="";

// ****** EVENT LISTENERS **********


// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if (value !== "" && editFlag === false) {
        console element = dodcument.createElement("article");
        // add class
        element.classList.add("grocery-item");
        // add id
        const attr = document.createAttribute("date-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = '<p class="title">item</p>
        <div class="btn-container">
          <button type="button" class="edi-btn">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>';
        // append child
        list.appendChild(element);
        // dispaly alert
        displayAlert("item added to the list");
        // show conatiner
        container.classList.add("show-conatiner");
        // add to local storage
        setbackToDefault.


        console.log("add item to the list") {

        } else if (value !== "" && editFlag === true){
            console.log("editing");
        }else {
            display
          
    }
}

// display alert
function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add("alert-&(action)");
}, 1000);
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
