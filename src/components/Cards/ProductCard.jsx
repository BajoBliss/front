import React from 'react'
import DisabledRating from '../Ratings/DisabledRating'

const ProductCard = ({ title, desc, img }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img || "https://placehold.co/600x400" }
          alt={title}
          className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title || "Title"}</h2>
        <p>{desc || "Description"}</p>
        <br />
        <p>Rp. 16.000</p>

        <DisabledRating rate={4.8} />
      </div>
    </div>
  )
}

export default ProductCard
