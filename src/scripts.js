

const loadCategories = () => {
  const url = 'https://openapi.programming-hero.com/api/categories'
  fetch(url)
  .then((res)=> res.json())
  .then((data) => displayCategories(data.categories))
}

const displayCategories = (categories) => {

  const categoryList = document.getElementById('categories')

  for(let category of categories){
    const categoryItem = document.createElement('li')
    categoryItem.innerHTML = `<span  id="button-${category.id}"  class="category-btn" onclick= "loadByCategory(${category.id})">${category.category_name}</span>`

    categoryList.append(categoryItem)
  }
}

loadCategories ()


// All Plant Shows
const loadByCategory = (id)=> {
  const url = `https://openapi.programming-hero.com/api/category/${id}`

  fetch(url)
  .then((res) => res.json())
  .then((data) =>{
        removeActive()
            // select clicked button
            const buttonNum = document.querySelector(`#button-${id}`);
            buttonNum.classList.add("active");// add active class

    displayCategoryPlants(data.plants)
  })
}

const displayCategoryPlants = (plants) => {
  
  const plantContainer = document.getElementById('plant-container')
  plantContainer.innerHTML = ""

  for(let plant of plants){
    
    const plantCard = document.createElement('div');

    plantCard.innerHTML = `<div class="card bg-base-100 w-96 shadow-sm p-2" id="item">
                
              <figure>
                  <img
                    src="${plant.image}"  class="h-[200px] w-full object-cover"/>
                </figure>
                <div class="card-body">
                  <h2 class="card-title">${plant.name}</h2>
                  <p>
                     ${plant.description}
                  </p>
                  <div class="flex justify-between mt-2">
                    <span class=" bg-[#DCFCE7] p-2 rounded-full">${plant.category}</span>
                    <span class="text-xl font-semibold">৳${plant.price}</span>
                  </div>
                  <div class="card-actions mt-5">
                    <button class="btn bg-[#15803D] hover:bg-[#15803D80] block w-full rounded-full text-white" onclick="loadCartDetails(${plant.id})">Add to Cart</button>
                  </div>
              </div> `
      plantContainer.append(plantCard)
  }
}

const removeActive = ()=> {
  // get all buttons
    const categoryButton = document.querySelectorAll(".category-btn");
    // get all trees button
    const allCategoryBtn = document.querySelector("#all-category-btn");
    // remove active from it while clicking on other category buttons
    allCategoryBtn.classList.remove("active");

    // select each button
    categoryButton.forEach(btn => {
        btn.classList.remove("active")
    })
}


// Load All Trees
const loadAllTree = ()=> {
  const url = 'https://openapi.programming-hero.com/api/plants'

  fetch(url)
  .then((res)=> res.json())
  .then((data) => displayAllTrees(data.plants));

   // removing active while clicking All Trees btn
    const categoryButton = document.querySelectorAll(".category-btn");
    // select each button
    categoryButton.forEach(btn => {
        btn.classList.remove("active")
    })

    //Adding active on all tress btn when clicking on it
    const allCategoryBtn = document.querySelector("#all-category-btn");
    allCategoryBtn.classList.add("active");

}


const displayAllTrees = (plants) => {
    // get the plant container and empty it
    const plantContainer = document.getElementById("plant-container");
    plantContainer.innerHTML = "";

    for(let plant of plants){
       const plantCard = document.createElement("div");
       plantCard.innerHTML = `<div class="card bg-base-100 w-96 shadow-sm p-2" id="item">
                
              <figure>
                  <img
                    src="${plant.image}"  class="h-[200px] w-full object-cover"/>
                </figure>
                <div class="card-body">
                  <h2 class="card-title">${plant.name}</h2>
                  <p>
                     ${plant.description}
                  </p>
                  <div class="flex justify-between mt-2">
                    <span class=" bg-[#DCFCE7] p-2 rounded-full">${plant.category}</span>
                    <span class="text-xl font-semibold">৳${plant.price}</span>
                  </div>
                  <div class="card-actions mt-5">
                    <button class="btn bg-[#15803D] hover:bg-[#15803D80] block w-full rounded-full text-white" onclick="loadCartDetails(${plant.id})">Add to Cart</button>
                  </div>
              </div> `

              plantContainer.append(plantCard)
    }
}


loadAllTree()













let currentTotal = parseInt(document.getElementById("total").innerText);
// load cart details 
const loadCartDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`

    fetch(url)
        .then(res => res.json())
        .then(details => {
            displayAddToCart(details.plants);

            // get tree price and convert into number
            const treePrice = parseInt(document.getElementById(`tree-price${details.plants.id}`).innerText);


            // add with total
            currentTotal = currentTotal + treePrice;

            // push to the dom
            document.getElementById("total").innerText = currentTotal;
        })
}

// function for creating add to cart
const displayAddToCart = (plants) => {
    // get add cart container  
    const addToCartContainer = document.getElementById('add-to-cart-container');
    //show relevant alert
    alert(`Doy want to add to cart: ${plants.name}`)
    // create element 
    const addedCart = document.createElement("div");
    addedCart.setAttribute('id', `added-cart${plants.id}`)
    addedCart.classList.add("flex", "justify-between", "bg-[#CFF0DC]", "rounded-lg", "p-4")
    addedCart.innerHTML = `
                        <div>
                                <h2>${plants.name}</h2>
                                <p>
                                 <i class="fa-solid fa-bangladeshi-taka-sign"></i>
                                <span id="tree-price${plants.id}"> ${plants.price}</span>
                                </p>                            
                            </div>
                            <h2 onclick="removeCarts(${plants.id})" class="font-xl"><i class="fa-solid fa-xmark text-red-600 font-bold"></i></h2>     
                            `;
    //append to the parent
    addToCartContainer.appendChild(addedCart)
}

// function for removing cart details 
const removeCarts = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    fetch(url)
        .then(res => res.json())
        .then(details => {
            // get tree price and convert into number
            const treePrice = parseInt(document.getElementById(`tree-price${details.plants.id}`).innerText);

            // subtract from total
            currentTotal = currentTotal - treePrice;

            // push to the dom
            document.getElementById("total").innerText = currentTotal;

            // get add cart container and empty it
            const addedCart = document.getElementById(`added-cart${details.plants.id}`);
            addedCart.remove()
        })
}


