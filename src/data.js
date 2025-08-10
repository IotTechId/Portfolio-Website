import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/public/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/c++.png";
import Tools8 from "/assets/tools/dart.png";
import Tools9 from "/assets/tools/flutter.png";
import Tools10 from "/assets/tools/github.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "C++",
    ket: "Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Dart",
    ket: "Language",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Flutter",
    ket: "Framework",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Github",
    ket: "Repository & Version Control",
    dad: "1000",
  },
];

import Proyek1 from "/assets/proyek/Picture1.png";
import Proyek2 from "/assets/proyek/flutter.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "projects.project1.name",
    desk: "projects.project1.description", // key translator
    tools: ["HTML", "CSS", "PHP", "MySQL"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "projects.project2.name",
    desk: "projects.project2.description", // key translator
    tools: ["Dart", "Flutter"],
    dad: "300",
  },
];

import jupyterhub from "/assets/labs/jupyterhub.png";
import gns3 from "/assets/labs/gns3.png";
import cyberchef from "/assets/labs/cyberchef.png";

export const listLabs = [
  {
    id: 1,
    gambar: jupyterhub,
    nama: "JupyterHub",
    desk: "labs.jupyterhub.desk", // key translator
    dad: "100",
    link: "jupyter/",
  },
  {
    id: 2,
    gambar: gns3,
    nama: "GNS3",
    desk: "labs.gns3.desk",
    dad: "200",
    link: "gns3/",
  },
  {
    id: 3,
    gambar: cyberchef,
    nama: "CyberChef",
    desk: "labs.cyberchef.desk",
    dad: "300",
    link: "cyberchef/",
  },
];
