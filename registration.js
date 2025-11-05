let handleRegister=()=>{
    let user_details={
        name:username,
        moblie:mob,
        password:password
    }
    //json
    user_details=JSON.stringly(user_details)
    console.log(typeof(user_details))
    //setting data in local storage
    if(password===confirm_password){
        window.localStorage.setItem("user1",user_details)

    }
}








funtion handleRegister(){
    let user_name=document.getElementById("user_name").value
    let user_password=document.getElementById("user_password").value
    let reg_user=window.localStorage.getItem("user1")
}
    let 
