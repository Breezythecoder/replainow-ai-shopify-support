import { AlertTriangle, CheckCircle, Clock, DollarSign, Users } from "lucide-react";

const ProblemSolutionZh = () => {
  const problems = [
    {
      icon: Clock,
      title: "客服工作耗费大量时间",
      description: "每天花费数小时回答重复的客户询问，无法专注于业务发展。"
    },
    {
      icon: Users,
      title: "客户等待时间过长",
      description: "客户需要等待数小时甚至数天才能得到回复，导致满意度下降。"
    },
    {
      icon: DollarSign,
      title: "错失销售机会",
      description: "客户询问产品时，延迟回复导致他们转向竞争对手。"
    }
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: "即时自动回复",
      description: "AI在3秒内回答客户询问，24/7不间断服务，客户满意度大幅提升。"
    },
    {
      icon: CheckCircle,
      title: "释放您的时间",
      description: "自动处理80%的客服询问，让您专注于业务发展和重要决策。"
    },
    {
      icon: CheckCircle,
      title: "提升销售转化",
      description: "即时回答产品问题，推荐相关产品，将询问转化为销售。"
    }
  ];

  return (
    <section aria-labelledby="problem-solution-heading" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <h2 id="problem-solution-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-16">
          告别客服烦恼，拥抱AI效率
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Problems */}
          <div>
            <div className="flex items-center mb-8">
              <AlertTriangle className="w-6 h-6 text-destructive mr-3" />
              <h3 className="font-display text-2xl font-semibold text-destructive">现状问题</h3>
            </div>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border border-destructive/20 bg-destructive/5">
                  <problem.icon className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-destructive mb-1">{problem.title}</h4>
                    <p className="text-sm text-muted-foreground">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <div className="flex items-center mb-8">
              <CheckCircle className="w-6 h-6 text-success mr-3" />
              <h3 className="font-display text-2xl font-semibold text-success">ReplAInow解决方案</h3>
            </div>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border border-success/20 bg-success/5">
                  <solution.icon className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-success mb-1">{solution.title}</h4>
                    <p className="text-sm text-muted-foreground">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionZh;