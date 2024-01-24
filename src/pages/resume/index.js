import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './index.module.scss'
import Translate, { translate } from '@docusaurus/Translate'
import {
  NextUIProvider,
  Button,
  Image,
  CheckboxGroup,
  Checkbox,
  Card,
  Avatar
} from '@nextui-org/react'
import TypeIt from 'typeit-react'

function CustomH2({ children }) {
  return (
    <h2 className="my-6 text-center text-4xl italic font-semibold underline underline-offset-8 decoration-sky-500">
      {children}
    </h2>
  )
}

function AvatarCustom() {
  return (
    <Avatar
      className='mx-auto rounded-full w-60 h-60'
      alt="my avatar"
      src={useBaseUrl('/img/uchihato2.png')}
    />
  )
}

function BasicInfo() {
  return (
    <div class="lg:grid grid-rows-3 grid-flow-col gap-4">
      <div class="w-50 row-span-3">
        <AvatarCustom />
      </div>
      <div class="col-span-2">02</div>
      <div class="row-span-2 col-span-2">03</div>
    </div>
  )
}

export default function Resume() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout>
      <NextUIProvider>
        <div className="container mx-auto">
          <div className="basic-info">
            <CustomH2>基本信息</CustomH2>
            <BasicInfo t1="lk" test="lksdjl">hello world</BasicInfo>
          </div>

          <div className="basic-info">
            <CustomH2>技能介绍</CustomH2>
          </div>

          <div className="basic-info">
            <CustomH2>工作经历</CustomH2>
          </div>

          <div className="basic-info">
            <CustomH2>项目经历</CustomH2>
          </div>

          <div className="basic-info">
            <CustomH2>自我评价</CustomH2>
          </div>
        </div>
      </NextUIProvider>
    </Layout>
  )
}
