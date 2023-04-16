import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useKanban from '../hooks/useKanban';
import {Button, Form, Modal} from 'react-bootstrap';

const MModal = ({_colum}) => {
  const {InsertTaskItem} = useKanban();

  const [show, setShow] = useState(false);

  const [task, setTask] = useState();
  const [description, setDescription] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    if(task || description) {
      const newData = {
        guid: uuidv4(),
        task: task,
        description: description,
        status: _colum
      }
      InsertTaskItem(newData);
      window.location.reload();
      setShow(false);
    }
    else
    {
      alert("Fields cannot be empty!");
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name Task"
                autoFocus
                onChange={e => setTask(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3}
                onChange={e => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MModal;