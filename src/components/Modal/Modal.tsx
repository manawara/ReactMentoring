import { createPortal } from 'react-dom'
import { ReactNode, forwardRef, useRef, useImperativeHandle } from 'react'
type ModalProps = {
  children: ReactNode
  onClose: () => void
}

export type ModalHandle = {
  open: () => void
}
const Modal = forwardRef<ModalHandle, ModalProps>(({ children, onClose }, ref) => {
  const dialog = useRef<HTMLDialogElement>(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        open: () => {
          if (dialog.current) {
            dialog.current.showModal()
          }
        },
      }
    },
    []
  )
  return createPortal(
    <dialog
      className=" fixed px-4 py-8 bg-[#6b5e81] rounded text-white max-w-lg w-full backdrop:blur-md "
      onClose={onClose}
      ref={dialog}
    >
      {children}
    </dialog>,
    document.getElementById('modal')!
  )
})

export default Modal
