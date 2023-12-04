const MAILERSEND_ENDPOINT = 'https://api.mailersend.com/v1/email';

export const send = async (data: any) => {
  const {to, subject, html, from, apiKey} = data;

  const toEmails = to.split(',').map((email: string) => ({email}));

  const body = {
    to: toEmails,
    html,
    subject: subject || 'Pacelli',
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

  return await fetch(MAILERSEND_ENDPOINT, options);
};
