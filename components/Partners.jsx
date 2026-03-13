import Image from 'next/image'
import { Container } from './Container'
import Logo1 from '../assets/ShaipLogo.png'
import Logo2 from '../assets/Megdaplogo.png'
import Logo3 from '../assets/Karya-Logo.png'
import Logo4 from '../assets/bhashini.png'
import Logo5 from '../assets/GoogleLogo.png'
import Logo6 from '../assets/GcsLogo.png'
import Logo7 from '../assets/GtsLogo.png'



export function Partners() {
  return (
    <section
      id="Partners"
      aria-label="Our partners and collaborators"
      className="py-10 sm:py-16 bg-slate-50"
    >
      <Container>
        <div className="text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Our Partners
          </h2>
        </div>
        
        <div className="mx-auto max-w-7xl mt-16">
          <div className="flex flex-wrap justify-center items-center gap-16">
            <div className="flex justify-center items-center">
              <Image 
                src={Logo6} 
                alt="GCS" 
                width={120} 
                height={60}
                className="object-contain h-16" 
              />
            </div>
            <div className="flex justify-center items-center">
              <Image 
                src={Logo2} 
                alt="megdap" 
                width={120} 
                height={60}
                className="object-contain h-20" 
              />
            </div>
            <div className="flex justify-center items-center">
              <Image 
                src={Logo3} 
                alt="karya" 
                width={120} 
                height={60}
                className="object-contain h-20" 
              />
            </div>
            <div className="flex justify-center items-center">
              <Image 
                src={Logo1} 
                alt="Shaip" 
                width={120} 
                height={60}
                className="object-contain h-16" 
              />
            </div>
            <div className="flex justify-center items-center">
              <Image 
                src={Logo7} 
                alt="GTS" 
                width={120} 
                height={60}
                className="object-contain h-16" 
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Partners; 