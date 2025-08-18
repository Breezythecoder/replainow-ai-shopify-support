import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

const OAUTH_URL = "https://apps.shopify.com/replainow/install";

const StickyInstallBarZh = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground p-4 shadow-lg border-t">
      <div className="container flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">
            准备好提升客服效率了吗？14天免费试用，立即开始！
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild size="sm" variant="secondary">
            <a href={OAUTH_URL}>免费试用</a>
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-primary-foreground/80 hover:text-primary-foreground"
            aria-label="关闭"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyInstallBarZh;