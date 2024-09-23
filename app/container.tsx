import Game from '@components/game/game';
import Highlights from '@components/Highlights';

interface Props {
  children: React.ReactNode;
}

export default function HomePageContainer({ children }: Props) {
  return (
    <main className="flex flex-col gap-y-6 p-4">
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between w-full max-w-screen-lg mx-auto">
        <div id="intro" className="flex-1 rounded-lg p-6 w-full">
          {children}
        </div>
        <Game />
      </div>
      <Highlights />
    </main>
  );
}
