import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { createQuestion, getSubjects } from "../../../utils/QuizService"
import FileUploadModal from "./FileUploadModal" // Import the modal component
import QuestionPreviewModal from "./QuestionPreviewModal" // Import the preview modal component
import * as XLSX from "xlsx" // Import the xlsx library

const AddQuestion = () => {
	const [question, setQuestionText] = useState("")
	const [questionType, setQuestionType] = useState("single")
	const [choices, setChoices] = useState([""])
	const [correctAnswers, setCorrectAnswers] = useState([""])
	const [subject, setSubject] = useState("")
	const [newSubject, setNewSubject] = useState("")
	const [subjectOptions, setSubjectOptions] = useState([""])
	const [showModal, setShowModal] = useState(false) // State to control the modal
	const [showPreviewModal, setShowPreviewModal] = useState(false) // State to control the preview modal
	const [uploadedQuestions, setUploadedQuestions] = useState([]) // State to store uploaded questions
	const fileInputRef = useRef(null)

	useEffect(() => {
		fetchSubjects()
	}, [])

	const fetchSubjects = async () => {
		try {
			const subjectsData = await getSubjects()
			setSubjectOptions(subjectsData)
		} catch (error) {
			console.error(error)
		}
	}

	const handleAddChoice = () => {
		const lastChoice = choices[choices.length - 1]
		const lastChoiceLetter = lastChoice ? lastChoice.charAt(0) : "A"
		const newChoiceLetter = String.fromCharCode(lastChoiceLetter.charCodeAt(0) + 1)
		const newChoice = `${newChoiceLetter}.`
		setChoices([...choices, newChoice])
	}

	const handleRemoveChoice = (index) => {
		setChoices(choices.filter((choice, i) => i !== index))
	}

	const handleChoiceChange = (index, value) => {
		setChoices(choices.map((choice, i) => (i === index ? value : choice)))
	}

	const handleCorrectAnswerChange = (index, value) => {
		setCorrectAnswers(correctAnswers.map((answer, i) => (i === index ? value : answer)))
	}

	const handleAddCorrectAnswer = () => {
		setCorrectAnswers([...correctAnswers, ""])
	}

	const handleRemoveCorrectAnswer = (index) => {
		setCorrectAnswers(correctAnswers.filter((answer, i) => i !== index))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const result = {
				question,
				questionType,
				choices,
				correctAnswers: correctAnswers.map((answer) => {
					const choiceLetter = answer.charAt(0).toUpperCase()
					const choiceIndex = choiceLetter.charCodeAt(0) - 65
					return choiceIndex >= 0 && choiceIndex < choices.length ? choiceLetter : null
				}),

				subject
			}

			await createQuestion(result)

			setQuestionText("")
			setQuestionType("single")
			setChoices([""])
			setCorrectAnswers([""])
			setSubject("")
		} catch (error) {
			console.error(error)
		}
	}

	const handleAddSubject = () => {
		if (newSubject.trim() !== "") {
			setSubject(newSubject.trim())
			setSubjectOptions([...subjectOptions, newSubject.trim()])
			setNewSubject("")
		}
	}

	const handleShowModal = () => setShowModal(true)
	const handleCloseModal = () => setShowModal(false)

	const handleFileUpload = (event) => {
		const file = event.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = (e) => {
				const data = new Uint8Array(e.target.result)
				const workbook = XLSX.read(data, { type: "array" })
				const sheetName = workbook.SheetNames[0]
				const worksheet = workbook.Sheets[sheetName]
				const jsonData = XLSX.utils.sheet_to_json(worksheet)

				const questions = jsonData.map((row) => ({
					question: row.question,
					choices: row.choices.split(","),
					correctAnswers: row.correctAnswers.split(","),
					questionType: row.correctAnswers.split(",").length > 1 ? "multiple" : "single",
					subject: subject
				}))

				setUploadedQuestions(questions)
				setShowPreviewModal(true)
			}
			reader.readAsArrayBuffer(file)
		}
		handleCloseModal()
	}

	const handleRemoveQuestion = (index) => {
		const updatedQuestions = [...uploadedQuestions]
		updatedQuestions.splice(index, 1)
		setUploadedQuestions(updatedQuestions)
	}

	const handleSaveQuestions = async () => {
		try {
			for (const question of uploadedQuestions) {
				await createQuestion(question)
			}
			setShowPreviewModal(false)
			// Optionally, you can clear the form or show a success message
		} catch (error) {
			console.error(error)
		}
	}

	const handleQuestionChange = (index, field, value) => {
		const updatedQuestions = [...uploadedQuestions]
		updatedQuestions[index][field] = value
		setUploadedQuestions(updatedQuestions)
	}

	const downloadTemplate = () => {
		const header = ["question", "choices", "correctAnswers"]
		const data = [
			{
				question: "Sample question?",
				choices: "A,B,C,D",
				correctAnswers: "A"
			}
		]

		const worksheet = XLSX.utils.json_to_sheet(data, { header })
		const workbook = XLSX.utils.book_new()
		XLSX.utils.book_append_sheet(workbook, worksheet, "Template")
		XLSX.writeFile(workbook, "question_template.xlsx")
	}

	const getFile = () => {
		fileInputRef.current.click()
	}

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6  mt-5">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Add New Questions</h5>
						</div>
						<div className="card-body">
							<form onSubmit={handleSubmit} className="p-2">
								<div className="mb-3">
									<label htmlFor="subject" className="form-label text-info">
										Select a Subject
									</label>
									<select
										id="subject"
										value={subject}
										onChange={(e) => setSubject(e.target.value)}
										className="form-control">
										<option value="">Select subject</option>
										<option value={"New"}>Add New</option>
										{subjectOptions.map((option) => (
											<option key={option} value={option}>
												{option}
											</option>
										))}
									</select>
								</div>

								{subject === "New" && (
									<div className="mb-3">
										<label htmlFor="new-subject" className="form-label text-info">
											Add New Subject
										</label>
										<input
											type="text"
											id="new-subject"
											value={newSubject}
											onChange={(event) => setNewSubject(event.target.value)}
											className="form-control"
										/>
										<button
											type="button"
											onClick={handleAddSubject}
											className="btn btn-outline-primary mt-2">
											Add Subject
										</button>
									</div>
								)}
								<div className="mb-3">
									<div className="row justify-content-end">
										<div className="col-md-4">
											<input
												type="file"
												ref={fileInputRef}
												style={{ display: "none" }}
												onChange={handleFileUpload}
												accept=".xlsx, .xls"
											/>
											<button
												type="button"
												onClick={handleShowModal} // Show the modal on button click
												className="btn btn-outline-primary mt-2">
												Upload File
											</button>
										</div>
									</div>
									<label htmlFor="question-text" className="form-label text-info">
										Question
									</label>
									<textarea
										className="form-control"
										rows={4}
										value={question}
										onChange={(e) => setQuestionText(e.target.value)}></textarea>
								</div>
								<div className="mb-3">
									<label htmlFor="question-type" className="form-label text-info">
										Question type
									</label>
									<select
										id="question-type"
										value={questionType}
										onChange={(event) => setQuestionType(event.target.value)}
										className="form-control">
										<option value="single">Single Answer</option>
										<option value="multiple">Multiple Answer</option>
									</select>
								</div>
								<div className="mb-3">
									<label htmlFor="choices" className="form-label text-primary">
										Choices
									</label>
									{choices.map((choice, index) => (
										<div key={index} className="input-group mb-3">
											<input
												type="text"
												value={choice}
												onChange={(e) => handleChoiceChange(index, e.target.value)}
												className="form-control"
											/>
											<button
												type="button"
												onClick={() => handleRemoveChoice(index)}
												className="btn btn-outline-danger">
												Remove
											</button>
										</div>
									))}
									<button
										type="button"
										onClick={handleAddChoice}
										className="btn btn-outline-primary">
										Add Choice
									</button>
								</div>
								{questionType === "single" && (
									<div className="mb-3">
										<label htmlFor="answer" className="form-label text-success">
											Correct Answer
										</label>
										<input
											type="text"
											className="form-control"
											id="answer"
											value={correctAnswers[0]}
											onChange={(e) => handleCorrectAnswerChange(0, e.target.value)}
										/>
									</div>
								)}
								{questionType === "multiple" && (
									<div className="mb-3">
										<label htmlFor="answer" className="form-label text-success">
											Correct Answer(s)
										</label>
										{correctAnswers.map((answer, index) => (
											<div key={index} className="d-flex mb-2">
												<input
													type="text"
													className="form-control me-2"
													value={answer}
													onChange={(e) => handleCorrectAnswerChange(index, e.target.value)}
												/>
												{index > 0 && (
													<button
														type="button"
														className="btn btn-danger"
														onClick={() => handleRemoveCorrectAnswer(index)}>
														Remove
													</button>
												)}
											</div>
										))}
										<button
											type="button"
											className="btn btn-outline-info"
											onClick={handleAddCorrectAnswer}>
											Add Correct Answer
										</button>
									</div>
								)}

								{!correctAnswers.length && <p>Please enter at least one correct answer.</p>}

								<div className="btn-group">
									<button type="submit" className="btn btn-outline-success mr-2">
										Save Question
									</button>
									<Link to={"/all-quizzes"} className="btn btn-outline-primary ml-2">
										Back to existing questions
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<FileUploadModal
				show={showModal}
				handleClose={handleCloseModal}
				handleFileUpload={getFile}
				downloadTemplate={downloadTemplate}
			/>
			<QuestionPreviewModal
				show={showPreviewModal}
				handleClose={() => setShowPreviewModal(false)}
				questions={uploadedQuestions}
				handleSave={handleSaveQuestions}
				handleQuestionChange={handleQuestionChange}
				handleRemoveQuestion={handleRemoveQuestion}
			/>
		</div>
	)
}

export default AddQuestion
