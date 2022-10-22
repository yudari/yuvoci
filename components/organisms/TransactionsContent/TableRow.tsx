/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import cx from 'classnames'
import { NumericFormat } from 'react-number-format'
import Image from 'next/image'
interface TableRowProps {
  image: string
  title: string
  category: string
  item: string
  price: number
  status: string
  id: string
  buktiBayar: string
}
export default function TableRow(props: TableRowProps) {
  const { image, title, category, item, price, status, id, buktiBayar } = props

  const statusClass = cx({
    'float-start icon-status': true,
    pending: status === 'pending',
    failed: status === 'failed',
    success: status === 'success',
  })

  console.log(buktiBayar)

  return (
    <tr data-category='pending' className='align-middle'>
      <th scope='row'>
        <img
          className='float-start me-3 mb-lg-0 mb-3'
          src={image}
          width='80'
          height='60'
          alt=''
        />
        <div className='game-title-header'>
          <p className='game-title fw-medium text-start color-palette-1 m-0'>
            {title}
          </p>
          <p className='text-xs fw-normal text-start color-palette-2 m-0'>
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className='fw-medium color-palette-1 m-0'>{item}</p>
      </td>
      <td>
        <p className='fw-medium color-palette-1 m-0'>
          <NumericFormat
            value={price}
            prefix='Rp. '
            displayType='text'
            thousandSeparator='.'
            decimalSeparator=','
          />
        </p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p className='fw-medium text-start color-palette-1 m-0 position-relative'>
            {status}
          </p>
        </div>
      </td>
      <td>
        {buktiBayar ===
        'https://yuvoci-server.herokuapp.com/uploads/undefined' ? (
          <p className='fw-medium color-palette-1 m-0'>Tidak ada</p>
        ) : (
          <Image
            height={50}
            width={50}
            src={buktiBayar}
            alt='img-bukti-bayar'
          />
        )}
      </td>
      <td>
        <Link href={`/member/transactions/${id}`}>
          <a className='btn btn-status rounded-pill text-sm'>Detail</a>
        </Link>
      </td>
    </tr>
  )
}
