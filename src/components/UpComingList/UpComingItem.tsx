import { formatedDate } from '../../lib/helper'
import { useSessionsContext } from '../../store/context-session'
import Button from '../Button/Button'

type UpComingItem = {
  id: string
  title: string
  summary: string
  date: string
}

const UpComingItem = ({ id, title, summary, date }: UpComingItem) => {
  const ctx = useSessionsContext()
  return (
    <div className="bg-[#3b3545] mt-4 rounded p-4">
      <h3 className="text-purple-200 text-xl font-semibold">{title}</h3>
      <p className="my-1">{summary}</p>
      <p className="text-sm mb-2">{formatedDate(date)}</p>
      <Button
        className="block ml-auto bg-transparent hover:bg-transparent hover:text-purple-200"
        onClick={() => ctx.cancelSession(id)}
      >
        Cancel
      </Button>
    </div>
  )
}

export default UpComingItem
