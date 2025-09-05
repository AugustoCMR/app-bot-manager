import './App.css'
import { CardBot } from './components/CardBot';
import { Router } from './routes/IndexRoutes'

function App() {

  return (
    <div className='space-y-4 h-full'>
      <div>
        <h1 className='text-zinc-50 font-bold text-xl'>Meus robôs</h1>
        <hr className='bg-zinc-50'/>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-2'>
        <CardBot />
        <CardBot />
        <CardBot />
      </div>
    </div>
  );
}

export default App
