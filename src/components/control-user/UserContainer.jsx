const UserContainer = ({ isLoged, handleLogedIn, handleSignUp, handleSignOut, handleNewAdd }) => {


    return (
        <div className="w-[250px] lg:w-[350px] h-72 xl:h-96 bg-white absolute right-2 top-14 rounded-lg p-4 z-50">
            {isLoged === false ? (
                <ul className="flex flex-col">
                    <li className="w-full h-8 text-black hover:text-lg border-b-2">
                        <button className=" w-full" onClick={handleLogedIn}>Log in</button>                        
                    </li>

                    <li className="w-full h-8 text-black hover:text-lg">
                        <button className=" w-full"  onClick={handleSignUp}>Sign Up</button>
                    </li>
                </ul>
            ) : (
                <ul className="flex flex-col">
                    <li className="w-full h-8 text-black hover:text-lg border-b-2">
                        <button onClick={handleNewAdd}>Add new Ad</button>
                    </li>

                    <li className="w-full h-8 text-black hover:text-lg border-b-2">
                        <div >My favorite Ad</div>
                    </li>

                    <li className="w-full h-8 text-black hover:text-lg border-b-2">
                        <div >My Profile</div>
                    </li>

                    <li className="w-full h-8 text-black hover:text-lg border-b-2">
                        <button className=" w-full" onClick={handleSignOut}>SignOut</button>
                    </li>

                </ul>
            )}
        </div>)
}



export default UserContainer;
