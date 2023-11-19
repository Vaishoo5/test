
// Creating a User Card 
function createUser({name,avatar,id}){
    document.querySelector('.cardsection').innerHTML+=`
    <div class="container">
                <img src="${avatar}" alt="">
                <div class="content">
                    <p class="userinfo1">${name}</p>
                    <p class="userinfo2">Id: ${id}</p>
                    <button onclick="deleteUser(${id})">Remove</button>
                    <button onclick="showEditForm(${id})">Edit</button>
                </div>
                <div class="editform editform-${id}">
                    <input type="text" class="input1-${id}"  value="${name}">
                    <input type="text" class="input2-${id}"  value="${avatar}"><br>
                    <button onclick="editUser(${id})">Save</button>
                </div>
    </div>`
}

// GET 
async function getUser(){
    try{
        const data=await fetch('https://62ec04c755d2bd170e7b4d17.mockapi.io/users',{method:"GET"});
        const profile=await data.json();
        console.log(profile);
        // document.querySelector('.cardsection').innerHTML="";
        profile.forEach((person)=>createUser(person));
        console.log("Sucessfully fetched data ")
    }
    catch{
        console.log('Error in fetching data from Serer')
    }
    finally{
        console.log('Learnt how to fetch data from the database and display it ')
    }
    
}
getUser()




// DELETE
async function deleteUser(id){
    try{
        const data=await fetch(`https://62ec04c755d2bd170e7b4d17.mockapi.io/users/${id}`,{method:"DELETE"});
        const profile=await data.json();
        console.log('Deleted User from database')
        getUser();
        
    }
    catch{
        console.log("User not deleted from database")
    }
    finally{
        console.log("Learnt how to delete data from the database")
    }
    
}




// POST  
async function addUser(){
    try{
        const val1=document.querySelector('.val1').value;
        const val2=document.querySelector('.val2').value;
        console.log(typeof(val1))  //string
        const data=await fetch('https://62ec04c755d2bd170e7b4d17.mockapi.io/users',
        {method:"POST",
         body:JSON.stringify({name:val1,avatar:val2}),
         headers:{'Content-Type':'application/json'}
        });
        console.log(typeof(data))  //object
        const result=await data.json();
        console.log('Added User to the database')
        getUser();
    }
    catch{
        console.log("Unable to add user to the database")
    }
    
}




// PUT
function showEditForm(id){
    document.querySelector(`.editform-${id}`).style.display='block';
} 
async function editUser(id){
    const val1=document.querySelector(`.input1-${id}`).value;
    const val2=document.querySelector(`.input2-${id}`).value;
    const data=await fetch(`https://62ec04c755d2bd170e7b4d17.mockapi.io/users/${id}`,
    {method:"PUT",
     body:JSON.stringify({name:val1,avatar:val2}),
     headers:{'Content-Type': 'application/json'}
    })
    const result=await data.json();
    getUser();
}


