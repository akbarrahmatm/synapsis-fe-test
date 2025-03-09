import Hero from "@/components/Hero";
import Menus from "@/components/Menus";

export default function Home() {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center relative "
        style={{ backgroundImage: "url('/bg.webp')" }}
      >
        <div className="max-w-[80%] m-auto pt-[2%]">
          <Menus />
          <Hero />
        </div>
      </div>
    </>
  );
}
