import React, { useState } from 'react'
import CheckoutConfirmation from '../components/organisms/CheckoutConfirmation'
import CheckoutDetail from '../components/organisms/CheckoutDetail'
import CheckOutItems from '../components/organisms/CheckoutItems'
import Image from 'next/image'
import { JWTPayloadTypes, UserTypes } from '../services/data-types'
import jwtDecode from 'jwt-decode'
import Link from 'next/link'
import CheckoutBuktiPembayaran from '../components/organisms/CheckoutBuktiPembayaran'

interface CheckoutProps {
  user: UserTypes
}
export default function Checkout(props: CheckoutProps) {
  const { user } = props
  const [buktiBayar, setBuktiBayar] = useState(null)
  const [imagePreview, setImagePreview] = useState('./img/avatar-2.png')
  const [counter, setCounter] = useState(0)
  const uploadBukti = (event: { target: { files: any } }) => {
    if (event.target.files!.length > 0) {
      const img = event.target.files![0]
      setImagePreview(URL.createObjectURL(img))
      var dataPhoto = {
        buktiBayar: img,
      }
      localStorage.setItem('buktiBayar', JSON.stringify(dataPhoto))
      setBuktiBayar(img)
    } else {
      setImagePreview('./img/avatar-2.png')
      localStorage.removeItem('buktiBayar')
    }
  }

  return (
    <section className='checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30'>
      <div className='container-fluid'>
        <div className='logo text-md-center text-start pb-50'>
          <Link href={'/'}>
            <a className='navbar-brand text-brand'>
              Yu<span className='text-brand-child'>Voci</span>
            </a>
          </Link>
        </div>
        <div className='title-text pt-md-50 pt-0'>
          <h2 className='text-4xl fw-bold color-palette-1 mb-10'>Checkout</h2>
          <p className='text-lg color-palette-1 mb-0'>
            Cek sekali lagi apakah pembelian kamu sudah tepat
          </p>
        </div>
        <CheckOutItems />
        <hr />
        <CheckoutDetail />
        <CheckoutBuktiPembayaran
          imagePreview={imagePreview}
          onChange={uploadBukti}
        />
        <CheckoutConfirmation dataBuktiBayar={buktiBayar} />
      </div>
    </section>
  )
}

export async function getServerSideProps(context: {
  req: { cookies: { token: any } }
}) {
  const { token } = context.req.cookies

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    }
  }

  const jwtToken = Buffer.from(token, 'base64').toString('ascii')
  const payload: JWTPayloadTypes = jwtDecode(jwtToken)
  const userFromPayload: UserTypes = payload.player
  const IMG = process.env.NEXT_PUBLIC_IMG
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`
  return {
    props: {
      user: userFromPayload,
    },
  }
}
