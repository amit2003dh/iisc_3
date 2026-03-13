import { useState, useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

// Language data (can be passed as a prop or stored locally)
const languageData = [
  {
    name: 'Tulu',
    description: 'Tulu is a Dravidian language spoken primarily in the coastal regions of Karnataka and Kerala. It has a rich oral tradition and distinct phonetic features that set it apart from other Dravidian languages, reflecting the unique cultural identity of the Tulu-speaking community.',
    audioUrl: 'https://storage.googleapis.com/vaani-website-sample-files/Karnataka_DakshinKannada_Vais35676_1007110000_DakshinKannada-SPECIFIC_00770_19713_25078.wav',
    transcription: ' "ಮಾತಲ ಐನ್ ಉಲಯಿ ಉಪ್ಪುಂಡು ಉಂಡು ಪಂಡ್ ದು ನೆಟ್ಟ್ ತೋಜು ಪೋಪುಂಡು ಮಸ್ತ್ ಜನ ಉಪ್ಪುವೆರ್ ನೆಟ್ಟ್."'
  },
  {
    name: 'Bearybashe',
    description: 'Bearybashe, also known as Beary or Biryani, is a language spoken by the Beary community in coastal Karnataka. It incorporates elements from Kannada, Tulu, and Urdu, making it a unique linguistic blend that reflects the diverse cultural influences in the area.',
    audioUrl: 'https://storage.googleapis.com/vaani-website-sample-files/C%3A%5CProject%5Cgcs%20Upload%20Code%5Cgcs_upload_separate%5CData%5CBearybashe%5CIISc_VaaniProject_M_KA_DakshinKannada_Moha99609_0821160000_KTCMMAO_136341_589_4854.wav',
    transcription: '"ಇದೊರ್‌ ತಾಲ್ಲೂಕ್‌ ಆಪಿಸ್‌{office} ಆಯಿಟಿಕ್ಕ್‌ರ್‌ ನಂಗ ಎಂದ್ರೆ ರೇಷನ್‌{ration} ಕಾರ್ಡ್‌{card} ಎಲ್ಲ ಆಧಾರ್‌{Adhar} ಕಾರ್ಡ್‌{card} ಎಲ್ಲ ಆಕನೆಂಗ್ ಇವ್ಡೆಗೇ ಪೋಂಡೆ."'
  },
  {
    name: 'Konkani',
    description: 'Konkani is an Indo-Aryan language spoken primarily in the Indian state of Goa, as well as in parts of Karnataka, Maharashtra, and Kerala. It has several dialects and is written in multiple scripts, including Devanagari, Roman, Kannada, and Malayalam. Konkani has a rich literary tradition and is known for its vibrant folk music and dance forms.',
    audioUrl: 'https://storage.googleapis.com/vaani-website-sample-files/Goa_NorthSouthGoa_45021854_1310240000_NorthSouthGoa-SPECIFIC_00768_17749_20736.wav',
    transcription: ' "आणि ते पुतळ्यान हातींन एक खयचे बुक {book} धर्ला."'
  },
  {
    name: 'Malvani',
    description: 'It is often classified as a dialect of Konkani, which is the official language of Goa. However, many speakers identify it as a distinct language due to its unique characteristics and cultural significance.. Malvani exhibits distinct vocabulary and pronunciation that set it apart from standard Marathi and Konkani',
    audioUrl: 'https://storage.googleapis.com/vaani-website-sample-files/C%3A%5CProject%5Cgcs%20Upload%20Code%5Cgcs_upload_separate%5CData%5CMalwani%5CMalwani.wav',
    transcription: '"व छोटी मोठी झाडे शोभेसाठी ठेवलेली असत."'
  },
  {
    name: 'Duruwa',
    description: 'It is a Central Dravidian language spoken by the Duruwa people, primarily found in the districts of Koraput in Odisha and Bastar in Chhattisgarh. The census data indicates that there were approximately 18,151 speakers of Duruwa in Odisha at that time.',
    audioUrl: 'https://storage.googleapis.com/vaani-website-sample-files/C%3A%5CProject%5Cgcs%20Upload%20Code%5Cgcs_upload_separate%5CData%5CDuruwa%5CCG_Sukma_Bhun26589_0718250000_TGKTES_53632_13888_19797.wav',
    transcription: '"<noise> और सेठ होंदे न बिकट नेनर <PAUSE> माझ लेसुर खच लर -- </noise>"'
  },
  {
    name: 'Jaipuri',
    description: 'Jaipuri is a dialect of the Rajasthani language, spoken mainly in Jaipur and surrounding areas. It shares similarities with other Rajasthani dialects but has distinct phonetic and lexical characteristics that highlight its cultural identity within the region.',
    audioUrl: 'https://storage.googleapis.com/vaani-website-sample-files/C%3A%5CProject%5Cgcs%20Upload%20Code%5Cgcs_upload_separate%5CData%5CJaipuri%5CIISc_VaaniProject_S_Rajasthan_Nagaur_128325_12246613_RJNGWP_372059_8962_13085.wav',
    transcription: ' "व अंडी के अन-अ-में हरी घास भी जमी हुई है बादल सफ़ेद है।"'
  },
  {
    name: 'Kurumuli',
    description: 'Kurumali is a Dravidian language spoken by the Kuruma community in parts of Karnataka and Kerala. It has distinct phonological and grammatical features that set it apart from other Dravidian languages, showcasing the community\'s unique cultural heritage.',
    audioUrl: 'https://storage.googleapis.com/vaani-website-sample-files/C%3A%5CProject%5Cgcs%20Upload%20Code%5Cgcs_upload_separate%5CData%5CKurumuli%5Ckurumuli-audio.wav',
    transcription: '"आगु ई हां एक, एक टा पिछु में हीया एक, ईक टी सीसा दिखाई देह रेला एक, एकटा पोल {pole} हाय।"'
  },
  {
    name: 'Kudukh',
    description: 'Kudukh is a language belonging to the Munda language family, primarily spoken by the Oraon tribe in Jharkhand and surrounding states. It has its own unique vocabulary and grammatical structure, contributing to the linguistic diversity of the region.',
    audioUrl: 'https://storage.googleapis.com/vaani-website-sample-files/C%3A%5CProject%5Cgcs%20Upload%20Code%5Cgcs_upload_separate%5CData%5CKudukh%5CIISc_VaaniProject_S_Chhattisgarh_Jashpur_114037_11795263_BHVSFA_338512_78_7200.wav',
    transcription: ' "पता के हाइड्रोलिक [hydrolic} मशीन {machine} हे के , ए हाइड्रोलिक {hydrolic} मशीन {machine} से हमें बेठीला खाइल पिल सब परिल [unintelligible]"'
  },
  {
    name: 'Bajjika',
    description: 'Bajjika is a dialect of Bhojpuri, spoken mainly in Bihar\'s Vaishali and Muzaffarpur districts. It has distinct phonetic characteristics and vocabulary that differentiate it from standard Bhojpuri, reflecting local cultural nuances.',
    audioUrl: 'https://storage.googleapis.com/vaani-website-sample-files/C%3A%5CProject%5Cgcs%20Upload%20Code%5Cgcs_upload_separate%5CData%5CBajjika%5CIISc_VaaniProject_S_Bihar_Vaishali_114301_11798763_TGKEV_134649_7746_14852.wav',
    transcription: '"<baby_crying> निच्चा जग हई, जग में बहुत सारा फूल हई, कुर्सी हई, फाइबर {fiber} वाला। </baby_crying>"'
  },
  {
    name: 'Halbi',
    description: 'Halbi is a language belonging to the Indo-Aryan family, primarily spoken in parts of Chhattisgarh and Maharashtra. It exhibits characteristics that distinguish it from standard Hindi and showcases influences from neighboring languages.',
    audioUrl: 'https://storage.googleapis.com/vaani-website-sample-files/C%3A%5CProject%5Cgcs%20Upload%20Code%5Cgcs_upload_separate%5CData%5CHalbi%5Cdownload.wav',
    transcription: '"बड़े मा बोर्ड {board} लगलिसे, ए गोटोक बायले उबली से हुन बाटे लोग मन उबला सोत सब बीजी {busy} आसोत, एके हुनके दखा दखी होसोत।"'
  },
  {
    name: 'Rajbangshi',
    description: 'Rajbangshi is an Indo-Aryan language spoken by the Rajbangshi community in parts of West Bengal and Assam. It has distinct phonological and lexical features that reflect the community\'s cultural heritage and historical background.',
    audioUrl: 'https://storage.googleapis.com/vaani-website-sample-files/C%3A%5CProject%5Cgcs%20Upload%20Code%5Cgcs_upload_separate%5CData%5CRajbangshi%5CIISc_VaaniProject_S_WestBengal_Purulia_64518_9583211_BHGJTO_192503_12058_15323.wav',
    transcription: ' "আর লাল রঙ্গিক করে নিয়ে রেখেছে। সেই জন্য ভালো লাগ--"'
  },
  {
    name: 'Angika',
    description: 'Angika is an Eastern Indo-Aryan language spoken primarily in Bihar and Jharkhand. It shares similarities with Maithili but has its own unique vocabulary and grammatical structures that reflect local traditions.',
    audioUrl: 'https://storage.googleapis.com/vaani-website-sample-files/C%3A%5CProject%5Cgcs%20Upload%20Code%5Cgcs_upload_separate%5CData%5CAngika%5CIISc_VaaniProject_M_BR_Bhagalpur_lucy3753480_0330040000_TGKCS_44913_9892_15985.wav',
    transcription: ' "<Bird_Sound> देखइ पूरा उठाइ के लगै छे ना एकरो सर्विसिंग {servicing} करी रहलो छे इ कोई अच्छी कॉल {call} लगाइ छो | </Bird_Sound>"'
  }
];
  

  export default function LanguageSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(2); // Default to 2 for larger screens
    const [isPlaying, setIsPlaying] = useState(null); 
    const audioRef = useRef(null);
  
    useEffect(() => {
      const updateItemsPerSlide = () => {
        if (window.innerWidth < 640) {
          setItemsPerSlide(1); // 1 item per slide for mobile
        } else {
          setItemsPerSlide(2); // 2 items per slide for larger screens
        }
      };
  
      // Initial check
      updateItemsPerSlide();
      // Listen for resize events
      window.addEventListener('resize', updateItemsPerSlide);
  
      // Cleanup listener on component unmount
      return () => {
        window.removeEventListener('resize', updateItemsPerSlide);
      };
    }, []);
  
    // Divide languages into chunks for the slides
    const slides = [];
    for (let i = 0; i < languageData.length; i += itemsPerSlide) {
      slides.push(languageData.slice(i, i + itemsPerSlide));
    }
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };
  
    const toggleAudio = (audioUrl, index) => {
      if (audioRef.current && isPlaying === index) {
        audioRef.current.pause();
        setIsPlaying(null);
      } else {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
  
        const newAudio = new Audio(audioUrl);
        audioRef.current = newAudio;
        setIsPlaying(index);
  
        newAudio.play();
        newAudio.onended = () => {
          setIsPlaying(null);
        };
      }
    };
  
    return (
      <div className="mt-0 flex items-center justify-center">
        {/* Chevron Left Icon for Previous */}
        <ChevronLeftIcon 
          className="h-8 w-8 cursor-pointer text-indigo-600 hover:text-indigo-800 transition-colors duration-200 sm:block"  // Updated colors to match indigo theme
          onClick={prevSlide} 
        />

        {/* Displaying languages */}
        <div className="flex justify-around w-full">
          {slides[currentSlide].map((language, index) => (
            <div 
              key={index} 
              className="mx-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-indigo-100/60 text-center w-full sm:w-1/2 mt-4 sm:mt-0 hover:shadow-lg hover:border-indigo-200 transition-all duration-300"
            >
              <h3 className="font-bold text-lg sm:text-xl text-blue-900/90 mb-3">{language.name}</h3>
              <p className="mt-4 text-sm sm:text-base text-blue-gray-700 leading-relaxed">{language.description}</p>
              <button
                className={`mt-4 px-4 py-2 rounded text-sm sm:text-base ${
                  isPlaying === index 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                onClick={() => toggleAudio(language.audioUrl, index)}
              >
                {isPlaying === index ? 'Pause Audio' : 'Play Audio'}
              </button>
              <div className="mt-5 p-3 bg-indigo-50/80 rounded-lg text-blue-gray-600 text-sm sm:text-base italic border border-indigo-100/40">
                {language.transcription}
              </div>
            </div>
          ))}
        </div>

        {/* Chevron Right Icon for Next */}
        <ChevronRightIcon 
          className="h-8 w-8 cursor-pointer text-indigo-600 hover:text-indigo-800 transition-colors duration-200 sm:block"  // Updated colors to match indigo theme
          onClick={nextSlide} 
        />
      </div>
    );
  }