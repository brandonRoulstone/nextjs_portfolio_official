"use client"
import { useState } from "react";
import { Reorder } from "framer-motion";
import Item from "./Item";

const SkillsetIcons = () => {
    const initialItems = ["🍅 Javascript", "🥒 Html5", "🧀 CSS3", "🥬 MYSQL", "Next Js", "React Js", "Vue js"];
    const [items, setItems] = useState(initialItems);
  return (
    <div>
    <Reorder.Group axis="y" onReorder={setItems} values={items}>
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </Reorder.Group>
    </div>
  )
}

export default SkillsetIcons
