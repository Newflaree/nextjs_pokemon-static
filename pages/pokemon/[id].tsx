import { useRouter } from "next/router"
import { Layout } from "../../components/layouts"

interface Props {
  pokemon: any;
}

const PokemonPage = () => {
  const router = useRouter();
  console.log( router.query );

  return (
    <Layout title="Any pokemon">
      <h1>Hello World</h1>
    </Layout>
  )
}

export default PokemonPage;
