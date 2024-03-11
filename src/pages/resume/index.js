import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { useColorMode } from '@docusaurus/theme-common'
import { Link } from 'react-router-dom'
import { Chrono } from 'react-chrono'
import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './index.module.scss'
import SurveyForm from '@site/src/components/SurveyForm'
import Translate, { translate } from '@docusaurus/Translate'
import {
  NextUIProvider,
  Button,
  Image,
  RadioGroup,
  Radio,
  Card,
  Avatar,
  Link as NextUILink,
  useBreadcrumbItem,
  Divider,
} from '@nextui-org/react'
import TypeIt from 'typeit-react'
import { Fragment } from 'react'
import 'animate.css'
import { useState } from 'react'

function CustomH2({ children }) {
  return (
    <h2
      className={clsx(
        styles.landingSectionTitle,
        'mb-20',
        'max-w-sm md:max-w-max mx-auto md:mx-0',
        'text-center md:text-left relative text-3xl font-bold mb-10 pt-4 md:pt-0 md:w-max',
      )}>
      <span className="-rotate-5 skew-y-5 -translate-y-4 italic underline decoration-indigo-500">
        {children}
      </span>
    </h2>
  )
}

function AvatarCustom({ className }) {
  const [test, setTest] = useState('')
  const handleClick = () => {
    setTest('animate__animated animate__fadeOutLeft')
  }
  return (
    <Avatar
      onClick={handleClick}
      className={clsx(
        'mx-auto w-60 h-60 -rotate-3 -translate-y-6',
        className,
        test,
      )}
      alt="my avatar"
      radius="md"
      src={useBaseUrl('/img/uchihato2.png')}
    />
  )
}

function Hero() {
  return (
    <>
      <div
        className={clsx(
          'relative w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1',
          styles.heroElem,
          'mt-[40px]',
        )}
        style={{ maxWidth: '1200px' }}>
        <p className="flex items-center h-[48px] text-xl">
          Hey, I'm{' '}
          {'UchihaTo'.split('').map((letter, index) => {
            return (
              <span
                key={index}
                className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim">
                {letter}
              </span>
            )
          })}
          .
        </p>
        <h1 className="inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
          I enjoy <span className="heroShiny1 text-fun-pink">building</span> and{' '}
          <span className="heroShiny2 text-fun-pink">designing</span> for the
          web.
          <img
            className={clsx(
              styles.hreoSq,
              styles.sqD,
              'squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]',
            )}
            style={{ animationDelay: '0.1s' }}
            src={useBaseUrl('/img/hero/html.svg')}
          />
          <img
            className={clsx(
              styles.hreoSq,
              styles.sqD,
              'squiggle-hero-nextjs hidden top-[75px] right-0 w-11',
            )}
            style={{ animationDelay: '0.2s' }}
            src={useBaseUrl('/img/hero/nextjs.svg')}
          />
          <img
            className={clsx(
              styles.hreoSq,
              styles.sqD,
              'bottom-[-300px] -right-1/4 sm:right-[-20%] lg:bottom-[-310px] lg:right-[-120px] w-[400px]',
            )}
            style={{ animationDelay: '0.3s' }}
            src={useBaseUrl('/img/hero/brayden.svg')}
          />
          <img
            className={clsx(
              styles.hreoSq,
              styles.sqD,
              'hidden sm:block bottom-[-340px] left-[-180px]',
            )}
            style={{ animationDelay: '0.4s' }}
            src={useBaseUrl('/img/hero/coder.svg')}
          />
          <img
            className={clsx(
              styles.hreoSq,
              styles.sqD,
              'hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px]',
            )}
            style={{ animationDelay: '0.5s' }}
            src={useBaseUrl('/img/hero/js.svg')}
          />
          <img
            className={clsx(
              styles.hreoSq,
              styles.sqD,
              'bottom-[-320px] right-[65%] sm:right-[45%]',
            )}
            style={{ animationDelay: '0.6s' }}
            src={useBaseUrl('/img/hero/dino.svg')}
          />
          <img
            className={clsx(
              styles.hreoSq,
              styles.sqD,
              'right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]',
            )}
            style={{ animationDelay: '0.7s' }}
            src={useBaseUrl('/img/hero/paintbrush.svg')}
          />
          <img
            className={clsx(
              styles.hreoSq,
              styles.sqD,
              'squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]',
            )}
            src={useBaseUrl('/img/hero/pop1.svg')}
          />
          <img
            className={clsx(
              styles.hreoSq,
              styles.sqD,
              'left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40',
            )}
            style={{ animationDelay: '0.9s' }}
            src={useBaseUrl('/img/hero/code.svg')}
          />
        </h1>
        <NextUILink className="hover:no-underline" href="#basicInfo">
          <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
            Tell me more
          </div>
        </NextUILink>
      </div>
    </>
  )
}

