const PropertyCard = ({ imgUrl, name, price }) => {
  return (
    <div
      className="h-[467px] w-[350px] rounded-3xs bg-gray-white border-whitesmoke-100 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] text-left text-mini-5 text-gray-700 font-body-regular-600 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
      <img
        className="self-stretch rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
        alt=""
        src={imgUrl}
      />
      <div className="self-stretch flex flex-row items-start justify-start p-2.5">
        <div className="flex-1 relative leading-[20.32px] font-medium">
          {name}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-sm-6 text-primary-500">
        <div className="relative leading-[18.98px] font-semibold">
          $ {price}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px] text-2xs-8 text-gray-500">
        <div className="flex flex-row items-center justify-start gap-[4.4px]">
          <img
            className="w-[17.4px] h-[17.4px]"
            alt=""
            src="/car.svg"
          />
          <div className="relative leading-[16.27px] font-medium">4</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4.4px]">
          <img
            className="w-[17.4px] h-[17.4px]"
            alt=""
            src="/bathtub.svg"
          />
          <div className="relative leading-[16.27px] font-medium">4</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4.4px]">
          <img
            className="w-[17.4px] h-[17.4px]"
            alt=""
            src="/arrowsout.svg"
          />
          <div className="relative leading-[16.27px] font-medium">
            2,096.00 ft
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between text-center text-xs-6">
        <div className="flex flex-row items-center justify-start gap-[5.8px]">
          <img
            className="w-[27.6px] rounded-[50%] h-[27.6px] object-cover"
            alt=""
            src="/ellipse-1@2x.png"
          />
          <div className="relative leading-[17.42px] font-medium">
            Jenny Wilson
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8.7px]">
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.9px]">
            <img
              className="w-[14.5px] h-[14.5px]"
              alt=""
              src="/sharenetwork.svg"
            />
          </div>
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.9px]">
            <img
              className="w-[14.5px] h-[14.5px]"
              alt=""
              src="/heart.svg"
            />
          </div>
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.9px]">
            <img
              className="w-[14.5px] h-[14.5px]"
              alt=""
              src="/plus.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default PropertyCard;
