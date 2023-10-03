/* eslint-disable */
import Booking from '~/components/home/booking';
import SocialProof from '~/components/home/social-proof';
import OutProjects from '~/components/gallery/OutProjects';
export default function Homepage() {
  return (
    <>
      <OutProjects />
      <Booking />
      <SocialProof />
      {/* <FeaturedPost articles={articles as any} /> */}
    </>
  );
}
