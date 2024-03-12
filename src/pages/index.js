import StatsBox from "../../components/Box/StatsBox";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col w-full h-full items-center justify-center">
        <Header />
        <div className="w-full h-full flex items-center justify-center">
          <StatsBox />
        </div>
    </div>
    </Layout>
  );
}
