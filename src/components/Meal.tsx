import Image from 'next/image';
import React from 'react';

const Meal = ({meal}) => {
    console.log(meal);
    return (
        <div>
          <h2>dsdfjkd</h2>
          <h2></h2>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><Image height={200} width={200}  src={meal?.attributes?.image?.data?.attributes?.url} alt={meal?.attributes?.image?.data?.attributes?.url} /></figure>
  <div className="card-body">
    <h2 className="card-title">{meal?.attributes.title}</h2>
    <p>{meal?.attributes.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Meal</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Meal;