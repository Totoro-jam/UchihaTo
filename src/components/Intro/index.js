import React from 'react'
import clsx from 'clsx'
import { SiNodeDotJs } from '@react-icons/all-files/si/SiNodeDotJs'
import {
  HeartIcon,
  MoonIcon,
  StarIcon,
  SunIcon,
} from '@heroicons/react/24/solid'
import { SiReact } from '@react-icons/all-files/si/SiReact'
import { SiShopify } from '@react-icons/all-files/si/SiShopify'
import NextJs from '@site/static/img/nextjs.svg'
import { SiTailwindcss } from '@react-icons/all-files/si/SiTailwindcss'
import { Link } from 'react-router-dom'

function Badge({ children, size = 'md', style = 'plain' }) {
  return (
    <span
      className={clsx(
        'inline-flex select-none items-center whitespace-nowrap rounded-md border-2 font-medium transition-all',
        {
          sm: 'px-1.5 py-0.5 text-xs',
          md: 'px-2.5 py-0.5 text-[13px]',
          lg: 'px-3 py-1 text-[13px]',
        }[size],
        {
          info: 'cursor-pointer border-cyan-700/20 bg-cyan-100 text-cyan-900 hfa:bg-cyan-200/90 d:border-cyan-400/30 d:bg-gradient-to-b d:from-cyan-900/90 d:to-cyan-900/90 d:text-cyan-100 d:hfa:from-cyan-900/70 d:hfa:to-cyan-900/70',
          success:
            'cursor-pointer border-green-700/20 bg-green-100 text-green-900 hfa:bg-green-200/90 d:border-green-400/30 d:bg-gradient-to-b d:from-green-900/90 d:to-green-900/90 d:text-green-100 d:hfa:from-green-900/70 d:hfa:to-green-900/70',
          attention:
            'cursor-pointer border-yellow-700/20 bg-yellow-100 text-yellow-900 hfa:bg-yellow-200/90 d:border-yellow-400/30 d:bg-gradient-to-b d:from-yellow-900/90 d:to-yellow-900/90 d:text-yellow-100 d:hfa:from-yellow-900/70 d:hfa:to-yellow-900/70',
          warning:
            'cursor-pointer border-orange-700/20 bg-orange-100 text-orange-900 hfa:bg-orange-200/90 d:border-orange-400/30 d:bg-gradient-to-b d:from-orange-900/90 d:to-orange-900/90 d:text-orange-100 d:hfa:from-orange-900/70 d:hfa:to-orange-900/70',
          critical:
            'cursor-pointer border-red-700/20 bg-red-100 text-red-900 hfa:bg-red-200/90 d:border-red-400/30 d:bg-gradient-to-b d:from-red-900/90 d:to-red-900/90 d:text-red-100 d:hfa:from-red-900/70 d:hfa:to-red-900/70',
          accent:
            'cursor-pointer border-pink-700/20 bg-pink-100 text-pink-900 hfa:bg-pink-200/90 d:border-pink-400/30 d:bg-gradient-to-b d:from-pink-900/90 d:to-pink-900/90 d:text-pink-100 d:hfa:from-pink-900/70 d:hfa:to-pink-900/70',
          plain:
            'cursor-pointer border-gray-700/20 bg-gray-100 text-gray-900 hfa:bg-gray-200/90 d:border-gray-400/30 d:bg-gradient-to-b d:from-gray-900/90 d:to-gray-900/90 d:text-gray-100 d:hfa:from-gray-900/70 d:hfa:to-gray-900/70',
          disabled:
            'cursor-not-allowed border-gray-700/5 bg-gray-100 text-gray-400',
        }[style],
      )}>
      {capitalize(children)}
    </span>
  )
}

const capitalize = (string) => {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : undefined
}

