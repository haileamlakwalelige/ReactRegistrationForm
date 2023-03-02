import React from 'react';
import {useState} from 'react';


const QuizComp=()=>{
    var QuestionBank = [
        {
            Question: "What is the capital city of Ethiopia?",
            AnswerText:[
                {  Answer:"Addis Ababa", isCorrect:true},
                { Answer:"Bahir Dar", iscorrect:false},
                { Answer:"Hawasa", iscorrect:false},
                { Answer:"Adama", iscorrect:false}
            ]
        },
        {
            Question: "What is the PM of Ethiopia?",
            AnswerText:[
                {  Answer:"Abebe welde", isCorrect:false},
                { Answer:"Abiy Ahmed", iscorrect:true},
                { Answer:"Yilkal Kefyalew", iscorrect:false},
                { Answer:"Shimels Abdisa", iscorrect:false}
            ]
        },
        {
            Question: "What Universitiy is more useful for Learning in Ethiopia?",
            AnswerText:[
                {  Answer:"Addis Ababa", isCorrect:true},
                { Answer:"Bahir Dar", iscorrect:false},
                { Answer:"Hawasa", iscorrect:false},
                { Answer:"Adama", iscorrect:false}
            ]
        },
        {
            Question: "What is the capital city of Ethiopia?",
            AnswerText:[
                {  Answer:"Addis Ababa", isCorrect:true},
                { Answer:"Bahir Dar", iscorrect:false},
                { Answer:"Hawasa", iscorrect:false},
                { Answer:"Adama", iscorrect:false}
            ]
        },
        {
            Question: "What is the capital city of Ethiopia?",
            AnswerText:[
                {  Answer:"Addis Ababa", isCorrect:true},
                { Answer:"Bahir Dar", iscorrect:false},
                { Answer:"Hawasa", iscorrect:false},
                { Answer:"Adama", iscorrect:false}
            ]
        },
        {
            Question: "What 3 + 5?",
            AnswerText:[
                {  Answer:"2", isCorrect:false},
                { Answer:"4 ", iscorrect:false},
                { Answer:"6", iscorrect:false},
                { Answer:"8", iscorrect:true}
            ]
        },
    ]
    

     const [currentQuestion, setCurrentQuestion]=useState(0);
     const [score, setScore]=useState(0);
     const [showScore, setShowScore]=useState(false);



    console.log(QuestionBank);
    return(
        <div>
            {showScore ? (
                <div>You have scored {score} out of {QuestionBank.length}</div>
            ):(
                <>
                <div className="question...">
                <div className="question-num">
                        <span>{currentQuestion}</span>/{Question.length
                </div>
                    <div className="question-text">

                    </div>
                </div>
                </>
            )}
        </div>
    )
}
export default QuizComp;