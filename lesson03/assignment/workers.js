//Data about individuals and their profiles

const workers = [{
    "name": "Steve Smith",
    "jobTitle": "Project Manager",
    "company": "Front End Dev Co",
    "experience": "3 years",
    "school": "UW",
    "major": "Marketing",
    "email": "steve@fedc.com",
    "linkedInUrl": "steve.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "CSS", "JavaScript", ".NET", "C#"
    ]
  },
  {
    "name": "Aaron Katz",
    "jobTitle": "Full Stack Developer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "SU",
    "major": "Computer Science",
    "email": "aaronNotMyemail@uw.com",
    "linkedInUrl": "aaron.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "CSS", "JavaScript", "PHP", "Twig"
    ]
  },
  {
    "name": "Kyle Hendricks",
    "jobTitle": "Starting Pitcher",
    "company": "Chicago Cubs",
    "experience": "12 years",
    "school": "USC",
    "major": "Pitching",
    "email": "kyleH@cubs.com",
    "linkedInUrl": "kyle.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "CSS", "JavaScript", "Ruby", "Rails"
    ]
  },
  {
    "name": "Michael Jordan",
    "jobTitle": "Point Guard",
    "company": "Chicago Bulls",
    "experience": "20 years",
    "school": "UNC",
    "major": "Trash Talking",
    "email": "mJordan@bulls.com",
    "linkedInUrl": "mJordan.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "CSS", "JavaScript", "Java", "Spring"
    ]
  }
]

//Uses map() function to create a new array
let employeeHTML = workers.map(function(el) {
  //Sets "person" as array of data from profiles above; separates info into two sections, personal-info and professional-info
  //Backticks note beginning and end of string; brown field goes behind professional-info
  let person = `<article class="person">
 <div class="personal-info">
 <p class="person__name category">${el.name}</p>
 <p class="person__name__jobTitle title">${el.jobTitle}</p>
</div>
<div class="professional-info brown-field">
 <p class="person__company"><span class="category">Company:</span> ${el.company}</p>
 <p class="person__experience"><span class="category">Experience: </span>${el.experience}<p>
 <p class="person__school"><span class="category">School: </span>${el.school}<p>
 <p class="person__major"><span class="category">Major: </span>${el.major}<p>
 <p class="person__email"><span class="category">Email: </span>${el.email}<p>
 <p class="person__linkedInUrl"><img src="img/linkedin.svg" class="linkedin" alt="a small version of the linkedin logo"> ${el.linkedInUrl}<p>
 <p class="person__codeLanguages"><span class="category">Code Languages: </span>${el.codeLanguages}<p>
 </div>
 </article>`;
  //Returns array defined above
  return person
});

//Appends array to HTML, hooking into "workers" class
$(".workers").append(employeeHTML);
