(this["webpackJsonpproject-6"]=this["webpackJsonpproject-6"]||[]).push([[0],{16:function(e,t,s){},56:function(e,t,s){"use strict";s.r(t);var r=s(2),n=s(4),i=s.n(n),a=s(28),l=s.n(a),o=s(29),c=s(5),h=s(6),u=s(8),p=s(7),d=(s(16),s(14)),b=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(r.jsxs)("header",{children:[Object(r.jsx)("h1",{children:"Haikus Ahoy!"}),Object(r.jsxs)("span",{className:"flexContainer",children:[Object(r.jsx)(d.a,{}),Object(r.jsx)("h2",{children:"Knowing The Ropes"})]}),Object(r.jsx)("button",{onClick:this.props.toggleModal,children:"Click here for instructions"})]})}}]),s}(n.Component),j=s(30),m=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(r.jsx)("section",{className:"modal",children:Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{className:"flexContainer",children:[Object(r.jsx)(d.a,{}),Object(r.jsx)("h2",{children:"Knowing The Ropes"})]}),Object(r.jsx)("button",{onClick:this.props.toggleModal,children:Object(r.jsx)(j.a,{})}),Object(r.jsx)("p",{children:"Welcome to Haiku Ahoy, Mate!"}),Object(r.jsx)("h3",{children:"Starting word:"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Step 1: Start entering letters into the text box."}),Object(r.jsx)("li",{children:"Step 2: Five autocomplete words will be displayed on the page - keep entering letters until you get the desired word."}),Object(r.jsx)("li",{children:"Step 3: Click on a word to select it as your starting word for the verse"})]}),Object(r.jsx)("h3",{children:"Following words:"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Step 4: Once you have selected your first word by clicking on it    the app will generate a list of 5 words that often follow that word."}),Object(r.jsx)("li",{children:"Step 5: Click on a word to add it to the end of your verse."}),Object(r.jsx)("li",{children:"Step 6: The app will generate new words until you have reached the  appropriate number of syllables for that verse (5 - 7 - 5)."})]}),Object(r.jsx)("h3",{children:"Going back:"}),Object(r.jsx)("ul",{children:Object(r.jsx)("li",{children:"If you want to change your haiku in progress, click on the \u201cgo to   previous line\u201d button. You will then be able to remove words and  obtain new suggestions. "})}),Object(r.jsx)("h3",{children:"Starting over:"}),Object(r.jsx)("ul",{children:Object(r.jsx)("li",{children:"Clicking on the \u201cstart over\u201d button will clear your haiku in    progress and bring you back to the beginning!"})}),Object(r.jsx)("p",{children:"Once you have finished your haiku, you may save it to the log book for other guests to read."}),Object(r.jsx)("p",{children:"Are you ready to set sail?"})]})})}}]),s}(n.Component),g=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(c.a)(this,s);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={showing:!1,buttonState:""},e.toggleClick=function(t){var s="";e.state.showing||(s="moveUp"),e.setState({showing:!e.state.showing,buttonState:s})},e}return Object(h.a)(s,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"Wrapper",children:Object(r.jsxs)("div",{className:"Intro",children:[Object(r.jsx)("button",{className:"button title ".concat(this.state.buttonState),onClick:this.toggleClick,children:"Haiku Ahoy!"}),this.state.showing?Object(r.jsx)("div",{className:"Introduction",children:Object(r.jsxs)("article",{children:[Object(r.jsx)("p",{children:"A haiku (\u4ff3\u53e5 high-koo) is a short three-line poem that usually follows a 5-7-5 syllable structure. Haiku poetry was originally developed by Japanese poets, and is often inspired by nature, a moment of beauty, or a poignant experience."}),Object(r.jsx)("h1",{children:"How to write Haiku:"}),Object(r.jsxs)("p",{className:"HowTo",children:["Haikus follow a strict form:",Object(r.jsx)("br",{}),"Three lines, with a 5-7-5 syllable structure. That means the first line will have five syllables, the second line will have seven syllables, and the last line will have five syllables."]}),Object(r.jsx)("h2",{children:"Examples of Haikus:"}),Object(r.jsxs)("p",{className:"example",children:["A winter blanket",Object(r.jsx)("br",{}),"covers the Earth in repose",Object(r.jsx)("br",{}),"but only a dream"]}),Object(r.jsx)("button",{className:"button CreateOwn",onClick:this.props.changeVerseVisible,children:"Create your own!"})]})}):null]})})}}]),s}(n.Component),O=s(18),f=s(13),v=s.n(f),y=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).calculateFilledSylls=function(){if(e.props.line.length>0){var t=e.props.line.map((function(e){return e.numSyllables})).reduce((function(e,t){return e+t}));return console.log(t),t}return 0},e.getWords=function(t){v()({url:"https://api.datamuse.com/words",responseType:"json",method:"GET",params:{rel_bga:t,md:"s"}}).then((function(t){e.filterResults(t.data)}))},e.filterResults=function(t){var s=t.filter((function(t){return t.numSyllables<=e.state.remainSylls}));e.randomize(s);var r=s.slice(0,5);e.setState({results:r})},e.randomize=function(e){for(var t=0,s=0,r=1;r<e.length;r++)t=Math.floor(Math.random()*r),s=e[r],e[r]=e[t],e[t]=s},e.handleSelect=function(t){var s=t.target.dataset.word,r=t.target.dataset.syll;e.setState({userSelect:{word:s,numSyllables:r}},(function(){e.handleSubmit(t)}))},e.handleSubmit=function(t){t.preventDefault(),e.setState({lineInProgress:[].concat(Object(O.a)(e.state.lineInProgress),[{word:e.state.userSelect.word,numSyllables:parseInt(e.state.userSelect.numSyllables)}]),remainSylls:e.state.remainSylls-e.state.userSelect.numSyllables},(function(){0===e.state.remainSylls&&e.props.changeVerseVisible(),e.props.updateHaiku(e.props.lineNumber,e.state.lineInProgress)})),e.getWords(e.state.userSelect.word)},e.removeLastWord=function(t){t.preventDefault();var s=Object(O.a)(e.state.lineInProgress),r=s.pop();e.setState({lineInProgress:s,remainSylls:e.state.remainSylls+r.numSyllables},(function(){!e.state.lineInProgress===[]&&(console.log("line empty"),e.props.reRenderVerse()),e.props.updateHaiku(e.props.lineNumber,e.state.lineInProgress),e.setState({userSelect:e.state.lineInProgress[e.state.lineInProgress.length-1]},(function(){e.state.userSelect&&e.getWords(e.state.userSelect.word)}))}))},e.removeEverything=function(){e.setState({lineInProgress:""},(function(){e.props.updateHaiku(e.props.lineNumber,e.state.lineInProgress)}))},e.state={remainSylls:null,userSelect:{word:"",numSyllables:null},lineInProgress:"",results:[]},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.calculateFilledSylls(),this.setState({lineInProgress:this.props.line.length>0?this.props.line:[{word:this.props.word,numSyllables:this.props.sylls}],remainSylls:this.props.totalSylls-(this.props.sylls?this.props.sylls:this.calculateFilledSylls()),userSelect:{numSyllables:this.props.sylls?this.props.sylls:this.props.line[this.props.line.length-1].numSyllables,word:this.props.word?this.props.word:this.props.line[this.props.line.length-1].word}},(function(){e.props.updateHaiku(e.props.lineNumber,e.state.lineInProgress),e.getWords(e.state.userSelect.word)}))}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{className:"Compose",children:[0!==this.state.remainSylls?Object(r.jsxs)("form",{children:[Object(r.jsx)("label",{htmlFor:"word",children:"Choose a word:"}),Object(r.jsx)("ul",{className:"wordPicker",name:"wordSelect",id:"word",children:this.state.results.map((function(t){return"."!==t.word?Object(r.jsx)("li",{className:"wordOption","data-syll":t.numSyllables,"data-word":t.word,onClick:e.handleSelect,children:t.word},t.score):null}))}),Object(r.jsxs)("p",{children:["Syllables left: ",this.state.remainSylls]})]}):"Line complete",this.state.remainSylls<5&&Object(r.jsxs)("div",{className:"controls",children:[Object(r.jsx)("button",{className:"removeLastWord",onClick:this.removeLastWord,children:"Remove the last word"}),Object(r.jsx)("button",{className:"removeEverything",onClick:this.removeEverything,children:"Start over"})]})]})}}]),s}(n.Component),x=function(){return Object(r.jsx)("p",{children:"Please enter a letter to get some words."})},w=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).getSuggestions=function(t){/^([a-z\w])+$/.test(t)&&""!==t?v()({url:"https://api.datamuse.com/sug",responseType:"json",method:"GET",params:{s:t}}).then((function(t){var s=t.data.filter((function(t){return/^([a-z])+$/.test(t.word)?(e.setState({showError:!1}),t):(console.log(t.word.charAt(0).toUpperCase()+t.word.slice(1)),t.word.charAt(0).toUpperCase()+t.word.slice(1))})).splice(0,5).map((function(e){return{word:e.word.charAt(0).toUpperCase()+e.word.slice(1),numSyllables:e.numSyllables}}));e.setState({suggestions:s})})):e.setState({suggestions:[],showError:!0})},e.getWordInfo=function(t){var s=t.target.dataset.name;v()({url:"https://api.datamuse.com/words",responseType:"json",method:"GET",params:{sp:s,md:"s"}}).then((function(t){var s=t.data;console.log(s[0]),e.props.updateSearchQuery(s[0])}))},e.state={suggestions:"",showError:!1},e}return Object(h.a)(s,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("section",{className:"Search",children:[Object(r.jsxs)("form",{children:[Object(r.jsx)("label",{className:"srOnly",htmlFor:"search",children:"Input your word"}),Object(r.jsx)("input",{autoComplete:"off",type:"text",id:"search",placeholder:"Enter starting word here",onChange:function(t){e.getSuggestions(t.target.value)}})]}),this.state.showError?Object(r.jsx)(x,{}):"",Object(r.jsx)("ul",{className:"suggestedWords",children:this.state.suggestions&&this.state.suggestions.map((function(t){return Object(r.jsx)("li",{onClick:e.getWordInfo,"data-name":t.word,children:t.word},t.score)}))})]})}}]),s}(n.Component),S=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).updateSearchQuery=function(t){var s=t.word,r=t.numSyllables;s=s.charAt(0).toUpperCase()+s.slice(1),e.setState({searchQuery:{word:s,numSyllables:r}})},e.reRender=function(){e.forrceUpdate()},e.state={searchQuery:{word:"",numSyllables:""}},e}return Object(h.a)(s,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"verse",children:[this.props.line.length>0||this.state.searchQuery.word?Object(r.jsx)(y,{updateHaiku:this.props.updateHaiku,word:this.state.searchQuery.word,sylls:this.state.searchQuery.numSyllables,totalSylls:5,lineNumber:this.props.lineNumber,line:this.props.line,changeVerseVisible:this.props.changeVerseVisible,getHaikus:this.props.getHaikus,reRenderVerse:this.reRender}):Object(r.jsx)(w,{updateSearchQuery:this.updateSearchQuery}),(2===this.props.lineNumber||3===this.props.lineNumber)&&Object(r.jsx)("button",{onClick:this.props.goToPreviousLine,children:"Go to previous line"})]})}}]),s}(n.Component),k=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"printLine",value:function(e){if(0!==this.props["line".concat(e)].length)return e===this.props.active&&this.props.active<4?this.props["line".concat(this.props.active)].slice(0,this.props["line".concat(this.props.active)].length-1).map((function(e){return e.word})).join(" "):this.props["line".concat(e)].map((function(e){return e.word})).join(" ")}},{key:"lastWord",value:function(e){var t=0;if(this.props.active<4&&(t=this.props["line".concat(this.props.active)].length,0!==this.props["line".concat(this.props.active)].length&&e===this.props.active))return Object(r.jsx)("span",{className:"CurrentWord",children:this.props["line".concat(this.props.active)][t-1].word})}},{key:"render",value:function(){return Object(r.jsxs)("section",{className:"haiku",children:[Object(r.jsx)("h3",{children:"Let's write some Haiku"}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:" "}),this.props.line1&&this.printLine(1),Object(r.jsx)("span",{children:" "}),this.lastWord(1)]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:" "}),this.props.line1&&this.printLine(2),Object(r.jsx)("span",{children:" "}),this.lastWord(2)]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:" "}),this.props.line1&&this.printLine(3),Object(r.jsx)("span",{children:" "}),this.lastWord(3)]})]})}}]),s}(n.Component),V=s(17);s(53);V.a.initializeApp({apiKey:"AIzaSyBk6aNK81E9i8yvY4Oc355hl2H6x8z7vp0",authDomain:"haiku-ahoy.firebaseapp.com",projectId:"haiku-ahoy",storageBucket:"haiku-ahoy.appspot.com",messagingSenderId:"342321447502",appId:"1:342321447502:web:05c7ed94699f12c186b91f"});var C=V.a,N=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;C.database().ref().on("value",(function(t){var s=t.val();s=Object.values(s),e.props.getHaikus(s)}))}},{key:"render",value:function(){return Object(r.jsxs)("section",{className:"logbook",children:[Object(r.jsx)("h2",{children:"Log Book"}),Object(r.jsx)("ul",{children:this.props.allHaikus.map((function(e){return Object(r.jsxs)("li",{tabIndex:"0",children:[Object(r.jsx)("p",{children:e.line1}),Object(r.jsx)("p",{children:e.line2}),Object(r.jsx)("p",{children:e.line3})]})}))})]})}}]),s}(n.Component);var H=function(){return Object(r.jsxs)("footer",{children:[Object(r.jsxs)("p",{children:["Made by the G6 Crew \u2693 @ ",Object(r.jsx)("a",{href:"https://junocollege.com/",children:"Juno College"})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("a",{href:"https://christinayu.dev/",target:"_blank",rel:"noreferrer",children:"Christina Yu"}),", ",Object(r.jsx)("a",{href:"https://daveratcliffe.com/",target:"_blank",rel:"noreferrer",children:"Dave Ratcliffe"}),", ",Object(r.jsx)("a",{href:"https://ermekcodes.com/",target:"_blank",rel:"noreferrer",children:"Ermek Barmashev"}),", ",Object(r.jsx)("a",{href:"https://sylcodes.com/",target:"_blank",rel:"noreferrer",children:"Syl Aucoin"})]})]})},I=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(c.a)(this,s);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).saveHaiku=function(){var t={line1:e.props.line1&&e.props.line1.map((function(e){return e.word})).join(" "),line2:e.props.line2&&e.props.line2.map((function(e){return e.word})).join(" "),line3:e.props.line3&&e.props.line3.map((function(e){return e.word})).join(" ")};C.database().ref().push(t),document.querySelector(".save").style.display="none"},e}return Object(h.a)(s,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"finish",children:[Object(r.jsx)("h2",{children:"Smooth Sailing! Your haiku is complete."}),Object(r.jsx)("button",{className:"save",onClick:this.saveHaiku,children:"Save to Log Book"}),Object(r.jsx)(k,{line1:this.props.line1,line2:this.props.line2,line3:this.props.line3})]})}}]),s}(n.Component),P=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).updateHaiku=function(t,s){var r="line".concat(t);e.setState(Object(o.a)({},r,s))},e.changeVerseVisible=function(){e.setState({verseVisible:++e.state.verseVisible}),e.setState({headerVisible:!0})},e.goToPreviousLine=function(){var t=e.state.verseVisible-1;e.setState({verseVisible:t})},e.getHaikus=function(t){e.setState({allHaikus:t})},e.toggleModal=function(){e.setState({modalVisible:!e.state.modalVisible})},e.state={verseVisible:0,line1:[],line2:[],line3:[],headerVisible:!1,modalVisible:!1,allHaikus:[]},e}return Object(h.a)(s,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"App",children:[0===this.state.verseVisible&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(g,{changeVerseVisible:this.changeVerseVisible})}),this.state.headerVisible?Object(r.jsx)(b,{modalVisible:this.state.modalVisible,toggleModal:this.toggleModal}):null,this.state.modalVisible?Object(r.jsx)(m,{toggleModal:this.toggleModal}):null,Object(r.jsxs)("main",{children:[1===this.state.verseVisible&&Object(r.jsx)(S,{updateHaiku:this.updateHaiku,lineNumber:1,line:this.state.line1,totalNumSyllables:5,changeVerseVisible:this.changeVerseVisible}),2===this.state.verseVisible&&Object(r.jsx)(S,{updateHaiku:this.updateHaiku,lineNumber:2,line:this.state.line2,totalNumSyllables:7,changeVerseVisible:this.changeVerseVisible,goToPreviousLine:this.goToPreviousLine}),3===this.state.verseVisible&&Object(r.jsx)(S,{updateHaiku:this.updateHaiku,lineNumber:3,line:this.state.line3,totalNumSyllables:5,startAgain:this.startAgain,changeVerseVisible:this.changeVerseVisible,goToPreviousLine:this.goToPreviousLine}),this.state.verseVisible<4&&this.state.verseVisible>0&&Object(r.jsx)(k,{line1:this.state.line1,line2:this.state.line2,line3:this.state.line3,active:this.state.verseVisible}),4===this.state.verseVisible&&Object(r.jsx)(I,{line1:this.state.line1,line2:this.state.line2,line3:this.state.line3}),this.state.verseVisible<=4&&this.state.verseVisible>0&&Object(r.jsx)(N,{allHaikus:this.state.allHaikus,getHaikus:this.getHaikus})]}),Object(r.jsx)(H,{})]})}}]),s}(n.Component),T=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,57)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),r(e),n(e),i(e),a(e)}))};l.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(P,{})}),document.getElementById("root")),T()}},[[56,1,2]]]);
//# sourceMappingURL=main.ad9d05ff.chunk.js.map