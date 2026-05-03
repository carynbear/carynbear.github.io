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
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
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
          description: "",
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
          section: "News",},{id: "projects-authenticity-in-k-12-computer-science",
          title: 'Authenticity in K-12 Computer Science',
          description: "Studying how students perceive authenticity in programming and how those perceptions shape learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-learning-to-communicate-in-wireless-channels",
          title: 'Learning to Communicate in Wireless Channels',
          description: "Developing multi-agent protocols for modulation, cooperation, and communication without co-design.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-benchmarking-dynamical-system-models",
          title: 'Benchmarking Dynamical System Models',
          description: "Building tools to evaluate learning systems on dynamical prediction and identification tasks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-constructive-ai-alignment",
          title: 'Constructive AI Alignment',
          description: "Developing a systems-level alignment agenda that treats humans and AI as co-adapting agents.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "teachings-introduction-to-artificial-intelligence",
          title: 'Introduction to Artificial Intelligence',
          description: "Berkeley&#39;s introductory AI course covers search, knowledge representation, planning, reinforcement learning, and machine learning.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2016-uc-berkeley-cs188/";
            },},{id: "teachings-structure-and-interpretation-of-comp-progrms",
          title: 'Structure and Interpretation of Comp Progrms',
          description: "Berkeley&#39;s introductory CS1 course for majors covered functional programming, object-oriented programming, SQL/declarative programming and interpreters using Scheme and Python. This version is no longer offered.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2016-uc-berkeley-cs61as/";
            },},{id: "teachings-introduction-to-artificial-intelligence",
          title: 'Introduction to Artificial Intelligence',
          description: "Berkeley&#39;s introductory AI course covers search, knowledge representation, planning, reinforcement learning, and machine learning.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2017-uc-berkeley-cs188/";
            },},{id: "teachings-introduction-to-artificial-intelligence",
          title: 'Introduction to Artificial Intelligence',
          description: "Berkeley&#39;s introductory AI course covers search, knowledge representation, planning, reinforcement learning, and machine learning.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2019-uc-berkeley-cs188/";
            },},{id: "teachings-middle-school-computer-science",
          title: 'Middle School Computer Science',
          description: "Designed and taught project-based middle school curriculum focused on creativity, confidence, and computational thinking.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2020-menlo-park-synapse-school/";
            },},{id: "teachings-ls-451-cs-496-transformative-ai-and-the-learning-sciences",
          title: 'LS 451 / CS 496: Transformative AI and the Learning Sciences',
          description: "Co-designed a graduate seminar on how modern AI systems reshape learning sciences research, classroom practice, and learner experience.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2024-northwestern-tails/";
            },},];
