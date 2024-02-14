import Header from "@/components/landing-page/header";
import InstructorInfo from "@/components/landing-page/instructor-info";

type HomeProps = {
  searchParams: {
    search: string;
  };
};

export default async function Home({ searchParams }: HomeProps) {
  const searchTerm = searchParams.search;
  console.log(searchTerm);

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <Header />
      <InstructorInfo />
    </main>
  );
}
