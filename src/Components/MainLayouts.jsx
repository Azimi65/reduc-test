import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayouts = ({ children }) => {
  return (
      <div className="flex justify-center">
        <Navbar />
        {children}
        <Footer />
      </div>
  );
};
export default MainLayouts;
