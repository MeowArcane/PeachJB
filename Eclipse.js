//1UE3zMlq8W5LH3DQCwhtO1KK_PW6cbddG2ObLq0Yh3c
var isBeta = "0";
var bootedonce = 0;
var isaudio = 0;
var currentOS = "";
var Homescreen = "Homescreen";
var versionvar = "version";
//Starts Eclipse
function Run(OS) {
  setTimeout(function() {
    if (Check(OS) == "1") {
      currentOS = OS;
      Code();
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
    isaudio = 1;
    AudioOS();
  } else if (OS == "SapphireOS") {
    if (version < 0.7) {
      console.log("Your SapphireOS version is too old for Eclipse");
      return 0;
    } else if ((version >= 0.7)) {
      console.log("Welcome to Eclipse");
      return "1";
    } else {
      console.log("Your SapphireOS version is unsupported for Eclipse");
      return 0;
    }
  } else if ((OS == "AuroraOS")) {
    console.log("Welcome to Eclipse for AuroraOS");
    isaurora = 1;
    Homescreen = "Home";
    versionvar = "Version";
    AuroraOS();
  }
}
//Enables Beta Features
function Beta() {
  isBeta = "1";
}
//Locks certain version-specific features 
function Locks() {
  if (versionvar < 0.9) {
    console.log("Your SapphireOS version doesnt support: Infinite charge");
    hideElement("Eclipse.battmgr.button.3");
  }
  if (versionvar < 1.0) {
    console.log("Your SapphireOS version doesnt support: Themezer");
    hideElement("Eclipse.boot.icon.3");
    hideElement("Eclipse.boot.icon.5");
  }
  if (isaudio == 1) {
    console.log("AudioOS doesnt support: Batteries");
  }
}
var points = 0;
var add = 1;
var CPS = 0;
//All Code for Eclipse thats in Beta
function BetaCode() {
showElement("Eclipse.accessibility.dropdown.1");
}
//fixes for sapphireOS cuz luke is a bad programmer
function Patches() {
  
}
//The actual Code for Eclipse
function Code() {
  Patches();
  //boot
  if (bootedonce == 0) {
    setScreen(Homescreen);
    BetterElementMakerAPI.Button("p.icon", 87, 355, 140, 40, 10, "#ffffff", "#000000", "Eclipse", "#ffffff");
    bootedonce = 1;
    setProperty("Eclipse.accessibility.dropdown.1", "options", ["English", "Toki Pona [BETA]"]);
    hideElement("Eclipse.accessibility.dropdown.1");
    setScreen("Eclipse.themezer");
    BetterElementMakerAPI.Dropdown("Eclipse.themezer.dropdown", 30, 65, 260, 40, "12", "rgb(60, 0, 55)", "#ffffff", "#ffffff");
    setProperty("Eclipse.themezer.dropdown", "options", ["Light", "Dark", "Purple", "Crystal", "Pink"]);
    setScreen(Homescreen);
  }
  setProperty("p.icon", "border-width", 3);
  setProperty("p.icon", "border-color", "black");
  setText("changelog", "Welcome");
  //menu
  onEvent("p.icon", "click", function( ) {
    setScreen("Eclipse.boot");
  });
  onEvent("Eclipse.boot.icon.3", "click", function( ) {
      setScreen("Eclipse.themezer");
    });
  onEvent("Eclipse.boot.button.1", "click", function( ) {
    setScreen(Homescreen);
  });
  onEvent("Eclipse.boot.button.2", "click", function( ) {
    setScreen("Eclipse.konsole");
  });
  onEvent("Eclipse.boot.icon.1", "click", function( ) {
    setScreen("Eclipse.battmgr");
  });
  onEvent("Eclipse.boot.icon.2", "click", function( ) {
    setScreen("Eclipse.shortcuts");
  });
  onEvent("Eclipse.boot.icon.5", "click", function( ) {
    setScreen("Eclipse.accessibility");
  });
  onEvent("Eclipse.boot.icon.4", "click", function( ) {
    setScreen("Eclipse.clickerx");
  });
  //batt
  onEvent("Eclipse.battmgr.button.2", "click", function( ) {
    setScreen("Eclipse.boot");
  });
  onEvent("Eclipse.battmgr.button.1", "click", function( ) {
    for (var i = 0; i < 50; i++) {
      isinf = 0;
      batteries = 100;
    }
  });
  timedLoop(100, function() {
    if (isaudio != 1) {
      setText("Eclipse.battmgr.label", batteries + "%");
      if (isinf == 1) {
        batteries = "Infinite";
        setText("Eclipse.battmgr.label", batteries + "%");
      }
    }
  });
  var isinf = 0;
  onEvent("Eclipse.battmgr.button.3", "click", function( ) {
    isinf = 1;
    batteries = "Infinite";
    setText("Eclipse.battmgr.label", batteries + "%");
  });
  //shortcuts
  onEvent("Eclipse.shortcuts.button.4", "click", function( ) {
    IAA();
    if (version >= 0.9) {
      showElement("bar.0.dev");
    }
    console.log("Developer Access Granted");
    isDeveloper = 1;
    if (version >= 0.9) {
      isinf = 1;
      batteries = "Infinite";
      setText("Eclipse.battmgr.label", batteries + "%");
    }
  });
  onEvent("Eclipse.shortcuts.button.2", "click", function( ) {
    IAA();
  });
  onEvent("Eclipse.shortcuts.button.1", "click", function( ) {
    setScreen("Eclipse.boot");
  });
  onEvent("Eclipse.shortcuts.button.3", "click", function( ) {
    if (versionvar >= 0.9) {
      showElement("bar.0.dev");
    }
    console.log("Developer Access Granted");
    isDeveloper = 1;
  });
  //Accessibility
  onEvent("Eclipse.accessibility.button.1", "click", function( ) {
    setScreen("Eclipse.boot");
  });
  onEvent("Eclipse.accessibility.button.2", "click", function( ) {
    Themezer("Black", "White", "White");
  });
  //Themezer
  onEvent("Eclipse.themezer.button.1", "click", function( ) {
      setScreen("Eclipse.boot");
    });
  onEvent("Eclipse.themezer.button.3", "click", function( ) {
      if (getText("Eclipse.themezer.dropdown") == "Dark") {
        Themezer("Black", "White", "#363636");
      } else if ((getText("Eclipse.themezer.dropdown") == "Light")) {
        Themezer("White", "Black", "Black");
      } else if (getText("Eclipse.themezer.dropdown") == "Pink") {
        Themezer("#ffc0cb", "White", "White");
      } else if ((getText("Eclipse.themezer.dropdown") == "Purple")) {
        Themezer("rgb(60, 0, 55)", "White", "White");
      } else if (getText("Eclipse.themezer.dropdown") == "Crystal") {
        Themezer("rgba(14, 30, 47, 0.67)", "White", "rgba(14, 30, 47, 0.67)");
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
      setText("Eclipse.clickerx.button.3", (add + 1 + " Per Click: ") + add * (50 + (add * 5)));
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
function IAA() {
  InstallApp(1);
}
//helps Themzer()
function themehelper(ID, MC, AC, BC) {
  setProperty(ID, "border-color", BC);
  setProperty(ID, "background-color", MC);
  setProperty(ID, "icon-color", AC);
  setProperty(ID, "text-color", AC);
}
//Themezer Script
function Themezer(MC, AC, BC) {
  themehelper("window.20", MC, AC, BC);
}
function AudioOS() {
  Code();
  //AudioOS specific patches for Eclipse
  setPosition("p.icon", 87, 235, 140, 40);
  hideElement("Eclipse.boot.icon.1");
  hideElement("Eclipse.boot.icon.2");
  //Patches - General Fixes
  setProperty("app.title.2", "font-size", 36);
  //Patches - Show Info on Menu
  showElement("song.overlay");
  showElement("song.composer.img");
  showElement("song.composer");
  showElement("song.song");
}
function AuroraOS() {
  Code();
  //AuroraOS specific patches for Eclipse
  setPosition("p.icon", 87, 300, 140, 40);
  hideElement("Eclipse.boot.icon.2");
}
