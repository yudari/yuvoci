import Cookies from 'js-cookie'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import Footer from '../Footer'
import MenuItem from './MenuItem'
import Profile from './Profile'

interface SideBarProps {
  activeMenu?: 'overview' | 'transactions' | 'settings' | 'games'
}

export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props
  const router = useRouter()
  // const router = useRouter()

  // const onLogOut = () => {
  //   Cookies.remove('token')
  //   router.push('/sign-in')
  // }
  const onLogout = () => {
    Cookies.remove('token')
    router.push('/sign-in')
  }
  return (
    <section className='sidebar'>
      <div className='content pt-50 pb-30 ps-30'>
        <Profile />
        <div className='menus'>
          <MenuItem
            title='Overview'
            icon='ic-menu-overview'
            active={activeMenu === 'overview'}
            href='/member'
          />
          <MenuItem
            title='Transactions'
            icon='ic-menu-transaction'
            active={activeMenu === 'transactions'}
            href='/member/transactions'
          />
          <MenuItem
            active={activeMenu === 'games'}
            title='Games'
            icon='ic-menu-games'
            href='/member/games'
          />

          <MenuItem
            title='Settings'
            icon='ic-menu-setting'
            active={activeMenu === 'settings'}
            href='/member/edit-profile'
          />
          <MenuItem onClick={onLogout} title='Log Out' icon='ic-menu-logout' />
        </div>
      </div>
    </section>
  )
}
