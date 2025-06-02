import React, { useRef } from 'react'
import MainRoute from './components/MainRoute'
import Navbar from './components/Navbar'
import { ToastContainer, Bounce } from 'react-toastify';
import Menu from './components/Menu';

const App = () => {
  const menuRef = useRef(null);

  return (
    <div className='relative overflow-hidden'>
      <Menu ref={menuRef}/>
      <Navbar menuRef={menuRef} />
      <MainRoute />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  )
}

export default App