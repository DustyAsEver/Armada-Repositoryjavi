// task 1// 
let item1= 2;
let item2= 8;
let item3= 10;
let totalcost= item1+item2+item3

console.log("The total cost of the items is: $" + totalcost);

// task 2//

let num1= 2;
let num2= 8;
let num3= 10;
let avg= (num1+num2+num3)/3

console.log("The average is: "+ avg)


// task 3//
let num= 10;
if(num % 2 === 0){
    console.log(num + " is an even number")
}
else{
    console.log(num + " is an odd number")
}

// task 4//

let ogprice= 220;
let discpercent= 30;

let discamount= ((ogprice * discpercent) / 100);
let discprice= ogprice - discamount;

console.log("The discounted price is: $" + discprice);


// bonus task//

let dcprice= 154;
let dcpercent= 30;

let origprice= dcprice / (1 - dcpercent / 100);
console.log("The original price before the discount was: $" + origprice)

