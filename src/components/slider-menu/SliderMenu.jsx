// import { useState } from 'react';
// import { MdOutlineHouse } from 'react-icons/md';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// const SliderMenu = () => {
//   const menuItems = [
//     { index: '1', icon: <MdOutlineHouse size={30} />, title: 'First' },
//     { index: '2', icon: <MdOutlineHouse size={30} />, title: 'House' },
//     { index: '3', icon: <MdOutlineHouse size={30} />, title: 'House' },
//     { index: '4', icon: <MdOutlineHouse size={30} />, title: 'House' },
//     { index: '5', icon: <MdOutlineHouse size={30} />, title: 'House' },
//     { index: '6', icon: <MdOutlineHouse size={30} />, title: 'House' },
//     { index: '7', icon: <MdOutlineHouse size={30} />, title: 'House' },
//     { index: '8', icon: <MdOutlineHouse size={30} />, title: 'House' },
//     { index: '9', icon: <MdOutlineHouse size={30} />, title: 'House' },
//     { index: '10', icon: <MdOutlineHouse size={30} />, title: 'House' },
//     { index: '11', icon: <MdOutlineHouse size={30} />, title: 'House' },
//     { index: '12', icon: <MdOutlineHouse size={30} />, title: 'Last' },
//   ];

//   const [scrollPosition, setScrollPosition] = useState(0);

//   const handleScrollLeft = () => {
//     const newPosition = scrollPosition - 1;
//     setScrollPosition(newPosition >= 0 ? newPosition : 0);
//   };



//   const handleScrollRight = () => {
//     const newPosition = scrollPosition + 2;


//     // Check if newPosition is less than the total number of menu items
//     // If not, wrap around to the beginning of the array
//     setScrollPosition(newPosition < menuItems.length ? newPosition : 0);
//   };

//   return (
//     <div className="relative flex mt-7 border-t-2 border-b-2 w-screen h-auto items-center overflow-hidden">
//       <button
//         onClick={() => handleScrollLeft()}
//         className='absolute bg-gradient-to-l from-slate-200 to-transparent h-full left-0 opacity-0 hover:opacity-90 rounded-r-2xl '
//       >
//         <FaArrowLeft size={30} />
//       </button>
//       <div className="flex space-x-4 "
//         style={{
//           transform: `translateX(-${scrollPosition * 250}px)`,
//           transition: 'transform 0.6s ease', // Adjust the duration and easing as needed
//         }}
//       >
//         {menuItems.map((item, index) => (
//           <div
//             key={item.index}
//             className={`p-4 flex flex-col justify-center items-center w-auto h-auto }`}
//           >
//             <div>{item.icon}</div>
//             <div>{item.title}</div>
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={() => handleScrollRight()}
//         className='absolute bg-gradient-to-r from-slate-200 to-transparent h-full right-0 opacity-0 hover:opacity-90 rounded-l-2xl '
//       >
//         <FaArrowRight size={30} />
//       </button>
//     </div>
//   );
// };

// export default SliderMenu;





