// 1. Declare uma variáveo de nome weight
let weight

// 2. Que tipo de dado é a variável acima?
    console.log(typeof weight)

/*
   3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/
    let name = "Ana"
    let age = 22
    let stars = 4.9
    let isSubscribed = true

/*
    4. A variável student abaixo é de que tipo de dados?


    4.1 Atribua a elas as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:
    
        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valoes de cada propriedade do objeto
*/
let student = {
    name: "Ana",
    age: 22,
    stars: 4.9,
    isSubscribed: true,
    weight: 56.8
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nunhum valor, ou seja, somente o Array vazio
*/
    let student = []

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto, mas usar o objeto criado e inserir ele no array
*/
    students = [
        student
    ]

    console.log(students)

/* 
    7. Coloque no console o valor da posição zero do Array acima
*/
    console.log(students[0])

/* 
    8. Crie um novo student e coloque na posição 1 do Array
*/
    const John = {
        name: "John",
        age: 22,
        stars: 4.9,
        isSubscribed: true,
        weight: 56.8
    }
    
    students = [
        student,
        John,
    ]

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se acertou.

    console.log(a)
    var a = 1
*/

    var a
    console.log(a)
    a = 1