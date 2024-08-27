import PropTypes from "prop-types";

const Contact = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-primary-50 flex flex-row items-start justify-center flex-wrap content-start py-[86px] px-[5px] text-center text-21xl text-primary-800 font-body-regular-600 ${className}`}
    >
      <div className="w-[900px] flex flex-col items-center justify-start py-0 px-2.5 box-border gap-10 max-w-[900px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-6 max-w-[95%] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Contact us
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] rounded-xl bg-gray-white flex flex-col items-center justify-start py-7 px-[30px] gap-[17px] text-left text-5xl text-darkslategray font-poppins">
          <div className="self-stretch flex flex-col items-center justify-start gap-1.5">
            <b className="self-stretch relative leading-[36px]">Enquiry Form</b>
            <div className="self-stretch relative text-lg leading-[30px] font-roboto text-slategray">
              Are you looking for details about a certain property? Ask us a
              question using the form below.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-2.5">
            <div className="self-stretch flex flex-row items-start justify-center gap-2.5 md:flex-col md:gap-2.5 md:items-start md:justify-center">
              <input
                className="border-gray1 border-[1px] border-solid [outline:none] font-roboto text-base bg-[transparent] self-stretch flex-1 rounded flex flex-col items-start justify-start py-4 px-3 text-darkgray md:flex-[unset] md:self-stretch"
                placeholder="First name"
                type="text"
              />
              <input
                className="border-gray1 border-[1px] border-solid [outline:none] font-roboto text-base bg-[transparent] self-stretch flex-1 rounded flex flex-col items-start justify-center py-4 px-3 text-darkgray md:flex-[unset] md:self-stretch"
                placeholder="Last name"
                type="text"
              />
            </div>
            <input
              className="border-gray1 border-[1px] border-solid [outline:none] font-roboto text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-darkgray"
              placeholder="Email id"
              type="email"
            />
            <textarea
              className="border-gray1 border-[1px] border-solid bg-[transparent] h-[105px] font-roboto text-base [outline:none] self-stretch rounded box-border flex flex-col items-start justify-start p-3 text-darkgray"
              placeholder="Comments or questions"
              rows={10}
              required={true}
            />
            <button className="cursor-pointer [border:none] p-0 bg-primary-500 w-[222px] h-[46px] rounded flex flex-col items-center justify-center hover:bg-royalblue lg:bg-blueviolet sm:self-stretch sm:w-auto sm:max-w-full">
              <div className="w-[203.1px] relative text-base font-roboto text-gray-white text-center inline-block">
                Submit
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
};

export default Contact;
