import axios from "axios";
import React from "react";
import { useState } from "react";
import "./User.css";
import { Link, useNavigate } from "react-router-dom";
import { Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";

const User = ({getUsersData}) => {
  const [form, setform] = useState({});
  const [modal, setmodal] = useState(false);
  const nav = useNavigate()

  const getvalues = (e) => {
    const { name, value } = e.target;

    setform({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://masaiverse666.herokuapp.com/user", form)
      .then((res) => (
        getUsersData(),
        alert("successfully registered"),
        nav("/admin")
        ))
      .catch((error)=>{
           alert("Error While Uploading Data")
      });
      setmodal(!modal)
  };

  return (
    <div className="form-div">
        <h1>USER PAGE</h1>
      <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader toggle={() => setmodal(!modal)}></ModalHeader>
        <ModalBody>
          <form action="" onSubmit={handleSubmit}>
            <Row>
              <Col lg={12}>
                <div>
                  <label htmlFor="Name">Name</label>
                  <input
                    onChange={getvalues}
                    required={true}
                    className="form-control"
                    name="Name"
                    type="text"
                    placeholder="Enter Name"
                    id=""
                  />
                  <label htmlFor="Name">Age</label>
                  <input
                    onChange={getvalues}
                    required={true}
                    className="form-control"
                    name="Age"
                    type="number"
                    placeholder="Enter Age"
                    id=""
                  />
                  <label htmlFor="Name">Place</label>
                  <input
                    onChange={getvalues}
                    required={true}
                    className="form-control"
                    name="Place"
                    type="text"
                    placeholder="Enter Place"
                    id=""
                  />
                  <label htmlFor="Name">Select Batch</label>
                  <select
                    name="Batch"
                    className="form-control"
                    required={true}
                    onChange={getvalues}
                    id=""
                  >
                    <option value="">Select Your Batch</option>
                    <option value="WEB-13">WEB-13</option>
                    <option value="WEB-14">WEB-14</option>
                    <option value="WEB-15">WEB-15</option>
                  </select>

                  <label htmlFor="Name">Profession</label>

                  <select
                    name="Profession"
                    className="form-control"
                    required={true}
                    onChange={getvalues}
                    id=""
                  >
                    <option value="">Select Your Profession</option>
                    <option value="FSD">FSD</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Student">Student</option>
                  </select>
                  <input type="submit" className="form-control" />
                </div>
              </Col>
            </Row>
          </form>
        </ModalBody>
      </Modal>
   <button onClick={() => {
          setmodal(!modal);
        }} className="button-49" >Post User
    </button>
   <button  className="button-49" ><Link className="link" to="/">Home Page</Link>
    </button>


    </div>
  );
};

export default User;
