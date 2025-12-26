import HomeHeader from "./_components/home/HomeHeader";
import HomeMain from "./_components/home/HomeMain";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeHeader />
      <HomeMain />
    </div>
  );
}
