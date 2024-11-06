function Nombre(){
    const nombre= document.getElementById("Nombre").value.trim();
    const apellido= document.getElementById("Apellido").value.trim();
    console.log(`Tu nombre es ${nombre} y tu apellido ${apellido} `)
}
Nombre();