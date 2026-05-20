import dashboardImage from '../assets/project-dashboard.svg'
import ecommerceImage from '../assets/project-ecommerce.svg'
import taskImage from '../assets/project-tasks.svg'
import learningImage from '../assets/project-learning.svg'

export const projects = [
  {
  title: 'Bala Mukil Hospital Management System',
  description:
    'A web-based Hospital Management System developed using PHP for managing patient records, appointments, and hospital operations efficiently.',
  stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  category: 'web',
  image: dashboardImage,
  github: 'https://github.com/',
  demo: 'https://example.com/',
  },
  {
  title: 'Daily Dev Drills App',
  description:
    'A mobile application built using Flutter and Firebase to provide daily programming practice questions with Easy, Medium, and Hard levels for improving coding skills.',
  stack: ['Flutter', 'Firebase', 'Dart'],
  category: 'mobile',
  image: ecommerceImage,
  github: 'https://github.com/',
  demo: 'https://example.com/',
  },
  {
  title: 'Tic Tac Toe Game',
  description:
    'A desktop Tic Tac Toe game developed using Python Tkinter with Firebase integration and AI-based Minimax algorithm for optimal move decision-making.',
  stack: ['Python', 'Tkinter', 'Firebase', 'Minimax Algorithm (AI)'],
  category: 'desktop',
  image: taskImage,
  github: 'https://github.com/',
  demo: 'https://example.com/',
},
{
  title: 'Market Basket Analysis',
  description:
    'A data-driven web application that analyzes customer purchase patterns using the Apriori algorithm and generates association rules for product recommendations.',
  stack: ['React', 'Flask API', 'Python', 'SQL', 'Apriori Algorithm'],
  category: 'web',
  image: learningImage,
  github: 'https://github.com/',
  demo: 'https://example.com/',
},
]
