import React from 'react'
import { useState, useEffect } from 'react'
import categoryData from '../api/categories.json'
import Category from  '../components/ui/Category'


export default function Categories() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    //istek
    setCategories(categoryData);
  });

  return (
    <div className='bg-white py-4'>
      <div className='container mx-auto px-16'>
        <h3 className='font-semibold text-sm mb-2'>Kategoriler</h3>
        <div className='grid grid-cols-10'>
          {categories && categories.map((category, index) => <Category key={index} category={category} />)}
        </div>
      </div>

    </div>
  )
}
