import { BsBarChartFill } from "react-icons/bs";
import { FaSortAmountUp } from "react-icons/fa";
import { TbChartBubbleFilled } from "react-icons/tb";
import { FaCodeMerge } from "react-icons/fa6";
import { VscInsert } from "react-icons/vsc";
import { GiSewedShell } from "react-icons/gi";
import { FaBucket } from "react-icons/fa6";
import { PiTreeStructureDuotone } from "react-icons/pi";
import { CgListTree } from "react-icons/cg";
import { BiMath } from "react-icons/bi";
import { PiTable } from "react-icons/pi";
import { PiGraph } from "react-icons/pi";
import { PiGraphBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaPowerOff } from "react-icons/fa6";

export const NAVIGATION = [
  {
    name: "ALGORITHM",
    link: "/algorithm",
    sub: [
      {
        icon: <BsBarChartFill />,
        name: "Selection Sort",
        link: "/algorithm/selection-sort",
        description: "visualize selection sort",
      },
      {
        icon: <TbChartBubbleFilled />,
        name: "Bubble Sort",
        link: "/algorithm/bubble-sort",
        description: "visualize selection sort",
      },
      {
        icon: <FaCodeMerge />,
        name: "Merge Sort",
        link: "/algorithm/merge-sort",
        description: "visualize selection sort",
      },
      {
        icon: <FaSortAmountUp />,
        name: "Quick Sort",
        link: "/algorithm/quick-sort",
        description: "visualize selection sort",
      },
      {
        icon: <VscInsert />,
        name: "Insertion Sort",
        link: "/algorithm/insertion-sort",
        description: "visualize selection sort",
      },
      {
        icon: <GiSewedShell />,
        name: "Shell Sort",
        link: "/algorithm/shell-sort",
        description: "visualize selection sort",
      },
      {
        icon: <FaBucket />,
        name: "Bucket Sort",
        link: "/algorithm/bucket-sort",
        description: "visualize selection sort",
      },
      {
        icon: <CgListTree />,
        name: "Heaps",
        link: "/algorithm/heaps",
        description: "visualize selection sort",
      },
      {
        icon: <PiTreeStructureDuotone />,
        name: "AVL Trees",
        link: "/algorithm/avl-trees",
        description: "visualize selection sort",
      },
    ],
  },
  {
    name: "MATH",
    link: "/math",
    sub: [
      {
        icon: <BiMath />,
        name: "Boolean Simplifier",
        link: "/math/boolean-simplifier",
        description: "visualize selection sort",
      },
      {
        icon: <PiTable />,
        name: "Truth Tables",
        link: "/math/truth-tables",
        description: "visualize selection sort",
      },
    ],
  },
  {
    name: "EDITOR",
    link: "/editor",
    sub: [
      {
        icon: <PiGraph />,
        name: "Graph",
        link: "/editor/graph",
        description: "visualize selection sort",
      },
      {
        icon: <FaPowerOff />,
        name: "State Machine",
        link: "/editor/state-machine",
        description: "visualize selection sort",
      },
    ],
  },
  {
    name: "CHEAT SHEET",
    link: "/cheat-sheet",
    sub: [
      {
        icon: <FaGithub />,
        name: "Github",
        link: "/cheat-sheet/github",
        description: "visualize selection sort",
      },
      {
        icon: <PiGraphBold />,
        name: "Pre-req Acyclic Graph",
        link: "/cheat-sheet/pre-req",
        description: "visualize selection sort",
      },
    ],
  },
  {
    name: "WEB DEV",
    link: "/web-dev",
    sub: [
      {
        icon: <SiTailwindcss />,
        name: "Tailwind",
        link: "/web-dev/tailwind",
        description: "visualize selection sort",
      },
      {
        icon: <TbBrandNextjs />,
        name: "Next.js",
        link: "/web-dev/nextjs",
        description: "visualize selection sort",
      },
    ],
  },
];

export const ALL_CARDS = () => {
  const tabArray = [];
  NAVIGATION.forEach((section) => {
    section.sub.forEach((card) => {
      tabArray.push({ ...card, show: false });
    });
  });
  return tabArray;
};
