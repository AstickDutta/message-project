// // src/app/birthday/page.tsx
import BirthdayCard from '@/components/BirthdayCard';

// interface BirthdayPageProps {
//   searchParams: {
//     name: string;
//   };
// }

// export default function BirthdayPage({ searchParams }: BirthdayPageProps) {
//   const name = searchParams.name || 'Guest';

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-pink-200 to-purple-200">
//       <BirthdayCard name={name} />
//     </div>
//   );
// }


interface BirthdayPageProps {
  searchParams: {
    name: string;
  };
}

export default function BirthdayPage({ searchParams }: BirthdayPageProps) {
  const name = searchParams.name || 'Guest';

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 to-purple-200">
      <BirthdayCard name={name} />
    </div>
  );
}
