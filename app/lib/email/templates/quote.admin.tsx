import {
  Body,
  Container,
  Head,
  Html,
  Text,
  Section,
  Row,
  Column,
  Img,
  Link,
} from '@react-email/components';

interface QuoteAdminTemplateProps {
  data: any;
}

const FIELDS_MAP: any = {
  name: 'Full Name',
  email: 'Email',
  message: 'Message',
};

export const QuoteAdminTemplate = ({data}: QuoteAdminTemplateProps) => {
  const {customer, items} = data;

  const customerData = Object.keys(customer).map((key) => {
    return {
      name: FIELDS_MAP[key] || key,
      value: customer[key],
    };
  });

  return (
    <Html>
      <Head />
      <Body style={style.main}>
        <Container style={style.container}>
          <Section style={style.header}>
            You received a new message from your online store contact form.
          </Section>
          <Section style={style.content}>
            <Text style={style.text}>Customer Infomation:</Text>
            {customerData &&
              customerData.map((item: any) => (
                <Row key={item.name}>
                  <Text style={style.text}>
                    {item.name}
                    {': '}
                    <span style={style.textBold}>{item.value}</span>
                  </Text>
                </Row>
              ))}
          </Section>
          <Section style={style.header}></Section>
          <Section style={style.content}>
            <Text style={style.text}>Products Infomation:</Text>
            {items &&
              items.map((item: any) => (
                <Row key={item.name} style={style.productRow}>
                  <Column style={style.imgCol}>
                    <Img
                      style={style.productImage}
                      alt={item.title}
                      src={item.image}
                    />
                  </Column>
                  <Column style={style.infoCol}>
                    <Text style={style.text}>
                      <span style={style.textBold}>{item.product_title}</span>
                      <span style={{display: 'block'}}>
                        {item.variant_title}
                      </span>
                    </Text>
                    <Text style={style.text}>
                      Quantity:{' '}
                      <span style={style.textBold}>{item.quantity}</span>
                    </Text>
                    <Text style={style.text}>
                      <Link
                        style={style.link}
                        href={
                          item.variant_id
                            ? `https://admin.shopify.com/store/pacelli-e9/products/${item.product_id}/variants/${item.variant_id}`
                            : `https://admin.shopify.com/store/pacelli-e9/products/${item.product_id}`
                        }
                        target="_blank"
                      >
                        View product
                      </Link>
                    </Text>
                  </Column>
                </Row>
              ))}
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default QuoteAdminTemplate;

const style = {
  main: {
    backgroundColor: '#f6f9fc',
    padding: '20px 0',
  },
  header: {
    borderBottom: '1px solid #f0f0f0',
    paddingBottom: 20,
    paddingTop: 20,
    fontSise: 16,
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
  link: {
    color: '#ffffff',
    diplay: 'block',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: 'bold',
    backgroundColor: '#03554d',
  },
  text: {
    fontSize: '16px',
    fontFamily:
      "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
    fontWeight: '300',
    color: '#404040',
    lineHeight: '26px',
    margin: '0 0 10px 0',
  },
  textBold: {
    fontWeight: 'bold',
    display: 'inline-block',
  },
  productRow: {
    padding: '16px 0',
    borderBottom: '1px solid #f0f0f0',
  },
  productImage: {
    width: 100,
    height: 100,
    objectFit: 'cover',
  },
  imgCol: {
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
  },
  infoCol: {
    paddingLeft: 16,
  },
};
