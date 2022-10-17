import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export interface GameItemProps {
  title: string
  category: string
  thumbnial: string
  id: string
  status: string
}
export default function GameItem(props: GameItemProps) {
  const { title, category, thumbnial, id, status } = props
  return (
    <div className='featured-game-card position-relative '>
      <Link href={status === 'dashboard' ? `../detail/${id}` : `detail/${id}`}>
        <a>
          <div className='blur-sharp'>
            <Image
              src={thumbnial}
              className='thumbnail'
              width={205}
              height={270}
              alt='thumbnial'
            />
          </div>
          <div className='cover position-absolute bottom-0 m-32'>
            <div className='d-flex flex-column h-100 justify-content-between text-decoration-none'>
              <div className='game-icon mx-auto'>
                <Image
                  src='/icon/console.svg'
                  width={54}
                  height={36}
                  alt='console'
                />
              </div>
              <div>
                <p className='fw-semibold text-white text-xl m-0'>{title}</p>
                <p className='fw-light text-white m-0'>{category}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}
