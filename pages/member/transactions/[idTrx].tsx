import jwtDecode from 'jwt-decode'
import React from 'react'
import TransactionContentDetail from '../../../components/organisms/TransactionDetailContent'
import {
  HistoryTransactionTypes,
  JWTPayloadTypes,
  UserTypes,
} from '../../../services/data-types'
import { getTransactionDetail } from '../../../services/member'

interface TransactionDetailProps {
  transactionDetail: HistoryTransactionTypes
}

export default function TransactionsDetail(props: TransactionDetailProps) {
  const { transactionDetail } = props

  return (
    <section className='transactions-detail overflow-auto'>
      <TransactionContentDetail data={transactionDetail} />
    </section>
  )
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string
    }
  }
  params: {
    idTrx: string
  }
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { token } = req.cookies
  const { idTrx } = params
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
  const response = await getTransactionDetail(idTrx, jwtToken)

  return {
    props: {
      transactionDetail: response.data,
    },
  }
}
