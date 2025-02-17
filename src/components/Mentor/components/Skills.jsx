import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di"
import { TiChevronRight } from "react-icons/ti";
import Reveal from "./Reveal"

const skills = [
    {
      category: 'Advances Strategies',
      technologies: [
        { name: 'MACD', icon: <TiChevronRight className='text-orange-600' /> },
        { name: 'BTST & DTF', icon: <TiChevronRight className='text-orange-600' /> },
        { name: 'BRRT Strategy', icon: <TiChevronRight className='text-orange-600' />  },
        { name: 'Sector breakout Strategy', icon: <TiChevronRight className='text-orange-600' />  },
        { name: 'Box Breakout Strategy', icon: <TiChevronRight className='text-orange-600' /> },
        { name: 'Breakdown Gap', icon: <TiChevronRight className='text-orange-600' /> },
      ],
    },
    {
      category: 'Algorithms',
      technologies: [
        { name: 'STA ALGO', icon: <TiChevronRight className='text-orange-600' />  },
        { name: '515 ALGO', icon: <TiChevronRight className='text-orange-600' /> },
        { name: 'ADX102155 ALGO', icon: <TiChevronRight className='text-orange-600' />  },
        { name: 'FNP ALGO', icon: <TiChevronRight className='text-orange-600' />  },
      ],
    },
  ]

const Skills = () => {
  return (
    <div className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
            I have worked and studied various strategies and created my own specific strategies. 
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        ">
            {skills.map((skill, index) => (
                <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-2xl">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </Reveal>
    </div>
  )
}

export default Skills