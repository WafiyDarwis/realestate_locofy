import PropertyCard from "./property-card";
import PropTypes from "prop-types";

const PropertiesGridContainer = ({ allProperties }) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start text-left text-mini-5 text-gray-700 font-body-regular-600">
      <div className="flex-1 flex flex-row items-start justify-center flex-wrap content-start gap-2">
        {allProperties.map((property) => (
          <PropertyCard
            key={property.id}
            imgUrl={property.image}
            name={property.name}
            price={property.price}
          />
        ))}
      </div>
    </div>
  );
};

PropertiesGridContainer.propTypes = {
  className: PropTypes.string,
};

export default PropertiesGridContainer;
