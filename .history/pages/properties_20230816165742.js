import Head from "next/head";
// Import CSS styles from Ant Design library
import "antd/dist/antd.min.css";
// Import components and icons from Ant Design library
import { Pagination, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
// Import Supabase client creation function
import { createClient } from "@supabase/supabase-js";
// Import custom components
import Header from "../components/header";
import PropertiesGridContainer from "../components/properties-grid-container";
import Footer from "../components/footer";
// Import React hooks for managing state and side effects
import { useEffect, useState } from "react";

// Define an empty array for default sorting order
const defaultOrder = [];

// Define the PropertiesGridView component
const PropertiesGridView = () => {
  // Create a Supabase client instance using environment variables
  const client = createClient(
    process.env.NEXT_PUBLIC_URL,
    process.env.NEXT_PUBLIC_KEY
  );

  // Use state to manage the list of properties
  const [properties, setProperties] = useState([]);

  // Fetch properties from Supabase database when the component mounts
  useEffect(() => {
    const fetchProperties = async () => {
      const result = await client.from("properties").select('*');
      setProperties(result.data);
    }

    fetchProperties();
  }, []);

  return (
    <div className="bg-gray-white w-[1920px] flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
      {/* Render the Header component */}
      <Header hamburger={false} />
      <div className="h-60 flex flex-col items-center justify-center bg-[url(/category@3x.png)] bg-cover bg-no-repeat bg-top">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="leading-[72px] font-semibold">
            Properties
          </div>
          <div className="text-base leading-[24px] text-whitesmoke-200 font-body-regular-600">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Properties</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-16 pb-2 items-center justify-start gap-[95px] text-left text-base text-gray-black font-body-regular-600 lg:pl-[120px] lg:pr-[120px]">
        <div className="flex flex-row items-center justify-start">
          <div className="flex flex-row flex-wrap items-end justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img className="w-6 h-6" alt="" src="/listbullets.svg" />
              <img className="w-6 h-6" alt="" src="/squaresfour.svg" />
            </div>
            <div className="leading-[24px]">Sort by:</div>
            {/* Render the Dropdown component */}
            <Dropdown
              menu={{ items: defaultOrder }}
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
        {/* Render the PropertiesGridContainer component */}
        <PropertiesGridContainer />
        <div className="flex flex-row flex-wrap items-start justify-center">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[8px]">
            {/* Render the Pagination component */}
            <Pagination
              defaultCurrent={1}
              total={50}
            />
          </div>
        </div>
      </div>
      {/* Render the Footer component */}
      <Footer />
    </div>
  );
};

export default PropertiesGridView;

