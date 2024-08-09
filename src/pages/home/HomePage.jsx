import {
  FreelancerCategories,
  HeroSection,
  HowItWorks,
  TrustedBySection,
} from '../../components';
import { categories, howItWorkdTtems, trustedByData } from '../../data';
import HowItWork from '../../assets/HowItWork.png';
const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <TrustedBySection data={trustedByData} />
      <div className="py-10 container mx-auto">
        <div className="space-y-2 mb-4">
          <h1 className="font-semibold lg:text-[32px] text-pure-black">
            Find professional freelancers in all fields
          </h1>
          <p className="text-[#3C3C4499] text-lg">
            Cover your skill needs in all specialties
          </p>
        </div>
        <FreelancerCategories categories={categories} />
      </div>
      <HowItWorks
        title={'How a USAM helps you get your work'}
        data={howItWorkdTtems}
        image={HowItWork}
      />
    </main>
  );
};

export default HomePage;
