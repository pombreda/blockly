// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof puzzlepage == 'undefined') { var puzzlepage = {}; }


puzzlepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="MSG" style="display: none"><span id="country1">ऑस्ट्रेलिया</span><span id="country1Flag">flag_au.png</span><span id="country1FlagHeight">50</span><span id="country1FlagWidth">100</span><span id="country1Language">इंग्लिश</span><span id="country1City1">मेलबोर्न</span><span id="country1City2">सिडनी</span><span id="country1HelpUrl">http://mr.wikipedia.org/wiki/%E0%A4%91%E0%A4%B8%E0%A5%8D%E0%A4%9F%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%B2%E0%A4%BF%E0%A4%AF%E0%A4%BE</span><span id="country2">जर्मनी</span><span id="country2Flag">flag_de.png</span><span id="country2FlagHeight">60</span><span id="country2FlagWidth">100</span><span id="country2Language">जर्मन</span><span id="country2City1">बर्लिन</span><span id="country2City2">म्युन्शेन</span><span id="country2HelpUrl">http://mr.wikipedia.org/wiki/%E0%A4%9C%E0%A4%B0%E0%A5%8D%E0%A4%AE%E0%A4%A8%E0%A5%80</span><span id="country3">चीन</span><span id="country3Flag">flag_cn.png</span><span id="country3FlagHeight">66</span><span id="country3FlagWidth">100</span><span id="country3Language">चीनी</span><span id="country3City1">बीजिंग</span><span id="country3City2">शांघाय</span><span id="country3HelpUrl">http://en.wikipedia.org/wiki/China</span><span id="country4">ब्राझील</span><span id="country4Flag">flag_br.png</span><span id="country4FlagHeight">70</span><span id="country4FlagWidth">100</span><span id="country4Language">पोर्तुगीज</span><span id="country4City1">रियो दि जानेरो</span><span id="country4City2">साओ पाउलो</span><span id="country4HelpUrl">http://en.wikipedia.org/wiki/Brazil</span><span id="flag">राष्ट्रीय ध्वज</span><span id="language">भाषा</span><span id="languageChoose">निवडा</span><span id="cities">शहरे</span><span id="error0">निर्दोष!\nसर्व %1 ब्लॉक्स बरोबर आहेत.</span><span id="error1">जवळपास! एक ब्लॉक चुकिचा आहे.</span><span id="error2">%1 blocks are incorrect.</span><span id="tryAgain">The highlighted block is not correct.\\nKeep trying.</span></div>';
};


puzzlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return puzzlepage.messages(null, null, opt_ijData) + '<table id="header" width="100%"><tr><td valign="bottom"><h1><span id="title"><a href="../index.html">Blockly</a> : Puzzle</span></h1></td><td class="farSide"><select id="languageMenu" onchange="BlocklyApps.changeLanguage();"></select>&nbsp; &nbsp;<button id="helpButton" onclick="Puzzle.showHelp(true);">Help</button>&nbsp; &nbsp;<button id="checkButton" class="launch" onclick="Puzzle.checkAnswers();">Check Answers</button></td></tr></table><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script><div id="blockly"></div><div id="shadow"></div><div id="helpBorder"></div><div id="help"><div style="padding-bottom: 0.7ex">For each country (green), attach its flag, choose its language, and make a stack of its cities.</div><iframe src="help.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '" style="height: 200px; width: 100%; border: none;"></iframe><div class="farSide" style="padding: 1ex 3ex 0"><button id="okButton" onclick="Puzzle.hideHelp(true)">OK</button></div></div>';
};


puzzlepage.help = function(opt_data, opt_ignored, opt_ijData) {
  return puzzlepage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script><div id="blockly"></div>';
};
