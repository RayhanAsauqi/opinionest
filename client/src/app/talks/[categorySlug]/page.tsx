import CardReport from "@/components/CardReport/Index";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Pagination } from "@/components/Pagination/Index";
import Search from "@/components/Search/Index";
import Sidebar from "@/components/Sidebar/Index";

export default function CategorySlug() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 px-[104px] gap-[16px]">
        <div className="col-span-2">
          <Sidebar className="hidden" />
        </div>
        <div className="col-span-10 w-full">
          <Search />
          <div className="flex flex-col gap-6 mt-[24px]">
            {[1, 2, 3, 4].map((item, index) => (
              <CardReport
                profile="profile.svg"
                name="Reza Arif Maulana"
                hours="2 Hours a go"
                type="report"
                to="Direktorat TSI"
                title="Lorem ipsum dolor sit amet"
                desc="Lorem ipsum dolor sit amet. Est dolorem aliquam sit earum enim cum consectetur nisi quo tempore odit aut sunt sunt ut expedita magni? Aut eaque omnis et autem explicabo sed quia maiores non magni odit. Non perspiciatis architecto rem dolor vitae a accusamus minus et eaque sint. A autem voluptas non reiciendis rerum et perspiciatis rerum est dolorem neque!"
                images="profile.svg"
                href={`/talks/critique/${index + 1}`}
                status="Open"
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <Pagination />
      <Footer />
    </div>
  );
}
