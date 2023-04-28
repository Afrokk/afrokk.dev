import BackBtn from "./BackBtn";
import LightMode from "./LightMode";
import Sidebar from "./Sidebar";

const Layout = ({ children, blog }) => {
  return (
    <>
      <Sidebar />
      <main className="main-left pp-main-section">{children}</main>
      <LightMode />
      {blog && <BackBtn />}
    </>
  );
};
export default Layout;