const projects = [
  {
    preview: '/img/portfolio_3d.jpg',
    theme: 'btnBackBlueViolet',
    link1: 'https://github.com/exslym/My-Portfolio-3D/',
    link2: 'https://exslym.github.io/My-Portfolio-3D/',
    name: '3D Dev Portfolio',
    description:
      'An outstanding and impressive 3D Developer Portfolio website using React, 3D-graphics and animations with ThreeJS and Framer Motion, and TailwindCSS!',
  },
  {
    preview: '/img/portfolio_3d.jpg',
    theme: 'btnBackDarkBlue',
    link1: 'https://github.com/exslym/3D-AI-Project/',
    link2: 'https://exslym.github.io/3D-AI-Project/',
    name: '3D T-Shirts AI Design',
    description:
      'A website project where you can make custom design t-shirts in 3D with the help of AI in real-time. You can also choose color or upload your own images to make your T-shirt truly unique.',
  },
  {
    preview: '/img/portfolio_3d.jpg',
    theme: 'btnBackDarkBlue',
    link1: 'https://github.com/exslym/ecommerce/',
    link2: 'https://e-commerce-exs.payloadcms.app/',
    name: 'E-Commerce Tech Shop',
    description:
      'A tech-related e-commerce shop page that even guests can visit, allowing users to explore products, apply category filters, and see more products with pagination, which is key for performance in e-commerce projects.',
  },
  {
    preview: '/img/portfolio_3d.jpg',
    theme: 'btnBackBlueViolet',
    link1: 'https://github.com/exslym/eventlify/',
    link2: 'https://eventlify-exs.vercel.app/',
    name: 'Eventlify',
    description:
      'The events web application stands as a comprehensive, full-stack platform for managing events taking place globally. With this app you have the capability to purchase tickets for any event published there or even initiate and manage your own events.',
  },
]

const skills = [
  {
    title: 'HTML',
    icon: '/img/html5-original.svg',
  },
  {
    title: 'CSS',
    icon: '/img/css3-original.svg',
  },
  {
    title: 'Javascript',
    icon: '/img/javascript-original.svg',
  },
  {
    title: 'Sass',
    icon: '/img/sass-original.svg',
  },
  {
    title: 'TailwindCSS',
    icon: '/img/tailwindcss-plain.svg',
  },
  {
    title: 'React',
    icon: '/img/react-original.svg',
  },
  {
    title: 'NextJS',
    icon: '/img/nextjs-original-wordmark.svg',
  },
  {
    title: 'Typescript',
    icon: '/img/typescript-original.svg',
  },
  {
    title: 'NodeJS',
    icon: '/img/nodejs-original.svg',
  },
  {
    title: 'Git',
    icon: '/img/git-original.svg',
  },
  {
    title: 'Firebase',
    icon: '/img/firebase-plain.svg',
  },
  {
    title: 'Figma',
    icon: '/img/figma-original.svg',
  },
]

