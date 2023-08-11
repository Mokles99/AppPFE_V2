import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRoles } from "../../../actions/role.actions";
// import Sidebar from './Sidebar'

import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUser } from "../../../actions/user.actions";
import { UPDATE_USER_RESET } from "../../../actions/constantes";
import { useNavigate } from "react-router-dom";

const UpdateUser = ({ history }) => {
  const navigate = useNavigate();
  // chang1

  const [roles, setRoles] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // const { roles: allRoles } = useSelector((state) => state.roles);
  const { roles: allRoles = [] } = useSelector((state) => state.roles);

  const dispatch = useDispatch();
  const { id } = useParams();
  const { error, user } = useSelector((state) => state.userDetails);
  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.user);

  const userId = id;
  console.warn("*/-*user", user);

  useEffect(() => {
    dispatch(getRoles());
    if (user && user._id !== userId) {
      dispatch(getUserDetails(userId));
    } else {
      setUsername(user ? user.username : "");
      setEmail(user ? user.email : "");

      // Vérifiez si 'user' et 'user.roles' existent avant de les utiliser
      if (user && user.roles) {
        setRoles(user && user.roles ? user.roles.map((role) => role._id) : []);
      }
    }

    if (error) {
      alert(error);
    }

    if (isUpdated) {
      navigate("/admin/users");
      alert("User updated successfully");
      dispatch({ type: UPDATE_USER_RESET });
    }
  }, [dispatch, alert, error, isUpdated, history, user, userId]);

  const handleRoleChange = (event) => {
    const target = event.target;
    const value = target.value;
    if (target.checked) {
      // si la case est cochée, ajouter l'ID de rôle à 'roles'
      setRoles((prevRoles) => [...prevRoles, value]);
    } else {
      // si la case est décochée, retirer l'ID de rôle de 'roles'
      setRoles((prevRoles) => prevRoles.filter((role) => role !== value));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      username: username,
      roles: roles,
      email: email,
    };

    dispatch(updateUser(user._id, formData));
  };

  // const onChange = (e) => {
  //   const files = Array.from(e.target.files);

  //   setImagesPreview([]);
  //   setImages([]);
  //   setOldImages([]);

  //   files.forEach((file) => {
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       if (reader.readyState === 2) {
  //         setImagesPreview((oldArray) => [...oldArray, reader.result]);
  //         setImages((oldArray) => [...oldArray, reader.result]);
  //       }
  //     };

  //     reader.readAsDataURL(file);
  //   });
  // };
  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-md-2">{/* <Sidebar /> */}</div>

        <div className="col-12 col-md-10">
          <Fragment>
            <div className="wrapper my-5" style={{ paddingTop: "11vh" }}>
              <form
                className="shadow-lg"
                onSubmit={submitHandler}
                encType="multipart/form-data"
              >
                <h1
                  className="mb-4"
                  style={{ width: "80% !important", margin: "1rem" }}
                >
                  Update User
                </h1>

                <div
                  className="formupdate"
                  style={{ width: "80% !important", margin: "1rem" }}
                >
                  <label htmlFor="title_field">Username</label>
                  <input
                    type="text"
                    id="username_field"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div
                  className="formupdate"
                  style={{ width: "80% !important", margin: "1rem" }}
                >
                  <label htmlFor="location_field">Email</label>
                  <input
                    type="email"
                    id="email_field"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* <div
                  className="formupdate"
                  style={{ width: "80% !important", margin: "1rem" }}
                >
                  <label htmlFor="roles_field">Roles</label>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                  >
                    {allRoles.map((role) => (
                      <div
                        key={role._id}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <input
                          type="checkbox"
                          id={`role_${role._id}`}
                          value={role._id}
                          checked={roles.includes(role._id)}
                          onChange={handleRoleChange}
                        />
                        <label htmlFor={`role_${role._id}`}>{role.name}</label>
                      </div>
                    ))}
                  </div>
                </div> */}
                <div
                  className="formupdate"
                  style={{
                    width: "80% !important",
                    margin: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <label
                    htmlFor="roles_field"
                    style={{ fontSize: "1.2rem", color: "#444" }}
                  >
                    Roles
                  </label>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      justifyContent: "center",
                    }}
                  >
                    {/* {allRoles.map((role) => (
                      <div
                        key={role._id}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontSize: "1.2rem",
                          color: "#444",
                        }}
                      >
                        <input
                          type="checkbox"
                          id={`role_${role._id}`}
                          value={role._id}
                          checked={roles.includes(role._id)}
                          onChange={handleRoleChange}
                          style={{ height: "20px", width: "20px" }}
                        />
                        <label htmlFor={`role_${role._id}`}>{role.name}</label>
                      </div>
                    ))} */}
                    {allRoles
                      .filter((role) => role !== null)
                      .map((role) => (
                        <div
                          key={role._id}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "1.2rem",
                            color: "#444",
                          }}
                        >
                          <input
                            type="checkbox"
                            id={`role_${role._id}`}
                            value={role._id}
                            checked={roles.includes(role._id)}
                            onChange={handleRoleChange}
                            style={{ height: "20px", width: "20px" }}
                          />
                          <label htmlFor={`role_${role._id}`}>
                            {role.name}
                          </label>
                        </div>
                      ))}
                  </div>
                </div>
                <button
                  id="login_button"
                  type="submit"
                  className="btn btn-block py-3"
                  disabled={loading ? true : false}
                  style={{
                    width: "80%",
                    margin: "1rem auto",
                    position: "relative",
                  }}
                >
                  UPDATE
                </button>
                {/* <button
                  id="login_button"
                  type="submit"
                  className="btn btn-block py-3"
                  disabled={loading ? true : false}
                  style={{
                    width: "80% !important",
                    margin: "1rem",
                    position: "relative",
                  }}
                >
                  UPDATE
                </button> */}
              </form>
            </div>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateUser;
