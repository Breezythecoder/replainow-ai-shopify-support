const ModernProblemSolutionZh = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
          <span className="text-destructive">问题：</span> 客服压力过大
          <br />
          <span className="text-brand-success">解决方案：</span> 智能AI
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-destructive/10 border border-destructive/20 rounded-3xl p-8 relative shadow-lg">
            <div className="absolute -top-3 left-6 bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-bold">😫 没有 REPLAINOW</div>
            <img src="/lovable-uploads/1d082320-2e70-4359-aaed-38272ddacb7.png" alt="拥挤混乱的邮箱" className="w-full mb-6 rounded-xl shadow-md" />
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3"><span className="text-destructive text-xl">❌</span><span className="font-medium">每天处理 50+ 封邮件</span></li>
              <li className="flex items-center gap-3"><span className="text-destructive text-xl">❌</span><span className="font-medium">无止境的复制粘贴回复</span></li>
              <li className="flex items-center gap-3"><span className="text-destructive text-xl">❌</span><span className="font-medium">客户等待数小时</span></li>
              <li className="flex items-center gap-3"><span className="text-destructive text-xl">❌</span><span className="font-medium">糟糕服务导致流失订单</span></li>
              <li className="flex items-center gap-3"><span className="text-destructive text-xl">❌</span><span className="font-medium">团队超负荷、压力大</span></li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-3xl p-8 relative shadow-hero interactive-card">
            <div className="absolute -top-3 left-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">🚀 使用 REPLAINOW</div>
            <img src="/lovable-uploads/91677a2e-50c4-4aeb-8a6e-f6626412e034.png" alt="ReplAInow 仪表盘展示完美回复" className="w-full mb-6 rounded-xl shadow-md" />
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3"><span className="text-brand-success text-xl">✅</span><span className="font-medium">AI 3 秒内自动回复</span></li>
              <li className="flex items-center gap-3"><span className="text-brand-success text-xl">✅</span><span className="font-medium">完美的产品推荐</span></li>
              <li className="flex items-center gap-3"><span className="text-brand-success text-xl">✅</span><span className="font-medium">支持 32+ 种语言</span></li>
              <li className="flex items-center gap-3"><span className="text-brand-success text-xl">✅</span><span className="font-medium">+187% 转化率</span></li>
              <li className="flex items-center gap-3"><span className="text-brand-success text-xl">✅</span><span className="font-medium">支持工作量降低 90%</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ModernProblemSolutionZh;