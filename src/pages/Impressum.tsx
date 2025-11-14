import LegalNavbar from "@/components/marketing/LegalNavbar";
import UltraFooter from "@/components/marketing/UltraFooter";
import SEO from "@/components/SEO";
import { useTranslation } from "@/i18n";

const lastUpdated = "2025-11-14";

const Impressum = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <SEO
        title={`${t('legal.impressum.title')} | ReplAInow`}
        description={t('legal.impressum.metaDescription')}
        path="/impressum"
      />
      <LegalNavbar />
      <main className="pt-20">
        <section className="container mx-auto max-w-[800px] px-4 py-12 md:py-16">
          <article className="space-y-6 leading-relaxed">
            <header>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
                {t('legal.impressum.title')}
              </h1>
              <p className="text-sm text-muted-foreground">
                {t('legal.lastUpdated')}
              </p>
            </header>

            <section>
              <h2 className="text-2xl font-semibold mb-2">{t('legal.impressum.provider')}</h2>
              <p>{t('legal.impressum.companyName')}</p>
              <p>{t('legal.impressum.legalForm')}: {t('legal.impressum.companyType')}</p>
              <p>{t('legal.impressum.address')}: {t('legal.impressum.companyAddress')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">{t('legal.impressum.contact')}</h2>
              <p>
                {t('legal.impressum.email')}: <a className="underline" href="mailto:support@replainow.com">support@replainow.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">{t('legal.impressum.responsible')}</h2>
              <p>Ruben Calabrese</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">{t('legal.impressum.taxInfo')}</h2>
              <p>{t('legal.impressum.taxNumber')}: 104756281200001</p>
            </section>
          </article>
        </section>
      </main>
      <UltraFooter />
    </div>
  );
};

export default Impressum;
