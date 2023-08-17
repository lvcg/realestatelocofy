// Import the useMemo hook from React
import { useMemo } from "react";

// Define a functional component named InfoCard
const InfoCard = ({ homeSaleRentId, homeSaleRentText, propWidth }) => {
  // Create a memoized style object using useMemo
  const sellYourHomeStyle = useMemo(() => {
    return {
      width: propWidth, // Set the width based on the propWidth passed in
    };
  }, [propWidth]); // Dependency array to recompute style when propWidth changes

  return (
    // Container for the info card with specified styling and dynamic width
    <div
      className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col p-[22px] box-border items-start justify-start min-w-[300px] max-w-[340px] text-center text-5xl text-gray-700 font-body-regular-600"
      style={sellYourHomeStyle} // Apply the style created with useMemo
    >
      {/* Content of the info card */}
      <div className="flex flex-col items-start justify-start gap-[24px]">
        {/* Icon */}
        <img
          className="relative w-[78px] h-[78px] overflow-hidden shrink-0"
          alt=""
          src={homeSaleRentId} // Use the image URL provided as a prop
        />
        {/* Text and button section */}
        <div className="flex flex-col items-start justify-start gap-[24px]">
          {/* InfoCard title */}
          <div className="relative leading-[32px] font-semibold">
            {homeSaleRentText} {/* Use the text provided as a prop */}
          </div>
          {/* InfoCard description */}
          <div className="relative text-base leading-[24px] text-lightslategray text-left flex items-end w-[268px]">
            We do a free evaluation to be sure you want to start selling.
          </div>
          {/* Read more button */}
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[24px] font-body-regular-600 text-primary-500 text-left inline-block">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

// Export the InfoCard component
export default InfoCard;

