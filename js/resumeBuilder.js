/* Resume page. */

var bioPic = HTMLbioPic.replace("%data%", "images/joel.jpg");
//var welcomeMsg = HTMLwelcomeMsg.replace("%data%", 0731566216);
// $("#workExperience h2").append(welcomeMsg);

var bio = {
    "name" : "Joel Samuel Kapepula",
    "role" : "Web Developer",
    "contacts" : {
          "mobile": "+27 72 552 72 33",
          "email": "joel@responsive.co.za",
          "github": "joelsamuelk",
          "twitter": "@joelsamuelkap",
          "location": "Cape Town"
    },
    "welcomeMessage": "Hey,Welcome to my resume!",
    "skills": [
        "HTML", "CSS", "Javascript", "PHP", "Wordpress", "JQuery"
	],
    "biopic": "images/joel.jpg"
}

// Header Section
if (bio.skills.length > 0) {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	// Contacts
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts, #footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts, #footerContacts").append(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts, #footerContacts").append(formattedTwitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts, #footerContacts").append(formattedGithub);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts, #footerContacts").append(formattedLocation);

	var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(bioPic);
	$("#header").append(welcomeMsg);

	// Skills
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);

}


var education = {
	"schools": [{
		"name": "Saint Joseph College",
		"location": "Kinshasa",
		"degree": "High School",
		"majors": ["Math - Physics"],
		"dates": "September 2008 - June 2009",
		"url": "#"
	}, {
		"name": "Cape Peninsula University of Technology",
		"location": "Cape Town",
		"degree": "Btech",
		"majors": ["Computer System"],
		"dates": "January 2011- December 2013",
		"url": "cput.ac.za"
	}],
	"onlineCourses": [{
		"title": "JavaScript Syntax",
		"school": "Udacity",
		"date": "March 2016 - Current",
		"url": "udacity.com"
	}]
}

var work = {
	"jobs": [{
		"employer": "EOM5",
		"title": "Junior Developer",
		"location": "Cape Town",
		"dates": "2013 - 2015",
		"description": "Initially trained in the SAP/ABAP environment then got very exciting about the web" +
		" environment then decided to teach myself how to code in the web space."
	}, {
		"employer": "Responsive",
		"title": "Web Developer",
		"location": "Cape Town",
		"dates": "2015 - current",
		"description": "Passionate about solving highly stressful situation with clean, excellent and fast method."	}]

}
 work.display = function(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title );
		var formmatedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formmatedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.display();


education.display = function() {
    $("#education").append(HTMLschoolStart);
    for(var school in education.schools) {
        var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry").append(schoolName);
        var schoolYear = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry").append(schoolYear);
        var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry").append(schoolMajor);
    }

    $(".education-entry").append(HTMLonlineClasses);
    for(var onlineCourse in education.onlineCourses) {

        var onlineCourseName = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);

        var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        $(".education-entry").append(onlineCourseName + onlineSchool);

        var onlineCourseYear = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
        $(".education-entry").append(onlineCourseYear);
        var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry").append(onlineURL);
    }
};
education.display();

var projects = {
	"projects": [{
		"title": "InvestAfrica",
		"dates": "2015",
		"description": "investement and porotfolio site",
		"images": ["images/ia1.png",["images/ia2.png"],["images/ia3.png"]]
	},{
		"title": "Le Noir ",
		"dates": "2015",
		"description": "online store",
		"images": ["images/lenoir1.png",["images/lenoir2.png"],["images/lenoir3.png"]]
	},
	{
		"title": "African Investment ",
		"dates": "2015",
		"description": "investment and informative site",
		"images": ["images/aci1.png",["images/aci2.png"],["images/aci3.png"]]
	}]
}

projects.display = function () {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
projects.display();

// intenationalisation
function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUppercase() + name[0].slice(1).toLowerCase();
    return name[0] + " "+name[1];
}
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

// Protecting my resume
var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};

$( document ).ready(function() {
	$( ".project-entry img" ).addClass( "col-md-4 img-responsive");

	$('.parallax-window').parallax({imageSrc: 'images/winter.jpg'});
});

jQuery(window).trigger('resize').trigger('scroll');
