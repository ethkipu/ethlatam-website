import Faq from 'react-faq-component'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import background from '../assets/faq-line.svg'

export default function Faqs({ edition }) {
  const intl = useIntl()
  const f = 'faqs'
  const data = {
    rows: [
      {
        title: intl.formatMessage({ id: edition + '.faqs.1.title' }),
        content: intl.formatMessage({ id: edition + '.faqs.1.content' }),
      },
      {
        title: intl.formatMessage({ id: edition + '.faqs.2.title' }),
        content: intl.formatMessage({ id: edition + '.faqs.2.content' }),
      },
      {
        title: intl.formatMessage({ id: edition + '.faqs.3.title' }),
        content: intl.formatMessage({ id: edition + '.faqs.3.content' }),
      },
      {
        title: intl.formatMessage({ id: edition + '.faqs.4.title' }),
        content: intl.formatMessage({ id: edition + '.faqs.4.content' }),
      },
      {
        title: intl.formatMessage({ id: edition + '.faqs.5.title' }),
        content: intl.formatMessage({ id: edition + '.faqs.5.content' }),
      },
      {
        title: intl.formatMessage({ id: edition + '.faqs.6.title' }),
        content: intl.formatMessage({ id: edition + '.faqs.6.content' }),
      }
    ],
  }

  return (
    <FaqsSection id="faqs">
      <Container>
        <h1 dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "faqs.title" }) }} />
        <Faq
          data={data}
          styles={{
            bgColor: 'transparent',
            titleTextColor: 'white',
            rowTitleColor: 'white',
            rowTitleTextSize: 'large',
            rowContentColor: '#737373',
            rowContentTextSize: '16px',
            rowContentPaddingTop: '24px',
            rowContentPaddingBottom: '24px',
            rowContentPaddingLeft: '32px',
            rowContentPaddingRight: '32px',
            arrowColor: 'white',
            zIndex: '999',
          }}
          config={{
            animate: true,
            arrowIcon: '+',
          }}
        />
      </Container>
    </FaqsSection>
  )
}

const FaqsSection = styled.section`
  background: #0b0c0d;
  color: white;
  text-align: center;
  height: auto;
  h1 {
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 88px;
    line-height: 106px;
    text-transform: uppercase;
    color: #faf7f5;
    position: relative;
    @media only screen and (max-width: 700px) {
      font-size: 44px;
      line-height: 45px;
      margin-bottom: 73px;
      .indentation {
        padding-left: 30px;
      }
    }
  }
  span.pixel {
    font-family: 'Pixel';
  }
  .faq-row {
    border-bottom: 1px solid #4D4D4D!important;
  }
  .faq-body {
    max-width: 907px;
    outline: 1px solid #4D4D4D;
    background: #0b0c0d;
    margin-right: 0;
    margin-left: auto;
    .icon-wrapper {
      font-size: 31px;
      font-family: 'Helvetica';
      font-weight: 400;
      padding: 15px !important;
    }
    a {
      color: white;
    }
    .row-title {
      padding: 24px 32px !important;
      font-family: 'Helvetica';
      font-weight: 400;
      font-size: 24px;
      line-height: 24px;
      text-transform: uppercase;
      color: #ffffff;
    }
  }
`

const Container = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: left bottom;
  max-width: 1440px;
  padding: 160px 40px;
  @media only screen and (max-width: 700px) {
    font-size: 80px 15px;
  }
  @media only screen and (min-width: 1440px) {
    margin: 0 auto;
  }
  text-align: left;
  padding-bottom: 160px;
`
