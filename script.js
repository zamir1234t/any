// const pg =document.getElementById("pg")

// function changtext() {
// document.getElementById("pg").textContent="sorry" 
// }

// function myFunction() {
//   const element = document.body;
//   element.classList.toggle("dark-mode");
// }


// let input =''
// function appendNumber(parametr) {
//     input +=parametr;
//     document.getElementById('result').value = input
// }

// function appendOperator(stic) {
//     input += ''+stic+'';
//     document.getElementById('result').value =input
// }

// function clearScreen() {
//     input = ''
//     document.getElementById('result').value =''
// }

// function clearInterval() {
//     input =input.slice(0,-1)
//     document.getElementById('result').value = input
// }

// function calculate() {
//     try{
//         input =eval(input).toString()
//         document.getElementById('result').value = input
//     }catch{
//         document.getAnimations('result').value ='sdc'
//     }
// }

const input =document.getElementById('input')
const output =document.getElementById('output')

input.addEventListener("input", function () {
    output.textContent = input.value
})

   