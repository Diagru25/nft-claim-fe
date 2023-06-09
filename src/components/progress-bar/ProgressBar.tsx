import { numberWithCommas } from "@/helpers/string";
import { FC } from "react";

type Props = {
  minted: number;
  total: number;
};

const ProgressBar: FC<Props> = ({ minted, total }) => {
  const percent = Math.round((minted / total) * 100 * 100) / 100;
  return (
    <div className="w-full pb-2">
      <div className="w-full flex justify-between sm:text-sm">
        <span className="font-bold">{percent}% minted</span>
        <span className="italic" style={{ color: "#999" }}>
          {numberWithCommas(minted)} / {numberWithCommas(total)}
        </span>
      </div>
      <div className="h-2 w-full bg-gray rounded overflow-hidden">
        <div
          style={{ width: `${percent}%` }}
          className={`h-full bg-primary`}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
