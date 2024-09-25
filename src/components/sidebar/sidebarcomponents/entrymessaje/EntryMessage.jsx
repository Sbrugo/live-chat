import React from 'react'
import Icon from '@components/icon/Icon.jsx'

const EntryMessage = ({text}) => {
  return (
    <div className="entry-message">
        <Icon asset="message_icon" alt="Message" text={text}></Icon>
    </div>
  )
}

export default EntryMessage