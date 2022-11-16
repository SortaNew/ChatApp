import React, { useState, useEffect } from 'react'
import { createConsumer } from "@rails/actioncable"
const consumer = createConsumer()

function ChatRoom({user}) {

  const [messages, setMessages] = useState([])
  const [messageInput, setMessageInput] = useState('')
  const [channel, setChannel] = useState(null)

  useEffect(() => {
    if (user) {
      fetch('/messages')
      .then(res => res.json())
      .then(messages => setMessages(messages))
    }
  }, [user])

  useEffect(() => {
    
    if (user) {
        console.log(user)
      const newChannel = consumer.subscriptions.create({ channel: "ChatChannel", room: "Breakfast Club" },
      {
        received: (data) => {
          setMessages(oldMessages => [...oldMessages, data])
          console.log("bladasf", data)
        }
      })

      setChannel(newChannel)
    }
  }, [user])

  function handleMessageInputChange(e) {
    setMessageInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (user){
    channel.send({content: messageInput})
    setMessageInput('')
    }
  }
  console.log(messages)
  return (
    <div>

      <h3>Cat Chat Room:</h3>

      {messages.map((message, i) => {
        if(message?.user?.username)
        return(
      <p key={i}>{message.user.username}: {message.content} - {message.created_at}</p>)}
      )  
      }
      <form onSubmit={handleSubmit}>

        <input type="text" value={messageInput} onChange={handleMessageInputChange} />

      </form>

    </div>
  )
}

export default ChatRoom