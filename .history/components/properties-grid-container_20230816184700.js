// Import the PropertyCard component
import PropertyCard from "./property-card";

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
export default PropertiesGridContainer;
