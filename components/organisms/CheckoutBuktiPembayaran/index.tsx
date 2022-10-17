import React, { useEffect, useState } from 'react'

const CheckoutBuktiPembayaran = ({ onChange, imagePreview }) => {
  const IMG = process.env.NEXT_PUBLIC_IMG

  return (
    <div className='payment mb-5'>
      <h2 className='fw-bold text-xl color-palette-1 mb-2'>Bukti Pembayaran</h2>
      <p className='text-lg color-palette-1 mb-20'>
        Tolong upload bukti pembayaran 1 x 24 jam jika lewat dari waktu
        pembayaran maka checkout anda akan gagal.
      </p>
      <div className='image-upload'>
        <label htmlFor='avatar'>
          {imagePreview === './img/avatar-2.png' ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className='img-upload-checkout'
              style={{ borderRadius: '0%' }}
              src={`./img/avatar-2.png`}
              alt='icon upload'
              width={90}
              height={90}
            />
          ) : (
            <img
              style={{ borderRadius: '0%' }}
              src={imagePreview}
              alt='icon upload'
              className='img-upload-checkout-after'
              width={300}
              height={450}
            />
          )}
        </label>
        <input
          id='avatar'
          type='file'
          name='avatar'
          accept='image/png, image/jpeg'
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default CheckoutBuktiPembayaran
