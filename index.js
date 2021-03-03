const chalk = require('chalk');
 const log = console.log;

var readlinesync = require('readline-sync');
var score = 0;
function askname()
{
  var username = readlinesync.question("what is your good name ")
  log(chalk.cyanBright("welcome "+username+ " to my quiz about series"))
  console.log("----------------------")
}

function quiz2(question, answer)
{
var askquestion = readlinesync.question(question)
if(askquestion===answer)
  {
    log(chalk.green("you are right"));
    score = score+1
  }
  else
  {
    log(chalk.red("you are wrong"));
  }
  
  console.log("----------------------")
  
}

var questions = [
  {
    question:"how many season are there in game of throns series ? ",
    answer: "8"
  },
  {
    question: "lannister always pay its...... ",
    answer: "dept"
  },
  {
    question: "who was the first viking to sail west acording to vikings series? ",
    answer: "regnar"
  },
  {
    question: "how many sons ragnar lothbrok had? ",
    answer: "5"
  },
  {
    question: "dark series orignal language? ",
    answer: "german"
  },
   {
    question: "in which season michael leave office?  ",
    answer: "7"
  },
   {
    question: "who was the first intern in offic ",
    answer: "ryan"
  },
   {
    question: "is chernobaly series is based on real  ",
    answer: "yes"
  },
   {
    question: "how many brother does tommy selby had? ",
    answer: "3"
  },
  {
    question: "how many season are there in peaky blinders?  " ,
    answer: "5"

  },

];

function logicfor()
{
  for(var x=0; x<questions.length; x++)
  {
    quiz2(questions[x].question,questions[x].answer)
  }
}

askname()
logicfor()

log(chalk.bgBlueBright("your score is "+score+ " out of 10"))

log(chalk.yellowBright("current high score is 8, if you score more then 8 pls tell me "))
console.log("-------------------")


var username = readlinesync.question("do you want to know where i learn how to make this types of quiz?  ")
if(username==="yes")
{
  log(chalk.blue("well then checkout https://neog.camp/guide/home"))
}
else
{
  log(chalk.blue("ok, thank you for playing"))

}