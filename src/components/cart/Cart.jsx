import React, { useState, useEffect } from "react";

export const Cart = ({ itemCount }) => {
  const [empty, setIsEmpty] = useState(true); 

  const handleItemClear = () => { 
    itemCount = 0;
    console.log(itemCount);
    setIsEmpty(true)
  };
 
  useEffect(() => {
    if (itemCount > 0) {
      setIsEmpty(false);
    }
    if (itemCount === 0) {
      setIsEmpty(true);
    }
  }, [itemCount]);


  const total = Number(itemCount * 125.0);
  return (
    <div className="absolute bg-white py-3  w-80 shadow-lg drop-shadow-xl h-42 -left-32 top-10">
      <div className="">
        <h2 className="font-bold text-base p-3 ">Cart</h2>
        <hr />
        {!empty && (
          <div>
            <div className="flex flex-row justify-start p-3 ">
              <div className="w-auto">
                <img
                  className="w-12 rounded-md"
                  src="/img/image-product-1-thumbnail.jpg"
                  alt=""
                />
              </div>
              <div className="w-auto text-gray-500 px-2">
                <p>Fall limited edition sneakers</p>
                <span className="pr-1">$125.00</span>
                <span className="px-1">x</span>
                <span className="px-2 ">{itemCount}</span>
                <span className="font-bold text-base text-black">
                  ${total}.00
                </span>
              </div>
              <div className="w-auto px-3 pt-2">
                <button onClick={handleItemClear}> 
                  <img src="/img/icon-delete.svg" alt="trash" />
                </button>
              </div>
            </div>
            <div className="px-3 flex justify-center">
              <button className="bg-orange-500 border border-orange-500	 w-full hover:bg-white hover:border hover:text-orange-500 text-white     font-semibold py-3 px-20   rounded-md">
                Checkout
              </button>
            </div>
          </div>
        )}
        {empty && (
          <div className="flex justify-center h-28  ">
            <p>Cart is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};
