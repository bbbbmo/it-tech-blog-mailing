import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import { ExternalLink, Share2 } from "lucide-react";

export default function PostDetailPage() {
  return (
    <>
      <Header>안녕</Header>
      <main className="flex-1 w-full py-20 px-40 flex flex-col gap-20">
        <section className="flex flex-col justify-center gap-4">
          <h1 className="text-4xl font-bold">글 제목</h1>
          <p className="text-lg text-muted-foreground">글 요약</p>
          <div>
            <Button className=" gap-2">
              <ExternalLink className="w-4 h-4" />
              원문 보기
            </Button>
            <Button variant="outline" className=" gap-2">
              <Share2 />
              공유하기
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
