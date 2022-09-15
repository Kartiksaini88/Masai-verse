import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import "./Admin.css";

const Admin = ({ Users, getUsersData }) => {
  const [loadingD, setloadingD] = useState(false);
  const [loadingE, setloadingE] = useState(false);
  const [edit_text, setEdittext] = useState({});
  const [id, setid] = useState("");
  const [modal, setmodal] = useState(false);
  console.log(loadingD);

  const deleteUser = (id) => {
    setloadingD(true);
    axios
      .delete(`https://masaiverse666.herokuapp.com/user/${id}`)
      .then((res) => getUsersData())
      .catch((error) => {
        alert("Error while Deleteing User");
      });
    setloadingD(false);
  };

  const getvalue = (e) => {
    const { name, value } = e.target;

    setEdittext({
      ...edit_text,
      [name]: value,
    });
  };

  const getid = (id) => {
    setmodal(!modal);
    setid(id);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setloadingE(true);
    axios
      .patch(`https://masaiverse666.herokuapp.com/user/${id}`, {
        Name: Users.Name,
        Age: Users.Age,
        Place: Users.Place,
        Batch: Users.Batch,
        Profession: edit_text.Profession,
      })
      .then((res) => getUsersData())
      .catch((error) => {
        alert("Error While Updating");
      });
    setloadingE(false);
    setmodal(!modal);
  };

  return (
    <div className="main-div">
      <h1>ADMIN PAGE</h1>
      <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader toggle={() => setmodal(!modal)}></ModalHeader>
        <ModalBody>
          <form action="" onSubmit={handleEdit}>
            <Row>
              <Col lg={12}>
                <div>
                  <label htmlFor="Name">Profession</label>

                  <select
                    name="Profession"
                    className="form-control"
                    required={true}
                    onChange={getvalue}
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
      <div className="users-div">
        {Users.map((e) => (
          <div key={e._id} className="every-user-div">
            <div className="img-div">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                alt=""
              />
            </div>
            <div className="info-div">
              <p>
                <span>Name - </span>
                {e.Name}
              </p>
              <p>
                <span>Age - </span> {e.Age}
              </p>
              <p>
                <span>Place - </span> {e.Place}
              </p>
              <p>
                <span>Batch - </span> {e.Batch}
              </p>
              <p>
                <span>Profession - </span> {e.Profession}
              </p>
              <div>
                <button
                  onClick={() => {
                    deleteUser(e._id);
                  }}
                  class="button-13"
                  
                >
                  {loadingD ? "Loading.." : "Delete"}
                </button>
                <button
                  onClick={() => {
                    getid(e._id);
                  }}
                  class="button-13"
                  
                >
                  {loadingE ? "Loading.." : "Edit Prof"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="button-52" ><Link className='links' to={'/'}>Home</Link></button>
    </div>
  );
};

export default Admin;
