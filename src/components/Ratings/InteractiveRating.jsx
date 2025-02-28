import React from 'react'

const InteractiveRating = ({ rate }) => {
  const MAX_RATE = 5;
  const filledStars = Math.floor(rate);
  const hasHalfStar = rate % 1 !== 0;

  return (
    <div className='flex flex-row gap-5 items-center justify-center'>
      <div className="rating rating-lg rating-half">
        {[...Array(MAX_RATE)].map((_, index) => (
          <React.Fragment key={index}>
            <input
              type="radio"
              name="rating-10"
              className={`mask mask-star-2 mask-half-1 bg-green-500`} 
              defaultChecked={index < filledStars || (index === filledStars && hasHalfStar)}
            />
            <input
              type="radio"
              name="rating-10"
              className={`mask mask-star-2 mask-half-2 bg-green-500`} 
              defaultChecked={index < filledStars}
            />
          </React.Fragment>
        ))}
      </div>
      <p>2 Reviews</p>
    </div>
  )
}

export default InteractiveRating
