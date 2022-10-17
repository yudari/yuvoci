import React, { useCallback, useEffect, useState } from 'react'
import { GameItemTypes } from '../../../services/data-types'
import { getAllFeaturedGameAPI } from '../../../services/player'
import GameItem from '../../molecules/GameItem'
import FeaturedGameAll from '../FeaturedGameAll'

const OverviewGames = () => {
  const [allGame, setAllGame] = useState([])
  const getAllFeaturedGame = useCallback(async () => {
    const data = await getAllFeaturedGameAPI()
    setAllGame(data)
  }, [getAllFeaturedGameAPI])

  useEffect(() => {
    getAllFeaturedGame()
  }, [])
  const IMG = process.env.NEXT_PUBLIC_IMG
  return (
    <main className='main-wrapper'>
      <div className='ps-lg-0'>
        <h2 className='text-4xl text-header fw-bold color-palette-1 text-header mb-30'>
          Daftar Top Up Game
        </h2>
        <p className='text-lg fw-medium color-palette-1 mb-14'>
          pilih salah satu top up game yang kamu beli !!!
        </p>
        <div className='featured-game main-content mt-30 d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-start gap-lg-5  main-content'>
          {allGame.map((data: GameItemTypes) => {
            return (
              <GameItem
                status='dashboard'
                id={data._id}
                key={data._id}
                title={data.name}
                category={data.category.name}
                thumbnial={`${IMG}/${data.thumbnial}`}
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default OverviewGames
