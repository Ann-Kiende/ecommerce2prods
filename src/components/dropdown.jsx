import { React, useState } from 'react';
import './Dropdown.css';
// import { BsFillCartCheckFill } from 'react-icons/bs';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='dropdown-btn'>
      <div className='dropdown-heading' onClick={toggleMenu}>
        <div className='dd-img'>{props.icon}</div>
        <div className='dd-title'>{props.title}</div>
        <div className='dd-toggle'>{isOpen ? <FaMinus /> : <FaPlus />}</div>
      </div>

      {isOpen && (
        <div className='dropdown-content'>
          <ul className='dd-ul'>
            {Array.isArray(props.list) ? (
              props.list.map((item, index) => (
                <li key={index} className='dd-li'>
                  {item}
                </li>
              ))
            ) : (
              <li className='dd-li'>{props.list}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className='dropdown-btn'>
//       <div className='dropdown-heading' onClick={toggleMenu}>
//         <div className='dd-img'>
//           <BsFillCartCheckFill />
//         </div>
//         <div className='dd-title'>How to track your order?</div>
//         <div className='dd-toggle'>{isOpen ? <FaMinus /> : <FaPlus />}</div>
//       </div>

//       {isOpen && (
//         <div className='dropdown-content'>
//           <ul className='dd-ul'>
//             <li className='dd-li'>
//               Click the drop-down arrow beside your name and select Orders.
//             </li>
//             <li className='dd-li'>
//               Click <strong>SEE DETAILS</strong> in front of the order you want
//               to track.
//             </li>
//             <li className='dd-li'>
//               Click <strong>TRACK MY ITEM</strong> button in front of the order
//               you wish to track.
//             </li>
//             <li className='dd-li'>Delivery history is displayed.</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

export default Dropdown;