const HERO = {
  pre: 'Welcome to my site.',
  heading: (
    <>
      I'm <strong>Felix Tellmann</strong>, a Fullstack developer.
    </>
  ),
  tech: [
    {
      name: 'Next.js',
      Icon: ({ className }) => <NextJs className={className} />,
    },
    {
      name: 'Node.js',
      Icon: ({ className }) => <SiNodeDotJs className={className} />,
    },
    {
      name: 'Tailwind',
      Icon: ({ className }) => <SiTailwindcss className={className} />,
    },
    {
      name: 'Shopify',
      Icon: ({ className }) => <SiShopify className={className} />,
    },
  ],
  body: (
    <>
      I love writing code that takes things next level creating highly
      performant websites, automated API integrations, building my own
      dev-tools, and creating stunning user-experiences that makes you feel{' '}
      <em
        className="relative cursor-pointer before:absolute b:bottom-0 b:-z-10 b:h-3 b:w-full b:-rotate-2 b:animate-hint-hint b:bg-pink-400/70 b:blur-sm d:b:bg-pink-600"
        onClick={(e) => {
          e.currentTarget.classList.remove('before:absolute')
          party.confetti(e.currentTarget, { count: 40 })
        }}>
        WOW!
      </em>
      .<span className="mt-4 block" />I am always keen to learn and explore new
      technologies, frameworks and programming languages. Currently, I'm
      learning about{' '}
      <Link
        target="_blank"
        to="https://astro.build/"
        className="underline hfa:text-sky-500">
        Astro
      </Link>{' '}
      and{' '}
      <Link
        to="https://replicache.dev"
        target="_blank"
        className="underline hfa:text-sky-500">
        Replicache
      </Link>
      .
    </>
  ),
  cta1: {
    href: 'mailto:hello@flext.dev',
    name: "Let's Work",
  },
  cta2: {
    href: '/resume',
    name: 'Resume',
  },
}

