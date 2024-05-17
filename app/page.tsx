import Image from "next/image";
import signIn from "../@assets/oldsignIn.png";
import LogIn from "@/components/module/logIn/page";

export default function Home() {
  return (
    <main className="lg:flex lg:items-center lg:justify-between h-screen max-w-screen-2xl mx-auto md:px-0 px-5">
      <div>
        <Image src={signIn} alt={""} />
      </div>
      <div>
        <LogIn />
      </div>
    </main>
  );
}
