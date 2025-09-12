

const loadCategories = ()=> {
  const url = 'https://openapi.programming-hero.com/api/categories';
  fetch(url)
  .then((res) => res.json())
  .then((data) => displayCategories(data.categories))
}

const displayCategories = (categories) => {
  const categoryList = document.getElementById('catagoriesItem')

  for(let category of categories){
    const categoryItem = document.createElement('li')
    categoryItem.innerHTML = `<span id="button-${category.id}" onclick=loadByCategery(${category.id}) class="category-button">${category.category_name}</span>`

    categoryList.append(categoryItem)
  }
}

loadCategories()



// Shows Trees
const loadByCategery = (id)=> {
  const url = `https://openapi.programming-hero.com/api/category/${id}`
  fetch(url)
  .then((res)=> res.json())
  .then((data) => {
      removeActive();
    const button = document.getElementById(`button-${id}`)
    button.classList.add('active')
    displayLoadCategory(data.plants)
  })
}

const displayLoadCategory = (plants) => {
  const plantBox = document.getElementById('all-trees')
  plantBox.innerHTML = ''

  for(let plant of plants){
    const planCard = document.createElement('div')
    planCard.innerHTML = `<div class="card bg-base-100 w-96 shadow-sm p-2" id="item">
                
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
                    <button class="btn bg-[#15803D] hover:bg-[#15803D80] block w-full rounded-full text-white">Add to Cart</button>
                  </div>
              </div> 
        `

        plantBox.append(planCard)
  }
}


// Remove Active Class
const removeActive = () => {
  //  Get All Buttons
  const categoryButton = document.querySelectorAll('.category-button')

  // Get All Trees Button 
  const allcategoryBtn = document.querySelector('#all-category-btn');
      allcategoryBtn.classList.remove('active')
      
    categoryButton.forEach(btn => {
        btn.classList.remove("active")
    })


}


// Load All Trees 
const loadAllPlants = () => {
  const treesUrl = 'https://openapi.programming-hero.com/api/plants'
  fetch(treesUrl)
  .then((res) => res.json())
  .then((data) => displayAllShows(data.plants));

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

const displayAllShows = (plants)=> {
  const boxContainer = document.getElementById('all-trees')
  boxContainer.innerHTML = " "

  for(let plant of plants){
    const planCard = document.createElement('div')
    planCard.innerHTML = `<div class="card bg-base-100 w-96 shadow-sm p-2" id="item">
                
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
                    <button class="btn bg-[#15803D] hover:bg-[#15803D80] block w-full rounded-full text-white">Add to Cart</button>
                  </div>
              </div> `

      boxContainer.append(planCard)
  }
}

loadAllPlants()