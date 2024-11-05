document.getElementById("boton1").addEventListener("click",function(){
    const nombre =document.querySelector("#nombre input").value.trim();
    const correo=document.querySelector("#correo input").value.trim();
    const password=document.querySelector("#password input").value.trim();
    const date=document.querySelector("#date input").value.trim();
    const telefono=document.querySelector("#telefono input").value.trim();
    if (nombre===""){
        alert("Tu nombre esta vacio");
    } else if (correo===""){
        alert(" No hay correo");
    }else if (!correo.includes("@")){
        alert("no es un correo valido");
    }else if (password===""){
        alert("No hay contraseña");
    }else if (password.length<=8){
        alert ("la contraseña no es segura");
    }else if (date===""){
        alert ("no hay fecha de nacimiento");
    }else if (telefono===""){
        alert ("no hay telefono");
    }
    else if (telefono===""){
        alert ("no hay telefono");}
});