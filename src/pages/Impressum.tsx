import { Helmet } from "react-helmet-async";
import LegalNavbar from "@/components/marketing/LegalNavbar";
import UltraFooter from "@/components/marketing/UltraFooter";

const Impressum = () => {
  return (
    <>
      <Helmet>
        <title>Impressum - ReplAInow | Legal Information</title>
        <meta
          name="description"
          content="Legal information and company details for ReplAInow AI Shopify Helpdesk. PrimeVision Group LLC, Dubai, UAE."
        />
        <meta property="og:title" content="Impressum - ReplAInow" />
        <meta
          property="og:description"
          content="Legal information for ReplAInow AI Shopify Helpdesk"
        />
        <link rel="canonical" href="https://www.replainow.com/impressum" />
      </Helmet>

      <LegalNavbar />

      <main
        id="main-content"
        role="main"
        aria-label="Impressum"
        className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20"
      >
        <article className="container mx-auto max-w-4xl px-6 py-16">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Impressum
            </h1>
            <p className="text-gray-600">Last updated: November 14, 2025</p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Provider</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-700 mb-2">
                  <strong>Company Name:</strong> PrimeVision Group LLC
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Legal Form:</strong> Limited Liability Company (LLC)
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, 
                  United Arab Emirates
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-700">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@replainow.com" className="text-purple-600 hover:text-purple-700 underline">
                    support@replainow.com
                  </a>
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Responsible for Content</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-700">
                  <strong>Managing Director:</strong> Ruben Calabrese
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tax Information</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-700">
                  <strong>Tax Registration Number:</strong> 104756281200001
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About ReplAInow</h2>
              <p className="text-gray-700">
                ReplAInow is an AI-powered helpdesk application for Shopify merchants, providing automated 
                customer support, live chat functionality, and intelligent ticket management. The application 
                is developed and operated by PrimeVision Group LLC.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                <strong>Liability for Content:</strong> We make every effort to keep the information on our 
                website current, but accept no liability whatsoever for the content provided. Pursuant to 
                applicable law, we are not obligated to monitor transmitted or stored third-party information 
                or to investigate circumstances indicating illegal activity.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Liability for Links:</strong> Our site contains links to external third-party websites 
                over whose content we have no control. Therefore, we cannot accept any liability for this 
                third-party content. The respective provider or operator of the pages is always responsible 
                for the content of the linked pages.
              </p>
              <p className="text-gray-700">
                <strong>Copyright:</strong> The content and works created by the site operators on these pages 
                are subject to copyright law. Duplication, processing, distribution, or any form of 
                commercialization of such material beyond the scope of copyright law shall require the prior 
                written consent of its respective author or creator.
              </p>
            </section>
          </div>
        </article>
      </main>

      <UltraFooter />
    </>
  );
};

export default Impressum;
