import CardItem from "@/components/ui/CardItem";
import PaginationItem from "@/components/ui/PaginationItem";

const Posts = () => {
  return (
    <>
      <div className="grid sm:max-w-[75%] max-w-full m-auto grid-cols-3 gap-4">
        <CardItem title="hai" description="no" />
        <CardItem title="hai" description="no" />
        <CardItem title="hai" description="no" />
        <CardItem title="hai" description="no" />
        <CardItem title="hai" description="no" />
        <CardItem title="hai" description="no" />
      </div>
      <PaginationItem />
    </>
  );
};

export default Posts;
