import React from 'react'
import ModalDialog from '~/src/components/utils/ModalDialog'

const ContextMenu = ({ visible, onRequestClose, children }) => {
  return <ModalDialog visible={visible} onRequestClose={onRequestClose}>
    {children}
  </ModalDialog>
}

export default ContextMenu
