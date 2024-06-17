import SessionList from '../components/SessionList/SessionList'
import { SESSIONS as DUMMY_DATA } from '../data/dummy-sessions'

const Session = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold text-purple-300">Available mentoring sessions</h2>
      <p className="my-4 text-purple-200">
        From an one-on-one introduction to React's basics all the way up to a deep dive into state mechanics - we got
        just the right session for you!
      </p>
      <SessionList data={DUMMY_DATA} />
    </>
  )
}

export default Session
