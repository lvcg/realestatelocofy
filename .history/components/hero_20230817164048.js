// Import necessary libraries and components
import React from "react";
import Link from 'next/link';
import { Button } from "@mui/material";
import { Menu as AntMenu, Dropdown as AntDropdown, Button as AntButton } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

// Define a functional component named DreamHomeFinderContainer
const DreamHomeFinderContainer = () => {
  // Initialize router
  const router = useRouter();

  // Function to handle clicking on the search CTA
  const onSearchCTAClick = () => {
    router.push("/properties");
  };

  return (
    <div className="self-stretch flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url(/hero-section@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
      <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
          {/* Heading */}
          <div className="self-stretch relative leading-[72px] font-semibold">
            Find Your Dream Home
          </div>
          {/* Subheading */}
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        {/* Form */}
        <form className="self-stretch flex flex-col items-center justify-start gap-[17px]">
          {/* Property type buttons */}
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <button
              className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start"
              autoFocus
            >
              <div class="container"> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"> Rent </button> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"> Sale </button> </div>
          </div>
          {/* Navigation */}
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
            {/* Dropdown menus */}
            <nav className="m-0 flex-1 rounded-lg bg-gray-white flex flex-row py-8 px-[62px] box-border items-center justify-between max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
              {/* Locations dropdown */}
              <div className="w-[137px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative text-base leading-[24px] capitalize font-semibold font-body-regular-600 text-primary-700 text-center">
                  Locations
                </div>
                <AntDropdown
                  overlay={
                    <AntMenu>
                      {/* Map through options */}
                      {[
                        { value: "Denver" },
                        // Other options...
                        { value: "" },
                      ].map((option, index) => (
                        <AntMenu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </AntMenu.Item>
                      ))}
                    </AntMenu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select your city `}
                    <DownOutlined />
                  </a>
                </AntDropdown>
              </div>
              {/* Property Type dropdown */}
              <div className="w-[177px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative text-base leading-[24px] capitalize font-semibold font-body-regular-600 text-primary-700 text-left flex items-end w-[150px]">
                  Property Type
                </div>
                <AntDropdown
                  className="self-stretch"
                  overlay={
                    <AntMenu>
                      {/* Map through options */}
                      {[
                        { value: "Studio apartments" },
                        // Other options...
                      ].map((option, index) => (
                        <AntMenu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </AntMenu.Item>
                      ))}
                    </AntMenu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select property type `}
                    <DownOutlined />
                  </a>
                </AntDropdown>
              </div>
              {/* Rent Range dropdown */}
              <div className="w-[155px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative text-base leading-[24px] capitalize font-semibold font-body-regular-600 text-primary-700 text-left flex items-end w-[150px]">
                  Rent Range
                </div>
                <AntDropdown
                  className="self-stretch"
                  overlay={
                    <AntMenu>
                      {/* Map through options */}
                      {[
                        { value: "$500-$2000" },
                        // Other options...
                      ].map((option, index) => (
                        <AntMenu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </AntMenu.Item>
                      ))}
                    </AntMenu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select rent range `}
                    <DownOutlined />
                  </a>
                </AntDropdown>
              </div>
              {/* Search Button */}
              <AntButton
                className="cursor-pointer"
                style={{ width: "102px" }}
                type="primary"
                size="middle"
                shape="default"
                onClick={onSearchCTAClick}
              >
                Search
              </AntButton>
            </nav>
          </div>
        </form>
      </div>
    </div>
  );
};

// Export the DreamHomeFinderContainer component
export default DreamHomeFinderContainer;



