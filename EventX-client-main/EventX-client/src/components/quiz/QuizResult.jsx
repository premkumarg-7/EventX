import React from "react"
import {useLocation, useNavigate} from "react-router-dom"

 const QuizResult = () => {
		const location = useLocation()
		const { quizQuestions, totalScores } = location.state
		const numQuestions = quizQuestions.length
		const percentage = Math.round((totalScores / numQuestions) * 100)
		const navigate =useNavigate();

		const handleRetakeQuiz = () => {
			alert("Oops! this functionality was not implemented!!!")
		}
		const getCertificate =()=>{
			navigate("/certificate")
		}

		return (
			<section className="container mt-5">
				<h3>Your Quiz Result Summary</h3>
				<hr />
				<h5 className="text-info">
					You answered {totalScores} out of {numQuestions} questions correctly.
				</h5>
				<p>Your total score is {percentage}%.</p>

				<button className="btn btn-primary btn-sm" onClick={handleRetakeQuiz}>
					Retake this quiz
				</button>
				<button className="btn btn-success btn-sm" onClick={getCertificate}>
					Get Certificate
					</button>
			</section>
		)
 }

 export default QuizResult