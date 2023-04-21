import { Seo } from '@/ui/component/seo';
import { Typography } from '@/ui/design-system/typography/typography';

export default function Home() {
  return (
    <>
      <Seo title="Coders Monkeys" description="Description..." />
      <Typography variant="display" component="h1" theme="primary">
        Coders Monkeys web app
      </Typography>
    </>
  );
}
