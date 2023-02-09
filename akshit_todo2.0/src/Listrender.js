import React from "react";

export default function Listrender(props) {
  return (
    <>
      {props.list.map((list) => {
        return (
          <div key={list.number}>
            <input
              type="checkbox"
              name=""
              id=""
              onChange={() => props.remove(list.number)}
            />
            <div>
              {list.title}({list.date.toLocaleDateString()})
            </div>
          </div>
        );
      })}
    </>
  );
}
