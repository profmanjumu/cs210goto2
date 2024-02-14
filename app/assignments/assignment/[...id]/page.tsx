type AssignmentPageProps = {
  params: {
    id: string;
  };
};

export default function AssignmentPage({ params }: AssignmentPageProps) {
  const { id } = params;

  return (
    <main className="h-screen flex flex-col gap-4">
      <div>{id}</div>
    </main>
  );
}
