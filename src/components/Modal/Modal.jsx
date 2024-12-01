import ModalHeading from "./ui/ModalHeading/ModalHeading"
import "./Modal.scss"
import ModalBody from "./ui/ModalBody/ModalBody"

function Modal() {
  return (
    <div className="modal">
      <ModalHeading />
      <ModalBody />
    </div>
  )
}

export default Modal
