import { Seo } from '@/ui/component/seo';
import { Avatar } from '@/ui/design-system/avatar/avatar';
import { Button } from '@/ui/design-system/button/button';
import { Logo } from '@/ui/design-system/logo/logo';
import { Spinner } from '@/ui/design-system/spinner/spinner';
import { Typography } from '@/ui/design-system/typography/typography';
import { RiShieldUserLine, RiNotification2Fill } from 'react-icons/ri';

export default function Home() {
  return (
    <>
      <Seo title="Coders Monkeys" description="Description..." />
      <div className="max-w-6xl mx-auto py-10 space-y-10">
        {/* Typography */}
        <div className="flex flex-wrap gap-6">
          <Typography variant="body-lg" weight="medium" component="p">
            Typography
          </Typography>
          <div className="shadow-lg p-6">
            <Typography variant="body-base" component="p">
              Display
            </Typography>
            <Typography variant="display" component="div">
              Nothing is impossible
            </Typography>
          </div>
          <div className="shadow-lg p-6">
            <Typography variant="body-base" component="p">
              H1
            </Typography>
            <Typography variant="h1" component="h1">
              Nothing is impossible
            </Typography>
          </div>
          <div className="shadow-lg p-6">
            <Typography variant="body-base" component="p">
              H2
            </Typography>
            <Typography variant="h2" component="h2">
              Nothing is impossible
            </Typography>
          </div>
          <div className="shadow-lg p-6">
            <Typography variant="body-base" component="p">
              H3
            </Typography>
            <Typography variant="h3" component="h3">
              Nothing is impossible
            </Typography>
          </div>
          <div className="shadow-lg p-6">
            <Typography variant="body-base" component="p">
              H4
            </Typography>
            <Typography variant="h4" component="h4">
              Nothing is impossible
            </Typography>
          </div>
          <div className="shadow-lg p-6">
            <Typography variant="body-base" component="p">
              H5
            </Typography>
            <Typography variant="h5" component="h5">
              Nothing is impossible
            </Typography>
          </div>
          <div className="shadow-lg p-6">
            <Typography variant="body-base" component="p">
              Lead
            </Typography>
            <Typography variant="lead" component="p">
              Nothing is impossible
            </Typography>
          </div>
          <div className="shadow-lg p-2 w-36">
            <Typography variant="body-base" component="p">
              Body-lg
            </Typography>
            <Typography variant="body-lg" component="p">
              Nothing is impossible
            </Typography>
          </div>
          <div className="shadow-lg p-2 w-36">
            <Typography variant="body-base" component="p">
              Body-base
            </Typography>
            <Typography variant="body-base" component="p">
              Nothing is impossible
            </Typography>
          </div>
          <div className="shadow-lg p-2 w-36">
            <Typography variant="body-base" component="p">
              Body-sm
            </Typography>
            <Typography variant="body-sm" component="p">
              Nothing is impossible
            </Typography>
          </div>
          <div className="shadow-lg p-2 w-36">
            <Typography variant="body-base" component="p">
              Caption 1
            </Typography>
            <Typography variant="caption1" component="p">
              Nothing is impossible
            </Typography>
          </div>
          <div className="shadow-lg p-2 w-36">
            <Typography variant="body-base" component="p">
              Caption 2
            </Typography>
            <Typography variant="caption2" component="p">
              Nothing is impossible
            </Typography>
          </div>
          <div className="shadow-lg p-2 w-36">
            <Typography variant="body-base" component="p">
              Caption 3
            </Typography>
            <Typography variant="caption3" component="p">
              Nothing is impossible
            </Typography>
          </div>
          <div className="shadow-lg p-2 w-36">
            <Typography variant="body-base" component="p">
              Caption 4
            </Typography>
            <Typography variant="caption4" component="p">
              Nothing is impossible
            </Typography>
          </div>
        </div>
        <div className="flex gap-6">
          {/* Spinner */}
          <div className="flex flex-col items-start">
            <Typography variant="body-lg" weight="medium" component="p">
              Spinner
            </Typography>
            <div className="flex flex-col items-center gap-2 p-6 shadow-lg">
              <Spinner size="small" />
              <Spinner />
              <Spinner size="large" />
            </div>
          </div>
          {/* Avatar */}
          <div className="flex flex-col items-start">
            <Typography variant="body-lg" weight="medium" component="p">
              Avatar
            </Typography>
            <div className="flex flex-col items-center gap-2 p-6 shadow-lg">
              <Avatar
                alt="Avatar de Daniel Lincoln"
                src="/assets/images/daniel-lincoln-pe-X2NUwVQo-unsplash1.png"
                size="small"
              />
              <Avatar
                alt="Avatar de Daniel Lincoln"
                src="/assets/images/daniel-lincoln-pe-X2NUwVQo-unsplash1.png"
              />
              <Avatar
                alt="Avatar de Daniel Lincoln"
                src="/assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
                size="large"
              />
            </div>
          </div>
          {/* Logo */}
          <div className="flex flex-col items-start">
            <Typography variant="body-lg" weight="medium" component="p">
              Logo
            </Typography>
            <div className="flex items-center gap-2 p-6 shadow-lg">
              <Logo size="very-small" />
              <Logo size="small" />
              <Logo />
              <Logo size="large" />
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex flex-col items-start gap-4">
          <Typography variant="body-lg" weight="medium" component="p">
            Buttons
          </Typography>
          <div className=" flex flex-col gap-3 p-6 shadow-lg">
            <Typography variant="body-base" weight="medium" component="p">
              Small
            </Typography>
            <div className="flex items-center gap-3">
              <Button size="small" isLoading>
                Accent
              </Button>
              <Button
                size="small"
                icon={{ icon: RiShieldUserLine }}
                iconPosition="left"
                isLoading
              >
                Accent
              </Button>
              <Button size="small" variant="secondary" isLoading>
                Secondary
              </Button>
              <Button
                size="small"
                icon={{ icon: RiNotification2Fill }}
                variant="ico"
                isLoading
              />
              <Button
                size="small"
                icon={{ icon: RiNotification2Fill }}
                variant="ico"
                iconTheme="secondary"
                isLoading
              />
              <Button
                size="small"
                icon={{ icon: RiNotification2Fill }}
                variant="ico"
                iconTheme="gray"
                isLoading
              />
              <Button size="small" variant="outline" isLoading>
                Outline
              </Button>
              <Button size="small" variant="disabled" disabled isLoading>
                Disabled
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <Button size="small">Accent</Button>
              <Button
                size="small"
                icon={{ icon: RiShieldUserLine }}
                iconPosition="left"
              >
                Accent
              </Button>
              <Button size="small" variant="secondary">
                Secondary
              </Button>
              <Button
                size="small"
                icon={{ icon: RiNotification2Fill }}
                variant="ico"
              />
              <Button
                size="small"
                icon={{ icon: RiNotification2Fill }}
                variant="ico"
                iconTheme="secondary"
              />
              <Button
                size="small"
                icon={{ icon: RiNotification2Fill }}
                variant="ico"
                iconTheme="gray"
              />
              <Button size="small" variant="outline">
                Outline
              </Button>
              <Button size="small" variant="disabled" disabled>
                Disabled
              </Button>
            </div>
          </div>
          <div className=" flex flex-col gap-3 p-6 shadow-lg">
            <Typography variant="body-base" weight="medium" component="p">
              Medium
            </Typography>
            <div className="flex items-center gap-3">
              <Button isLoading>Accent</Button>
              <Button
                icon={{ icon: RiShieldUserLine }}
                iconPosition="left"
                isLoading
              >
                Accent
              </Button>
              <Button variant="secondary" isLoading>
                Secondary
              </Button>
              <Button
                icon={{ icon: RiNotification2Fill }}
                variant="ico"
                isLoading
              />
              <Button
                icon={{ icon: RiNotification2Fill }}
                variant="ico"
                iconTheme="secondary"
                isLoading
              />
              <Button
                icon={{ icon: RiNotification2Fill }}
                variant="ico"
                iconTheme="gray"
                isLoading
              />
              <Button variant="outline" isLoading>
                Outline
              </Button>
              <Button variant="disabled" disabled isLoading>
                Disabled
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <Button>Accent</Button>
              <Button icon={{ icon: RiShieldUserLine }} iconPosition="left">
                Accent
              </Button>
              <Button variant="secondary">Secondary</Button>
              <Button icon={{ icon: RiNotification2Fill }} variant="ico" />
              <Button
                icon={{ icon: RiNotification2Fill }}
                variant="ico"
                iconTheme="secondary"
              />
              <Button
                icon={{ icon: RiNotification2Fill }}
                variant="ico"
                iconTheme="gray"
              />
              <Button variant="outline">Outline</Button>
              <Button variant="disabled" disabled>
                Disabled
              </Button>
            </div>
          </div>
          <div className=" flex flex-col gap-3 p-6 shadow-lg">
            <Typography variant="body-base" weight="medium" component="p">
              Large
            </Typography>
            <div className="flex items-center gap-3">
              <Button size="large" isLoading>
                Accent
              </Button>
              <Button
                size="large"
                icon={{ icon: RiShieldUserLine }}
                iconPosition="left"
                isLoading
              >
                Accent
              </Button>
              <Button size="large" variant="secondary" isLoading>
                Secondary
              </Button>
              <Button
                size="large"
                icon={{ icon: RiNotification2Fill }}
                variant="ico"
                isLoading
              />
              <Button
                size="large"
                icon={{ icon: RiNotification2Fill }}
                variant="ico"
                iconTheme="secondary"
                isLoading
              />
              <Button
                size="large"
                icon={{ icon: RiNotification2Fill }}
                variant="ico"
                iconTheme="gray"
                isLoading
              />
              <Button size="large" variant="outline" isLoading>
                Outline
              </Button>
              <Button size="large" variant="disabled" disabled isLoading>
                Disabled
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <Button size="large">Accent</Button>
              <Button
                size="large"
                icon={{ icon: RiShieldUserLine }}
                iconPosition="left"
              >
                Accent
              </Button>
              <Button size="large" variant="secondary">
                Secondary
              </Button>
              <Button
                size="large"
                icon={{ icon: RiNotification2Fill }}
                variant="ico"
              />
              <Button
                size="large"
                icon={{ icon: RiNotification2Fill }}
                variant="ico"
                iconTheme="secondary"
              />
              <Button
                size="large"
                icon={{ icon: RiNotification2Fill }}
                variant="ico"
                iconTheme="gray"
              />
              <Button size="large" variant="outline">
                Outline
              </Button>
              <Button size="large" variant="disabled" disabled>
                Disabled
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
