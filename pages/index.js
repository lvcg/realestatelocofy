// Import necessary libraries and components
import Head from "next/head"; // Import the Head component to manage the document's head
import Header from "../components/header"; // Import the Header component
import Hero from "../components/hero"; // Import the DreamHomeFinderContainer component
import AreaPropertiesContainer from "../components/area-properties-container"; // Import the AreaPropertiesContainer component
import InfoCardContainer from "../components/info-card-container"; // Import the InfoCardContainer component
import RentForm from "../components/rent-form"; // Import the RentForm component
import RentPropertiesContainer from "../components/rent-properties-container"; // Import the RentPropertiesContainer component
import RentCard from "../components/rent-card"; // Import the RentCard component
import Footer from "../components/footer"; // Import the Footer component

// Define the LandingPage component
const LandingPage = () => {
  return (
    <>
      {/* Set the title and meta description for the page */}
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Home finder site" />
      </Head>
      {/* Main content container */}
      <div className="bg-gray-white w-full flex flex-col items-center justify-start">
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
      </div>
    </>
  );
};

// Export the LandingPage component
export default LandingPage;

