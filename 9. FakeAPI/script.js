// Creating a User Card 
function createProductCard({category,description,id,image,price,rating,title}){
    document.querySelector('.root').innerHTML+=`
    <div class="eachCard">
                <img src="${image}" alt="${title}">
                <div class="content">
                    <p class="title">${title}</p>
                    <div class="price-rating">
                        <p class="price">$${price}</p>
                        <p class="rating"> <span class="starimg"><img src="https://icon-library.com/images/rating-star-icon-png/rating-star-icon-png-8.jpg"/></span> ${rating.rate}</p>
                    </div>
                </div> 
                <div>
                    <button onclick="deleteCard(${id})">Remove</button>
                </div>             
    </div>`
}

let productArray=[];
let root=document.querySelector("#root");

// GET 
async function getProduct(){
    try{
        const data=await fetch('https://fakestoreapi.com/products',{method:"GET"});
        productArray=await data.json();
        console.log(productArray);
        // profile.forEach((eachProduct)=>createProductCard(eachProduct));
        // console.log("Sucessfully fetched data ");
        root.innerHTML="";
        productArray.forEach((eachProduct)=>createProductCard(eachProduct));
    }
    catch{
        console.log('Error in fetching data from Server')
    }
    finally{
        console.log('Learnt how to fetch data from the database and display it ')
    }
    
}
// getProduct()

// DELETE
async function deleteCard(id){
    // try{
        // const data=await fetch(`https://fakestoreapi.com/products/${id}`,{method:"DELETE"});
        // const apiAfterDelete=await data.json();
        // console.log('Deleted Card from database')
        // console.log(apiAfterDelete)
        // getProduct();
        root.innerHTML="";
        productArray=productArray.filter(eachProduct=>eachProduct.id !== id);
        productArray.forEach(eachProduct=>createProductCard(eachProduct))   
    // }
    // catch{
    //     console.log("User not deleted from database")
    // }
    
    
}


// POST  
async function addProduct(){
    try{
        const val1=document.querySelector('.val1').value;
        const val2=document.querySelector('.val2').value;
        const val3=document.querySelector('.val3').value;
        const val4=document.querySelector('.val4').value; 
        const val5=document.querySelector('.val5').value;
        console.log(val1,val2,val3,val4,val5)

        // console.log(typeof(val1))  //string
        const data=await fetch('https://fakestoreapi.com/products',
        {method:"POST",
        body:JSON.stringify(
                            {
                                title: 'test product',
                                price: 13.5,
                                description: 'lorem ipsum set',
                                image: 'https://i.pravatar.cc',
                                category: 'electronic'
                            }
                        ),
        //  body:JSON.stringify({title:val1,
        //     price:val2,
        //     description:val3,
        //     image:val4,
        //     category:val5,
        // rating:{rate:3.6,count:20}}),
         headers:{'Content-Type':'application/json'}
        });
        // console.log(typeof(data))  //object
        const result=await data.json();
        console.log('ressss',result)
        productArray.push(result);
        console.log("productArray..",productArray);
        root.innerHTML="";
        // productArray?.forEach(eachProduct=>document.write(`<p>${eachProduct.id}-${eachProduct.title}</p>`)) 
        productArray.forEach(eachProduct=>createProductCard(eachProduct))  
        console.log('Added Product to the database')
        // getProduct();
    }
    catch{
        console.log("Unable to add user to the database")
    }
    
}

// fetch('https://fakestoreapi.com/products',{
//             method:"POST",
//             body:JSON.stringify(
//                 {
//                     title: 'test product',
//                     price: 13.5,
//                     description: 'lorem ipsum set',
//                     image: 'https://i.pravatar.cc',
//                     category: 'electronic'
//                 }
//             )
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json))


{/* <div class="editform editform-${id}">
                    <input type="text" class="input1-${id}"  value="${name}">
                    <input type="text" class="input2-${id}"  value="${avatar}"><br>
                    <button onclick="editUser(${id})">Save</button>
                </div> */}

// delete fake api
        //         fetch('https://fakestoreapi.com/products/6',{
        //     method:"DELETE"
        // })
        //     .then(res=>res.json())
        //     .then(json=>console.log(json))