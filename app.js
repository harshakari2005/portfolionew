
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
  'Cyber Security Analyst and security-focused builder working across threat detection, network defense, digital forensics and practical security automation.',
  'My work spans DDoS mitigation, phishing detection, vulnerability assessment, memory forensics, AI-assisted security and embedded-device protection.',
  'I focus on turning cybersecurity concepts into practical systems, combining scripting, security tooling, research and hands-on experimentation.'
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
        title: 'Trajectory Firewall — Autonomous AI Security Prototype',
        tags: ['AI Security', 'Agent Security', 'Policy Enforcement'],
        description: 'Designed a security-control layer that evaluates an autonomous agent’s requested actions against an authorized project scope and tool policy.',
        objective: 'Prevent an autonomous security agent from performing unauthorized actions outside its approved workspace.',
        contribution: 'Defined the firewall decision flow, authorized-tool policy, project-scope enforcement and security event logging.',
        architecture: ['Agent Request', 'Policy Check', 'Scope Validation', 'Allow / Block Decision', 'Security Log'],
        results: 'Demonstrated controlled agent execution where approved file operations are allowed and out-of-scope access is blocked.',
        challenges: 'Balancing useful agent autonomy with strict authorization, scope boundaries and transparent decisions.',
        future: 'Add richer policy rules, role-based authorization, persistent audit trails and additional tool controls.',
        github: '',
        demo: ''
      },
      {
        title: 'Cyber Reconstruction Engine',
        tags: ['Digital Forensics', 'Incident Response', 'Event Analysis'],
        description: 'Reconstructed a cyber incident timeline from Windows event evidence to connect activity, failures and indicators into an investigation flow.',
        objective: 'Turn fragmented security-event evidence into an understandable incident reconstruction timeline.',
        contribution: 'Worked with Windows event evidence and reconstruction logic to map security activity into ordered investigation stages.',
        architecture: ['Evidence Input', 'Event Parsing', 'Timeline Correlation', 'Incident Reconstruction', 'Investigation View'],
        results: 'Produced a structured reconstruction flow connecting incident stages such as initial access and login failures.',
        challenges: 'Correlating noisy events, preserving chronology and distinguishing related activity from unrelated system events.',
        future: 'Add automated correlation, IOC enrichment, graph-based relationships and broader event-source support.',
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
        detail: 'Worked on securing embedded devices and websites.',
        projectWork: [
          'SAVATAR — Secure Smart Vehicle Door Controller',
          'Trajectory Firewall — Autonomous AI Security Prototype',
          'Cyber Reconstruction Engine'
        ]
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
    .section{width:min(1180px,calc(100% - 36px));margin:auto;padding:68px 0}
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



    .hero{position:relative;isolation:isolate;overflow:hidden}
    .hero-network{position:absolute;inset:0;z-index:-2;pointer-events:none;opacity:.55}
    .hero-network canvas{width:100%;height:100%;display:block}
    .hero::before{content:'';position:absolute;width:430px;height:430px;right:7%;top:14%;z-index:-1;border-radius:50%;background:radial-gradient(circle,rgba(53,255,162,.13),transparent 68%);filter:blur(18px);animation:heroGlow 5.5s ease-in-out infinite;pointer-events:none}
    @keyframes heroGlow{0%,100%{transform:scale(.92);opacity:.55}50%{transform:scale(1.08);opacity:1}}

    .card,.identity,.terminal,.threat-card,.project-card,.about-card,.credential-column,.info-row,.contact>*{
      background:linear-gradient(145deg,rgba(8,24,28,.72),rgba(4,12,16,.56))!important;
      backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);
      border-color:rgba(138,255,200,.2)!important;
      box-shadow:inset 0 1px 0 rgba(255,255,255,.025),0 18px 46px rgba(0,0,0,.22);
      transition:transform .35s cubic-bezier(.2,.8,.2,1),border-color .35s ease,box-shadow .35s ease
    }
    .card:hover,.threat-card:hover,.project-card:hover,.about-card:hover,.credential-column:hover,.contact>*:hover{
      transform:translateY(-7px);border-color:rgba(53,255,162,.46)!important;
      box-shadow:0 24px 60px rgba(0,0,0,.34),0 0 30px rgba(53,255,162,.08)
    }
    .magnetic{will-change:transform;transition:transform .18s ease,box-shadow .25s ease}



    /* CAREER JOURNEY */
    .career-journey-section{padding-top:48px}
    .journey-intro{
      display:flex;justify-content:space-between;align-items:center;gap:18px;
      padding:16px 18px;margin-bottom:24px;border:1px solid rgba(53,255,162,.18);
      background:rgba(53,255,162,.025);
    }
    .journey-intro p{margin:6px 0 0;color:var(--muted);font:11px/1.65 var(--mono);max-width:720px}
    .journey-status{white-space:nowrap;color:var(--green2);font:9px var(--mono)}
    .journey-status span{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--green);box-shadow:0 0 12px var(--green);margin-right:6px}
    .career-journey-section .cyber-timeline{margin-top:0}
    .career-journey-section .timeline-item{
      padding:18px 20px 18px 46px;
      border:1px solid rgba(53,255,162,.13);
      background:linear-gradient(145deg,rgba(8,24,28,.62),rgba(4,12,16,.48));
      min-height:92px;
    }
    .career-journey-section .timeline-item::before{left:5px;top:27px;width:12px;height:12px}
    .timeline-index{
      position:absolute;left:-4px;top:-8px;padding:4px 7px;border:1px solid var(--line);
      background:#041015;color:var(--cyan);font:700 8px var(--mono);z-index:2;
    }
    .career-journey-section .timeline-title{font-size:16px}
    .career-journey-section .timeline-copy{font-size:11px}

    /* SECURITY CAPABILITY MATRIX */
    .capability-console{
      display:grid;grid-template-columns:minmax(250px,.62fr) minmax(0,1.38fr);
      gap:1px;background:rgba(53,255,162,.13);border:1px solid rgba(53,255,162,.24);
      overflow:hidden;
    }
    .capability-sidebar,.capability-output{background:rgba(3,11,15,.94);padding:20px}
    .capability-sidebar{min-width:0}
    .capability-tab{
      width:100%;display:flex;justify-content:space-between;align-items:center;gap:12px;
      margin-top:8px;padding:13px;border:1px solid rgba(53,255,162,.13);
      background:rgba(53,255,162,.02);color:var(--green2);cursor:pointer;text-align:left;
      font:700 10px var(--mono);transition:.2s ease;
    }
    .capability-tab span{min-width:0}
    .capability-tab b{color:var(--muted);margin-right:7px}
    .capability-tab i{color:var(--muted);font-style:normal;font-size:7px}
    .capability-tab:hover,.capability-tab.active{
      border-color:rgba(53,255,162,.48);background:rgba(53,255,162,.075);
      box-shadow:inset 3px 0 0 var(--green);color:var(--green);
    }
    .capability-tab.active i{color:var(--green);text-shadow:0 0 10px var(--green)}
    .capability-note{margin-top:18px;padding-top:15px;border-top:1px dashed rgba(53,255,162,.15);color:var(--muted);font:9px/1.6 var(--mono)}
    .capability-output{min-height:330px}
    .capability-output-head{display:flex;justify-content:space-between;gap:15px;align-items:flex-start}
    .capability-output h4{margin:0;color:var(--green2);font-size:clamp(22px,3vw,32px)}
    .capability-code{color:var(--cyan);font:700 9px var(--mono);letter-spacing:.1em}
    .capability-summary{margin:12px 0 18px;color:#b9ccc0;font:11px/1.7 var(--mono);max-width:760px}
    .capability-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    .capability-evidence{padding:13px;border:1px solid var(--line);background:rgba(53,255,162,.025)}
    .capability-evidence small{display:block;color:var(--cyan);font:8px var(--mono);margin-bottom:8px}
    .capability-evidence strong{display:block;color:var(--green2);font:700 11px/1.45 var(--mono)}
    .capability-evidence p{margin:7px 0 0;color:var(--muted);font:9px/1.55 var(--mono)}
    .capability-tags{display:flex;flex-wrap:wrap;gap:7px;margin-top:14px}
    .capability-tags span{padding:6px 8px;border:1px solid var(--line);color:var(--green2);font:9px var(--mono)}
    .capability-case-links{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
    .capability-case-links button{
      border:1px solid var(--line);background:rgba(53,255,162,.04);color:var(--green2);
      padding:8px 10px;font:700 9px var(--mono);cursor:pointer
    }
    .capability-case-links button:hover{background:var(--green);color:#021009}

    /* CASE FILE ENHANCEMENT */
    .case-meta{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:0 0 18px}
    .case-meta>div{padding:11px;border:1px solid var(--line);background:rgba(53,255,162,.025)}
    .case-meta small{display:block;color:var(--cyan);font:8px var(--mono);margin-bottom:5px}
    .case-meta strong{display:block;color:var(--green2);font:700 10px/1.35 var(--mono)}

    /* INVESTIGATION MODE */
    .investigation-overlay{
      position:fixed;inset:0;z-index:11200;display:none;place-items:center;padding:18px;
      background:rgba(0,4,6,.94);backdrop-filter:blur(12px);font-family:var(--mono);
    }
    .investigation-overlay.active{display:grid}
    .investigation-shell{width:min(980px,100%);max-height:90vh;overflow:auto;border:1px solid rgba(53,255,162,.42);background:#041015;box-shadow:0 0 70px rgba(53,255,162,.12)}
    .investigation-head{display:flex;justify-content:space-between;align-items:center;gap:15px;padding:14px 18px;border-bottom:1px solid var(--line);color:var(--green);font-size:10px;font-weight:700}
    .investigation-head button{border:1px solid var(--line);background:transparent;color:var(--green);padding:7px 10px;font:700 9px var(--mono);cursor:pointer}
    .investigation-body{padding:20px}
    .investigation-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:14px}
    .investigation-evidence,.investigation-log{border:1px solid var(--line);background:rgba(53,255,162,.025);padding:15px}
    .investigation-evidence h4,.investigation-log h4{margin:0 0 12px;color:var(--green2);font-size:12px}
    .evidence-item{padding:10px 0;border-bottom:1px dashed rgba(53,255,162,.13);display:flex;justify-content:space-between;gap:10px;font-size:9px}
    .evidence-item:last-child{border-bottom:0}
    .evidence-item span{color:var(--muted)}.evidence-item b{color:var(--cyan)}
    .investigation-log{min-height:300px}
    .investigation-lines{height:245px;overflow:auto;font-size:9px;line-height:1.7;color:var(--muted)}
    .investigation-line b{color:var(--green)}.investigation-line.alert{color:#ff9ba5}
    .investigation-progress{height:8px;border:1px solid var(--line);background:#06100d;margin-top:14px;overflow:hidden}
    .investigation-progress span{display:block;width:0;height:100%;background:linear-gradient(90deg,#0b6d45,var(--green));transition:width .45s ease}
    .investigation-footer{display:flex;justify-content:space-between;gap:12px;align-items:center;margin-top:12px;color:var(--muted);font-size:9px}
    .investigation-footer button{border:1px solid var(--line);background:var(--green);color:#021009;padding:9px 12px;font:700 9px var(--mono);cursor:pointer}

    /* CREDENTIAL MATRIX */
    .credential-matrix{margin-top:22px;border:1px solid var(--line);background:rgba(53,255,162,.018);padding:18px}
    .credential-matrix-head{display:flex;justify-content:space-between;gap:15px;align-items:end;margin-bottom:14px}
    .credential-matrix-head h4{margin:0;font-size:18px}
    .credential-matrix-head small{color:var(--muted);font:9px var(--mono)}
    .credential-provider-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:9px}
    .credential-provider{padding:14px 10px;border:1px solid var(--line);background:rgba(3,12,16,.65);text-align:center}
    .credential-provider strong{display:block;color:var(--green);font:800 20px var(--mono)}
    .credential-provider span{display:block;color:var(--green2);font:700 9px var(--mono);margin-top:6px}
    .credential-provider small{display:block;color:var(--muted);font:8px var(--mono);margin-top:4px}

    /* MICRO-INTERACTION CURSOR */
    .cursor-scanner{position:fixed;left:0;top:0;width:24px;height:24px;border:1px solid var(--green);border-radius:50%;z-index:14000;pointer-events:none;opacity:0;transform:translate(-50%,-50%);mix-blend-mode:screen;transition:width .16s,height .16s,opacity .2s}
    .cursor-scanner::before,.cursor-scanner::after{content:'';position:absolute;background:var(--green);box-shadow:0 0 8px var(--green)}
    .cursor-scanner::before{left:50%;top:-5px;width:1px;height:34px}.cursor-scanner::after{top:50%;left:-5px;width:34px;height:1px}
    body.cursor-active .cursor-scanner{opacity:.65}
    body.cursor-hover .cursor-scanner{width:38px;height:38px;opacity:.9}
    @media(pointer:coarse){.cursor-scanner{display:none}}

    @media(max-width:900px){
      .command-main{grid-template-columns:1fr}
      .credential-provider-grid{grid-template-columns:repeat(3,1fr)}
      .investigation-grid{grid-template-columns:1fr}
      .capability-console{grid-template-columns:1fr}
    }
    @media(max-width:620px){
      .command-metrics{grid-template-columns:1fr 1fr}
      .case-meta{grid-template-columns:1fr}
      .credential-provider-grid{grid-template-columns:1fr 1fr}
      .security-map{min-height:260px}
      .map-node{min-width:88px;font-size:8px}
      .map-core{min-width:108px}
      .investigation-body{padding:14px}
      .journey-intro{align-items:flex-start;flex-direction:column}
      .journey-status{white-space:normal}
      .career-journey-section .timeline-item{padding-left:38px}
      .capability-sidebar,.capability-output{padding:15px}
      .capability-grid{grid-template-columns:1fr}
    }

    .profile-details-grid{align-items:start}
    .profile-details-grid>.card{min-height:100%}
    .profile-details-grid .info-row strong{line-height:1.5}
    .profile-details-grid .skills{margin-top:4px}

    .experience-stack{display:grid;gap:18px;margin-top:8px}
    .experience-stack .experience-row{padding:26px}
    .credential-stack{display:grid;gap:22px}
    .credential-block{padding:22px;border:1px solid var(--line);background:rgba(53,255,162,.018)}
    .credential-block>.label{margin-bottom:14px}
    .credential-block .info-list{gap:12px}
    #experience,#career-journey,#capabilities,#credentials,#profile-details,#terminal,#threat-dashboard,#trajectory,#reconstruction,#labs,#writeups,#contact{scroll-margin-top:88px}
    #terminal{position:relative;z-index:2;min-height:520px}
    #terminal .terminal{display:block!important;visibility:visible!important;opacity:1!important}

    .recruiter-profile-section{padding-top:36px}
    .recruiter-profile-card{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(300px,.8fr);gap:24px;padding:28px;border:1px solid var(--line);background:linear-gradient(145deg,rgba(8,24,28,.78),rgba(4,12,16,.62));backdrop-filter:blur(14px);box-shadow:0 20px 55px rgba(0,0,0,.25)}
    .recruiter-profile-main h3{font-size:clamp(32px,4.5vw,58px);margin:0 0 8px}
    .recruiter-role{color:var(--green);font:700 12px var(--mono);margin:0 0 12px}
    .recruiter-summary{max-width:720px;color:#b9ccc0;line-height:1.7;margin:0}
    .recruiter-specializations{display:flex;flex-wrap:wrap;gap:8px;margin:20px 0}
    .recruiter-specializations span{border:1px solid var(--line);padding:7px 9px;color:var(--green2);font:700 9px var(--mono);letter-spacing:.08em}
    .recruiter-actions{display:flex;gap:9px;flex-wrap:wrap;margin-top:20px}
    .recruiter-actions .btn,.recruiter-actions a{display:inline-flex;align-items:center;justify-content:center}
    .recruiter-facts{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    .recruiter-facts>div{padding:15px;border:1px solid var(--line);background:rgba(53,255,162,.025)}
    .recruiter-facts small{display:block;color:var(--cyan);font:700 9px var(--mono);margin-bottom:8px}
    .recruiter-facts strong{display:block;color:var(--green2);font:700 15px var(--mono);line-height:1.35}
    .recruiter-facts span{display:block;color:var(--muted);font:10px var(--mono);margin-top:5px}
    .soc-console{border:1px solid var(--line);background:linear-gradient(145deg,rgba(7,20,25,.86),rgba(3,10,14,.72));box-shadow:0 20px 55px rgba(0,0,0,.22);overflow:hidden}
    .soc-header{display:flex;justify-content:space-between;align-items:center;gap:15px;padding:14px 18px;border-bottom:1px solid var(--line);color:var(--green);font:700 10px var(--mono);letter-spacing:.08em}
    .soc-header>div{display:flex;align-items:center;gap:8px}
    .soc-simulated{color:var(--muted);font-weight:400}
    .soc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(53,255,162,.14)}
    .soc-module{position:relative;min-height:145px;padding:20px;background:rgba(4,12,16,.9);overflow:hidden}
    .soc-module small{display:block;color:var(--muted);font:700 9px var(--mono);letter-spacing:.08em;margin-bottom:14px}
    .soc-module strong{display:block;color:var(--green);font:800 22px var(--mono)}
    .soc-module span{display:block;color:#9fb5a8;font:11px/1.5 var(--mono);margin-top:9px;max-width:260px}
    .soc-module i{position:absolute;right:18px;top:20px;width:9px;height:9px;border-radius:50%;background:var(--green);box-shadow:0 0 16px var(--green);animation:socPulse 1.8s ease-in-out infinite}
    @keyframes socPulse{0%,100%{opacity:.35;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}}
    .soc-feed{display:grid;gap:7px;padding:14px 18px;background:rgba(53,255,162,.018);font:10px/1.5 var(--mono);color:var(--muted)}
    .soc-feed div{display:flex;gap:10px}.soc-feed b{color:var(--green)}

    .cyber-timeline{position:relative;display:grid;gap:24px;margin-top:32px;padding-left:34px}
    .cyber-timeline::before{content:'';position:absolute;left:10px;top:0;bottom:0;width:2px;background:linear-gradient(var(--green),rgba(53,255,162,.08));transform:scaleY(0);transform-origin:top;transition:transform 1.2s ease;box-shadow:0 0 12px rgba(53,255,162,.25)}
    .cyber-timeline.timeline-visible::before{transform:scaleY(1)}
    .timeline-item{position:relative;opacity:0;transform:translateX(26px);transition:.65s cubic-bezier(.2,.8,.2,1)}
    .timeline-item::before{content:'';position:absolute;left:-30px;top:8px;width:10px;height:10px;border-radius:50%;background:var(--green);box-shadow:0 0 14px var(--green)}
    .timeline-item.timeline-visible{opacity:1;transform:none}
    .timeline-year{color:var(--green);font:700 11px var(--mono);letter-spacing:.12em;margin-bottom:6px}
    .timeline-title{font-weight:700;margin-bottom:5px}
    .timeline-copy{color:var(--muted);line-height:1.65}

    .live-counter-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px;margin-top:24px}
    .live-counter{padding:18px 14px;text-align:center;border:1px solid var(--line);background:rgba(53,255,162,.035);backdrop-filter:blur(10px)}
    .live-counter strong{display:block;color:var(--green);font:800 clamp(24px,3vw,40px) var(--mono);line-height:1;text-shadow:0 0 18px rgba(53,255,162,.25)}
    .live-counter span{display:block;margin-top:8px;color:var(--muted);font:9px var(--mono);letter-spacing:.08em}

    .section[data-reveal-mode="scan"] .reveal-item{clip-path:inset(0 100% 0 0);opacity:1;filter:none;transform:none;transition:clip-path .9s cubic-bezier(.2,.8,.2,1)}
    .section[data-reveal-mode="scan"] .reveal-item.is-visible{clip-path:inset(0)}
    .section[data-reveal-mode="cascade"] .reveal-item{transform:translateY(48px) rotateX(8deg);transform-origin:top}
    .section[data-reveal-mode="cascade"] .reveal-item.is-visible{transform:none}

    .code-rain-host{position:relative;overflow:hidden}
    .code-rain-layer{position:absolute;inset:0;pointer-events:none;z-index:0;opacity:.09;overflow:hidden;font:10px/1.25 var(--mono);color:var(--green);white-space:pre;mask-image:linear-gradient(to bottom,transparent,#000 18%,#000 82%,transparent)}
    .code-rain-column{position:absolute;top:-140%;animation:codeRain linear infinite;text-shadow:0 0 8px rgba(53,255,162,.35)}
    @keyframes codeRain{to{transform:translateY(260%)}}
    .code-rain-host>*:not(.code-rain-layer){position:relative;z-index:1}

    .cyber-equalizer{display:flex;align-items:flex-end;gap:4px;height:26px;margin-top:14px}
    .cyber-equalizer i{width:4px;height:20%;background:linear-gradient(var(--green),var(--cyan));box-shadow:0 0 8px rgba(53,255,162,.3);animation:eqPulse 1.1s ease-in-out infinite}
    .cyber-equalizer i:nth-child(2){animation-delay:.1s}.cyber-equalizer i:nth-child(3){animation-delay:.2s}.cyber-equalizer i:nth-child(4){animation-delay:.3s}.cyber-equalizer i:nth-child(5){animation-delay:.4s}.cyber-equalizer i:nth-child(6){animation-delay:.5s}.cyber-equalizer i:nth-child(7){animation-delay:.6s}.cyber-equalizer i:nth-child(8){animation-delay:.7s}
    @keyframes eqPulse{0%,100%{height:18%;opacity:.45}50%{height:100%;opacity:1}}

    .terminal-startup{padding:14px 16px;border-bottom:1px solid var(--line);background:rgba(53,255,162,.025);font:10px/1.7 var(--mono);color:var(--green2)}
    .terminal-startup .startup-line{opacity:0;transform:translateY(5px);animation:terminalBootLine .4s ease forwards}
    @keyframes terminalBootLine{to{opacity:1;transform:none}}
    .terminal.terminal-locked .inputrow{opacity:.35;pointer-events:none;filter:grayscale(1)}

    @media(max-width:900px){.live-counter-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
    @media(max-width:620px){.live-counter-grid{grid-template-columns:1fr 1fr}.hero-network{opacity:.34}}
    @media(max-width:760px){.recruiter-profile-card{grid-template-columns:1fr;padding:20px}.recruiter-facts{grid-template-columns:1fr 1fr}.soc-grid{grid-template-columns:1fr}.soc-header{align-items:flex-start;flex-direction:column}}
    @media(max-width:430px){.recruiter-facts{grid-template-columns:1fr}}


    /* Education timeline — compact, continuous layout */
    .profile-education{
      margin-top:22px!important;
      padding-top:18px!important;
    }
    .profile-education .dossier-kicker{margin-bottom:8px!important}
    .profile-education .education-track{
      margin-top:12px!important;
      padding-top:8px!important;
      gap:12px!important;
      min-height:0!important;
      align-items:stretch!important;
    }
    .profile-education .education-node{
      min-height:0!important;
      height:auto!important;
      padding:32px 18px 18px!important;
    }
    .profile-education .education-node::before{
      top:10px!important;
    }
    .profile-education .education-node::after{
      top:15px!important;
      height:17px!important;
    }
    .profile-education .education-node h4{
      margin:7px 0 7px!important;
    }
    .profile-education .education-node p{
      margin:0 0 8px!important;
    }
    @media(max-width:900px){
      .profile-education .education-track{
        gap:10px!important;
        padding-top:0!important;
      }
      .profile-education .education-node{
        padding:28px 18px 16px!important;
      }
    }
    @media(max-width:620px){
      .profile-education{
        margin-top:18px!important;
        padding-top:16px!important;
      }
      .profile-education .education-track{gap:10px!important}
      .profile-education .education-node{padding:28px 16px 16px!important}
    }




    /* Dynamic-content visibility + compact vertical rhythm */
    #about,#profile-details,#skills,#labs,#writeups,#contact,#trajectory,#reconstruction,#terminal,#experience,#career-journey,#capabilities{
      min-height:0!important;
    }
    #about .security-profile-grid,
    #about .profile-metrics,
    #about .profile-education,
    #profile-details .profile-details-grid,
    #skills .skill-project-map,
    #labs .lab-grid,
    #writeups .writeup-grid,
    #contact .contact{
      opacity:1!important;
      visibility:visible!important;
    }
    #about .reveal-item,
    #experience .reveal-item,
    #profile-details .reveal-item,
    #skills .reveal-item,
    #labs .reveal-item,
    #writeups .reveal-item,
    #contact .reveal-item{
      opacity:1!important;
      visibility:visible!important;
      transform:none!important;
      filter:none!important;
      clip-path:none!important;
    }
    #about,#experience,#career-journey,#capabilities,#profile-details,#skills,#labs,#writeups,#contact{scroll-margin-top:88px}
    @media(max-width:760px){
      #about,#experience,#career-journey,#capabilities,#profile-details,#skills,#labs,#writeups,#contact{padding-top:42px;padding-bottom:42px}
    }

    /* Education → Experience final visibility fix: do not reserve blank space for hidden reveal elements. */
    #experience > .heading,
    #experience .experience-row,
    #career-journey .cyber-timeline,
    #career-journey .timeline-item{
      opacity:1!important;
      visibility:visible!important;
      transform:none!important;
      filter:none!important;
      clip-path:none!important;
    }
    #experience{
      margin-top:0!important;
    }

    /* Education → Experience gap fix */
    #about{
      padding-bottom:18px!important;
    }
    #experience{
      padding-top:18px!important;
      padding-bottom:34px!important;
    }
    #experience .heading{
      margin-bottom:18px!important;
    }
    #experience .experience-stack{
      margin-top:0!important;
      gap:12px!important;
    }
    #career-journey .cyber-timeline{
      margin-top:0!important;
      gap:16px!important;
    }

    /* Final no-gap section flow */
    #home.hero{
      margin-bottom:0!important;
      padding-bottom:12px!important;
    }
    #projects{
      margin-top:0!important;
      padding-top:18px!important;
    }
    #about{
      padding-top:42px!important;
      padding-bottom:42px!important;
    }
    #threat-dashboard{
      margin-top:0!important;
      padding-top:20px!important;
    }
    main > .section{
      min-height:0!important;
    }

    /* Compact section spacing fixes */
    #home.hero{
      min-height:auto;
      padding-top:118px;
      padding-bottom:26px;
      row-gap:24px;
    }
    #home .live-counter-grid{
      grid-column:1 / -1;
      width:100%;
      margin-top:8px;
    }
    #projects{
      padding-top:34px;
      padding-bottom:58px;
    }
    #projects .heading{
      margin-bottom:24px!important;
    }
    #credentials{
      padding-top:54px;
      padding-bottom:54px;
    }
    #credentials + .section{
      padding-top:46px;
      padding-bottom:38px;
    }
    #threat-dashboard{
      padding-top:34px;
      padding-bottom:54px;
    }
    #threat-dashboard .heading{
      margin-bottom:22px!important;
    }
    #threat-dashboard .threat-grid{
      margin-top:0;
    }
    @media(max-width:900px){
      #home.hero{
        padding-top:104px;
        padding-bottom:22px;
      }
      #projects,
      #threat-dashboard{
        padding-top:30px;
      }
    }



    /* Authoritative hero-to-project spacing fix */
    #home.section.hero{
      min-height:0!important;
      height:auto!important;
      margin:0 auto!important;
      padding-top:118px!important;
      padding-bottom:20px!important;
      display:grid!important;
      grid-template-columns:minmax(0,1.35fr) minmax(340px,.65fr)!important;
      grid-template-rows:auto!important;
      grid-auto-rows:auto!important;
      align-items:start!important;
      align-content:start!important;
      column-gap:42px!important;
      row-gap:0!important;
      overflow:hidden;
    }

    #home > .hero-network{
      position:absolute!important;
      inset:0!important;
      width:100%!important;
      height:100%!important;
      min-height:0!important;
      margin:0!important;
      padding:0!important;
      pointer-events:none!important;
    }

    #home > div:not(.hero-network):not(.identity),
    #home > .identity{
      margin-bottom:0!important;
      align-self:start!important;
    }

    #home .stats{
      margin-bottom:0!important;
    }

    #projects.section{
      min-height:0!important;
      height:auto!important;
      margin:0 auto!important;
      padding-top:24px!important;
      padding-bottom:48px!important;
      transform:none!important;
      opacity:1!important;
      visibility:visible!important;
      filter:none!important;
      clip-path:none!important;
    }

    #projects .heading,
    #projects .grid2,
    #projects .project-card{
      opacity:1!important;
      visibility:visible!important;
      transform:none!important;
      filter:none!important;
      clip-path:none!important;
    }

    @media(max-width:900px){
      #home.section.hero{
        grid-template-columns:1fr!important;
        padding-top:104px!important;
        padding-bottom:16px!important;
        row-gap:26px!important;
      }

      #projects.section{
        padding-top:20px!important;
      }
    }
      .hero-focus{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin:20px 0 8px;
}

