/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

const skills = {
  "Lenguajes de programación": { "Python": 90, "Javascript": 60, "R": 50 },
  "Testing": { "Cypress": 60, "Cucumber": 50, "Jest": 50, "Pytest": 60, "Selenium": 75, "SeleniumBase": 75 },
  "Datos": { "Pandas": 90, "Numpy": 70, "Scikit-learn": 50, "xlsxwriter": 90, "Jupyter Notebook": 90 },
  "Desarrollo web": { "HTML": 90, "CSS": 70, "Node.js": 40, "React": 40, "Angular": 30, "Flask": 20, "Django": 20 },
  "Machine Learning": { "Algoritmos supervisados": 90, "Algoritmos no supervisados": 70, "Series temporales": 50, "NLP": 30 },
  "Crawlers": { "Scrapy": 60, "Selenium": 75, "Beautiful Soup": 60 },
  "Ofimática": { "Excel": 90, "Word": 90, "Powerpoint": 90 },
  "Otros": { "Git": 70, "Metodologías ágiles": 70, "Docker": 30 }
};

const langs = {
  "": { "Castellano": 100, "Inglés": 60, "Francés": 50 }
};

const generateFieldSet = (skills, headerName, classWhereInsert) => {
  const header = `<h1>${headerName}</h1>`
  const skillGroupHtml = (skGroup, skGIndex) => `<fieldset class="container-skg skill-group-${skGIndex}">
  <legend>${skGroup}</legend>`

  const footer = `</fieldset>`

  const skillHtml = (skIndex, sk, skValue) => {
    const htmlSk = sk.replace(/\s/g, '').replace('é', '').toLowerCase()

    return `<div class="container-sk skill-${skIndex}">
  <label for="${htmlSk}">${sk}</label>
  <progress id="${htmlSk}" max="100" value="${skValue}"> ${skValue}% </progress>
  </div>`}

  let output = "";

  output += header;

  Object.entries(skills)
    .map((skillGroup, skillGroupIndex) => {
      console.log(skillGroup[0])
      output += skillGroupHtml(skillGroup[0], skillGroupIndex)
      Object.entries(skills[skillGroup[0]])
        .map((skill, skillIndex) => {
          output += skillHtml(skillIndex, skill[0], skill[1])
        }
        )
      output += footer
    }
    )
  document.querySelector(classWhereInsert).innerHTML = output;

}

const main = () => {
  generateFieldSet(skills, "Habilidades", ".container-habilidades")
  generateFieldSet(langs, "Idiomas", ".container-idiomas")
}

main()