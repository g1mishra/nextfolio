import CodeShowcase from '@components/code-showcase/CodeShowcase';

interface Props {
  children: React.ReactNode;
}

export default function HomePageContainer({ children }: Props) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between w-full max-w-screen-lg mx-auto min-h-[95%]">
      <div id="intro" className="flex-1 rounded-lg p-6 w-full flex-col items-center">
        {children}
      </div>
      <CodeShowcase />
    </div>
  );
}
