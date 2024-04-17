import { FaUserAlt } from "react-icons/fa";
import UserContainer from "./UserContainer";
import { useState } from "react";

const UserButton = ({handleNewAdd}) => {
    const [userContainer,setUserContainre]= useState(false);


    const [isLoged, setIsLoged] = useState(false);

    const handleLogedIn = () => {
      console.log('Log in')
      setIsLoged(true);
    };
  
    const handleSignUp = () => {
      console.log( 'Sign up')
      setIsLoged(true);
    };
  
    const handleSignOut = () => {
      console.log('sign Out')
      setIsLoged(false);
    }

    const userContainerHandler = () => {
        setUserContainre(!userContainer)
    }
    return (
        <button className=" ml-3 mr-6 rounded-full h-auto w-auto border-2  border-gray-600 flex items-center p-2 mt-4 group relative" 
        onClick={userContainerHandler}> 
            <FaUserAlt className='h-6 w-6 text-grey-700' />
            {userContainer && <UserContainer isLoged={isLoged} handleLogedIn={handleLogedIn} handleSignUp={handleSignUp} handleSignOut={handleSignOut} handleNewAdd={handleNewAdd}/>}
        </button>
    );
}

export default UserButton;


