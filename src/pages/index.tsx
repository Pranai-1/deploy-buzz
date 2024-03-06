import { useRouter } from "next/router";



export default function Home() {
  const router=useRouter()
  return (
    <div className="bg-orange-400 text-white font-bold">
      <button onClick={()=>router.push("/signup")}>signup</button>
      <button onClick={()=>router.push("/login")}>login</button>
    </div>
  );
}
