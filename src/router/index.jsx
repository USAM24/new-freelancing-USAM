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
import PaymentPage from '../pages/Payment/PaymentPage.jsx';
import FreelancerProfilePage from '../pages/FreelancerProfile/FreelancerProfilePage.jsx';
import ProjectsClient from '../pages/ProjectsClient/ProjectsClient.jsx';
import FreelancerProposal from '../pages/FreelancerProposal/FreelancerProposal.jsx';
import ProposalProjects from '../pages/ProposalProjects/ProposalProjects.jsx';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute.jsx';
import PaymentTest from '../pages/PaymentTest/PaymentTest.jsx';

const router = createBrowserRouter(
  
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="sign-in" element={<SigninPage />} />
        <Route path="sign-up" element={<SignupPage />} />
        <Route path="market-place" element={<MarketPlacePage />} />
        {/* <Route path="find-freelancers" element={<FindFreelancersPage />} /> */}
        <Route path="contact-us" element={<ContactUsPage />} />
        {/* <Route path="post-job" element={<PostJob/>} /> */}
        <Route path="categories/:id" />
        <Route path="test" element={<PaymentTest/>} />
        {/* <Route path="profile/:id" element={<ProfilePage/>} />
        <Route path="freelancer/:id" element={<FreelancerProfilePage/>} />
        <Route path="freelancer/:id/projects" element={<ProjectsClient/>} />
        <Route path="freelancer/:id/proposals" element={<ProposalProjects/>} />
        <Route path="/freelancer/:id/projects/propsal/:id" element={<FreelancerProposal/>} />
        <Route path="job-details/:id" element={<JobDetailsPage/>} />
        <Route path="job-overview/:id" element={<JobOverview/>} />
        <Route path="payment" element={<PaymentPage/>} />
        <Route path="/edit-job/:projectId" element={<PostJob />} /> */}
        {/* <Route path="find-job" element={<FindJobPage />} /> */}

        <Route element={<PrivateRoute />}>
          <Route path="find-job" element={<FindJobPage />} />
          <Route path="post-job" element={<PostJob/>} />
          <Route path="find-freelancers" element={<FindFreelancersPage />} />
          <Route path="profile/:id" element={<ProfilePage/>} />
          <Route path="freelancer/:id" element={<FreelancerProfilePage/>} />
          <Route path="freelancer/:id/projects" element={<ProjectsClient/>} />
          <Route path="freelancer/:id/proposals" element={<ProposalProjects/>} />
          <Route path="/freelancer/:id/projects/propsal/:id" element={<FreelancerProposal/>} />
          <Route path="job-details/:id" element={<JobDetailsPage/>} />
          <Route path="job-overview/:id" element={<JobOverview/>} />
          <Route path="payment" element={<PaymentPage/>} />

          <Route path="/edit-job/:projectId" element={<PostJob />} />
        </Route>
      </Route>
    </>
  )
);

export default router;
