import CardReport from "@/components/CardReport/Index";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Pagination } from "@/components/Pagination/Index";
import Search from "@/components/Search/Index";
import Sidebar from "@/components/Sidebar/Index";

export default function Critique() {
	return (
		<div>
			<Navbar />
			<div className="flex flex-row px-[104px] gap-[16px]">
				<Sidebar className="hidden" />
				<div className="flex flex-col w-full">
					<Search />
					<div className="flex flex-col mt-[24px]">
						<CardReport
							profile="profile.svg"
							name="Reza Arif Maulana"
							hours="2 Hours a go"
							type="report"
							to="Direktorat TSI"
							title="Lorem ipsum dolor sit amet"
							desc="Lorem ipsum dolor sit amet. Est dolorem aliquam sit earum enim cum consectetur nisi quo tempore odit aut sunt sunt ut expedita magni? Aut eaque omnis et autem explicabo sed quia maiores non magni odit. Non perspiciatis architecto rem dolor vitae a accusamus minus et eaque sint. A autem voluptas non reiciendis rerum et perspiciatis rerum est dolorem neque!"
							images="profile.svg"
							href="/"
							formId={""}
							className="hidden"
							tag={""}
							agree={""}
							disagree={""}
							discussion={""}
						/>
					</div>
				</div>
			</div>
			<Pagination />
			<Footer />
		</div>
	);
}
