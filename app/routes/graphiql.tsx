import {graphiqlLoader} from '@shopify/hydrogen';
import {redirect, type LoaderArgs} from '@shopify/remix-oxygen';
export async function loader(args: LoaderArgs) {
  if (process.env.NODE_ENV === 'development') {
    // Default Hydrogen GraphiQL behavior
    return graphiqlLoader(args);
  }

  return redirect('/');
}
