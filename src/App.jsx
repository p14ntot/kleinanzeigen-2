import SearchBar from "./components/SearchBar"
import UserButton from "./components/control-user/UserButton"
import SliderMenu from "./components/slider-menu/SliderMenu"
import Cards from "./components/cards/Cards"
import Footer from "./components/Footer"
import Logo from "./components/cards/logo/Logo"
import NewAdd from "./components/control-user/NewAdd"
import { useState } from "react"

function App() {
  const [newAdd, setNewAdd] = useState(false);

  const handleNewAdd = () =>{
      console.log('Add new add')
      setNewAdd(!newAdd)
  }

  return (
    <div className='  overflow-hidden bg-gray-50 '>
      <div className=' flex justify-center w-full items-center'>
        <div className=" ">
          <Logo/>
        </div>
        <div className=" w-full">
          <SearchBar />
        </div>
        <button className="border-2 w-1/5 h-2/3 mt-5">Greece</button>
        <UserButton  handleNewAdd={ handleNewAdd} />
      </div>

      <div>
        <SliderMenu />
      </div>

      <div className=" w-screen ">
        {newAdd? <NewAdd handleNewAdd={handleNewAdd}/> :
                 <Cards />}
      </div>

      <Footer />

    </div>
  )
}

export default App
