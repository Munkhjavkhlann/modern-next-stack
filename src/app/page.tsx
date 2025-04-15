import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1>Click here to go to Dashboard</h1>
        <Link href="/dashboard">
          <h1 className="px-4 py-2 text-white rounded-lg bg-violet-500 hover:bg-violet-600">Dashboard</h1>
        </Link>
      </div>
    </section>
  );
}
