import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { RootLayout } from '../layout';
import {
  ContactUsPage,
  FindFreelancersPage,
  HomePage,
  MarketPlacePage,
  SigninPage,
  SignupPage,
} from '../pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="sign-in" element={<SigninPage />} />
        <Route path="sign-up" element={<SignupPage />} />
        <Route path="market-place" element={<MarketPlacePage />} />
        <Route path="find-freelancers" element={<FindFreelancersPage />} />
        <Route path="contact-us" element={<ContactUsPage />} />
        <Route path="categories/:id" />
      </Route>
    </>
  )
);

export default router;
