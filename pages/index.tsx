import type { NextPage } from 'next'
import { Button } from '@nextui-org/react';

const HomePage: NextPage = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Button
        color='gradient'
      >
        Hello
      </Button>
    </>
  )
}

export default HomePage;
