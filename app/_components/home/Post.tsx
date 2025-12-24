import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Tags } from "lucide-react";

export default function Post() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between mb-3">
          <span className="text-sm ">회사명</span>
          <span className="text-sm text-muted-foreground flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            2025-01-01
          </span>
        </div>
        <CardTitle>글 제목</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">글 내용</p>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between w-full">
          <div>
            <Badge className="flex items-center gap-2" variant="secondary">
              <Tags className="w-4 h-4" />
              <span className="text-muted-foreground">FE</span>
            </Badge>
          </div>
          <ExternalLink className="w-4 h-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
