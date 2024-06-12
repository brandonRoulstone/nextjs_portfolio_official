"use client"
import { useMotionValue, Reorder } from "framer-motion";
import PropTypes from 'prop-types';
const Item = ({item}) => {
    const y = useMotionValue(0);
    // const boxShadow = useRaisedShadow(y);
  return (
    <Reorder.Item value={item} id={item} style={{ y }} className="bg-blue-500 w-[10rem] h-[3rem] my-3 text-center">
      <span>{item}</span>
    </Reorder.Item>
  )
}

export default Item


Item.prototype = {
    item: PropTypes.string
}
