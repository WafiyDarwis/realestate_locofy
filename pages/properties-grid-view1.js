import "antd/dist/antd.min.css";
import { Dropdown, Pagination } from "antd";
import { createClient } from "@supabase/supabase-js"
import { DownOutlined } from "@ant-design/icons";
import Header from "../components/header";
import PropertiesGridContainer from "../components/properties-grid-container";
import FooterSection from "../components/footer-section";
import { useEffect, useState } from "react";

const defaultOrder = [
  {
    key: "1",
    label: (
      <a onClick={(e) => e.preventDefault()}>
        Popular Properties
      </a>
    )
  },
  {
    key: "2",
    label: (
      <a onClick={(e) => e.preventDefault()}>
        Latest Properties
      </a>
    )
  },
  {
    key: "3",
    label: (
      <a onClick={(e) => e.preventDefault()}>
        Recommended Properties
      </a>
    )
  },
]

const PropertiesGridView1 = () => {
  const client = createClient(process.env.NEXT_PUBLIC_URL, process.env.NEXT_PUBLIC_KEY)
  
  const [properties, setProperties] = useState([])

  useEffect(() => {
    const fetchProperties = async () => {
      const result = await client.from('properties').select('*')

      setProperties(result.data)
    }

    fetchProperties()
  }, [])

  return (
    <div className="w-full relative bg-gray-white flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
      <Header />
      <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url('/category@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="flex flex-col items-center justify-start gap-3">
          <div className="relative leading-[72px] font-semibold">
            Properties
          </div>
          <div className="relative text-base leading-[24px] text-whitesmoke-200 font-body-regular-600">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Properties</span>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start pt-16 px-0 pb-2 gap-[95px] text-left text-base text-gray-black font-body-regular-600 lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-[60px] md:pr-[60px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
        <div className="w-[272px] flex flex-row items-center justify-start">
          <div className="flex flex-row items-end justify-start gap-4">
            <div className="flex flex-row items-start justify-start gap-2">
              <img className="w-6 relative h-6" alt="" src="/listbullets.svg" />
              <img className="w-6 relative h-6" alt="" src="/squaresfour.svg" />
            </div>
            <div className="relative leading-[24px]">Sort by:</div>
            <Dropdown
              menu={{ items: defaultOrder }}
              trigger={["hover"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                {`Default Order `}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <PropertiesGridContainer allProperties={properties}/>
        <div className="flex flex-row items-end justify-center gap-2 text-center text-primary-500">
          <Pagination 
            defaultCurrent={1}
            total={50}
          />
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default PropertiesGridView1;
