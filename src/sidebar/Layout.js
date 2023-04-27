import ImageView from "@/components/ImageView";
import BackBtn from "./BackBtn";
import LightMode from "./LightMode";
import Sidebar from "./Sidebar";

const Layout = ({ children, blog }) => {
  return (
    <>
      <ImageView />
      <Sidebar />
      <main className="main-left pp-main-section">{children}</main>
      <LightMode />
      {blog && <BackBtn />}
    </>
  );
};
export default Layout;
