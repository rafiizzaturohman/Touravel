import ServiceCard from "./Card/ServiceCard";

const serviceList = [
  {
    icons: "BiWorld",
    title: "Lot of Choises",
    descriptions:
      "Total of more than 450 destinations in various countries in the world become partners with us",
  },
  {
    title: "Tour Guide",
    descriptions:
      "There are 3 guides for each destination in the place you visit",
  },
  {
    title: "Easy Booking",
    descriptions:
      "We provide all services online which can be accessed easily through our website",
  },
  {
    title: "Luxury Hotel",
    descriptions:
      "We also provide lodging near the destination where you are visiting.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="container max-w-7xl mx-auto">
        <div className="space-y-6 md:space-y-16">
          <div className="mx-4">
            <div className="text-center text-[#4A4A4A]">
              <h4 className="uppercase text-[#F0B666] text-xs md:text-xl font-bold tracking-wide">
                what we deserve
              </h4>
              <h2 className="capitalize text-lg md:text-4xl font-bold tracking-wide">
                top values for you
              </h2>
              <p className="text-xs md:text-lg font-normal">
                The best service that will be with you every time
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-center">
            {serviceList.map((item, index) => (
              <div key={index}>
                <ServiceCard {...item} no={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
