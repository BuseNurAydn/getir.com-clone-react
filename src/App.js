import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MobileApp from "./components/MobileApp";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <div className='bg-light-color flex flex-col gap-y-6 '>
        <MobileApp />
        <Cards />
  
        <Footer /> 
        </div>
    </>

  );
}

export default App;
