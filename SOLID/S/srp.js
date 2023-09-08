// Single Responsibility Principle is not followed

// class calorieTracker {
//     constructor(maxCalories){
//         this.maxCalories = maxCalories;
//         this.currentCalories = 0;
//     }

//     trackCalories(calorieCount) {
//         this.currentCalories += calorieCount;
//         if(this.currentCalories > this.maxCalories){
//             this.logCalorieSurplus();
//         }
//     }

//     logCalorieSurplus(){
//         console.log("Maximum calories exceeded.");
//     }
// }

// const CalorieTracker = new calorieTracker(2000);
// CalorieTracker.trackCalories(500);
// CalorieTracker.trackCalories(1000);
// CalorieTracker.trackCalories(800);


// Single Responsibility Principle is followed - Here we've separated log message function into another js file

import logCalorieSurplus from "./log.js"

class calorieTracker {
    constructor(maxCalories){
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    trackCalories(calorieCount) {
        this.currentCalories += calorieCount;
        if(this.currentCalories > this.maxCalories){
            logCalorieSurplus("Maximum limit exceeded.");
        }
    }    
}

const CalorieTracker = new calorieTracker(2000);
CalorieTracker.trackCalories(500);
CalorieTracker.trackCalories(1000);
CalorieTracker.trackCalories(800);