// MyComponent.js
import React from 'react';
import './MyComponent.css';
import './formulaire2.css'
function MyComponent({ closeModal, handleAddModalMode, ChoseModal }) {
    return (
        <div className="modal-container">
            <div className="modal-content">
                <div className="modal-card">
                    <div className="modal-header">
                        <h3 className="header-title">
                            {/* {showModalCertificationUpdate.isOpen ? "Update certifiaction" : "Add new certification"} */}
                        </h3>
                        <button
                            className="close-button"
                            type="button"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                    <div className="modal-body">
                        {/* <UpdateUserCertification signUpCertificationData={signUpCertificationData} setSignUpCertificationData={setSignUpCertificationData} /> */}
                        {/* <UpdateUserCertification /> */}
                        {/* {<UpdateUserEducation />} */}
                        {ChoseModal()}
                    </div>
                    <div className="modal-footer">
                        <div className='save-button-container'>
                            <button onClick={()=>{
                                handleAddModalMode();
                                closeModal();   
                            }}>save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default MyComponent;
