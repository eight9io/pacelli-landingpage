import {Body, Container, Head, Html, Text} from '@react-email/components';

interface ContactCustomerTemplateProps {
  name?: string;
}

export const ContactCustomerTemplate = ({
  name = '',
}: ContactCustomerTemplateProps) => {
  return (
    <Html>
      <Head />
      <Body style={style.main}>
        <Container style={style.container}>
          <Text style={style.text}>
            Dear <span style={style.textBold}>{name}</span>,
          </Text>
          <Text style={style.text}>
            Your message has been sent to admin! We will contact you as soon as
            possible.
          </Text>
          <Text style={style.text}>Best regards!</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactCustomerTemplate;

const style = {
  main: {
    backgroundColor: '#f6f9fc',
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
    display: 'inline-block',
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
    display: 'inline-block',
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
