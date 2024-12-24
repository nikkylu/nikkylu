import Image from 'next/image'
import Link from 'next/link'
import { Github, Twitter, Mail, Linkedin, ExternalLink } from 'lucide-react'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const news = [
  {
    date: "Upcoming",
    content: "'Does Talent Exist?' Discussion panel at NYU Philosophy Forum"
  },
  {
    date: "Nov 22, 2024, 5:30 - 6:30pm",
    content: "Moderating Talk 'The Wrong of Wrongful Manipulation' with Professor Sophie Gibert at NYU Philosophy Forum"
  },
  {
    date: "Oct 25, 2024, 5:30 - 6:30pm",
    content: "Co-hosting Death Cafe Event at NYU Philosophy Forum on life, death, and mortality"
  },
  {
    date: "Oct 4, 2024, 5pm",
    content: "Co-leading film screening event 'Examined Life' featuring Judith Butler and Slavoj Zizek"
  }
]

const research = {
  publications: [
      {
      id: "goal-interpretation",
      title: "Optimizing Environments Through Goal Interpretation",
      description: "Studying how varying levels of goal abstraction impact human understanding and creativity through behavioral experiments and computational models.",
      lab: "PI: Prof Brenden Lake, Mentor: Guy Davidson",
      link: "/research/goal-interpretation",
      // image: "/objects.png"
    },
    {
      id: "vector-grounding",
      title: "Thesis: The Vector Grounding Problem",
      description: "Whether language models can establish intrinsic meaning in their representations beyond mere ascriptions by external interpreters.",
      advisors: "Advisors: Prof Matthew Mandelkern and Prof David Chalmers",
    }
  ],
  projects: [
    {
      id: "realism",
      title: "Realistic Representations",
      description: "Thoughts on representations, including illustrations of an empirical experimentation with realistic representations in computer vision to process 3D objects in 2D images.",
      link: "/projects/realism",
      image: "/realistic.png"
    },
    {
      id: "cyclable",
      title: "Cyclable 🚲",
      description: "Cyclable is a route planning web application designed to enhance the cycling experience in New York City by integrating real-time user reports on road constructions and bike lane blockages.",
      link: "/projects/cyclable"
    },
 {
      id: "llm-intelligence",
      title: "Are LLMs Intelligent? (Nov 2023)",
      description: "Philosophy paper illustrating the distinction between accomplishing intelligent tasks and accomplishing tasks intelligently. In this paper, I first explained the mismatch between the definition of intelligence and the properties that they assume to limit the scope of our discussion of intelligence, then posed the distinction between accomplishing intelligent tasks and accomplishing tasks intelligently. Then I evaluated the two categories of intelligence which both show that current models of LLMs, especially GPT-4 are capable of accomplishing intelligent tasks and accomplishing tasks intelligently. Therefore, they exhibit a narrow and broad sense intelligence. However, if we wish to see the full AGI in the future which can accomplish more shared intelligence, then there should be more implementations and measures taken.  ",
    },
    {
      id: "intelligence-explosion",
      title: "If (LLM AI) then AI+ ? (Nov 2023)",
      description: "Philosophy paper examining why LLM AI, despite its capabilities, will not lead to an intelligence explosion. In this paper, I will raise objections to Chalmers(2010)’s intelligence explosion argument. Specifically, I will object to premise 2, by arguing that while some AI might lead to an intelligence explosion, Large Language Model (LLM) AI will not lead to AI+. Specifically, I will first argue that LLMs by training on increasingly large data sets, are going to max out at the human level due to 1. their reduced accuracy on reasoning abilities over larger datasets and 2. their inability to identify tacit knowledge if such tacit knowledge is not contained within human reasoning. ",
    },
    {
      id: "representation",
      title: "On Photography and Representation (April 2024)",
      description: "In 'Photography and Representation', Roger Scruton presents an intriguing perspective on photography. According to his definition, ideal photography maintains mere causal relations with the subject it captures, as opposed to being representational, like paintings. In this paper, I first present Scruton's argument on why photography is not a representational art, then argue that Scrutonian ideal photography can be a form of representational art by agreeing that the essence of photography is indeed causal, but representational elements can be achieved by the control of observable details.",
    }
  ]
}

