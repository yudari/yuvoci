import React from 'react'
import OverviewContent from '../../components/organisms/OverviewContent'
import SideBar from '../../components/organisms/SideBar'

export default function Member() {
  return (
    <section className='overview overflow-auto'>
      <SideBar activeMenu='overview' />
      <OverviewContent />
    </section>
  )
}
