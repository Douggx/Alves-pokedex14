import React from 'react'
import { MainContainer, PokemonImage, PokemonTypeGrass, PokemonTypePoison, StyledButton, StyledDetails, StyledPokemonName, StyledPokemonNumber } from './Styled'
import Poison from '../../Assets/Poison.svg'
import Grass from '../../Assets/Grass.svg'
import Bulbasaur from '../../Assets/Bulbasaur.svg'

export default function Card2() {
  return (
    <MainContainer>
      <StyledPokemonNumber>
        #01
      </StyledPokemonNumber>

      <StyledPokemonName>
      Bulbasaur
      </StyledPokemonName>

      <PokemonTypePoison>
        <img src={Poison}></img>
        Poison
      </PokemonTypePoison>

      <PokemonTypeGrass>
        <img src={Grass} ></img>
        Grass
      </PokemonTypeGrass>

      <StyledDetails>
        Detalhes
      </StyledDetails>

      <PokemonImage src={Bulbasaur} />
      
      <StyledButton>Capturar!</StyledButton>

    </MainContainer>
  )
}
