import { Link } from "react-router-dom";
import companyImage from "../assets/images/wsports.jpg";
import ashfoam from "../assets/images/ashfoam.jpg";
import latexfoam from "../assets/images/latexfoam.jpg";
import royalfoam from "../assets/images/royalfoam.jpg";
import sleepscience from "../assets/images/sleepscience.jpg";

const CompanyList = () => {
  return (
    <div className="mt-10 mx-auto">
      <div className="custom-width grid sm:grid-cols-2 gap-4">
        {companies.map((company, index) => (
          <div key={index} className="grid lg:grid-cols-2 bg-white">
            <div className="w-full">
              <img
                src={company.img}
                alt={company.desc}
                className="w-full h-[200px] sm:h-[250px]"
              />
            </div>
            <div className="flex flex-col justify-between p-8">
              <div>
                <h2>{company.name}</h2>
                <p>{company.desc}</p>
              </div>
              <Link className="w-max px-6 py-2 border border-gray-950 border-solid rounded-lg">
                Explore Brand
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyList;

const companies = [
  {
    name: "Royal Foam",
    desc: "Royal foam mattresses for luxurious sleep",
    img: royalfoam,
  },
  {
    name: "Latex Foam",
    desc: "Latex foam mattresses for your comfort",
    img: latexfoam,
  },
  {
    name: "Ash Foam",
    desc: "Ash foam mattresses for premium comfort",
    img: ashfoam,
  },
  {
    name: "Other Brand",
    desc: "Other brand mattresses for various needs",
    img: sleepscience,
  },
];
