// Liskov Substitution principle not followed - according to this, 
// every subclass must be able to run makebirdfly function properly

// class Bird{
//     fly(){
//         console.log("I can fly.");
//     }
// }

// class Duck extends Bird{
//     quack(){
//         console.log("I can quack.");
//     }
// }

// class Penguin extends Bird{
//     fly(){
//         throw new Error("I cannot fly.");
//     }

//     swim(){
//         console.log("I can swim.");
//     }
// }

// function makeBirdFly(bird){
//     bird.fly();
// }

// const duck = new Duck();
// const penguin = new Penguin();

// makeBirdFly(duck);
// makeBirdFly(penguin);


// Liskov Substitution principle is followed - 
// every subclass is able to call respective function

class flyingBird{
    fly(){
        console.log("I can fly.");
    }
}

class swimmingBird{
    swim(){
        console.log("I can swim.");
    }
}

class Duck extends flyingBird{
    quack(){
        console.log("I can quack.");
    }
}

class Penguin extends swimmingBird{    
}

function makeFlyingBirdFly(bird){
    bird.fly();
}

function makeSwimmingBirdSwim(bird){
    bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);



// Liskov Substitution principle not followed

// class Rectangle{
//     constructor(width, height){
//         this.height = height;
//         this.width = width;
//     }

//     setWidth(width){
//         this.width = width;
//     }

//     setHeight(height){
//         this.height = height;
//     }

//     area(){
//         return this.height * this.width;
//     }
// }

// class Square extends Rectangle{
//     setHeight(height){
//         this.height = height;
//         this.width = height;
//     }

//     setWidth(width){
//         this.height = width;
//         this.width = width;
//     }

//     area(){
//         return this.height * this.width;
//     }
// }

// function increaseRectangleWidth(rectangle){
//     rectangle.setWidth(rectangle.width + 1);
// }

// const rectangle1 = new Rectangle(10, 2);
// const square = new Square(5, 5);

// increaseRectangleWidth(rectangle1);
// increaseRectangleWidth(square);

// console.log(rectangle1.area())
// console.log(square.area())



// Liskov Substitution principle not followed

// class Shape{
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }

//     area(){
//         return this.height * this.width;
//     }
// }

// class Rectangle extends Shape{
//     constructor(width, height){
//         this.height = height;
//         this.width = width;
//     }

//     setWidth(width){
//         this.width = width;
//     }

//     setHeight(height){
//         this.height = height;
//     }

//     // area(){
//     //     return this.height * this.width;
//     // }
// }

// class Square extends Shape{
//     setHeight(height){
//         this.height = height;
//         this.width = height;
//     }

//     setWidth(width){
//         this.height = width;
//         this.width = width;
//     }

//     // area(){
//     //     return this.height * this.width;
//     // }
// }

// function increaseRectangleWidth(rectangle){
//     rectangle.setWidth(rectangle.width + 1);
// }

// const rectangle1 = new Rectangle(10, 2);
// const square = new Square(5, 5);

// increaseRectangleWidth(rectangle1);
// increaseRectangleWidth(square);

// console.log(rectangle1.area())
// console.log(square.area())