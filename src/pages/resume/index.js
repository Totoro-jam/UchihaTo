import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import styles from './index.module.scss'
import Translate, {translate} from '@docusaurus/Translate';

export default function Resume() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout>
      <Translate id="resume.testText" description='Hello world'>Hello world</Translate>
    </Layout>
  )
}
