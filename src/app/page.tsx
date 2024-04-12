import Navigation from "@/components/Navigation/Navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="view view--home">
        <h1 className="text-center text-7xl font-bold">Paweł Broniarczyk</h1>
        <h2 className="text-center text-5xl font-thin">Frontend Developer</h2>
        <Navigation />
      </div>
    </main>
  );
}
