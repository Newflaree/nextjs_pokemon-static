import type { GetStaticProps, NextPage } from 'next'
import { Card, Grid, Row, Text } from '@nextui-org/react';
// Api
import { pokeApi } from '../api';
// Components
import { Layout } from '../components/layouts';
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
          pokemons.map( ({ id, name, img }) => (
            <Grid
              xs={ 6 }
              sm={ 3 }
              md={ 2 }
              xl={ 1 }
              key={ id }
            >
              <Card
                isHoverable
              >
                <Card.Body css={{ p: 1 }}>
                  <Card.Image 
                    src={ img }
                    width="100%"
                    height={ 140 }
                  />
                </Card.Body>
                <Card.Footer>
                  <Row justify='space-between'>
                    <Text transform='capitalize'>{ name }</Text>
                    <Text>#{ id }</Text>
                  </Row>
                </Card.Footer>

              </Card>
            </Grid>
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
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ i + 1 }.png`
  }));

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;
