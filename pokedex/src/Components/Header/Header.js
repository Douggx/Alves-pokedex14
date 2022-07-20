import React from 'react'
import { ContainerHeader, StyledButton, StyledImg } from './Styled'
import Logo from '../../Assets/Logo.svg'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate =  useNavigate()
  
    const goToPokedexPage = () => {
      navigate("/pokedex")
    }

  return (
    <ContainerHeader>
        <span></span>
        <StyledImg src={Logo}></StyledImg>
        <StyledButton onClick={goToPokedexPage}>Pokedex</StyledButton>
    </ContainerHeader>
  )
}