.hero-focus span{
  padding:7px 10px;
  border:1px solid rgba(53,255,162,.28);
  background:rgba(53,255,162,.045);
  color:var(--green2);
  font:700 9px var(--mono);
  letter-spacing:.1em;
  transition:
    transform .25s ease,
    border-color .25s ease,
    background .25s ease,
    box-shadow .25s ease;
}

.hero-focus span:hover{
  transform:translateY(-3px);
  border-color:var(--green);
  background:rgba(53,255,162,.09);
  box-shadow:0 0 18px rgba(53,255,162,.1);
}

.hero h2 span{
  color:var(--green);
}

@media(max-width:470px){
  .hero-focus{
    gap:6px;
  }

  .hero-focus span{
    font-size:8px;
    padding:6px 8px;
  }
}



    /* Animated project preview images */
    .project-visual{
      position:relative;
      height:190px;
      margin:-4px -4px 18px;
      overflow:hidden;
      border:1px solid rgba(53,255,162,.2);
      background:
        radial-gradient(circle at 50% 50%,rgba(53,255,162,.09),transparent 58%),
        linear-gradient(145deg,#06151a,#02080c);
      isolation:isolate;
    }
    .project-visual::before{
      content:'';
      position:absolute;
      inset:0;
      z-index:1;
      background:
        linear-gradient(rgba(53,255,162,.035) 1px,transparent 1px),
        linear-gradient(90deg,rgba(53,255,162,.035) 1px,transparent 1px);
      background-size:24px 24px;
      animation:gridShift 7s linear infinite;
    }
    .project-visual::after{
      content:'';
      position:absolute;
      left:0;
      right:0;
      height:2px;
      top:-6px;
      z-index:4;
      background:linear-gradient(90deg,transparent,var(--green),transparent);
      box-shadow:0 0 16px var(--green);
      animation:visualScan 3.1s linear infinite;
      opacity:.72;
    }
    @keyframes gridShift{
      to{background-position:24px 24px}
    }
    @keyframes visualScan{
      0%{transform:translateY(0)}
      100%{transform:translateY(205px)}
    }
    .project-visual svg{
      position:absolute;
      inset:0;
      z-index:2;
      width:100%;
      height:100%;
      display:block;
    }
    .project-visual .pulse{transform-origin:center;animation:visualPulse 2.6s ease-in-out infinite}
    .project-visual .packet{animation:packetTravel 2.8s linear infinite}
    .project-visual .packet.delay-1{animation-delay:-.9s}
    .project-visual .packet.delay-2{animation-delay:-1.8s}

    .motag-rings{transform-origin:360px 174px;animation:motagRotate 18s linear infinite}
    .motag-sweep{transform-origin:360px 174px;animation:motagSweep 4.5s linear infinite}
    .data-route{stroke-dashoffset:0;animation:dashFlow 4.5s linear infinite}
    .motag-packets circle{animation:signalBlink 2.4s ease-in-out infinite}
    .motag-packets circle:nth-child(2){animation-delay:.6s}
    .motag-packets circle:nth-child(3){animation-delay:1.2s}
    .motag-packets circle:nth-child(4){animation-delay:1.8s}

    .phish-scan-line{animation:phishScan 3.8s ease-in-out infinite}
    .phish-lens{transform-origin:565px 140px;animation:phishLens 4.8s ease-in-out infinite}
    .confidence-track rect:last-child{transform-origin:left center;animation:confidenceLoad 3.2s ease-in-out infinite}

    .memory-core{transform-origin:360px 174px;animation:memoryBreathe 4.2s ease-in-out infinite}
    .forensic-links{stroke-dashoffset:0;animation:dashFlow 4.2s linear infinite}
    .evidence-points circle{animation:evidencePulse 2.8s ease-in-out infinite}
    .evidence-points circle:nth-child(2){animation-delay:.7s}
    .evidence-points circle:nth-child(3){animation-delay:1.4s}

    .trajectory-links{stroke-dashoffset:0;animation:dashFlow 3.6s linear infinite}
    .trajectory-packets circle{animation:trajectoryPacket 3.6s linear infinite}
    .trajectory-packets circle:nth-child(2){animation-delay:-1.2s}
    .trajectory-packets circle:nth-child(3){animation-delay:-2.4s}
    .audit-route{stroke-dashoffset:0;animation:dashFlow 4s linear infinite}

    .incident-node-visual{animation:incidentFocus 3.8s ease-in-out infinite;animation-delay:var(--delay)}
    .incident-ring{transform-origin:center;animation:incidentRing 3.8s ease-out infinite;animation-delay:var(--delay)}
    .event-feed text{animation:eventType 4s ease-in-out infinite}
    .event-feed text:nth-child(2){animation-delay:1.2s}
    .event-feed text:nth-child(3){animation-delay:2.4s}

    .waste-conveyor{animation:conveyorShift 5s linear infinite}
    .waste-item{animation:wasteItemMove 4.5s ease-in-out infinite}
    .sensor-beams{opacity:.45;animation:sensorScan 3.2s ease-in-out infinite}
    .waste-routing{stroke-dashoffset:0;animation:dashFlow 4s linear infinite}

    @keyframes visualPulse{0%,100%{opacity:.55}50%{opacity:1}}
    @keyframes packetTravel{0%{transform:translateX(-28px);opacity:0}15%{opacity:1}85%{opacity:1}100%{transform:translateX(310px);opacity:0}}
    @keyframes motagRotate{to{transform:rotate(360deg)}}
    @keyframes motagSweep{to{transform:rotate(360deg)}}
    @keyframes dashFlow{to{stroke-dashoffset:-96}}
    @keyframes signalBlink{0%,100%{opacity:.25}50%{opacity:1}}
    @keyframes phishScan{0%,100%{transform:translateY(0);opacity:.25}50%{transform:translateY(44px);opacity:1}}
    @keyframes phishLens{0%,100%{transform:translate(0,0)}50%{transform:translate(7px,3px)}}
    @keyframes confidenceLoad{0%,100%{transform:scaleX(.74)}50%{transform:scaleX(.94)}}
    @keyframes memoryBreathe{0%,100%{transform:scale(.985);opacity:.78}50%{transform:scale(1.015);opacity:1}}
    @keyframes evidencePulse{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:1;transform:scale(1.2)}}
    @keyframes trajectoryPacket{0%{transform:translateX(-18px);opacity:0}15%{opacity:1}85%{opacity:1}100%{transform:translateX(18px);opacity:0}}
    @keyframes incidentFocus{0%,100%{opacity:.72}50%{opacity:1}}
    @keyframes incidentRing{0%{opacity:.35;transform:scale(.72)}100%{opacity:0;transform:scale(1.35)}}
    @keyframes eventType{0%,100%{opacity:.45}50%{opacity:1}}
    @keyframes conveyorShift{to{transform:translateX(16px)}}
    @keyframes wasteItemMove{0%,100%{transform:translateX(-10px)}50%{transform:translateX(10px)}}
    @keyframes sensorScan{0%,100%{opacity:.25}50%{opacity:.9}}

    @media(prefers-reduced-motion:reduce){
      .project-visual *{animation:none!important}
    }

    .project-visual-label{
      position:absolute;
      left:12px;
      bottom:10px;
      z-index:5;
      padding:6px 8px;
      border:1px solid rgba(53,255,162,.25);
      background:rgba(2,9,12,.82);
      color:var(--green2);
      font:9px var(--mono);
      letter-spacing:.08em;
    }
    .project-card-copy{
      position:relative;
      z-index:3;
    }
    @media(max-width:620px){
      .project-visual{height:165px}
    }


    /* Experience project stack */
    .experience-row{position:relative;overflow:hidden}
    .experience-projects{
      display:flex;
      flex-wrap:wrap;
      gap:7px;
      margin-top:14px;
      padding-top:12px;
      border-top:1px dashed rgba(53,255,162,.14);
    }
    .experience-projects-label{
      width:100%;
      color:var(--cyan);
      font:700 9px var(--mono);
      letter-spacing:.1em;
      margin-bottom:2px;
    }
    .experience-project{
      padding:6px 8px;
      border:1px solid rgba(53,255,162,.22);
      background:rgba(53,255,162,.035);
      color:var(--green2);
      font:10px/1.35 var(--mono);
      transition:transform .2s ease,border-color .2s ease,background .2s ease;
    }
    .experience-project:hover{
      transform:translateY(-2px);
      border-color:rgba(53,255,162,.5);
      background:rgba(53,255,162,.07);
    }

    /* Education timeline alignment */
    .education-track{
      position:relative;
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:18px;
      margin-top:18px;
      padding-top:34px;
    }
    .education-track::before{
      content:'';
      position:absolute;
      left:7%;
      right:7%;
      top:15px;
      height:1px;
      background:linear-gradient(90deg,transparent,var(--line) 8%,var(--line) 92%,transparent);
      box-shadow:0 0 10px rgba(53,255,162,.08);
    }
    .education-node{
      position:relative;
      padding:24px 20px 20px;
      border:1px solid var(--line);
      background:linear-gradient(145deg,rgba(8,24,28,.78),rgba(4,12,16,.6));
      min-height:178px;
    }
    .education-node::before{
      content:'';
      position:absolute;
      left:50%;
      top:-25px;
      width:12px;
      height:12px;
      border-radius:50%;
      transform:translateX(-50%);
      background:var(--green);
      box-shadow:0 0 0 5px rgba(53,255,162,.07),0 0 20px var(--green);
      z-index:3;
    }
    .education-node::after{
      content:'';
      position:absolute;
      left:50%;
      top:-13px;
      width:1px;
      height:13px;
      transform:translateX(-50%);
      background:linear-gradient(var(--green),rgba(53,255,162,.15));
    }
    .education-dot{display:none}

    @media(max-width:900px){
      .education-track{grid-template-columns:1fr;padding-top:0;padding-left:30px;gap:14px}
      .education-track::before{
        left:9px;
        right:auto;
        top:10px;
        bottom:10px;
        width:1px;
        height:auto;
      }
      .education-node{padding:22px 18px 18px}
      .education-node::before{
        left:-21px;
        top:24px;
        width:11px;
        height:11px;
        transform:none;
      }
      .education-node::after{
        left:-10px;
        top:29px;
        width:10px;
        height:1px;
        transform:none;
      }
    }

    /* Cybersecurity labs */
    .lab-grid{
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:16px;
    }
    .lab-card{
      position:relative;
      min-height:230px;
      padding:20px;
      border:1px solid var(--line);
      background:linear-gradient(145deg,rgba(8,24,28,.78),rgba(4,12,16,.62));
      overflow:hidden;
    }
    .lab-card::before{
      content:'';
      position:absolute;
      inset:auto -20% -55% -20%;
      height:150px;
      background:radial-gradient(circle,rgba(53,255,162,.12),transparent 70%);
      pointer-events:none;
    }
    .lab-icon{
      width:44px;
      height:44px;
      display:grid;
      place-items:center;
      border:1px solid var(--line);
      color:var(--green);
      font:700 12px var(--mono);
      margin-bottom:16px;
      box-shadow:0 0 18px rgba(53,255,162,.08);
    }
    .lab-card h4{margin:0 0 10px}
    .lab-card p{color:var(--muted);line-height:1.65}
    .lab-tools{
      display:flex;
      flex-wrap:wrap;
      gap:7px;
      margin-top:14px;
    }
    .lab-tools span{
      border:1px solid var(--line);
      padding:5px 7px;
      color:var(--green2);
      font:9px var(--mono);
    }
    .lab-card button{
      margin-top:16px;
      border:1px solid var(--line);
      background:transparent;
      color:var(--green);
      padding:8px 10px;
      font:10px var(--mono);
      cursor:pointer;
    }

    /* Security writeups */
    .writeup-grid{
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      gap:16px;
    }
    .writeup-card{
      border:1px solid var(--line);
      background:rgba(53,255,162,.025);
      padding:20px;
      cursor:pointer;
      transition:.3s ease;
    }
    .writeup-card:hover{
      transform:translateY(-5px);
      border-color:var(--green);
      box-shadow:0 0 28px rgba(53,255,162,.08);
    }
    .writeup-card .meta{
      display:flex;
      justify-content:space-between;
      gap:12px;
      color:var(--muted);
      font:9px var(--mono);
      margin-bottom:12px;
    }
    .writeup-card h4{margin:0 0 10px}
    .writeup-card p{color:var(--muted);line-height:1.65}
    .writeup-reader{
      position:fixed;
      inset:0;
      z-index:11800;
      display:none;
      place-items:center;
      background:rgba(1,7,10,.82);
      backdrop-filter:blur(9px);
    }
    .writeup-reader.active{display:grid}
    .writeup-reader-shell{
      width:min(760px,calc(100% - 28px));
      max-height:82vh;
      overflow:auto;
      border:1px solid var(--line);
      background:#061015;
      box-shadow:0 0 60px rgba(53,255,162,.14);
    }
    .writeup-reader-head{
      display:flex;
      justify-content:space-between;
      gap:14px;
      align-items:center;
      padding:14px 16px;
      border-bottom:1px solid var(--line);
      color:var(--green);
      font:700 11px var(--mono);
    }
    .writeup-reader-head button{
      border:1px solid var(--line);
      background:transparent;
      color:var(--green2);
      padding:6px 8px;
      cursor:pointer;
    }
    .writeup-reader-body{
      padding:22px;
      color:#c8d7cf;
      line-height:1.8;
    }
    .writeup-reader-body h3{
      color:var(--text);
      margin-top:0;
    }
    .writeup-reader-body h4{
      color:var(--green);
      margin-top:24px;
    }

    /* Professional mode */
    .mode-switch{
      display:flex;
      gap:8px;
      margin-left:auto;
    }
    .mode-switch button{
      border:1px solid var(--line);
      background:transparent;
      color:var(--green2);
      padding:7px 9px;
      font:9px var(--mono);
      cursor:pointer;
    }
    .mode-switch button.active{
      background:var(--green);
      color:#03100a;
    }

    body.professional-mode{
      --green:#4b6bff;
      --green2:#7f96ff;
      --cyan:#4b6bff;
      --line:rgba(75,107,255,.2);
      --panel:rgba(255,255,255,.92);
      --text:#18202a;
      --muted:#5c6570;
      background:#eef2f7;
      color:#18202a;
    }
    body.professional-mode::before,
    body.professional-mode canvas,
    body.professional-mode .hero-network,
    body.professional-mode .code-rain-layer,
    body.professional-mode .cyber-equalizer,
    body.professional-mode .breach-overlay,
    body.professional-mode .boot-loader{
      display:none!important;
    }
    body.professional-mode .topbar{
      background:rgba(255,255,255,.95);
      border-bottom:1px solid rgba(0,0,0,.08);
      box-shadow:0 8px 22px rgba(27,39,51,.05);
    }
    body.professional-mode .card,
    body.professional-mode .identity,
    body.professional-mode .terminal,
    body.professional-mode .threat-card,
    body.professional-mode .project-card,
    body.professional-mode .about-card,
    body.professional-mode .credential-column,
    body.professional-mode .info-row,
    body.professional-mode .contact>*,
    body.professional-mode .lab-card,
    body.professional-mode .writeup-card{
      background:#fff!important;
      color:#18202a;
      backdrop-filter:none;
      border-color:rgba(0,0,0,.09)!important;
      box-shadow:0 14px 34px rgba(27,39,51,.07);
    }
    body.professional-mode .section{
      border-color:rgba(0,0,0,.06);
    }
    body.professional-mode .project-visual{
      background:linear-gradient(145deg,#f8faff,#eef3ff);
    }
    body.professional-mode .terminal{
      background:#111827!important;
      color:#d8e6df;
    }
    body.professional-mode .terminal *{
      border-color:rgba(255,255,255,.08);
    }
    body.professional-mode .nav button,
    body.professional-mode .topbar,
    body.professional-mode h1,
    body.professional-mode h2,
    body.professional-mode h3,
    body.professional-mode h4{
      color:#18202a;
      text-shadow:none;
    }
    body.professional-mode .label,
    body.professional-mode .eyebrow,
    body.professional-mode .timeline-year,
    body.professional-mode .lab-icon,
    body.professional-mode .writeup-reader-head{
      color:#4b6bff;
    }

    @media(max-width:900px){
      .lab-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
    }
    @media(max-width:700px){
      .lab-grid,.writeup-grid{grid-template-columns:1fr}
      .mode-switch{width:100%;margin:8px 0 0}
    }


    /* Hidden CTF challenge */
    .ctf-panel{
      position:fixed;
      inset:0;
      z-index:11950;
      display:none;
      place-items:center;
      background:rgba(1,7,10,.88);
      backdrop-filter:blur(8px);
    }
    .ctf-panel.active{display:grid}
    .ctf-shell{
      width:min(720px,calc(100% - 28px));
      max-height:84vh;
      overflow:auto;
      border:1px solid rgba(53,255,162,.42);
      background:#051015;
      box-shadow:0 0 60px rgba(53,255,162,.16);
    }
    .ctf-head{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:14px;
      padding:14px 16px;
      border-bottom:1px solid var(--line);
      color:var(--green);
      font:700 11px var(--mono);
    }
    .ctf-head button{
      border:1px solid var(--line);
      background:transparent;
      color:var(--green2);
      padding:6px 8px;
      cursor:pointer;
    }
    .ctf-body{padding:18px}
    .ctf-status{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:10px;
      margin-bottom:16px;
    }
    .ctf-status div{
      border:1px solid var(--line);
      background:rgba(53,255,162,.025);
      padding:10px;
      font:9px var(--mono);
      color:var(--muted);
    }
    .ctf-status strong{
      display:block;
      margin-top:6px;
      color:var(--green);
      font-size:13px;
    }
    .ctf-console{
      min-height:260px;
      max-height:380px;
      overflow:auto;
      border:1px solid var(--line);
      background:#02090d;
      padding:14px;
      color:#c9f6da;
      font:11px/1.65 var(--mono);
      white-space:pre-wrap;
    }
    .ctf-input-row{
      display:flex;
      gap:8px;
      margin-top:10px;
    }
    .ctf-input-row span{
      align-self:center;
      color:var(--green);
      font:11px var(--mono);
    }
    .ctf-input-row input{
      flex:1;
      border:1px solid var(--line);
      background:#061015;
      color:var(--text);
      outline:none;
      padding:10px;
      font:12px var(--mono);
    }
    .ctf-input-row button{
      border:1px solid var(--line);
      background:var(--green);
      color:#021009;
      padding:0 14px;
      font:700 10px var(--mono);
      cursor:pointer;
    }
    .ctf-hint{
      margin-top:12px;
      color:var(--muted);
      font:10px/1.6 var(--mono);
    }
    .ctf-flag{
      margin-top:14px;
      padding:14px;
      border:1px solid var(--green);
      background:rgba(53,255,162,.06);
      color:var(--green);
      font:700 12px var(--mono);
      text-align:center;
      word-break:break-all;
      box-shadow:0 0 26px rgba(53,255,162,.12);
    }
    @media(max-width:620px){
      .ctf-status{grid-template-columns:1fr}
      .ctf-input-row{flex-wrap:wrap}
      .ctf-input-row input{min-width:0}
      .ctf-input-row button{height:40px}
    }

    /* Portfolio search */
    .portfolio-search{
      position:fixed;
      inset:0;
      z-index:12000;
      display:none;
      place-items:start center;
      padding-top:90px;
      background:rgba(2,8,11,.78);
      backdrop-filter:blur(8px);
    }
    .portfolio-search.active{display:grid}
    .search-shell{
      width:min(720px,calc(100% - 28px));
      border:1px solid var(--line);
      background:#061015;
      box-shadow:0 0 60px rgba(53,255,162,.16);
    }
    .search-head{
      display:flex;
      gap:10px;
      padding:14px;
      border-bottom:1px solid var(--line);
    }
    .search-head input{
      flex:1;
      border:1px solid var(--line);
      background:#02090d;
      color:var(--text);
      padding:12px 14px;
      font:13px var(--mono);
      outline:none;
    }
    .search-head button{
      border:1px solid var(--line);
      background:transparent;
      color:var(--green);
      padding:0 12px;
      font:10px var(--mono);
      cursor:pointer;
    }
    .search-results{
      max-height:58vh;
      overflow:auto;
      padding:10px;
    }
    .search-result{
      width:100%;
      text-align:left;
      border:1px solid transparent;
      background:transparent;
      color:var(--text);
      padding:12px;
      cursor:pointer;
      font:11px/1.55 var(--mono);
    }
    .search-result:hover,.search-result.active{
      border-color:var(--line);
      background:rgba(53,255,162,.04);
    }
    .search-result strong{color:var(--green)}
    .search-result small{display:block;color:var(--muted);margin-top:4px}
    .search-highlight{
      outline:2px solid var(--green)!important;
      box-shadow:0 0 28px rgba(53,255,162,.24)!important;
      transition:.3s ease;
    }

    /* Skills to project map */
    .skill-project-map{
      margin-top:22px;
      display:grid;
      grid-template-columns:240px 1fr;
      gap:18px;
      border:1px solid var(--line);
      background:rgba(53,255,162,.025);
      padding:18px;
    }
    .skill-map-list{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      align-content:flex-start;
    }
    .skill-map-list button{
      border:1px solid var(--line);
      background:transparent;
      color:var(--green2);
      padding:8px 10px;
      font:10px var(--mono);
      cursor:pointer;
    }
    .skill-map-list button.active{
      background:var(--green);
      color:#021009;
    }
    .skill-map-output{
      min-height:140px;
      border-left:1px solid var(--line);
      padding-left:18px;
    }
    .skill-map-output h4{
      margin:0 0 10px;
      color:var(--green);
      font:700 12px var(--mono);
    }
    .skill-map-output ul{
      margin:0;
      padding-left:18px;
      color:var(--muted);
      line-height:1.75;
    }

    /* Animated architecture diagrams */
    .architecture-panel{
      margin-top:18px;
      border:1px solid var(--line);
      background:rgba(4,13,16,.82);
      padding:16px;
      overflow:hidden;
    }
    .architecture-flow{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:10px;
      position:relative;
      min-width:650px;
    }
    .arch-node{
      position:relative;
      z-index:2;
      flex:1;
      min-height:76px;
      display:grid;
      place-items:center;
      padding:12px;
      text-align:center;
      border:1px solid var(--line);
      background:#071218;
      color:var(--green2);
      font:10px/1.45 var(--mono);
      cursor:pointer;
      transition:.25s ease;
    }
    .arch-node:hover,.arch-node.active{
      border-color:var(--green);
      box-shadow:0 0 22px rgba(53,255,162,.15);
      transform:translateY(-4px);
    }
    .arch-link{
      flex:0 0 42px;
      height:1px;
      background:linear-gradient(90deg,var(--green),transparent);
      position:relative;
      overflow:visible;
    }
    .arch-link::after{
      content:'';
      position:absolute;
      top:-3px;
      left:-6px;
      width:7px;
      height:7px;
      border-radius:50%;
      background:var(--cyan);
      box-shadow:0 0 10px var(--cyan);
      animation:packetMove 1.7s linear infinite;
    }
    @keyframes packetMove{
      from{transform:translateX(0)}
      to{transform:translateX(48px)}
    }
    .arch-description{
      margin-top:14px;
      color:var(--muted);
      font:11px/1.65 var(--mono);
    }

    /* Session summary */
    .session-summary{
      position:fixed;
      right:16px;
      bottom:16px;
      z-index:10400;
      display:none;
      width:min(330px,calc(100% - 32px));
      border:1px solid var(--line);
      background:rgba(3,12,15,.97);
      padding:14px;
      box-shadow:0 0 36px rgba(53,255,162,.12);
    }
    .session-summary.active{display:block}
    .session-summary h4{
      margin:0 0 10px;
      color:var(--green);
      font:700 11px var(--mono);
    }
    .session-summary-grid{
      display:grid;
      grid-template-columns:1fr auto;
      gap:8px 12px;
      color:var(--muted);
      font:10px var(--mono);
    }
    .session-summary-grid strong{color:var(--text)}
    .session-summary button{
      width:100%;
      margin-top:12px;
      border:1px solid var(--line);
      background:transparent;
      color:var(--green);
      padding:8px;
      font:10px var(--mono);
      cursor:pointer;
    }

    @media(max-width:760px){
      .skill-project-map{grid-template-columns:1fr}
      .skill-map-output{border-left:0;border-top:1px solid var(--line);padding-left:0;padding-top:16px}
      .architecture-panel{overflow:auto}
      .portfolio-search{padding-top:24px}
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
    .terminal-health{display:inline-flex;align-items:center;gap:6px;color:var(--green2);font:8px var(--mono);margin-right:8px}
    .terminal-health i{width:6px;height:6px;border-radius:50%;background:var(--green);box-shadow:0 0 9px var(--green);animation:socPulse 1.5s infinite}
    .terminal-health-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(53,255,162,.10);border-bottom:1px solid var(--line)}
    .terminal-health-strip span{padding:8px 10px;background:rgba(3,11,15,.92);font:8px var(--mono);color:var(--muted)}
    .terminal-health-strip b{color:var(--cyan);margin-right:5px}
    .terminal-health-strip em{font-style:normal;color:var(--green2);float:right}
    @media(max-width:760px){.terminal-health{display:none}.terminal-health-strip{grid-template-columns:1fr 1fr}.terminal-health-strip em{float:none;display:block;margin-top:3px}}
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
    .hints{
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:14px;
      margin-top:18px;
    }
    .command-directory-title{
      grid-column:1 / -1;
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:12px;
      padding:12px 14px;
      border:1px solid var(--line);
      background:rgba(53,255,162,.035);
      color:var(--green);
      font:700 11px var(--mono);
    }
    .command-directory-title span:last-child{
      color:var(--muted);
      font-weight:400;
      font-size:9px;
    }
    .command-group{
      border:1px solid var(--line);
      background:linear-gradient(145deg,rgba(8,24,28,.68),rgba(4,12,16,.54));
      padding:14px;
    }
    .command-group h4{
      margin:0 0 11px;
      color:var(--green);
      font:700 10px var(--mono);
      letter-spacing:.09em;
    }
    .command-buttons{
      display:flex;
      flex-wrap:wrap;
      gap:7px;
    }
    .hints button{
      border:1px solid var(--line);
      background:var(--panel);
      color:var(--green2);
      padding:7px 9px;
      font:9px var(--mono);
      cursor:pointer;
      transition:.22s ease;
    }
    .hints button:hover{
      border-color:var(--green);
      color:var(--green);
      transform:translateY(-2px);
      box-shadow:0 0 14px rgba(53,255,162,.09);
    }
    .command-group small{
      display:block;
      margin-top:10px;
      color:var(--muted);
      font:9px/1.55 var(--mono);
    }
    @media(max-width:980px){
      .hints{grid-template-columns:repeat(2,minmax(0,1fr))}
    }
    @media(max-width:620px){
      .hints{grid-template-columns:1fr}
      .command-directory-title{
        align-items:flex-start;
        flex-direction:column;
      }
      .hints button{
        padding:8px 10px;
      }
    }

    .section + .section{border-top:1px solid rgba(53,255,162,.055)}
    .heading{margin-bottom:28px!important}
    .section .grid2{margin-top:0}
    #career-journey .cyber-timeline{margin-top:0}
    #contact{padding-bottom:58px}

    .contact{
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      gap:14px;
      opacity:1!important;
      visibility:visible!important;
    }
    .contact a,.contact div{
      display:block;
      min-width:0;
      padding:22px;
      border:1px solid var(--line);
      background:linear-gradient(145deg,rgba(8,24,28,.82),rgba(4,12,16,.68));
      color:var(--text);
      text-decoration:none;
      opacity:1!important;
      visibility:visible!important;
      transform:none;
    }
    .contact a:hover{
      border-color:var(--green);
      box-shadow:0 0 28px rgba(53,255,162,.1);
    }
    .contact small{display:block;color:var(--green);font:10px var(--mono);margin-bottom:8px}
    .contact strong{
      display:block;
      color:#d7efe1;
      font-size:14px;
      line-height:1.45;
      overflow-wrap:anywhere;
    }
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
      .section{padding:52px 0}
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

    /* PROJECT CASE FILES UPDATE */
    .projects-section{position:relative}
    .project-console{border:1px solid rgba(53,255,162,.22);background:rgba(2,10,13,.62);padding:10px;margin-bottom:18px}
    .project-console-status{display:flex;align-items:center;justify-content:space-between;gap:12px;color:var(--muted);font:10px var(--mono);letter-spacing:.08em;padding:4px 2px 12px}
    .project-console-status b{color:var(--green2);font-weight:700}
    .status-led{width:7px;height:7px;border-radius:50%;background:var(--green);box-shadow:0 0 12px var(--green);display:inline-block;margin-right:7px}
    .project-filters{display:flex;gap:8px;flex-wrap:wrap;border-top:1px solid rgba(53,255,162,.12);padding-top:10px}
    .project-filter{border:1px solid rgba(53,255,162,.2);background:rgba(53,255,162,.025);color:var(--muted);padding:8px 11px;cursor:pointer;font:700 9px var(--mono);letter-spacing:.05em;transition:.2s ease}
    .project-filter span{color:var(--green);margin-left:5px}
    .project-filter:hover,.project-filter.active{color:#021009;background:var(--green);border-color:var(--green);box-shadow:0 0 18px rgba(53,255,162,.12)}
    .project-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
    .project-case-file{position:relative;min-width:0;padding:16px;overflow:hidden}
    .project-file-head{display:flex;justify-content:space-between;gap:10px;align-items:center;margin-bottom:12px;color:var(--muted);font:9px var(--mono);letter-spacing:.08em}
    .project-state.live{color:var(--green2)}
    .project-state.live i{animation:livePulse 1.25s ease-in-out infinite}
    @keyframes livePulse{0%,100%{opacity:.55;transform:scale(.85);box-shadow:0 0 5px var(--green)}50%{opacity:1;transform:scale(1.15);box-shadow:0 0 14px var(--green)}}

    .project-state{color:var(--green2)}
    .project-state i{display:inline-block;width:5px;height:5px;border-radius:50%;background:var(--green);box-shadow:0 0 8px var(--green);margin-right:5px}
    .project-category{font:700 9px var(--mono);color:var(--cyan);letter-spacing:.08em;margin:0 0 8px}
    .project-case-file h4{font-size:clamp(20px,2.1vw,28px);line-height:1.18;margin:13px 0 10px}
    .project-case-file p{margin-bottom:14px}
    .project-architecture-mini{display:flex;flex-wrap:wrap;align-items:center;gap:5px;margin-top:12px;padding:9px;border:1px dashed rgba(53,255,162,.15);background:rgba(53,255,162,.018)}
    .project-architecture-mini span{color:#9fd6ba;font:8px var(--mono);padding:4px 5px;border:1px solid rgba(53,255,162,.12)}
    .project-architecture-mini b{color:var(--green);font:9px var(--mono)}
    .project-empty{border:1px dashed var(--line);padding:28px;text-align:center;color:var(--muted);font:11px var(--mono)}
    .project-modal-panel{width:min(1080px,100%)}
    .project-modal-body .project-visual{height:210px;margin:0 0 18px}
    @media(max-width:900px){.project-grid{grid-template-columns:1fr}.project-console-status{align-items:flex-start;flex-direction:column}}
    @media(max-width:620px){.project-console{padding:9px}.project-filter{font-size:8px;padding:7px 8px}.project-case-file{padding:12px}.project-modal-body .project-visual{height:175px}}

    /* Fluid full-screen sizing */
    :root{--content-max:1440px}
    .section,footer{width:min(var(--content-max),calc(100% - clamp(28px,5vw,96px)))}
    @media(min-width:1600px){.section,footer{width:min(1500px,calc(100% - 120px))}.topbar{padding-inline:clamp(32px,4vw,80px)}.project-grid{gap:22px}}
    @media(max-width:1100px){.nav{gap:14px}.topbar{gap:16px}.project-grid{gap:14px}}
    @media(max-width:760px){.section,footer{width:calc(100% - 28px)}.project-grid{grid-template-columns:1fr}.project-console-status b{margin-left:auto}.project-architecture-mini{display:none}}
    @media(max-width:470px){.section,footer{width:calc(100% - 22px)}.project-console-status{font-size:8px}.project-filter{flex:1 1 auto;text-align:center}.project-case-file h4{font-size:21px}}
    @media(prefers-reduced-motion:reduce){.project-case-file,.project-filter{transition:none}.project-visual::before,.project-visual::after{animation:none!important}}

    /* =========================================================
       FULL PORTFOLIO UPGRADE — PROFILE / INTELLIGENCE / RESPONSIVE
       ========================================================= */
    .security-profile-grid{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(300px,.75fr);gap:18px}
    .profile-dossier,.profile-facts{min-width:0}
    .dossier-top{display:flex;justify-content:space-between;align-items:flex-start;gap:20px;padding-bottom:20px;border-bottom:1px solid var(--line)}
    .dossier-kicker,.intel-kicker{font:700 10px var(--mono);color:var(--cyan);letter-spacing:.14em;margin-bottom:10px}
    .dossier-top h4{font-size:clamp(25px,3.2vw,42px);margin:0 0 8px;letter-spacing:-.03em}
    .dossier-role{margin:0;color:var(--green2);font:700 11px/1.6 var(--mono)}
    .dossier-status{border:1px solid var(--line);padding:7px 9px;color:var(--green);font:700 9px var(--mono);white-space:nowrap}
    .dossier-status i,.decision-dot{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--green);box-shadow:0 0 10px var(--green);margin-right:6px}
    .dossier-copy{margin-top:18px}.dossier-copy p{color:#b9cdc1;line-height:1.72;margin:0 0 12px}
    .focus-matrix{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-top:20px}
    .focus-matrix div{border:1px solid var(--line);padding:13px;background:rgba(53,255,162,.025)}
    .focus-matrix small{display:block;color:var(--cyan);font:9px var(--mono);margin-bottom:6px}
    .focus-matrix strong{font:700 10px var(--mono);color:var(--green2)}
    .profile-facts{padding:24px}
    .fact-row{display:flex;justify-content:space-between;gap:16px;padding:13px 0;border-bottom:1px dashed rgba(53,255,162,.14)}
    .fact-row span{color:var(--muted);font:10px var(--mono)}.fact-row strong{font:700 11px var(--mono);text-align:right}
    .fact-row .accent{color:var(--green)}
    .profile-metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:18px}
    .profile-metric{border:1px solid var(--line);padding:17px;text-align:center;background:rgba(53,255,162,.025)}
    .profile-metric strong{display:block;color:var(--green);font:800 clamp(24px,3vw,38px) var(--mono)}
    .profile-metric span{display:block;margin-top:7px;color:var(--muted);font:9px var(--mono)}
    .profile-education{margin-top:34px;padding-top:24px;border-top:1px solid var(--line)}
    .education-track{position:relative;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:18px;padding-top:8px}
    .education-track::before{content:'';position:absolute;left:7%;right:7%;top:15px;height:1px;background:linear-gradient(90deg,transparent,var(--line) 8%,var(--line) 92%,transparent);box-shadow:0 0 10px rgba(53,255,162,.08)}
    .education-node{position:relative;padding:36px 20px 20px;border:1px solid var(--line);background:linear-gradient(145deg,rgba(8,24,28,.78),rgba(4,12,16,.6));min-height:178px}
    .education-node::before{content:'';position:absolute;left:50%;top:10px;width:11px;height:11px;border-radius:50%;transform:translateX(-50%);background:var(--green);box-shadow:0 0 0 4px rgba(53,255,162,.07),0 0 18px var(--green);z-index:3}
    .education-node::after{content:'';position:absolute;left:50%;top:15px;width:1px;height:22px;transform:translateX(-50%);background:linear-gradient(var(--green),transparent);opacity:.7}
    .education-dot{display:none}
    .education-node h4{font-size:16px;line-height:1.35;margin:8px 0}.education-node p{color:var(--muted);line-height:1.6;font-size:12px}.education-node>strong{color:var(--green2);font:10px var(--mono)}

    .intel-panel,.reconstruction-panel{border:1px solid var(--line);background:linear-gradient(145deg,rgba(8,24,28,.75),rgba(4,12,16,.58));padding:24px;backdrop-filter:blur(12px)}
    .intel-description p{max-width:850px;color:#b9cdc1;line-height:1.7}
    .trajectory-flow{display:grid;grid-template-columns:1fr auto 1fr auto 1fr auto 1fr auto 1fr;align-items:center;gap:9px;margin-top:28px}
    .flow-node{min-height:78px;display:grid;place-items:center;text-align:center;padding:10px;border:1px solid var(--line);background:rgba(53,255,162,.04);color:var(--green2);font:700 11px var(--mono);box-shadow:inset 0 0 20px rgba(53,255,162,.025)}
    .flow-node small{color:var(--muted);font-size:8px}.flow-node.decision{border-color:rgba(69,215,255,.4);color:var(--cyan)}
    .trajectory-flow>b{color:var(--green);font:16px var(--mono)}
    .decision-console{display:flex;flex-wrap:wrap;gap:10px;margin-top:20px;padding-top:16px;border-top:1px dashed var(--line);color:var(--muted);font:10px var(--mono)}
    .decision-console b{color:var(--green2)}
    .reconstruction-panel{position:relative;overflow:hidden}
    .reconstruction-console{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;padding-bottom:18px;border-bottom:1px dashed rgba(53,255,162,.16);color:var(--muted);font:9px var(--mono);letter-spacing:.06em}
    .reconstruction-console div:first-child{color:var(--green2)}
    .reconstruction-console b{color:var(--green);margin:0 5px}
    .incident-track{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;padding-top:46px}
    .incident-progress{position:absolute;left:6%;right:6%;top:61px;height:2px;background:linear-gradient(90deg,var(--green),rgba(53,255,162,.18));box-shadow:0 0 12px rgba(53,255,162,.14)}
    .incident-node{position:relative;min-width:0;padding:0!important;display:block!important;opacity:1;transform:none!important;filter:none!important;transition:transform .35s ease,border-color .35s ease}
    .incident-node:hover{transform:translateY(-5px)!important}
    .incident-marker{position:relative;z-index:3;width:32px;height:32px;margin:0 auto 16px;border:1px solid var(--green);background:#061015;display:grid;place-items:center;box-shadow:0 0 18px rgba(53,255,162,.14)}
    .incident-marker::after{content:'';position:absolute;inset:-7px;border:1px solid rgba(53,255,162,.14);border-radius:50%;animation:incidentHalo 2.2s ease-out infinite}
    .incident-marker span{color:var(--green);font:700 8px var(--mono)}
    .incident-card{min-height:145px;padding:16px;border:1px solid var(--line);background:linear-gradient(145deg,rgba(8,24,28,.8),rgba(4,12,16,.62));box-shadow:inset 0 1px 0 rgba(255,255,255,.025)}
    .incident-card small{display:block;color:var(--cyan);font:700 8px var(--mono);letter-spacing:.1em;margin-bottom:9px}
    .incident-card strong{display:block;color:var(--green2);font:700 12px var(--mono);line-height:1.35}
    .incident-card p{margin:7px 0 0;color:var(--muted);line-height:1.6;font-size:11px}
    @keyframes incidentHalo{0%{opacity:.6;transform:scale(.7)}100%{opacity:0;transform:scale(1.35)}}
    .incident-node{position:relative;display:grid;grid-template-columns:48px 1fr;gap:18px;align-items:start;padding:13px 0}
    .incident-node>span{z-index:2;width:30px;height:30px;display:grid;place-items:center;border:1px solid var(--green);background:#061015;color:var(--green);font:700 9px var(--mono)}
    .incident-node strong{font:700 12px var(--mono);color:var(--green2)}.incident-node p{margin:5px 0 0;color:var(--muted);line-height:1.6;font-size:12px}

    /* Fluid screen sizing */
    .section{width:min(1400px,calc(100% - clamp(28px,5vw,96px)))}
    .project-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
    .project-case-file{min-width:0}
    .project-card-copy h4{overflow-wrap:anywhere}
    .project-architecture-mini{display:flex;flex-wrap:wrap;align-items:center;gap:5px;margin-top:14px;color:var(--muted);font:9px var(--mono)}
    .project-architecture-mini span{padding:5px 7px;border:1px solid rgba(53,255,162,.15);background:rgba(53,255,162,.025)}
    .project-architecture-mini b{color:var(--cyan)}
    .project-file-head{display:flex;justify-content:space-between;gap:10px;margin-bottom:12px;color:var(--muted);font:9px var(--mono)}
    .project-state{color:var(--green2)}.project-state i{display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--green);box-shadow:0 0 8px var(--green);margin-right:5px}
    .project-category{margin-bottom:9px;color:var(--cyan);font:9px var(--mono);letter-spacing:.08em}
    .project-console{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px;padding:12px 14px;margin-bottom:16px;border:1px solid var(--line);background:rgba(53,255,162,.025)}
    .project-console-status{font:700 10px var(--mono);color:var(--muted)}.project-console-status b{color:var(--green);margin-left:12px}
    .status-led{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--green);box-shadow:0 0 10px var(--green);margin-right:7px}
    .project-filters{display:flex;flex-wrap:wrap;gap:6px}
    .project-filter{border:1px solid var(--line);background:transparent;color:var(--muted);padding:7px 9px;font:700 9px var(--mono);cursor:pointer}
    .project-filter:hover,.project-filter.active{color:#021009;background:var(--green);border-color:var(--green)}
    .project-filter span{opacity:.7;margin-left:3px}
    .project-empty{padding:30px;text-align:center;border:1px dashed var(--line);color:var(--muted);font:11px var(--mono)}

    @media(min-width:1600px){
      .hero{grid-template-columns:minmax(0,1.4fr) minmax(390px,.6fr);gap:70px}
      .identity{max-width:500px}.photo{height:clamp(460px,58vh,680px)}
      .project-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
      .card{padding:30px}
    }
    @media(max-width:1100px){
      .nav{gap:13px}.topbar{gap:16px}.status{display:none}
      .hero{grid-template-columns:minmax(0,1fr) minmax(300px,.72fr);gap:26px}
      .project-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
      .security-profile-grid{grid-template-columns:1fr}
    }
    @media(max-width:900px){
      .topbar{height:64px}.nav{display:none}.menu{display:block}
      .nav.open{position:absolute;display:grid;top:64px;left:12px;right:12px;gap:0;padding:8px;background:rgba(4,9,13,.97);border:1px solid var(--line);box-shadow:0 20px 40px rgba(0,0,0,.35)}
      .nav.open button{text-align:left;padding:12px;border-bottom:1px solid rgba(53,255,162,.08)}
      .hero{grid-template-columns:1fr!important;padding-top:96px!important}
      .identity{justify-self:stretch;max-width:none}.photo{height:min(68vh,540px)}
      .heading{align-items:flex-start;flex-direction:column;margin-bottom:25px}
      .threat-grid{grid-template-columns:repeat(2,1fr)}
      .trajectory-flow{grid-template-columns:1fr;gap:8px}.trajectory-flow>b{transform:rotate(90deg);justify-self:center}
      .education-track{grid-template-columns:1fr}.education-track::before{display:none}
      .profile-metrics{grid-template-columns:repeat(2,1fr)}
      .project-grid{grid-template-columns:1fr}
    }
    @media(max-width:620px){
      .education-track{gap:14px;padding-top:0}
      .education-node{min-height:0;padding:30px 16px 17px}
      .education-node::before{left:18px;top:11px;transform:none}
      .education-node::after{left:23px;top:16px;transform:none;height:18px}
      .education-track::before{display:none}
      .section{width:calc(100% - 24px);padding:48px 0}
      h1{font-size:clamp(42px,13vw,66px)}
      .hero h2{font-size:14px}.lead{font-size:15px}
      .stats{grid-template-columns:repeat(2,1fr)}.stats div:nth-child(2){border-right:0}
      .stats div:nth-child(-n+2){border-bottom:1px solid var(--line)}
      .stats div:nth-child(3){border-right:1px solid var(--line)}
      .actions{display:grid;grid-template-columns:1fr}.actions .btn{width:100%}
      .focus-matrix,.profile-metrics{grid-template-columns:1fr 1fr}
      .fact-row{flex-direction:column;gap:5px}.fact-row strong{text-align:left}
      .dossier-top{flex-direction:column}.dossier-status{align-self:flex-start}
      .intel-panel,.reconstruction-panel{padding:16px}
      .incident-track{grid-template-columns:1fr 1fr;gap:12px}.incident-progress{display:none}.incident-node{padding:0!important}.incident-marker{margin-left:8px;margin-right:0}.incident-card{min-height:0}
      .incident-track{grid-template-columns:1fr}.incident-marker{margin-left:0;margin-right:auto}.reconstruction-console{flex-direction:column;gap:7px}.project-console{align-items:flex-start;flex-direction:column}
      .project-filter{font-size:8px}
      .modal-grid{grid-template-columns:1fr}.modal-block[style*="grid-column"]{grid-column:1!important}
      .project-visual{height:170px}
      .contact{grid-template-columns:1fr!important}
    }
    @media(max-width:380px){
      .section{width:calc(100% - 18px)}.focus-matrix{grid-template-columns:1fr}
      .stats strong{font-size:18px}.stats span{font-size:9px}
      .profile-metrics{grid-template-columns:1fr 1fr}
    }
    @media(max-height:600px) and (orientation:landscape){
      .hero{padding-top:84px!important}.photo{height:360px}.section{padding-block:38px}
    }
    @media(prefers-reduced-motion:reduce){
      *,*::before,*::after{scroll-behavior:auto!important;animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important}
    }
    /* Final project-grid polish after case consolidation */
    .project-grid{
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:18px;
      align-items:stretch;
    }
    .project-card{
      min-width:0;
      display:flex;
      flex-direction:column;
      min-height:0;
    }
    .project-card-copy{
      display:flex;
      flex-direction:column;
      flex:1;
    }
    .project-card-copy p{
      min-height:72px;
    }
    .project-actions{margin-top:auto;padding-top:12px}
    .project-visual{height:190px}
    @media(max-width:1050px){
      .project-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
    }
    @media(max-width:620px){
      .project-grid{grid-template-columns:1fr}
      .project-card-copy p{min-height:0}
      .project-visual{height:175px}
    }


  `;

  function html(strings, ...values) {
    return strings.reduce((out, str, i) => out + str + (values[i] ?? ''), '');
  }

  function projectVisual(index) {
    const palettes = [
      ['#35ffa2','#45d7ff','#ff6474'], // MOTAG
      ['#45d7ff','#35ffa2','#ff6474'], // phishing
      ['#b889ff','#45d7ff','#35ffa2'], // memory
      ['#45d7ff','#35ffa2','#ffbd4a'], // trajectory
      ['#ff6474','#ffbd4a','#35ffa2'], // reconstruction
      ['#35ffa2','#45d7ff','#ffbd4a']  // waste
    ];
    const [a,b,c] = palettes[index] || palettes[0];
    const id = `pv${index}`;

    const visuals = [
      `
      <div class="project-visual visual-motag">
        <svg viewBox="0 0 720 360" aria-hidden="true">
          <defs>
            <radialGradient id="${id}g"><stop offset="0" stop-color="${a}" stop-opacity=".18"/><stop offset="1" stop-color="${a}" stop-opacity="0"/></radialGradient>
            <filter id="${id}glow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>
          <circle cx="360" cy="174" r="148" fill="url(#${id}g)"/>
          <g class="motag-rings" fill="none" stroke="${a}">
            <circle cx="360" cy="174" r="122" opacity=".22"/>
            <circle cx="360" cy="174" r="88" opacity=".34"/>
            <circle cx="360" cy="174" r="52" opacity=".5"/>
            <path d="M360 34V314M220 174H500" stroke-dasharray="4 12" opacity=".35"/>
          </g>
          <path d="M360 174L360 48" stroke="${b}" stroke-width="3" class="motag-sweep"/>
          <path d="M62 104C148 72 188 142 264 128S332 86 386 174S506 258 658 98" fill="none" stroke="${b}" stroke-width="2" stroke-dasharray="9 11" class="data-route"/>
          <g class="motag-packets" fill="${c}">
            <circle cx="154" cy="103" r="6"/><circle cx="268" cy="128" r="6"/><circle cx="504" cy="255" r="6"/><circle cx="618" cy="122" r="6"/>
          </g>
          <g filter="url(#${id}glow)">
            <path d="M360 120l38 17v30c0 28-17 48-38 60-21-12-38-32-38-60v-30z" fill="#061015" stroke="${a}" stroke-width="3"/>
            <path d="M341 168l13 13 25-30" fill="none" stroke="${a}" stroke-width="4"/>
          </g>
          <text x="34" y="326" fill="${a}" font-family="monospace" font-size="12" letter-spacing="3">NETWORK TRAFFIC // ANOMALY DETECTION // DYNAMIC DEFENSE</text>
        </svg>
        <span class="project-visual-label">LIVE TRAFFIC DEFENSE</span>
      </div>`,

      `
      <div class="project-visual visual-phishing">
        <svg viewBox="0 0 720 360" aria-hidden="true">
          <rect x="54" y="54" width="612" height="248" rx="10" fill="#061015" stroke="${a}" stroke-opacity=".48"/>
          <path d="M54 90H666" stroke="${a}" stroke-opacity=".22"/>
          <circle cx="80" cy="72" r="4" fill="${c}"/><circle cx="96" cy="72" r="4" fill="${b}"/><circle cx="112" cy="72" r="4" fill="${a}"/>
          <rect x="92" y="116" width="430" height="48" rx="6" fill="#091a20" stroke="${b}" stroke-opacity=".7"/>
          <text x="112" y="147" fill="#c5d6ce" font-family="monospace" font-size="16">https://secure-login.example</text>
          <g class="phish-scan-line"><rect x="92" y="116" width="430" height="2" fill="${a}"/></g>
          <g class="phish-lens">
            <circle cx="565" cy="140" r="39" fill="#061015" stroke="${a}" stroke-width="3"/>
            <circle cx="565" cy="140" r="19" fill="none" stroke="${b}" stroke-width="2"/>
            <path d="M592 168l32 32" stroke="${a}" stroke-width="7" stroke-linecap="round"/>
          </g>
          <rect x="92" y="190" width="520" height="48" rx="6" fill="#07171b" stroke="${c}" stroke-opacity=".7"/>
          <text x="116" y="220" fill="${c}" font-family="monospace" font-size="14" font-weight="bold">THREAT SIGNAL // PHISHING</text>
          <g class="confidence-track">
            <rect x="92" y="258" width="520" height="4" fill="${a}" opacity=".14"/>
            <rect x="92" y="258" width="410" height="4" fill="${a}"/>
          </g>
          <text x="92" y="326" fill="${a}" font-family="monospace" font-size="12" letter-spacing="3">URL INPUT → TF-IDF → CLASSIFIER → RISK RESULT</text>
        </svg>
        <span class="project-visual-label">PHISHING CLASSIFIER</span>
      </div>`,

      `
      <div class="project-visual visual-memory">
        <svg viewBox="0 0 720 360" aria-hidden="true">
          <g class="memory-core">
            <ellipse cx="360" cy="174" rx="106" ry="72" fill="#061015" stroke="${a}" stroke-width="3"/>
            <path d="M278 177c28-72 57 38 84-31s50 77 78 4 42 49 0 69c-50 23-111 18-162-42z" fill="none" stroke="${b}" stroke-width="4"/>
          </g>
          <g class="memory-grid" stroke="${a}" opacity=".16">
            <path d="M70 72H650M70 286H650M92 100V258M628 100V258"/>
          </g>
          <g class="memory-artifacts" fill="#07171b" stroke="${a}" stroke-opacity=".6">
            <rect x="54" y="84" width="164" height="44" rx="6"/>
            <rect x="502" y="84" width="164" height="44" rx="6"/>
            <rect x="48" y="238" width="178" height="44" rx="6"/>
            <rect x="496" y="238" width="178" height="44" rx="6"/>
          </g>
          <g font-family="monospace" font-size="11" fill="#b9cdc1">
            <text x="72" y="111">process.exe</text><text x="522" y="111">network.dll</text>
            <text x="68" y="265">LSASS / handles</text><text x="516" y="265">artifact.bin</text>
          </g>
          <g class="forensic-links" stroke="${b}" stroke-width="2" stroke-dasharray="6 8">
            <path d="M218 106L292 148"/><path d="M502 106L428 148"/>
            <path d="M226 260L296 205"/><path d="M496 260L424 205"/>
          </g>
          <g class="evidence-points" fill="${c}">
            <circle cx="292" cy="146" r="4"/><circle cx="428" cy="204" r="4"/><circle cx="318" cy="224" r="4"/>
          </g>
          <text x="50" y="326" fill="${a}" font-family="monospace" font-size="12" letter-spacing="3">VOLATILE MEMORY // ARTIFACTS // PROCESS & NETWORK ANALYSIS</text>
        </svg>
        <span class="project-visual-label">MEMORY ARTIFACT ANALYSIS</span>
      </div>`,

      `
      <div class="project-visual visual-trajectory">
        <svg viewBox="0 0 720 360" aria-hidden="true">
          <path d="M56 176H664" stroke="${a}" stroke-opacity=".12"/>
          <g class="trajectory-nodes">
            <rect x="42" y="132" width="116" height="78" rx="8" fill="#061015" stroke="${b}" stroke-width="2"/>
            <rect x="198" y="116" width="126" height="110" rx="10" fill="#061015" stroke="${a}" stroke-width="2"/>
            <rect x="364" y="132" width="116" height="78" rx="8" fill="#061015" stroke="${b}" stroke-width="2"/>
            <rect x="522" y="132" width="156" height="78" rx="8" fill="#061015" stroke="${c}" stroke-width="2"/>
          </g>
          <g font-family="monospace" text-anchor="middle">
            <text x="100" y="166" fill="${b}" font-size="12">AGENT REQUEST</text>
            <text x="261" y="166" fill="${a}" font-size="12">POLICY ENGINE</text>
            <text x="422" y="166" fill="${b}" font-size="12">SCOPE CHECK</text>
            <text x="600" y="166" fill="${c}" font-size="12">ALLOW / BLOCK</text>
          </g>
          <g class="trajectory-links" fill="none" stroke="${a}" stroke-width="2" stroke-dasharray="7 9">
            <path d="M158 176H198"/><path d="M324 176H364"/><path d="M480 176H522"/>
          </g>
          <g class="trajectory-packets" fill="${a}">
            <circle cx="160" cy="176" r="4"/><circle cx="326" cy="176" r="4"/><circle cx="482" cy="176" r="4"/>
          </g>
          <path d="M260 226C310 292 430 292 600 226" fill="none" stroke="${b}" stroke-width="2" stroke-dasharray="5 9" class="audit-route"/>
          <text x="52" y="326" fill="${a}" font-family="monospace" font-size="12" letter-spacing="3">AGENT REQUEST → POLICY → SCOPE → DECISION → AUDIT</text>
        </svg>
        <span class="project-visual-label">AGENT POLICY ENFORCEMENT</span>
      </div>`,

      `
      <div class="project-visual visual-reconstruction">
        <svg viewBox="0 0 720 360" aria-hidden="true">
          <defs>
            <linearGradient id="${id}line" x1="0" x2="1"><stop offset="0" stop-color="${a}" stop-opacity=".2"/><stop offset=".5" stop-color="${b}"/><stop offset="1" stop-color="${a}" stop-opacity=".2"/></linearGradient>
          </defs>
          <path d="M72 172H648" stroke="url(#${id}line)" stroke-width="3"/>
          ${[
            [92,'10:24','ACCESS',c],
            [250,'10:28','LOGIN FAIL',b],
            [410,'10:32','CORRELATE',a],
            [570,'11:02','THREAT', '#b889ff']
          ].map(([x,time,label,col],i)=>`
            <g class="incident-node-visual" style="--delay:${i*.28}s">
              <circle cx="${x}" cy="172" r="28" fill="#061015" stroke="${col}" stroke-width="3"/>
              <circle cx="${x}" cy="172" r="8" fill="${col}"/>
              <circle cx="${x}" cy="172" r="38" fill="none" stroke="${col}" stroke-opacity=".18" class="incident-ring"/>
              <text x="${x}" y="112" text-anchor="middle" fill="${col}" font-family="monospace" font-size="11">${time}</text>
              <text x="${x}" y="230" text-anchor="middle" fill="#b9cdc1" font-family="monospace" font-size="10">${label}</text>
            </g>
          `).join('')}
          <g class="event-feed" font-family="monospace" font-size="10">
            <text x="70" y="72" fill="${a}">WINDOWS EVENT LOGS</text>
            <text x="292" y="72" fill="${b}">→ CORRELATION</text>
            <text x="500" y="72" fill="${c}">→ INCIDENT VIEW</text>
          </g>
          <text x="52" y="326" fill="${a}" font-family="monospace" font-size="12" letter-spacing="3">EVIDENCE → CORRELATION → TIMELINE → INVESTIGATION</text>
        </svg>
        <span class="project-visual-label">INCIDENT TIMELINE RECONSTRUCTION</span>
      </div>`,

      `
      <div class="project-visual visual-waste">
        <svg viewBox="0 0 720 360" aria-hidden="true">
          <path d="M72 248H648" stroke="${a}" stroke-opacity=".2" stroke-width="2"/>
          <g class="waste-conveyor">
            <rect x="72" y="228" width="576" height="34" rx="17" fill="#061015" stroke="${a}" stroke-opacity=".45"/>
            ${[120,200,280,360,440,520,600].map(x=>`<circle cx="${x}" cy="245" r="7" fill="none" stroke="${b}" stroke-opacity=".55"/>`).join('')}
          </g>
          <g class="waste-item">
            <rect x="330" y="174" width="60" height="48" rx="8" fill="#07171b" stroke="${b}" stroke-width="2"/>
            <path d="M350 190h20M360 180v28" stroke="${b}" stroke-width="2"/>
          </g>
          <g class="sensor-beams" stroke="${c}" stroke-width="2" stroke-dasharray="4 7">
            <path d="M160 112V228"/><path d="M360 112V174"/><path d="M560 112V228"/>
          </g>
          <g font-family="monospace" text-anchor="middle">
            <text x="160" y="96" fill="${a}" font-size="12">IR SENSOR</text>
            <text x="360" y="96" fill="${b}" font-size="12">ARDUINO</text>
            <text x="560" y="96" fill="${c}" font-size="12">MOISTURE / METAL</text>
          </g>
          <g class="waste-routing">
            <path d="M360 222L190 292" stroke="${b}" stroke-width="2" stroke-dasharray="6 8"/>
            <path d="M360 222L360 292" stroke="${a}" stroke-width="2" stroke-dasharray="6 8"/>
            <path d="M360 222L530 292" stroke="${c}" stroke-width="2" stroke-dasharray="6 8"/>
          </g>
          <text x="190" y="316" text-anchor="middle" fill="${b}" font-family="monospace" font-size="10">METAL</text>
          <text x="360" y="316" text-anchor="middle" fill="${a}" font-family="monospace" font-size="10">WET</text>
          <text x="530" y="316" text-anchor="middle" fill="${c}" font-family="monospace" font-size="10">DRY</text>
        </svg>
        <span class="project-visual-label">SMART WASTE SEGREGATION</span>
      </div>`
    ];

    return visuals[index] || visuals[0];
  }

    const PROJECT_FILTERS = {
    'MOTAG — Intelligent DDoS Detection and Mitigation System':['NETWORK SECURITY','AUTOMATION'],
    'AI-Based Phishing Website Detection':['AI SECURITY'],
    'Memory Forensics: Investigating Volatile Memory for Cyber Threats':['DIGITAL FORENSICS'],
    'Trajectory Firewall — Autonomous AI Security Prototype':['AI SECURITY','AUTOMATION'],
    'Cyber Reconstruction Engine':['DIGITAL FORENSICS'],
    'Waste Segregation using Arduino':['EMBEDDED SECURITY','AUTOMATION']
  };

  function projectCategory(project){
    return PROJECT_FILTERS[project.title] || [];
  }

  function projectCardNumber(index){
    return String(index + 1).padStart(2,'0');
  }

  function projectCards(filter='ALL') {
    return DATA.projects.map((project, index) => {
      const categories = projectCategory(project);
      if(filter !== 'ALL' && !categories.includes(filter)) return '';
      return html`
        <article class="card project-card project-case-file" data-project-index="${index}" data-categories="${categories.join('|')}">
          <div class="project-file-head">
            <span>CASE-${projectCardNumber(index)}</span>
            <span class="project-state live"><i></i> CASE FILE</span>
          </div>
          ${projectVisual(index)}
          <div class="project-card-copy">
            <div class="project-category">${categories.join(' / ') || 'SECURITY PROJECT'}</div>
            <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <div class="project-architecture-mini">
              ${(project.architecture || []).slice(0,4).map((step,i)=>html`<span>${step}</span>${i < Math.min((project.architecture||[]).length,4)-1 ? '<b>→</b>' : ''}`).join('')}
            </div>
            <div class="project-actions">
              <button class="project-details-btn" data-project-index="${index}">VIEW CASE STUDY</button>
              ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener">GITHUB</a>` : ''}
              ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener">LIVE DEMO</a>` : ''}
            </div>
          </div>
        </article>
      `;
    }).join('');
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
      <div class="info-row experience-row">
        <small>${item.organization}</small>
        <strong>${item.title}</strong>
        <p>${item.detail}</p>
        ${item.projectWork?.length ? html`
          <div class="experience-projects">
            <span class="experience-projects-label">PROJECT WORK</span>
            ${item.projectWork.map(project => html`<span class="experience-project">${project}</span>`).join('')}
          </div>
        ` : ''}
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

            <div class="portfolio-search" id="portfolioSearch" aria-hidden="true">
        <div class="search-shell">
          <div class="search-head">
            <input id="portfolioSearchInput" type="search" placeholder="Search projects, skills, patents, publications...">
            <button id="portfolioSearchClose">CLOSE</button>
          </div>
          <div class="search-results" id="portfolioSearchResults"></div>
        </div>
      </div>

      <div class="session-summary" id="sessionSummary">
        <h4>SESSION SUMMARY</h4>
        <div class="session-summary-grid">
          <span>Projects viewed</span><strong id="sessionProjects">0</strong>
          <span>Commands executed</span><strong id="sessionCommands">0</strong>
          <span>Achievements unlocked</span><strong id="sessionAchievements">0</strong>
          <span>Clearance reached</span><strong id="sessionClearance">0%</strong>
        </div>
        <button id="sessionSummaryClose">CLOSE</button>
      </div>

            <div class="ctf-panel" id="ctfPanel" aria-hidden="true">
        <div class="ctf-shell">
          <div class="ctf-head">
            <span>HIDDEN CTF // SECURITY EXPLORER</span>
            <button id="ctfClose">CLOSE</button>
          </div>
          <div class="ctf-body">
            <div class="ctf-status">
              <div>STAGE<strong id="ctfStage">1 / 4</strong></div>
              <div>SCORE<strong id="ctfScore">0</strong></div>
              <div>STATUS<strong id="ctfStatus">ACTIVE</strong></div>
            </div>
            <div class="ctf-console" id="ctfConsole"></div>
            <form class="ctf-input-row" id="ctfForm">
              <span>visitor@ctf:~$</span>
              <input id="ctfInput" autocomplete="off" spellcheck="false" placeholder="type a command...">
              <button type="submit">RUN</button>
            </form>
            <div class="ctf-hint">Hint: start with <strong>ls hidden</strong>. This challenge is browser-only and does not access your device.</div>
            <div class="ctf-flag" id="ctfFlag" hidden></div>
          </div>
        </div>
      </div>

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


      <div class="investigation-overlay" id="investigationOverlay" aria-hidden="true">
        <div class="investigation-shell">
          <div class="investigation-head">
            <span>INCIDENT RESPONSE // INVESTIGATION MODE // BROWSER SIMULATION</span>
            <button id="investigationClose">CLOSE [ESC]</button>
          </div>
          <div class="investigation-body">
            <div class="investigation-grid">
              <div class="investigation-evidence">
                <h4>EVIDENCE BOARD</h4>
                <div class="evidence-item"><span>AUTH LOG</span><b>LOGIN_FAILURE</b></div>
                <div class="evidence-item"><span>PROCESS</span><b>invoice.pdf.exe</b></div>
                <div class="evidence-item"><span>EVENT SOURCE</span><b>WINDOWS SECURITY</b></div>
                <div class="evidence-item"><span>NETWORK IOC</span><b>185.42.19.77:4444</b></div>
                <div class="evidence-item"><span>CASE</span><b>CASE-2026-001</b></div>
              </div>
              <div class="investigation-log">
                <h4>RECONSTRUCTION STREAM</h4>
                <div class="investigation-lines" id="investigationLines"></div>
                <div class="investigation-progress"><span id="investigationProgress"></span></div>
                <div class="investigation-footer">
                  <span id="investigationStatus">READY // ANALYSIS NOT STARTED</span>
                  <button id="investigationRun">START ANALYSIS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="cursor-scanner" id="cursorScanner" aria-hidden="true"></div>

      <div class="project-modal" id="projectModal" aria-hidden="true">
        <div class="project-modal-panel">
          <div class="project-modal-head">
            <span>PROJECT CASE FILE // <b id="projectModalCaseId">CASE</b></span>
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
        <div class="mode-switch" id="modeSwitch">
          <button id="cyberModeButton" class="active">CYBER MODE</button>
          <button id="professionalModeButton">PROFESSIONAL MODE</button>
        </div>
        <nav class="nav" id="nav">
          <button data-target="home">HOME</button>
          <button data-target="projects">PROJECTS</button>
          <button data-target="about">ABOUT</button>
          <button data-target="experience">EXPERIENCE</button>
          <button data-target="career-journey">JOURNEY</button>
          <button data-target="capabilities">CAPABILITIES</button>
          <button data-target="credentials">CREDENTIALS</button>
          <button data-target="terminal">TERMINAL</button>
          <button data-target="labs">LABS</button>
          <button data-target="writeups">WRITE-UPS</button>
          <button data-target="contact">CONTACT</button>
          <button id="portfolioSearchButton">SEARCH</button>
        </nav>
        <div class="status"><span class="dot"></span>SYSTEM ONLINE</div>
      </header>

      <main>
        <section class="section hero" id="home">
          <div class="hero-network"><canvas id="heroNetworkCanvas"></canvas></div>
          <div>
            <div class="eyebrow">root@portfolio:~$ ./initialize_profile.sh</div>
          <div class="cyber-equalizer" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
            <h1><small>K</small>HARSHAVARDHAN</h1>
            <h2>CYBER SECURITY ANALYST <span>//</span> RESEARCHER <span>//</span> SECURITY BUILDER</h2>

<div class="hero-focus">
  <span>AI SECURITY</span>
  <span>DIGITAL FORENSICS</span>
  <span>NETWORK DEFENSE</span>
  <span>EMBEDDED SECURITY</span>
</div>

<p class="lead">${DATA.about.join(' ')}</p>
            <div class="actions">
  <button class="btn primary" data-target="projects">&gt; VIEW PROJECTS</button>
  <button class="btn" data-target="contact">CONTACT ME</button>
  <button class="btn" id="resumeBtn">VIEW RESUME</button>
  <div class="resume-counter">
    RESUME OPENED ON THIS DEVICE: <span id="resumeCount">0</span>
  </div>
  <button class="btn" id="simulationBtn">RUN SECURITY SIMULATION</button>
</div>
            <div class="stats">
              <div><strong>${DATA.patents.length}</strong><span>Patent Applications</span></div>
              <div><strong>${DATA.publications.length}</strong><span>Research Papers</span></div>
              <div><strong>${DATA.projects.length}+</strong><span>Technical Projects</span></div>
              <div><strong>${DATA.profile.graduation}</strong><span>Graduation</span></div>
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

        <section class="section recruiter-profile-section" id="recruiter-profile">
          <div class="recruiter-profile-card">
            <div class="recruiter-profile-main">
              <div class="label">RECRUITER QUICK PROFILE</div>
              <h3>Cyber Security Analyst</h3>
              <p class="recruiter-role">${DATA.profile.role}</p>
              <p class="recruiter-summary">Security-focused analyst and builder working across network defense, digital forensics, AI security and embedded security.</p>
              <div class="recruiter-specializations">${['NETWORK DEFENSE','DIGITAL FORENSICS','AI SECURITY','EMBEDDED SECURITY'].map(item=>`<span>${item}</span>`).join('')}</div>
              <div class="recruiter-actions">
                <button class="btn primary" data-target="contact">CONTACT</button>
                <button class="btn" id="recruiterResumeBtn">VIEW RESUME</button>
                <a class="btn" href="${DATA.profile.linkedin}" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
              </div>
            </div>
            <div class="recruiter-facts">
              <div><small>EDUCATION</small><strong>B.Tech CSE — Cyber Security</strong><span>VNR VJIET</span></div>
              <div><small>CGPA</small><strong>${DATA.profile.cgpa}</strong><span>Graduation ${DATA.profile.graduation}</span></div>
              <div><small>CASE FILES</small><strong>${DATA.projects.length}</strong><span>Technical Projects</span></div>
              <div><small>RESEARCH</small><strong>${DATA.publications.length} / ${DATA.patents.length}</strong><span>Publications / Patents</span></div>
            </div>
          </div>
        </section>

        <section class="section projects-section" id="projects">
          <div class="heading">
            <div><div class="label">03 // PROJECTS</div><h3>Selected cyber operations</h3></div>
            <div class="mono">[ mission_data.loaded = true ]</div>
          </div>
          <div class="project-console">
            <div class="project-console-status"><span class="status-led"></span> CASE DATABASE ONLINE <b id="projectCountLabel">${DATA.projects.length} CASE FILES</b></div>
            <div class="project-filters" id="projectFilters">
              <button class="project-filter active" data-filter="ALL">ALL <span>${DATA.projects.length}</span></button>
              <button class="project-filter" data-filter="NETWORK SECURITY">NETWORK SECURITY</button>
              <button class="project-filter" data-filter="AI SECURITY">AI SECURITY</button>
              <button class="project-filter" data-filter="DIGITAL FORENSICS">DIGITAL FORENSICS</button>
              <button class="project-filter" data-filter="EMBEDDED SECURITY">EMBEDDED SECURITY</button>
              <button class="project-filter" data-filter="AUTOMATION">AUTOMATION</button>
            </div>
          </div>
          <div class="project-grid" id="projectGrid">${projectCards()}</div>
          <div class="project-empty" id="projectEmpty" hidden>NO CASE FILES MATCH THIS FILTER.</div>
        </section>


        <section class="section security-profile-section" id="about">
          <div class="heading">
            <div><div class="label">04 // SECURITY PROFILE</div><h3>Analyst dossier</h3></div>
            <div class="mono">[ profile.access = verified ]</div>
          </div>

          <div class="security-profile-grid">
            <div class="card profile-dossier reveal-item">
              <div class="dossier-top">
                <div>
                  <div class="dossier-kicker">IDENTITY RECORD</div>
                  <h4>${DATA.profile.name}</h4>
                  <p class="dossier-role">CYBER SECURITY ANALYST // RESEARCHER // BUILDER</p>
                </div>
                <div class="dossier-status"><i></i> ACTIVE</div>
              </div>
              <div class="dossier-copy">
                ${DATA.about.map(p => `<p>${p}</p>`).join('')}
              </div>
              <div class="focus-matrix">
                ${['NETWORK DEFENSE','DIGITAL FORENSICS','AI SECURITY','EMBEDDED SECURITY'].map((item,i)=>`<div><small>0${i+1}</small><strong>${item}</strong></div>`).join('')}
              </div>
            </div>

            <div class="card profile-facts reveal-item">
              <div class="dossier-kicker">SYSTEM FACTS</div>
              <div class="fact-row"><span>ROLE</span><strong>${DATA.profile.role.split(' / ')[0]}</strong></div>
              <div class="fact-row"><span>EDUCATION</span><strong>B.Tech CSE — Cyber Security</strong></div>
              <div class="fact-row"><span>INSTITUTE</span><strong>VNR VJIET</strong></div>
              <div class="fact-row"><span>CGPA</span><strong>${DATA.profile.cgpa}</strong></div>
              <div class="fact-row"><span>LOCATION</span><strong>HYDERABAD, INDIA</strong></div>
              <div class="fact-row"><span>STATUS</span><strong class="accent">WORKING AT SSEV SOFTSOLS</strong></div>
            </div>
          </div>

          <div class="profile-metrics">
            <div class="profile-metric"><strong>${DATA.projects.length}</strong><span>PROJECT CASE FILES</span></div>
            <div class="profile-metric"><strong>${DATA.certifications.length}</strong><span>CERTIFICATIONS</span></div>
            <div class="profile-metric"><strong>${DATA.publications.length}</strong><span>PUBLICATIONS</span></div>
            <div class="profile-metric"><strong>${DATA.patents.length}</strong><span>PATENTS</span></div>
          </div>

          <div class="profile-education">
            <div class="dossier-kicker">EDUCATION TIMELINE</div>
            <div class="education-track">
              ${DATA.education.map((item,i)=>`<article class="education-node reveal-item"><div class="education-dot">${String(i+1).padStart(2,'0')}</div><div class="timeline-year">${item.period}</div><h4>${item.institution}</h4><p>${item.detail}</p><strong>${item.score}</strong></article>`).join('')}
            </div>
          </div>
        </section>

        <section class="section" id="experience">
          <div class="heading">
            <div><div class="label">05 // EXPERIENCE</div><h3>Professional experience</h3></div>
            <div class="mono">[ work_history = verified ]</div>
          </div>
          <div class="experience-stack">${experienceRows()}</div>
        </section>

        <section class="section career-journey-section" id="career-journey">
          <div class="heading">
            <div><div class="label">06 // CAREER JOURNEY</div><h3>Career and security journey</h3></div>
            <div class="mono">[ learning // research // growth ]</div>
          </div>
          <div class="journey-intro">
            <div>
              <div class="dossier-kicker">FROM FOUNDATION TO INDUSTRY</div>
              <p>This timeline separates academic development, research milestones and industry progression from formal employment history.</p>
            </div>
            <div class="journey-status"><span></span> PROGRESSION TRACKED // 2023–2026</div>
          </div>
          <div class="cyber-timeline" id="cyberTimeline">
            <article class="timeline-item"><div class="timeline-index">01</div><div class="timeline-year">2023</div><div class="timeline-title">Cybersecurity Foundation</div><div class="timeline-copy">Built practical experience in ethical hacking, network analysis, web security and defensive tools.</div></article>
            <article class="timeline-item"><div class="timeline-index">02</div><div class="timeline-year">2024</div><div class="timeline-title">Research and Project Development</div><div class="timeline-copy">Worked on phishing detection, memory forensics, vulnerability scanning and cybersecurity research.</div></article>
            <article class="timeline-item"><div class="timeline-index">03</div><div class="timeline-year">2025</div><div class="timeline-title">Publications and Patent Work</div><div class="timeline-copy">Advanced work in DDoS mitigation, moving target defense, ChaCha20 and AI-assisted threat detection.</div></article>
            <article class="timeline-item"><div class="timeline-index">04</div><div class="timeline-year">2026</div><div class="timeline-title">Graduation and Industry Role</div><div class="timeline-copy">Completing B.Tech CSE Cyber Security while working as a Cyber Security Analyst at SSEV SOFTSOLS.</div></article>
          </div>
        </section>

        <section class="section capability-section" id="capabilities">
          <div class="heading">
            <div><div class="label">07 // SECURITY CAPABILITIES</div><h3>Security capability matrix</h3></div>
            <div class="mono">[ domain → evidence → case files ]</div>
          </div>
          <div class="capability-console">
            <div class="capability-sidebar">
              <div class="dossier-kicker">SELECT A DOMAIN</div>
              <button class="capability-tab active" data-capability="network">
                <span><b>01</b> NETWORK DEFENSE</span><i>●</i>
              </button>
              <button class="capability-tab" data-capability="ai">
                <span><b>02</b> AI SECURITY</span><i>●</i>
              </button>
              <button class="capability-tab" data-capability="forensics">
                <span><b>03</b> DIGITAL FORENSICS</span><i>●</i>
              </button>
              <button class="capability-tab" data-capability="embedded">
                <span><b>04</b> EMBEDDED SECURITY</span><i>●</i>
              </button>
              <div class="capability-note">Interactive portfolio map. Selecting a domain reveals the related practical work and evidence trail.</div>
            </div>
            <div class="capability-output" id="capabilityOutput"></div>
          </div>
        </section>

        <section class="section" id="credentials">
          <div class="heading">
            <div><div class="label">08 // CREDENTIALS</div><h3>Research and credentials</h3></div>
            <div class="mono">[ publications // patents // certifications ]</div>
          </div>
          <div class="credential-stack">
            <div class="credential-block"><div class="label">PUBLICATIONS</div><div class="info-list">${publicationRows()}</div></div>
            <div class="credential-block"><div class="label">PATENTS</div><div class="info-list">${patentRows()}</div></div>
            <div class="credential-block"><div class="label">CERTIFICATIONS</div><div class="info-list">${DATA.certifications.map((item,i)=>`<div class="info-row"><small>CERT-${String(i+1).padStart(2,'0')}</small><strong>${item}</strong></div>`).join('')}</div></div>
          </div>
          <div class="credential-matrix">
            <div class="credential-matrix-head">
              <div><div class="dossier-kicker">CREDENTIAL MATRIX</div><h4>Certification ecosystem</h4></div>
              <small>${DATA.certifications.length} CREDENTIAL RECORDS</small>
            </div>
            <div class="credential-provider-grid">
              ${[
                ['GOOGLE','Professional Cyber Security Course'],
                ['MICROSOFT','Industrial Training'],
                ['EC-COUNCIL','Cloud Computing / CEH'],
                ['CISCO','Introduction to Cybersecurity'],
                ['TATA','Cyber Suraksha']
              ].map(([provider,detail])=>{
                const count=DATA.certifications.filter(c=>c.toUpperCase().includes(provider)).length;
                return `<div class="credential-provider"><strong>${count}</strong><span>${provider}</span><small>${detail}</small></div>`;
              }).join('')}
            </div>
          </div>
        </section>

        <section class="section profile-details-section" id="profile-details">
          <div class="heading">
            <div><div class="label">09 // PERSONAL PROFILE</div><h3>Leadership and beyond</h3></div>
            <div class="mono">[ leadership // strengths // hobbies ]</div>
          </div>
          <div class="grid2 profile-details-grid">
            <div class="card">
              <div class="dossier-kicker">LEADERSHIP</div>
              <div class="info-list">
                ${DATA.leadership.map((item,i)=>`<div class="info-row"><small>LEAD-${String(i+1).padStart(2,'0')}</small><strong>${item}</strong></div>`).join('')}
              </div>
            </div>
            <div class="card">
              <div class="dossier-kicker">STRENGTHS</div>
              <div class="skills">
                ${DATA.strengths.map(item=>`<span>${item}</span>`).join('')}
              </div>
              <div class="dossier-kicker" style="margin-top:28px">HOBBIES</div>
              <div class="info-list">
                ${DATA.hobbies.map((item,i)=>`<div class="info-row"><small>HOBBY-${String(i+1).padStart(2,'0')}</small><strong>${item}</strong></div>`).join('')}
              </div>
            </div>
          </div>
        </section>

        <section class="section" id="skills">
          <div class="heading">
            <div><div class="label">10 // SKILLS</div><h3>Technical capabilities</h3></div>
          </div>
          <div class="skills">${skillTags()}</div><div class="skill-detail" id="skillDetail"></div>
          <div class="skill-project-map" id="skillProjectMap">
            <div class="skill-map-list" id="skillMapList"></div>
            <div class="skill-map-output" id="skillMapOutput">
              <h4>SELECT A SKILL</h4>
              <div>Choose a skill to see the related projects and practical applications.</div>
            </div>
          </div>
        </section>


        <section class="section" id="threat-dashboard">
          <div class="heading">
            <div><div class="label">11 // THREAT INTELLIGENCE</div><h3>Security operations dashboard</h3></div>
            <div class="mono">[ monitoring = simulated ]</div>
          </div>
          <div class="soc-console">
            <div class="soc-header"><div><span class="status-led"></span> SECURITY CONTROL PLANE</div><span class="soc-simulated">BROWSER-ONLY STATUS DISPLAY</span></div>
            <div class="soc-grid">
              <article class="soc-module"><small>NETWORK MONITOR</small><strong>ACTIVE</strong><span>Traffic visibility and packet analysis</span><i></i></article>
              <article class="soc-module"><small>THREAT DETECTION</small><strong>ACTIVE</strong><span>Anomaly and malicious-activity analysis</span><i></i></article>
              <article class="soc-module"><small>FORENSICS ENGINE</small><strong>READY</strong><span>Memory and event evidence workflows</span><i></i></article>
              <article class="soc-module"><small>AI SECURITY</small><strong>ACTIVE</strong><span>Phishing and agent-policy controls</span><i></i></article>
              <article class="soc-module"><small>EMBEDDED SECURITY</small><strong>ACTIVE</strong><span>Security-focused device protection</span><i></i></article>
              <article class="soc-module"><small>AUDIT TRAIL</small><strong>LOGGING</strong><span>Project and terminal interaction events</span><i></i></article>
            </div>
            <div class="soc-feed" id="socFeed"></div>
          </div>
          <div class="simulated-label">All dashboard values and status indicators are portfolio demonstrations, not live production telemetry.</div>
        </section>

        <section class="section" id="terminal">
          <div class="heading">
            <div><div class="label">12 // INTERACTIVE TERMINAL</div><h3>Query the complete profile</h3></div>
            <div class="mono">Type help to begin</div>
          </div>

          <div class="terminal" id="terminalBox">
            <div class="termbar">
              <span>harsha@cyber-portfolio: ~</span>
              <div class="termbar-actions">
                <span class="terminal-health"><i></i> SHELL ONLINE</span>
                <button class="stop-command" id="stopCommandBtn">STOP</button>
                <button id="clearBtn">CLEAR</button>
              </div>
            </div>
            <div class="terminal-health-strip" aria-label="Terminal health status">
              <span><b>01</b> SHELL <em>READY</em></span>
              <span><b>02</b> FILESYSTEM <em>MOUNTED</em></span>
              <span><b>03</b> COMMAND ENGINE <em>READY</em></span>
              <span><b>04</b> EXTERNAL ACCESS <em>NONE</em></span>
            </div>
            <div class="output" id="output"></div>
            <div class="terminal-startup" id="terminalStartup" aria-live="polite"></div>
            <form class="inputrow" id="terminalForm">
              <span class="prompt">harsha@portfolio:~$</span>
              <input id="terminalInput" autocomplete="off" spellcheck="false" placeholder="type a command...">
            </form>
            <div class="suggestions" id="commandSuggestions"></div>
          </div>

          <div class="hints" id="commandDirectory">
            <div class="command-directory-title">
              <span>AVAILABLE TERMINAL COMMANDS</span>
              <span>Click any command to run it</span>
            </div>

            <div class="command-group">
              <h4>PROFILE</h4>
              <div class="command-buttons">
                ${['help','whoami','whoami --visitor','profile','scan portfolio','matrix','investigate','about','education','skills','projects','publications','patents','experience','certificates','leadership','strengths','hobbies','contact','resume','all'].map(cmd => `<button data-command="${cmd}">${cmd}</button>`).join('')}
              </div>
              <small>View portfolio information, resume, contact details and complete profile data.</small>
            </div>

            <div class="command-group">
              <h4>FILESYSTEM</h4>
              <div class="command-buttons">
                ${['pwd','ls','tree','cd projects','cd certificates','cd evidence','cd ..','cat profile.txt','cat security-map.txt','cat skills.txt','cat contact.txt','cat publications.txt','cat patents.txt','cat experience.txt','cat projects/motag.txt','cat projects/phishing.txt','cat projects/forensics.txt','cat projects/trajectory-firewall.txt','cat projects/cyber-reconstruction.txt','cat projects/waste-iot.txt','cat certificates/certificates.txt'].map(cmd => `<button data-command="${cmd}">${cmd}</button>`).join('')}
              </div>
              <small>Explore the portfolio using the simulated Linux-style filesystem.</small>
            </div>

            <div class="command-group">
              <h4>PROJECTS</h4>
              <div class="command-buttons">
                ${['open motag','open phishing','open forensics','open trajectory-firewall','open cyber-reconstruction','open waste-iot','project','project motag','project phishing','project forensics','project trajectory-firewall','project cyber-reconstruction','project waste'].map(cmd => `<button data-command="${cmd}">${cmd}</button>`).join('')}
              </div>
              <small>Open full case studies and project-specific terminal summaries.</small>
            </div>

            <div class="command-group">
              <h4>SECURITY MISSIONS</h4>
              <div class="command-buttons">
                ${['mission','ls evidence','cat access.log','cat suspicious_process.txt','cat hash.txt','submit invoice.pdf.exe','ctf','play ctf','simulation'].map(cmd => `<button data-command="${cmd}">${cmd}</button>`).join('')}
              </div>
              <small>Start the incident mission, inspect evidence, launch the hidden CTF or replay the simulation.</small>
            </div>

            <div class="command-group">
              <h4>GAMES & PROGRESS</h4>
              <div class="command-buttons">
                ${['play firewall','play snake','highscore','achievements','history','date','search','scan portfolio','matrix','investigate'].map(cmd => `<button data-command="${cmd}">${cmd}</button>`).join('')}
              </div>
              <small>Play terminal games, view scores, achievements and command history.</small>
            </div>

            <div class="command-group">
              <h4>DISPLAY & SETTINGS</h4>
              <div class="command-buttons">
                ${['theme','theme green','theme red','theme blue','theme amber','recruiter','recruiter off','typing speed instant','typing speed fast','typing speed normal','sound on','sound off','clear'].map(cmd => `<button data-command="${cmd}">${cmd}</button>`).join('')}
              </div>
              <small>Change themes, recruiter mode, terminal typing speed, sound and screen output.</small>
            </div>

            <div class="command-group">
              <h4>EASTER EGGS</h4>
              <div class="command-buttons">
                ${['sudo su','rm -rf /'].map(cmd => `<button data-command="${cmd}">${cmd}</button>`).join('')}
              </div>
              <small>Harmless browser-only Easter eggs. They do not affect the visitor's computer.</small>
            </div>
          </div>
        </section>

        
        <section class="section project-intelligence-section" id="trajectory">
          <div class="heading">
            <div><div class="label">13 // AI SECURITY CONTROL</div><h3>Trajectory Firewall</h3></div>
            <div class="mono">[ autonomous_agent = constrained ]</div>
          </div>
          <div class="intel-panel">
            <div class="intel-description">
              <div class="intel-kicker">TRAJECTORY AGENT // POLICY ENGINE</div>
              <p>Security decisions are evaluated before an autonomous agent is allowed to act. The visualization represents the controlled execution path used in the project.</p>
            </div>
            <div class="trajectory-flow">
              <div class="flow-node">AGENT<br><small>REQUEST</small></div><b>→</b>
              <div class="flow-node">TOOL<br><small>POLICY CHECK</small></div><b>→</b>
              <div class="flow-node">PROJECT<br><small>SCOPE</small></div><b>→</b>
              <div class="flow-node decision">ALLOW<br><small>OR BLOCK</small></div><b>→</b>
              <div class="flow-node">AUDIT<br><small>LOG</small></div>
            </div>
            <div class="decision-console">
              <span><i class="decision-dot"></i> POLICY ENGINE ONLINE</span>
              <span>AUTHORIZED TOOLS: <b>LIST_FILES / READ_FILE</b></span>
              <span>SCOPE: <b>DEMOPROJECT</b></span>
            </div>
          </div>
        </section>

        <section class="section reconstruction-section" id="reconstruction">
          <div class="heading">
            <div><div class="label">14 // DIGITAL FORENSICS</div><h3>Cyber Reconstruction</h3></div>
            <div class="mono">[ incident_timeline = reconstructed ]</div>
          </div>
          <div class="reconstruction-panel reconstruction-timeline-panel">
            <div class="reconstruction-console">
              <div><span class="decision-dot"></span> EVIDENCE PIPELINE ONLINE</div>
              <div>WINDOWS EVENT LOGS <b>→</b> CORRELATION <b>→</b> INCIDENT VIEW</div>
            </div>
            <div class="incident-track">
              <div class="incident-progress"></div>
              ${[
                ['01','INITIAL ACCESS','Evidence indicates the beginning of the reconstructed activity.','ACCESS'],
                ['02','LOGIN FAILED','Authentication failure captured in the event sequence.','LOGIN FAIL'],
                ['03','EVENT CORRELATION','Related Windows security events are connected chronologically.','CORRELATE'],
                ['04','THREAT ANALYSIS','Relevant activity is organized for investigation and review.','THREAT']
              ].map(([n,title,copy,short],i)=>`<article class="incident-node reveal-item" style="--incident-delay:${i*.12}s"><div class="incident-marker"><span>${n}</span></div><div class="incident-card"><small>${short}</small><strong>${title}</strong><p>${copy}</p></div></article>`).join('')}
            </div>
          </div>
        </section>

        <section class="section" id="labs">
          <div class="heading">
            <div>
              <div class="label">15 // CYBERSECURITY LABS</div>
              <h3>Practical security work</h3>
            </div>
          </div>
          <div class="lab-grid" id="labGrid"></div>
        </section>

        <section class="section" id="writeups">
          <div class="heading">
            <div>
              <div class="label">16 // SECURITY WRITE-UPS</div>
              <h3>Technical explanations and research notes</h3>
            </div>
          </div>
          <div class="writeup-grid" id="writeupGrid"></div>
        </section>

        <div class="writeup-reader" id="writeupReader" aria-hidden="true">
          <div class="writeup-reader-shell">
            <div class="writeup-reader-head">
              <span id="writeupReaderTitle">WRITE-UP</span>
              <button id="writeupReaderClose">CLOSE</button>
            </div>
            <div class="writeup-reader-body" id="writeupReaderBody"></div>
          </div>
        </div>

<section class="section" id="contact">
          <div class="heading">
            <div><div class="label">17 // CONTACT</div><h3>Let’s build secure systems</h3></div>
          </div>
          <div class="contact">
            <a href="mailto:${DATA.profile.email}">
              <small>EMAIL</small>
              <strong>${DATA.profile.email}</strong>
            </a>
            <a href="tel:${DATA.profile.phone.replace(/\s/g,'')}">
              <small>PHONE</small>
              <strong>${DATA.profile.phone}</strong>
            </a>
            <a href="${DATA.profile.linkedin}" target="_blank" rel="noopener noreferrer">
              <small>LINKEDIN</small>
              <strong>kari-harshavardhan-chowdary-146181217</strong>
            </a>
            <div>
              <small>LOCATION</small>
              <strong>${DATA.profile.location}</strong>
            </div>
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
      ${projectVisual(index)}
      <div class="case-meta">
        <div><small>CASE ID</small><strong>CASE-${String(index + 1).padStart(3,'0')}</strong></div>
        <div><small>STATUS</small><strong>DOCUMENTED / ANALYZABLE</strong></div>
        <div><small>DOMAIN</small><strong>${projectCategory(project).join(' // ') || 'SECURITY RESEARCH'}</strong></div>
      </div>
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
    const caseIdEl = document.getElementById('projectModalCaseId');
    if(caseIdEl) caseIdEl.textContent = `CASE-${String(index + 1).padStart(3,'0')}`;

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

  // Project case-file filters
  function updateProjectFilterCounts(){
    const total=DATA.projects.length;
    document.querySelectorAll('.project-filter').forEach(button=>{
      const filter=button.dataset.filter || 'ALL';
      const count=filter==='ALL' ? total : DATA.projects.filter(p=>projectCategory(p).includes(filter)).length;
      const label=button.firstChild;
      const badge=button.querySelector('span');
      if(badge) badge.textContent=count;
      else button.insertAdjacentHTML('beforeend',` <span>${count}</span>`);
    });
  }
  updateProjectFilterCounts();

  const projectGrid = document.getElementById('projectGrid');
  const projectEmpty = document.getElementById('projectEmpty');
  const projectCountLabel = document.getElementById('projectCountLabel');
  const projectFilters = document.getElementById('projectFilters');
  if(projectGrid && projectFilters){
    projectFilters.querySelectorAll('.project-filter').forEach(button=>{
      button.addEventListener('click',()=>{
        const filter=button.dataset.filter || 'ALL';
        projectFilters.querySelectorAll('.project-filter').forEach(b=>b.classList.toggle('active',b===button));
        projectGrid.innerHTML=projectCards(filter);
        projectGrid.querySelectorAll('.project-case-file').forEach(card=>card.tabIndex=0);
        const visible=projectGrid.querySelectorAll('.project-case-file').length;
        projectEmpty.hidden=visible!==0;
        if(projectCountLabel) projectCountLabel.textContent=`${visible} CASE FILE${visible===1?'':'S'}`;
        projectGrid.querySelectorAll('.project-details-btn').forEach(btn=>btn.addEventListener('click',()=>openProjectModal(Number(btn.dataset.projectIndex))));
      });
    });
  }


  // Keyboard-friendly project cards.
  projectGrid?.addEventListener('keydown',event=>{
    if((event.key==='Enter'||event.key===' ') && event.target.closest('.project-case-file')){
      event.preventDefault();
      const card=event.target.closest('.project-case-file');
      openProjectModal(Number(card.dataset.projectIndex));
    }
  });
  projectGrid?.querySelectorAll('.project-case-file').forEach(card=>card.tabIndex=0);

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
    'CASE ANALYST':'Complete the browser-only investigation mode.',
    'ROOT ACCESS':'Reach 100% visitor clearance.',
    'CTF SOLVER':'Complete the hidden portfolio challenge.'
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
      '<span class="k">profile</span>       show recruiter-ready profile',
      '<span class="k">scan portfolio</span> run a browser-only integrity scan',
      '<span class="k">matrix</span>         open security domain matrix',
      '<span class="k">investigate</span>    open incident investigation mode',
      '<span class="k">theme</span>         change visual theme',
      '<span class="k">open [project]</span> open project case study',
      '<span class="k">project [name]</span> project details + case study',
      '<span class="k">ctf</span>            open hidden CTF challenge',
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

    'scan portfolio': () => addBlock('portfolio integrity scan', [
      '<span class="k">[OK]</span> Identity record loaded',
      `<span class="k">[OK]</span> ${DATA.projects.length} project case files indexed`,
      `<span class="k">[OK]</span> ${DATA.certifications.length} certifications indexed`,
      `<span class="k">[OK]</span> ${DATA.publications.length} publications indexed`,
      `<span class="k">[OK]</span> ${DATA.patents.length} patent records indexed`,
      '<span class="k">[OK]</span> Interactive security modules mounted',
      '<span class="v">STATUS: PORTFOLIO INTEGRITY VERIFIED</span>'
    ]),

    matrix: () => {
      showWindow('SECURITY MATRIX','<div class="credential-provider-grid" style="grid-template-columns:repeat(2,1fr)">'+[
        ['NETWORK','MOTAG / TRAFFIC DEFENSE'],
        ['AI','PHISHING / TRAJECTORY FIREWALL'],
        ['FORENSICS','MEMORY / RECONSTRUCTION'],
        ['EMBEDDED','SAVATAR / DEVICE SECURITY']
      ].map(([a,b])=>`<div class="credential-provider"><strong>●</strong><span>${a}</span><small>${b}</small></div>`).join('')+'</div>');
      return;
    },

    investigate: () => openInvestigationMode(),

    profile: () => addBlock('recruiter profile', [
      `<span class="k">role:</span> ${DATA.profile.role}`,
      '<span class="k">specializations:</span> Network Defense | Digital Forensics | AI Security | Embedded Security',
      `<span class="k">education:</span> ${DATA.profile.education}`,
      `<span class="k">cgpa:</span> ${DATA.profile.cgpa}`,
      `<span class="k">projects:</span> ${DATA.projects.length}`,
      `<span class="k">publications:</span> ${DATA.publications.length}`,
      `<span class="k">patents:</span> ${DATA.patents.length}`,
      `<span class="k">contact:</span> ${DATA.profile.email}`
    ]),

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
        'whoami','profile','about','education','skills','projects','publications',
        'patents','experience','certificates','leadership','strengths','hobbies','contact'
      ].forEach(name => commandMap[name]());
    }
  };


  const commandHistory = [];
  let historyIndex = 0;

  const virtualFiles = {
    'about.txt': () => DATA.about,
    'security-map.txt': () => [
      'SECURITY CORE',
      '├── NETWORK DEFENSE → MOTAG',
      '├── AI SECURITY → PHISHING / TRAJECTORY FIREWALL',
      '├── DIGITAL FORENSICS → MEMORY / CYBER RECONSTRUCTION',
      '└── EMBEDDED SECURITY → SAVATAR'
    ],
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
    '/home/harsha':['about.txt','profile.txt','skills.txt','contact.txt','publications.txt','patents.txt','experience.txt','projects','certificates','evidence'],
    '/home/harsha/projects':['motag.txt','phishing.txt','forensics.txt','trajectory-firewall.txt','cyber-reconstruction.txt','waste-iot.txt'],
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
    '/home/harsha/projects/waste-iot.txt':() => [DATA.projects[5].title,DATA.projects[5].description],
    '/home/harsha/projects/trajectory-firewall.txt':() => [DATA.projects[3].title,DATA.projects[3].description],
    '/home/harsha/projects/cyber-reconstruction.txt':() => [DATA.projects[4].title,DATA.projects[4].description],
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
        '│   ├── trajectory-firewall.txt',
        '│   ├── cyber-reconstruction.txt',
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
      const map = {motag:0,phishing:1,forensics:2,'trajectory-firewall':3,'cyber-reconstruction':4,'waste-iot':5,waste:5};
      if (key in map) openProjectModal(map[key]);
      else addLine('Unknown project. Try: motag, phishing, forensics, trajectory-firewall, cyber-reconstruction, waste-iot','error');
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
    if(event.key==='Escape' && investigationOverlay?.classList.contains('active')){
      closeInvestigationMode();
      return;
    }
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
    'open motag','open phishing','open forensics','open scanner','open trajectory-firewall','open cyber-reconstruction','open savatar','open waste-iot','play firewall','play snake','highscore','simulation',
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
const investigationOverlay = document.getElementById('investigationOverlay');
  const investigationLines = document.getElementById('investigationLines');
  const investigationProgress = document.getElementById('investigationProgress');
  const investigationStatus = document.getElementById('investigationStatus');
  const investigationRun = document.getElementById('investigationRun');
  const investigationClose = document.getElementById('investigationClose');
  let investigationTimer = null;

  function closeInvestigationMode(){
    if(investigationTimer) clearTimeout(investigationTimer);
    investigationTimer=null;
    investigationOverlay?.classList.remove('active');
    investigationOverlay?.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
  }

  function openInvestigationMode(){
    if(!investigationOverlay) return;
    investigationLines.innerHTML='';
    investigationProgress.style.width='0%';
    investigationStatus.textContent='READY // ANALYSIS NOT STARTED';
    investigationRun.disabled=false;
    investigationRun.textContent='START ANALYSIS';
    investigationOverlay.classList.add('active');
    investigationOverlay.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
    addClearance(3);
  }

  function runInvestigation(){
    if(!investigationLines) return;
    if(investigationTimer) clearTimeout(investigationTimer);
    investigationRun.disabled=true;
    investigationRun.textContent='ANALYZING...';
    investigationLines.innerHTML='';
    const events=[
      ['01','Loading Windows security evidence...','ok'],
      ['02','Correlating authentication failures...','ok'],
      ['03','Suspicious process: invoice.pdf.exe','alert'],
      ['04','Network indicator: 185.42.19.77:4444','alert'],
      ['05','Building chronological incident chain...','ok'],
      ['06','Reconstruction complete // investigation view ready','ok']
    ];
    events.forEach((event,i)=>{
      investigationTimer=setTimeout(()=>{
        const line=document.createElement('div');
        line.className=`investigation-line ${event[2]==='alert'?'alert':''}`;
        line.innerHTML=`<b>[${event[0]}]</b> ${event[1]}`;
        investigationLines.appendChild(line);
        investigationLines.scrollTop=investigationLines.scrollHeight;
        investigationProgress.style.width=`${Math.round(((i+1)/events.length)*100)}%`;
        investigationStatus.textContent=i===events.length-1?'COMPLETE // CASE RECONSTRUCTED':`ANALYZING // ${Math.round(((i+1)/events.length)*100)}%`;
        if(i===events.length-1){
          investigationRun.disabled=false;
          investigationRun.textContent='RUN AGAIN';
          unlockAchievement('CASE ANALYST','Completed the browser-only investigation mode.');
          addClearance(10);
        }
      },i*430);
    });
  }

  investigationRun?.addEventListener('click',runInvestigation);
  investigationClose?.addEventListener('click',closeInvestigationMode);
  investigationOverlay?.addEventListener('click',event=>{
    if(event.target===investigationOverlay) closeInvestigationMode();
  });

  document.querySelectorAll('[data-project-index]').forEach(node=>{
    node.addEventListener('click',()=>{
      const index=Number(node.dataset.projectIndex);
      if(Number.isInteger(index)) openProjectModal(index);
    });
  });
