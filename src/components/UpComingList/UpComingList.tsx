import { useRef, useEffect } from 'react'
import Modal, { ModalHandle } from '../Modal/Modal'
import UpComingItem from './UpComingItem'
import { useSessionsContext } from '../../store/context-session'
import Button from '../Button/Button'

type UpComingList = {
  onDone: () => void
}
const UpComingList = ({ onDone }: UpComingList) => {
  const modal = useRef<ModalHandle>(null)
  const ctx = useSessionsContext()
  useEffect(() => {
    if (modal.current) {
      modal.current.open()
    }
  }, [])
  return (
    <Modal ref={modal} onClose={onDone}>
      <h2 className="text-2xl font-semibold"> Upcoming Sessions</h2>
      <ul>
        {ctx.upCommpingState.length ? (
          ctx.upCommpingState.map((item) => (
            <li className="rounded list-none" key={item.id}>
              <UpComingItem {...item} />
            </li>
          ))
        ) : (
          <li>No upcoming sessions</li>
        )}
      </ul>
      <Button className="block ml-auto mt-4" onClick={onDone}>
        Cancel
      </Button>
    </Modal>
  )
}

export default UpComingList
