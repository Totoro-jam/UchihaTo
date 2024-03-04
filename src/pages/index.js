import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
// import HomepageFeatures from '@site/src/components/HomepageFeatures'
import SwitchTheme from '@site/src/components/SwitchTheme'
// import PhotoAlbum from '@site/src/components/PhotoAlbum'
// import Intro from '@site/src/components/Intro'
import useBaseUrl from '@docusaurus/useBaseUrl'
import {
  NextUIProvider,
  Card,
  CheckboxGroup,
  Checkbox,
  Button,
  Tooltip,
} from '@nextui-org/react'

import Heading from '@theme/Heading'
import styles from './index.module.scss'
import { Fragment, useEffect, useState } from 'react'

// Heading 和 其他常见的h1类似的元素有什么区别
// <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext()
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   )
// }

function CardContent() {
  return (
    <Fragment>
      <div className={clsx('container mx-auto lg:w-3/4')}>
        <Card className="px-12 py-6 my-10">
          <CheckboxGroup label="本页面待做事项" defaultValue={['']}>
            <Checkbox value="1">首页的展现形式?</Checkbox>
            <Checkbox value="2">交互设计形式？</Checkbox>
            <Checkbox value="3">flow 的实践应用于本次开发</Checkbox>
            <Checkbox value="4">tailwindcss的熟悉和实践应用</Checkbox>
            <Checkbox value="5">animated icons的合理使用</Checkbox>
            <Checkbox value="6">
              其他第三库的合理使用，包括不限于ui库，各种动效库
            </Checkbox>
            <Checkbox value="7">nextUI后期的优化</Checkbox>
          </CheckboxGroup>
        </Card>
      </div>
      <div className={clsx('container mx-auto lg:w-9/10')}>
        <Card className="px-12 py-6 my-10">
          <CheckboxGroup label="简历页面" defaultValue={['']}>
            <Checkbox value="1">基本信息</Checkbox>
            <dl>
              <dt>描述: 包含基本信息，相关联系方式</dt>
            </dl>
            <Checkbox value="2">技能简介</Checkbox>
            <dl>
              <dt>描述: 动画式各种技能的icon或者其他可视化的展现形式</dt>
            </dl>
            <Checkbox value="3">工作经历</Checkbox>
            <dl>
              <dt>描述: 封装成对应组件，有一定可视化展现工作经历</dt>
            </dl>
            <Checkbox value="4">项目经历</Checkbox>
            <dl>
              <dt>描述: 主要展示项目经历，可以对应跳转到对应demo live地址</dt>
            </dl>
            <Checkbox value="5">自我评价</Checkbox>
            <dl>
              <dt>描述: 暂定</dt>
            </dl>
            <Checkbox value="5">匹配度问卷调查</Checkbox>
            <dl>
              <dt>描述: 让有意向的人员通过匹配度问卷调查,来计算对应符合度</dt>
            </dl>
          </CheckboxGroup>
        </Card>
      </div>
    </Fragment>
  )
}

function LeftContent({ className = '' }) {
  return (
    <div className={clsx(className, 'mt-[120px] blur-lg')}>
      <h2 className="text-5xl">
        嗨！(*￣︶￣)
        <br />
        欢迎来到UchihaTo的website!
      </h2>
      <p>
        现在：我是一名前端开发工程师 <br />
        未来：我想成为一名全栈开发工程师
      </p>
      <p>
        我将在这里记录相关的内容，包括不限于一些思考、学习相关的内容、以及一些其他我觉得不错的东西。
        学习笔记栏目中：将为我自己学习和巩固提供痕迹，让我在需要的时候快速自我检索到想要的内容。
        资源栏目中： 我将记录和推荐一些我使用过真的很不错的工具或者网站。
      </p>
      <Tooltip
        key={'left-start'}
        placement={'top-start'}
        content={'去查看简历，是否给我工作机会'}
        color="secondary">
        <Button
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
          Hire me
        </Button>
      </Tooltip>
      <Button color="primary" variant="shadow">
        more
      </Button>
    </div>
  )
}

function RightContent({ className = '' }) {
  const [isMac] = useState(() => isMacFlag())

  function isMacFlag() {
    const macReg = /mac os x.*?([\.\_\d]+)/
    let isBrowser = typeof window !== 'undefined'
    let fallbackUserAgent = isBrowser ? navigator.userAgent : ''
    let userAgent = fallbackUserAgent.toLowerCase()
    console.log(32, macReg.test(userAgent))
    return macReg.test(userAgent)
  }

  return (
    <div className={clsx('relative lg:h-full', className)}>
      <div className={clsx('absolute top-[40%] left-[16%] z-10', styles.sqD)}>
        <SwitchTheme />
      </div>
      <img
        className={clsx(
          'absolute object-center  w-[240px] h-[200px] object-cover top-[50%] -right-10',
          styles.sqD,
        )}
        style={{ animationDelay: '0.1s' }}
        src={useBaseUrl('/img/index/ipod.svg')}
        alt=""
      />
      <img
        className={clsx(
          'absolute object-center w-[660px] h-[260px] object-cover inset-0 m-auto -z-[6]',
        )}
        style={{ animationDelay: '' }}
        src={useBaseUrl(`/img/index/${isMac ? 'mac' : 'windows'}.svg`)}
        alt=""
      />
      <img
        className={clsx(
          'absolute object-center w-[240px] h-[120px] object-cover top-[75%] right-[20%] z-10',
          styles.sqD,
        )}
        style={{ animationDelay: '0.2s' }}
        src={useBaseUrl('/img/index/notes.svg')}
        alt=""
      />
      <img
        className={clsx(
          'absolute object-center w-[100px] h-[220px] object-cover top-[50%] left-[5%] z-10',
          styles.sqD,
        )}
        style={{ animationDelay: '0.3s' }}
        src={useBaseUrl('/img/index/just-do-it.svg')}
        alt=""
      />
      <img
        className={clsx(
          'absolute object-center w-[240px] h-[100px] object-cover top-[75%] left-[15%] z-10',
          styles.sqD,
        )}
        style={{ animationDelay: '0.4s' }}
        src={useBaseUrl('/img/index/camera.svg')}
        alt=""
      />
    </div>
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
        <div className="container mx-auto">
          <div className="lg:h-[680px] grid sm:grid-cols-1 lg:grid-cols-2 sm:grid-rows-1 lg:grid-rows-1 auto-cols-max">
            <div className="col-span-1 sm:row-span-1 object-cover bg-[url('/static/img/index/office-bg.svg')] bg-no-repeat bg-origin-border bg-center bg-container bg-[length:100%_100%]">
              <LeftContent />
            </div>
            <div className="hidden lg:block lg:col-span-1">
              <RightContent />
            </div>
          </div>
        </div>
        <CardContent />
        {/* <main></main> */}
      </NextUIProvider>
    </Layout>
  )
}
