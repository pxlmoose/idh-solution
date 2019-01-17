import React from 'react';
import Modal from 'react-modal';

const TeamModal = (props) => (
    <Modal
        isOpen={!!props.selectedMember}
        contentLabel="Selected Member"
        ariaHideApp={false}
        onRequestClose={props.handleClearModal}
        closeTimeoutMS={200}
        className="modal"
    >
    {props.selectedMember && 
        <div className="modal-wrapper  load-animation">
            <div className="modal_content-wrapper">
                <p className="modal-position">{props.selectedMember.position}</p>
                <p className="modal-name">{props.selectedMember.name}</p>
            </div>
            <div className="sliderButtons-left">
                <img className="icon" src="../images/left.png" onClick={(e) => {
                    e.preventDefault();
                    props.handlePreviewLeft(props.selectedMember)
                }}></img>
            </div>
            <div className="sliderButtons-right">
                <img className="icon" src="../images/right.png" onClick={(e) => {
                    e.preventDefault();                            
                    props.handlePreviewRight(props.selectedMember)
                }}></img>
            </div>
            <div className="sliderButtons-close">
                <img className="icon-x" src="../images/close.png"
                     onClick={props.handleClearModal}>
                </img>
            </div>
        </div>
    }
     </Modal>
);

export default TeamModal;
