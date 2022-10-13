import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import Footer from '../../components/organisms/Footer'
import Navbar from '../../components/organisms/Navbar'
import TopUpForm from '../../components/organisms/TopUpForm'
import TopUpItem from '../../components/organisms/TopUpItem'
import {
  GameItemTypes,
  NominalTypes,
  PaymentTypes,
} from '../../services/data-types'
import {
  getAllFeaturedGameAPI,
  getDetailVoucher,
  getFeaturedGame,
} from '../../services/player'

interface DetailProps {
  dataItem: GameItemTypes
  nominals: NominalTypes[]
  payments: PaymentTypes[]
}
export default function Detail({ dataItem, nominals, payments }: DetailProps) {
  useEffect(() => {
    localStorage.setItem('data-item', JSON.stringify(dataItem))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(payments)
  return (
    <>
      <Navbar />
      <section className='detail pt-lg-60 pb-50'>
        <div className='container-xxl container-fluid'>
          <div className='detail-header pb-50'>
            <h2 className='text-4xl fw-bold color-palette-1 text-start mb-10 text-center'>
              Top Up
            </h2>
          </div>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start'>
              <TopUpItem data={dataItem} type='mobile' />
            </div>
            <div className='col-xl-9 col-lg-8 col-md-7 ps-md-25'>
              <TopUpItem data={dataItem} type='desktop' />
              <hr />
              <TopUpForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const data = await getAllFeaturedGameAPI()

  const paths = data.map((item: GameItemTypes) => ({
    params: {
      id: item._id,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

interface GetStaticProps {
  params: {
    id: string
  }
}
export async function getStaticProps({ params }: GetStaticProps) {
  const { id } = params

  const data = await getDetailVoucher(id)
  console.log(data.payment)
  return {
    props: {
      dataItem: data,
      nominals: data.nominals,
      payments: data.payment,
    },
  }
}
