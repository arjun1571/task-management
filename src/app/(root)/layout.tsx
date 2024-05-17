export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <h1>this is header</h1>
      <h1>this is sidebar</h1>
      <div className="">{children}</div>
    </main>
  );
}
