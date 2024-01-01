import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ArrowLeft from "../../../../../public/icons/arrowLeft";

function page() {
	return (
		<div>
			<Navbar />
			<section className="container pt-[60px] ">
				<div className="grid grid-cols-3 px-[416px] items-center justify-center pb-[23px] ">
					<Link href="/" className="flex flex-row items-center bg-[#E2F5FF] w-[110px] h-[40px] rounded-[4px] p-[10px] text-primary font-pop text-[10px] font-normal leading-normal gap-[8px]">
						<span>
							<ArrowLeft />
						</span>
						Back to home
					</Link>
					<h1 className="text-center text-black font-pop text-[24px] font-medium leading-[170%]">Successful delivery</h1>
				</div>
			</section>
			<div className="border-[1px] border-primary rounded-[20px] px-[186px] py-[134px] mx-[416px] ">
				<div className="grid justify-center gap-y-[60px] ">
					<h1 className="text-center text-primary font-pop text-[24px] font-medium leading-normal">Yuhuuu, You said it!</h1>
					<div className="flex justify-center">
						<Image src="/successSend.svg" alt="tes" width={178.238} height={160} />
					</div>
					<p className="text-black font-pop text-[16px] font-normal leading-normal">
						Explore{" "}
						<Link href={"/talks"} className="text-primary">
							Talks
						</Link>{" "}
						for more speaks
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default page;
