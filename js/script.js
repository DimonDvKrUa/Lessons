'use strict';

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs(plan) {
        const {age, skills: {languages}} = plan;
        return `Мне ${age} и я владею языками: ${languages.join(' ').toUpperCase()}`;
    }
};

// function showExperience(plan) {
//     const {skills: {exp}} = plan;
//     return exp;
// }

// console.log(showExperience(personalPlanPeter));


// function showProgrammingLangs(plan) {
//     const {skills: {programmingLangs}} = plan;
//     let txt='';
//     for (let key in programmingLangs) {
//         txt += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }
//     return txt;
// }

// console.log(showProgrammingLangs(personalPlanPeter));

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));