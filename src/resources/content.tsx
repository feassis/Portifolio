import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Felipe",
  lastName: "Assis",
  name: `Felipe Assis`,
  role: "Software Developer",
  avatar: "/images/FelipeAssis.jfif",
  email: "felipe.assis.2002@gmail.com",
  location: "America/Sao_Paulo", // IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Portuguese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/feassis",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/felipe-assis-736330134",
  },
  {
    name: "Itch.io",
    icon: "itch",
    link: "https://feassis.itch.io/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Solving problems through code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Lares RPG</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Felipe, programmer, pixel artist, video and text editor and co-founder of Lares RPG, {" "}
      <Logo
        dark
        icon="/trademarks/Lares - Logo CL BI.png"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      where I program, edit and manage for Lares RPG.
      <br /> After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Felipe is a game and software developer with a passion for creating engaging and immersive digital experiences. Skilled in Unity, C#, Node.js, TypeScript, and React, he develops gameplay systems, interactive features, and full-stack solutions, integrating art, design, and technology to deliver polished, high-quality experiences.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance",
        timeframe: "12-2022 - Present",
        role: "Programer",
        achievements: [
          <>
            Provided code consulting and debugging support for Unity and C# projects, ensuring clean, maintainable, and scalable solutions.
          </>,
          <>
            Supported cross-platform builds and publishing, ensuring projects were properly configured and tested before deployment.
          </>,
          <>
            Collaborated with indie teams and individual developers, adapting to different pipelines, tools, and production needs.
          </>,
          <>
            Integrated third-party tools, SDKs, and APIs, including analytics, monetization, and multiplayer frameworks.
          </>,
        ],
        images: [
          
        ],
      },
      {
        company: "Tapps Games",
        timeframe: "02-2021 - 11-2022",
        role: "Game Developer",
        achievements: [
          <>
            Contributed to the development of Card Guardians, participating in core gameplay implementation and ensuring a smooth player experience.
          </>,
          <>
            Collaborated in multidisciplinary teams (designers, artists, developers) to deliver features aligned with both creative vision and technical requirements.
          </>,
          <>
            Improved game performance and stability, optimizing memory usage and frame rates across mobile devices.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/tappsgames/card-guardians-banner.png",
            alt: "Card Guardians Banner",
            width: 16,
            height: 9,
          },
          {
            src: "/tappsgames/beholder.png",
            alt: "Card Guardians Beholder",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Federal University of ABC",
        description: <>Studied conputer science, producion  engineering and a minor in science and technology.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "C#",
        description: (
          <>Main language for Unity development, with experience in scalable code architecture, design patterns, and performance optimization.</>
        ),
        tags: [
          {
            name: "C#",
            icon: "",
          },
          {
            name: "Unity",
            icon: "",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
         
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "TypeScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },  

      {
        title: "C++",
        description: (
          <>Experience with Unreal Engine, gameplay systems development, and memory/performance optimization in 3D games.</>
        ),
        tags: [
          {
            name: "C++",
            icon: "",
          },
          {
            name: "Unreal",
            icon: "",
          },
          {
            name: "Shaders",
            icon: "",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      }, 

      {
        title: "GDScript",
        description: (
          <>Prototyping and implementing simple mechanics in Godot, applying programming logic and OOP concepts.</>
        ),
        tags: [
          {
            name: "GDscript",
            icon: "",
          },
          {
            name: "Godot",
            icon: "",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      }, 

      {
        title: "Java",
        description: (
          <>Application development and strong knowledge of object-oriented programming, also applied to data structures and algorithms.</>
        ),
        tags: [
          {
            name: "Java",
            icon: "",
          },
          {
            name: "Spring Boot",
            icon: "",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      }, 

      {
        title: "Javascript",
        description: (
          <>Development of scripts functionalities for web applications.</>
        ),
        tags: [
          {
            name: "Javascript",
            icon: "",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      }, 

      {
        title: "Typescript",
        description: (
          <>Development of scripts functionalities for web applications.</>
        ),
        tags: [
          {
            name: "Typescript",
            icon: "",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      }, 

      {
        title: "Angular JS",
        description: (
          <>Building dynamic and interactive user interfaces with basic front-end concept</>
        ),
        tags: [
          {
            name: "Typescript",
            icon: "",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      }, 

      {
        title: "React",
        description: (
          <>Development of modern web applications, component-based UI, and state management.</>
        ),
        tags: [
          {
            name: "Typescript",
            icon: "",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      }, 

      {
        title: "Unity",
        description: (
          <>Professional experience developing mobile games and complex systems, SDK integration, optimization, and applying design patterns.</>
        ),
        tags: [
          {
            name: "C#",
            icon: "",
          },

          {
            name: "Unity",
            icon: "",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      }, 

      {
        title: "Unreal",
        description: (
          <>Gameplay system development, Blueprints integration, and C++ logic implementation.</>
        ),
        tags: [
          {
            name: "C++",
            icon: "",
          },

          {
            name: "Unreal",
            icon: "",
          },
          {
            name: "Blueprint",
            icon: "",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      }, 

      {
        title: "Godot",
        description: (
          <>Development of small prototypes and experimental games with GDScript.</>
        ),
        tags: [
          {
            name: "GDScript",
            icon: "",
          },

          {
            name: "Godot",
            icon: "",
          },
          {
            name: "C#",
            icon: "",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      }, 

      {
        title: "GameMaker",
        description: (
          <>Prototyping and creation of small 2D projects exploring core mechanics.</>
        ),
        tags: [
          
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },

      {
        title: "Git",
        description: (
          <>Proficient in version control, team collaboration, branching strategies, code reviews, and continuous integration.</>
        ),
        tags: [
          
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      }, 

      {
        title: "MVC (Model-View-Controller)",
        description: (
          <>Structuring games and systems with clear separation of concerns for easier maintenance.</>
        ),
        tags: [
          
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      }, 

      {
        title: "Service Locator",
        description: (
          <>Centralized management of services, frequently applied in Unity projects.</>
        ),
        tags: [
          
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      }, 

      {
        title: "Singleton",
        description: (
          <>Used in global management systems such as audio, event handling, and game managers.</>
        ),
        tags: [
          
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      }, 

      {
        title: "Observer Pattern",
        description: (
          <>Applied to events and decoupled communication between objects in Unity.</>
        ),
        tags: [
          
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      }, 

      {
        title: "Object Pooling",
        description: (
          <>Performance optimization for mobile games by reducing instantiation and destruction overhead.</>
        ),
        tags: [
          
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      }, 

      {
        title: "State Machine",
        description: (
          <>Implementation for AI systems, combat mechanics, and overall game state management.</>
        ),
        tags: [
          
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },

      {
        title: "Command Pattern",
        description: (
          <>Flexible and customizable input systems for various game types.</>
        ),
        tags: [
          
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },

      {
        title: "SOLID Principles",
        description: (
          <>Consistent application of object-oriented programming best practices to maintain clean, modular, and scalable code.</>
        ),
        tags: [
          
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },

    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Pixel Art – ${person.name}`,
  description: `Pixel Art made by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/BeachBackGround.png",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
