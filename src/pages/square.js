import React from 'react'

function Square(props) {
  return (
    <button className="square bg-white rounded-[5px]  text-4xl text-gray-600  mb-2 ml-2 w-[90px] h-[40px] sm:w-[180px] sm:h-[60px] md:w-[200px] md:h-[80px]"
     onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
