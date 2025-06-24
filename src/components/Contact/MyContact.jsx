const MyContact = () => {
  return (
    <div className="py-20 md:py-28">
      <div className="text-center">
        <h3 className="md:text-lg text-[#55E6A5] font-semibold mb-2">
          GET IN TOUCH
        </h3>
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white leading-tight">
          Let’s discuss <br /> about an project!
        </h2>
      </div>
      <div className="text-white md:p-4 flex flex-col md:flex-row gap-10 pt-16 md:pt-20">
        <form
          className="bg-[#09101A] px-4 py-8 md:py-14 md:min-w-80 lg:min-w-xl xl:min-w-3xl"
          action=""
        >
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-lg py-8 bg-[#09101A] border-0 border-b border-b-[#212727] rounded-none w-full focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="input input-lg py-8 bg-[#09101A] border-0 border-b border-b-[#212727] rounded-none w-full focus:outline-none"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center mt-4 md:mt-8">
            <input
              type="number"
              placeholder="Phone Number"
              className="input input-lg py-8 bg-[#09101A] border-0 border-b border-b-[#212727] rounded-none w-full focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your Website"
              className="input input-lg py-8 bg-[#09101A] border-0 border-b border-b-[#212727] rounded-none w-full focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Message"
            className="textarea textarea-lg mt-4 md:mt-8 px-4 py-6 bg-[#09101A] border-0 border-b border-b-[#212727] rounded-none w-full focus:outline-none"
            rows={5}
          ></textarea>
          <input
            type="submit"
            value="Submit Now"
            className="px-4 mt-8 w-full md:px-6 py-2 md:py-4 flex items-center gap-2 cursor-pointer bg-[#55E6A5] text-black font-semibold md:text-lg hover:bg-[#141C27] hover:text-white transition-colors duration-500 border-none nav-animation"
          />
        </form>
        <div className="w-full h-80 md:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187878219!2d90.337287993974!3d23.78097572837469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1750678858282!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MyContact;
