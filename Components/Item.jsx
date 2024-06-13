"use client"
import { useMotionValue, Reorder } from "framer-motion";
import PropTypes from 'prop-types';
const Item = ({item}) => {
    const y = useMotionValue(0);
    // const boxShadow = useRaisedShadow(y);
  return (
    <Reorder.Item value={item} id={item} style={{ y }} className="bg-zinc-100 shadow-xl cursor-grab w-[6rem] h-[6rem] flex justify-center items-center rounded-full my-3 text-center">
      <span>{item}</span>
    </Reorder.Item>
  )
}

export default Item


Item.prototype = {
  item: PropTypes.string
}
