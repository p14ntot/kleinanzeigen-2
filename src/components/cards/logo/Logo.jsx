const Logo = () => {
    return (
        <div>
            <div className="hidden sm:block md:hidden lg:hidden mb-4 w-28 mt-9 ">
                <p className=" h-full text-center font-extrabold text-3xl text-orange-800">SL</p>
            </div>

            {/* Logo για μεγάλες οθόνες */}
            <div className="hidden sm:hidden md:block   mb-4 w-52 mt-8">
                <p className=" h-full text-center font-extrabold text-4xl text-orange-900">Big Logo</p>
            </div>
        </div>
    );
}

export default Logo;