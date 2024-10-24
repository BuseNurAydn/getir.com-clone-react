import Layout from '../../components/Layout';
import HeroSection from './HeroSection';
import Categories from './Categories';
import MobileApp from './MobileApp';
import Cards from './Cards';
import Business from './Business';


const HomeCarsi = () => {
  return (
    <Layout>
      <Categories/>
      <div className='bg-light-color flex flex-col gap-y-6'>
      <MobileApp/>
      <Cards />
      <Business/>
      </div>
    </Layout>
  );
};

export default HomeCarsi;