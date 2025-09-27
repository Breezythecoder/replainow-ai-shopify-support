const ModernProblemSolutionEn = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
          <span className="text-destructive">The Problem:</span> Overwhelmed Support
          <br />
          <span className="text-brand-success">The Solution:</span> Intelligent AI
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Before Card - Problem */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-3xl p-8 relative shadow-lg">
            <div className="absolute -top-3 left-6 bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-bold">
               WITHOUT REPLAINOW
            </div>
            <img 
              src="/assets/1d082320-2e70-4359-aaed-382d72ddacb7.png" 
              alt="Chaotic overflowing email inbox" 
              className="w-full mb-6 rounded-xl shadow-md" 
            />
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3">
                <span className="text-destructive text-xl"></span>
                <span className="font-medium">Process 50+ emails daily</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-destructive text-xl"></span>
                <span className="font-medium">Endless copy-paste responses</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-destructive text-xl"></span>
                <span className="font-medium">Customers wait for hours</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-destructive text-xl"></span>
                <span className="font-medium">Lost sales from poor service</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-destructive text-xl"></span>
                <span className="font-medium">Overworked, stressed team</span>
              </li>
            </ul>
          </div>
          
          {/* After Card - Solution */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-3xl p-8 relative shadow-hero interactive-card">
            <div className="absolute -top-3 left-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
               WITH REPLAINOW
            </div>
            <img 
              src="/assets/91677a2e-50c4-4aeb-8a6e-f6626412e034.png" 
              alt="ReplAInow AI Dashboard with perfect response" 
              className="w-full mb-6 rounded-xl shadow-md" 
            />
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3">
                <span className="text-brand-success text-xl"></span>
                <span className="font-medium">AI responds automatically in 3 seconds</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-success text-xl"></span>
                <span className="font-medium">Perfect product recommendations</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-success text-xl"></span>
                <span className="font-medium">32+ languages automatically</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-success text-xl"></span>
                <span className="font-medium">+187% higher conversion rate</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-success text-xl"></span>
                <span className="font-medium">90% less support effort</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernProblemSolutionEn;