import { useState } from 'react'
import './App.css'
import Available_Players from './components/Available Players/Available_Players'
import Cover from './components/Cover/Cover'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Subscribe from './components/Subscribe/Subscribe'
import { toast, ToastContainer } from 'react-toastify';

function App() {

  const [coinAdd,setCoinAdd]=useState(0)

  let coin=1000000;
  const handlerAddCion =()=>{
      setCoinAdd(previousCoin=>previousCoin+coin)
  }

  const handleByePlayer=(price,name)=>{
    console.log('click add',price);
    
      if (price < coinAdd) {
        let newCoin=coinAdd-price
        setCoinAdd(newCoin)
        toast.success(`Congelation You Buy ${name}`)
      }
      else{
        toast.error('You have not enough Cion ')
      }
  }
  return (
    <div className=''>
                  <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
      <Header coinAdd={coinAdd}></Header>
      <Cover handlerAddCion={handlerAddCion}></Cover>
      <Available_Players handleByePlayer={handleByePlayer}></Available_Players>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
    
  )
}

export default App
