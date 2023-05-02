import clsx from 'clsx';
import Image from 'next/image';

interface Props {
  size?: 'small' | 'medium' | 'large';
  src: string;
  alt: string;
}

export const Avatar = ({ size = 'medium', src, alt }: Props) => {
  let sizeStyle: string;

  switch (size) {
    case 'small':
      sizeStyle = 'w-[24px] h-[24px]';
      break;
    case 'medium': // Default
      sizeStyle = 'w-[34px] h-[34px]';
      break;
    case 'large':
      sizeStyle = 'w-[50px] h-[50px]';
      break;
  }
  return (
    <div className={clsx('bg-gray-500 rounded-full relative', sizeStyle)}>
      <Image
        src={src}
        alt={alt}
        className="object-cover object-center rounded-full"
        fill
      />
    </div>
  );
};
