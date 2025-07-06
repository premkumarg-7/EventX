import React from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

const QuestionPreviewModal = ({ show, handleClose, questions, handleSave, handleQuestionChange, handleRemoveQuestion }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Uploaded Questions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Question</th>
              <th>Choices</th>
              <th>Correct Answer(s)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="text"
                    value={question.question}
                    onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={question.choices.join(',')}
                    onChange={(e) => handleQuestionChange(index, 'choices', e.target.value.split(','))}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={question.correctAnswers.join(',')}
                    onChange={(e) =>
                      handleQuestionChange(index, 'correctAnswers', e.target.value.split(','))
                    }
                    className="form-control"
                  />
                </td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => handleRemoveQuestion(index)}>
                    ✗
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default QuestionPreviewModal;