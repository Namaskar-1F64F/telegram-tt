"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[8422],{27225:(t,e,a)=>{a.d(e,{Co:()=>S,bZ:()=>M,ft:()=>R});var i=a(33555),n=a(6137),s=a(91713),o=a(83716),r=a(71226),d=a(5161),c=a(11192),l=a(60782),h=a(69118),u=a(60371),p=a(53551),f=a(78958),C=a(42431),m=a(16974),I=a(50711),g=a(9211);const v={id:o.aw,accessHash:"0",type:"userTypeRegular",isMin:!0,username:"",phoneNumber:""},w=(0,h.P2)((t=>t()),3e3,!0),y=(0,h.Ds)((t=>t()),500,!1,!0);async function b(t,e,a){var s;let h=arguments.length>3&&void 0!==arguments[3]&&arguments[3],u=(0,i.Rd)();const p=null===(s=(0,c.VF)(u))||void 0===s?void 0:s.message,f=await(0,r.t9)("fetchChats",{limit:o.Ov,offsetDate:a,archived:"archived"===t,withPinned:h,serverTimeOffset:u.serverTimeOffset,lastLocalServiceMessage:p});if(!f)return;const{chatIds:C}=f;if(C.length>0&&C[0]===e&&C.shift(),u=(0,i.Rd)(),h&&"active"===t){if(!C.includes(o.aw)){const t=await(0,r.t9)("fetchChat",{type:"user",user:v});u=(0,i.Rd)();const e=t&&(0,c.Z1)(u,t.chatId);e&&(C.unshift(e.id),f.chats.unshift(e),p&&(e.lastMessage=p))}const e=(0,c.jr)(u),a=e?[e]:[],n=(0,c.P2)(u)||[];u.currentUserId&&u.users.byId[u.currentUserId]&&n.push(u.users.byId[u.currentUserId]),u=(0,d.s5)(u,(0,l.ee)(n.concat(f.users),"id")),u=(0,d.ps)(u,f.userStatusesById),u=(0,d.SL)(u,(0,l.ee)(a.concat(f.chats),"id")),u=(0,d.Mg)(u,t,C)}else h&&"archived"===t?(u=(0,d.Sh)(u,(0,l.ee)(f.users,"id")),u=(0,d.zn)(u,f.userStatusesById),u=(0,d.GL)(u,(0,l.ee)(f.chats,"id")),u=(0,d.Mg)(u,t,C)):(u=(0,d.Sh)(u,(0,l.ee)(f.users,"id")),u=(0,d.zn)(u,f.userStatusesById),u=(0,d.GL)(u,(0,l.ee)(f.chats,"id")),u=(0,d.B1)(u,t,C));u=(0,d.vv)(u,t,f),f.chatIds.forEach((t=>{u=(0,d.pf)(u,t,n._f,"draft",f.draftsById[t]),u=(0,d.pf)(u,t,n._f,"replyingToId",f.replyingToById[t])})),0!==C.length||u.chats.isFullyLoaded[t]||(u={...u,chats:{...u.chats,isFullyLoaded:{...u.chats.isFullyLoaded,[t]:!0}}}),(0,i.R3)(u)}async function R(t){const e=await(0,r.t9)("fetchFullChat",t);if(!e)return;const{users:a,userStatusesById:n,fullInfo:s,groupCall:o,membersCount:c}=e;let h=(0,i.Rd)();if(a&&(h=(0,d.Sh)(h,(0,l.ee)(a,"id"))),n&&(h=(0,d.zn)(h,n)),o){const t=(0,C.$5)(h,o.id);h=(0,f.AH)(h,o.id,(0,l.CE)(o,["connectionState"]),void 0,t?void 0:o.participantsCount)}h=(0,d.a4)(h,t.id,{fullInfo:s,...c&&{membersCount:c}}),(0,i.R3)(h);const u=s.stickerSet;return u&&(0,i.Sv)().loadStickers({stickerSetInfo:{id:u.id,accessHash:u.accessHash}}),e}async function M(t){try{return await(0,r.t9)("migrateChat",t)}catch(t){return void("CHANNELS_TOO_MUCH"===t.message?(0,i.Sv)().openLimitReachedModal({limit:"channels"}):(0,i.Sv)().showDialog({data:{...t,hasErrorKey:!0}}))}}async function S(t){const e=(0,i.Rd)(),a=(0,c.DI)(e,t);if(a&&!a.isMin)return a;const{chat:n,user:s}=await(0,r.t9)("getChatByUsername",t)||{};return n?((0,i.R3)((0,d.a4)((0,i.Rd)(),n.id,n)),s&&(0,i.R3)((0,d.Nq)((0,i.Rd)(),s.id,s)),n):void 0}async function P(t,e){const a=await S(e);if(!a)return;t=(0,i.Rd)();const n=(0,c.dy)(t,a.id);return n?(0,u.cS)(n)&&n.isAttachBot?n:void(0,i.Sv)().showNotification({message:I.i0("WebApp.AddToAttachmentUnavailableError")}):void 0}async function B(t,e,a,n){const s=await S(a);if(!s)return;const o=(0,c.dy)((0,i.Rd)(),s.id);o&&o.isAttachBot?t.callAttachBot({botId:o.id,chatId:e,..."string"==typeof n&&{startParam:n}}):t.showNotification({message:I.i0("WebApp.AddToAttachmentUnavailableError")})}(0,i.iw)("preloadTopChatMessages",(async(t,e)=>{const a=new Set;for(let i=0;i<o.Mo;i++){await(0,h.wO)(100);const{chatId:i}=(0,c.Bt)(t)||{},s=(0,m.gO)(o.Nf),r=null==s?void 0:s.find((t=>t!==i&&!a.has(t)));if(!r)return;a.add(r),e.loadViewportMessages({chatId:r,threadId:n._f})}})),(0,i.iw)("openChat",((t,e,a)=>{var i;const{id:s,threadId:o=n._f}=a;if(!s)return;const{currentUserId:d}=t,l=(0,c.Z1)(t,s);if(null!=l&&l.hasUnreadMark&&e.toggleChatUnread({id:s}),null!=l&&null!==(i=l.lastMessage)&&void 0!==i&&i.threadInfo&&e.requestThreadInfoUpdate({chatId:l.lastMessage.threadInfo.chatId,threadId:l.lastMessage.threadInfo.threadId}),l)(0,u.Hp)(l)&&!l.isMin&&e.requestChatUpdate({chatId:s});else if(s===d)(0,r.t9)("fetchChat",{type:"self"});else{const e=(0,c.dy)(t,s);e&&(0,r.t9)("fetchChat",{type:"user",user:e})}o!==n._f&&((0,c.qS)(t,s,o)||e.requestThreadInfoUpdate({chatId:s,threadId:o}))})),(0,i.iw)("openLinkedChat",(async(t,e,a)=>{var i;const{id:n}=a,s=(0,c.Z1)(t,n);if(!s)return;const o=await(0,r.t9)("fetchFullChat",s);null!=o&&null!==(i=o.fullInfo)&&void 0!==i&&i.linkedChatId&&e.openChat({id:o.fullInfo.linkedChatId})})),(0,i.iw)("focusMessageInComments",(async(t,e,a)=>{const{chatId:i,threadId:n,messageId:s}=a,o=(0,c.Z1)(t,i);o&&await(0,r.t9)("requestThreadInfoUpdate",{chat:o,threadId:n})&&e.focusMessage({chatId:i,threadId:n,messageId:s})})),(0,i.iw)("openSupportChat",(async(t,e)=>{const a=(0,c.P_)(t);if(a)return void e.openChat({id:a.id,shouldReplaceHistory:!0});e.openChat({id:o.AJ,shouldReplaceHistory:!0});const i=await(0,r.t9)("fetchChat",{type:"support"});i&&e.openChat({id:i.chatId,shouldReplaceHistory:!0})})),(0,i.iw)("loadAllChats",(async(t,e,a)=>{const n=a.listType,{onReplace:s}=a;let{shouldReplace:r}=a,d=0;const l=t=>{var e;return(null===(e=t.lastMessage)||void 0===e?void 0:e.date)||t.joinDate};for(;r||!(0,i.Rd)().chats.isFullyLoaded[n];){if(d++>=100)return void(o.eM&&console.error("`actions/loadAllChats`: Infinite loop detected"));if("connectionStateReady"!==(t=(0,i.Rd)()).connectionState||"authorizationStateReady"!==t.authState)return;const e=!r&&t.chats.listIds[n],a=e?e.map((e=>t.chats.byId[e])).filter((e=>Boolean(e&&l(e))&&e.id!==o.aw&&!(0,c.ep)(t,e.id))).sort(((t,e)=>l(t)-l(e)))[0]:void 0;await b(n,null==a?void 0:a.id,a?l(a):void 0,r),r&&(null==s||s(),r=!1)}})),(0,i.iw)("loadFullChat",((t,e,a)=>{const{chatId:i,force:n}=a,s=(0,c.Z1)(t,i);s&&(n?R(s):y((()=>R(s))))})),(0,i.iw)("loadTopChats",(()=>{w((()=>b("active")))})),(0,i.iw)("requestChatUpdate",((t,e,a)=>{var i;const{serverTimeOffset:n}=t,{chatId:s}=a,d=(0,c.Z1)(t,s);d&&(0,r.t9)("requestChatUpdate",{chat:d,serverTimeOffset:n,...s===o.aw&&{lastLocalMessage:null===(i=(0,c.VF)(t))||void 0===i?void 0:i.message}})})),(0,i.iw)("updateChatMutedState",((t,e,a)=>{const{serverTimeOffset:n}=t,{chatId:s,isMuted:o}=a,l=(0,c.Z1)(t,s);l&&((0,i.R3)((0,d.a4)(t,s,{isMuted:o})),(0,r.t9)("updateChatMutedState",{chat:l,isMuted:o,serverTimeOffset:n}))})),(0,i.iw)("createChannel",((t,e,a)=>{const{title:n,about:o,photo:l,memberIds:h}=a;!async function(t,e,a,n){let o;(0,i.R3)({...(0,i.Rd)(),chatCreation:{progress:s.Nh.InProgress}});try{o=await(0,r.t9)("createChannel",{title:t,about:a,users:e})}catch(t){const e=(0,i.Rd)();(0,i.R3)({...e,chatCreation:{progress:s.Nh.Error}}),"CHANNELS_TOO_MUCH"===t.message?(0,i.Sv)().openLimitReachedModal({limit:"channels"}):(0,i.Sv)().showDialog({data:{...t,hasErrorKey:!0}})}if(!o)return;const{id:c,accessHash:l}=o;let h=(0,i.Rd)();h=(0,d.a4)(h,c,o),h={...h,chatCreation:{...h.chatCreation,progress:o?s.Nh.Complete:s.Nh.Error}},(0,i.R3)(h),(0,i.Sv)().openChat({id:c,shouldReplaceHistory:!0}),c&&l&&n&&await(0,r.t9)("editChatPhoto",{chatId:c,accessHash:l,photo:n})}(n,h.map((e=>(0,c.dy)(t,e))).filter(Boolean),o,l)})),(0,i.iw)("joinChannel",((t,e,a)=>{const{chatId:n}=a,s=(0,c.Z1)(t,n);if(!s)return;const{id:o,accessHash:d}=s;o&&d&&async function(t,e){try{await(0,r.t9)("joinChannel",{channelId:t,accessHash:e})}catch(t){"CHANNELS_TOO_MUCH"===t.message?(0,i.Sv)().openLimitReachedModal({limit:"channels"}):(0,i.Sv)().showDialog({data:{...t,hasErrorKey:!0}})}}(o,d)})),(0,i.iw)("deleteChatUser",((t,e,a)=>{var n;const{chatId:s,userId:o}=a,l=(0,c.Z1)(t,s),h=(0,c.dy)(t,o);l&&h&&(t=(0,d.Dd)(t,s),(0,i.R3)(t),(null===(n=(0,c.Bt)(t))||void 0===n?void 0:n.chatId)===s&&e.openChat({id:void 0}),(0,r.t9)("deleteChatUser",{chat:l,user:h}))})),(0,i.iw)("deleteChat",((t,e,a)=>{var n;const{chatId:s}=a,o=(0,c.Z1)(t,s);o&&(t=(0,d.Dd)(t,s),(0,i.R3)(t),(null===(n=(0,c.Bt)(t))||void 0===n?void 0:n.chatId)===s&&e.openChat({id:void 0}),(0,r.t9)("deleteChat",{chatId:o.id}))})),(0,i.iw)("leaveChannel",((t,e,a)=>{var n;const{chatId:s}=a,o=(0,c.Z1)(t,s);if(!o)return;t=(0,d.Dd)(t,s),(0,i.R3)(t),(null===(n=(0,c.Bt)(t))||void 0===n?void 0:n.chatId)===s&&e.openChat({id:void 0});const{id:l,accessHash:h}=o;l&&h&&(0,r.t9)("leaveChannel",{channelId:l,accessHash:h})})),(0,i.iw)("deleteChannel",((t,e,a)=>{var n;const{chatId:s}=a,o=(0,c.Z1)(t,s);if(!o)return;t=(0,d.Dd)(t,s),(0,i.R3)(t),(null===(n=(0,c.Bt)(t))||void 0===n?void 0:n.chatId)===s&&e.openChat({id:void 0});const{id:l,accessHash:h}=o;l&&h&&(0,r.t9)("deleteChannel",{channelId:l,accessHash:h})})),(0,i.iw)("createGroupChat",((t,e,a)=>{const{title:n,memberIds:o,photo:l}=a;!async function(t,e,a){(0,i.R3)({...(0,i.Rd)(),chatCreation:{progress:s.Nh.InProgress}});try{const n=await(0,r.t9)("createGroupChat",{title:t,users:e});if(!n)return;const{id:o}=n;let c=(0,i.Rd)();c=(0,d.a4)(c,o,n),c={...c,chatCreation:{...c.chatCreation,progress:n?s.Nh.Complete:s.Nh.Error}},(0,i.R3)(c),(0,i.Sv)().openChat({id:o,shouldReplaceHistory:!0}),o&&a&&await(0,r.t9)("editChatPhoto",{chatId:o,photo:a})}catch(t){if("USERS_TOO_FEW"===t.message){const t=(0,i.Rd)();(0,i.R3)({...t,chatCreation:{...t.chatCreation,progress:s.Nh.Error,error:"CreateGroupError"}})}}}(n,o.map((e=>(0,c.dy)(t,e))).filter(Boolean),l)})),(0,i.iw)("toggleChatPinned",((t,e,a)=>{const{id:i,folderId:n}=a,s=(0,c.Z1)(t,i);if(!s)return;const d=(0,g.M)(t,"dialogFolderPinned");if(n){const e=(0,c.Mw)(t,n);if(e){const a=!(0,c.ep)(t,i,n),{pinnedChatIds:s,includedChatIds:o}=e,d=a?[i,...s||[]]:(s||[]).filter((t=>t!==i)),l=[i,...o];(0,r.t9)("editChatFolder",{id:n,folderUpdate:{...e,pinnedChatIds:d,includedChatIds:l}})}}else{const a=(0,c.Ek)(t,i),n=(0,c.ep)(t,i,"archived"===a?o.WS:void 0),l=t.chats.orderedPinnedIds["archived"===a?"archived":"active"];if(((null==l?void 0:l.length)||0)>=d&&!n)return void e.openLimitReachedModal({limit:"dialogFolderPinned"});(0,r.t9)("toggleChatPinned",{chat:s,shouldBePinned:!n})}})),(0,i.iw)("toggleChatArchived",((t,e,a)=>{const{id:i}=a,n=(0,c.Z1)(t,i);n&&(0,r.t9)("toggleChatArchived",{chat:n,folderId:(0,u.pE)(n)?0:o.WS})})),(0,i.iw)("loadChatFolders",(()=>{!async function(){const t=await(0,r.t9)("fetchChatFolders");if(t){const e=(0,i.Rd)();(0,i.R3)({...e,chatFolders:{...e.chatFolders,...t}})}}()})),(0,i.iw)("loadRecommendedChatFolders",(()=>{!async function(){const t=await(0,r.t9)("fetchRecommendedChatFolders");if(t){const e=(0,i.Rd)();(0,i.R3)({...e,chatFolders:{...e.chatFolders,recommended:t}})}}()})),(0,i.iw)("editChatFolders",((t,e,a)=>{const{chatId:i,idsToRemove:n,idsToAdd:s}=a,o=(0,g.M)(t,"dialogFiltersChats");s.some((e=>(0,c.Mw)(t,e).includedChatIds.length>=o))?e.openLimitReachedModal({limit:"dialogFiltersChats"}):(n.forEach((async e=>{const a=(0,c.Mw)(t,e);var n;a&&await(0,r.t9)("editChatFolder",{id:e,folderUpdate:{...a,pinnedChatIds:null===(n=a.pinnedChatIds)||void 0===n?void 0:n.filter((t=>t!==i)),includedChatIds:a.includedChatIds.filter((t=>t!==i))}})})),s.forEach((async e=>{const a=(0,c.Mw)(t,e);a&&await(0,r.t9)("editChatFolder",{id:e,folderUpdate:{...a,includedChatIds:a.includedChatIds.concat(i)}})})))})),(0,i.iw)("editChatFolder",((t,e,a)=>{const{id:i,folderUpdate:n}=a,s=(0,c.Mw)(t,i);s&&(0,r.t9)("editChatFolder",{id:i,folderUpdate:{id:i,emoticon:s.emoticon,pinnedChatIds:s.pinnedChatIds,...n}})})),(0,i.iw)("addChatFolder",((t,e,a)=>{const{folder:n}=a,{orderedIds:s,byId:d}=t.chatFolders,c=(0,g.M)(t,"dialogFilters");Object.keys(d).length>=c?e.openLimitReachedModal({limit:"dialogFilters"}):async function(t,e){const{id:a,description:n,...s}=t;if(await(0,r.t9)("editChatFolder",{id:e+1,folderUpdate:{id:e+1,...s}}),!n)return;const o=(0,i.Rd)(),{recommended:d}=o.chatFolders;d&&(0,i.R3)({...o,chatFolders:{...o.chatFolders,recommended:d.filter((t=>{let{id:e}=t;return e!==a}))}})}(n,Math.max(...s||[],o.WS))})),(0,i.iw)("sortChatFolders",(async(t,e,a)=>{const{folderIds:n}=a;await(0,r.t9)("sortChatFolders",n)&&(t=(0,i.Rd)(),(0,i.R3)({...t,chatFolders:{...t.chatFolders,orderedIds:n}}))})),(0,i.iw)("deleteChatFolder",((t,e,a)=>{const{id:i}=a;(0,c.Mw)(t,i)&&async function(t){await(0,r.t9)("deleteChatFolder",t)}(i)})),(0,i.iw)("toggleChatUnread",((t,e,a)=>{const{id:i}=a,{serverTimeOffset:s}=t,o=(0,c.Z1)(t,i);o&&(o.unreadCount?(0,r.t9)("markMessageListRead",{serverTimeOffset:s,chat:o,threadId:n._f}):(0,r.t9)("toggleDialogUnread",{chat:o,hasUnreadMark:!o.hasUnreadMark}))})),(0,i.iw)("openChatByInvite",(async(t,e,a)=>{const{hash:i}=a,n=await(0,r.t9)("openChatByInvite",i);n&&e.openChat({id:n.chatId})})),(0,i.iw)("openChatByPhoneNumber",(async(t,e,a)=>{const{phoneNumber:n,startAttach:s,attach:l}=a;e.openChat({id:o.AJ});const h=await async function(t){const e=(0,i.Rd)(),a=(0,c.Bk)(e,t);if(a&&!a.isMin)return(0,c.Z1)(e,a.id);const{chat:n,user:s}=await(0,r.t9)("getChatByPhoneNumber",t)||{};return n?((0,i.R3)((0,d.a4)((0,i.Rd)(),n.id,n)),s&&(0,i.R3)((0,d.Nq)((0,i.Rd)(),s.id,s)),n):void 0}(n);if(!h)return e.openPreviousChat(),void e.showNotification({message:I.i0("lng_username_by_phone_not_found").replace("{phone}",n)});e.openChat({id:h.id}),l&&B(e,h.id,l,s)})),(0,i.iw)("openTelegramLink",((t,e,a)=>{const{url:i}=a,{openChatByPhoneNumber:n,openChatByInvite:s,openStickerSet:r,openChatWithDraft:d,joinVoiceChatByLink:l,showNotification:h,focusMessage:u,openInvoice:f,processAttachBotParameters:C,openChatByUsername:m}=e;if(i.match(o.g$))return void(0,p.ou)(i);const I=new URL(i.startsWith("http")?i:`https://${i}`);if("t.me"===I.hostname&&"/"===I.pathname)return void window.open(I.toString(),"_blank","noopener");const g=I.hostname.split(".");if(g.length>3)return;const v=3===g.length?`${g[0]}/${I.pathname}`:I.pathname,[w,y,b]=v.split("/").filter(Boolean).map((t=>decodeURI(t))),R=Object.fromEntries(I.searchParams);let M;"joinchat"===w&&(M=y);const S=!(!R.hasOwnProperty("startattach")||R.startattach)||R.startattach,P=(0,p.GX)(R.choose);if(w.match(/^\+([0-9]+)(\?|$)/))return void n({phoneNumber:w.substr(1,w.length-1),startAttach:S,attach:R.attach});if((w.startsWith(" ")||w.startsWith("+"))&&(M=w.substr(1,w.length-1)),M)return void s({hash:M});if("addstickers"===w||"addemoji"===w)return void r({stickerSetInfo:{shortName:y}});const B=y||void 0,A=b?Number(b):void 0,H=R.comment?Number(R.comment):void 0;if("share"===w)d({text:(0,p.QH)(R.url,R.text)});else if(R.hasOwnProperty("voicechat")||R.hasOwnProperty("livestream"))l({username:w,inviteHash:R.voicechat||R.livestream});else if("c"===w&&B&&A){const e=`-${B}`;if(!(0,c.Z1)(t,e))return void h({message:"Chat does not exist"});u({chatId:e,messageId:A})}else w.startsWith("$")?f({slug:w.substring(1)}):"invoice"===w?f({slug:y}):S&&P?C({username:w,filter:P,..."string"==typeof S&&{startParam:S}}):m({username:w,messageId:A||Number(B),commentId:H,startParam:R.start,startAttach:S,attach:R.attach})})),(0,i.iw)("acceptInviteConfirmation",(async(t,e,a)=>{const{hash:i}=a,n=await(0,r.t9)("importChatInvite",{hash:i});n&&e.openChat({id:n.id})})),(0,i.iw)("openChatByUsername",(async(t,e,a)=>{const{username:n,messageId:s,commentId:d,startParam:l,startAttach:h,attach:u}=a,p=(0,c.jr)(t);if(!d)return!p||p.username!==n||h||l?void await async function(t,e,a,n,s,r){const d=(0,i.Rd)(),l=(0,c.jr)(d);if(s&&!r){const a=await P(d,e);if(!l||!a)return;return void t.callAttachBot({botId:a.id,chatId:l.id,..."string"==typeof s&&{startParam:s}})}const h=(null==l?void 0:l.username)===e;h||t.openChat({id:o.AJ});const u=await S(e);u?(a?t.focusMessage({chatId:u.id,messageId:a}):h||t.openChat({id:u.id}),n&&t.startBot({botId:u.id,param:n}),r&&B(t,u.id,r,s)):h||(t.openPreviousChat(),t.showNotification({message:"User does not exist"}))}(e,n,s,l,h,u):void e.focusMessage({chatId:p.id,messageId:s});const{chatId:f,type:C}=(0,c.Bt)(t)||{},m=(0,c.DI)(t,n);if(f&&m&&"thread"===C){const a=(0,c.tZ)(t,f,s);if(a&&a.chatId===f)return void e.focusMessage({chatId:a.chatId,threadId:a.threadId,messageId:d})}s&&async function(t,e,a,n){t.openChat({id:o.AJ});const s=await S(e);if(!s)return;const d=(0,i.Rd)(),l=(0,c.tZ)(d,s.id,a);let h;if(l)h=l.chatId;else{const t=await(0,r.t9)("requestThreadInfoUpdate",{chat:s,threadId:a});if(!t)return;h=t.discussionChatId}h&&t.focusMessage({chatId:h,threadId:a,messageId:Number(n)})}(e,n,s,d)})),(0,i.iw)("togglePreHistoryHidden",(async(t,e,a)=>{const{chatId:i,isEnabled:n}=a;let s=(0,c.Z1)(t,i);if(s){if((0,u.G9)(s)){if(s=await M(s),!s)return;e.openChat({id:s.id})}(0,r.t9)("togglePreHistoryHidden",{chat:s,isEnabled:n})}})),(0,i.iw)("updateChatDefaultBannedRights",((t,e,a)=>{const{chatId:i,bannedRights:n}=a,s=(0,c.Z1)(t,i);s&&(0,r.t9)("updateChatDefaultBannedRights",{chat:s,bannedRights:n})})),(0,i.iw)("updateChatMemberBannedRights",(async(t,e,a)=>{const{chatId:n,userId:s,bannedRights:o}=a;let l=(0,c.Z1)(t,n);const h=(0,c.dy)(t,s);if(!l||!h)return;if((0,u.G9)(l)){if(l=await M(l),!l)return;e.openChat({id:l.id})}await(0,r.t9)("updateChatMemberBannedRights",{chat:l,user:h,bannedRights:o}),t=(0,i.Rd)();const p=(0,c.Z1)(t,n);if(!p||!p.fullInfo)return;const{members:f,kickedMembers:C}=p.fullInfo,m=Boolean(o.viewMessages),I=!Object.keys(o).length;(0,i.R3)((0,d.a4)(t,n,{fullInfo:{...p.fullInfo,...f&&m&&{members:f.filter((t=>t.userId!==s))},...f&&!m&&{members:f.map((t=>t.userId===s?{...t,bannedRights:o}:t))},...I&&C&&{kickedMembers:C.filter((t=>t.userId!==s))}}}))})),(0,i.iw)("updateChatAdmin",(async(t,e,a)=>{const{chatId:n,userId:s,adminRights:o,customTitle:l}=a;let h=(0,c.Z1)(t,n);const p=(0,c.dy)(t,s);if(!h||!p)return;if((0,u.G9)(h)){if(h=await M(h),!h)return;e.openChat({id:h.id})}await(0,r.t9)("updateChatAdmin",{chat:h,user:p,adminRights:o,customTitle:l});const f=await(0,r.t9)("fetchFullChat",h);if(null==f||!f.fullInfo)return;const{adminMembers:C}=f.fullInfo,m=!Object.keys(o).length;t=(0,i.Rd)(),(0,i.R3)((0,d.a4)(t,n,{fullInfo:{...f.fullInfo,...C&&m&&{adminMembers:C.filter((t=>t.userId!==s))},...C&&!m&&{adminMembers:C.map((t=>t.userId===s?{...t,adminRights:o,customTitle:l}:t))}}}))})),(0,i.iw)("updateChat",(async(t,e,a)=>{const{chatId:n,title:o,about:l,photo:h}=a,u=(0,c.Z1)(t,n);u&&((0,i.R3)((0,d.H9)((0,i.Rd)(),s.wv.InProgress)),await Promise.all([u.title!==o?(0,r.t9)("updateChatTitle",u,o):void 0,u.fullInfo&&u.fullInfo.about!==l?(0,r.t9)("updateChatAbout",u,l):void 0,h?(0,r.t9)("editChatPhoto",{chatId:n,accessHash:u.accessHash,photo:h}):void 0]),(0,i.R3)((0,d.H9)((0,i.Rd)(),s.wv.Complete)))})),(0,i.iw)("toggleSignatures",((t,e,a)=>{const{chatId:i,isEnabled:n}=a,s=(0,c.Z1)(t,i);s&&(0,r.t9)("toggleSignatures",{chat:s,isEnabled:n})})),(0,i.iw)("loadGroupsForDiscussion",(async t=>{const e=await(0,r.t9)("fetchGroupsForDiscussion");if(!e)return;const a=e.reduce(((t,e)=>(e&&(t[e.id]=e),t)),{});t=(0,i.Rd)(),t=(0,d.fZ)(t,a),(0,i.R3)({...t,chats:{...t.chats,forDiscussionIds:Object.keys(a)}})})),(0,i.iw)("linkDiscussionGroup",(async(t,e,a)=>{const{channelId:i,chatId:n}=a,s=(0,c.Z1)(t,i);let o=(0,c.Z1)(t,n);if(!s||!o)return;if((0,u.G9)(o)){if(o=await M(o),!o)return;e.openChat({id:o.id})}let{fullInfo:d}=o;if(!d){const t=await(0,r.t9)("fetchFullChat",o);if(!t)return;d=t.fullInfo}d.isPreHistoryHidden&&await(0,r.t9)("togglePreHistoryHidden",{chat:o,isEnabled:!1}),(0,r.t9)("setDiscussionGroup",{channel:s,chat:o})})),(0,i.iw)("unlinkDiscussionGroup",(async(t,e,a)=>{var i;const{channelId:n}=a,s=(0,c.Z1)(t,n);if(!s)return;let o;null!==(i=s.fullInfo)&&void 0!==i&&i.linkedChatId&&(o=(0,c.Z1)(t,s.fullInfo.linkedChatId)),await(0,r.t9)("setDiscussionGroup",{channel:s}),o&&R(o)})),(0,i.iw)("setActiveChatFolder",((t,e,a)=>{if(!(a+1>(0,g.M)(t,"dialogFilters")))return{...t,chatFolders:{...t.chatFolders,activeChatFolder:a}};e.openLimitReachedModal({limit:"dialogFilters"})})),(0,i.iw)("resetOpenChatWithDraft",(t=>({...t,requestedDraft:void 0}))),(0,i.iw)("loadMoreMembers",(async t=>{var e,a;const{chatId:n}=(0,c.Bt)(t)||{},s=n?(0,c.Z1)(t,n):void 0;if(!s||(0,u.G9)(s))return;const o=(null===(e=s.fullInfo)||void 0===e||null===(a=e.members)||void 0===a?void 0:a.length)||void 0,h=await(0,r.t9)("fetchMembers",s.id,s.accessHash,"recent",o);if(!h)return;const{members:p,users:f,userStatusesById:C}=h;p&&p.length&&(t=(0,i.Rd)(),t=(0,d.Sh)(t,(0,l.ee)(f,"id")),t=(0,d.zn)(t,C),t=(0,d.iX)(t,s,p),(0,i.R3)(t))})),(0,i.iw)("addChatMembers",(async(t,e,a)=>{const{chatId:i,memberIds:n}=a,o=(0,c.Z1)(t,i),d=n.map((e=>(0,c.dy)(t,e))).filter(Boolean);o&&d.length&&(e.setNewChatMembersDialogState(s.WB.Loading),await(0,r.t9)("addChatMembers",o,d),e.setNewChatMembersDialogState(s.WB.Closed),R(o))})),(0,i.iw)("deleteChatMember",(async(t,e,a)=>{const{chatId:i,userId:n}=a,s=(0,c.Z1)(t,i),o=(0,c.dy)(t,n);s&&o&&(await(0,r.t9)("deleteChatMember",s,o),R(s))})),(0,i.iw)("toggleIsProtected",((t,e,a)=>{const{chatId:i,isProtected:n}=a,s=(0,c.Z1)(t,i);s&&(0,r.t9)("toggleIsProtected",{chat:s,isProtected:n})})),(0,i.iw)("setChatEnabledReactions",(async(t,e,a)=>{const{chatId:i,enabledReactions:n}=a,s=(0,c.Z1)(t,i);s&&(await(0,r.t9)("setChatEnabledReactions",{chat:s,enabledReactions:n}),R(s))})),(0,i.iw)("loadChatSettings",(async(t,e,a)=>{const{chatId:n}=a,s=(0,c.Z1)(t,n);if(!s)return;const o=await(0,r.t9)("fetchChatSettings",s);o&&(0,i.R3)((0,d.a4)((0,i.Rd)(),s.id,{settings:o}))})),(0,i.iw)("toggleJoinToSend",(async(t,e,a)=>{const{chatId:i,isEnabled:n}=a,s=(0,c.Z1)(t,i);s&&((0,u.ZV)(s)||(0,u.eA)(s))&&await(0,r.t9)("toggleJoinToSend",s,n)})),(0,i.iw)("toggleJoinRequest",(async(t,e,a)=>{const{chatId:i,isEnabled:n}=a,s=(0,c.Z1)(t,i);s&&((0,u.ZV)(s)||(0,u.eA)(s))&&await(0,r.t9)("toggleJoinRequest",s,n)})),(0,i.iw)("processAttachBotParameters",(async(t,e,a)=>{const{username:n,filter:s,startParam:o}=a,r=await P(t,n);if(!r)return;t=(0,i.Rd)();const{attachMenu:{bots:d}}=t;d[r.id]?(0,i.Sv)().requestAttachBotInChat({botId:r.id,filter:s,startParam:o}):(0,i.R3)({...t,requestedAttachBotInstall:{botId:r.id,onConfirm:{action:"requestAttachBotInChat",payload:{botId:r.id,filter:s,startParam:o}}}})}))},88422:(t,e,a)=>{a.d(e,{FF:()=>b,Mt:()=>M,NH:()=>R,o5:()=>v});var i=a(33555),n=a(42431),s=a(71226),o=a(11192),r=a(64319),d=a(78958),c=a(60782),l=a(5161),h=a(27225),u=a(74753),p=a(77361),f=a(50711);let C,m,I,g=Promise.resolve();const v=()=>{if(!g)return Promise.resolve();const t=new Audio("./voicechat_join.mp3"),e=new Audio("./voicechat_connecting.mp3");e.loop=!0;const a=new Audio("./voicechat_leave.mp3"),i=new Audio("./voicechat_onallowtalk.mp3"),n=new Audio("./call_busy.mp3"),s=new Audio("./call_connect.mp3"),o=new Audio("./call_end.mp3"),r=new Audio("./call_incoming.mp3");r.loop=!0;const d=new Audio("./call_ringing.mp3");return d.loop=!0,I={join:t,allowTalk:i,leave:a,connecting:e,incoming:r,end:o,connect:s,busy:n,ringing:d},g=Promise.all(Object.values(I).map((t=>(t.muted=!0,t.volume=1e-4,t.play().then((()=>{t.pause(),t.volume=1,t.currentTime=0,t.muted=!1})))))).then((()=>{g=void 0})),g};async function w(t){const e=await(0,s.t9)("getGroupCall",{call:t});if(!e)return;let a=(0,i.Rd)();const o=(0,n.$5)(a,t.id);return a=(0,d.AH)(a,t.id,(0,c.CE)(e.groupCall,["connectionState"]),void 0,null!=o&&o.isLoaded?void 0:e.groupCall.participantsCount),a=(0,l.Sh)(a,(0,c.ee)(e.users,"id")),a=(0,l.fZ)(a,(0,c.ee)(e.chats,"id")),(0,i.R3)(a),e.groupCall}async function y(t,e){const a=await(0,s.t9)("fetchGroupCallParticipants",{call:t,offset:e});if(!a)return;let n=(0,i.Rd)();n=(0,l.Sh)(n,(0,c.ee)(a.users,"id")),n=(0,l.fZ)(n,(0,c.ee)(a.chats,"id")),(0,i.R3)(n)}function b(){return C}function R(){return m}function M(){var t;null===(t=C)||void 0===t||t.pause(),m=void 0,C=void 0}(0,i.iw)("toggleGroupCallPanel",(t=>({...t,isCallPanelVisible:!t.isCallPanelVisible}))),(0,i.iw)("subscribeToGroupCallUpdates",(async(t,e,a)=>{const{subscribed:i,id:o}=a,r=(0,n.$5)(t,o);r&&(i&&(await w(r),await y(r)),await(0,s.t9)("toggleGroupCallStartSubscription",{subscribed:i,call:r}))})),(0,i.iw)("createGroupCall",(async(t,e,a)=>{const{chatId:n}=a,r=(0,o.Z1)(t,n);if(!r)return;const c=await(0,s.t9)("createGroupCall",{peer:r});c&&(t=(0,i.Rd)(),(0,i.R3)((0,d.AH)(t,c.id,{...c,chatId:n})),e.joinGroupCall({id:c.id,accessHash:c.accessHash}))})),(0,i.iw)("createGroupCallInviteLink",(async(t,e)=>{const a=(0,n.mU)(t);if(!a||!a.chatId)return;const i=(0,o.Z1)(t,a.chatId);if(!i)return;const d=Boolean(i.username);let{inviteLink:c}=i.fullInfo;d&&(c=await(0,s.t9)("exportGroupCallInvite",{call:a,canSelfUnmute:!1})),c&&((0,r.TE)(c),e.showNotification({message:"Link copied to clipboard"}))})),(0,i.iw)("joinVoiceChatByLink",(async(t,e,a)=>{const{username:i,inviteHash:n}=a,s=await(0,h.Co)(i);if(!s)return void e.showNotification({message:f.i0("NoUsernameFound")});const o=await(0,h.ft)(s);null!=o&&o.groupCall&&e.joinGroupCall({id:o.groupCall.id,accessHash:o.groupCall.accessHash,inviteHash:n})})),(0,i.iw)("joinGroupCall",(async(t,e,a)=>{var s;if(!p.Bi)return;if(t.phoneCall)return void e.toggleGroupCallPanel();const{chatId:o,id:r,accessHash:c,inviteHash:l}=a;!function(){const t=new(window.AudioContext||window.webkitAudioContext);C=new Audio,m=t,C.srcObject=(t=>{const e=t.createOscillator(),a=e.connect(t.createMediaStreamDestination());return e.start(),new MediaStream([Object.assign(a.stream.getAudioTracks()[0],{enabled:!1})])})(t),(0,u.Z)(C)}(),await v();const{groupCalls:{activeGroupCallId:h}}=t;let f=r?(0,n.$5)(t,r):(0,n.Bj)(t,o);(null===(s=f)||void 0===s?void 0:s.id)!==h?h?e.leaveGroupCall({rejoin:a}):f&&h===f.id?e.toggleGroupCallPanel():(f||r&&c||(f=await w({id:r,accessHash:c})),f&&(t=(0,i.Rd)(),t=(0,d.AH)(t,f.id,{...f,inviteHash:l},void 0,f.participantsCount+1),t={...t,groupCalls:{...t.groupCalls,activeGroupCallId:f.id},isCallPanelVisible:!1},(0,i.R3)(t))):e.toggleGroupCallPanel()})),(0,i.iw)("playGroupCallSound",((t,e,a)=>{const{sound:i}=a;if(!I[i])return;const n=()=>{"connecting"!==i&&I.connecting.pause(),"incoming"!==i&&I.incoming.pause(),"ringing"!==i&&I.ringing.pause(),(0,u.Z)(I[i])};g?g.then(n):n()})),(0,i.iw)("loadMoreGroupCallParticipants",(t=>{const e=(0,n.mU)(t);e&&y(e,e.nextOffset)})),(0,i.iw)("requestCall",(async(t,e,a)=>{const{userId:n,isVideo:s}=a;t.phoneCall?e.toggleGroupCallPanel():(0,o.dy)(t,n)&&(await v(),(0,i.R3)({...(0,i.Rd)(),phoneCall:{id:"",state:"requesting",participantId:n,isVideo:s,adminId:t.currentUserId},isCallPanelVisible:!1}))}))},78958:(t,e,a)=>{a.d(e,{AH:()=>r,B6:()=>l,Ic:()=>c,dc:()=>d});var i=a(42431),n=a(60782),s=a(53475),o=a(11192);function r(t,e,a,i,s){var o;const r=Object.values({...null===(o=t.groupCalls.byId[e])||void 0===o?void 0:o.participants,...a.participants}).filter((t=>!t.isLeft)).reduce(((t,e)=>(t[e.id]=e,t)),{});return{...t,groupCalls:{...t.groupCalls,byId:{...t.groupCalls.byId,[e]:{...t.groupCalls.byId[e],...(0,n.CE)(a,["participantsCount"]),...i&&{participantsCount:t.groupCalls.byId[e].participantsCount+i},...void 0!==s&&{participantsCount:s},participants:r}}}}}function d(t,e){const a=(0,i.$5)(t,e);if(a&&a.chatId){const e=(0,o.Z1)(t,a.chatId);e&&(t=(0,s.a4)(t,a.chatId,{fullInfo:{...e.fullInfo,groupCallId:void 0}}))}return{...t,groupCalls:{...t.groupCalls,byId:{...(0,n.CE)(t.groupCalls.byId,[e.toString()])}}}}function c(t,e,a){return t.groupCalls.activeGroupCallId?r(t,t.groupCalls.activeGroupCallId,e,void 0,a):t}function l(t,e,a,n){let s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];const o=(0,i.$5)(t,e);return o?r(t,e,{participants:{...o.participants,[a]:{...o.participants[a],...n}}},n.isLeft?s?0:-1:o.participants[a]||s?0:1):t}},42431:(t,e,a)=>{a.d(e,{$5:()=>r,Bj:()=>o,GU:()=>d,Ht:()=>c,fu:()=>h,mU:()=>l});var i=a(14342),n=a(60371),s=a(86087);function o(t,e){const a=(0,i.Z1)(t,e);if(a&&a.fullInfo&&a.fullInfo.groupCallId)return r(t,a.fullInfo.groupCallId)}function r(t,e){return t.groupCalls.byId[e]}function d(t,e,a){var i;return null===(i=r(t,e))||void 0===i?void 0:i.participants[a]}function c(t){var e,a;const s=null===(e=l(t))||void 0===e?void 0:e.chatId;if(!s)return!1;const o=(0,i.Z1)(t,s);return!!o&&((0,n.G9)(o)&&o.isCreator||Boolean(null===(a=o.adminRights)||void 0===a?void 0:a.manageCall))}function l(t){const{groupCalls:{activeGroupCallId:e}}=t;if(e)return r(t,e)}function h(t){const{phoneCall:e,currentUserId:a}=t;if(!e||!e.participantId||!e.adminId)return;const i=e.adminId===a?e.participantId:e.adminId;return(0,s.dy)(t,i)}},53551:(t,e,a)=>{a.d(e,{GX:()=>r,QH:()=>d,ou:()=>o});var i=a(33555),n=a(83716),s=a(77361);const o=t=>{const{protocol:e,searchParams:a,pathname:n,hostname:o}=new URL(t);if("tg:"!==e)return;const{openChatByInvite:c,openChatByUsername:l,openChatByPhoneNumber:h,openStickerSet:u,focusMessage:p,joinVoiceChatByLink:f,openInvoice:C,processAttachBotParameters:m,openChatWithDraft:I}=(0,i.Sv)(),g=(s.s$?o:n).replace(/^\/\//,""),v=Object.fromEntries(a);switch(g){case"resolve":{const{domain:t,phone:e,post:a,comment:i,voicechat:n,livestream:s,start:o,startattach:d,attach:c}=v,u=!(!v.hasOwnProperty("startattach")||d)||d,p=r(v.choose);"telegrampassport"!==t&&(u&&p?m({username:t,filter:p,..."string"==typeof u&&{startParam:u}}):v.hasOwnProperty("voicechat")||v.hasOwnProperty("livestream")?f({username:t,inviteHash:n||s}):e?h({phone:e,startAttach:u,attach:c}):l({username:t,messageId:Number(a),commentId:Number(i),startParam:o,startAttach:u,attach:c}));break}case"privatepost":{const{post:t,channel:e}=v;p({chatId:`-${e}`,id:t});break}case"bg":case"login":default:break;case"join":{const{invite:t}=v;c({hash:t});break}case"addemoji":case"addstickers":{const{set:t}=v;u({stickerSetInfo:{shortName:t}});break}case"share":case"msg":case"msg_url":{const{url:t,text:e}=v;I({text:d(t,e)});break}case"invoice":{const{slug:t}=v;C({slug:t});break}}};function r(t){if(t)return t.toLowerCase().split(" ").filter((t=>n.F9.includes(t)))}function d(t,e){return[t,e].filter(Boolean).join("\n")}}}]);
//# sourceMappingURL=8422.674858cefa39954be492.js.map