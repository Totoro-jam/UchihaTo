import { useColorMode } from '@docusaurus/theme-common'

const { colorMode } = useColorMode()

const githubsrc =
  colorMode === 'dark' ? 'img/github_dark.png' : 'img/github_light.png'

export default function NavBarGithubItem() {
  return <img src={{ githubsrc }} alt="" />
}
