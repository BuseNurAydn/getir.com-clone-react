import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />  {/* Ortak header */}
      <main className="flex-grow">
        {children}  {/* Sayfaya özel içerik */}
      </main>
      <Footer /> {/* Ortak header */}
    </div>
  );
};

export default Layout;
