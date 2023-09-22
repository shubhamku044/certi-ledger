import { AboutUs, ContactsUs, Features, Header, Hero, Register } from '../components/landingPage';
import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Features />
      <Register />
      <ContactsUs />
    </>
  );
};

export default Home;
