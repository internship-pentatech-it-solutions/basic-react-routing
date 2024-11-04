import about_img from "../assets/images/about-image.avif";

const About = () => {
  return (
    <section className="mt-[10rem]">
      <div className="custom-width grid gap-8 grid-cols-1 lg:grid-cols-2">
        <div>
          <img src={about_img} alt="" />
        </div>
        <div>
          <h1 className="text-4xl">About Mattress Home</h1>
          <div className="mt-8 flex flex-col gap-4">
            <p>
              Welcome to Mattress Home, your ultimate sleep partner and
              solution. We specialize in providing high-quality new mattresses
              and offer expert restoration services for your old ones. Our
              mission is to ensure you get the best sleep possible, tailored to
              your unique needs.
            </p>
            <p>
              At Mattress Home, we understand that a good night's sleep is
              essential for a healthy and productive life. That’s why we offer a
              diverse range of mattresses from top brands such as Royal Foam,
              Latex Foam, Ashfoam, and various foreign brands. Whether you're
              looking for a new mattress or need to rejuvenate your existing
              one, we've got you covered.
            </p>
            <p>
              We are here to solve your sleep needs. Give us a call or chat with
              us today to find the perfect mattress that suits you. Experience
              the difference with Mattress Home, where your comfort and
              satisfaction are our top priorities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
