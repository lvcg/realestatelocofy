<<<<<<< HEAD
// Import necessary modules and components
import Head from "next/head";  // Module for setting the page title and meta tags
import Header from "../components/header";  // Custom header component
import DreamHomeFinderContainer from "../components/dream-home-finder-container";  // Container for dream home finder section
import AreaPropertiesContainer from "../components/area-properties-container";  // Container for area properties section
import InfoCardContainer from "../components/info-card-container";  // Container for info card section
import RentForm from "../components/rent-form";  // Form for renting properties
import RentPropertiesContainer from "../components/rent-properties-container";  // Container for rent properties section
import RentCard from "../components/rent-card";  // Card for displaying rent details
import Footer from "../components/footer";  // Custom footer component
=======
import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/dream-home-finder-container";
import AreaContainer from "../components/area-properties-container";
import FeatureContainer from "../components/info-card-container";
import RentForm from "../components/rent-form";
import RentPropertiesContainer from "../components/rent-properties-container";
import Contact from "../components/rent-card";
import Footer from "../components/footer";
>>>>>>> 8a2283f489f8848ec19abafab5d1a820723860b6

// Define the LandingPage component
const LandingPage = () => {
  return (
    <>
      {/* Set the title and meta description for the page */}
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="home finder site" />
      </Head>
      {/* Main content container */}
      <div className=" bg-gray-white w-full flex flex-col items-center justify-start">
        {/* Include the header component */}
        <Header hamburger />
<<<<<<< HEAD
        {/* Include the DreamHomeFinderContainer */}
        <DreamHomeFinderContainer />
        {/* Include the AreaPropertiesContainer */}
        <AreaPropertiesContainer />
        {/* Include the InfoCardContainer */}
        <InfoCardContainer />
        {/* Include the RentForm */}
=======
        <Hero />
        <AreaContainer />
        <FeatureContainer />
>>>>>>> 8a2283f489f8848ec19abafab5d1a820723860b6
        <RentForm />
        {/* Include the RentPropertiesContainer */}
        <RentPropertiesContainer />
<<<<<<< HEAD
        {/* Include the RentCard */}
        <RentCard />
        {/* Include the Footer */}
        <Footer />
      </div>
=======
        <Contact />
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
>>>>>>> 8a2283f489f8848ec19abafab5d1a820723860b6
    </>
  );
};

// Export the LandingPage component
export default LandingPage;
