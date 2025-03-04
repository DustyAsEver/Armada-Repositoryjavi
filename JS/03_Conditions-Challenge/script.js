//Task 1//

let score= 22;

switch(true){
    case score >= 90:
        console.log("Grade A")
        break;
    case score >= 80:
        console.log("Grade B")
        break;
    case score >=70:
        console.log("Grade C")
        break;
    case score >= 60:
        console.log("Grade D")
        break;
    default:
        console.log("Grade F")
}


//Task 2//

let temp = 10;

switch (true){
    case temp < 0:
        console.log("It's freezing outside! Bundle up!")
        break;
    case temp >= 0 && temp <= 15:
        console.log("It's cold outside. Wear a jacket.")
        break;
    case temp >= 16 && temp <= 30:
        console.log("The weather is nice. Enjoy your day!")
        break;
    default:
        console.log("It's hot outside. Stay hydrated!")
}


//Task 3//

let age = 29;

switch (true){
    case age < 13:
        console.log("You are to young for this activity.")
        break;
    case age >= 13 && age <= 17:
        console.log("You need parental permission.")
        break;
    default:
        console.log("You are eligible for this activity.")
}

//Task4//

let agee = 14;
let isMember = true;

switch(true){
    case agee < 12:
        console.log("The ticket is Free")
        break;
    case agee > 11 && isMember === true:
        console.log("The ticket cost $10")
        break;
    case agee > 11 && isMember === false:
        console.log("The ticket price is $15")
        break;
}

//Task 5//

let year = 2023;

function isLeapYear(){
    if(year % 4 == 0 && year % 100 !== 0 || year % 400 == 0){
        return true
    }else {
        return false
    }
}

console.log(isLeapYear())