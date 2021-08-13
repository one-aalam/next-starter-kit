import { FunctionComponent } from 'react'
import { MessageListProps } from './message.types'
import Message from './Message'

export const MessageList: FunctionComponent<MessageListProps> = ({
  messages,
}) => (
  <div className="app-messages absolute w-screen top-6 flex flex-col place-items-center justify-center z-10">
    {messages.map((message, index) => (
      <Message key={index} type={message.type} message={message.message} />
    ))}
  </div>
)

export default MessageList
