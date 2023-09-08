// Open Closed principle is not followed

// function printQuiz(questions){
//     questions.forEach(que => {
//         console.log(que.description);
//         switch (que.type) {
//             case 'boolean':
//                 console.log('1. True');
//                 console.log('2. False');
//                 break;
            
//             case 'multipleChoice':
//                 que.options.forEach((option, index) => {
//                     console.log(`${index + 1}. ${option}`)
//                 })
//                 break;

//             case 'text':
//                 console.log('Answer: _________');
//                 break;

//             default:
//                 break;
//         }
//     });
// }

// const questions = [
//     {
//         type: 'boolean',
//         description: 'This video is useful'
//     },
//     {
//         type: 'multipleChoice',
//         description: 'What is your favourite language?',
//         options: ['C', 'C++', 'JavaScript', 'Python']
//     },
//     {
//         type: 'text',
//         description: 'Describe your favourite JS feature'
//     }
// ]

// printQuiz(questions)



// Open Closed principle is followed

class BooleanQuestion{
    constructor(description){
        this.description = description;
    }

    printQuestionChoices(){
        console.log('1. True');
        console.log('2. False');
    }
}

class MultipleChoiseQuestion{
    constructor(description, options){
        this.description = description;
        this.options = options;
    }

    printQuestionChoices(){
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`)
        })
    }
}

class TextQuestion{
    constructor(description){
        this.description = description;
    }

    printQuestionChoices(){
        console.log('Answer: _________');
    }
}

class RangeQuestion{
    constructor(description){
        this.description = description;
    }

    printQuestionChoices(){
        console.log('Speed limit: 100mph');
    }
}

// Here we can add/ modify questions without changing printQuiz function
function printQuiz(questions){
    questions.forEach(que => {
        console.log(que.description);
        que.printQuestionChoices();
    });
}

const questions = [
    new BooleanQuestion('This video is useful'),
    new MultipleChoiseQuestion(
        'What is your favourite language?',
        ['C', 'C++', 'JavaScript', 'Python']
    ),
    new TextQuestion('Describe your favourite JS feature.'),
    new RangeQuestion('What is the speed limit of your car?')
]

printQuiz(questions);