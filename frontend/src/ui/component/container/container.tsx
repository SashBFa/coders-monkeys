import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={clsx('max-w-7xl w-full px-5 mx-auto lg:px-10', className)}>
      {children}
    </div>
  );
};
