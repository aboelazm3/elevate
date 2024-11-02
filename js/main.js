async function fetchAllProduct() {
    const url = await fetch('https://fakestoreapi.com/products')
    const  data = await url.json()
    displayAllProudct(data)
}
function displayAllProudct(data) {
    cartona = ''
    for (let i = 0; i < data.length; i++) {
        cartona  += `
        <div class="col-md-4">
            <div id='${data[i].id}' class="inner shadow p-2 card">
              <div class="img mx-auto w-50">
                <img
                  class="w-100"
                  src="${data[i].image}"
                  alt=""
                />
              </div>
              <h2 class="my-2 lead">${data[i].title}</h2>
              <div class="d-flex justify-content-between">
                <p><span class="text-success">${data[i].price}</span>$</p>
                <p><span class="text-secondary">rate : </span> ${data[i].rating.rate}</p>
              </div>
            </div>
          </div> 
        `
    }
    document.getElementById('rowData').innerHTML = cartona

    let cardId  = document.querySelectorAll('.card')
    cardId.forEach((card) => {
        card.addEventListener('click', () => {
           
            fetchSingelProduct(card.getAttribute('id'))
        })
    })

}
fetchAllProduct()
async function fetchSingelProduct(id) {
    const  url = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await url.json()
   
    displaySingelProudct(data)
    
}
function displaySingelProudct(data) {
    cartona = `
    <div class="col-md-6">
              <img src="${data.image}" class="w-100" alt="">
          </div>
          <div class="col-md-6">
              <h2>${data.category}</h2>
              <p class="text-secondary fs-3 my-4">${data.description}</p>   
              <p class="fs-4">price : <span class="text-muted">${data.price} $</span></p>
        
              <p class="fs-4">category : <span class="text-muted">${data.category}</span></p>
          
              <button class="btn btn-primary w-100">Add to cart</button>

          </div>
  `
  document.querySelector('#rowData').innerHTML =  cartona
}

async function fetchCategory() {
const url = await fetch('https://fakestoreapi.com/products/categories')
const data = await url.json()
displayCategory(data)



let categoryName  = document.querySelectorAll('.category')
categoryName.forEach((category) => {
  category.addEventListener('click', () => { displaySingelCategory(category.innerText) })})
}


async function displaySingelCategory(datacat) {
    const  url = await fetch(`https://fakestoreapi.com/products/category/${datacat}`)
    const data = await url.json()
    console.log(data);
    displayAllProudct(data)
// displayAllProudctCat(data)
}


// function displayAllProudctCat(data) {
//     cartona = ``
//     for (let i = 0; i < data.length; i++) {
//        cartona  += `
//          <div class="col-md-4">
//             <div id='${data[i].id}' class="inner shadow p-2 card">
//               <div class="img mx-auto w-50">
//                 <img
//                   class="w-100"
//                   src="${data[i].image}"
//                   alt=""
//                 />
//               </div>
//               <h2 class="my-2 lead">${data[i].title}</h2>
//               <div class="d-flex justify-content-between">
//                 <p><span class="text-success">${data[i].price}</span>$</p>
            
//               </div>
//             </div>
//           </div> 
//        `


        
//     }
//     document.getElementById('rowData').innerHTML = cartona

// }


function displayCategory(data) {
    cartona = ``;
    for (let i = 0; i < data.length; i++) {
      cartona += `
                  <div class="col-md-4 category">
                      <div class="inner  card text-center bg-black text-white">
                          <h3>${data[i]}</h3>
                      </div>
                  </div>
          `;
    document.getElementById('rowData').innerHTML = cartona;
}}

$('.navbar-brand' ).on('click', function () {
  fetchAllProduct()
})
$('.home' ).on('click', function () {
  fetchAllProduct()
})
$('.category' ).on('click', function () {
  fetchCategory()
})