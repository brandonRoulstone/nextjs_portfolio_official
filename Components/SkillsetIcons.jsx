"use client"
import { useState, useEffect } from "react";
import { Reorder } from "framer-motion";
import Item from "./Item";

const SkillsetIcons = () => {
  const initialItems = ["Html 5", "CSS 3", "Bootstrap 5", "Tailwind CSS", "Javascript", "C++", "Typescript", "Next Js", "React Js", "Vue js", "MYSQL", "Mongo DB"];
  const [items, setItems] = useState(initialItems);
  
  return (
    <div className="px-5">
    <Reorder.Group axis="x" onReorder={setItems} values={items} className="flex gap-3">
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </Reorder.Group>
    </div>
  )
}

export default SkillsetIcons
