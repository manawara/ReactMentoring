import SessionItem from './SessionItem'

export type SessionItem = {
  id: string
  title: string
  summary: string
  description: string
  duration: number
  date: string
  image: string
}

type SessionProps = {
  data: SessionItem[]
}

const SessionList = ({ data }: SessionProps) => {
  return (
    <ul className="grid sm:grid-cols-2 max-w-3xl mx-auto gap-4">
      {data.map((item) => (
        <li key={item.id}>
          <SessionItem {...item} />
        </li>
      ))}
    </ul>
  )
}

export default SessionList
