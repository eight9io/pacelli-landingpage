const SENDGRID_ENDPOINT = 'https://api.sendgrid.com/v3/mail/send';

export const send = async (data: any) => {
  const {to, subject, html, from, apiKey} = data;

  const body = {
    personalizations: [
      {
        to: [{email: to, name: 'Pacelli'}],
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
