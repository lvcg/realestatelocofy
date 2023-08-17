// Import necessary styles, components, and libraries
import "antd/dist/antd.min.css";
import { Button } from "@mui/material";
import {
  Menu as AntMenu,
  Dropdown as AntDropdown,
  Button as AntButton,
} from "antd";
import {
  DownOutlined,
  // ... (other Ant Design icons imported)
} from "@ant-design/icons";
import { useRouter } from "next/router";

// Define a component named DreamHomeFinderContainer
const DreamHomeFinderContainer = () => {
  const router = useRouter();

  // Define a function to handle the search CTA button click
  const onSearchCTAClick = () => {
    router.push("/");
  };

  return (
    <div className="self-stretch flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url(/hero-section@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
      {/* Hero section content */}
      <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
        {/* Text content */}
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
          <div className="self-stretch relative leading-[72px] font-semibold">
            Find Your Dream Home
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        {/* Search form */}
        <form className="self-stretch flex flex-col items-center justify-start gap-[17px]">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            {/* Rent button */}
            <button
              className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start"
              autoFocus
            >
              <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
                Rent
              </div>
            </button>
            {/* Sale button */}
            <Button variant="contained" color="primary">
              Sale
            </Button>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
            {/* Navigation and filter section */}
            <nav className="m-0 flex-1 rounded-lg bg-gray-white flex flex-row py-8 px-[62px] box-border items-center justify-between max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
              {/* Locations dropdown */}
              <div className="w-[137px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative text-base leading-[24px] capitalize font-semibold font-body-regular-600 text-primary-700 text-center">
                  Locations
                </div>
                <AntDropdown
                  overlay={ /* Ant Design dropdown menu */}
                  {/* ... (menu items) */}
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
              {/* ... (similar structure for Property Type dropdown) */}
              </div>
              {/* Rent Range dropdown */}
              {/* ... (similar structure for Rent Range dropdown) */}
              </div>
              {/* Search button */}
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

