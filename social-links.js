<!-- // SOCIAL LINKS

// USE lowercase FOR ALL OPTIONS


var facebook	= "yes"			// SHOW FACEBOOK

var facelink	= "https://www.facebook.com/doctordatasystems"

var twitter	= "yes"			// SHOW TWITTER

var twitlink	= "https://twitter.com/doctordatasys"

var linkedin	= "yes"			// SHOW LINKEDIN

var linkedlink	= "http://www.linkedin.com/"

var contactus	= "yes"			// SHOW CONTACT ICON

var contactlink	= "contact.htm"		// CONTACT ICON LINK


var socalign	= "left"		// ALIGN ICONS
var linktype	= "_blank"		// SOCIAL LINK TYPE USE | _blank | _top |
var linktypec	= "_top"		// CONTACT LINK TYPE USE | _blank | _top |




// COPYRIGHT 2013 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law

// YOU DO NOT NEED TO EDIT BELOW THIS LINE



   if ((facebook == "yes") || (twitter == "yes") || (linkedin == "yes") || (contactus == "yes")) {
document.write('<table class="'+socalign+'-div"><tr>');


// FACEBOOK

   if (facebook == "yes") {

document.write('<td class="socialspace"><a href="'+facelink+'" target="'+linktype+'"><img src="picts/social_facebook.gif" width="22" height="22" alt="Connect on Facebook"></a></td>');
}


// TWITTER

   if (twitter == "yes") {
document.write('<td class="socialspace"><a href="'+twitlink+'" target="'+linktype+'"><img src="picts/social_twitter.gif" width="22" height="22" alt="Follow us on twitter"></a></td>');
}


// LINKEDIN

   if (linkedin == "yes") {
document.write('<td class="socialspace"><a href="'+linkedlink+'" target="'+linktype+'"><img src="picts/social_linkedin.gif" width="22" height="22" alt="Connect on LinkedIn"></a></td>');
}


// CONTACT

   if (contactus == "yes") {
document.write('<td class="socialspace"><a href="'+contactlink+'" target="'+linktypec+'"><img src="picts/social_contact.gif" width="22" height="22" alt="Contact Us"></a></td>');
}

document.write('<td class="socialRspace"><div class="socialRspace"></div></td>');
document.write('</tr></table>');
}

//  End -->