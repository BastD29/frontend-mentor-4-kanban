import { FC, useState } from "react";

import { useTheme } from "../../hooks/useTheme";

import BoardPage from "../../pages/BoardPage/BoardPage";

import Header from "../organisms/Header/Header";
import Modal from "../organisms/Modal/Modal";
import BoardsList from "../organisms/BoardsList/BoardsList";
import Content from "../organisms/Content/Content";
import Sidebar from "../organisms/Sidebar/Sidebar";

import ThemeSwitcher from "../molecules/ThemeSwitcher/ThemeSwitcher";

import styles from "./App.module.scss";

const boards = [
  { id: "1", name: "Platform Launch" },
  { id: "2", name: "Marketing Plan" },
  { id: "3", name: "Roadmap" },
];

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

  return (
    <div className={`${styles["app"]} ${theme}`}>
      <Header
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
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <BoardsList boards={boards} onNewBoard={handleNewBoard} />
        <ThemeSwitcher />
      </Modal>
    </div>
  );
};

export default App;
