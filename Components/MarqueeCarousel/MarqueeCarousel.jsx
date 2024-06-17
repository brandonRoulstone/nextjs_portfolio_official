// "use client"
import { motion, useScroll } from 'framer-motion';
import PropTypes from 'prop-types'
import Image from 'next/image'

// make responsive so everything can be seen on viewport
const MarqueeCarousel = () => {
    // const { scrollYProgress } = useScroll();
    const items = [
      // "https://cdn-images.imagevenue.com/f1/5e/dc/ME18IJTI_o.jpg",
      "https://cdn-images.imagevenue.com/6f/26/c4/ME18IINN_o.jpg",
      "https://cdn-images.imagevenue.com/6f/26/c4/ME18IINN_o.jpg",
      "https://cdn-images.imagevenue.com/6f/26/c4/ME18IINN_o.jpg",
      "https://cdn-images.imagevenue.com/6f/26/c4/ME18IINN_o.jpg",
    ];
  return (

    <div className="overflow-hidden whitespace-nowrap mt-6">

      <div className="marquee">

        <div className="marquee-content flex">

          {items.map((item, index) => (
              <div className="marquee-item mx-4 inline-block" key={index}>
                <Image height={150} width={300} src={item} alt={`Item ${index + 1}`} className="inline-block rounded-2xl lg:w-[33.3%] object-fit" />
              </div>
          ))}

          {/* Gives an infinite illusion */}
          {items.map((item, index) => (
              <div className="marquee-item mx-4 inline-block" key={`dup-${index}`}>
                <Image height={150} width={300} src={item} alt={`Item ${index + 1}`} className="inline-block rounded-2xl lg:w-[33.3%] object-fit" />
              </div>
          ))}

        </div>

      </div>

    </div>

  )
}

MarqueeCarousel.propTypes = {

}
/*         */

export default MarqueeCarousel
