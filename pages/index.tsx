import type { GetStaticProps, NextPage } from 'next'
import { Button } from '@nextui-org/react';
import { Layout } from '../components/layouts';

const HomePage: NextPage = ( props ) => {
  console.log({ props });
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
  console.log( 'Hello' );

  return {
    props: {
      name: 'DD'
    }
  }
}

export default HomePage;
