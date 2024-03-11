import 'survey-core/defaultV2.min.css'
import { PlainDark } from "survey-core/themes/plain-dark";
import { PlaintLight } from "survey-core/themes/plain-light";
import { Model } from 'survey-core'
import { useCallback, useState } from 'react'
import { Survey } from 'survey-react-ui'
import { Modal, ModalContent, ModalHeader } from '@nextui-org/react'
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useColorMode } from '@docusaurus/theme-common'

const surveyJson = {
  elements: [
    {
      name: 'FirstName',
      title: 'Enter your first name:',
      type: 'text',
    },
    {
      name: 'LastName',
      title: 'Enter your last name:',
      type: 'text',
    },
  ],
}

function App() {
  const [isOpen, setIsOpen] = useState(true)
  const survey = new Model(surveyJson)
  const { colorMode } = useColorMode()
  const applayTheme = colorMode === 'dark' ? PlainDark : PlaintLight
  console.log(2323, colorMode, applayTheme)
  survey.applyTheme({...applayTheme, "isPanelless": true})
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data)
    alert(results)
    setIsOpen(false)
  }, [])

  survey.onComplete.add(alertResults)
  return (
    <Modal
      isOpen={isOpen}
      isDismissable={false}
      backdrop="blur"
      size="5xl"
      onClose={() => setIsOpen(false)}
      placement="center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-center">
              匹配度调查
            </ModalHeader>
            <BrowserOnly>
              {() => <Survey model={survey} />}
            </BrowserOnly>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default App
