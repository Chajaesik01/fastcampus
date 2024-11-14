import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './Modal'
function App() {
  const modalWrapperStyle = {
    position: 'relative',
    zIndex: 1
  }

  const higherIndexWrapperStyle = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'blue',
    padding: '10px'
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div>
        <div onClick = {() => console.log('clicked')} style={modalWrapperStyle}>
          <button onClick={ () => setIsModalOpen(true)}>모달 열기</button>

          {/* 모달 */}

          <Modal open = {isModalOpen} onClose = {() => setIsModalOpen(false)}>
            모달 내용
          </Modal>
        </div>
        <div style = {higherIndexWrapperStyle}>Z-index 2</div>
      </div>
    </>
  )
}

export default App
