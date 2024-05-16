import { FC } from 'react'
import Image from 'next/image'

type LogoProps = {
  width?: number
  height?: number
}
const Logo: FC<LogoProps> = ({ width = 170, height = 127 }) => {
  return (
    <Image
      src='/assets/black-logo.png'
      alt='Logo Pice Gallery'
      data-testid='logo-component'
      width={width}
      height={height}
    />
  )
}

export default Logo
