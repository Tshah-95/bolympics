import Layout from "@/components/layout";
import NavigationMenu from "@/components/layout/navigation-menu";



export default function Dashboard() {
  return (
    <Layout>
      <NavigationMenu />
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      <div className="my-10 grid w-full max-w-screen-xl grid-cols-1 gap-5 px-5 md:grid-cols-2 lg:grid-cols-3 xl:px-0 animate-[scale-in-fade_1s_ease-in-out]">
        {[ ...Array(10).keys() ].map((key) => (<div key={key} className={`relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md z-0`} />))}
      </div>
    </Layout>
  );
}
