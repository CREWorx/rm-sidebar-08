import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            {/* Add your sidebar items here */}
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-4">
        <ThemeToggle />
      </div>
    </div>
  )
}
