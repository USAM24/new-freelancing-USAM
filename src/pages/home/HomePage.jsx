import { HeroSection, TrustedBySection } from '../../components';
import { trustedByData } from '../../data';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <TrustedBySection data={trustedByData} />
    </main>
  );
};

export default HomePage;
