//1UE3zMlq8W5LH3DQCwhtO1KK_PW6cbddG2ObLq0Yh3c
var isBeta = "0";
var currentOS = "";
var Homescreen = "Home";
var versionvar = "Version";
//Starts Eclipse
function Run(OS) {
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
showElement("Eclipse.accessibility.dropdown.1");
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
//fixes for sapphireOS cuz luke is a bad programmer
function Patches() {
  
}
//The actual Code for Eclipse
function Code() {
  Patches();
  setScreen(Homescreen);
  if (currentOS == "AudioOS") {
    BetterElementMakerAPI.Button("p.icon", "87", "235", "140", "40", "10", "black", "white", "Eclipse", "white");
  } else if (currentOS == "AuroraOS") {
    BetterElementMakerAPI.Button("p.icon", "87", "345", "140", "40", "10", "black", "white", "Eclipse", "white");
  } else {
    BetterElementMakerAPI.Button("p.icon", "87", "355", "140", "40", "10", "black", "white", "Eclipse", "white");
  }
  setProperty("p.icon", "border-width", 3);
  //boot
  setProperty("Eclipse.accessibility.dropdown.1", "options", ["English", "Toki Pona [BETA]", "Dock [BETA]"]);
  hideElement("Eclipse.accessibility.dropdown.1");
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
  hideElement("Eclipse.shortcuts.button.3");
  hideElement("Eclipse.shortcuts.button.4");
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
function Themezer(bgcolor, bcolor, accentcolor, txtcolor) {
  ThemezerHelper("p.icon", "button", bgcolor, bcolor, accentcolor, txtcolor);
  //Home
  ThemezerHelper("Bar.0", "bar", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("icon1", "button", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("icon2", "button", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("icon3", "button", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("icon4", "button", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("icon5", "button", bgcolor, bcolor, accentcolor, txtcolor);
  //App.appstore
  ThemezerHelper("Bar.3", "bar", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("Bar.3.back", "bar", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("Window.3", "bg", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("store.title", "label", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("appstore.music.title", "text", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("appstore.icon1", "icon", bgcolor, "rgba(0,0,0,0)", accentcolor, txtcolor);
  ThemezerHelper("appstore.install1", "button", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("appstore.uninstall1", "button", bgcolor, bcolor, accentcolor, txtcolor);
  //App.settings
  ThemezerHelper("Bar.1", "bar", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("Bar.1.back", "bar", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("Window.1", "bg", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("settings.about", "button", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("settings.wallpapers", "button", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("settings.themes", "button", bgcolor, bcolor, accentcolor, txtcolor);
  //App.settings.about
  ThemezerHelper("Bar.2", "bar", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("Bar.2.back", "bar", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("Window.2", "bg", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("setttings.about.title", "label", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("settings.ver", "text", bgcolor, bcolor, accentcolor, txtcolor);
  //App.terminal
  ThemezerHelper("Window.5", "bg", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("Bar.5", "bar", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("Bar.5.back", "bar", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("command", "text", bgcolor, "white", accentcolor, txtcolor);
  ThemezerHelper("param1", "text", bgcolor, "white", accentcolor, txtcolor);
  ThemezerHelper("param2", "text", bgcolor, "white", accentcolor, txtcolor);
  ThemezerHelper("run", "button", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("console", "text", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("terminal.label", "label", bgcolor, bcolor, accentcolor, txtcolor);
  //App.tips
  ThemezerHelper("Bar.4", "bar", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("Bar.4.back", "bar", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("Window.4", "bg", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("tips.new", "text", bgcolor, bcolor, accentcolor, txtcolor);
  ThemezerHelper("tips.label", "label", bgcolor, bcolor, accentcolor, txtcolor);
  console.clear();
}
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
  onEvent("Eclipse.battmgr.button.1", "click", function( ) {
    for (var i = 0; i < 50; i++) {
      isinf = 0;
      batteries = 100;
    }
  });
  if (currentOS != "AudioOS") {
    timedLoop(70, function() {
      if (isinf == 1) {
        batteries = "Infinite";
      }
      setText("Eclipse.battmgr.label", bat + "%");
    });
  }
  onEvent("Eclipse.battmgr.button.3", "click", function( ) {
    isinf = 1;
    batteries = "Infinite";
    setText("Eclipse.battmgr.label", bat + "%");
  });
}
//Code Specific to AuroraOS
function AuroraOS() {
  //enable dev mode
  ownerid = uid;
  //pos stuffs
  setPosition("batteries", 5, 5, 100, 18);
  setProperty("batteries", "text-align", "left");
  setProperty("Bar.0", "font-size", 22);
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
  if (currentOS != "AudioOS") {
    timedLoop(70, function() {
      if (isinf == 1) {
        bat = "Infinite";
      }
      setText("Eclipse.battmgr.label", bat + "%");
    });
  }
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
