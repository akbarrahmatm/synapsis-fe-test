import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const PaginationItem = () => {
  return (
    <>
      <div className="mt-10 flex justify-center gap-4">
        <div>
          <button className="hover:bg-slate-100 text-slate-800 border-[0.02rem] border-slate-100 disabled:text-slate-300 px-2 py-1 rounded-xl flex gap-2 font-medium">
            <LeftOutlined />
            Previous
          </button>
        </div>
        <div>
          <button className="hover:bg-slate-100 text-slate-800 border-[0.02rem] border-slate-100 disabled:text-slate-300 px-2 py-1 rounded-xl flex gap-2 font-medium">
            Next
            <RightOutlined />
          </button>
        </div>
      </div>
    </>
  );
};

export default PaginationItem;
