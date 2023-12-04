import {MailerSend, EmailParams, Sender, Recipient} from 'mailersend';

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY || '',
});

export const send = async (data: any) => {
  const {to, subject, html, from, text} = data;

  const sentFrom = new Sender(from);
  const recipients = to.split(',').map((email: string) => new Recipient(email));

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setSubject(subject)
    .setHtml(html)
    .setText(text);

  return await mailerSend.email.send(emailParams);
};
