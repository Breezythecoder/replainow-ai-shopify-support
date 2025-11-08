import { motion } from "framer-motion";
import { Mail, MessageSquare, CheckCircle2, Star, Sparkles } from "lucide-react";

const Banner4_DashboardPreview = () => {
  return (
    <div className="w-[1600px] h-[900px] bg-gray-900 flex flex-col relative overflow-hidden">
      
      {/* Top Bar */}
      <div className="bg-gray-800 border-b border-gray-700 px-12 py-6 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Professionelles Agent-Dashboard
          </h2>
          <p className="text-gray-400 text-lg">3-Column Interface • Real-Time • AI-Powered</p>
        </div>
        <div className="flex items-center gap-3">
          {[1,2,3,4,5].map(i => (
            <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
          ))}
          <span className="text-2xl font-bold text-white ml-2">4.9</span>
        </div>
      </div>

      {/* Main Dashboard Area */}
      <div className="flex-1 flex gap-4 p-6">
        
        {/* Left Column - Thread List */}
        <div className="w-96 bg-gray-800 rounded-2xl border border-gray-700 p-6 space-y-3">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-purple-400" />
              <span className="text-white font-semibold">Posteingang</span>
            </div>
            <div className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-bold">
              12
            </div>
          </div>

          {/* Thread Items */}
          {[
            { name: "Maria Schmidt", subject: "Rückgabe", score: 94, color: "green" },
            { name: "Thomas Meyer", subject: "Tracking", score: 92, color: "green" },
            { name: "Sarah Klein", subject: "Beschwerde", score: 76, color: "yellow" }
          ].map((thread, i) => (
            <div key={i} className={`
              bg-gray-700/50 rounded-xl p-4 border
              ${i === 0 ? 'border-purple-500/50 bg-purple-900/20' : 'border-gray-600'}
            `}>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-white font-semibold text-sm">{thread.name}</div>
                  <div className="text-gray-400 text-xs">{thread.subject}</div>
                </div>
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold
                  ${thread.color === 'green' ? 'bg-green-500/20 text-green-300 border-2 border-green-500/50' : 'bg-yellow-500/20 text-yellow-300 border-2 border-yellow-500/50'}
                `}>
                  {thread.score}
                </div>
              </div>
              <div className="text-xs text-gray-500">vor 5 Min</div>
            </div>
          ))}
        </div>

        {/* Middle Column - Conversation */}
        <div className="flex-1 bg-gray-800 rounded-2xl border border-gray-700 p-8">
          <div className="text-white font-semibold mb-6 flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-purple-400" />
            <span>Maria Schmidt</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400 text-sm">maria@example.com</span>
          </div>

          {/* Email Thread */}
          <div className="space-y-4">
            {/* Customer Email */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <div className="text-blue-300 text-sm mb-3">Von: Maria Schmidt</div>
              <div className="text-white/90 text-base">
                Ich möchte Bestellung #1234 zurückgeben. Wie funktioniert das?
              </div>
            </div>

            {/* AI Response with High Score */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/40 rounded-xl p-6 relative">
              {/* AI Score Badge */}
              <div className="absolute -top-5 -right-5">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 border-4 border-gray-900">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">94</div>
                    <div className="text-[10px] text-white/80">SCORE</div>
                  </div>
                </div>
              </div>

              <div className="text-green-300 text-sm mb-3 flex items-center gap-2">
                <div className="w-7 h-7 bg-purple-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold">ReplAI</span>
                <span className="px-2 py-0.5 bg-green-500/30 rounded text-xs">AUTO-SENT</span>
              </div>
              
              <div className="text-white/95 leading-relaxed">
                Hallo Maria!<br/><br/>
                Gerne helfe ich Ihnen mit der Rückgabe. Unsere Rückgaberichtlinie erlaubt Rücksendungen innerhalb von 30 Tagen.<br/><br/>
                Ich habe Ihre Bestellung #1234 gefunden:<br/>
                • Summer Dress (Größe M, Blau)<br/>
                • Gekauft am: 15. Oktober 2024<br/>
                • Preis: €49.90<br/><br/>
                Bitte senden Sie das Produkt zurück an: [Adresse]<br/>
                Sobald wir es erhalten, erstatten wir den vollen Betrag.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Customer Info */}
        <div className="w-80 bg-gray-800 rounded-2xl border border-gray-700 p-6">
          <div className="text-white font-semibold mb-4">Kunden-Info</div>
          
          <div className="space-y-4">
            {/* VIP Badge */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-amber-300 font-bold">VIP KUNDE</div>
            </div>

            {/* Stats */}
            <div className="bg-gray-700/50 rounded-xl p-4 space-y-3">
              <div>
                <div className="text-gray-400 text-xs mb-1">Lifetime Value</div>
                <div className="text-white text-2xl font-bold">€2.847</div>
              </div>
              <div>
                <div className="text-gray-400 text-xs mb-1">Bestellungen</div>
                <div className="text-white text-2xl font-bold">24</div>
              </div>
              <div>
                <div className="text-gray-400 text-xs mb-1">Ø Zufriedenheit</div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <div className="text-white font-bold">4.8</div>
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
              <div className="text-purple-300 text-sm font-bold mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                AI Insights
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Alle Infos gesammelt</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Hohe Qualität (94)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Auto-versendet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="bg-purple-600 px-12 py-6">
        <div className="flex items-center justify-center gap-16 text-white">
          <div className="text-center">
            <div className="text-4xl font-bold mb-1">87%</div>
            <div className="text-sm text-purple-200">Auto-Send Rate</div>
          </div>
          <div className="h-12 w-px bg-white/30"></div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-1">94</div>
            <div className="text-sm text-purple-200">Avg AI Score</div>
          </div>
          <div className="h-12 w-px bg-white/30"></div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-1">&lt;5 Min</div>
            <div className="text-sm text-purple-200">Antwortzeit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner4_DashboardPreview;