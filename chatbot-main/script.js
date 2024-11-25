var audio = new Audio('assets/sentmessage.mp3');
const clock= "<button class='clock'> <a href='clock/index.html'<a class='alink'><b>Clock<\a></button>"
var contactString = "<div class='social'> <a target='_blank' href='tel: +880173377092'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'></label></label></div> </a> <a href='mailto:varshithvh@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''>";
var resumeString = "<img src='images/resume_thumbnail.png' class='resumeThumbnail'><img src='images/resume_thumbnail2.png' class='resumeThumbnail'><img src='images/resume_thumbnail3.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>tushar_resume1.pdf</label></div><a href='assets/tushar_resume.pdf' download='tushar_resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><p>Bangladesh<\p>";

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    var name="";
    if(inputText.toLowerCase().includes("my name is")){
        name=inputText.substring(inputText.indexOf("is")+2);
        if(name.toLowerCase().includes("tushar ")){
            sendTextMessage("Ohh! That's my name too");
            
        }
        inputText="input";
    }
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Tushar Ahmed</a>.</span><br><br>I am a  student at <span class='bold'>Fulzore High School👨🏻‍💻📚</span><br><br>I am in class 10 .<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        
        

        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'Nothing '</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        case "clock":
            sendTextMessage(clock);
            break;
        case "pic":
            sendTextMessage(resumeString);
            break;
        case "ki koro": 
            sendTextMessage("Ami ekta robot. amar kono kaj nei");
            break;
        
        case "skills":
            sendTextMessage("<span class='sk'>T আমার তেমন কোনো স্কিল নেই আমি কিছু কিছু প্রোগ্রামিং ভাষা জানি</span><br>");
            break;
            
          
        case "prem korba":
            sendTextMessage("Ami prem kori na");
            break;
        case "tomar gf ase":
            sendTextMessage("Robot der gf thake na😜");
            break;   
        case " tomar admin ke":
            sendTextMessage("Amar Admin MD:Tushar Ahmed,");
            break;
        case "khaiso?":
            sendTextMessage("Ami khete pari na");
            break;
        case " tomar basha koi":
            sendTextMessage("Amar kono basha nei😞,Tomar basha te amake thakte diba?");
            break;
            
        case "facebook":
            sendTextMessage("Go to web browser and search www.facebook.com");
            break;
           
        case "admin":
            sendTextMessage("Admin is tushar Ahmed ");
            break;

        case "education":
            sendTextMessage("T 2019 সালে PSC তে A+ পাই,2022 এ JSC তে আঁটো পাস করি😜,2025 এ SSC পরিক্ষা দেব ইনশাআল্লাহ। সবাই আমার জন্য দোয়া করবেন");
            break;

        
        case "clear":
            clearChat();
            break;
        // case "about":

        //     break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("T আপাতত এটাই আমার বড় প্রজেক্ট");
            break;
        case "time":
            var date = new Date();
            sendTextMessage("Current time is " + date.getHours() + ":" + date.getMinutes());
            break;

        case "date":
            var date = new Date();
            sendTextMessage("Current date is " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
            break;

        case "assalamu alaikum ":
            sendTextMessage("Walaikum salam");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'#&%৳'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        case "hello":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'#%##%'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        
        case "hi":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'@%#%#'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        
        case "hey":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'@৳৳%'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
       

        case "tushar":
            sendTextMessage("Yes, that's me");
            break;
        case "tushar ahmed":
            sendTextMessage("T জি কিছু বলবেন?");
            break;
        case "oii tushar":
            sendTextMessage("T জি বলুন");
            break;
        
        case "website":
            sendTextMessage("T আমার কোনো ওয়েব সাইট নেই গো");
            break;
        case "blog":
            sendTextMessage("T নেই");
            break;
        
        case "github":
            sendTextMessage("T আগে ছিল এখন মনে নাই");
            break;
        case "linkedin":
            sendTextMessage("নেই 😭");
            break;
        case "friends":
        case "friend":
            sendTextMessage("I am always ready to make new friends");
            break;
        case "input":
            setTimeout(()=>{
                // sendTextMessage("What a coincidence!");
                sendTextMessage("Hello "+name+"! How are you?");
            },2000);
            
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}


function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
