import LogbookNav from './LogbookNav';
import NavBar from './NavBar';
import LogBookEntriesSearch from './LogBookEntriesSearch';


export default function Home() {
  return (
    <main className='flex h-screen overflow-y-hidden shadow-xl'>
      <NavBar />
      <div className='bg-gray-200 w-full items-center justify-between font-mono'>
        <LogbookNav />
        <LogBookEntriesSearch />
      </div>
    </main>
  );
}
