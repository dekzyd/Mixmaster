import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  // check if page is loading
  const navigation = useNavigation();
  const isLoadingPage = navigation.state === "loading";

  // passing global values to Outlet via RRD
  const value = "Ever forward";
  return (
    <>
      <Navbar />
      <section className="page">
        {isLoadingPage ? (
          <div className="loading"></div>
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
    </>
  );
};
export default HomeLayout;
