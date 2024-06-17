import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../components/Button/Button'
import { SESSIONS } from '../data/dummy-sessions'
import BookSession from '../components/BookSession/BookSession'
import { formatedDate } from '../lib/helper'

const SessionDetails = () => {
  const [openBookSession, setOpenBookSession] = useState(false)
  const params = useParams<{ id: string }>()
  const sessionItem = SESSIONS.find((el) => el.id === params.id)

  if (!sessionItem) {
    return <div>Not found session!</div>
  }

  const { title, image, date, description } = sessionItem
  const handleOpenBook = () => {
    setOpenBookSession(true)
  }
  const handleCloseBook = () => {
    setOpenBookSession(false)
  }

  return (
    <>
      {openBookSession && <BookSession onDone={handleCloseBook} session={sessionItem} />}
      <article>
        <div className="flex flex-col gap-8 sm:flex-row">
          <img src={image} alt={title} className="max-w-80 rounded" />
          <div>
            <h2 className="text-4xl font-bold text-purple-100">{title}</h2>
            <p className="mb-2 text-purple-200">{formatedDate(date)}</p>
            <Button onClick={handleOpenBook}>book session</Button>
          </div>
        </div>
        <p className="whitespace-pre-wrap p-4 bg-[#322e3a] text-purple-100 text-lg my-8">{description}</p>
      </article>
    </>
  )
}

export default SessionDetails
