import ImageView from "@/components/ImageView";
import BackBtn from "./BackBtn";
import LightMode from "./LightMode";
import Header from "./Header";

const Layout = ({ children, blog }) => {
  return (
    <>
      <ImageView />
      <Header blog={blog} />
      <main className="main-left pp-main-section">{children}</main>
      <LightMode />
      {blog && <BackBtn />}
    </>
  );
};
export default Layout;
