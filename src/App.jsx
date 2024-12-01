import "./App.scss"
import Modal from "./components/Modal/Modal"
import { useState } from "react"
function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="modal-container">
      <button
        className="open-modal-btn"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  )
}

export default App
