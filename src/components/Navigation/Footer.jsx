import { Link } from "react-router-dom";
import BajoLogo from "../../assets/img/nav-icon.png";
import { arrNavbar } from "../../data/local/Navigations";
import { arrSocialMedia } from "../../data/local/SocialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
          <img
            className="w-[150px] fill-current"
            src={BajoLogo}
            alt="footer-logo"
          />

          <p>
            info@bajobliss.com
            <br />
            {/* Providing reliable tech since 1992 */}
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">BajoBliss</h6>
          {arrNavbar.map((item, index) => (
            <Link key={index} className={"link link-hover"} to={item.path}>
              {item.name}
            </Link>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title">Follow Us</h6>
          {arrSocialMedia.map((item, index) => (
            <Link
              key={index}
              className={
                "link link-hover flex justify-start items-center space-x-[5px] "
              }
              to={item.link}
            >
              <FontAwesomeIcon icon={item.icon} />
              <p>{item.name}</p>
            </Link>
          ))}
        </nav>
      </footer>

      <hr className="opacity-10 mx-10" />

      <div className="py-3 bg-base-200">
        <p className="text-start sm:text-center pl-10">
          © 2021 BajoBliss. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
