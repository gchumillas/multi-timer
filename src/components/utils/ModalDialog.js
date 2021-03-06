import React from 'react'
import { Modal, Pressable, StyleSheet, View, StatusBar, KeyboardAvoidingView } from 'react-native'
import { tw } from '~/src/libs/tailwind'

const ModalDialog = ({ visible = false, onRequestClose = undefined, children }) => {
  return <Modal animationType="fade" transparent visible={visible} onRequestClose={onRequestClose} statusBarTranslucent>
    <Pressable onPress={onRequestClose}>
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
        <View onStartShouldSetResponder={_ => true} style={styles.box}>
          {children}
        </View>
      </KeyboardAvoidingView>
    </Pressable>
  </Modal>
}

const styles = StyleSheet.create({
  wrapper: tw('flex h-full justify-center items-center bg-black bg-opacity-60 px-8'),
  box: {
    ...tw('bg-white p-5 rounded-md w-11/12'),
    marginTop: StatusBar.currentHeight
  }
})

export default ModalDialog
