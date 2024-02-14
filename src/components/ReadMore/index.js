// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  Heading,
  Paragraph,
  Description,
  Image,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const [isShowMore, setShowMore] = useState(false)

  const {reactHooksDescription} = props
  const onClickUpdateStatus = () => {
    setShowMore(prevState => !prevState)
  }

  const text = isShowMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)
  const btnText = isShowMore ? 'Read Less' : 'Read More'

  return (
    <AppContainer>
      <Heading>React Hooks</Heading>
      <Paragraph>Hooks are a new addition to React</Paragraph>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>{text}</Description>
      <Button type="button" onClick={onClickUpdateStatus}>
        {btnText}
      </Button>
    </AppContainer>
  )
}

export default ReadMore