// Mouse-driven scanner cursor on desktop.
  const cursorScanner=document.getElementById('cursorScanner');
  if(cursorScanner && matchMedia('(pointer:fine)').matches){
    window.addEventListener('mousemove',event=>{
      cursorScanner.style.left=`${event.clientX}px`;
      cursorScanner.style.top=`${event.clientY}px`;
      document.body.classList.add('cursor-active');
      if(event.target.closest('button,a,.project-case-file,.map-node,.skills span,.card')) document.body.classList.add('cursor-hover');
      else document.body.classList.remove('cursor-hover');
    },{passive:true});
    window.addEventListener('mouseleave',()=>document.body.classList.remove('cursor-active'));
  }

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

  addLine('Cyber Portfolio Terminal v3.0 initialized.');
  addLine('Shell online. Portfolio filesystem mounted. Command engine ready.');
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


  // Legacy attack-feed code is kept optional so a missing #attackFeed
  // element can never stop the rest of the portfolio from rendering.
  const attackFeed = document.getElementById('attackFeed');
  if (attackFeed) {
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
  }


  // Scroll reveal animations for sections, cards, tabs and interactive blocks.
  const revealSelectors = [
    '.section > .heading',
    '.section > .section-heading',
    '.section > .label',
    '.card',
    '.info-row',
    '.threat-card',
    '.skills span',
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

  // Highlight exactly one navigation tab based on the section nearest the viewport focus line.
  const navButtons = [...document.querySelectorAll('.nav [data-target]')];
  const navSections = navButtons
    .map(button => document.getElementById(button.dataset.target))
    .filter(Boolean);

  function updateActiveNavigation() {
    if (!navSections.length) return;

    const focusLine = window.scrollY + Math.min(window.innerHeight * 0.34, 260);
    let activeSection = navSections[0];

    navSections.forEach(section => {
      if (section.offsetTop <= focusLine) activeSection = section;
    });

    const nearPageBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 80;

    if (nearPageBottom) {
      activeSection = navSections[navSections.length - 1];
    }

    navButtons.forEach(button => {
      button.classList.toggle(
        'active',
        button.dataset.target === activeSection.id
      );
    });
  }

  window.addEventListener('scroll', updateActiveNavigation, { passive:true });
  window.addEventListener('resize', updateActiveNavigation);
  requestAnimationFrame(updateActiveNavigation);



  // Animated hero network
  const heroNetworkCanvas=document.getElementById('heroNetworkCanvas');
  if(heroNetworkCanvas){
    const c=heroNetworkCanvas.getContext('2d');let nodes=[],pointer={x:null,y:null};
    function resizeNetwork(){
      const r=heroNetworkCanvas.parentElement.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);
      heroNetworkCanvas.width=Math.max(1,r.width*d);heroNetworkCanvas.height=Math.max(1,r.height*d);
      heroNetworkCanvas.style.width=r.width+'px';heroNetworkCanvas.style.height=r.height+'px';c.setTransform(d,0,0,d,0,0);
      nodes=Array.from({length:Math.max(28,Math.min(76,Math.floor(r.width/18)))},()=>({x:Math.random()*r.width,y:Math.random()*r.height,vx:(Math.random()-.5)*.32,vy:(Math.random()-.5)*.32,r:Math.random()*1.8+.7}));
    }
    function drawNetwork(){
      const w=heroNetworkCanvas.clientWidth,h=heroNetworkCanvas.clientHeight;c.clearRect(0,0,w,h);
      nodes.forEach(n=>{n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>w)n.vx*=-1;if(n.y<0||n.y>h)n.vy*=-1;c.beginPath();c.arc(n.x,n.y,n.r,0,Math.PI*2);c.fillStyle='rgba(53,255,162,.65)';c.fill()});
      for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){const a=nodes[i],b=nodes[j],dist=Math.hypot(a.x-b.x,a.y-b.y);if(dist<115){c.beginPath();c.moveTo(a.x,a.y);c.lineTo(b.x,b.y);c.strokeStyle=`rgba(53,255,162,${(1-dist/115)*.18})`;c.stroke()}}
      if(pointer.x!==null)nodes.forEach(n=>{const dist=Math.hypot(n.x-pointer.x,n.y-pointer.y);if(dist<145){c.beginPath();c.moveTo(n.x,n.y);c.lineTo(pointer.x,pointer.y);c.strokeStyle=`rgba(69,215,255,${(1-dist/145)*.24})`;c.stroke()}});
      requestAnimationFrame(drawNetwork)
    }
    heroNetworkCanvas.parentElement.addEventListener('pointermove',e=>{const r=heroNetworkCanvas.getBoundingClientRect();pointer={x:e.clientX-r.left,y:e.clientY-r.top}});
    heroNetworkCanvas.parentElement.addEventListener('pointerleave',()=>pointer={x:null,y:null});
    addEventListener('resize',resizeNetwork);resizeNetwork();drawNetwork()
  }

  // Timeline
  const cyberTimeline=document.getElementById('cyberTimeline');
  if(cyberTimeline){const o=new IntersectionObserver(es=>{if(!es[0].isIntersecting)return;cyberTimeline.classList.add('timeline-visible');cyberTimeline.querySelectorAll('.timeline-item').forEach((el,i)=>setTimeout(()=>el.classList.add('timeline-visible'),i*170));o.disconnect()},{threshold:.2});o.observe(cyberTimeline)}

  // Section variations
  document.querySelectorAll('.section').forEach((s,i)=>s.dataset.revealMode=i%3===0?'cascade':i%3===1?'scan':'default');

  // Magnetic controls
  document.querySelectorAll('button,.btn,.button,.nav button,.skills span,.hints button,.command-hints button').forEach(el=>{el.classList.add('magnetic');el.addEventListener('pointermove',e=>{if(matchMedia('(pointer:coarse)').matches)return;const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.16}px,${(e.clientY-r.top-r.height/2)*.16}px)`});el.addEventListener('pointerleave',()=>el.style.transform='')});

  // Code rain
  const chars='01{}[]<>/\\\\$#@*&%ABCDEFabcdef';
  [document.querySelector('.terminal'),document.querySelector('#projects'),document.querySelector('#credentials'),document.querySelector('#threat-dashboard')].filter(Boolean).forEach(target=>{target.classList.add('code-rain-host');const layer=document.createElement('div');layer.className='code-rain-layer';const count=Math.max(8,Math.floor((target.clientWidth||600)/44));for(let i=0;i<count;i++){const col=document.createElement('span');col.className='code-rain-column';col.style.left=(i/count*100)+'%';col.style.animationDuration=(5+Math.random()*6)+'s';col.style.animationDelay=(-Math.random()*8)+'s';col.textContent=Array.from({length:28},()=>chars[Math.floor(Math.random()*chars.length)]).join('\n');layer.appendChild(col)}target.prepend(layer)});

  // Simulated SOC feed — visual portfolio telemetry only.
  const socFeed = document.getElementById('socFeed');
  if (socFeed) {
    [
      'CASE DATABASE :: 6 PROJECT CASE FILES INDEXED',
      'AI SECURITY :: POLICY CONTROLS READY',
      'FORENSICS :: EVENT CORRELATION ENGINE READY',
      'NETWORK DEFENSE :: TRAFFIC MONITORING READY',
      'EMBEDDED SECURITY :: DEVICE PROTECTION WORKSTREAM READY'
    ].forEach((event,index)=>{
      const row=document.createElement('div');
      row.innerHTML=`<b>[${String(index+1).padStart(2,'0')}]</b><span>${event}</span>`;
      socFeed.appendChild(row);
    });
  }
  const recruiterResumeBtn=document.getElementById('recruiterResumeBtn');
  if(recruiterResumeBtn) recruiterResumeBtn.addEventListener('click',()=>openResumeAndCount());

  // Terminal startup
  const terminalElement=document.querySelector('.terminal'),terminalStartup=document.getElementById('terminalStartup');
  if(terminalElement&&terminalStartup){terminalElement.classList.add('terminal-locked');['Initializing secure shell...','Loading portfolio filesystem...','Mounting project directories...','Loading command engine...','Terminal ready.'].forEach((message,index)=>setTimeout(()=>{const line=document.createElement('div');line.className='startup-line';line.textContent='> '+message;terminalStartup.appendChild(line);if(index===4)setTimeout(()=>terminalElement.classList.remove('terminal-locked'),450)},index*430))}





  // Remove any accidental runtime height left between Home and Projects.
  const homeSection = document.getElementById('home');
  const projectsSection = document.getElementById('projects');

  if (homeSection && projectsSection) {
    homeSection.style.minHeight = '0';
    homeSection.style.height = 'auto';
    homeSection.style.paddingBottom = '20px';
    projectsSection.style.marginTop = '0';
    projectsSection.style.paddingTop = '24px';
    projectsSection.dataset.revealMode = 'default';

    projectsSection.querySelectorAll('.reveal-item').forEach(item => {
      item.classList.add('is-visible');
      item.style.opacity = '1';
      item.style.visibility = 'visible';
      item.style.transform = 'none';
      item.style.filter = 'none';
      item.style.clipPath = 'none';
    });
  }

  // Prevent animation placeholders from creating empty sections.
  ['projects','about','experience','threat-dashboard'].forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    section.style.opacity = '1';
    section.style.visibility = 'visible';
    section.querySelectorAll('.reveal-item').forEach(item => {
      item.classList.add('is-visible');
      item.style.opacity = '1';
      item.style.visibility = 'visible';
      item.style.filter = 'none';
    });
  });

  // Keep key sections immediately visible and compact.
  ['projects','about','experience','trajectory','reconstruction','skills','threat-dashboard','credentials','labs','writeups'].forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    section.dataset.revealMode = 'default';
    section.querySelectorAll('.reveal-item').forEach(item => {
      item.classList.add('is-visible');
    });
  });

  // Contact visibility fallback
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.style.opacity = '1';
    contactSection.style.visibility = 'visible';
    contactSection.querySelectorAll('.contact > *').forEach(item => {
      item.classList.add('is-visible');
      item.style.opacity = '1';
      item.style.visibility = 'visible';
      item.style.transform = 'none';
      item.style.filter = 'none';
    });
  }


  // Portfolio search
  const portfolioSearch=document.getElementById('portfolioSearch');
  const portfolioSearchButton=document.getElementById('portfolioSearchButton');
  const portfolioSearchInput=document.getElementById('portfolioSearchInput');
  const portfolioSearchResults=document.getElementById('portfolioSearchResults');
  const portfolioSearchClose=document.getElementById('portfolioSearchClose');

  const searchIndex=[
    ...DATA.projects.map((p,index)=>({type:'Project',title:p.title,description:p.description,target:()=>openProjectModal(index)})),
    ...Object.entries(DATA.skills).flatMap(([group,skills])=>skills.map(skill=>({
      type:`Skill · ${group}`,
      title:skill,
      description:`Cybersecurity skill listed under ${group}.`,
      target:()=>document.getElementById('skills')?.scrollIntoView({behavior:'smooth'})
    }))),
    ...DATA.publications.map(item=>({type:'Publication',title:item.title,description:item.description,target:()=>document.getElementById('credentials')?.scrollIntoView({behavior:'smooth'})})),
    ...DATA.patents.map(item=>({type:'Patent',title:item.title,description:`${item.number} — ${item.date}`,target:()=>document.getElementById('credentials')?.scrollIntoView({behavior:'smooth'})})),
    ...DATA.experience.map(item=>({type:'Experience',title:item.title,description:`${item.organization} — ${item.detail}`,target:()=>document.getElementById('experience')?.scrollIntoView({behavior:'smooth'})})),
    {type:'Section',title:'Career and Security Journey',description:'2023–2026 learning, research and industry progression.',target:()=>document.getElementById('career-journey')?.scrollIntoView({behavior:'smooth'})},
    {type:'Section',title:'Security Capability Matrix',description:'Network defense, AI security, digital forensics and embedded security.',target:()=>document.getElementById('capabilities')?.scrollIntoView({behavior:'smooth'})},
    {type:'Contact',title:'Email',description:DATA.profile.email,target:()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})},
    {type:'Contact',title:'LinkedIn',description:DATA.profile.linkedin,target:()=>window.open(DATA.profile.linkedin,'_blank')}
  ];

  function openPortfolioSearch(){
    portfolioSearch.classList.add('active');
    portfolioSearch.setAttribute('aria-hidden','false');
    portfolioSearchInput.value='';
    renderSearchResults('');
    setTimeout(()=>portfolioSearchInput.focus(),30);
  }

  function closePortfolioSearch(){
    portfolioSearch.classList.remove('active');
    portfolioSearch.setAttribute('aria-hidden','true');
  }

  function renderSearchResults(query){
    const q=query.trim().toLowerCase();
    const matches=searchIndex.filter(item=>
      !q || `${item.type} ${item.title} ${item.description}`.toLowerCase().includes(q)
    ).slice(0,20);

    portfolioSearchResults.innerHTML=matches.length
      ? matches.map((item,index)=>`
          <button class="search-result ${index===0?'active':''}" data-search-index="${searchIndex.indexOf(item)}">
            <strong>${item.title}</strong>
            <small>${item.type} · ${item.description}</small>
          </button>`).join('')
      : '<div class="search-result"><small>No matching portfolio content found.</small></div>';

    portfolioSearchResults.querySelectorAll('[data-search-index]').forEach(button=>{
      button.addEventListener('click',()=>{
        const item=searchIndex[Number(button.dataset.searchIndex)];
        closePortfolioSearch();
        item.target();
      });
    });
  }

  portfolioSearchButton?.addEventListener('click',openPortfolioSearch);
  portfolioSearchClose?.addEventListener('click',closePortfolioSearch);
  portfolioSearchInput?.addEventListener('input',()=>renderSearchResults(portfolioSearchInput.value));
  portfolioSearch?.addEventListener('click',event=>{
    if(event.target===portfolioSearch)closePortfolioSearch();
  });

  document.addEventListener('keydown',event=>{
    if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k'){
      event.preventDefault();
      openPortfolioSearch();
    }
    if(event.key==='Escape'&&portfolioSearch.classList.contains('active'))closePortfolioSearch();
  });

  // Skills to project relationship map
  const skillProjectRelations={
    'Python':['AI-Based Phishing Website Detection','Trajectory Firewall','Security automation workflows'],
    'Wireshark':['Memory Forensics','Network traffic analysis','DDoS investigation'],
    'Nmap':['Network reconnaissance','Exposure assessment','MOTAG traffic analysis'],
    'Burp Suite':['Web application security testing','Phishing and URL analysis','OWASP testing'],
    'SQL':['Security data storage','Application backends','Log analysis'],
    'Linux':['Memory Forensics','Security tooling','Network defense workflows'],
    'IDS/IPS':['MOTAG','DDoS detection and mitigation','Traffic filtering'],
    'OWASP Top 10':['Web security testing','Vulnerability assessment','Secure development'],
    'Network Security':['MOTAG','Packet analysis','DDoS defense'],
    'DDoS Detection and Mitigation':['MOTAG','Moving target defense research','Dynamic proxy protection'],
    'Packet Analysis':['Wireshark investigations','Memory Forensics','Network threat detection']
  };

  const skillMapList=document.getElementById('skillMapList');
  const skillMapOutput=document.getElementById('skillMapOutput');

  if(skillMapList&&skillMapOutput){
    Object.keys(skillProjectRelations).forEach((skill,index)=>{
      const button=document.createElement('button');
      button.textContent=skill;
      button.addEventListener('click',()=>{
        skillMapList.querySelectorAll('button').forEach(btn=>btn.classList.remove('active'));
        button.classList.add('active');
        skillMapOutput.innerHTML=`
          <h4>${skill.toUpperCase()}</h4>
          <ul>${skillProjectRelations[skill].map(item=>`<li>${item}</li>`).join('')}</ul>`;
      });
      skillMapList.appendChild(button);
      if(index===0)setTimeout(()=>button.click(),0);
    });
  }

  // Interactive security capability matrix
  const capabilityData={
    network:{
      code:'CAP-01 // NETWORK DEFENSE',
      title:'Network Defense',
      summary:'Practical work centered on traffic visibility, anomaly detection, DDoS mitigation and defensive network analysis.',
      evidence:[
        ['PRIMARY CASE','MOTAG','DDoS detection, traffic monitoring, source blocking and dynamic proxy defense.'],
        ['TOOLS','Wireshark / Nmap','Packet analysis, network reconnaissance and exposure assessment.'],
        ['SECURITY METHODS','IDS/IPS + DDoS','Traffic filtering, anomaly analysis and resilient defense workflows.'],
        ['RESEARCH SIGNAL','MTD + ChaCha20','Moving Target Defense and encrypted communication research.']
      ],
      tags:['MOTAG','Wireshark','Nmap','IDS/IPS','DDoS Mitigation','Packet Analysis'],
      cases:[['MOTAG',0]]
    },
    ai:{
      code:'CAP-02 // AI SECURITY',
      title:'AI Security',
      summary:'Security automation and machine-learning work spanning phishing classification and policy enforcement for autonomous agents.',
      evidence:[
        ['PRIMARY CASE','Phishing Detection','TF-IDF feature extraction, machine-learning classification and Flask-based delivery.'],
        ['SECURITY CONTROL','Trajectory Firewall','Authorized-tool checks, project-scope validation and allow/block decisions.'],
        ['MODEL WORKFLOW','Detect → Classify','Convert inputs into security signals and produce a controlled decision.'],
        ['FUTURE DIRECTION','Explainability + Policy','Browser integration, reputation signals and richer authorization rules.']
      ],
      tags:['Python','Machine Learning','Flask','Agent Security','Policy Enforcement','Automation'],
      cases:[['PHISHING',1],['TRAJECTORY FIREWALL',3]]
    },
    forensics:{
      code:'CAP-03 // DIGITAL FORENSICS',
      title:'Digital Forensics',
      summary:'Evidence-driven investigation using volatile-memory artifacts and Windows security-event reconstruction.',
      evidence:[
        ['PRIMARY CASE','Memory Forensics','Process, network and suspicious-memory artifact analysis.'],
        ['INCIDENT CASE','Cyber Reconstruction','Chronological correlation of Windows event evidence into an investigation flow.'],
        ['EVIDENCE FLOW','Capture → Correlate','Extract artifacts, connect events and preserve an understandable timeline.'],
        ['INVESTIGATION FOCUS','IOC + Timeline','Future-ready path toward automated IOC extraction and broader event correlation.']
      ],
      tags:['Memory Analysis','Windows Events','Incident Response','Artifact Extraction','Timeline Correlation'],
      cases:[['MEMORY FORENSICS',2],['CYBER RECONSTRUCTION',4]]
    },
    embedded:{
      code:'CAP-04 // EMBEDDED SECURITY',
      title:'Embedded Security',
      summary:'Security-oriented embedded-device work combining the SAVATAR controller project with sensor-based IoT experimentation.',
      evidence:[
        ['INDUSTRY WORK','SAVATAR','Secure Smart Vehicle Door Controller developed within the SSEV SOFTSOLS workstream.'],
        ['PROJECT CASE','Waste Segregation','Arduino, IR, inductive and moisture sensors used for automated classification.'],
        ['ENGINEERING SIGNAL','Controller + Sensors','Connect hardware inputs to control logic and defined system behavior.'],
        ['SECURITY DIRECTION','Device Protection','Focus on secure embedded behavior, controlled access and resilient device workflows.']
      ],
      tags:['SAVATAR','Arduino','IoT','Sensors','Embedded Devices','Controller Security'],
      cases:[['WASTE SEGREGATION',5]]
    }
  };

  const capabilityOutput=document.getElementById('capabilityOutput');
  const capabilityTabs=document.querySelectorAll('.capability-tab');
  function renderCapability(key){
    const data=capabilityData[key];
    if(!capabilityOutput||!data)return;
    capabilityOutput.innerHTML=`
      <div class="capability-output-head">
        <div>
          <div class="capability-code">${data.code}</div>
          <h4>${data.title}</h4>
        </div>
        <div class="mono">EVIDENCE // VERIFIED</div>
      </div>
      <p class="capability-summary">${data.summary}</p>
      <div class="capability-grid">
        ${data.evidence.map(item=>`<div class="capability-evidence"><small>${item[0]}</small><strong>${item[1]}</strong><p>${item[2]}</p></div>`).join('')}
      </div>
      <div class="capability-tags">${data.tags.map(tag=>`<span>${tag}</span>`).join('')}</div>
      <div class="capability-case-links">
        ${data.cases.map(([label,index])=>`<button type="button" data-capability-project="${index}">OPEN CASE // ${label}</button>`).join('')}
      </div>`;
    capabilityOutput.querySelectorAll('[data-capability-project]').forEach(button=>{
      button.addEventListener('click',()=>openProjectModal(Number(button.dataset.capabilityProject)));
    });
  }
  capabilityTabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
      capabilityTabs.forEach(item=>item.classList.remove('active'));
      tab.classList.add('active');
      renderCapability(tab.dataset.capability);
    });
  });
  if(capabilityTabs.length) renderCapability(capabilityTabs[0].dataset.capability);

  // Animated architecture diagrams in project case studies
  const projectArchitectures={
    0:[
      ['Incoming Traffic','Receives and observes network requests.'],
      ['Detection Engine','Analyzes traffic behavior and detects possible DDoS patterns.'],
      ['Dynamic Proxy Rotation','Changes proxy routes to reduce direct targeting of the protected server.'],
      ['ChaCha20 Encryption','Protects sensitive communication between defense components.'],
      ['Protected Server','Receives filtered and safer traffic.']
    ],
    1:[
      ['URL Input','Receives the website address submitted by the user.'],
      ['Feature Extraction','Converts URL and page characteristics into measurable indicators.'],
      ['TF-IDF / ML Model','Classifies the website using trained machine-learning features.'],
      ['Risk Decision','Marks the result as legitimate or suspicious.'],
      ['Flask Interface','Displays the prediction to the user.']
    ],
    2:[
      ['Memory Capture','Collects volatile memory from the target system.'],
      ['Artifact Extraction','Finds processes, connections and suspicious objects.'],
      ['Threat Correlation','Links memory artifacts with possible attack behavior.'],
      ['Investigation Report','Summarizes evidence for forensic review.']
    ],
    3:[
      ['Agent Request','Receives a requested autonomous action.'],
      ['Tool Policy Check','Checks whether the requested tool is authorized.'],
      ['Project Scope','Validates the requested resource against the approved workspace.'],
      ['Allow / Block','Makes the enforcement decision.'],
      ['Security Log','Records the decision for auditability.']
    ],
    4:[
      ['Evidence Input','Collects Windows security-event evidence.'],
      ['Event Parsing','Extracts relevant authentication and system activity.'],
      ['Timeline Correlation','Connects related events in chronological order.'],
      ['Incident Reconstruction','Builds an understandable investigation chain.'],
      ['Investigation View','Presents the reconstructed incident flow.']
    ],
    5:[
      ['Sensor Input','Detects characteristics of incoming waste.'],
      ['Arduino Controller','Processes sensor readings and classification logic.'],
      ['Segregation Mechanism','Routes waste into the correct category.'],
      ['Monitoring Layer','Records status and system activity.']
    ]
  };

  const originalOpenProjectModal=openProjectModal;
  openProjectModal=function(index){
    originalOpenProjectModal(index);

    setTimeout(()=>{
      const modalContent=document.querySelector('#projectModal .modal-content, #projectModal .modal-body, #projectModal .window-body');
      if(!modalContent)return;

      modalContent.querySelector('.architecture-panel')?.remove();
      const architecture=projectArchitectures[index]||[];
      if(!architecture.length)return;

      const panel=document.createElement('div');
      panel.className='architecture-panel';

      const flow=document.createElement('div');
      flow.className='architecture-flow';

      architecture.forEach((step,stepIndex)=>{
        const node=document.createElement('button');
        node.className='arch-node';
        node.type='button';
        node.textContent=step[0];
        node.addEventListener('click',()=>{
          flow.querySelectorAll('.arch-node').forEach(item=>item.classList.remove('active'));
          node.classList.add('active');
          panel.querySelector('.arch-description').textContent=step[1];
        });
        flow.appendChild(node);

        if(stepIndex<architecture.length-1){
          const link=document.createElement('div');
          link.className='arch-link';
          flow.appendChild(link);
        }
      });

      const description=document.createElement('div');
      description.className='arch-description';
      description.textContent=architecture[0][1];

      panel.appendChild(flow);
      panel.appendChild(description);
      modalContent.appendChild(panel);
      flow.querySelector('.arch-node')?.classList.add('active');
    },40);
  };


  // Project terminal commands
  const projectCommandHelp=[
    'project motag',
    'project phishing',
    'project forensics',
    'project trajectory-firewall',
    'project cyber-reconstruction',
    'project waste'
  ];

  const previousRunCommand=runCommand;
  runCommand=function(raw){
    const normalized=String(raw||'').trim().toLowerCase();

    if(normalized==='project'){
      addBlock('project commands',projectCommandHelp);
      return;
    }

    if(normalized.startsWith('project ')){
      const key=normalized.slice(8).trim();
      const projectMap={motag:0,phishing:1,forensics:2,'trajectory-firewall':3,'cyber-reconstruction':4,waste:5,'waste-iot':5};
      if(!(key in projectMap)){
        addLine('Unknown project. Use: motag, phishing, forensics, trajectory-firewall, cyber-reconstruction, waste','error');
        return;
      }

      const project=DATA.projects[projectMap[key]];
      addBlock(project.title,[
        project.description,
        `Technologies: ${project.tags.join(', ')}`,
        'Opening the full case study...'
      ]);
      openProjectModal(projectMap[key]);
      return;
    }

    previousRunCommand(raw);
  };

  // Session summary
  const sessionSummary=document.getElementById('sessionSummary');
  const sessionProjects=document.getElementById('sessionProjects');
  const sessionCommands=document.getElementById('sessionCommands');
  const sessionAchievements=document.getElementById('sessionAchievements');
  const sessionClearance=document.getElementById('sessionClearance');
  const sessionSummaryClose=document.getElementById('sessionSummaryClose');

  let sessionSummaryShown=false;
  const sessionStartProjects=new Set(JSON.parse(sessionStorage.getItem('sessionViewedProjects')||'[]'));

  const previousOpenProjectForSession=openProjectModal;
  openProjectModal=function(index){
    sessionStartProjects.add(index);
    sessionStorage.setItem('sessionViewedProjects',JSON.stringify([...sessionStartProjects]));
    previousOpenProjectForSession(index);
  };

  function countUnlockedAchievements(){
    return Object.keys(localStorage).filter(key=>key.startsWith('achievement:')).length;
  }

  function updateSessionSummary(){
    sessionProjects.textContent=String(sessionStartProjects.size);
    sessionCommands.textContent=String(Number(localStorage.getItem('commandCount')||0));
    sessionAchievements.textContent=String(countUnlockedAchievements());
    sessionClearance.textContent=`${clearanceScore}%`;
  }

  function showSessionSummary(){
    if(sessionSummaryShown)return;
    sessionSummaryShown=true;
    updateSessionSummary();
    sessionSummary.classList.add('active');
  }

  sessionSummaryClose?.addEventListener('click',()=>sessionSummary.classList.remove('active'));

  window.addEventListener('beforeunload',updateSessionSummary);
  document.addEventListener('visibilitychange',()=>{
    if(document.visibilityState==='hidden')updateSessionSummary();
  });

  window.addEventListener('scroll',()=>{
    const nearBottom=window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-160;
    if(nearBottom)showSessionSummary();
  },{passive:true});


  // Cybersecurity labs
  const labData=[
    {
      icon:'PKT',
      title:'Packet Analysis Lab',
      description:'Investigated network traffic patterns, suspicious connections and protocol behavior using packet captures.',
      tools:['Wireshark','TCP/IP','Log Analysis']
    },
    {
      icon:'WEB',
      title:'Web Vulnerability Testing',
      description:'Practiced identifying common web risks including injection, insecure configuration and authentication weaknesses.',
      tools:['Burp Suite','OWASP Top 10','Nmap']
    },
    {
      icon:'MEM',
      title:'Memory Forensics Lab',
      description:'Reviewed volatile memory artifacts to identify suspicious processes, network indicators and possible malware behavior.',
      tools:['Volatility','REMnux','Linux']
    },
    {
      icon:'NET',
      title:'Network Scanning Lab',
      description:'Performed controlled host discovery, service enumeration and exposure analysis in lab environments.',
      tools:['Nmap','Linux','Bash']
    },
    {
      icon:'LOG',
      title:'Log Investigation Lab',
      description:'Analyzed security logs to identify failed logins, anomalies and possible incident timelines.',
      tools:['SIEM','Linux','Python']
    },
    {
      icon:'DDoS',
      title:'DDoS Defense Lab',
      description:'Explored detection, proxy rotation, traffic filtering and moving target defense concepts for resilient services.',
      tools:['MOTAG','IDS/IPS','ChaCha20']
    }
  ];

  const labGrid=document.getElementById('labGrid');
  if(labGrid){
    labGrid.innerHTML=labData.map((lab,index)=>`
      <article class="lab-card">
        <div class="lab-icon">${lab.icon}</div>
        <h4>${lab.title}</h4>
        <p>${lab.description}</p>
        <div class="lab-tools">${lab.tools.map(tool=>`<span>${tool}</span>`).join('')}</div>
        <button type="button" data-lab-index="${index}">VIEW LAB DETAILS</button>
      </article>
    `).join('');

    labGrid.querySelectorAll('[data-lab-index]').forEach(button=>{
      button.addEventListener('click',()=>{
        const lab=labData[Number(button.dataset.labIndex)];
        showWindow(lab.title,`
          <p>${lab.description}</p>
          <p><strong>Tools:</strong> ${lab.tools.join(', ')}</p>
          <p><strong>Focus:</strong> Defensive cybersecurity practice in controlled and ethical environments.</p>
        `);
      });
    });
  }

  // Security write-ups
  const writeups=[
    {
      title:'How TF-IDF Helps Detect Phishing URLs',
      category:'AI / ML',
      readTime:'4 MIN READ',
      summary:'A practical explanation of how text features can help machine-learning models identify suspicious URLs.',
      body:`
        <h3>How TF-IDF Helps Detect Phishing URLs</h3>
        <p>TF-IDF converts text into numerical features by measuring how important a term is within a document compared with the wider dataset.</p>
        <h4>Why it is useful</h4>
        <p>Phishing URLs often contain unusual words, brand references, suspicious paths, misleading subdomains and uncommon token patterns. TF-IDF helps a classifier assign weight to these patterns.</p>
        <h4>Typical workflow</h4>
        <p>URLs are cleaned, tokenized and converted into feature vectors. A supervised model then learns which combinations are more common in malicious or legitimate samples.</p>
        <h4>Limitations</h4>
        <p>TF-IDF does not understand intent by itself. It works best when combined with URL structure, domain information, page behavior and carefully validated training data.</p>
      `
    },
    {
      title:'How Moving Target Defense Reduces DDoS Risk',
      category:'NETWORK DEFENSE',
      readTime:'5 MIN READ',
      summary:'An overview of changing attack surfaces through proxy rotation and dynamic routing.',
      body:`
        <h3>How Moving Target Defense Reduces DDoS Risk</h3>
        <p>Moving Target Defense reduces predictability by changing exposed infrastructure details instead of leaving one fixed target available to attackers.</p>
        <h4>Dynamic proxy rotation</h4>
        <p>Requests can be routed through rotating proxy endpoints, making it harder for an attacker to continuously target the protected backend.</p>
        <h4>Detection and filtering</h4>
        <p>Traffic behavior is monitored for abnormal volume, repetition and source characteristics. Suspicious traffic can be filtered or rerouted.</p>
        <h4>Important consideration</h4>
        <p>Moving target defense is not a complete solution by itself. It should be combined with rate limiting, resilient infrastructure, monitoring and incident response.</p>
      `
    },
    {
      title:'Introduction to Memory Forensics',
      category:'FORENSICS',
      readTime:'4 MIN READ',
      summary:'Why volatile memory is important when investigating malware and active threats.',
      body:`
        <h3>Introduction to Memory Forensics</h3>
        <p>Memory forensics examines RAM because it may contain active processes, network connections, loaded modules, encryption keys and artifacts that never reach disk.</p>
        <h4>Why memory matters</h4>
        <p>Fileless malware and injected code may be visible in memory even when traditional file scanning finds nothing.</p>
        <h4>Investigation flow</h4>
        <p>An investigator captures memory, validates the image, extracts processes and connections, and correlates suspicious artifacts with other evidence.</p>
        <h4>Best practice</h4>
        <p>Memory should be acquired carefully to preserve integrity and documented as part of a repeatable forensic process.</p>
      `
    },
    {
      title:'How Wireshark Supports Network Investigation',
      category:'PACKET ANALYSIS',
      readTime:'3 MIN READ',
      summary:'A concise guide to using packet-level evidence during network troubleshooting and incident analysis.',
      body:`
        <h3>How Wireshark Supports Network Investigation</h3>
        <p>Wireshark allows analysts to inspect packet details, protocol behavior and communication patterns.</p>
        <h4>Useful investigation areas</h4>
        <p>Analysts can identify repeated connection attempts, unexpected destinations, suspicious DNS activity and unusual protocol use.</p>
        <h4>Filtering</h4>
        <p>Display filters help narrow large captures to specific IP addresses, ports, protocols or error conditions.</p>
        <h4>Responsible use</h4>
        <p>Packet captures may contain sensitive information and should only be collected and analyzed with proper authorization.</p>
      `
    }
  ];

  const writeupGrid=document.getElementById('writeupGrid');
  const writeupReader=document.getElementById('writeupReader');
  const writeupReaderTitle=document.getElementById('writeupReaderTitle');
  const writeupReaderBody=document.getElementById('writeupReaderBody');
  const writeupReaderClose=document.getElementById('writeupReaderClose');

  if(writeupGrid){
    writeupGrid.innerHTML=writeups.map((item,index)=>`
      <article class="writeup-card" data-writeup-index="${index}">
        <div class="meta"><span>${item.category}</span><span>${item.readTime}</span></div>
        <h4>${item.title}</h4>
        <p>${item.summary}</p>
      </article>
    `).join('');

    writeupGrid.querySelectorAll('[data-writeup-index]').forEach(card=>{
      card.addEventListener('click',()=>{
        const item=writeups[Number(card.dataset.writeupIndex)];
        writeupReaderTitle.textContent=item.title;
        writeupReaderBody.innerHTML=item.body;
        writeupReader.classList.add('active');
        writeupReader.setAttribute('aria-hidden','false');
      });
    });
  }

  function closeWriteupReader(){
    writeupReader?.classList.remove('active');
    writeupReader?.setAttribute('aria-hidden','true');
  }

  writeupReaderClose?.addEventListener('click',closeWriteupReader);
  writeupReader?.addEventListener('click',event=>{
    if(event.target===writeupReader)closeWriteupReader();
  });

  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&writeupReader?.classList.contains('active'))closeWriteupReader();
  });

  // Cyber / Professional mode
  const cyberModeButton=document.getElementById('cyberModeButton');
  const professionalModeButton=document.getElementById('professionalModeButton');

  function setPortfolioMode(mode){
    const professional=mode==='professional';
    document.body.classList.toggle('professional-mode',professional);
    cyberModeButton?.classList.toggle('active',!professional);
    professionalModeButton?.classList.toggle('active',professional);
    localStorage.setItem('portfolioMode',mode);
  }

  cyberModeButton?.addEventListener('click',()=>setPortfolioMode('cyber'));
  professionalModeButton?.addEventListener('click',()=>setPortfolioMode('professional'));

  const savedPortfolioMode=localStorage.getItem('portfolioMode')||'cyber';
  setPortfolioMode(savedPortfolioMode);


  // Hidden CTF challenge
  const ctfPanel=document.getElementById('ctfPanel');
  const ctfClose=document.getElementById('ctfClose');
  const ctfConsole=document.getElementById('ctfConsole');
  const ctfForm=document.getElementById('ctfForm');
  const ctfInput=document.getElementById('ctfInput');
  const ctfStage=document.getElementById('ctfStage');
  const ctfScore=document.getElementById('ctfScore');
  const ctfStatus=document.getElementById('ctfStatus');
  const ctfFlag=document.getElementById('ctfFlag');

  const ctfState={
    stage:Number(sessionStorage.getItem('ctfStage')||1),
    score:Number(sessionStorage.getItem('ctfScore')||0),
    completed:sessionStorage.getItem('ctfCompleted')==='1'
  };

  function saveCtfState(){
    sessionStorage.setItem('ctfStage',String(ctfState.stage));
    sessionStorage.setItem('ctfScore',String(ctfState.score));
    sessionStorage.setItem('ctfCompleted',ctfState.completed?'1':'0');
  }

  function updateCtfUi(){
    ctfStage.textContent=`${Math.min(ctfState.stage,4)} / 4`;
    ctfScore.textContent=String(ctfState.score);
    ctfStatus.textContent=ctfState.completed?'COMPLETED':'ACTIVE';

    if(ctfState.completed){
      ctfFlag.hidden=false;
      ctfFlag.textContent='FLAG{PORTFOLIO_SECURITY_EXPLORER}';
    }
  }

  function ctfPrint(message,type='normal'){
    const line=document.createElement('div');
    line.textContent=message;
    if(type==='error')line.style.color='#ff7b88';
    if(type==='success')line.style.color='var(--green)';
    if(type==='hint')line.style.color='var(--cyan)';
    ctfConsole.appendChild(line);
    ctfConsole.scrollTop=ctfConsole.scrollHeight;
  }

  function openCtf(){
    ctfPanel.classList.add('active');
    ctfPanel.setAttribute('aria-hidden','false');

    if(!ctfConsole.dataset.initialized){
      ctfConsole.dataset.initialized='1';
      ctfPrint('Initializing hidden challenge...');
      ctfPrint('Objective: locate, decode and submit the hidden flag.');
      ctfPrint('Start with: ls hidden','hint');
    }

    updateCtfUi();

    const isPhone=
      window.matchMedia('(max-width:760px)').matches &&
      window.matchMedia('(pointer:coarse)').matches;

    if(!isPhone)setTimeout(()=>ctfInput.focus(),30);
  }

  function closeCtf(){
    ctfPanel.classList.remove('active');
    ctfPanel.setAttribute('aria-hidden','true');
    ctfInput.blur();
  }

  function advanceCtf(points){
    ctfState.stage=Math.min(4,ctfState.stage+1);
    ctfState.score+=points;
    saveCtfState();
    updateCtfUi();
  }

  function resetCtf(){
    ctfState.stage=1;
    ctfState.score=0;
    ctfState.completed=false;
    saveCtfState();
    ctfConsole.innerHTML='';
    delete ctfConsole.dataset.initialized;
    ctfFlag.hidden=true;
    openCtf();
  }

  function runCtfCommand(raw){
    const command=String(raw||'').trim().toLowerCase();
    if(!command)return;

    ctfPrint(`visitor@ctf:~$ ${command}`);

    if(command==='help'){
      ctfPrint('Commands: ls hidden, cat clue.txt, decode flag.enc, submit <flag>, reset','hint');
      return;
    }

    if(command==='reset'){
      resetCtf();
      return;
    }

    if(ctfState.completed){
      ctfPrint('Challenge already completed. Use reset to play again.','hint');
      return;
    }

    if(command==='ls hidden'){
      ctfPrint('clue.txt');
      ctfPrint('flag.enc');
      if(ctfState.stage===1)advanceCtf(25);
      return;
    }

    if(command==='cat clue.txt'){
      if(ctfState.stage<2){
        ctfPrint('Access denied. Discover the hidden directory first.','error');
        return;
      }
      ctfPrint('CLUE: The encoded value uses Base64.');
      ctfPrint('Next command: decode flag.enc','hint');
      if(ctfState.stage===2)advanceCtf(25);
      return;
    }

    if(command==='cat flag.enc'){
      if(ctfState.stage<2){
        ctfPrint('Access denied. Discover the hidden directory first.','error');
        return;
      }
      ctfPrint('RkxBR3tQT1JURk9MSU9fU0VDVVJJVFlfRVhQTE9SRVJ9');
      return;
    }

    if(command==='decode flag.enc'){
      if(ctfState.stage<3){
        ctfPrint('Read clue.txt before decoding.','error');
        return;
      }
      ctfPrint('Decoded value: FLAG{PORTFOLIO_SECURITY_EXPLORER}','success');
      ctfPrint('Final step: submit FLAG{PORTFOLIO_SECURITY_EXPLORER}','hint');
      if(ctfState.stage===3)advanceCtf(25);
      return;
    }

    if(command.startsWith('submit ')){
      if(ctfState.stage<4){
        ctfPrint('Complete the previous stages first.','error');
        return;
      }

      const submitted=command.slice(7).trim();
      if(submitted==='flag{portfolio_security_explorer}'){
        ctfState.completed=true;
        ctfState.score+=25;
        saveCtfState();
        updateCtfUi();
        ctfPrint('FLAG ACCEPTED. ACCESS GRANTED.','success');
        ctfPrint('Achievement unlocked: CTF SOLVER','success');

        if(typeof unlockAchievement==='function'){
          unlockAchievement('CTF SOLVER','Completed the hidden portfolio challenge.');
        }

        if(typeof addClearance==='function')addClearance(10);
      }else{
        ctfPrint('Incorrect flag. Check capitalization and braces.','error');
      }
      return;
    }

    if(command==='whoami'){
      ctfPrint('visitor // clearance: limited // role: security explorer');
      return;
    }

    ctfPrint(`Command not found: ${command}. Type help.`, 'error');
  }

  ctfForm?.addEventListener('submit',event=>{
    event.preventDefault();
    const command=ctfInput.value.trim();
    ctfInput.value='';
    runCtfCommand(command);
  });

  ctfClose?.addEventListener('click',closeCtf);
  ctfPanel?.addEventListener('click',event=>{
    if(event.target===ctfPanel)closeCtf();
  });

  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&ctfPanel?.classList.contains('active'))closeCtf();
  });

  updateCtfUi();

  // Extend the main portfolio terminal with the ctf command.
  const runCommandBeforeCtf=runCommand;
  runCommand=function(raw){
    const normalized=String(raw||'').trim().toLowerCase();

    if(normalized==='ctf' || normalized==='play ctf' || normalized==='start ctf'){
      openCtf();
      return;
    }

    runCommandBeforeCtf(raw);
  };

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
