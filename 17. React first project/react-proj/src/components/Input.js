import React, { useState } from "react";

function Input(){

    const [Fname,setFName]=useState("");

 

const submitform=()=>{

    alert({Fname});

}

 

return(

   

    <form onSubmit={submitform}>

        <Input

        type="text"

        value={Fname}

        onChange={(e)=>setFName(e.target.value)}

       

 

        />

        <button type="submit">Submit</button>

    </form>

);

}

export default Input;