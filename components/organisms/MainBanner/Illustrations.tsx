/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
export default function Illustrations() {
  return (
    <div className='col-lg-6 col-12 d-lg-block d-none'>
      <div className='d-flex justify-content-lg-end justify-content-center me-lg-5'>
        <div className='position-relative' data-aos='zoom-in'>
          <img
            src='/img/Header-5.png'
            className='img-fluid'
            alt='header-illust'
          />
          <div className='card left-card position-absolute border-0'>
            <div className='d-flex justify-content-md-center mb-2 gap-3'>
              <div>
                <p className='text-md fw-bold color-palette-1 m-0'>
                  Top Up Terlaris
                </p>
              </div>
            </div>
            <div className='d-flex flex-column h-full'>
              <p className='text-sm text-card-illust'>#1 - Dota 2 Reborn</p>
              <p className='text-sm text-card-illust'>#2 - Genshin Impact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
