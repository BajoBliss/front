import Navbar from "../Navigation/Navbar";

const Layouts = ({ children }) => {
  return (
    <main>
      <Navbar />
      <section className="px-[40px]">{children}</section>
    </main>
  );
};

export default Layouts;
