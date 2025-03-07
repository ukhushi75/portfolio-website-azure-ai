import { NextResponse } from 'next/server';
const { AzureOpenAI } = require("openai");
//const dotenv = require("dotenv");
//dotenv.config();

const endpoint = "https://porfoliowebsitegpt.openai.azure.com/";
const apiKey = "D7hWVNwitv2GNtcnXazy88ynLjtHs1KqY3uGRa6fYHLIpukCzfVKJQQJ99BBACHrzpqXJ3w3AAABACOGwibH";
const deployment = "gpt-4o";
const apiVersion = "2024-05-01-preview";


export async function POST(req){
	
	const { messages } = await req.json();

    const client  = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });

	messages.unshift({
		role: 'system',
		content: `You are PortfolioGPT, answering only questions based on the resume provided.
Resume:
${DATA_RESUME}

Help users learn more about Khushi from her resume.`
	})

	const response = await client.chat.completions.create({ messages, model: deployment, max_tokens: 190 });
	

	return NextResponse.json({ 
		message: response.choices[0].message.content
	 })
}




const DATA_RESUME = 
' Hobbies: Khushi loves to gym and build websites like this one.\
Khushi Upadhyay (647) 544-2234| ukhushi75@gmail.com | LinkedIn |  GitHub EXECUTIVE SUMMARY A proficient computer engineering graduate, adept in software design, development, and testing.\
With exceptional analytical, technical, and programming skills, aspiring to excel as a computer engineer, driving innovation and achieving excellence in the field. EDUCATION  Bachelor of Computer Engineering (Specialized Honours)  \
Sep 19 – Apr 24   Certificate in Technology Entrepreneurship (BEST)   \
York University, Toronto, Canada (Lassonde School of Engineering)  TECHNICAL SKILLS  Programming Languages:  Java, Spring, Python, Verilog, MATLAB, C++. \
Database Management Systems:  SQL, MYSQL. Other Tools/Libraries: Visual Studio Code, Jira, Tableau, REST API, Jupyter, Arduino, Eclipse, Quartus, WordPress, Git, GitHub, Google Collab, Embedded Systems. EXPERIENCE Student Success Mentor Lead (Excel Lassonde)         \
Jun 23 – Apr 24  Managed a free tutoring service under student welcome and support center at Lassonde School of Engineering, York University. \
Lead a team of 30, resulting in a 30% increase in participation. Managed the financials of the service by creating comprehensive reports and proposals.  FrontEnd Developer at YuRide   \
Sep 22 – Dec 22  Utilized Java and Android Studio to develop an Android application, focusing on front-end development within an Agile environment.\
Enhanced app performance by 15% through code minification and resolved issues with browser developer tools.  Achieved a 20% reduction in page load speeds and improved conversion rates by implementing ReactJS. \
Collaborated on application design and code using Miro, Figma, Microsoft Teams, GitHub, and Git. Tech Specialist at GAOTek Inc.    May 22 – Aug 22 Collaborated on the flow management of IEP for facsimile modulations in embedded development tools.\
Wrote test cases and debugged ITU-T T.38 codes using embedded C on Visual Studio Code.  ACADEMIC PROJECTS AIAA Design, Build, and Fly \   Sep 23 - Present  Leading wireless communication as a part of the capstone project to build an RF 5ft airplane with real-time telemetry and autonomous flight capabilities.\
Collaborating on flight direction using Raspberry Pi and Python to meet AIAA competition requirements.\
Contributing to designing an aircraft that completes Mission 3 of the competition AIAA “Urban Taxi Flight” involving a five-minute window for takeoff, landing, and navigating a predetermined course with crew and passengers.  Warehouse Management System      \
Sep 23 - Dec 23 Created a warehouse management system prototype with client side and server-side UI with URL parameters.  Designed a UI software prototype of a warehouse management system with 6 use cases including login server, client server, placing an order, restocking, and many more.\
Applied more than more than 4 software design patterns. Traffic Light Signal     Sep 22 – Dec 22 Created traffic light signal prototype with the help of DE10-Lite and linked the board to the Verilog IoT Cloud and managed complex research equipment with two motors.  \
Used sequential and combinational logic in Verilog to make streetlight change red/green with the help of four ultrasonic sensors.  AWARDS / CERTIFICATIONS • UNHACK 2023 mentor certificate of appreciation • Voluntary contribution award at the 2018-2019 Lassonde Awards Ceremony • \
Associate Java Certification 1Z0-808 • 1Z0-819 - Java SE 11 Developer (In progress)\
 EXPERIENCE Sep 19  - Apr 24 \
Software QA Engineer at Quarterhill           \
Jul 24 - present \
• Developing automated testing scripts using Cucumber and Selenium, reducing manual testing time by 40% and accelerating \
deployment cycles. \
• Contribute to projects such as launching over 10 express lanes for ACTC, leading to a 5% revenue increase through enhanced toll \
collection. \
• Verify data using SQL and collaborate on the Tire Anomaly Classification System (TACS), improving safety notifications and \
compliance. \
• Participate in Agile and Scrum methodologies for effective project delivery. \
PROJECTS \
Responsive Portfolio Website                     \
Oct 2024 \
• Developed a fully responsive portfolio website from scratch using HTML, CSS, and JavaScript, featuring a single page design with \
animations for enhanced user experience.  \
• Migrated the project to a React application using Next.js, enabling easy cloud deployment and additional transition effects. \
• Integrated AI technology on Microsoft Azure, including chatbot utilizing the GPT 3.5 API, to enhance interactivity and user \
management.   \
• Demonstrated a comprehensive understanding of web development fundamentals, responsive design principles, and modern \
deployment practices.   \
AWARDS / CERTIFICATIONS \
• Microsoft AZ-900 Certification (in progres) \
• Associate Java Certification 1Z0-808 \
• York University Faculty Associate Graduate Award in the 2023-24 school year\
current experience \
EXPERIENCE \
Software QA Engineer at Quarterhill  \
Jul 24 - present \
• Collaborate on both Roadside and Backoffice operations in the tolling industry, enhancing customer experience and \
optimizing software performance. \
• Present ideas and testing results to clients twice a week, ensuring alignment on project progress and feedback. \
• Conduct rigorous testing using PL/SQL, PostgreSQL, and Postman on the ongoing 405expresslanes software, contributing to \
improved user experience. \
• Develop and automate testing scripts with Cucumber and Selenium using Eclipse, reducing manual testing time and increasing \
efficiency\
• Work closely with the development team to provide quality assurance insights and contribute to the continuous improvement \
of development practices\
'


