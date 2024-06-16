import PropTypes from 'prop-types';
import Image from 'next/image';
import { motion } from 'framer-motion';
// https://www.framer.com/motion/use-animation-frame/
const Card = ({title, image, heading, text, button}) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        whileTap={{ scale: 0.95 }}
       className="card w-96 bg-black glass shadow-[-1px_1px_90px_0px_blueviolet] image-full border border-purple-300">
          <figure className=''>
            {/* <Image className='w-[100%] object-cover' src={image} alt={title} width={100} height={100}/> */}
          </figure>
          <div className="card-body">
              <h2 className="card-title">{heading}</h2>
              <p>{text}</p>
              <div className="card-actions justify-end">
              <button className="btn border border-white">{button}</button>
              </div>
          </div>
        </motion.div>
    </>
  )
}

Card.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string,
    button: PropTypes.string
}

export default Card;
