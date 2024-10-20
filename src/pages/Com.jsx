import React, { useState } from "react";
// import dataList from "../../data/component.json";
// import { data } from "autoprefixer";

const Com = () => {
  const data = [
    {
      id: 1,
      name: "Accordion",
      shortDetails: "Expandable/collapsible content section",
      icon: "bi-arrows-expand",
      isDone: false,
    },
    {
      id: 2,
      name: "Alert",
      shortDetails: "Notification message",
      icon: "bi-exclamation-triangle",
      isDone: false,
    },
    {
      id: 3,
      name: "Avatar",
      shortDetails: "User profile image",
      icon: "bi-person-circle",
      isDone: false,
    },
    {
      id: 4,
      name: "Badge",
      shortDetails: "Small status indicator",
      icon: "bi-badge-3d",
      isDone: false,
    },
    {
      id: 5,
      name: "Breadcrumbs",
      shortDetails: "Navigation path indicator",
      icon: "bi-chevron-right",
      isDone: false,
    },
    {
      id: 6,
      name: "Button",
      shortDetails: "Clickable action element",
      icon: "bi-hand-index-thumb",
      isDone: false,
    },
    {
      id: 7,
      name: "Button Group",
      shortDetails: "Grouped buttons",
      icon: "bi-menu-button-wide",
      isDone: false,
    },
    {
      id: 8,
      name: "Card",
      shortDetails: "Content container with outline",
      icon: "bi-card-list",
      isDone: false,
    },
    {
      id: 9,
      name: "Checkbox",
      shortDetails: "Option toggle switch",
      icon: "bi-check-square",
      isDone: false,
    },
    {
      id: 10,
      name: "Chip",
      shortDetails: "Compact element for tags",
      icon: "bi-tag",
      isDone: false,
    },
    {
      id: 11,
      name: "Collapse",
      shortDetails: "Hide or show content",
      icon: "bi-chevron-up",
      isDone: false,
    },
    {
      id: 12,
      name: "Dialog",
      shortDetails: "Popup dialog window",
      icon: "bi-chat-dots",
      isDone: false,
    },
  ];
  const [name, setName] = useState("");
  //   const [data, setData] = useState(dataList);
  const handleUpdate = (e) => {
    e.preventDefault();
    const dataf = data.find((item) => item.name === name);
    if (dataf) {
      alert(`DATA found : ${JSON.stringify(dataf)}`);

      const newData = dataf.map((item) =>
        item.name === name ? { ...item, name: "new data" } : item
      );
      setData(newData);
    } else {
      alert("data not found");
    }
  };
  return (
    <>
      <section className="container my-5 m-auto">
        <div className=" w-full h-full flex">
          <div className="flex-1"></div>
          <form
            action=""
            className="border border-black p-2 rounded-md"
            onSubmit={handleUpdate}
          >
            <label htmlFor="">Name : </label>
            <input
              type="text"
              value={name}
              placeholder="Enter name"
              className="h-8 mr-4 px-2 py-1 border border-black rounded-md"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Is done : </label>
            <select
              name=""
              id=""
              placeholder="Done or not"
              className="h-8 mr-4 border border-black rounded-md bg-transparent px-2"
            >
              <option value="">Done</option>
              <option value="">Not done</option>
            </select>
            <button
              type="submit"
              className="h-8 mx-4 px-3 border border-black rounded-md hover:bg-blue-600 hover:text-white"
            >
              Update
            </button>
          </form>
        </div>
        <div className="border p-5">
          {data.map((item, index) => (
            <li key={index} className="py-2 border-b">
              {item.name}
            </li>
          ))}
        </div>
      </section>
    </>
  );
};

export default Com;
