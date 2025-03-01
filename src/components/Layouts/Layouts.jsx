import Footer from "../Navigation/Footer";
import Navbar from "../Navigation/Navbar";

const Layouts = ({ children }) => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="px-[40px] flex-grow py-[40px]">{children}</section>
      <Footer />
    </main>
  );
};

export default Layouts;
