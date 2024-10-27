import Layout from '../../components/Layout';
import Business from './Business';
import Cards from './Cards'


const HomeYemek = () => {
  return (
    <Layout>
      
      <div className='bg-light-color flex flex-col gap-y-6'>
        <Cards/>
        <Business/>
      </div>
    </Layout>
  );
};

export default HomeYemek;