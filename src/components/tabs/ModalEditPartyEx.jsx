import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function ModalEditPartyEx({ party, setParty, PC }) {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formState, setFormState] = useState(
    {
        pcImg: PC.pcImg,
        pcName: PC.pcName,
        pcRace: PC.pcRace,
        pcClass: PC.pcClass,
        pcLevel: PC.pcLevel,
        pcBackstory: PC.pcBackstory,
        pcGoals: PC.pcGoals,
        pcExtras: PC.pcExtras
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

    axios.put(`/api/party/${PC.pcId}`, 
      { pcId: formState.pcId, pcName: formState.pcName, pcRace: formState.pcRace, pcClass: formState.pcClass, pcLevel: formState.pcLevel, pcBackstory: formState.pcBackstory, pcGoals: formState.pcGoals, pcExtras: formState.pcExtras, pcImg: formState.pcImg }).then((res) => {
        
        const editedResData = PC.pcId

        function findEdit(PC, editedResData){
          for(let i = 0; i < PC.length; i++){
            if(PC[i].pcId === editedResData){
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
          <Modal.Title>Edit Party Member - Extra Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Character Extra Info:</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={10} 
                placeholder="Enter extra info..." 
                name="pcExtras" 
                onChange={handleChange} 
                value={formState.pcExtras}
                autoFocus 
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
