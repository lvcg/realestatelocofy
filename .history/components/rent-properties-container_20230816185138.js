// Import the Button component from the MUI library
import { Button } from "@mui/material";
// Import the PropertyRentCard component from a local file
import PropertyRentCard from "./property-rent-card";

// Define a functional component named RentPropertiesContainer
const RentPropertiesContainer = () => {
  // Render the RentPropertiesContainer component
  return (
    <div className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px]">
        {/* Title and subtitle section */}
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        {/* PropertyRentCard components */}
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] text-left text-base text-gray-white">
          {/* Render PropertyRentCard component multiple times with different data */}
          <PropertyRentCard />
          <PropertyRentCard propBackgroundImage={`url("/card-21@3x.png")`} />
          <PropertyRentCard propBackgroundImage={`url("/card-31@3x.png")`} />
          <PropertyRentCard propBackgroundImage={`url("/card-41@3x.png")`} />
        </div>
      </div>
      {/* Load more listings button */}
      <Button variant="contained" color="primary">
        Load more listing
      </Button>
    </div>
  );
};

// Export the RentPropertiesContainer component
export default RentPropertiesContainer;

