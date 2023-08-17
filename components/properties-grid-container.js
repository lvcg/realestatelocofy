// Import the PropertyCard component
import PropertyCard from "./property-card";

<<<<<<< HEAD
// Define a functional component named PropertiesGridContainer
const PropertiesGridContainer = ({ allProperties }) => {
    return (
        // Container for the properties grid
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center text-left text-[14.15px] text-gray-700 font-body-regular-600">
            {/* Flex container for individual property cards */}
            <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[12px] px-2.5">
                {/* Map through each property in allProperties */}
                {allProperties.map((property) => (
                    // Render a PropertyCard component for each property
                    <PropertyCard 
                        key={property._id}      // Provide a unique key based on property ID
                        imgUrl={property.image} // Pass the property image URL as a prop
                        name={property.name}    // Pass the property name as a prop
                        price={property.price}  // Pass the property price as a prop
                    />
                ))}
            </div> 
        </div>
    );
}

// Export the PropertiesGridContainer component
=======
const PropertiesGridContainer = () => {
  return (
    <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[8px] text-left text-[14.51px] text-gray-700 font-body-large-400">
      <PropertyCard
        imageDimensions="/unsplashrlwe8f8anoc@2x.png"
        imageDimensionIds="/car.svg"
        imageDimensionValues="/bathtub.svg"
        imageDimensionIdsAndValue="/arrowsout.svg"
        imageDimensionIdsAndValue2="/ellipse-1@2x.png"
        imageDimensionIdsAndValue3="/sharenetwork.svg"
        imageDimensionIdsAndValue4="/heart.svg"
        imageDimensionIdsAndValue5="/plus.svg"
      />
      <PropertyCard
        imageDimensions="/unsplashrlwe8f8anoc1@2x.png"
        imageDimensionIds="/car1.svg"
        imageDimensionValues="/bathtub1.svg"
        imageDimensionIdsAndValue="/arrowsout.svg"
        imageDimensionIdsAndValue2="/ellipse-1@2x.png"
        imageDimensionIdsAndValue3="/sharenetwork1.svg"
        imageDimensionIdsAndValue4="/heart1.svg"
        imageDimensionIdsAndValue5="/plus1.svg"
      />
      <PropertyCard
        imageDimensions="/unsplashrlwe8f8anoc2@2x.png"
        imageDimensionIds="/car2.svg"
        imageDimensionValues="/bathtub2.svg"
        imageDimensionIdsAndValue="/arrowsout.svg"
        imageDimensionIdsAndValue2="/ellipse-1@2x.png"
        imageDimensionIdsAndValue3="/sharenetwork.svg"
        imageDimensionIdsAndValue4="/heart.svg"
        imageDimensionIdsAndValue5="/plus.svg"
      />
      <PropertyCard
        imageDimensions="/unsplashrlwe8f8anoc3@2x.png"
        imageDimensionIds="/car1.svg"
        imageDimensionValues="/bathtub1.svg"
        imageDimensionIdsAndValue="/arrowsout.svg"
        imageDimensionIdsAndValue2="/ellipse-1@2x.png"
        imageDimensionIdsAndValue3="/sharenetwork2.svg"
        imageDimensionIdsAndValue4="/heart1.svg"
        imageDimensionIdsAndValue5="/plus2.svg"
      />
      <PropertyCard
        imageDimensions="/unsplashrlwe8f8anoc@2x.png"
        imageDimensionIds="/car.svg"
        imageDimensionValues="/bathtub.svg"
        imageDimensionIdsAndValue="/arrowsout.svg"
        imageDimensionIdsAndValue2="/ellipse-1@2x.png"
        imageDimensionIdsAndValue3="/sharenetwork2.svg"
        imageDimensionIdsAndValue4="/heart2.svg"
        imageDimensionIdsAndValue5="/plus3.svg"
      />
      <PropertyCard
        imageDimensions="/unsplashrlwe8f8anoc4@2x.png"
        imageDimensionIds="/car3.svg"
        imageDimensionValues="/bathtub3.svg"
        imageDimensionIdsAndValue="/arrowsout1.svg"
        imageDimensionIdsAndValue2="/ellipse-11@2x.png"
        imageDimensionIdsAndValue3="/sharenetwork3.svg"
        imageDimensionIdsAndValue4="/heart3.svg"
        imageDimensionIdsAndValue5="/plus4.svg"
      />
      <PropertyCard
        imageDimensions="/unsplashrlwe8f8anoc5@2x.png"
        imageDimensionIds="/car4.svg"
        imageDimensionValues="/bathtub4.svg"
        imageDimensionIdsAndValue="/arrowsout1.svg"
        imageDimensionIdsAndValue2="/ellipse-11@2x.png"
        imageDimensionIdsAndValue3="/sharenetwork4.svg"
        imageDimensionIdsAndValue4="/heart4.svg"
        imageDimensionIdsAndValue5="/plus5.svg"
      />
      <PropertyCard
        imageDimensions="/unsplashrlwe8f8anoc6@2x.png"
        imageDimensionIds="/car3.svg"
        imageDimensionValues="/bathtub3.svg"
        imageDimensionIdsAndValue="/arrowsout1.svg"
        imageDimensionIdsAndValue2="/ellipse-11@2x.png"
        imageDimensionIdsAndValue3="/sharenetwork5.svg"
        imageDimensionIdsAndValue4="/heart3.svg"
        imageDimensionIdsAndValue5="/plus6.svg"
      />
    </div>
  );
};

>>>>>>> 8a2283f489f8848ec19abafab5d1a820723860b6
export default PropertiesGridContainer;
