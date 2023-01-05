import styles from "./App.module.css";
// react dnd
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// components
import DragDropContainer from "./components/DragDropContainer";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.centeredContainer}>
        <DragDropContainer />
      </div>
    </DndProvider>
  );
}

export default App;
