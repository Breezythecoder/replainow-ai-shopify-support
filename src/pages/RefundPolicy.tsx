import { Helmet } from "react-helmet-async";
import LegalNavbar from "@/components/marketing/LegalNavbar";
import UltraFooter from "@/components/marketing/UltraFooter";

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund Policy - ReplAInow | Money-Back Guarantee</title>
        <meta
          name="description"
          content="ReplAInow refund policy. 14-day free trial, 7-day refund window, and money-back guarantee details for AI Shopify Helpdesk."
        />
        <meta property="og:title" content="Refund Policy - ReplAInow" />
        <meta
          property="og:description"
          content="Refund policy for ReplAInow AI Shopify Helpdesk"
        />
        <link rel="canonical" href="https://www.replainow.com/refund" />
      </Helmet>

      <LegalNavbar />

      <main
        id="main-content"
        role="main"
        aria-label="Refund Policy"
        className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20"
      >
        <article className="container mx-auto max-w-4xl px-6 py-16">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Refund Policy
            </h1>
            <p className="text-gray-600">Last updated: November 14, 2025</p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">30-Day Money-Back Guarantee</h2>
              <p className="text-gray-700 text-lg">
                Try ReplAInow risk-free with our 14-day free trial. If you're not satisfied with the paid 
                service, request a refund within 7 days of your first payment.
              </p>
            </div>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Refund Eligibility</h2>
              <p className="text-gray-700 mb-4">
                ReplAInow offers a <strong>14-day free trial</strong> for all plans. If you are not satisfied 
                with the service during the trial period, you can cancel without any charges.
              </p>
              <p className="text-gray-700 mb-4">
                For paid subscriptions, we offer refunds under the following conditions:
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <ul className="list-none space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 text-xl">✓</span>
                    <span>Refund request made <strong>within 7 days</strong> of the initial payment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 text-xl">✓</span>
                    <span>Technical issues that prevent the app from functioning as advertised</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 text-xl">✓</span>
                    <span>Billing errors or unauthorized charges</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Refund Process</h2>
              <p className="text-gray-700 mb-4">
                To request a refund, please contact us at{" "}
                <a href="mailto:support@replainow.com" className="text-purple-600 hover:text-purple-700 underline">
                  support@replainow.com
                </a>{" "}
                with:
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <ul className="list-decimal pl-6 space-y-3 text-gray-700">
                  <li>Your store name and email address</li>
                  <li>Reason for the refund request</li>
                  <li>Date of the original payment</li>
                </ul>
              </div>
              <p className="text-gray-700 mt-6">
                We will process your refund request within <strong>5-7 business days</strong>. Refunds will 
                be issued to the original payment method.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Processing Time</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Response Time</h3>
                  <p className="text-gray-700">
                    We acknowledge all refund requests within <strong>24 hours</strong> during business days.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Refund Processing</h3>
                  <p className="text-gray-700">
                    Approved refunds are processed within <strong>5-7 business days</strong> to your original 
                    payment method.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Non-Refundable Items</h2>
              <p className="text-gray-700 mb-4">
                The following are not eligible for refunds:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <ul className="list-none space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 text-xl">✗</span>
                    <span>Usage-based charges (API calls, message processing)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 text-xl">✗</span>
                    <span>Custom development or integration services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 text-xl">✗</span>
                    <span>Refund requests made <strong>after 7 days</strong> of payment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 text-xl">✗</span>
                    <span>Accounts terminated for violations of our Terms of Service</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>
              <p className="text-gray-700 mb-4">
                You can cancel your subscription at any time from your Shopify Admin panel. Cancellations take 
                effect at the end of your current billing period.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-gray-700">
                  <strong>Note:</strong> Canceling your subscription does not automatically trigger a refund. 
                  If you wish to request a refund, please follow the refund process outlined above within the 
                  7-day window.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For refund-related questions, please contact:
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-700 mb-3">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@replainow.com" className="text-purple-600 hover:text-purple-700 underline">
                    support@replainow.com
                  </a>
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Response time:</strong> Within 24 hours during business days
                </p>
                <p className="text-sm text-gray-600">
                  PrimeVision Group LLC – Dubai, UAE
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Fair Use Policy</h2>
              <p className="text-gray-700">
                We trust our customers and process refund requests in good faith. However, we reserve the right 
                to refuse refunds in cases of suspected abuse, fraud, or violation of our Terms of Service. 
                Multiple refund requests or patterns of abuse may result in account termination.
              </p>
            </section>
          </div>
        </article>
      </main>

      <UltraFooter />
    </>
  );
};

export default RefundPolicy;
