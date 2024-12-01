import { IoMdClose } from "react-icons/io"
import "./ModalHeading.scss"

function ModalHeading({ setIsOpen }) {
  return (
    <>
      <div className="modal-heading">
        <h3>GST? No Worries!</h3>
        <IoMdClose
          className="close"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </>
  )
}

export default ModalHeading
