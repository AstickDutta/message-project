// src/app/page.tsx
import BirthdayMessage from '@/components/BirthdayMessage';

export default function Home() {
  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <BirthdayMessage />
    </main>
  );
}