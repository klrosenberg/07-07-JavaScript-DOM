// Variable objects for each question storing the question, correct answer and multiple chocies.

var question1 = {
  question: "A magical jar of jelly beans doubles the number of jelly beans every minute.  The jar is full at noon.  When is it half full?",
  answer: "11:59",
  possibleAnswers: ["11:59", "11:30", "It is impossible to answer this question.", "12:01"]
};

var question2 = {
  question: "Kerry, Wendy and Sumeet have 12 dinosaurs. Kerry has twice as many as Wendy, and Sumeet has three times as many as Wendy. How many dinosaurs does Sumeet have?",
  answer: 6,
  possibleAnswers: [4, 2, 6, 3]
};

var question3 = {
  question: "|1|2|3|\n|4|5|6|\n|7|8|9|\n\nIn a game of tic-tac-toe, assuming your opponent is a savvy player, what would be a losing first move?",
  answer: 4,
  possibleAnswers: [1, 3, 4, 5]
};

var question4 = {
  question: "You have 27 coins, each of them weighing 10 ounces. Except for one, which either weighs 9 or 11 ounces. You have a balance scale. What is the minimum number of weighings to determine which coin is different?",
  answer: 3,
  possibleAnswers: [3, 4, 5, 14] 
};

// returns all choices for this question as a String
//
//   question - Question object
//
// returns String
function getAllChoicesAsString(question) {
  choices = "";
  for (count = 0; count < question.possibleAnswers.length; count++ ){
    choices += "\n" + (count + 1) + ". " + question.possibleAnswers[count];
  };
  return choices;
};

//
function given_answer(){
  return document.getElementById("answer").value
};

// TODO check for valid answer
//
function choiceToIndex(answer_text){
  answerIndex = parseInt(answer_text);
  return (answerIndex - 1);
}

//
function is_correct_answer(answer_text, question){
  i = choiceToIndex(answer_text);
  if (question.possibleAnswers[i] === question.answer){
    return true;
  }
  else {
    return false;
  };    
};

//
function update_question_result(correct){
  var questionHTML = document.getElementById("question_result");
  if (correct){
    questionHTML.innerText = "Success!";
  }
  else{
    questionHTML.innerText = "Wrong! Which is harsh in my opinion."
  }
}

//
var questions = [question1, question2, question3, question4]

//
window.onload = function() {
  var questionHTML = document.getElementById("question");

  questionHTML.innerText = question1.question;
  
  var possibleAnswersHTML = document.getElementById("choices");
  
  possibleAnswersHTML.innerText = getAllChoicesAsString(question1);  
  
}


