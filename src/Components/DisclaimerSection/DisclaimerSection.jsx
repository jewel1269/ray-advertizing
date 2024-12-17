const DisclaimerSection = () => {
  return (
    <div className="bg-white py-16 px-4 lg:px-0 md:px-10 text-gray-900">
      {/* Disclaimer Text */}
      <div className="text-lg  lg:px-44 leading-relaxed">
        <p className="font-bold mb-2">
          Disclaimer:{" "}
          <span className="font-normal">
            We do not offer every auto insurance plan available in your area.
            Currently, we represent multiple organizations that offer several
            products in your region. For a full list of options, please visit
            your state’s Department of Insurance website or contact local
            insurance agents for more information. We are not affiliated with or
            endorsed by any government entity.
          </span>
        </p>

        <p className="mb-2">
          Participating sales agencies work with auto insurance carriers who may
          offer a variety of coverage options, including liability, collision,
          comprehensive, and other specialized auto insurance policies.
          Availability and terms of these plans may vary based on carrier,
          location, and vehicle type. Not all plans offer all benefits, and
          premiums, deductibles, and other terms may vary by provider. Coverage
          may also be subject to state regulations and specific eligibility
          requirements. Some low-cost or $0 deductible plans may not be
          available in all areas.
        </p>

        <p>
          This website is not affiliated with any government agency or insurance
          regulator. The content provided is for informational purposes only and
          should not be considered as professional financial advice. Please
          consult with a licensed insurance agent or qualified professional
          before making any decisions based on the information presented. This
          website serves as an independent digital media and advertising
          publisher, featuring advertorial content, which may resemble editorial
          news. Be aware that this is an advertisement and not an actual news
          article, consumer report, or protection update. This website may
          receive compensation for clicks or sales generated from the content,
          which may influence the placement and order of displayed companies,
          advertisements, or offers. Information regarding discounts or pricing
          may not apply in all areas or may be subject to specific eligibility
          requirements.
        </p>
      </div>
    </div>
  );
};

export default DisclaimerSection;
