import React from "react";
import LegalNavbar from "@/components/marketing/LegalNavbar";
import UltraFooter from "@/components/marketing/UltraFooter";
import SEO from "@/components/SEO";
import { useTranslation } from "@/i18n";

const lastUpdated = "2025-11-14";

const CookiePolicy = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <SEO
        title={`${t('legal.cookies.title')} | ReplAInow`}
        description={t('legal.cookies.metaDescription')}
        path="/cookies"
      />
      <LegalNavbar />
      <main className="pt-20">
        <section className="container mx-auto max-w-[800px] px-4 py-12 md:py-16">
          <article className="space-y-6 leading-relaxed">
            <header>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">{t('legal.cookies.title')}</h1>
              <p className="text-sm text-muted-foreground">{t('legal.lastUpdated')}</p>
            </header>

            <section>
              <h2 className="text-2xl font-semibold mb-2">What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">How We Use Cookies</h2>
              <p>
                ReplAInow uses cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Live Chat Cookies:</strong> Enable our Chaport live chat functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services.
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-4">Analytics Cookies</h3>
              <p>
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular.
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-4">Live Chat Cookies</h3>
              <p>
                We use Chaport for our live chat functionality. Chaport may set cookies to remember your chat session and preferences. For more information about Chaport's cookie usage, please refer to their privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Managing Cookies</h2>
              <p>
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
              </p>
              <p className="mt-2">
                However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Third-Party Cookies</h2>
              <p>
                Some cookies on our site are set by third-party services. These include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Chaport:</strong> Live chat functionality</li>
                <li><strong>Google Analytics:</strong> Website analytics (if used)</li>
                <li><strong>Shopify:</strong> App installation and authentication</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Email: <a className="underline" href="mailto:support@replainow.com">support@replainow.com</a></li>
                <li>Company: PrimeVision Group LLC</li>
                <li>Address: Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, UAE</li>
              </ul>
            </section>
          </article>
        </section>
      </main>
      <UltraFooter />
    </div>
  );
};

export default CookiePolicy;
