import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  path?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

const Breadcrumbs = ({ items, className = '' }: BreadcrumbsProps) => {
  return (
    <nav className={`flex items-center gap-2 text-sm ${className}`} aria-label="Breadcrumb">
      <Link
        to="/"
        className="flex items-center gap-1 text-slate-600 hover:text-brand-600 transition-colors"
      >
        <Home className="h-4 w-4" />
        <span>Home</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4 text-slate-400" />
          {item.path ? (
            <Link
              to={item.path}
              className="text-slate-600 hover:text-brand-600 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-navy-900 font-semibold">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}

export default Breadcrumbs
