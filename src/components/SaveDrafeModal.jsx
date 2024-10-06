import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const SaveDraftModal = ({ isOpen, onRequestClose, onSave, onDiscard }) => (
  <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal text-center min-h-screen flex flex-col justify-center align-center">
    <div className="p-6 bg-white shadow shadow-[#bababa]">
    <h2 className="text-2xl font-semibold">Save Progress</h2>
    <p className="mx-3">Do you want to save your progress as a draft?</p>
    <div className="modal-buttons">
      <button onClick={onSave} className="p-2 mr-4 bg-green-700 text-white rounded-md mt-3">Save as Draft</button>
      <button onClick={onDiscard} className="p-2 ml-4 bg-red-700 text-white rounded-md mt-3">Discard</button>
    </div>
    </div>
  </Modal>
);

export default SaveDraftModal;
