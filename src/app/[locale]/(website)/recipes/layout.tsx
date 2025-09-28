import '@/app/globals.css';
import MenuButton from '@/components/ui/menu-button';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <MenuButton />
    </>
  );
}
