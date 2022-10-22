import router from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { setCheckout } from '../../../services/player'

interface CheckoutConfirmationProps {
  dataBuktiBayar: any
}

export default function CheckoutConfirmation({
  dataBuktiBayar,
}: CheckoutConfirmationProps) {
  const [checkbox, setCheckBox] = useState(false)
  const onSubmit = async () => {
    const dataItemLocal = localStorage.getItem('data-item')
    const dataTopUpLocal = localStorage.getItem('data-topup')
    // const dataBuktiBayarLocal = localStorage.getItem('buktiBayar')
    const dataItem = JSON.parse(dataItemLocal!)
    const dataTopUp = JSON.parse(dataTopUpLocal!)
    // const dataBuktiBayar = JSON.parse(dataBuktiBayarLocal!)

    if (dataBuktiBayar && checkbox) {
      const dataCheckOut = new FormData()

      dataCheckOut.append('voucher', dataItem._id)
      dataCheckOut.append('nominal', dataTopUp.nominalItem._id)
      dataCheckOut.append('payment', dataTopUp.paymentItem.payment._id)
      dataCheckOut.append('bank', dataTopUp.paymentItem.bank._id)
      dataCheckOut.append('name', dataTopUp.bankAccountName)
      dataCheckOut.append('accountUser', dataTopUp.verifyID)
      dataCheckOut.append('buktiBayar', dataBuktiBayar)

      const response = await setCheckout(dataCheckOut)
      if (response.error) {
        toast.error(response.message)
      } else {
        toast.success('Checkout Berhasil')
        router.push('/complete-checkout')
      }
    } else {
      toast.error('Pastikan kamu mengupload bukti pembayaran terlebih dahulu')
    }
  }
  return (
    <>
      <label className='checkbox-label text-lg color-palette-1'>
        Saya sudah membayar dan mengupload bukti pembayaran
        <input
          type='checkbox'
          checked={checkbox}
          onChange={() => setCheckBox(!checkbox)}
        />
        <span className='checkmark'></span>
      </label>
      <div className='d-md-block d-flex flex-column w-100 pt-50'>
        <a
          className='btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg'
          onClick={onSubmit}
        >
          Konfirmasi Pembayaran
        </a>
      </div>
    </>
  )
}
