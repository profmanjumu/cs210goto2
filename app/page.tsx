import Header from "@/components/landing-page/header";

type HomeProps = {
  searchParams: {
    search: string;
  };
};

export default function Home({ searchParams }: HomeProps) {
  const searchTerm = searchParams.search;
  console.log(searchTerm);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
    </main>
  );
}
