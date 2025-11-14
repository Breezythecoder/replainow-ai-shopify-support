import React from "react";
import LegalNavbar from "@/components/marketing/LegalNavbar";
import UltraFooter from "@/components/marketing/UltraFooter";
import SEO from "@/components/SEO";
import { useTranslation } from "@/i18n";

const lastUpdated = "2025-11-14";

const RefundPolicy = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <SEO
        title={`${t('legal.refund.title')} | ReplAInow`}
        description={t('legal.refund.metaDescription')}
        path="/refund"
      />
      <LegalNavbar />
      <main className="pt-20">
        <section className="container mx-auto max-w-[800px] px-4 py-12 md:py-16">
          <article className="space-y-6 leading-relaxed">
            <header>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">{t('legal.refund.title')}</h1>
              <p className="text-sm text-muted-foreground">{t('legal.lastUpdated')}</p>
            </header>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Refund Eligibility</h2>
              <p>
                ReplAInow offers a 14-day free trial for all plans. If you are not satisfied with the service during the trial period, you can cancel without any charges.
              </p>
              <p className="mt-2">
                For paid subscriptions, we offer refunds under the following conditions:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Refund request made within 7 days of the initial payment</li>
                <li>Technical issues that prevent the app from functioning as advertised</li>
                <li>Billing errors or unauthorized charges</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Refund Process</h2>
              <p>
                To request a refund, please contact us at <a className="underline" href="mailto:support@replainow.com">support@replainow.com</a> with:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your store name and email address</li>
                <li>Reason for the refund request</li>
                <li>Date of the original payment</li>
              </ul>
              <p className="mt-2">
                We will process your refund request within 5-7 business days. Refunds will be issued to the original payment method.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Non-Refundable Items</h2>
              <p>
                The following are not eligible for refunds:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Usage-based charges (API calls, message processing)</li>
                <li>Custom development or integration services</li>
                <li>Refund requests made after 7 days of payment</li>
                <li>Accounts terminated for violations of our Terms of Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
              <p>
                For refund-related questions, please contact:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Email: <a className="underline" href="mailto:support@replainow.com">support@replainow.com</a></li>
                <li>Response time: Within 24 hours during business days</li>
              </ul>
            </section>
          </article>
        </section>
      </main>
      <UltraFooter />
    </div>
  );
};

export default RefundPolicy;
