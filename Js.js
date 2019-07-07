setTimeout(focus, 2000)
    function focus() {
    var input = document.getElementById('input');
    input.focus();
    input.select();
}
function help() {
    document.getElementById("input").value = "help";
}
var mainHelp = " help --- Shows this text <br> cls --- Clear The Terminal <br> math (first integer) (Type of equation eg. +, -, *, /, <, >, ==) (second integer) --- Do Math Calculations <br> search (query) (website) (search method) --- Searches For Your Query On Search Engine Of Your Choice <br> define (word) (urban OPTIONAL) --- Searches Your Word On The Dictionary Or The Urban Dictionary <br> lyrics (song_name) (song_author) (az or genius) --- Finds The Lyric To Your Song On Az Or Genius <br> prompt (prompt_string) --- Sets The Prompt Text To The Written String <br> echo (string) --- Prints Out Written String <br> clear --- Adds Various Spaces To Organize The Terminal <br> reload --- Reloads The Page <br> font (font-family) --- Changes The Terminal Font. Select The Font From <a href='https://fonts.google.com'> </a><br> href (link) --- Opens link in new tab <br>"
document.addEventListener("keydown",function(e){
var text = document.getElementById("input");
var output = document.getElementById("Terminated");
    if(e.which == 13) {
        var a = document.getElementById("Terminated").innerHTML;
        window.cmdALL = document.getElementById("input").value;
    	var cmdAll = document.getElementById("input").value;
    	var href = window.location;
    	var prompt = document.getElementById("prompt").innerHTML;
        document.getElementById("Terminated").innerHTML = a + "<br>" + prompt + cmdALL;
    	var cmd = cmdAll.split(" ");
    	cmd[0] = cmd[0].toLowerCase();
    	var a = document.getElementById("Terminated").innerHTML + "<br>" + prompt;
    	document.getElementById("input").value = "";
    	if (cmd[0] == "cls") {
    		document.getElementById("Terminated").innerHTML = "";
    	} else if (cmd[0] == "help") {
            document.getElementById("Terminated").innerHTML = a + mainHelp;
        } else if (cmd[0] == "") {
            document.getElementById("Terminated").innerHTML = a + cmd[0];
        } else if (cmd[0] == "clear") {
            document.getElementById("Terminated").innerHTML = a + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" ;
        } else if (cmd[0] == "math") {
            cmd[1] = parseInt(cmd[1]);
            cmd[3] = parseInt(cmd[3]);
            var math;
            if (cmd[2] == "+") {
                math = cmd[1] + cmd[3];
            } else if (cmd[2] == "/") {
                math = cmd[1] / cmd[3];
            } else if (cmd[2] == "*") { 
                math = cmd[1] * cmd[3];
            } else if (cmd[2] == "-") {
                math = cmd[1] - cmd[3];
            } else if (cmd[2] == ">") {
                if(cmd[1] > cmd[3]) {
                    math = "true";
                } else {
                    math  = "false"
                }
            } else if (cmd[2] == "<") {
                if (cmd[1] < cmd[3]) {
                    math = "true";
                } else {
                    math = "false";
                }
            }
            else if (cmd[2] == "==") {
                if (cmd[1] == cmd[3]) {
                    math = "true";
                } else {
                    math = "false";
                }
            } else {
                math = "Not a valid symbol";
            }
            document.getElementById("Terminated").innerHTML = a + math;
        } else if (cmd[0] == "reload") {
            document.getElementById("Terminated").innerHTML = a + "Reloading page...";
            window.location = href;
        } else if (cmd[0] == "translate") {
            document.getElementById("Terminated").innerHTML = a + "Translating " + cmd[1] + " to " + cmd[2] + "...";
            if (cmd[3] == "") {
            window.open("https://translate.google.com/#view=home&op=translate&sl=auto&tl=" + cmd[2] + "&text=" + cmd[1]);
        } else {
            window.open("https://translate.google.com/#view=home&op=translate&sl=" + cmd[3] + "&tl=" + cmd[2] + "&text=" + cmd[1]);
        }
        } else if (cmd[0] == "set") {
            if (cmd[1] == "default") {
                if (cmd[2] == "search") {
                    document.getElementById("defaultSearchEngine").innerHTML = cmd[3];
                }
            } else if (cmd[2] == "==") {
                document.getElementById("Terminated").innerHTML = a + "Set " + cmd[1] + " == " + cmd[3];
            } else {
                document.getElementById("Terminated").innerHTML = a + "";
            }
        } else if (cmd[0] == "esc") {
            document.getElementById("Terminated").innerHTML = a + "EWEB SOURCE CODE";
        } else if (cmd[0] == "lyrics") {
            cmd[3] = cmd[3].toLowerCase();
            document.getElementById("Terminated").innerHTML = a + "Searching for " + cmd[1] + " by " + cmd[2] + " on " + cmd[3] + "'s lyrics";
            cmd[2] = cmd[2].toLowerCase();
            cmd[1] = cmd[1].toLowerCase();
            if (cmd[3] == "az") {
                window.open("https://azlyrics.com/lyrics/" + cmd[2].replace(/_/g,"") + "/" + cmd[1].replace(/_/g,"") + ".html")
            } else if (cmd[3] == "genius") {
                window.open("https://genius.com/" + cmd[2].replace(/_/g, "-") + "-" + cmd[1].replace(/_/g,"-") + "-lyrics")
            } else {
                document.getElementById("Terminated").innerHTML = a + "lyrics SONG_NAME SONG_AUTHOR GENIUS_OR_AZ";
            }
        } else if (cmd[0] == "search") {
    		if (cmd[2] !== "NA") {
    		document.getElementById("Terminated").innerHTML = a + "Searching for " + cmd[1] + " on " + cmd[2] + "...";
    		cmd[1] = cmd[1].replace(/_/g," ");
                if (cmd[2] == "google.com") {
    				window.open("https://www.google.com/search?q=" + cmd[1])
    			} else if (cmd[2] == "bing.com") {
    				window.open("https://www.bing.com/search?q=" + cmd[1])
    			} else if (cmd[2] == "yahoo.com") {
    				window.open("https://search.yahoo.com/search?q=" + cmd[1])
    			} else if (cmd[2] == "wikepedia.org") {
    				window.open("en.wikipedia.org/wiki/" + cmd[1])
    			} else {
                    document.getElementById("Terminated").innerHTML = a + "Searching for " + cmd[1] + " on " + cmd[2] + " using the " + cmd[3] + " searching method...";
    				if (cmd[3] == "wordpress") {
    					window.open("https://" + cmd[2] + "?s=" + cmd[1])
    				} else if (cmd[3] == "engine") {
    					window.open("https://" + cmd[2] + "/search?q=" + cmd[1])
    				} else {
    					window.open("https://" + cmd[2] + cmd[3] + cmd[1])
    				}
    			}
    		} else {
    			var defaultSearchEngine = document.getElementById("defaultSearchEngine").innerHTML;
                alert(defaultSearchEngine);
    			window.open("https://" + defaultSearchEngine + cmd[1])
    		}
    	} else if (cmd[0] == "define") {
            if (cmd[2] == "urban") {
                document.getElementById("Defining " + cmd[1] + " on the urban dictionary...");
               window.open("https://www.urbandictionary.com/define.php?term=" + cmd[1])
            } else {
    		document.getElementById("Terminated").innerHTML = a + "Defining " + cmd[1] + "...";
    		window.open("https://www.dictionary.com/browse/" + cmd[1])
        }
    	} else if (cmd[0] == "href") {
    		document.getElementById("Terminated").innerHTML = a + "Opening webpage... " + cmd[1];
    			cmd[1] = "https://www." + cmd[1]
    			window.open(cmd[1])
    	} else if (cmd[0] == "git") {
            if (cmd[1] == "clone") {
                if (cmd[2].indexOf("https://github.com/") !== -1) {
                cmd[2] = cmd[2].replace(".git","");
                var clone = cmd[2].split("/");
                clone = clone[4];
                git = cmd[2]
                document.getElementById("Terminated").innerHTML = a + "Cloning " + clone[4] + " from: " + cmd[0] + "...";
                window.open(cmd[2] + "/archive/master.zip");
            } else {
                document.getElementById("Terminated").innerHTML = a + "Git Project Not Found From <a href='https://github.com'>Github.com</a>"
            }
            }
        } else if (cmd[0] == "echo") {
            document.getElementById("Terminated").innerHTML = a + "Echoing " + [1] + "...";
            document.getElementById("Terminated").innerHTML = a + cmd[1];
        } else if (cmd[0] == "font") {
                var fontFa = "font-family";
                var fontSi = "font-size";
                var fam = document.getElementById("Open").style.fontFa;
                var size = document.getElementById("Open").style.fontSi;
            if (cmd[1] == "size") {
                document.getElementById("Terminated").innerHTML = a + "Changing Font Size...";
                document.getElementById("Open").innerHTML = "<div id=\"Terminated\" style=\"font-family:" + font + "; font-size: " + cmd[2] + "\">" + a + "</div>";
            }
            else if (cmd[1] == "family") {
               var fontFa = "font-family: " + cmd[1];
            if (cmd[2] == "help") {
                document.getElementById("Terminated").innerHTML = a + "Type in a font from <a href=\"https://fonts.google.com\"> fonts.google.com </a>";
                window.open("https://fonts.google.com");
            } else {
                if (cmd[2] == "default") {
                    cmd[2] = "Raleway";
                    document.getElementById("Input").style = fontFa;
                    document.getElementById("Open").innerHTML = "<div id=\"Terminated\" style=\"font-family:" + cmd[2] + "\">" + a + "</div>";
                }
                cmd[2] = cmd[2].replace("_"," ");
                document.getElementById("input").style = fontFa;
                document.getElementById("Open").innerHTML = "<div id=\"Terminated\" style=\"font-family:" + cmd[2] + "\">" + a + "</div>";
        }
        }
        } else if (cmd[0] == "prompt") {
            if (cmd[1] == "on" || cmd[1] == "off") {
                if (cmd[1] == "off") {
                    var prompt = document.getElementById("prompt").innerHTML;
                    document.getElementById("Savedprompt").innerHTML = prompt;
                    document.getElementById("prompt").innerHTML = " ";
                } else {
                    var prompt = document.getElementById("Savedprompt").innerHTML;
                    document.getElementById("prompt").innerHTML = prompt;
                }
            } else {
        		if (cmd[0].indexOf("/\"") !== -1 || cmd[0].indexOf("\"") == -1) {
                    document.getElementById("prompt").innerHTML = cmd[1];
        			document.getElementById("Terminated").innerHTML = a + cmd[0] + " " + cmd[1];
        		} else {
        			document.getElementById("prompt") = "variable" + cmd[1]
        		}
            } 
    	} else {
    		document.getElementById("Terminated").innerHTML = a + "ERROR command " + cmd[0] + " was not found.";
    	}
    	}
});