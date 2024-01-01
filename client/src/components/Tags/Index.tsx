interface TagsProps {
  tags: string;
}

export default function Tags(props: TagsProps) {
  const { tags } = props;
  return (
    <div className="flex flex-row gap-[8px]">
      <div className="bg-[#E2F5FF] px-[8px] py-[4px] rounded-[6px]">
        <p className="text-primary font-pop text-[10px] font-normal leading-normal">
          {tags}
        </p>
      </div>
    </div>
  );
}
