console.log("Hello world from web script") // console log to test script is running


function addHeader() {
    var header = document.createElement("div");
    header.className = "header"; // assign name for css file
    var text = document.createTextNode("Welcome");
    header.appendChild(text);
    document.body.appendChild(header); // add header to body
}

function addMenu() {
    var menu = document.createElement("div");
    menu.className = "menu";
    document.body.appendChild(menu);

    //create menu button
    var menubutton = document.createElement("button");
    menubutton.className = "menubutton";
    menu.appendChild(menubutton);

    //div with menu
    var linkContent = document.createElement("div");
    linkContent.className = "linkContent";
    menubutton.appendChild(linkContent);

    var menuItem = [
        ["Home", "/horse-robot-web/index.html"],
        ["Sensors", "/horse-robot-web/sensors.html"],
        ["Circut", "/horse-robot-web/circut.html"],
        ["The process", "/horse-robot-web/process.html"]
    ];
    for (var i = 0; i < menuItem.length; i++) {
        var list = document.createElement("li");                // create list item
        var link = document.createElement("a");                 // create link item
        link.href = menuItem[i][1];                                // add link item to menuItem
        link.appendChild(document.createTextNode(menuItem[i][0])); // create textnode inside link starting on place 0
        list.appendChild(link)                                  // add link in list
        linkContent.appendChild(list);
    }
}

function addMain() {
    // one line break
    var br = document.createElement("br");

    var main = document.createElement("div");
    main.className = "main"; // assign name for css file
    document.body.appendChild(main); // add div to body

    // div with text
    var leftDiv = document.createElement("div");
    leftDiv.className = "left-div";
    var textParagraphUpper = document.createElement("p"); // paragraph for text only
    var leftText = document.createTextNode("Welcome. We've been expecting you. We, the people behind this work of art, Evy Svensson & Maria Karlsson, are studying System Development - Internet of Things at Stockholm Institute of Technology, and this site is a result of what we've learned in the course Embedded systems. We wanted to make a functioning horse robot, let's see how we did (our horse is named Cloudia since she is connected in a fog computing network). ");
    textParagraphUpper.appendChild(leftText);

    var textParagraphLower = document.createElement("p"); 
    var leftTextValues = document.createTextNode("Here we will show the latest sensor values that Cloudia sends us: ");
    textParagraphLower.appendChild(leftTextValues);

    var textParagraphSensors = document.createElement("p"); // paragraph for sensor values, makes it easier to format in the css file
    textParagraphSensors.className = "textParagraphSensors";

    
    // variables to get date and time data from getDateTime function
    var dateTimeText = document.createTextNode("DATE & TIME:");
    textParagraphSensors.appendChild(dateTimeText);

    var dateTime = document.createElement("p"); 
    dateTime.className = "dateTime";
    textParagraphSensors.appendChild(dateTime);

    var year = document.createElement("span");
    year.id = "year";
    dateTime.appendChild(year);

    var month = document.createElement("span");
    month.id = "month";
    dateTime.appendChild(month);

    var day = document.createElement("span");
    day.id = "day";
    dateTime.appendChild(day);

    var hour = document.createElement("span");
    hour.id = "hour";
    dateTime.appendChild(hour);

    var minute = document.createElement("span");
    minute.id = "minute";
    dateTime.appendChild(minute);


    // variables to get all other sensor data from getDataFromNode function
    var distance = document.createElement("p");
    distance.id = "distance";
    distance.className = "distance";
    var distanceText = document.createTextNode("DISTANCE:");
    textParagraphSensors.appendChild(distanceText);
    textParagraphSensors.appendChild(distance);

    var steps = document.createElement("p");
    steps.id = "steps";
    steps.className ="steps";
    var stepsText = document.createTextNode("STEPS:");
    textParagraphSensors.appendChild(stepsText);
    textParagraphSensors.appendChild(steps);

    var sound = document.createElement("p");
    sound.id = "sound";
    sound.className = "sound";
    var soundText = document.createTextNode("SOUND: ");
    textParagraphSensors.appendChild(soundText);
    textParagraphSensors.appendChild(sound);

    var horsepower = document.createElement("p");
    horsepower.id = "horsepower";
    horsepower.className ="horsepower";
    var horsepowerText = document.createTextNode("HORSEPOWER: ");
    textParagraphSensors.appendChild(horsepowerText);
    textParagraphSensors.appendChild(horsepower);

    var gas = document.createElement("p");
    gas.id = "gas";
    gas.className = "gas";
    var gasText = document.createTextNode("GAS: ");
    textParagraphSensors.appendChild(gasText);
    textParagraphSensors.appendChild(gas);

    var safetyLevel = document.createElement("p");
    safetyLevel.id = "safetyBox";
    var safetyLevelText = document.createTextNode("SAFETY LEVEL: ");
    var safetyVar = document.createTextNode("Good");
    safetyVar.id = "safetyVar";
    safetyVar.className = "safetyVar";
    safetyLevel.appendChild(safetyVar);
    textParagraphSensors.appendChild(safetyLevelText);
    textParagraphSensors.appendChild(safetyLevel);

    // adding leftDiv to main
    leftDiv.appendChild(textParagraphUpper);
    leftDiv.appendChild(br);
    leftDiv.appendChild(textParagraphLower);
    leftDiv.appendChild(textParagraphSensors);
    main.appendChild(leftDiv);

    // div with picture
    var rightDiv = document.createElement("div");
    rightDiv.className = "right-div";

    var rightImage = document.createElement("img");
    rightImage.src = "https://marialoue.github.io/horse-robot-web/images/index_img.png";
    rightImage.width = 550;

    // adding rightDiv to main
    rightDiv.appendChild(rightImage);
    main.appendChild(rightDiv);
}

function getDateTime(year, month, day, hour, minute) {
    console.log("function getDateTime is running ..."); // console log to test function is running
    document.getElementById("year").innerHTML = year + "-";
    document.getElementById("month").innerHTML = month + "-";
    document.getElementById("day").innerHTML = day + " ";
    document.getElementById("hour").innerHTML = hour + ":";
    document.getElementById("minute").innerHTML = minute;
}

function getDataFromNode(safetyvar, distance, steps, sound, horsepower, gas){
    console.log("function getDataFromNode is running ..."); // making sure the function runs
    document.getElementById("safetyVar").innerHTML = safetyvar;
    document.getElementById("distance").innerHTML = distance;
    document.getElementById("steps").innerHTML = steps;
    document.getElementById("sound").innerHTML = sound;
    document.getElementById("horsepower").innerHTML = horsepower;
    document.getElementById("gas").innerHTML = gas;
}

function addFooter() {
    var footer = document.createElement("div");
    footer.className = "footer"; // assign name for css file
    var footerText = document.createTextNode("© 2020 EM PROJECTS");
    footer.appendChild(footerText);
    document.body.appendChild(footer); // add div to body
}


addHeader();
addMenu();
addMain();
getDateTime();
getDataFromNode();
addFooter();