const OurPerformance: React.FC = () => {
  return (
    <section id="perform">
      <div className="container max-w-7xl mx-auto">
        <div className="mx-4 md:mx-6">
          <div className="flex flex-col md:flex-row space-y-4 md:space-x-32 md:space-y-0 items-center justify-center md:justify-between">
            <div className="w-3/4 md:w-[847px] md:h-auto">
              <img src="/images/performance.png" alt="performance" />
            </div>

            <div className="space-y-6 md:space-y-20">
              <div className="space-y-2 md:space-y-4">
                <h4 className="uppercase text-[#FFA451] font-bold tracking-wide text-sm md:text-2xl">
                  our performance
                </h4>

                <p className="text-[#4A4A4A] font-bold text-2xl md:text-5xl">
                  Most people are satisfied with our service
                </p>

                <p className="text-[#4A4A4A] text-xs md:text-base">
                  We always provide the best service to customers, we will
                  direct you from ordering tickets to the journey
                </p>
              </div>

              <div className="flex flex-row justify-between md:justify-normal md:space-x-16 items-center">
                <div className="capitalize text-center space-y-1 md:space-y-4">
                  <p className="text-[#FFA451] font-black text-lg md:text-4xl">
                    20
                  </p>
                  <p className="text-[4a4a4a] font-normal text-xs md:text-xl">
                    years <br /> experience
                  </p>
                </div>

                <div className="capitalize text-center space-y-1 md:space-y-4">
                  <p className="text-[#FFA451] font-black text-lg md:text-4xl">
                    300++
                  </p>
                  <p className="text-[4a4a4a] font-normal text-xs md:text-xl">
                    destination <br /> collaboration
                  </p>
                </div>

                <div className="capitalize text-center space-y-1 md:space-y-4">
                  <p className="text-[#FFA451] font-black text-lg md:text-4xl">
                    2k++
                  </p>
                  <p className="text-[4a4a4a] font-normal text-xs md:text-xl">
                    customers <br /> happy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPerformance;
