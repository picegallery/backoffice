import { FC } from 'react'
import Image from 'next/image'
import { AppBar, Container } from '@mui/material'
import { URLS } from '@/constants'
import { HeaderStyled } from './Header.styled'

const Header: FC = () => {
  return (
    <AppBar position='static' sx={{ zIndex: 2000 }}>
      <Container maxWidth='xl'>
        <HeaderStyled disableGutters>
          <Image
            src={`${URLS.awsBucket}/logo-branco.png`}
            width={160}
            alt='Pice Gallery Logo'
            height={100}
            objectFit='contain'
          />
        </HeaderStyled>
      </Container>
    </AppBar>
  )
}

export default Header
