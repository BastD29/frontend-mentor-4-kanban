import { FC, useState } from "react";

import { useTheme } from "../../hooks/useTheme";

import BoardPage from "../../pages/BoardPage/BoardPage";

import Header from "../organisms/Header/Header";
import Modal from "../organisms/modals/Modal/Modal";
import BoardsList from "../organisms/BoardsList/BoardsList";
import Content from "../organisms/Content/Content";
import Sidebar from "../organisms/Sidebar/Sidebar";

import ThemeSwitcher from "../molecules/ThemeSwitcher/ThemeSwitcher";

import styles from "./App.module.scss";
import DeleteModal from "../organisms/modals/DeleteModal/DeleteModal";

const boards = [
  { id: "1", name: "Platform Launch" },
  { id: "2", name: "Marketing Plan" },
  { id: "3", name: "Roadmap" },
];

const description =
  "Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed.";

const handleNewBoard = () => {
  console.log("handleNewBoard clicked");
};

const App: FC = () => {
  const { theme } = useTheme();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleCancel = () => {
    console.log("handleCancel clicked");
  };

  const handleDelete = () => {
    console.log("handleDelete clicked");
  };

  return (
    <div className={`${styles["app"]} ${theme}`}>
      {/* <Header
        title="Platform launch"
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
      <Content isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
        <BoardPage />
      </Content>
      <Sidebar
        isOpen={isSidebarOpen}
        toggle={toggleSidebar}
        boards={boards}
        handleNewBoard={handleNewBoard}
      /> */}
      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <BoardsList boards={boards} onNewBoard={handleNewBoard} />
        <ThemeSwitcher />
      </Modal> */}

      <DeleteModal
        title="Delete this board?"
        description={description}
        onCancel={handleCancel}
        onDelete={handleDelete}
      />

      <DeleteModal
        title="Delete this task?"
        description={description}
        onCancel={handleCancel}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
