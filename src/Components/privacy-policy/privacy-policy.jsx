
const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 py-10 px-5 md:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Privacy Policy
        </h1>

        {/* Content */}
        <div className="text-gray-800 leading-7">
          <p className="mb-4">
            This Privacy Policy outlines how Auto Policy Quotes collects, uses,
            and protects the personal information of our users. We are committed
            to safeguarding your privacy and ensuring that your personal data is
            handled in compliance with applicable laws.
          </p>

          {/* Section 1 */}
          <h2 className="font-semibold text-lg text-gray-900 mb-2">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We collect various types of personal information from users,
            including:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Identifiers: Name, email address, phone number, and other similar
              identifiers.
            </li>
            <li>
              Commercial Information: Records of products or services requested
              or purchased.
            </li>
            <li>
              Internet Activity: Browsing behavior, interactions with our
              website.
            </li>
            <li>Geolocation Data: Physical location (if enabled).</li>
            <li>Professional Information: Employment details.</li>
            <li>
              Inferences: Information derived from the above to create user
              profiles.
            </li>
          </ul>

          {/* Section 2 */}
          <h2 className="font-semibold text-lg text-gray-900 mb-2">
            2. Sources of Personal Information
          </h2>
          <p className="mb-4">
            We collect personal information from users through:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Direct interactions on our website</li>
            <li>Service inquiries and quote requests</li>
            <li>Third-party affiliates</li>
          </ul>

          {/* Section 3 */}
          <h2 className="font-semibold text-lg text-gray-900 mb-2">
            3. Use of Personal Information
          </h2>
          <p className="mb-4">
            We use personal information for various purposes, such as:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Providing and improving our services</li>
            <li>Processing requests and transactions</li>
            <li>Personalizing user experiences</li>
            <li>Communicating with users</li>
            <li>Marketing and promotional activities</li>
            <li>Complying with legal obligations</li>
          </ul>

          {/* Section 4 */}
          <h2 className="font-semibold text-lg text-gray-900 mb-2">
            4. Sharing Personal Information
          </h2>
          <p className="mb-4">We may share your personal information with:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Service providers who assist in fulfilling your service requests
            </li>
            <li>Business partners involved in providing services</li>
            <li>Legal authorities, when required by law</li>
          </ul>
          <p className="mb-4">
            We do not sell personal information to third parties.
          </p>

          {/* Section 5 */}
          <h2 className="font-semibold text-lg text-gray-900 mb-2">
            5. Your Privacy Rights
          </h2>
          <p className="mb-4">
            Depending on your location, you may have certain privacy rights,
            such as:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>The right to access your personal information</li>
            <li>
              The right to request correction or deletion of your personal data
            </li>
            <li>The right to limit how we use your information</li>
            <li>The right to opt-out of any marketing communications</li>
          </ul>

          {/* Section 6 */}
          <h2 className="font-semibold text-lg text-gray-900 mb-2">
            6. Changes to this Privacy Policy
          </h2>
          <p className="mb-8">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices. Please check back periodically to stay
            informed.
          </p>

          {/* Disclaimer */}
          <h2 className="font-semibold text-lg text-gray-900 mb-2">
            Disclaimer:
          </h2>
          <p className="text-sm text-gray-600 leading-6">
            We do not offer every auto insurance plan available in your area.
            Currently, we represent multiple organizations that offer several
            products in your region. For a full list of options, please visit
            your state’s Department of Insurance website or contact local
            insurance agents for more information. We are not affiliated with or
            endorsed by any government entity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
