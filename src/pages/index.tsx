import Hero from "@/components/Blog/Hero";
import MenuButton from "@/components/Blog/MenuButton";
import Posts from "@/components/Blog/Posts";

export default function Home() {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center relative "
        style={{ backgroundImage: "url('/bg.webp')" }}
      >
        <div className="max-w-[80%] m-auto py-[2%] z-[9999999]">
          <MenuButton />
          <Hero />
          <Posts />
        </div>
      </div>
    </>
  );
}
