import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { NumberTicker } from "../magicui/number-ticker";

interface StatCardProps {
  value: string;
  unit: string;
  label: string;
  icon?: ReactNode;
  className?: string;
}

export function StatCard({
  value,
  unit,
  label,
  icon,
  className,
}: StatCardProps) {
  return (
    <Card
      className={cn(
        "border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-[#ffffffaf]",
        className
      )}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {icon && <div className="text-purple-500 mt-1">{icon}</div>}
          <div>
            <NumberTicker
              value={parseFloat(value) || 0}
              className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-black dark:text-black"
            />{" "}
            {unit}
            <p className="text-sm text-gray-500 dark:text-gray-400 font-jakarta">
              {label}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
