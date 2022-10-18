import Link from 'next/link'
import React from 'react'

export default function Custom404() {
  return (
    <section className='not-found mx-auto pt-145 pb-md-212 pb-100'>
      <div className='container-fluid'>
        <div className='text-center'>
          <svg
            width='316'
            height='351'
            viewBox='0 0 316 351'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M178.31 216L239.241 158.733L218.931 139.644L158.029 196.911L97.0695 139.671L76.7593 158.733L137.69 216L76.788 273.24L97.0695 292.356L158 235.089L218.931 292.356L239.241 273.267L178.339 216H178.31ZM244.182 40.5H316V351H0V40.5H71.8182V67.5H244.182V40.5ZM100.545 40.5V0H215.455V40.5H100.545Z'
              fill='#82C0CC'
            />
          </svg>
        </div>
        <div className='pt-70 pb-md-50 pb-150'>
          <h2 className='text-4xl fw-bold text-center color-palette-1 mb-10'>
            Oops! Not Found
          </h2>
          <p className='text-lg text-center color-palette-1 m-0'>
            Halaman yang anda kunjungi sudah
            <br className='d-sm-block d-none' />
            tidak tersedia pada sistem kami dan menghubungi
          </p>
        </div>
        <div className='button-group d-flex flex-column mx-auto'>
          <Link href={`/`}>
            <a
              className='btn btn-homepage fw-medium text-lg text-white rounded-pill'
              href='#'
              role='button'
            >
              Homepage
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}
