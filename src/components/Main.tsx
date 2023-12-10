export default function Main({ children }: { children: React.ReactNode }) {
  return <main className='flex w-full flex-col max-w-7xl mx-auto pt-32 p-5 min-h-screen'>{children}</main>;
}
