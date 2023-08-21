// Import necessary libraries and components
import React from "react";
import Link from 'next/link';
// This line is commented out, preventing the import of the Button component from the Material-UI library.
// import { Button } from "@mui/material";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  const onSearchCTAClick = () => {
    router.push("/properties");
  };

  return (
    <div className="self-stretch flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url(/hero-section@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
      <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
          <div className="self-stretch relative leading-[72px] font-semibold">
            Find Your Dream Home
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
          </div>
        </div>
      </div>
      <form className="self-stretch flex flex-col items-center justify-start gap-[17px]">
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <div className="bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Rent
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Sale
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
          <nav className="m-0 flex-1 rounded-lg bg-gray-white flex flex-row py-8 px-[62px] box-border items-center justify-between max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-auto md:mr-auto">
            <div className="w-[137px] flex flex-col items-start justify-start gap-[16px]">
              <div className="relative text-base leading-[18px] font-semibold font-body-regular-600 text-primary-700 text-center">
                Locations
              </div>
              <Dropdown
                  overlay={
                    <Menu>
                      {[
                        { value: "Denver" },
                        { value: "Seattle" },
                        { value: "Washington D.C." },
                        { value: "Indianapolis" },
                        { value: "Charlotte" },
                        { value: "San Francisco" },
                        { value: "Columbus" },
                        { value: "Fort Worth" },
                        { value: "Jacksonville" },
                        { value: "Austin" },
                        { value: "Dallas" },
                        { value: "San Jose" },
                        { value: "New York" },
                        { value: "Los Angeles" },
                        { value: "Chicago" },
                        { value: "Houston" },
                        { value: "Phoenix" },
                        { value: "Philadelphia" },
                        { value: "San Antonio" },
                        { value: "San Diego" },
                        { value: "" },
                      ].map((option, index) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select your city `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <div className="w-[177px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative text-base leading-[18px] font-semibold font-body-regular-600 text-primary-700 text-left flex items-end w-[150px]">
                  Property Type
                </div>
                <Dropdown
                  className="self-stretch"
                  overlay={
                    <Menu>
                      {[
                        { value: "Studio apartments" },
                        { value: "One-bedroom apartments" },
                        { value: "Two-bedroom apartments" },
                        { value: "Three-bedroom apartments" },
                        { value: "Four or more bedroom apartments/houses" },
                      ].map((option, index) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select property type `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <div className="w-[155px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative text-base leading-[18px] font-semibold font-body-regular-600 text-primary-700 text-left flex items-end w-[150px]">
                  Rent Range
                </div>
                <Dropdown
                  className="self-stretch"
                  overlay={
                    <Menu>
                      {[
                        { value: "$500-$2000" },
                        { value: "$2500-$10000" },
                        { value: "$10000+" },
                      ].map((option, index) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select rent range `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <Button
                className="cursor-pointer"
                style={{ width: "102px" }}
                type="primary"
                size="middle"
                shape="default"
                onClick={onSearchCTAClick}
              >
                Search
              </Button>
          </nav>
        </div>
      </form>
    </div>
  );
};

export default Hero;



