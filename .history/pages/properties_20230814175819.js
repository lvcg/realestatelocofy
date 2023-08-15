import "antd/dist/antd.min.css";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Header from "../components/header";
import PropertyCard from "../components/property-card";
import Footer from "../components/footer";

const PropertiesGridView = () => {
  return (
    <div className="relatbg-gray-white w-[1920px] flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
      <Header hamburger={false} />
      <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url(/category@3x.png)] bg-cover bg-no-repeat bg-[top]">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="relative leading-[72px] font-semibold">
            Properties
          </div>
          <div className="relative text-base leading-[24px] text-whitesmoke-200 font-body-regular-600">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Properties</span>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col pt-16 px-0 pb-2 items-center justify-start gap-[95px] text-left text-base text-gray-black font-body-regular-600 lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-[60px] md:pr-[60px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
        <div className="w-[272px] flex flex-row items-center justify-start">
          <div className="flex flex-row items-end justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img className="relative w-6 h-6" alt="" src="/listbullets.svg" />
              <img className="relative w-6 h-6" alt="" src="/squaresfour.svg" />
            </div>
            <div className="relative leading-[24px]">Sort by:</div>
            <Dropdown
              overlay={
                <Menu>
                  {[
                    { value: "Popular properties" },
                    { value: "Latest properties" },
                    { value: "Recommended properties" },
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
                {`Default Order `}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[8px]">
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
        </div>
        <div className="flex flex-row items-end justify-center gap-[8px] text-center text-primary-500">
          <div className="rounded bg-primary-50 flex flex-row p-2.5 items-start justify-start">
            <img className="relative w-6 h-6" alt="" src="/arrowleft.svg" />
          </div>
          <div className="rounded-10xs bg-primary-500 flex flex-col py-2.5 px-[9px] items-start justify-start text-gray-white">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              1
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col py-2.5 px-[9px] items-start justify-start">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              2
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col py-2.5 px-[9px] items-start justify-start">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              3
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col py-2.5 px-[9px] items-start justify-start">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              ...
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col py-2.5 px-[9px] items-start justify-start">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              54
            </div>
          </div>
          <div className="rounded bg-primary-500 flex flex-row p-2.5 items-start justify-start">
            <img className="relative w-6 h-6" alt="" src="/arrowright.svg" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertiesGridView;
