const ModernComparisonZh = () => {
  const comparisonData = [
    ["AI智能", "✅ GPT-4.1 最新", "❌ 基础AI", "❌ 有限AI", "❌ 旧版AI"],
    ["响应时间", "✅ 3秒", "❌ 2-5分钟", "❌ 5-10分钟", "❌ 10+分钟"],
    ["语言", "✅ 32+原生", "❌ 10基础", "❌ 15基础", "❌ 20基础"],
    ["Shopify集成", "✅ 实时同步", "❌ 手动导入", "❌ 基础连接", "❌ 复杂设置"],
    ["价格/月", "✅ ¥139/月", "❌ ¥350+", "❌ ¥518+", "❌ ¥805+"],
    ["设置时间", "✅ 60秒", "❌ 2-3天", "❌ 1周", "❌ 2周"],
    ["ROI保证", "✅ 3倍转换", "❌ 中性", "❌ 中性", "❌ 负面"]
  ];

  return (
    <section className="py-24 bg-ultra-light">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black text-center mb-8 tracking-tight">
          为什么ReplAInow<span className="text-destructive">碾压</span>竞争对手
        </h2>
        <p className="text-xl text-slate-600 text-center mb-16">
          与Gorgias、Intercom和Zendesk直接对比
        </p>
        
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto">
            <div className="glass-card rounded-3xl p-1 shadow-hero">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-6 px-6 font-bold text-lg text-slate-800">功能</th>
                    <th className="text-center py-6 px-4 bg-gradient-primary text-white rounded-t-2xl">
                      <div className="font-black text-lg">ReplAInow</div>
                      <div className="text-sm opacity-90">由GPT-4.1驱动</div>
                    </th>
                    <th className="text-center py-6 px-4 text-slate-600 font-semibold">Gorgias</th>
                    <th className="text-center py-6 px-4 text-slate-600 font-semibold">Intercom</th>
                    <th className="text-center py-6 px-4 text-slate-600 font-semibold">Zendesk</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-800">{row[0]}</td>
                      <td className="py-4 px-4 text-center bg-gradient-to-r from-indigo-50 to-purple-50 font-bold text-indigo-700">
                        {row[1]}
                      </td>
                      <td className="py-4 px-4 text-center text-slate-600 font-medium">{row[2]}</td>
                      <td className="py-4 px-4 text-center text-slate-600 font-medium">{row[3]}</td>
                      <td className="py-4 px-4 text-center text-slate-600 font-medium">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Cost Savings Highlight */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-brand-success/10 to-brand-success/5 rounded-3xl p-8 border border-brand-success/20 shadow-float">
            <h3 className="text-3xl font-black text-brand-success mb-6 text-center">
              💰 相比竞争对手大幅节省成本
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div className="space-y-3">
                <div className="text-destructive font-bold text-lg">昂贵的竞争对手：</div>
                <div className="space-y-2">
                  <div className="text-destructive font-semibold">Gorgias: ¥350+/月</div>
                  <div className="text-destructive font-semibold">Intercom: ¥518+/月</div>
                  <div className="text-destructive font-semibold">Zendesk: ¥805+/月</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-brand-success font-bold text-lg">ReplAInow强大功能：</div>
                <div className="space-y-2">
                  <div className="text-brand-success font-black text-xl">仅¥139/月</div>
                  <div className="text-brand-success text-lg font-bold">= 每月节省高达¥671！</div>
                  <div className="text-brand-success font-semibold">性能更优越</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernComparisonZh;