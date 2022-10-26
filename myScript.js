const cpass = document.getElementById("cpass")
const pass = document.getElementById("pass")
const faction = document.getElementsByName("faction")

cpass.addEventListener("input",(event)=>{
    if(cpass.value != pass.value){
        cpass.setCustomValidity("Passwords do not match");
        cpass.reportValidity();
    }else {
        cpass.setCustomValidity("");
        cpass.reportValidity();
    }
})

