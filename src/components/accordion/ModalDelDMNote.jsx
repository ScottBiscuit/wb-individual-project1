import React from 'react'
import {  BsFillTrashFill } from 'react-icons/bs';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


export default function ModalDelDMNote({ setDMNotes, sessionNotes, dmNote}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formState, setFormState] = useState(
    {
      dmNoteIdeas: dmNote.dmNoteIdeas,
    });

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      };

  const handleSubmit = () => {

    axios.delete(`/api/sessionNotes/${dmNote.dmNoteId}/delete`, 
      { dmNoteId: formState.dmNoteId }).then((res) => {

        const deletedResData = dmNote.dmNoteId

        function findDeleted(sessionNotes, deletedResData){
          for(let i = 0; i < sessionNotes.length; i++){
            if(sessionNotes[i].dmNoteId === deletedResData){
              console.log(i)
              return i;
            }
          }
        }
        sessionNotes.splice(findDeleted(sessionNotes, deletedResData), 1)

        setNotes([...sessionNotes])

        handleClose()
      })
  };

return (
  <>
    <Button variant="success" onClick={handleShow}>
      <BsFillTrashFill />
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
        <Button variant="success" type='submit' onClick={handleSubmit}>
          Delete Note
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}
