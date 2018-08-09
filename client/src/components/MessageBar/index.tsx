import React from 'react'
import { MessageBar } from 'office-ui-fabric-react/lib/MessageBar'
import { Link } from 'office-ui-fabric-react/lib/Link'

export default ({ messageBarProps, dismiss }) =>
  messageBarProps.isVisible ? (
    <MessageBar
      dismissButtonAriaLabel="Close"
      messageBarType={messageBarProps.style}
      onDismiss={dismiss}
    >
      {messageBarProps.text}
      {messageBarProps.link && (
        <Link href={messageBarProps.link.url}>{messageBarProps.link.text}</Link>
      )}
    </MessageBar>
  ) : null