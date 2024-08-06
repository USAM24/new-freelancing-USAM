import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <main className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <div className="flex-grow min-h-[calc(100vh-128px)]">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default RootLayout;
