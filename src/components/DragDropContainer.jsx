import React, { useState } from "react";
import styles from "./DragDropContainer.module.css";
import { MOCK_DATA, DragTypes } from "../mocks/mockData";
// react-dnd
import { useDrag } from "react-dnd";

export default function DragDropContainer() {
  const [mockData, setMockData] = useState(MOCK_DATA);
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: DragTypes.TAB,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className={styles.container}>
      <div ref={dragRef} className={isDragging ? styles.isDragging : undefined}>
        {mockData[0].name}
      </div>
    </div>
  );
}
