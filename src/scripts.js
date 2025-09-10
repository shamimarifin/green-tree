
const url = ("https://openapi.programming-hero.com/api/categories")
fetch(url)
.then((res)=> res.json())
.then((json) => displayCatagories(json.categories) )


const displayCatagories = (categories) => {

    const caragorisList = document.getElementById('catagoriesItem')

    for(let category of categories){
        const cataItem = document.createElement('li')
        cataItem.innerHTML = `<span>${category.category_name}</span>`

        caragorisList.appendChild(cataItem)
    }

}




const plantUrl = ("https://openapi.programming-hero.com/api/plants")

fetch(plantUrl)
.then((res) => res.json())
.then((json) => displayPlants(json.plants))


const displayPlants = (plants)=> {

    const plantList = document.getElementById('all-trees')

    for(let plant of plants){
        const plantsItem = document.createElement('div')

        plantsItem.innerHTML = `
                <div class="card bg-base-100 w-96 shadow-sm p-2" id="item">
                
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

        plantList.appendChild(plantsItem)

    }
}