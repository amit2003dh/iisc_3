import Image from 'next/image';
import PrashantaImage from '../assets/Prasanta_Kumar_Ghosh.jpg';
import RaghuramdImage from '../assets/raghuramd.png';
import NiharImage from '../assets/Nihar6.png';
import { useInView } from '../hooks/useInView';

const bioData = [
  {
    id: "1",
    name: "Dr. Prasanta Kumar Ghosh",
    image: PrashantaImage,
    subBio: "Associate Professor, Dept of Electrical Engineering, IISc Bangalore",
    bio: "Prasanta Kumar Ghosh received his Ph.D. in Electrical Engineering from University of Southern California (USC), Los Angeles, USA in 2011. During 2011-2012 he was with IBM India Research Lab (IRL) as a researcher. He was awarded the INSPIRE faculty fellowship from Department of Science and Technology (DST), Govt. of India in 2012. His research interests are in human centered signal processing with applications to education and health care.",
  },
  {
    id: "2",
    name: "Raghu Dharmaraju",
    image: RaghuramdImage,
    subBio: "CEO, Artpark",
    bio: "A highly experienced innovator with over two decades of experience conceiving and scaling pioneering institutions and innovations. He has launched a portfolio of eight AI innovations, including TRACE-TB, a major national initiative. He has raised $19 million from the Gates Foundation, USAID, and Google.org. He holds a B.Tech from IIT Madras, an M.S. from the University of Massachusetts, Amherst, and an M.B.A. from Cornell.",
  },
  {
    id: "3",
    name: "Nihar Desai",
    image: NiharImage,
    subBio: "Program Lead",
    bio: "Nihar comes with a decade of experience spanning strategy, operations & program management. A seasoned management generalist, he has a knack for understanding technology and is passionate for its applications for creating societal impact. Having been an entrepreneur for half a decade, he has led strategy, product and technology operations at large startups. He finished his B.Tech from NIT Surat and earned his MBA from ISB.",
  },
];

function BioCard({ item, index }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(36px)',
        transition: `opacity 0.75s ease ${index * 120}ms, transform 0.75s ease ${index * 120}ms`,
      }}
      className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform duration-700"
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55))' }} />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-white font-bold text-xl leading-tight drop-shadow">{item.name}</p>
          <p className="text-blue-200 text-xs font-medium mt-0.5">{item.subBio}</p>
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#212191] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#212191]" />
            Project Vaani
          </span>
        </div>
        <p className="text-gray-500 leading-relaxed text-sm flex-1">{item.bio}</p>
      </div>
    </div>
  );
}

function Bio() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {bioData.map((item, index) => (
        <BioCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}

export default Bio;
