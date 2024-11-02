import React from 'react'

const Business = () => {
  return (
    <div className='container mx-auto px-2 md:px-4 xl:px-16 mb-20 '>
    <div className=' flex flex-col md:flex-row justify-between items-center bg-business rounded-lg '>
      <div className='flex flex-col gap-y-1 md:gap-y-3 px-4 pt-4 pb-16 md:py-16'>
        <h2 className='font-bold text-brand-color tracking-normal text-lg md:text-3xl leading-9'>Restoran sahibi misiniz?</h2>
        <span className='font-semibold text-xs md:text-base text-graytwo-color'>GetirYemek restoran iş ortaklarından biri olun, işinizi daha az maliyetle büyütün, müşteri memnuniyetini artırın.</span>
      </div>
        <div className='flex justify-end md:mr-8 self-start md:self-center absolute md:relative mt-28 ml-4 md:ml-0 md:mt-0'>
          <button className='rounded px-8 py-3 md:py-4 bg-gradient-custom text-brand-color text-sm font-semibold leading-4'>Hemen Başvur</button>
        </div>
      </div>

    </div>
 
  )
}
export default Business;