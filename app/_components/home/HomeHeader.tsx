import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function HomeHeader() {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
            <Mail className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-balance">IT 테크 큐레이터</h1>
            <p className="text-xs text-muted-foreground">
              매주 월요일 9시, 최신 기술 소식
            </p>
          </div>
        </div>
        <Button size="lg" className="gap-2">
          <>
            <Mail className="w-4 h-4" />
            뉴스레터 구독
          </>
        </Button>
      </div>
    </header>
  );
}
