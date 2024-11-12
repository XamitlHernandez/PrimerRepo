const url= "https://pokeapi.co/api/v2/pokemon/bulbasaur";
fetch (url,{method: 'Get'}).then((response)=>{
    return response.json();
}).then ((data)=>{
    console.log(data);
    localStorage.setItem("nombrePokemon", data.name);
    localStorage.setItem("alturaPokemon",data.height);
    localStorage.setItem("pesoPokemon", data.weight);
})
.catch((error)=>{
    console.error("ups no se que paso");
});
    let a = localStorage.getItem("nombrePokemon");
    let b =localStorage.getItem("alturaPokemon");
    let c = localStorage.getItem("pesoPokemon");
    console.log(`Hola ${a} tu peso es de ${c} y tu altura es de ${b}.`)
    document.getElementById("nombre").innerHTML= a;
    document.getElementById("peso").innerHTML=c;
    document.getElementById("altura").innerHTML=b;




