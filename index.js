const response='http://api.exchangeratesapi.io/v1/latest?access_key=ce86bf12c9b137669d1ce9903969efcf' 
let button=document.querySelector("button");
let convertedto=document.querySelector("#end");
let display=document.getElementById("display");
let amount=document.querySelector("#startc")
let allinput=document.querySelectorAll("input");
async function get(){ 
    let amountval=amount.value;
    checkinputs();    
    const result=await fetch(response)
    const data=await result.json()
    const rate=data.rates
    listofrate=Object.entries(rate)
    listofrate.forEach(element => {
        key=element[0]
        values=element[1]
        // if(convertedto.innerHTML===key){
        //     display.innerHTML=value;
        // }
    
        if(convertedto.value===key){
            display.innerHTML=(parseFloat(amountval)*parseFloat(values)).toString()
        }
    })
    if(checkinputs===false&&display.innerHTML===""){
            emptydisplay();
        }
    }
    
        //reading only the entry for data,rates, and then assigning 
    //as key,values using foreach


function checkinputs(){
    let emptyFieldFound = false;
    allinput.forEach(element=>{
        if (element.value===""){
            emptyFieldFound=true;
            return;
        }
    if(emptyFieldFound){
        alert("All input fields must be occupied")
    }
        
    })
    return !emptyFieldFound;
}
function calculate(amounts,rate){
    let last=parseInt(amounts)*parseInt(rate)
    let laststr=last.toString();
    return laststr;
}
function emptydisplay(){
        display.innerHTML=("Error 404: 3-Digit CountryCode Not Found")
}
button.addEventListener("click",get)



// // .then((result) => {
// //     console.log(JSON.parse(result))
// // })
// // .then((result) => {
// //     console.log(result)
// // })

// // https://api.exchangeratesapi.io/v1/latest
// //     ? access_key = API_KEY
// //     & base = USD


// // let people=
// // [
// //     {
// //         "name":"Ahmed",
// //         "age":21,
// //         "status":"single"
// //     },
// //     {
// //         "name":"AhmedA",
// //         "age":21,
// //         "status":"single"
// //     }
// // ]

// // //to make stuff an object need to parse into object using json.parse

// // //SyntaxError: Unexpected token o in JSON at position 1 Means it is an object not a string 
// // console.log(people[1].age) //check to see if object
