import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className='bg-primary-black overflow-hidden'>
    {/* <Navbar /> */}
    <Hero />
   <div className='relative'>
    <About />
   <div className="gradient-03 z-0" />

    
    
    <Explore />
    </div>
    <div className='relative'></div>
    <GetStarted />
    <WhatsNew />
    <div className="gradient- z-0" />
    <World />
    <div className='relative'></div>
    <Insights />
    <Feedback />
    <div className="gradient-01 z-0" />
    <Footer />
  </div>
);

export default Page;
