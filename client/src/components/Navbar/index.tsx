"use client";
import React from "react";
import AppButton from "@/components/app/Button";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

const itemNavbar = [
	{
		id: 1,
		title: "Features",
		to: "/features",
	},
	{
		id: 2,
		title: "Talks",
		to: "/talks",
	},
	{
		id: 3,
		title: "Speaks",
		to: "/speak/form",
	},
];

function Navbar() {
	const [user, setUser] = useState("----");
	const [isLogin, setIsLogin] = useState(false);
	const request = "halo";

	useEffect(() => {
		async function getSession() {
			const fetchUser = await axios.post("http://localhost:3001/session", { request });

			if (fetchUser.data != false) {
				setUser(fetchUser.data);
				setIsLogin(true);
			} else {
				setIsLogin(false);
			}
		}

		getSession();
	}, []);

	const handleSubmit = () => {
		window.location.href = "http://localhost:3000/auth/login";
	};

	const handleProfile = () => {
		//window.location.href = "http://localhost:3000/auth/login";
	};

	return (
		<div>
			<nav className="flex items-center justify-between px-[104px] py-6">
				<div>
					<Image src="/opininest.svg" alt="opininest" width={114} height={44} />
				</div>
				<div className="flex gap-[30px]">
					{itemNavbar.map((item) => (
						<Link href={isLogin ? `${item.to}` : `/auth/login`} key={item.id}>
							<h1>{item.title}</h1>
						</Link>
					))}
				</div>
				{isLogin ? (
					<AppButton title={user} className="btn bg-[#00A9FF] px-8 py-3 rounded text-white text-base font-bold leading-normal flex " alt="sign in" width={20} height={20} isSpeakView={true} onClick={handleProfile} />
				) : (
					<AppButton title="Sign in" className="btn bg-[#00A9FF] px-8 py-3 rounded text-white text-base font-bold leading-normal flex " alt="sign in" width={20} height={20} isSpeakView={true} onClick={handleSubmit} />
				)}
			</nav>
		</div>
	);
}

export default Navbar;
