(this.webpackJsonpimagerecog=this.webpackJsonpimagerecog||[]).push([[0],{316:function(e,t,n){},318:function(e,t,n){},319:function(e,t,n){},320:function(e,t,n){},322:function(e,t,n){"use strict";n.r(t);var a=n(9),s=n.n(a),i=n(43),r=n.n(i),c=(n(83),n(20)),o=n(21),l=n(23),m=n(22),d=n(77),h=n.n(d),b=(n(316),n(2)),u=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(b.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(b.jsx)("p",{onClick:function(){return t("signout")},className:"f3 link din black underline ma0 pa3 pointer",children:"Sign Out"})}):Object(b.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(b.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link din black underline ma0 pa3 pointer",children:"Sign In"}),Object(b.jsx)("p",{onClick:function(){return t("register")},className:"f3 link din black underline ma0 pa3 pointer",children:"Register"})]})},p=n(78),j=n.n(p),g=(n(318),n.p+"static/media/smart.1ee700fa.png"),f=function(){return Object(b.jsx)("div",{className:"ma4 nt0",children:Object(b.jsx)(j.a,{className:"Tilt br2 shadow-2",options:{max:70,perspective:800,scale:1.1},style:{height:150,width:150},children:Object(b.jsxs)("div",{className:"Tilt-inner",children:[Object(b.jsx)("img",{style:{paddingTop:"5px"},alt:"Smart Recognition",src:g}),Object(b.jsx)("p",{className:"f5 ma0 pa0 center",style:{marginBottom:"10px"},children:"Hello! Click Me."})]})})})},x=(n(319),function(e){var t=e.onInputChange,n=e.onSubmit,a=e.box;return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"f3 ma0 pa3",children:"This Smart Brain will detect faces in your picture. Give it a try!!!"}),Object(b.jsx)("div",{className:"center",children:Object(b.jsxs)("div",{className:"center pa4 br3 shadow-5 form",children:[Object(b.jsx)("input",{className:"f4 pa2 w-70 center ma1",type:"tex",placeholder:"Put the image link here",onChange:t}),Object(b.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-black",onClick:n,children:Object(b.jsx)("strong",{children:"Detect"})})]})}),1===a.length?Object(b.jsx)("div",{className:"f3 ma0 mt1 pa1 grow",children:"There is only "+a.length+" face in the picture"}):a.length>1?Object(b.jsx)("div",{className:"f3 ma0 mt1 pa1 grow",children:"There are "+a.length+" faces in the picture"}):!1===a?Object(b.jsx)("div",{className:"f3 ma0 mt1 pa1 grow",children:"Error Detecting. Image link is not attached. Find one"}):Object(b.jsx)("div",{})]})}),O=function(e){var t=e.name,n=e.entries;return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"white f3 mt5",children:t+", your current entry count is..."}),Object(b.jsx)("div",{className:"white f1",children:"#"+n})]})},v=(n(320),function(e){var t=e.imageURL,n=e.box;return Object(b.jsx)("div",{className:"center ma2 br0 pb7",children:Object(b.jsxs)("div",{className:"absolute mt2",children:[Object(b.jsx)("img",{className:"br2 shadow-1 mb3",id:"Inputimage",alt:"",src:t,width:"600px",height:"auto"}),n.length>0?Object(b.jsx)("div",{children:n.map((function(e,t){return Object(b.jsx)("div",{className:"boundingbox",style:{top:n[t].top,right:n[t].right,bottom:n[t].bottom,left:n[t].left}},t)}))}):void 0===n.length?Object(b.jsx)("div",{className:"br2 f4",children:"Image will display here!"}):Object(b.jsx)("div",{className:"ma0 br0 f3 mb4 mt3",children:"Oooopps! Try a different picture with face(s) (preferably in jpeg/jpg)..."})]})})}),w=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).onEmailChange=function(t){e.setState({signinEmail:t.target.value})},e.onPasswordChange=function(t){e.setState({signinPassword:t.target.value})},e.onSubmission=function(){fetch("https://imagedetectmodel.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.signinEmail,password:e.state.signinPassword})}).then((function(e){return e.json()})).then((function(t){t.id?(e.props.loadUser(t),e.props.onRouteChange("home")):e.setState({geterror:t})})).catch((function(e){return console.log(e)}))},e.state={signinEmail:"",signinPassword:"",geterror:""},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange,t=this.state.geterror;return Object(b.jsxs)("div",{children:[Object(b.jsx)("article",{className:"br3 ba dark-gray shadow-4 b--black-10 mt6 mb3 w-100 w-50-m w-25-l mw6 center",children:Object(b.jsx)("main",{className:"pa4 black-80",children:Object(b.jsxs)("div",{className:"measure",children:[Object(b.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(b.jsx)("legend",{className:"f4 fw6 ph0 mh0",children:"Sign In"}),Object(b.jsxs)("div",{className:"mt3",children:[Object(b.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(b.jsx)("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(b.jsxs)("div",{className:"mv3",children:[Object(b.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(b.jsx)("div",{className:"",children:Object(b.jsx)("input",{onClick:this.onSubmission,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign In"})}),Object(b.jsx)("div",{className:"lh-copy mt3",children:Object(b.jsx)("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer",children:"Register"})})]})})}),"wrong credentials"===t?Object(b.jsx)("div",{className:"f3 fw6 mt1 pt1 mb2 pb1",children:"The email and password are wrong. Try again."}):"incorrect form submission"===t?Object(b.jsx)("div",{className:"f3 fw6 mt1 pt1 mb2 pb1",children:"Complete the Sign In Form."}):Object(b.jsx)("div",{})]})}}]),n}(s.a.Component),N=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).onNameChange=function(t){e.setState({registername:t.target.value})},e.onEmailChange=function(t){e.setState({registeremail:t.target.value})},e.onPassChange=function(t){e.setState({registerpass:t.target.value})},e.onSubmitRegister=function(){fetch("https://imagedetectmodel.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.registeremail,password:e.state.registerpass,name:e.state.registername})}).then((function(e){return e.json()})).then((function(t){t.id?(e.props.loadUser(t),e.props.onRouteChange("home")):e.setState({geterror:t})})).catch((function(e){return console.log(e)}))},e.state={registeremail:"",registerpass:"",registername:"",geterror:""},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.geterror;return Object(b.jsxs)("div",{children:[Object(b.jsx)("article",{className:"br3 ba dark-gray shadow-4 b--black-10 mt6 mb3 w-100 w-50-m w-25-l mw6 center",children:Object(b.jsx)("main",{className:"pa4 black-80",children:Object(b.jsxs)("div",{className:"measure",children:[Object(b.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(b.jsx)("legend",{className:"f4 fw6 ph0 mh0",children:"Register"}),Object(b.jsxs)("div",{className:"mt3",children:[Object(b.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(b.jsx)("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})]}),Object(b.jsxs)("div",{className:"mt3",children:[Object(b.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(b.jsx)("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(b.jsxs)("div",{className:"mv3",children:[Object(b.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{onChange:this.onPassChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(b.jsx)("div",{className:"",children:Object(b.jsx)("input",{onClick:this.onSubmitRegister,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})}),Object(b.jsx)("div",{className:"lh-copy mt3"})]})})}),"unable to register"===e?Object(b.jsx)("div",{className:"f3 fw6 mt1 pt1 mb2 pb1",children:"The email has already been registered. Try another one."}):"incorrect form submission"===e?Object(b.jsx)("div",{className:"f3 fw6 mt1 pt1 mb2 pb1",children:"Complete the Registration Form."}):Object(b.jsx)("div",{})]})}}]),n}(s.a.Component),y={particles:{number:{value:50,density:{enable:!0,value_area:600}}}},C={input:"",imageURL:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},k=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=document.getElementById("Inputimage"),n=Number(t.width),a=Number(t.height),s=e.outputs[0].data.regions,i=[];if(e.outputs[0].data.regions)for(var r=0;r<s.length;r++){var c=s[r].region_info.bounding_box;i.push({left:c.left_col*n,top:c.top_row*a,right:n-c.right_col*n,bottom:a-c.bottom_row*a})}else console.log("There are no faces or invalid link",i);return i},e.facerecogBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onSubmit=function(){e.setState({imageURL:e.state.input}),fetch("https://imagedetectmodel.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t?fetch("https://imagedetectmodel.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log):e.setState({box:!1}),e.facerecogBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(C):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={input:"",imageURL:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.imageURL,a=e.route,s=e.box,i=this.state.user,r=i.name,c=i.entries;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h.a,{className:"particles",params:y}),Object(b.jsx)(u,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===a?Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{}),Object(b.jsx)(O,{name:r,entries:c}),Object(b.jsx)(x,{onInputChange:this.onInputChange,onSubmit:this.onSubmit,box:s}),Object(b.jsx)(v,{box:s,imageURL:n})]}):"signin"===a||"signout"===a?Object(b.jsx)(w,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(b.jsx)(N,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})]})}}]),n}(a.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,323)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};n(321);r.a.render(Object(b.jsx)(k,{}),document.getElementById("root")),S()},83:function(e,t,n){}},[[322,1,2]]]);
//# sourceMappingURL=main.9c812d88.chunk.js.map