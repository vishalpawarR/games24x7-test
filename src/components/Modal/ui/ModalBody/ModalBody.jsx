import "./ModalBody.scss"
import { PiWarningCircle } from "react-icons/pi"

function ModalBody() {
  return (
    <>
      <div className="modal-body">
        <div className="notice">
          <div className="notice-instruction">
            <PiWarningCircle className="warning-icon" />
            <p>
              Starting 1st October 2023, 28% GST is being charged by Government
              on your deposits.
            </p>
          </div>
          <div className="promotion">
            {/* using image because I wanted to use the same pattern here */}
            <img
              className="like-icon"
              src="./like.svg"
              alt=""
            />
            <h4>100% Govt. GST paid by RummyCircle</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalBody
