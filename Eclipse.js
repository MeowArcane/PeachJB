//1UE3zMlq8W5LH3DQCwhtO1KK_PW6cbddG2ObLq0Yh3c
var isBeta = "0";
var currentOS = "";
var Homescreen = "Home";
var versionvar = "Version";
var ran = 0;
//Run("TestOS");
//Starts Eclipse
function Run(OS) {
  ran = 1;
  setTimeout(function() {
    if (Check(OS) == "1") {
      currentOS = OS;
      Code();
      SetIcons();
      Locks();
      setTimeout(function() {
        if (isBeta == "1") {
          BetaCode();
        }
      }, 2);
    }
  }, 5);
}
//Checks if version is compatable
function Check(OS) {
  if (OS == "AudioOS") {
    console.log("Welcome to Eclipse for AudioOS");
    currentOS = "AudioOS";
    Homescreen = "Homescreen";
    versionvar = "version";
    AudioOS();
    return 1;
  } else if (OS == "SapphireOS") {
    console.log("SapphireOS is unsupported on Eclipse, Please use Peach");
    console.log("Autorunning PeachJB...");
    console.log("Peach 1.2 Build 3");
    PeachAPI.Run("SapphireOS");
    return 0;
  } else if ((OS == "AuroraOS")) {
    console.log("Welcome to Eclipse for AuroraOS");
    currentOS = "AuroraOS";
    AuroraOS();
    return 1;
  } else if (OS == "EchoLake") {
    console.log("Welcome to Eclipse for Project EchoLake");
    currentOS = "EchoLake";
    Homescreen = "Homescreen";
    versionvar = "version";
    EchoLake();
    return 1;
  } else if (OS == "TestOS") {
    console.log("Welcome to Eclipse for the TestOS");
    currentOS = "TestOS";
    Homescreen = "testHomescreen";
    versionvar = "testversion";
    TestOS();
    return 1;
  } else {
    
  }
}
//Enables Beta Features
function Beta() {
  isBeta = "1";
}
//Locks certain version-specific features 
function Locks() {
  if (currentOS == "AudioOS") {
    console.log("AudioOS doesnt support Eclipse Themezer, Please use Peach");
    console.log("AudioOS doesnt support Batteries");
    hideElement("Eclipse.boot.icon.1");
    console.log("AudioOS doesnt support Shortcuts");
    hideElement("Eclipse.boot.icon.2");
  }
}
//All Code for Eclipse thats in Beta
function BetaCode() {

}
//Sets Icons for Eclipe's homescreen
function SetIcons() {
  //settext
  setText("Eclipse.boot.icon.1", "Battery");
  setText("Eclipse.boot.icon.2", "Shortcuts");
  setText("Eclipse.boot.icon.3", "Themezer");
  setText("Eclipse.boot.icon.4", "ClickerX");
  setText("Eclipse.boot.icon.5", "Accessibility");
  setText("Eclipse.boot.icon.6", "None");
  setText("Eclipse.boot.icon.7", "None");
  setText("Eclipse.boot.icon.8", "None");
  //font size
  setProperty("Eclipse.boot.icon.1", "font-size", 14);
  setProperty("Eclipse.boot.icon.2", "font-size", 14);
  setProperty("Eclipse.boot.icon.3", "font-size", 14);
  setProperty("Eclipse.boot.icon.4", "font-size", 14);
  setProperty("Eclipse.boot.icon.5", "font-size", 11);
  setProperty("Eclipse.boot.icon.6", "font-size", 14);
  setProperty("Eclipse.boot.icon.7", "font-size", 14);
  setProperty("Eclipse.boot.icon.8", "font-size", 14);
  //show/hide
  showElement("Eclipse.boot.icon.1");
  showElement("Eclipse.boot.icon.2");
  showElement("Eclipse.boot.icon.3");
  showElement("Eclipse.boot.icon.4");
  showElement("Eclipse.boot.icon.5");
  hideElement("Eclipse.boot.icon.6");
  hideElement("Eclipse.boot.icon.7");
  hideElement("Eclipse.boot.icon.8");
}
//Sets Lang
function SetLanguage(dalang) {
  if (dalang == "Dock Script") {
    setText("p.icon", "Tewam");
    //Eclipse.boot
    setText("Eclipse.boot.text.1", "иющф а Tewam. ё дфъю;иаьга кцщфя аьцъ ъюъ щёщюъ;ёи");
    setText("Eclipse.boot.icon.1", "дюкю");
    setText("Eclipse.boot.icon.2", "дюь;гё");
    setText("Eclipse.boot.icon.3", "эцдюъ;иаьга");
    setText("Eclipse.boot.icon.4", "ьая'кёью");
    setText("Eclipse.boot.icon.5", "ъфьёь;га");
    setText("Eclipse.boot.icon.6", "эюя");
    setText("Eclipse.boot.icon.7", "эюя");
    setText("Eclipse.boot.icon.8", "эюя");
    setText("Eclipse.boot.button.1", "ифъ");
    setText("Eclipse.boot.button.2", "иёъаъ");
    setProperty("Eclipse.boot.icon.3", "font-size", 11);
    setProperty("Eclipse.boot.icon.5", "font-size", 14);
    //Eclipse.battmgr
    setText("Eclipse.battmgr.button.2", "ифъ");
    setText("Eclipse.battmgr.button.1", "ъёифя дюкю");
    setText("Eclipse.battmgr.button.3", "щцщю ъёифя дюкю");
    //Eclipse.shortcuts
    setText("Eclipse.shortcuts.button.1", "ифъ");
    setText("Eclipse.shortcuts.button.2", "ьфэюъ ъюъ ъфщаъ");
    setText("Eclipse.shortcuts.button.3", "щця;dёиа кця");
    setText("Eclipse.shortcuts.button.4", "июъ;пёl");
    //Eclipse.clickerx
    setText("Eclipse.clickerx.button.1", "ифъ");
    setText("Eclipse.clickerx.button.2", "ьая!");
    //Eclipse.accessibility
    setText("Eclipse.accessibility.button.1", "ифъ");
    setText("Eclipse.accessibility.button.2", "эаъфь;ёга дц");
  } else if ((dalang == "Dock Script")) {
    
  } else if ((dalang == "English")) {
    setText("p.icon", "Eclipse");
    //Eclipse.boot
    setText("Eclipse.boot.text.1", "Welcome to Eclipse.\nA better jailbreak for All OSes");
    setText("Eclipse.boot.icon.1", "Battery");
    setText("Eclipse.boot.icon.2", "Shortcuts");
    setText("Eclipse.boot.icon.3", "Themezer");
    setText("Eclipse.boot.icon.4", "ClickerX");
    setText("Eclipse.boot.icon.5", "Accessibility");
    setText("Eclipse.boot.icon.6", "placeholder");
    setText("Eclipse.boot.icon.7", "placeholder");
    setText("Eclipse.boot.icon.8", "placeholder");
    setText("Eclipse.boot.button.1", "Back");
    setText("Eclipse.boot.button.2", "Konsole");
    setProperty("Eclipse.boot.icon.3", "font-size", 14);
    setProperty("Eclipse.boot.icon.5", "font-size", 11);
    //Eclipse.battmgr
    setText("Eclipse.battmgr.button.2", "Back");
    setText("Eclipse.battmgr.button.1", "Recharge");
    setText("Eclipse.battmgr.button.3", "Inf Charge");
    //Eclipse.shortcuts
    setText("Eclipse.shortcuts.button.1", "Back");
    setText("Eclipse.shortcuts.button.2", "Install all apps");
    setText("Eclipse.shortcuts.button.3", "Enable Dev");
    setText("Eclipse.shortcuts.button.4", "Testing");
    //Eclipse.clickerx
    setText("Eclipse.clickerx.button.1", "Back");
    setText("Eclipse.clickerx.button.2", "Click!");
    //Eclipse.accessibility
    setText("Eclipse.clickerx.button.1", "Back");
    setText("Eclipse.accessibility.button.2", "High Contrast Mode");
  } else {
    setText("p.icon", "Tewam");
    //Eclipse.boot
    setText("Eclipse.boot.text.1", "sowi a Tewam. e pimo;sanja kuwirr anum mom wewom;es");
    setText("Eclipse.boot.icon.1", "poko");
    setText("Eclipse.boot.icon.2", "pon;je");
    setText("Eclipse.boot.icon.3", "tupom;sanja");
    setText("Eclipse.boot.icon.4", "narr'keno");
    setText("Eclipse.boot.icon.5", "minen;ja");
    setText("Eclipse.boot.icon.6", "torr");
    setText("Eclipse.boot.icon.7", "torr");
    setText("Eclipse.boot.icon.8", "torr");
    setText("Eclipse.boot.button.1", "sim");
    setText("Eclipse.boot.button.2", "semam");
    setProperty("Eclipse.boot.icon.3", "font-size", 11);
    setProperty("Eclipse.boot.icon.5", "font-size", 14);
    //Eclipse.battmgr
    setText("Eclipse.battmgr.button.2", "sim");
    setText("Eclipse.battmgr.button.1", "mesirr poko");
    setText("Eclipse.battmgr.button.3", "wuwo mesirr poko");
    //Eclipse.shortcuts
    setText("Eclipse.shortcuts.button.1", "sim");
    setText("Eclipse.shortcuts.button.2", "nitom mom miwam");
    setText("Eclipse.shortcuts.button.3", "wurr;desa kurr");
    setText("Eclipse.shortcuts.button.4", "som;fel");
    //Eclipse.clickerx
    setText("Eclipse.clickerx.button.1", "sim");
    setText("Eclipse.clickerx.button.2", "narr!");
    //Eclipse.accessibility
    setText("Eclipse.accessibility.button.1", "sim");
    setText("Eclipse.accessibility.button.2", "tamin;eja pu");
  }
}
//fixes for sapphireOS cuz luke is a bad programmer
function Patches() {
  timedLoop(1, function() {
    pirated = 0;
    nat = 0;
  });
}
//The actual Code for Eclipse
function Code() {
  setScreen(Homescreen);
  if (currentOS == "AudioOS") {
    BetterElementMakerAPI.Button("p.icon", "87", "235", "140", "40", "10", "black", "white", "Eclipse", "white");
  } else if (currentOS == "AuroraOS") {
    BetterElementMakerAPI.Button("p.icon", "87", "345", "140", "40", "10", "black", "white", "Eclipse", "white");
    Patches();
  } else {
    BetterElementMakerAPI.Button("p.icon", "87", "355", "140", "40", "10", "black", "white", "Eclipse", "white");
  }
  setProperty("p.icon", "border-width", 3);
  SetLanguage("English");
  //boot
  setProperty("Eclipse.accessibility.dropdown.1", "options", ["English", "Dock", "Dock Script"]);
  setScreen("Eclipse.themezer");
  BetterElementMakerAPI.Dropdown("Eclipse.themezer.dropdown", 30, 65, 260, 40, "12", "rgb(60, 0, 55)", "#ffffff", "#ffffff");
  setProperty("Eclipse.themezer.dropdown", "options", ["Light", "Dark", "Purple", "Crystal", "Pink"]);
  setScreen(Homescreen);
  onEvent("p.icon", "click", function( ) {
    setScreen("Eclipse.boot");
  });
  //menu
  onEvent("Eclipse.boot.button.1", "click", function( ) {
    //exit
    setScreen(Homescreen);
  });
  onEvent("Eclipse.boot.button.2", "click", function( ) {
    //konsole
    setScreen("Eclipse.konsole");
  });
  onEvent("Eclipse.boot.icon.3", "click", function( ) {
      //themezer
      if (currentOS != "AudioOS") {
        setScreen("Eclipse.themezer");
      } else {
        setScreen("Eclipse.test");
      }
    });
  onEvent("Eclipse.boot.icon.1", "click", function( ) {
    //batteries
    setScreen("Eclipse.battmgr");
  });
  onEvent("Eclipse.boot.icon.2", "click", function( ) {
    //shortcuts
    setScreen("Eclipse.shortcuts");
  });
  onEvent("Eclipse.boot.icon.5", "click", function( ) {
    //accessibility
    setScreen("Eclipse.accessibility");
  });
  onEvent("Eclipse.boot.icon.4", "click", function( ) {
    //clickerX
    setScreen("Eclipse.clickerx");
  });
  //shortcuts
  onEvent("Eclipse.shortcuts.button.1", "click", function( ) {
    setScreen("Eclipse.boot");
  });
  onEvent("Eclipse.shortcuts.button.2", "click", function( ) {
    IAA();
  });
  onEvent("Eclipse.shortcuts.button.3", "click", function( ) {
    console.log("Developer Mode Accessed");
    dev = 1;
    isBooted = 1;
    showElement("icon4");
  });
  hideElement("Eclipse.shortcuts.button.4");
  //Accessibility
  onEvent("Eclipse.accessibility.button.1", "click", function( ) {
    if (getText("Eclipse.accessibility.dropdown.1") == "Dock") {
      SetLanguage("Dockk");
    } else if ((getText("Eclipse.accessibility.dropdown.1") == "Dock Script")) {
      SetLanguage("Dock Script");
    } else {
      SetLanguage("English");
    }
    setScreen("Eclipse.boot");
  });
  onEvent("Eclipse.accessibility.button.2", "click", function( ) {
    Themezer("Black", "White", "White", "White");
  });
  //Themezer
  onEvent("Eclipse.themezer.button.1", "click", function( ) {
      setScreen("Eclipse.boot");
    });
  //oldThemezer(maincolor, accent color, border color)
  //newThemezer(bgcolor, bcolor, accentcolor, txtcolor);
  onEvent("Eclipse.themezer.button.3", "click", function( ) {
      if (getText("Eclipse.themezer.dropdown") == "Dark") {
        Themezer("Black", "White", "#363636", "White");
      } else if ((getText("Eclipse.themezer.dropdown") == "Light")) {
        Themezer("White", "Black", "Black", "Black");
      } else if (getText("Eclipse.themezer.dropdown") == "Pink") {
        Themezer("#ffc0cb", "White", "White", "White");
      } else if ((getText("Eclipse.themezer.dropdown") == "Purple")) {
        Themezer("rgb(60, 0, 55)", "White", "White", "White");
      } else if (getText("Eclipse.themezer.dropdown") == "Crystal") {
        Themezer("rgba(14, 30, 47, 0.67)", "White", "rgba(14, 30, 47, 0.67)", "White");
      } else {
        //getText("Eclipse.themezer.dropdown") == "Pink"
      }
    });
    //Themezer - Custom
  onEvent("Eclipse.themezer.custom.button.2", "click", function( ) {
      var output_1 = getText("Eclipse.themezer.custom.input.1")
      var output_2 = getText("Eclipse.themezer.custom.input.2")
      var output_3 = getText("Eclipse.themezer.custom.input.3")
      var combined_output = ((output_1 + "*") + output_2 + "*") + output_3;
      setText("Eclipse.themezer.custom.input.4", combined_output);
    });
  onEvent("Eclipse.themezer.button.2", "click", function( ) {
      setScreen("Eclipse.themezer.custom");
    });
  onEvent("Eclipse.themezer.custom.button.1", "click", function( ) {
      setScreen("Eclipse.themezer");
    });
  onEvent("Eclipse.themezer.custom.button.3", "click", function( ) {
      var combinedOutput = getText("Eclipse.themezer.custom.input.4");
      var delimiter = "*";
      var outputs = [];
      var startIndex = 0;
      var nextIndex = combinedOutput.indexOf(delimiter);
      while (nextIndex !== -1) {
          outputs.push(combinedOutput.substring(startIndex, nextIndex));
          startIndex = nextIndex + delimiter.length;
          nextIndex = combinedOutput.indexOf(delimiter, startIndex);
      }
      outputs.push(combinedOutput.substring(startIndex));
      Themezer(outputs[0], outputs[1], outputs[2]);
    });
    //ClickerX
  var points = 0;
  var add = 1;
  var CPS = 0;
  onEvent("Eclipse.clickerx.button.1", "click", function( ) {
    setScreen("Eclipse.boot");
  });
  hideElement("Eclipse.clickerx.button.3");
  hideElement("Eclipse.clickerx.button.4");
  hideElement("Eclipse.clickerx.button.5");
  setText("Eclipse.clickerx.button.3", add + 1 + " Per Click: " + add * (50 + (add * 5)));
  setText("Eclipse.clickerx.button.4", ((CPS + 1) + " CPS: ") + ((CPS+1) * (50 + (CPS * 60))));
  onEvent("Eclipse.clickerx.button.2", "click", function( ) {
    points = points + add;
    setText("Eclipse.clickerx.text.1", points + " Points");
    if (points >= add * (50 + (add * 5))) {
      showElement("Eclipse.clickerx.button.3");
      setText("Eclipse.clickerx.button.3", add + 1 + " Per Click: " + add * (50 + (add * 5)));
    }
    if (points >= (CPS+1) * (50 + (CPS * 60))) {
      setText("Eclipse.clickerx.button.4", ((CPS + 1) + " CPS: ") + ((CPS+1) * (50 + (CPS * 60))));
      showElement("Eclipse.clickerx.button.4");
    }
    if (points >= 1000) {
      showElement("Eclipse.clickerx.button.5");
    }
  });
  onEvent("Eclipse.clickerx.button.3", "click", function( ) {
    if (points >= add * (50 + (add * 5))) {
      points = points - (add * (50 + (add * 5)));
      add = add + 1;
      setText("Eclipse.clickerx.text.1", points + " Points");
      setText("Eclipse.clickerx.button.3", ((add + 1) + " Per Click: ") + add * (50 + (add * 5)));
    }
  });
  onEvent("Eclipse.clickerx.button.4", "click", function( ) {
    if (points >= (CPS+1) * (50 + (CPS * 60))) {
      stopTimedLoop(1000);
      points = points - (CPS+1) * (50 + (CPS * 60));
      CPS = CPS + 1;
      timedLoop(1000, function() {
        for (var i = 0; i < CPS; i++) {
          points = points + 1;
          setText("Eclipse.clickerx.text.1", points + " Points");
        }
      });
      setText("Eclipse.clickerx.text.1", points + " Points");
      setText("Eclipse.clickerx.button.4", ((CPS + 1) + " CPS: ") + (CPS+1) * (50 + (CPS * 60)));
    }
  });
  //konsole
  onEvent("Eclipse.konsole.button.1", "click", function( ) {
    setScreen("Eclipse.boot");
  });
  onEvent("Eclipse.konsole.button.2", "click", function( ) {
    if (getText("Eclipse.konsole.input.1") == "test" ) {
      setText("Eclipse.konsole.text.1", "Test! \n / >");
    } else if ((getText("Eclipse.konsole.input.1") == "open")) {
      setText("Eclipse.konsole.text.1", "/ >");
      setScreen(getText("Eclipse.konsole.input.2"));
    } else if ((getText("Eclipse.konsole.input.1") == "print")) {
      setText("Eclipse.konsole.text.1", getText("Eclipse.konsole.input.2") + "\n / >");
    } else if ((getText("Eclipse.konsole.input.1") == "version")) {
      setText("Eclipse.konsole.text.1", versionvar + "\n / >");
    } else if ((getText("Eclipse.konsole.input.1") == "home")) {
      setScreen("Login");
    } else if ((getText("Eclipse.konsole.input.1") == "exit")) {
      setScreen("Eclipse.boot");
    } else if ((getText("Eclipse.konsole.input.1") == "reboot")) {
      boot();
    } else if ((getText("Eclipse.konsole.input.1") == "5318008")) {
      setText("Eclipse.konsole.text.1", getText("Eclipse.konsole.input.2") + "<3 \n / >");
      points = points + 1000000;
    } else if ((getText("Eclipse.konsole.input.1") == "toki pona li pona!")) {
      setText("Eclipse.konsole.text.1", getText("Eclipse.konsole.input.2") + "sina lon! \n / >");
      stopTimedLoop((CPS * 1000));
      CPS = CPS + 100;
      timedLoop((CPS * 1000), function() {
        points = points + 1;
        setText("Eclipse.clickerx.text.1", points + " Points");
      });
    } else {
      setText("Eclipse.konsole.text.1", "Invalid Command! \n / >");
    }
    //(getText("Eclipse.konsole.input.1") == "str"))
  });
  //test
  onEvent("Eclipse.test.button.1", "click", function( ) {
    setScreen("Eclipse.boot");
  });
}
//installs all apps in specified OS
function IAA() {
  InstallApp(1);
  musicinstalled = 1;
  if (aiappinstalled == 0) {
    if (notesinstalled == 0) {
      if (dev==0) {
        setPosition("icon5" + "", 190, 30);
      } else {
        setPosition("icon5" + "", 250, 30);
      }
    } else {
      if (dev==0) {
        setPosition("icon5" + "", 250, 30);
      } else {
        setPosition("icon5" + "", 10, 90);
      }
    }
  } else {
    if (notesinstalled == 0) {
      if (dev==0) {
        setPosition("icon5" + "", 250, 30);
      } else {
        setPosition("icon5" + "", 10, 90);
      }
    } else {
      if (dev==0) {
        setPosition("icon5" + "", 10, 90);
      } else {
        setPosition("icon5" + "", 70, 90);
      }
    }
  }
  setProperty("icon5", "image", "icon://fa-music");
  InstallApp(2);
  notesinstalled = 1;
  if (aiappinstalled == 0) {
    if (musicinstalled == 0) {
      if (dev==0) {
        setPosition("icon6" + "", 190, 30);
      } else {
        setPosition("icon6" + "", 250, 30);
      }
    } else {
      if (dev==0) {
        setPosition("icon6" + "", 250, 30);
      } else {
        setPosition("icon6" + "", 10, 90);
      }
    }
  } else {
    if (musicinstalled == 0) {
      if (dev==0) {
        setPosition("icon6" + "", 250, 30);
      } else {
        setPosition("icon6" + "", 10, 90);
      }
    } else {
      if (dev==0) {
        setPosition("icon6" + "", 10, 90);
      } else {
        setPosition("icon6" + "", 70, 90);
      }
    }
  }
  setProperty("icon6", "image", "icon://fa-sticky-note-o");
  InstallApp(3);
  aiappinstalled = 1;
  if (notesinstalled == 0) {
    if (musicinstalled == 0) {
      if (dev==0) {
        setPosition("icon7" + "", 190, 30);
      } else {
        setPosition("icon7" + "", 250, 30);
      }
    } else {
      if (dev==0) {
        setPosition("icon7" + "", 250, 30);
      } else {
        setPosition("icon7" + "", 10, 90);
      }
    }
  } else {
    if (musicinstalled == 0) {
      if (dev==0) {
        setPosition("icon7" + "", 250, 30);
      } else {
        setPosition("icon7" + "", 10, 90);
      }
    } else {
      if (dev==0) {
        setPosition("icon7" + "", 10, 90);
      } else {
        setPosition("icon7" + "", 70, 90);
      }
    }
  }
  setProperty("icon7", "image", "icon://fa-smile-o");
}
//helps Themzer()
function ThemezerHelper(ID, Type, bgcolor, bcolor, accentcolor, txtcolor) {
  if (Type == "button") {
    setProperty(ID, "border-color", bcolor);
    setProperty(ID, "background-color", bgcolor);
    setProperty(ID, "icon-color", txtcolor);
    setProperty(ID, "text-color", txtcolor);
  } else if ((Type == "text")) {
    setProperty(ID, "border-color", "rgba(0,0,0,0)");
    setProperty(ID, "background-color", "rgba(0,0,0,0)");
    setProperty(ID, "text-color", txtcolor);
  } else if ((Type == "label")) {
    setProperty(ID, "border-color", "rgba(0,0,0,0)");
    setProperty(ID, "background-color", "rgba(0,0,0,0)");
    setProperty(ID, "text-color", txtcolor);
  } else if ((Type == "bg")) {
    setProperty(ID, "border-color", bcolor);
    setProperty(ID, "background-color", bgcolor);
    setProperty(ID, "text-color", txtcolor);
  } else if (Type == "bar") {
    setProperty(ID, "border-color", txtcolor);
    setProperty(ID, "background-color", bgcolor);
    setProperty(ID, "text-color", txtcolor);
  } else if ((Type == "icon")) {
    setProperty(ID, "border-color", bcolor);
    setProperty(ID, "background-color", bgcolor);
    setProperty(ID, "icon-color", txtcolor);
  } else {
    
  }
}
//Themezer Script
//Code Specific to AudioOS
function AudioOS() {
  //Patches - General Fixes
  setProperty("app.title.2", "font-size", 36);
  //Patches - Show Info on Menu
  showElement("song.overlay");
  showElement("song.composer.img");
  showElement("song.composer");
  showElement("song.song");
  //batt peach app
  var isinf = 0;
  onEvent("Eclipse.battmgr.button.2", "click", function( ) {
    setScreen("Eclipse.boot");
  });
}
//Code Specific to AuroraOS
function AuroraOS() {
  setScreen("Login");
  //enable dev mode
  ownerid = uid;
  //pos stuffs
  setPosition("batteries", 5, 5, 100, 18);
  setProperty("batteries", "text-align", "left");
  setProperty("batteries", "font-size", 15);
  setProperty("batteries", "height", 100);
  setProperty("batteries", "y", 1);
  setProperty("batteries", "x", -7);
  setProperty("batteryicon", "x", 50);
  //batt peach app
  var isinf = 0;
  onEvent("Eclipse.battmgr.button.2", "click", function( ) {
    setScreen("Eclipse.boot");
  });
  onEvent("Eclipse.battmgr.button.1", "click", function( ) {
    for (var i = 0; i < 50; i++) {
      isinf = 0;
      bat = 100;
    }
  });
  timedLoop(70, function() {
    if (isinf == 1) {
      bat = "Infinite";
    }
    setText("Eclipse.battmgr.label", bat + "%");
  });
  onEvent("Eclipse.battmgr.button.3", "click", function( ) {
    isinf = 1;
    bat = "Infinite";
    setText("Eclipse.battmgr.label", bat + "%");
  });
}
//Code Specific to Echo Lake
function EchoLake() {
  //batt peach app
  var isinf = 0;
  onEvent("Eclipse.battmgr.button.2", "click", function( ) {
    setScreen("Eclipse.boot");
  });
  onEvent("Eclipse.battmgr.button.1", "click", function( ) {
    for (var i = 0; i < 50; i++) {
      isinf = 0;
      batt = 100;
    }
  });
  if (currentOS != "AudioOS") {
    timedLoop(70, function() {
      if (isinf == 1) {
        batt = "Infinite";
      }
      setText("Eclipse.battmgr.label", bat + "%");
    });
  }
  onEvent("Eclipse.battmgr.button.3", "click", function( ) {
    isinf = 1;
    batt = "Infinite";
    setText("Eclipse.battmgr.label", bat + "%");
  });
}
//Code Specific to the TestOS made for testing Eclipse
function TestOS() {
  var bat = 100;
  //batt peach app
  var isinf = 0;
  onEvent("Eclipse.battmgr.button.2", "click", function( ) {
    setScreen("Eclipse.boot");
  });
  onEvent("Eclipse.battmgr.button.1", "click", function( ) {
    for (var i = 0; i < 50; i++) {
      isinf = 0;
      bat = 100;
    }
  });
  timedLoop(2000, function() {
    bat = bat - 1;
    setText("batt", bat + "%");
  });
  timedLoop(70, function() {
    if (isinf == 1) {
      bat = "Infinite";
    }
    setText("Eclipse.battmgr.label", bat + "%");
    setText("batt", bat + "%");
  });
  onEvent("Eclipse.battmgr.button.3", "click", function( ) {
    isinf = 1;
    bat = "Infinite";
    setText("Eclipse.battmgr.label", bat + "%");
    setText("batt", bat + "%");
  });
}
