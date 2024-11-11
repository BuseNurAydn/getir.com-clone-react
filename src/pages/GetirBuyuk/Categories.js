import React from 'react'
import { useState, useEffect } from 'react'
import categoryData from '../../api/categoriesBuyuk.json'
import Category from  '../../ui/CategoryBuyuk'


 const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    //istek
    setCategories(categoryData);
  },[]);

  return (
    <div className='md:bg-white bg-light-color py-4'>
      <div className='md:container md:mx-auto px-4 xl:px-16 2xl:px-16'>
        <h3 className='font-semibold text-sm text-black-color mb-2'>Kategoriler</h3>
        <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 xl:grid-cols-10'>
          {categories && categories.map((category, index) => <Category key={index} category={category} />)}
        </div>
      </div>

    </div>
  )
}
export default Categories;