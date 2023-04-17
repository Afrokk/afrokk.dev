import ImageView from "../components/ImageView";
import BackBtn from "./BackBtn";
import DayNightMood from "./DarkMode";
import Header from "./Header";

const Layout = ({ children, blog }) => {
  return (
    <>
      <ImageView />
      <Header blog={blog} />
      <main className="main-left pp-main-section">{children}</main>
      <DayNightMood />
      {blog && <BackBtn />}
    </>
  );
};
export default Layout;
