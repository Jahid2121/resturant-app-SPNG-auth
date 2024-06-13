import Meal from '@/components/Meal';
import React from 'react';

const Meals = ({meals}: any) => {
    console.log(meals);
    return (
        <div>
            <h2 className='text-2xl font-bold py-20 text-center'>Meals</h2>
            <div className=''>
      {meals?.map((meal) => (
        <Meal key={meal.id} meal={meal} />
      ))}
    </div>
        </div>
    );
};

export default Meals;