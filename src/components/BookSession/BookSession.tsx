import Button from '../Button/Button'
import Modal, { ModalHandle } from '../Modal/Modal'
import { FormEvent, useEffect, useRef } from 'react'
import { Session, useSessionsContext } from '../../store/context-session'
import Input from '../Input/Input'
type BookSessionProps = {
  onDone: () => void
  session: Session
}

let content: string

const BookSession = ({ onDone, session }: BookSessionProps) => {
  const ctx = useSessionsContext()

  const modal = useRef<ModalHandle>(null)
  useEffect(() => {
    if (modal.current) {
      modal.current.open()
    }
  }, [])

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    console.log(data)
    ctx.addSession(session)
    onDone()
  }

  return (
    <Modal ref={modal} onClose={onDone}>
      <form onSubmit={handleSubmitForm}>
        <h2 className="text-2xl font-semibold">Book session</h2>
        <Input type="text" id="name" name="name" label="your name" />
        <Input type="email" id="email" name="email" label="your email" />

        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={onDone} className="bg-transparent hover:bg-transparent hover:text-purple-200">
            cancel
          </Button>
          <Button type="submit" className="text-black">
            book session
          </Button>
        </div>
      </form>
      {content && <div>{content}</div>}
    </Modal>
  )
}

export default BookSession
