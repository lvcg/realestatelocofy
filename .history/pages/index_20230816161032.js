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
      <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
        {/* Include the header component */}
        <Header hamburger />
        {/* Include the DreamHomeFinderContainer */}
        <DreamHomeFinderContainer />
        {/* Include the AreaPropertiesContainer */}
        <AreaPropertiesContainer />
        {/* Include the InfoCardContainer */}
        <InfoCardContainer />
        {/* Include the RentForm */}
        <RentForm />
        {/* Include the RentPropertiesContainer */}
        <RentPropertiesContainer />
        {/* Include the RentCard */}
        <RentCard />
        {/* Include the Footer */}
        <Footer />
      </main>
    </>
  );
};

// Export the LandingPage component
export default LandingPage;
