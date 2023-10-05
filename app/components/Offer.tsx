const Offer = () => {
  return (
    <section id="offer">
      <div className="container max-w-7xl mx-auto">
        <div className="mx-6">
          <div className="bg-[#1F4590] py-3 md:py-6 rounded-md">
            <div className="flex flex-row justify-evenly items-center">
              <div className="text-white text-center space-y-1 font-medium">
                <h4 className="uppercase text-xs md:text-lg font-black tracking-wider">
                  special offer
                </h4>

                <div className="bg-[#355DAB] px-2 py-1 rounded-md">
                  <p className="capitalize text-xs md:text-base">
                    family weekend package
                  </p>
                </div>

                <p className="text-xs md:text-base">Off up to 30%</p>
              </div>

              <div className="text-white">
                <button className="uppercase bg-[#FFA451] hover:bg-[#ea994e] font-semibold text-[10px] md:text-lg px-4 py-2 rounded-full">
                  book now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
