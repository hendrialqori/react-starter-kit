import React from 'react'
import { cn } from '@/helpers/cn'

export default function Home() {

  const [count, setCount] = React.useState(0)

  const handleCount = () => setCount(prev => prev + 1)

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <section className='text-center'>
        <h1 className='text-2xl font-medium mb-6'>Welcome! React typescript started kit :)</h1>
        <button
          onClick={handleCount}
          className={cn(
            'px-4 py-1 rounded-md outline outline-3 outline-4 transition-[outline]',
            'active:outline-3 active:outline-blue-500 active:scale-95 active:translate-y-1'
          )}
        >
          count : {count}
        </button>
      </section>
    </main>
  )
}