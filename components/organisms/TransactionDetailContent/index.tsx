/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import { HistoryTransactionTypes } from '../../../services/data-types'
import Row from './Row'

interface TransactionDetailContentProps {
  data: HistoryTransactionTypes
}

export default function TransactionContentDetail(
  props: TransactionDetailContentProps
) {
  const { data } = props

  const IMG = process.env.NEXT_PUBLIC_IMG

  return (
    <main className='main-wrapper'>
      <div className='ps-lg-0'>
        <h2 className='text-4xl fw-bold color-palette-1 mb-30'>
          Detail #{data._id}
        </h2>
        <div className='details'>
          <div className='main-content main-content-card overflow-auto'>
            <section className='checkout mx-auto'>
              <div className='d-flex flex-row  align-items-center justify-content-between mb-30'>
                <div className='game-checkout d-flex flex-row align-items-center'>
                  <div className='pe-4'>
                    <div className='cropped'>
                      <img
                        src={`${IMG}/${data.historyVoucherTopup.thumbnail}`}
                        width='200'
                        height='130'
                        className='img-fluid'
                        alt=''
                      />
                    </div>
                  </div>
                  <div>
                    <p className='fw-bold text-xl color-palette-1 mb-10'>
                      {data.historyVoucherTopup.gameName}
                    </p>
                    <p className='color-palette-2 m-0'>
                      Kategori: {data.historyVoucherTopup.category}
                    </p>
                  </div>
                </div>
                <div>
                  <p className='fw-medium text-center label pending m-0 rounded-pill'>
                    {data.status}
                  </p>
                </div>
              </div>
              <hr />
              <div className='purchase pt-30'>
                <h2 className='fw-bold text-xl color-palette-1 mb-20'>
                  Detail Pemesanan
                </h2>
                <Row label='ID Akun Game Kamu' value={data.accountUser} />
                <Row label='ID Order' value={data._id} />
                <Row
                  label='Item'
                  value={`${data.historyVoucherTopup.coinQuantity} ${data.historyVoucherTopup.coinName}`}
                />
                <Row label='Harga' value={data.historyVoucherTopup.price} />
                <Row label='Pajak 10%' value={data.tax} />
                <Row
                  label='Total'
                  value={data.value}
                  className='color-palette-4'
                />
              </div>
              <div className='payment pt-10 pb-10'>
                <h2 className='fw-bold text-xl color-palette-1 mb-20'>
                  Informasi Pembayaran
                </h2>
                <Row label='Nama Akun Kamu' value={data.name} />
                <Row label='Tipe Pembayaran' value={data.historyPayment.type} />
                <Row label='Nama Bank' value={data.historyPayment.bankName} />
                <Row
                  label='Nama Akun Bank Admin'
                  value={data.historyPayment.name}
                />
                <Row
                  label='Nomor Rekening Bank Admin'
                  value={data.historyPayment.noRekening}
                />
              </div>

              <div className='bukti-bayar pt-10 pb-10'>
                <h2 className='fw-bold text-xl color-palette-1 mb-20'>
                  Bukti Pembayaran
                </h2>

                <div className='container-img'>
                  <Image
                    src={`${IMG}/${data.buktiBayar}`}
                    height={500}
                    width={400}
                    alt='bg-buktiBayar'
                  />
                </div>
              </div>

              <div className='d-md-block d-flex flex-column w-100'>
                <a
                  className='btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg'
                  href='#'
                  role='button'
                >
                  WhatsApp ke Admin
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
