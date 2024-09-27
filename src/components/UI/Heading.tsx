import { cn } from '@/lib/utils'

interface Props {
  text: string
  className?: string
}

export default function Heading({ text, className }: Props) {
  return <div className={cn('px-3 py-0.5 pt-1 text-base font-medium text-white bg-neutral-600 rounded-md', className)}>{text}</div>
}
