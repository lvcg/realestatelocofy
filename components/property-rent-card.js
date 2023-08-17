// Import the useMemo hook from React
import { useMemo } from "react";

// Define a functional component named PropertyRentCard
const PropertyRentCard = ({ imgUrl, name, price }) => {
  // Create a memoized style object for the card based on props
  const card1Style = useMemo(() => {
    return {
      width: propWidth,       // Set width based on propWidth
      flex: propFlex,         // Set flex based on propFlex
      minWidth: propMinWidth, // Set minWidth based on propMinWidth
      maxWidth: propMaxWidth  // Set maxWidth based on propMaxWidth
    };
  }, [propWidth, propFlex, propMinWidth, propMaxWidth]);

  // Render the property rent card component
  return (
    <div
<<<<<<< HEAD
      className="flex-1 rounded-md h-[426px] flex flex-col p-6 box-border items-center justify-end bg-[url(/card-11@3x.png)] bg-cover bg-no-repeat bg-[top] min-w-[355px] max-w-[370px] text-left text-base text-gray-white font-body-regular-600"
      style={card1Style} // Apply the memoized style to the card
=======
      className="flex-1 rounded-md h-[426px] flex flex-col p-6 box-border items-center justify-end bg-[url(/card-11@3x.png)] bg-cover bg-no-repeat bg-[top] min-w-[355px] max-w-[370px] text-left text-base text-gray-white font-body-large-400"
      style={card1Style}
>>>>>>> 8a2283f489f8848ec19abafab5d1a820723860b6
    >
      <div className="self-stretch h-6 flex flex-row items-end justify-center gap-[32px]">
        <div className="flex flex-row items-start justify-end gap-[8px]">
          <img className="relative w-6 h-6" alt="" src="/mappin.svg" />
          <div className="relative leading-[24px] font-medium">Washington</div>
        </div>
        <div className="flex flex-row items-start justify-end gap-[8px]">
          <img className="relative w-6 h-6" alt="" src="/arrowsout4.svg" />
          <div className="relative leading-[24px] font-medium">12000</div>
        </div>
      </div>
    </div>
  );
};

// Export the PropertyRentCard component
export default PropertyRentCard;

