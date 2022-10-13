import jwtDecode from 'jwt-decode'
import React from 'react'
import OverviewContent from '../../components/organisms/OverviewContent'
import SideBar from '../../components/organisms/SideBar'
import { JWTPayloadTypes, UserTypes } from '../../services/data-types'

export default function Member() {
  return (
    <section className='overview overflow-auto'>
      <SideBar activeMenu='overview' />
      <OverviewContent />
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
