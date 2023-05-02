import { Navigation } from '@/ui/component/navigation/navigation';
import { Seo } from '@/ui/component/seo/seo';

export default function Home() {
  return (
    <>
      <Seo title="Coders Monkeys" description="Description..." />
      <Navigation />
    </>
  );
}
