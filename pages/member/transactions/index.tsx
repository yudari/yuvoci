import jwtDecode from 'jwt-decode'
import React from 'react'
import SideBar from '../../../components/organisms/SideBar'
import TransactionsContent from '../../../components/organisms/TransactionsContent'
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types'

export default function Transactions() {
  return (
    <section className='transactions overflow-auto'>
      <SideBar activeMenu='transactions' />
      <TransactionsContent />
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

  return {
    props: {},
  }
}
