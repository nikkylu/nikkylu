import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const getVideos = () => {
  const videoDirectory = path.join(process.cwd(), 'public/photos/water/video');
  
  return fs.existsSync(videoDirectory) 
    ? fs.readdirSync(videoDirectory)
      .filter(file => file.endsWith('.mp4'))
      .map(file => ({
        path: `/photos/water/video/${file}`,
        type: 'video'
      }))
    : [];
};

const VideoItem = ({ item }) => {
  return (
    <video
      className="w-full h-full object-cover"
      autoPlay
      playsInline
      loop
      muted
      preload="auto"
    >
      <source src={item.path} type="video/mp4" />
    </video>
  );
};

export default function Videos() {
  const videos = getVideos();

  return (
    <div className="min-h-screen bg-beige">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/photos" className="inline-flex items-center text-accent hover:underline mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back 
        </Link>

        <h1 className="text-3xl font-bold mb-8 text-primary">Water (2024)</h1>
        <div className='mb-4'>
          <p className="text-primary">Different water looks different in different regions of the world. 
          Thames, Seine, and Hudson River also looks different from East River in New York. 
          For me, just by looking at each photos of these water bodies,
          without any external references, I could tell where they are from, 
          the time and space where I filmed that water body, 
          my emotions at that time, my relations with the world and people around me.</p> 

          <p className="text-primary">
            The idea of the sea, for example, as Leibniz showed, is a system of liaisons 
            or differential relations between particulars and singularities corresponding 
            to degrees of variation among these relations — the totality of the system being 
            incarnated in the real movement of the waves. To learn to swim is to conjugate 
            the distinctive points of our bodies with the singular points of the objective idea, 
            in order to form a problematic field. (165)
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((item, index) => (
            <div key={index} className="relative w-full overflow-hidden aspect-[3/4]">
              <VideoItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}