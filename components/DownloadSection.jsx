import Image from 'next/image'
import { Container } from './Container'
import backgroundImage from '../images/background-call-to-action.jpg'
import {useState} from "react";
import Model2 from "./Model2";
import {useMyContext} from "../contexts/MyContext";
import ButtonDialogHF from './Button3';

export function DownloadSection() {
  const {popup} = useMyContext();

  return (
    <section
      id="Data"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      {popup && <Model2 />}

      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Unleash the Power of our Data!
          </h2>
          <div className="mt-4 text-center">
            <p className="mt-4 text-lg tracking-tight text-white">
                Our comprehensive multimodal dataset for Indian languages is <span className="font-bold text-white">now exclusively available on Hugging Face</span>! Access and download the dataset directly for seamless integration and ease of use in your AI projects.
            </p>
            <div className="mt-6">
              <ButtonDialogHF color={'white'} mt={4} />
            </div>
          </div>
          
        </div>
        <p className="mt-10  text-center text-white text-lg">
          The data from Project Vaani is available under license : 
          <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-white-500 underline"> CC-BY-4.0</a>
        </p>
      </Container>
    </section>
  )
}
                    
