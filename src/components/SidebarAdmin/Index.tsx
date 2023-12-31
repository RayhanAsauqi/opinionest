import Image from "next/image";
import LinkSidebar from "./LinkSidebar/Index";
import IconHome from "../../../public/icons/iconHome";
import IconInbox from "../../../public/icons/iconInbox";
import Logout from "../../../public/icons/logout";

interface SidebarProps {
  activeMenu?: "homepage" | "inbox";
}

export default function SidebarAdmin(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <aside className="fixed top-0 flex flex-col justify-between w-64 h-screen shadow-sidebar pb-[56px]">
      <div className="flex flex-col">
        <div className="border-b-[1px] border-[#D5D5D5] py-[22.1px] flex flex-row items-center justify-center">
          <Image src="/opininest.svg" alt="opininest" width={114} height={44} />
        </div>
        <div className="px-[40px] mt-[40px]">
          <Image
            src={"/images/profile.svg"}
            width={176}
            height={176}
            alt="profile"
            className="w-[176px] bg-[#D9D9D9] rounded-[10px]"
          />
          <p className="bg-[#E2F5FF] rounded-[10px] px-[44px] py-[11px] text-primary font-pop text-[12px] font-medium leading-[170%] mt-[8px]">
            Direktorat TSI
          </p>
        </div>
        <div className="flex flex-col justify-center mt-[24px]">
          <p className="pl-[40px] text-komen font-pop text-[12px] font-normal leading-[170%]">
            Menu
          </p>
          <div className="flex flex-col mt-[16px]">
            <LinkSidebar
              title="Homepage"
              href={"/admin/dashboard"}
              icon={<IconHome />}
              active={activeMenu === "homepage"}
            />
            <LinkSidebar
              title="Inbox"
              href="/admin/inbox"
              icon={<IconInbox />}
              active={activeMenu === "inbox"}
            />
          </div>
        </div>
      </div>
      <button className="flex flex-row items-center gap-[8px] px-[40px]">
        <Logout />
        Logout
      </button>
    </aside>
  );
}
