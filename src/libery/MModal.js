import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import {Button, Form, Modal} from 'react-bootstrap';
import useKanban from '../hooks/useKanban';

const UrlSender = (task, desc) => {
  // axios.get("https://jsonplaceholder.typicode.com/todos/1")
  // .then(response => console.log("response", response.data))
  // // {
  // //   "userId": 1,
  // //   "id": 1,
  // //   "title": "delectus aut autem",
  // //   "completed": false
  // // }

  axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: task,
    body: desc
  })
  .then(response => console.log(response.data))
  .catch(error => console.log(error));
}

const MModal = ({_index}) => {
  const [show, setShow] = useState(false);

  const [task, setTask] = useState();
  const [description, setDescription] = useState();

  const {kdata, setKdata} = useKanban();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    if(task || description) {
      Object.entries(kdata).map(([columnId, column], index)=>{
        if(_index === index)
        {
          const newData = {
            id: uuidv4(),
            Task: task,
            Decription: description,
            Due_Date: '10-May-2023',
          }
          column.items.push(newData);
          setKdata(column);
          UrlSender(task,description);
        }
      });
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