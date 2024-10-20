import React, { useState } from "react";

const Acordian = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleAcordian = (index) => {
    if (index === activeIndex) setActiveIndex(null);
    else setActiveIndex(index);
  };
  return (
    <section className="container m-auto my-3">
      <div className="w-2/3 border m-auto p-2 border-black rounded-lg ">
        <div className="border border-black rounded-xl">
          {[1, 2, 3, 4].map((item, index) => (
            <div
              key={index}
              className=" border-2 border-y border-black last:border-rounded-lg first:rounded-t-lg"
            >
              <div className="p-2   ">
                #acordian-{item}
                <span
                  className="px-4 float-end text-2xl cursor-pointer"
                  onClick={() => handleAcordian(item)}
                >
                  <i
                    className={`bi bi-caret-${
                      activeIndex == item ? "up" : "down"
                    }`}
                  ></i>
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out  ${
                  activeIndex === item ? "max-h-screen" : "max-h-0"
                }`}
              >
                {activeIndex == item && (
                  <div className="p-2 border-t ">
                    #acordian-{item} all data asfknv x,xovjoxv,nxvis,ns sfbfso
                    ohs fksb sf kbsfbs,cb,
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Acordian;
