import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

const getPhotos = () => {
  const photosDirectory = path.join(process.cwd(), 'public/realism');
  return fs.readdirSync(photosDirectory)
    .filter(file => !file.startsWith('.') && !file.endsWith('.DS_Store'))
    .map(file => `/realism/${file}`);
    console.log('Photos:', files);
};

export default function Realism() {
  const photos = getPhotos();
  return (
    <div className="min-h-screen bg-beige">
      <div className="max-w-4xl mx-auto px-4 py-8  text-primary">
        <Link href="/" className="inline-flex items-center text-accent hover:underline mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold mb-6">Realistic Representations</h1>
          
          <p className="text-lg italic text-gray-600 mb-8">
            Experimentations and thoughts on representations.  
          </p>

          <section className="mb-8 space-y-4">
            <h2 className="text-xl font-bold mb-4">Questions</h2>
            <ul className="list-roman pl-12 space-y-2">
                <li>How do we represent the world?</li> 
                    <p className="pl-8">
                    What makes a mental state mental? What’s the physical body’s relation to a mental state? These questions are grounded in longstanding philosophical debates such as Dualism, Functionalism, Holism, Behaviorism, and Localism. Through Cognitive Science, we observe different brain regions and their functions when our senses are being represented to the world.
                  </p>
                <li>How do we represent the world through machines?</li> 
                    <p className="pl-8">
                    Can we have an 'extended mind' ? Can we use AI systems to augment human cognition and creativity? 
                    </p>
                    <p className="pl-8">
                    Is photography ideal (merely causal) or is it representational through operations of machines (cameras)? 
                    </p>
                    <p className="pl-8 text-dan">(see my paper responding to Scruton's Photography and Representation)</p>
                <li>How do machines represent the world? World models?</li>
                  <p className="pl-8">There are a priori and a posteriori ways to 'teach' systems in recognizing and generating meaningful and generalizable representations. We can define the causal rules in the world in symbolic ways in a model. </p>
                  <p className="pl-8">Some other 'a priori' methods in embeding world model modules into the system include using symmetries in model architecture to overcome the barrier where NLP and CNN processes vectors in mere sequences. </p>
                  <p className="pl-8">My upcoming work on the vector grounding problem discusses whether NLP and CNN (sequence based) vector-form representations can ground reference. Previously, my empirical lab contribution experimented with generating realistic representations in a posteriori way (see below). </p>
  
            </ul>
            <h2 className="text-xl font-bold mb-4 mt-4 ">How do machines represent the world? </h2>
            <div className='space-y-4 pl-8'>
            <p className='mb-4'>I experimented with two representations: </p>
            <p className="list-roman space-y-2">
              <li>how do systems recognize real objects in the world.(below images with the elephant) </li>
                <p className='pl-8'>This involved applying masks to pictures taken by cameras, allowing the system to identify and segment specific objects (e.g., an elephant). This approach tests the system’s ability to distinguish between foreground and background and to isolate meaningful visual elements.</p>
              <li>how do system render and represent objects in 2D form realisticly (below images with the sofa).</li>
                <p className='pl-8'>I began with rendering 3D meshes of objects like sofas using Blender to produce a 2D image of the rendering. Then, through diffusion models prompted by language models, I applied masks to the generated image to situate the sofa within diverse 2D contexts. Finally, I applied another mask to extract a realistic representation of the sofa as a realistic representation of the object in the real world.</p>
            </p>
            </div>
            <div className="mt-3 max-w-[50%] mx-auto mb-3"> {/* Add this wrapper */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {photos.map((photo, index) => (
                  <div key={index} className="relative w-full overflow-hidden">
                    <Image
                      src={photo}
                      alt={`Realism Photo ${index + 1}`}
                      layout="responsive"
                      width={3}
                      height={4}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>

          </section>
          <h2 className="text-xl font-bold mb-4">Thoughts and Future Work</h2>
          <div className='space-y-4 pl-8'>
          <p>In a posteriori way, the machine hardly apply prior or analytic
            knowledge of how the world really is in object segmentations. Though its performance can show some form of realistic representations, 
            I am interested also in its competence in such a process --
            reasonings about the world. I also wish to explore a priori ways to achieve meaningful representations, not limited to implementing world model 
            modules through machine perception. </p>
          <p>Representation — by humans or machines — remains central to understanding cognition, creativity,
             and building intelligent systems. My work continues derive philosophical implications with empirical 
             experimentation and implementation to build effective models of representation. This interplay 
             not only informs AI design but also deepens our understanding of how humans interpret, 
             model, and engage with the world around us.</p>
          </div>
        </article>
      </div>
    </div>
  )
}