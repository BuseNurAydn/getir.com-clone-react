import React from 'react'

const Business = () => {
  return (
    <div className='container mx-auto px-16 mb-20 '>
      <div className=' flex justify-between items-center bg-business rounded-lg '>
        <div className='flex flex-col gap-y-3 py-16 px-8'>
          <h2 className='font-bold text-brand-color tracking-tight text-3xl leading-9'>Restoran sahibi misiniz?</h2>
          <span className='font-semibold text-base text-graytwo-color'>GetirYemek restoran iş ortaklarından biri olun, işinizi daha az maliyetle büyütün, müşteri memnuniyetini artırın.</span>
        </div>
          <div className='flex justify-end mr-8'>
            <button className='rounded px-8 py-4 bg-gradient-custom text-brand-color font-semibold leading-4' >Hemen Başvur</button>
          </div>
        </div>

      </div>
   
  )
}
export default Business;