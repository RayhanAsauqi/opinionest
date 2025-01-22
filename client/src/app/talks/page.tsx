import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar/Index";
import ContentTalks from "@/components/ContentTalks/Index";

export default function Talks() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 px-[104px] gap-[16px]">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10 ">
          <ContentTalks />
        </div>
      </div>
      <Footer />
    </div>
  );
}
