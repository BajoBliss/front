import React from 'react'

const ProductCategoryCard = ({ title, img }) => {
  return (
    <div className="card bg-base-100 image-full w-96 shadow-xl">
      <figure>
        <img
          src={img || "https://placehold.co/600x400"}
          alt={title} />
      </figure>
      <div className="card-body justify-end">
        <h2 className="card-title justify-center ">{title || "Title"}</h2>
      </div>
    </div>
  )
}

export default ProductCategoryCard
