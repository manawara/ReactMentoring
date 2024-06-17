import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import UpComingList from '../UpComingList/UpComingList'
const Header = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }
  return (
    <header className="flex justify-between py-8">
      <h1 className="text-purple-100 text-2xl">ReactMentoring</h1>
      <nav>
        <ul className="flex items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-purple-500 pb-1 border-b border-purple-500 capitalize' : 'text-purple-500 capitalize'
              }
              end
            >
              our mission
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              to="/session"
              className={({ isActive }) =>
                isActive ? 'text-purple-500 capitalize pb-1 border-b border-purple-500' : 'text-purple-500 capitalize'
              }
            >
              browse session
            </NavLink>
          </li>

          <li>
            <Button onClick={handleOpenModal}>upcomming sessions</Button>
          </li>
        </ul>
      </nav>

      {openModal && <UpComingList onDone={handleCloseModal} />}
    </header>
  )
}

export default Header
