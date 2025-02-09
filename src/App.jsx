import { useState } from 'react'
import './App.css'
import Available_Players from './components/Available Players/Available_Players'
import Cover from './components/Cover/Cover'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Subscribe from './components/Subscribe/Subscribe'
import { toast, ToastContainer } from 'react-toastify';
import SelectSection from './components/SelectSection/SelectSection'

function App() {

  const [coinAdd,setCoinAdd]=useState(0)
  const [isSelected,setSelected]=useState(false)

  let coin=10000000000;
  const handlerAddCion =()=>{
      setCoinAdd(previousCoin=>previousCoin+coin)
      toast.success("Coin buy Successfully")
  }

  const [selectPlayer,setSelectPlayer]=useState([])
  const [inId ,setId]=useState([])
  
  const handleByePlayer=(players)=>{
    const{name,price,id}=players
    if (inId.includes(id)) {
      return toast.warning('Player Already Selected')
    }
    if (selectPlayer.length >= 6) {
      return toast.warning('You can select only 6 player')
    }
      if (price < coinAdd) {
        let newCoin=coinAdd-price
        setCoinAdd(newCoin)
        setSelectPlayer([...selectPlayer,players])
        toast.success(`Congelation You Buy ${name}`)
        setId([...inId,id])
        
      } 
      else{
        toast.error(`You have not enough Money Byu this Player! This Player Price ${price}`)
      }
      
  }
  const handlerRemove=(player)=>{
    console.log(player)
    const remainingPlayer = selectPlayer.filter(players=> players.id !==player.id)
    setSelectPlayer(remainingPlayer)
    const remainingId=remainingPlayer.map(item=>item.id)
    setId(remainingId)
    toast.info('Player Delete Successfully')
  }
  return (
    <div className=''>
      <Header coinAdd={coinAdd}></Header>
      <Cover handlerAddCion={handlerAddCion}></Cover>
      {
        !isSelected ? <Available_Players 
        handleByePlayer={handleByePlayer}
        selectPlayer={selectPlayer}
        setSelected={setSelected}
        ></Available_Players> 
        : 
        <SelectSection 
        setSelected={setSelected}
        handlerRemove={handlerRemove}
        selectPlayer={selectPlayer}
        ></SelectSection>
      }
      <Subscribe></Subscribe>
      <Footer></Footer>
      <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
      />
    </div>
    
  )
}

export default App
