import React, { ReactNode } from 'react'
import Image from 'next/image'
import { NumericFormat } from 'react-number-format'

interface TopItemVoucherPaymentProps {
  children: ReactNode
  nominal: number
  thumbnial: ''
}
export default function TopItemVoucherPayment(
  props: TopItemVoucherPaymentProps
) {
  const { children, nominal, thumbnial } = props
  return (
    <div className='col-lg-4 ps-15 pe-15 pb-lg-0 pb-4'>
      <div className='categories-card'>
        <div className='d-flex align-items-center mb-24'>
          <Image
            width={60}
            height={60}
            src={thumbnial}
            alt='icon-categori'
            className='img-item-top'
          />
          <p className='color-palette-1 mb-0 ms-12'>{children}</p>
        </div>
        <div>
          <p className='text-sm color-palette-2 mb-1'>Total Pembelian</p>
          <p className='text-2xl color-palette-1 fw-medium m-0'>
            <NumericFormat
              value={nominal}
              prefix='Rp. '
              displayType='text'
              thousandSeparator='.'
              decimalSeparator=','
            />
          </p>
        </div>
      </div>
    </div>
  )
}
