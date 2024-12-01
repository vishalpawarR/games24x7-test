import { IoMdClose } from "react-icons/io"
import "./ModalHeading.scss"

function ModalHeading() {
  return (
    <>
      <div className="modal-heading">
        <h3>GST? No Worries!</h3>
        <IoMdClose className="close" />
      </div>
    </>
  )
}

export default ModalHeading
