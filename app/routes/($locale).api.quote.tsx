import {json} from '@shopify/remix-oxygen';
import {ActionFunction} from '@remix-run/node';
import AdminTemplate from '~/lib/email/templates/quote.admin';
import CustomerTemplate from '~/lib/email/templates/quote.customer';
import {render} from '@react-email/render';
import {send} from '~/lib/email/mailersend';

const FIELDS_MAP: any = {
  name: 'Full Name',
  email: 'Email',
  message: 'Message',
};
export const action: ActionFunction = async ({request, context}) => {
  const env = context.env as any;

  try {
    const data = (await request.json()) as any;
    const customer = data.customer;
    const items = data.items;

    const fields = Object.keys(customer).map((key) => {
      return {
        name: FIELDS_MAP[key] || key,
        value: customer[key],
      };
    });

    // Send to admin
    try {
      const adminMailHtml = render(<AdminTemplate data={data} />);
      const mailToAdmin = {
        from: env.PUBLIC_MAIL_FROM,
        to: data.adminMail || env.PUBLIC_ADMIN_MAIL_DESTINATION,
        html: adminMailHtml,
      };

      await send(mailToAdmin);
    } catch (error) {
      return json({ok: false, error});
    }

    // Send to customer
    try {
      const nameField = fields.find((item: any) => item.name === 'Full name');
      const emailField = fields.find((item: any) => item.name === 'Email');
      const adminMailHtml = render(
        <CustomerTemplate name={nameField?.value || customer.name} />,
      );
      const mailToCustomer = {
        from: env.PUBLIC_MAIL_FROM,
        to: emailField?.value || customer.email,
        html: adminMailHtml,
      };

      await send(mailToCustomer);
    } catch (error) {
      return json({ok: false, error});
    }

    return json({ok: true});
  } catch (error) {
    return json({ok: false, error});
  }
};
