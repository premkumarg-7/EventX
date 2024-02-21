import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import QuizStepper from "./components/quiz/QuizStepper"
import Quiz from "./components/quiz/Quiz"
import QuizResult from "./components/quiz/QuizResult"
import GetAllQuiz from "./components/quiz/GetAllQuiz"
import AddQuestion from "./components/question/AddQuestion"
import UpdateQuestion from "./components/question/UpdateQuestion"
import Navbar from "./components/layout/NavBar"
import Admin from "./components/AdminSystem/Admin"
import CodeCompiler from "./components/CodeCompiler/Main/CodeCompiler"
import CertificateGenerator from "./components/Certificate/CerificateGenertor"
import AdminLogin from "./components/AdminSystem/AdminLogin"
import Register from "./components/AdminSystem/Register"
import Desktop from "./components/HomePage/Desktop"
import UserRegister from "./components/Users/UserRegister"


function App() {
	return (
		<main className="container mt-5 mb-5">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Desktop />} />
					<Route path="/quiz-stepper" element={<QuizStepper />} />	
					<Route path="/take-quiz" element={<Quiz />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/compiler" element={<CodeCompiler/>}/>
					<Route path="/certificate" element={<CertificateGenerator/>}/>
					<Route path="/login" element={<AdminLogin/>}/>
					<Route path="/register" element={<Register/>}/>
					<Route path="/user-register" element={<UserRegister/>}/>

					<Route path="/create-quiz" element={<AddQuestion />} />
					<Route path="/update-quiz/:id" element={<UpdateQuestion />} />
					<Route path="/all-quizzes" element={<GetAllQuiz />} />
					<Route path="/quiz-result" element={<QuizResult />} />
				</Routes>
			</Router>
		</main>
	)
}

export default App
