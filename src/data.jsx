import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from './assets/travel.png';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "Sobre",
    icon: <FaUser className="nav__icon" />,
    path: "/Site-portifolio/about",
  },

  {
    id: 3,
    name: "Portfólio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/Site-portifolio/portifolio",
  },

  {
    id: 4,
    name: "Contatos",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/Site-portifolio/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "Nome : ",
    description: " Allan Douglas Santos Tavares",
  },

  {
    id: 2,
    title: "GitFub : ",
    description: <a href="https://github.com/allan-front-end2020" target="_blank" rel="noopener noreferrer">allan-front-end2020</a>
  },

  {
    id: 3,
    title: "Idade : ",
    description: "33 Anos",
  },

  {
    id: 4,
    title: "Nacionalidade : ",
    description: "Brasileiro",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Disponivel",
  },

  {
    id: 6,
    title: "Localidade: ",
    description: "Lavras - MG",
  },

  {
    id: 7,
    title: "Telefone : ",
    description: "(11) 95885-2592",
  },

  {
    id: 8,
    title: "Email : ",
    description: "allan.tavares@estudante.ufla.br",
  },

  {
    id: 9,
    title: "Linkedin : ",
    description:  <a href="https://www.linkedin.com/in/allan-tavares-a02070206/" target="_blank" rel="noopener noreferrer">allan-front</a>
  },

  {
    id: 10,
    title: "Linguagens: ",
    description: "Português e Inglês básico",
  },
];

export const stats = [
  {
    id: 1,
    no: "3+",
    title: "Anos <br /> Experiência",
  },

  {
    id: 2,
    no: "12+",
    title: "Projetos<br /> Completos",
  },

  {
    id: 3,
    no: "81+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "53+",
    title: " Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Setembro de 2022 - Março de 2023 ",
    title: "Analista de sistema <span> Global Hitss</span>",
    desc: "Responsável por manter e melhorar os códigos em, React e Vue, ganhei experiência em projetos de grande porte com muitos usuários. Lidar com  manutenção me ajudou a otimizar o código existente , enquanto a criação de novas funcionalidades impulsionou minha criatividade e habilidade de resolução de problemas. Trabalhar em projetos com alta demanda de usuários me ensinou sobre escalabilidade e eficiência . Colaborar com equipes multidisciplinares refinou minhas habilidades de comunicação e análise de feedback"
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023-04 - Trabalhando",
    title: "Desenvolvedor Front-end <span> Web Station  </span>",
    desc: "Desenvolver de forma autônoma me proporcionou uma visão abrangentedo mundo web. Essa experiência permitiu a exploração de tecnologias,tendências e práticas de design, melhorando minhas habilidades e oferecendo soluções personalizadas.",
  },

 

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020 - 2025",
    title:
      "Sistemas de Informação <span> Universidade Federal de Lavras UFLA</span>",
    desc: "Sou acadêmico do 5º período do curso de Sistemas de Informação",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022",
    title: "Boot-Camp SoulCode Academy</span>",
    desc: "O boot camp da SoulCode foi em  período integral foi uma imersão intensiva no desenvolvimento de software. Durante esse tempo, aprendcomo Java e Angular, adquirindo habilidades sólidas para criar aplicações robustas e interfaces de usuário interativas. Essa experiência me preparou bem para desafios na indústria de tecnologia.",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2009",
    title: "Bachelor Degree <span> Tunis High School </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "89",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "70",
  },

  {
    id: 3,
    title: "Css",
    percentage: "90",
  },

  {
    id: 4,
    title: "Sql",
    percentage: "70",
  },

  {
    id: 5,
    title: "React",
    percentage: "78",
  },

  {
    id: 6,
    title: "Spring",
    percentage: "80",
  },

  {
    id: 7,
    title: "Angular",
    percentage: "60",
  },

  {
    id: 8,
    title: "Java",
    percentage: "70",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Casa & Raiz Agência de viagem',
    details: [
      {
        icon: <FiFileText />,
        title: 'Projeto : ',
        desc: 'Site de Agência de viagem',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Projeto pessoal',
      },
      {
        icon: <FaCode />,
        title: 'Tecnologias: ',
        desc: 'JS|Bootstrap',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://allan-front-end2020.github.io/Travel_Agency/" target="_blank" rel="noopener noreferrer">allan-front-end2020.github.io/Travel_Agency/</a>,
        
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
