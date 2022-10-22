/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {
  HistoryTransactionTypes,
  TopUpCategoriesTypes,
} from '../../../services/data-types'
import { getMemberOverview, getTopItemPayment } from '../../../services/member'
import Categori from './Categori'
import TableRow from './TableRow'

export default function OverviewContent() {
  const [count, setCount] = useState([])
  const [data, setData] = useState([])
  const [dataTopItem, setDataTopItem] = useState([])
  const getMemberOverviewAPI = useCallback(async () => {
    const response = await getMemberOverview()
    if (response.error) {
      toast.error(response.message)
    } else {
      setCount(response.data.count)
      setData(response.data.data)
    }
  }, [])

  const getTopItemPaymentAPI = useCallback(async () => {
    const response = await getTopItemPayment()
    if (response.error) {
      toast.error(response.message)
    } else {
      setDataTopItem(response.data)
    }
  }, [])
  useEffect(() => {
    getMemberOverviewAPI()
    getTopItemPaymentAPI()
  }, [])

  const IMG = process.env.NEXT_PUBLIC_IMG

  return (
    <main className='main-wrapper'>
      <div className='ps-lg-0'>
        <h2 className='text-4xl fw-bold color-palette-1 mb-30'>Overview</h2>
        <div className='top-up-categories mb-30'>
          <p className='text-lg fw-medium color-palette-1 mb-14'>
            Top Terbanyak Pembelian Top Up Kamu !!!
          </p>
          <div className='main-content'>
            <div className='row'>
              {dataTopItem.map((item: TopUpCategoriesTypes) => {
                return (
                  <Categori
                    key={item._id}
                    nominal={item.value}
                    thumbnial={`${IMG}/${item.thumbnial}`}
                  >
                    {item._id}
                  </Categori>
                )
              })}
            </div>
          </div>
        </div>
        <div className='latest-transaction'>
          <p className='text-lg fw-medium color-palette-1 mb-14'>
            Transaksi Terbaru
          </p>
          <div className='main-content main-content-table overflow-auto'>
            <table className='table table-borderless'>
              <thead>
                <tr className='color-palette-1'>
                  <th className='text-start' scope='col'>
                    Game
                  </th>
                  <th scope='col'>Item</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.length !== 0 ? (
                  data.map((item: HistoryTransactionTypes) => {
                    return (
                      <TableRow
                        key={item._id}
                        title={item.historyVoucherTopup.gameName}
                        categori={item.historyVoucherTopup.category}
                        item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                        price={item.value}
                        status={item.status}
                        image={`${IMG}/${item.historyVoucherTopup.thumbnail}`}
                      />
                    )
                  })
                ) : (
                  <h2 className='text-lg fw-medium color-palette-1'>
                    Tidak ada transaksi
                  </h2>
                )}
                {}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}
