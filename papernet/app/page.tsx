import Image from "next/image";
import Mark from "./components/Mark";
import { Button } from "./components/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-4 h-screen justify-center">
        <div className="text-4xl">
          Hey🎉
          <br />
          This&apos;s <Mark>Papernet</Mark>
        </div>
        <div className="text-lg text-gray-700">记录历史，传递信息</div>
      </div>
    </div>
  );
}
