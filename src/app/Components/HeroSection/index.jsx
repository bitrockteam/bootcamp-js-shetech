import Image from 'next/image'
import LogoShetech from '/public/LogoSheTech.png'
import LogoBitrock from '/public/Bitrock.png'

export const HeroSection = () => {
  return (
    <div className="relative bg-[#ffffffd6] isolate px-6 lg:px-8 font-sans">
        <div className="mx-auto max-w-5xl py-10 sm:py-48 lg:py-16">
          <div className="text-center">
          <div className="flex align-middle items-center md:gap-20 py-10 text-center justify-center">
            <a target='blank' href='https://shetechitaly.org/'><Image
                  src={LogoShetech}
                  alt="LogoSheTech"
                  width={0}
                  height={0}
                  style={{ width: '150px', height: 'auto' }}
            />
            </a>
            <a target='blank' href='https://bitrock.it/'>
            <Image
                  src={LogoBitrock}
                  alt="LogoBitrock"
                  width={0}
                  height={0}
                  style={{ width: '200px', height: 'auto' }}
                />
            </a>
          </div>
            <h4 className='text-2xl text-[#505050] my-10 py-5'>SheTech & Bitrock Coding Bootcamp:</h4>
            <h1 className="text-6xl font-bold tracking-tight text-[#505050] sm:text-6xl">
              JavaScript from scratch
            </h1>
            <p className="mt-6 py-10 text-3xl font-bold leading-8 text-[#505050] ">
              08/06/2024 - Milano @TalentGarden Calabiana
            </p>
            <p className="mt-6 py-1 text-2xl font-bold leading-8 text-[#505050] ">
              08:30 / 17:00
            </p>
            <div className="mt-10 mb-10 flex items-center justify-center gap-x-6">
              <a
                target='blank'
                href="https://www.eventbrite.it/e/registrazione-shetech-bitrock-coding-bootcamp-javascript-from-scratch-893569198527"
                className="rounded-md text-1xl bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                SCOPRI L'EVENTO
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}