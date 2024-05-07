import Image from 'next/image'
import LogoShetech from '/public/LogoSheTech.png'
import LogoBitrock from '/public/Bitrock.png'
import LinkedIn from '/public/linkedInicon.png'
import Instagram from '/public/instagram.png'
import Spotify from '/public/spotify.png'
import Facebook from '/public/facebook.png'
import Medium from '/public/medium.png'

export const SocialSection = () => {
  return (

      <div className="relative isolate px-6 lg:px-8 font-sans">
          <div className="mx-auto max-w-5xl py-10 sm:py-48 lg:py-8">
            <div className="text-center">
              <h1 className="text-4xl mb-10 font-bold tracking-tight text-[#505050] sm:text-4xl">
                Seguici sui nostri canali social.
              </h1>
              <div className="flex gap-4 flex-wrap justify-items-center align-middle items-center md:gap-20 py-10 mt-8s text-center justify-center">
                <div className='bg-[#e9e7e89e] px-20 py-10 rounded text-center min-w-96 min-h-80 flex flex-col justify-center'>
                  <Image
                        src={LogoShetech}
                        alt="LogoSheTech"
                        width={0}
                        height={0}
                        style={{ width: '150px', height: 'auto', margin: '0 auto' }}
                  />
                  <div className='flex flex-row gap-4 mt-5 justify-center'>
                    <a href='https://www.linkedin.com/company/shetech/' target='_blank'><Image src={LinkedIn} width={24} height={24} /></a>
                    <a href='https://www.instagram.com/shetech_italy?igsh=MW53dXFqbWhuMXFrZA==' target='_blank'><Image src={Instagram} width={24} height={24} /></a>
                    <a href='https://open.spotify.com/show/32WuZrI8uVVXjr6tj0drFy' target='_blank'><Image src={Spotify} width={24} height={24} /></a>
                    <a href='https://www.facebook.com/shetechitaly/' target='_blank'><Image src={Facebook} width={24} height={24} /></a>
                  </div>
                </div>
                <div className='bg-[#e9e7e89e] px-20 py-10 rounded text-center min-w-96 min-h-80 flex flex-col justify-center'>
                     <Image
                      src={LogoBitrock}
                      alt="LogoBitrock"
                      width={0}
                      height={0}
                      style={{ width: '200px', height: 'auto', margin: '0 auto' }}
                    />
                    <div className='flex flex-row gap-4 mt-5 justify-center'>
                      <a href='https://www.linkedin.com/company/bitrock-srl/mycompany/verification/' target='_blank'><Image alt='icon' src={LinkedIn} width={24} height={24} /></a>
                      <a href='https://www.instagram.com/bitrockteam?igsh=MW9idHhkNHlmenBsNQ==' target='_blank'><Image alt='icon' src={Instagram} width={24} height={24} /></a>
                      <a href='https://web.facebook.com/bitrockIT' target='_blank'><Image alt='icon' src={Facebook} width={24} height={24} /></a>
                      <a href='https://medium.com/@BitrockIT' target='_blank'><Image alt='icon' src={Medium} width={24} height={24} /></a>
                    </div>
                </div>
              </div>
            </div>
          </div>
      </div>

  )
}