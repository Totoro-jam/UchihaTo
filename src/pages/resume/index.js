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
  Card
} from '@nextui-org/react'
import TypeIt from 'typeit-react'

export default function Resume() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout>
      <NextUIProvider>
        <div className={clsx('container mx-auto lg:w-3/4')}>
          <Card className='px-12 py-6 my-10'>
            <CheckboxGroup label="本页面待做事项" defaultValue={['']}>
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
            </CheckboxGroup>
          </Card>
        </div>
      </NextUIProvider>
    </Layout>
  )
}
