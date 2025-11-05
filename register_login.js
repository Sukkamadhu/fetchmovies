


const handleload=()=>{
    location.assign("http://127.0.0.1:5500/register.html")

}

let handleRegister=()=>{
    
let username=document.getElementById("username").value
let mobile=document.getElementById("mobile").value
let password=document.getElementById("password").value
let confirm_password=document.getElementById("confirm_password").value
// console.log(name,mobile,,confirm_password);

let user_details={
    name:username,
    mobile:mobile,
    password:password

}



if(password !==confirm_password ){
    alert("password didnt match")
    location.assign("http://127.0.0.1:5500/login.html")
}

// setting data in local storage    
window.localStorage.setItem("user1", JSON.stringify(user_details));
alert("user registered")



}






//login code
// we need to compare the user input with registered data

function handleLogin(){
let user_name = document.getElementById("user_name").value;
let user_password = document.getElementById("password").value;
    // console.log(user_name,user_password);

   
    //to get localstorage we need use getitem method and give parameter which is gievn in setitem
    let reg_user=window.localStorage.getItem("user1")
//    stored  data will in string 
    reg_user=JSON.parse(reg_user) //converting the string back into object form 
    console.log(reg_user);

    if(user_name==reg_user.name && user_password===reg_user.password){
       alert("login succesfull") 
        location.assign("http://127.0.0.1:5500/home.html")
    }
    else{
        alert("invalid credentials")
         location.assign("http://127.0.0.1:5500/register.html")
    }
    
}