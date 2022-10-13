import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import {
  BanksTypes,
  NominalTypes,
  PaymentTypes,
} from '../../../services/data-types'
import NominalItem from './NominalItem'
import PaymentItem from './PaymentItem'

interface TopUpFormProps {
  nominals: NominalTypes[]
  payments: PaymentTypes[]
}

export default function TopUpForm(props: TopUpFormProps) {
  const [verifyID, setVerifyID] = useState('')
  const { nominals, payments } = props
  const [bankAccountName, setBankAccountName] = useState('')
  const [nominalItem, setNominalItem] = useState({})
  const [paymentItem, setPaymentItem] = useState({})

  const router = useRouter()
  const onNominalItemChange = (data: NominalTypes) => {
    setNominalItem(data)
  }

  const onPaymentItemChange = (payment: PaymentTypes, bank: BanksTypes) => {
    const data = {
      payment,
      bank,
    }

    setPaymentItem(data)
  }

  const onSubmit = () => {
    if (
      verifyID === '' ||
      bankAccountName === '' ||
      nominalItem === '' ||
      paymentItem === ''
    ) {
      toast.error('Silahkan masukkan semua data anda')
    } else {
      const data = {
        verifyID,
        bankAccountName,
        nominalItem,
        paymentItem,
      }

      localStorage.setItem('data-topup', JSON.stringify(data))
      router.push('/checkout')
    }
    // localStorage.setItem('nominal-item', JSON.stringify(data))
    // localStorage.setItem('payment-item', JSON.stringify(data))
  }

  return (
    <div>
      <div className='pt-md-50 pt-30'>
        <div className=''>
          <label
            htmlFor='ID'
            className='form-label text-lg fw-medium color-palette-1 mb-10'
          >
            Verify ID
          </label>
          <input
            type='text'
            className='form-control rounded-pill text-lg'
            id='ID'
            name='ID'
            aria-describedby='verifyID'
            placeholder='Masukkan Player ID Anda'
            value={verifyID}
            onChange={(event) => setVerifyID(event.target.value)}
          />
        </div>
      </div>
      <div className='pt-md-50 pb-md-50 pt-30 pb-20'>
        <p className='text-lg fw-medium color-palette-1 mb-md-10 mb-0'>
          Nominal Top Up
        </p>
        <div className='row justify-content-between'>
          {nominals.map((nominal) => {
            return (
              <NominalItem
                key={nominal._id}
                _id={nominal._id}
                coinQuantity={nominal.coinQuantity}
                coinName={nominal.coinName}
                price={nominal.price}
                onChange={() => onNominalItemChange(nominal)}
              />
            )
          })}
          <div className='col-lg-4 col-sm-6'></div>
        </div>
      </div>
      <div className='pb-md-50 pb-20'>
        <p className='text-lg fw-medium color-palette-1 mb-md-10 mb-0'>
          Metode Pembayaran
        </p>
        <fieldset id='paymentMethod'>
          <div className='row justify-content-between'>
            {payments.map((payment) => {
              return payment.banks.map((bank) => {
                return (
                  <PaymentItem
                    key={bank._id}
                    bankID={bank._id}
                    name={bank.bankName}
                    type={payment.type}
                    onChange={() => onPaymentItemChange(payment, bank)}
                  />
                )
              })
            })}
            <div className='col-lg-4 col-sm-6'></div>
          </div>
        </fieldset>
      </div>
      <div className='pb-50'>
        <label
          htmlFor='bankAccount'
          className='form-label text-lg fw-medium color-palette-1 mb-10'
        >
          Nama Akun Bank
        </label>
        <input
          type='text'
          className='form-control rounded-pill text-lg'
          id='bankAccount'
          name='bankAccount'
          aria-describedby='bankAccount'
          placeholder='Masukkan nama akun bank anda'
          value={bankAccountName}
          onChange={(event) => setBankAccountName(event.target.value)}
        />
      </div>
      <div className='d-sm-block d-flex flex-column w-100'>
        <button
          className='btn btn-submit rounded-pill fw-medium text-white border-0 text-lg'
          onClick={onSubmit}
        >
          Continue
        </button>
      </div>
    </div>
  )
}