import { useState } from 'react';
import { MdOutlineHouse } from 'react-icons/md';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SliderMenu = () => {
  const menuItems = [
    { index: '1', icon: <MdOutlineHouse size={30} />, title: 'First' },
    { index: '2', icon: <MdOutlineHouse size={30} />, title: 'House' },
    { index: '3', icon: <MdOutlineHouse size={30} />, title: 'House' },
    { index: '4', icon: <MdOutlineHouse size={30} />, title: 'House' },
    { index: '5', icon: <MdOutlineHouse size={30} />, title: 'House' },
    { index: '6', icon: <MdOutlineHouse size={30} />, title: 'House' },
    { index: '7', icon: <MdOutlineHouse size={30} />, title: 'House' },
    { index: '8', icon: <MdOutlineHouse size={30} />, title: 'House' },
    { index: '9', icon: <MdOutlineHouse size={30} />, title: 'House' },
    { index: '10', icon: <MdOutlineHouse size={30} />, title: 'House' },
    { index: '11', icon: <MdOutlineHouse size={30} />, title: 'House' },
    { index: '12', icon: <MdOutlineHouse size={30} />, title: 'Last' },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollLeft = () => {

  };



  const handleScrollRight = () => {
  };

  return (
    <div className=" flex justify-start lg:justify-center mt-7 border-t-2 border-b-2 w-screen h-auto items-center overflow-auto">
      <button
        onClick={() => handleScrollLeft()}
        className='absolute bg-gradient-to-l from-slate-200 to-transparent h-full left-0 opacity-0 hover:opacity-90 rounded-r-2xl '
      >
        {/* <FaArrowLeft size={30} /> */}
      </button>
      <div className="flex space-x-4  pr-4"
        style={{
          transform: `translateX(-${scrollPosition * 250}px)`,
          transition: 'transform 0.6s ease', // Adjust the duration and easing as needed
        }}
      >
        {menuItems.map((item) => (
          <div
            key={item.index}
            className={`p-4 flex flex-col justify-center items-center w-auto h-auto}`}
          >
            <div>{item.icon}</div>
            <div>{item.title}</div>
          </div>
        ))}
      </div>
      <button
        onClick={() => handleScrollRight()}
        className='absolute bg-gradient-to-r from-slate-200 to-transparent h-full right-0 opacity-0 hover:opacity-90 rounded-l-2xl '
      >
        {/* <FaArrowRight size={30} /> */}
      </button>
    </div>
  );
};

export default SliderMenu;





// import { useState } from 'react';
// import { MdOutlineHouse } from 'react-icons/md';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// const SliderMenu = () => {
//   const menuItems = [
//     { index: '1', icon: <MdOutlineHouse size={30} />, title: 'First' },
//     { index: '2', icon: <MdOutlineHouse size={30} />, title: 'House' },
//     { index: '3', icon: <MdOutlineHouse size={30} />, title: 'House' },
//     { index: '4', icon: <MdOutlineHouse size={30} />, title: 'House' },
//     { index: '5', icon: <MdOutlineHouse size={30} />, title: 'House' },
//     { index: '6', icon: <MdOutlineHouse size={30} />, title: 'House' },
//     { index: '7', icon: <MdOutlineHouse size={30} />, title: 'House' },
//     { index: '8', icon: <MdOutlineHouse size={30} />, title: 'House' },
//     { index: '9', icon: <MdOutlineHouse size={30} />, title: 'House' },
//     { index: '10', icon: <MdOutlineHouse size={30} />, title: 'House' },
//     { index: '11', icon: <MdOutlineHouse size={30} />, title: 'House' },
//     { index: '12', icon: <MdOutlineHouse size={30} />, title: 'Last' },
//   ];

//   const [visibleItems, setVisibleItems] = useState(4);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const handleScrollLeft = () => {
//     const newPosition = (scrollPosition - 1 + menuItems.length) % menuItems.length;
//     setScrollPosition(newPosition);
//   };

//   const handleScrollRight = () => {
//     const newPosition = (scrollPosition + 1) % menuItems.length;
//     setScrollPosition(newPosition);
//   };

//   return (
//     <div className="relative flex justify-start lg:justify-center mt-7 border-t-2 border-b-2 w-screen h-auto items-center overflow-hidden">
//       <button
//         onClick={() => handleScrollLeft()}
//         className='absolute bg-gradient-to-l from-slate-200 to-transparent h-full left-0 opacity-0 hover:opacity-90 rounded-r-2xl '
//       >
//         <FaArrowLeft size={30} />
//       </button>
//       <div className="flex space-x-4  pr-4"
//         style={{
//           transform: `translateX(-${scrollPosition * (250 + 4)}px)`,
//           transition: 'transform 0.6s ease',
//         }}
//       >
//         {[...menuItems, ...menuItems, ...menuItems].map((item, index) => (
//           <div
//             key={item.index + index}
//             className={`p-4 flex flex-col justify-center items-center w-auto h-auto }`}
//           >
//             <div>{item.icon}</div>
//             <div>{item.title}</div>
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={() => handleScrollRight()}
//         className='absolute bg-gradient-to-r from-slate-200 to-transparent h-full right-0 opacity-0 hover:opacity-90 rounded-l-2xl '
//       >
//         <FaArrowRight size={30} />
//       </button>
//     </div>
//   );
// };

// export default SliderMenu;






