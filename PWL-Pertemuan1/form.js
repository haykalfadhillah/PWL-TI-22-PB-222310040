import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    const [formData, setFormData] = useState({
        npm: "",
        firstName: "",
        middleName: "",
        lastName: "",
        birthdate: "",
    });
    const [showModal, setShowModal] = useState(false);
    const [age, setAge] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const calculateAge = (birthdate) => {
        const birthYear = new Date(birthdate).getFullYear();
        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.npm.match(/^\d{1,10}$/) || !formData.firstName || !formData.lastName || !formData.birthdate) {
            alert("Harap isi semua kolom yang wajib diisi dengan benar.");
            return;
        }
        setAge(calculateAge(formData.birthdate));
        setShowModal(true);
    };

    return (
        <div className="container mt-5">
            <h2>Form Data Diri</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>NPM</Form.Label>
                    <Form.Control type="text" name="npm" maxLength="10" value={formData.npm} onChange={handleChange} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Birthdate</Form.Label>
                    <Form.Control type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} required />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                    Submit
                </Button>
            </Form>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Informasi Data Diri</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>NPM: {formData.npm}</p>
                    <p>Fullname: {`${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim()}</p>
                    <p>Age: {age}th</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default App;
