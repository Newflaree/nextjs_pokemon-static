import type { GetStaticProps, NextPage } from 'next'
import { Button } from '@nextui-org/react';
// Api
import { pokeApi } from '../api';
// Interfaces
import { PokemonListResponse, SmallPokemon } from '../interfaces';
// Components
import { Layout } from '../components/layouts';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log( pokemons[0].name );

  return (
    <Layout
      title='Pokes'
    >
      <ul>
        {
          pokemons.map( ({ id, name }) => (
            <li key={ id }>
              #{ id } - { name }
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ( ctx ) => {
  const { data } = await pokeApi.get<PokemonListResponse>( '/pokemon?limit=151' )
  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ i + 1 }.png`
  }));

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;
