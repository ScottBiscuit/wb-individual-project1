import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalDelSesNote({ setNotes, sessionNotes, sesNote}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    axios.delete(`/api/sessionNotes/${sesNote.sesId}/delete`, 
        { sesId: formState.sesId }).then((res) => {
           

            
          setNotes([res.data, ...sessionNotes])

          handleClose()
        })
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Session Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this session note?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type='submit' onClick={handleSubmit}>
            Delete Note
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
