import React, { Component } from "react";
import {Container} from "../components/Grid";
import Format from "../components/Format";
import API from "../utils/API";

class Question extends React.Component{
      state={
        questions:[],
        count: 0
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
            alert("You win!!!!!")
            return true;
        } else if(answer === correct){
            console.log("changing count");
            let temp = this.state.count;
            this.setState({count: temp + 1})
            return true;
        } else {
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
                        <Format changeQuestion={this.changeQuestion} sound={this.sound} question={this.order("question")} answers={this.order("answers")} correct={this.order("correct")} hint={this.order("hint")}/>
                    )}
                    
            </Container>
        )
    }
}

export default Question;