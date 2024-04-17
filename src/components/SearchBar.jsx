
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    return (
        <div>
            <form className="relative w-10/12 min-w-[140px] rounded-full h-auto  hover:border-transparent ">
                <div className="relative ">
                    <input
                        type="text"
                        placeholder="SEARCH HERE"
                        className="w-full rounded-full p-4 h-6 focus:outline-none mt-5 ml-3 hover:shadow-lg focus:shadow-xl shadow-md"
                    />
                    <button
                        type="submit"
                        className="absolute right-1 top-1/2 rounded-full  p-1 -translate-y-1/2 h-6 mt-3"
                    >
                        <IoSearch />
                    </button>
                </div>
            </form>
        </div>

    );
};

export default SearchBar;

