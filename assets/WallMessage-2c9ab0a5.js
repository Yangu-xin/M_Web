import{_ as P,k as q,m as z,o as l,c as v,a as e,t as b,u as t,n as B,q as H,p as O,g as G,s as W,w as R,v as ke,l as A,T as ie,r as u,x as M,y as N,F as U,z as F,A as K,b as j,d as X,h as we,B as de,i as ue,C as re,D as $e,E as ye,e as Ce}from"./index-d228b13b.js";import{d as ve,l as ee,c as Y,a as Ie,g as xe,p as De,b as Me,e as Se,w as oe,n as ne}from"./loading-ba35dbae.js";import{i as _e,b as ce,p as Ne,f as Ve,c as Te,d as me,e as ze}from"./index-e0cda566.js";import{I as Z}from"./Ibutton-55fc22d0.js";const Be=a=>(O("data-v-c2ea18d9"),a=a(),G(),a),Ee={class:"top"},Pe={class:"time"},Le={class:"label"},We={class:"foot"},Ae={class:"foot-left"},Ue={class:"value"},Fe={class:"icon"},He=Be(()=>e("span",{class:"iconfont icon-liuyan"},null,-1)),Re={class:"value"},je={class:"name"},qe={__name:"NodeCard",props:{width:{default:"100%"},note:{default:{}}},emits:["toDetail"],setup(a,{emit:k}){const _=a,S=q();var s=z(()=>_.note);const c=()=>{k("toDetail")},o=()=>{if(s.value.islike[0].count==0){let i={wallId:s.value.id,userId:S.state.user.id,type:0,moment:new Date};_e(i).then(d=>{s.value.like[0].count++,s.value.islike[0].count++})}};return(i,d)=>(l(),v("div",{class:"i-node-card",style:H({width:a.width,background:t(Y)[t(s).color]})},[e("div",Ee,[e("p",Pe,b(t(ve)(t(s).moment)),1),e("p",Le,b(t(ee)[t(s).type][t(s).label]),1)]),e("p",{class:"message",onClick:c},b(t(s).message),1),e("div",We,[e("div",Ae,[e("div",{class:"icon",onClick:o},[e("span",{class:B(["iconfont icon-aixin1",{islike:t(s).islike[0].count>=1}])},null,2),e("span",Ue,b(t(s).like[0].count),1)]),e("div",Fe,[He,e("span",Re,b(t(s).comcount[0].count),1)])]),e("div",je,b(t(s).name),1)])],4))}},pe=P(qe,[["__scopeId","data-v-c2ea18d9"]]);const Oe={key:0,class:"i-modal"},Ge={class:"i-modal-head"},Je={class:"modal-name"},Ke={class:"i-modal-main"},Qe={__name:"IModal",props:{title:{default:"留言墙"},isModal:{default:!1}},emits:["close"],setup(a,{emit:k}){const _=()=>{k("close")};return(S,s)=>(l(),W(ie,{name:"modal"},{default:R(()=>[a.isModal?(l(),v("div",Oe,[e("div",Ge,[e("p",Je,b(a.title),1),e("span",{class:"iconfont icon-guanbi",onClick:_})]),e("div",Ke,[ke(S.$slots,"default",{},void 0,!0)])])):A("",!0)]),_:3}))}},Xe=P(Qe,[["__scopeId","data-v-2dbcbf04"]]);const te=a=>(O("data-v-9a541178"),a=a(),G(),a),Ye={class:"new-card"},Ze={class:"colors"},et=["onClick"],tt={key:0,class:"add-photo"},st={key:0,class:"add-bt"},at=te(()=>e("span",{class:"iconfont icon-tianjia"},null,-1)),lt=[at],ot={key:1,class:"change-bt"},nt=te(()=>e("span",{class:"iconfont icon-xiugai"},null,-1)),ct=[nt],it={class:"photo-div"},dt=["src"],ut={class:"labels"},rt=te(()=>e("p",{class:"title"},"选择标签",-1)),vt=["onClick"],_t=we('<div data-v-9a541178><p class="title" data-v-9a541178>免责声明</p><p class="mzsm" data-v-9a541178> 青一录 是LiRayShield、皮皮和MGT等人开发的，为便于与用户交流的留言平台。请不要利用此平台服务制作、上传、下载、复制、发布、传播或者转载如下内容：<br data-v-9a541178> 1、反对宪法所确定的基本原则的；<br data-v-9a541178> 2、危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家 统一的；<br data-v-9a541178> 3、损害国家荣誉和利益的；<br data-v-9a541178> 4、煽动民族仇恨、民族歧视，破坏民族团结的；<br data-v-9a541178> 5、破坏国家宗教政策，宣扬邪教和封建迷信的；<br data-v-9a541178> 6、散布谣言，扰乱社会秩序，破坏社会稳定的；<br data-v-9a541178> 7、散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；<br data-v-9a541178> 8、侮辱或者诽谤他人，侵害他人合法权益的；<br data-v-9a541178> 9、含有法律、行政法规禁止的其他内容的信息等。<br data-v-9a541178> 10.墙主邮箱：LiRayShield@outlook.com </p></div>',1),mt={class:"btn1"},pt={__name:"NewCard",props:{id:{default:0}},emits:["closeModal","clickbt"],setup(a,{emit:k}){const _=a,{appContext:S}=de(),s=S.config.globalProperties,c=q();var o=u("");const i=u(""),d=u(""),m=u(0),$=u(0),h=c.state.user,E=r=>{m.value=r},f=r=>{$.value=r},L=r=>{k("closeModal",r)},V=()=>{let r="匿名";d.value&&(r=d.value);let g={type:_.id,message:i.value,name:r,userId:h.id,moment:new Date,label:$.value,color:5,imgurl:""};i.value&&_.id==0?(g.color=m.value,ce(g).then(x=>{let C={type:_.id,message:i.value,name:r,userId:h.id,moment:new Date,label:$.value,imgurl:"",id:x.message.insertId,islike:[{count:0}],like:[{count:0}],comcount:[{count:0}],report:[{count:0}],revoke:[{count:0}],color:m.value};i.value="",k("clickbt",C),s.Modal({type:"success",message:"感谢您的记录"})})):_.id==1&&o.value&&y(g)},w=()=>{let r=xe(document.getElementById("file").files[0]);o.value=r},y=r=>{let g=document.getElementById("file");if(g.files.length>0){let x=new FormData;x.append("file",g.files[0]),Ne(x).then(C=>{r.imgurl=C,ce(r).then(p=>{let Q={type:_.id,message:i.value,name:r.name,userId:h.id,moment:new Date,label:$.value,color:5,imgurl:C,id:p.message.insertId,islike:[{count:0}],like:[{count:0}],comcount:[{count:0}],report:[{count:0}],revoke:[{count:0}],color:m.value};i.value="",k("clickbt",Q),s.Modal({type:"success",message:"感谢您的记录"})})})}};return(r,g)=>(l(),v("div",Ye,[M(e("div",Ze,[(l(!0),v(U,null,F(t(Ie),(x,C)=>(l(),v("p",{class:B(["color-item",{colorselected:C==m.value}]),key:C,style:H({background:x}),onClick:p=>E(C)},null,14,et))),128))],512),[[N,a.id==0]]),a.id==1?(l(),v("div",tt,[e("input",{type:"file",name:"file",id:"file",multiple:"multiple",onChange:w},null,32),t(o)==""?(l(),v("div",st,lt)):A("",!0),t(o)!=""?(l(),v("div",ot,ct)):A("",!0),M(e("div",it,[e("img",{src:t(o)},null,8,dt)],512),[[N,t(o)!=""]])])):A("",!0),e("div",{class:"card-main",style:H({background:a.id==0?t(Y)[m.value]:t(Y)[5]})},[M(e("textarea",{placeholder:"留言...",class:"message",maxlength:"96","onUpdate:modelValue":g[0]||(g[0]=x=>i.value=x)},null,512),[[K,i.value]]),M(e("input",{type:"text",placeholder:"签名",class:"name","onUpdate:modelValue":g[1]||(g[1]=x=>d.value=x)},null,512),[[K,d.value]])],4),e("div",ut,[rt,e("div",{class:"label",onClick:g[2]||(g[2]=()=>{})},[(l(!0),v(U,null,F(t(ee)[a.id],(x,C)=>(l(),v("p",{key:C,class:B(["label-item",{labelselected:C==$.value}]),onClick:p=>f(C)},b(x),11,vt))),128))])]),_t,e("div",mt,[j(Z,{size:"max",active:"secondary",onClick:L},{default:R(()=>[X("丢弃")]),_:1}),j(Z,{size:"max",class:"sbumit",onClick:V},{default:R(()=>[X("确定")]),_:1})])]))}},ht=P(pt,[["__scopeId","data-v-9a541178"]]);const ft=a=>(O("data-v-bf7b3b26"),a=a(),G(),a),gt={class:"card-detail"},bt=ft(()=>e("p",{class:"report"},null,-1)),kt={class:"form"},wt={class:"bt"},$t={class:"title"},yt={class:"comment"},Ct={class:"comment-content"},It={class:"comment-top"},xt={class:"name"},Dt={class:"time"},Mt={class:"comment-message"},St={__name:"CardDetail",props:{card:{default:{}}},setup(a){const k=a,{appContext:_}=de(),S=_.config.globalProperties,s=q();ue(()=>{f()});const c=u(1),o=u(3);var i=!0;const d=u(""),m=u("");var $=z(()=>k.card);re(()=>k.card,()=>{c.value=1,h.value=[],f()});const h=u([]);i=z(()=>!!(d.value&&m.value));const E=()=>{if(i.value){let V=Math.floor(Math.random()*14),w={wallId:$.value.id,userId:s.state.user.id,imgurl:V,moment:new Date,comment:d.value,name:m.value};Te(w).then(y=>{h.value.unshift(w),$.value.comcount[0].count++,d.value=""})}},f=()=>{if(c.value>0){let V={id:$.value.id,page:c.value,pagesize:o.value};Ve(V).then(w=>{h.value=h.value.concat(w.message),w.message.length==o.value?c.value++:c.value=0})}},L=()=>{console.log(1),S.Modal({type:"success",message:"已成功通知到墙主！"})};return(V,w)=>(l(),v("div",gt,[e("div",{class:"top-bt"},[e("p",{class:"revoke",onClick:L},"撕掉该便签请联系墙主"),bt]),j(pe,{note:t($)},null,8,["note"]),e("div",kt,[M(e("textarea",{class:"message",placeholder:"请输入...","onUpdate:modelValue":w[0]||(w[0]=y=>d.value=y)},null,512),[[K,d.value]]),e("div",wt,[M(e("input",{type:"text",class:"name",placeholder:"签名","onUpdate:modelValue":w[1]||(w[1]=y=>m.value=y)},null,512),[[K,m.value]]),j(Z,{class:B({notallowed:!t(i)}),onClick:E},{default:R(()=>[X("确定")]),_:1},8,["class"])])]),e("p",$t,"评论"+b(t($).comcount[0].count),1),e("div",yt,[(l(!0),v(U,null,F(h.value,(y,r)=>(l(),v("div",{class:"comment-item",key:r},[e("div",{class:"user-head",style:H({backgroundImage:t(De)[y.imgurl]})},null,4),e("div",Ct,[e("div",It,[e("p",xt,b(y.name),1),e("p",Dt,b(t(ve)(y.moment)),1)]),e("div",Mt,b(y.comment),1)])]))),128)),M(e("p",{class:"more",onClick:f},"加载更多",512),[[N,c.value>0]])])]))}},Nt=P(St,[["__scopeId","data-v-bf7b3b26"]]);const Vt={class:"photo-card"},Tt=["src"],zt={class:"photo-like"},Bt={class:"like-data"},Et={__name:"PhotoCard",props:{photoItem:{default:{}}},emits:["toDetail"],setup(a,{emit:k}){const _=a,S=q(),s=z(()=>_.photoItem),c=()=>{k("toDetail")},o=()=>{if(s.value.islike[0].count==0){let i={wallId:s.value.id,userId:S.state.user.id,type:0,moment:new Date};_e(i).then(d=>{s.value.like[0].count++,s.value.islike[0].count++})}};return(i,d)=>(l(),v("div",Vt,[e("img",{src:t(me)+t(s).imgurl,class:"photo-img"},null,8,Tt),e("div",{class:"photo-bg",onClick:c}),e("div",zt,[e("span",{class:B(["iconfont icon-aixin1",{islike:t(s).islike[0].count>=1}]),onClick:o},null,2),e("span",Bt,b(t(s).like[0].count),1)])]))}},Pt=P(Et,[["__scopeId","data-v-ac47abd7"]]);const se=a=>(O("data-v-1c4e75a2"),a=a(),G(),a),Lt={key:0,class:"viewer"},Wt=se(()=>e("div",{class:"bg"},null,-1)),At={class:"viewer-photo"},Ut=["src"],Ft=se(()=>e("span",{class:"iconfont icon-xiangzuo"},null,-1)),Ht=[Ft],Rt=se(()=>e("span",{class:"iconfont icon-xiangyou"},null,-1)),jt=[Rt],qt={__name:"Viewer",props:{photos:{default:[]},nowNumber:{type:Number,default:0},isView:{default:!1}},emits:["viewSwitch"],setup(a,{emit:k}){const _=a,S=z(()=>_.isView),s=z(()=>_.nowNumber),c=z(()=>_.photos),o=i=>{k("viewSwitch",i)};return(i,d)=>(l(),W(ie,{name:"views",key:"box1"},{default:R(()=>[t(S)?(l(),v("div",Lt,[Wt,e("div",At,[e("img",{src:t(me)+t(c)[t(s)],alt:""},null,8,Ut)]),M(e("div",{class:"switch sw-left",onClick:d[0]||(d[0]=m=>o(0))},Ht,512),[[N,t(s)>0]]),M(e("div",{class:"switch sw-right",onClick:d[1]||(d[1]=m=>o(1))},jt,512),[[N,t(s)<t(c).length-1]])])):A("",!0)]),_:1}))}},Ot=P(qt,[["__scopeId","data-v-1c4e75a2"]]);const ae=a=>(O("data-v-a5c44cc5"),a=a(),G(),a),Gt={class:"wall-message"},Jt={class:"title"},Kt={class:"slogan"},Qt={class:"label"},Xt=["onClick"],Yt=ae(()=>e("span",{class:"iconfont icon-tianjia"},null,-1)),Zt=[Yt],es={class:"photo"},ts={key:0,class:"none-msg"},ss=["src"],as={class:"loading"},ls=ae(()=>e("div",{id:"lottile"},null,-1)),os=ae(()=>e("p",null,"加载中....",-1)),ns=[ls,os],cs={class:"bottom-tip"},is={__name:"WallMessage",setup(a){const k=Ce(),_=q();ue(()=>{window.addEventListener("resize",w),window.addEventListener("scroll",r),w(),ge(),be()}),$e(()=>{window.removeEventListener("resize",w),window.removeEventListener("scroll",r)});const S=u(20),s=u(1),c=u(-1),o=u([]),i=u([]),d=u(!1),m=u(-1),$=u("写留言"),h=u(!1),E=u(30),f=u(-1),L=n=>{m.value=n,o.value=[],s.value=1,J(p.value)},V=u(0),w=()=>{let n=document.body.clientWidth;V.value=Math.floor((n-120)/300)*300};let y=!1;const r=async()=>{let n=document.documentElement.scrollTop||document.body.scrollTop,T=document.documentElement.clientHeight,I=document.documentElement.scrollHeight;n+T+220>=I?E.value=n+T+230-I:E.value=30,Math.ceil(n)+T>=I-20&&!y&&J(p.value)},g=()=>{f.value=-1,h.value=!1,p.value==1&&(d.value=!1)},x=()=>{$.value="写留言",h.value=!0},C=n=>{if($.value="",n!=f.value){f.value=n,h.value=!0,p.value==1&&(d.value=!0);return}f.value=-1,h.value=!1,p.value==1&&(d.value=!1)};var p=z(()=>k.query.id);re(p,(n,T)=>{s.value=1,h.value=!1,d.value=!1,m.value=-1,f.value=-1,o.value=[],J(n)});var Q=z(()=>_.state.user);const he=n=>{if(n==0){f.value-=1;return}f.value+=1},fe=n=>{o.value.unshift(n),n.type==1&&i.value.unshift(n.imgurl),c.value=1,g()};var ge=()=>{(c.value=-1)&&ye(async()=>{var n={container:document.getElementById("lottile"),renderer:"svg",loop:!0,autoplay:!0,animationData:Me};Se.loadAnimation(n)})};const J=n=>{if(y=!0,s.value>0){c.value=-1;let T={type:n,page:s.value,pagesize:S.value,userId:Q.value.id,label:m.value};ze(T).then(I=>{if(o.value=o.value.concat(I.message),I.message.length?s.value++:s.value=0,o.value.length>0?(c.value=1,s.value==0&&(c.value=2)):c.value=0,n==1)for(let D=0;D<I.message.length;D++)i.value.push(I.message[D].imgurl);y=!1})}},be=()=>{let n=setInterval(()=>{_.state.user&&(clearInterval(n),J(p.value))},10)};return(n,T)=>(l(),v("div",Gt,[e("p",Jt,b(t(oe)[t(p)].name),1),e("p",Kt,b(t(oe)[t(p)].slogan),1),e("div",Qt,[e("p",{class:B(["label-list",{lbselected:m.value==-1}]),onClick:T[0]||(T[0]=I=>L(-1))},"全部",2),(l(!0),v(U,null,F(t(ee)[t(p)],(I,D)=>(l(),v("p",{class:B(["label-list",{lbselected:m.value==D}]),key:D,onClick:le=>L(D)},b(I),11,Xt))),128))]),M(e("div",{class:"card",style:H({width:V.value+"px"})},[(l(!0),v(U,null,F(o.value,(I,D)=>(l(),W(pe,{width:"288px",class:B(["card-inner",{cardselected:D==f.value}]),onToDetail:le=>C(D),note:I,key:D},null,8,["class","onToDetail","note"]))),128))],4),[[N,t(p)==0]]),M(e("div",{class:"add",style:H({bottom:E.value+"px"}),onClick:x},Zt,4),[[N,!h.value]]),M(e("div",es,[(l(!0),v(U,null,F(o.value,(I,D)=>(l(),W(Pt,{photoItem:I,class:"photo-card",key:D,onToDetail:le=>C(D)},null,8,["photoItem","onToDetail"]))),128))],512),[[N,t(p)==1]]),c.value==0?(l(),v("div",ts,[e("img",{src:t(ne)[t(p)].url},null,8,ss),e("p",null,b(t(ne)[t(p)].msg),1)])):A("",!0),M(e("div",as,ns,512),[[N,c.value==-1]]),M(e("p",cs," -我是有底线的- ",512),[[N,c.value==2]]),j(Xe,{title:$.value,onClose:g,isModal:h.value},{default:R(()=>[f.value==-1?(l(),W(ht,{key:0,onClickbt:fe,id:t(p),onCloseModal:g},null,8,["id"])):(l(),W(Nt,{key:1,card:o.value[f.value]},null,8,["card"]))]),_:1},8,["title","isModal"]),j(Ot,{isView:d.value,photos:i.value,nowNumber:f.value,onViewSwitch:he},null,8,["isView","photos","nowNumber"])]))}},_s=P(is,[["__scopeId","data-v-a5c44cc5"]]);export{_s as default};
