import Layout from '../../components/Layout';
import HeroSection from './HeroSection.jsx';
import MobileApp from './MobileApp';



const HomeSu = () => {
  return (
    <Layout>
      <HeroSection />
      <div className='bg-light-color flex flex-col gap-y-6'>
       <MobileApp /> 
      </div>
    </Layout>
  );
};

export default HomeSu;