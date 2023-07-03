import LogbookNav from './LogbookNav';
import NavBar from './NavBar';
import LogBookEntriesSearch from './LogBookEntriesSearch';
import LogBookEntry from './LogBookEntry';
import TakeoffsAndLandings from './TakeoffsAndLandings';

export default function Home() {
  return (
    <main className='flex h-screen overflow-y-hidden shadow-xl'>
      <NavBar />
      <div className='bg-gray-200 w-full items-center justify-between font-mono'>
        <LogbookNav />
        <div className='flex'>
          <LogBookEntriesSearch />
          <div className='mx-auto'>
            <div className='mb-3'>
              <LogBookEntry />
            </div>
            <div>
              <TakeoffsAndLandings />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
