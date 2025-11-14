import { Helmet } from "react-helmet-async";
import LegalNavbar from "@/components/marketing/LegalNavbar";
import UltraFooter from "@/components/marketing/UltraFooter";

const UninstallInstructions = () => {
  return (
    <>
      <Helmet>
        <title>Uninstall Instructions - ReplAInow | How to Remove the App</title>
        <meta
          name="description"
          content="How to uninstall ReplAInow from your Shopify store. Simple steps and data deletion policy with GDPR options."
        />
        <meta property="og:title" content="Uninstall Instructions - ReplAInow" />
        <meta
          property="og:description"
          content="How to uninstall ReplAInow and request data deletion"
        />
        <link rel="canonical" href="https://www.replainow.com/uninstall" />
      </Helmet>

      <LegalNavbar />

      <main
        id="main-content"
        role="main"
        aria-label="Uninstall Instructions"
        className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20"
      >
        <article className="container mx-auto max-w-4xl px-6 py-16">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Uninstall Instructions
            </h1>
            <p className="text-gray-600">Last updated: November 14, 2025</p>
            <p className="text-gray-600 mt-2">
              Remove ReplAInow from your Shopify store in a few simple steps
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Steps to Uninstall</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <ol className="list-none space-y-6 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold mr-4 flex-shrink-0">
                      1
                    </span>
                    <div className="pt-1">
                      <strong className="block mb-1">Log in to your Shopify Admin</strong>
                      <span>Access your Shopify Admin panel at admin.shopify.com</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold mr-4 flex-shrink-0">
                      2
                    </span>
                    <div className="pt-1">
                      <strong className="block mb-1">Navigate to Apps</strong>
                      <span>Click on "Apps" in the left sidebar menu</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold mr-4 flex-shrink-0">
                      3
                    </span>
                    <div className="pt-1">
                      <strong className="block mb-1">Find ReplAInow</strong>
                      <span>Locate ReplAInow in your installed apps list</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold mr-4 flex-shrink-0">
                      4
                    </span>
                    <div className="pt-1">
                      <strong className="block mb-1">Click Remove or Delete</strong>
                      <span>Click the "Remove" or "Delete" button next to ReplAInow</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold mr-4 flex-shrink-0">
                      5
                    </span>
                    <div className="pt-1">
                      <strong className="block mb-1">Confirm Removal</strong>
                      <span>Confirm the removal when prompted by Shopify</span>
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Happens After Uninstall?</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatic Data Deletion</h3>
                <p className="text-gray-700">
                  After you uninstall ReplAInow, we begin the automatic deletion process for your store's data. 
                  All data related to your account will be permanently deleted within <strong>30 days</strong>, 
                  unless we are legally required to retain certain information (e.g., billing records for tax 
                  compliance).
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Retention Timeline</h3>
                <ul className="list-none space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 text-xl">✓</span>
                    <span><strong>Immediate:</strong> App access is revoked</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 text-xl">✓</span>
                    <span><strong>Within 7 days:</strong> Active data and sessions are deleted</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 text-xl">✓</span>
                    <span><strong>Within 30 days:</strong> All remaining data is permanently deleted</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Immediate Data Deletion</h2>
              <p className="text-gray-700 mb-4">
                If you need your data deleted immediately (before the standard 30-day period), you can request 
                expedited deletion by contacting our privacy team.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-700 mb-3">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:privacy@replainow.com" className="text-purple-600 hover:text-purple-700 underline">
                    privacy@replainow.com
                  </a>
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Subject:</strong> Immediate Data Deletion Request
                </p>
                <p className="text-gray-700">
                  <strong>Include:</strong> Your store name, Shopify domain, and email address associated with 
                  the account
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">GDPR Data Subject Rights</h2>
              <p className="text-gray-700 mb-4">
                Under GDPR, you have the following rights regarding your data:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Access</h3>
                  <p className="text-gray-700 text-sm">
                    Request a copy of all personal data we hold about you
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Erasure</h3>
                  <p className="text-gray-700 text-sm">
                    Request immediate deletion of your personal data
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Portability</h3>
                  <p className="text-gray-700 text-sm">
                    Request your data in a machine-readable format
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Object</h3>
                  <p className="text-gray-700 text-sm">
                    Object to certain types of data processing
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help?</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about uninstalling ReplAInow or our data deletion process, we're here to 
                help.
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <p className="text-gray-700 mb-3">
                  <strong>Support Email:</strong>{" "}
                  <a href="mailto:support@replainow.com" className="text-purple-600 hover:text-purple-700 underline">
                    support@replainow.com
                  </a>
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Privacy Email:</strong>{" "}
                  <a href="mailto:privacy@replainow.com" className="text-purple-600 hover:text-purple-700 underline">
                    privacy@replainow.com
                  </a>
                </p>
                <p className="text-sm text-gray-600">
                  Response time: Within 24 hours during business days
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Policies</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="/privacy"
                  className="block bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-purple-300 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">Privacy Policy</h3>
                  <p className="text-gray-700 text-sm">
                    Learn about how we collect and protect your data
                  </p>
                </a>
                <a
                  href="/refund"
                  className="block bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-purple-300 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">Refund Policy</h3>
                  <p className="text-gray-700 text-sm">
                    Information about refunds and our money-back guarantee
                  </p>
                </a>
              </div>
            </section>
          </div>
        </article>
      </main>

      <UltraFooter />
    </>
  );
};

export default UninstallInstructions;
