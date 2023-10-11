import {type LoaderArgs, type ActionArgs, json} from '@shopify/remix-oxygen';

import {isLocalPath} from '~/lib/utils';

export async function action({request, context}: ActionArgs) {
  const formData = await request.formData();

  let status = 200;
  const headers = request.headers;
  const redirectTo = formData.get('redirectTo') ?? null;
  if (typeof redirectTo === 'string' && isLocalPath(redirectTo)) {
    status = 303;
    headers.set('Location', redirectTo);
  }

  return json({}, {status, headers});
}
