// Import the InfoCard component from the specified file path
import InfoCard from "./info-card";

<<<<<<< HEAD
// Define a functional component named InfoCardContainer
const InfoCardContainer = () => {
  return (
    // Container with styling and layout
    <div className="self-stretch bg-primary-50 flex flex-col py-[70px] px-0 items-center justify-start text-center text-21xl text-primary-800 font-body-regular-600">
      {/* Inner container with additional styling */}
=======
const FeatureContainer = () => {
  return (
    <div className="self-stretch bg-primary-50 flex flex-col py-[70px] px-0 items-center justify-start text-center text-21xl text-primary-800 font-body-large-400">
>>>>>>> 8a2283f489f8848ec19abafab5d1a820723860b6
      <div className="self-stretch flex flex-col pt-[75px] px-0 pb-0 box-border items-center justify-start gap-[54px] max-w-[95%px]">
        {/* Text section introducing the topic */}
        <div className="self-stretch flex flex-col py-0 px-[30px] box-border items-center justify-start gap-[24px] max-w-[95%px]">
          {/* Main heading */}
          <div className="self-stretch relative leading-[48px] font-semibold">
            Properties by Area
          </div>
          {/* Subheading */}
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        {/* InfoCard section with multiple cards */}
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-5xl text-gray-700">
          {/* InfoCard component instances */}
          <InfoCard
            homeSaleRentId="/icon.svg"
            homeSaleRentText="Sell your home"
          />
          <InfoCard
            homeSaleRentId="/icon1.svg"
            homeSaleRentText="Rent your home"
            propWidth="312px"
          />
          <InfoCard
            homeSaleRentId="/icon2.svg"
            homeSaleRentText="Buy a home"
            propWidth="unset"
          />
          <InfoCard
            homeSaleRentId="/icon3.svg"
            homeSaleRentText="Free marketing"
            propWidth="312px"
          />
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
// Export the InfoCardContainer component
export default InfoCardContainer;

=======
export default FeatureContainer;
>>>>>>> 8a2283f489f8848ec19abafab5d1a820723860b6
