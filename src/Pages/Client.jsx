import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Reviews = () => {
  const DATA = [
    {
      img: "/man-1.png",
      name: "James Bond",
      role: "CEO at Explicit",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      img: "/man-2.png",
      name: "Evin Lara",
      role: "CEO at Aeroland",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      img: "/man-3.png",
      name: "Sheza Qamar",
      role: "CEO at Advokids",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      img: "/man-1.png",
      name: "James Bond",
      role: "CEO at Explicit",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];
  return (
    <div className="wrapper py-[70px] bg-[#F9F2EE] mt-[50px] sm:mt-[100px]">
      <div className="contain flex-col justify-center items-center gap-2">
        <h2 className="headings text-center">Our clients are saying</h2>
        <p className="subtitle text-center mb-[40px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore{" "}
        </p>
        <Splide
          options={{
            perPage: 3,
            perMove: 2,
            width: "100%",
            autoplay: true,
            pagination: true,
            arrows: false,
            drag: true,
            type: "loop",
            gap: "40px",
            breakpoints: {
              1100: {
                perPage: 2,
              },
              800: {
                perPage: 1,
              },
            },
          }}
          className="review-slider">
          {DATA.map((elem, idx) => {
            return (
              <SplideSlide>
                <ReviewBox {...elem} key={idx + "review"} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default Reviews;
const ReviewBox = ({ name, role, img, review }) => {
  return (
    <div className="flex w-full justify-start items-start flex-col gap-4 p-5 rounded-2xl bg-white">
      <div className="flex justify-start items-center gap-2">
        <img src="/star.png" className="w-[28px] object-contain" alt="" />
        <img src="/star.png" className="w-[28px] object-contain" alt="" />
        <img src="/star.png" className="w-[28px] object-contain" alt="" />
        <img src="/star.png" className="w-[28px] object-contain" alt="" />
        <img src="/star.png" className="w-[28px] object-contain" alt="" />
      </div>
      <p className="text-lg text-black opacity-70">{review}</p>
      <div className="flex justify-start items-center gap-4">
        <img
          src={img}
          className="rounded-full object-fill h-[73px] w-[73px]"
          alt=""
        />
        <div className="flex justify-start items-start flex-col">
          <h4 className="text-xl font-semibold">{name}</h4>
          <p className="text-base font-normal">{role}</p>
        </div>
      </div>
    </div>
  );
};
