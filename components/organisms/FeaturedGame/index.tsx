/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState, CSSProperties } from 'react'
import GameItem from '../../molecules/GameItem'
import axios from 'axios'
import { getFeaturedGame } from '../../../services/player'
import { GameItemTypes } from '../../../services/data-types'

import ClipLoader from 'react-spinners/ClipLoader'

export default function FeaturedGame() {
  const [gameList, setGameList] = useState([])

  const getFeatureGameList = useCallback(async () => {
    const data = await getFeaturedGame()
    setGameList(data)
  }, [getFeaturedGame])
  useEffect(() => {
    getFeatureGameList()
  }, [])

  const API_IMG = process.env.NEXT_PUBLIC_IMG
  console.log(gameList)
  return (
    <section className='featured-game pt-50 pb-50'>
      <div className='container-fluid'>
        <h2 className='text-4xl fw-bold color-palette-1 mb-30'>
          Top Up
          <br /> Game Terlaris Kami!!!
        </h2>
        <div
          className='d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4'
          data-aos='fade-up'
        >
          {gameList.map((item: GameItemTypes) => {
            return (
              <GameItem
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
