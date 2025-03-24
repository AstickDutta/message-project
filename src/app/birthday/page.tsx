
import BirthdayCard from '@/components/BirthdayCard';

interface BirthdayPageProps {
  searchParams?: Promise<Record<string, string | undefined>>;
}

export default async function BirthdayPage({ searchParams }: BirthdayPageProps) {
  const params = await searchParams;
  const name = params?.name ?? 'Guest';

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 to-purple-200 flex justify-center items-center">
      <BirthdayCard name={name} />
    </div>
  );
}

