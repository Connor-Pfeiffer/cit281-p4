/*
    CIT 281 Project 4
    Name: Connor Pfeiffer
*/

const {data} = require("./p4-data.js"); //imports data array

//////////////////////////////////////////////////////////
function getQuestions(){
    let result = data.map(({ question }) => question);
    return result;
}

//////////////////////////////////////////////////////////
function getAnswers(){
    let result = data.map(({ answer }) => answer);
    return result;
}


//////////////////////////////////////////////////////////
function getQuestionsAnswers(){
    return data;
}

//////////////////////////////////////////////////////////
function getQuestion(number = ""){
 let questions= {
  error: "",
  question: "",
  number: ""
 };
if (!Number.isInteger(number)){
  questions.error = "Question number must be an integer"
}
else if(number > 3){
  questions.error = "Question number must be less than the number of question (3)"
}
else if (number <1 ){
  questions.error = "Question number must be greater than >= 1"
}
else{
let indexValue = number - 1;
questions.question = data[indexValue].question;
questions.number = number;
}

    return questions;
  
}


//////////////////////////////////////////////////////////
function getAnswer(number = ""){
  let questions= {
    error: "",
    answer: "",
    number: ""
   };
  if (!Number.isInteger(number)){
    questions.error = "Answer number must be an integer"
  }
  else if(number > 3){
    questions.error = "Answer number must be less than the number of answer (3)"
  }
  else if (number <1 ){
    questions.error = "Answer number must be greater than >= 1"
  }
  else{
  let indexValue = number - 1;
  questions.answer = data[indexValue].answer;
  questions.number = number;
  }
  
      return questions;
    
  }


//////////////////////////////////////////////////////////
function getQuestionAnswer(number = ""){
  let questions= {
    error: "",
    question: "",
    answer: "",
    number: ""
   };
  if (!Number.isInteger(number)){
    questions.error = "Question number must be an integer"
  }
  else if(number > 3){
    questions.error = "Question number must be less than the number of question (3)"
  }
  else if (number <1 ){
    questions.error = "Question number must be greater than >= 1"
  }
  else{
  let indexValue = number - 1;
  questions.question = data[indexValue].question;
  questions.answer = data[indexValue].answer;
  questions.number = number;
  }
  
      return questions;
}

console.log(getQuestionAnswer(2))

//////////////////////////////////////////////////////////

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "(1)", f: getQuestion(1) },
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "(1)", f: getAnswer(1) },
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "(1)", f: getQuestionAnswer(1) },
    );
  }


module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
  };
