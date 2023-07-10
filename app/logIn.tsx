'use client'
import Head from 'next/head'
import Image from 'next/image'
import styles from './page.module.css'
import { logIn, logOut } from './redux/features/newsSlice'
import { useDispatch } from 'react-redux/es/exports'
import { AppDispatch } from './redux/store'
import { useState } from 'react'

export default function LogIn() {
  const [username, setUserName] = useState('')
  const dispatch = useDispatch<AppDispatch>

  const onClickLogin = () =>{
    dispatch(logIn(username))
  }
  return (
      <div>
          <Head>
              <title>blog</title>
          </Head>

          <main>
            <h3>Blog</h3>
            <input type="text"  onChange={(e) => setUserName(e.target.value)}/>
          <button onClick={onClickLogin}>Log In </button>
          </main>
      </div>
  )
}