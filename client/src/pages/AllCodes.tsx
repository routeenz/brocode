import CodeItem from "@/components/CodeItem";
import { useGetAllCodesQuery } from "@/redux/slices/api";

export default function AllCodes() {
  const { data: allCodes } = useGetAllCodesQuery();

  return (
    <div className="h-screen  custom-bg ">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 p-3">
        {allCodes && allCodes.length !== 0 ? (
          allCodes.map((codeItem) => (
            <CodeItem deleteBtn={false} key={codeItem._id} data={codeItem} />
          ))
        ) : (
          <p className="block w-full text-slate-500 font-mono text-center p-3">
            No Codes Found!
          </p>
        )}
      </div>
    </div>
  );
}
