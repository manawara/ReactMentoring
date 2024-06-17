import { ComponentPropsWithoutRef, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

type BaseProps = {
  children: ReactNode
  className?: string
}

type ButtonProps = ComponentPropsWithoutRef<'button'> & BaseProps & { to?: never }

type LinkButtonProps = LinkProps & BaseProps & { to: string }

const isActiveLink = (props: ButtonProps | LinkButtonProps): props is LinkButtonProps => {
  return 'to' in props
}

const Button = (props: ButtonProps | LinkButtonProps) => {
  if (isActiveLink(props)) {
    const { children, className, ...otherProps } = props
    return (
      <Link
        className={`px-4 py-1 bg-purple-300 rounded capitalize hover:bg-purple-400  ${
          className ? className : undefined
        }`}
        {...otherProps}
      >
        {children}
      </Link>
    )
  }
  const { className, children, ...otherProps } = props
  return (
    <button
      className={`px-4 py-1  bg-purple-300 rounded capitalize hover:bg-purple-400 ${className ? className : undefined}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
