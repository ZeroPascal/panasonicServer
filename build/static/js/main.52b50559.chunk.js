(this.webpackJsonpprojector_gui=this.webpackJsonpprojector_gui||[]).push([[0],{127:function(e,n,t){},128:function(e,n,t){},130:function(e,n,t){},169:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(11),l=t.n(c),i=(t(127),t(12)),s=t(225),o=t(111),O=t(226),d=t(227),E=t(113),u=(t(128),t(14)),_=t.n(u),j=t(21),h="http://192.168.10.249:3000/";h="http://192.168.10.249:3002/";var b,f,T;!function(e){e.REQUEST_UPDATE="REQUEST_UPDATE",e.REQUESTING_UPDATE="REQUESTING_UPDATE",e.EMITTING_PJS="EMITTING_PJS",e.EMITTING_STATUS="EMITTING_STATUS",e.EMITTING_CONFIG="EMITTING_CONFIG"}(b||(b={})),function(e){e.THRU="THRU",e.DEL="DEL",e.CLEAR="CLEAR",e.ENTER="ENTER",e.NEXT="NEXT",e.BACK="BACK",e.IF_PROG="IF_PROG"}(f||(f={})),function(e){e.CLEAR_SELECTED_ON_CMD="CLEAR_SELECTED_ON_CMD",e.IF_SELECTED="IF_SELECTED",e.DARK_MODE="DARK_MODE"}(T||(T={}));var N,p,x=["7","8","9","4","5","6","1","2","3","-","0","+",f.THRU,f.DEL,f.CLEAR,f.NEXT,f.IF_PROG,f.BACK,f.ENTER];!function(e){e.POWER_OFF="POWER_OFF",e.POWER_ON="POWER_ON",e.SHUTTER_CLOSED="SHUTTER_CLOSED",e.SHUTTER_OPEN="SHUTTER_OPEN",e.EDGE_BLENDING_OFF="EDGE_BLENDING_OFF",e.EDGE_BLENDING_ON="EDGE_BLENDING_ON",e.EDGE_BLENDING_MARKERS_ON="EDGE_BLENDING_MARKERS_ON",e.EDGE_BLENDING_MARKERS_OFF="EDGE_BLENDING_MARKERS_OFF",e.TEST_PATTERN_OFF="TEST_PATTERN_OFF",e.TEST_PATTERN_WHITE="TEST_PATTERN_WHITE",e.TEST_PATTERN_BLACK="TEST_PATTERN_BLACK",e.TEST_PATTERN_FOCUS_RED="TEST_PATTERN_FOCUS_RED",e.MENU="MENU",e.MENU_DOWN_KEY="MENU_DOWN_KEY",e.MENU_UP_KEY="MENU_UP_KEY",e.MENU_RIGHT_KEY="MENU_RIGHT_KEY",e.MENU_LEFT_KEY="MENU_LEFT_KEY",e.MENU_DEFAULT_KEY="MENU_DEFAULT_KEY",e.MENU_ENTER_KEY="MENU_ENTER_KEY",e.EDGE_BLENDING_UPPER_ON="EDGE_BLENDING_UPPER_ON",e.EDGE_BLENDING_UPPER_OFF="EDGE_BLENDING_UPPER_OFF",e.EDGE_BLENDING_LOWER_OFF="EDGE_BLENDING_LOWER_OFF",e.EDGE_BLENDING_LOWER_ON="EDGE_BLENDING_LOWER_ON",e.EDGE_BLENDING_RIGHT_OFF="EDGE_BLENDING_RIGHT_OFF",e.EDGE_BLENDING_RIGHT_ON="EDGE_BLENDING_RIGHT_ON",e.EDGE_BLENDING_LEFT_OFF="EDGE_BLENDING_LEFT_OFF",e.EDGE_BLENDING_LEFT_ON="EDGE_BLENDING_LEFT_ON",e.OSD_POSITION_UPPER_LEFT="OSD_POSITION_UPPER_LEFT",e.OSD_POSITION_CENTER_LEFT="OSD_POSITION_CENTER_LEFT",e.OSD_POSITION_LOWER_LEFT="OSD_POSITION_LOWER_LEFT",e.OSD_POSITION_TOP_CENTER="OSD_POSITION_TOP_CENTER",e.OSD_POSITION_CENTER="OSD_POSITION_CENTER",e.OSD_POSITION_LOWER_CENTER="OSD_POSITION_LOWER_CENTER",e.OSD_POSITION_UPPER_RIGHT="OSD_POSITION_UPPER_RIGHT",e.OSD_POSITION_CENTER_RIGHT="OSD_POSITION_CENTER_RIGHT",e.OSD_POSITION_LOWER_RIGHT="OSD_POSITION_LOWER_RIGHT",e.PROJECTOR_NAME="PROJECTOR_NAME"}(N||(N={})),function(e){e.PANASONIC="PANASONIC"}(p||(p={}));var g={IP_Top:"192.168.10.",Projector_Port:1024,TCP_Auth:"admin1:",PJ_World_Start:101,PJ_World_End:198,PJ_World_Omit:[],PJ_World:[],PJ_Type:p.PANASONIC,Polling:!1,Polling_Interval:6e4,Groups:{}};function S(e){return m.apply(this,arguments)}function m(){return(m=Object(j.a)(_.a.mark((function e(n){var t,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h+"api/"+n,e.prev=1,e.next=4,fetch(t,{mode:"no-cors"});case 4:if(!(r=e.sent).ok){e.next=9;break}return e.next=8,r.json();case 8:return e.abrupt("return",e.sent);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function I(e,n){return R.apply(this,arguments)}function R(){return(R=Object(j.a)(_.a.mark((function e(n,t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Setting ",n,t),e.next=3,S("set/?pj="+n+"&command="+t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=t(170),C=t(204),k=t(205),P=(t(130),t(2));function v(e){var n=e.handlePad,t=function(){return x.map((function(e){return Object(P.jsx)(D.a,{variant:"contained",style:{padding:"10px",width:"75px"},size:"large",onClick:function(t){return n(e)},children:e},e)}))};return Object(P.jsxs)(k.a,{elevation:1,className:"pad",children:[function(){for(var e=t(),n=[],r=0;r<=e.length-3;r+=3){var a=e.slice(r,3+r);n.push(Object(P.jsx)(C.a,{children:a},"pad_group"+r))}return n}(),t()[x.length-1]]})}var L=t(208),y=t(232),G=t(229),U=t(234),F=t(207),M=t(230),A=t(206);function w(e){var n=e.open,t=e.handleClose,r=e.handleCommand,a={padding:"20px",width:"140px"},c={justifyContent:"center",textAlign:"center",margin:"auto"};return Object(P.jsxs)(M.a,{onClose:t,"aria-labelledby":"simple-dialog-title",open:n,children:[Object(P.jsx)(A.a,{style:c,id:"simple-dialog-title",children:"Blending"},"menu_dialog_title"),Object(P.jsxs)("div",{style:{width:300,justifyContent:"center",textAlign:"center"},children:[Object(P.jsxs)(C.a,{style:c,variant:"outlined",children:[Object(P.jsx)(D.a,{style:a,onClick:function(e){return r(N.EDGE_BLENDING_ON)},children:"Edge Blend On"},"blend_on"),Object(P.jsx)(D.a,{style:a,onClick:function(e){return r(N.EDGE_BLENDING_OFF)},children:"Edge Blend Off"},"blend_off")]},"blend_main_keys"),Object(P.jsx)("br",{}),Object(P.jsxs)(C.a,{style:c,variant:"outlined",children:[Object(P.jsx)(D.a,{style:a,onClick:function(e){return r(N.EDGE_BLENDING_MARKERS_ON)},children:"Markers On"},"markers_on"),Object(P.jsx)(D.a,{style:a,onClick:function(e){return r(N.EDGE_BLENDING_MARKERS_OFF)},children:"Markers Off"},"markers_off")]},"makers_main_keys"),Object(P.jsx)("br",{}),Object(P.jsxs)(C.a,{style:c,variant:"outlined",children:[Object(P.jsx)(D.a,{style:a,onClick:function(e){return r(N.EDGE_BLENDING_UPPER_ON)},children:"Uppere On"},"upper_on"),Object(P.jsx)(D.a,{style:a,onClick:function(e){return r(N.EDGE_BLENDING_UPPER_OFF)},children:"Uppper Off"},"upper_off")]},"upper_keys"),Object(P.jsxs)(C.a,{style:c,variant:"outlined",children:[Object(P.jsx)(D.a,{style:a,onClick:function(e){return r(N.EDGE_BLENDING_RIGHT_ON)},children:"Right On"},"right_on"),Object(P.jsx)(D.a,{style:a,onClick:function(e){return r(N.EDGE_BLENDING_RIGHT_OFF)},children:"Right Off"},"right_off")]},"right_keys"),Object(P.jsxs)(C.a,{style:c,variant:"outlined",children:[Object(P.jsx)(D.a,{style:a,onClick:function(e){return r(N.EDGE_BLENDING_LOWER_ON)},children:"Lower On"},"lower_on"),Object(P.jsx)(D.a,{style:a,onClick:function(e){return r(N.EDGE_BLENDING_LOWER_OFF)},children:"Lower Off"},"lower_off")]},"lower_keys"),Object(P.jsxs)(C.a,{style:c,variant:"outlined",children:[Object(P.jsx)(D.a,{style:a,onClick:function(e){return r(N.EDGE_BLENDING_LEFT_ON)},children:"Left On"},"left_on"),Object(P.jsx)(D.a,{style:a,onClick:function(e){return r(N.EDGE_BLENDING_LEFT_OFF)},children:"Left Off"},"left_off")]},"left_keys")]},"blend_div")]},"blend_dialog")}var B=Object(F.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function H(e){var n=e.open,t=e.handleClose,r=e.handleCommand,a=B(),c={padding:"20px",width:"100px"},l={justifyContent:"center",textAlign:"center"};return Object(P.jsxs)(M.a,{onClose:t,"aria-labelledby":"simple-dialog-title",open:n,children:[Object(P.jsx)(A.a,{style:l,id:"simple-dialog-title",children:"Menu Commands"},"menu_dialog_title"),Object(P.jsxs)(C.a,{style:l,variant:"outlined",children:[Object(P.jsx)(D.a,{style:c,onClick:function(e){return r(N.MENU)},children:"Menu"},"menu"),Object(P.jsx)(D.a,{style:c,onClick:function(e){return r(N.MENU_DEFAULT_KEY)},children:"Default"},"enter")]},"menu_main_keys"),Object(P.jsx)("br",{}),Object(P.jsx)(C.a,{style:l,variant:"outlined",children:Object(P.jsx)(D.a,{style:c,onClick:function(e){return r(N.MENU_UP_KEY)},children:"Up"},"up")},"menu_row1_keys"),Object(P.jsxs)(C.a,{style:l,variant:"outlined",children:[Object(P.jsx)(D.a,{style:c,onClick:function(e){return r(N.MENU_LEFT_KEY)},children:"Left"},"left"),Object(P.jsx)(D.a,{style:c,onClick:function(e){return r(N.MENU_ENTER_KEY)},children:"Enter"},"enter"),Object(P.jsx)(D.a,{style:c,onClick:function(e){return r(N.MENU_RIGHT_KEY)},children:"Right"},"right")]},"menu_row2_keys"),Object(P.jsx)(C.a,{style:l,variant:"outlined",children:Object(P.jsx)(D.a,{style:c,onClick:function(e){return r(N.MENU_DOWN_KEY)},children:"Down"},"down")},"menu_row3_keys"),Object(P.jsxs)(L.a,{className:a.formControl,children:[Object(P.jsx)(y.a,{id:"osd_position",children:"OSD Position"}),Object(P.jsxs)(G.a,{labelId:"osd_position",id:"osd_postion",value:"",onChange:function(e){return r(e.target.value)},children:[Object(P.jsx)(U.a,{value:N.OSD_POSITION_UPPER_LEFT,children:"Upper Left"}),Object(P.jsx)(U.a,{value:N.OSD_POSITION_CENTER_LEFT,children:"Center Left"}),Object(P.jsx)(U.a,{value:N.OSD_POSITION_LOWER_LEFT,children:"Lower Left"}),Object(P.jsx)(U.a,{value:N.OSD_POSITION_TOP_CENTER,children:"Top Center"}),Object(P.jsx)(U.a,{value:N.OSD_POSITION_CENTER,children:"Center"}),Object(P.jsx)(U.a,{value:N.OSD_POSITION_LOWER_CENTER,children:"Lower Center"}),Object(P.jsx)(U.a,{value:N.OSD_POSITION_UPPER_RIGHT,children:"Upper Right"}),Object(P.jsx)(U.a,{value:N.OSD_POSITION_LOWER_RIGHT,children:"Lower Right"})]})]})]},"menu_dialog")}var W=t(211),K=t(212),Y=t(213);function J(e){var n=e.open,t=e.handleCommand,r=e.command,a=e.handleClose,c=e.header,l=e.message,i=function(e){e&&t(r),a()};return Object(P.jsxs)(M.a,{open:n,onClose:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(P.jsx)(A.a,{id:"alert-dialog-title",children:c}),Object(P.jsx)(W.a,{children:Object(P.jsx)(K.a,{id:"alert-dialog-description",children:l})}),Object(P.jsxs)(Y.a,{children:[Object(P.jsx)(D.a,{onClick:function(e){return i(!1)},color:"primary",children:"Cancle"}),Object(P.jsx)(D.a,{onClick:function(e){return i(!0)},color:"primary",autoFocus:!0,children:"Okay"})]})]})}var Q=Object(F.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function X(e){var n=e.handleCommand,t=Object(r.useState)(!1),a=Object(i.a)(t,2),c=a[0],l=a[1],s=Object(r.useState)(!1),o=Object(i.a)(s,2),O=o[0],d=o[1],E=Object(r.useState)(!1),u=Object(i.a)(E,2),_=u[0],j=u[1],h=Object(r.useState)(!1),b=Object(i.a)(h,2),f=b[0],T=b[1],p=Q(),x={width:"150px",height:"50px"};return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(k.a,{style:{width:"300px"},children:[Object(P.jsxs)(C.a,{color:"primary",variant:"outlined",children:[Object(P.jsx)(D.a,{style:x,onClick:function(e){return n(N.SHUTTER_CLOSED)},children:"Sutter Closed (i)"},"shutter_on"),Object(P.jsx)(D.a,{style:x,onClick:function(e){return n(N.SHUTTER_OPEN)},children:"Shutter Open (o)"},"sutter_off")]},"power"),Object(P.jsx)("br",{}),Object(P.jsxs)(C.a,{color:"primary",variant:"outlined",children:[Object(P.jsx)(D.a,{style:x,onClick:function(e){return T(!0)},children:"Power Off"},"power off"),Object(P.jsx)(D.a,{style:x,onClick:function(e){return j(!0)},children:"Power On"},"power on")]},"shutters"),Object(P.jsxs)(C.a,{color:"primary",variant:"outlined",children:[Object(P.jsx)(D.a,{color:"primary",variant:"contained",style:x,onClick:function(e){return l(!c)},children:"Menu"},"menu"),Object(P.jsx)(D.a,{color:"primary",variant:"contained",style:x,onClick:function(e){return d(!O)},children:"Blend"},"blend")]}),Object(P.jsxs)(L.a,{className:p.formControl,children:[Object(P.jsx)(y.a,{id:"test_pattren",children:"Test Pattren"}),Object(P.jsxs)(G.a,{labelId:"test_pattren",id:"test_pattren_select",value:"",onChange:function(e){return function(e){var t=e.target.value;n(t)}(e)},children:[Object(P.jsx)(U.a,{value:N.TEST_PATTERN_OFF,children:"Off"}),Object(P.jsx)(U.a,{value:N.TEST_PATTERN_WHITE,children:"White"}),Object(P.jsx)(U.a,{value:N.TEST_PATTERN_BLACK,children:"Black"}),Object(P.jsx)(U.a,{value:N.TEST_PATTERN_FOCUS_RED,children:"Focus Red"})]})]}),Object(P.jsx)(H,{open:c,handleClose:function(){return l(!1)},handleCommand:n}),Object(P.jsx)(w,{open:O,handleClose:function(){return d(!1)},handleCommand:n})]},"commandKeys"),Object(P.jsx)(J,{open:f,handleCommand:n,handleClose:function(){return T(!1)},header:"Power Off",message:"Are you sure?",command:N.POWER_OFF}),Object(P.jsx)(J,{open:_,handleCommand:n,handleClose:function(){return j(!1)},header:"Power On",message:"Are you sure?",command:N.POWER_ON})]})}var z=t(231),q=t(214),V=t(81),Z=t(215),$=t(107),ee=t.n($);function ne(e){var n=Object(r.useState)(!1),t=Object(i.a)(n,2),a=t[0],c=t[1],l=e.setWorld,s=e.name,o=e.groups;return Object(P.jsxs)(z.a,{expanded:a,onChange:function(){return c(!a)},children:[Object(P.jsx)(q.a,{expandIcon:Object(P.jsx)(ee.a,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:Object(P.jsx)(V.a,{children:s})}),Object(P.jsx)(Z.a,{children:Object.entries(o).map((function(e){return Object(P.jsx)(D.a,{onClick:function(n){return l(e[1].group)},children:e[1].name},e[0])}))})]},"world"+s)}var te=t(222),re=t(223),ae=t(235);function ce(e,n,t){for(var r=e.split(" "),a=[],c=0;c<r.length;c++)r[c]===f.THRU?a.push(f.THRU):ie(r[c]).forEach((function(e){a.push(e)}));return n=(n=function(e,n){for(var t=n,r=function(n){var r=e[n];r<0&&t.includes(-1*r)?t=t.filter((function(e){return e!==-1*r})):!t.includes(r)&&r>0&&t.push(r)},a=0;a<e.length;a++)r(a);return t}(le(a),n)).filter((function(e){return t.includes(e)}))}function le(e){var n=[];if(!(1===e.indexOf(f.THRU)&&e.length>2))return e.map((function(e){return parseInt(e.toString())}));var t=1,r=e[0];r<0&&(r*=-1,t=-1);var a=e[2];if(a<r)for(var c=r;c>=a;c--)console.log(c*t),n.push(c*t);else for(var l=r;l<=a;l++)n.push(l*t);return e.length>2&&(n=n.concat(le(e.slice(3)))),n}function ie(e){if(0===e.length)return console.groupEnd(),[];var n=[];if(e.slice(0,5)===f.THRU);else{var t=function(e){var n=0,t=1;"-"===e[0]&&(t=-1,e=e.slice(1));for(;n<e.length;)parseInt(e[n])>=0?n++:n=e.length;return parseInt(e.slice(0,n))*t}(e);n.push(t);for(var r=ie(e.slice(e.indexOf(t+"")+(t+"").length)),a=0;a<r.length;a++)n.push(r[a])}return n}var se=t(216),oe=t(217),Oe=t(108),de=t.n(Oe);var Ee=function(e){var n=e.pj,t=e.selected,a=e.active,c=e.darkMode,l=e.handleTableSelect,s=Object(r.useState)("0"),o=Object(i.a)(s,2),O=o[0],d=o[1];Object(r.useEffect)((function(){var e=setInterval(u,1e3);return function(){clearInterval(e)}}));var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"On",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"On";return{textAlign:"center",margin:"auto",color:e===n?c?"white":"black":"red"}},u=function(){if(n.lastSeen<0)d("N/A");else{var e=(Date.now()-n.lastSeen)/1e3;e=Math.floor(e),d(e>59?Math.floor(e/60)+"m":e+"s")}};return Object(P.jsxs)(se.a,{children:[Object(P.jsx)(oe.a,{onClick:function(e){return l(n.id)},style:function(){var e={color:"Gainsboro",textAlign:"center"};return a?(e.color="black",e.background="lightgray"):t&&(e.color="black"),e}(),children:Object(P.jsxs)(D.a,{children:[" ","Unknown"===n.name?n.id:n.name]})},n.id+"id"),Object(P.jsx)(oe.a,{style:E(n.shutter,"Open"),children:n.shutter},n.id+"shutter"),Object(P.jsxs)(oe.a,{style:E(n.edgeBlending,"On"),children:[" ",function(){for(var e="",t=[n.edgeBlendingUpper,n.edgeBlendingRight,n.edgeBlendingLower,n.edgeBlendingLeft],r=0;r<t.length;r++)switch(t[r]){case"On":e+=" green";break;case"Off":e+=" black";break;case"Unknown":e+=" yellow";break;default:e+=" red"}return Object(P.jsxs)("p",{style:{padding:10,margin:"auto",textAlign:"center",borderStyle:"solid",borderColor:e},children:[" ",n.edgeBlending,Object(P.jsx)(de.a,{style:{fontSize:"15",marginLeft:"5",marginTop:"auto",color:"On"===n.edgeBlendingMarker?"red":"gray"}})]},n.id+"brbox")}()," "]},n.id+"blend"),Object(P.jsx)(oe.a,{style:E(n.edgeBlendingMarker,"Off"),children:n.edgeBlendingMarker},n.id+"blendmarker"),Object(P.jsx)(oe.a,{style:E(n.testPattren,"Off"),children:n.testPattren},n.id+"test"),Object(P.jsx)(oe.a,{style:E(n.lampStatus,"Lamp On"),children:n.lampStatus},n.id+"lamp"),Object(P.jsxs)(oe.a,{style:E(n.hdmiResolution,"1920x1200p"),children:[n.hdmiResolution,"/",n.hmdiSignalLevel]},n.id+"hdmi"),Object(P.jsx)(oe.a,{style:E(n.inputSignalName_Main,"1920x1200/60RB"),children:n.inputSignalName_Main},n.id+"signal_name_main"),Object(P.jsx)(oe.a,{style:E(),children:O},n.id+"last")]},n.id)},ue=t(218),_e=t(219),je=t(220),he=t(221),be=Object(F.a)({table:{minWidth:300,maxHeight:400}});function fe(e){var n=e.active,t=e.world,r=e.selected,a=e.prefs,c=e.pjs,l=e.status,i=e.handleTableSelect,s=be(),o=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n={width:"50",textAlign:"center"};return e||(n.backgroundColor=(a.darkMode,"red")),n};return Object(P.jsx)(ue.a,{component:k.a,children:Object(P.jsxs)(_e.a,{className:s.table,children:[Object(P.jsx)(je.a,{children:Object(P.jsxs)(se.a,{children:[Object(P.jsx)(oe.a,{style:o(),children:" PJ "},"p_pj"),Object(P.jsx)(oe.a,{style:o(l.shutter),children:" Shutter"},"p_s"),Object(P.jsx)(oe.a,{style:o(l.blend),children:" Blend"},"p_b"),Object(P.jsx)(oe.a,{style:o(l.blendMarker),children:" Blend Marker"},"p_bm"),Object(P.jsx)(oe.a,{style:o(l.testPattren),children:" Test Pattern"},"p_test"),Object(P.jsx)(oe.a,{style:o(l.lampStatus),children:" Lamp Status"},"p_lamp"),Object(P.jsx)(oe.a,{style:o(l.hdmiInput),children:" HDMI Input"},"p_hdmi"),Object(P.jsx)(oe.a,{style:o(l.signalName),children:" Signal Name"},"p_signal name"),Object(P.jsx)(oe.a,{style:o(),children:" Last Seen"},"p_ls")]},"p-r")},"p-th"),Object(P.jsx)(he.a,{children:(t.sort(),t.map((function(e){var t,l=c[t=e]||{id:t,online:"false",shutter:"Unknown",power:"Unknown",lastSeen:-1,error:"NOT SEEN",lampStatus:"Unknown",edgeBlending:"Unknown",edgeBlendingMarker:"Unknown",testPattren:"Unknown",edgeBlendingLeft:"Unknown",edgeBlendingLower:"Unknown",edgeBlendingRight:"Unknown",edgeBlendingUpper:"Unknown",hdmiResolution:"Unknown",hmdiSignalLevel:"Unknown",osdPostion:"Unknown",inputSignalName_Main:"Unknown",name:"Unknown"};return a.showOnlySelected&&r.includes(e)||!a.showOnlySelected?Object(P.jsx)(Ee,{pj:l,handleTableSelect:i,selected:r.includes(e),darkMode:a.darkMode,active:n.includes(e)},"pj id_"+l.id):Object(P.jsx)(P.Fragment,{})})))})]},"p-t")},"p-tc")}var Te=t(109),Ne=t.n(Te);var pe=function(e){var n=e.prefs,t=Object(r.useState)(""),a=Object(i.a)(t,2),c=a[0],l=a[1],s=Object(r.useState)([]),o=Object(i.a)(s,2),O=o[0],d=o[1],u=Object(r.useState)(-1),_=Object(i.a)(u,2),j=_[0],h=_[1],T=Object(r.useState)(0),p=Object(i.a)(T,2),S=p[0],m=p[1],R=Object(r.useState)([]),D=Object(i.a)(R,2),C=D[0],k=D[1],L=Object(r.useState)(g),y=Object(i.a)(L,2),G=y[0],U=y[1],F=Object(r.useState)([]),M=Object(i.a)(F,2),A=M[0],w=M[1],B=Object(r.useState)({}),H=Object(i.a)(B,2),W=H[0],K=H[1],Y=Object(r.useState)(void 0),J=Object(i.a)(Y,2),Q=J[0],z=J[1],q=Object(r.useState)({online:!1,power:!1,shutter:!1,blendMarker:!1,blend:!1,testPattren:!1,lampStatus:!1,hdmiInput:!1,signalName:!1}),V=Object(i.a)(q,2),Z=V[0],$=V[1];Object(r.useEffect)((function(){var e=Ne()();if(function(e,n,t,r,a){e.on("connected",(function(){console.log("Connected!")})),e.on("Hello",(function(){})),e.on(b.EMITTING_PJS,(function(e){t(e)})),e.on(b.EMITTING_STATUS,(function(e){n(e)})),e.on(b.REQUEST_UPDATE,(function(){e.emit(b.REQUESTING_UPDATE)})),e.on(b.EMITTING_CONFIG,(function(e){r(e),e.Groups[0],e.Groups[0].group&&a(e.Groups[0].group)}))}(e,$,K,U,w),Q){for(var t=0;t<O.length;t++)Q&&I(O[t],Q);n.clearProgrammerAfterCMD&&(d([]),k([])),z(void 0)}return function(){e.disconnect()}}),[O,Q,n]),document.onkeyup=function(e){var n=e.key;if(x.includes(n))ee(n);else switch(n){case"t":ee(f.THRU);break;case"c":ee(f.CLEAR);break;case"=":ee("+");break;case"Backspace":ee(f.DEL);break;case"Enter":ee(f.ENTER);break;case"i":se(N.SHUTTER_CLOSED);break;case"o":se(N.SHUTTER_OPEN);break;case"ArrowUp":ee(f.IF_PROG);break;case"ArrowRight":ee(f.NEXT);break;case"ArrowLeft":ee(f.BACK)}};var ee=function(e){if(e!==f.CLEAR)switch(m(0),e){case f.DEL:if(c.length>=6&&c.slice(-6)===" "+f.THRU+" "){var n=c.slice(0,c.length-6);l(n)}else l(c.slice(0,c.length-1));break;case f.THRU:c.length>0&&l(c+" THRU ");break;case f.ENTER:le();break;case"-":" "!==c[c.length-1]&&l(c+e);break;case f.NEXT:!function(){if(!(C.length<1)){var e=j;j+1<C.length&&(e+=1),j+1>=C.length&&(e=0);var n=[];n.push(C[e]),h(e),d(n)}}();break;case f.BACK:!function(){if(!(C.length<1)){var e=j;j-1>=0&&(e-=1),j-1<0&&(e=C.length-1);var n=[];n.push(C[e]),h(e),d(n)}}();break;case f.IF_PROG:d(C),h(-1);break;default:l(c+e)}else switch(m(S+1),S){case 0:l("");break;case 1:d([]),h(-1);break;case 2:k([])}},le=function(){var e=ce(c,O,A);ie(e),l("")},ie=function(e){d(e);var n=[];e.forEach((function(e){C.includes(e)||n.push(e)})),k(n.concat(C))},se=function(e){le(),z(e)};return Object(P.jsxs)("div",{className:"App",children:[Object(P.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),Object(P.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),Object(P.jsx)(te.a,{style:{position:"relative",bottom:"3px",textAlign:"left",float:"left"}}),Object(P.jsxs)(re.a,{container:!0,spacing:6,className:"inputArea",children:[Object(P.jsx)(re.a,{item:!0,children:Object(P.jsx)(v,{handlePad:ee})}),Object(P.jsx)(re.a,{item:!0,children:Object(P.jsx)(X,{handleCommand:se})})]}),Object(P.jsx)(ae.a,{id:"cmd",style:{margin:8,width:"90%"},value:c,helperText:"Command Line",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"}),Object(P.jsxs)(te.a,{style:{width:"80%"},children:[Object(P.jsx)(ne,{setWorld:w,groups:G.Groups,name:"Worlds"}),Object(P.jsx)(ne,{setWorld:ie,groups:G.Groups,name:"Groups"})]},"groups_Worlds"),Object(P.jsx)("br",{},"programmer break"),Object(P.jsxs)(te.a,{children:[Object(P.jsx)(fe,{handleTableSelect:function(e){var n=Object(E.a)(O);n.includes(e)?d(n.filter((function(n){return n!==e}))):(n.push(e),d(n))},prefs:n,world:A,status:Z,selected:C,active:O,pjs:W},"pg"),Object(P.jsx)("br",{},"stats break")]},"programmer")]})},xe=t(79),ge=t.n(xe),Se="prefs",me={darkMode:!0,clearProgrammerAfterCMD:!1,showOnlySelected:!1},Ie=function(e){ge.a.set(Se,e)},Re=function(){return ge.a.get(Se)};function De(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=Re();if(n)return JSON.parse(n);var t=me;return t.darkMode=e,Ie(t),t}var Ce=t(112),ke=t(224),Pe=t(236),ve=t(110),Le=t.n(ve);function ye(e){var n=e.prefs,t=e.handleSettings,a=Object(r.useRef)(null),c=Object(r.useState)(!1),l=Object(i.a)(c,2),s=l[0],o=l[1],O=function(e){var r=Object.assign({},n);switch(e){case T.CLEAR_SELECTED_ON_CMD:r.clearProgrammerAfterCMD=!n.clearProgrammerAfterCMD;break;case T.IF_SELECTED:r.showOnlySelected=!n.showOnlySelected;break;case T.DARK_MODE:r.darkMode=!n.darkMode}t(r)},d=Object(P.jsx)(D.a,{ref:a,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(){o(!0)},children:Object(P.jsx)(Le.a,{})});return Object(P.jsxs)("div",{children:[d,Object(P.jsxs)(Ce.a,{id:"simple-menu",keepMounted:!0,anchorEl:a.current,open:s,onClose:function(){o(!1)},children:[Object(P.jsx)(U.a,{children:Object(P.jsx)(ke.a,{control:Object(P.jsx)(Pe.a,{checked:n.clearProgrammerAfterCMD,onClick:function(e){return O(T.CLEAR_SELECTED_ON_CMD)},name:"clearSelectedOnPress"},T.CLEAR_SELECTED_ON_CMD),label:"Clear Programmer On CMD"})}),Object(P.jsx)(U.a,{children:Object(P.jsx)(ke.a,{control:Object(P.jsx)(Pe.a,{checked:n.showOnlySelected,onChange:function(e){return O(T.IF_SELECTED)},name:"showonlyselected"},T.IF_SELECTED),label:"Show Only Selected"})}),Object(P.jsx)(U.a,{children:Object(P.jsx)(ke.a,{control:Object(P.jsx)(Pe.a,{checked:n.darkMode,onChange:function(e){return O(T.DARK_MODE)},name:"darkMode"},T.DARK_MODE),label:"Dark Mode"})})]}),Object(P.jsxs)("span",{style:{textAlign:"center",fontSize:10},children:[" Projector Controler v","0.1.221",""]})]})}var Ge=a.a.createContext(me);function Ue(){var e=Object(s.a)("(prefers-color-scheme: dark)"),n=Object(r.useState)(me),t=Object(i.a)(n,2),a=t[0],c=t[1];Object(r.useEffect)((function(){c(De(e))}),[e]);var l=Object(o.a)({palette:{type:a.darkMode?"dark":"light"}});return Object(P.jsxs)(O.a,{theme:l,children:[Object(P.jsx)(Ge.Provider,{value:a}),Object(P.jsx)(ye,{handleSettings:function(e){c(e),Ie(e)},prefs:a}),Object(P.jsx)(d.a,{}),Object(P.jsx)(pe,{prefs:a})]})}var Fe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,238)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,l=n.getTTFB;t(e),r(e),a(e),c(e),l(e)}))};l.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(Ue,{})}),document.getElementById("root")),Fe()}},[[169,1,2]]]);
//# sourceMappingURL=main.52b50559.chunk.js.map