import PropertyCard from "./property-card";
import PropTypes from "prop-types";

const RentPropertiesContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start py-[86px] px-0 gap-[39px] text-center text-21xl text-primary-800 font-body-regular-600 ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-10 max-w-[95%] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-6 max-w-[95%] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center py-0 px-2.5 gap-8">
          <PropertyCard
            imgUrl="/property-image7@2x.png"
            name="92 Allium Place, Orlando FL"
            price="590,632"
          />
          <PropertyCard
            imgUrl="/property-image8@2x.png"
            name="92 Allium Place, Orlando FL"
            price="590,632"
          />
          <PropertyCard
            imgUrl="/property-image9@2x.png"
            name="92 Allium Place, Orlando FL"
            price="590,632"
          />
          <PropertyCard
            imgUrl="/property-image10@2x.png"
            name="92 Allium Place, Orlando FL"
            price="590,632"
          />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start hover:bg-royalblue sm:max-w-full">
        <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </div>
  );
};

RentPropertiesContainer.propTypes = {
  className: PropTypes.string,
};

export default RentPropertiesContainer;
