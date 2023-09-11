import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TestimonialCarrousel.scss";
import { Pagination } from "swiper";
import { images } from "../../../../assets/images/images";

export default function App() {
  SwiperCore.use([Autoplay, Pagination]);

  const ClientImages = [
    images.ClientOne,
    images.ClientTwo,
    images.ClientThree,
    images.ClientFour,
    images.ClientFive,
    images.ClientSix,
  ];

  const ClientReviews = [
    {
      ClientName: "Roberto Carlos",
      ClientDesig: "Manager at Cyclos",
      ClientReview:
        "I am absolutely thrilled with the product design services provided by this company! Their expertise in translating ideas into tangible, user-friendly designs is unmatched. They took the time to understand my target audience and design a product that not only looks visually stunning but also functions flawlessly. Working with their talented team was an absolute pleasure.It's evident that they genuinely care about the success of their clients' products.",
      ImageIndex: 0,
    },
    {
      ClientName: "Maria Lopez",
      ClientDesig: "Product Manager at Acme Corp",
      ClientReview:
        "I couldn't be happier with the product design process and outcome delivered by this company. Their attention to detail and ability to think outside the box resulted in a truly innovative and unique product design. They were receptive to my feedback and incorporated it seamlessly into the final design. The end result exceeded my expectations and has been widely praised by both clients and users.",
      ImageIndex: 1,
    },
    {
      ClientName: "John Smith",
      ClientDesig: "Software Engineer at XYZ Inc.",
      ClientReview:
        "I highly recommend this company for their exceptional product design skills. Their team displayed a deep understanding of user-centered design principles, ensuring that the final product is not only aesthetically pleasing but also intuitive and user-friendly. Their ability to combine functionality with creativity sets them apart. It's evident that they genuinely care about the success of their clients' products.",
      ImageIndex: 2,
    },
    {
      ClientName: "Emily Johnson",
      ClientDesig: "Marketing Specialist",
      ClientReview:
        "Working with this company as a product designer was an absolute joy. They fostered a collaborative environment that allowed for open communication and creative exploration. Their team was responsive and receptive to my ideas, providing valuable insights and expertise that helped shape the final design. Their dedication to delivering high-quality design solutions was evident at every stage of the project.",
      ImageIndex: 3,
    },
    {
      ClientName: "Rob Carlos",
      ClientDesig: "Manager at Cyclos",
      ClientReview:
        "I'm extremely grateful to have partnered with this company for my product design needs. Their passion for creating exceptional designs and their commitment to delivering results are truly commendable. Their attention to detail and ability to capture the essence of my brand were remarkable. The final product design not only met but exceeded my expectations. Working with their talented team was an absolute pleasure.",
      ImageIndex: 4,
    },
    {
      ClientName: "Mark Lopez",
      ClientDesig: "Product Manager at Acme Corp",
      ClientReview:
        "I am incredibly impressed with the product design services provided by this company. Their expertise and attention to detail are unmatched. From the initial concept stage to the final design, their team demonstrated a deep understanding of both form and function. They carefully considered every aspect, ensuring that the end product not only looks visually stunning but also functions seamlessly.",
      ImageIndex: 5,
    },
  ];
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
          renderBullet: function (index, className) {
            const review = ClientReviews[index];
            const imageIndex = review.ImageIndex;
            const ClientImage = ClientImages[imageIndex];
            return `<span class="${className}"><img src="${ClientImage}" alt="Client Image" /></span>`;
          },
        }}
        grabCursor={true}
        modules={[Pagination]}
        className="Swiper"
        autoplay={{ delay: 3000, disableOnInteraction: true }}
      >
        {ClientReviews.map((review, index) => (
          <SwiperSlide key={index}>
            <p className="ClientReview">{review.ClientReview}</p>
            <div className="wrapper">
              <p className="ClientName">{review.ClientName}</p>
              <p className="ClientDesig">{review.ClientDesig}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
