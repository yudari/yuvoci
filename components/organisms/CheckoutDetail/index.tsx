import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format'

export default function CheckoutDetail() {
  const [dataTopUp, setDataTopUp] = useState({
    verifyID: '',
    nominalItem: {
      price: 0,
      cointQuantity: 0,
      coinName: '',
      _id: '',
    },
    paymentItem: {
      payment: {
        type: '',
        _id: '',
      },
      bank: {
        bankName: '',
        name: '',
        noRekening: '',
        _id: '',
      },
    },

    bankAccountName: '',
  })

  useEffect(() => {
    const dataFromLocal = localStorage.getItem('data-topup')
    const dataTopUpLocal = JSON.parse(dataFromLocal!)
    console.log(dataTopUpLocal)
    setDataTopUp(dataTopUpLocal)
  }, [])
  const itemPrice = dataTopUp.nominalItem.price
  const tax = (dataTopUp.nominalItem.price * 10) / 100

  const totalPrice = itemPrice + tax
  return (
    <>
      <div className='purchase pt-md-50 pt-30'>
        <h2 className='fw-bold text-xl color-palette-1 mb-20'>
          Purchase Details
        </h2>
        <p className='text-lg color-palette-1 mb-20'>
          Your Game ID{' '}
          <span className='purchase-details fw-bold'>{dataTopUp.verifyID}</span>
        </p>
        <p className='text-lg color-palette-1 mb-20'>
          Order ID <span className='purchase-details fw-bold'>#GG001</span>
        </p>
        <p className='text-lg color-palette-1 mb-20'>
          Item{' '}
          <span className='purchase-details fw-bold'>
            {dataTopUp.nominalItem.cointQuantity}{' '}
            {dataTopUp.nominalItem.coinName}
          </span>
        </p>
        <p className='text-lg color-palette-1 mb-20'>
          Price{' '}
          <span className='purchase-details fw-bold'>
            {' '}
            <NumericFormat
              value={itemPrice}
              prefix='Rp. '
              displayType='text'
              thousandSeparator='.'
              decimalSeparator=','
            />
          </span>
        </p>
        <p className='text-lg color-palette-1 mb-20'>
          Tax (10%){' '}
          <span className='purchase-details fw-bold'>
            <NumericFormat
              value={tax}
              prefix='Rp. '
              displayType='text'
              thousandSeparator='.'
              decimalSeparator=','
            />
          </span>
        </p>
        <p className='text-lg color-palette-1 mb-20'>
          Total
          <span className='purchase-details color-palette-4 fw-bold'>
            <NumericFormat
              value={totalPrice}
              prefix='Rp. '
              displayType='text'
              thousandSeparator='.'
              decimalSeparator=','
            />
          </span>
        </p>
      </div>
      <div className='payment pt-md-50 pb-md-50 pt-10 pb-10'>
        <h2 className='fw-bold text-xl color-palette-1 mb-20'>
          Payment Informations
        </h2>
        <p className='text-lg color-palette-1 mb-20'>
          Your Account Name{' '}
          <span className='purchase-details fw-bold'>
            {dataTopUp.bankAccountName}
          </span>
        </p>

        <p className='text-lg color-palette-1 mb-20'>
          Type
          <span className='payment-details fw-bold'>
            {dataTopUp.paymentItem.payment.type}
          </span>
        </p>
        <p className='text-lg color-palette-1 mb-20'>
          Bank Name{' '}
          <span className='payment-details fw-bold'>
            {dataTopUp.paymentItem.bank.bankName}
          </span>
        </p>
        <p className='text-lg color-palette-1 mb-20'>
          Bank Account Name{' '}
          <span className='payment-details fw-bold'>
            {dataTopUp.paymentItem.bank.name}
          </span>
        </p>
        <p className='text-lg color-palette-1 mb-20'>
          Bank Number
          <span className='payment-details fw-bold'>
            {dataTopUp.paymentItem.bank.noRekening}
          </span>
        </p>
      </div>
    </>
  )
}
