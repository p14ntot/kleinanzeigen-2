const LocationSearchBar = () => {
    return (
        <form className="relative w-5/12 min-w-[80px] rounded-full h-auto hover:border-[1px] hover:border-transparent mt-5">
        <div className="relative">
            <input
                type="text"
                placeholder="Οπουδίποτε"
                className="w-full rounded-full p-4 h-6 focus:outline-none"
            />
            <button
                type="submit"
                className="absolute right-1 top-1/2 rounded-full bg-gray-100 p-1 -translate-y-1/2 h-6"
            >
                {/* Εδώ μπορείτε να βάλετε ένα εικονίδιο για την τοποθεσία */}
            </button>
        </div>
        </form>
      );
}
 
export default LocationSearchBar;