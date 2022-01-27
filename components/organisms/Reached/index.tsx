import React from 'react'
import ItemCardReached from './ItemCardReached'

export default function Reached() {
  return (
    <section className='reached pt-50 pb-50'>
      <div className='container-fluid'>
        <div className='d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4'>
          <ItemCardReached title='209M+' desc='Player Top Up' />
          <ItemCardReached title='12.500' desc='Games Available' />
          <ItemCardReached title='99,9%' desc='Happy Players' />
          <ItemCardReached title='4.7' desc='Rating Worldwide' />
        </div>
      </div>
    </section>
  )
}
