import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function ModalAddDMNote({ setDMNotes, dmNotes }) {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formState, setFormState] = useState(
    {
        dmNoteIdeas: ""
    });

  const handleChange = (e) => {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    };
    
  const handleSubmit = () => {

    axios.post('/api/dmNotes', 
      { dmNoteId: formState.dmNoteId, dmNoteIdeas: formState.dmNoteIdeas }).then((res) => {
        setDMNotes([res.data, ...dmNotes])
        handleClose()
      })
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add New Idea
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Ideas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
        
            <Form.Group className="mb-3" >
              <Form.Label>Future Session Ideas</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Enter notes..." 
                name="dmNoteIdeas" 
                onChange={handleChange} 
                value={formState.dmNoteIdeas}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" type='submit' onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
