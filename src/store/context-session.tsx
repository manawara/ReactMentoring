import { ReactNode, createContext, useContext, useReducer } from 'react'
type SessionProvider = {
  children: ReactNode
}

export type Session = {
  id: string
  title: string
  summary: string
  description: string
  date: string
  image: string
  duration: number
}

type SessionState = {
  upCommpingState: Session[]
}
type SessionContextValue = SessionState & {
  addSession: (session: Session) => void
  cancelSession: (sessionId: string) => void
}
type ActionSessionAdd = {
  type: 'SESSION_ADD'
  session: Session
}

type ActionSessionCancel = {
  type: 'SESSION_CANCEL'
  sessionId: string
}

type ActionSession = ActionSessionAdd | ActionSessionCancel

const reducerSession = (state: SessionState, action: ActionSession) => {
  switch (action.type) {
    case 'SESSION_ADD': {
      if (state.upCommpingState.some((item) => item.id === action.session.id)) {
        return state
      }
      return {
        ...state,
        upCommpingState: [...state.upCommpingState, action.session],
      }
    }
    case 'SESSION_CANCEL': {
      const upCommpingState = [...state.upCommpingState]

      const fileredSession = upCommpingState.filter((el) => el.id !== action.sessionId)
      return {
        ...state,
        upCommpingState: fileredSession,
      }
    }
  }

  return state
}
const ContextSession = createContext<SessionContextValue | null>(null)
export function useSessionsContext() {
  const context = useContext(ContextSession)
  if (!context) {
    throw new Error('useSessionsContext must be used within a SessionProvider')
  }
  return context
}

const SessionProvider = ({ children }: SessionProvider) => {
  const [stateSession, dispatch] = useReducer(reducerSession, {
    upCommpingState: [],
  })

  const addSession = (session: Session) => {
    dispatch({ type: 'SESSION_ADD', session })
  }
  const cancelSession = (sessionId: string) => {
    dispatch({ type: 'SESSION_CANCEL', sessionId })
  }
  const ctxValue = {
    upCommpingState: stateSession.upCommpingState,
    addSession,
    cancelSession,
  }
  return <ContextSession.Provider value={ctxValue}>{children}</ContextSession.Provider>
}

export default SessionProvider
