import type { GetStaticProps, NextPage } from 'next'
import { Button } from '@nextui-org/react';
// Api
import { pokeApi } from '../api';
// Interfaces
import { PokemonListResponse } from '../interfaces';
// Components
import { Layout } from '../components/layouts';

const HomePage: NextPage = ( props ) => {

  return (
    <Layout
      title='Pokes'
    >
      <h1>Hello World</h1>
      <Button
        color='gradient'
      >
        Hello
      </Button>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ( ctx ) => {
  const { data } = await pokeApi.get<PokemonListResponse>( '/pokemon?limit=151' )

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default HomePage;
