import ModalHeading from "./ui/ModalHeading/ModalHeading"
import "./Modal.scss"
import ModalBody from "./ui/ModalBody/ModalBody"

function Modal({ setIsOpen }) {
  return (
    <div className="modal">
      <ModalHeading setIsOpen={setIsOpen} />
      <ModalBody />
    </div>
  )
}

export default Modal
