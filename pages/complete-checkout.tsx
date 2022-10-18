import Link from 'next/link'
import React from 'react'

export default function CompleteCheckout() {
  return (
    <section className='complete-checkout mx-auto pt-lg-145 pb-lg-145 pt-100 pb-80'>
      <div className='container-fluid'>
        <div className='text-center'>
          <svg
            width='345'
            height='353'
            viewBox='0 0 345 353'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M338.186 277.357L344.921 339.014C345.306 342.691 344.28 345.974 341.842 348.863C339.405 351.621 336.326 353 332.605 353H12.3945C8.67413 353 5.59518 351.621 3.15767 348.863C0.720171 345.974 -0.306146 342.691 0.0787232 339.014L6.81393 277.357H338.186ZM320.29 112.085L336.839 264.75H8.16097L24.7103 112.085C25.0952 108.934 26.4422 106.274 28.7515 104.107C31.0607 101.941 33.8189 100.857 37.0261 100.857H86.2894V126.071C86.2894 133.032 88.6948 138.974 93.5057 143.899C98.3165 148.823 104.122 151.286 110.921 151.286C117.72 151.286 123.525 148.823 128.336 143.899C133.147 138.974 135.553 133.032 135.553 126.071V100.857H209.447V126.071C209.447 133.032 211.853 138.974 216.664 143.899C221.475 148.823 227.28 151.286 234.079 151.286C240.878 151.286 246.683 148.823 251.494 143.899C256.305 138.974 258.711 133.032 258.711 126.071V100.857H307.974C311.181 100.857 313.939 101.941 316.249 104.107C318.558 106.274 319.905 108.934 320.29 112.085ZM246.395 75.6429V126.071C246.395 129.486 245.176 132.441 242.739 134.936C240.301 137.431 237.415 138.679 234.079 138.679C230.743 138.679 227.857 137.431 225.419 134.936C222.982 132.441 221.763 129.486 221.763 126.071V75.6429C221.763 61.7225 216.952 49.8376 207.331 39.9883C197.709 30.1389 186.099 25.2143 172.5 25.2143C158.901 25.2143 147.291 30.1389 137.669 39.9883C128.048 49.8376 123.237 61.7225 123.237 75.6429V126.071C123.237 129.486 122.018 132.441 119.581 134.936C117.143 137.431 114.257 138.679 110.921 138.679C107.585 138.679 104.699 137.431 102.261 134.936C99.8239 132.441 98.6052 129.486 98.6052 126.071V75.6429C98.6052 54.7623 105.821 36.935 120.254 22.161C134.687 7.387 152.102 0 172.5 0C192.898 0 210.313 7.387 224.746 22.161C239.179 36.935 246.395 54.7623 246.395 75.6429Z'
              fill='#82C0CC'
            />
          </svg>
        </div>
        <div className='pt-70 pb-50'>
          <h2 className='text-4xl fw-bold text-center color-palette-1 mb-10'>
            Pemesanan Berhasil
          </h2>
          <p className='text-lg text-center color-palette-1 m-0'>
            Kami akan periksa pembayaran Anda
            <br className='d-sm-block d-none' /> dan tunggu konfirmasi status
            dari
            <br className='d-sm-block d-none' /> kami di dashboard anda
          </p>
        </div>
        <div className='button-group  d-flex flex-column mx-auto'>
          <Link href='/member'>
            <a className='btn btn-dashboard fw-medium text-lg text-white rounded-pill mb-16'>
              My Dashboard
            </a>
          </Link>

          <a
            className='btn btn-whatsapp fw-medium text-lg color-palette-1 rounded-pill'
            href='https://wa.me/082255070757?text=Saya%20sudah%20melakukan%20pembayaran%20voucher%20'
            role='button'
          >
            WhatsApp ke Admin
          </a>
        </div>
      </div>
    </section>
  )
}
