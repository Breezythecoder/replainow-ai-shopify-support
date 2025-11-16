import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/i18n";

const FAQSection = () => {
  const { t, getTranslation } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = getTranslation("marketing.faq.items") || [
    {
      q: "Ersetzt die AI wirklich meine Support-Mitarbeiter?",
      a: "Die AI automatisiert 87% aller Support-Anfragen – das entspricht 2-3 Vollzeit-Mitarbeitern bei durchschnittlichem Ticket-Volumen. Einfache Fragen (Produktverfügbarkeit, Order-Tracking, Richtlinien) löst die AI sofort. Komplexe Fälle übergibt sie intelligent an Ihr Team mit vollständigem Kontext.",
    },
    {
      q: "Was passiert bei komplexen Anfragen die AI nicht beantworten kann?",
      a: "Die AI weiß, wann sie nicht helfen kann. Bei komplexen Fragen, Beschwerden oder wenn der Kunde explizit einen Menschen fordert, übergibt die AI nahtlos an Ihr Team. Ihr Agent sieht die komplette Gesprächshistorie, alle gesammelten Informationen (Bestellnummer, Telefon, Fotos) und weiß genau was zu tun ist – keine Information geht verloren.",
    },
    {
      q: "Wie genau ist die AI? Macht sie Fehler?",
      a: "Die AI arbeitet mit 99.8% Genauigkeit, weil sie nur mit echten Daten aus Ihrem Shopify-Shop antwortet – keine Halluzinationen, keine Schätzungen. Jede Antwort wird auf 5 Dimensionen selbst-bewertet (0-100 Punkte). Nur Antworten mit Score ≥90 werden automatisch gesendet. Bei Unsicherheit eskaliert die AI lieber zu Ihrem Team.",
    },
    {
      q: "Muss ich die AI trainieren oder Daten eingeben?",
      a: "Nein! Die AI importiert automatisch bei Installation alle Ihre Shopify-Daten: Produkte, Bestellungen, Kunden, Richtlinien, Seiten, Blog-Artikel. Ändern Sie etwas in Shopify? Die AI weiß es innerhalb von 5 Sekunden durch Echtzeit-Synchronisation. Null Setup, null Wartung, null manuelle Arbeit.",
    },
    {
      q: "Wie schnell ist die AI produktiv?",
      a: "Ab Installation: 60 Sekunden bis die AI einsatzbereit ist. Sie kann sofort Produktfragen beantworten, Bestellungen tracken und Richtlinien erklären. Die AI kennt Ihren kompletten Shop-Katalog vom ersten Moment an – kein Training erforderlich.",
    },
    {
      q: "Kann ich die KI-Antworten vor dem Versand prüfen?",
      a: "Ja! Sie kontrollieren den Auto-Send-Schwellenwert. Setzen Sie ihn auf 90 für konservativ (mehr manuelle Prüfungen) oder 80 für ausgewogen (mehr Automatisierung). AI-Antworten unter dem Schwellenwert landen in der Prüfwarteschlange, wo Sie sie vor dem Versand bearbeiten oder genehmigen können.",
    },
    {
      q: "Welche Sprachen werden unterstützt?",
      a: "Die KI unterstützt 100+ Sprachen und erkennt automatisch, in welcher Sprache der Kunde schreibt. Deutsch, Englisch, Französisch, Spanisch, Arabisch, Chinesisch, Japanisch – alles automatisch, ohne Konfiguration. Die AI antwortet fließend in der Kundensprache.",
    },
    {
      q: "Werden meine Kundendaten sicher gespeichert?",
      a: "Ja! Wir sind ISO 27001 zertifiziert und DSGVO-konform. Alle Daten werden verschlüsselt gespeichert (TLS 1.3), und Sie haben volle Kontrolle. Uninstall = komplette automatische Datenlöschung innerhalb von 24 Stunden.",
    },
    {
      q: "Wie lange dauert die Installation?",
      a: "Unter 60 Sekunden. Ein Klick im Shopify App Store, und ReplAInow beginnt automatisch Ihre Shop-Daten zu importieren. Widget aktivieren im Theme Editor (1 Klick), fertig. Keine technischen Kenntnisse erforderlich.",
    },
    {
      q: "Was passiert, wenn ich kündige?",
      a: "Keine Vertragsbindung – Sie können jederzeit kündigen. Bei Uninstall werden alle Ihre Daten automatisch gelöscht. Keine versteckten Kosten, keine Kündigungsfrist, kein Kleingedrucktes.",
    },
  ];

  return (
    <div
      id="faq"
      className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/20 to-white"
    >
      {/* Subtle mesh gradient */}
      <div className="absolute inset-0 bg-mesh-purple opacity-10"></div>
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            {t("marketing.faq.title")}
          </h2>
          <p className="text-lg text-gray-600">{t("marketing.faq.subtitle")}</p>
        </div>

        {/* FAQ Accordion - Glasmorphic */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-white-card-hover transition-all duration-300 border-2 border-gray-200 hover:border-purple-400 shadow-card-strong"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-7 flex items-center justify-between bg-gradient-to-r from-white via-white to-gray-50 hover:from-purple-50 hover:via-white hover:to-purple-50 transition-all duration-300 group"
              >
                <span className="font-bold text-gray-900 pr-8 group-hover:text-purple-700 transition-colors">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ChevronDown className="w-6 h-6 text-purple-700 flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-7 pb-7 bg-gradient-to-b from-gray-50 to-white border-t-2 border-gray-200">
                      <p className="text-gray-800 leading-relaxed text-base">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
