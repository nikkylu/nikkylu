import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

const photoProjects = [
  {
    title: "As We Left, and Walk into Memories (2023, 2024)",
    description: "Exhibited at Temporal Space, Brooklyn, NY in 2024.",
    image: "/photos/memory/a.jpeg",
    link: "/photos/memory"
  },
  {
    title: "Who's Been Found by the Water (2024)",
    // description: "Brief description of the second photography project",
    image: "/photos/corpse/l.jpeg",
    link: "/photos/corpse"
  },
  {
    title: "Water (2024)",
    // description: " The idea of the sea, for example, as Leibniz showed, is a system of liaisons or differential relations between particulars and singularities corresponding to degrees of variation among these relations — the totality of the system being incarnated in the real movement of the waves. To learn to swim is to conjugate the distinctive points of our bodies with the singular points of the objective idea, in order to form a problematic field. (165)",
    image: "/photos/water/water.png",
    link: "/photos/water"
  },
  {
    title: "We Stare into the World and See Ourselves (2022)",
    // description: "Brief description of the fourth photography project",
    image: "/photos/world/a.jpeg",
    link: "/photos/world"
  }
]

export default function Photos() {
  return (
    <div className="min-h-screen bg-beige">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-accent hover:underline mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-primary">Photo Projects</h1>
        {/* <h2 className='mb-1'>Artist statement:</h2> */}
        <p className='mb-4  text-gray-600 '>Nikky approaches art as a flâneur interested in language and mind. 
          They like to write photo journals and view images as representations 
          that encapsulate a greater reality than the actual world.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photoProjects.map((project, index) => (
            <Link href={project.link} key={index}>
              <div className="space-y-4 cursor-pointer">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300 "
                  />
                </div>
                <div>
                  <h2 className="text-l font-sm text-primary hover:underline hover:text-accent">{project.title}</h2>
                  <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}