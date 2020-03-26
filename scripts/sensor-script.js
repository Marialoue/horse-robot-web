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

    //div with links
    var linkContent = document.createElement("div");
    linkContent.className = "linkContent";
    menubutton.appendChild(linkContent);

    var links = [
        ["Home", "/horse-robot-web/index.html"],
        ["Sensors", "/horse-robot-web/sensors.html"],
        ["Circut", "/horse-robot-web/circut.html"],
        ["The process", "/horse-robot-web/process.html"]
    ];
    for (var i = 0; i < links.length; i++) {
        var list = document.createElement("li");                // create list item
        var link = document.createElement("a");                 // create link item
        link.href = links[i][1];                                // add link adress to menuItem links
        link.appendChild(document.createTextNode(links[i][0])); // create textnode inside link starting on place 0
        list.appendChild(link)                                  // add list in link
        linkContent.appendChild(list);
    }
}

function addMain() {
    // line break
    var br = document.createElement("br");

    var main = document.createElement("div");
    main.className = "main"; // assign name for css file
    document.body.appendChild(main); // add div to body

    // div with text
    var leftDiv = document.createElement("div");
    leftDiv.className = "left-div";
    var textParagraphUpper = document.createElement("p");
    var leftText = document.createTextNode("We used a lot of parts (not including all of the glue needed to assembly this rocket) for our Cloudia. ");
    textParagraphUpper.appendChild(leftText); // add textNode "leftText" to textParagraph

    var textParagraphLower = document.createElement("p");
    textParagraphLower.className = "textParagraphLower";
    var leftTextValues = document.createTextNode("Parts and tools: "); //1 Arduino Uno, 1 NodeMCU, 1 Ultrasonic Distance Sensor HC-SR04, 1 MQ2-GasSensor, 2 Sound Detection Sensor, 1 prototypeboard for Arduino Uno, 4 MicroServo 9g SG9 180°, 2 mini breadboards (170), 1 9V-battery, generic jumperwires, DC Jack barrel, more-than-you-think hotglue and bamboo barbeque skewers (to connect the joints). Tools: 1 Gluegun small, Dremel (small drill).
    textParagraphLower.appendChild(leftTextValues);


    var parts = [
        ["1x Arduino Uno"],
        ["1x NodeMCU"],
        ["1x Prototypeboard for Arduino Uno"],
        ["1x Ultrasonic Distance Sensor HC-SR04"],
        ["1x MQ2-Gas Sensor"],
        ["2x Sound Detection Sensor"],
        ["4x MicroServo 9g SG9"],
        ["2x Mini Breadboards (170 pins)"],
        ["1x 9V battery"],
        ["Generic jumperwires"],
        ["DC Jack barrel"],
        ["Hotglue x more than you'd think"],
        ["Bamboo barbeque skewers (to connect the joints)"],
        ["1x Gluegun small"],
        ["1x Dremel (small drill)"]
    ]

    for (var i = 0; i < parts.length; i++) {
        var listParts = document.createElement("li");
        listParts.appendChild(document.createTextNode(parts[i]));
        textParagraphLower.appendChild(listParts);
    }

    leftDiv.appendChild(textParagraphUpper);
    leftDiv.appendChild(br);
    leftDiv.appendChild(textParagraphLower);
    main.appendChild(leftDiv);

    // div with picture
    var rightDiv = document.createElement("div");
    rightDiv.className = "right-div";

    var rightImage = document.createElement("img");
    rightImage.src = "https://marialoue.github.io/horse-robot-web/images/sensors_img.png";
    rightImage.width = 550;

    rightDiv.appendChild(rightImage);
    main.appendChild(rightDiv);
}

function addFooter() {
    var footer = document.createElement("div");
    footer.className = "footer"; // assign name for css file
    var text = document.createTextNode("© 2020 EM PROJECTS");
    footer.appendChild(text);
    document.body.appendChild(footer); // add div to body
}

addHeader();
addMenu();
addMain();
addFooter();
