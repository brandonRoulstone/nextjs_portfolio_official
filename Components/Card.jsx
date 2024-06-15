import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
// https://cdn-images.imagevenue.com/ae/09/66/ME18I51M_o.jpg

const Card = ({title, image, heading, text, button}) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
                <Image className='w-[100%]' src={image} alt={title} width={100} height={100}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{heading}</h2>
                <p>{text}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">{button}</button>
                </div>
            </div>
        </div>
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
