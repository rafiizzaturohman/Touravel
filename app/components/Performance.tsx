const OurPerformance: React.FC = () => {
  return (
    <section id="perform">
      <div className="container max-w-7xl mx-auto">
        <div className="mx-4 md:mx-6">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-center md:justify-between">
            <div className="w-3/4 md:w-[847px] md:h-auto">
              <img src="/images/performance.png" alt="performance" />
            </div>

            <div>
              <div>
                <h4 className="uppercase text-[#FFA451]">our performance</h4>

                <p>Most people are satisfied with our service</p>

                <p>
                  We always provide the best service to customers, we will
                  direct you from ordering tickets to the journey
                </p>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPerformance;
