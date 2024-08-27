import PropertyCard from "./property-card";
import PropTypes from "prop-types";

const PropertiesGridContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center flex-wrap content-start text-left text-mini-5 text-gray-700 font-body-regular-600 ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-center flex-wrap content-start gap-2">
        <PropertyCard
          propertyImage="/property-image@2x.png"
          ellipse1="/ellipse-1@2x.png"
        />
        <PropertyCard
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propertyImage="/property-image1@2x.png"
          ellipse1="/ellipse-1@2x.png"
        />
        <PropertyCard
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propertyImage="/property-image2@2x.png"
          ellipse1="/ellipse-1@2x.png"
        />
        <PropertyCard
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propertyImage="/property-image3@2x.png"
          ellipse1="/ellipse-1@2x.png"
        />
        <PropertyCard
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propertyImage="/property-image@2x.png"
          ellipse1="/ellipse-1@2x.png"
        />
        <PropertyCard
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propertyImage="/property-image4@2x.png"
          ellipse1="/ellipse-11@2x.png"
        />
        <PropertyCard
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propertyImage="/property-image5@2x.png"
          ellipse1="/ellipse-11@2x.png"
        />
        <PropertyCard
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propertyImage="/property-image6@2x.png"
          ellipse1="/ellipse-11@2x.png"
        />
      </div>
    </div>
  );
};

PropertiesGridContainer.propTypes = {
  className: PropTypes.string,
};

export default PropertiesGridContainer;
