import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const FileUploadModal = ({ show, handleClose, handleFileUpload, downloadTemplate }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>File Upload</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Upload an XLSX file to add questions, choices, and correct answers.</p>
        <Button variant="primary" onClick={handleFileUpload}>
          Upload File
        </Button>
        <Button variant="secondary" onClick={downloadTemplate} className="ms-2">
          Download Template
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default FileUploadModal;