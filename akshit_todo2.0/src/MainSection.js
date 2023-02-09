import React, { useState } from "react";
import Inbox from "./Inbox";
import Next7Days from "./Next7Days";
import Today from "./Today";
import './App.css';

// const list =[]
export default function MainSection(props) {
  const [filteredList, setFilteredList] = useState([]);
  const addToList = (obj) => {
    // filteredList.push(obj);
    setFilteredList([...filteredList,obj]);
  };
  const removeFromList = (removeIndex) => {
    let newList = filteredList.filter((item) => removeIndex !== item.number)
    setFilteredList(newList)
}
  return (
    <div>
      {props.active === "INBOX" && (
        <Inbox list={filteredList} append ={addToList} remove={removeFromList} />
      )}
      {props.active === "TODAY" && <Today list={filteredList} remove={removeFromList} />}
      {props.active === "NEXT" && <Next7Days list={filteredList}  remove={removeFromList} />}
    </div>
  );
}
