import React, {useState, useEffect} from 'react'
import GlobalStateContext from './GlobalStateContext'
import axios from 'axios'

const GlobalState = (props) => {
    const [pokemonsList, setPokemonsList] = useState([])


    const getPokemons = () => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=29&offset=0')
        .then((res) => setPokemonsList(res.data.results))
        .catch((err) => alert(err.response))
    }

    // res.data.results[0].url



      const states = {
        pokemonsList,
        setPokemonsList
      }

      const constants = {
        getPokemons
      }



    return (
        <GlobalStateContext.Provider value={{states, constants}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
