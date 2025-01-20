'use client'

import { AnimatedTitle } from "@/components/ui/animated-title"
import { MagicCard } from "@/components/ui/magic-card"
import TypingAnimation from "@/components/ui/typing-animation"
import { DATA } from "@/data/personal-details"

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <AnimatedTitle 
          text="Projects" 
          className="text-4xl font-bold mb-8 text-neutral-900 dark:text-neutral-300"
        />
        <div className="grid gap-8">
          <TypingAnimation 
            className="text-lg text-neutral-900 dark:text-neutral-300"
            duration={50}
            delay={500}
            startOnView
          >
            Welcome to my projects page. Here you&apos;ll find a collection of my work.
          </TypingAnimation>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {DATA.projects.map((project) => (
              <MagicCard 
                key={project.title} 
                className="p-6"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="text-xl font-bold text-neutral-200 break-words">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 text-xs rounded-full border">
                      {project.private ? "Private" : "Public"}
                    </span>
                  </div>
                  <div className="text-sm text-neutral-400">
                    {project.dates}
                  </div>
                  <div className="text-neutral-300">
                    {project.description}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 text-xs bg-neutral-800 rounded-full text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </MagicCard>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
