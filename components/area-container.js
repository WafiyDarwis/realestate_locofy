import AreaCard from "./area-card";
import PropTypes from "prop-types";

const AreaContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex-1 flex flex-col items-center justify-start py-[53px] px-[50px] gap-[45px] text-center text-21xl text-primary-800 font-body-regular-600 ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] gap-6 md:self-stretch md:w-auto">
        <div className="self-stretch relative leading-[48px] font-semibold">
          Properties by Area
        </div>
        <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-row items-start justify-center flex-wrap content-start py-0 px-2.5 box-border max-w-[95%] text-left text-5xl text-gray-white">
        <div className="self-stretch w-[1300px] flex flex-col items-center justify-start gap-6 max-w-[1300px]">
          <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
            <AreaCard centerville="Centerville" />
            <AreaCard
              propBackgroundImage="url('/card-2@3x.png')"
              propPadding="unset"
              centerville="Centerville"
            />
            <AreaCard
              propBackgroundImage="url('/card-3@3x.png')"
              propPadding="unset"
              centerville="Centerville"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-6 lg:flex-row md:flex-col">
            <AreaCard
              propBackgroundImage="url('/card-4@3x.png')"
              propPadding="10px"
              centerville="Arlington"
            />
            <AreaCard
              propBackgroundImage="url('/card-5@3x.png')"
              propPadding="10px"
              centerville="Centerville"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

AreaContainer.propTypes = {
  className: PropTypes.string,
};

export default AreaContainer;
