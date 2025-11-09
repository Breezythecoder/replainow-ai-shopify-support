import { motion } from "framer-motion";
import { MessageSquare, Mail, Users, ShoppingCart, Package, CheckCircle2 } from "lucide-react";

const DashboardShowcaseSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        
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

          {/* 3-Column Dashboard Mockup */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-200/30 to-violet-200/30 rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="grid md:grid-cols-3 divide-x divide-gray-200">
                
                {/* Column 1: Conversation List */}
                <div className="p-6 bg-gray-50">
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Ihre Gespräche</h4>
                    <p className="text-xs text-gray-600">Mit Filtern nach Kategorie</p>
                  </div>
                  
                  {/* Filter Chips */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                      Alle
                    </div>
                    <div className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded-full">
                      Retouren
                    </div>
                    <div className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded-full">
                      Fragen
                    </div>
                  </div>

                  {/* Conversation Items */}
                  <div className="space-y-2">
                    {[
                      { name: "Maria S.", preview: "Wo ist meine Bestellung?", time: "2 Min", badge: "AI" },
                      { name: "Thomas M.", preview: "Habt ihr Größe 42?", time: "5 Min", badge: "Sie" },
                      { name: "Sarah K.", preview: "Rückgabe möglich?", time: "1 Std", badge: "AI" }
                    ].map((conv, i) => (
                      <div 
                        key={i}
                        className={`p-3 rounded-lg border transition-all ${
                          i === 0 
                            ? 'bg-purple-50 border-purple-200' 
                            : 'bg-white border-gray-200 hover:border-purple-200'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-xs font-bold text-purple-700">
                            {conv.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-semibold text-sm text-gray-900">{conv.name}</span>
                              <span className="text-xs text-gray-500">{conv.time}</span>
                            </div>
                            <p className="text-xs text-gray-600 truncate">{conv.preview}</p>
                            <div className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold ${
                              conv.badge === 'AI' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                            }`}>
                              {conv.badge}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Chat */}
                <div className="p-6 bg-white">
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Konversation</h4>
                    <p className="text-xs text-gray-600">Mit Maria S.</p>
                  </div>

                  {/* Messages */}
                  <div className="space-y-3 mb-4">
                    {/* Customer message */}
                    <div className="flex justify-end">
                      <div className="bg-purple-600 text-white rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">Wo ist meine Bestellung #5678?</p>
                      </div>
                    </div>
                    
                    {/* AI response */}
                    <div className="flex gap-2">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs">🤖</span>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm text-gray-800">
                          Ihre Bestellung wurde gestern versendet via DHL! 
                          Tracking-Nummer: 123456789
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                      Sie übernehmen
                    </button>
                    <button className="flex-1 px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors">
                      AI übernimmt
                    </button>
                  </div>
                </div>

                {/* Column 3: Customer Info */}
                <div className="p-6 bg-gray-50">
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Kunde & Order</h4>
                    <p className="text-xs text-gray-600">Automatisch geladen</p>
                  </div>

                  {/* Customer Card */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center text-sm font-bold text-purple-700">
                        MS
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-900">Maria Schmidt</div>
                        <div className="text-xs text-gray-500">maria@example.com</div>
                      </div>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bestellungen:</span>
                        <span className="font-semibold text-gray-900">7</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Gesamt:</span>
                        <span className="font-semibold text-gray-900">€432,50</span>
                      </div>
                    </div>
                  </div>

                  {/* Order Card */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-sm text-gray-900">Bestellung #5678</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
                        VERSENDET
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <div className="w-12 h-12 bg-purple-100 rounded"></div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-gray-900">Blue Sneakers</p>
                          <p className="text-xs text-gray-600">1x €89,90</p>
                        </div>
                      </div>
                      <button className="w-full px-3 py-2 bg-purple-600 text-white text-xs font-semibold rounded-lg hover:bg-purple-700 transition-colors">
                        In Shopify öffnen
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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

          {/* Email Dashboard Mockup */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-violet-200/30 to-blue-200/30 rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="grid md:grid-cols-3 divide-x divide-gray-200">
                
                {/* Column 1: Thread List */}
                <div className="p-6 bg-gray-50">
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Email-Threads</h4>
                    <p className="text-xs text-gray-600">Wie Gmail</p>
                  </div>

                  {/* Thread Items */}
                  <div className="space-y-2">
                    {[
                      { name: "Max M.", subject: "Rückfrage zu Order", score: 94, badge: "Auto" },
                      { name: "Lisa K.", subject: "Produkt-Frage", score: 87, badge: "Draft" },
                      { name: "Tom B.", subject: "Beschwerde", score: 72, badge: "Review" }
                    ].map((thread, i) => (
                      <div 
                        key={i}
                        className={`p-3 rounded-lg border ${
                          i === 0 
                            ? 'bg-violet-50 border-violet-200' 
                            : 'bg-white border-gray-200'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-violet-200 rounded-full flex items-center justify-center text-xs font-bold text-violet-700">
                              {thread.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="min-w-0">
                              <div className="font-semibold text-sm text-gray-900">{thread.name}</div>
                              <div className="text-xs text-gray-600 truncate">{thread.subject}</div>
                            </div>
                          </div>
                          {/* AI Score Badge */}
                          <div className={`
                            w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0
                            ${thread.score >= 90 ? 'bg-green-100 text-green-700' : ''}
                            ${thread.score >= 80 && thread.score < 90 ? 'bg-gray-100 text-gray-700' : ''}
                            ${thread.score < 80 ? 'bg-yellow-100 text-yellow-700' : ''}
                          `}>
                            {thread.score}
                          </div>
                        </div>
                        <div className={`
                          inline-block px-2 py-0.5 rounded text-[10px] font-bold
                          ${thread.badge === 'Auto' ? 'bg-green-100 text-green-700' : ''}
                          ${thread.badge === 'Draft' ? 'bg-gray-100 text-gray-700' : ''}
                          ${thread.badge === 'Review' ? 'bg-yellow-100 text-yellow-700' : ''}
                        `}>
                          {thread.badge === 'Auto' && '✅ AUTO-SEND'}
                          {thread.badge === 'Draft' && '📋 ENTWURF'}
                          {thread.badge === 'Review' && '⚠️ PRÜFUNG'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Email Thread */}
                <div className="p-6 bg-white">
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Email-Thread</h4>
                    <p className="text-xs text-gray-600">Mit Max M.</p>
                  </div>

                  {/* Email Messages */}
                  <div className="space-y-4 mb-4">
                    {/* Customer Email */}
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="text-xs text-gray-600 mb-2">Von: Max M.</div>
                      <p className="text-sm text-gray-800">
                        Hallo, ich habe eine Frage zu meiner Bestellung #1234. 
                        Wann kommt sie an?
                      </p>
                    </div>

                    {/* AI Response with Score */}
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs text-gray-600">Von: ReplAI (Auto-gesendet)</div>
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center font-bold text-sm text-green-700">
                          94
                        </div>
                      </div>
                      <p className="text-sm text-gray-800">
                        Ihre Bestellung #1234 wurde gestern versendet via DHL 
                        und sollte morgen ankommen. Tracking: DE123456789
                      </p>
                    </div>
                  </div>
                </div>

                {/* Column 3: Customer & Order */}
                <div className="p-6 bg-gray-50">
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Kunde & Bestellung</h4>
                    <p className="text-xs text-gray-600">Auto-geladen</p>
                  </div>

                  {/* Quick Stats */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200 mb-3">
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Order #1234</span>
                        <span className="font-bold text-green-600">VERSENDET</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">DHL Tracking:</span>
                        <span className="font-mono text-gray-900">DE123...</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Wert:</span>
                        <span className="font-semibold text-gray-900">€129,90</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full px-3 py-2 bg-violet-600 text-white text-xs font-semibold rounded-lg hover:bg-violet-700 transition-colors">
                    Rückerstattung durchführen
                  </button>
                </div>
              </div>
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

