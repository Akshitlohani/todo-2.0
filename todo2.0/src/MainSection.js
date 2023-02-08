import React, { useState } from "react";
import Inbox from "./Inbox";
import Next7Days from "./Next7Days";
import Today from "./Today";
const list =[
  { number: 1, title: "lets complete this", date: new Date("11/25/2022") },
  { number: 2, title: "Should sleep at 9", date: new Date("02/02/2023") },
  { number: 3, title: "Let us complete react", date: new Date("01/30/2023")}
]
export default function MainSection(props) {
  const [filteredList, setFilteredList] = useState([]);
  const addToList = (obj) => {
    list.push(obj);
    setFilteredList(list);
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
