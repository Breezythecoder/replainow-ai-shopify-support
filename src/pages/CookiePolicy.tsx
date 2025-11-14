import { Helmet } from "react-helmet-async";
import LegalNavbar from "@/components/marketing/LegalNavbar";
import UltraFooter from "@/components/marketing/UltraFooter";

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - ReplAInow | How We Use Cookies</title>
        <meta
          name="description"
          content="Learn about how ReplAInow uses cookies to improve your experience. Essential, analytics, and functional cookies explained."
        />
        <meta property="og:title" content="Cookie Policy - ReplAInow" />
        <meta
          property="og:description"
          content="Cookie Policy for ReplAInow AI Shopify Helpdesk"
        />
        <link rel="canonical" href="https://www.replainow.com/cookies" />
      </Helmet>

      <LegalNavbar />

      <main
        id="main-content"
        role="main"
        aria-label="Cookie Policy"
        className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20"
      >
        <article className="container mx-auto max-w-4xl px-6 py-16">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-gray-600">Last updated: November 14, 2025</p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-700">
                Cookies are small text files that are stored on your device when you visit our website. They 
                help us provide you with a better experience by remembering your preferences and analyzing how 
                you use our site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">
                ReplAInow uses cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>Essential Cookies:</strong> Required for the website to function properly
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Remember your preferences and settings
                </li>
                <li>
                  <strong>Live Chat Cookies:</strong> Enable our Chaport live chat functionality
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
              
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                <p className="text-gray-700">
                  These cookies are necessary for the website to function and cannot be switched off. They are 
                  usually only set in response to actions made by you which amount to a request for services.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                <p className="text-gray-700">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the 
                  performance of our site. They help us to know which pages are the most and least popular.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Live Chat Cookies</h3>
                <p className="text-gray-700">
                  We use Chaport for our live chat functionality. Chaport may set cookies to remember your 
                  chat session and preferences. For more information about Chaport's cookie usage, please 
                  refer to their privacy policy.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
              <p className="text-gray-700 mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already 
                on your computer and you can set most browsers to prevent them from being placed.
              </p>
              <p className="text-gray-700">
                However, if you do this, you may have to manually adjust some preferences every time you visit 
                a site and some services and functionalities may not work.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                Some cookies on our site are set by third-party services. These include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Chaport:</strong> Live chat functionality</li>
                <li><strong>Google Analytics:</strong> Website analytics (if used)</li>
                <li><strong>Shopify:</strong> App installation and authentication</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <ul className="list-none space-y-2 text-gray-700">
                <li>
                  Email:{" "}
                  <a href="mailto:support@replainow.com" className="text-purple-600 hover:text-purple-700 underline">
                    support@replainow.com
                  </a>
                </li>
                <li>Company: PrimeVision Group LLC</li>
                <li>Address: Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, UAE</li>
              </ul>
            </section>
          </div>
        </article>
      </main>

      <UltraFooter />
    </>
  );
};

export default CookiePolicy;
