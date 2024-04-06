import useTemplate from '@/src/hooks/useTemplate';

export default function Home() {
  const { fetchTemplate } = useTemplate();

  fetchTemplate();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello world
    </main>
  );
}
