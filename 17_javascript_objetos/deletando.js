const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}

// delete objPersonagem.aliado
// delete objPersonagem["status"]

// // console.log(objPersonagem.aliado) //undefined
// console.log(objPersonagem) //undefined

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true