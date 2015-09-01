/*
 This is empty on purpose! Your code to build the resume will go here.
 */
/*
 This is empty on purpose! Your code to build the resume will go here.
 */
//Bio Object
var bio = {
    "name": "Gonzalo Gisbert",
    "role": "Developer",
    "contacts": {
        "skype": "gongisbert",
        "mobile": "+54922160315112",
        "email": "gonzalo.a.gisbert@gmail.com",
        "github": "g0ng0n",
        "twitter": "@gonzha",
        "location": "Buenos Aires"
    },
    "summaryMessage": "I am a passionate hands-on professional, " +
    "I have more or less 5 years experience in Java development covering multiple technologies and frameworks." +
    " I keep a top of new developments within the industry and can adapt quickly to new coding conventions working" +
    " environments and new technologies",

    "age": 28,
    "skills": [{
        'id': 'HTML',
        'headline': 'HTML & CSS',
        'percent': 40,
        'description': 'Significant experience and knowledge of HTML(5) and CSS functionality and use.'

    }, {
        'id': 'JS',
        'headline': 'JavaScript & jQuery',
        'percent': 60,
        'description': 'Experience with object-oriented JavaScript. </br> ' +
        'Extended knowledge of DOM manipulation in aiding and extending the UI.'

    }, {
        'id': 'Java',
        'headline': 'Java',
        'percent': 80,
        'description': 'Experience with object-oriented Java. </br> ' +
        'Extended knowledge of Java API for RESTful Web Services.'

    }],

    //this function serves to display the header information
    displayHeader: function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        for (var contact in bio.contacts) {
            var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
            formattedContact = formattedContact.replace("%contact%", contact);
            $("#topContacts").append(formattedContact);
        }

        var formattedDescription = HTMLwelcomeMsg.replace("%data%", bio.summaryMessage);
        $("#header").append(formattedDescription);


    },
    //this function serves to display the skills information
    displaySkills: function() {
        {
            if (bio.skills.length > 0) {



                for (var i = 0; i < bio.skills.length; i++) {
                    var id = bio.skills[i].id;
                    var head = bio.skills[i].headline;
                    var percent = bio.skills[i].percent;
                    var formattedSkills = HTMLskills.replace("%heading%", head)
                        .replace("%percent%", percent)
                        .replace("%id%", id).replace("%title%", head);

                    $("#skills").append(formattedSkills);
                    var formattedBar = HTMLskillBar.replace("%percent%", percent);
                    $("#" + id).append(formattedBar);
                }

            }
            $(function() {

                //Skills Bar Animation
                $('.skill-bar').each(function() {
                    var t = $(this),
                        dataperc = t.attr('data-perc'),
                        barperc = Math.round(dataperc * 4.0);
                    t.find('.bar').animate({
                        width: barperc
                    }, dataperc * 25);

                    function perc() {
                        var length = t.find('.bar').css('width'),
                            perc = Math.round(parseInt(length) / 4.0);
                        t.find('.percent').text(perc + '%');
                    }
                    perc();
                    setInterval(perc, 0);
                });

            });
        }
    },
    //this function serves to display the footer contact information
    displayFooter: function() {
        for (var key in bio.contacts) {
            var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[key]);
            formattedContact = formattedContact.replace("%contact%", key);
            $("#footerContacts").append(formattedContact);
        }
    },
    //this function serves to display the information above
    display: function() {
        this.displayHeader();
        if (this.skills.length > 0) {
            this.displaySkills();
        }
        this.displayFooter();
    }
};

var work = {
    "jobs": [{
        "title": "Java Developer",
        "employer": "Globant",
        "location": "La Plata",
        "dates": "2011 - 2015",
        "description": "Working with Rest Technologies in the middleware of the application, Design and Development."
    }, {
        "title": "Java Developer",
        "employer": "Hewllet Packard",
        "location": "Buenos Aires",
        "dates": "2010 - 2011",
        "description": "Workwed as an Java Application Developer in project developed in JEE technology " +
        "for American Airlines Account, " +
        "where the client is located in Dallas Texas."
    }],

    display: function() {
        for (var key in work.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[key].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[key].title);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[key].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[key].description);

            $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedDescription);
        }
    }
};

var projects = {
    "projects": [{
        "title": "Rest API Developer at Disney Parks Resorts Digital",
        "dates": "2011 - 2015",
        "description": "Working with Rest Technologies in the middleware of the application, " +
        "Design and Development.",
        "images": ["images/197x148.gif"]
    }, {
        "title": "Rest API Developer at Walt Disney Parks Resorts Online",
        "dates": "2011 - 2015",
        "description": "Working with Rest Technologies in the middleware of the application," +
        " Design and Development.",
        "images": ["images/197x148.gif"]
    }],

    display: function() {

        for (var key in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[key].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[key].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[key].description);

            $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
            for (var keyProject in projects.projects[key].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[keyProject].images[keyProject]);
                $(".project-entry:last").append(formattedImage);
            };
        }
    }

};
var education = {
    "schools": [{
        "name": "Universidad Nacional de La Plata",
        "location": "La Plata",
        "degree": "Bachelor",
        "major": "Computer Science",
        "dates": "2012 - unfinished"
    }],
    "onlineCourses": [{
        "title": "Front-End Nanodegree",
        "school": "Udacity",
        "date": 2015,
        "url": "http://www.udacity.com"
    }],
    display: function() {

        for (var key in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", education.schools[key].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[key].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[key].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[key].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[key].major);
            $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
        }

        $("#education").append(HTMLonlineClasses);

        for (var key in education.onlineCourses) {

            $("#education").append(HTMLonlineClassesStart);

            var formattedName = HTMLonlineTitle.replace("%data%", education.onlineCourses[key].title);
            var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[key].date);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[key].school);
            var formatedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[key].url);
            $(".education-entry:last").append(formattedName + formattedDegree, formattedDate, formattedSchool, formatedURL);
        }
    }
};



//Build the resume
bio.display();
work.display();
projects.display();
education.display();


$('#mapDiv').append(googleMap);