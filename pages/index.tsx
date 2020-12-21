import GoldP from '../components/Home/GoldP'
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('@components/Layout'))

const Index: React.FC = () => {
  return (
    <Layout>
      <GoldP />
    </Layout>
  )
}

export default Index
