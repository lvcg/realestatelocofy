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
        <Footer
          imageIds="/houseline2.svg"
          smallImageIds="/social-media-logo5.svg"
          mediumImageIds="/social-media-logo6.svg"
          smallImageIds2="/social-media-logo7.svg"
          smallImageIds3="/social-media-logo8.svg"
          largeImageIds="/social-media-logo9.svg"
          propOverflow="unset"
        />
      </main>
    </>
  );
};

export default LandingPage;
