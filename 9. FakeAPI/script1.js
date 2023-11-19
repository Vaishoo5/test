let productArray=[];
const root=document.querySelector("#root");



function displayProducts(products){
    root.innerHTML="";
    products.forEach(eachProduct=>{
      const card=document.createElement("div");
      card.className='product-card';
      card.innerHTML=`
         <img src=${eachProduct.image} alt=""/>
         <div>
             <p>${eachProduct.id}</p>
             <p class='prod-title'>${eachProduct.title}</p>
             <div><p>Rs ${eachProduct.price}</p></div>
             <div>
             <button class="del-btn" onclick="deleteProduct(${eachProduct.id})">Remove</button>
             <button class="edit-btn" onclick="editProduct(${eachProduct.id})">Edit Product</button>
             </div>
         </div>
      `
      root.appendChild(card);
    })
}






// GET
async function getProduct(){
    const res=await fetch("https://fakestoreapi.com/products");
    productArray=await res.json();
    console.log(productArray);
    // console.log(productArray)
    displayProducts(productArray)
}
getProduct()



// DELETE
function deleteProduct(clickedProductId){
     productArray=productArray.filter(eachProduct=>eachProduct.id!==clickedProductId);
    //  console.log(productArray);
     displayProducts(productArray)
}


// POST
function addProduct(){
    let newProd={
        category:"men's clothing",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id:1,
        image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        rating: {rate: 3.9, count: 120},
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    }
    productArray.push(newProd)
    // console.log("newProd",newProd);
    // console.log("Prod-added-Array",productArray)
    displayProducts(productArray)
}



// PUT
function editProduct(editProdId){
    // const updateTitle=prompt("Enter New Title: ");
    const clickedProdIndex= productArray.findIndex(eachProduct=>eachProduct.id === editProdId);
    console.log(clickedProdIndex)

    productArray[clickedProdIndex].title="Title is Edited";
    productArray[clickedProdIndex].image="https://www.jiomart.com/images/product/original/rv64vysl27/stylish-handbag-bag-pu-leather-gorgeous-pink-ladies-purse-product-images-rv64vysl27-0-202303082014.jpg?im=Resize=(500,630)";
    productArray[clickedProdIndex].price=350;
    displayProducts(productArray)
}


// function editProduct(productId) {
//     const updatedTitle = prompt("Enter new title:");
//     const productIndex = products.findIndex(product => product.id === productId);

//     if (productIndex !== -1 && updatedTitle) {
//         products[productIndex].title = updatedTitle;
//         renderProducts();
//     }
// }
