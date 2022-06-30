import type { GetStaticProps, NextPage } from 'next'
import { Card, Grid, Row, Text } from '@nextui-org/react';
// Api
import { pokeApi } from '../api';
// Components
import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';
// Interfaces
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log( pokemons[0].name );

  return (
    <Layout
      title='Pokes'
    >
      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map( (pokemon) => (
            <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ( ctx ) => {
  const { data } = await pokeApi.get<PokemonListResponse>( '/pokemon?limit=151' );
  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ i + 1 }.png`
  }));

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;
