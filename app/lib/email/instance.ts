const SENDGRID_ENDPOINT = 'https://api.sendgrid.com/v3/mail/send';

export const send = async (data: any) => {
  const {to, subject, html, from, apiKey} = data;

  const toEmails = to
    .split(',')
    .map((email: string) => ({email, name: 'Pacelli'}));

  const body = {
    personalizations: [
      {
        to: toEmails,
        subject: subject || 'Pacelli',
      },
    ],
    content: [{type: 'text/html', value: html}],
    from: {email: from, name: 'Pacelli'},
  };

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey || ''}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  return await fetch(SENDGRID_ENDPOINT, options);
};
