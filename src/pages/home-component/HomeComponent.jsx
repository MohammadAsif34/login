import React, { useEffect, useState } from "react";
import dataList from "../../../data/component.json";

const HomeComponent = () => {
  const [data, setData] = useState(dataList);

  const [name, setName] = useState("");
  const [status, setStatus] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    alert(name + status);
    setName("");
  };

  return (
    <section className="container m-auto my-4 px-4 select-none">
      <div className=" w-full h-full flex">
        <div className="lg:flex-1 "></div>
        <form
          action=""
          className="w-full lg:w-fit p-2 border border-teal-500 rounded-md flex flex-col lg:flex-row "
          onSubmit={handleUpdate}
        >
          <label htmlFor="">Name : </label>
          <input
            type="text"
            value={name}
            placeholder="Enter name"
            className="h-8 lg:mr-4 px-2 py-1 border border-teal-500 rounded-md"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="">Is done : </label>
          <select
            name=""
            id=""
            value={status}
            placeholder="Done or not"
            className="h-8 lg:mr-4 border border-teal-500 rounded-md bg-transparent px-2"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select</option>
            <option value="true">Done</option>
            <option value="false">Not done</option>
          </select>
          <button
            type="submit"
            className="h-8 my-2 lg:m-0 border border-teal-500 rounded-md bg-transparent px-2"
          >
            update
          </button>
        </form>
      </div>
      <div className="my-5 border p-5  rounded-xl border-teal-500  select-none">
        <div className=" w-full h-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((item, index) => (
            <div
              key={index}
              className={`p-2 border shadow-xl flex items-center rounded-lg cursor-pointer ${
                item.isDone ? "hover:border-green-500" : "hover:border-red-500"
              }`}
            >
              <div className="w-12 h-12 flex items-center justify-center text-3xl mx-4">
                <i className={`bi ${item.icon} text-teal-600 `}></i>
              </div>
              <div>
                <h1 className="text-xl font-semibold">{item.name}</h1>
                <p className="text-sm">{item.shortDetails}</p>
                <p>{item.isDone}</p>
              </div>
              <div className="px-4 flex-1">
                <span className="float-end">
                  <i
                    className={`bi ${
                      item.isDone
                        ? "bi-check-circle-fill text-green-500"
                        : "bi-x-circle-fill text-red-500"
                    }`}
                  ></i>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
