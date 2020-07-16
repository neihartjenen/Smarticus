import axios from "axios";

export default {
    getQuestions: function(){
        return axios.get("/api/questions")
    },
    saveQuestions: function(question){
        return axios.post("/api/questions", question)
    } 
}