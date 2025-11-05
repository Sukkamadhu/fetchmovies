
base_url=`http://localhost:3000/users`
// this file for db json
// fetch("http://localhost:3001/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));



// post method

// fetch("http://localhost:3001/users", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ id: 3, name: "madhu" })
// })
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));



// put  updating the dataa
//we run put method the entire record will be replaced
// fetch("http://localhost:3000/users/2",{
//     method:"PUT",
//     headers:{"content-type":"Application/json"},
//     body:{
//         id:"2",
//         name:"shiva"
//     }
// }).then(d=>d.json()).then(d=>console.log(d));


//patch updating
//it will update only record not whole record
// fetch("http://localhost:3000/users/3",{
//     method:"PATCH",
//     headers:{"content-type":"Application/json"},
//     body.JSON.stringify({
//         age:"25"
//     })

// }).then(d=>d.json()).then(d=>console.log(d));


// delete method

// fetch(`${base_url}/2`,{
//     method:"DELETE",
//     headers:{"Content-Type":"Application/json"}
// }).then(d=>d.json()).then(d=>console.log(d));


// dom
//by taking user input  

function handlesubmit(){
let username=document.getElementById("username").value
let password=document.getElementById("password").value
let mob=document.getElementById("mob").value
let email=document.getElementById("email").value

let details={
    username:username,
    password:password,
    mob:mob,
    email:email
}


 fetch(`${base_url}/2`,{
     method:"POST",
     headers:{"Content-Type":"Application/json"},
     body.JSON.stringify(details)
}).then(d=>d.json()).then(d=>console.log(d))
.catch(e=>console.log(e);
);


}


//we want to send data from one port to another port we use cors