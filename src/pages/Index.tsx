
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Products from '@/components/home/Products';
import Services from '@/components/home/Services';
import ProducerSpotlight from '@/components/home/ProducerSpotlight';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';
import Statistics from '@/components/home/Statistics';
import Layout from '@/components/layout/Layout';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Statistics />
      <Products />
      <ProducerSpotlight />
      <Testimonials />
      <Services />
      <CallToAction />
    </Layout>
  );
};

export default Index;
