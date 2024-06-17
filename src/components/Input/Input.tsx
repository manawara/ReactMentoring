import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  id: string
}

const Input = (props: InputProps) => {
  const { id, label, ...otherProps } = props
  return (
    <div>
      <label htmlFor={id} className="capitalize font-semibold text-md ">
        {label}
      </label>
      <input id={id} {...otherProps} className="max-w-xl w-full my-1 p-2 rounded text-black" />
    </div>
  )
}

export default Input
