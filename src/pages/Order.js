import React, { useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import useKanban from '../hooks/useKanban';
import {Form, FloatingLabel, Dropdown, Button, Card, Row, Col} from'react-bootstrap';



function Order () {
    
    const navigate = useNavigate();
    const {data, status, GetTasksId, GetStatus, UpdateTaskItem, DelTasksId} = useKanban();
    const params = useParams();
    const variant = ['Primary', 'Warning', 'Success', 'Danger', 'Secondary', 'Info' ];
    useEffect(()=>{
        GetTasksId(params);
        GetStatus();
    },[])
    return ( 
        <>
            <div className="row">
                <Card>
                    <Card.Header as="h5">{!data ? "" : data.task}</Card.Header>
                    <Card.Body>
                        <Card.Title>Карточка задачи</Card.Title>
                        <Row>
                            <Col>
                                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                    <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    defaultValue = {!data ? "" : data.description}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                    <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    defaultValue = {!data ? "" : data.description}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row style={{margin:"20px"}} className="text-center">
                            <Col>
                                <Dropdown>
                                    <Dropdown.Toggle variant={!data ? variant[0].toLowerCase() : variant[data.id-1].toLowerCase()} id="dropdown-basic">
                                        {!data ? "" : data.title}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {!status ? "" : status.map((item, index)=>{return(<Dropdown.Item key={index} onClick={()=>{
                                            UpdateTaskItem(data.guid, item.guid);
                                            window.location.reload();
                                            }}>{item.title}</Dropdown.Item>)})}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col>
                                <Button variant="success">Сохранить</Button>{' '}
                                <Button variant="danger" onClick={()=>{
                                    DelTasksId(params);
                                    navigate('/tasks');
                                }}>Удалить</Button>{' '}
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </div>
        </>
     );
}

export default Order ;