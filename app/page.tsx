import Advantages from '@/components/Advantages'
import Layout from '@/components/Layout'
import ListItems from '@/components/ListItems'
import Partners from '@/components/Partners'
import Slider from '@/components/Slider'

const Home = () => {
  return (
    <Layout>
      <Slider />
      <Advantages />
      <ListItems />
      <Partners />
    </Layout>
  )
}

export default Home