export default function Home() {
  return (
    <div className="min-h-screen bg-beige">
      <div className="max-w-4xl mx-auto px-4">
        <header className="py-8">
          <h1 className="text-4xl font-bold text-primary">Nikky Lu</h1>
         <span className="text-dan text-lg font-normal">(she/they)</span>
        </header>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left column */}
          <div className="md:w-1/3 space-y-8">
            <div className="w-full aspect-square relative">
              <Image
                src="/profile.jpg"
                alt="Profile picture"
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>

            <nav className="space-y-2 text-accent font-bold">
              <Link href="/photos" className="block hover:underline">Photo Projects</Link>
              <Link href="/travel" className="block hover:underline">Travel Log</Link>
              <a 
                href="https://drive.google.com/file/d/1R3oGjNyKQ1AKQ5x8avMtou_ZKsxLyf-s/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:underline flex items-center gap-1"
              >
                CV <ExternalLink size={16} />
              </a>
            </nav>

            {/* <div className="flex flex-wrap gap-4 text-primary">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Twitter size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="mailto:zhiyi.lu@nyu.edu">
                <Mail size={24} />
              </a>
            </div> */}

            <div className="text-primary">
              <p className="font-mono text-sm">zhiyi.lu@nyu.edu</p>
            </div>
          </div>

          {/* Right column */}
          <div className="md:w-2/3 space-y-8 text-primary">
            <div className="prose prose-lg space-y-4">
              <p className="pl-8">
                Hey! This is Nikky. I am a researcher with an interdisciplinary background in computer science, philosophy, and cognitive science. 
              </p>
              <p className="pl-8">My work is deeply motivated by philosophical inquiries to innovatively use computational methods in exploring human 
                learning, understanding, and creativity. In turn, I aim to develop innovative AI systems and ways of interaction 
                inspired by these insights. </p>
              <p className="pl-8">
                Currently, I am a researcher at the Human and Machine Learning Lab. 
              </p>



              {/* <p className="pl-8">
                Currently, I am conducting computational research in Prof Brenden Lake's Human and Machine Learning Lab, studying 
                how varying levels of goal abstraction impact human understanding and creativity in environment design.
              </p>

              <p className="pl-8">
                Additionally, I am working on my thesis in philosophy of mind and language under the guidance of 
                Prof Matthew Mandelkern and Prof David Chalmers, exploring whether language models can establish 
                intrinsic meaning in their representations.
              </p> */}

              <p className="pl-8">
                Outside of research, I'm an artist who loves hiking, climbing, and cycling. So far, I've solo-backpacked to more than 20 destinations!
              </p>

              <p className="pl-8">
                I also like collecting different beanies and have a duolingo streak of 2 years +.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-l">Research Interests</h2>
              <p className="text-medium pl-8 mb-4">Broadly: Cognitive AI, HCI, Computational CogSci, Machine Perception, Computer Vision</p>
              <h2 className="font-bold text-l">Currently Learning</h2>
              <p className="text-medium pl-8">Reinforcement Learning, Behavioral Machine Learning, Symmetries in ML</p>
            </div>

            {/* News Section */}
            <section>
              <h2 className="font-bold text-xl mb-4">Recent Events</h2>
              <ul className="space-y-4">
                {news.map((item, index) => (
                  <li key={index} className="flex flex-col">
                    <span className="font-semibold">{item.date}</span>
                    <span className="mt-1 text-dan">{item.content}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Replace the Research Section in your page.js */}
            {/* Research Section */}
            <section className="space-y-6">
              <h2 className="font-bold text-xl mb-4">Research</h2>
              
              <div className="space-y-3">
                <h3 className="font-bold">Current Research</h3>
                <div className="space-y-3">
                  {research.publications.map((pub, index) => (
                  pub.link ? (
                    <Link href={pub.link} key={index}>
                      <div className="space-y-2 p-4 rounded-lg hover:bg-white/50 transition-colors cursor-pointer border border-transparent hover:border-accent/20">
                        <p className="font-medium hover:text-accent underline">
                          {pub.title} 
                        </p>
                        <p className="text-sm italic">{pub.advisors || pub.lab}</p>
                        <p className="text-sm text-dan">{pub.description}</p>
                        {pub.image && (
                          <div className="mt-4 relative aspect-1-1 w-1/4 overflow-hidden rounded-lg">
                            <Image
                                  src={pub.image}
                                  alt={pub.title}
                                  layout="responsive" /* Ensures responsive scaling */
                                  width={300} /* Control width */
                                  height={225} /* Control height, maintaining 4/3 ratio */
                                  className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                          </div>
                        )}
                        
                      </div>
                    </Link>
                  ) : (
                    <div key={index} className="space-y-2 p-4 rounded-lg">
                      <p className="font-medium">
                        {pub.title}
                      </p>
                      <p className="text-sm italic">{pub.advisors || pub.lab}</p>
                      <p className="text-sm text-dan">{pub.description}</p>
                      
                    </div>
                  )
                ))}
                </div>
              </div>

              <div className="space-y-6">
              <h3 className="font-bold">Other Projects</h3>
              <div className="space-y-4">  {/* Reduced space between projects */}
                {research.projects.map((project, index) => (
                  project.link ? (
                    <Link href={project.link} key={index}>
                      <div className="p-4">  {/* Reduced padding */}
                        <p className="font-medium hover:text-accent underline">
                          {project.title}
                        </p>
                        <p className="text-sm text-dan">{project.description}</p>
                        {project.image && (
                          <div className="mt-4 relative aspect-[3/1] w-full overflow-hidden rounded-lg">
                            <Image
                                  src={project.image}
                                  alt={project.title}
                                  layout="responsive" /* Ensures responsive scaling */
                                  width={300} /* Control width */
                                  height={225} /* Control height, maintaining 4/3 ratio */
                                  className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                          </div>
                        )}
                      </div>
                    </Link>
                  ) : (
                    <div key={index} className="p-4">  {/* Reduced padding */}
                      <div className="mb-1">  {/* Added small margin bottom */}
                        <p className="font-medium inline-block">
                          {project.title}
                        </p>
                        {project.date && <span className="text-sm text-gray-600 ml-2">({project.date})</span>}
                      </div>
                      <p className="text-sm text-dan">{project.description}</p>
                    </div>
                  )
                ))}
              </div>
            </div>
            </section>
          </div>
        </div>
      </div>
      <Analytics/>
      <SpeedInsights />
    </div>
  )
}