/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Yumeng Shi";
var role = "Data Engineer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

var skills = 
["programming", "statistics", "finance"];

$("#main").append(skills);

var bio = {
	"name" : "Yumeng Shi",
	"role" : "Data Engineer",
	"contact_info" : "raymond.seki@gmail.com",
	"picture_URL" : "www.google.com",
	"welcome_message" : "Hi, my name is Yumeng Shi." +  
						"I work as a financial data engineer.",	
	"skills" : skills
};

var work = {}
work.position = "Quant Developer";
work.employer = "Actively looking for employment";
work.years = "-1";
work.city = "Shanghai";

var education = {}
education["name"] = "University of Melbourne";
education["years"] = "2014-2016";
education["city"] = "Melbourne";

// $("#main").prepend(bio.name);
$("#main").append(bio.contact_info);
$("#main").append(bio.picture_URL);
$("#main").append(bio.welcome_message);
$("#main").append(bio.skills);
$("#main").append(work.position);
$("#main").append(education["name"]);