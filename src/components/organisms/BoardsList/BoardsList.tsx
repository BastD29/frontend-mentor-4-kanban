import { FC, useState } from "react";

import { Board } from "../../../models/Board";

import BoardItem from "../../molecules/BoardItem/BoardItem";
import IconBoard from "../../atoms/Icons/IconBoard/IconBoard";

import style from "./BoardsList.module.scss";

type BoardsListProps = {
  boards: Board[];
  onNewBoard: () => void;
};

const BoardsList: FC<BoardsListProps> = ({ boards, onNewBoard }) => {
  const [selectedBoardId, setSelectedBoardId] = useState<string | null>(null);

  const handleBoardSelect = (boardId: string) => {
    setSelectedBoardId(boardId);
  };

  return (
    <div className={style["boards-list"]}>
      <h2>All boards ({boards.length})</h2>

      {boards.map((board) => (
        <BoardItem
          key={board.id}
          board={board}
          selected={board.id === selectedBoardId}
          onSelect={handleBoardSelect}
        />
      ))}

      <div className={style["new-board"]}>
        <IconBoard color="#635FC7" />
        <button onClick={onNewBoard}>+ Create New Board</button>
      </div>
    </div>
  );
};

export default BoardsList;
