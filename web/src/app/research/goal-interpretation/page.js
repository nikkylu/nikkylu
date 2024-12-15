import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function GoalInterpretation() {
  return (
    <div className="min-h-screen bg-beige">
      <div className="max-w-4xl mx-auto px-4 py-8  text-primary">
        <Link href="/" className="inline-flex items-center text-accent hover:underline mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold mb-6">Optimizing Environments Through Goal Interpretation</h1>
          
          <p className="text-lg italic text-gray-600 mb-8">
            PI: Prof Brenden Lake, Mentor: Guy Davidson
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Intuition</h2>
            <ul className="list-disc pl-12 space-y-2">
                Imagine a child coming home from basketball practice, feeling sad about leaving the court yet still excited from the game. The child finds a large bin, places it on a shelf, and starts shooting their basketball toward it. I am interested in the reasoning behind such goal-directed environment-building mechanisms, and this research is dedicated to understanding that purpose.
            </ul>
            <h2 className="text-xl font-bold mb-4 mt-4">Overview</h2>
            <div className="pl-12 space-y-2">
            <p>
              This research investigates how varying levels of goal abstraction impact human understanding and creativity 
              in environment design. We combine behavioral experiments with computational modeling to understand how humans 
              interpret and optimize environments based on different goal specifications.
            </p>
            <p > 
              By means of goal abstraction, an example abstract goal can be "Launch the metal ball and score in the black bin."
            </p>
            <p > 
              An example concrete goal can be "Launch the metal ball onto one of the conveyor belt to make as many golf balls fall into the black bin as possible."
            </p>
            <p > 
              While I am still thinking about my belief in defining a goal concept and implementing a goal module, the simplest thought behind goal abstraction is the difference between a meta goal and goals with more intermediate steps. 
            </p>
            </div>

          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Research Components</h2>
            <ul className="list-roman pl-12 space-y-2 mb-4">
              <li>Behavioral experiments on environment design</li>
              <li>Computational models of goal interpretation</li>
              <li>Analysis of creativity in design optimization</li>
            </ul>
          </section>

            {/* <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Methodology</h2>
            <p className="pl-8 mb-4">
                We have four sets of objects, and four total goals, two concrete and two abstract, and participants see each set of objects once with a randomly assigned goal:
            </p>
            <div className="pl-12 space-y-4">
                <p>• Four different sets of objects</p>
                <p>• Four total goals, two concrete and two abstract</p>
                <div className="space-y-2">
                <p>• Example abstract goal:</p>
                <p className="pl-4">"Launch the metal ball and score in the black bin."</p>
                </div>
                <div className="space-y-2">
                <p>• Example concrete goal:</p>
                <p className="pl-4">"Launch the metal ball onto one of the conveyor belt to make as many golf balls fall into the black bin as possible."</p>
                </div>
                <p>• Participants create a level for each goal from a different set of objects</p>
            </div>
            </section> */}

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-8">Interface Demo</h2>
            <section className="mb-8">
            <div className="pl-8">
                <div className="relative w-full aspect-video">
                <iframe 
                  src="https://www.youtube.com/embed/O-ryQd3Xw80" 
                  width="100%" 
                  height="400" 
                  className="rounded-lg shadow-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
                </div>
                <p className="list-disc pl-8 space-y-1">
                In this demo, I show how participants can interact with the environment by manipulating obejcts in the environment to achieve the goal being assigned to them (on the right).
                </p>
                <p className="list-disc pl-8">
                We collect data of how they position the objects, the ball launching parameters, and the different attempts they make to achieve the goal.
                </p>
            </div>
            </section>
            <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Initial Results</h2>
                <p className="list-disc pl-8 space-y-1">
                An updated interface and initial results will be updated late December, early January.
                </p>
                <p className="list-disc pl-8 space-y-1">
                Work in progress for cog sci conference. 
                </p>
            </section>
            {/* <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Data Collection</h2>
                <div className="pl-8 space-y-6">
                <ul className="list-disc pl-4 space-y-4">
                    <li>
                    Assess how goal abstraction impacts participants' creativity and adaptive learning when utilizing objects to achieve efficient configurations
                    </li>
                    <li>
                    Keep track of the objects positions, ball launching parameters, different attempts being made
                    </li>
                    <li>
                    Analyze how individuals translate abstract versus concrete goals into actionable steps within an unfamiliar environment
                    </li>
                </ul>
                </div>
                </section>
                <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Future Work</h2>
                <div className="pl-8 space-y-4">
                <p>
                    We will collect, analyze, and model the data being collected. And extract insights from the design process.
                </p>
                <p>
                    This research might also inspire a model that emulates human strategies by learning from participants' experimentation, creativity, and adjustment behaviors, contributing to an optimized environment creation process with human-like behaviors.
                </p>
                </div>
                </section> */}
          </section>
        </article>
      </div>
    </div>
  )
}