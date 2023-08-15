import Head from "next/head";
import Header from "../components/header";
import DreamHomeFinderContainer from "../components/dream-home-finder-container";
import AreaPropertiesContainer from "../components/area-properties-container";
import InfoCardContainer from "../components/info-card-container";
import RentForm from "../components/rent-form";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentCard from "../components/rent-card";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="home finder site" />
      </Head>
      <main className="relative bg-gray-white w-full flex flex-col items-center justify-start">
        <Header hamburger />
        <DreamHomeFinderContainer />
        <AreaPropertiesContainer />
        <InfoCardContainer />
        <RentForm />
        <RentPropertiesContainer />
        <RentCard />
        <Footer />
      </main>
    </>
  );
};

export default LandingPage;
