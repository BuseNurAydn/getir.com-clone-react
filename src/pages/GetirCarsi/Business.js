import React from 'react'

const Business = () => {
  return (
    <div className='container mx-auto px-4 md:px-2 xl:px-16 mb-8 md:mb-16'>
      <div className=' flex flex-col md:flex-row justify-between items-center bg-business md:rounded '>
        <div className='flex flex-col gap-y-1 md:gap-y-3 px-4 pt-4 pb-16 md:py-16'>
          <h2 className='font-bold text-brand-color tracking-normal text-lg md:text-3xl leading-9'>İşletme sahibi misin?</h2>
          <span className='font-semibold text-sm md:text-base text-graytwo-color'>GetirÇarşı işletme iş ortaklarından biri ol, işini daha az maliyetle büyüt, müşteri memnuniyetini artır.</span>
        </div>
          <div className='flex justify-end md:mr-8 self-start md:self-center absolute md:relative mt-32 ml-4 md:ml-0 md:mt-0'>
            <button className='rounded px-8 py-3 bg-gradient-custom text-brand-color sm:text-sm font-semibold leading-4' >Hemen Başvur</button>
          </div>
        </div>

      </div>
   
  )
}
export default Business;