import clsx from "clsx";

type CardStatusProps = {
  status: "Open" | "Close";
};

const CardStatus = ({ status = "Open" }: CardStatusProps) => {
  return (
    <div
      className={clsx(
        status === "Open"
          ? "border border-[#BC8700]  text-[#BC8700]"
          : "border border-[#4CAF50] text-[#4CAF50]",
        "p-3 rounded-md text-xs font-pop text-[12px] font-normal leading-normal"
      )}
    >
      {status === "Open" ? "Waiting to be resolved" : "Resolved"}
    </div>
  );
};

export default CardStatus;
