import contact_img from "../assets/images/helpdesk1.png";

const Contact = () => {
  return (
    <section>
      <div className="custom-width grid gap-8 items-center grid-cols-1 lg:grid-cols-2">
        <div className="relative">
          <img src={contact_img} alt="" />
          <div className="absolute bottom-0 bg-white">
            <ul>
              <li>+233 24 428 1122</li>
              <li>wconsult@yahoo.com</li>
              <li>Kumasi, Ghana</li>
            </ul>
          </div>
        </div>
        <div className="">
          <h1>Send Us A Message</h1>
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="phone" placeholder="Phone" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
