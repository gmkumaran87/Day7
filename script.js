class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG(moviesArr) {
        console.log(moviesArr);
        const pgMovies = moviesArr.filter((el) => el.rating === "PG");
        return pgMovies;
    }
}

const indian = new Movie("Indian", "Oscars Productions");
const anniyan = new Movie("Anniyan", "Shankar", "PG");
const gentleman = new Movie("Gentleman", "Shankar", "PG");
const boys = new Movie("Boys", "Shankar", "PG13");

const movie1 = new Movie("Casino Royal", "Eon Productions", "PG13");
console.log(movie1.getPG([indian, anniyan, boys, gentleman]));

console.log(indian);

// Circle Class

class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return `Radius of the circle is ${this.radius}`;
    }
    setRadius(newRadius) {
        this.radius = newRadius;
    }

    getColor() {
        return `Color of the circle is ${this.color}`;
    }

    setColor(newColor) {
        this.color = newColor;
    }

    getArea() {
        const area = Math.PI * Math.pow(this.radius, 2);
        return `Area of the Circle is ${area}`;
    }

    getCircumference() {
        const circum = 2 * Math.PI * this.radius;
        return `Circumference of the circle is ${circum}`;
    }

    toString() {
        return `Circle[radius=${this.radius},  circle=${this.color}]`;
    }
}

const circle1 = new Circle(5, "green");

console.log(circle1.toString());

console.log(circle1.getArea());

console.log(circle1.getCircumference());

circle1.setColor("Blue");
circle1.setRadius(10);
console.log(circle1.toString());

// Person Class

class Person {
    constructor(name, age, profession, weight) {
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.weight = weight;
    }

    getPerson() {
        return `Person name is ${this.name} and his age is ${this.age} with the weight of ${this.weight} and he is a ${this.profession}`;
    }

    setDetails(name, age, profession) {
        this.name = name;
        this.profession = profession;
        this.age = age;
    }
}

const person1 = new Person("Muthu", 33, "Software Engineer", 65);

console.log(person1.getPerson());