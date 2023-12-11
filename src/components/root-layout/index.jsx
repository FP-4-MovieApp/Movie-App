import Header from "../header";
import Footer from "../footer";
import PropTypes from "prop-types";
const RootLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-[#EBEAEA] px-40">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

RootLayout.propTypes = {
  children: PropTypes.element,
};
export default RootLayout;
