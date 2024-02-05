import React from 'react'
import { Switch } from '@nextui-org/react'
import { MoonIcon } from './MoonIcon'
import { SunIcon } from './SunIcon'
import { useColorMode } from '@docusaurus/theme-common'

export default function SwitchTheme() {
  const {colorMode, setColorMode } = useColorMode()
  
  function change(event) {
    console.log(23, '点击了', event.target.checked)
    event.target.checked ? setColorMode('light') : setColorMode('dark')
  }

  return (
    <Switch
      onChange={change}
      defaultSelected={colorMode === 'light'}
      size="lg"
      color="secondary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}>
    </Switch>
  )
}
