import { Worksheet } from "@/lib/types";
import Link from "next/link";

const Worksheet = ({ ...item }: Worksheet) => {
  return (
    <div className="flex items-center gap-2">
      <Link href={`worksheet/${item.id}`}>{item.name}</Link>
    </div>
  );
};

export default Worksheet;
