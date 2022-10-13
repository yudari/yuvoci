import React from 'react'
import Image from 'next/image'
import Illustrations from './Illustrations'
export default function MainBanner() {
  return (
    <section className='header pt-lg-60 pb-50'>
      <div className='container-xxl container-fluid'>
        <div className='row flex-row-reverse  gap-lg-0 gap-5'>
          <div className='col-lg-6 col-12 my-auto'>
            <h1 className='header-title color-palette-1 fw-bold text-end'>
              Top up dan <span className='underline-blue'>rasakan</span>
              <br className='d-sm-block d-none' />{' '}
              <span className='underline-blue'>Pengalaman</span> dalam bermain
              anda
            </h1>
            <p className='mt-0 mb-40 text-lg color-palette-1 text-end'>
              Kami menyediakan voucher top up terlengkap
              <br className='d-md-block d-none' /> dari berbagai platform game
            </p>
            <div className='d-flex flex-lg-row justify-content-lg-end flex-column gap-4'>
              <a
                className='btn btn-get text-lg text-white rounded-pill'
                href='#feature'
                role='button'
              >
                Get Started
              </a>
            </div>
          </div>
          <Illustrations />
        </div>
      </div>
    </section>
  )
}
