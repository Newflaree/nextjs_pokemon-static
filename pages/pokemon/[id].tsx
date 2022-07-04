import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router"
import { Layout } from "../../components/layouts"

interface Props {
  id: string;
  name: string;
}

const PokemonPage: NextPage<Props> = ({ id, name }) => {
  const router = useRouter();

  return (
    <Layout title="Any pokemon">
      <h1>{ id } - { name }</h1>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async ( ctx ) => {
  return {
    paths: [
      {
        params: {
          id: '1'
        }
      }
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ( ctx ) => {
  //const { data } = await pokeApi.get<PokemonListResponse>( '/pokemon?limit=151' );

  return {
    props: {
      id: 1,
      name: 'Bulbasaur'
    }
  }
}

export default PokemonPage;
