/* eslint-disable */
import CarouselShowroom from '~/components/showroom/CarouselArrow';
import MyTeam from '~/components/showroom/MyTeam';
import Intro from '~/components/project-detail/Intro';
import showroom1 from '~/assets/showroom/showroom1.png';
import project1 from '~/assets/gallery/project-1.png';
import project2 from '~/assets/gallery/project-2.png';
import project3 from '~/assets/gallery/project-3.png';
import Detail from '~/components/project-detail/Detail';
import Booking from '~/components/home/booking';
const ItemMock: any = {
  id: 1,
  title: 'Lakefront Retreat',
  sub_title: 'Ut pharetra nunc vestibulum sagittis semper eu proin. Eget hendrerit in. sagittis semper eu proin.',
  client: 'ABC',
  image_intro: [showroom1, project1, project2],
  detail: [
    {
      title: "The challenge to face",
      description: "Ut pharetra nunc vestibulum sagittis semper eu proin. Eget hendrerit in. sagittis semper eu proin. Eget hend  Ut pharetra nunc vestibulum sagittis semper eu proin. Eget hendrerit in. sagittis semper eu proinn...",
      image: project3

    }
  ]


}
export default function ProjectDetail() {
  return (
    <>

      <Intro title={ItemMock.title}
        subTitle={ItemMock.sub_title}
        client={ItemMock.client}
        imageIntro={ItemMock.image_intro}
      />
      <Detail title={ItemMock.title}
        subTitle={ItemMock.sub_title}
        imageIntro={ItemMock.image_intro}
        imgPosition="right"
      />
      <Detail title={ItemMock.title}
        subTitle={ItemMock.sub_title}
        imageIntro={ItemMock.image_intro}

        imgPosition="left"
      />
      <Detail title={ItemMock.title}
        subTitle={ItemMock.sub_title}
        imageIntro={ItemMock.image_intro}
        imgPosition="right"
      />

      <img
        src={project3}
        alt="Mission"
        width={1030}
        height={580}
        className="mt-28 mx-auto h-[580px] base-container  "
      />
      <Booking />

    </>
  );
}
