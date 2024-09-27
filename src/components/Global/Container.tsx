import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className }: Props) {
  return <main className={cn('m-5', className)}>{children}</main>
}
