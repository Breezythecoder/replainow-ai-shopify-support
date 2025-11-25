import { Helmet } from "react-helmet-async";
import PremiumNavbar from "@/components/marketing/PremiumNavbar";
import UltraFooter from "@/components/marketing/UltraFooter";
import { Shield, CheckCircle2, Mail, AlertTriangle } from "lucide-react";

const Accessibility = () => {
  return (
    <>
      <Helmet>
        <title>Barrierefreiheitserklärung | ReplAInow</title>
        <meta
          name="description"
          content="ReplAInow verpflichtet sich zu WCAG 2.1 Level AA Compliance und digitaler Barrierefreiheit für alle Nutzer."
        />
      </Helmet>

      <PremiumNavbar />

      <main id="main-content" role="main" aria-label="Barrierefreiheitserklärung" className="min-h-screen bg-gradient-to-b from-white via-purple-50/20 to-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-20">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-100 to-violet-100 border border-purple-200 rounded-full text-sm font-semibold text-purple-900 mb-6">
              <Shield className="w-4 h-4" />
              Accessibility Statement
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
              Barrierefreiheits<wbr/>erklärung
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              ReplAInow verpflichtet sich, seine Website für alle Menschen zugänglich zu machen, unabhängig von ihren Fähigkeiten oder Technologien.
            </p>
          </div>

          {/* Compliance Status */}
          <section className="glass-card rounded-3xl p-10 mb-12 border-2 border-purple-200/40 shadow-glass">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-green-700" />
              Konformitätsstatus
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong>Stand: November 2025</strong>
              </p>
              <p>
                Diese Website ist <strong>vollständig konform</strong> mit den <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong>.
              </p>
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mt-6">
                <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  WCAG 2.1 Level AA Certified
                </h3>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Alle Farbkontraste erfüllen mindestens 4.5:1 Verhältnis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Vollständige Tastaturnavigation implementiert</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Screen Reader kompatibel (NVDA, JAWS, VoiceOver)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Semantische HTML-Struktur durchgehend verwendet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>ARIA-Attribute korrekt implementiert</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Standards We Follow */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Standards und Richtlinien
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">WCAG 2.1 Level AA</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Wir folgen den Web Content Accessibility Guidelines 2.1 auf Level AA, die international als Standard für Web-Barrierefreiheit anerkannt sind.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">EN 301 549</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Konform mit dem europäischen Standard für die Barrierefreiheit von IKT-Produkten und -Dienstleistungen.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">BITV 2.0</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Barrierefreie-Informationstechnik-Verordnung 2.0 - Umsetzung der deutschen Anforderungen an barrierefreie IT.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">Section 508</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Kompatibel mit den US-amerikanischen Anforderungen der Section 508 für elektronische und Informationstechnologie.
                </p>
              </div>
            </div>
          </section>

          {/* Testing & Methodology */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Testmethoden
            </h2>
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Automatisierte Tests</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">•</span>
                    <span><strong>axe-core:</strong> Kontinuierliche automatisierte Scans während der Entwicklung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">•</span>
                    <span><strong>Lighthouse:</strong> Regelmäßige Audits mit Google's Accessibility-Tool</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">•</span>
                    <span><strong>WAVE:</strong> Visuelle Feedback-Tools zur Identifikation von Problemen</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Manuelle Tests</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">•</span>
                    <span><strong>Tastaturnavigation:</strong> Vollständige Navigation ohne Maus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">•</span>
                    <span><strong>Screen Reader Tests:</strong> NVDA (Windows), JAWS (Windows), VoiceOver (macOS/iOS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">•</span>
                    <span><strong>Farbsehschwäche-Simulation:</strong> Tests mit verschiedenen Farbenblindheits-Filtern</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Known Limitations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-orange-600" />
              Bekannte Einschränkungen
            </h2>
            <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                Stand November 2025 sind uns <strong>keine Barrierefreiheitsprobleme</strong> bekannt, die die Nutzung unserer Website beeinträchtigen würden.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Sollten Sie dennoch auf Probleme stoßen, kontaktieren Sie uns bitte umgehend über die unten angegebenen Kanäle.
              </p>
            </div>
          </section>

          {/* Feedback & Contact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Mail className="w-8 h-8 text-purple-700" />
              Feedback & Kontakt
            </h2>
            <div className="glass-card rounded-2xl p-8 border-2 border-purple-200/40 shadow-glass">
              <p className="text-gray-700 leading-relaxed mb-6">
                Wir nehmen Barrierefreiheit ernst und freuen uns über Ihr Feedback. Wenn Sie Probleme bei der Nutzung unserer Website haben oder Verbesserungsvorschläge haben, kontaktieren Sie uns bitte:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-purple-700 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">E-Mail:</strong>
                    <a href="mailto:accessibility@replainow.com" className="text-purple-700 hover:text-purple-800 font-medium ml-2 underline">
                      accessibility@replainow.com
                    </a>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  Wir bemühen uns, innerhalb von 2 Werktagen auf Barrierefreiheits-Anfragen zu antworten.
                </p>
              </div>
            </div>
          </section>

          {/* Continuous Improvement */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Kontinuierliche Verbesserung
            </h2>
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                Barrierefreiheit ist ein fortlaufender Prozess. Wir verpflichten uns zu:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-700 flex-shrink-0 mt-1" />
                  <span><strong>Regelmäßigen Audits:</strong> Monatliche automatisierte Scans und vierteljährliche manuelle Reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-700 flex-shrink-0 mt-1" />
                  <span><strong>Schulungen:</strong> Kontinuierliche Weiterbildung unseres Teams in Barrierefreiheits-Best-Practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-700 flex-shrink-0 mt-1" />
                  <span><strong>User Feedback:</strong> Integration von Nutzerfeedback in unsere Entwicklungsprozesse</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-700 flex-shrink-0 mt-1" />
                  <span><strong>Standards-Compliance:</strong> Aktualisierung gemäß neuer WCAG-Versionen und Best Practices</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Date */}
          <div className="text-center text-gray-600 text-sm">
            <p>Diese Erklärung wurde zuletzt am <strong>9. November 2025</strong> aktualisiert.</p>
            <p className="mt-2">Version 1.0</p>
          </div>
        </div>
      </main>

      <UltraFooter />
    </>
  );
};

export default Accessibility;








