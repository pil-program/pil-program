import Hero from './components/Hero';
import Products from './components/Products';
import AboutUsSection from './components/AboutUsSection';
import ContactForm from './components/contact-form';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Hero />
      <Products />
      <AboutUsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;