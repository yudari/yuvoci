import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
  return (
    <section className='about-me pt-50 pb-50' id='aboutMe'>
      <div className='container'>
        <h2 className='text-4xl fw-bold color-palette-1 mb-30 text-center text-lg-center'>
          Tentang YoVoci
        </h2>
        <div
          className='d-flex flex-lg-row flex-column gap-4'
          data-aos='fade-up'
        >
          {/* <div className='container-foto d-flex flex-column align-items-center col-lg-4 '>
            <Image
              loading='lazy'
              className='foto-diri'
              src={'/img/foto-diri.JPG'}
              height={700}
              width={500}
              alt='foto-diri'
            />
            <p className='text-3xl color-palette-1 text-center mt-3'>
              Yudha Satria <br /> Teknik Informatika
            </p>
          </div> */}

          <p className='text-2xl color-palette-2 col-lg-6 lh-lg w-100'>
            YuVoci adalah website top up game yang dimana user dapat melakukan
            pembelian top up / kredit game dengan secara mudah. Website ini
            dibangun oleh saya sebagai programmer yang bertanggung jawab dalam
            pembuatan website ini. teknologi yang digunakan dalam pembuatan
            website ini menggunakan bahasa pemrograman javascript dengan pada
            sisi front end menggunakan Next Js sementara pada backend
            menggunakan Express js dan node js serta untuk database menggunakan
            mongodb.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
