// List of colleges for suggestions and links
const colleges = [
    { name: "IIM Ahmedabad", link: "result.html?college=iima" },
    { name: "IIT Bombay", link: "result.html?college=iitb" },
    { name: "XLRI Jamshedpur", link: "result.html?college=xlri" },
    { name: "BITS Pilani", link: "result.html?college=bits" },
    { name: "Symbiosis Institute of Business Management", link: "result.html?college=sibm" },
    { name: "IIIT Delhi", link: "result.html?college=iiitd" },
    { name: "Faculty of Management Studies, Delhi", link: "result.html?college=fms" },
    { name: "Jamnalal Bajaj Institute of Management Studies", link: "result.html?college=jbims" },
    { name: "National Institute of Industrial Engineering (NITIE)", link: "result.html?college=nitie" },
    { name: "Narsee Monjee Institute of Management Studies (NMIMS)", link: "result.html?college=nmims" },
    { name: "Indian School of Business (ISB)", link: "result.html?college=isbf" },
    { name: "Institute of Rural Management Anand (IRMA)", link: "result.html?college=irma" },
    { name: "Indian Institute of Science (IISc) Bangalore", link: "result.html?college=iisc" },
    { name: "Indian Institute of Foreign Trade (IIFT) Delhi", link: "result.html?college=iift" },
    { name: "MDI Murshidabad", link: "result.html?college=mdi-murshidabad" },
    { name: "Goa Institute of Management (GIM)", link: "result.html?college=goa-institute-of-management" },
    { name: "NMIMS Bangalore", link: "result.html?college=nmims-bangalore" },
    { name: "Xavier Institute of Management and Entrepreneurship (XIME)", link: "result.html?college=xime" },
    { name: "International Management Institute (IMI) Bhubaneswar", link: "result.html?college=imi-bhubaneswar" },
    { name: "Global Institute of Business Studies (GIBS)", link: "result.html?college=gibs" },
    { name: "IIM Lucknow", link: "result.html?college=iim-lucknow" },
    { name: "IIM Indore", link: "result.html?college=iim-indore" },
    { name: "Nirma University Institute of Management", link: "result.html?college=nirma" },
    { name: "Indian Institute of Management Calcutta", link: "result.html?college=iimc" },
    { name: "IIM Bangalore", link: "result.html?college=iimb" },
    { name: "Indian Institute of Technology Kharagpur", link: "result.html?college=iitkgp" },
    { name: "Indian Institute of Technology Madras", link: "result.html?college=iitm" },
    { name: "Indian Institute of Technology Kanpur", link: "result.html?college=iitk" },
    { name: "SP Jain Institute of Management and Research", link: "result.html?college=spjimr" },
    { name: "International Management Institute (IMI) Delhi", link: "result.html?college=imi" },
    { name: "Management Development Institute (MDI) Gurgaon", link: "result.html?college=mdi" },

    { name: "IBS Hyderabad", link: "result.html?college=ibsat" },
    { name: "T.A. Pai Management Institute (TAPMI)", link: "result.html?college=tapmi" },
    { name: "Symbiosis Centre for Management and Human Resource Development (SCMHRD)", link: "result.html?college=scmhrd" },
    { name: "Xavier Institute of Management Bhubaneswar (XIMB)", link: "result.html?college=ximb" },
];

// Function to show suggestions while typing
function showSuggestions(value) {
    let suggestionsList = document.getElementById('suggestions');
    suggestionsList.innerHTML = ''; // Clear the list

    if (value) {
        let filteredColleges = colleges.filter(college => college.name.toLowerCase().includes(value.toLowerCase()));
        filteredColleges.forEach(college => {
            let li = document.createElement('li');
            li.textContent = college.name;
            li.onclick = function() {
                document.getElementById('search-bar').value = this.textContent; // Select college name
                window.location.href = college.link; // Navigate to college page on click
                suggestionsList.innerHTML = ''; // Clear suggestions after selection
            };
            suggestionsList.appendChild(li);
        });
    }
}

// Automatic sliding effect for colleges
const slider = document.querySelector('.college-list');
let scrollAmount = 0;

function autoSlide() {
    scrollAmount += 2; // Controls speed of slide
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0; // Reset to the start
    }
    slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Start the slider
setInterval(autoSlide, 100); // Speed of the slide, can be adjusted
