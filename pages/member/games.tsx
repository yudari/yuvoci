import React from 'react'
import OverviewGames from '../../components/organisms/OverviewGames'
import SideBar from '../../components/organisms/SideBar'

const Games = () => {
  return (
    <section className='games overflow-auto'>
      <SideBar activeMenu='games' />
      <OverviewGames />
    </section>
  )
}

export default Games
