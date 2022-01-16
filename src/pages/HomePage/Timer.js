import React from 'react'
import { View } from 'react-native'
import { tw } from '~/src/libs/tailwind'
import MenuIcon from '~/assets/icons/menu.svg'
import PlayIcon from '~/assets/icons/play.svg'
import StopIcon from '~/assets/icons/stop.svg'
import { ProgressBar, Text } from '~/src/components/display'
import { IconButton } from '~/src/components/inputs'

const dd = val => {
  const str = `${val}`
  return `${'0'.repeat(Math.max(0, 2 - str.length))}${str}`
}

const Timer = ({ seconds, name, style = undefined }) => {
  const value = React.useMemo(_ => Math.random(), [])
  const [countdown, setCountdown] = React.useState(0)
  const [running, setRunning] = React.useState(false)
  const intervalRef = React.useRef(null)

  const time = React.useMemo(_ => {
    const ss = countdown % 60
    const mm = Math.floor(countdown / 60) % 60
    const hh = Math.floor(countdown / 3600)

    return `${dd(hh)}:${dd(mm)}:${dd(ss)}`
  }, [countdown])

  const doStart = _ => {
    intervalRef.current = setInterval(_ => setCountdown(val => val - 1), 1000)
    setRunning(true)
  }

  const doStop = _ => {
    clearInterval(intervalRef.current)
    setCountdown(seconds)
    setRunning(false)
  }

  React.useEffect(_ => {
    setCountdown(seconds)
  }, [seconds])

  React.useEffect(_ => {
    return _ => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return <View style={[tw('border-2 rounded-md border-light px-2'), style]}>
    <View style={tw('h-6 flex justify-center items-center')}>
      <Text>{name}</Text>
    </View>
    <View style={tw('flex flex-row items-center justify-between')}>
      <IconButton icon={MenuIcon} />
      <Text style={{ ...tw('text-4xl mt-1'), fontFamily: 'RobotoMono_400Regular' }}>
        {time}
      </Text>
      {running
        ? <IconButton icon={StopIcon} onPress={doStop} />
        : <IconButton icon={PlayIcon} onPress={doStart} />}
    </View>
    <View style={tw('h-6 flex justify-center')}>
      <ProgressBar value={value} />
    </View>
  </View>
}

export default Timer