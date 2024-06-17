import { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
}

const Container = ({ children, className }: ContainerProps) => {
  return <div className={`max-w-7xl mx-auto px-6 ${className}`}>{children}</div>
}

export default Container
