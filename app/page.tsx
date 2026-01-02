import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div  className="text-lg w-screen h-screen flex items-center justify-center">
      <div>
        <h1>Chat Application</h1>
        <br/>
        <br/>
        <br/>
        <Link className="text-blue-500 border hover:underline" href="/signin">sign in todo app</Link>
        <br/>
        <Link className="text-blue-500 border hover:underline" href="/signup">sign up todo app</Link>
      </div>
    </div>
  );
}
