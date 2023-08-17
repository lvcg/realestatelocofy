// Import the necessary components and libraries
import Link from "next/link";

// Define a component named AreaPropertiesContainer
const AreaPropertiesContainer = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col py-[53px] px-[50px] items-center justify-start gap-[45px] text-center text-21xl text-primary-800 font-body-regular-600">
      {/* Area Properties section title and description */}
      <div className="self-stretch flex flex-col py-0 px-[30px] items-center justify-start gap-[24px] md:self-stretch md:w-auto">
        <div className="self-stretch relative leading-[48px] font-semibold">
          Properties by Area
        </div>
        <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </div>
      </div>
      {/* Area properties cards */}
      <div className="self-stretch flex-1 flex flex-row flex-wrap py-0 px-2.5 box-border items-start justify-center max-w-[95%px] text-left text-5xl text-gray-white">
        {/* First row of area properties */}
        <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
          {/* First area property */}
          <a
            className="[text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url(/card-1@3x.png)] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch"
            target="_blank"
            href="/"
          >
            {/* Property details */}
            <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
              <div className="relative leading-[32px] font-semibold">
                Centerville
              </div>
              <div className="relative text-base leading-[24px] text-center">
                25 listings
              </div>
            </div>
          </a>
          {/* Second area property */}
          <a
            className="[text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url(/card-2@3x.png)] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch"
            target="_blank"
            href="/"
          >
            {/* Property details */}
            <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
              <div className="relative leading-[32px] font-semibold">
                Centerville
              </div>
              <div className="relative text-base leading-[24px] text-center">
                25 listings
              </div>
            </div>
          </a>
          {/* Third area property */}
          <Link
            className="cursor-pointer [text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url(/card-3@3x.png)] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch"
            href="/"
            legacyBehavior>
            {/* Property details */}
            <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
              <div className="relative leading-[32px] font-semibold">
                Centerville
              </div>
              <div className="relative text-base leading-[24px] text-center">
                25 listings
              </div>
            </div>
          </Link>
        </div>
        {/* Second row of area properties */}
        <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
          {/* Fourth area property */}
          <a
            className="[text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row p-2.5 box-border items-start justify-start relative bg-[url(/card-4@3x.png)] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch"
            target="_blank"
            href="/"
          >
            {/* Property details */}
            <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
              <div className="relative leading-[32px] font-semibold">
                Arlington
              </div>
              <div className="relative text-base leading-[24px] text-center">
                25 listings
              </div>
            </div>
          </a>
          {/* Fifth area property */}
          <a
            className="[text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row p-2.5 box-border items-start justify-start relative bg-[url(/card-5@3x.png)] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch"
            target="_blank"
            href="/"
          >
            {/* Property details */}
            <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
              <div className="relative leading-[32px] font-semibold">
                Centerville
              </div>
              <div className="relative text-base leading-[24px] text-center">
                25 listings
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

// Export the AreaPropertiesContainer component
export default AreaPropertiesContainer;

