import { FunctionComponent, useState, useEffect, MouseEventHandler } from "react";

interface ModalContent {
    onClose: MouseEventHandler;
}

const ModalContent: FunctionComponent<ModalContent> = ({ onClose }) => {
  return (
    <div className="modal">
      <div>I'm a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};


export default ModalContent;
