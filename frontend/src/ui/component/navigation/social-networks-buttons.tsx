import { Button } from '@/ui/design-system/button/button';
import { footerSocialNetworkdsLinks } from './app-links';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';
import { RiFacebookFill } from 'react-icons/ri';

interface Props {
  theme?: 'gray' | 'accent' | 'secondary';
  className?: string;
}

export const SocialNetworksButtons = ({
  className,
  theme = 'accent',
}: Props) => {
  const icoList = footerSocialNetworkdsLinks.map((socialNetwork) => (
    <Button
      key={uuidv4()}
      variant="ico"
      iconTheme={theme}
      icon={{
        icon: socialNetwork.icon ? socialNetwork.icon : RiFacebookFill,
      }}
      baseUrl={socialNetwork.baseUrl}
      linkType={socialNetwork.type}
    />
  ));
  return (
    <div className={clsx('flex items-center gap-2.5', className)}>
      {icoList}
    </div>
  );
};
