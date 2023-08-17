// Import the Button component from the MUI library
import { Button } from "@mui/material";
// Import the CardFormInputs component from a local file
import CardFormInputs from "./card-form-inputs";

// Define a functional component named RentForm
const RentForm = () => {
  // Render the RentForm component
  return (
    <form className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px]">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          {/* Header section */}
          <div className="self-stretch relative text-21xl leading-[48px] font-semibold font-body-regular-600 text-primary-800 text-center">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-lightslategray text-center">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        {/* CardFormInputs section */}
        <div className="self-stretch flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px]">
          {/* Render CardFormInputs component with different data */}
          <CardFormInputs
            imageDimensions="/unsplashrlwe8f8anoc7@2x.png"
            imageDimensionsText="/car5.svg"
            imageDimensionsText2="/bathtub5.svg"
            imageDimensionsText3="/arrowsout2.svg"
            imageDimensionsText4="/plus7.svg"
          />
          {/* Similar CardFormInputs components for other data */}
          <CardFormInputs
            // ...
          />
          {/* ... */}
        </div>
      </div>
      {/* Load more listings button */}
      <Button variant="contained" color="primary">
        Load more listing
      </Button>
    </form>
  );
};

// Export the RentForm component
export default RentForm;
