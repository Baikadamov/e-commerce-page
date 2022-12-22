import { AppBar } from "../appbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { data } from "./data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export const MainPage = () => {
  const [count, setCount] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  const handleCounter = () => {
    if (count > 0) {
      setItemCount(count);
    }
  };

  const myData = data;
  const [activeSlide, setActiveSlide] = useState(1);

  const prevSliderHandler = (id) => {
    if (id === 1) {
      setActiveSlide(myData.length);
    } else if (id > 1) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(myData.length - 1);
    }
  };

  const nextSliderHandler = (id) => {
    if (id === myData.length) {
      setActiveSlide(1);
    } else if (id < myData.length) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(myData.length - 1);
    }
  };

  const [view, setView] = useState(false);

  const changeView = () => { 
    if(view ===true){
      setView(false)
    }
    else{
      setView(true)
    }
  };

  return (
    <>
      {view && (
        <div className="p-12 mt-8 absolute  top-0 left-0 right-0 z-50  h-full   ">
          <div className="  ">
            {myData.map((item) => {
              const { id, image } = item;
              return (
                <div
                  key={id}
                  className={
                    activeSlide === id
                      ? "flex justify-between items-center"
                      : "hidden"
                  }
                >
                  <div
                    className="absolute z-50 -top-2 	"
                    style={{ right: "450px" }}
                  >
                    <button onClick={changeView}>
                      <img
                        src="/img/icon-close.svg"
                        className="w-10 hover:bg-orange-300 rounded-2xl"
                        alt=""
                      />
                    </button>
                  </div>
                  <div className="pl-80 z-50">
                    <button
                      className="text-6xl   border-2 border-white text-gray-500 hover:text-orange-500 bg-white rounded-full"
                      onClick={() => prevSliderHandler(id)}
                    >
                      <FiChevronLeft />
                    </button>
                  </div>

                  <div className="flex flex-col w-5/12 items-center  ">
                    <img
                      className="rounded-2xl"
                      style={{
                        boxShadow: "12px 12px 2px 1520px rgba(0, 0, 10, .5)",
                      }}
                      src={image}
                      alt=""
                    />
                  </div>

                  <div className="pr-80">
                    <button
                      className="text-6xl border-2 border-white text-gray-500 hover:text-orange-500 bg-white rounded-full"
                      onClick={() => nextSliderHandler(id)}
                    >
                      <FiChevronRight />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <AppBar itemCount={itemCount} />

      <div className="px-64  mb-24">
        <div className="flex flex-row justify-center mx-auto   ">
          <div className="w-3/6">
            <div className="p-12 pt-4 pb-4">
              <img
                src="/img/image-product-1.jpg"
                className="rounded-2xl cursor-pointer "
                alt="mainimage"
                onClick={changeView}
              />
            </div>
            <div className=" flex flex-row px-9 justify-between">
              <div className="w-1/4 pt-3 px-3 ">  
                  <img
                    className="rounded-xl  cursor-pointer   hover:bg-black"
                    src="/img/image-product-1-thumbnail.jpg"
                    alt=""
                    onClick={changeView}
                  /> 
                
              </div>
              <div className="w-1/4 pt-3 px-3">
                <img
                  className="rounded-xl cursor-pointer"
                  src="/img/image-product-2-thumbnail.jpg"
                  alt=""
                  onClick={changeView}
                />
              </div>
              <div className="w-1/4 pt-3 px-3">
                <img
                  className="rounded-xl cursor-pointer"
                  src="/img/image-product-3-thumbnail.jpg"
                  alt=""
                  onClick={changeView}
                />
              </div>
              <div className="w-1/4 pt-3 px-3">
                <img
                  className="rounded-xl cursor-pointer"
                  src="/img/image-product-4-thumbnail.jpg"
                  alt=""
                  onClick={changeView}
                />
              </div>
            </div>
          </div>
          <div className="w-3/6">
            <div className="p-12 pt-4">
              <h1 className="text-sm font-medium mt-10 text-orange-500">
                SNEAKER COMPANY{" "}
              </h1>
              <h3 className="text-4xl font-bold mt-4">
                Fall Limited Edition Sneakers{" "}
              </h3>
              <p className="mt-6">
                There low-profile sneakers are your perfect casual wear
                companion.Featuring a durable rubber outer sole,they'll
                withstand everything the weather can offer
              </p>
              <div className="flex flex-row mt-6">
                <div className="w-30">
                  <h3 className="text-3xl font-bold  ">$125.00</h3>
                </div>
                <div className="w-auto pl-3 ">
                  <div className="bg-orange-100 text-orange-500 w-10 mt-2  rounded-md text-center">
                    <h3 className="text-base font-bold  ">50%</h3>
                  </div>
                </div>
              </div>
              <h5 className="text-muted text-base	 font-bold mt-2 line-through text-gray-400">
                $250.00
              </h5>
              <div className="flex flex-row mt-5  ">
                <div className="w-1/3	">
                  <div className="flex bg-transparent text-center bg-gray-100   h-12 rounded-md">
                    <button
                      className="w-1/3 pt-1 pl-4 hover:bg-slate-400 rounded-l-md"
                      onClick={() =>
                        count > 0 ? setCount(count - 1) : setCount(0)
                      }
                    >
                      <img src="/img/icon-minus.svg" alt="" />
                    </button>
                    <div className="w-1/3 pt-3 ">
                      <h1 className="font-semibold">{count}</h1>
                    </div>
                    <button
                      className="w-1/3 pt-1 pl-4  hover:bg-slate-400 rounded-r-md"
                      onClick={() =>
                        count < 10 ? setCount(count + 1) : setCount(10)
                      }
                    >
                      <img src="/img/icon-plus.svg" alt="" />
                    </button>
                  </div>
                </div>
                <div className="w-3/4	">
                  <div className="h-10 ">
                    <button
                      onClick={handleCounter}
                      className="bg-orange-500 text-white  hover:bg-orange-300 hover:text-orange-900    font-semibold    ml-4 py-3 px-20   rounded-md"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
