import React, { Component } from "react";
import {Container} from "../components/Grid";
import Format from "../components/Format";
import API from "../utils/API";

class Question extends React.Component{
      state={
        questions:[],
        count: 0,
        score: 0,
        tempScore: 10
      };

      getQuestions(){
        API.getQuestions()
          .then(res => {
              var unformatedQuestions = res.data
              var questions = unformatedQuestions.map(result => {
                result = {
                  Question: result.question,
                  Answer: [result.answers],
                  Correct: result.correct,
                  Hint: result.hint
                }
                return result;
              })
              this.setState({questions: questions})
          })
          .catch(err => console.log(err));
        // console.log("API loaded" ,this.state.questions);
      }
    
      componentDidMount(){
        this.getQuestions();
        // console.log("component did mount");
      }

      changeQuestion = (answer,correct) => {
        if(answer === correct && this.state.count === 4){
            alert("Congrats on finishing, your score is "+ (this.state.score + this.state.tempScore) + "\n Would you like to try again?")
            this.setState({count: 0, score: 0, tempScore: 10})
            return true;
        } else if(answer === correct){
            // console.log("changing count");
            let changeScore = this.state.tempScore + this.state.score;
            let temp = this.state.count;
            this.setState({count: temp + 1, score: changeScore, tempScore: 10});
            return true;
        } else {
            let temp = this.state.tempScore;
            if(this.state.tempScore===1){
                this.setState({tempScore: temp});
            }else{
                this.setState({tempScore: temp-3});
            }
            return false;
        }
      }

      sound(answer, correct){
        if(answer === correct){
            
        }
      }

      order(part){
            switch(part){
                case "question":
                    return this.state.questions[this.state.count].Question;
                case "answers":
                    return this.state.questions[this.state.count].Answer;
                case "correct":
                    return this.state.questions[this.state.count].Correct;
                case "hint": 
                    return this.state.questions[this.state.count].Hint;
            }
      } 

    render() {
        return(
            <Container>
                    {/* {console.log(this.state.questions)} */}
                    {/* {console.log(this.state.questions)} */}
                    {!this.state.questions.length ? (<h1>loading</h1>):(
                        <Format changeQuestion={this.changeQuestion} sound={this.sound} score={this.state.score} question={this.order("question")} answers={this.order("answers")} correct={this.order("correct")} hint={this.order("hint")}/>
                    )}
                    
            </Container>
        )
    }
}

export default Question;