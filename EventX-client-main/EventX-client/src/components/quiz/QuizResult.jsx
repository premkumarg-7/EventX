import React, { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"

const QuizResult = () => {
	const location = useLocation()
	const navigate = useNavigate()

	console.log("Location state ", location.state)

	const { quizQuestions, totalScores ,userId ,subject} = location.state || {}
	const numQuestions = quizQuestions?.length || 0
	const percentage = numQuestions ? Math.round((totalScores / numQuestions) * 100) : 0

	useEffect(() => {
		window.history.replaceState(null, "", window.location.href)
	}, [])
	useEffect(() => {
		const sendQuizResults = async () => {
			try {
				await axios.post("http://localhost:9192/api/quizzes/update_marks", {
					userId :userId,
					obtained_marks: totalScores,
					total_marks: numQuestions,
					percentage: percentage,
					subject:subject
				})
			} catch (err) {
				alert("Something went wrong: " + err.message)
			}
		}

		if (numQuestions > 0) {
			sendQuizResults()
		}
	}, [numQuestions, totalScores, percentage])

	const handleRetakeQuiz = () => {
		alert("Oops! This functionality was not implemented!!!")
	}

	const getCertificate = () => {
		console.log("Navigating to certificate with userId:", userId);
		if (userId) {
			navigate("/certificate", { state: { userId } });
		} else {
			alert("User ID is missing! Cannot generate certificate.");
		}
	};
	

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
