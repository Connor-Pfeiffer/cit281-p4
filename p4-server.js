/*
    CIT 281 Project 4
    Name: Connor Pfeiffer
*/

const fastify = require("fastify")();

/////////////////////////////////////////////////

const {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
  } = require("./p4-module.js"); //imports functions

  /////////////////////////////////////////////////

fastify.get("/cit/question", (request, reply) => {
  const obj = {
    error: "",
    statusCode: 200,
    questions: getQuestions()
  }
  reply
  .code(200)
  .header("Content-Type", "application/json; charset=utf-8")
  .send(obj);
});
  
///////////////////////////////////////////////////////////
  
fastify.get("/cit/answer", (request, reply) => {
  const obj = {
    error: "",
    statusCode: 200,
    answers: getAnswers()
  }
  reply
  .code(200)
  .header("Content-Type", "application/json; charset=utf-8")
  .send(obj);
});

//////////////////////////////////////////////////////////////

fastify.get("/cit/questionanswer", (request, reply) => {
  const obj = {
    error: "",
    statusCode: 200,
    questions_answers: getQuestionsAnswers()
  }
  reply
  .code(200)
  .header("Content-Type", "application/json; charset=utf-8")
  .send(obj);
});

///////////////////////////////////////////////////////////
  
fastify.get("/cit/question/:number", (request, reply) => {
  const { number } = request.params;
  let questionNumber = getQuestion(parseFloat(number));

  if (questionNumber == questionNumber) {
    const {error, question, number} = questionNumber;
    let codeNumber = (error != "") ? 404 : 200;
    const obj = {
      error: error,
      statusCode: codeNumber,
      question: question,
      number: number
    }
    reply
    .code(codeNumber)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(obj);
  }
});

//////////////////////////////////////////////////////////////

fastify.get("/cit/answer/:number", (request, reply) => {
  const { number } = request.params;
  let answerNumber = getAnswer(parseFloat(number));
  
  if (answerNumber == answerNumber) {
    const {error, answer, number} = answerNumber;
    let codeNumber = (error != "") ? 404 : 200;
    const obj = {
      error: error,
      statusCode: codeNumber,
      answer: answer,
      number: number
    }
    reply
    .code(codeNumber)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(obj);
  }
});


///////////////////////////////////////////////////////////
  
fastify.get("/cit/questionanswer/:number", (request, reply) => {
  const { number } = request.params;
  let questionAnswer = getQuestionAnswer(parseFloat(number));

  if (questionAnswer == questionAnswer) {
    const {error, question, answer, number} = questionAnswer;
    let codeNumber = (error != "") ? 404 : 200;
    const obj = {
      error: error,
      statusCode: codeNumber,
      question: question,
      answer: answer,
      number: number
    }
    reply
    .code(codeNumber)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(obj);
  }
});

//////////////////////////////////////////////////////////////
fastify.get("*", (request, reply) => {
  const obj = {
    error: "Not Found",
    statusCode: 404
  }
    reply
    .code(404)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(obj);
});
//////////////////////////////////////////////////////////////

const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
console.log(`Server listening on ${address}`);
});
