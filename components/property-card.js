<<<<<<< HEAD
// Define a component named PropertyCard
const PropertyCard = ({
  imgUrl,   // Image URL for the property
  name,     // Property name
  price     // Property price
}) => {
  return (
    <div className="rounded-3xs bg-gray-white box-border w-[350px] h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] text-left text-[14.51px] text-gray-700 font-body-large-400 border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
      {/* Display the property image */}
      <img
        className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
        alt=""
        src={imgUrl}
      />
      {/* Display the property name */}
      <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
        <div className="flex-1 relative leading-[20.32px] font-medium">
          {name}
        </div>
      </div>
      {/* Display the property price */}
      <div className="self-stretch flex flex-row p-2.5 items-start justify-start text-[13.55px] text-primary-500">
        <div className="relative leading-[18.98px] font-semibold">
          {price}
        </div>
      </div>
      {/* Display property details */}
      <div className="flex flex-row py-0 px-2.5 items-start justify-start gap-[17px] text-[10.84px] text-gray-500">
        {/* Display number of cars */}
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="w-[17.42px] h-[17.42px]"
            alt=""
            src={"/car.svg"}
          />
          <div className="relative leading-[16.27px] font-medium">4</div>
        </div>
        {/* Display number of bathrooms */}
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="w-[17.42px] h-[17.42px]"
            alt=""
            src={"/bathtub.svg"}
          />
          <div className="relative leading-[16.27px] font-medium">4</div>
        </div>
        {/* Display property area */}
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="w-[17.42px] h-[17.42px]"
            alt=""
            src={"/arrowsout.svg"}
          />
          <div className="relative leading-[16.27px] font-medium">
            2,096.00 ft
          </div>
        </div>
      </div>
      {/* Display property owner and actions */}
      <div className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px]">
        {/* Display owner information */}
        <div className="flex flex-row items-center justify-start gap-[5.81px]">
          <img
            className="rounded-[50%] w-[27.57px] h-[27.57px] object-cover"
            alt=""
            src={"/ellipse-1@2x.png"}
          />
          <div className="relative leading-[17.42px] font-medium">
            Jenny Wilson
          </div>
        </div>
        {/* Display action buttons */}
        <div className="flex flex-row items-start justify-start gap-[8.71px]">
          {/* Share button */}
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
            <img
              className="w-[14.51px] h-[14.51px]"
              alt=""
              src={"/sharenetwork.svg"}
            />
          </div>
          {/* Heart button */}
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
            <img
              className="w-[14.51px] h-[14.51px]"
              alt=""
              src={"/heart.svg"}
            />
          </div>
          {/* Plus button */}
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
            <img
              className="w-[14.51px] h-[14.51px]"
              alt=""
              src={"/plus.svg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the PropertyCard component
export default PropertyCard;
=======
import { useMemo } from "react";

const Footer = () => {
  return (
    <div
      className="self-stretch overflow-hidden flex flex-row p-[50px] items-start justify-start md:w-auto md:flex-row sm:flex-col"  
    >
      <footer className="flex-1 flex flex-row items-start justify-between text-left text-5xl text-gray-black font-body-regular-400 md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px]">
        <div className="w-[312px] flex flex-col items-start justify-start gap-[20px] text-center text-primary-500 font-body-regular-600">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <img className="w-11 h-11" alt="" src="/houseline.svg" />
            <div className="flex flex-col items-start justify-start">
              <div className="leading-[24px] font-semibold">REIS</div>
              <div className="text-sm leading-[16px] font-medium">
                Real State
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[13px] text-left text-base text-gray-500 font-body-regular-400">
            <div className="text-5xl leading-[32px] font-semibold text-gray-black">
              Contact Us
            </div>
            <div className="leading-[24px]">Call : +123 400 123</div>
            <div className="leading-[24px] flex items-end">
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </div>
            <div className="leading-[24px] text-gray-700">
              Email: example@mail.com
            </div>
          </div>
          <div className="w-[304px] flex flex-row items-center justify-between">
            <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="w-5 h-[21.67px]"
                alt=""
                src="/social-media-logo.svg"
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo1.svg"
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo2.svg"
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo3.svg"
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className="w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo4.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[173px] flex flex-col items-start justify-start gap-[32px]">
          <div className="leading-[32px] font-semibold">Features</div>
          <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <div className="leading-[24px]">Home</div>
            <div className="leading-[24px]">Become a Host</div>
            <div className="leading-[24px]">Pricing</div>
            <div className="leading-[24px]">Blog</div>
            <div className="leading-[24px]">Contact</div>
          </div>
        </div>
        <div className="w-[173px] flex flex-col items-start justify-start gap-[32px]">
          <div className="leading-[32px] font-semibold">Company</div>
          <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <div className="leading-[24px]">About Us</div>
            <div className="leading-[24px]">Press</div>
            <div className="leading-[24px]">Contact</div>
            <div className="leading-[24px]">Careers</div>
            <div className="leading-[24px]">Blog</div>
          </div>
        </div>
        <div className="w-[203px] flex flex-col items-start justify-start gap-[32px]">
          <div className="leading-[32px] font-semibold">
            Team and policies
          </div>
          <div className="h-[104px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <div className="leading-[24px]">Terms of servies</div>
            <div className="leading-[24px]">Privacy Policy</div>
            <div className="leading-[24px]">Security</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
>>>>>>> 8a2283f489f8848ec19abafab5d1a820723860b6
