import React from 'react';
import styles from './index.module.css'


export const paths = [
    {
        id:"path1",
        title:"AHBVCS",
        location:"Associação Humanitária dos Bombeiros Voluntários de Carregal do Sal",
        logo:"/svg/path/ahbvcs-logo.svg",
        mission:"Volunteer Firefighter",
        duration:"11-2018 to 02-2022",
        details:"In 2017, the fires were devastating in Portugal. A lot of forests were burned down and even houses were destroyed. Where I lived, Papízios, an old house caught fire, right in the middle of the population, and I found myself trying to fight the fire in the middle of the night, in order to save my parents' farm and house. The next year, the local firefighters went to my school and explained their job to the students. That's when I thought I wanted to help. Throughout my firefighter career, I learned how to perform First Aid for medical emergencies, vehicle extrication, and how to extinguish fires. Everyone had their jobs there. Mine, for most of my stay, was connected to Telecommunications and, after getting my license, driving ambulances in emergencies.",
        pathDetails:{
            id:"path1_dashedPath",
            path:<path d="M2 7.71832C155.861 -15.8212 371.402 41.8382 484 27.7521" stroke="white" strokeWidth="4" strokeLinecap="round" />,
            svgClassName:`col-span-4 ${styles["continuous-offset"]}`,
            viewWidth:"486",
            viewHeight:"32"
        }
    },
    {
        id:"path2",
        title:"NEI AAUAv",
        location:"Núcleo de Estudantes de Informática AAUAv",
        logo:"/svg/path/nei-logo.svg",
        mission:"External Collaborator",
        duration:"01-2020 to 01-2021",
        details:"Whilst enjoying my freshman year in college, I was contacted by a member of a team that was going to be the future NEI (which is the Informatics' Students Nucleus), asking me if I wanted to join their team. Intrigued by the challenge, I promptly accepted to be part of it. The team was \"divided\" in two, and, unfortunately, the \"team\" I was in did not get elected, so I became an External Collaborator instead, helping the nucleus in whatever I could, mostly helping with online events for the students.",
        pathDetails:{
            id:"path2_dashedPath",
            path:<path d="M2 5.46667C166.452 -8.54772 370 25.3385 492 25.3386" stroke="white" stroke-width="4" strokeLinecap="round"/>,
            svgClassName:`col-span-4 ${styles["continuous-offset"]}`,
            viewWidth:"494",
            viewHeight:"28"
        }
    },
    {
        id:"path3",
        title:"NEI AAUAv",
        location:"Núcleo de Estudantes de Informática AAUAv",
        logo:"/svg/path/nei-logo.svg",
        mission:"Member of the Academic Section",
        duration:"01-2021 to 07-2022",
        details:"In my second year of college, the scenery was a bit similar to the first one, just the outcome was different. I joined as part of the Academic Section and we won (being the only candidates, but a win is a win), making me part of NEI officially. Here I did the same as I did when I was an External Collaborator, just this time I was the one responsible for the events, sort of. In my third year, I was part of the nucleus again, doing the same job, just this time the events were in the university itself, and not online. This last year, more specifically, increased my passive skills portfolio, making me improve skills like teamwork, team management, event planning, and overall communication skills. I also got way better at serving beers :D",
        pathDetails:{
            id:"path3_dashedPath",
            path:<path d="M2.5 180C2.5 144.5 206 -14.5 651.5 64.5C974 147.5 1322 48.5 1298 2" stroke="white" strokeWidth="4" strokeLinecap="round"/>,
            svgClassName:`col-span-11 lg:pb-4 xl:pb-0 2xl:-my-4 lg:px-8 ${styles["continuous-offset-reverse"]}`,
            viewWidth:"1302",
            viewHeight:"182"
        }
    },
    {
        id:"path4",
        title:"Think Twice",
        location:"Núcleo de Estudantes de Informática AAUAv",
        logo:"/svg/path/no-logo.svg",
        mission:"Frontend Team",
        duration:"04-2021 to 05-2021",
        details:"During my second year of college and while being part of NEI, I joined an event that usually happens in Aveiro, called \"Think Twice\". This is a programming competition, where teams compete against each other to see who can solve programming problems faster and better. Here I was part of the development team that was responsible for creating the website. This was my first ever experience with actual web development, and with React. From here on, my focus changed from creating games to giving life to website designs. If you want to know a bit more about this event click on the link below.",
        extraContent:{
            content:"Facebook",
            link:"https://www.facebook.com/thinktwiceuaveiro/"
        },
        pathDetails:{
            id:"path4_dashedPath",
            path:<path d="M2.5 15C108.5 58.5 281.1 -6.22205 404 2.88639" stroke="white" stroke-width="4" strokeLinecap="round"/>,
            svgClassName:`col-span-4 ${styles["continuous-offset"]}`,
            viewWidth:"406",
            viewHeight:"33"
        }
    },
    {
        id:"path5",
        title:"Unknown",
        location:"Unknown",
        logo:"/svg/path/unknown.svg",
        mission:"Unknown",
        duration:"Unknown",
        details:"The future is an unknown variable, always defined by the paths we've taken so far. A simple decision that is taken today might influence your whole day tomorrow. Butterfly effect my friend, butterfly effect.",
        pathDetails:{
            id:"path5_dashedPath",
            path:<path d="M2 14.9173C133.477 58.1243 347.562 -6.16181 500 2.88528" stroke="white" strokeWidth="4" strokeLinecap="round"/>,
            svgClassName:`col-span-4 ${styles["continuous-offset"]}`,
            viewWidth:"502",
            viewHeight:"32"
        }
    },
]

