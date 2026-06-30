
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
      linkedin: 'https://www.linkedin.com/in/harsha-vardhan-146181217/',
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
    .hero{min-height:100vh;padding-top:135px;display:grid;grid-template-columns:1.25fr .75fr;gap:70px;align-items:center}
    .eyebrow,.label,.mono{font-family:var(--mono);color:var(--green)}
    .eyebrow{font-size:13px;margin-bottom:22px}
    h1{font-size:clamp(52px,8vw,118px);line-height:.86;margin:0;letter-spacing:-.06em}
    h1 small{display:block;font:500 .24em var(--mono);letter-spacing:.12em;color:var(--muted);margin-bottom:12px}
    .hero h2{font:600 clamp(16px,2vw,24px) var(--mono);color:var(--green2);line-height:1.55;margin:26px 0 18px}
    .lead{font-size:17px;line-height:1.75;color:#b7cbbf;max-width:720px}
    .actions{display:flex;gap:14px;flex-wrap:wrap;margin:30px 0}
    .btn{border:1px solid var(--line);padding:13px 18px;background:transparent;color:var(--text);font:700 12px var(--mono);cursor:pointer}
    .btn.primary{background:var(--green);color:#021009;box-shadow:0 0 24px rgba(53,255,162,.2)}
    .stats{display:grid;grid-template-columns:repeat(4,1fr);border-block:1px solid var(--line)}
    .stats div{padding:17px 12px;border-right:1px solid var(--line)}
    .stats div:last-child{border-right:0}
    .stats strong{display:block;color:var(--green);font:700 22px var(--mono)}
    .stats span{font-size:11px;color:var(--muted)}
    .identity{padding:17px;border:1px solid var(--line);background:var(--panel);box-shadow:0 25px 70px rgba(0,0,0,.45)}
    .photo{position:relative;overflow:hidden;aspect-ratio:.78;background:#0b1418}
    .photo img{width:100%;height:100%;object-fit:cover;object-position:center top}
    .scan{position:absolute;left:0;right:0;height:2px;background:var(--green);box-shadow:0 0 16px var(--green);animation:scan 4s linear infinite}
    @keyframes scan{from{top:0}to{top:100%}}
    .meta{display:grid;gap:8px;margin-top:15px}
    .meta div{display:flex;justify-content:space-between;gap:14px;padding-bottom:7px;border-bottom:1px dashed rgba(53,255,162,.14)}
    .meta span{font:10px var(--mono);color:var(--muted)}
    .meta strong{font:600 11px var(--mono);text-align:right}
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
    .breach-overlay.active{display:block}
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
      animation:screenShake .12s infinite;
      filter:contrast(1.18) saturate(.7) hue-rotate(315deg);
    }
    body.simulation-active::after{
      content:'';
      position:fixed;
      inset:0;
      z-index:9998;
      pointer-events:none;
      background:rgba(255,0,30,.025);
      animation:flicker .09s steps(2,end) infinite;
    }
    @keyframes screenShake{
      0%{transform:translate(0,0)}
      25%{transform:translate(1px,-1px)}
      50%{transform:translate(-1px,1px)}
      75%{transform:translate(1px,1px)}
      100%{transform:translate(0,0)}
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

    .terminal{border:1px solid rgba(53,255,162,.48);background:rgba(2,8,10,.96);box-shadow:0 0 45px rgba(53,255,162,.08)}
    .termbar{height:45px;display:flex;align-items:center;justify-content:space-between;padding:0 14px;border-bottom:1px solid var(--line);font:11px var(--mono);color:var(--muted)}
    .termbar button{border:0;background:transparent;color:var(--green);font:10px var(--mono);cursor:pointer}
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
    .hints{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
    .hints button{border:1px solid var(--line);background:var(--panel);color:var(--green2);padding:8px 10px;font:10px var(--mono);cursor:pointer}
    .contact{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
    .contact a,.contact div{padding:18px;border:1px solid var(--line);background:var(--panel)}
    .contact small{display:block;color:var(--muted);font:10px var(--mono);margin-bottom:8px}
    footer{width:min(1180px,calc(100% - 36px));margin:auto;padding:26px 0;border-top:1px solid var(--line);display:flex;justify-content:space-between;gap:16px;color:var(--muted);font:10px var(--mono)}
    @media(max-width:980px){
      .hero{grid-template-columns:1fr}
      .identity{max-width:520px;width:100%;justify-self:center}
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
          <div class="skills">${skillTags()}</div>
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
        </section>

        <section class="section" id="terminal">
          <div class="heading">
            <div><div class="label">06 // INTERACTIVE TERMINAL</div><h3>Query the complete profile</h3></div>
            <div class="mono">Type help to begin</div>
          </div>

          <div class="terminal" id="terminalBox">
            <div class="termbar">
              <span>harsha@cyber-portfolio: ~</span>
              <button id="clearBtn">CLEAR</button>
            </div>
            <div class="output" id="output"></div>
            <form class="inputrow" id="terminalForm">
              <span class="prompt">harsha@portfolio:~$</span>
              <input id="terminalInput" autocomplete="off" spellcheck="false" placeholder="type a command...">
            </form>
          </div>

          <div class="hints">
            ${['help','whoami','about','education','skills','projects','publications','patents','experience','certificates','leadership','strengths','hobbies','contact','simulation','all'].map(cmd => `<button data-command="${cmd}">${cmd}</button>`).join('')}
          </div>
        </section>

        <section class="section">
          <div class="heading">
            <div><div class="label">07 // CONTACT</div><h3>Let’s build secure systems</h3></div>
          </div>
          <div class="contact">
            <a href="mailto:${DATA.profile.email}"><small>EMAIL</small><strong>${DATA.profile.email}</strong></a>
            <a href="tel:${DATA.profile.phone.replace(/\s/g,'')}"><small>PHONE</small><strong>${DATA.profile.phone}</strong></a>
            <a href="${DATA.profile.linkedin}" target="_blank" rel="noopener"><small>LINKEDIN</small><strong>harsha-vardhan-146181217</strong></a>
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
    }, index * 130);
  });

  setTimeout(() => {
    bootLoader.classList.add('hidden');
  }, 900);



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

  function runCommand(raw) {
    const command = String(raw || '').trim().toLowerCase();
    if (!command) return;

    addLine(command, 'command');

    commandHistory.push(command);
    historyIndex = commandHistory.length;

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

    if (command.startsWith('cat ')) {
      const fileName = command.slice(4).trim();
      const reader = virtualFiles[fileName];
      if (reader) addBlock(fileName, reader());
      else addLine(`cat: ${fileName}: file not found`, 'error');
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

  input.addEventListener('keydown', event => {
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
        'cat certificates.txt','cat contact.txt','cat profile.txt','search '
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
      input.focus();
    });
  });

  document.getElementById('clearBtn').addEventListener('click', event => {
    event.preventDefault();
    output.innerHTML = '';
    input.focus();
  });

  const resumeCountElement = document.getElementById('resumeCount');
  let resumeOpenCount = Number(localStorage.getItem('resumeOpenCount') || 0);
  resumeCountElement.textContent = String(resumeOpenCount);

  function openResumeAndCount() {
    resumeOpenCount += 1;
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

  document.getElementById('terminalBox').addEventListener('click', () => input.focus());

  addLine('Cyber Portfolio OS v2.0 initialized.');
  addLine('All terminal commands are active.');
  addLine('Type <span class="k">help</span> or click any command button below.');

  // Cursor-proximity glow for every skill button.
  // Buttons begin glowing before the pointer reaches them, and the glow becomes
  // stronger as the pointer moves closer.
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

  breachExit.addEventListener('click', () => stopBreach(false));
  breachContinue.addEventListener('click', () => stopBreach(false));

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && (breachRunning || breachReveal.classList.contains('active'))) {
      stopBreach(false);
    }
    if (event.key === 'Escape' && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // Start immediately as soon as the script finishes loading.
  // No click, key press, timeout, or visible delay is required.
  setTimeout(() => {
    if (!breachTriggered) startBreachSimulation();
  }, 950);

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
