//Task 1//

let book= {
    title: 'Halo: The Fall of Reach',
    author: 'Eric Nylund',
    pages: 416,
    isRead: false
}

console.log(book.title)
console.log(book.author)
console.log(book.pages)
console.log(book.isRead)
console.log(book["title"])
console.log(book["author"])
console.log(book["pages"])
console.log(book["isRead"])

book.isRead = true
console.log(book.isRead)

book.genre = "Science Fiction"
console.log(book)


//Task 2//

let movies = [
    {
        title: "13 Hours: The Secret Soldiers of Benghazi",
        director: "Michael Bay",
        year: "2016",
    },
    {
        title: "Star Wars: Episode III - Revenge of the Sith",
        director: "George Lucas",
        year: "2005",
    },
    {
        title: "Avenger: Endgame",
        director: "Anthony Russo, Joe Russo",
        year: "2019"
    }]

    console.log(movies[1].title)

    movies.push({
        title: "How to Train Your Dragon: The Hidden World",
        director:"Dean DeBlois",
        year: "2019"
    })

    movies[0].year = 2023
    
    console.log(movies)

//Task 3//

let student = {
    name: "Javi",
    age: "22",
    subjects: ["CpE Practice and Design 2" , "Seminars and Field Trips", "On the Job Training (240 hours)"]
}

console.log(student.subjects[0])

student.subjects.push("Art Appreciation")

console.log(student)

//Task 4//

let recipe = {
    name: "Burger",
    ingredients: [
        {
            name: "Large egg",
            quantity: "1"
        },
        {
            name: "salt",
            quantity: "1/2 teaspoon"
        },
        {
            name: "Ground black pepper",
            quantity: "1/2 teaspoon"
        },
        {
            name: "Ground beef",
            quantity: "1 pound"
        },
        {
            name: "Fine dry bread crumbs",
            quantity: "1/2 cup"
        }
    ],
        isVegetarian: false
}

recipe.ingredients.push(
    {
        name: "Broiche bun",
        quantity: "2"
    }
)

console.log(recipe)

