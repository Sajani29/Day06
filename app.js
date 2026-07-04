console.log("hello day 06");

let Customer1 = {
    name: "John Doe",
    age: 30,
    email: "mial@.com",
    items: [
        {
            itemName: "Item 1",
            itemPrice: 100,
            variant: {
                color: "red",
                size: "M"
            }  
        },
        {
            itemName: "Item 2",
            itemPrice: 200 ,
            variant: {
                color: "blue",
                size: "L"
            }
        },
        {
            itemName: "Item 3",
            itemPrice: 300 ,
            variant: {
                color: "green",
                size: "S"
            }
        }
    ],
    father: {
        name: "John Doe Sr.",
        age: 60,
        email: "father@.com"
    }
};
console.log(Customer1.name);
console.log(Customer1.age); 
console.log(Customer1.email);
console.log(Customer1.items);
console.log(Customer1.father.name);
console.log(Customer1.father.age);
console.log(Customer1.father.email);    
console.log(Customer1.items[0]);
console.log(Customer1.items[0].itemName);
console.log(Customer1.items[0].itemPrice);
console.log(Customer1.items[0].variant.color);
console.log(Customer1.items[0].variant.size);   