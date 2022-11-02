/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react'
import { Audio, Circles } from 'react-loader-spinner'
import { GameItemTypes } from '../../../services/data-types'
import { getAllFeaturedGameAPI } from '../../../services/player'
import GameItem from '../../molecules/GameItem'

const FeaturedGameAll = () => {
  const [allGame, setAllGame] = useState([])
  const [loading, setLoading] = useState(true)
  const getAllFeaturedGame = useCallback(async () => {
    const data = await getAllFeaturedGameAPI()
    setAllGame(data)
    setLoading(false)
  }, [getAllFeaturedGameAPI])

  useEffect(() => {
    getAllFeaturedGame()
  }, [])
  const API_IMG = process.env.NEXT_PUBLIC_IMG

  return (
    <section className='featured-game pt-50 pb-50'>
      <div className='container-fluid'>
        <h2 className='text-4xl fw-bold color-palette-1 mb-30'>
          Daftar Top Up
          <br />
          Game Kami
        </h2>
        <div
          className='d-flex flex-row flex-lg-wrap  justify-content-lg-start gap-lg-3 gap-4'
          data-aos='fade-up'
        >
          <Circles
            height='80'
            width='80'
            color='#22577a'
            ariaLabel='three-dots-loading'
            wrapperStyle={{
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            wrapperClass=''
            visible={loading ? true : false}
          />
          {loading === false &&
            allGame.map((item: GameItemTypes) => {
              return (
                <GameItem
                  status='home'
                  id={item._id}
                  key={item._id}
                  title={item.name}
                  category={item.category.name}
                  thumbnial={`${API_IMG}/${item.thumbnial}`}
                />
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default FeaturedGameAll
