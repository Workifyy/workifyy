

function ClientSection() {
  return (
    <div className="container">
      <section className="mx-auto max-w-[150rem] px-8 miniTablet:px-6">
        <div className="mt-[8rem] w-full rounded-[.6rem] bg-[url('/assets/ClientSection.jpg')] bg-cover bg-center bg-no-repeat py-[5rem] miniTablet:bg-center">
          <div>
            <h2 className="max-w-[45rem] pl-5 text-[2.8rem] leading-[5rem] text-white ">
              Find Technicians Your Way
            </h2>

            <p className="max-w-[30rem] text-white leading-relaxed tracking-widest pl-5 text[2rem] ">
              Work with the largest network of independent professionals and get
              things done—from quick turnarounds to big transformations.
            </p>

            <section className="flex gap-12 pl-5 pt-12 laptop:flex-col miniTablet:pl-3">
              <div className="w-72 h-32 rounded-md bg-[#32CD32] hover:bg-white hover:text-green-500 cursor-pointer laptop:w-[22rem]">
                <h3 className="text-white text-[2rem] pl-3 pt-1 ">
                  Lorem ipsum dolor sit amet.
                </h3>
                <p className="text-white text-[1rem] pl-3">Lorem ipsum </p>
              </div>

              <div className="w-72 h-32 rounded-md bg-[#32CD32] laptop:w-[22rem]">
                <h3 className="text-white text-[2rem] pl-3 pt-1">
                  Lorem ipsum dolor sit amet.
                </h3>
                <p className="text-white text-[1rem] pl-3">Lorem ipsum </p>
              </div>

              <div className="w-72 h-32 rounded-md bg-[#32CD32] laptop:w-[22rem]">
                <h3 className="text-white text-[2rem] pl-3 pt-1">
                  Lorem ipsum dolor sit amet.
                </h3>
                <p className="text-white text-[1rem] pl-3">Lorem ipsum </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClientSection