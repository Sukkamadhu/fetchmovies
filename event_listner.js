let para=document.createElement("p")
para.innerText="welcome"
para.style.fontSize="36px"


para.addEventListener("mouseout",()=>{
    para.style.textDecoration="underline"

})

para.addEventListener("mouseout",()=>{
    para.style.color="red"
})

document.addEventListener("keydown",(e)=>{
    if(e.ctrlKey && e.key == "a"){
        console.log("select all")
    }
})

document.addEventListener("keyup",(e)=>{
    if(e.ctrlKey && e.key == "c"){
        para.style.textAlign ="center"
    }
})

document.body.append(para)