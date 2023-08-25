var express = require('express');
var router = express.Router();

const nameList = [
  {'Id': 1,'Term':'DevOps','Description':'  is a set of practices, tools, and a cultural philosophy that automate and integrate the processes between software development and IT teams. It emphasizes team empowerment, cross-team communication and collaboration, and technology automation','reference':'I. Sommerville et al., “SOFTWARE ENGINEERING Ninth Edition.” Available: https://www.atlassian.com/devops</'},
  {'Id': 2,'Term':'The Wall of Confusion','Description':'It refers to the phenomena where one group in a value stream approaches their job as complete when they have passed it onto the next group','reference':'I. Sommerville et al., “SOFTWARE ENGINEERING Ninth Edition.” Available: https://levelup.gitconnected.com/the-wall-of-confusion-623057a4dd26/'},
  {'Id': 3, 'Term':"UX",'Description':'UX design is the design of the elements that determine the interaction a user has with a product or service.','reference':'https://careerfoundry.com/en/blog/ux-design/what-is-user-experience-ux-design-everything-you-need-to-know-to-get-started/'},
  {'Id': 4, 'Term':"Continuous Integration (CI)",'Description':'Continuous Integration (CI) is a software development practice that aims to streamline the process of building, testing, and integrating code changes into a shared repository. By automating these tasks, CI allows developers to frequently and efficiently integrate their changes, often multiple times a day.','reference':'S. Hamdan and S. Alramouni, “A Quality Framework for Software Continuous Integration,” Procedia Manufacturing, vol. 3, pp. 2019–2025, 2015, doi: https://doi.org/10.1016/j.promfg.2015.07.249'},
  {'Id': 5, 'Term':"Nodejs",'Description':'Is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project! ','reference':'Kim, Gene, et al. "Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations." IT Revolution Press, 2018.'},
  {'Id': 6, 'Term':"Software Change Management",'Description':'The term Software Change Management refers to a structured and systematic approach that organizations use to plan, implement, and manage changes in a controlled manner.','reference':'A. A. Khan, S. Basri, and P. D. D. Dominic, “A propose framework for requirement Change Management in Global Software Development,” 2012 International Conference on Computer & Information Science (ICCIS), Jun. 2012, doi: https://doi.org/10.1109/iccisci.2012.6297161.'},
  {'Id': 7, 'Term':"Release Management",'Description':'The process involves the planning, development, testing, deployment, and monitoring of a software release.','reference':'A. van der Hoek, R. S. Hall, D. Heimbigner, and A. L. Wolf, “Software release management,” ACM SIGSOFT Software Engineering Notes, vol. 22, no. 6, pp. 159–175, Nov. 1997, doi: https://doi.org/10.1145/267896.267909.'},
  {'Id': 8, 'Term':"Downtime",'Description':'A downtime occurs when a piece of software is not available for users to use. It is the opposite of an uptime, which is a period during which the software is running.','reference':'D. Patterson, “A Simple Way to Estimate the Cost of Downtime,” 2002. Accessed: Jul. 23, 2023. [Online]. Available: http://roc.cs.berkeley.edu/papers/Cost_Downtime_LISA.pdf'},
  {'Id': 9, 'Term':"Monitoring and Alerting",'Description':'Monitoring and alerting are critical components of software operations and infrastructure management. A software performance monitor is employed to ensure that software systems perform well, are available, and reliable, as well as to detect and respond to any anomalies that may occur. Alerting is the process of setting up rules and thresholds based on predefined conditions or criteria in the monitored data. When these conditions are met or when anomalies are detected, the monitoring system generates alerts or notifications to notify the responsible teams about potential issues.','reference':'"The DevOps Handbook: How to Create World-Class Agility, Reliability, and Security in Technology Organizations" by Gene Kim, Patrick Debois, John Willis, and Jez Humble. This book covers various aspects of DevOps, including monitoring, alerting, and improving IT operations.'},
  {'Id': 10, 'Term':"Devops",'Description':'DevOps is a set of practices and cultural philosophies aimed at improving collaboration and communication between development teams (Dev) and IT operations teams (Ops). The goal is to break down the traditional silos between these teams and encourage a culture of shared ownership across the software development and delivery lifecycle','reference':'C. Ebert, G. Gallardo, J. Hernantes, and N. Serrano, “DevOps,” IEEE Software, vol. 33, no. 3, pp. 94–100, May 2016, doi: https://doi.org/10.1109/ms.2016.68. “(PDF) A Qualitative Study of DevOps Usage in Practice,” ResearchGate. https://www.researchgate.net/publication/316879884_A_Qualitative_Study_of_DevOps_Usage_in_Practic'},
  

];



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sit722- - Software Deployment And Operation', subheading: 'Below is the table containing collection of DevOps terms and their descriptions with references' });
});

module.exports = router;





