import React from 'react'
import StepItem from '../../molecules/StepItem/Index'

const TahapBelanja = () => {
  return (
    <section className='feature pt-lg-60 pb-50'>
      <div className='container-xxl container-fluid'>
        <h2 className='text-4xl fw-bold color-palette-1 text-start mb-30'>
          Cara Belanja di YuVoci
        </h2>
        <p className='text-2xl color-palette-2 '>
          Ikut langkah-langkah ini dan kamu akan merasakan bermain game dengan
          pengalaman terbaru bersama skin hasil top up kamu
        </p>
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

export default TahapBelanja
