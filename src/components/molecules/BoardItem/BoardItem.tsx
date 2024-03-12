import { FC } from "react";

import { Board } from "../../../models/Board";

// import iconBoard from "../../../../assets/icon-board.svg";

import IconBoard from "../../atoms/Icons/IconBoard/IconBoard";

import style from "./BoardItem.module.scss";

type BoardItemProps = {
  board: Board;
  selected: boolean;
  onSelect: (boardId: string) => void;
};

const BoardItem: FC<BoardItemProps> = ({ board, selected, onSelect }) => {
  const selectedClassname = selected ? style["board-item--selected"] : "";
  const color = selected ? "#fff" : "#828FA3";

  return (
    <div
      className={`${style["board-item"]} ${selectedClassname}`}
      onClick={() => onSelect(board.id)}
    >
      {/* <img src={iconBoard} alt="" /> */}
      <IconBoard color={color} />
      <h3>{board.name}</h3>
    </div>
  );
};

export default BoardItem;
