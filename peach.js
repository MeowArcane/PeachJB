//NqkDX6Ww_fSR9sNuUAr4Gy-QP9oRDUiG8JQyIm3xwc4
var isBeta = "0";
var bootedonce = 0;
//Starts Peach
function Run() {
  setTimeout(function() {
    if (Check() == "1") {
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
function Check() {
  if (version < 0.7) {
    console.log("Your SapphireOS version is too old for PeachJB");
    return 0;
  } else if ((version >= 0.7)) {
    console.log("Welcome to PeachJB");
    return "1";
  } else {
    console.log("Your SapphireOS version is unsupported for PeachJB");
    return 0;
  }
}
//Enables Beta Features
function Beta() {
  isBeta = "1";
}
//Locks certain version-specific features 
function Locks() {
  if (version < 0.9) {
    console.log("Your SapphireOS version doesnt support: Infinite charge");
    hideElement("peach.battmgr.button.3");
  }
  if (version < 1.0) {
    console.log("Your SapphireOS version doesnt support: Themezer");
    hideElement("peach.boot.icon.3");
  }
}
//All Code for PeachJB thats in Beta
function BetaCode() {
  //test
  showElement("peach.boot.icon.4");
  //Accessibility
  showElement("peach.boot.icon.5");
  onEvent("peach.boot.icon.5", "click", function( ) {
    setScreen("peach.test");
  });
}
//The actual Code for PeachJB
function Code() {
  //boot
  if (bootedonce == 0) {
    setScreen("Homescreen");
    BetterElementMakerAPI.Button("p.icon", 87, 355, 140, 40, 10, "#ffffff", "#000000", "Peach", "#ffffff");
    bootedonce = 1;
    if (version >= 1.0) {
      setScreen("peach.themezer");
      BetterElementMakerAPI.Dropdown("peach.themezer.dropdown", 30, 65, 260, 40, "12", "rgb(60, 0, 55)", "#ffffff", "#ffffff");
      setProperty("peach.themezer.dropdown", "options", ["Light", "Dark", "High Contrast", "Purple", "Crystal", "Pink"]);
      setScreen("Homescreen");
    }
  }
  setProperty("p.icon", "border-width", 3);
  setProperty("p.icon", "border-color", "black");
  setText("changelog", "Welcome");
  //menu
  onEvent("p.icon", "click", function( ) {
    setScreen("peach.boot");
  });
  onEvent("peach.boot.button.1", "click", function( ) {
    setScreen("Homescreen");
  });
  onEvent("peach.battmgr.button.2", "click", function( ) {
    setScreen("peach.boot");
  });
  onEvent("peach.boot.button.2", "click", function( ) {
    setScreen("peach.konsole");
  });
  //batt
  onEvent("peach.boot.icon.1", "click", function( ) {
    setScreen("peach.battmgr");
  });
  onEvent("peach.battmgr.button.1", "click", function( ) {
    for (var i = 0; i < 50; i++) {
      isinf = 0;
      batteries = 100;
    }
  });
  timedLoop(100, function() {
    setText("peach.battmgr.label", batteries + "%");
    if (isinf == 1) {
      batteries = "Infinite";
      setText("peach.battmgr.label", batteries + "%");
    }
  });
  var isinf = 0;
  onEvent("peach.battmgr.button.3", "click", function( ) {
    isinf = 1;
    batteries = "Infinite";
    setText("peach.battmgr.label", batteries + "%");
  });
  //shortcuts
  onEvent("peach.shortcuts.button.4", "click", function( ) {
    IAA();
    if (version >= 0.9) {
      showElement("bar.0.dev");
    }
    console.log("Developer Access Granted");
    isDeveloper = 1;
    isinf = 1;
    batteries = "Infinite";
    setText("peach.battmgr.label", batteries + "%");
  });
  onEvent("peach.shortcuts.button.2", "click", function( ) {
    IAA();
  });
  onEvent("peach.boot.icon.2", "click", function( ) {
    setScreen("peach.shortcuts");
  });
  onEvent("peach.shortcuts.button.1", "click", function( ) {
    setScreen("peach.boot");
  });
  onEvent("peach.shortcuts.button.3", "click", function( ) {
    if (version >= 0.9) {
      showElement("bar.0.dev");
    }
    console.log("Developer Access Granted");
    isDeveloper = 1;
  });
  //Themezer
  onEvent("peach.boot.icon.3", "click", function( ) {
      setScreen("peach.themezer");
    });
  onEvent("peach.themezer.button.1", "click", function( ) {
      setScreen("peach.boot");
    });
  onEvent("peach.themezer.button.3", "click", function( ) {
      if (getText("peach.themezer.dropdown") == "Dark") {
        Themezer("Black", "White", "#363636");
      } else if ((getText("peach.themezer.dropdown") == "Light")) {
        Themezer("White", "Black", "Black");
      } else if (getText("peach.themezer.dropdown") == "Pink") {
        Themezer("#ffc0cb", "White", "White");
      } else if ((getText("peach.themezer.dropdown") == "Purple")) {
        Themezer("rgb(60, 0, 55)", "White", "White");
      } else if (getText("peach.themezer.dropdown") == "Crystal") {
        Themezer("rgba(14, 30, 47, 0.67)", "White", "rgba(14, 30, 47, 0.67)");
      } else if (getText("peach.themezer.dropdown") == "High Contrast") {
        Themezer("Black", "White", "White");
        Themezer("Black", "White", "White");
      } else {
        //getText("peach.themezer.dropdown") == "Pink"
      }
    });
    //Themezer - Custom
  onEvent("peach.themezer.custom.button.2", "click", function( ) {
      var output_1 = getText("peach.themezer.custom.input.1")
      var output_2 = getText("peach.themezer.custom.input.2")
      var output_3 = getText("peach.themezer.custom.input.3")
      var combined_output = ((output_1 + "*") + output_2 + "*") + output_3;
      setText("peach.themezer.custom.input.4", combined_output);
    });
  onEvent("peach.themezer.button.2", "click", function( ) {
      setScreen("peach.themezer.custom");
    });
  onEvent("peach.themezer.custom.button.1", "click", function( ) {
      setScreen("peach.themezer");
    });
  onEvent("peach.themezer.custom.button.3", "click", function( ) {
      var combinedOutput = getText("peach.themezer.custom.input.4");
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
      PeachAPI.Themezer(outputs[0], outputs[1], outputs[2]);
    });
  //konsole
  onEvent("peach.konsole.button.1", "click", function( ) {
    setScreen("peach.boot");
  });
  onEvent("peach.konsole.button.2", "click", function( ) {
    if (getText("peach.konsole.input.1") == "test" ) {
      setText("peach.konsole.text.1", "Test! \n / >");
    } else if ((getText("peach.konsole.input.1") == "open")) {
      setText("peach.konsole.text.1", "/ >");
      setScreen(getText("peach.konsole.input.2"));
    } else if ((getText("peach.konsole.input.1") == "print")) {
      setText("peach.konsole.text.1", getText("peach.konsole.input.2") + "\n / >");
    } else if ((getText("peach.konsole.input.1") == "version")) {
      setText("peach.konsole.text.1", Technicalversion + "\n / >");
    } else if ((getText("peach.konsole.input.1") == "home")) {
      setScreen("Login");
    } else if ((getText("peach.konsole.input.1") == "exit")) {
      setScreen("peach.boot");
    } else if ((getText("peach.konsole.input.1") == "reboot")) {
      boot();
    } else {
      setText("peach.konsole.text.1", "Invalid Command! \n / >");
    }
    //(getText("peach.konsole.input.1") == "str"))
  });
  //test
  onEvent("peach.boot.icon.4", "click", function( ) {
    setScreen("peach.test");
  });
  onEvent("peach.test.button.1", "click", function( ) {
    setScreen("peach.boot");
  });
}
function IAA() {
  console.log("Installed all apps");
  if (InstalledMusicApp == 0) {
    showElement("icon3");
    showElement("app.appstore.uninstall1");
    setText("appstore.install1", "Open");
    InstalledMusicApp = 1;
  }
  if (InstalledNotepadApp == 0) {
    showElement("icon4");
    showElement("app.appstore.uninstall2");
    setText("appstore.install2", "Open");
    InstalledNotepadApp = 1;
  }
  if (InstalledClockApp == 0) {
    showElement("icon5");
    showElement("app.appstore.uninstall3");
    setText("appstore.install3", "Open");
    InstalledClockApp = 1;
  }
  if (version >= 0.8) {
    if (InstalledClickerApp == 0) {
      showElement("icon7");
      showElement("app.appstore.uninstall4");
      setText("appstore.install4", "Open");
      InstalledClickerApp = 1;
    }
  }
  if (version >= 0.9) {
    if (InstalledAIApp == 0) {
      showElement("icon8");
      showElement("app.appstore.uninstall5");
      setText("appstore.install5", "Open");
      InstalledAIApp = 1;
    }
  }
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
hideElement("settings.darkmode");
setText("peach.themezer.custom.input.1", MC);
setText("peach.themezer.custom.input.2", AC);
setText("peach.themezer.custom.input.3", BC);
themehelper("p.icon", MC, AC, BC);
//windows
themehelper("window.1", MC, AC, BC);
themehelper("window.1", MC, AC, BC);
themehelper("window.2", MC, AC, BC);
themehelper("window.2", MC, AC, BC);
themehelper("window.3", MC, AC, BC);
themehelper("window.3", MC, AC, BC);
themehelper("window.4", MC, AC, BC);
themehelper("window.4", MC, AC, BC);
themehelper("window.5", MC, AC, BC);
themehelper("window.5", MC, AC, BC);
themehelper("window.6", MC, AC, BC);
themehelper("window.6", MC, AC, BC);
themehelper("window.7", MC, AC, BC);
themehelper("window.7", MC, AC, BC);
themehelper("window.8", MC, AC, BC);
themehelper("window.8", MC, AC, BC);
themehelper("window.9", MC, AC, BC);
themehelper("window.9", MC, AC, BC);
themehelper("window.10", MC, AC, BC);
themehelper("window.10", MC, AC, BC);
themehelper("window.11", MC, AC, BC);
themehelper("window.11", MC, AC, BC);
themehelper("window.12", MC, AC, BC);
themehelper("window.12", MC, AC, BC);
themehelper("window.17", MC, AC, BC);
themehelper("window.17", MC, AC, BC);
themehelper("window.22", MC, AC, BC);
themehelper("window.22", MC, AC, BC);
themehelper("window.20", MC, AC, BC);
themehelper("window.20", MC, AC, BC);
themehelper("window.21", MC, AC, BC);
themehelper("window.21", MC, AC, BC);
themehelper("window.22", MC, AC, BC);
themehelper("window.22", MC, AC, BC);
themehelper("window.23", MC, AC, BC);
themehelper("window.23", MC, AC, BC);
themehelper("window.24", MC, AC, BC);
themehelper("window.24", MC, AC, BC);
themehelper("window.25", MC, AC, BC);
themehelper("window.25", MC, AC, BC);
themehelper("window.26", MC, AC, BC);
themehelper("window.26", MC, AC, BC);
//bar
themehelper("bar.0.dev", MC, AC, BC);
themehelper("bar.0.dev", MC, AC, BC);
themehelper("bar.0", MC, AC, BC);
themehelper("bar.0.1", MC, AC, BC);
themehelper("bar.0.1", MC, AC, BC);
themehelper("bar.1", MC, AC, BC);
themehelper("bar.1.1", MC, AC, BC);
themehelper("bar.1.1", MC, AC, BC);
themehelper("bar.2", MC, AC, BC);
themehelper("bar.2.1", MC, AC, BC);
themehelper("bar.2.1", MC, AC, BC);
themehelper("bar.3", MC, AC, BC);
themehelper("bar.3.1", MC, AC, BC);
themehelper("bar.3.1", MC, AC, BC);
themehelper("bar.4", MC, AC, BC);
themehelper("bar.4.1", MC, AC, BC);
themehelper("bar.4.1", MC, AC, BC);
themehelper("bar.5", MC, AC, BC);
themehelper("bar.5.1", MC, AC, BC);
themehelper("bar.5.1", MC, AC, BC);
themehelper("bar.6", MC, AC, BC);
themehelper("bar.6.1", MC, AC, BC);
themehelper("bar.6.1", MC, AC, BC);
themehelper("bar.7", MC, AC, BC);
themehelper("bar.7.1", MC, AC, BC);
themehelper("bar.7.1", MC, AC, BC);
themehelper("bar.8", MC, AC, BC);
themehelper("bar.8.1", MC, AC, BC);
themehelper("bar.8.1", MC, AC, BC);
themehelper("bar.21", MC, AC, BC);
themehelper("bar.21.1", MC, AC, BC);
themehelper("bar.21.1", MC, AC, BC);
themehelper("bar.10", MC, AC, BC);
themehelper("bar.10.1", MC, AC, BC);
themehelper("bar.10.1", MC, AC, BC);
themehelper("bar.11", MC, AC, BC);
themehelper("bar.11.1", MC, AC, BC);
themehelper("bar.11.1", MC, AC, BC);
themehelper("bar.12", MC, AC, BC);
themehelper("bar.12.1", MC, AC, BC);
themehelper("bar.12.1", MC, AC, BC);
themehelper("bar.22", MC, AC, BC);
themehelper("bar.22.1", MC, AC, BC);
themehelper("bar.22.1", MC, AC, BC);
themehelper("bar.14", MC, AC, BC);
themehelper("bar.14.1", MC, AC, BC);
themehelper("bar.14.1", MC, AC, BC);
themehelper("bar.17", MC, AC, BC);
themehelper("bar.17.1", MC, AC, BC);
themehelper("bar.17.1", MC, AC, BC);
themehelper("bar.16", MC, AC, BC);
themehelper("bar.16.1", MC, AC, BC);
themehelper("bar.16.1", MC, AC, BC);
themehelper("bar.22", MC, AC, BC);
themehelper("bar.22.1", MC, AC, BC);
themehelper("bar.22.1", MC, AC, BC);
themehelper("bar.23", MC, AC, BC);
themehelper("bar.23.1", MC, AC, BC);
themehelper("bar.23.1", MC, AC, BC);
themehelper("bar.24", MC, AC, BC);
themehelper("bar.24.1", MC, AC, BC);
themehelper("bar.24.1", MC, AC, BC);
themehelper("bar.25", MC, AC, BC);
themehelper("bar.25.1", MC, AC, BC);
themehelper("bar.25.1", MC, AC, BC);
//appstore
themehelper("app.title.1.1", MC, AC, BC);
themehelper("appstore.label.1", MC, AC, BC);
themehelper("appstore.label.2", MC, AC, BC);
themehelper("appstore.label.3", MC, AC, BC);
themehelper("appstore.label.4", MC, AC, BC);
themehelper("appstore.label.5", MC, AC, BC);
themehelper("appstore.label.6", MC, AC, BC);
themehelper("appstore.label.7", MC, AC, BC);
themehelper("appstore.label.8", MC, AC, BC);
themehelper("icon.appstore1", MC, AC, BC);
themehelper("icon.appstore2", MC, AC, BC);
themehelper("icon.appstore3", MC, AC, BC);
themehelper("icon.appstore4", MC, AC, BC);
themehelper("icon.appstore5", MC, AC, BC);
themehelper("icon.appstore6", MC, AC, BC);
themehelper("icon.appstore7", MC, AC, BC);
themehelper("icon.appstore8", MC, AC, BC);
//app titles
themehelper("app.title.1", MC, AC, BC);
themehelper("app.title.2", MC, AC, BC);
themehelper("app.title.3", MC, AC, BC);
themehelper("app.title.4", MC, AC, BC);
themehelper("app.title.5", MC, AC, BC);
themehelper("app.title.6", MC, AC, BC);
themehelper("app.title.7", MC, AC, BC);
themehelper("app.title.8", MC, AC, BC);
themehelper("app.title.9", MC, AC, BC);
themehelper("app.title.10", MC, AC, BC);
themehelper("app.title.11", MC, AC, BC);
themehelper("app.title.14", MC, AC, BC);
themehelper("app.title.15", MC, AC, BC);
themehelper("app.title.16", MC, AC, BC);
themehelper("app.title.19", MC, AC, BC);
themehelper("app.title.20", MC, AC, BC);
themehelper("app.title.21", MC, AC, BC);
themehelper("app.title.22", MC, AC, BC);
themehelper("changelog", MC, AC, BC);
themehelper("changelog", MC, AC, BC);
//dev
themehelper("dev.userid", MC, AC, BC);
themehelper("dev.serialnumber", MC, AC, BC);
themehelper("dev.uiversion", MC, AC, BC);
themehelper("dev.version", MC, AC, BC);

//bugs:
//Click app

//My Changes / Fixes
//too lazy to organize
themehelper("console", MC, AC, BC);
themehelper("login.poweredby", MC, AC, BC);
themehelper("signinbutton", MC, AC, BC);
themehelper("signup.switch", MC, AC, BC);
themehelper("username", MC, AC, BC);
themehelper("pw", MC, AC, BC);
themehelper("login.txt", MC, AC, BC);
themehelper("bar.10.2", MC, AC, BC);
themehelper("bar.2.2", MC, AC, BC);
themehelper("settings.passcodes.apply", MC, AC, BC);
themehelper("window.16", MC, AC, BC);
themehelper("passcode", MC, AC, BC);
themehelper("bar.23.b", MC, AC, BC);
themehelper("window.2.1", MC, AC, BC);
themehelper("app.title.2.2", MC, AC, BC);
themehelper("window.2.1", MC, AC, BC);
themehelper("window.2.1", MC, AC, BC);
themehelper("window.2.1", MC, AC, BC);
//Homescreen
themehelper("icon1", MC, AC, BC);
themehelper("icon2", MC, AC, BC);
themehelper("icon3", MC, AC, BC);
themehelper("icon4", MC, AC, BC);
themehelper("icon5", MC, AC, BC);
themehelper("icon6", MC, AC, BC);
themehelper("icon7", MC, AC, BC);
themehelper("icon8", MC, AC, BC);
//settings app
themehelper("settings.accountsbutton", MC, AC, BC);
themehelper("app.settings.wallpapersbutton", MC, AC, BC);
themehelper("settings.passcodebutton", MC, AC, BC);
themehelper("app.settings.aboutbutton", MC, AC, BC);
themehelper("window.2.1", MC, AC, BC);
themehelper("app.title.2.1", MC, AC, BC);
themehelper("settings.userid", MC, AC, BC);
themehelper("settings.version", MC, AC, BC);
themehelper("bar.3.1.", MC, AC, BC);
themehelper("bar.3.1.1", MC, AC, BC);
themehelper("bar.3.1.2", MC, AC, BC);
//appstore
themehelper("appstore.install1", MC, AC, BC);
themehelper("appstore.install2", MC, AC, BC);
themehelper("appstore.install3", MC, AC, BC);
themehelper("appstore.install4", MC, AC, BC);
themehelper("appstore.install5", MC, AC, BC);
themehelper("appstore.install6", MC, AC, BC);
themehelper("appstore.install7", MC, AC, BC);
themehelper("app.appstore.uninstall1", MC, AC, BC);
themehelper("app.appstore.uninstall2", MC, AC, BC);
themehelper("app.appstore.uninstall3", MC, AC, BC);
themehelper("app.appstore.uninstall4", MC, AC, BC);
themehelper("app.appstore.uninstall5", MC, AC, BC);
themehelper("app.appstore.uninstall6", MC, AC, BC);
themehelper("app.appstore.uninstall7", MC, AC, BC);
themehelper("app.appstore.uninstall8", MC, AC, BC);
themehelper("appstore.1.next", MC, AC, BC);
themehelper("appstore.1.back", MC, AC, BC);
//other
themehelper("time.clock", MC, AC, BC);
themehelper("app.notepad.title", MC, AC, BC);
themehelper("notepad", MC, AC, BC);
themehelper("clock.standbymode", MC, AC, BC);
themehelper("music.to.1.2", MC, AC, BC);
themehelper("music.to.2.1", MC, AC, BC);
themehelper("window.15", MC, AC, BC);
themehelper("HowManyClicks", MC, AC, BC);
themehelper("click", MC, AC, BC);
themehelper("clickx2", MC, AC, BC);
themehelper("clickx2", MC, AC, BC);
themehelper("response", MC, AC, BC);
themehelper("input", MC, AC, BC);
themehelper("respond", MC, AC, BC);
themehelper("app.ainetwork.label.1.plugins", MC, AC, BC);
themehelper("bar.3.2", MC, AC, BC);
themehelper("bar.3.2.1", MC, AC, BC);
themehelper("bar.3.2.2", MC, AC, BC);
themehelper("bar.3.2.3", MC, AC, BC);
//music
themehelper("app.music.song1", MC, AC, BC);
themehelper("app.music.song2", MC, AC, BC);
themehelper("app.music.song3", MC, AC, BC);
themehelper("app.music.song4", MC, AC, BC);
themehelper("app.music.song5", MC, AC, BC);
themehelper("app.music.song6", MC, AC, BC);
themehelper("app.music.song7", MC, AC, BC);
themehelper("app.music.song8", MC, AC, BC);
themehelper("app.music.song9", MC, AC, BC);
themehelper("app.music.song10", MC, AC, BC);
themehelper("app.music.song11", MC, AC, BC);
themehelper("app.music.song12", MC, AC, BC);
themehelper("app.music.top.song1", MC, AC, BC);
themehelper("app.music.top.song2", MC, AC, BC);
themehelper("app.music.top.song3", MC, AC, BC);
themehelper("app.music.stop1", MC, AC, BC);
themehelper("app.music.stop2", MC, AC, BC);
themehelper("music.to.3.2", MC, AC, BC);
themehelper("app.music.1", MC, AC, BC);
//ainetwork
themehelper("app.ainetwork.p.r", MC, AC, BC);
themehelper("app.ainetwork.p.p", MC, AC, BC);
themehelper("app.ainetwork.r.p", MC, AC, BC);
themehelper("app.ainetwork.r.r", MC, AC, BC);
themehelper("app.ainetwork.nmod", MC, AC, BC);
themehelper("app.ainetwork.nuhuh", MC, AC, BC);
themehelper("app.ainetwork.tenresponses", MC, AC, BC);
themehelper("app.ainetwork.yes", MC, AC, BC);
themehelper("app.ainetwork.no", MC, AC, BC);
themehelper("app.ainetwork.tokipona", MC, AC, BC);
//ain patch
onEvent("app.ainetwork.nmod", "click", function( ) {
	themehelper("app.ainetwork.nmod", MC, AC, BC);
	themehelper("app.ainetwork.nuhuh", MC, AC, BC);
	themehelper("app.ainetwork.tenresponses", MC, AC, BC);
	themehelper("app.ainetwork.yes", MC, AC, BC);
	themehelper("app.ainetwork.no", MC, AC, BC);
	themehelper("app.ainetwork.tokipona", MC, AC, BC);
});
onEvent("app.ainetwork.nuhuh", "click", function( ) {
	themehelper("app.ainetwork.nmod", MC, AC, BC);
	themehelper("app.ainetwork.nuhuh", MC, AC, BC);
	themehelper("app.ainetwork.tenresponses", MC, AC, BC);
	themehelper("app.ainetwork.yes", MC, AC, BC);
	themehelper("app.ainetwork.no", MC, AC, BC);
	themehelper("app.ainetwork.tokipona", MC, AC, BC);
});
onEvent("app.ainetwork.tenresponses", "click", function( ) {
	themehelper("app.ainetwork.nmod", MC, AC, BC);
	themehelper("app.ainetwork.nuhuh", MC, AC, BC);
	themehelper("app.ainetwork.tenresponses", MC, AC, BC);
	themehelper("app.ainetwork.yes", MC, AC, BC);
	themehelper("app.ainetwork.no", MC, AC, BC);
	themehelper("app.ainetwork.tokipona", MC, AC, BC);
});
onEvent("app.ainetwork.yes", "click", function( ) {
	themehelper("app.ainetwork.nmod", MC, AC, BC);
	themehelper("app.ainetwork.nuhuh", MC, AC, BC);
	themehelper("app.ainetwork.tenresponses", MC, AC, BC);
	themehelper("app.ainetwork.yes", MC, AC, BC);
	themehelper("app.ainetwork.no", MC, AC, BC);
	themehelper("app.ainetwork.tokipona", MC, AC, BC);
});
onEvent("app.ainetwork.no", "click", function( ) {
	themehelper("app.ainetwork.nmod", MC, AC, BC);
	themehelper("app.ainetwork.nuhuh", MC, AC, BC);
	themehelper("app.ainetwork.tenresponses", MC, AC, BC);
	themehelper("app.ainetwork.yes", MC, AC, BC);
	themehelper("app.ainetwork.no", MC, AC, BC);
	themehelper("app.ainetwork.tokipona", MC, AC, BC);
});
onEvent("app.ainetwork.tokipona", "click", function( ) {
	themehelper("app.ainetwork.nmod", MC, AC, BC);
	themehelper("app.ainetwork.nuhuh", MC, AC, BC);
	themehelper("app.ainetwork.tenresponses", MC, AC, BC);
	themehelper("app.ainetwork.yes", MC, AC, BC);
	themehelper("app.ainetwork.no", MC, AC, BC);
	themehelper("app.ainetwork.tokipona", MC, AC, BC);
});
}
