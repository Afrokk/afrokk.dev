import ImageView from "@/components/ImageView";
import BackBtn from "./BackBtn";
import DarkMode from "./DarkMode";
import Header from "./Header";

const Layout = ({ children, blog }) => {
  return (
    <>
      <ImageView />
      <Header blog={blog} />
      <main className="main-left pp-main-section">{children}</main>
      <DarkMode />
      {blog && <BackBtn />}
    </>
  );
};
export default Layout;
