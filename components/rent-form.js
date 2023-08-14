import { Button } from "@mui/material";
import CardFormInputs from "./card-form-inputs";

const RentForm = () => {
  return (
    <form className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px]">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative text-21xl leading-[48px] font-semibold font-body-regular-600 text-primary-800 text-center">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-lightslategray text-center">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px]">
          <CardFormInputs
            imageDimensions="/unsplashrlwe8f8anoc7@2x.png"
            imageDimensionsText="/car5.svg"
            imageDimensionsText2="/bathtub5.svg"
            imageDimensionsText3="/arrowsout2.svg"
            imageDimensionsText4="/plus7.svg"
          />
          <CardFormInputs
            imageDimensions="/unsplashrlwe8f8anoc8@2x.png"
            imageDimensionsText="/car5.svg"
            imageDimensionsText2="/bathtub5.svg"
            imageDimensionsText3="/arrowsout2.svg"
            imageDimensionsText4="/plus8.svg"
          />
          <CardFormInputs
            imageDimensions="/unsplashrlwe8f8anoc9@2x.png"
            imageDimensionsText="/car6.svg"
            imageDimensionsText2="/bathtub.svg"
            imageDimensionsText3="/arrowsout3.svg"
            imageDimensionsText4="/plus3.svg"
          />
          <CardFormInputs
            imageDimensions="/unsplashrlwe8f8anoc10@2x.png"
            imageDimensionsText="/car6.svg"
            imageDimensionsText2="/bathtub.svg"
            imageDimensionsText3="/arrowsout3.svg"
            imageDimensionsText4="/plus3.svg"
          />
        </div>
      </div>
      <Button variant="contained" color="primary">
        Load more listing
      </Button>
    </form>
  );
};

export default RentForm;
