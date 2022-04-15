import React from 'react'
import Image from 'next/image'

const randommeal = ({ meal }) => {
  const actualMeal = meal.meals[0]
  return (
    <div>
      <pre className='hidden'>{JSON.stringify(actualMeal, null, 2)}</pre>

      <article className=' text-center w-5/12 rounded-xl border-gray-200 border-2 shadow-2xl shadow-gray-600 mb-20 mx-auto transform-gpu hover:scale-110 duration-500 mt-20 p-4'>
        <h1 className='text-3xl font-bold underline decoration-sky-600'>{actualMeal.strMeal}</h1>
        <p className='text-sm font-semibold font-mono'>Type of meal: {actualMeal.strCategory}</p>

        <a href={actualMeal.strMealThumb} className='mr-10 underline decoration-purple-700 text-purple-700'> Link to Picture </a>
        <a href={actualMeal.strYoutube} className='underline decoration-purple-700 text-purple-700'>Youtube</a>

        <ol className=' mt-10 list-inside list-decimal'>
          <label className='underline font-bold font-mono'> Ingredients</label>
          <li>{actualMeal.strIngredient1}</li>
          <li>{actualMeal.strIngredient2}</li>
          <li>{actualMeal.strIngredient3}</li>
          <li>{actualMeal.strIngredient4}</li>
          <li>{actualMeal.strIngredient5}</li>
          <li>{actualMeal.strIngredient6}</li>
          <li>{actualMeal.strIngredient7}</li>
          <li>{actualMeal.strIngredient8}</li>
          <li>{actualMeal.strIngredient9}</li>
          <li>{actualMeal.strIngredient10}</li>
          <li>{actualMeal.strIngredient11}</li>
          <li>{actualMeal.strIngredient12}</li>
          <li>{actualMeal.strIngredient13}</li>
          <li>{actualMeal.strIngredient14}</li>
          <li>{actualMeal.strIngredient15}</li>

        </ol>

        
        <p className='w-11/12 mx-auto mt-10 overflow-y-scroll p-4 max-h-72'>{actualMeal.strInstructions}</p>


        
      </article>
    </div>
  )
}

export default randommeal

export async function getStaticProps(){
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const meal = await fetch(url).then(r=>r.json());

  return {
    props: {
      meal
    }
  }
}