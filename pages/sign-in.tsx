/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import SignInForm from '../components/organisms/SignInForm'
import Image from 'next/image'
import Link from 'next/link'
export default function SignIn() {
  return (
    <section className='sign-in mx-auto'>
      <div className='row'>
        <div className='col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0'>
          <div>
            <div className='container mx-auto'>
              <div className='pb-50'>
                <Link href='/'>
                  <a className='navbar-brand text-brand'>
                    Yu<span className='text-brand-child'>Voci</span>
                    {/* <Image src='/icon/logo.svg' width={60} height={60} alt='logo' /> */}
                  </a>
                </Link>
              </div>
              <SignInForm />
            </div>
          </div>
        </div>
        <div className='col-xxl-7 col-lg-6 bg-main text-center pt-lg-145 pb-lg-145 d-lg-block d-none'>
          <img
            src='/img/Header-5.png'
            width='502'
            height='391.21'
            className='img-fluid pb-50'
            alt=''
          />
          <h2 className='text-4xl fw-bold text-white mb-30'>
            Menangkan Game Anda
            <br />
            Dengan Pengalaman Yang Berbeda.
          </h2>
          <p className='text-white m-0'>
            Kami menyediakan Top Up game
            <br /> dengan harga yang terjangkau dan
            <br />
            tercepat
          </p>
        </div>
      </div>
    </section>
  )
}
