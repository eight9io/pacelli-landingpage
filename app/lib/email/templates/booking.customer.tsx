import {
  Body,
  Container,
  Head,
  Html,
  Section,
  Text,
  Img,
} from '@react-email/components';

interface BookingCustomerTemplateProps {
  fullname?: string;
  email?: string;
  message?: string;
  phone?: string;
  date?: string;
  time?: string;
}

export const BookingCustomerTemplate = ({
  fullname = '',
  email = '',
  message = '',
  date = '',
  time = '',
}: BookingCustomerTemplateProps) => {
  return (
    <Html>
      <Head />
      <Body style={style.main}>
        <Container style={style.container}>
          <Img
            src="https://cdn.shopify.com/s/files/1/0816/1971/4346/files/logo.png"
            width="153"
            height="48"
            alt="Pacelli"
          />
          <Section style={style.header}>
            <Text style={style.text}>
              Dear <span style={style.textBold}>{fullname}</span>,
            </Text>
            <Text style={style.text}>
              Your meeting request has been sent to admin! We will contact you
              as soon as possible.
            </Text>
            <Text style={style.text}>Best regards!</Text>
          </Section>
          <Section style={style.content}>
            <Text>Your request information:</Text>
            <Text style={style.text}>
              Email: <span style={style.textBold}>{email}</span>
            </Text>
            <Text style={style.text}>
              At: <span style={style.textBold}>{time} </span>
              {' on '}
              <span style={style.textBold}>{date}</span>
            </Text>
            <Text style={style.text}>
              Note: <span style={style.textBold}>{message}</span>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default BookingCustomerTemplate;

const style = {
  main: {
    backgroundColor: '#f6f9fc',
  },
  header: {
    borderBottom: '1px solid #f0f0f0',
    paddingBottom: 20,
  },
  content: {
    paddingTop: 20,
  },
  container: {
    backgroundColor: '#ffffff',
    border: '1px solid #f0f0f0',
    padding: '45px',
  },
  text: {
    fontSize: '16px',
    fontFamily:
      "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
    fontWeight: '300',
    color: '#404040',
    lineHeight: '26px',
    display: 'block',
    margin: '0 0 10px 0',
  },
  textBold: {
    fontWeight: 'bold',
    display: 'inline-block',
  },
  textUpper: {
    fontFamily:
      "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
    color: '#404040',
    lineHeight: '26px',
    margin: '0 0 10px 0',
    fontSize: 25,
    fontWeight: 'bold',
  },
  resultContainer: {
    backgroundColor: '#fecd44',
    width: 300,
    padding: '10px 20px',
    textAlign: 'center' as const,
    margin: 'auto',
    marginTop: 20,
    borderRadius: 15,
    paddingBottom: 20,
  },
};
