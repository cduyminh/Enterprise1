import { useState } from "react";

const Game = () => {
  const [dragItem, setDragItem] = useState();
  const [list, setList] = useState([
    "7",
    "9",
    "1",
    "8",
    "2",
    "5",
    "6",
    "3",
    "4",
  ]);
  //Vicotry list for the game
  const victoryList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const handleDragStart = (index) => {
    setDragItem(index);
  };

  const handleDragEnter = (e, index) => {
    e.target.style.backgroundColor = "#336699";
    const newList = [...list];
    const item = newList[dragItem];
    newList.splice(dragItem, 1);
    newList.splice(index, 0, item);
    setDragItem(index);
    setList(newList);
  };

  const handleDragLeave = (e) => {
    e.target.style.backgroundColor = "black";
  };

  const handleDrop = (e) => {
    e.target.style.backgroundColor = "black";
    //Compare the list with the victory list
    if (list.join("") === victoryList.join("")) {
      alert("You won!");
    }
  };
  return (
    <ul className="dnd">
      {list &&
        list.map((item, index) => (
          <li
            draggable
            key={index}
            onDragStart={() => handleDragStart(index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDragLeave={(e) => handleDragLeave(e)}
            onDrop={(e) => handleDrop(e)}
            onDragOver={(e) => e.preventDefault()}
          >
            {item}
          </li>
        ))}
    </ul>
  );
};

export default Game;