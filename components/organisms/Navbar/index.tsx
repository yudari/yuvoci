import React from 'react'
import Image from 'next/image'
import Menu from './Menu'
import Auth from './Auth'
import ToggleMenu from './ToggleMenu'
import Link from 'next/link'
export default function Navbar() {
  return (
    <section>
      <nav className='navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50'>
        <div className='container-fluid'>
          <Link href='/'>
            <a className='navbar-brand text-brand'>
              Yu<span className='text-brand-child'>Voci</span>
              {/* <Image src='/icon/logo.svg' width={60} height={60} alt='logo' /> */}
            </a>
          </Link>

          <ToggleMenu />
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto text-lg gap-lg-0 gap-2'>
              <Menu title={'Home'} active />
              <Menu title={'Cara Belanja'} />
              <Menu title={'Games'} />
              <Menu title={'Tentang'} />

              <Auth />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  )
}
