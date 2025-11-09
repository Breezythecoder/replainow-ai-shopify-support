import { motion } from "framer-motion";
import { MessageSquare, Mail, Users, ShoppingCart, Package, CheckCircle2 } from "lucide-react";

const DashboardShowcaseSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            So sieht <span className="font-semibold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Ihr Dashboard</span> aus
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chat, Email, Kunden-Info, Bestellungen – alles in einem Bildschirm. 
            Kein Tab-Chaos mehr.
          </p>
        </motion.div>

        {/* Live Chat Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              <MessageSquare className="w-4 h-4" />
              Live Chat Dashboard
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Echtzeit-Chats mit Ihren Kunden
            </h3>
            <p className="text-gray-600">
              Kunde tippt gerade? Sie sehen es live. AI oder Sie antworten – nahtloser Wechsel.
            </p>
          </div>

          {/* Real Live Chat Dashboard Screenshot */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-200/30 to-violet-200/30 rounded-3xl blur-3xl"></div>
            
            {/* Real Dashboard Screenshot */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200">
              <img 
                src="/images/dashboard-livechat-cart.png" 
                alt="ReplAInow Live Chat Dashboard - Agent sendet vorausgefüllten Warenkorb mit 10% Rabatt an VIP-Kunde"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Benefits Row */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: CheckCircle2,
                title: "Alles auf einen Blick",
                desc: "Keine 10 Tabs mehr – alles nebeneinander"
              },
              {
                icon: Package,
                title: "Order automatisch geladen",
                desc: "Kunde fragt nach Bestellung? Info erscheint sofort"
              },
              {
                icon: ShoppingCart,
                title: "Live Warenkorb-Ansicht",
                desc: "Sehen Sie was Kunde gerade kauft"
              }
            ].map((benefit, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl border border-gray-200">
                <benefit.icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Email Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-semibold mb-4">
              <Mail className="w-4 h-4" />
              Email Dashboard
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Professionelles Email-Management
            </h3>
            <p className="text-gray-600">
              Thread-basiert wie Gmail. AI Score bei jeder Email. Auto-Send ab 90 Punkten.
            </p>
          </div>

          {/* Real Email Dashboard Screenshot */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-violet-200/30 to-blue-200/30 rounded-3xl blur-3xl"></div>
            
            {/* Real Email Dashboard Screenshot */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200">
              <img 
                src="/images/dashboard-email-ai.png" 
                alt="ReplAInow Email Dashboard - AI-Assistent beantwortet defekte Bestellung mit Score 93, automatisch gesendet"
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* Key Benefit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 rounded-2xl">
            <Users className="w-6 h-6 text-purple-600" />
            <span className="font-bold text-purple-900">
              Professionelles Interface wie bei großen Tools – aber alles in einem
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardShowcaseSection;

