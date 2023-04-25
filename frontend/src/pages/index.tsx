import { Seo } from '@/ui/component/seo';
import { Button } from '@/ui/design-system/button/button';
import { Typography } from '@/ui/design-system/typography/typography';
import { RiUser6Fill } from 'react-icons/ri';

export default function Home() {
  return (
    <>
      <Seo title="Coders Monkeys" description="Description..." />
      {/* <Typography variant="display" component="h1" theme="primary">
        Coders Monkeys web app
      </Typography> */}

      <div className="flex items-center gap-4 p-10">
        <Button size="small">Accent</Button>
        <Button size="small" variant="secondary">
          Secondary
        </Button>
        <Button size="small" variant="outline">
          Outline
        </Button>
        <Button size="small" variant="disabled" disabled>
          Disabled
        </Button>
        <Button size="small" variant="ico" icon={{ icon: RiUser6Fill }} />
      </div>
      <div className="flex items-center gap-4 p-10">
        <Button>Accent</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="disabled" disabled>
          Disabled
        </Button>
        <Button variant="ico" icon={{ icon: RiUser6Fill }} />
      </div>
      <div className="flex items-center gap-4 p-10">
        <Button size="large">Accent</Button>
        <Button size="large" variant="secondary">
          Secondary
        </Button>
        <Button size="large" variant="outline">
          Outline
        </Button>
        <Button size="large" variant="disabled" disabled>
          Disabled
        </Button>
        <Button size="large" variant="ico" icon={{ icon: RiUser6Fill }} />
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button size="large" variant="ico" icon={{ icon: RiUser6Fill }} />
        <Button
          size="large"
          variant="ico"
          icon={{ icon: RiUser6Fill }}
          iconTheme="secondary"
        />
        <Button
          size="large"
          variant="ico"
          icon={{ icon: RiUser6Fill }}
          iconTheme="gray"
        />
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button icon={{ icon: RiUser6Fill }} variant="secondary" size="small">
          Accent
        </Button>
        <Button icon={{ icon: RiUser6Fill }} iconPosition={'left'}>
          Accent
        </Button>
        <Button
          icon={{ icon: RiUser6Fill }}
          iconPosition={'right'}
          size="large"
        >
          Accent
        </Button>
      </div>
    </>
  );
}
