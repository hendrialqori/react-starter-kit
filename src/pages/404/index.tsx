import { PiSmileySadThin } from 'react-icons/pi'

export default function NotFound() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <section className='flex justify-center items-center flex-col'>
        <PiSmileySadThin className="text-[45px]" />
        <h1 className='text-lg font-medium'>Page not found </h1>
      </section>
    </main>
  )
}