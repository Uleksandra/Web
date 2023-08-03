// const youName = 'Danya'
// const job = 'Student'
// const greating = `You ${youName} stupid KPI ${job} `
// console.log(greating)


// Function
// function exampFunction(a, b = 1) {
//     return a*b
// }
// console.log(exampFunction(5, 2))
// console.log(exampFunction(5))
// const exampleBowFunction = (a, b = 1) => a*b
// console.log(exampleBowFunction(10, 2))
// console.log(exampleBowFunction(15))

//Something what crash your head
// const newPost = (post, addDate = Date(), nameColumn) => ({
//     ...post,
//     nameColumn: addDate
// })
// const firstPost = {
//     id: 0,
//     color: 'red'
// }
// const read = 'imWorking'
// console.log(newPost(firstPost,undefined,read))
// console.log(newPost(firstPost, 1, read))


// //Destruct

// const userProfile = {
//     id: 1,
//     name: 'Sasha',
//     color: 'red'
// }

// const userInfo = ({name, id}) =>{
//     if(!id){
//         console.log(`${name} isnt in system`);
//     }else{
//         console.log(`${name} have id numer: ${id}`);
//     }
// }
// userInfo(userProfile)

let n = require("Введите значение переменной n:");

switch (n){
    case n % 5 == 0:
        console.log(`${n} % 5 === 0`)
    case n % 3 == 0: 
        console.log(`${n} % 3 === 0`)
}