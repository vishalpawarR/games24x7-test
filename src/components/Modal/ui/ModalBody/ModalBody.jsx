import DepositDetailsCard from "../../../ui/DepositDetailsCard"
import "./ModalBody.scss"
import { PiWarningCircle } from "react-icons/pi"
import { MdOutlineCallSplit } from "react-icons/md"
import { IoIosArrowRoundForward } from "react-icons/io"

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
        <div className="details">
          <div className="benefits">
            <p>GST benefits earned so far </p>
            <p className="benefits_earned">₹1,10,000</p>
          </div>
          <div className="offer-container">
            <h4>How GST on deposit works?</h4>
            <div>
              <div className="offer">
                <p>You pay</p>
                <p className="price">₹1000</p>
                <p>Inclusive of Govt. GST</p>
              </div>
              <div className="deductions">
                <DepositDetailsCard
                  price={"₹780"}
                  description={"Goes to your wallet"}
                  priceColor={"#77AA00"}
                />
                <div>
                  <MdOutlineCallSplit
                    className="arrow"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
                {/* <div className="split-arrow">
                  <img
                    className="line"
                    src="./line.svg"
                    alt=""
                  />
                  <img
                    className="left-turn"
                    src="./left.svg"
                    alt=""
                  />
                  <img
                    className="right-turn"
                    src="./right.svg"
                    alt=""
                  />
                </div> */}
                <DepositDetailsCard
                  price={"₹220"}
                  description={"Govt. GST on your deposit"}
                  priceColor={"#E82217"}
                />
              </div>
              <div className="our-offer">
                <div className="gst-benefits">
                  <p className="price">₹220</p>
                  <div className="offer-desc">
                    <img
                      src="./like.svg"
                      alt=""
                    />
                    <div>
                      GST paid by <strong>RummyCircle</strong>
                    </div>
                  </div>
                  <p>on your behalf</p>
                  <div className="arrow-forward">
                    <IoIosArrowRoundForward
                      style={{ width: "30px", height: "30px" }}
                    />
                  </div>
                </div>
                <div className="user-offer">
                  <p>You Get</p>
                  <p className="user-gets">₹1000</p>
                  <p>in your wallet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalBody
