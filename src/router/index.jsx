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
  // FindJobPage,
  MarketPlacePage,
  SigninPage,
  SignupPage,
} from '../pages';
import PostJob from "../pages/PostJob/PostJob"
import ProfilePage from '../pages/Profile/[id]';
import JobDetailsPage from '../pages/JobDetailsPage/JobDetailsPage';
import JobOverview from '../pages/JobOverview/JobOverview';
import FindJobPage from '../pages/FindJob/FindJobPage.jsx';


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
        <Route path="post-job" element={<PostJob/>} />
        <Route path="categories/:id" />
        <Route path="profile/:id" element={<ProfilePage/>} />
        <Route path="find-job" element={<FindJobPage/>} />
        <Route path="job-details/:id" element={<JobDetailsPage/>} />
        <Route path="job-overview/:id" element={<JobOverview/>} />
      </Route>
    </>
  )
);

export default router;
