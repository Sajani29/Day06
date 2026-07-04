// console.log("hello day 06");

// let Customer1 = {
//     name: "John Doe",
//     age: 30,
//     email: "mial@.com",
//     items: [
//         {
//             itemName: "Item 1",
//             itemPrice: 100,
//             variant: {
//                 color: "red",
//                 size: "M"
//             }  
//         },
//         {
//             itemName: "Item 2",
//             itemPrice: 200 ,
//             variant: {
//                 color: "blue",
//                 size: "L"
//             }
//         },
//         {
//             itemName: "Item 3",
//             itemPrice: 300 ,
//             variant: {
//                 color: "green",
//                 size: "S"
//             }
//         }
//     ],
//     father: {
//         name: "John Doe Sr.",
//         age: 60,
//         email: "father@.com"
//     }
// };
// console.log(Customer1.name);
// console.log(Customer1.age); 
// console.log(Customer1.email);
// console.log(Customer1.items);
// console.log(Customer1.father.name);
// console.log(Customer1.father.age);
// console.log(Customer1.father.email);    
// console.log(Customer1.items[0]);
// console.log(Customer1.items[0].itemName);
// console.log(Customer1.items[0].itemPrice);
// console.log(Customer1.items[0].variant.color);
// console.log(Customer1.items[0].variant.size);   

// console.log(document);
// console.log(document.documentURI);
// console.log(document.title);
// document.title = "Day 06 - ICM120";


// let headingElement = document.getElementById("heading");
// let number = 0;
// function pluseHeading() {
//     console.log("pluse button clicked"+" " + ++number);
//     headingElement.innerText = "pluse";
// }
// function minusHeading() {
//     console.log("minus button clicked"+" " + --number);
//     headingElement.innerText = "minus";
// }

// function displayInput(){
//     console.log("display button clicked");
//     let inputid = document.getElementById("textInput");
//     console.log(inputid.value);
//     document.getElementById("inputvalue").innerText = inputid.value;
// }

//calculator=========================================

// let outputElement = document.getElementById("outputid");
// function addNumbers(){
//     console.log("add button clicked");
//     let num1 = document.getElementById("textInput");
//     console.log(num1.value);
//     let num2 = document.getElementById("textInput2");
//     console.log(num2.value);
//     let sum = parseInt(num1.value) + parseInt(num2.value);
//     console.log(sum);
//     outputElement.value = sum;
// }
// function subtractNumbers(){
//     console.log("subtract button clicked");
//     let num1 = document.getElementById("textInput");
//     console.log(num1.value);
//     let num2 = document.getElementById("textInput2");
//     console.log(num2.value);
//     let difference = parseInt(num1.value) - parseInt(num2.value);
//     console.log(difference);
//     outputElement.value = difference;


// }

// ADD CUSTOMER APPLICATIONS

let customerList = [];

function displayInput() {
    console.log("display button clicked");
    let textName = document.getElementById("textName").value;
    console.log(textName);
    let textAddress = document.getElementById("textAddress").value;
    console.log(textAddress);
    let textAge = document.getElementById("textAge").value;
    console.log(textAge);
    let textEmail = document.getElementById("textEmail").value;
    console.log(textEmail);
    let textSalary = document.getElementById("textSalary").value;
    console.log(textSalary);

    Customer = {
        name: textName,
        address: textAddress,
        age: textAge,
        email: textEmail,
        salary: textSalary
    }
    customerList.push(Customer);
    console.log(customerList);

}

    function loadTable() {
        let tblCustomers = document.getElementById("tblCustomers");

        let body = "";

        for (let i = 0; i < customerList.length; i++) {
            body += `<tr>
            <td>${customerList[i].name}</td>
            <td>${customerList[i].address}</td>
            <td>${customerList[i].age}</td>
            <td>${customerList[i].email}</td>
            <td>${customerList[i].salary}</td>
        </tr>`;
        }

        tblCustomers.innerHTML = body;

        console.log(tblCustomers);

    }
