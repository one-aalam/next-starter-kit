import { createContext, FunctionComponent, useState } from 'react'
import { MessageProps } from './message.types'

export type MessageContextProps = {
  messages: MessageProps[]
  handleMessage: (MessageProps) => void
}

export const MessageContext = createContext<Partial<MessageContextProps>>({})

export const MessageProvider: FunctionComponent = ({ children }) => {
  const [messages, setMessages] = useState<MessageProps[]>([])
  const handleMessage = (message: MessageProps) => {
    setMessages((prevMessages) => prevMessages.concat([message]))
    setTimeout(() => {
      setMessages((prevMessages) => prevMessages.slice(1))
    }, 5000)
  }

  return (
    <MessageContext.Provider value={{ messages, handleMessage }}>
      {children}
    </MessageContext.Provider>
  )
}
