import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function ModalAddSesNote() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddNewSes = async (event, { sesId, sesNumber, sesDate, sesPartyLvl, sesNotes }) => {
    event.preventDefault();
    const res = await axios.post('/api/sessionNotes', { sesId: sesId, sesNumber: sesNumber, sesDate: sesDate, sesPartyLvl: sesPartyLvl, sesNotes: sesNotes })
    handleClose;
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Session
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Session Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Session Number</Form.Label>
              <Form.Control 
                as="input" 
                placeholder="#"
                autoFocus 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Session Date</Form.Label>
              <Form.Control
                type="date" 
                placeholder="Example - 2024-12-25"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Average Party Level</Form.Label>
              <Form.Control as="input" placeholder="#"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Session Notes</Form.Label>
              <Form.Control as="textarea" rows={10} placeholder="Enter notes..."/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddNewSes}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
