/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'

export default function CheckOutItems() {
  const [dataItem, setDataItem] = useState({
    thumbnial: '',
    name: '',
    category: {
      name: '',
    },
  })
  useEffect(() => {
    const dataFromLocal = localStorage.getItem('data-item')
    const dataItemLocal = JSON.parse(dataFromLocal!)

    setDataItem(dataItemLocal)
    console.log(dataItemLocal)
  }, [])
  const IMG = process.env.NEXT_PUBLIC_IMG
  return (
    <div className='game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30'>
      <div className='pe-4'>
        <div className='cropped'>
          <img
            src={`${IMG}/${dataItem.thumbnial}`}
            className='img-fluid'
            alt=''
          />
        </div>
      </div>
      <div>
        <p className='fw-bold text-xl color-palette-1 mb-10'>{dataItem.name}</p>
        <p className='color-palette-2 m-0'>{dataItem.category.name}</p>
      </div>
    </div>
  )
}
