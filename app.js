
(() => {
  'use strict';

  const DATA = {
    profile: {
      name: 'K HARSHAVARDHAN',
      role: 'Cyber Security Analyst at SSEV SOFTSOLS / Researcher / Builder',
      education: 'B.Tech CSE — Cyber Security, VNR VJIET',
      cgpa: '7.52 / 10',
      graduation: '2026',
      location: 'Gangaram, Hyderabad, Telangana, India',
      email: 'hvckari@gmail.com',
      phone: '+91 8019252777',
      linkedin: 'https://www.linkedin.com/in/kari-harshavardhan-chowdary-146181217/',
      status: 'Working at SSEV SOFTSOLS as Cyber Security Analyst'
    },
    about: [
      'Enthusiastic B.Tech Cyber Security student at VNR VJIET with a passion for scripting and developing cybersecurity solutions.',
      'Focused on DDoS defense, moving-target security, phishing detection, network security, digital forensics and practical cyber automation.',
      'Skilled in programming languages and cybersecurity tools, with the ability to quickly apply theoretical knowledge.'
    ],
    education: [
      {
        period: '2022 - 2026',
        institution: 'VNR Vignana Jyothi Institute of Engineering and Technology',
        detail: 'Bachelor of Technology in Computer Science and Engineering — Cyber Security',
        score: 'CGPA: 7.52/10'
      },
      {
        period: '2020 - 2022',
        institution: 'Sri Chaitanya Junior College',
        detail: 'Higher Secondary School (XII)',
        score: '91.6%'
      },
      {
        period: '2019 - 2020',
        institution: 'Arohan The Complete School',
        detail: 'Secondary School (X)',
        score: '10/10'
      }
    ],
    publications: [
      {
        title: 'Moving Target Defense Framework for Resilient DDoS Mitigation using Dynamic Proxy Shuffling and ChaCha20 Encryption',
        type: 'IEEE Conference Paper',
        description: 'Designed a secure multi-server architecture integrating Moving Target Defense and ChaCha20 encryption to mitigate large-scale DDoS attacks.'
      },
      {
        title: 'AI-Based Phishing Website Detection using Machine Learning',
        type: 'AMLDA 2025 Conference Paper',
        description: 'Developed a real-time phishing detection system using TF-IDF vectorization, machine learning and Flask.'
      }
    ],
    patents: [
      {
        number: '202541117014',
        title: 'An Intelligent Automated Waste Segregation System with IoT-Enabled Data Monitoring and Classification Mechanism',
        date: 'Published in Patent Journal 51/2025, Dec 2025'
      },
      {
        number: '202641017466',
        title: 'A Novel Approach to Implementing ChaCha20 Encryption for Mitigating DDoS Attacks in Defense Network Architectures',
        date: 'Filed Feb 2026'
      }
    ],
    projects: [
      {
        title: 'MOTAG — Intelligent DDoS Detection and Mitigation System',
        tags: ['DDoS', 'MTD', 'ChaCha20'],
        description: 'Built a real-time system to monitor network traffic, detect abnormal spikes and automatically block malicious sources while maintaining service availability.',
        objective: 'Build a resilient DDoS defense system capable of maintaining service availability during large-scale attacks.',
        contribution: 'Designed the monitoring flow, attack-detection logic, dynamic proxy shuffling concept and encrypted communication layer.',
        architecture: ['Traffic Monitor', 'Anomaly Detector', 'Dynamic Proxy Shuffler', 'Filtering Module', 'Protected Server'],
        results: 'Improved resilience by combining traffic monitoring, source blocking, proxy rotation and secure ChaCha20-based communication.',
        challenges: 'Balancing detection speed, false positives, encryption overhead and service availability.',
        future: 'Add adaptive ML-based thresholds, live SIEM integration and large-scale cloud deployment.',
        github: '',
        demo: ''
      },
      {
        title: 'AI-Based Phishing Website Detection',
        tags: ['Python', 'Flask', 'Machine Learning'],
        description: 'Real-time malicious URL classification using TF-IDF vectorization and machine-learning models.',
        objective: 'Detect phishing websites quickly by classifying malicious and legitimate URLs.',
        contribution: 'Implemented URL preprocessing, TF-IDF feature extraction, ML classification and a Flask-based interface.',
        architecture: ['URL Input', 'Preprocessing', 'TF-IDF Vectorizer', 'ML Classifier', 'Safe / Phishing Result'],
        results: 'Produced a browser-accessible phishing detection workflow suitable for automated web-security monitoring.',
        challenges: 'Handling obfuscated URLs, dataset imbalance and model generalization.',
        future: 'Add browser-extension integration, domain reputation feeds and explainable risk scoring.',
        github: '',
        demo: ''
      },
      {
        title: 'Memory Forensics: Investigating Volatile Memory for Cyber Threats',
        tags: ['Forensics', 'Memory', 'Threat Analysis'],
        description: 'Analyzed volatile memory to identify malware, malicious activity and unauthorized access.',
        objective: 'Investigate volatile-memory evidence to uncover cyber threats that may not appear on disk.',
        contribution: 'Captured memory dumps, reviewed running processes, network artifacts and suspicious indicators.',
        architecture: ['Memory Capture', 'Artifact Extraction', 'Process Analysis', 'Network Review', 'Threat Findings'],
        results: 'Identified suspicious process and memory artifacts useful for incident investigation.',
        challenges: 'Large memory images, noisy artifacts and distinguishing legitimate activity from malicious behavior.',
        future: 'Automate IOC extraction and integrate YARA-based memory scanning.',
        github: '',
        demo: ''
      },
      {
        title: 'Automated Vulnerability Scanning Tool',
        tags: ['Scanner', 'Web Security', 'Automation'],
        description: 'Automatically analyzes websites for vulnerabilities, errors and security risks and provides detailed reports.',
        objective: 'Reduce manual effort by automatically identifying common website security issues.',
        contribution: 'Designed the scanning workflow, findings format and report-oriented presentation.',
        architecture: ['Target URL', 'Request Engine', 'Security Checks', 'Finding Classification', 'Report Generator'],
        results: 'Created a repeatable scanning workflow that helps developers review security, performance and reliability issues.',
        challenges: 'Avoiding false positives, safely handling timeouts and presenting findings clearly.',
        future: 'Add authenticated scans, exportable reports and vulnerability-severity scoring.',
        github: '',
        demo: ''
      },
      {
        title: 'Waste Segregation using Arduino',
        tags: ['Arduino', 'IoT', 'Sensors'],
        description: 'Smart dustbin using IR, inductive and moisture sensors to classify metallic, wet and dry waste.',
        objective: 'Automate waste classification for cleaner and more efficient disposal.',
        contribution: 'Integrated sensor inputs, Arduino control logic and classification flow for metallic, wet and dry waste.',
        architecture: ['Waste Input', 'IR Sensor', 'Inductive Sensor', 'Moisture Sensor', 'Classification & Segregation'],
        results: 'Demonstrated automatic sensor-based waste segregation with real-time monitoring potential.',
        challenges: 'Sensor calibration, mixed waste conditions and mechanical reliability.',
        future: 'Add IoT dashboards, cloud analytics and computer-vision-assisted classification.',
        github: '',
        demo: ''
      }
    ],
    skills: {
      Languages: ['Python', 'C', 'SQL', 'Java', 'HTML'],
      Tools: ['Wireshark', 'Nmap', 'Burp Suite', 'SIEM Tools'],
      Security: ['IDS/IPS', 'OWASP Top 10', 'Vulnerability Assessment', 'Network Security', 'DDoS Detection & Mitigation', 'Packet Analysis'],
      Platforms: ['Linux', 'Ubuntu', 'Remnux', 'Bash', 'Log Analysis'],
      Other: ['Data Structures', 'PEP 8']
    },
    experience: [
      {
        title: 'Cyber Security Analyst',
        organization: 'SSEV SOFTSOLS',
        detail: 'Worked on securing embedded devices and websites.'
      },
      {
        title: 'Cyber Security and Ethical Hacking',
        organization: 'Microsoft by Threat-Prism',
        detail: 'Completed projects on exploiting server vulnerabilities.'
      },
      {
        title: 'Campus Ambassador',
        organization: 'Learn Flu Online',
        detail: 'Organized private and public events for the college community.'
      }
    ],
    certifications: [
      'Professional Cyber Security Course — Google',
      'Cyber Suraksha — TATA',
      'Microsoft Certificate for Industrial Training in Cyber Security',
      'Bronze Certificate as a Smart Coder — Smart Interviews',
      'Web Development — VNR VJIET',
      'Cyber Security and Ethical Hacking — ArIES IIT Roorkee / Coincent',
      'A Practical Introduction to Cloud Computing — EC-Council',
      'Introduction to Cybersecurity — Cisco Networking Academy',
      'CEH — EC-Council'
    ],
    leadership: [
      'President — VJ Garuda Vigilance Cybersecurity Club, VNR VJIET',
      'Organizing Team Member — TechnoVista',
      'Organizing Team Member — ICAMADA',
      'Content Head — Dramatrix Club',
      'Placement Coordinator 2025–2026 — VNR VJIET'
    ],
    strengths: [
      'Strong Problem-Solving Skills',
      'Quick Learner',
      'Adaptability',
      'Leadership and Team Management',
      'Team Collaboration'
    ],
    hobbies: [
      'Creative Content Writing',
      'Event Organizing',
      'Writing and Directing Skits'
    ]
  };

  const styles = `
    :root {
      --bg:#04080c;
      --panel:rgba(7,18,24,.9);
      --panel2:rgba(10,28,35,.78);
      --line:rgba(53,255,162,.25);
      --green:#35ffa2;
      --green2:#9affcc;
      --cyan:#45d7ff;
      --text:#eafff3;
      --muted:#8caa9a;
      --red:#ff6474;
      --mono:Consolas,Monaco,'Courier New',monospace;
      --sans:Inter,Arial,sans-serif;
    }
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{
      margin:0;
      color:var(--text);
      font-family:var(--sans);
      background:
        radial-gradient(circle at 80% 10%,rgba(53,255,162,.08),transparent 25%),
        radial-gradient(circle at 10% 45%,rgba(69,215,255,.06),transparent 25%),
        var(--bg);
      overflow-x:hidden;
    }
    a{color:inherit;text-decoration:none}
    button,input{font:inherit}
    #matrix{position:fixed;inset:0;z-index:-3;width:100%;height:100%;opacity:.2}
    .scanlines{position:fixed;inset:0;pointer-events:none;z-index:10;opacity:.06;background:repeating-linear-gradient(to bottom,transparent 0,transparent 3px,rgba(255,255,255,.12) 4px)}
    .topbar{
      position:fixed;inset:0 0 auto 0;z-index:30;height:70px;
      display:flex;align-items:center;gap:28px;padding:0 clamp(18px,4vw,64px);
      background:rgba(4,9,13,.88);backdrop-filter:blur(14px);border-bottom:1px solid var(--line)
    }
    .brand{font:700 14px var(--mono);letter-spacing:.08em}
    .brand b{color:var(--green)}
    .nav{display:flex;gap:24px;margin-left:auto}
    .nav button{
      border:0;background:transparent;color:var(--muted);font:700 11px var(--mono);
      letter-spacing:.1em;cursor:pointer
    }
    .nav button:hover{color:var(--green)}
    .status{display:flex;align-items:center;gap:8px;font:700 10px var(--mono);color:var(--green2);border:1px solid var(--line);padding:8px 11px}
    .dot{width:7px;height:7px;border-radius:50%;background:var(--green);box-shadow:0 0 12px var(--green)}
    .menu{display:none;margin-left:auto;border:1px solid var(--line);background:transparent;color:var(--green);padding:7px 10px}
    .section{width:min(1180px,calc(100% - 36px));margin:auto;padding:105px 0}
    .hero{
      min-height:100vh;
      padding-top:125px;
      display:grid;
      grid-template-columns:minmax(0,1.35fr) minmax(340px,.65fr);
      gap:42px;
      align-items:center;
    }
    .hero>div:first-child{
      min-width:0;
    }
    .eyebrow,.label,.mono{font-family:var(--mono);color:var(--green)}
    .eyebrow{font-size:13px;margin-bottom:22px}
    h1{
      font-size:clamp(52px,6.8vw,96px);
      line-height:.9;
      margin:0;
      letter-spacing:-.055em;
      max-width:100%;
      overflow-wrap:anywhere;
    }
    h1 small{
      display:block;
      font:700 .42em var(--mono);
      letter-spacing:.10em;
      color:var(--green);
      margin-bottom:10px;
      text-shadow:0 0 18px rgba(53,255,162,.38);
    }
    .hero h2{font:600 clamp(16px,2vw,24px) var(--mono);color:var(--green2);line-height:1.55;margin:26px 0 18px}
    .lead{
      font-size:clamp(17px,1.25vw,20px);
      line-height:1.72;
      color:#c3d8cc;
      max-width:760px;
      margin-top:20px;
    }
    .actions{display:flex;gap:14px;flex-wrap:wrap;margin:30px 0}
    .btn{border:1px solid var(--line);padding:13px 18px;background:transparent;color:var(--text);font:700 12px var(--mono);cursor:pointer}
    .btn.primary{background:var(--green);color:#021009;box-shadow:0 0 24px rgba(53,255,162,.2)}
    .stats{display:grid;grid-template-columns:repeat(4,1fr);border-block:1px solid var(--line)}
    .stats div{padding:17px 12px;border-right:1px solid var(--line)}
    .stats div:last-child{border-right:0}
    .stats strong{display:block;color:var(--green);font:700 22px var(--mono)}
    .stats span{font-size:11px;color:var(--muted)}
    .identity{
      padding:16px;
      border:1px solid var(--line);
      background:var(--panel);
      box-shadow:0 25px 70px rgba(0,0,0,.45);
      width:100%;
      max-width:430px;
      justify-self:end;
    }
    .photo{
      position:relative;
      overflow:hidden;
      width:100%;
      height:clamp(390px,55vh,520px);
      background:#0b1418;
    }
    .photo img{
      width:100%;
      height:100%;
      object-fit:cover;
      object-position:center 12%;
    }
    .scan{position:absolute;left:0;right:0;height:2px;background:var(--green);box-shadow:0 0 16px var(--green);animation:scan 4s linear infinite}
    @keyframes scan{from{top:0}to{top:100%}}
    .meta{display:grid;gap:8px;margin-top:15px}
    .meta div{display:flex;justify-content:space-between;gap:14px;padding-bottom:7px;border-bottom:1px dashed rgba(53,255,162,.14)}
    .meta span{font:11px var(--mono);color:var(--muted)}
    .meta strong{font:700 13px var(--mono);text-align:right}
    .label{font-size:12px;margin-bottom:16px}
    .heading{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:38px}
    h3{font-size:clamp(34px,5vw,62px);line-height:1.06;margin:0;letter-spacing:-.04em}
    .grid2{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
    .card{border:1px solid var(--line);background:linear-gradient(145deg,rgba(10,25,31,.9),rgba(5,12,16,.87));padding:28px;transition:.22s}
    .card:hover{transform:translateY(-4px);border-color:rgba(53,255,162,.55)}
    .card h4{font-size:24px;margin:18px 0 12px}
    .card p{color:#afc2b7;line-height:1.7}
    .tags{display:flex;gap:7px;flex-wrap:wrap}
    .tags span{font:10px var(--mono);color:var(--green2);border:1px solid var(--line);padding:5px 8px}
    .info-list{display:grid;gap:14px}
    .info-row{padding:20px;border-left:2px solid var(--green);background:rgba(53,255,162,.035)}
    .info-row small{display:block;color:var(--cyan);font:10px var(--mono);margin-bottom:7px}
    .info-row strong{display:block;margin-bottom:8px}
    .info-row p{margin:0;color:#b6c9bd;line-height:1.6}
    .skills{display:flex;flex-wrap:wrap;gap:10px}
    .skills span{
      --glow-strength:0;
      --mx:50%;
      --my:50%;
      position:relative;
      isolation:isolate;
      overflow:hidden;
      padding:10px 13px;
      border:1px solid rgba(53,255,162,calc(.25 + var(--glow-strength) * .65));
      background:
        radial-gradient(
          circle 95px at var(--mx) var(--my),
          rgba(53,255,162,calc(var(--glow-strength) * .35)),
          rgba(69,215,255,calc(var(--glow-strength) * .16)) 38%,
          transparent 72%
        ),
        var(--panel2);
      color:var(--green2);
      font:12px var(--mono);
      cursor:default;
      transform:
        translateY(calc(var(--glow-strength) * -3px))
        scale(calc(1 + var(--glow-strength) * .035));
      box-shadow:
        0 0 calc(var(--glow-strength) * 10px) rgba(53,255,162,.65),
        0 0 calc(var(--glow-strength) * 25px) rgba(53,255,162,.32),
        inset 0 0 calc(var(--glow-strength) * 16px) rgba(53,255,162,.12);
      text-shadow:
        0 0 calc(var(--glow-strength) * 8px) rgba(154,255,204,.95);
      transition:
        transform .12s linear,
        border-color .12s linear,
        box-shadow .12s linear,
        text-shadow .12s linear;
      will-change:transform,box-shadow;
    }
    .skills span::before{
      content:'';
      position:absolute;
      inset:-1px;
      z-index:-1;
      opacity:var(--glow-strength);
      background:linear-gradient(
        110deg,
        transparent 10%,
        rgba(53,255,162,.18) 42%,
        rgba(69,215,255,.22) 52%,
        transparent 78%
      );
      transform:translateX(calc((var(--glow-strength) - 1) * -35%));
      pointer-events:none;
    }


    .boot-loader{
      position:fixed;
      inset:0;
      z-index:12000;
      display:grid;
      place-items:center;
      background:#020507;
      color:var(--green);
      font-family:var(--mono);
      transition:opacity .45s ease,visibility .45s ease;
    }
    .boot-loader.hidden{opacity:0;visibility:hidden;pointer-events:none}
    .boot-box{
      width:min(680px,calc(100% - 32px));
      border:1px solid var(--line);
      background:rgba(3,12,15,.98);
      padding:24px;
      box-shadow:0 0 45px rgba(53,255,162,.12);
    }
    .boot-title{font-size:clamp(18px,4vw,30px);margin-bottom:18px;text-shadow:0 0 16px rgba(53,255,162,.45)}
    .boot-log{min-height:150px;color:#a9f8ca;font:12px/1.8 var(--mono)}
    .boot-progress{height:8px;border:1px solid var(--line);background:#06100d;overflow:hidden}
    .boot-progress span{display:block;width:0;height:100%;background:linear-gradient(90deg,#0a6d44,var(--green));box-shadow:0 0 14px var(--green);transition:width .2s linear}
    .boot-note{margin-top:10px;color:var(--muted);font-size:10px}

    .threat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
    .threat-card{
      padding:22px;
      border:1px solid var(--line);
      background:linear-gradient(145deg,rgba(10,25,31,.9),rgba(5,12,16,.87));
      position:relative;
      overflow:hidden;
    }
    .threat-card::after{
      content:'';
      position:absolute;
      inset:auto -30% -60% 20%;
      height:140px;
      background:radial-gradient(circle,rgba(53,255,162,.14),transparent 68%);
    }
    .threat-card small{display:block;color:var(--muted);font:10px var(--mono);margin-bottom:10px}
    .threat-card strong{display:block;color:var(--green);font:700 clamp(28px,4vw,46px) var(--mono)}
    .threat-card span{display:block;margin-top:8px;color:#b8cdbf;font-size:12px}
    .simulated-label{margin-top:14px;color:var(--muted);font:10px var(--mono)}

    .resume-counter{
      margin-top:12px;
      color:var(--green2);
      font:10px var(--mono);
    }

    .project-actions{display:flex;gap:9px;flex-wrap:wrap;margin-top:18px}
    .project-actions button,.project-actions a{
      border:1px solid var(--line);
      background:rgba(53,255,162,.04);
      color:var(--green2);
      padding:8px 10px;
      font:700 10px var(--mono);
      cursor:pointer;
    }
    .project-actions button:hover,.project-actions a:hover{background:var(--green);color:#021009}

    .project-modal{
      position:fixed;
      inset:0;
      z-index:11000;
      display:none;
      place-items:center;
      padding:20px;
      background:rgba(0,0,0,.88);
      backdrop-filter:blur(8px);
    }
    .project-modal.active{display:grid}
    .project-modal-panel{
      width:min(900px,100%);
      max-height:90vh;
      overflow:auto;
      border:1px solid rgba(53,255,162,.45);
      background:#061015;
      box-shadow:0 0 60px rgba(53,255,162,.14);
    }
    .project-modal-head{
      display:flex;
      justify-content:space-between;
      gap:16px;
      align-items:center;
      padding:16px 18px;
      border-bottom:1px solid var(--line);
      font:700 12px var(--mono);
      color:var(--green);
    }
    .project-modal-head button{
      border:1px solid var(--line);
      background:transparent;
      color:var(--green);
      padding:7px 10px;
      cursor:pointer;
    }
    .project-modal-body{padding:22px}
    .project-modal-body h4{font-size:clamp(24px,4vw,40px);margin:0 0 20px}
    .modal-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .modal-block{padding:16px;border:1px solid var(--line);background:rgba(53,255,162,.025)}
    .modal-block small{display:block;color:var(--cyan);font:10px var(--mono);margin-bottom:8px}
    .modal-block p{margin:0;color:#bdd0c4;line-height:1.65}
    .architecture-flow{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
    .architecture-flow span{border:1px solid var(--line);padding:8px 10px;color:var(--green2);font:10px var(--mono)}
    .architecture-flow b{color:var(--cyan)}

    .breach-overlay{
      position:fixed;
      inset:0;
      z-index:9999;
      display:none;
      background:
        radial-gradient(circle at center,rgba(80,0,0,.22),transparent 55%),
        rgba(0,0,0,.96);
      color:#ff6b75;
      font-family:var(--mono);
      overflow:hidden;
    }
    .breach-overlay.active{display:block!important;opacity:1!important;visibility:visible!important}
    .breach-grid{
      position:absolute;
      inset:0;
      opacity:.16;
      background-image:
        linear-gradient(rgba(255,50,70,.12) 1px,transparent 1px),
        linear-gradient(90deg,rgba(255,50,70,.12) 1px,transparent 1px);
      background-size:34px 34px;
      animation:gridShift 5s linear infinite;
    }
    .breach-noise{
      position:absolute;
      inset:0;
      pointer-events:none;
      opacity:.12;
      background:repeating-linear-gradient(
        to bottom,
        transparent 0,
        transparent 2px,
        rgba(255,255,255,.14) 3px
      );
      animation:flicker .13s steps(2,end) infinite;
    }
    .breach-shell{
      position:relative;
      z-index:2;
      width:min(900px,calc(100% - 28px));
      margin:50vh auto 0;
      transform:translateY(-50%);
      border:1px solid rgba(255,77,92,.55);
      background:rgba(10,0,2,.92);
      box-shadow:0 0 55px rgba(255,0,30,.24),inset 0 0 45px rgba(255,0,30,.08);
    }
    .breach-titlebar{
      display:flex;
      justify-content:space-between;
      gap:20px;
      align-items:center;
      min-height:46px;
      padding:0 14px;
      border-bottom:1px solid rgba(255,77,92,.35);
      font-size:11px;
      letter-spacing:.08em;
      color:#ff9ba3;
    }
    .breach-exit{
      border:1px solid rgba(255,77,92,.45);
      background:rgba(255,40,60,.08);
      color:#ff9ba3;
      padding:7px 10px;
      cursor:pointer;
      font:700 10px var(--mono);
    }
    .breach-content{padding:22px}
    .breach-warning{
      margin:0 0 14px;
      font-size:clamp(22px,5vw,52px);
      line-height:1;
      letter-spacing:-.04em;
      color:#ff3f50;
      text-shadow:0 0 22px rgba(255,40,60,.62);
      animation:warningPulse .9s infinite alternate;
    }
    .breach-sub{
      color:#ff9ba3;
      font-size:12px;
      margin-bottom:18px;
      letter-spacing:.08em;
    }
    .breach-log{
      height:min(42vh,340px);
      overflow:hidden;
      border:1px solid rgba(255,77,92,.22);
      background:#050001;
      padding:14px;
      color:#ff7883;
      font:12px/1.65 var(--mono);
    }
    .breach-line{white-space:pre-wrap;word-break:break-word}
    .breach-line.ok{color:#ffbdc2}
    .breach-line.critical{color:#fff;background:rgba(255,30,50,.18)}
    .breach-progress{
      height:10px;
      margin-top:16px;
      border:1px solid rgba(255,77,92,.38);
      background:#130003;
      overflow:hidden;
    }
    .breach-progress>span{
      display:block;
      width:0%;
      height:100%;
      background:linear-gradient(90deg,#6e0010,#ff3147,#ff8d98);
      box-shadow:0 0 18px rgba(255,40,60,.65);
      transition:width .32s linear;
    }
    .breach-footer{
      display:flex;
      justify-content:space-between;
      gap:14px;
      margin-top:10px;
      color:#b75f67;
      font-size:10px;
    }
    .breach-reveal{
      position:fixed;
      inset:0;
      z-index:10000;
      display:none;
      place-items:center;
      background:#000;
      padding:24px;
      text-align:center;
      font-family:var(--mono);
    }
    .breach-reveal.active{display:grid}
    .breach-reveal-box{
      max-width:760px;
      border:1px solid rgba(53,255,162,.45);
      padding:32px;
      background:rgba(2,12,8,.96);
      box-shadow:0 0 45px rgba(53,255,162,.16);
    }
    .breach-reveal h4{
      color:var(--green);
      font-size:clamp(26px,5vw,52px);
      margin:0 0 18px;
      text-shadow:0 0 20px rgba(53,255,162,.45);
    }
    .breach-reveal p{color:#b9d9c7;line-height:1.7}
    .breach-reveal button{
      margin-top:18px;
      border:1px solid var(--line);
      background:var(--green);
      color:#021009;
      padding:11px 16px;
      font:700 11px var(--mono);
      cursor:pointer;
    }
    body.simulation-active main,
    body.simulation-active .topbar,
    body.simulation-active footer{
      filter:contrast(1.08) saturate(.86) hue-rotate(330deg);
    }
    body.simulation-active::after{
      content:'';
      position:fixed;
      inset:0;
      z-index:9998;
      pointer-events:none;
      background:rgba(255,0,30,.018);
      animation:flicker .18s steps(2,end) infinite;
    }
    @keyframes flicker{
      0%,100%{opacity:.06}
      50%{opacity:.15}
    }
    @keyframes warningPulse{
      from{opacity:.72;transform:scale(.995)}
      to{opacity:1;transform:scale(1)}
    }
    @keyframes gridShift{
      from{background-position:0 0,0 0}
      to{background-position:34px 34px,34px 34px}
    }
    @media(max-width:600px){
      .breach-shell{width:calc(100% - 18px)}
      .breach-content{padding:16px}
      .breach-log{font-size:10px;height:38vh}
      .breach-footer{flex-direction:column}
    }


    .game-panel{
      margin:14px 0 4px;
      border:1px solid rgba(53,255,162,.35);
      background:#020907;
      padding:14px;
      color:#baffd7;
      font-family:var(--mono);
    }
    .game-title{
      color:var(--green);
      font-weight:700;
      margin-bottom:10px;
      text-shadow:0 0 12px rgba(53,255,162,.35);
    }
    .game-options{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      margin-top:12px;
    }
    .game-options button{
      border:1px solid var(--line);
      background:rgba(53,255,162,.05);
      color:var(--green2);
      padding:8px 10px;
      font:700 10px var(--mono);
      cursor:pointer;
    }
    .game-options button:hover{
      background:var(--green);
      color:#021009;
    }
    .game-meter{
      height:8px;
      border:1px solid var(--line);
      background:#07100d;
      margin:8px 0 12px;
      overflow:hidden;
    }
    .game-meter span{
      display:block;
      height:100%;
      background:linear-gradient(90deg,#ff4f5f,#ffcc66,#35ffa2);
      transition:width .25s ease;
    }
    .snake-wrap{
      display:grid;
      gap:10px;
      margin-top:12px;
      touch-action:none;
      overscroll-behavior:none;
      -webkit-overflow-scrolling:auto;
    }
    .snake-board,
    #snakeGamePanel{
      touch-action:none;
      overscroll-behavior:none;
    }
    body.snake-playing{
      overscroll-behavior:none;
    }
    @media (max-width:760px) and (pointer:coarse){
      body.snake-playing{
        overflow:hidden;
        touch-action:none;
      }
    }
    .snake-board{
      display:grid;
      grid-template-columns:repeat(18,1fr);
      width:min(100%,468px);
      aspect-ratio:18/12;
      border:1px solid rgba(53,255,162,.35);
      background:#010503;
      overflow:hidden;
    }
    .snake-cell{
      border:1px solid rgba(53,255,162,.025);
    }
    .snake-cell.snake{
      background:var(--green);
      box-shadow:0 0 8px rgba(53,255,162,.55);
    }
    .snake-cell.head{
      background:var(--cyan);
      box-shadow:0 0 10px rgba(69,215,255,.7);
    }
    .snake-cell.food{
      background:#ff5969;
      box-shadow:0 0 10px rgba(255,89,105,.75);
      border-radius:50%;
    }
    .snake-status{
      display:flex;
      flex-wrap:wrap;
      justify-content:space-between;
      gap:10px;
      color:var(--muted);
      font-size:10px;
    }
    .snake-controls{
      display:grid;
      grid-template-columns:repeat(3,42px);
      grid-template-areas:
        ". up ."
        "left down right";
      gap:6px;
      width:max-content;
    }
    .snake-controls button{
      width:48px;
      height:42px;
      border:1px solid var(--line);
      background:rgba(53,255,162,.08);
      color:var(--green2);
      cursor:pointer;
      user-select:none;
      -webkit-user-select:none;
      touch-action:manipulation;
      border-radius:4px;
    }
    .snake-controls button:active{
      background:var(--green);
      color:#021009;
      transform:scale(.96);
    }
    #snakeGamePanel{
      scroll-margin-top:90px;
    }
    .snake-controls [data-dir="up"]{grid-area:up}
    .snake-controls [data-dir="left"]{grid-area:left}
    .snake-controls [data-dir="down"]{grid-area:down}
    .snake-controls [data-dir="right"]{grid-area:right}

    .clearance-widget{
      position:fixed;
      left:14px;
      bottom:14px;
      z-index:90;
      width:min(280px,calc(100% - 28px));
      border:1px solid var(--line);
      background:rgba(3,12,15,.94);
      padding:12px;
      font:10px var(--mono);
      box-shadow:0 0 25px rgba(53,255,162,.08);
    }
    .clearance-widget strong{color:var(--green)}
    .clearance-bar{height:7px;border:1px solid var(--line);background:#06100d;margin:8px 0;overflow:hidden}
    .clearance-bar span{display:block;height:100%;width:0;background:linear-gradient(90deg,#0b6d45,var(--green));transition:width .35s ease}
    .achievements-panel,.floating-window{
      position:fixed;
      z-index:10500;
      display:none;
      width:min(520px,calc(100% - 24px));
      max-height:78vh;
      overflow:auto;
      border:1px solid rgba(53,255,162,.45);
      background:#061015;
      box-shadow:0 0 45px rgba(53,255,162,.12);
    }
    .achievements-panel.active,.floating-window.active{display:block}
    .window-head{
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:12px;
      padding:12px 14px;
      border-bottom:1px solid var(--line);
      color:var(--green);
      font:700 11px var(--mono);
      cursor:move;
      user-select:none;
    }
    .window-head button{border:1px solid var(--line);background:transparent;color:var(--green);padding:6px 8px;cursor:pointer}
    .window-body{padding:16px}
    .achievement-row{display:flex;gap:10px;align-items:flex-start;padding:10px 0;border-bottom:1px dashed rgba(53,255,162,.14)}
    .achievement-row .state{color:var(--green)}
    .achievement-row.locked{opacity:.45}
    .suggestions{
      display:none;
      border-top:1px solid var(--line);
      background:rgba(5,14,18,.98);
      padding:8px 14px;
      font:10px var(--mono);
      color:var(--muted);
    }
    .suggestions.active{display:flex;flex-wrap:wrap;gap:8px}
    .suggestions span{border:1px solid var(--line);padding:5px 7px;color:var(--green2);cursor:pointer}
    .attack-feed{display:grid;gap:8px;margin-top:18px}
    .attack-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;padding:10px;border:1px solid var(--line);background:rgba(53,255,162,.025);font:10px var(--mono)}
    .attack-row b{color:var(--cyan)}
    .attack-row em{color:var(--green);font-style:normal}
    .skill-detail{
      margin-top:18px;
      border:1px solid var(--line);
      background:rgba(53,255,162,.025);
      padding:16px;
      display:none;
    }
    .skill-detail.active{display:block}
    .recruiter-mode .hints,
    .recruiter-mode .clearance-widget{display:none!important}
    .recruiter-banner{
      display:none;
      position:fixed;
      top:70px;
      left:0;right:0;
      z-index:40;
      padding:9px 16px;
      text-align:center;
      background:#092117;
      border-bottom:1px solid var(--line);
      color:var(--green);
      font:700 10px var(--mono);
    }
    .recruiter-mode .recruiter-banner{display:block}
    .theme-switcher{display:flex;flex-wrap:wrap;gap:8px}
    .theme-switcher button{border:1px solid var(--line);background:transparent;color:var(--green2);padding:8px 10px;font:10px var(--mono);cursor:pointer}
    body.theme-red{--green:#ff4c5d;--green2:#ff9ba5;--cyan:#ffb34d;--line:rgba(255,76,93,.28)}
    body.theme-blue{--green:#45d7ff;--green2:#9cecff;--cyan:#9f8cff;--line:rgba(69,215,255,.28)}
    body.theme-amber{--green:#ffbd4a;--green2:#ffe0a0;--cyan:#ff7e47;--line:rgba(255,189,74,.28)}
    @media(max-width:760px){
      .clearance-widget{position:static;width:min(1180px,calc(100% - 36px));margin:0 auto 18px}
      .achievements-panel,.floating-window{left:12px!important;top:74px!important}
      .attack-row{grid-template-columns:1fr}
    }



    .achievement-toast{
      position:fixed;
      right:18px;
      bottom:18px;
      z-index:13000;
      max-width:320px;
      padding:14px 16px;
      border:1px solid rgba(53,255,162,.45);
      background:rgba(2,12,8,.97);
      color:var(--green2);
      font:11px/1.5 var(--mono);
      box-shadow:0 0 30px rgba(53,255,162,.16);
      transform:translateY(120%);
      opacity:0;
      transition:.35s ease;
    }
    .achievement-toast.show{
      transform:translateY(0);
      opacity:1;
    }


    /* Scroll reveal animations */
    .reveal-item{
      opacity:0;
      transform:translateY(34px) scale(.985);
      filter:blur(5px);
      transition:
        opacity .75s cubic-bezier(.2,.7,.2,1),
        transform .75s cubic-bezier(.2,.7,.2,1),
        filter .75s cubic-bezier(.2,.7,.2,1);
      transition-delay:var(--reveal-delay,0ms);
      will-change:opacity,transform,filter;
    }
    .reveal-item.reveal-left{
      transform:translateX(-42px) scale(.985);
    }
    .reveal-item.reveal-right{
      transform:translateX(42px) scale(.985);
    }
    .reveal-item.reveal-zoom{
      transform:scale(.92);
    }
    .reveal-item.is-visible{
      opacity:1;
      transform:translate3d(0,0,0) scale(1);
      filter:blur(0);
    }

    .section-heading.reveal-item,
    .heading.reveal-item{
      transform:translateY(24px);
    }

    .topbar .nav button{
      position:relative;
      overflow:hidden;
    }
    .topbar .nav button::after{
      content:'';
      position:absolute;
      left:0;
      right:0;
      bottom:-4px;
      height:2px;
      background:var(--green);
      transform:scaleX(0);
      transform-origin:left;
      transition:transform .28s ease;
      box-shadow:0 0 10px var(--green);
    }
    .topbar .nav button:hover::after,
    .topbar .nav button.active::after{
      transform:scaleX(1);
    }
    .topbar .nav button.active{
      color:var(--green);
      text-shadow:0 0 12px rgba(53,255,162,.45);
    }

    @media (prefers-reduced-motion:reduce){
      .reveal-item,
      .reveal-item.reveal-left,
      .reveal-item.reveal-right,
      .reveal-item.reveal-zoom{
        opacity:1!important;
        transform:none!important;
        filter:none!important;
        transition:none!important;
      }
    }

    .terminal{border:1px solid rgba(53,255,162,.48);background:rgba(2,8,10,.96);box-shadow:0 0 45px rgba(53,255,162,.08)}
    .termbar{height:45px;display:flex;align-items:center;justify-content:space-between;padding:0 14px;border-bottom:1px solid var(--line);font:11px var(--mono);color:var(--muted)}
    .termbar-actions{display:flex;align-items:center;gap:8px}
    .termbar button{border:0;background:transparent;color:var(--green);font:10px var(--mono);cursor:pointer}
    .termbar .stop-command{
      display:none;
      border:1px solid rgba(255,100,116,.5);
      background:rgba(255,100,116,.08);
      color:#ff8b97;
      padding:6px 9px;
    }
    .termbar .stop-command:active{
      background:#ff6474;
      color:#170205;
    }
    @media (max-width:760px) and (pointer:coarse){
      .termbar .stop-command{
        display:inline-flex;
        align-items:center;
        justify-content:center;
      }
    }
    .output{height:430px;overflow:auto;padding:20px;font:13px/1.7 var(--mono);color:#baffd7}
    .line{white-space:pre-wrap;word-break:break-word;margin-bottom:6px}
    .line.command{color:var(--text)}
    .line.command:before{content:'harsha@portfolio:~$ ';color:var(--green)}
    .line.error{color:var(--red)}
    .k{color:var(--cyan)}
    .v{color:var(--green2)}
    .inputrow{display:flex;gap:10px;align-items:center;padding:0 18px;min-height:54px;border-top:1px solid var(--line);font:13px var(--mono)}
    .prompt{color:var(--green);white-space:nowrap}
    .inputrow input{flex:1;min-width:0;border:0;outline:0;background:transparent;color:var(--text);caret-color:var(--green)}
    @media (max-width:760px) and (pointer:coarse){
      .inputrow{
        cursor:text;
      }
      .inputrow input{
        touch-action:manipulation;
      }
    }
    .hints{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
    .hints button{border:1px solid var(--line);background:var(--panel);color:var(--green2);padding:8px 10px;font:10px var(--mono);cursor:pointer}
    .contact{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
    .contact a,.contact div{padding:18px;border:1px solid var(--line);background:var(--panel)}
    .contact small{display:block;color:var(--muted);font:10px var(--mono);margin-bottom:8px}
    footer{width:min(1180px,calc(100% - 36px));margin:auto;padding:26px 0;border-top:1px solid var(--line);display:flex;justify-content:space-between;gap:16px;color:var(--muted);font:10px var(--mono)}
    @media(max-width:980px){
      .hero{grid-template-columns:1fr}
      .identity{max-width:500px;width:100%;justify-self:center}
      .photo{height:clamp(420px,62vh,560px)}
      .grid2{grid-template-columns:1fr}
      .threat-grid{grid-template-columns:repeat(2,1fr)}
      .status{display:none}
    }
    @media(max-width:760px){
      .topbar{height:62px}
      .menu{display:block}
      .nav{display:none;position:absolute;top:62px;left:0;right:0;padding:18px;flex-direction:column;background:rgba(4,9,13,.98);border-bottom:1px solid var(--line)}
      .nav.open{display:flex}
      .section{padding:78px 0}
      .hero{padding-top:105px}
      .stats{grid-template-columns:repeat(2,1fr)}
      .stats div:nth-child(2){border-right:0}
      .contact{grid-template-columns:1fr}
      .threat-grid,.modal-grid{grid-template-columns:1fr}
      .heading{align-items:flex-start;flex-direction:column}
      .output{height:390px;font-size:11px;padding:15px}
      footer{flex-direction:column}
    }
    @media(max-width:470px){
      h1{font-size:47px}
      h1 small{font-size:.55em;margin-bottom:8px}
      .lead{font-size:17px;line-height:1.7}
      .identity{padding:12px;max-width:100%}
      .photo{height:auto;aspect-ratio:.78}
      .actions{flex-direction:column}
      .btn{text-align:center}
      .meta div{align-items:flex-start;flex-direction:column}
      .meta strong{text-align:left}
      .card{padding:22px}
      .prompt{font-size:10px}
    }
  `;

  function html(strings, ...values) {
    return strings.reduce((out, str, i) => out + str + (values[i] ?? ''), '');
  }

  function projectCards() {
    return DATA.projects.map(project => html`
      <article class="card">
        <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        <div class="project-actions">
          <button class="project-details-btn" data-project-index="${DATA.projects.indexOf(project)}">VIEW CASE STUDY</button>
          ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener">GITHUB</a>` : ''}
          ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener">LIVE DEMO</a>` : ''}
        </div>
      </article>
    `).join('');
  }

  function educationRows() {
    return DATA.education.map(item => html`
      <div class="info-row">
        <small>${item.period}</small>
        <strong>${item.institution}</strong>
        <p>${item.detail}<br>${item.score}</p>
      </div>
    `).join('');
  }

  function publicationRows() {
    return DATA.publications.map(item => html`
      <div class="info-row">
        <small>${item.type}</small>
        <strong>${item.title}</strong>
        <p>${item.description}</p>
      </div>
    `).join('');
  }

  function patentRows() {
    return DATA.patents.map(item => html`
      <div class="info-row">
        <small>INDIAN PATENT APPLICATION ${item.number}</small>
        <strong>${item.title}</strong>
        <p>${item.date}</p>
      </div>
    `).join('');
  }

  function experienceRows() {
    return DATA.experience.map(item => html`
      <div class="info-row">
        <small>${item.organization}</small>
        <strong>${item.title}</strong>
        <p>${item.detail}</p>
      </div>
    `).join('');
  }

  function skillTags() {
    return Object.entries(DATA.skills)
      .flatMap(([group, items]) => items.map(item => `<span title="${group}">${item}</span>`))
      .join('');
  }

  function appTemplate() {
    return html`
      <style>${styles}</style>
      <div class="boot-loader" id="bootLoader">
        <div class="boot-box">
          <div class="boot-title">INITIALIZING SECURE PORTFOLIO...</div>
          <div class="boot-log" id="bootLog"></div>
          <div class="boot-progress"><span id="bootBar"></span></div>
          <div class="boot-note">Loading security modules, project database and terminal interface.</div>
        </div>
      </div>

      <div class="recruiter-banner">RECRUITER MODE ACTIVE — EXPERIENCE, SKILLS, PROJECTS, PATENTS, PUBLICATIONS AND CONTACT PRIORITIZED</div>

      <div class="achievement-toast" id="achievementToast"></div>
      <div class="clearance-widget" id="clearanceWidget">
        <strong>VISITOR SECURITY CLEARANCE</strong>
        <div class="clearance-bar"><span id="clearanceBar"></span></div>
        <div><span id="clearancePercent">0%</span> // <span id="clearanceRank">GUEST</span></div>
      </div>
      <div class="achievements-panel" id="achievementsPanel">
        <div class="window-head"><span>ACHIEVEMENTS</span><button data-close-window="achievementsPanel">CLOSE</button></div>
        <div class="window-body" id="achievementsBody"></div>
      </div>
      <div class="floating-window" id="utilityWindow">
        <div class="window-head"><span id="utilityTitle">UTILITY</span><button data-close-window="utilityWindow">CLOSE</button></div>
        <div class="window-body" id="utilityBody"></div>
      </div>

      <div class="project-modal" id="projectModal" aria-hidden="true">
        <div class="project-modal-panel">
          <div class="project-modal-head">
            <span>PROJECT CASE STUDY</span>
            <button id="projectModalClose">CLOSE [ESC]</button>
          </div>
          <div class="project-modal-body" id="projectModalBody"></div>
        </div>
      </div>

      <canvas id="matrix"></canvas>

      <div class="scanlines"></div>

      <div class="breach-overlay" id="breachOverlay" aria-hidden="true">
        <div class="breach-grid"></div>
        <div class="breach-noise"></div>
        <div class="breach-shell">
          <div class="breach-titlebar">
            <span>SECURITY EVENT // BROWSER SIMULATION</span>
            <button class="breach-exit" id="breachExit">EXIT SIMULATION [ESC]</button>
          </div>
          <div class="breach-content">
            <h4 class="breach-warning">UNAUTHORIZED SESSION DETECTED</h4>
            <div class="breach-sub" id="breachStatus">INITIALIZING VISUAL SECURITY SIMULATION...</div>
            <div class="breach-log" id="breachLog"></div>
            <div class="breach-progress"><span id="breachBar"></span></div>
            <div class="breach-footer">
              <span id="breachPercent">OVERRIDE: 0%</span>
              <span>NO DEVICE DATA IS ACCESSED</span>
            </div>
          </div>
        </div>
      </div>

      <div class="breach-reveal" id="breachReveal" aria-hidden="true">
        <div class="breach-reveal-box">
          <h4>SIMULATION COMPLETE</h4>
          <p>
            Relax — this was a browser-only visual effect built into Harshavardhan's portfolio.
            No files, camera, microphone, location, passwords or device controls were accessed.
          </p>
          <button id="breachContinue">CONTINUE TO PORTFOLIO</button>
        </div>
      </div>

      <header class="topbar">
        <button class="brand nav-target" data-target="home"><b>&gt;_</b> HARSHAVARDHAN</button>
        <button class="menu" id="menuBtn">☰</button>
        <nav class="nav" id="nav">
          <button data-target="home">HOME</button>
          <button data-target="about">ABOUT</button>
          <button data-target="projects">PROJECTS</button>
          <button data-target="credentials">CREDENTIALS</button>
          <button data-target="terminal">TERMINAL</button>
        </nav>
        <div class="status"><span class="dot"></span>SYSTEM ONLINE</div>
      </header>

      <main>
        <section class="section hero" id="home">
          <div>
            <div class="eyebrow">root@portfolio:~$ ./initialize_profile.sh</div>
            <h1><small>K</small>HARSHAVARDHAN</h1>
            <h2>Cyber Security Analyst at SSEV SOFTSOLS // Researcher // Builder</h2>
            <p class="lead">${DATA.about.join(' ')}</p>
            <div class="actions">
              <button class="btn primary" data-target="terminal">&gt; OPEN TERMINAL</button>
              <button class="btn" id="resumeBtn">VIEW RESUME</button>
              <div class="resume-counter">RESUME OPENED ON THIS DEVICE: <span id="resumeCount">0</span></div>
              <button class="btn" id="simulationBtn">RUN SECURITY SIMULATION</button>
            </div>
            <div class="stats">
              <div><strong>02</strong><span>Patent Applications</span></div>
              <div><strong>02</strong><span>Research Papers</span></div>
              <div><strong>05+</strong><span>Security Projects</span></div>
              <div><strong>2026</strong><span>Graduation</span></div>
            </div>
          </div>

          <div class="identity">
            <div class="photo">
              <div class="scan"></div>
              <img src="assets/harsha-profile.png" alt="K Harshavardhan">
            </div>
            <div class="meta">
              <div><span>IDENTITY</span><strong>${DATA.profile.name}</strong></div>
              <div><span>ROLE</span><strong>CYBER SECURITY ANALYST</strong></div>
              <div><span>LOCATION</span><strong>HYDERABAD, INDIA</strong></div>
              <div><span>STATUS</span><strong style="color:var(--green)">WORKING AT SSEV SOFTSOLS</strong></div>
            </div>
          </div>
        </section>

        <section class="section" id="about">
          <div class="heading">
            <div><div class="label">01 // ABOUT</div><h3>Profile and education</h3></div>
          </div>
          <div class="grid2">
            <div class="card">
              <h4>Professional Summary</h4>
              ${DATA.about.map(p => `<p>${p}</p>`).join('')}
            </div>
            <div class="info-list">${educationRows()}</div>
          </div>
        </section>

        <section class="section" id="projects">
          <div class="heading">
            <div><div class="label">02 // PROJECTS</div><h3>Selected cyber operations</h3></div>
            <div class="mono">[ mission_data.loaded = true ]</div>
          </div>
          <div class="grid2">${projectCards()}</div>
        </section>

        <section class="section" id="credentials">
          <div class="heading">
            <div><div class="label">03 // CREDENTIALS</div><h3>Research and professional record</h3></div>
          </div>
          <div class="grid2">
            <div>
              <div class="label">PUBLICATIONS</div>
              <div class="info-list">${publicationRows()}</div>
            </div>
            <div>
              <div class="label">PATENTS</div>
              <div class="info-list">${patentRows()}</div>
            </div>
            <div>
              <div class="label">EXPERIENCE</div>
              <div class="info-list">${experienceRows()}</div>
            </div>
            <div>
              <div class="label">CERTIFICATIONS</div>
              <div class="info-list">
                ${DATA.certifications.map((item, i) => `<div class="info-row"><small>CERT-${String(i+1).padStart(2,'0')}</small><strong>${item}</strong></div>`).join('')}
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="heading">
            <div><div class="label">04 // SKILLS</div><h3>Technical capabilities</h3></div>
          </div>
          <div class="skills">${skillTags()}</div><div class="skill-detail" id="skillDetail"></div>
        </section>


        <section class="section" id="threat-dashboard">
          <div class="heading">
            <div><div class="label">05 // THREAT INTELLIGENCE</div><h3>Security operations dashboard</h3></div>
            <div class="mono">[ demonstration_mode = true ]</div>
          </div>
          <div class="threat-grid">
            <div class="threat-card"><small>THREATS ANALYZED</small><strong data-counter="12480">0</strong><span>Simulated portfolio metric</span></div>
            <div class="threat-card"><small>MALICIOUS URLS FOUND</small><strong data-counter="247">0</strong><span>Phishing detection demo</span></div>
            <div class="threat-card"><small>DDoS EVENTS BLOCKED</small><strong data-counter="38921">0</strong><span>MOTAG demonstration</span></div>
            <div class="threat-card"><small>SECURITY SCORE</small><strong data-counter="94" data-suffix="%">0%</strong><span>Portfolio readiness score</span></div>
          </div>
          <div class="simulated-label">These values are clearly marked demonstration metrics and are not live production statistics.</div>
          <div class="attack-feed" id="attackFeed"></div>
        </section>

        <section class="section" id="terminal">
          <div class="heading">
            <div><div class="label">06 // INTERACTIVE TERMINAL</div><h3>Query the complete profile</h3></div>
            <div class="mono">Type help to begin</div>
          </div>

          <div class="terminal" id="terminalBox">
            <div class="termbar">
              <span>harsha@cyber-portfolio: ~</span>
              <div class="termbar-actions">
                <button class="stop-command" id="stopCommandBtn">STOP</button>
                <button id="clearBtn">CLEAR</button>
              </div>
            </div>
            <div class="output" id="output"></div>
            <form class="inputrow" id="terminalForm">
              <span class="prompt">harsha@portfolio:~$</span>
              <input id="terminalInput" autocomplete="off" spellcheck="false" placeholder="type a command...">
            </form>
            <div class="suggestions" id="commandSuggestions"></div>
          </div>

          <div class="hints">
            ${['help','whoami','about','education','skills','projects','publications','patents','experience','certificates','leadership','strengths','hobbies','contact','play firewall','play snake','mission','achievements','recruiter','theme','highscore','simulation','all'].map(cmd => `<button data-command="${cmd}">${cmd}</button>`).join('')}
          </div>
        </section>

        <section class="section">
          <div class="heading">
            <div><div class="label">07 // CONTACT</div><h3>Let’s build secure systems</h3></div>
          </div>
          <div class="contact">
            <a href="mailto:${DATA.profile.email}"><small>EMAIL</small><strong>${DATA.profile.email}</strong></a>
            <a href="tel:${DATA.profile.phone.replace(/\s/g,'')}"><small>PHONE</small><strong>${DATA.profile.phone}</strong></a>
            <a href="${DATA.profile.linkedin}" target="_blank" rel="noopener"><small>LINKEDIN</small><strong>kari-harshavardhan-chowdary-146181217</strong></a>
            <div><small>LOCATION</small><strong>${DATA.profile.location}</strong></div>
          </div>
        </section>
      </main>

      <footer>
        <span>© ${new Date().getFullYear()} K HARSHAVARDHAN</span>
        <span>CONNECTION SECURE</span>
        <span>100% JAVASCRIPT-DRIVEN PORTFOLIO</span>
      </footer>
    `;
  }


  document.getElementById('app').innerHTML = appTemplate();

  // Fast cinematic loading screen.
  const bootLoader = document.getElementById('bootLoader');
  const bootLog = document.getElementById('bootLog');
  const bootBar = document.getElementById('bootBar');
  const bootMessages = [
    'Loading identity profile...',
    'Decrypting project database...',
    'Initializing threat dashboard...',
    'Mounting interactive terminal...',
    'Verifying portfolio integrity...',
    'ACCESS GRANTED'
  ];

  bootMessages.forEach((message, index) => {
    setTimeout(() => {
      const line = document.createElement('div');
      line.textContent = `> ${message}`;
      bootLog.appendChild(line);
      bootBar.style.width = `${Math.round(((index + 1) / bootMessages.length) * 100)}%`;
    }, index * 210);
  });

  // Startup is controlled after the breach functions are initialized.



  const projectModal = document.getElementById('projectModal');
  const projectModalBody = document.getElementById('projectModalBody');
  const projectModalClose = document.getElementById('projectModalClose');

  function openProjectModal(index) {
    const project = DATA.projects[index];
    if (!project) return;

    const architecture = (project.architecture || [])
      .map((step, stepIndex, steps) =>
        `<span>${step}</span>${stepIndex < steps.length - 1 ? '<b>→</b>' : ''}`
      )
      .join('');

    projectModalBody.innerHTML = `
      <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
      <h4>${project.title}</h4>
      <div class="modal-grid">
        <div class="modal-block"><small>PROJECT OBJECTIVE</small><p>${project.objective || project.description}</p></div>
        <div class="modal-block"><small>MY CONTRIBUTION</small><p>${project.contribution || 'Project design and implementation.'}</p></div>
        <div class="modal-block" style="grid-column:1/-1"><small>ARCHITECTURE</small><div class="architecture-flow">${architecture}</div></div>
        <div class="modal-block"><small>RESULTS</small><p>${project.results || project.description}</p></div>
        <div class="modal-block"><small>CHALLENGES</small><p>${project.challenges || 'Technical research, implementation and validation.'}</p></div>
        <div class="modal-block" style="grid-column:1/-1"><small>FUTURE IMPROVEMENTS</small><p>${project.future || 'Continue improving scalability, automation and usability.'}</p></div>
      </div>
    `;

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    const opened = new Set(JSON.parse(localStorage.getItem('openedProjects') || '[]'));
    opened.add(index);
    localStorage.setItem('openedProjects', JSON.stringify([...opened]));
    if (opened.size >= 3) unlockAchievement('PROJECT EXPLORER','Opened at least three project case studies.');
    addClearance(4);
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.project-details-btn').forEach(button => {
    button.addEventListener('click', () => openProjectModal(Number(button.dataset.projectIndex)));
  });

  projectModalClose.addEventListener('click', closeProjectModal);
  projectModal.addEventListener('click', event => {
    if (event.target === projectModal) closeProjectModal();
  });


  const clearanceBar = document.getElementById('clearanceBar');
  const clearancePercent = document.getElementById('clearancePercent');
  const clearanceRank = document.getElementById('clearanceRank');
  const achievementsPanel = document.getElementById('achievementsPanel');
  const achievementsBody = document.getElementById('achievementsBody');
  const utilityWindow = document.getElementById('utilityWindow');
  const utilityTitle = document.getElementById('utilityTitle');
  const utilityBody = document.getElementById('utilityBody');
  const suggestionsBox = document.getElementById('commandSuggestions');
  const skillDetail = document.getElementById('skillDetail');

  let clearanceScore = Number(localStorage.getItem('clearanceScore') || 0);
  const achievementCatalog = {
    'TERMINAL OPERATOR':'Run five terminal commands.',
    'FIREWALL DEFENDER':'Complete Firewall Defense with a strong score.',
    'TERMINAL SERPENT':'Score at least 8 in Snake.',
    'PROJECT EXPLORER':'Open three project case studies.',
    'INCIDENT INVESTIGATOR':'Complete the cyber investigation mission.',
    'ROOT ACCESS':'Reach 100% visitor clearance.'
  };

  function getClearanceRank(score) {
    if (score >= 100) return 'ROOT ACCESS';
    if (score >= 81) return 'RED TEAM OPERATOR';
    if (score >= 61) return 'INCIDENT RESPONDER';
    if (score >= 41) return 'SOC ANALYST';
    if (score >= 21) return 'SECURITY TRAINEE';
    return 'GUEST';
  }

  function addClearance(points) {
    clearanceScore = Math.min(100, clearanceScore + points);
    localStorage.setItem('clearanceScore', String(clearanceScore));
    clearanceBar.style.width = `${clearanceScore}%`;
    clearancePercent.textContent = `${clearanceScore}%`;
    clearanceRank.textContent = getClearanceRank(clearanceScore);
    if (clearanceScore >= 100) unlockAchievement('ROOT ACCESS','Completed the full portfolio exploration path.');
  }

  function renderAchievements() {
    achievementsBody.innerHTML = Object.entries(achievementCatalog).map(([title, detail]) => {
      const unlocked = Boolean(localStorage.getItem(`achievement:${title}`));
      return `<div class="achievement-row ${unlocked ? '' : 'locked'}"><span class="state">${unlocked ? '[✓]' : '[ ]'}</span><div><strong>${title}</strong><br><span>${detail}</span></div></div>`;
    }).join('');
  }

  function showWindow(title, htmlContent) {
    utilityTitle.textContent = title;
    utilityBody.innerHTML = htmlContent;
    utilityWindow.classList.add('active');
    utilityWindow.style.left = '50%';
    utilityWindow.style.top = '50%';
    utilityWindow.style.transform = 'translate(-50%,-50%)';
  }

  function makeDraggable(windowElement) {
    const head = windowElement.querySelector('.window-head');
    let dragging = false, offsetX = 0, offsetY = 0;
    head.addEventListener('pointerdown', event => {
      if (event.target.closest('button')) return;
      dragging = true;
      const rect = windowElement.getBoundingClientRect();
      offsetX = event.clientX - rect.left;
      offsetY = event.clientY - rect.top;
      windowElement.style.transform = 'none';
      head.setPointerCapture(event.pointerId);
    });
    head.addEventListener('pointermove', event => {
      if (!dragging) return;
      windowElement.style.left = `${event.clientX - offsetX}px`;
      windowElement.style.top = `${event.clientY - offsetY}px`;
    });
    head.addEventListener('pointerup', () => dragging = false);
  }

  makeDraggable(achievementsPanel);
  makeDraggable(utilityWindow);

  document.querySelectorAll('[data-close-window]').forEach(button => {
    button.addEventListener('click', () => {
      document.getElementById(button.dataset.closeWindow).classList.remove('active');
    });
  });

  addClearance(0);

  const output = document.getElementById('output');
  const input = document.getElementById('terminalInput');
  const form = document.getElementById('terminalForm');

  function addLine(content = '', className = '') {
    const div = document.createElement('div');
    div.className = `line ${className}`.trim();
    div.innerHTML = content;
    output.appendChild(div);
    output.scrollTop = output.scrollHeight;
  }

  function addBlock(title, lines) {
    addLine(`<span class="v">--- ${title.toUpperCase()} ---</span>`);
    lines.forEach(line => addLine(line || '&nbsp;'));
  }

  const commandMap = {
    help: () => addBlock('available commands', [
      '<span class="k">help</span>          list every command',
      '<span class="k">whoami</span>        show complete identity',
      '<span class="k">about</span>         show professional summary',
      '<span class="k">education</span>     show education',
      '<span class="k">skills</span>        show skills',
      '<span class="k">projects</span>      show projects',
      '<span class="k">publications</span>  show publications',
      '<span class="k">patents</span>        show patents',
      '<span class="k">experience</span>     show experience',
      '<span class="k">certificates</span>   show certifications',
      '<span class="k">leadership</span>     show leadership roles',
      '<span class="k">strengths</span>      show strengths',
      '<span class="k">hobbies</span>        show hobbies',
      '<span class="k">contact</span>        show contact details',
      '<span class="k">resume</span>         open resume PDF',
      '<span class="k">all</span>            print complete profile',
      '<span class="k">ls</span>            list portfolio files',
      '<span class="k">cat [file]</span>    read a virtual portfolio file',
      '<span class="k">history</span>       show terminal history',
      '<span class="k">date</span>          show current date and time',
      '<span class="k">search [term]</span> search projects, skills and credentials',
      '<span class="k">play firewall</span> start Firewall Defense',
      '<span class="k">play snake</span>    start terminal Snake',
      '<span class="k">highscore</span>     show saved game scores',
      '<span class="k">quit game</span>     stop the active game',
      '<span class="k">pwd / cd / tree</span> navigate virtual filesystem',
      '<span class="k">mission</span>       start cyber investigation',
      '<span class="k">achievements</span>  open achievement panel',
      '<span class="k">recruiter</span>     enable recruiter mode',
      '<span class="k">theme</span>         change visual theme',
      '<span class="k">open [project]</span> open project case study',
      '<span class="k">Ctrl+C</span>        interrupt active task on desktop',
      '<span class="k">STOP button</span>   interrupt active task on phone',
      '<span class="k">simulation</span>    replay browser-only breach effect',
      '<span class="k">clear</span>         clear terminal'
    ]),

    whoami: () => addBlock('identity', [
      `<span class="k">name:</span> <span class="v">${DATA.profile.name}</span>`,
      `<span class="k">role:</span> ${DATA.profile.role}`,
      `<span class="k">education:</span> ${DATA.profile.education}`,
      `<span class="k">cgpa:</span> ${DATA.profile.cgpa}`,
      `<span class="k">graduation:</span> ${DATA.profile.graduation}`,
      `<span class="k">location:</span> ${DATA.profile.location}`,
      `<span class="k">email:</span> ${DATA.profile.email}`,
      `<span class="k">phone:</span> ${DATA.profile.phone}`,
      `<span class="k">status:</span> <span class="v">${DATA.profile.status}</span>`
    ]),

    about: () => addBlock('about', DATA.about),

    education: () => addBlock('education', DATA.education.flatMap(item => [
      `<span class="k">${item.period}</span> — ${item.institution}`,
      `${item.detail} | ${item.score}`,
      ''
    ])),

    skills: () => addBlock('skills', Object.entries(DATA.skills).map(([key, values]) =>
      `<span class="k">${key.toLowerCase()}:</span> ${values.join(', ')}`
    )),

    projects: () => addBlock('projects', DATA.projects.map((item, i) =>
      `<span class="k">[${String(i + 1).padStart(2,'0')}]</span> ${item.title}\n     ${item.description}`
    )),

    publications: () => addBlock('publications', DATA.publications.map((item, i) =>
      `<span class="k">[${item.type}]</span> ${item.title}\n${item.description}`
    )),

    patents: () => addBlock('patents', DATA.patents.map(item =>
      `<span class="k">${item.number}</span> — ${item.title}\n${item.date}`
    )),

    experience: () => addBlock('experience', DATA.experience.map(item =>
      `<span class="k">${item.title}</span> — ${item.organization}\n${item.detail}`
    )),

    certificates: () => addBlock('certifications', DATA.certifications.map((item, i) =>
      `<span class="k">[${String(i + 1).padStart(2,'0')}]</span> ${item}`
    )),

    certifications: () => commandMap.certificates(),

    leadership: () => addBlock('leadership', DATA.leadership.map((item, i) =>
      `<span class="k">[${String(i + 1).padStart(2,'0')}]</span> ${item}`
    )),

    strengths: () => addBlock('strengths', DATA.strengths.map(item => `<span class="k">+</span> ${item}`)),

    hobbies: () => addBlock('hobbies', DATA.hobbies.map(item => `<span class="k">+</span> ${item}`)),

    contact: () => addBlock('contact', [
      `<span class="k">email:</span> <a href="mailto:${DATA.profile.email}">${DATA.profile.email}</a>`,
      `<span class="k">phone:</span> <a href="tel:${DATA.profile.phone.replace(/\s/g,'')}">${DATA.profile.phone}</a>`,
      `<span class="k">linkedin:</span> <a href="${DATA.profile.linkedin}" target="_blank" rel="noopener">${DATA.profile.linkedin}</a>`,
      `<span class="k">location:</span> ${DATA.profile.location}`
    ]),

    resume: () => {
      addLine('Opening resume PDF...');
      openResumeAndCount();
    },

    clear: () => {
      output.innerHTML = '';
    },

    all: () => {
      [
        'whoami','about','education','skills','projects','publications',
        'patents','experience','certificates','leadership','strengths','hobbies','contact'
      ].forEach(name => commandMap[name]());
    }
  };


  const commandHistory = [];
  let historyIndex = 0;

  const virtualFiles = {
    'about.txt': () => DATA.about,
    'education.txt': () => DATA.education.flatMap(item => [
      `${item.period} — ${item.institution}`,
      `${item.detail} | ${item.score}`
    ]),
    'skills.txt': () => Object.entries(DATA.skills).map(([key, values]) => `${key}: ${values.join(', ')}`),
    'projects.txt': () => DATA.projects.map((project, index) => `[${index + 1}] ${project.title} — ${project.description}`),
    'certificates.txt': () => DATA.certifications,
    'contact.txt': () => [
      `Email: ${DATA.profile.email}`,
      `Phone: ${DATA.profile.phone}`,
      `LinkedIn: ${DATA.profile.linkedin}`,
      `Location: ${DATA.profile.location}`
    ],
    'profile.txt': () => [
      `Name: ${DATA.profile.name}`,
      `Role: ${DATA.profile.role}`,
      `Status: ${DATA.profile.status}`
    ]
  };

  function searchPortfolio(term) {
    const query = term.trim().toLowerCase();
    if (!query) {
      addLine('Usage: search [term]', 'error');
      return;
    }

    const results = [];

    DATA.projects.forEach(project => {
      const haystack = `${project.title} ${project.description} ${project.tags.join(' ')}`.toLowerCase();
      if (haystack.includes(query)) results.push(`PROJECT: ${project.title}`);
    });

    Object.entries(DATA.skills).forEach(([group, skills]) => {
      skills.forEach(skill => {
        if (`${group} ${skill}`.toLowerCase().includes(query)) results.push(`SKILL: ${skill} (${group})`);
      });
    });

    DATA.certifications.forEach(cert => {
      if (cert.toLowerCase().includes(query)) results.push(`CERTIFICATE: ${cert}`);
    });

    DATA.publications.forEach(pub => {
      if (`${pub.title} ${pub.description}`.toLowerCase().includes(query)) results.push(`PUBLICATION: ${pub.title}`);
    });

    if (results.length) addBlock(`search results for "${term}"`, results);
    else addLine(`No portfolio results found for "${term}".`);
  }


  const achievementToast = document.getElementById('achievementToast');
  let achievementTimer = null;

  function unlockAchievement(title, detail) {
    const key = `achievement:${title}`;
    if (localStorage.getItem(key)) return;
    localStorage.setItem(key, '1');
    if (typeof renderAchievements === 'function') renderAchievements();

    achievementToast.innerHTML = `<strong>ACHIEVEMENT UNLOCKED</strong><br>${title}<br><span style="color:var(--muted)">${detail}</span>`;
    achievementToast.classList.add('show');

    clearTimeout(achievementTimer);
    achievementTimer = setTimeout(() => {
      achievementToast.classList.remove('show');
    }, 3200);
  }

  let activeGame = null;

  const firewallThreats = [
    { source:'185.42.19.77', port:22, signature:'BRUTE_FORCE', answer:'2', label:'BLOCK' },
    { source:'10.0.0.14', port:443, signature:'TRUSTED_INTERNAL_API', answer:'1', label:'ALLOW' },
    { source:'45.83.91.10', port:3389, signature:'RDP_SPRAY', answer:'3', label:'QUARANTINE' },
    { source:'172.16.0.5', port:53, signature:'DNS_HEALTH_CHECK', answer:'1', label:'ALLOW' },
    { source:'203.0.113.91', port:80, signature:'SQL_INJECTION_PATTERN', answer:'2', label:'BLOCK' },
    { source:'192.168.1.23', port:445, signature:'LATERAL_MOVEMENT', answer:'3', label:'QUARANTINE' },
    { source:'198.51.100.7', port:443, signature:'VALID_CERTIFICATE_UPDATE', answer:'1', label:'ALLOW' },
    { source:'91.204.14.8', port:23, signature:'TELNET_BOTNET_SCAN', answer:'2', label:'BLOCK' }
  ];

  function getFirewallRank(score, total) {
    const percent = Math.round((score / total) * 100);
    if (percent >= 91) return 'CYBER DEFENSE COMMANDER';
    if (percent >= 76) return 'INCIDENT RESPONDER';
    if (percent >= 56) return 'SOC ANALYST';
    if (percent >= 31) return 'SECURITY INTERN';
    return 'SCRIPT KIDDIE';
  }

  function saveHighScore(key, score) {
    const previous = Number(localStorage.getItem(key) || 0);
    if (score > previous) localStorage.setItem(key, String(score));
  }

  function renderFirewallRound() {
    if (!activeGame || activeGame.type !== 'firewall') return;

    const game = activeGame;
    const threat = game.threats[game.index];

    if (!threat || game.health <= 0) {
      const total = game.threats.length * 100;
      const rank = getFirewallRank(game.score, total);
      saveHighScore('firewallHighScore', game.score);

      addBlock('firewall defense complete', [
        `Threats handled: ${game.index}/${game.threats.length}`,
        `Final score: ${game.score}`,
        `System health: ${Math.max(0, game.health)}%`,
        `Rank: ${rank}`
      ]);

      if (game.score >= 600) {
        unlockAchievement('FIREWALL DEFENDER', `Completed Firewall Defense with ${game.score} points.`);
      }

      activeGame = null;
      return;
    }

    const panel = document.createElement('div');
    panel.className = 'game-panel';
    panel.innerHTML = `
      <div class="game-title">FIREWALL DEFENSE // ROUND ${game.index + 1}</div>
      <div><span class="k">SOURCE:</span> ${threat.source}</div>
      <div><span class="k">PORT:</span> ${threat.port}</div>
      <div><span class="k">SIGNATURE:</span> ${threat.signature}</div>
      <div style="margin-top:8px">Choose the correct action:</div>
      <div class="game-options">
        <button data-fw-choice="1">[1] ALLOW</button>
        <button data-fw-choice="2">[2] BLOCK</button>
        <button data-fw-choice="3">[3] QUARANTINE</button>
      </div>
      <div class="game-meter"><span style="width:${Math.max(0, game.health)}%"></span></div>
      <div class="snake-status">
        <span>SCORE: ${game.score}</span>
        <span>HEALTH: ${Math.max(0, game.health)}%</span>
        <span>COMBO: x${game.combo}</span>
      </div>
    `;
    output.appendChild(panel);
    output.scrollTop = output.scrollHeight;

    panel.querySelectorAll('[data-fw-choice]').forEach(button => {
      button.addEventListener('click', () => {
        handleFirewallChoice(button.dataset.fwChoice);
      });
    });
  }

  function handleFirewallChoice(choice) {
    if (!activeGame || activeGame.type !== 'firewall') return;

    const game = activeGame;
    const threat = game.threats[game.index];

    if (choice === threat.answer) {
      game.combo += 1;
      const points = 100 + Math.max(0, game.combo - 1) * 20;
      game.score += points;
      addLine(`<span class="v">CORRECT:</span> ${threat.label} selected. +${points} points.`);
    } else {
      game.combo = 0;
      game.health -= 22;
      addLine(`<span class="error">INCORRECT ACTION:</span> system health reduced by 22%.`, 'error');
    }

    game.index += 1;
    renderFirewallRound();
  }

  function startFirewallGame() {
    if (activeGame) {
      addLine('A game is already active. Type <span class="k">quit game</span> first.', 'error');
      return;
    }

    activeGame = {
      type:'firewall',
      threats:[...firewallThreats].sort(() => Math.random() - .5),
      index:0,
      score:0,
      health:100,
      combo:0
    };

    addBlock('firewall defense', [
      'Protect the simulated network.',
      'Type 1, 2 or 3, or click a decision button.',
      '1 = ALLOW | 2 = BLOCK | 3 = QUARANTINE'
    ]);
    renderFirewallRound();
  }

  const SNAKE_COLS = 18;
  const SNAKE_ROWS = 12;
  let snakeLoop = null;

  function randomSnakeFood(snake) {
    // Build a list of every free cell and choose one.
    // This guarantees a new food packet after every catch and avoids
    // accidental endless loops when the snake becomes long.
    const occupied = new Set(snake.map(segment => `${segment.x},${segment.y}`));
    const freeCells = [];

    for (let y = 0; y < SNAKE_ROWS; y++) {
      for (let x = 0; x < SNAKE_COLS; x++) {
        if (!occupied.has(`${x},${y}`)) {
          freeCells.push({ x, y });
        }
      }
    }

    if (!freeCells.length) return null;
    return freeCells[Math.floor(Math.random() * freeCells.length)];
  }

  function keepSnakeGameVisible() {
    const panel = document.getElementById('snakeGamePanel');
    if (!panel) return;

    // Scroll only inside the terminal output.
    // Never scroll or reposition the whole webpage.
    output.scrollTop = Math.max(
      0,
      panel.offsetTop - Math.max(12, (output.clientHeight - panel.offsetHeight) / 2)
    );
  }

  function renderSnakeGame() {
    if (!activeGame || activeGame.type !== 'snake') return;

    // Preserve both terminal and page position while updating the score/board.
    const savedTerminalScroll = output.scrollTop;
    const savedPageX = window.scrollX;
    const savedPageY = window.scrollY;

    let panel = document.getElementById('snakeGamePanel');
    if (!panel) {
      panel = document.createElement('div');
      panel.className = 'game-panel';
      panel.id = 'snakeGamePanel';
      output.appendChild(panel);
    }

    const game = activeGame;
    const cells = [];

    for (let y = 0; y < SNAKE_ROWS; y++) {
      for (let x = 0; x < SNAKE_COLS; x++) {
        let cls = 'snake-cell';

        const snakeIndex = game.snake.findIndex(segment => segment.x === x && segment.y === y);
        if (snakeIndex === 0) cls += ' head';
        else if (snakeIndex > 0) cls += ' snake';

        if (game.food.x === x && game.food.y === y) cls += ' food';
        cells.push(`<div class="${cls}"></div>`);
      }
    }

    panel.innerHTML = `
      <div class="game-title">TERMINAL SNAKE</div>
      <div class="snake-wrap">
        <div class="snake-board">${cells.join('')}</div>
        <div class="snake-status">
          <span>SCORE: ${game.score}</span>
          <span>PACKETS CAUGHT: ${game.foodsCaught}</span>
          <span>HIGH SCORE: ${Number(localStorage.getItem('snakeHighScore') || 0)}</span>
          <span>CONTROLS: ARROWS / WASD / SWIPE</span>
        </div>
        <div class="snake-controls">
          <button data-dir="up">↑</button>
          <button data-dir="left">←</button>
          <button data-dir="down">↓</button>
          <button data-dir="right">→</button>
        </div>
      </div>
    `;

    panel.querySelectorAll('[data-dir]').forEach(button => {
      const move = event => {
        event.preventDefault();
        event.stopPropagation();
        setSnakeDirection(button.dataset.dir);
        input.blur();
      };

      button.addEventListener('pointerdown', move);
      button.addEventListener('click', event => {
        // Prevent the synthetic click after pointerdown from moving twice.
        event.preventDefault();
      });
    });

    const board = panel.querySelector('.snake-board');
    let touchStartX = 0;
    let touchStartY = 0;

    board.addEventListener('touchstart', event => {
      const touch = event.touches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      event.preventDefault();
      event.stopPropagation();
    }, { passive:false });

    board.addEventListener('touchmove', event => {
      // Prevent the phone page from scrolling while the player swipes.
      event.preventDefault();
      event.stopPropagation();
    }, { passive:false });

    board.addEventListener('touchend', event => {
      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;
      const minimumSwipe = 18;

      if (Math.max(Math.abs(deltaX), Math.abs(deltaY)) < minimumSwipe) return;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        setSnakeDirection(deltaX > 0 ? 'right' : 'left');
      } else {
        setSnakeDirection(deltaY > 0 ? 'down' : 'up');
      }

      event.preventDefault();
      event.stopPropagation();
    }, { passive:false });

    // Updating the score must not move the terminal or the webpage.
    output.scrollTop = savedTerminalScroll;
    window.scrollTo(savedPageX, savedPageY);
  }

  function setSnakeDirection(direction) {
    if (!activeGame || activeGame.type !== 'snake') return;

    const opposites = {
      up:'down',
      down:'up',
      left:'right',
      right:'left'
    };

    if (opposites[direction] !== activeGame.direction) {
      activeGame.nextDirection = direction;
    }
  }

  function endSnakeGame() {
    if (!activeGame || activeGame.type !== 'snake') return;

    clearInterval(snakeLoop);
    snakeLoop = null;

    const finalScore = activeGame.score;
    const packetsCaught = activeGame.foodsCaught;
    saveHighScore('snakeHighScore', finalScore);

    const oldPanel = document.getElementById('snakeGamePanel');
    if (oldPanel) oldPanel.remove();

    activeGame = null;
    document.body.classList.remove('snake-playing');

    addBlock('snake game over', [
      `Final score: ${finalScore}`,
      `Packets caught: ${packetsCaught}`,
      `High score: ${Math.max(finalScore, Number(localStorage.getItem('snakeHighScore') || 0))}`,
      'Type play snake to restart.'
    ]);

    if (finalScore >= 8) {
      unlockAchievement('TERMINAL SERPENT', `Scored ${finalScore} in Terminal Snake.`);
    }

    output.scrollTop = output.scrollHeight;
  }

  function snakeTick() {
    if (!activeGame || activeGame.type !== 'snake') return;

    const game = activeGame;
    game.direction = game.nextDirection;

    const head = { ...game.snake[0] };
    if (game.direction === 'up') head.y -= 1;
    if (game.direction === 'down') head.y += 1;
    if (game.direction === 'left') head.x -= 1;
    if (game.direction === 'right') head.x += 1;

    // Wrap around the board edges.
    // Leaving one side makes the snake enter from the opposite side.
    if (head.x < 0) head.x = SNAKE_COLS - 1;
    if (head.x >= SNAKE_COLS) head.x = 0;
    if (head.y < 0) head.y = SNAKE_ROWS - 1;
    if (head.y >= SNAKE_ROWS) head.y = 0;

    const willEat =
      game.food &&
      head.x === game.food.x &&
      head.y === game.food.y;

    // When the snake is not eating, the tail moves away during this tick.
    // Excluding that last tail cell prevents false self-collisions.
    const bodyToCheck = willEat ? game.snake : game.snake.slice(0, -1);
    const hitSelf = bodyToCheck.some(
      segment => segment.x === head.x && segment.y === head.y
    );

    // The snake dies only when its head touches its own body.
    if (hitSelf) {
      endSnakeGame();
      return;
    }

    game.snake.unshift(head);

    if (willEat) {
      game.score += 1;
      game.foodsCaught += 1;

      // Immediately generate another packet. This continues without a limit
      // until the snake hits a wall or its own body.
      game.food = randomSnakeFood(game.snake);

      // The player has filled the complete board.
      if (!game.food) {
        clearInterval(snakeLoop);
        snakeLoop = null;
        saveHighScore('snakeHighScore', game.score);
        addBlock('snake board completed', [
          `Final score: ${game.score}`,
          `Packets caught: ${game.foodsCaught}`,
          'Every available cell was filled.'
        ]);
        unlockAchievement('TERMINAL SERPENT MASTER', 'Completed the full Snake board.');
        activeGame = null;
        document.body.classList.remove('snake-playing');
        return;
      }
    } else {
      game.snake.pop();
    }

    renderSnakeGame();
  }

  function startSnakeGame() {
    // Clean up any stale game state from a previous run.
    if (snakeLoop) {
      clearInterval(snakeLoop);
      snakeLoop = null;
    }

    const stalePanel = document.getElementById('snakeGamePanel');
    if (stalePanel) stalePanel.remove();

    if (activeGame && activeGame.type !== 'snake') {
      addLine('Another game is active. Type <span class="k">quit game</span> first.', 'error');
      return;
    }

    document.body.classList.add('snake-playing');

    activeGame = {
      type:'snake',
      snake:[
        {x:7,y:5},
        {x:6,y:5},
        {x:5,y:5}
      ],
      direction:'right',
      nextDirection:'right',
      food:null,
      score:0,
      foodsCaught:0
    };

    activeGame.food = randomSnakeFood(activeGame.snake);

    addBlock('terminal snake', [
      'Use Arrow Keys or W/A/S/D.',
      'Eat the red packets. Board edges wrap around; avoid touching your own body.',
      'Desktop: press Ctrl+C. Phone: tap the STOP button. You can also type quit game.'
    ]);

    renderSnakeGame();
    input.blur();

    // Position the game inside the terminal once at startup.
    requestAnimationFrame(() => keepSnakeGameVisible());

    // Slightly slower on phones for easier touch control.
    const snakeSpeed = window.innerWidth <= 760 ? 190 : 145;
    snakeLoop = setInterval(snakeTick, snakeSpeed);
  }

  function quitActiveGame() {
    if (!activeGame) {
      addLine('No game is currently active.');
      return;
    }

    if (activeGame.type === 'snake') {
      clearInterval(snakeLoop);
      snakeLoop = null;
    }

    const panel = document.getElementById('snakeGamePanel');
    if (panel) panel.remove();

    const stoppedGameType = activeGame.type;
    addLine(`Game stopped: ${stoppedGameType}`);
    activeGame = null;

    if (stoppedGameType === 'snake') {
      document.body.classList.remove('snake-playing');
    }

    output.scrollTop = output.scrollHeight;
  }

  function showHighScores() {
    addBlock('saved high scores', [
      `Firewall Defense: ${Number(localStorage.getItem('firewallHighScore') || 0)}`,
      `Terminal Snake: ${Number(localStorage.getItem('snakeHighScore') || 0)}`
    ]);
  }


  function interruptActiveTask(source = 'keyboard') {
    let interrupted = false;

    if (activeGame) {
      if (activeGame.type === 'snake' && snakeLoop) {
        clearInterval(snakeLoop);
        snakeLoop = null;
      }

      const snakePanel = document.getElementById('snakeGamePanel');
      if (snakePanel) snakePanel.remove();

      const interruptedType = activeGame.type;
      addLine('^C', 'command');
      addLine(`Interrupted active ${interruptedType} task.`);
      activeGame = null;

      if (interruptedType === 'snake') {
        document.body.classList.remove('snake-playing');
      }

      interrupted = true;
    }

    if (typeof breachRunning !== 'undefined' && breachRunning) {
      stopBreach(false);
      addLine('^C', 'command');
      addLine('Security simulation interrupted.');
      interrupted = true;
    }

    if (!interrupted) {
      addLine('^C', 'command');
      addLine(source === 'phone'
        ? 'No active task. Terminal is ready.'
        : 'No active process to interrupt.');
    }

    input.value = '';

    const isPhone =
      window.matchMedia('(max-width:760px)').matches &&
      window.matchMedia('(pointer:coarse)').matches;

    if (!isPhone) {
      input.focus();
    }

    output.scrollTop = output.scrollHeight;
  }


  let currentPath = '/home/harsha';
  let missionState = null;
  let typingTimer = null;
  let typingMode = localStorage.getItem('typingMode') || 'instant';
  let soundEnabled = localStorage.getItem('soundEnabled') === '1';
  let commandCount = Number(localStorage.getItem('commandCount') || 0);

  const fsTree = {
    '/home/harsha':['about.txt','profile.txt','skills.txt','contact.txt','projects','certificates','evidence'],
    '/home/harsha/projects':['motag.txt','phishing.txt','forensics.txt','scanner.txt','waste-iot.txt'],
    '/home/harsha/certificates':['certificates.txt'],
    '/home/harsha/evidence':['access.log','suspicious_process.txt','hash.txt']
  };

  const fileReaders = {
    '/home/harsha/about.txt':() => DATA.about,
    '/home/harsha/profile.txt':() => [`Name: ${DATA.profile.name}`,`Role: ${DATA.profile.role}`,`Status: ${DATA.profile.status}`],
    '/home/harsha/skills.txt':() => Object.entries(DATA.skills).map(([k,v]) => `${k}: ${v.join(', ')}`),
    '/home/harsha/contact.txt':() => [`Email: ${DATA.profile.email}`,`Phone: ${DATA.profile.phone}`,`LinkedIn: ${DATA.profile.linkedin}`],
    '/home/harsha/projects/motag.txt':() => [DATA.projects[0].title,DATA.projects[0].description],
    '/home/harsha/projects/phishing.txt':() => [DATA.projects[1].title,DATA.projects[1].description],
    '/home/harsha/projects/forensics.txt':() => [DATA.projects[2].title,DATA.projects[2].description],
    '/home/harsha/projects/scanner.txt':() => [DATA.projects[3].title,DATA.projects[3].description],
    '/home/harsha/projects/waste-iot.txt':() => [DATA.projects[4].title,DATA.projects[4].description],
    '/home/harsha/certificates/certificates.txt':() => DATA.certifications,
    '/home/harsha/evidence/access.log':() => ['09:14:22 POST /login 401','09:14:28 POST /login 401','09:15:03 GET /invoice.zip 200','09:15:11 outbound connection 185.42.19.77:4444'],
    '/home/harsha/evidence/suspicious_process.txt':() => ['PID 4182 svchost.exe','PID 5218 chrome.exe','PID 7741 invoice.pdf.exe','PID 8821 explorer.exe'],
    '/home/harsha/evidence/hash.txt':() => ['invoice.pdf.exe SHA256: 8f14e45fceea167a5a36dedd4bea2543']
  };

  function normalizePath(target) {
    if (!target || target === '~') return '/home/harsha';
    if (target === '..') return currentPath.split('/').slice(0,-1).join('/') || '/';
    if (target.startsWith('/')) return target.replace(/\/+$/,'');
    return `${currentPath}/${target}`.replace(/\/+/g,'/').replace(/\/+$/,'');
  }

  function typeLines(title, lines) {
    if (typingTimer) clearInterval(typingTimer);
    if (typingMode === 'instant') {
      addBlock(title, lines);
      return;
    }
    addLine(`<span class="v">--- ${title.toUpperCase()} ---</span>`);
    let index = 0;
    const delay = typingMode === 'fast' ? 45 : 120;
    typingTimer = setInterval(() => {
      if (index >= lines.length) {
        clearInterval(typingTimer);
        typingTimer = null;
        return;
      }
      addLine(lines[index++] || '&nbsp;');
    }, delay);
  }

  function setTheme(name) {
    document.body.classList.remove('theme-red','theme-blue','theme-amber');
    if (['red','blue','amber'].includes(name)) document.body.classList.add(`theme-${name}`);
    localStorage.setItem('portfolioTheme',name);
    addLine(`Theme changed to ${name}.`);
  }

  function toggleRecruiterMode(enable) {
    document.body.classList.toggle('recruiter-mode',enable);
    sessionStorage.setItem('recruiterMode',enable ? '1':'0');
    addLine(enable ? 'Recruiter mode enabled.' : 'Recruiter mode disabled.');
  }

  function startMission() {
    missionState = {step:0};
    typeLines('incident mission',[
      'A suspicious executable was downloaded after repeated failed logins.',
      'Use: ls evidence',
      'Then inspect files with cat and submit the malicious process using:',
      'submit <filename>'
    ]);
  }

  function checkMissionCommand(command) {
    if (!missionState) return false;
    if (command.startsWith('submit ')) {
      const suspect = command.slice(7).trim();
      if (suspect === 'invoice.pdf.exe') {
        typeLines('mission complete',[
          'Attack type: Credential Theft / Malware Delivery',
          'Malicious process: invoice.pdf.exe',
          'Command-and-control destination: 185.42.19.77:4444',
          'Score: 100%',
          'Rank: Incident Investigator'
        ]);
        unlockAchievement('INCIDENT INVESTIGATOR','Completed the cyber investigation mission.');
        addClearance(15);
        missionState = null;
      } else addLine('Incorrect suspect. Continue reviewing evidence.','error');
      return true;
    }
    return false;
  }

  const savedTheme = localStorage.getItem('portfolioTheme');
  if (savedTheme) setTheme(savedTheme);
  // Recruiter mode is session-only and never suppresses the startup experience.
  if (sessionStorage.getItem('recruiterMode') === '1') {
    document.body.classList.add('recruiter-mode');
  }

  function runCommand(raw) {
    const command = String(raw || '').trim().toLowerCase();
    if (!command) return;

    addLine(command, 'command');

    commandHistory.push(command);
    historyIndex = commandHistory.length;

    commandCount += 1;
    localStorage.setItem('commandCount', String(commandCount));
    if (commandCount >= 5) unlockAchievement('TERMINAL OPERATOR','Executed at least five commands.');
    addClearance(1);

    if (checkMissionCommand(command)) return;

    if (command === 'pwd') {
      addLine(currentPath);
      return;
    }

    if (command === 'tree') {
      addBlock('filesystem',[
        '/home/harsha',
        '├── about.txt',
        '├── profile.txt',
        '├── skills.txt',
        '├── contact.txt',
        '├── projects/',
        '│   ├── motag.txt',
        '│   ├── phishing.txt',
        '│   ├── forensics.txt',
        '│   ├── scanner.txt',
        '│   └── waste-iot.txt',
        '├── certificates/',
        '└── evidence/'
      ]);
      return;
    }

    if (command.startsWith('cd')) {
      const target = command.slice(2).trim() || '~';
      const next = normalizePath(target);
      if (fsTree[next]) currentPath = next;
      else addLine(`cd: ${target}: no such directory`,'error');
      return;
    }

    if (command === 'ls' || command.startsWith('ls ')) {
      const target = command.slice(2).trim();
      const path = target ? normalizePath(target) : currentPath;
      const items = fsTree[path];
      if (items) addBlock(path,items);
      else addLine(`ls: ${target}: no such directory`,'error');
      return;
    }

    if (command.startsWith('cat ')) {
      const target = command.slice(4).trim();
      const path = normalizePath(target);
      const reader = fileReaders[path] || virtualFiles[target];
      if (reader) typeLines(target,reader());
      else addLine(`cat: ${target}: file not found`,'error');
      return;
    }

    if (command === 'mission' || command === 'start mission') {
      startMission();
      return;
    }

    if (command === 'achievements') {
      renderAchievements();
      achievementsPanel.classList.add('active');
      achievementsPanel.style.left='50%';
      achievementsPanel.style.top='50%';
      achievementsPanel.style.transform='translate(-50%,-50%)';
      return;
    }

    if (command === 'recruiter' || command === 'recruiter on') {
      toggleRecruiterMode(true);
      typeLines('recruiter summary',[
        `Current role: ${DATA.profile.role}`,
        `Top skills: Python, Network Security, DDoS Mitigation, Wireshark, Nmap, Burp Suite`,
        `Projects: ${DATA.projects.length}`,
        `Publications: ${DATA.publications.length}`,
        `Patents: ${DATA.patents.length}`,
        `Contact: ${DATA.profile.email}`
      ]);
      return;
    }

    if (command === 'recruiter off') {
      toggleRecruiterMode(false);
      return;
    }

    if (command.startsWith('theme ')) {
      setTheme(command.slice(6).trim());
      return;
    }

    if (command === 'theme') {
      showWindow('THEME SWITCHER','<div class="theme-switcher"><button data-theme="green">GREEN</button><button data-theme="red">RED</button><button data-theme="blue">BLUE</button><button data-theme="amber">AMBER</button></div>');
      utilityBody.querySelectorAll('[data-theme]').forEach(btn => btn.addEventListener('click',()=>setTheme(btn.dataset.theme)));
      return;
    }

    if (command.startsWith('open ')) {
      const key = command.slice(5).trim();
      const map = {motag:0,phishing:1,forensics:2,scanner:3,'waste-iot':4,waste:4};
      if (key in map) openProjectModal(map[key]);
      else addLine('Unknown project. Try: motag, phishing, forensics, scanner, waste-iot','error');
      return;
    }

    if (command.startsWith('typing speed ')) {
      const mode = command.slice(13).trim();
      if (['instant','fast','normal'].includes(mode)) {
        typingMode = mode;
        localStorage.setItem('typingMode',mode);
        addLine(`Typing mode set to ${mode}.`);
      } else addLine('Use: typing speed instant|fast|normal','error');
      return;
    }

    if (command === 'sound on') {
      soundEnabled = true;
      localStorage.setItem('soundEnabled','1');
      addLine('Sound enabled. Browser interaction may be required.');
      return;
    }

    if (command === 'sound off') {
      soundEnabled = false;
      localStorage.setItem('soundEnabled','0');
      addLine('Sound disabled.');
      return;
    }

    if (command === 'sudo su') {
      addLine('Permission denied. Harshavardhan already has root access.');
      return;
    }

    if (command === 'whoami --visitor') {
      addBlock('visitor profile',[`Role: Curious Explorer`,`Clearance: ${clearanceScore}%`,`Rank: ${getClearanceRank(clearanceScore)}`,`Threat status: Harmless`]);
      return;
    }

    if (command === 'rm -rf /') {
      addLine('Operation blocked. This portfolio has better security than that.');
      return;
    }

    if (activeGame && activeGame.type === 'firewall' && ['1','2','3'].includes(command)) {
      handleFirewallChoice(command);
      return;
    }

    if (command === 'play firewall' || command === 'game firewall' || command === 'firewall') {
      startFirewallGame();
      return;
    }

    if (command === 'play snake' || command === 'play snack' || command === 'game snake' || command === 'snake') {
      startSnakeGame();
      return;
    }

    if (command === 'quit game' || command === 'quit') {
      quitActiveGame();
      return;
    }

    if (command === 'highscore' || command === 'highscores') {
      showHighScores();
      return;
    }

    if (command === 'ls') {
      addBlock('virtual files', [
        'about.txt',
        'education.txt',
        'skills.txt',
        'projects.txt',
        'certificates.txt',
        'contact.txt',
        'profile.txt'
      ]);
      return;
    }

    if (command === 'history') {
      addBlock('command history', commandHistory.map((item, index) => `${index + 1}  ${item}`));
      return;
    }

    if (command === 'date') {
      addLine(new Date().toString());
      return;
    }

    if (command.startsWith('search ')) {
      searchPortfolio(command.slice(7));
      return;
    }

    const handler = commandMap[command];
    if (handler) {
      handler();
    } else {
      addLine(`bash: ${command}: command not found. Type <span class="k">help</span>.`, 'error');
    }
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    runCommand(input.value);
    input.value = '';
    input.focus();
  });

  document.addEventListener('touchmove', event => {
    if (!activeGame || activeGame.type !== 'snake') return;

    const snakePanel = document.getElementById('snakeGamePanel');
    if (snakePanel && snakePanel.contains(event.target)) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, { passive:false, capture:true });

  document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'c') {
      event.preventDefault();
      event.stopPropagation();
      interruptActiveTask('keyboard');
      return;
    }

    if (!activeGame || activeGame.type !== 'snake') return;

    const keyMap = {
      ArrowUp:'up',
      w:'up',
      W:'up',
      ArrowDown:'down',
      s:'down',
      S:'down',
      ArrowLeft:'left',
      a:'left',
      A:'left',
      ArrowRight:'right',
      d:'right',
      D:'right'
    };

    const direction = keyMap[event.key];
    if (direction) {
      event.preventDefault();
      event.stopPropagation();
      setSnakeDirection(direction);
      input.blur();
    }
  }, true);


  const suggestionCommands = [
    'help','whoami','whoami --visitor','about','education','skills','projects','publications','patents','experience',
    'certificates','leadership','strengths','hobbies','contact','resume','all','clear','pwd','ls','tree','cd projects',
    'cat profile.txt','cat skills.txt','cat projects/motag.txt','mission','achievements','recruiter','recruiter off',
    'theme green','theme red','theme blue','theme amber','typing speed instant','typing speed fast','typing speed normal',
    'open motag','open phishing','open forensics','open scanner','play firewall','play snake','highscore','simulation',
    'sudo su','rm -rf /'
  ];

  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    if (!query) {
      suggestionsBox.classList.remove('active');
      suggestionsBox.innerHTML='';
      return;
    }
    const matches = suggestionCommands.filter(cmd => cmd.startsWith(query)).slice(0,6);
    suggestionsBox.innerHTML = matches.map(cmd => `<span>${cmd}</span>`).join('');
    suggestionsBox.classList.toggle('active',matches.length>0);
    suggestionsBox.querySelectorAll('span').forEach(item => {
      item.addEventListener('click',() => {
        input.value=item.textContent;
        suggestionsBox.classList.remove('active');
        input.focus();
      });
    });
  });

  input.addEventListener('keydown', event => {
    if (activeGame && activeGame.type === 'snake') {
      const snakeKeys = ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','w','a','s','d','W','A','S','D'];
      if (snakeKeys.includes(event.key)) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (historyIndex > 0) historyIndex -= 1;
      input.value = commandHistory[historyIndex] || '';
      input.setSelectionRange(input.value.length, input.value.length);
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (historyIndex < commandHistory.length) historyIndex += 1;
      input.value = commandHistory[historyIndex] || '';
      input.setSelectionRange(input.value.length, input.value.length);
    }

    if (event.key === 'Tab') {
      event.preventDefault();
      const commands = [
        ...Object.keys(commandMap),
        'ls','history','date',
        'cat about.txt','cat education.txt','cat skills.txt','cat projects.txt',
        'cat certificates.txt','cat contact.txt','cat profile.txt','search ',
        'play firewall','play snake','highscore','quit game'
      ];
      const matches = commands.filter(command => command.startsWith(input.value.toLowerCase()));
      if (matches.length === 1) input.value = matches[0];
      else if (matches.length > 1) addBlock('autocomplete', matches);
    }
  });

  document.querySelectorAll('[data-command]').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      runCommand(button.dataset.command);

      const isPhone =
        window.matchMedia('(max-width:760px)').matches &&
        window.matchMedia('(pointer:coarse)').matches;

      if (!isPhone) {
        input.focus();
      }
    });
  });

  document.getElementById('clearBtn').addEventListener('click', event => {
    event.preventDefault();
    output.innerHTML = '';

    const isPhone =
      window.matchMedia('(max-width:760px)').matches &&
      window.matchMedia('(pointer:coarse)').matches;

    if (!isPhone) {
      input.focus();
    }
  });

  document.getElementById('stopCommandBtn').addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();

    const isPhone =
      window.matchMedia('(max-width:760px)').matches &&
      window.matchMedia('(pointer:coarse)').matches;

    if (isPhone) {
      interruptActiveTask('phone');
    }
  });

  const resumeCountElement = document.getElementById('resumeCount');
  let resumeOpenCount = Number(localStorage.getItem('resumeOpenCount') || 0);
  resumeCountElement.textContent = String(resumeOpenCount);

  function openResumeAndCount() {
    resumeOpenCount += 1;
    addClearance(5);
    localStorage.setItem('resumeOpenCount', String(resumeOpenCount));
    resumeCountElement.textContent = String(resumeOpenCount);
    window.open('assets/Harsha_Resume.pdf', '_blank', 'noopener');
  }

  document.getElementById('resumeBtn').addEventListener('click', event => {
    event.preventDefault();
    openResumeAndCount();
  });

  document.getElementById('simulationBtn').addEventListener('click', event => {
    event.preventDefault();
    breachTriggered = false;
    startBreachSimulation();
  });

  document.querySelectorAll('[data-target]').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      const target = document.getElementById(button.dataset.target);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      document.getElementById('nav').classList.remove('open');
    });
  });

  document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('open');
  });

  const terminalBox = document.getElementById('terminalBox');

  terminalBox.addEventListener('click', event => {
    const isPhone =
      window.matchMedia('(max-width:760px)').matches &&
      window.matchMedia('(pointer:coarse)').matches;

    // On phones, open the keyboard only when the user taps the actual input.
    if (isPhone) {
      if (event.target === input) {
        input.focus();
      }
      return;
    }

    // On desktop/laptop, clicking an empty area of the terminal may focus input,
    // but buttons, links, games and terminal output remain interactive.
    const interactiveTarget = event.target.closest(
      'button, a, input, .game-panel, .snake-board, .project-modal'
    );

    if (!interactiveTarget) {
      input.focus();
    }
  });

  addLine('Cyber Portfolio OS v2.0 initialized.');
  addLine('All terminal commands are active.');
  addLine('Type <span class="k">help</span> or click any command button below.');

  // Cursor-proximity glow for every skill button.
  // Buttons begin glowing before the pointer reaches them, and the glow becomes
  // stronger as the pointer moves closer.

  document.querySelectorAll('.skills span').forEach(button => {
    button.addEventListener('click', () => {
      const skill = button.textContent.trim();
      const related = DATA.projects.filter(project =>
        `${project.title} ${project.description} ${project.tags.join(' ')}`.toLowerCase().includes(skill.toLowerCase())
      );
      skillDetail.classList.add('active');
      skillDetail.innerHTML = `<div class="label">${skill.toUpperCase()}</div><strong>Used in:</strong><br>${related.length ? related.map(p => `• ${p.title}`).join('<br>') : '• Security research, tooling and practical implementation.'}`;
      addClearance(2);
    });
  });

  const skillButtons = [...document.querySelectorAll('.skills span')];
  const GLOW_RADIUS = 180;

  function updateSkillGlow(event) {
    const pointerX = event.clientX;
    const pointerY = event.clientY;

    skillButtons.forEach(button => {
      const rect = button.getBoundingClientRect();

      const closestX = Math.max(rect.left, Math.min(pointerX, rect.right));
      const closestY = Math.max(rect.top, Math.min(pointerY, rect.bottom));
      const distance = Math.hypot(pointerX - closestX, pointerY - closestY);

      const strength = Math.max(0, 1 - distance / GLOW_RADIUS);

      const localX = Math.max(0, Math.min(pointerX - rect.left, rect.width));
      const localY = Math.max(0, Math.min(pointerY - rect.top, rect.height));
      const xPercent = rect.width ? (localX / rect.width) * 100 : 50;
      const yPercent = rect.height ? (localY / rect.height) * 100 : 50;

      button.style.setProperty('--glow-strength', strength.toFixed(3));
      button.style.setProperty('--mx', `${xPercent.toFixed(1)}%`);
      button.style.setProperty('--my', `${yPercent.toFixed(1)}%`);
    });
  }

  function clearSkillGlow() {
    skillButtons.forEach(button => {
      button.style.setProperty('--glow-strength', '0');
      button.style.setProperty('--mx', '50%');
      button.style.setProperty('--my', '50%');
    });
  }

  window.addEventListener('pointermove', updateSkillGlow, { passive: true });
  document.documentElement.addEventListener('pointerleave', clearSkillGlow);

  // Keep the effect usable on touch screens as well.
  skillButtons.forEach(button => {
    button.addEventListener('pointerdown', () => {
      button.style.setProperty('--glow-strength', '1');
    });
    button.addEventListener('pointerup', clearSkillGlow);
    button.addEventListener('pointercancel', clearSkillGlow);
  });


  // Harmless browser-only breach simulation.
  // It never requests permissions, reads device data, downloads files, or changes the system.
  const breachOverlay = document.getElementById('breachOverlay');
  const breachReveal = document.getElementById('breachReveal');
  const breachLog = document.getElementById('breachLog');
  const breachBar = document.getElementById('breachBar');
  const breachPercent = document.getElementById('breachPercent');
  const breachStatus = document.getElementById('breachStatus');
  const breachExit = document.getElementById('breachExit');
  const breachContinue = document.getElementById('breachContinue');

  let breachRunning = false;
  let breachTimers = [];
  let breachTriggered = false;

  const breachMessages = [
    ['Initializing isolated visual environment...', 'ok'],
    ['Checking portfolio session integrity...', ''],
    ['Unknown interaction pattern detected.', 'critical'],
    ['Launching simulated process monitor...', ''],
    ['Rendering visual override layer...', ''],
    ['Mapping active browser viewport...', ''],
    ['Injecting harmless display artifacts...', ''],
    ['Synchronizing terminal simulation...', ''],
    ['Escalation sequence: VISUAL ONLY', 'critical'],
    ['Verifying device safety boundaries...', 'ok'],
    ['No filesystem access detected.', 'ok'],
    ['No camera or microphone access detected.', 'ok'],
    ['No location or credential access detected.', 'ok'],
    ['Finalizing demonstration...', ''],
    ['Visitor classification: CURIOUS', 'ok'],
    ['Access decision: GRANTED', 'ok']
  ];

  function clearBreachTimers() {
    breachTimers.forEach(timer => clearTimeout(timer));
    breachTimers = [];
  }

  function resetBreachVisuals() {
    breachLog.innerHTML = '';
    breachBar.style.width = '0%';
    breachPercent.textContent = 'OVERRIDE: 0%';
    breachStatus.textContent = 'INITIALIZING VISUAL SECURITY SIMULATION...';
  }

  function stopBreach(showReveal = false) {
    clearBreachTimers();
    breachRunning = false;
    document.body.classList.remove('simulation-active');
    breachOverlay.classList.remove('active');
    breachOverlay.setAttribute('aria-hidden', 'true');

    if (showReveal) {
      breachReveal.classList.add('active');
      breachReveal.setAttribute('aria-hidden', 'false');
    } else {
      breachReveal.classList.remove('active');
      breachReveal.setAttribute('aria-hidden', 'true');
    }
  }

  function addBreachLine(message, className = '') {
    const line = document.createElement('div');
    line.className = `breach-line ${className}`.trim();
    line.textContent = `> ${message}`;
    breachLog.appendChild(line);
    breachLog.scrollTop = breachLog.scrollHeight;
  }

  function startBreachSimulation() {
    if (breachRunning || breachTriggered) return;

    breachTriggered = true;
    breachRunning = true;
    resetBreachVisuals();

    document.body.classList.add('simulation-active');
    breachOverlay.classList.add('active');
    breachOverlay.setAttribute('aria-hidden', 'false');

    const totalDuration = 9000;
    breachMessages.forEach(([message, className], index) => {
      const delay = 350 + index * 470;
      const timer = setTimeout(() => {
        if (!breachRunning) return;

        addBreachLine(message, className);

        const progress = Math.min(
          96,
          Math.round(((index + 1) / breachMessages.length) * 96)
        );

        breachBar.style.width = `${progress}%`;
        breachPercent.textContent = `OVERRIDE: ${progress}%`;

        if (index === 2) breachStatus.textContent = 'SESSION CONTROL ANOMALY';
        if (index === 7) breachStatus.textContent = 'DISPLAY OVERRIDE IN PROGRESS';
        if (index === 12) breachStatus.textContent = 'SAFETY VERIFICATION PASSED';
      }, delay);

      breachTimers.push(timer);
    });

    breachTimers.push(setTimeout(() => {
      if (!breachRunning) return;
      breachBar.style.width = '100%';
      breachPercent.textContent = 'OVERRIDE: 100%';
      breachStatus.textContent = 'ACCESS GRANTED';
      addBreachLine('SYSTEM OVERRIDE COMPLETE — SIMULATION END', 'ok');
    }, totalDuration - 900));

    breachTimers.push(setTimeout(() => {
      if (!breachRunning) return;
      stopBreach(true);
    }, totalDuration));
  }


  let startupSequenceStarted = false;

  function initializeStartupSequence() {
    if (startupSequenceStarted) return;
    startupSequenceStarted = true;

    document.body.classList.remove('recruiter-mode', 'simulation-active');
    sessionStorage.removeItem('recruiterMode');

    breachTriggered = false;
    breachRunning = false;
    clearBreachTimers();
    resetBreachVisuals();

    breachOverlay.classList.remove('active');
    breachOverlay.setAttribute('aria-hidden', 'true');
    breachReveal.classList.remove('active');
    breachReveal.setAttribute('aria-hidden', 'true');

    bootLoader.classList.remove('hidden');
    bootLoader.style.display = 'grid';
    bootLoader.style.opacity = '1';
    bootLoader.style.visibility = 'visible';

    const loaderDuration = Math.max(1900, bootMessages.length * 210 + 350);

    setTimeout(() => {
      bootLoader.classList.add('hidden');

      setTimeout(() => {
        bootLoader.style.display = '';
        bootLoader.style.opacity = '';
        bootLoader.style.visibility = '';
        startBreachSimulation();
      }, 500);
    }, loaderDuration);
  }

  if (document.readyState === 'complete') {
    setTimeout(initializeStartupSequence, 80);
  } else {
    window.addEventListener('load', () => {
      setTimeout(initializeStartupSequence, 80);
    }, { once:true });
  }

  breachExit.addEventListener('click', () => stopBreach(false));
  breachContinue.addEventListener('click', () => stopBreach(false));

  document.addEventListener('visibilitychange', () => {
    if (
      document.visibilityState === 'visible' &&
      startupSequenceStarted &&
      !breachTriggered &&
      bootLoader.classList.contains('hidden')
    ) {
      startBreachSimulation();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && (breachRunning || breachReveal.classList.contains('active'))) {
      stopBreach(false);
    }
    if (event.key === 'Escape' && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // Automatic start is triggered after the boot loader finishes.
  // This prevents the loading screen and breach screen from overlapping.

  // Terminal command to replay the visual effect deliberately.
  commandMap.simulation = () => {
    addLine('Launching browser-only security simulation...');
    breachTriggered = false;
    startBreachSimulation();
  };


  // Animate demonstration dashboard metrics when they become visible.
  const metricElements = [...document.querySelectorAll('[data-counter]')];
  let metricsAnimated = false;

  function animateMetrics() {
    if (metricsAnimated) return;
    metricsAnimated = true;

    metricElements.forEach(element => {
      const target = Number(element.dataset.counter || 0);
      const suffix = element.dataset.suffix || '';
      const duration = 1300;
      const start = performance.now();

      function step(now) {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * eased);
        element.textContent = value.toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    });
  }

  const dashboard = document.getElementById('threat-dashboard');
  const dashboardObserver = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      animateMetrics();
      dashboardObserver.disconnect();
    }
  }, { threshold: 0.25 });

  dashboardObserver.observe(dashboard);


  const attackFeed = document.getElementById('attackFeed');
  const simulatedAttacks = [
    ['Unknown Node','DDoS','BLOCKED'],
    ['External Host','Port Scan','DETECTED'],
    ['Suspicious URL','Phishing','QUARANTINED'],
    ['Botnet Relay','Credential Spray','BLOCKED'],
    ['Malware Sample','C2 Beacon','ISOLATED']
  ];
  let attackIndex=0;
  function renderAttackFeed() {
    const [source,type,status] = simulatedAttacks[attackIndex % simulatedAttacks.length];
    const row=document.createElement('div');
    row.className='attack-row';
    row.innerHTML=`<b>${source}</b><span>${type}</span><em>${status}</em>`;
    attackFeed.prepend(row);
    while (attackFeed.children.length>5) attackFeed.lastChild.remove();
    attackIndex++;
  }
  renderAttackFeed();
  setInterval(renderAttackFeed,2200);


  // Scroll reveal animations for sections, cards, tabs and interactive blocks.
  const revealSelectors = [
    '.section > .heading',
    '.section > .section-heading',
    '.section > .label',
    '.card',
    '.info-row',
    '.threat-card',
    '.skills span',
    '.contact > *',
    '.project-card',
    '.credential-column',
    '.about-card',
    '.terminal',
    '.command-hints button',
    '.hints button',
    '.identity',
    '.quick-stats > div',
    '.stats > div'
  ];

  const revealElements = [
    ...new Set(
      revealSelectors.flatMap(selector =>
        [...document.querySelectorAll(selector)]
      )
    )
  ];

  revealElements.forEach((element, index) => {
    element.classList.add('reveal-item');

    const cycle = index % 4;
    if (cycle === 1) element.classList.add('reveal-left');
    if (cycle === 2) element.classList.add('reveal-right');
    if (cycle === 3) element.classList.add('reveal-zoom');

    const delay = Math.min((index % 6) * 80, 400);
    element.style.setProperty('--reveal-delay', `${delay}ms`);
  });

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold:0.12,
    rootMargin:'0px 0px -8% 0px'
  });

  revealElements.forEach(element => revealObserver.observe(element));

  // Keep hero content visible immediately.
  document.querySelectorAll('#home .reveal-item').forEach(element => {
    requestAnimationFrame(() => element.classList.add('is-visible'));
  });

  // Highlight the active navigation tab while scrolling.
  const navButtons = [...document.querySelectorAll('.nav [data-target]')];
  const navSections = navButtons
    .map(button => document.getElementById(button.dataset.target))
    .filter(Boolean);

  const navObserver = new IntersectionObserver(entries => {
    const visibleEntry = entries
      .filter(entry => entry.isIntersecting)
      .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleEntry) return;

    navButtons.forEach(button => {
      button.classList.toggle(
        'active',
        button.dataset.target === visibleEntry.target.id
      );
    });
  }, {
    threshold:[0.25,0.5,0.75],
    rootMargin:'-20% 0px -55% 0px'
  });

  navSections.forEach(section => navObserver.observe(section));


  // Matrix background



  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');
  const glyphs = '01<>/{}[]$#@*+-=ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const fontSize = 14;
  let drops = [];

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
    drops = Array(Math.ceil(innerWidth / fontSize)).fill(0).map(() => Math.random() * -80);
  }

  function draw() {
    ctx.fillStyle = 'rgba(4,8,12,.09)';
    ctx.fillRect(0,0,innerWidth,innerHeight);
    ctx.font = fontSize + 'px monospace';

    drops.forEach((drop, index) => {
      ctx.fillStyle = Math.random() > .965 ? '#baffdd' : '#24b976';
      ctx.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], index * fontSize, drop * fontSize);
      if (drop * fontSize > innerHeight && Math.random() > .975) drops[index] = 0;
      else drops[index] += .45;
    });

    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener('resize', resize);
})();
