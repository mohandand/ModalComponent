import React, { useState } from 'react';
import './style.css';
import Modal from './Components/Modal.js';
export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <h1>Hello Cilcik on kThe Btton To Open Modal</h1>
      <button className="openBtn" onClick={() => setModalOpen(true)}>
        Open
      </button>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}
