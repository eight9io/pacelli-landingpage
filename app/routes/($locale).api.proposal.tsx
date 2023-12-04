import {json} from '@shopify/remix-oxygen';
import {ActionFunction} from '@remix-run/node';
import AdminTemplate from '~/lib/email/templates/proposal.admin';
// import CustomerTemplate from '~/lib/email/templates/booking.customer';
import {render} from '@react-email/render';
import {send} from '~/lib/email/instance';
import {fetchGoogleVerification} from '~/lib/utils';

const FIELDS_MAP: any = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone number',
};

export const action: ActionFunction = async ({request, context}) => {
  const env = context.env as any;
  // check gg recaptcha validate

  const data = (await request.json()) as any;
  const {reCaptcha} = data;
  if (!reCaptcha) return json({ok: false});

  const {success} = await fetchGoogleVerification(
    data.reCaptcha || '',
    env.PUBLIC_SECRET_RECAPTCHA_KEY,
  );
  delete data.reCaptcha;
  delete data.language;

  if (!success) return json({ok: false});
  try {
    const fields = Object.keys(data).map((key) => {
      return {
        name: FIELDS_MAP[key] || key,
        value: data[key],
      };
    });

    // Send to admin
    try {
      const adminMailHtml = render(<AdminTemplate data={fields} />);
      const mailToAdmin = {
        from: env.PUBLIC_MAIL_FROM,
        to: data.adminMail || env.PUBLIC_ADMIN_MAIL_DESTINATION,
        html: adminMailHtml,
        apiKey: env.PUBLIC_SENDGRID_API_KEY,
      };

      await send(mailToAdmin);
    } catch (error) {
      return json({ok: false, error});
    }

    // Send to customer
    // try {
    //   const nameField = fields.find((item: any) => item.name === 'Full name');
    //   const emailField = fields.find((item: any) => item.name === 'Email');
    //   const adminMailHtml = render(
    //     <CustomerTemplate
    //       fullname={nameField?.value || data.fullname}
    //       email={emailField?.value || data.email}
    //     />,
    //   );
    //   const mailToCustomer = {
    //     from: env.PUBLIC_MAIL_FROM,
    //     to: emailField?.value || data.email,
    //     html: adminMailHtml,
    //     apiKey: env.PUBLIC_SENDGRID_API_KEY,
    //   };

    //   await send(mailToCustomer);
    // } catch (error) {
    //   return json({ok: false, error});
    // }

    return json({ok: true});
  } catch (error) {
    return json({ok: false, error});
  }
};