export default function Intro() {
  return (
    <section className="hero relative overflow-hidden pb-40">
      <div className="relative mx-auto flex max-w-6xl grid-cols-3 flex-col gap-8 gap-y-16 px-4 py-16 md:py-32 md:px-8 lg:grid">
        <section className="col-span-2">
          <header>
            <div className="heading-pre">{HERO.pre}</div>
            <h1 className="heading-hero ">{HERO.heading}</h1>
            {/* <h2 className="heading-hero ">
                <Typewriter
                  loop={false}
                  items={[
                    <>
                      I'm a <u>Fullstack</u> developer
                    </>,

                    <>I build websites & web apps</>,
                  ]}
                />
              </h2>*/}
            <ul className="sm:scrollbar-none -mx-4 mb-2 flex items-center gap-6 overflow-x-auto px-4 pb-2 text-[15px] font-medium">
              {HERO.tech.map(({ name, Icon }) => (
                <li
                  className="flex items-center gap-2 text-gray-500 d:text-gray-400"
                  key={name}>
                  <Icon className="h-7 w-7 text-gray-400 d:text-gray-300/80" />
                  {name}
                </li>
              ))}
            </ul>
          </header>
          <main>
            <p className="mb-3 max-w-prose font-normal text-gray-500 d:text-gray-400 md:text-lg md:tracking-tight">
              {HERO.body}
            </p>

            <p className="mb-3 max-w-xl font-normal text-gray-500 md:text-lg md:tracking-tight"></p>
          </main>
          <footer className="mt-6 flex flex-wrap gap-4 md:gap-8">
            {HERO.cta1 ? (
              <Link
                to={HERO.cta1.href}
                className="button-rainbow inline-flex whitespace-nowrap bg-gray-800 px-10 py-2.5 text-sm font-medium tracking-tight text-gray-50 hfa:border-gray-300/90 hfa:bg-gray-900 hfa:text-white d:hfa:border-gray-700/30 md:px-12">
                {HERO.cta1.name}
              </Link>
            ) : null}

            {HERO.cta2 ? (
              <Link
                to={HERO.cta2.href}
                className="button-border inline-flex whitespace-nowrap bg-white/90 px-10 py-2.5 text-sm font-medium tracking-tight text-gray-500 transition-all hfa:border-gray-900/70 hfa:bg-white/90 hfa:text-gray-900 d:border-gray-700/80 d:bg-transparent d:text-gray-300 d:hfa:border-gray-200/30 d:hfa:bg-gray-900/80 d:hfa:text-gray-50 md:px-12">
                {HERO.cta2.name}
              </Link>
            ) : null}
          </footer>
        </section>
        <section className="relative md:h-[420px]">
          <div className="relative flex h-full min-w-[460px] flex-col gap-4 sm:min-w-[660px] lg:absolute lg:left-8 lg:top-16 lg:left-6 lg:top-24 lg:min-w-[460px]">
            <div className="relative z-20 flex justify-end gap-1.5">
              <Badge style="info">Hiker</Badge>
              <Badge style="success">Chef</Badge>
              <Badge style="warning">Runner</Badge>
              <Badge style="accent">Mixologist</Badge>
              <Badge style="plain">Space Enthusiast</Badge>
            </div>
            <div className="relative flex h-full flex-col">
              {/* <CodeEditor code={HERO.code} language="tsx" /> */}
              <div className="absolute -right-5 -bottom-5 -z-10 h-[calc(100%+1.25rem)] w-[calc(100%+1.25rem)] rounded-lg border border-gray-400/20 bg-gray-100/70 [mask-image:linear-gradient(-30deg,#fff_16.35%,rgb(255_255_255_/_0%)_61.66%)] d:border-gray-700/20 d:bg-gray-900/40"></div>
            </div>
            <div className="z-10 mt-1 flex gap-2 lg:-mt-2 lg:ml-16">
              <Link
                target="_blank"
                to="https://www.buymeacoffee.com/felixtellmann"
                className="group flex items-center justify-center rounded-full border-2 border-gray-400/50 bg-gray-100 bg-clip-padding py-1.5 px-3 text-sm font-medium text-gray-600 transition-all hfa:border-rose-500/30 hfa:bg-rose-500 hfa:text-white d:bg-gray-700 d:text-gray-50 d:hfa:bg-rose-500"
                data-tip="Buy me a coffee">
                <HeartIcon className="mr-1 h-4 w-4 animate-heartbeat text-red-600 transition-all group-hfa:text-white" />
                Support
              </Link>
              <Link
                target="_blank"
                to="https://github.com/FelixTellmann/flext/stargazers"
                className="group flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-400/50 bg-gray-100 bg-clip-padding text-sm font-medium text-gray-600 transition-all hfa:border-yellow-500/30 hfa:bg-yellow-500 hfa:text-white d:bg-gray-700 d:text-gray-50 d:hfa:bg-yellow-500"
                data-tip="Star on Github">
                <span className="sr-only">Star on Github</span>
                <StarIcon className="h-4 w-4 text-yellow-500 group-hfa:text-white" />
              </Link>
              {/* <ToggleSwitch
                enabled={theme === "dark"}
                setEnabled={(bool) => setTheme(bool ? "dark" : "light")}
                enabledIcon={<MoonIcon className="h-3 w-3 text-slate-400" />}
                disabledIcon={<SunIcon className="h-4 w-4 text-orange-400" />}
              /> */}
            </div>
          </div>
          {/* <div className="absolute hidden sm:top-24 sm:-right-5 sm:block lg:top-full lg:-left-64">
            <TwitterProfile {...twitterData} />
          </div> */}
        </section>
        <div className="background pointer-events-none absolute inset-0 z-0 -z-30 select-none">
          <div className="relative top-1/2 left-1/2  h-2/3 w-1/2 -translate-y-[30%] rounded-full bg-gradient-radial from-emerald-600/30 to-sky-600/5 blur-2xl"></div>
        </div>
      </div>
    </section>
  )
}
