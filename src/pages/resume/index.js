import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import styles from './index.module.scss'
import Translate, { translate } from '@docusaurus/Translate'
import { Button } from '@nextui-org/react'
import { NextUIProvider } from '@nextui-org/react'

export default function Resume() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout>
      <NextUIProvider>
        <Translate id="resume.testText" description="Hello world">
          Hello world
        </Translate>
        <Button color="primary">Button</Button>
      </NextUIProvider>
    </Layout>
  )
}
