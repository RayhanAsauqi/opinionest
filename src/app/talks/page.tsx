import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar/Index";
import ContentTalks from "@/components/ContentTalks/Index";

export default function Talks() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row px-[104px] gap-[16px]">
        <Sidebar />
        <ContentTalks />
      </div>
      <Footer />
    </div>
  );
}
