<<<<<<< HEAD
// Import the Button component from the MUI library
import { Button } from "@mui/material";
// Import the CardFormInputs component from a local file
import CardFormInputs from "./card-form-inputs";
=======
import { TextField, Button } from "@mui/material";
>>>>>>> 8a2283f489f8848ec19abafab5d1a820723860b6

// Define a functional component named RentForm
const RentForm = () => {
  // Render the RentForm component
  return (
    <form className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px]">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
<<<<<<< HEAD
          {/* Header section */}
          <div className="self-stretch relative text-21xl leading-[48px] font-semibold font-body-regular-600 text-primary-800 text-center">
=======
          <div className="self-stretch relative text-21xl leading-[48px] font-semibold font-body-large-400 text-primary-800 text-center">
>>>>>>> 8a2283f489f8848ec19abafab5d1a820723860b6
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-large-400 text-lightslategray text-center">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        {/* CardFormInputs section */}
        <div className="self-stretch flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px]">
<<<<<<< HEAD
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
=======
          <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
            <img
              className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
              alt=""
              src="/unsplashrlwe8f8anoc7@2x.png"
            />
            <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
              <div className="flex-1 relative text-[14.51px] leading-[20.32px] font-medium font-body-large-400 text-gray-700 text-left">
                92 ALLIUM PLACE, ORLANDO FL 32827
              </div>
            </div>
            <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
              <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-large-400 text-primary-500 text-left">
                $ 590,693
              </div>
            </div>
            <div className="self-stretch flex flex-row py-0 px-2.5 items-start justify-start gap-[17px]">
              <div className="flex flex-row items-center justify-start gap-[4.35px]">
                <img
                  className="relative w-[17.42px] h-[17.42px]"
                  alt=""
                  src="/car5.svg"
                />
                <div className="relative text-[10.84px] leading-[16.27px] font-medium font-body-large-400 text-gray-500 text-left">
                  4
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[4.35px]">
                <img
                  className="relative w-[17.42px] h-[17.42px]"
                  alt=""
                  src="/bathtub5.svg"
                />
                <div className="relative text-[10.84px] leading-[16.27px] font-medium font-body-large-400 text-gray-500 text-left">
                  4
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[4.35px]">
                <img
                  className="relative w-[17.42px] h-[17.42px]"
                  alt=""
                  src="/arrowsout2.svg"
                />
                <div className="relative text-[10.84px] leading-[16.27px] font-medium font-body-large-400 text-gray-500 text-left">
                  2,096.00 ft
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-start gap-[5.81px]">
                <img
                  className="relative rounded-[50%] w-[27.57px] h-[27.57px] object-cover"
                  alt=""
                  src="/ellipse-1@2x.png"
                />
                <div className="relative text-[11.61px] leading-[17.42px] font-medium font-body-large-400 text-gray-700 text-center">
                  Jenny Wilson
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8.71px]">
                <TextField
                  className="[border:none] bg-[transparent]"
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Label"
                  placeholder="Placeholder"
                  size="medium"
                  margin="none"
                />
                <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                  <img
                    className="relative w-[14.51px] h-[14.51px]"
                    alt=""
                    src="/heart2.svg"
                  />
                </div>
                <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                  <img
                    className="relative w-[14.51px] h-[14.51px]"
                    alt=""
                    src="/plus7.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
            <img
              className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
              alt=""
              src="/unsplashrlwe8f8anoc8@2x.png"
            />
            <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
              <div className="flex-1 relative text-[14.51px] leading-[20.32px] font-medium font-body-large-400 text-gray-700 text-left">
                92 ALLIUM PLACE, ORLANDO FL 32827
              </div>
            </div>
            <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
              <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-large-400 text-primary-500 text-left">
                $ 590,693
              </div>
            </div>
            <div className="self-stretch flex flex-row py-0 px-2.5 items-start justify-start gap-[17px]">
              <div className="flex flex-row items-center justify-start gap-[4.35px]">
                <img
                  className="relative w-[17.42px] h-[17.42px]"
                  alt=""
                  src="/car5.svg"
                />
                <div className="relative text-[10.84px] leading-[16.27px] font-medium font-body-large-400 text-gray-500 text-left">
                  4
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[4.35px]">
                <img
                  className="relative w-[17.42px] h-[17.42px]"
                  alt=""
                  src="/bathtub5.svg"
                />
                <div className="relative text-[10.84px] leading-[16.27px] font-medium font-body-large-400 text-gray-500 text-left">
                  4
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[4.35px]">
                <img
                  className="relative w-[17.42px] h-[17.42px]"
                  alt=""
                  src="/arrowsout2.svg"
                />
                <div className="relative text-[10.84px] leading-[16.27px] font-medium font-body-large-400 text-gray-500 text-left">
                  2,096.00 ft
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-start gap-[5.81px]">
                <img
                  className="relative rounded-[50%] w-[27.57px] h-[27.57px] object-cover"
                  alt=""
                  src="/ellipse-1@2x.png"
                />
                <div className="relative text-[11.61px] leading-[17.42px] font-medium font-body-large-400 text-gray-700 text-center">
                  Jenny Wilson
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8.71px]">
                <TextField
                  className="[border:none] bg-[transparent]"
                  color="primary"
                  variant="standard"
                  type="text"
                  label="Label"
                  placeholder="Placeholder"
                  size="medium"
                  margin="none"
                />
                <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                  <img
                    className="relative w-[14.51px] h-[14.51px]"
                    alt=""
                    src="/heart2.svg"
                  />
                </div>
                <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                  <img
                    className="relative w-[14.51px] h-[14.51px]"
                    alt=""
                    src="/plus8.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
            <img
              className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
              alt=""
              src="/unsplashrlwe8f8anoc9@2x.png"
            />
            <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
              <div className="flex-1 relative text-[14.51px] leading-[20.32px] font-medium font-body-large-400 text-gray-700 text-left">
                92 ALLIUM PLACE, ORLANDO FL 32827
              </div>
            </div>
            <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
              <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-large-400 text-primary-500 text-left">
                $ 590,693
              </div>
            </div>
            <div className="self-stretch flex flex-row py-0 px-2.5 items-start justify-start gap-[17px]">
              <div className="flex flex-row items-center justify-start gap-[4.35px]">
                <img
                  className="relative w-[17.42px] h-[17.42px]"
                  alt=""
                  src="/car6.svg"
                />
                <div className="relative text-[10.84px] leading-[16.27px] font-medium font-body-large-400 text-gray-500 text-left">
                  4
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[4.35px]">
                <img
                  className="relative w-[17.42px] h-[17.42px]"
                  alt=""
                  src="/bathtub.svg"
                />
                <div className="relative text-[10.84px] leading-[16.27px] font-medium font-body-large-400 text-gray-500 text-left">
                  4
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[4.35px]">
                <img
                  className="relative w-[17.42px] h-[17.42px]"
                  alt=""
                  src="/arrowsout3.svg"
                />
                <div className="relative text-[10.84px] leading-[16.27px] font-medium font-body-large-400 text-gray-500 text-left">
                  2,096.00 ft
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-start gap-[5.81px]">
                <img
                  className="relative rounded-[50%] w-[27.57px] h-[27.57px] object-cover"
                  alt=""
                  src="/ellipse-1@2x.png"
                />
                <div className="relative text-[11.61px] leading-[17.42px] font-medium font-body-large-400 text-gray-700 text-center">
                  Jenny Wilson
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8.71px]">
                <TextField
                  className="[border:none] bg-[transparent]"
                  color="primary"
                  variant="standard"
                  type="text"
                  label="Label"
                  placeholder="Placeholder"
                  size="medium"
                  margin="none"
                />
                <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                  <img
                    className="relative w-[14.51px] h-[14.51px]"
                    alt=""
                    src="/heart2.svg"
                  />
                </div>
                <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                  <img
                    className="relative w-[14.51px] h-[14.51px]"
                    alt=""
                    src="/plus3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
            <img
              className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
              alt=""
              src="/unsplashrlwe8f8anoc10@2x.png"
            />
            <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
              <div className="flex-1 relative text-[14.51px] leading-[20.32px] font-medium font-body-large-400 text-gray-700 text-left">
                92 ALLIUM PLACE, ORLANDO FL 32827
              </div>
            </div>
            <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
              <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-large-400 text-primary-500 text-left">
                $ 590,693
              </div>
            </div>
            <div className="self-stretch flex flex-row py-0 px-2.5 items-start justify-start gap-[17px]">
              <div className="flex flex-row items-center justify-start gap-[4.35px]">
                <img
                  className="relative w-[17.42px] h-[17.42px]"
                  alt=""
                  src="/car6.svg"
                />
                <div className="relative text-[10.84px] leading-[16.27px] font-medium font-body-large-400 text-gray-500 text-left">
                  4
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[4.35px]">
                <img
                  className="relative w-[17.42px] h-[17.42px]"
                  alt=""
                  src="/bathtub.svg"
                />
                <div className="relative text-[10.84px] leading-[16.27px] font-medium font-body-large-400 text-gray-500 text-left">
                  4
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[4.35px]">
                <img
                  className="relative w-[17.42px] h-[17.42px]"
                  alt=""
                  src="/arrowsout3.svg"
                />
                <div className="relative text-[10.84px] leading-[16.27px] font-medium font-body-large-400 text-gray-500 text-left">
                  2,096.00 ft
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-start gap-[5.81px]">
                <img
                  className="relative rounded-[50%] w-[27.57px] h-[27.57px] object-cover"
                  alt=""
                  src="/ellipse-1@2x.png"
                />
                <div className="relative text-[11.61px] leading-[17.42px] font-medium font-body-large-400 text-gray-700 text-center">
                  Jenny Wilson
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8.71px]">
                <TextField
                  className="[border:none] bg-[transparent]"
                  color="primary"
                  variant="standard"
                  type="text"
                  label="Label"
                  placeholder="Placeholder"
                  size="medium"
                  margin="none"
                />
                <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                  <img
                    className="relative w-[14.51px] h-[14.51px]"
                    alt=""
                    src="/heart2.svg"
                  />
                </div>
                <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                  <img
                    className="relative w-[14.51px] h-[14.51px]"
                    alt=""
                    src="/plus3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
>>>>>>> 8a2283f489f8848ec19abafab5d1a820723860b6
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
