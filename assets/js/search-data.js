// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A concise archive of my active and completed research agendas.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications, poster, and reports.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching experiences from Berkeley, Northwestern, and Synapse School.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "The easiest ways to reach me.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-presented-co-first-author-paper-as-a-poster-in-the-neurips-2023-datasets-and-benchmarks-track",
          title: 'Presented co-first-author paper as a poster in the NeurIPS 2023 Datasets and Benchmarks...',
          description: "",
          section: "News",},{id: "news-started-an-internship-at-intrinsic-an-alphabet-company-and-ex-google-x-moonshot",
          title: 'Started an internship at Intrinsic, an Alphabet company and ex-Google X Moonshot',
          description: "",
          section: "News",},{id: "news-continued-my-work-with-intrinsic-through-opencv",
          title: 'Continued my work with Intrinsic through OpenCV.',
          description: "",
          section: "News",},{id: "news-presented-our-paper-exploring-student-perceived-dimensions-of-authenticity-in-high-school-computer-science-at-icer-2025",
          title: 'Presented our paper, Exploring Student-Perceived Dimensions of Authenticity in High School Computer Science,...',
          description: "",
          section: "News",},{id: "news-two-of-our-papers-were-accepted-to-the-aaai-2026-workshop-on-machine-ethics-from-formal-methods-to-emergent-machine-ethics",
          title: 'Two of our papers were accepted to the AAAI 2026 workshop on Machine...',
          description: "",
          section: "News",},{id: "news-starting-9-months-of-mandarin-language-study-at-national-cheng-kung-university-in-taiwan-on-the-huayu-scholarship",
          title: 'Starting 9 months of Mandarin language study at National Cheng Kung University in...',
          description: "",
          section: "News",},{id: "news-our-paper-starting-from-scratch-again-and-again-tracing-the-origins-of-high-schoolers-negative-perceptions-of-block-based-programming-was-conditionally-accepted-to-chi-2026-in-barcelona",
          title: 'Our paper, Starting From Scratch Again and Again: Tracing the Origins of High...',
          description: "",
          section: "News",},{id: "news-received-a-best-paper-award-for-our-paper-at-chi-2026",
          title: 'Received a 🏆 Best Paper Award 🏆 for our paper at CHI 2026....',
          description: "",
          section: "News",},{id: "projects-authentic-learning-for-computer-science",
          title: 'Authentic Learning for Computer Science',
          description: "What authentic learning is and how to design for it in K-12 CS education.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-reinforcement-learning-for-wireless-communications",
          title: 'Reinforcement Learning for Wireless Communications',
          description: "Protocols for self-supervised agent-based reinforcement learning of modulation schemes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-dynamical-systems-modelling",
          title: 'Dynamical Systems Modelling',
          description: "Understanding how to benchmark and evaluate machine learning models for dynamical systems modelling.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-constructive-ai-alignment",
          title: 'Constructive AI Alignment',
          description: "An agenda for the coevolution of AI systems and people.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "teachings-cs188",
          title: 'CS188',
          description: "TA experience for Berkeley&#39;s Introduction to Artificial Intelligence course.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-cs188",
          title: 'CS188',
          description: "Head TA experience for Berkeley&#39;s Introduction to Artificial Intelligence course.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/fourth-teaching/";
            },},{id: "teachings-cs61as",
          title: 'CS61AS',
          description: "TA / instructor experience for Berkeley&#39;s Structure and Interpretation of Computer Programs course.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{id: "teachings-synapse-school",
          title: 'Synapse School',
          description: "Middle school computer science teaching experience at Synapse School.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/synapse-school/";
            },},{id: "teachings-ls-451-cs-496-transformative-ai-and-the-learning-sciences",
          title: 'LS 451 / CS 496: Transformative AI and the Learning Sciences',
          description: "Graduate teaching assistant experience for Northwestern&#39;s Fall 2024 TAILS seminar.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/tails/";
            },},{id: "teachings-cs188",
          title: 'CS188',
          description: "TA experience for Berkeley&#39;s Introduction to Artificial Intelligence course.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/third-teaching/";
            },},];
