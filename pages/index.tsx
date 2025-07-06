import Head from "next/head";
import Card from "@/components/common/Card";

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Listings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Beach House"
            description="A beautiful house near the ocean."
            image="/assets/house1.jpg"
            price="$250/night"
          />
          {/* Add more <Card />s here */}
        </div>
      </main>
    </>
  );
}
