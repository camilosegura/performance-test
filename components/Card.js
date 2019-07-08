/* eslint-disable jsx-a11y/anchor-is-valid, react/prop-types */
import React from 'react';
import Image from './Image';

const Card = ({
  title,
  image,
  sizes,
}) => (
  <div
    className="card"
    style={{
      margin: '1rem auto',
      width: '10rem',
    }}
  >
    {/* <img className="card-img-top" src={image} alt="Card cap" /> */}
    <Image className="card-img-top" src={image} alt="Card cap" sizes={sizes} />
    <div className="card-body">
      <h5 className="card-title text-center">{title}</h5>
    </div>
  </div>
);

export default Card;
