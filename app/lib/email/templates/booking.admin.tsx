import {
  Body,
  Container,
  Head,
  Html,
  Text,
  Section,
  Row,
} from '@react-email/components';

interface BookingAdminTemplateProps {
  data: any;
}

export const BookingAdminTemplate = ({data}: BookingAdminTemplateProps) => {
  return (
    <Html>
      <Head />
      <Body style={style.main}>
        <Container style={style.container}>
          <Section style={style.header}>
            You received a new message from your online store booking form.
          </Section>
          <Section style={style.content}>
            {data &&
              data.map((item: any) => (
                <Row key={item.name}>
                  <Text style={style.text}>
                    {item.name}
                    {': '}
                    <span style={style.textBold}>{item.value}</span>
                  </Text>
                </Row>
              ))}
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default BookingAdminTemplate;

const style = {
  main: {
    backgroundColor: '#f6f9fc',
    padding: '20px 0',
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
    borderRadius: '15px',
    padding: '20px 25px',
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
};
