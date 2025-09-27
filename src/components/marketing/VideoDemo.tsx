import { useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const VideoDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight">
            <span className="text-blue-600">Live-Demo</span> in Aktion
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Sieh dir an, wie ReplAInow in
            <span className="text-indigo-600 font-bold"> 3 Sekunden</span> 
            komplexe Kundenfragen lst
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            {/* Video Placeholder - In Production wrde hier ein echtes Video sein */}
            <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4"></div>
                <h3 className="text-2xl font-bold mb-2">Demo Video</h3>
                <p className="text-slate-300 mb-6">
                  Hier siehst du ReplAInow in Aktion:<br/>
                   Live Chat mit Kunden<br/>
                   Automatische Produktempfehlungen<br/>
                   3-Sekunden Antwortzeit<br/>
                   32+ Sprachen
                </p>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  {isPlaying ? <Pause className="w-6 h-6 inline mr-2" /> : <Play className="w-6 h-6 inline mr-2" />}
                  {isPlaying ? 'Pause' : 'Demo ansehen'}
                </button>
              </div>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 backdrop-blur-lg rounded-lg p-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>
              <div className="text-white text-sm">
                ReplAInow Demo - 2:30
              </div>
            </div>
          </div>

          {/* Demo Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200 shadow-lg text-center">
              <div className="text-3xl mb-3"></div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">3 Sekunden</h3>
              <p className="text-slate-600 text-sm">Durchschnittliche Antwortzeit</p>
            </div>
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200 shadow-lg text-center">
              <div className="text-3xl mb-3"></div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">32+ Sprachen</h3>
              <p className="text-slate-600 text-sm">Automatische bersetzung</p>
            </div>
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200 shadow-lg text-center">
              <div className="text-3xl mb-3"></div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">98% Genauigkeit</h3>
              <p className="text-slate-600 text-sm">Korrekte Antworten</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
