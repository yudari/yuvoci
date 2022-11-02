/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Image from 'next/image'
import { getGameCategory } from '../services/player'
import { setSignUp } from '../services/auth'
import { CategoryTypes } from '../services/data-types'

export default function SignUpPhoto() {
  const [categories, setCategories] = useState([])
  const [favorite, setFavorite] = useState('')
  const [image, setImage] = useState<any>('')
  const [imagePreview, setImagePreview] = useState<any>(null)
  const [localForm, setLocalForm] = useState({
    name: '',
    email: '',
  })
  const router = useRouter()
  const getGameCategoryAPI = useCallback(async () => {
    const data = await getGameCategory()
    setCategories(data)
    setFavorite(data[0]._id)
  }, [getGameCategory])

  const onSubmit = async () => {
    const getLocalForm = localStorage.getItem('user-form')
    const form = JSON.parse(getLocalForm!)
    const data = new FormData()

    data.append('image', image)
    data.append('email', form.email)
    data.append('name', form.name)
    data.append('password', form.password)
    data.append('username', form.name)
    data.append('phoneNumber', '082255070757')
    data.append('role', 'user')
    data.append('status', 'Y')
    data.append('favorite', favorite)

    // const formDataObj = Object.fromEntries(data.entries())
    const result = await setSignUp(data)
    if (result.error) {
      toast.error(`Player Validasi Gagal : email sudah terdaftar`)
    } else {
      toast.success('Register berhasil')
      router.push('/sign-up-success')
      localStorage.removeItem('user-form')
    }
  }
  useEffect(() => {
    getGameCategoryAPI()
  }, [])

  useEffect(() => {
    const getLocalForm = localStorage.getItem('user-form')
    setLocalForm(JSON.parse(getLocalForm!))
  }, [])

  return (
    <section className='sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50'>
      <div className='container mx-auto'>
        <div>
          <div className='form-input d-md-block d-flex flex-column'>
            <div>
              <div className='mb-20'>
                <div className='image-upload'>
                  <label htmlFor='avatar'>
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        width={120}
                        height={120}
                        alt='icon-upload'
                        className='img-upload'
                      />
                    ) : (
                      <Image
                        src={'/icon/upload.svg'}
                        width={120}
                        height={120}
                        alt='icon-upload'
                        className='img-upload'
                      />
                    )}
                  </label>
                  <input
                    id='avatar'
                    type='file'
                    name='avatar'
                    accept='image/png, image/jpeg'
                    onChange={(event) => {
                      const img = event.target.files![0]
                      setImagePreview(URL.createObjectURL(img))
                      return setImage(img)
                    }}
                  />
                </div>
              </div>
              <h2 className='fw-bold text-xl text-center color-palette-1 m-0'>
                {localForm.name}
              </h2>
              <p className='text-lg text-center color-palette-1 m-0'>
                {localForm.email}
              </p>
              <div className='pt-50 pb-50'>
                <label
                  htmlFor='category'
                  className='form-label text-lg fw-medium color-palette-1 mb-10'
                >
                  Favorite Game
                </label>
                <select
                  id='category'
                  name='category'
                  className='form-select input-select-category d-block w-100 rounded-pill text-lg'
                  aria-label='Favorite Game'
                  onChange={(event) => setFavorite(event.target.value)}
                  value={favorite}
                >
                  {categories.map((category: CategoryTypes) => {
                    return (
                      <option key={category._id} value={category._id} selected>
                        {category.name}
                      </option>
                    )
                  })}
                  <option value='' disabled selected>
                    Select Category
                  </option>
                </select>
              </div>
            </div>

            <div className='button-group d-flex flex-column mx-auto'>
              <button
                className='btn btn-create fw-medium text-lg text-white rounded-pill mb-16'
                type='button'
                onClick={onSubmit}
              >
                Create My Account
              </button>

              <a
                className='btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15'
                href='#'
                role='button'
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
