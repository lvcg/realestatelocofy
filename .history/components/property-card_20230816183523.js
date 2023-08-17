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
