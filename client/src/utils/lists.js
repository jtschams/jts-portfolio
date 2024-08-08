import AdventurerVault from '../assets/adventurer-vault.png'
import DishDelight from '../assets/dish-delight.png'
import TechBlog from '../assets/tech-blog.png'
import ParkRainger from '../assets/park-rainger.png'

export const proficiencies = [ 'HTML', 'CSS', 'JavaScript', 'Node', 'Express', 'PostgreSQL', 'Sequelize', 'MongoDB', 'Mongoose', 'React', 'MERN' ]

// TODO: Fill out project list, add and import pictures
export const projects = [
  {
    name: 'Adventurer Vault',
    repo: 'https://github.com/TheDorkTrain/Adventurer-Vault',
    page: 'https://adventurer-vault.onrender.com/',
    preview: AdventurerVault,
    contribution: 'I created the Mongo Database and backend for this website.',
    description: 'A MERN stack website used to store DND Character Sheets, along with spells, items, and journal entries.',
  }, {
    name: 'Dish Delight',
    repo: 'https://github.com/jtschams/dish-delight',
    page: 'https://dish-delight-ggab.onrender.com',
    preview: DishDelight,
    contribution: 'I created the SQL Database and backend for this website.',
    description: 'A website for saving and sharing recipes.',
  }, {
    name: 'MVC style Blog',
    repo: 'https://github.com/jtschams/mvc-tech-blog',
    page: 'https://mvc-tech-blog-y48f.onrender.com',
    preview: TechBlog,
    contribution: 'I created this solo project with a SQL database.',
    description: 'A simple blog site created using MVC structure.',
  }, {
    name: 'Park RAINger',
    repo: 'https://github.com/andrewvu71/Park-Rainger-App',
    page: 'https://andrewvu71.github.io/Park-Rainger-App/',
    preview: ParkRainger,
    contribution: 'I handled the 3 API calls we needed to pull together for the website.',
    description: 'A website for finding nearby National Parks with rain in their forecast.',
  // }, {
  //   name: '',
  //   repo: '',
  //   page: '',
  //   preview: '',
  //   description: '',
  // }, {
  //   name: '',
  //   repo: '',
  //   page: '',
  //   preview: '',
  //   description: '',
  },
]
