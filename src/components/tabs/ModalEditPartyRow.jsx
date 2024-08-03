import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function ModalEditPartyRow({ party, setParty, PC }) {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formState, setFormState] = useState(
    {
        pcName: party.pcName,
        pcRace: party.pcClass,
        pcLevel: party.pcLevel,
        pcBackstory: party.pcBackstory,
        pcGoals: party.pcGoals,
        pcExtras: party.pcExtras
    });

  const handleChange = (e) => {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    };

  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.pcName && formState.pcRace && formState.pcClass && formState.pcLevel) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };
    
  const handleSubmit = () => {

    if (!validateForm()) return;

    axios.put(`/api/party/${party.pcId}`, 
      { pcId: formState.pcId, pcRace: formState.pcRace, pcClass: formState.pcClass, pcLevel: formState.pcLevel, pcBackstory: formState.pcBackstory, pcGoals: formState.pcGoals, pcExtras: formState.pcExtras, pcImg: formState.pcImg }).then((res) => {
        
        const editedResData = party.pcId

        function findEdit(party, editedResData){
          for(let i = 0; i < party.length; i++){
            if(party[i].pcId === editedResData){
              console.log(i)
              return i;
            }
          }
        }
        party.splice(findEdit(party, editedResData), 1, res.data)

        setParty([...party])

        handleClose()
      })
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Party Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Character Name:</Form.Label>
              <Form.Control 
                as="input" 
                placeholder="Enter Name"
                name="pcName" 
                onChange={handleChange} 
                value={formState.pcName}
                autoFocus 
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Race/Species:</Form.Label>
              <Form.Control
                as="input"  
                placeholder="Enter Race"
                name="pcRace" 
                onChange={handleChange} 
                value={formState.pcRace}
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Class/Subclass:</Form.Label>
              <Form.Control 
                as="input" 
                placeholder="Enter Class/Subclass" 
                name="pcClass" 
                onChange={handleChange} 
                value={formState.pcClass} 
                />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Level:</Form.Label>
              <Form.Control 
                as="input" 
                placeholder="#" 
                name="pcLevel" 
                onChange={handleChange} 
                value={formState.pcLevel} 
                />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
        {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type='submit' onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
