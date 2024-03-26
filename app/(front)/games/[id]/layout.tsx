import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Game Info',
  description: 'Information about video games',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
