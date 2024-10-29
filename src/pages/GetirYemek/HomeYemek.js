import Layout from '../../components/Layout';
import Business from './Business';
import Cards from './Cards'
import Cuisines from './Cuisines';
import HeroSection from './HeroSection';


const HomeYemek = () => {
  return (
    <Layout>
       <HeroSection/>
      <div className='bg-light-color flex flex-col gap-y-6'>
        <Cuisines/>
        <Cards/>
        <Business/>
      </div>
    </Layout>
  );
};

export default HomeYemek;