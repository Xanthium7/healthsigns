import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatCardProps {
  value: string
  label: string
  icon?: ReactNode
  className?: string
}

export function StatCard({ value, label, icon, className }: StatCardProps) {
  return (
    <Card className={cn("border-none shadow-md hover:shadow-lg transition-shadow duration-300", className)}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {icon && <div className="text-purple-500 mt-1">{icon}</div>}
          <div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white font-display">{value}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-jakarta">{label}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
