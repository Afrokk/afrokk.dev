import BackBtn from "./BackBtn";
import LightMode from "./LightMode";
import Sidebar from "./Sidebar";
import ScrollReveal from "@/components/ScrollReveal";

const Layout = ({ children, blog }) => {
  return (
    <>
      <Sidebar />
      <main className="main-left pp-main-section">{children}</main>
      <ScrollReveal />
      <LightMode />
      {blog && <BackBtn />}
    </>
  );
};
export default Layout;
