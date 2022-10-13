import React from 'react'
import StepItem from '../../molecules/StepItem/Index'
export default function TransactionsStep() {
  return (
    <section id='feature' className='feature pt-50 pb-50'>
      <div className='container-fluid '>
        <h2 className='text-4xl fw-bold color-palette-1 text-start mb-30'>
          Sangat Mudah Loh
          <br /> Top Up di Yuvoci!!!
        </h2>
        <div className='row gap-lg-0 gap-4' data-aos='fade-up'>
          <StepItem
            icon='step1'
            title='1. Start'
            desc1='Pilih salah satu game yang ingin kamu top up dan isi id game kamu.'
          />
          <StepItem
            icon='step2'
            title='2. Pilih nominal'
            desc1='Top up sesuai dengan nominal yang sudah tersedia'
          />
          <StepItem
            icon='step3'
            title='3. Pilih metode bayar'
            desc1='Pilih metode bayar kamu dan upload bukti pembayaran'
          />
          <StepItem
            icon='step1'
            title='4. Menunggu'
            desc1='Periksa pada dashboard anda, status pembelian akan menjadi  pending tolong tunggu Admin YuCovi akan menkonfirmasi pembayaran kamu'
          />
          <StepItem
            icon='step2'
            title='5. Pembelian berhasil'
            desc1='status pembayaran kamu akan berubah menjadi success dan pembelian dinyatakan berhasil, pastikan cek didalam game kamu apakah coin game kamu sudah masuk'
          />
          <StepItem
            icon='step3'
            title='6. Jadilah Gamer Sejati'
            desc1='Mainkan keseruan dengan skin baru pada game kamu dan jadilah gamer sejati'
          />
        </div>
      </div>
    </section>
  )
}
