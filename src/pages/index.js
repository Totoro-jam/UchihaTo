import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import { NextUIProvider, Card, CheckboxGroup, Checkbox } from '@nextui-org/react'

import Heading from '@theme/Heading'
import styles from './index.module.scss'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      <NextUIProvider>
        <div className={clsx('container mx-auto lg:w-3/4')}>
          <Card className="px-12 py-6 my-10">
            <CheckboxGroup label="本页面待做事项" defaultValue={['']}>
              <Checkbox value="1">首页的展现形式?</Checkbox>
              <Checkbox value="2">交互设计形式？</Checkbox>
              <Checkbox value="3">flow 的实践应用于本次开发</Checkbox>
              <Checkbox value="4">tailwindcss的熟悉和实践应用</Checkbox>
              <Checkbox value="5">animated icons的合理使用</Checkbox>
              <Checkbox value="6">其他第三库的合理使用，包括不限于ui库，各种动效库</Checkbox>
              <Checkbox value="7">nextUI后期的优化</Checkbox>
            </CheckboxGroup>
          </Card>
        </div>
        <main>
          <HomepageFeatures />
        </main>
      </NextUIProvider>
    </Layout>
  )
}
