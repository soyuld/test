import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Count } from '../components/Count'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      리액트에서 함수를 정의할 떄 반드시 단일 태그여야함
      (Count라는 이름의 사용자 정의 태그 : 컴포넌트/ )
      Input 내장 태그
      리액트는 부품을 만들어서 결합하는 기술
      @: 폴더를 가리키는 절대 경로
      <Count></Count>
      <Count></Count>
      <Count></Count>
      <Count></Count>
      <Count></Count>
    </>
  )
}
