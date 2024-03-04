import 'survey-core/defaultV2.min.css'
import { Model } from 'survey-core'
import { useCallback, useState } from 'react'
import { Survey } from 'survey-react-ui'
import { Modal, ModalContent, ModalHeader } from '@nextui-org/react'

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
            <Survey model={survey} />
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default App
