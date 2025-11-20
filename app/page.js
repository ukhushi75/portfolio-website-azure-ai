    "use client";
    import { useState } from "react";
    import Image from "next/image";


    
    export default function Home() {

        const [menuOpen, setMenuOpen] = useState(false);
        const [ messageInput, setMessageInput ] = useState('');

        const [messages, setMessages] = useState([

            {
                role: 'assistant',
                content: 'How can I help you learn more about Khushi and her Resume?'
            }
        ])
        const submitForm = async (e) => {
            e.preventDefault();
            let newMessages = [...messages, { role: 'user', content: messageInput }];
            setMessages(newMessages);
            setMessageInput('');
            const apiMessage = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ messages: newMessages })
            }
        ).then(res => res.json())
    
        setMessages([...newMessages, { role: 'assistant', content: apiMessage.message }]);
        }

        

        const toggleMobileMenu = () => {
        setMenuOpen(!menuOpen);

        }

        return (
        <>
       
            <header>
            <a href="#" className="logo-holder">
                <div className="logo">K</div>
                <div className="logo-text">Portfolio Website</div>
            </a> 
            <nav>
                <ul id="menu" className={menuOpen ? "active" : ""}>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="mailto:ukhushi75@gmail.com" 
                        className="button">Contact Me</a>
                    </li>
                </ul>
                <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/>
                </svg>
                </a>
            </nav>
        </header>
        <main>
            <section className="hero container">
                <div className="hero-blue">
                    <div>
                        <h1><small>Hi I'm</small>
                            Khushi Upadhyay
                        </h1>
                        <p>
                            I build and optimize intelligent full-stack applications. With a strong foundation in backend development using Java and Python, and expertise in cloud platforms like AWS and Azure, I create scalable, efficient solutions. 
                            <span> I'm passionate about integrating AI and machine learning to solve complex problems and enhance user experiences. </span>
                        </p>
                        <div className="call-to-action">
                            <a href="./KhushiUpadhyayResume.pdf" className="button black">
                                View Resume
                            </a>
                            <a href="mailto:ukhushi75@gmail.com" className="button white">
                                Contact Me
                            </a>
                        </div>
                        <div className="social-links">
                            <a href="https://github.com/ukhushi75">
                                <img src="./imgs/github.png" alt="GitHub" width="48"/>
                            </a>
                            <a href="https://www.linkedin.com/in/khushi-upadhyay/">
                                    <img src="./imgs/linkedin.png" alt="LinkdedIn" width="48"/>
                            </a>
                        </div>
                    </div>


                </div>
                <div className="hero-yellow">
                    <img src="./imgs/hero-image-me_processed.png" alt="Khushi Upadhyay" width="100%"/>
                </div>
            </section>
            <section className="logos container">
                <div className="marquee">
                    <div className="track">
                        <img src="./imgs/html.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/css.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/javascript.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/sass.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/react.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/nextjs.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/azure.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/vscode.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/html.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/css.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/javascript.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/sass.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/react.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/nextjs.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/azure.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/vscode.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/html.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/css.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/javascript.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/sass.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/react.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/nextjs.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/azure.png"
                        alt="HTML" width="128" />
                        <img src="./imgs/vscode.png"
                        alt="HTML" width="128" />

                    </div>
                </div>


            </section>
            <section id="skills" className="skills container">
                <h2>
                    <small>About Me</small>
                    Skills
                </h2>
                <div className="holder-blue">
                    <div className="left-column">
                        <h3>Frontend</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Angular</li>
                            <li>Vue</li>
                        </ul>
                        <h3>Backend</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>SQL</li>
                            <li>TypeScript</li>
                        </ul>

                    </div>
                    <div className="right-column">

                        <h3>A bit about me</h3>
                        <p style={{ lineHeight: '1.4', marginBottom: '1.5rem' }}>
                            I'm a Software Engineer passionate about building intelligent, scalable systems. 
                            My expertise is in backend development with Java and Python, where I've designed microservices APIs, 
                            automated CI/CD to cut release times by 70%, and built data tools with integrated ML models.
                        </p>
                        <p style={{ lineHeight: '1.4', marginBottom: '0.5rem' }}>
                        Driven by innovation, I explore AI's practical applications. 
                        This portfolio, built with React and Next.js and enhanced by an Azure OpenAI chatbot, 
                        reflects that passion. I'm eager to join a forward-thinking team to contribute my skills in software engineering, cloud, 
                        and AI toward building impactful, next-generation products.
                        </p>
                    </div>
                </div>

            </section>
            <section className="work-experience container">
                <h2>
                    <small>Recent</small>
                    Work Experience
                </h2>
                <div className="jobs">
                    <article>
                        <figure>
                            <div>
                            <a href="https://www.quarterhill.com/">
                                <img src="./imgs/work-experience-1.png" 
                                alt="Workplace 1 - Software QA Engineer" 
                                width="100%"/>
                            </a>
                                <figcaption>
                                    Software Engineer
                                </figcaption>
                            </div>
                        </figure>
                        <h3>Quarterhill</h3>
                        <div>Jul 2024 - Aug 2025</div>
                        <p>A leading provider of tolling and enforcement solutions in the Intelligent Transportation System(ITS) industry.
                            More info. in resume.
                        </p>
                    </article>
                    <article>
                        <figure>
                            <div>
                            <a href="https://g.co/kgs/ptx8K3n">
                                <img src="./imgs/work experince - 2.png" 
                                alt="Workplace 2 - Frontend Developer" 
                                width="100%"/>
                            </a>
                                <figcaption>
                                    Frontend Developer
                                </figcaption>
                            </div>
                        </figure>
                        <h3>YuRideshare</h3>
                        <div>Sep 2022 - Dec 2022
                        </div>
                        <p>A startup collaborating with York University to offer a tailored, sustainable, and safe rideshare system.
                            More info. in resume.
                        </p>
                    </article>                
                    <article>
                        <figure>
                            <div>
                            <a href="https://gaotek.com/">
                                <img src="./imgs/work experience -3.png" 
                                alt="Workplace 3 - Tech Specialist" 
                                width="100%"/>
                            </a>
                                <figcaption>
                                    Web Developer
                                </figcaption>
                            </div>
                        </figure>
                        <h3>Excel Lassonde</h3>
                        <div>Aug 2021 - Sep 2022</div>
                        <p>The dedicated academic support club within the Lassonde School of Engineering, 
                            delivering expert-led tutoring and workshops to elevate student achievement in core STEM disciplines.
                        </p>
                    </article>
                </div>
            </section>
            <section id="projects" className="bento container">
                <h2>
                    <small>
                        Previous
                    </small>
                    Completed Projects
                </h2>
                <div className="bento-grid">
                    <a href="https://lassonde.yorku.ca/lassonde-clubs" className="bento-item">
                        <img src="./imgs/Project - 1.png" 
                        alt="YorkU Excel Lassonde Club" 
                        width="100%"/>
                    </a>
                    <a href="https://www.linkedin.com/posts/khushi-upadhyay_capstoneproject-aiaadesignbuildfly-teamwork-activity-7198146573220888577-1gJw?utm_source=share&utm_medium=member_desktop" className="bento-item">
                        <img src="./imgs/Project-2.png" 
                        alt="AIAA RC Plane" 
                        width="100%"/>
                    </a>
                    <a href="https://github.com/ukhushi75/The-Smart-Gate" className="bento-item">
                        <img src="./imgs/Project - 3.png" 
                        alt="The Smart Gate" 
                        width="100%"/>
                    </a>
                    <a href="https://github.com/ukhushi75/Foosball-Game" className="bento-item">
                        <img src="./imgs/Project - 4.png" 
                        alt="Foosball Game" 
                        width="100%"/>
                    </a>
                    <a href="https://github.com/ukhushi75/TaskManagerApplication" className="bento-item">
                        <img src="./imgs/Project - 5.png" 
                        alt="Task Manager" 
                        width="100%"
                        />
                    </a>
                    <a href="https://github.com/ukhushi75/MachineLearningWithWifi" className="bento-item">
                        <img src="./imgs/project - 6.png" 
                        alt="Preprocessing and Topic Modeling Simple Crypto Widget" 
                        width="100%"/>
                    </a>
                </div>
            </section>
            <section className="chatbot container">
                <h2>
                    <small>
                        Talk to me
                    </small>
                    Chatbot
                </h2>
                <div className="chatbot-blue">
                    <div className="chatbot-info">
                        <h3>Azure AI Chatbot</h3>
                        <p>I've put together a chatbot here which knows all my skills, work experience and has a copy of my Resume.
                            you can use it to ask questions about me to get a better idea of who I am and what I've done.</p>
                        <p>You can also download my resume here if you want to take a look at it. I'm currently looking for new opportunites so if you have a project you think I'd be a good fit for, please get in touch!</p>
                        <a href="./KhushiUpadhyayResume.pdf" className="button black">Download Resume</a>
                        <div className="chat-box">
                            <div className="scroll-area">
                                        <ul id="chat-log">
                                {messages.map((message, index) => (
                                    <li key={index} className={`${message.role}`}>
                                    <span className={`avatar`}>{message.role === 'user' ? 'You' : 'AI'}</span>
                                    <div className="message">{message.content}</div>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            <form onSubmit={submitForm} className="chat-message">
                                <input type="text" 
                                placeholder="Hey Khushi, what skills are you best at?" value={messageInput} onChange={e => setMessageInput(e.target.value)}/>
                                <button className="button black">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
        );
    }
