import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const SupplierTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [suppliers, setSuppliers] = useState([
    { id: 1, name: 'Компания А', contact: 'Иванов Иван', phone: '555-1234', email: 'ivanov@example.com', address: 'ул. Пушкина, 10' },
    { id: 2, name: 'Компания Б', contact: 'Петров Петр', phone: '555-5678', email: 'petrov@example.com', address: 'ул. Лермонтова, 5' }
    // Добавьте других поставщиков сюда
  ]);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Добавление нового поставщика в массив suppliers
    const newSupplier = {
      id: suppliers.length + 1, // Простейшая логика для назначения уникального ID (можно заменить на UUID)
      name: event.target.name.value,
      contact: event.target.contact.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      address: event.target.address.value
    };
    setSuppliers([...suppliers, newSupplier]);
    setShowModal(false);
  };

  return (
    <>
      <h1 className="my-4 text-center">Таблица поставщиков техники</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Контактное лицо</th>
            <th>Телефон</th>
            <th>Email</th>
            <th>Адрес</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>{supplier.name}</td>
              <td>{supplier.contact}</td>
              <td>{supplier.phone}</td>
              <td>{supplier.email}</td>
              <td>{supplier.address}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary" onClick={handleShowModal}>
        Добавить поставщика
      </Button>

      {/* Модальное окно для добавления поставщика */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить поставщика</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Наименование</Form.Label>
              <Form.Control type="text" name="name" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Контактное лицо</Form.Label>
              <Form.Control type="text" name="contact" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Телефон</Form.Label>
              <Form.Control type="text" name="phone" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Адрес</Form.Label>
              <Form.Control type="text" name="address" required />
            </Form.Group>
            <Form.Group>
                <Button variant="primary" type="submit">
                Добавить
                </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SupplierTable;