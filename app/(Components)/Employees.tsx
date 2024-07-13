import SlidingInComponent from "./SlidingIn";
import Image from "next/image";

function EmployeeSlide({
  image,
  name,
  title,
  bio,
  reverse = false,
}: {
  image: string;
  name: string;
  title: string;
  bio: string;
  reverse: boolean;
}) {
  return (
    <section className="bg-navy   text-lightBlue px-8 md:px-0">
      <div
        className={`container mx-auto w-full items-center justify-center flex ${
          reverse ? "flex-row" : "flex-row-reverse"
        }  py-20 gap-10`}
      >
        {/* Large Screen Layout */}
        <div className=" shrink-0 overflow-hidden hidden relative md:flex items-center justify-start ">
          <SlidingInComponent
            delay={0.4}
            class="flex items-center w-full justify-center overflow-clip order-2 md:order-none "
          >
            <Image
              alt="TFK Executive Spotlight Photo"
              src={image}
              width={300}
              height={300}
              className=""
            />
          </SlidingInComponent>
        </div>
        <div className="flex  md:w-1/2 flex-col items-center justify-center  ">
          <SlidingInComponent delay={0}>
            <h3 className="text-3xl text-center">{name}</h3>
            <h3 className="text-xl text-center">{title}</h3>
          </SlidingInComponent>
          {/* Mobile Layout Image */}
          <SlidingInComponent
            delay={0.2}
            class="cover overflow-clip w-[200px] h-[200px] flex items-center justify-start md:hidden md:order-none mt-10"
          >
            <Image
              alt="TFK Executive Spotlight Photo"
              src={image}
              width={200}
              height={200}
              className="cover "
            />
          </SlidingInComponent>
          <SlidingInComponent delay={0.2} class="">
            <p className="mt-10 text-base text-left">{bio}</p>
          </SlidingInComponent>
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    image: "/images/TFK Executive Spotlight Photo.jpg",
    name: "Derek Michael Aron",
    title: "Senior Mortgage Advisor",
    bio: "Born in Philadelphia and raised in the beautiful Delaware Valley, Derek spent a lot of his childhood traveling up and down the east coast playing competitive soccer. He has passed along this passion for soccer to his son. Derek. Along with his wife, they enjoy spending weekends traveling to matches all over the state and he has never missed a game! His dedication to his work is only surpassed by his dedication to his family.",
    reverse: false,
  },
  {
    image: "/images/TFK Executive Spotlight Photo.jpg",
    name: "Taylor Forbes Kiser",
    title: "Director of Business Development",
    bio: "Taylor is a born and bred Tarheel native. Originally from Greensboro, she attended North Carolina State University, and afterwards lived for several years in Wilmington then Boone. This comprehensive knowledge of all major markets in the state uniquely positions her as a local expert, with access to top-tier investors on the national level. Having an educational background in Business Management, pursuing finance was a natural next step. She worked on the Chicago Mercantile Exchange, before also working in the family business of construction and development. Taylor’s why is her family and farm, which includes her three children, husband, and far too many animals. She is a momma bear for her kids, and one you want fighting in your financial corner.",
    reverse: true,
  },
];

export default function Employees() {
  return (
    <>
      {data.map((employee, idx) => (
        <EmployeeSlide
          key={idx}
          image={employee.image}
          name={employee.name}
          title={employee.title}
          bio={employee.bio}
          reverse={employee.reverse}
        />
      ))}
    </>
  );
}