function Skills() {
  return (
    <div className="flex flex-col md:flex-row justify-between relative">
      <h2 className="relative text-3xl w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 ">
        I got the experience.
        <br />
        Here is my toolbelt for success.
        <img
          className={clsx(
            styles.sqD,
            'bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-20px] z-[-10]',
          )}
          src={useBaseUrl('/img/laptop.svg')}
        />
        <img
          className={clsx(
            styles.sqD,
            'hidden md:block top-[140px] right-0 lg:top-[105px]',
          )}
          src={useBaseUrl('/img/coding.svg')}
        />
        <img
          className={clsx(
            styles.sqD,
            'hidden md:block top-[200px] right-[50px] lg:top-[170px] lg:right-[50px]',
          )}
          src={useBaseUrl('/img/youtube.svg')}
        />
        <img
          className={clsx(styles.sqD, 'top-[-15px] right-[-15px]')}
          src={useBaseUrl('/img/fillStar.svg')}
        />
      </h2>
      <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
        {skills.map((item, index) => {
          return (
            <div
              title={item.title}
              key={index}
              className="w-10 mx-auto flex items-center flex-col justify-center">
              <img src={useBaseUrl(item.icon)} style={item.style} />
              <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
                {item.title}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function BasicInfo() {
  return (
    <div className="lg:grid grid-flow-col grid-rows-3 grid-cols-4 gap-4">
      <div className="row-span-3 relative">
        <AvatarCustom className="absolute border-solid border-2 border-cyan-400 top-0 z-[10px] rotate-3" />
        <AvatarCustom className="absolute border-solid border-2 border-cyan-400 top-0 z-[15px] -rotate-6" />
        <AvatarCustom className="absolute border-solid border-2 border-cyan-400 top-0 z-[19px] -rotate-3" />
        <AvatarCustom className="absolute border-solid border-2 border-cyan-400 top-0 z-[20px] rotate-6" />
      </div>
      <div className="col-span-3 bg-cyan-400">
        不对自己设限,因此永远在路上.好的工作是双向奔赴,相遇相知方知恨晚.你成长我,我成为你!
      </div>
      <div className="row-span-2 col-span-3 bg-red-500">占位</div>
    </div>
  )
}

function WorkVertical() {
  const items = [
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
      url: 'http://www.history.com',
      cardSubtitle:
        'Men of the British Expeditionary Force (BEF) wade out to..',
      cardDetailedText:
        'Men of the British Expeditionary Force (BEF) wade out to..',
      media: {
        type: 'IMAGE',
        source: {
          url: 'http://someurl/image.jpg',
        },
      },
    },
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
      url: 'http://www.history.com',
      cardSubtitle:
        'Men of the British Expeditionary Force (BEF) wade out to..',
      cardDetailedText:
        'Men of the British Expeditionary Force (BEF) wade out to..',
      media: {
        type: 'IMAGE',
        source: {
          url: 'http://someurl/image.jpg',
        },
      },
    },
  ]

  return (
    <div className="w-full">
      <BrowserOnly>
      {() => <Chrono items={items} mode="VERTICAL_ALTERNATING" />}
      </BrowserOnly>
    </div>
  )
}

export default function Resume() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout>
      <NextUIProvider>
        <Hero />
        <div className="container overflow-x-hidden mx-auto max-w-screen-xl">
          <Divider className="mt-[80px]" />
          <div
            id="basicInfo"
            className={clsx(styles.basicInfo, 'w-full pt-5 mb-[60px]')}>
            <CustomH2>嗨！这是我的简介</CustomH2>
            <BasicInfo></BasicInfo>
          </div>

          <div className="w-full pt-5 mb-[60px]">
            <CustomH2>我掌握的技能</CustomH2>
            <Skills />
          </div>

          <div className="w-full pt-5 mb-[60px]">
            <CustomH2>工作经历</CustomH2>
            <div className="mt-5 flex flex-col gap-3 text-slate-500 text-xl font-semibold">
              <p>
                Throughout all my work, I've been leveling up my skills and
                teaming up with smart people. Here's the rundown:
              </p>
            </div>
            <div className="mt-5 flex">
              <WorkVertical />
            </div>
          </div>

          <div className="w-full pt-5 mb-[60px]">
            <CustomH2>项目经历</CustomH2>
            <section className="max-container !pb-4">
              <h1 className="head-text mt-2">
                My{' '}
                <span className="blue-gradient_text font-semibold drop-shadow">
                  Projects
                </span>
              </h1>
              <div className="mt-5 flex flex-col gap-3 text-slate-500 text-xl font-semibold">
                <p>
                  I've embarked on numerous projects throughout the years, but
                  these are the ones I hold closest to my heart. Many of them
                  are open-source, so if you come across something that piques
                  your interest, feel free to explore the codebase and
                  contribute your ideas for further enhancements. Your
                  collaboration is highly valued!
                </p>
              </div>

              <div className="flex flex-wrap my-20 gap-16 justify-center">
                {projects.map((project) => (
                  <div className="lg:w-[400px] w-full" key={project.name}>
                    <div
                      className={clsx(
                        'w-64 aspect-[1.5]',
                        styles.blockContainer,
                      )}>
                      <div
                        className={clsx(
                          `rounded-[0.8rem]`,
                          styles[project.theme],
                          styles.btnBackAlt,
                        )}
                      />
                      <div
                        className={clsx(
                          'p-1 rounded-[0.8rem] flex justify-center items-center overflow-hidden',
                          styles.btnFront,
                        )}>
                        <img
                          src={useBaseUrl(project.preview)}
                          alt="Project Preview"
                          className="w-full h-full rounded-[0.6rem] max-w-none"
                        />
                      </div>
                    </div>
                    <div className="mt-7 flex flex-col">
                      <h4 className="text-2xl font-poppins font-semibold">
                        {project.name}
                      </h4>
                      <p className="mt-2 text-slate-500">
                        {project.description}
                      </p>
                      <div className="mt-2 flex items-center gap-3 font-poppins">
                        <Link
                          to={project.link1}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-slate-500 hover:text-blue-400 px-2 rounded-md border border-slate-500 hover:border-blue-400">
                          GitHub
                        </Link>
                        <Link
                          to={project.link2}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-slate-500 hover:text-blue-400 px-2 rounded-md border border-slate-500 hover:border-blue-400">
                          Website
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
        <SurveyForm />
      </NextUIProvider>
    </Layout>
  )
}
