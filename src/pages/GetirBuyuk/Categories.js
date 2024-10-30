import React from 'react'
import { useState, useEffect } from 'react'
import categoryData from '../../api/categories.json'
import Category from  '../../ui/Category'


 const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    //istek
    setCategories(categoryData);
  },[]);

  return (
    <div className='bg-white py-4'>
      <div className='container mx-auto px-16'>
        <h3 className='font-semibold text-sm text-black-color mb-2'>Kategoriler</h3>
        <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-10'>
          {categories && categories.map((category, index) => <Category key={index} category={category} />)}
        </div>
      </div>

    </div>
  )
}
export default Categories;