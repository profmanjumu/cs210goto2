type WorkSheetProps = {
  params: {
    id: string;
  };
};

export default async function Worksheet({ params }: WorkSheetProps) {
  const { id } = params;
  return (
    <main className="h-screen flex flex-col gap-4 items-center justify-center">
      <div>On individual worksheet page with assignment id: {id}</div>
    </main>
  );
}
