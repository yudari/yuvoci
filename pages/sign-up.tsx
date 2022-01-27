import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SignUpForms from '../components/organisms/SignUpForms'

export default function SignUp() {
  return (
    <section className='sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47'>
      <div className='container mx-auto'>
        <form action=''>
          <div className='pb-50'>
            <Link href='/'>
              <a className='navbar-brand'>
                <Image src='/icon/logo.svg' width={60} height={60} alt='logo' />
              </a>
            </Link>
          </div>
          <SignUpForms />
        </form>
      </div>
    </section>
  )
}
