import {json} from '@shopify/remix-oxygen';
import {ActionFunction} from '@remix-run/node';
import AdminTemplate from '~/lib/email/templates/contact.admin';
import CustomerTemplate from '~/lib/email/templates/contact.customer';
import {render} from '@react-email/render';
import {send} from '~/lib/email/instance';

const FIELDS_MAP: any = {
  fullname: 'Full Name',
  email: 'Email',
  message: 'Message',
};
export const action: ActionFunction = async ({request, context}) => {
  const env = context.env as any;

  // try {
  const data = (await request.json()) as any;

  const fields = Object.keys(data).map((key) => {
    return {
      name: FIELDS_MAP[key] || key,
      value: data[key],
    };
  });

  // Send to admin
  // try {
  const adminMailHtml = render(<AdminTemplate data={fields} />);
  const mailToAdmin = {
    from: env.PUBLIC_MAIL_FROM,
    to: data.adminMail || env.PUBLIC_ADMIN_MAIL_DESTINATION,
    html: adminMailHtml,
    apiKey: env.PUBLIC_SENDGRID_API_KEY,
  };

  await send(mailToAdmin);
  // } catch (error) {
  //   return json({ok: false, error});
  // }

  // Send to customer
  // try {
  const nameField = fields.find((item: any) => item.name === 'Full name');
  const emailField = fields.find((item: any) => item.name === 'Email');
  const customerMailHtml = render(
    <CustomerTemplate name={nameField?.value || data.fullname} />,
  );
  const mailToCustomer = {
    from: env.PUBLIC_MAIL_FROM,
    to: emailField?.value || data.email,
    html: customerMailHtml,
    apiKey: env.PUBLIC_SENDGRID_API_KEY,
  };

  await send(mailToCustomer);
  // } catch (error) {
  //   return json({ok: false, error});
  // }

  return json({ok: true});
  // } catch (error) {
  //   return json({ok: false, error});
  // }
};
