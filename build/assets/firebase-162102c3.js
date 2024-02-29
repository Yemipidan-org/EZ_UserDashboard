import{au as Pc}from"./index-48b29d62.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},i_=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Td={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(d=64)),r.push(t[l],t[h],t[d],t[m])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ed(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):i_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new s_;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const w=u<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class s_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const o_=function(n){const e=Ed(n);return Td.encodeByteArray(e,!0)},$s=function(n){return o_(n).replace(/\./g,"")},Ad=function(n){try{return Td.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function js(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!a_(t)||(n[t]=js(n[t],e[t]));return n}function a_(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=()=>c_().__FIREBASE_DEFAULTS__,l_=()=>{if(typeof process>"u"||typeof{}>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},h_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ad(n[1]);return e&&JSON.parse(e)},bc=()=>{try{return u_()||l_()||h_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Rd=()=>{var n;return(n=bc())===null||n===void 0?void 0:n.config},d_=n=>{var e;return(e=bc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[$s(JSON.stringify(t)),$s(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function p_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(X())}function Sc(){var n;const e=(n=bc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function g_(){return typeof self=="object"&&self.self===self}function Pd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Cc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bd(){const n=X();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Sd(){return!Sc()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mi(){try{return typeof indexedDB=="object"}catch{return!1}}function __(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="FirebaseError";class De extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=y_,Object.setPrototypeOf(this,De.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xn.prototype.create)}}class xn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?I_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new De(i,a,r)}}function I_(n,e){return n.replace(v_,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const v_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function w_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function pi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Al(s)&&Al(o)){if(!pi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Al(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function er(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Yr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Cd(n,e){const t=new E_(n,e);return t.subscribe.bind(t)}class E_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");T_(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ha),i.error===void 0&&(i.error=ha),i.complete===void 0&&(i.complete=ha);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function T_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ha(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(n){return n&&n._delegate?n._delegate:n}class ut{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new f_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(P_(e))try{this.getOrInitializeService({instanceIdentifier:sn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sn){return this.instances.has(e)}getOptions(e=sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:R_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=sn){return this.component?this.component.multipleInstances?e:sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function R_(n){return n===sn?void 0:n}function P_(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new A_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=[];var x;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(x||(x={}));const kd={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},S_=x.INFO,C_={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},k_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=C_[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class go{constructor(e){this.name=e,this._logLevel=S_,this._logHandler=k_,this._userLogHandler=null,kc.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}function D_(n){kc.forEach(e=>{e.setLogLevel(n)})}function V_(n,e){for(const t of kc){let r=null;e&&e.level&&(r=kd[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r??i.logLevel)&&n({level:x[s].toLowerCase(),message:a,args:o,type:i.name})}}}const N_=(n,e)=>e.some(t=>n instanceof t);let Rl,Pl;function x_(){return Rl||(Rl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function O_(){return Pl||(Pl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dd=new WeakMap,xa=new WeakMap,Vd=new WeakMap,da=new WeakMap,Dc=new WeakMap;function L_(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Ot(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Dd.set(t,n)}).catch(()=>{}),Dc.set(e,n),e}function M_(n){if(xa.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});xa.set(n,e)}let Oa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return xa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Vd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ot(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function F_(n){Oa=n(Oa)}function U_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(fa(this),e,...t);return Vd.set(r,e.sort?e.sort():[e]),Ot(r)}:O_().includes(n)?function(...e){return n.apply(fa(this),e),Ot(Dd.get(this))}:function(...e){return Ot(n.apply(fa(this),e))}}function B_(n){return typeof n=="function"?U_(n):(n instanceof IDBTransaction&&M_(n),N_(n,x_())?new Proxy(n,Oa):n)}function Ot(n){if(n instanceof IDBRequest)return L_(n);if(da.has(n))return da.get(n);const e=B_(n);return e!==n&&(da.set(n,e),Dc.set(e,n)),e}const fa=n=>Dc.get(n);function q_(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Ot(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ot(o.result),c.oldVersion,c.newVersion,Ot(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const $_=["get","getKey","getAll","getAllKeys","count"],j_=["put","add","delete","clear"],ma=new Map;function bl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ma.get(e))return ma.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=j_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$_.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return ma.set(e,s),s}F_(n=>({...n,get:(e,t,r)=>bl(e,t)||n.get(e,t,r),has:(e,t)=>!!bl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(z_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function z_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const La="@firebase/app",Sl="0.9.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new go("@firebase/app"),W_="@firebase/app-compat",K_="@firebase/analytics-compat",H_="@firebase/analytics",Q_="@firebase/app-check-compat",Y_="@firebase/app-check",J_="@firebase/auth",X_="@firebase/auth-compat",Z_="@firebase/database",ey="@firebase/database-compat",ty="@firebase/functions",ny="@firebase/functions-compat",ry="@firebase/installations",iy="@firebase/installations-compat",sy="@firebase/messaging",oy="@firebase/messaging-compat",ay="@firebase/performance",cy="@firebase/performance-compat",uy="@firebase/remote-config",ly="@firebase/remote-config-compat",hy="@firebase/storage",dy="@firebase/storage-compat",fy="@firebase/firestore",my="@firebase/firestore-compat",py="firebase",gy="10.7.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="[DEFAULT]",_y={[La]:"fire-core",[W_]:"fire-core-compat",[H_]:"fire-analytics",[K_]:"fire-analytics-compat",[Y_]:"fire-app-check",[Q_]:"fire-app-check-compat",[J_]:"fire-auth",[X_]:"fire-auth-compat",[Z_]:"fire-rtdb",[ey]:"fire-rtdb-compat",[ty]:"fire-fn",[ny]:"fire-fn-compat",[ry]:"fire-iid",[iy]:"fire-iid-compat",[sy]:"fire-fcm",[oy]:"fire-fcm-compat",[ay]:"fire-perf",[cy]:"fire-perf-compat",[uy]:"fire-rc",[ly]:"fire-rc-compat",[hy]:"fire-gcs",[dy]:"fire-gcs-compat",[fy]:"fire-fst",[my]:"fire-fst-compat","fire-js":"fire-js",[py]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new Map,gi=new Map;function Gs(n,e){try{n.container.addComponent(e)}catch(t){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Nd(n,e){n.container.addOrOverwriteComponent(e)}function Ut(n){const e=n.name;if(gi.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;gi.set(e,n);for(const t of Ft.values())Gs(t,n);return!0}function xd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function yy(n,e,t=Mt){xd(n,e).clearInstance(t)}function Iy(){gi.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gt=new xn("app","Firebase",vy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wy=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=gy;function Vc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Mt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw gt.create("bad-app-name",{appName:String(i)});if(t||(t=Rd()),!t)throw gt.create("no-options");const s=Ft.get(i);if(s){if(pi(t,s.options)&&pi(r,s.config))return s;throw gt.create("duplicate-app",{appName:i})}const o=new b_(i);for(const c of gi.values())o.addComponent(c);const a=new wy(t,r,o);return Ft.set(i,a),a}function Ey(n=Mt){const e=Ft.get(n);if(!e&&n===Mt&&Rd())return Vc();if(!e)throw gt.create("no-app",{appName:n});return e}function Ty(){return Array.from(Ft.values())}async function Od(n){const e=n.name;Ft.has(e)&&(Ft.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function at(n,e,t){var r;let i=(r=_y[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(a.join(" "));return}Ut(new ut(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Ld(n,e){if(n!==null&&typeof n!="function")throw gt.create("invalid-log-argument");V_(n,e)}function Md(n){D_(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="firebase-heartbeat-database",Ry=1,_i="firebase-heartbeat-store";let pa=null;function Fd(){return pa||(pa=q_(Ay,Ry,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(_i)}catch(t){console.warn(t)}}}}).catch(n=>{throw gt.create("idb-open",{originalErrorMessage:n.message})})),pa}async function Py(n){try{return await(await Fd()).transaction(_i).objectStore(_i).get(Ud(n))}catch(e){if(e instanceof De)wn.warn(e.message);else{const t=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(t.message)}}}async function Cl(n,e){try{const r=(await Fd()).transaction(_i,"readwrite");await r.objectStore(_i).put(e,Ud(n)),await r.done}catch(t){if(t instanceof De)wn.warn(t.message);else{const r=gt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});wn.warn(r.message)}}}function Ud(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=1024,Sy=30*24*60*60*1e3;class Cy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Dy(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=kl();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Sy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=kl(),{heartbeatsToSend:r,unsentEntries:i}=ky(this._heartbeatsCache.heartbeats),s=$s(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function kl(){return new Date().toISOString().substring(0,10)}function ky(n,e=by){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Dl(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Dl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Dy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mi()?__().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Py(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dl(n){return $s(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(n){Ut(new ut("platform-logger",e=>new G_(e),"PRIVATE")),Ut(new ut("heartbeat",e=>new Cy(e),"PRIVATE")),at(La,Sl,n),at(La,Sl,"esm2017"),at("fire-js","")}Vy("");const Ny=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:De,SDK_VERSION:Qt,_DEFAULT_ENTRY_NAME:Mt,_addComponent:Gs,_addOrOverwriteComponent:Nd,_apps:Ft,_clearComponents:Iy,_components:gi,_getProvider:xd,_registerComponent:Ut,_removeServiceInstance:yy,deleteApp:Od,getApp:Ey,getApps:Ty,initializeApp:Vc,onLog:Ld,registerVersion:at,setLogLevel:Md},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,t){this._delegate=e,this.firebase=t,Gs(e,new ut("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Od(this._delegate)))}_getService(e,t=Mt){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Mt){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Gs(this._delegate,e)}_addOrOverwriteComponent(e){Nd(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Vl=new xn("app-compat","Firebase",Oy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:at,setLogLevel:Md,onLog:Ld,apps:null,SDK_VERSION:Qt,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:Ny}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Mt,!Tl(e,u))throw Vl.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,l={}){const h=Vc(u,l);if(Tl(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(Ut(u)&&u.type==="PUBLIC"){const d=(m=i())=>{if(typeof m[h]!="function")throw Vl.create("invalid-app-argument",{appName:l});return m[h]()};u.serviceProps!==void 0&&js(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...m){return this._getService.bind(this,l).apply(this,u.multipleInstances?m:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(){const n=Ly(xy);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Bd,extendNamespace:e,createSubscribe:Cd,ErrorFactory:xn,deepExtend:js});function e(t){js(n,t)}return n}const My=Bd();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=new go("@firebase/app-compat"),Fy="@firebase/app-compat",Uy="0.2.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(n){at(Fy,Uy,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(g_()&&self.firebase!==void 0){Nl.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&Nl.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const On=My;By();var qy="firebase",$y="10.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On.registerVersion(qy,$y,"app-compat");const Br={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},jn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function qd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gy=jy,zy=qd,$d=new xn("auth","Firebase",qd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new go("@firebase/auth");function Wy(n,...e){zs.logLevel<=x.WARN&&zs.warn(`Auth (${Qt}): ${n}`,...e)}function ks(n,...e){zs.logLevel<=x.ERROR&&zs.error(`Auth (${Qt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n,...e){throw Nc(n,...e)}function Ee(n,...e){return Nc(n,...e)}function jd(n,e,t){const r=Object.assign(Object.assign({},zy()),{[e]:t});return new xn("auth","Firebase",r).create(e,{appName:n.name})}function Rr(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ae(n,"argument-error"),jd(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return $d.create(n,...e)}function y(n,e,...t){if(!n)throw Nc(e,...t)}function nt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ks(e),new Error(e)}function He(n,e){n||nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function xc(){return xl()==="http:"||xl()==="https:"}function xl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xc()||Pd()||"connection"in navigator)?navigator.onLine:!0}function Hy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t){this.shortDelay=e,this.longDelay=t,He(t>e,"Short delay should be less than long delay!"),this.isMobile=p_()||Cc()}get(){return Ky()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(n,e){He(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=new Wi(3e4,6e4);function ie(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function se(n,e,t,r,i={}){return zd(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ar(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Gd.fetch()(Wd(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function zd(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Qy),e);try{const i=new Xy(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Jr(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jr(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Jr(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Jr(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jd(n,l,u);Ae(n,l)}}catch(i){if(i instanceof De)throw i;Ae(n,"network-request-failed",{message:String(i)})}}async function wt(n,e,t,r,i={}){const s=await se(n,e,t,r,i);return"mfaPendingCredential"in s&&Ae(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Wd(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Oc(n.config,i):`${n.config.apiScheme}://${i}`}function Jy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Xy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ee(this.auth,"network-request-failed")),Yy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ee(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(n){return n!==void 0&&n.getResponse!==void 0}function Ll(n){return n!==void 0&&n.enterprise!==void 0}class Zy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Jy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eI(n){return(await se(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function tI(n,e){return se(n,"GET","/v2/recaptchaConfig",ie(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(n,e){return se(n,"POST","/v1/accounts:delete",e)}async function rI(n,e){return se(n,"POST","/v1/accounts:update",e)}async function iI(n,e){return se(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sI(n,e=!1){const t=S(n),r=await t.getIdToken(e),i=_o(r);y(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ii(ga(i.auth_time)),issuedAtTime:ii(ga(i.iat)),expirationTime:ii(ga(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ga(n){return Number(n)*1e3}function _o(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ks("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ad(t);return i?JSON.parse(i):(ks("Failed to decode base64 JWT payload"),null)}catch(i){return ks("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function oI(n){const e=_o(n);return y(e,"internal-error"),y(typeof e.exp<"u","internal-error"),y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof De&&aI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function aI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ii(this.lastLoginAt),this.creationTime=ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(n){var e;const t=n.auth,r=await n.getIdToken(),i=await yt(n,iI(t,{idToken:r}));y(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?hI(s.providerUserInfo):[],a=lI(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Kd(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function uI(n){const e=S(n);await Ii(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lI(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function hI(n){return n.map(e=>{var{providerId:t}=e,r=Pc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dI(n,e){const t=await zd(n,{},async()=>{const r=Ar({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Wd(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Gd.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function fI(n,e){return se(n,"POST","/v2/accounts:revokeToken",ie(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(typeof e.idToken<"u","internal-error"),y(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):oI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await dI(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new vi;return r&&(y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(n,e){y(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Pc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Kd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await yt(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return sI(this,e)}reload(){return uI(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ii(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await yt(this,nI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,m=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=t.photoURL)!==null&&o!==void 0?o:void 0,E=(a=t.tenantId)!==null&&a!==void 0?a:void 0,v=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,D=(u=t.createdAt)!==null&&u!==void 0?u:void 0,M=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:N,emailVerified:z,isAnonymous:H,providerData:j,stsTokenManager:le}=t;y(N&&le,e,"internal-error");const Pt=vi.fromJSON(this.name,le);y(typeof N=="string",e,"internal-error"),bt(h,e.name),bt(d,e.name),y(typeof z=="boolean",e,"internal-error"),y(typeof H=="boolean",e,"internal-error"),bt(m,e.name),bt(w,e.name),bt(E,e.name),bt(v,e.name),bt(D,e.name),bt(M,e.name);const Ur=new _n({uid:N,auth:e,email:d,emailVerified:z,displayName:h,isAnonymous:H,photoURL:w,phoneNumber:m,tenantId:E,stsTokenManager:Pt,createdAt:D,lastLoginAt:M});return j&&Array.isArray(j)&&(Ur.providerData=j.map(ys=>Object.assign({},ys))),v&&(Ur._redirectEventId=v),Ur}static async _fromIdTokenResponse(e,t,r=!1){const i=new vi;i.updateFromServerResponse(t);const s=new _n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ii(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=new Map;function qe(n){He(n instanceof Function,"Expected a class definition");let e=Ml.get(n);return e?(He(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ml.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Hd.type="NONE";const ur=Hd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(n,e,t){return`firebase:${n}:${e}:${t}`}class nr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=yn(this.userKey,i.apiKey,s),this.fullPersistenceKey=yn("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new nr(qe(ur),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||qe(ur);const o=yn(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=_n._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new nr(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new nr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xd(e))return"Blackberry";if(Zd(e))return"Webos";if(Lc(e))return"Safari";if((e.includes("chrome/")||Yd(e))&&!e.includes("edge/"))return"Chrome";if(Ki(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qd(n=X()){return/firefox\//i.test(n)}function Lc(n=X()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yd(n=X()){return/crios\//i.test(n)}function Jd(n=X()){return/iemobile/i.test(n)}function Ki(n=X()){return/android/i.test(n)}function Xd(n=X()){return/blackberry/i.test(n)}function Zd(n=X()){return/webos/i.test(n)}function Pr(n=X()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function mI(n=X()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function pI(n=X()){var e;return Pr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gI(){return bd()&&document.documentMode===10}function ef(n=X()){return Pr(n)||Ki(n)||Zd(n)||Xd(n)||/windows phone/i.test(n)||Jd(n)}function _I(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(n,e=[]){let t;switch(n){case"Browser":t=Fl(X());break;case"Worker":t=`${Fl(X())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Qt}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(n,e={}){return se(n,"GET","/v2/passwordPolicy",ie(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=6;class wI{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:vI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ul(this),this.idTokenSubscription=new Ul(this),this.beforeStateQueue=new yI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$d,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=qe(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await nr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ii(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?S(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await II(this),t=new wI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await fI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&qe(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await nr.create(this,[qe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(y(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Wy(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function te(n){return S(n)}class Ul{constructor(e){this.auth=e,this.observer=null,this.addObserver=Cd(t=>this.observer=t)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Mc(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Ee("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",TI().appendChild(r)})}function nf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const AI="https://www.google.com/recaptcha/enterprise.js?render=",RI="recaptcha-enterprise",PI="NO_RECAPTCHA";class bI{constructor(e){this.type=RI,this.auth=te(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{tI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Zy(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Ll(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(PI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Ll(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Mc(AI+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Bl(n,e,t,r=!1){const i=new bI(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function wi(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Bl(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Bl(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}function SI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(qe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function CI(n,e,t){const r=te(n);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=rf(e),{host:o,port:a}=kI(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||DI()}function rf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function kI(n){const e=rf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ql(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ql(o)}}}function ql(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function DI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,t){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sf(n,e){return se(n,"POST","/v1/accounts:resetPassword",ie(n,e))}async function VI(n,e){return se(n,"POST","/v1/accounts:update",e)}async function NI(n,e){return se(n,"POST","/v1/accounts:signUp",e)}async function xI(n,e){return se(n,"POST","/v1/accounts:update",ie(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(n,e){return wt(n,"POST","/v1/accounts:signInWithPassword",ie(n,e))}async function yo(n,e){return se(n,"POST","/v1/accounts:sendOobCode",ie(n,e))}async function LI(n,e){return yo(n,e)}async function MI(n,e){return yo(n,e)}async function FI(n,e){return yo(n,e)}async function UI(n,e){return yo(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BI(n,e){return wt(n,"POST","/v1/accounts:signInWithEmailLink",ie(n,e))}async function qI(n,e){return wt(n,"POST","/v1/accounts:signInWithEmailLink",ie(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends br{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ei(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ei(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wi(e,t,"signInWithPassword",OI);case"emailLink":return BI(e,{email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wi(e,r,"signUpPassword",NI);case"emailLink":return qI(e,{idToken:t,email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _t(n,e){return wt(n,"POST","/v1/accounts:signInWithIdp",ie(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="http://localhost";class lt extends br{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ae("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Pc(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new lt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return _t(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,_t(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_t(e,t)}buildRequest(){const e={requestUri:$I,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ar(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jI(n,e){return se(n,"POST","/v1/accounts:sendVerificationCode",ie(n,e))}async function GI(n,e){return wt(n,"POST","/v1/accounts:signInWithPhoneNumber",ie(n,e))}async function zI(n,e){const t=await wt(n,"POST","/v1/accounts:signInWithPhoneNumber",ie(n,e));if(t.temporaryProof)throw Jr(n,"account-exists-with-different-credential",t);return t}const WI={USER_NOT_FOUND:"user-not-found"};async function KI(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return wt(n,"POST","/v1/accounts:signInWithPhoneNumber",ie(n,t),WI)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends br{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new In({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new In({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return GI(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return zI(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return KI(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new In({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QI(n){const e=er(Yr(n)).link,t=e?er(Yr(e)).deep_link_id:null,r=er(Yr(n)).deep_link_id;return(r?er(Yr(r)).link:null)||r||t||e||n}class Io{constructor(e){var t,r,i,s,o,a;const c=er(Yr(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=HI((i=c.mode)!==null&&i!==void 0?i:null);y(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=QI(e);try{return new Io(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(){this.providerId=Yt.PROVIDER_ID}static credential(e,t){return Ei._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Io.parseLink(t);return y(r,"argument-error"),Ei._fromEmailAndCode(e,r.code,r.tenantId)}}Yt.PROVIDER_ID="password";Yt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Et{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class rr extends Sr{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return y("providerId"in t&&"signInMethod"in t,"argument-error"),lt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return y(e.idToken||e.accessToken,"argument-error"),lt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return rr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return rr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new rr(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends Sr{constructor(){super("facebook.com")}static credential(e){return lt._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch{return null}}}Je.FACEBOOK_SIGN_IN_METHOD="facebook.com";Je.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends Sr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return lt._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Xe.credential(t,r)}catch{return null}}}Xe.GOOGLE_SIGN_IN_METHOD="google.com";Xe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends Sr{constructor(){super("github.com")}static credential(e){return lt._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ze.credential(e.oauthAccessToken)}catch{return null}}}Ze.GITHUB_SIGN_IN_METHOD="github.com";Ze.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI="http://localhost";class lr extends br{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return _t(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,_t(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_t(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new lr(r,s)}static _create(e,t){return new lr(e,t)}buildRequest(){return{requestUri:YI,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="saml.";class Ws extends Et{constructor(e){y(e.startsWith(JI),"argument-error"),super(e)}static credentialFromResult(e){return Ws.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ws.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=lr.fromJSON(e);return y(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return lr._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends Sr{constructor(){super("twitter.com")}static credential(e,t){return lt._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return et.credential(t,r)}catch{return null}}}et.TWITTER_SIGN_IN_METHOD="twitter.com";et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function of(n,e){return wt(n,"POST","/v1/accounts:signUp",ie(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await _n._fromIdTokenResponse(e,r,i),o=$l(r);return new Ke({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=$l(r);return new Ke({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function $l(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(n){var e;const t=te(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ke({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await of(t,{returnSecureToken:!0}),i=await Ke._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends De{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ks.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ks(e,t,r,i)}}function af(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ks._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZI(n,e){const t=S(n);await vo(!0,t,e);const{providerUserInfo:r}=await rI(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=cf(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Fc(n,e,t=!1){const r=await yt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ke._forOperation(n,"link",r)}async function vo(n,e,t){await Ii(e);const r=cf(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";y(r.has(t)===n,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uf(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await yt(n,af(r,i,e,n),t);y(s.idToken,r,"internal-error");const o=_o(s.idToken);y(o,r,"internal-error");const{sub:a}=o;return y(n.uid===a,r,"user-mismatch"),Ke._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ae(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lf(n,e,t=!1){const r="signIn",i=await af(n,r,e),s=await Ke._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function wo(n,e){return lf(te(n),e)}async function hf(n,e){const t=S(n);return await vo(!1,t,e.providerId),Fc(t,e)}async function df(n,e){return uf(S(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ev(n,e){return wt(n,"POST","/v1/accounts:signInWithCustomToken",ie(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tv(n,e){const t=te(n),r=await ev(t,{token:e,returnSecureToken:!0}),i=await Ke._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Uc._fromServerResponse(e,t):"totpInfo"in t?Bc._fromServerResponse(e,t):Ae(e,"internal-error")}}class Uc extends Hi{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Uc(t)}}class Bc extends Hi{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Bc(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n,e,t){var r;y(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),y(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(y(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(y(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qc(n){const e=te(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nv(n,e,t){const r=te(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Eo(r,i,t),await wi(r,i,"getOobCode",MI)}async function rv(n,e,t){await sf(S(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qc(n),r})}async function iv(n,e){await xI(S(n),{oobCode:e})}async function ff(n,e){const t=S(n),r=await sf(t,{oobCode:e}),i=r.requestType;switch(y(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":y(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":y(r.mfaInfo,t,"internal-error");default:y(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=Hi._fromServerResponse(te(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function sv(n,e){const{data:t}=await ff(S(n),e);return t.email}async function ov(n,e,t){const r=te(n),o=await wi(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",of).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&qc(n),c}),a=await Ke._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function av(n,e,t){return wo(S(n),Yt.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qc(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cv(n,e,t){const r=te(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){y(a.handleCodeInApp,r,"argument-error"),a&&Eo(r,o,a)}s(i,t),await wi(r,i,"getOobCode",FI)}function uv(n,e){const t=Io.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function lv(n,e,t){const r=S(n),i=Yt.credentialWithLink(e,t||yi());return y(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),wo(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hv(n,e){return se(n,"POST","/v1/accounts:createAuthUri",ie(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dv(n,e){const t=xc()?yi():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await hv(S(n),r);return i||[]}async function fv(n,e){const t=S(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Eo(t.auth,i,e);const{email:s}=await LI(t.auth,i);s!==n.email&&await n.reload()}async function mv(n,e,t){const r=S(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Eo(r.auth,s,t);const{email:o}=await UI(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pv(n,e){return se(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gv(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=S(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await yt(r,pv(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function _v(n,e){return mf(S(n),e,null)}function yv(n,e){return mf(S(n),null,e)}async function mf(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await yt(n,VI(r,s));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=_o(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ir(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new vv(s,i);case"github.com":return new wv(s,i);case"google.com":return new Ev(s,i);case"twitter.com":return new Tv(s,i,n.screenName||null);case"custom":case"anonymous":return new ir(s,null);default:return new ir(s,r,i)}}class ir{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class pf extends ir{constructor(e,t,r,i){super(e,t,r),this.username=i}}class vv extends ir{constructor(e,t){super(e,"facebook.com",t)}}class wv extends pf{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class Ev extends ir{constructor(e,t){super(e,"google.com",t)}}class Tv extends pf{constructor(e,t,r){super(e,"twitter.com",t,r)}}function Av(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:Iv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new dn("enroll",e,t)}static _fromMfaPendingCredential(e){return new dn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return dn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return dn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=te(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Hi._fromServerResponse(r,a));y(i.mfaPendingCredential,r,"internal-error");const o=dn._fromMfaPendingCredential(i.mfaPendingCredential);return new $c(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const l=await Ke._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return y(t.user,r,"internal-error"),Ke._forOperation(t.user,t.operationType,u);default:Ae(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Rv(n,e){var t;const r=S(n),i=e;return y(e.customData.operationType,r,"argument-error"),y((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),$c._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(n,e){return se(n,"POST","/v2/accounts/mfaEnrollment:start",ie(n,e))}function bv(n,e){return se(n,"POST","/v2/accounts/mfaEnrollment:finalize",ie(n,e))}function Sv(n,e){return se(n,"POST","/v2/accounts/mfaEnrollment:withdraw",ie(n,e))}class jc{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Hi._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new jc(e)}async getSession(){return dn._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,i=await this.getSession(),s=await yt(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await yt(this.user,Sv(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const _a=new WeakMap;function Cv(n){const e=S(n);return _a.has(e)||_a.set(e,jc._fromUser(e)),_a.get(e)}const Hs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hs,"1"),this.storage.removeItem(Hs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(){const n=X();return Lc(n)||Pr(n)}const Dv=1e3,Vv=10;class _f extends gf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kv()&&_I(),this.fallbackToPolling=ef(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Vv):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Dv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_f.type="LOCAL";const Gc=_f;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf extends gf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yf.type="SESSION";const En=yf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new To(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await Nv(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}To.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Qi("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){return window}function Ov(n){ue().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(){return typeof ue().WorkerGlobalScope<"u"&&typeof ue().importScripts=="function"}async function Lv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Fv(){return zc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="firebaseLocalStorageDb",Uv=1,Qs="firebaseLocalStorage",vf="fbase_key";class Yi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ao(n,e){return n.transaction([Qs],e?"readwrite":"readonly").objectStore(Qs)}function Bv(){const n=indexedDB.deleteDatabase(If);return new Yi(n).toPromise()}function Ma(){const n=indexedDB.open(If,Uv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Qs,{keyPath:vf})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Qs)?e(r):(r.close(),await Bv(),e(await Ma()))})})}async function jl(n,e,t){const r=Ao(n,!0).put({[vf]:e,value:t});return new Yi(r).toPromise()}async function qv(n,e){const t=Ao(n,!1).get(e),r=await new Yi(t).toPromise();return r===void 0?null:r.value}function Gl(n,e){const t=Ao(n,!0).delete(e);return new Yi(t).toPromise()}const $v=800,jv=3;class wf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ma(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>jv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=To._getInstance(Fv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Lv(),!this.activeServiceWorker)return;this.sender=new xv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ma();return await jl(e,Hs,"1"),await Gl(e,Hs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>jl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>qv(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Gl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ao(i,!1).getAll();return new Yi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$v)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wf.type="LOCAL";const Ti=wf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(n,e){return se(n,"POST","/v2/accounts/mfaSignIn:start",ie(n,e))}function zv(n,e){return se(n,"POST","/v2/accounts/mfaSignIn:finalize",ie(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv=500,Kv=6e4,Is=1e12;class Hv{constructor(e){this.auth=e,this.counter=Is,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new Qv(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Is;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Is;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Is;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class Qv{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;y(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Yv(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},Kv)},Wv))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Yv(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=nf("rcb"),Jv=new Wi(3e4,6e4),Xv="https://www.google.com/recaptcha/api.js?";class Zv{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ue().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return y(ew(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Ol(ue().grecaptcha)?Promise.resolve(ue().grecaptcha):new Promise((r,i)=>{const s=ue().setTimeout(()=>{i(Ee(e,"network-request-failed"))},Jv.get());ue()[ya]=()=>{ue().clearTimeout(s),delete ue()[ya];const a=ue().grecaptcha;if(!a||!Ol(a)){i(Ee(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${Xv}?${Ar({onload:ya,render:"explicit",hl:t})}`;Mc(o).catch(()=>{clearTimeout(s),i(Ee(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=ue().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function ew(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class tw{async load(e){return new Hv(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="recaptcha",nw={theme:"light",type:"image"};let rw=class{constructor(e,t,r=Object.assign({},nw)){this.parameters=r,this.type=Ef,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=te(e),this.isInvisible=this.parameters.size==="invisible",y(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;y(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new tw:new Zv,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){y(!this.parameters.sitekey,this.auth,"argument-error"),y(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),y(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=ue()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){y(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){y(xc()&&!zc(),this.auth,"internal-error"),await iw(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await eI(this.auth);y(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return y(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function iw(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=In._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function sw(n,e,t){const r=te(n),i=await Ro(r,e,S(t));return new Wc(i,s=>wo(r,s))}async function ow(n,e,t){const r=S(n);await vo(!1,r,"phone");const i=await Ro(r.auth,e,S(t));return new Wc(i,s=>hf(r,s))}async function aw(n,e,t){const r=S(n),i=await Ro(r.auth,e,S(t));return new Wc(i,s=>df(r,s))}async function Ro(n,e,t){var r;const i=await t.verify();try{y(typeof i=="string",n,"argument-error"),y(t.type===Ef,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return y(o.type==="enroll",n,"internal-error"),(await Pv(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{y(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return y(a,n,"missing-multi-factor-info"),(await Gv(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await jI(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function cw(n,e){await Fc(S(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn=class Ds{constructor(e){this.providerId=Ds.PROVIDER_ID,this.auth=te(e)}verifyPhoneNumber(e,t){return Ro(this.auth,e,S(t))}static credential(e,t){return In._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ds.credentialFromTaggedObject(t)}static credentialFromError(e){return Ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?In._fromTokenResponse(t,r):null}};Tn.PROVIDER_ID="phone";Tn.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(n,e){return e?qe(e):(y(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc extends br{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _t(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _t(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _t(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function uw(n){return lf(n.auth,new Kc(n),n.bypassAuthState)}function lw(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),uf(t,new Kc(n),n.bypassAuthState)}async function hw(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),Fc(t,new Kc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uw;case"linkViaPopup":case"linkViaRedirect":return hw;case"reauthViaPopup":case"reauthViaRedirect":return lw;default:Ae(this.auth,"internal-error")}}resolve(e){He(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){He(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=new Wi(2e3,1e4);async function fw(n,e,t){const r=te(n);Rr(n,e,Et);const i=Ln(r,t);return new ft(r,"signInViaPopup",e,i).executeNotNull()}async function mw(n,e,t){const r=S(n);Rr(r.auth,e,Et);const i=Ln(r.auth,t);return new ft(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function pw(n,e,t){const r=S(n);Rr(r.auth,e,Et);const i=Ln(r.auth,t);return new ft(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class ft extends Tf{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ft.currentPopupAction&&ft.currentPopupAction.cancel(),ft.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){He(this.filter.length===1,"Popup operations only handle one event");const e=Qi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ee(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ee(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ft.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ee(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dw.get())};e()}}ft.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="pendingRedirect",si=new Map;class _w extends Tf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=si.get(this.auth._key());if(!e){try{const r=await yw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}si.set(this.auth._key(),e)}return this.bypassAuthState||si.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yw(n,e){const t=Rf(e),r=Af(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function Hc(n,e){return Af(n)._set(Rf(e),"true")}function Iw(){si.clear()}function Qc(n,e){si.set(n._key(),e)}function Af(n){return qe(n._redirectPersistence)}function Rf(n){return yn(gw,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(n,e,t){return ww(n,e,t)}async function ww(n,e,t){const r=te(n);Rr(n,e,Et),await r._initializationPromise;const i=Ln(r,t);return await Hc(i,r),i._openRedirect(r,e,"signInViaRedirect")}function Ew(n,e,t){return Tw(n,e,t)}async function Tw(n,e,t){const r=S(n);Rr(r.auth,e,Et),await r.auth._initializationPromise;const i=Ln(r.auth,t);await Hc(i,r.auth);const s=await Pf(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function Aw(n,e,t){return Rw(n,e,t)}async function Rw(n,e,t){const r=S(n);Rr(r.auth,e,Et),await r.auth._initializationPromise;const i=Ln(r.auth,t);await vo(!1,r,e.providerId),await Hc(i,r.auth);const s=await Pf(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function Pw(n,e){return await te(n)._initializationPromise,Po(n,e,!1)}async function Po(n,e,t=!1){const r=te(n),i=Ln(r,e),o=await new _w(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Pf(n){const e=Qi(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=10*60*1e3;class bf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Sf(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ee(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bw&&this.cachedEventUids.clear(),this.cachedEventUids.has(zl(e))}saveEventToCache(e){this.cachedEventUids.add(zl(e)),this.lastProcessedEventTime=Date.now()}}function zl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Sf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Sw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cf(n,e={}){return se(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kw=/^https?/;async function Dw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Cf(n);for(const t of e)try{if(Vw(t))return}catch{}Ae(n,"unauthorized-domain")}function Vw(n){const e=yi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!kw.test(t))return!1;if(Cw.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=new Wi(3e4,6e4);function Wl(){const n=ue().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function xw(n){return new Promise((e,t)=>{var r,i,s;function o(){Wl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wl(),t(Ee(n,"network-request-failed"))},timeout:Nw.get()})}if(!((i=(r=ue().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ue().gapi)===null||s===void 0)&&s.load)o();else{const a=nf("iframefcb");return ue()[a]=()=>{gapi.load?o():t(Ee(n,"network-request-failed"))},Mc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Vs=null,e})}let Vs=null;function Ow(n){return Vs=Vs||xw(n),Vs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=new Wi(5e3,15e3),Mw="__/auth/iframe",Fw="emulator/auth/iframe",Uw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qw(n){const e=n.config;y(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Oc(e,Fw):`https://${n.config.authDomain}/${Mw}`,r={apiKey:e.apiKey,appName:n.name,v:Qt},i=Bw.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Ar(r).slice(1)}`}async function $w(n){const e=await Ow(n),t=ue().gapi;return y(t,n,"internal-error"),e.open({where:document.body,url:qw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Uw,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ee(n,"network-request-failed"),a=ue().setTimeout(()=>{s(o)},Lw.get());function c(){ue().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gw=500,zw=600,Ww="_blank",Kw="http://localhost";class Kl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Hw(n,e,t,r=Gw,i=zw){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},jw),{width:r.toString(),height:i.toString(),top:s,left:o}),u=X().toLowerCase();t&&(a=Yd(u)?Ww:t),Qd(u)&&(e=e||Kw,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[m,w])=>`${d}${m}=${w},`,"");if(pI(u)&&a!=="_self")return Qw(e||"",a),new Kl(null);const h=window.open(e||"",a,l);y(h,n,"popup-blocked");try{h.focus()}catch{}return new Kl(h)}function Qw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="__/auth/handler",Jw="emulator/auth/handler",Xw=encodeURIComponent("fac");async function Fa(n,e,t,r,i,s){y(n.config.authDomain,n,"auth-domain-config-required"),y(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Qt,eventId:i};if(e instanceof Et){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",w_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof Sr){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${Xw}=${encodeURIComponent(c)}`:"";return`${Zw(n)}?${Ar(a).slice(1)}${u}`}function Zw({config:n}){return n.emulator?Oc(n,Jw):`https://${n.authDomain}/${Yw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia="webStorageSupport";class eE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=En,this._completeRedirectFn=Po,this._overrideRedirectResult=Qc}async _openPopup(e,t,r,i){var s;He((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Fa(e,t,r,yi(),i);return Hw(e,o,Qi())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Fa(e,t,r,yi(),i);return Ov(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(He(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await $w(e),r=new bf(e);return t.register("authEvent",i=>(y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ia,{type:Ia},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ia];o!==void 0&&t(!!o),Ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Dw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ef()||Lc()||Pr()}}const tE=eE;class nE{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return nt("unexpected MultiFactorSessionType")}}}class Yc extends nE{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Yc(e)}_finalizeEnroll(e,t,r){return bv(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return zv(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class kf{constructor(){}static assertion(e){return Yc._fromCredential(e)}}kf.FACTOR_ID="phone";var Hl="@firebase/auth",Ql="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sE(n){Ut(new ut("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tf(n)},u=new EI(r,i,s,c);return SI(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ut(new ut("auth-internal",e=>{const t=te(e.getProvider("auth").getImmediate());return(r=>new rE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),at(Hl,Ql,iE(n)),at(Hl,Ql,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=5*60;d_("authIdTokenMaxAge");sE("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=2e3;async function cE(n,e,t){var r;const{BuildInfo:i}=An();He(e.sessionId,"AuthEvent did not contain a session ID");const s=await fE(e.sessionId),o={};return Pr()?o.ibi=i.packageName:Ki()?o.apn=i.packageName:Ae(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Fa(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function uE(n){const{BuildInfo:e}=An(),t={};Pr()?t.iosBundleId=e.packageName:Ki()?t.androidPackageName=e.packageName:Ae(n,"operation-not-supported-in-this-environment"),await Cf(n,t)}function lE(n){const{cordova:e}=An();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,mI()?"_blank":"_system","location=yes"),t(i)})})}async function hE(n,e,t){const{cordova:r}=An();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(Ee(n,"redirect-cancelled-by-user"))},aE))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),Ki()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function dE(n){var e,t,r,i,s,o,a,c,u,l;const h=An();y(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),y(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),y(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),y(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),y(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function fE(n){const e=mE(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function mE(n){if(He(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=20;class gE extends bf{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function _E(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:vE(),postBody:null,tenantId:n.tenantId,error:Ee(n,"no-auth-event")}}function yE(n,e){return Ua()._set(Ba(n),e)}async function Yl(n){const e=await Ua()._get(Ba(n));return e&&await Ua()._remove(Ba(n)),e}function IE(n,e){var t,r;const i=EE(e);if(i.includes("/__/auth/callback")){const s=Ns(i),o=s.firebaseError?wE(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?Ee(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function vE(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<pE;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function Ua(){return qe(Gc)}function Ba(n){return yn("authEvent",n.config.apiKey,n.name)}function wE(n){try{return JSON.parse(n)}catch{return null}}function EE(n){const e=Ns(n),t=e.link?decodeURIComponent(e.link):void 0,r=Ns(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Ns(i).link||i||r||t||n}function Ns(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return er(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=500;class AE{constructor(){this._redirectPersistence=En,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Po,this._overrideRedirectResult=Qc}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new gE(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ae(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){dE(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),Iw(),await this._originValidation(e);const o=_E(e,r,i);await yE(e,o);const a=await cE(e,o,t),c=await lE(a);return hE(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=uE(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=An(),o=setTimeout(async()=>{await Yl(e),t.onEvent(Jl())},TE),a=async l=>{clearTimeout(o);const h=await Yl(e);let d=null;h&&(l!=null&&l.url)&&(d=IE(h,l.url)),t.onEvent(d||Jl())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;An().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const RE=AE;function Jl(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ee("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(n,e){te(n)._logFramework(e)}var bE="@firebase/auth-compat",SE="0.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=1e3;function oi(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function kE(){return oi()==="http:"||oi()==="https:"}function Df(n=X()){return!!((oi()==="file:"||oi()==="ionic:"||oi()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function DE(){return Cc()||Sc()}function VE(){return bd()&&(document==null?void 0:document.documentMode)===11}function NE(n=X()){return/Edge\/\d+/.test(n)}function xE(n=X()){return VE()||NE(n)}function Vf(){try{const n=self.localStorage,e=Qi();if(n)return n.setItem(e,"1"),n.removeItem(e),xE()?mi():!0}catch{return Jc()&&mi()}return!1}function Jc(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function va(){return(kE()||Pd()||Df())&&!DE()&&Vf()&&!Jc()}function Nf(){return Df()&&typeof document<"u"}async function OE(){return Nf()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},CE);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function LE(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be={LOCAL:"local",NONE:"none",SESSION:"session"},qr=y,xf="persistence";function ME(n,e){if(qr(Object.values(Be).includes(e),n,"invalid-persistence-type"),Cc()){qr(e!==Be.SESSION,n,"unsupported-persistence-type");return}if(Sc()){qr(e===Be.NONE,n,"unsupported-persistence-type");return}if(Jc()){qr(e===Be.NONE||e===Be.LOCAL&&mi(),n,"unsupported-persistence-type");return}qr(e===Be.NONE||Vf(),n,"unsupported-persistence-type")}async function qa(n){await n._initializationPromise;const e=Of(),t=yn(xf,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function FE(n,e){const t=Of();if(!t)return[];const r=yn(xf,n,e);switch(t.getItem(r)){case Be.NONE:return[ur];case Be.LOCAL:return[Ti,En];case Be.SESSION:return[En];default:return[]}}function Of(){var n;try{return((n=LE())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=y;class Nt{constructor(){this.browserResolver=qe(tE),this.cordovaResolver=qe(RE),this.underlyingResolver=null,this._redirectPersistence=En,this._completeRedirectFn=Po,this._overrideRedirectResult=Qc}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Nf()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return UE(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await OE();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(n){return n.unwrap()}function BE(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(n){return Mf(n)}function $E(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new jE(n,Rv(n,e))}else if(r){const i=Mf(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Mf(n){const{_tokenResponse:e}=n instanceof De?n.customData:n;if(!e)return null;if(!(n instanceof De)&&"temporaryProof"in e&&"phoneNumber"in e)return Tn.credentialFromResult(n);const t=e.providerId;if(!t||t===Br.PASSWORD)return null;let r;switch(t){case Br.GOOGLE:r=Xe;break;case Br.FACEBOOK:r=Je;break;case Br.GITHUB:r=Ze;break;case Br.TWITTER:r=et;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?lr._create(t,a):lt._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new rr(t).credential({idToken:i,accessToken:s,rawNonce:c})}return n instanceof De?r.credentialFromError(n):r.credentialFromResult(n)}function Oe(n,e){return e.catch(t=>{throw t instanceof De&&$E(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:qE(t),additionalUserInfo:Av(t),user:bo.getOrCreate(i)}})}async function $a(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Oe(n,t.confirm(r))}}class jE{constructor(e,t){this.resolver=t,this.auth=BE(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Oe(Lf(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo=class Xr{constructor(e){this._delegate=e,this.multiFactor=Cv(e)}static getOrCreate(e){return Xr.USER_MAP.has(e)||Xr.USER_MAP.set(e,new Xr(e)),Xr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Oe(this.auth,hf(this._delegate,e))}async linkWithPhoneNumber(e,t){return $a(this.auth,ow(this._delegate,e,t))}async linkWithPopup(e){return Oe(this.auth,pw(this._delegate,e,Nt))}async linkWithRedirect(e){return await qa(te(this.auth)),Aw(this._delegate,e,Nt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Oe(this.auth,df(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return $a(this.auth,aw(this._delegate,e,t))}reauthenticateWithPopup(e){return Oe(this.auth,mw(this._delegate,e,Nt))}async reauthenticateWithRedirect(e){return await qa(te(this.auth)),Ew(this._delegate,e,Nt)}sendEmailVerification(e){return fv(this._delegate,e)}async unlink(e){return await ZI(this._delegate,e),this}updateEmail(e){return _v(this._delegate,e)}updatePassword(e){return yv(this._delegate,e)}updatePhoneNumber(e){return cw(this._delegate,e)}updateProfile(e){return gv(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return mv(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};bo.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=y;class ja{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;$r(r,"invalid-api-key",{appName:e.name}),$r(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Nt:void 0;this._delegate=t.initialize({options:{persistence:GE(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(Gy),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?bo.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){CI(this._delegate,e,t)}applyActionCode(e){return iv(this._delegate,e)}checkActionCode(e){return ff(this._delegate,e)}confirmPasswordReset(e,t){return rv(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Oe(this._delegate,ov(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return dv(this._delegate,e)}isSignInWithEmailLink(e){return uv(this._delegate,e)}async getRedirectResult(){$r(va(),this._delegate,"operation-not-supported-in-this-environment");const e=await Pw(this._delegate,Nt);return e?Oe(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){PE(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=Xl(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=Xl(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return cv(this._delegate,e,t)}sendPasswordResetEmail(e,t){return nv(this._delegate,e,t||void 0)}async setPersistence(e){ME(this._delegate,e);let t;switch(e){case Be.SESSION:t=En;break;case Be.LOCAL:t=await qe(Ti)._isAvailable()?Ti:Gc;break;case Be.NONE:t=ur;break;default:return Ae("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Oe(this._delegate,XI(this._delegate))}signInWithCredential(e){return Oe(this._delegate,wo(this._delegate,e))}signInWithCustomToken(e){return Oe(this._delegate,tv(this._delegate,e))}signInWithEmailAndPassword(e,t){return Oe(this._delegate,av(this._delegate,e,t))}signInWithEmailLink(e,t){return Oe(this._delegate,lv(this._delegate,e,t))}signInWithPhoneNumber(e,t){return $a(this._delegate,sw(this._delegate,e,t))}async signInWithPopup(e){return $r(va(),this._delegate,"operation-not-supported-in-this-environment"),Oe(this._delegate,fw(this._delegate,e,Nt))}async signInWithRedirect(e){return $r(va(),this._delegate,"operation-not-supported-in-this-environment"),await qa(this._delegate),vw(this._delegate,e,Nt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return sv(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}ja.Persistence=Be;function Xl(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&bo.getOrCreate(o)),error:e,complete:t}}function GE(n,e){const t=FE(n,e);if(typeof self<"u"&&!t.includes(Ti)&&t.push(Ti),typeof window<"u")for(const r of[Gc,En])t.includes(r)||t.push(r);return t.includes(ur)||t.push(ur),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(){this.providerId="phone",this._delegate=new Tn(Lf(On.auth()))}static credential(e,t){return Tn.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Xc.PHONE_SIGN_IN_METHOD=Tn.PHONE_SIGN_IN_METHOD;Xc.PROVIDER_ID=Tn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=y;class WE{constructor(e,t,r=On.app()){var i;zE((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new rw(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE="auth-compat";function HE(n){n.INTERNAL.registerComponent(new ut(KE,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new ja(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:jn.EMAIL_SIGNIN,PASSWORD_RESET:jn.PASSWORD_RESET,RECOVER_EMAIL:jn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:jn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:jn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:jn.VERIFY_EMAIL}},EmailAuthProvider:Yt,FacebookAuthProvider:Je,GithubAuthProvider:Ze,GoogleAuthProvider:Xe,OAuthProvider:rr,SAMLAuthProvider:Ws,PhoneAuthProvider:Xc,PhoneMultiFactorGenerator:kf,RecaptchaVerifier:WE,TwitterAuthProvider:et,Auth:ja,AuthCredential:br,Error:De}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(bE,SE)}HE(On);var QE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,Zc=Zc||{},C=QE||self;function So(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Ji(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function YE(n){return Object.prototype.hasOwnProperty.call(n,wa)&&n[wa]||(n[wa]=++JE)}var wa="closure_uid_"+(1e9*Math.random()>>>0),JE=0;function XE(n,e,t){return n.call.apply(n.bind,arguments)}function ZE(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Pe(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pe=XE:Pe=ZE,Pe.apply(null,arguments)}function vs(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function ge(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Jt(){this.s=this.s,this.o=this.o}var eT=0;Jt.prototype.s=!1;Jt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),eT!=0)&&YE(this)};Jt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ff=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function eu(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function Zl(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(So(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function be(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var tT=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const t=()=>{};C.addEventListener("test",t,e),C.removeEventListener("test",t,e)}catch{}return n}();function Ai(n){return/^[\s\xa0]*$/.test(n)}function Co(){var n=C.navigator;return n&&(n=n.userAgent)?n:""}function tt(n){return Co().indexOf(n)!=-1}function tu(n){return tu[" "](n),n}tu[" "]=function(){};function nT(n,e){var t=HT;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var rT=tt("Opera"),hr=tt("Trident")||tt("MSIE"),Uf=tt("Edge"),Ga=Uf||hr,Bf=tt("Gecko")&&!(Co().toLowerCase().indexOf("webkit")!=-1&&!tt("Edge"))&&!(tt("Trident")||tt("MSIE"))&&!tt("Edge"),iT=Co().toLowerCase().indexOf("webkit")!=-1&&!tt("Edge");function qf(){var n=C.document;return n?n.documentMode:void 0}var za;e:{var Ea="",Ta=function(){var n=Co();if(Bf)return/rv:([^\);]+)(\)|;)/.exec(n);if(Uf)return/Edge\/([\d\.]+)/.exec(n);if(hr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(iT)return/WebKit\/(\S+)/.exec(n);if(rT)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Ta&&(Ea=Ta?Ta[1]:""),hr){var Aa=qf();if(Aa!=null&&Aa>parseFloat(Ea)){za=String(Aa);break e}}za=Ea}var Wa;if(C.document&&hr){var eh=qf();Wa=eh||parseInt(za,10)||void 0}else Wa=void 0;var sT=Wa;function Ri(n,e){if(be.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Bf){e:{try{tu(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:oT[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Ri.$.h.call(this)}}ge(Ri,be);var oT={2:"touch",3:"pen",4:"mouse"};Ri.prototype.h=function(){Ri.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Xi="closure_listenable_"+(1e6*Math.random()|0),aT=0;function cT(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++aT,this.fa=this.ia=!1}function ko(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function nu(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function uT(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function $f(n){const e={};for(const t in n)e[t]=n[t];return e}const th="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jf(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<th.length;s++)t=th[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function Do(n){this.src=n,this.g={},this.h=0}Do.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Ha(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new cT(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function Ka(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=Ff(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ko(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Ha(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var ru="closure_lm_"+(1e6*Math.random()|0),Ra={};function Gf(n,e,t,r,i){if(r&&r.once)return Wf(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Gf(n,e[s],t,r,i);return null}return t=ou(t),n&&n[Xi]?n.O(e,t,Ji(r)?!!r.capture:!!r,i):zf(n,e,t,!1,r,i)}function zf(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=Ji(i)?!!i.capture:!!i,a=su(n);if(a||(n[ru]=a=new Do(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=lT(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)tT||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(Hf(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function lT(){function n(t){return e.call(n.src,n.listener,t)}const e=hT;return n}function Wf(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Wf(n,e[s],t,r,i);return null}return t=ou(t),n&&n[Xi]?n.P(e,t,Ji(r)?!!r.capture:!!r,i):zf(n,e,t,!0,r,i)}function Kf(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Kf(n,e[s],t,r,i);else r=Ji(r)?!!r.capture:!!r,t=ou(t),n&&n[Xi]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=Ha(s,t,r,i),-1<t&&(ko(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=su(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Ha(e,t,r,i)),(t=-1<n?e[n]:null)&&iu(t))}function iu(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Xi])Ka(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Hf(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=su(e))?(Ka(t,n),t.h==0&&(t.src=null,e[ru]=null)):ko(n)}}}function Hf(n){return n in Ra?Ra[n]:Ra[n]="on"+n}function hT(n,e){if(n.fa)n=!0;else{e=new Ri(e,this);var t=n.listener,r=n.la||n.src;n.ia&&iu(n),n=t.call(r,e)}return n}function su(n){return n=n[ru],n instanceof Do?n:null}var Pa="__closure_events_fn_"+(1e9*Math.random()>>>0);function ou(n){return typeof n=="function"?n:(n[Pa]||(n[Pa]=function(e){return n.handleEvent(e)}),n[Pa])}function pe(){Jt.call(this),this.i=new Do(this),this.S=this,this.J=null}ge(pe,Jt);pe.prototype[Xi]=!0;pe.prototype.removeEventListener=function(n,e,t,r){Kf(this,n,e,t,r)};function Te(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new be(e,n);else if(e instanceof be)e.target=e.target||n;else{var i=e;e=new be(r,n),jf(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=ws(o,r,!0,e)&&i}if(o=e.g=n,i=ws(o,r,!0,e)&&i,i=ws(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=ws(o,r,!1,e)&&i}pe.prototype.N=function(){if(pe.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)ko(t[r]);delete n.g[e],n.h--}}this.J=null};pe.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};pe.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function ws(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&Ka(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var au=C.JSON.stringify;class dT{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function fT(){var n=cu;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class mT{constructor(){this.h=this.g=null}add(e,t){const r=Qf.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Qf=new dT(()=>new pT,n=>n.reset());class pT{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function gT(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function _T(n){C.setTimeout(()=>{throw n},0)}let Pi,bi=!1,cu=new mT,Yf=()=>{const n=C.Promise.resolve(void 0);Pi=()=>{n.then(yT)}};var yT=()=>{for(var n;n=fT();){try{n.h.call(n.g)}catch(t){_T(t)}var e=Qf;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}bi=!1};function Vo(n,e){pe.call(this),this.h=n||1,this.g=e||C,this.j=Pe(this.qb,this),this.l=Date.now()}ge(Vo,pe);A=Vo.prototype;A.ga=!1;A.T=null;A.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Te(this,"tick"),this.ga&&(uu(this),this.start()))}};A.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function uu(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}A.N=function(){Vo.$.N.call(this),uu(this),delete this.g};function lu(n,e,t){if(typeof n=="function")t&&(n=Pe(n,t));else if(n&&typeof n.handleEvent=="function")n=Pe(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:C.setTimeout(n,e||0)}function Jf(n){n.g=lu(()=>{n.g=null,n.i&&(n.i=!1,Jf(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class IT extends Jt{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Jf(this)}N(){super.N(),this.g&&(C.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Si(n){Jt.call(this),this.h=n,this.g={}}ge(Si,Jt);var nh=[];function Xf(n,e,t,r){Array.isArray(t)||(t&&(nh[0]=t.toString()),t=nh);for(var i=0;i<t.length;i++){var s=Gf(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Zf(n){nu(n.g,function(e,t){this.g.hasOwnProperty(t)&&iu(e)},n),n.g={}}Si.prototype.N=function(){Si.$.N.call(this),Zf(this)};Si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function No(){this.g=!0}No.prototype.Ea=function(){this.g=!1};function vT(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function wT(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function tr(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+TT(n,t)+(r?" "+r:"")})}function ET(n,e){n.info(function(){return"TIMEOUT: "+e})}No.prototype.info=function(){};function TT(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return au(t)}catch{return e}}var Mn={},rh=null;function xo(){return rh=rh||new pe}Mn.Ta="serverreachability";function em(n){be.call(this,Mn.Ta,n)}ge(em,be);function Ci(n){const e=xo();Te(e,new em(e))}Mn.STAT_EVENT="statevent";function tm(n,e){be.call(this,Mn.STAT_EVENT,n),this.stat=e}ge(tm,be);function ke(n){const e=xo();Te(e,new tm(e,n))}Mn.Ua="timingevent";function nm(n,e){be.call(this,Mn.Ua,n),this.size=e}ge(nm,be);function Zi(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return C.setTimeout(function(){n()},e)}var Oo={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},rm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function hu(){}hu.prototype.h=null;function ih(n){return n.h||(n.h=n.i())}function im(){}var es={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function du(){be.call(this,"d")}ge(du,be);function fu(){be.call(this,"c")}ge(fu,be);var Qa;function Lo(){}ge(Lo,hu);Lo.prototype.g=function(){return new XMLHttpRequest};Lo.prototype.i=function(){return{}};Qa=new Lo;function ts(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new Si(this),this.P=AT,n=Ga?125:void 0,this.V=new Vo(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new sm}function sm(){this.i=null,this.g="",this.h=!1}var AT=45e3,om={},Ya={};A=ts.prototype;A.setTimeout=function(n){this.P=n};function Ja(n,e,t){n.L=1,n.A=Fo(It(e)),n.u=t,n.S=!0,am(n,null)}function am(n,e){n.G=Date.now(),ns(n),n.B=It(n.A);var t=n.B,r=n.W;Array.isArray(r)||(r=[String(r)]),pm(t.i,"t",r),n.o=0,t=n.l.J,n.h=new sm,n.g=Lm(n.l,t?e:null,!n.u),0<n.O&&(n.M=new IT(Pe(n.Pa,n,n.g),n.O)),Xf(n.U,n.g,"readystatechange",n.nb),e=n.I?$f(n.I):{},n.u?(n.v||(n.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,e)):(n.v="GET",n.g.ha(n.B,n.v,null,e)),Ci(),vT(n.j,n.v,n.B,n.m,n.W,n.u)}A.nb=function(n){n=n.target;const e=this.M;e&&rt(n)==3?e.l():this.Pa(n)};A.Pa=function(n){try{if(n==this.g)e:{const l=rt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Ga||this.g&&(this.h.h||this.g.ja()||ch(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?Ci(3):Ci(2)),Mo(this);var t=this.g.da();this.ca=t;t:if(cm(this)){var r=ch(this.g);n="";var i=r.length,s=rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fn(this),ai(this);var o="";break t}this.h.i=new C.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,wT(this.j,this.v,this.B,this.m,this.W,l,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ai(a)){var u=a;break t}}u=null}if(t=u)tr(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xa(this,t);else{this.i=!1,this.s=3,ke(12),fn(this),ai(this);break e}}this.S?(um(this,l,o),Ga&&this.i&&l==3&&(Xf(this.U,this.V,"tick",this.mb),this.V.start())):(tr(this.j,this.m,o,null),Xa(this,o)),l==4&&fn(this),this.i&&!this.J&&(l==4?Vm(this.l,this):(this.i=!1,ns(this)))}else zT(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),fn(this),ai(this)}}}catch{}finally{}};function cm(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function um(n,e,t){let r=!0,i;for(;!n.J&&n.o<t.length;)if(i=RT(n,t),i==Ya){e==4&&(n.s=4,ke(14),r=!1),tr(n.j,n.m,null,"[Incomplete Response]");break}else if(i==om){n.s=4,ke(15),tr(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else tr(n.j,n.m,i,null),Xa(n,i);cm(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),e!=4||t.length!=0||n.h.h||(n.s=1,ke(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),Iu(e),e.M=!0,ke(11))):(tr(n.j,n.m,t,"[Invalid Chunked Response]"),fn(n),ai(n))}A.mb=function(){if(this.g){var n=rt(this.g),e=this.g.ja();this.o<e.length&&(Mo(this),um(this,n,e),this.i&&n!=4&&ns(this))}};function RT(n,e){var t=n.o,r=e.indexOf(`
`,t);return r==-1?Ya:(t=Number(e.substring(t,r)),isNaN(t)?om:(r+=1,r+t>e.length?Ya:(e=e.slice(r,r+t),n.o=r+t,e)))}A.cancel=function(){this.J=!0,fn(this)};function ns(n){n.Y=Date.now()+n.P,lm(n,n.P)}function lm(n,e){if(n.C!=null)throw Error("WatchDog timer not null");n.C=Zi(Pe(n.lb,n),e)}function Mo(n){n.C&&(C.clearTimeout(n.C),n.C=null)}A.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(ET(this.j,this.B),this.L!=2&&(Ci(),ke(17)),fn(this),this.s=2,ai(this)):lm(this,this.Y-n)};function ai(n){n.l.H==0||n.J||Vm(n.l,n)}function fn(n){Mo(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,uu(n.V),Zf(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function Xa(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Za(t.i,n))){if(!n.K&&Za(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Xs(t),$o(t);else break e;yu(t),ke(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=Zi(Pe(t.ib,t),6e3));if(1>=ym(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else mn(t,11)}else if((n.K||t.g==n)&&Xs(t),!Ai(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.K=u[1],t.pa=u[2];const l=u[3];l!=null&&(t.ra=l,t.l.info("VER="+t.ra));const h=u[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const m=n.g;if(m){const w=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.i;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(mu(s,s.h),s.h=null))}if(r.F){const E=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,W(r.I,r.F,E))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=Om(r,r.J?r.pa:null,r.Y),o.K){Im(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Mo(a),ns(a)),r.g=o}else km(r);0<t.j.length&&jo(t)}else u[0]!="stop"&&u[0]!="close"||mn(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?mn(t,7):_u(t):u[0]!="noop"&&t.h&&t.h.Aa(u),t.A=0)}}Ci(4)}catch{}}function PT(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(So(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function bT(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(So(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function hm(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(So(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=bT(n),r=PT(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var dm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ST(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function vn(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof vn){this.h=n.h,Ys(this,n.j),this.s=n.s,this.g=n.g,Js(this,n.m),this.l=n.l;var e=n.i,t=new ki;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),sh(this,t),this.o=n.o}else n&&(e=String(n).match(dm))?(this.h=!1,Ys(this,e[1]||"",!0),this.s=Zr(e[2]||""),this.g=Zr(e[3]||"",!0),Js(this,e[4]),this.l=Zr(e[5]||"",!0),sh(this,e[6]||"",!0),this.o=Zr(e[7]||"")):(this.h=!1,this.i=new ki(null,this.h))}vn.prototype.toString=function(){var n=[],e=this.j;e&&n.push(ei(e,oh,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(ei(e,oh,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(ei(t,t.charAt(0)=="/"?DT:kT,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",ei(t,NT)),n.join("")};function It(n){return new vn(n)}function Ys(n,e,t){n.j=t?Zr(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Js(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function sh(n,e,t){e instanceof ki?(n.i=e,xT(n.i,n.h)):(t||(e=ei(e,VT)),n.i=new ki(e,n.h))}function W(n,e,t){n.i.set(e,t)}function Fo(n){return W(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Zr(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function ei(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,CT),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function CT(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var oh=/[#\/\?@]/g,kT=/[#\?:]/g,DT=/[#\?]/g,VT=/[#\?@]/g,NT=/#/g;function ki(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Xt(n){n.g||(n.g=new Map,n.h=0,n.i&&ST(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}A=ki.prototype;A.add=function(n,e){Xt(this),this.i=null,n=Cr(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function fm(n,e){Xt(n),e=Cr(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function mm(n,e){return Xt(n),e=Cr(n,e),n.g.has(e)}A.forEach=function(n,e){Xt(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};A.ta=function(){Xt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};A.Z=function(n){Xt(this);let e=[];if(typeof n=="string")mm(this,n)&&(e=e.concat(this.g.get(Cr(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};A.set=function(n,e){return Xt(this),this.i=null,n=Cr(this,n),mm(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};A.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function pm(n,e,t){fm(n,e),0<t.length&&(n.i=null,n.g.set(Cr(n,e),eu(t)),n.h+=t.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Cr(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function xT(n,e){e&&!n.j&&(Xt(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(fm(this,r),pm(this,i,t))},n)),n.j=e}var OT=class{constructor(n,e){this.g=n,this.map=e}};function gm(n){this.l=n||LT,C.PerformanceNavigationTiming?(n=C.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(C.g&&C.g.Ka&&C.g.Ka()&&C.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var LT=10;function _m(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function ym(n){return n.h?1:n.g?n.g.size:0}function Za(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function mu(n,e){n.g?n.g.add(e):n.h=e}function Im(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}gm.prototype.cancel=function(){if(this.i=vm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function vm(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return eu(n.i)}var MT=class{stringify(n){return C.JSON.stringify(n,void 0)}parse(n){return C.JSON.parse(n,void 0)}};function FT(){this.g=new MT}function UT(n,e,t){const r=t||"";try{hm(n,function(i,s){let o=i;Ji(i)&&(o=au(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function BT(n,e){const t=new No;if(C.Image){const r=new Image;r.onload=vs(Es,t,r,"TestLoadImage: loaded",!0,e),r.onerror=vs(Es,t,r,"TestLoadImage: error",!1,e),r.onabort=vs(Es,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=vs(Es,t,r,"TestLoadImage: timeout",!1,e),C.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function Es(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Uo(n){this.l=n.ec||null,this.j=n.ob||!1}ge(Uo,hu);Uo.prototype.g=function(){return new Bo(this.l,this.j)};Uo.prototype.i=function(n){return function(){return n}}({});function Bo(n,e){pe.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=pu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ge(Bo,pe);var pu=0;A=Bo.prototype;A.open=function(n,e){if(this.readyState!=pu)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Di(this)};A.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||C).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rs(this)),this.readyState=pu};A.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Di(this)),this.g&&(this.readyState=3,Di(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof C.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wm(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function wm(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}A.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?rs(this):Di(this),this.readyState==3&&wm(this)}};A.Za=function(n){this.g&&(this.response=this.responseText=n,rs(this))};A.Ya=function(n){this.g&&(this.response=n,rs(this))};A.ka=function(){this.g&&rs(this)};function rs(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Di(n)}A.setRequestHeader=function(n,e){this.v.append(n,e)};A.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Di(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Bo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var qT=C.JSON.parse;function ne(n){pe.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Em,this.L=this.M=!1}ge(ne,pe);var Em="",$T=/^https?$/i,jT=["POST","PUT"];A=ne.prototype;A.Oa=function(n){this.M=n};A.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Qa.g(),this.C=this.u?ih(this.u):ih(Qa),this.g.onreadystatechange=Pe(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){ah(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=C.FormData&&n instanceof C.FormData,!(0<=Ff(jT,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Rm(this),0<this.B&&((this.L=GT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pe(this.ua,this)):this.A=lu(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){ah(this,s)}};function GT(n){return hr&&typeof n.timeout=="number"&&n.ontimeout!==void 0}A.ua=function(){typeof Zc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Te(this,"timeout"),this.abort(8))};function ah(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Tm(n),qo(n)}function Tm(n){n.F||(n.F=!0,Te(n,"complete"),Te(n,"error"))}A.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Te(this,"complete"),Te(this,"abort"),qo(this))};A.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qo(this,!0)),ne.$.N.call(this)};A.La=function(){this.s||(this.G||this.v||this.l?Am(this):this.kb())};A.kb=function(){Am(this)};function Am(n){if(n.h&&typeof Zc<"u"&&(!n.C[1]||rt(n)!=4||n.da()!=2)){if(n.v&&rt(n)==4)lu(n.La,0,n);else if(Te(n,"readystatechange"),rt(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(dm)[1]||null;!i&&C.self&&C.self.location&&(i=C.self.location.protocol.slice(0,-1)),r=!$T.test(i?i.toLowerCase():"")}t=r}if(t)Te(n,"complete"),Te(n,"success");else{n.m=6;try{var s=2<rt(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Tm(n)}}finally{qo(n)}}}}function qo(n,e){if(n.g){Rm(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||Te(n,"ready");try{t.onreadystatechange=r}catch{}}}function Rm(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(C.clearTimeout(n.A),n.A=null)}A.isActive=function(){return!!this.g};function rt(n){return n.g?n.g.readyState:0}A.da=function(){try{return 2<rt(this)?this.g.status:-1}catch{return-1}};A.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),qT(e)}};function ch(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Em:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function zT(n){const e={};n=(n.g&&2<=rt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Ai(n[r]))continue;var t=gT(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}uT(e,function(r){return r.join(", ")})}A.Ia=function(){return this.m};A.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Pm(n){let e="";return nu(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function gu(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Pm(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):W(n,e,t))}function jr(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function bm(n){this.Ga=0,this.j=[],this.l=new No,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=jr("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=jr("baseRetryDelayMs",5e3,n),this.hb=jr("retryDelaySeedMs",1e4,n),this.eb=jr("forwardChannelMaxRetries",2,n),this.xa=jr("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new gm(n&&n.concurrentRequestLimit),this.Ja=new FT,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}A=bm.prototype;A.ra=8;A.H=1;function _u(n){if(Sm(n),n.H==3){var e=n.W++,t=It(n.I);if(W(t,"SID",n.K),W(t,"RID",e),W(t,"TYPE","terminate"),is(n,t),e=new ts(n,n.l,e),e.L=2,e.A=Fo(It(t)),t=!1,C.navigator&&C.navigator.sendBeacon)try{t=C.navigator.sendBeacon(e.A.toString(),"")}catch{}!t&&C.Image&&(new Image().src=e.A,t=!0),t||(e.g=Lm(e.l,null),e.g.ha(e.A)),e.G=Date.now(),ns(e)}xm(n)}function $o(n){n.g&&(Iu(n),n.g.cancel(),n.g=null)}function Sm(n){$o(n),n.u&&(C.clearTimeout(n.u),n.u=null),Xs(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&C.clearTimeout(n.m),n.m=null)}function jo(n){if(!_m(n.i)&&!n.m){n.m=!0;var e=n.Na;Pi||Yf(),bi||(Pi(),bi=!0),cu.add(e,n),n.C=0}}function WT(n,e){return ym(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Zi(Pe(n.Na,n,e),Nm(n,n.C)),n.C++,!0)}A.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new ts(this,this.l,n);let s=this.s;if(this.U&&(s?(s=$f(s),jf(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Cm(this,i,e),t=It(this.I),W(t,"RID",n),W(t,"CVER",22),this.F&&W(t,"X-HTTP-Session-Id",this.F),is(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(Pm(s)))+"&"+e:this.o&&gu(t,this.o,s)),mu(this.i,i),this.bb&&W(t,"TYPE","init"),this.P?(W(t,"$req",e),W(t,"SID","null"),i.aa=!0,Ja(i,t,null)):Ja(i,t,e),this.H=2}}else this.H==3&&(n?uh(this,n):this.j.length==0||_m(this.i)||uh(this))};function uh(n,e){var t;e?t=e.m:t=n.W++;const r=It(n.I);W(r,"SID",n.K),W(r,"RID",t),W(r,"AID",n.V),is(n,r),n.o&&n.s&&gu(r,n.o,n.s),t=new ts(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=Cm(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),mu(n.i,t),Ja(t,r,e)}function is(n,e){n.na&&nu(n.na,function(t,r){W(e,r,t)}),n.h&&hm({},function(t,r){W(e,r,t)})}function Cm(n,e,t){t=Math.min(n.j.length,t);var r=n.h?Pe(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{UT(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function km(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Pi||Yf(),bi||(Pi(),bi=!0),cu.add(e,n),n.A=0}}function yu(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Zi(Pe(n.Ma,n),Nm(n,n.A)),n.A++,!0)}A.Ma=function(){if(this.u=null,Dm(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Zi(Pe(this.jb,this),n)}};A.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ke(10),$o(this),Dm(this))};function Iu(n){n.B!=null&&(C.clearTimeout(n.B),n.B=null)}function Dm(n){n.g=new ts(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=It(n.wa);W(e,"RID","rpc"),W(e,"SID",n.K),W(e,"AID",n.V),W(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&W(e,"TO",n.qa),W(e,"TYPE","xmlhttp"),is(n,e),n.o&&n.s&&gu(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.A=Fo(It(e)),t.u=null,t.S=!0,am(t,n)}A.ib=function(){this.v!=null&&(this.v=null,$o(this),yu(this),ke(19))};function Xs(n){n.v!=null&&(C.clearTimeout(n.v),n.v=null)}function Vm(n,e){var t=null;if(n.g==e){Xs(n),Iu(n),n.g=null;var r=2}else if(Za(n.i,e))t=e.F,Im(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.u?e.u.length:0,e=Date.now()-e.G;var i=n.C;r=xo(),Te(r,new nm(r,t)),jo(n)}else km(n);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&WT(n,e)||r==2&&yu(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:mn(n,5);break;case 4:mn(n,10);break;case 3:mn(n,6);break;default:mn(n,2)}}}function Nm(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function mn(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=Pe(n.pb,n);t||(t=new vn("//www.google.com/images/cleardot.gif"),C.location&&C.location.protocol=="http"||Ys(t,"https"),Fo(t)),BT(t.toString(),r)}else ke(2);n.H=0,n.h&&n.h.za(e),xm(n),Sm(n)}A.pb=function(n){n?(this.l.info("Successfully pinged google.com"),ke(2)):(this.l.info("Failed to ping google.com"),ke(1))};function xm(n){if(n.H=0,n.ma=[],n.h){const e=vm(n.i);(e.length!=0||n.j.length!=0)&&(Zl(n.ma,e),Zl(n.ma,n.j),n.i.i.length=0,eu(n.j),n.j.length=0),n.h.ya()}}function Om(n,e,t){var r=t instanceof vn?It(t):new vn(t);if(r.g!="")e&&(r.g=e+"."+r.g),Js(r,r.m);else{var i=C.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new vn(null);r&&Ys(s,r),e&&(s.g=e),i&&Js(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&W(r,t,e),W(r,"VER",n.ra),is(n,r),r}function Lm(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n.Ha&&!n.va?new ne(new Uo({ob:t})):new ne(n.va),e.Oa(n.J),e}A.isActive=function(){return!!this.h&&this.h.isActive(this)};function Mm(){}A=Mm.prototype;A.Ba=function(){};A.Aa=function(){};A.za=function(){};A.ya=function(){};A.isActive=function(){return!0};A.Va=function(){};function Zs(){if(hr&&!(10<=Number(sT)))throw Error("Environmental error: no available transport.")}Zs.prototype.g=function(n,e){return new $e(n,e)};function $e(n,e){pe.call(this),this.g=new bm(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Ai(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ai(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new kr(this)}ge($e,pe);$e.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;ke(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=Om(n,null,n.Y),jo(n)};$e.prototype.close=function(){_u(this.g)};$e.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=au(n),n=t);e.j.push(new OT(e.fb++,n)),e.H==3&&jo(e)};$e.prototype.N=function(){this.g.h=null,delete this.j,_u(this.g),delete this.g,$e.$.N.call(this)};function Fm(n){du.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ge(Fm,du);function Um(){fu.call(this),this.status=1}ge(Um,fu);function kr(n){this.g=n}ge(kr,Mm);kr.prototype.Ba=function(){Te(this.g,"a")};kr.prototype.Aa=function(n){Te(this.g,new Fm(n))};kr.prototype.za=function(n){Te(this.g,new Um)};kr.prototype.ya=function(){Te(this.g,"b")};function KT(){this.blockSize=-1}function Qe(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ge(Qe,KT);Qe.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ba(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}Qe.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)ba(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){ba(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){ba(this,r),i=0;break}}this.h=i,this.i+=e};Qe.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function q(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var HT={};function vu(n){return-128<=n&&128>n?nT(n,function(e){return new q([e|0],0>e?-1:0)}):new q([n|0],0>n?-1:0)}function it(n){if(isNaN(n)||!isFinite(n))return sr;if(0>n)return ve(it(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=ec;return new q(e,0)}function Bm(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return ve(Bm(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=it(Math.pow(e,8)),r=sr,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=it(Math.pow(e,s)),r=r.R(s).add(it(o))):(r=r.R(t),r=r.add(it(o)))}return r}var ec=4294967296,sr=vu(0),tc=vu(1),lh=vu(16777216);A=q.prototype;A.ea=function(){if(Ge(this))return-ve(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:ec+r)*e,e*=ec}return n};A.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(mt(this))return"0";if(Ge(this))return"-"+ve(this).toString(n);for(var e=it(Math.pow(n,6)),t=this,r="";;){var i=to(t,e).g;t=eo(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,mt(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};A.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function mt(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Ge(n){return n.h==-1}A.X=function(n){return n=eo(this,n),Ge(n)?-1:mt(n)?0:1};function ve(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new q(t,~n.h).add(tc)}A.abs=function(){return Ge(this)?ve(this):this};A.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new q(t,t[t.length-1]&-2147483648?-1:0)};function eo(n,e){return n.add(ve(e))}A.R=function(n){if(mt(this)||mt(n))return sr;if(Ge(this))return Ge(n)?ve(this).R(ve(n)):ve(ve(this).R(n));if(Ge(n))return ve(this.R(ve(n)));if(0>this.X(lh)&&0>n.X(lh))return it(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,Ts(t,2*r+2*i),t[2*r+2*i+1]+=s*c,Ts(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,Ts(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,Ts(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new q(t,0)};function Ts(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function Gr(n,e){this.g=n,this.h=e}function to(n,e){if(mt(e))throw Error("division by zero");if(mt(n))return new Gr(sr,sr);if(Ge(n))return e=to(ve(n),e),new Gr(ve(e.g),ve(e.h));if(Ge(e))return e=to(n,ve(e)),new Gr(ve(e.g),e.h);if(30<n.g.length){if(Ge(n)||Ge(e))throw Error("slowDivide_ only works with positive integers.");for(var t=tc,r=e;0>=r.X(n);)t=hh(t),r=hh(r);var i=Gn(t,1),s=Gn(r,1);for(r=Gn(r,2),t=Gn(t,2);!mt(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=Gn(r,1),t=Gn(t,1)}return e=eo(n,i.R(e)),new Gr(i,e)}for(i=sr;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=it(t),o=s.R(e);Ge(o)||0<o.X(n);)t-=r,s=it(t),o=s.R(e);mt(s)&&(s=tc),i=i.add(s),n=eo(n,o)}return new Gr(i,n)}A.gb=function(n){return to(this,n).h};A.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new q(t,this.h&n.h)};A.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new q(t,this.h|n.h)};A.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new q(t,this.h^n.h)};function hh(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new q(t,n.h)}function Gn(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new q(i,n.h)}Zs.prototype.createWebChannel=Zs.prototype.g;$e.prototype.send=$e.prototype.u;$e.prototype.open=$e.prototype.m;$e.prototype.close=$e.prototype.close;Oo.NO_ERROR=0;Oo.TIMEOUT=8;Oo.HTTP_ERROR=6;rm.COMPLETE="complete";im.EventType=es;es.OPEN="a";es.CLOSE="b";es.ERROR="c";es.MESSAGE="d";pe.prototype.listen=pe.prototype.O;ne.prototype.listenOnce=ne.prototype.P;ne.prototype.getLastError=ne.prototype.Sa;ne.prototype.getLastErrorCode=ne.prototype.Ia;ne.prototype.getStatus=ne.prototype.da;ne.prototype.getResponseJson=ne.prototype.Wa;ne.prototype.getResponseText=ne.prototype.ja;ne.prototype.send=ne.prototype.ha;ne.prototype.setWithCredentials=ne.prototype.Oa;Qe.prototype.digest=Qe.prototype.l;Qe.prototype.reset=Qe.prototype.reset;Qe.prototype.update=Qe.prototype.j;q.prototype.add=q.prototype.add;q.prototype.multiply=q.prototype.R;q.prototype.modulo=q.prototype.gb;q.prototype.compare=q.prototype.X;q.prototype.toNumber=q.prototype.ea;q.prototype.toString=q.prototype.toString;q.prototype.getBits=q.prototype.D;q.fromNumber=it;q.fromString=Bm;var QT=function(){return new Zs},YT=function(){return xo()},Sa=Oo,JT=rm,XT=Mn,dh={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},As=im,ZT=ne,eA=Qe,or=q;const fh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}fe.UNAUTHENTICATED=new fe(null),fe.GOOGLE_CREDENTIALS=new fe("google-credentials-uid"),fe.FIRST_PARTY=new fe("first-party-uid"),fe.MOCK_USER=new fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dr="10.7.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new go("@firebase/firestore");function Qn(){return Bt.logLevel}function tA(n){Bt.setLogLevel(n)}function _(n,...e){if(Bt.logLevel<=x.DEBUG){const t=e.map(wu);Bt.debug(`Firestore (${Dr}): ${n}`,...t)}}function oe(n,...e){if(Bt.logLevel<=x.ERROR){const t=e.map(wu);Bt.error(`Firestore (${Dr}): ${n}`,...t)}}function Ye(n,...e){if(Bt.logLevel<=x.WARN){const t=e.map(wu);Bt.warn(`Firestore (${Dr}): ${n}`,...t)}}function wu(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(n="Unexpected state"){const e=`FIRESTORE (${Dr}) INTERNAL ASSERTION FAILED: `+n;throw oe(e),new Error(e)}function P(n,e){n||R()}function nA(n,e){n||R()}function T(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class g extends De{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(fe.UNAUTHENTICATED))}shutdown(){}}class iA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class sA{constructor(e){this.t=e,this.currentUser=fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new me;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new me,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new me)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(P(typeof r.accessToken=="string"),new qm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return P(e===null||typeof e=="string"),new fe(e)}}class oA{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=fe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class aA{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new oA(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(P(typeof t.token=="string"),this.R=t.token,new cA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=lA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function k(n,e){return n<e?-1:n>e?1:0}function dr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function jm(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new g(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new g(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new g(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new g(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return J.fromMillis(Date.now())}static fromDate(e){return J.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new J(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?k(this.nanoseconds,e.nanoseconds):k(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.timestamp=e}static fromTimestamp(e){return new b(e)}static min(){return new b(new J(0,0))}static max(){return new b(new J(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t,r){t===void 0?t=0:t>e.length&&R(),r===void 0?r=e.length-t:r>e.length-t&&R(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Vi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Vi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class O extends Vi{construct(e,t,r){return new O(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new g(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new O(t)}static emptyPath(){return new O([])}}const hA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Q extends Vi{construct(e,t,r){return new Q(e,t,r)}static isValidIdentifier(e){return hA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Q.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Q(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new g(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new g(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new g(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new g(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Q(t)}static emptyPath(){return new Q([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(O.fromString(e))}static fromName(e){return new I(O.fromString(e).popFirst(5))}static empty(){return new I(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&O.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return O.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new O(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function nc(n){return n.fields.find(e=>e.kind===2)}function on(n){return n.fields.filter(e=>e.kind!==2)}no.UNKNOWN_ID=-1;class xs{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ni{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ni(0,je.min())}}function Gm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=b.fromTimestamp(r===1e9?new J(t+1,0):new J(t,r));return new je(i,I.empty(),e)}function zm(n){return new je(n.readTime,n.key,-1)}class je{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new je(b.min(),I.empty(),-1)}static max(){return new je(b.max(),I.empty(),-1)}}function Eu(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=I.comparator(n.documentKey,e.documentKey),t!==0?t:k(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Km{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==Wm)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&R(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new f((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof f?t:f.resolve(t)}catch(t){return f.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):f.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):f.reject(t)}static resolve(e){return new f((t,r)=>{t(e)})}static reject(e){return new f((t,r)=>{r(e)})}static waitFor(e){return new f((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=f.resolve(!1);for(const r of e)t=t.next(i=>i?f.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new f((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new f((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new me,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new ci(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Tu(r.target.error);this.V.reject(new ci(e,i))}}static open(e,t,r,i){try{return new Go(t,e.transaction(i,r))}catch(s){throw new ci(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(_("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new fA(t)}}class ze{constructor(e,t,r){this.name=e,this.version=t,this.p=r,ze.S(X())===12.2&&oe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return _("SimpleDb","Removing database:",e),an(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!mi())return!1;if(ze.C())return!0;const e=X(),t=ze.S(e),r=0<t&&t<10,i=ze.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new ci(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new g(p.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new g(p.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ci(e,o))},i.onupgradeneeded=s=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Go.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),f.reject(u))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class dA{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return an(this.k.delete())}}class ci extends g{constructor(e,t){super(p.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function en(n){return n.name==="IndexedDbTransactionError"}class fA{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(_("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),an(r)}add(e){return _("SimpleDb","ADD",this.store.name,e,e),an(this.store.add(e))}get(e){return an(this.store.get(e)).next(t=>(t===void 0&&(t=null),_("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return _("SimpleDb","DELETE",this.store.name,e),an(this.store.delete(e))}count(){return _("SimpleDb","COUNT",this.store.name),an(this.store.count())}W(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new f((o,a)=>{s.onerror=c=>{a(c.target.error)},s.onsuccess=c=>{o(c.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,c)=>{o.push(c)}).next(()=>o)}}j(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new f((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,t){_("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.G(i,t)}Z(e){const t=this.cursor({});return new f((r,i)=>{t.onerror=s=>{const o=Tu(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,t){const r=[];return new f((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new dA(a),u=t(a.primaryKey,a.value,c);if(u instanceof f){const l=u.catch(h=>(c.done(),f.reject(h)));r.push(l)}c.isDone?i():c.$===null?a.continue():a.continue(c.$)}}).next(()=>f.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function an(n){return new f((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Tu(r.target.error);t(i)}})}let mh=!1;function Tu(n){const e=ze.S(X());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new g("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return mh||(mh=!0,setTimeout(()=>{throw r},0)),r}}return n}class mA{constructor(e,t){this.asyncQueue=e,this.X=t,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(e){_("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{_("IndexBackfiller",`Documents written: ${await this.X.te()}`)}catch(t){en(t)?_("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Zt(t)}await this.ee(6e4)})}}class pA{constructor(e,t){this.localStore=e,this.persistence=t}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.ne(t,e))}ne(e,t){const r=new Set;let i=t,s=!0;return f.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return _("IndexBackfiller",`Processing collection: ${o}`),this.re(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}re(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ie(i,s)).next(a=>(_("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}ie(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=zm(s);Eu(o,r)>0&&(r=o)}),new je(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.se(r),this.oe=r=>t.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Me._e=-1;function ss(n){return n==null}function xi(n){return n===0&&1/n==-1/0}function Hm(n){return typeof n=="number"&&Number.isInteger(n)&&!xi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ph(e)),e=gA(n.get(t),e);return ph(e)}function gA(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function ph(n){return n+""}function st(n){const e=n.length;if(P(e>=2),e===2)return P(n.charAt(0)===""&&n.charAt(1)===""),O.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&R(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:R()}s=o+2}return new O(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(n,e){return[n,Ve(e)]}function Qm(n,e,t){return[n,Ve(e),t]}const _A={},yA=["prefixPath","collectionGroup","readTime","documentId"],IA=["prefixPath","collectionGroup","documentId"],vA=["collectionGroup","readTime","prefixPath","documentId"],wA=["canonicalId","targetId"],EA=["targetId","path"],TA=["path","targetId"],AA=["collectionId","parent"],RA=["indexId","uid"],PA=["uid","sequenceNumber"],bA=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],SA=["indexId","uid","orderedDocumentKey"],CA=["userId","collectionPath","documentId"],kA=["userId","collectionPath","largestBatchId"],DA=["userId","collectionGroup","largestBatchId"],Ym=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],VA=[...Ym,"documentOverlays"],Jm=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Xm=Jm,NA=[...Xm,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc extends Km{constructor(e,t){super(),this.ae=e,this.currentSequenceNumber=t}}function _e(n,e){const t=T(n);return ze.M(t.ae,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Fn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Zm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,t){this.comparator=e,this.root=t||Ie.EMPTY}insert(e,t){return new G(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new G(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rs(this.root,e,this.comparator,!0)}}class Rs{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ie.RED,this.left=i??Ie.EMPTY,this.right=s??Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ie(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ie.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw R();const e=this.left.check();if(e!==this.right.check())throw R();return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw R()}get value(){throw R()}get color(){throw R()}get left(){throw R()}get right(){throw R()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ie(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.comparator=e,this.data=new G(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new yh(this.data.getIterator())}getIteratorFrom(e){return new yh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof $)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new $(this.comparator);return t.data=e,t}}class yh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function zn(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.fields=e,e.sort(Q.comparator)}static empty(){return new Fe([])}unionWith(e){let t=new $(Q.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Fe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return dr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ep("Invalid base64 string: "+s):s}}(e);return new he(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new he(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return k(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}he.EMPTY_BYTE_STRING=new he("");const OA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qt(n){if(P(!!n),typeof n=="string"){let e=0;const t=OA.exec(n);if(P(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ee(n.seconds),nanos:ee(n.nanos)}}function ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function $t(n){return typeof n=="string"?he.fromBase64String(n):he.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Au(n){const e=n.mapValue.fields.__previous_value__;return zo(e)?Au(e):e}function Oi(n){const e=qt(n.mapValue.fields.__local_write_time__.timestampValue);return new J(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,t,r,i,s,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class jt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new jt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof jt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ls={nullValue:"NULL_VALUE"};function Rn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?zo(n)?4:tp(n)?9007199254740991:10:R()}function ht(n,e){if(n===e)return!0;const t=Rn(n);if(t!==Rn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Oi(n).isEqual(Oi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=qt(i.timestampValue),a=qt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return $t(i.bytesValue).isEqual($t(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ee(i.geoPointValue.latitude)===ee(s.geoPointValue.latitude)&&ee(i.geoPointValue.longitude)===ee(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ee(i.integerValue)===ee(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ee(i.doubleValue),a=ee(s.doubleValue);return o===a?xi(o)===xi(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return dr(n.arrayValue.values||[],e.arrayValue.values||[],ht);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(_h(o)!==_h(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!ht(o[c],a[c])))return!1;return!0}(n,e);default:return R()}}function Li(n,e){return(n.values||[]).find(t=>ht(t,e))!==void 0}function Gt(n,e){if(n===e)return 0;const t=Rn(n),r=Rn(e);if(t!==r)return k(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return k(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ee(s.integerValue||s.doubleValue),c=ee(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return Ih(n.timestampValue,e.timestampValue);case 4:return Ih(Oi(n),Oi(e));case 5:return k(n.stringValue,e.stringValue);case 6:return function(s,o){const a=$t(s),c=$t(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=k(a[u],c[u]);if(l!==0)return l}return k(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=k(ee(s.latitude),ee(o.latitude));return a!==0?a:k(ee(s.longitude),ee(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=Gt(a[u],c[u]);if(l)return l}return k(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===xt.mapValue&&o===xt.mapValue)return 0;if(s===xt.mapValue)return 1;if(o===xt.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=k(c[h],l[h]);if(d!==0)return d;const m=Gt(a[c[h]],u[l[h]]);if(m!==0)return m}return k(c.length,l.length)}(n.mapValue,e.mapValue);default:throw R()}}function Ih(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return k(n,e);const t=qt(n),r=qt(e),i=k(t.seconds,r.seconds);return i!==0?i:k(t.nanos,r.nanos)}function fr(n){return ic(n)}function ic(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=qt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return $t(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return I.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=ic(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ic(t.fields[o])}`;return i+"}"}(n.mapValue):R()}function Pn(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function sc(n){return!!n&&"integerValue"in n}function Mi(n){return!!n&&"arrayValue"in n}function vh(n){return!!n&&"nullValue"in n}function wh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ms(n){return!!n&&"mapValue"in n}function ui(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Fn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ui(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ui(n.arrayValue.values[t]);return e}return Object.assign({},n)}function tp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function MA(n){return"nullValue"in n?Ls:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Pn(jt.empty(),I.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:R()}function FA(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Pn(jt.empty(),I.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?xt:R()}function Eh(n,e){const t=Gt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Th(n,e){const t=Gt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.value=e}static empty(){return new we({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ms(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ui(t)}setAll(e){let t=Q.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=ui(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Ms(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ht(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Ms(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Fn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new we(ui(this.value))}}function np(n){const e=[];return Fn(n.fields,(t,r)=>{const i=new Q([t]);if(Ms(r)){const s=np(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Fe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new K(e,0,b.min(),b.min(),b.min(),we.empty(),0)}static newFoundDocument(e,t,r,i){return new K(e,1,t,b.min(),r,i,0)}static newNoDocument(e,t){return new K(e,2,t,b.min(),b.min(),we.empty(),0)}static newUnknownDocument(e,t){return new K(e,3,t,b.min(),b.min(),we.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(b.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=we.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=we.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof K&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new K(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t){this.position=e,this.inclusive=t}}function Ah(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=I.comparator(I.fromName(o.referenceValue),t.key):r=Gt(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ht(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t="asc"){this.field=e,this.dir=t}}function UA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{}class L extends rp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new BA(e,t,r):t==="array-contains"?new jA(e,r):t==="in"?new up(e,r):t==="not-in"?new GA(e,r):t==="array-contains-any"?new zA(e,r):new L(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new qA(e,r):new $A(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Gt(t,this.value)):t!==null&&Rn(this.value)===Rn(t)&&this.matchesComparison(Gt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return R()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class B extends rp{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new B(e,t)}matches(e){return mr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function mr(n){return n.op==="and"}function oc(n){return n.op==="or"}function Ru(n){return ip(n)&&mr(n)}function ip(n){for(const e of n.filters)if(e instanceof B)return!1;return!0}function ac(n){if(n instanceof L)return n.field.canonicalString()+n.op.toString()+fr(n.value);if(Ru(n))return n.filters.map(e=>ac(e)).join(",");{const e=n.filters.map(t=>ac(t)).join(",");return`${n.op}(${e})`}}function sp(n,e){return n instanceof L?function(r,i){return i instanceof L&&r.op===i.op&&r.field.isEqual(i.field)&&ht(r.value,i.value)}(n,e):n instanceof B?function(r,i){return i instanceof B&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&sp(o,i.filters[a]),!0):!1}(n,e):void R()}function op(n,e){const t=n.filters.concat(e);return B.create(t,n.op)}function ap(n){return n instanceof L?function(t){return`${t.field.canonicalString()} ${t.op} ${fr(t.value)}`}(n):n instanceof B?function(t){return t.op.toString()+" {"+t.getFilters().map(ap).join(" ,")+"}"}(n):"Filter"}class BA extends L{constructor(e,t,r){super(e,t,r),this.key=I.fromName(r.referenceValue)}matches(e){const t=I.comparator(e.key,this.key);return this.matchesComparison(t)}}class qA extends L{constructor(e,t){super(e,"in",t),this.keys=cp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class $A extends L{constructor(e,t){super(e,"not-in",t),this.keys=cp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function cp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>I.fromName(r.referenceValue))}class jA extends L{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Mi(t)&&Li(t.arrayValue,this.value)}}class up extends L{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Li(this.value.arrayValue,t)}}class GA extends L{constructor(e,t){super(e,"not-in",t)}matches(e){if(Li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Li(this.value.arrayValue,t)}}class zA extends L{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Mi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Li(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function cc(n,e=null,t=[],r=[],i=null,s=null,o=null){return new WA(n,e,t,r,i,s,o)}function bn(n){const e=T(n);if(e.ce===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ac(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ss(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>fr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>fr(r)).join(",")),e.ce=t}return e.ce}function os(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!UA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!sp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Rh(n.startAt,e.startAt)&&Rh(n.endAt,e.endAt)}function ro(n){return I.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function io(n,e){return n.filters.filter(t=>t instanceof L&&t.field.isEqual(e))}function Ph(n,e,t){let r=Ls,i=!0;for(const s of io(n,e)){let o=Ls,a=!0;switch(s.op){case"<":case"<=":o=MA(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Ls}Eh({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Eh({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function bh(n,e,t){let r=xt,i=!0;for(const s of io(n,e)){let o=xt,a=!0;switch(s.op){case">=":case">":o=FA(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=xt}Th({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Th({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function lp(n,e,t,r,i,s,o,a){return new Tt(n,e,t,r,i,s,o,a)}function Vr(n){return new Tt(n)}function Sh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Pu(n){return n.collectionGroup!==null}function ar(n){const e=T(n);if(e.le===null){e.le=[];const t=new Set;for(const s of e.explicitOrderBy)e.le.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new $(Q.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.le.push(new Fi(s,r))}),t.has(Q.keyField().canonicalString())||e.le.push(new Fi(Q.keyField(),r))}return e.le}function Ne(n){const e=T(n);return e.he||(e.he=KA(e,ar(n))),e.he}function KA(n,e){if(n.limitType==="F")return cc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Fi(i.field,s)});const t=n.endAt?new zt(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new zt(n.startAt.position,n.startAt.inclusive):null;return cc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function uc(n,e){const t=n.filters.concat([e]);return new Tt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function so(n,e,t){return new Tt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function as(n,e){return os(Ne(n),Ne(e))&&n.limitType===e.limitType}function hp(n){return`${bn(Ne(n))}|lt:${n.limitType}`}function Yn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>ap(i)).join(", ")}]`),ss(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>fr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>fr(i)).join(",")),`Target(${r})`}(Ne(n))}; limitType=${n.limitType})`}function cs(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):I.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of ar(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=Ah(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,ar(r),i)||r.endAt&&!function(o,a,c){const u=Ah(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,ar(r),i))}(n,e)}function dp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function fp(n){return(e,t)=>{let r=!1;for(const i of ar(n)){const s=HA(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function HA(n,e,t){const r=n.field.isKeyField()?I.comparator(e.key,t.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?Gt(c,u):R()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return R()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Fn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Zm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=new G(I.comparator);function Ue(){return QA}const mp=new G(I.comparator);function ti(...n){let e=mp;for(const t of n)e=e.insert(t.key,t);return e}function pp(n){let e=mp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ot(){return li()}function gp(){return li()}function li(){return new tn(n=>n.toString(),(n,e)=>n.isEqual(e))}const YA=new G(I.comparator),JA=new $(I.comparator);function V(...n){let e=JA;for(const t of n)e=e.add(t);return e}const XA=new $(k);function bu(){return XA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xi(e)?"-0":e}}function yp(n){return{integerValue:""+n}}function Ip(n,e){return Hm(e)?yp(e):_p(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this._=void 0}}function ZA(n,e,t){return n instanceof pr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&zo(s)&&(s=Au(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Sn?wp(n,e):n instanceof Cn?Ep(n,e):function(i,s){const o=vp(i,s),a=Ch(o)+Ch(i.Ie);return sc(o)&&sc(i.Ie)?yp(a):_p(i.serializer,a)}(n,e)}function eR(n,e,t){return n instanceof Sn?wp(n,e):n instanceof Cn?Ep(n,e):t}function vp(n,e){return n instanceof gr?function(r){return sc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class pr extends Wo{}class Sn extends Wo{constructor(e){super(),this.elements=e}}function wp(n,e){const t=Tp(e);for(const r of n.elements)t.some(i=>ht(i,r))||t.push(r);return{arrayValue:{values:t}}}class Cn extends Wo{constructor(e){super(),this.elements=e}}function Ep(n,e){let t=Tp(e);for(const r of n.elements)t=t.filter(i=>!ht(i,r));return{arrayValue:{values:t}}}class gr extends Wo{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Ch(n){return ee(n.integerValue||n.doubleValue)}function Tp(n){return Mi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t){this.field=e,this.transform=t}}function tR(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Sn&&i instanceof Sn||r instanceof Cn&&i instanceof Cn?dr(r.elements,i.elements,ht):r instanceof gr&&i instanceof gr?ht(r.Ie,i.Ie):r instanceof pr&&i instanceof pr}(n.transform,e.transform)}class nR{constructor(e,t){this.version=e,this.transformResults=t}}class Y{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Y}static exists(e){return new Y(void 0,e)}static updateTime(e){return new Y(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ko{}function Ap(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new xr(n.key,Y.none()):new Nr(n.key,n.data,Y.none());{const t=n.data,r=we.empty();let i=new $(Q.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new At(n.key,r,new Fe(i.toArray()),Y.none())}}function rR(n,e,t){n instanceof Nr?function(i,s,o){const a=i.value.clone(),c=Dh(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof At?function(i,s,o){if(!Fs(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Dh(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Rp(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function hi(n,e,t,r){return n instanceof Nr?function(s,o,a,c){if(!Fs(s.precondition,o))return a;const u=s.value.clone(),l=Vh(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof At?function(s,o,a,c){if(!Fs(s.precondition,o))return a;const u=Vh(s.fieldTransforms,c,o),l=o.data;return l.setAll(Rp(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(s,o,a){return Fs(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function iR(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=vp(r.transform,i||null);s!=null&&(t===null&&(t=we.empty()),t.set(r.field,s))}return t||null}function kh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&dr(r,i,(s,o)=>tR(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Nr extends Ko{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class At extends Ko{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Rp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Dh(n,e,t){const r=new Map;P(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,eR(o,a,t[i]))}return r}function Vh(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,ZA(s,o,e))}return r}class xr extends Ko{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Su extends Ko{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&rR(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=hi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=hi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=gp();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=Ap(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(b.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),V())}isEqual(e){return this.batchId===e.batchId&&dr(this.mutations,e.mutations,(t,r)=>kh(t,r))&&dr(this.baseMutations,e.baseMutations,(t,r)=>kh(t,r))}}class ku{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){P(e.mutations.length===r.length);let i=function(){return YA}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ku(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce,F;function Pp(n){switch(n){default:return R();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function bp(n){if(n===void 0)return oe("GRPC error has no .code"),p.UNKNOWN;switch(n){case ce.OK:return p.OK;case ce.CANCELLED:return p.CANCELLED;case ce.UNKNOWN:return p.UNKNOWN;case ce.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case ce.INTERNAL:return p.INTERNAL;case ce.UNAVAILABLE:return p.UNAVAILABLE;case ce.UNAUTHENTICATED:return p.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case ce.NOT_FOUND:return p.NOT_FOUND;case ce.ALREADY_EXISTS:return p.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return p.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case ce.ABORTED:return p.ABORTED;case ce.OUT_OF_RANGE:return p.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return p.UNIMPLEMENTED;case ce.DATA_LOSS:return p.DATA_LOSS;default:return R()}}(F=ce||(ce={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=new or([4294967295,4294967295],0);function Nh(n){const e=Sp().encode(n),t=new eA;return t.update(e),new Uint8Array(t.digest())}function xh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new or([t,r],0),new or([i,s],0)]}class Vu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ni(`Invalid padding: ${t}`);if(r<0)throw new ni(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ni(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ni(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=or.fromNumber(this.Te)}de(e,t,r){let i=e.add(t.multiply(or.fromNumber(r)));return i.compare(oR)===1&&(i=new or([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Nh(e),[r,i]=xh(t);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Vu(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const t=Nh(e),[r,i]=xh(t);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ni extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,hs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ls(b.min(),i,new G(k),Ue(),V())}}class hs{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new hs(r,t,V(),V(),V())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t,r,i){this.Ve=e,this.removedTargetIds=t,this.key=r,this.me=i}}class Cp{constructor(e,t){this.targetId=e,this.fe=t}}class kp{constructor(e,t,r=he.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Oh{constructor(){this.ge=0,this.pe=Mh(),this.ye=he.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=V(),t=V(),r=V();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:R()}}),new hs(this.ye,this.we,e,t,r)}Fe(){this.Se=!1,this.pe=Mh()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,P(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class aR{constructor(e){this.Le=e,this.ke=new Map,this.qe=Ue(),this.Qe=Lh(),this.Ke=new G(k)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(t);break;case 3:this.je(t)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.Ce(e.resumeToken));break;default:R()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((r,i)=>{this.je(i)&&t(i)})}Je(e){const t=e.targetId,r=e.fe.count,i=this.Ye(t);if(i){const s=i.target;if(ro(s))if(r===0){const o=new I(s.path);this.We(t,o,K.newNoDocument(o,b.min()))}else P(r===1);else{const o=this.Ze(t);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=$t(r).toUint8Array()}catch(c){if(c instanceof ep)return Ye("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Vu(o,i,s)}catch(c){return Ye(c instanceof ni?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,t,r){return t.fe.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(t,s,null),i++)}),i}it(e){const t=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&ro(a.target)){const c=new I(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,K.newNoDocument(c,e))}s.De&&(t.set(o,s.ve()),s.Fe())}});let r=V();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new ls(e,t,this.Ke,this.qe,r);return this.qe=Ue(),this.Qe=Lh(),this.Ke=new G(k),i}Ue(e,t){if(!this.je(e))return;const r=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,r),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,t)?i.Me(t,1):i.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),r&&(this.qe=this.qe.insert(t,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new Oh,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new $(k),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||_("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Oh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Lh(){return new G(I.comparator)}function Mh(){return new G(I.comparator)}const cR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),uR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),lR=(()=>({and:"AND",or:"OR"}))();class hR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lc(n,e){return n.useProto3Json||ss(e)?e:{value:e}}function _r(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Dp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function dR(n,e){return _r(n,e.toTimestamp())}function ae(n){return P(!!n),b.fromTimestamp(function(t){const r=qt(t);return new J(r.seconds,r.nanos)}(n))}function Nu(n,e){return hc(n,e).canonicalString()}function hc(n,e){const t=function(i){return new O(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Vp(n){const e=O.fromString(n);return P($p(e)),e}function Ui(n,e){return Nu(n.databaseId,e.path)}function ct(n,e){const t=Vp(e);if(t.get(1)!==n.databaseId.projectId)throw new g(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new g(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new I(Op(t))}function Np(n,e){return Nu(n.databaseId,e)}function xp(n){const e=Vp(n);return e.length===4?O.emptyPath():Op(e)}function dc(n){return new O(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Op(n){return P(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Fh(n,e,t){return{name:Ui(n,e),fields:t.value.mapValue.fields}}function Lp(n,e,t){const r=ct(n,e.name),i=ae(e.updateTime),s=e.createTime?ae(e.createTime):b.min(),o=new we({mapValue:{fields:e.fields}}),a=K.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function fR(n,e){return"found"in e?function(r,i){P(!!i.found),i.found.name,i.found.updateTime;const s=ct(r,i.found.name),o=ae(i.found.updateTime),a=i.found.createTime?ae(i.found.createTime):b.min(),c=new we({mapValue:{fields:i.found.fields}});return K.newFoundDocument(s,o,a,c)}(n,e):"missing"in e?function(r,i){P(!!i.missing),P(!!i.readTime);const s=ct(r,i.missing),o=ae(i.readTime);return K.newNoDocument(s,o)}(n,e):R()}function mR(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:R()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(P(l===void 0||typeof l=="string"),he.fromBase64String(l||"")):(P(l===void 0||l instanceof Uint8Array),he.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?p.UNKNOWN:bp(u.code);return new g(l,u.message||"")}(o);t=new kp(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ct(n,r.document.name),s=ae(r.document.updateTime),o=r.document.createTime?ae(r.document.createTime):b.min(),a=new we({mapValue:{fields:r.document.fields}}),c=K.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new Us(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ct(n,r.document),s=r.readTime?ae(r.readTime):b.min(),o=K.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Us([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ct(n,r.document),s=r.removedTargetIds||[];t=new Us([],s,i,null)}else{if(!("filter"in e))return R();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new sR(i,s),a=r.targetId;t=new Cp(a,o)}}return t}function Bi(n,e){let t;if(e instanceof Nr)t={update:Fh(n,e.key,e.value)};else if(e instanceof xr)t={delete:Ui(n,e.key)};else if(e instanceof At)t={update:Fh(n,e.key,e.data),updateMask:vR(e.fieldMask)};else{if(!(e instanceof Su))return R();t={verify:Ui(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof pr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Sn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Cn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof gr)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw R()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:dR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:R()}(n,e.precondition)),t}function fc(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Y.updateTime(ae(s.updateTime)):s.exists!==void 0?Y.exists(s.exists):Y.none()}(e.currentDocument):Y.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let c=null;if("setToServerValue"in a)P(a.setToServerValue==="REQUEST_TIME"),c=new pr;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];c=new Sn(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];c=new Cn(l)}else"increment"in a?c=new gr(o,a.increment):R();const u=Q.fromServerFormat(a.fieldPath);return new us(u,c)}(n,i)):[];if(e.update){e.update.name;const i=ct(n,e.update.name),s=new we({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new Fe(u.map(l=>Q.fromServerFormat(l)))}(e.updateMask);return new At(i,s,o,t,r)}return new Nr(i,s,t,r)}if(e.delete){const i=ct(n,e.delete);return new xr(i,t)}if(e.verify){const i=ct(n,e.verify);return new Su(i,t)}return R()}function pR(n,e){return n&&n.length>0?(P(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?ae(i.updateTime):ae(s);return o.isEqual(b.min())&&(o=ae(s)),new nR(o,i.transformResults||[])}(t,e))):[]}function Mp(n,e){return{documents:[Np(n,e.path)]}}function Fp(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Np(n,i);const s=function(u){if(u.length!==0)return qp(B.create(u,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(l=>function(d){return{field:Jn(d.field),direction:_R(d.dir)}}(l))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=lc(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:t,parent:i}}function Up(n){let e=xp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){P(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(h){const d=Bp(h);return d instanceof B&&Ru(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(w){return new Fi(Xn(w.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,ss(d)?null:d}(t.limit));let c=null;t.startAt&&(c=function(h){const d=!!h.before,m=h.values||[];return new zt(m,d)}(t.startAt));let u=null;return t.endAt&&(u=function(h){const d=!h.before,m=h.values||[];return new zt(m,d)}(t.endAt)),lp(e,i,o,s,a,"F",c,u)}function gR(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return R()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Bp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Xn(t.unaryFilter.field);return L.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Xn(t.unaryFilter.field);return L.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xn(t.unaryFilter.field);return L.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xn(t.unaryFilter.field);return L.create(o,"!=",{nullValue:"NULL_VALUE"});default:return R()}}(n):n.fieldFilter!==void 0?function(t){return L.create(Xn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return R()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return B.create(t.compositeFilter.filters.map(r=>Bp(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return R()}}(t.compositeFilter.op))}(n):R()}function _R(n){return cR[n]}function yR(n){return uR[n]}function IR(n){return lR[n]}function Jn(n){return{fieldPath:n.canonicalString()}}function Xn(n){return Q.fromServerFormat(n.fieldPath)}function qp(n){return n instanceof L?function(t){if(t.op==="=="){if(wh(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NAN"}};if(vh(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(wh(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NOT_NAN"}};if(vh(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jn(t.field),op:yR(t.op),value:t.value}}}(n):n instanceof B?function(t){const r=t.getFilters().map(i=>qp(i));return r.length===1?r[0]:{compositeFilter:{op:IR(t.op),filters:r}}}(n):R()}function vR(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function $p(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t,r,i,s=b.min(),o=b.min(),a=he.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new pt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e){this.ct=e}}function wR(n,e){let t;if(e.document)t=Lp(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=I.fromSegments(e.noDocument.path),i=Dn(e.noDocument.readTime);t=K.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return R();{const r=I.fromSegments(e.unknownDocument.path),i=Dn(e.unknownDocument.version);t=K.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new J(i[0],i[1]);return b.fromTimestamp(s)}(e.readTime)),t}function Uh(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:oo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Ui(s,o.key),fields:o.data.value.mapValue.fields,updateTime:_r(s,o.version.toTimestamp()),createTime:_r(s,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:kn(e.version)};else{if(!e.isUnknownDocument())return R();r.unknownDocument={path:t.path.toArray(),version:kn(e.version)}}return r}function oo(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function kn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Dn(n){const e=new J(n.seconds,n.nanoseconds);return b.fromTimestamp(e)}function cn(n,e){const t=(e.baseMutations||[]).map(s=>fc(n.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>fc(n.ct,s)),i=J.fromMillis(e.localWriteTimeMs);return new Cu(e.batchId,i,t,r)}function ri(n){const e=Dn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Dn(n.lastLimboFreeSnapshotVersion):b.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return P(s.documents.length===1),Ne(Vr(xp(s.documents[0])))}(n.query):function(s){return Ne(Up(s))}(n.query),new pt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,he.fromBase64String(n.resumeToken))}function Gp(n,e){const t=kn(e.snapshotVersion),r=kn(e.lastLimboFreeSnapshotVersion);let i;i=ro(e.target)?Mp(n.ct,e.target):Fp(n.ct,e.target).ut;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:bn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function xu(n){const e=Up({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?so(e,e.limit,"L"):e}function Ca(n,e){return new Du(e.largestBatchId,fc(n.ct,e.overlayMutation))}function Bh(n,e){const t=e.path.lastSegment();return[n,Ve(e.path.popLast()),t]}function qh(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:kn(r.readTime),documentKey:Ve(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{getBundleMetadata(e,t){return $h(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Dn(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return $h(e).put(function(i){return{bundleId:i.id,createTime:kn(ae(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return jh(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:xu(s.bundledQuery),readTime:Dn(s.readTime)}}(r)})}saveNamedQuery(e,t){return jh(e).put(function(i){return{name:i.name,readTime:kn(ae(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function $h(n){return _e(n,"bundles")}function jh(n){return _e(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new Ho(e,r)}getOverlay(e,t){return zr(e).get(Bh(this.userId,t)).next(r=>r?Ca(this.serializer,r):null)}getOverlays(e,t){const r=ot();return f.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new Du(t,o);i.push(this.ht(e,a))}),f.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Ve(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(zr(e).H("collectionPathOverlayIndex",a))}),f.waitFor(s)}getOverlaysForCollection(e,t,r){const i=ot(),s=Ve(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return zr(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Ca(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=ot();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return zr(e).Y({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Ca(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}ht(e,t){return zr(e).put(function(i,s,o){const[a,c,u]=Bh(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Bi(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function zr(n){return _e(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(ee(e.integerValue));else if("doubleValue"in e){const r=ee(e.doubleValue);isNaN(r)?this.Et(t,13):(this.Et(t,15),xi(r)?t.dt(0):t.dt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Et(t,20),typeof r=="string"?t.At(r):(t.At(`${r.seconds||""}`),t.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft($t(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(t,45),t.dt(r.latitude||0),t.dt(r.longitude||0)}else"mapValue"in e?tp(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):R()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const r=e.fields||{};this.Et(t,55);for(const i of Object.keys(r))this.Rt(i,t),this.It(r[i],t)}wt(e,t){const r=e.values||[];this.Et(t,50);for(const i of r)this.It(i,t)}gt(e,t){this.Et(t,37),I.fromName(e).path.forEach(r=>{this.Et(t,60),this.St(r,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}un.bt=new un;function TR(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Gh(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=TR(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class AR{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ct(r.value),r=t.next();this.vt()}Ft(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Mt(r.value),r=t.next();this.xt()}Ot(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=t.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=t.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Bt(e){const t=this.Lt(e),r=Gh(t);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}qt(e){const t=this.Lt(e),r=Gh(t);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Lt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ct(e){const t=255&e;t===0?(this.Kt(0),this.Kt(255)):t===255?(this.Kt(255),this.Kt(0)):this.Kt(t)}Mt(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class RR{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Bt(e)}Tt(){this.Gt.Qt()}}class PR{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Wr{constructor(){this.Gt=new AR,this.zt=new RR(this.Gt),this.jt=new PR(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ln(this.indexId,this.documentKey,this.arrayValue,r)}}function St(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=zh(n.arrayValue,e.arrayValue),t!==0?t:(t=zh(n.directionalValue,e.directionalValue),t!==0?t:I.comparator(n.documentKey,e.documentKey)))}function zh(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.Yt=new $((t,r)=>Q.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const t of e.filters){const r=t;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(P(e.collectionGroup===this.collectionId),this.en)return!1;const t=nc(e);if(t!==void 0&&!this.nn(t))return!1;const r=on(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const c=r[s];if(!this.rn(a,c)||!this.sn(this.Zt[o++],c))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new $(Q.comparator);const t=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new xs(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new xs(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new xs(r.field,r.dir==="asc"?0:1)));return new no(no.UNKNOWN_ID,this.collectionId,t,Ni.empty())}nn(e){for(const t of this.Xt)if(this.rn(t,e))return!0;return!1}rn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(n){var e,t;if(P(n instanceof L||n instanceof B),n instanceof L){if(n instanceof up){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>L.create(n.field,"==",s)))||[];return B.create(i,"or")}return n}const r=n.filters.map(i=>zp(i));return B.create(r,n.op)}function bR(n){if(n.getFilters().length===0)return[];const e=gc(zp(n));return P(Wp(e)),mc(e)||pc(e)?[e]:e.getFilters()}function mc(n){return n instanceof L}function pc(n){return n instanceof B&&Ru(n)}function Wp(n){return mc(n)||pc(n)||function(t){if(t instanceof B&&oc(t)){for(const r of t.getFilters())if(!mc(r)&&!pc(r))return!1;return!0}return!1}(n)}function gc(n){if(P(n instanceof L||n instanceof B),n instanceof L)return n;if(n.filters.length===1)return gc(n.filters[0]);const e=n.filters.map(r=>gc(r));let t=B.create(e,n.op);return t=ao(t),Wp(t)?t:(P(t instanceof B),P(mr(t)),P(t.filters.length>1),t.filters.reduce((r,i)=>Ou(r,i)))}function Ou(n,e){let t;return P(n instanceof L||n instanceof B),P(e instanceof L||e instanceof B),t=n instanceof L?e instanceof L?function(i,s){return B.create([i,s],"and")}(n,e):Kh(n,e):e instanceof L?Kh(e,n):function(i,s){if(P(i.filters.length>0&&s.filters.length>0),mr(i)&&mr(s))return op(i,s.getFilters());const o=oc(i)?i:s,a=oc(i)?s:i,c=o.filters.map(u=>Ou(u,a));return B.create(c,"or")}(n,e),ao(t)}function Kh(n,e){if(mr(e))return op(e,n.getFilters());{const t=e.filters.map(r=>Ou(n,r));return B.create(t,"or")}}function ao(n){if(P(n instanceof L||n instanceof B),n instanceof L)return n;const e=n.getFilters();if(e.length===1)return ao(e[0]);if(ip(n))return n;const t=e.map(i=>ao(i)),r=[];return t.forEach(i=>{i instanceof L?r.push(i):i instanceof B&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:B.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(){this._n=new Lu}addToCollectionParentIndex(e,t){return this._n.add(t),f.resolve()}getCollectionParents(e,t){return f.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return f.resolve()}deleteFieldIndex(e,t){return f.resolve()}deleteAllFieldIndexes(e){return f.resolve()}createTargetIndexes(e,t){return f.resolve()}getDocumentsMatchingTarget(e,t){return f.resolve(null)}getIndexType(e,t){return f.resolve(0)}getFieldIndexes(e,t){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,t){return f.resolve(je.min())}getMinOffsetFromCollectionGroup(e,t){return f.resolve(je.min())}updateCollectionGroup(e,t,r){return f.resolve()}updateIndexEntries(e,t){return f.resolve()}}class Lu{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new $(O.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new $(O.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new Uint8Array(0);class CR{constructor(e,t){this.databaseId=t,this.an=new Lu,this.un=new tn(r=>bn(r),(r,i)=>os(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.an.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.an.add(t)});const s={collectionId:r,parent:Ve(i)};return Hh(e).put(s)}return f.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[jm(t),""],!1,!0);return Hh(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(st(o.parent))}return r})}addFieldIndex(e,t){const r=Kr(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Kn(e);return s.next(a=>{o.put(qh(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=Kr(e),i=Kn(e),s=Wn(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Kr(e),r=Wn(e),i=Kn(e);return t.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(e,t){return f.forEach(this.cn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Wh(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=Wn(e);let i=!0;const s=new Map;return f.forEach(this.cn(t),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=V();const a=[];return f.forEach(s,(c,u)=>{_("IndexedDbIndexManager",`Using index ${function(N){return`id=${N.indexId}|cg=${N.collectionGroup}|f=${N.fields.map(z=>`${z.fieldPath}:${z.kind}`).join(",")}`}(c)} to execute ${bn(t)}`);const l=function(N,z){const H=nc(z);if(H===void 0)return null;for(const j of io(N,H.fieldPath))switch(j.op){case"array-contains-any":return j.value.arrayValue.values||[];case"array-contains":return[j.value]}return null}(u,c),h=function(N,z){const H=new Map;for(const j of on(z))for(const le of io(N,j.fieldPath))switch(le.op){case"==":case"in":H.set(j.fieldPath.canonicalString(),le.value);break;case"not-in":case"!=":return H.set(j.fieldPath.canonicalString(),le.value),Array.from(H.values())}return null}(u,c),d=function(N,z){const H=[];let j=!0;for(const le of on(z)){const Pt=le.kind===0?Ph(N,le.fieldPath,N.startAt):bh(N,le.fieldPath,N.startAt);H.push(Pt.value),j&&(j=Pt.inclusive)}return new zt(H,j)}(u,c),m=function(N,z){const H=[];let j=!0;for(const le of on(z)){const Pt=le.kind===0?bh(N,le.fieldPath,N.endAt):Ph(N,le.fieldPath,N.endAt);H.push(Pt.value),j&&(j=Pt.inclusive)}return new zt(H,j)}(u,c),w=this.hn(c,u,d),E=this.hn(c,u,m),v=this.Pn(c,u,h),D=this.In(c.indexId,l,w,d.inclusive,E,m.inclusive,v);return f.forEach(D,M=>r.j(M,t.limit).next(N=>{N.forEach(z=>{const H=I.fromSegments(z.documentKey);o.has(H)||(o=o.add(H),a.push(H))})}))}).next(()=>a)}return f.resolve(null)})}cn(e){let t=this.un.get(e);return t||(e.filters.length===0?t=[e]:t=bR(B.create(e.filters,"and")).map(r=>cc(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t),t)}In(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.Tn(t[h/u]):Ps,m=this.En(e,d,r[h%u],i),w=this.dn(e,d,s[h%u],o),E=a.map(v=>this.En(e,d,v,!0));l.push(...this.createRange(m,w,E))}return l}En(e,t,r,i){const s=new ln(e,I.empty(),t,r);return i?s:s.Jt()}dn(e,t,r,i){const s=new ln(e,I.empty(),t,r);return i?s.Jt():s}ln(e,t){const r=new Wh(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.cn(t);return f.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new $(Q.comparator),l=!1;for(const h of c.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:u=u.add(d.field));for(const h of c.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}An(e,t){const r=new Wr;for(const i of on(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);un.bt.Pt(s,o)}return r.Wt()}Tn(e){const t=new Wr;return un.bt.Pt(e,t.Ht(0)),t.Wt()}Rn(e,t){const r=new Wr;return un.bt.Pt(Pn(this.databaseId,t),r.Ht(function(s){const o=on(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,t,r){if(r===null)return[];let i=[];i.push(new Wr);let s=0;for(const o of on(e)){const a=r[s++];for(const c of i)if(this.Vn(t,o.fieldPath)&&Mi(a))i=this.mn(i,o,a);else{const u=c.Ht(o.kind);un.bt.Pt(a,u)}}return this.fn(i)}hn(e,t,r){return this.Pn(e,t,r.position)}fn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Wt();return t}mn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new Wr;c.seed(a.Wt()),un.bt.Pt(o,c.Ht(t.kind)),s.push(c)}return s}Vn(e,t){return!!e.filters.find(r=>r instanceof L&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Kr(e),i=Kn(e);return(t?r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.W()).next(s=>{const o=[];return f.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,h){const d=h?new Ni(h.sequenceNumber,new je(Dn(h.readTime),new I(st(h.documentKey)),h.largestBatchId)):Ni.empty(),m=l.fields.map(([w,E])=>new xs(Q.fromServerFormat(w),E));return new no(l.indexId,l.collectionGroup,m,d)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:k(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=Kr(e),s=Kn(e);return this.gn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>f.forEach(a,c=>s.put(qh(c.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return f.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?f.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),f.forEach(a,c=>this.pn(e,i,c).next(u=>{const l=this.yn(s,c);return u.isEqual(l)?f.resolve():this.wn(e,s,c,u,l)}))))})}Sn(e,t,r,i){return Wn(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,t.key),documentKey:t.key.path.toArray()})}bn(e,t,r,i){return Wn(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,t.key),t.key.path.toArray()])}pn(e,t,r){const i=Wn(e);let s=new $(St);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,t)])},(o,a)=>{s=s.add(new ln(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,t){let r=new $(St);const i=this.An(t,e);if(i==null)return r;const s=nc(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Mi(o))for(const a of o.arrayValue.values||[])r=r.add(new ln(t.indexId,e.key,this.Tn(a),i))}else r=r.add(new ln(t.indexId,e.key,Ps,i));return r}wn(e,t,r,i,s){_("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(c,u,l,h,d){const m=c.getIterator(),w=u.getIterator();let E=zn(m),v=zn(w);for(;E||v;){let D=!1,M=!1;if(E&&v){const N=l(E,v);N<0?M=!0:N>0&&(D=!0)}else E!=null?M=!0:D=!0;D?(h(v),v=zn(w)):M?(d(E),E=zn(m)):(E=zn(m),v=zn(w))}}(i,s,St,a=>{o.push(this.Sn(e,t,r,a))},a=>{o.push(this.bn(e,t,r,a))}),f.waitFor(o)}gn(e){let t=1;return Kn(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>St(o,a)).filter((o,a,c)=>!a||St(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=St(o,e),c=St(o,t);if(a===0)i[0]=e.Jt();else if(a>0&&c<0)i.push(o),i.push(o.Jt());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Ps,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Ps,[]];s.push(IDBKeyRange.bound(a,c))}return s}Dn(e,t){return St(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Qh)}getMinOffset(e,t){return f.mapArray(this.cn(t),r=>this.ln(e,r).next(i=>i||R())).next(Qh)}}function Hh(n){return _e(n,"collectionParents")}function Wn(n){return _e(n,"indexEntries")}function Kr(n){return _e(n,"indexConfiguration")}function Kn(n){return _e(n,"indexState")}function Qh(n){P(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Eu(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new je(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Le{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Le(e,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Y({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{P(a===1)}));const u=[];for(const l of t.mutations){const h=Qm(e,l.key.path,t.batchId);s.push(i.delete(h)),u.push(l.key)}return f.waitFor(s).next(()=>u)}function co(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw R();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le.DEFAULT_COLLECTION_PERCENTILE=10,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Le.DEFAULT=new Le(41943040,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Le.DISABLED=new Le(-1,0,0);class Qo{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,t,r,i){P(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Qo(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ct(e).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=Zn(e),o=Ct(e);return o.add({}).next(a=>{P(typeof a=="number");const c=new Cu(a,t,r,i),u=function(m,w,E){const v=E.baseMutations.map(M=>Bi(m.ct,M)),D=E.mutations.map(M=>Bi(m.ct,M));return{userId:w,batchId:E.batchId,localWriteTimeMs:E.localWriteTime.toMillis(),baseMutations:v,mutations:D}}(this.serializer,this.userId,c),l=[];let h=new $((d,m)=>k(d.canonicalString(),m.canonicalString()));for(const d of i){const m=Qm(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(m,_A))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Cn[a]=c.keys()}),f.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return Ct(e).get(t).next(r=>r?(P(r.userId===this.userId),cn(this.serializer,r)):null)}vn(e,t){return this.Cn[t]?f.resolve(this.Cn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Cn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Ct(e).Y({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(P(a.batchId>=r),s=cn(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Ct(e).Y({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ct(e).W("userMutationsIndex",t).next(r=>r.map(i=>cn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Os(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return Zn(e).Y({range:i},(o,a,c)=>{const[u,l,h]=o,d=st(l);if(u===this.userId&&t.path.isEqual(d))return Ct(e).get(h).next(m=>{if(!m)throw R();P(m.userId===this.userId),s.push(cn(this.serializer,m))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new $(k);const i=[];return t.forEach(s=>{const o=Os(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=Zn(e).Y({range:a},(u,l,h)=>{const[d,m,w]=u,E=st(m);d===this.userId&&s.path.isEqual(E)?r=r.add(w):h.done()});i.push(c)}),f.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Os(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new $(k);return Zn(e).Y({range:o},(c,u,l)=>{const[h,d,m]=c,w=st(d);h===this.userId&&r.isPrefixOf(w)?w.length===i&&(a=a.add(m)):l.done()}).next(()=>this.Fn(e,a))}Fn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(Ct(e).get(s).next(o=>{if(o===null)throw R();P(o.userId===this.userId),r.push(cn(this.serializer,o))}))}),f.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return Kp(e.ae,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Mn(t.batchId)}),f.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return f.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Zn(e).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=st(s[1]);i.push(c)}else a.done()}).next(()=>{P(i.length===0)})})}containsKey(e,t){return Hp(e,this.userId,t)}xn(e){return Qp(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Hp(n,e,t){const r=Os(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Zn(n).Y({range:s,J:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function Ct(n){return _e(n,"mutations")}function Zn(n){return _e(n,"documentMutations")}function Qp(n){return _e(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Vn(0)}static Bn(){return new Vn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Ln(e).next(t=>{const r=new Vn(t.highestTargetId);return t.highestTargetId=r.next(),this.kn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Ln(e).next(t=>b.fromTimestamp(new J(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Ln(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Ln(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.kn(e,i)))}addTargetData(e,t){return this.qn(e,t).next(()=>this.Ln(e).next(r=>(r.targetCount+=1,this.Qn(t,r),this.kn(e,r))))}updateTargetData(e,t){return this.qn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Hn(e).delete(t.targetId)).next(()=>this.Ln(e)).next(r=>(P(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Hn(e).Y((o,a)=>{const c=ri(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>f.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Hn(e).Y((r,i)=>{const s=ri(i);t(s)})}Ln(e){return Jh(e).get("targetGlobalKey").next(t=>(P(t!==null),t))}kn(e,t){return Jh(e).put("targetGlobalKey",t)}qn(e,t){return Hn(e).put(Gp(this.serializer,t))}Qn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Ln(e).next(t=>t.targetCount)}getTargetData(e,t){const r=bn(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Hn(e).Y({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=ri(a);os(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=Dt(e);return t.forEach(o=>{const a=Ve(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),f.waitFor(i)}removeMatchingKeys(e,t,r){const i=Dt(e);return f.forEach(t,s=>{const o=Ve(s.path);return f.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=Dt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Dt(e);let s=V();return i.Y({range:r,J:!0},(o,a,c)=>{const u=st(o[1]),l=new I(u);s=s.add(l)}).next(()=>s)}containsKey(e,t){const r=Ve(t.path),i=IDBKeyRange.bound([r],[jm(r)],!1,!0);let s=0;return Dt(e).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}_t(e,t){return Hn(e).get(t).next(r=>r?ri(r):null)}}function Hn(n){return _e(n,"targets")}function Jh(n){return _e(n,"targetGlobal")}function Dt(n){return _e(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh([n,e],[t,r]){const i=k(n,t);return i===0?k(e,r):i}class DR{constructor(e){this.Kn=e,this.buffer=new $(Xh),this.$n=0}Un(){return++this.$n}Wn(e){const t=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Xh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class VR{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){_("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){en(t)?_("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Zt(t)}await this.zn(3e5)})}}class NR{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.Hn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return f.resolve(Me._e);const r=new DR(t);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(_("LruGarbageCollector","Garbage collection skipped; disabled"),f.resolve(Yh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yh):this.Yn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,t){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Qn()<=x.DEBUG&&_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),f.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function xR(n,e){return new NR(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e,t){this.db=e,this.garbageCollector=xR(this,t)}Hn(e){const t=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Zn(e){let t=0;return this.Jn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Jn(e,t){return this.Xn(e,(r,i)=>t(i))}addReference(e,t,r){return bs(e,r)}removeReference(e,t,r){return bs(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return bs(e,t)}er(e,t){return function(i,s){let o=!1;return Qp(i).Z(a=>Hp(i,a,s).next(c=>(c&&(o=!0),f.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=t){const c=this.er(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,b.min()),Dt(e).delete(function(h){return[0,Ve(h.path)]}(o))))});i.push(c)}}).next(()=>f.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return bs(e,t)}Xn(e,t){const r=Dt(e);let i,s=Me._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==Me._e&&t(new I(st(i)),s),s=u,i=c):s=Me._e}).next(()=>{s!==Me._e&&t(new I(st(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function bs(n,e){return Dt(n).put(function(r,i){return{targetId:0,path:Ve(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(){this.changes=new tn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,K.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?f.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return rn(e).put(r)}removeEntry(e,t,r){return rn(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],oo(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.tr(e,r)))}getEntry(e,t){let r=K.newInvalidDocument(t);return rn(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Hr(t))},(i,s)=>{r=this.nr(t,s)}).next(()=>r)}rr(e,t){let r={size:0,document:K.newInvalidDocument(t)};return rn(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Hr(t))},(i,s)=>{r={document:this.nr(t,s),size:co(s)}}).next(()=>r)}getEntries(e,t){let r=Ue();return this.ir(e,t,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,t){let r=Ue(),i=new G(I.comparator);return this.ir(e,t,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,co(o))}).next(()=>({documents:r,_r:i}))}ir(e,t,r){if(t.isEmpty())return f.resolve();let i=new $(td);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Hr(i.first()),Hr(i.last())),o=i.getIterator();let a=o.getNext();return rn(e).Y({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=I.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&td(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.U(Hr(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),oo(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return rn(e).W(IDBKeyRange.bound(a,c,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let l=Ue();for(const h of u){const d=this.nr(I.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&(cs(t,d)||i.has(d.key))&&(l=l.insert(d.key,d))}return l})}getAllFromCollectionGroup(e,t,r,i){let s=Ue();const o=ed(t,r),a=ed(t,je.max());return rn(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.nr(I.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new MR(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Zh(e).get("remoteDocumentGlobalKey").next(t=>(P(!!t),t))}tr(e,t){return Zh(e).put("remoteDocumentGlobalKey",t)}nr(e,t){if(t){const r=wR(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(b.min())))return r}return K.newInvalidDocument(e)}}function Jp(n){return new LR(n)}class MR extends Yp{constructor(e,t){super(),this.ar=e,this.trackRemovals=t,this.ur=new tn(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new $((s,o)=>k(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(t.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=Uh(this.ar.serializer,o);i=i.add(s.path.popLast());const u=co(c);r+=u-a.size,t.push(this.ar.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=Uh(this.ar.serializer,o.convertToNoDocument(b.min()));t.push(this.ar.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.ar.updateMetadata(e,r)),f.waitFor(t)}getFromCache(e,t){return this.ar.rr(e,t).next(r=>(this.ur.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.ar.sr(e,t).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Zh(n){return _e(n,"remoteDocumentGlobal")}function rn(n){return _e(n,"remoteDocumentsV14")}function Hr(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function ed(n,e){const t=e.documentKey.path.toArray();return[n,oo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function td(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=k(t[s],r[s]),i)return i;return i=k(t.length,r.length),i||(i=k(t[t.length-2],r[r.length-2]),i||k(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&hi(r.mutation,i,Fe.empty(),J.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,V()).next(()=>r))}getLocalViewOfDocuments(e,t,r=V()){const i=ot();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=ti();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=ot();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,V()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Ue();const o=li(),a=function(){return li()}();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof At)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),hi(l.mutation,u,l.mutation.getFieldMask(),J.now())):o.set(u.key,Fe.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new FR(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=li();let i=new G((o,a)=>o-a),s=V();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||Fe.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||V()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=gp();l.forEach(d=>{if(!s.has(d)){const m=Ap(t.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return f.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return I.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Pu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):f.resolve(ot());let a=-1,c=s;return o.next(u=>f.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?f.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,V())).next(l=>({batchId:a,changes:pp(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new I(t)).next(r=>{let i=ti();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=ti();return this.indexManager.getCollectionParents(e,s).next(a=>f.forEach(a,c=>{const u=function(h,d){return new Tt(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((c,u)=>{const l=u.getKey();o.get(l)===null&&(o=o.insert(l,K.newInvalidDocument(l)))});let a=ti();return o.forEach((c,u)=>{const l=s.get(c);l!==void 0&&hi(l.mutation,u,Fe.empty(),J.now()),cs(t,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return f.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ae(i.createTime)}}(t)),f.resolve()}getNamedQuery(e,t){return f.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(i){return{name:i.name,query:xu(i.bundledQuery),readTime:ae(i.readTime)}}(t)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(){this.overlays=new G(I.comparator),this.hr=new Map}getOverlay(e,t){return f.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ot();return f.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),f.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),f.resolve()}getOverlaysForCollection(e,t,r){const i=ot(),s=t.length+1,o=new I(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return f.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new G((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=ot(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=ot(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return f.resolve(a)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Du(t,r));let s=this.hr.get(t);s===void 0&&(s=V(),this.hr.set(t,s)),this.hr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(){this.Pr=new $(de.Ir),this.Tr=new $(de.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const r=new de(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new de(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){const t=new I(new O([])),r=new de(t,e),i=new de(t,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new I(new O([])),r=new de(t,e),i=new de(t,e+1);let s=V();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new de(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class de{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return I.comparator(e.key,t.key)||k(e.pr,t.pr)}static Er(e,t){return k(e.pr,t.pr)||I.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new $(de.Ir)}checkEmpty(e){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Cu(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new de(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,t){return f.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.br(r),s=i<0?0:i;return f.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new de(t,0),i=new de(t,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),f.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new $(k);return t.forEach(i=>{const s=new de(i,0),o=new de(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),f.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;I.isDocumentKey(s)||(s=s.child(""));const o=new de(new I(s),0);let a=new $(k);return this.wr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.pr)),!0)},o),f.resolve(this.Dr(a))}Dr(e){const t=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){P(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return f.forEach(t.mutations,i=>{const s=new de(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){const r=new de(t,0),i=this.wr.firstAfterOrEqual(r);return f.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,f.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.vr=e,this.docs=function(){return new G(I.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return f.resolve(r?r.document.mutableCopy():K.newInvalidDocument(t))}getEntries(e,t){let r=Ue();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():K.newInvalidDocument(i))}),f.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Ue();const o=t.path,a=new I(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Eu(zm(l),r)<=0||(i.has(l.key)||cs(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return f.resolve(s)}getAllFromCollectionGroup(e,t,r,i){R()}Fr(e,t){return f.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new jR(this)}getSize(e){return f.resolve(this.size)}}class jR extends Yp{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),f.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.persistence=e,this.Mr=new tn(t=>bn(t),os),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Mu,this.targetCount=0,this.Br=Vn.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,i)=>t(i)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),f.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Br=new Vn(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,f.resolve()}updateTargetData(e,t){return this.qn(t),f.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),f.waitFor(s).next(()=>i)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,t){const r=this.Mr.get(t)||null;return f.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),f.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),f.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),f.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Nr.gr(t);return f.resolve(r)}containsKey(e,t){return f.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,t){this.Lr={},this.overlays={},this.kr=new Me(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new GR(this),this.indexManager=new SR,this.remoteDocumentCache=function(i){return new $R(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new jp(t),this.$r=new UR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new BR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Lr[e.toKey()];return r||(r=new qR(t,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){_("MemoryPersistence","Starting transaction:",e);const i=new zR(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,t){return f.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,t)))}}class zR extends Km{constructor(e){super(),this.currentSequenceNumber=e}}class Yo{constructor(e){this.persistence=e,this.zr=new Mu,this.jr=null}static Hr(e){return new Yo(e)}get Jr(){if(this.jr)return this.jr;throw R()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),f.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),f.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),f.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Jr,r=>{const i=I.fromPath(r);return this.Yr(e,i).next(s=>{s||t.removeEntry(i,b.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return f.or([()=>f.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.serializer=e}N(e,t,r,i){const s=new Go("createOrUpgrade",t);r<1&&i>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",gh,{unique:!0}),c.createObjectStore("documentMutations")}(e),nd(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=f.resolve();return r<3&&i>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),nd(e)),o=o.next(()=>function(c){const u=c.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:b.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store("mutations").W().next(l=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",gh,{unique:!0});const h=u.store("mutations"),d=l.map(m=>h.put(m));return f.waitFor(d)})}(e,s))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore("documentOverlays",{keyPath:CA});u.createIndex("collectionPathOverlayIndex",kA,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",DA,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore("remoteDocumentsV14",{keyPath:yA});u.createIndex("documentKeyIndex",IA),u.createIndex("collectionGroupIndex",vA)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:RA}).createIndex("sequenceNumberIndex",PA,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:bA}).createIndex("documentKeyIndex",SA,{unique:!1})}(e))),o}ei(e){let t=0;return e.store("remoteDocuments").Y((r,i)=>{t+=co(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.W().next(i=>f.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>f.forEach(a,c=>{P(c.userId===s.userId);const u=cn(this.serializer,c);return Kp(e,s.userId,u).next(()=>{})}))}))}ti(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const c=new O(o),u=function(h){return[0,Ve(h)]}(c);s.push(t.get(u).next(l=>l?f.resolve():(h=>t.put({targetId:0,path:Ve(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>f.waitFor(s))})}ni(e,t){e.createObjectStore("collectionParents",{keyPath:AA});const r=t.store("collectionParents"),i=new Lu,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Ve(c)})}};return t.store("remoteDocuments").Y({J:!0},(o,a)=>{const c=new O(o);return s(c.popLast())}).next(()=>t.store("documentMutations").Y({J:!0},([o,a,c],u)=>{const l=st(a);return s(l.popLast())}))}ri(e){const t=e.store("targets");return t.Y((r,i)=>{const s=ri(i),o=Gp(this.serializer,s);return t.put(o)})}ii(e,t){const r=t.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=t.store("remoteDocumentsV14"),c=function(h){return h.document?new I(O.fromString(h.document.name).popFirst(5)):h.noDocument?I.fromSegments(h.noDocument.path):h.unknownDocument?I.fromSegments(h.unknownDocument.path):R()}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>f.waitFor(i))}si(e,t){const r=t.store("mutations"),i=Jp(this.serializer),s=new Zp(Yo.Hr,this.serializer.ct);return r.W().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:V();cn(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),f.forEach(a,(c,u)=>{const l=new fe(u),h=Ho.lt(this.serializer,l),d=s.getIndexManager(l),m=Qo.lt(l,this.serializer,d,s.referenceDelegate);return new Xp(i,m,h,d).recalculateAndSaveOverlaysForDocumentKeys(new rc(t,Me._e),c).next()})})}}function nd(n){n.createObjectStore("targetDocuments",{keyPath:EA}).createIndex("documentTargetsIndex",TA,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",wA,{unique:!0}),n.createObjectStore("targetGlobal")}const ka="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Fu{constructor(e,t,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=u,this.ai=l,this.ui=h,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=d=>Promise.resolve(),!Fu.D())throw new g(p.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new OR(this,i),this.Ti=t+"main",this.serializer=new jp(c),this.Ei=new ze(this.Ti,this.ui,new WR(this.serializer)),this.Qr=new kR(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Jp(this.serializer),this.$r=new ER,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,l===!1&&oe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new g(p.FAILED_PRECONDITION,ka);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new Me(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ss(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(t=>{t||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(t=>this.isPrimary&&!t?this.yi(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(en(e))return _("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return _("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return Qr(e).get("owner").next(t=>f.resolve(this.Si(t)))}bi(e){return Ss(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=_e(t,"clientMetadata");return r.W().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return f.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const t of e)this.di.removeItem(this.Fi(t.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?f.resolve(!0):Qr(e).get("owner").next(t=>{if(t!==null&&this.Ci(t.leaseTimestampMs,5e3)&&!this.Mi(t.ownerId)){if(this.Si(t)&&this.networkEnabled)return!0;if(!this.Si(t)){if(!t.allowTabSynchronization)throw new g(p.FAILED_PRECONDITION,ka);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ss(e).W().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&_("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new rc(e,Me._e);return this.yi(t).next(()=>this.bi(t))}),this.Ei.close(),this.Bi()}vi(e,t){return e.filter(r=>this.Ci(r.updateTimeMs,t)&&!this.Mi(r.clientId))}Li(){return this.runTransaction("getActiveClients","readonly",e=>Ss(e).W().next(t=>this.vi(t,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,t){return Qo.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new CR(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Ho.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,t,r){_("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(c){return c===15?NA:c===14?Xm:c===13?Jm:c===12?VA:c===11?Ym:void R()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new rc(a,this.kr?this.kr.next():Me._e),t==="readwrite-primary"?this.gi(o).next(c=>!!c||this.pi(o)).next(c=>{if(!c)throw oe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new g(p.FAILED_PRECONDITION,Wm);return r(o)}).next(c=>this.wi(o).next(()=>c)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return Qr(e).get("owner").next(t=>{if(t!==null&&this.Ci(t.leaseTimestampMs,5e3)&&!this.Mi(t.ownerId)&&!this.Si(t)&&!(this.ai||this.allowTabSynchronization&&t.allowTabSynchronization))throw new g(p.FAILED_PRECONDITION,ka)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Qr(e).put("owner",t)}static D(){return ze.D()}yi(e){const t=Qr(e);return t.get("owner").next(r=>this.Si(r)?(_("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):f.resolve())}Ci(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(oe(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const t=/(?:Version|Mobile)\/1[456]/;Sd()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var t;try{const r=((t=this.di)===null||t===void 0?void 0:t.getItem(this.Fi(e)))!==null;return _("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return oe("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){oe("Failed to set zombie client id.",e)}}Bi(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Qr(n){return _e(n,"owner")}function Ss(n){return _e(n,"clientMetadata")}function Uu(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=i}static Ki(e,t){let r=V(),i=V();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Bu(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Sd()?8:ze.v(X())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ji(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new KR;return this.Ji(e,t,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,t,o,a.size)})}).next(()=>s.result)}Yi(e,t,r,i){return r.documentReadCount<this.Wi?(Qn()<=x.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",Yn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),f.resolve()):(Qn()<=x.DEBUG&&_("QueryEngine","Query:",Yn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Qn()<=x.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",Yn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ne(t))):f.resolve())}ji(e,t){if(Sh(t))return f.resolve(null);let r=Ne(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=so(t,null,"F"),r=Ne(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=V(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Zi(t,a);return this.Xi(t,u,o,c.readTime)?this.ji(e,so(t,null,"F")):this.es(e,u,t,c)}))})))}Hi(e,t,r,i){return Sh(t)||i.isEqual(b.min())?f.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(t,s);return this.Xi(t,o,r,i)?f.resolve(null):(Qn()<=x.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yn(t)),this.es(e,o,t,Gm(i,-1)).next(a=>a))})}Zi(e,t){let r=new $(fp(e));return t.forEach((i,s)=>{cs(e,s)&&(r=r.add(s))}),r}Xi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,t,r){return Qn()<=x.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",Yn(t)),this.zi.getDocumentsMatchingQuery(e,t,je.min(),r)}es(e,t,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,t,r,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new G(k),this.rs=new tn(s=>bn(s),os),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xp(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function tg(n,e,t,r){return new HR(n,e,t,r)}async function ng(n,e){const t=T(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=V();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function QR(n,e){const t=T(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.os.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let m=f.resolve();return d.forEach(w=>{m=m.next(()=>l.getEntry(c,w)).next(E=>{const v=u.docVersions.get(w);P(v!==null),E.version.compareTo(v)<0&&(h.applyToRemoteDocument(E,u),E.isValidDocument()&&(E.setReadTime(u.commitVersion),l.addEntry(E)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=V();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function rg(n){const e=T(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function YR(n,e){const t=T(n),r=e.snapshotVersion;let i=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.os.newChangeBuffer({trackRemovals:!0});i=t.ns;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.Qr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.Qr.addMatchingKeys(s,l.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(he.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):l.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(l.resumeToken,r)),i=i.insert(h,m),function(E,v,D){return E.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(d,m,l)&&a.push(t.Qr.updateTargetData(s,m))});let c=Ue(),u=V();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(ig(s,o,e.documentUpdates).next(l=>{c=l.cs,u=l.ls})),!r.isEqual(b.min())){const l=t.Qr.getLastRemoteSnapshotVersion(s).next(h=>t.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return f.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.ns=i,s))}function ig(n,e,t){let r=V(),i=V();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Ue();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(b.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{cs:o,ls:i}})}function JR(n,e){const t=T(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yr(n,e){const t=T(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Qr.getTargetData(r,e).next(s=>s?(i=s,f.resolve(i)):t.Qr.allocateTargetId(r).next(o=>(i=new pt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function Ir(n,e,t){const r=T(n),i=r.ns.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!en(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function uo(n,e,t){const r=T(n);let i=b.min(),s=V();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,l){const h=T(c),d=h.rs.get(l);return d!==void 0?f.resolve(h.ns.get(d)):h.Qr.getTargetData(u,l)}(r,o,Ne(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,t?i:b.min(),t?s:V())).next(a=>(ag(r,dp(e),a),{documents:a,hs:s})))}function sg(n,e){const t=T(n),r=T(t.Qr),i=t.ns.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r._t(s,e).next(o=>o?o.target:null))}function og(n,e){const t=T(n),r=t.ss.get(e)||b.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.os.getAllFromCollectionGroup(i,e,Gm(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(ag(t,e,i),i))}function ag(n,e,t){let r=n.ss.get(e)||b.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ss.set(e,r)}async function XR(n,e,t,r){const i=T(n);let s=V(),o=Ue();for(const u of t){const l=e.Ps(u.metadata.name);u.document&&(s=s.add(l));const h=e.Is(u);h.setReadTime(e.Ts(u.metadata.readTime)),o=o.insert(l,h)}const a=i.os.newChangeBuffer({trackRemovals:!0}),c=await yr(i,function(l){return Ne(Vr(O.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>ig(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.Qr.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.Qr.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.cs,l.ls)).next(()=>l.cs)))}async function ZR(n,e,t=V()){const r=await yr(n,Ne(xu(e.bundledQuery))),i=T(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=ae(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(he.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,t,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function rd(n,e){return`firestore_clients_${n}_${e}`}function id(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Da(n,e){return`firestore_targets_${n}_${e}`}class lo{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Es(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new g(i.error.code,i.error.message))),o?new lo(e,t,i.state,s):(oe("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class di{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Es(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new g(r.error.code,r.error.message))),s?new di(e,r.state,i):(oe("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ho{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Es(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=bu();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Hm(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new ho(e,s):(oe("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class qu{constructor(e,t){this.clientId=e,this.onlineState=t}static Es(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new qu(t.clientId,t.onlineState):(oe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class _c{constructor(){this.activeTargetIds=bu()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Va{constructor(e,t,r,i,s){this.window=e,this.oi=t,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new G(k),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=rd(this.persistenceKey,this.Vs),this.Ss=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new _c),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.Fs=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Li();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(rd(this.persistenceKey,r));if(i){const s=ho.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const t=this.storage.getItem(this.vs);if(t){const r=this.xs(t);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let t=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Bs(e,"pending")}updateMutationState(e,t,r){this.Bs(e,t,r),this.Ls(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Da(this.persistenceKey,e));if(r){const i=di.Es(e,r);i&&(t=i.state)}}return this.ks.As(e),this.Ms(),t}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Da(this.persistenceKey,e))}updateQueryState(e,t,r){this.qs(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Ls(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return _("SharedClientState","READ",e,t),t}setItem(e,t){_("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){_("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const t=e;if(t.storageArea===this.storage){if(_("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ws)return void oe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.bs.test(t.key)){if(t.newValue==null){const r=this.$s(t.key);return this.Us(r,null)}{const r=this.Ws(t.key,t.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(t.key)){if(t.newValue!==null){const r=this.Gs(t.key,t.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(t.key)){if(t.newValue!==null){const r=this.js(t.key,t.newValue);if(r)return this.Hs(r)}}else if(t.key===this.vs){if(t.newValue!==null){const r=this.xs(t.newValue);if(r)return this.Os(r)}}else if(t.key===this.Ss){const r=function(s){let o=Me._e;if(s!=null)try{const a=JSON.parse(s);P(typeof a=="number"),o=a}catch(a){oe("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==Me._e&&this.sequenceNumberHandler(r)}else if(t.key===this.Fs){const r=this.Js(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(t)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Bs(e,t,r){const i=new lo(this.currentUser,e,t,r),s=id(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Ls(e){const t=id(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Qs(e){const t={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(t))}qs(e,t,r){const i=Da(this.persistenceKey,e),s=new di(e,t,r);this.setItem(i,s.ds())}Ks(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Fs,t)}$s(e){const t=this.bs.exec(e);return t?t[1]:null}Ws(e,t){const r=this.$s(e);return ho.Es(r,t)}Gs(e,t){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return lo.Es(new fe(s),i,t)}js(e,t){const r=this.Cs.exec(e),i=Number(r[1]);return di.Es(i,t)}xs(e){return qu.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);_("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,t){const r=t?this.ps.insert(e,t):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let t=bu();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class cg{constructor(){this.no=new _c,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new _c,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cs=null;function Na(){return Cs===null?Cs=function(){return 268435456+Math.round(2147483648*Math.random())}():Cs++,"0x"+Cs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="WebChannelConnection";class rP extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+t.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(t,r,i,s,o){const a=Na(),c=this.bo(t,r.toUriEncodedString());_("RestConnection",`Sending RPC '${t}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(t,c,u,i).then(l=>(_("RestConnection",`Received RPC '${t}' ${a}: `,l),l),l=>{throw Ye("RestConnection",`RPC '${t}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}vo(t,r,i,s,o,a){return this.So(t,r,i,s,o)}Do(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Dr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}bo(t,r){const i=tP[t];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,t,r,i){const s=Na();return new Promise((o,a)=>{const c=new ZT;c.setWithCredentials(!0),c.listenOnce(JT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Sa.NO_ERROR:const l=c.getResponseJson();_(Re,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case Sa.TIMEOUT:_(Re,`RPC '${e}' ${s} timed out`),a(new g(p.DEADLINE_EXCEEDED,"Request time out"));break;case Sa.HTTP_ERROR:const h=c.getStatus();if(_(Re,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const w=function(v){const D=v.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(D)>=0?D:p.UNKNOWN}(m.status);a(new g(w,m.message))}else a(new g(p.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new g(p.UNAVAILABLE,"Connection failed."));break;default:R()}}finally{_(Re,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);_(Re,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",u,r,15)})}Fo(e,t,r){const i=Na(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=QT(),a=YT(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=s.join("");_(Re,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,m=!1;const w=new nP({lo:v=>{m?_(Re,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(_(Re,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),_(Re,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},ho:()=>h.close()}),E=(v,D,M)=>{v.listen(D,N=>{try{M(N)}catch(z){setTimeout(()=>{throw z},0)}})};return E(h,As.EventType.OPEN,()=>{m||_(Re,`RPC '${e}' stream ${i} transport opened.`)}),E(h,As.EventType.CLOSE,()=>{m||(m=!0,_(Re,`RPC '${e}' stream ${i} transport closed`),w.Vo())}),E(h,As.EventType.ERROR,v=>{m||(m=!0,Ye(Re,`RPC '${e}' stream ${i} transport errored:`,v),w.Vo(new g(p.UNAVAILABLE,"The operation could not be completed")))}),E(h,As.EventType.MESSAGE,v=>{var D;if(!m){const M=v.data[0];P(!!M);const N=M,z=N.error||((D=N[0])===null||D===void 0?void 0:D.error);if(z){_(Re,`RPC '${e}' stream ${i} received error:`,z);const H=z.status;let j=function(Ur){const ys=ce[Ur];if(ys!==void 0)return bp(ys)}(H),le=z.message;j===void 0&&(j=p.INTERNAL,le="Unknown error status: "+H+" with message "+z.message),m=!0,w.Vo(new g(j,le)),h.close()}else _(Re,`RPC '${e}' stream ${i} received:`,M),w.mo(M)}}),E(a,XT.STAT_EVENT,v=>{v.stat===dh.PROXY?_(Re,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===dh.NOPROXY&&_(Re,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.Ro()},0),w}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(){return typeof window<"u"?window:null}function Bs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(n){return new hR(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=t,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const t=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,t-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,t,r,i,s,o,a,c){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new $u(e,t)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,t){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():t&&t.code===p.RESOURCE_EXHAUSTED?(oe(t.toString()),oe("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):t&&t.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(t)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),t=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===t&&this.o_(r,i)},r=>{e(()=>{const i=new g(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,t){const r=this.s_(this.Wo);this.stream=this.a_(e,t),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return _("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return t=>{this.oi.enqueueAndForget(()=>this.Wo===e?t():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iP extends lg{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}a_(e,t){return this.connection.Fo("Listen",e,t)}onMessage(e){this.jo.reset();const t=mR(this.serializer,e),r=function(s){if(!("targetChange"in s))return b.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?b.min():o.readTime?ae(o.readTime):b.min()}(e);return this.listener.u_(t,r)}c_(e){const t={};t.database=dc(this.serializer),t.addTarget=function(s,o){let a;const c=o.target;if(a=ro(c)?{documents:Mp(s,c)}:{query:Fp(s,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Dp(s,o.resumeToken);const u=lc(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(b.min())>0){a.readTime=_r(s,o.snapshotVersion.toTimestamp());const u=lc(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=gR(this.serializer,e);r&&(t.labels=r),this.t_(t)}l_(e){const t={};t.database=dc(this.serializer),t.removeTarget=e,this.t_(t)}}class sP extends lg{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,t){return this.connection.Fo("Write",e,t)}onMessage(e){if(P(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const t=pR(e.writeResults,e.commitTime),r=ae(e.commitTime);return this.listener.T_(r,t)}return P(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=dc(this.serializer),this.t_(e)}I_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Bi(this.serializer,r))};this.t_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new g(p.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,hc(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new g(p.UNKNOWN,s.toString())})}vo(e,t,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,hc(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new g(p.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class aP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(oe(t),this.g_=!1):_("OnlineStateTracker",t)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{nn(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=T(c);u.v_.add(4),await Or(u),u.x_.set("Unknown"),u.v_.delete(4),await fs(u)}(this))})}),this.x_=new aP(r,i)}}async function fs(n){if(nn(n))for(const e of n.F_)await e(!0)}async function Or(n){for(const e of n.F_)await e(!1)}function Jo(n,e){const t=T(n);t.C_.has(e.targetId)||(t.C_.set(e.targetId,e),zu(t)?Gu(t):Mr(t).Jo()&&ju(t,e))}function qi(n,e){const t=T(n),r=Mr(t);t.C_.delete(e),r.Jo()&&hg(t,e),t.C_.size===0&&(r.Jo()?r.Xo():nn(t)&&t.x_.set("Unknown"))}function ju(n,e){if(n.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(b.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Mr(n).c_(e)}function hg(n,e){n.O_.Oe(e),Mr(n).l_(e)}function Gu(n){n.O_=new aR({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>n.C_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Mr(n).start(),n.x_.p_()}function zu(n){return nn(n)&&!Mr(n).Ho()&&n.C_.size>0}function nn(n){return T(n).v_.size===0}function dg(n){n.O_=void 0}async function uP(n){n.C_.forEach((e,t)=>{ju(n,e)})}async function lP(n,e){dg(n),zu(n)?(n.x_.S_(e),Gu(n)):n.x_.set("Unknown")}async function hP(n,e,t){if(n.x_.set("Online"),e instanceof kp&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(n,e)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fo(n,r)}else if(e instanceof Us?n.O_.$e(e):e instanceof Cp?n.O_.Je(e):n.O_.Ge(e),!t.isEqual(b.min()))try{const r=await rg(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.C_.get(u);l&&s.C_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.C_.get(c);if(!l)return;s.C_.set(c,l.withResumeToken(he.EMPTY_BYTE_STRING,l.snapshotVersion)),hg(s,c);const h=new pt(l.target,c,u,l.sequenceNumber);ju(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await fo(n,r)}}async function fo(n,e,t){if(!en(e))throw e;n.v_.add(1),await Or(n),n.x_.set("Offline"),t||(t=()=>rg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await t(),n.v_.delete(1),await fs(n)})}function fg(n,e){return e().catch(t=>fo(n,t,e))}async function Lr(n){const e=T(n),t=Wt(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;dP(e);)try{const i=await JR(e.localStore,r);if(i===null){e.D_.length===0&&t.Xo();break}r=i.batchId,fP(e,i)}catch(i){await fo(e,i)}mg(e)&&pg(e)}function dP(n){return nn(n)&&n.D_.length<10}function fP(n,e){n.D_.push(e);const t=Wt(n);t.Jo()&&t.P_&&t.I_(e.mutations)}function mg(n){return nn(n)&&!Wt(n).Ho()&&n.D_.length>0}function pg(n){Wt(n).start()}async function mP(n){Wt(n).d_()}async function pP(n){const e=Wt(n);for(const t of n.D_)e.I_(t.mutations)}async function gP(n,e,t){const r=n.D_.shift(),i=ku.from(r,e,t);await fg(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Lr(n)}async function _P(n,e){e&&Wt(n).P_&&await async function(r,i){if(function(o){return Pp(o)&&o!==p.ABORTED}(i.code)){const s=r.D_.shift();Wt(r).Zo(),await fg(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Lr(r)}}(n,e),mg(n)&&pg(n)}async function od(n,e){const t=T(n);t.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=nn(t);t.v_.add(3),await Or(t),r&&t.x_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.v_.delete(3),await fs(t)}async function yc(n,e){const t=T(n);e?(t.v_.delete(2),await fs(t)):e||(t.v_.add(2),await Or(t),t.x_.set("Unknown"))}function Mr(n){return n.N_||(n.N_=function(t,r,i){const s=T(t);return s.R_(),new iP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:uP.bind(null,n),To:lP.bind(null,n),u_:hP.bind(null,n)}),n.F_.push(async e=>{e?(n.N_.Zo(),zu(n)?Gu(n):n.x_.set("Unknown")):(await n.N_.stop(),dg(n))})),n.N_}function Wt(n){return n.B_||(n.B_=function(t,r,i){const s=T(t);return s.R_(),new sP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:mP.bind(null,n),To:_P.bind(null,n),E_:pP.bind(null,n),T_:gP.bind(null,n)}),n.F_.push(async e=>{e?(n.B_.Zo(),await Lr(n)):(await n.B_.stop(),n.D_.length>0&&(_("RemoteStore",`Stopping write stream with ${n.D_.length} pending writes`),n.D_=[]))})),n.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new me,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Wu(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new g(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fr(n,e){if(oe("AsyncQueue",`${e}: ${n}`),en(n))return new g(p.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||I.comparator(t.key,r.key):(t,r)=>I.comparator(t.key,r.key),this.keyedMap=ti(),this.sortedSet=new G(this.comparator)}static emptySet(e){return new cr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof cr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new cr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(){this.L_=new G(I.comparator)}track(e){const t=e.doc.key,r=this.L_.get(t);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(t,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(t):e.type===1&&r.type===2?this.L_=this.L_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(t,{type:2,doc:e.doc}):R():this.L_=this.L_.insert(t,e)}k_(){const e=[];return this.L_.inorderTraversal((t,r)=>{e.push(r)}),e}}class vr{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new vr(e,t,cr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&as(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(){this.q_=void 0,this.Q_=[]}}class IP{constructor(){this.queries=new tn(e=>hp(e),as),this.onlineState="Unknown",this.K_=new Set}}async function Ku(n,e){const t=T(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new yP),i)try{s.q_=await t.onListen(r)}catch(o){const a=Fr(o,`Initialization of query '${Yn(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.Q_.push(e),e.U_(t.onlineState),s.q_&&e.W_(s.q_)&&Qu(t)}async function Hu(n,e){const t=T(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function vP(n,e){const t=T(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&Qu(t)}function wP(n,e,t){const r=T(n),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(t);r.queries.delete(e)}function Qu(n){n.K_.forEach(e=>{e.next()})}class Yu{constructor(e,t,r){this.query=e,this.G_=t,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new vr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Y_(e){e=vr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e,t){this.X_=e,this.byteLength=t}ea(){return"metadata"in this.X_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e){this.serializer=e}Ps(e){return ct(this.serializer,e)}Is(e){return e.metadata.exists?Lp(this.serializer,e.document,!1):K.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return ae(e)}}class TP{constructor(e,t,r){this.ta=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=gg(e)}na(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.X_.namedQuery)this.queries.push(e.X_.namedQuery);else if(e.X_.documentMetadata){this.documents.push({metadata:e.X_.documentMetadata}),e.X_.documentMetadata.exists||++t;const r=O.fromString(e.X_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.X_.document&&(this.documents[this.documents.length-1].document=e.X_.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ra(e){const t=new Map,r=new cd(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||V()).add(s);t.set(o,a)}}return t}async complete(){const e=await XR(this.localStore,new cd(this.serializer),this.documents,this.ta.id),t=this.ra(this.documents);for(const r of this.queries)await ZR(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ia:this.collectionGroups,sa:e}}}function gg(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e){this.key=e}}class yg{constructor(e){this.key=e}}class Ig{constructor(e,t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=V(),this.mutatedKeys=V(),this.ua=fp(e),this.ca=new cr(this.ua)}get la(){return this.oa}ha(e,t){const r=t?t.Pa:new ad,i=t?t.ca:this.ca;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),m=cs(this.query,h)?h:null,w=!!d&&this.mutatedKeys.has(d.key),E=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let v=!1;d&&m?d.data.isEqual(m.data)?w!==E&&(r.track({type:3,doc:m}),v=!0):this.Ia(d,m)||(r.track({type:2,doc:m}),v=!0,(c&&this.ua(m,c)>0||u&&this.ua(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),v=!0):d&&!m&&(r.track({type:1,doc:d}),v=!0,(c||u)&&(a=!0)),v&&(m?(o=o.add(m),s=E?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const o=e.Pa.k_();o.sort((l,h)=>function(m,w){const E=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return R()}};return E(m)-E(w)}(l.type,h.type)||this.ua(l.doc,h.doc)),this.Ta(r),i=i!=null&&i;const a=t&&!i?this.Ea():[],c=this.aa.size===0&&this.current&&!i?1:0,u=c!==this._a;return this._a=c,o.length!==0||u?{snapshot:new vr(this.query,e.ca,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new ad,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(t=>this.oa=this.oa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.oa=this.oa.delete(t)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=V(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const t=[];return e.forEach(r=>{this.aa.has(r)||t.push(new yg(r))}),this.aa.forEach(r=>{e.has(r)||t.push(new _g(r))}),t}Ra(e){this.oa=e.hs,this.aa=V();const t=this.ha(e.documents);return this.applyChanges(t,!0)}Va(){return vr.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class AP{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class RP{constructor(e){this.key=e,this.ma=!1}}class PP{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new tn(a=>hp(a),as),this.pa=new Map,this.ya=new Set,this.wa=new G(I.comparator),this.Sa=new Map,this.ba=new Mu,this.Da={},this.Ca=new Map,this.va=Vn.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function bP(n,e){const t=tl(n);let r,i;const s=t.ga.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await yr(t.localStore,Ne(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Ju(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&Jo(t.remoteStore,o)}return i}async function Ju(n,e,t,r,i){n.Ma=(h,d,m)=>async function(E,v,D,M){let N=v.view.ha(D);N.Xi&&(N=await uo(E.localStore,v.query,!1).then(({documents:le})=>v.view.ha(le,N)));const z=M&&M.targetChanges.get(v.targetId),H=M&&M.targetMismatches.get(v.targetId)!=null,j=v.view.applyChanges(N,E.isPrimaryClient,z,H);return Ic(E,v.targetId,j.da),j.snapshot}(n,h,d,m);const s=await uo(n.localStore,e,!0),o=new Ig(e,s.hs),a=o.ha(s.documents),c=hs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);Ic(n,t,u.da);const l=new AP(e,t,o);return n.ga.set(e,l),n.pa.has(t)?n.pa.get(t).push(e):n.pa.set(t,[e]),u.snapshot}async function SP(n,e){const t=T(n),r=t.ga.get(e),i=t.pa.get(r.targetId);if(i.length>1)return t.pa.set(r.targetId,i.filter(s=>!as(s,e))),void t.ga.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await Ir(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),qi(t.remoteStore,r.targetId),wr(t,r.targetId)}).catch(Zt)):(wr(t,r.targetId),await Ir(t.localStore,r.targetId,!0))}async function CP(n,e,t){const r=nl(n);try{const i=await function(o,a){const c=T(o),u=J.now(),l=a.reduce((m,w)=>m.add(w.key),V());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let w=Ue(),E=V();return c.os.getEntries(m,l).next(v=>{w=v,w.forEach((D,M)=>{M.isValidDocument()||(E=E.add(D))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,w)).next(v=>{h=v;const D=[];for(const M of a){const N=iR(M,h.get(M.key).overlayedDocument);N!=null&&D.push(new At(M.key,N,np(N.value.mapValue),Y.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,D,a)}).next(v=>{d=v;const D=v.applyToLocalDocumentSet(h,E);return c.documentOverlayCache.saveOverlays(m,v.batchId,D)})}).then(()=>({batchId:d.batchId,changes:pp(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Da[o.currentUser.toKey()];u||(u=new G(k)),u=u.insert(a,c),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,t),await Rt(r,i.changes),await Lr(r.remoteStore)}catch(i){const s=Fr(i,"Failed to persist write");t.reject(s)}}async function vg(n,e){const t=T(n);try{const r=await YR(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Sa.get(s);o&&(P(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?P(o.ma):i.removedDocuments.size>0&&(P(o.ma),o.ma=!1))}),await Rt(t,r,e)}catch(r){await Zt(r)}}function ud(n,e,t){const r=T(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=T(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.Q_)d.U_(a)&&(u=!0)}),u&&Qu(c)}(r.eventManager,e),i.length&&r.fa.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kP(n,e,t){const r=T(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new G(I.comparator);o=o.insert(s,K.newNoDocument(s,b.min()));const a=V().add(s),c=new ls(b.min(),new Map,new G(k),o,a);await vg(r,c),r.wa=r.wa.remove(s),r.Sa.delete(e),el(r)}else await Ir(r.localStore,e,!1).then(()=>wr(r,e,t)).catch(Zt)}async function DP(n,e){const t=T(n),r=e.batch.batchId;try{const i=await QR(t.localStore,e);Zu(t,r,null),Xu(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Rt(t,i)}catch(i){await Zt(i)}}async function VP(n,e,t){const r=T(n);try{const i=await function(o,a){const c=T(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(P(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,e);Zu(r,e,t),Xu(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Rt(r,i)}catch(i){await Zt(i)}}async function NP(n,e){const t=T(n);nn(t.remoteStore)||_("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=T(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>a.mutationQueue.getHighestUnacknowledgedBatchId(c))}(t.localStore);if(r===-1)return void e.resolve();const i=t.Ca.get(r)||[];i.push(e),t.Ca.set(r,i)}catch(r){const i=Fr(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Xu(n,e){(n.Ca.get(e)||[]).forEach(t=>{t.resolve()}),n.Ca.delete(e)}function Zu(n,e,t){const r=T(n);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function wr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.pa.get(e))n.ga.delete(r),t&&n.fa.xa(r,t);n.pa.delete(e),n.isPrimaryClient&&n.ba.Vr(e).forEach(r=>{n.ba.containsKey(r)||wg(n,r)})}function wg(n,e){n.ya.delete(e.path.canonicalString());const t=n.wa.get(e);t!==null&&(qi(n.remoteStore,t),n.wa=n.wa.remove(e),n.Sa.delete(t),el(n))}function Ic(n,e,t){for(const r of t)r instanceof _g?(n.ba.addReference(r.key,e),xP(n,r)):r instanceof yg?(_("SyncEngine","Document no longer in limbo: "+r.key),n.ba.removeReference(r.key,e),n.ba.containsKey(r.key)||wg(n,r.key)):R()}function xP(n,e){const t=e.key,r=t.path.canonicalString();n.wa.get(t)||n.ya.has(r)||(_("SyncEngine","New document in limbo: "+t),n.ya.add(r),el(n))}function el(n){for(;n.ya.size>0&&n.wa.size<n.maxConcurrentLimboResolutions;){const e=n.ya.values().next().value;n.ya.delete(e);const t=new I(O.fromString(e)),r=n.va.next();n.Sa.set(r,new RP(t)),n.wa=n.wa.insert(t,r),Jo(n.remoteStore,new pt(Ne(Vr(t.path)),r,"TargetPurposeLimboResolution",Me._e))}}async function Rt(n,e,t){const r=T(n),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Bu.Ki(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.fa.u_(i),await async function(c,u){const l=T(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>f.forEach(u,d=>f.forEach(d.qi,m=>l.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>f.forEach(d.Qi,m=>l.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!en(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const m=l.ns.get(d),w=m.snapshotVersion,E=m.withLastLimboFreeSnapshotVersion(w);l.ns=l.ns.insert(d,E)}}}(r.localStore,s))}async function OP(n,e){const t=T(n);if(!t.currentUser.isEqual(e)){_("SyncEngine","User change. New user:",e.toKey());const r=await ng(t.localStore,e);t.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(c=>{c.reject(new g(p.CANCELLED,o))})}),s.Ca.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Rt(t,r.us)}}function LP(n,e){const t=T(n),r=t.Sa.get(e);if(r&&r.ma)return V().add(r.key);{let i=V();const s=t.pa.get(e);if(!s)return i;for(const o of s){const a=t.ga.get(o);i=i.unionWith(a.view.la)}return i}}async function MP(n,e){const t=T(n),r=await uo(t.localStore,e.query,!0),i=e.view.Ra(r);return t.isPrimaryClient&&Ic(t,e.targetId,i.da),i}async function FP(n,e){const t=T(n);return og(t.localStore,e).then(r=>Rt(t,r))}async function UP(n,e,t,r){const i=T(n),s=await function(a,c){const u=T(a),l=T(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>l.vn(h,c).next(d=>d?u.localDocuments.getDocuments(h,d):f.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Lr(i.remoteStore):t==="acknowledged"||t==="rejected"?(Zu(i,e,r||null),Xu(i,e),function(a,c){T(T(a).mutationQueue).Mn(c)}(i.localStore,e)):R(),await Rt(i,s)):_("SyncEngine","Cannot apply mutation batch with id: "+e)}async function BP(n,e){const t=T(n);if(tl(t),nl(t),e===!0&&t.Fa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await ld(t,r.toArray());t.Fa=!0,await yc(t.remoteStore,!0);for(const s of i)Jo(t.remoteStore,s)}else if(e===!1&&t.Fa!==!1){const r=[];let i=Promise.resolve();t.pa.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(wr(t,o),Ir(t.localStore,o,!0))),qi(t.remoteStore,o)}),await i,await ld(t,r),function(o){const a=T(o);a.Sa.forEach((c,u)=>{qi(a.remoteStore,u)}),a.ba.mr(),a.Sa=new Map,a.wa=new G(I.comparator)}(t),t.Fa=!1,await yc(t.remoteStore,!1)}}async function ld(n,e,t){const r=T(n),i=[],s=[];for(const o of e){let a;const c=r.pa.get(o);if(c&&c.length!==0){a=await yr(r.localStore,Ne(c[0]));for(const u of c){const l=r.ga.get(u),h=await MP(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await sg(r.localStore,o);a=await yr(r.localStore,u),await Ju(r,Eg(u),o,!1,a.resumeToken)}i.push(a)}return r.fa.u_(s),i}function Eg(n){return lp(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function qP(n){return function(t){return T(T(t).persistence).Li()}(T(n).localStore)}async function $P(n,e,t,r){const i=T(n);if(i.Fa)return void _("SyncEngine","Ignoring unexpected query state notification.");const s=i.pa.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await og(i.localStore,dp(s[0])),a=ls.createSynthesizedRemoteEventForCurrentChange(e,t==="current",he.EMPTY_BYTE_STRING);await Rt(i,o,a);break}case"rejected":await Ir(i.localStore,e,!0),wr(i,e,r);break;default:R()}}async function jP(n,e,t){const r=tl(n);if(r.Fa){for(const i of e){if(r.pa.has(i)){_("SyncEngine","Adding an already active target "+i);continue}const s=await sg(r.localStore,i),o=await yr(r.localStore,s);await Ju(r,Eg(s),o.targetId,!1,o.resumeToken),Jo(r.remoteStore,o)}for(const i of t)r.pa.has(i)&&await Ir(r.localStore,i,!1).then(()=>{qi(r.remoteStore,i),wr(r,i)}).catch(Zt)}}function tl(n){const e=T(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=vg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kP.bind(null,e),e.fa.u_=vP.bind(null,e.eventManager),e.fa.xa=wP.bind(null,e.eventManager),e}function nl(n){const e=T(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VP.bind(null,e),e}function GP(n,e,t){const r=T(n);(async function(s,o,a){try{const c=await o.getMetadata();if(await function(m,w){const E=T(m),v=ae(w.createTime);return E.persistence.runTransaction("hasNewerBundle","readonly",D=>E.$r.getBundleMetadata(D,w.id)).then(D=>!!D&&D.createTime.compareTo(v)>=0)}(s.localStore,c))return await o.close(),a._completeWith(function(m){return{taskState:"Success",documentsLoaded:m.totalDocuments,bytesLoaded:m.totalBytes,totalDocuments:m.totalDocuments,totalBytes:m.totalBytes}}(c)),Promise.resolve(new Set);a._updateProgress(gg(c));const u=new TP(c,s.localStore,o.serializer);let l=await o.Oa();for(;l;){const d=await u.na(l);d&&a._updateProgress(d),l=await o.Oa()}const h=await u.complete();return await Rt(s,h.sa,void 0),await function(m,w){const E=T(m);return E.persistence.runTransaction("Save bundle","readwrite",v=>E.$r.saveBundleMetadata(v,w))}(s.localStore,c),a._completeWith(h.progress),Promise.resolve(h.ia)}catch(c){return Ye("SyncEngine",`Loading bundle failed with ${c}`),a._failWith(c),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class vc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ds(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return tg(this.persistence,new eg,e.initialUser,this.serializer)}createPersistence(e){return new Zp(Yo.Hr,this.serializer)}createSharedClientState(e){return new cg}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Tg extends vc{constructor(e,t,r){super(),this.Na=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Na.initialize(this,e),await nl(this.Na.syncEngine),await Lr(this.Na.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return tg(this.persistence,new eg,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new VR(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new pA(t,this.persistence);return new mA(e.asyncQueue,r)}createPersistence(e){const t=Uu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Le.withCacheSize(this.cacheSizeBytes):Le.DEFAULT;return new Fu(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,ug(),Bs(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new cg}}class zP extends Tg{constructor(e,t){super(e,t,!1),this.Na=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Na.syncEngine;this.sharedClientState instanceof Va&&(this.sharedClientState.syncEngine={Zs:UP.bind(null,t),Xs:$P.bind(null,t),eo:jP.bind(null,t),Li:qP.bind(null,t),Ys:FP.bind(null,t)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await BP(this.Na.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=ug();if(!Va.D(t))throw new g(p.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Uu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Va(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class rl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ud(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=OP.bind(null,this.syncEngine),await yc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new IP}()}createDatastore(e){const t=ds(e.databaseInfo.databaseId),r=function(s){return new rP(s)}(e.databaseInfo);return function(s,o,a,c){return new oP(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new cP(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>ud(this.syncEngine,t,0),function(){return sd.D()?new sd:new eP}())}createSyncEngine(e,t){return function(i,s,o,a,c,u,l){const h=new PP(i,s,o,a,c,u);return l&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){const i=T(r);_("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await Or(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):oe("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e,t){this.ka=e,this.serializer=t,this.metadata=new me,this.buffer=new Uint8Array,this.qa=function(){return new TextDecoder("utf-8")}(),this.Qa().then(r=>{r&&r.ea()?this.metadata.resolve(r.X_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.X_)}`))},r=>this.metadata.reject(r))}close(){return this.ka.cancel()}async getMetadata(){return this.metadata.promise}async Oa(){return await this.getMetadata(),this.Qa()}async Qa(){const e=await this.Ka();if(e===null)return null;const t=this.qa.decode(e),r=Number(t);isNaN(r)&&this.$a(`length string (${t}) is not valid number`);const i=await this.Ua(r);return new EP(JSON.parse(i),e.length+r)}Wa(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Ka(){for(;this.Wa()<0&&!await this.Ga(););if(this.buffer.length===0)return null;const e=this.Wa();e<0&&this.$a("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Ua(e){for(;this.buffer.length<e;)await this.Ga()&&this.$a("Reached the end of bundle when more is expected.");const t=this.qa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}$a(e){throw this.ka.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ga(){const e=await this.ka.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new g(p.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,s){const o=T(i),a={documents:s.map(h=>Ui(o.serializer,h))},c=await o.vo("BatchGetDocuments",o.serializer.databaseId,O.emptyPath(),a,s.length),u=new Map;c.forEach(h=>{const d=fR(o.serializer,h);u.set(d.key.toString(),d)});const l=[];return s.forEach(h=>{const d=u.get(h.toString());P(!!d),l.push(d)}),l}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new xr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=I.fromPath(r);this.mutations.push(new Su(i,this.precondition(i)))}),await async function(r,i){const s=T(r),o={writes:i.map(a=>Bi(s.serializer,a))};await s.So("Commit",s.serializer.databaseId,O.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw R();t=b.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new g(p.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(b.min())?Y.exists(!1):Y.updateTime(t):Y.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(b.min()))throw new g(p.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Y.updateTime(t)}return Y.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.za=r.maxAttempts,this.jo=new $u(this.asyncQueue,"transaction_retry")}ja(){this.za-=1,this.Ha()}Ha(){this.jo.qo(async()=>{const e=new KP(this.datastore),t=this.Ja(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Ya(i)}))}).catch(r=>{this.Ya(r)})})}Ja(e){try{const t=this.updateFunction(e);return!ss(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Ya(e){this.za>0&&this.Za(e)?(this.za-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ha(),Promise.resolve()))):this.deferred.reject(e)}Za(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Pp(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=fe.UNAUTHENTICATED,this.clientId=$m.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new g(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new me;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Fr(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function qs(n,e){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ng(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function wc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await il(n);_("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>od(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>od(e.remoteStore,i)),n._onlineComponents=e}function Ag(n){return n.name==="FirebaseError"?n.code===p.FAILED_PRECONDITION||n.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function il(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await qs(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Ag(t))throw t;Ye("Error using user provided cache. Falling back to memory cache: "+t),await qs(n,new vc)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await qs(n,new vc);return n._offlineComponents}async function Zo(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await wc(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await wc(n,new rl))),n._onlineComponents}function Rg(n){return il(n).then(e=>e.persistence)}function sl(n){return il(n).then(e=>e.localStore)}function Pg(n){return Zo(n).then(e=>e.remoteStore)}function ol(n){return Zo(n).then(e=>e.syncEngine)}function YP(n){return Zo(n).then(e=>e.datastore)}async function Er(n){const e=await Zo(n),t=e.eventManager;return t.onListen=bP.bind(null,e.syncEngine),t.onUnlisten=SP.bind(null,e.syncEngine),t}function JP(n){return n.asyncQueue.enqueue(async()=>{const e=await Rg(n),t=await Pg(n);return e.setNetworkEnabled(!0),function(i){const s=T(i);return s.v_.delete(0),fs(s)}(t)})}function XP(n){return n.asyncQueue.enqueue(async()=>{const e=await Rg(n),t=await Pg(n);return e.setNetworkEnabled(!1),async function(i){const s=T(i);s.v_.add(0),await Or(s),s.x_.set("Offline")}(t)})}function ZP(n,e){const t=new me;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,l){const h=T(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,l))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new g(p.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const c=Fr(a,`Failed to get document '${s} from cache`);o.reject(c)}}(await sl(n),e,t)),t.promise}function bg(n,e,t={}){const r=new me;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new Xo({next:d=>{o.enqueueAndForget(()=>Hu(s,h));const m=d.docs.has(a);!m&&d.fromCache?u.reject(new g(p.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&c&&c.source==="server"?u.reject(new g(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Yu(Vr(a.path),l,{includeMetadataChanges:!0,Z_:!0});return Ku(s,h)}(await Er(n),n.asyncQueue,e,t,r)),r.promise}function eb(n,e){const t=new me;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await uo(i,s,!0),c=new Ig(s,a.hs),u=c.ha(a.documents),l=c.applyChanges(u,!1);o.resolve(l.snapshot)}catch(a){const c=Fr(a,`Failed to execute query '${s} against cache`);o.reject(c)}}(await sl(n),e,t)),t.promise}function Sg(n,e,t={}){const r=new me;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new Xo({next:d=>{o.enqueueAndForget(()=>Hu(s,h)),d.fromCache&&c.source==="server"?u.reject(new g(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Yu(a,l,{includeMetadataChanges:!0,Z_:!0});return Ku(s,h)}(await Er(n),n.asyncQueue,e,t,r)),r.promise}function tb(n,e){const t=new Xo(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){T(i).K_.add(s),s.next()}(await Er(n),t)),()=>{t.La(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){T(i).K_.delete(s)}(await Er(n),t))}}function nb(n,e,t,r){const i=function(o,a){let c;return c=typeof o=="string"?Sp().encode(o):o,function(l,h){return new WP(l,h)}(function(l,h){if(l instanceof Uint8Array)return hd(l,h);if(l instanceof ArrayBuffer)return hd(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),a)}(t,ds(e));n.asyncQueue.enqueueAndForget(async()=>{GP(await ol(n),i,r)})}function rb(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=T(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await sl(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(n,e,t){if(!t)throw new g(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function kg(n,e,t,r){if(e===!0&&r===!0)throw new g(p.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function fd(n){if(!I.isDocumentKey(n))throw new g(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function md(n){if(I.isDocumentKey(n))throw new g(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ea(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":R()}function U(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new g(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ea(n);throw new g(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Dg(n,e){if(e<=0)throw new g(p.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new g(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new g(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new g(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new g(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new g(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ms{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new g(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new g(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new rA;switch(r.type){case"firstParty":return new aA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new g(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=dd.get(t);r&&(_("ComponentProvider","Removing Datastore"),dd.delete(t),r.terminate())}(this),Promise.resolve()}}function ib(n,e,t,r={}){var i;const s=(n=U(n,ms))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ye("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=fe.MOCK_USER;else{a=m_(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new g(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new fe(u)}n._authCredentials=new iA(new qm(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xe=class Vg{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vg(this.firestore,e,this._query)}},Z=class Ng{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ng(this.firestore,e,this._key)}},Lt=class xg extends xe{constructor(e,t,r){super(e,t,Vr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Z(this.firestore,null,new I(e))}withConverter(e){return new xg(this.firestore,e,this._path)}};function Og(n,e,...t){if(n=S(n),al("collection","path",e),n instanceof ms){const r=O.fromString(e,...t);return md(r),new Lt(n,null,r)}{if(!(n instanceof Z||n instanceof Lt))throw new g(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(O.fromString(e,...t));return md(r),new Lt(n.firestore,null,r)}}function sb(n,e){if(n=U(n,ms),al("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new g(p.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new xe(n,null,function(r){return new Tt(O.emptyPath(),r)}(e))}function mo(n,e,...t){if(n=S(n),arguments.length===1&&(e=$m.newId()),al("doc","path",e),n instanceof ms){const r=O.fromString(e,...t);return fd(r),new Z(n,null,new I(r))}{if(!(n instanceof Z||n instanceof Lt))throw new g(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(O.fromString(e,...t));return fd(r),new Z(n.firestore,n instanceof Lt?n.converter:null,new I(r))}}function Lg(n,e){return n=S(n),e=S(e),(n instanceof Z||n instanceof Lt)&&(e instanceof Z||e instanceof Lt)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Mg(n,e){return n=S(n),e=S(e),n instanceof xe&&e instanceof xe&&n.firestore===e.firestore&&as(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new $u(this,"async_queue_retry"),this._u=()=>{const t=Bs();t&&_("AsyncQueue","Visibility state changed to "+t.visibilityState),this.jo.Ko()};const e=Bs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const t=Bs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const t=new me;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!en(e))throw e;_("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const t=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw oe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=t,t}enqueueAfterDelay(e,t,r){this.au(),this.ou.indexOf(e)>-1&&(t=0);const i=Wu.createAndSchedule(this,e,t,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&R()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const t of this.nu)if(t.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.nu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const t=this.nu.indexOf(e);this.nu.splice(t,1)}}function Ec(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class ab{constructor(){this._progressObserver={},this._taskCompletionResolver=new me,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=-1;let re=class extends ms{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new ob}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Fg(this),this._firestoreClient.terminate()}};function ye(n){return n._firestoreClient||Fg(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Fg(n){var e,t,r;const i=n._freezeSettings(),s=function(a,c,u,l){return new LA(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Cg(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new QP(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function ub(n,e){Bg(n=U(n,re));const t=ye(n);if(t._uninitializedComponentsProvider)throw new g(p.FAILED_PRECONDITION,"SDK cache is already specified.");Ye("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new rl;return Ug(t,i,new Tg(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function lb(n){Bg(n=U(n,re));const e=ye(n);if(e._uninitializedComponentsProvider)throw new g(p.FAILED_PRECONDITION,"SDK cache is already specified.");Ye("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new rl;return Ug(e,r,new zP(r,t.cacheSizeBytes))}function Ug(n,e,t){const r=new me;return n.asyncQueue.enqueue(async()=>{try{await qs(n,t),await wc(n,e),r.resolve()}catch(i){const s=i;if(!Ag(s))throw s;Ye("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function hb(n){if(n._initialized&&!n._terminated)throw new g(p.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new me;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!ze.D())return Promise.resolve();const i=r+"main";await ze.delete(i)}(Uu(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function db(n){return function(t){const r=new me;return t.asyncQueue.enqueueAndForget(async()=>NP(await ol(t),r)),r.promise}(ye(n=U(n,re)))}function fb(n){return JP(ye(n=U(n,re)))}function mb(n){return XP(ye(n=U(n,re)))}function pb(n,e){const t=ye(n=U(n,re)),r=new ab;return nb(t,n._databaseId,e,r),r}function gb(n,e){return rb(ye(n=U(n,re)),e).then(t=>t?new xe(n,null,t.query):null)}function Bg(n){if(n._initialized||n._terminated)throw new g(p.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new dt(he.fromBase64String(e))}catch(t){throw new g(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new dt(he.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kt=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new g(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Q(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Un=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new g(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new g(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return k(this._lat,e._lat)||k(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=/^__.*__$/;class yb{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new At(e,this.data,this.fieldMask,t,this.fieldTransforms):new Nr(e,this.data,t,this.fieldTransforms)}}class qg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new At(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function $g(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw R()}}class na{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new na(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Au({path:r,Vu:!1});return i.mu(e),i}fu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return po(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if($g(this.du)&&_b.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class Ib{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ds(e)}Su(e,t,r,i=!1){return new na({du:e,methodName:t,wu:r,path:Q.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bn(n){const e=n._freezeSettings(),t=ds(n._databaseId);return new Ib(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ra(n,e,t,r,i,s={}){const o=n.Su(s.merge||s.mergeFields?2:0,e,t,i);ml("Data must be an object, but it was:",o,r);const a=zg(r,o);let c,u;if(s.merge)c=new Fe(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=Tc(e,h,t);if(!o.contains(d))throw new g(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Kg(l,d)||l.push(d)}c=new Fe(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new yb(new we(a),c,u)}class ps extends Un{_toFieldTransform(e){if(e.du!==2)throw e.du===1?e.pu(`${this._methodName}() can only appear at the top level of your update data`):e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ps}}function jg(n,e,t){return new na({du:3,wu:e.settings.wu,methodName:n._methodName,Vu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class cl extends Un{_toFieldTransform(e){return new us(e.path,new pr)}isEqual(e){return e instanceof cl}}class ul extends Un{constructor(e,t){super(e),this.bu=t}_toFieldTransform(e){const t=jg(this,e,!0),r=this.bu.map(s=>qn(s,t)),i=new Sn(r);return new us(e.path,i)}isEqual(e){return e instanceof ul&&pi(this.bu,e.bu)}}class ll extends Un{constructor(e,t){super(e),this.bu=t}_toFieldTransform(e){const t=jg(this,e,!0),r=this.bu.map(s=>qn(s,t)),i=new Cn(r);return new us(e.path,i)}isEqual(e){return e instanceof ll&&pi(this.bu,e.bu)}}class hl extends Un{constructor(e,t){super(e),this.Du=t}_toFieldTransform(e){const t=new gr(e.serializer,Ip(e.serializer,this.Du));return new us(e.path,t)}isEqual(e){return e instanceof hl&&this.Du===e.Du}}function dl(n,e,t,r){const i=n.Su(1,e,t);ml("Data must be an object, but it was:",i,r);const s=[],o=we.empty();Fn(r,(c,u)=>{const l=pl(e,c,t);u=S(u);const h=i.fu(l);if(u instanceof ps)s.push(l);else{const d=qn(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Fe(s);return new qg(o,a,i.fieldTransforms)}function fl(n,e,t,r,i,s){const o=n.Su(1,e,t),a=[Tc(e,r,t)],c=[i];if(s.length%2!=0)throw new g(p.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Tc(e,s[d])),c.push(s[d+1]);const u=[],l=we.empty();for(let d=a.length-1;d>=0;--d)if(!Kg(u,a[d])){const m=a[d];let w=c[d];w=S(w);const E=o.fu(m);if(w instanceof ps)u.push(m);else{const v=qn(w,E);v!=null&&(u.push(m),l.set(m,v))}}const h=new Fe(u);return new qg(l,h,o.fieldTransforms)}function Gg(n,e,t,r=!1){return qn(t,n.Su(r?4:3,e))}function qn(n,e){if(Wg(n=S(n)))return ml("Unsupported field value:",e,n),zg(n,e);if(n instanceof Un)return function(r,i){if(!$g(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=qn(a,i.gu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=S(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ip(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=J.fromDate(r);return{timestampValue:_r(i.serializer,s)}}if(r instanceof J){const s=new J(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_r(i.serializer,s)}}if(r instanceof ta)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof dt)return{bytesValue:Dp(i.serializer,r._byteString)};if(r instanceof Z){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Nu(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${ea(r)}`)}(n,e)}function zg(n,e){const t={};return Zm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fn(n,(r,i)=>{const s=qn(i,e.Ru(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Wg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof J||n instanceof ta||n instanceof dt||n instanceof Z||n instanceof Un)}function ml(n,e,t){if(!Wg(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=ea(t);throw r==="an object"?e.pu(n+" a custom object"):e.pu(n+" "+r)}}function Tc(n,e,t){if((e=S(e))instanceof Kt)return e._internalPath;if(typeof e=="string")return pl(n,e);throw po("Field path arguments must be of type string or ",n,!1,void 0,t)}const vb=new RegExp("[~\\*/\\[\\]]");function pl(n,e,t){if(e.search(vb)>=0)throw po(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Kt(...e.split("."))._internalPath}catch{throw po(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function po(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new g(p.INVALID_ARGUMENT,a+n+c)}function Kg(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Z(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ia("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class wb extends $i{data(){return super.data()}}function ia(n,e){return typeof e=="string"?pl(n,e):e instanceof Kt?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new g(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gl{}class gs extends gl{}function kt(n,e,...t){let r=[];e instanceof gl&&r.push(e),r=r.concat(t),function(s){const o=s.filter(c=>c instanceof _l).length,a=s.filter(c=>c instanceof sa).length;if(o>1||o>0&&a>0)throw new g(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class sa extends gs{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new sa(e,t,r)}_apply(e){const t=this._parse(e);return Yg(e._query,t),new xe(e.firestore,e.converter,uc(e._query,t))}_parse(e){const t=Bn(e.firestore);return function(s,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new g(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){_d(h,l);const m=[];for(const w of h)m.push(gd(c,s,w));d={arrayValue:{values:m}}}else d=gd(c,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||_d(h,l),d=Gg(a,o,h,l==="in"||l==="not-in");return L.create(u,l,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Eb(n,e,t){const r=e,i=ia("where",n);return sa._create(i,r,t)}class _l extends gl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new _l(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:B.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)Yg(o,c),o=uc(o,c)}(e._query,t),new xe(e.firestore,e.converter,uc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class yl extends gs{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new yl(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new g(p.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new g(p.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Fi(s,o)}(e._query,this._field,this._direction);return new xe(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Tt(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Tb(n,e="asc"){const t=e,r=ia("orderBy",n);return yl._create(r,t)}class oa extends gs{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new oa(e,t,r)}_apply(e){return new xe(e.firestore,e.converter,so(e._query,this._limit,this._limitType))}}function Ab(n){return Dg("limit",n),oa._create("limit",n,"F")}function Rb(n){return Dg("limitToLast",n),oa._create("limitToLast",n,"L")}class aa extends gs{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new aa(e,t,r)}_apply(e){const t=Qg(e,this.type,this._docOrFields,this._inclusive);return new xe(e.firestore,e.converter,function(i,s){return new Tt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function Pb(...n){return aa._create("startAt",n,!0)}function bb(...n){return aa._create("startAfter",n,!1)}class ca extends gs{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ca(e,t,r)}_apply(e){const t=Qg(e,this.type,this._docOrFields,this._inclusive);return new xe(e.firestore,e.converter,function(i,s){return new Tt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function Sb(...n){return ca._create("endBefore",n,!1)}function Cb(...n){return ca._create("endAt",n,!0)}function Qg(n,e,t,r){if(t[0]=S(t[0]),t[0]instanceof $i)return function(s,o,a,c,u){if(!c)throw new g(p.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of ar(s))if(h.field.isKeyField())l.push(Pn(o,c.key));else{const d=c.data.field(h.field);if(zo(d))throw new g(p.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const m=h.field.canonicalString();throw new g(p.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${m}' (used as the orderBy) does not exist.`)}l.push(d)}return new zt(l,u)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=Bn(n.firestore);return function(o,a,c,u,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new g(p.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const m=[];for(let w=0;w<l.length;w++){const E=l[w];if(d[w].field.isKeyField()){if(typeof E!="string")throw new g(p.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof E}`);if(!Pu(o)&&E.indexOf("/")!==-1)throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${E}' contains a slash.`);const v=o.path.child(O.fromString(E));if(!I.isDocumentKey(v))throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const D=new I(v);m.push(Pn(a,D))}else{const v=Gg(c,u,E);m.push(v)}}return new zt(m,h)}(n._query,n.firestore._databaseId,i,e,t,r)}}function gd(n,e,t){if(typeof(t=S(t))=="string"){if(t==="")throw new g(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pu(e)&&t.indexOf("/")!==-1)throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(O.fromString(t));if(!I.isDocumentKey(r))throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pn(n,new I(r))}if(t instanceof Z)return Pn(n,t._key);throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ea(t)}.`)}function _d(n,e){if(!Array.isArray(n)||n.length===0)throw new g(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Yg(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new g(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new g(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Il{convertValue(e,t="none"){switch(Rn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes($t(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw R()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Fn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new ta(ee(e.latitude),ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Au(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Oi(e));default:return null}}convertTimestamp(e){const t=qt(e);return new J(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=O.fromString(e);P($p(r));const i=new jt(r.get(1),r.get(3)),s=new I(r.popFirst(5));return i.isEqual(t)||oe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class kb extends Il{constructor(e){super(),this.firestore=e}convertBytes(e){return new dt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Z(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let vt=class extends $i{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new fi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ia("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},fi=class extends vt{data(e={}){return super.data(e)}},Ht=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new pn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new fi(this._firestore,this._userDataWriter,r.key,r,new pn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new g(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new fi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new pn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new fi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new pn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:Db(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function Db(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return R()}}function Jg(n,e){return n instanceof vt&&e instanceof vt?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Ht&&e instanceof Ht&&n._firestore===e._firestore&&Mg(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(n){n=U(n,Z);const e=U(n.firestore,re);return bg(ye(e),n._key).then(t=>vl(e,n,t))}class $n extends Il{constructor(e){super(),this.firestore=e}convertBytes(e){return new dt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Z(this.firestore,null,t)}}function Nb(n){n=U(n,Z);const e=U(n.firestore,re),t=ye(e),r=new $n(e);return ZP(t,n._key).then(i=>new vt(e,r,n._key,i,new pn(i!==null&&i.hasLocalMutations,!0),n.converter))}function xb(n){n=U(n,Z);const e=U(n.firestore,re);return bg(ye(e),n._key,{source:"server"}).then(t=>vl(e,n,t))}function Ob(n){n=U(n,xe);const e=U(n.firestore,re),t=ye(e),r=new $n(e);return Hg(n._query),Sg(t,n._query).then(i=>new Ht(e,r,n,i))}function Lb(n){n=U(n,xe);const e=U(n.firestore,re),t=ye(e),r=new $n(e);return eb(t,n._query).then(i=>new Ht(e,r,n,i))}function Mb(n){n=U(n,xe);const e=U(n.firestore,re),t=ye(e),r=new $n(e);return Sg(t,n._query,{source:"server"}).then(i=>new Ht(e,r,n,i))}function yd(n,e,t){n=U(n,Z);const r=U(n.firestore,re),i=ua(n.converter,e,t);return _s(r,[ra(Bn(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Y.none())])}function Id(n,e,t,...r){n=U(n,Z);const i=U(n.firestore,re),s=Bn(i);let o;return o=typeof(e=S(e))=="string"||e instanceof Kt?fl(s,"updateDoc",n._key,e,t,r):dl(s,"updateDoc",n._key,e),_s(i,[o.toMutation(n._key,Y.exists(!0))])}function Fb(n){return _s(U(n.firestore,re),[new xr(n._key,Y.none())])}function Ub(n,e){const t=U(n.firestore,re),r=mo(n),i=ua(n.converter,e);return _s(t,[ra(Bn(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Y.exists(!1))]).then(()=>r)}function Xg(n,...e){var t,r,i;n=S(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ec(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Ec(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof Z)u=U(n.firestore,re),l=Vr(n._key.path),c={next:h=>{e[o]&&e[o](vl(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=U(n,xe);u=U(h.firestore,re),l=h._query;const d=new $n(u);c={next:m=>{e[o]&&e[o](new Ht(u,d,h,m))},error:e[o+1],complete:e[o+2]},Hg(n._query)}return function(d,m,w,E){const v=new Xo(E),D=new Yu(m,v,w);return d.asyncQueue.enqueueAndForget(async()=>Ku(await Er(d),D)),()=>{v.La(),d.asyncQueue.enqueueAndForget(async()=>Hu(await Er(d),D))}}(ye(u),l,a,c)}function Bb(n,e){return tb(ye(n=U(n,re)),Ec(e)?e:{next:e})}function _s(n,e){return function(r,i){const s=new me;return r.asyncQueue.enqueueAndForget(async()=>CP(await ol(r),i,s)),s.promise}(ye(n),e)}function vl(n,e,t){const r=t.docs.get(e._key),i=new $n(n);return new vt(n,i,e._key,r,new pn(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $b=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Bn(e)}set(e,t,r){this._verifyNotCommitted();const i=Vt(e,this._firestore),s=ua(i.converter,t,r),o=ra(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Y.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Vt(e,this._firestore);let o;return o=typeof(t=S(t))=="string"||t instanceof Kt?fl(this._dataReader,"WriteBatch.update",s._key,t,r,i):dl(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Y.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Vt(e,this._firestore);return this._mutations=this._mutations.concat(new xr(t._key,Y.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new g(p.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Vt(n,e){if((n=S(n)).firestore!==e)throw new g(p.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jb=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=Bn(t)}get(t){const r=Vt(t,this._firestore),i=new kb(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return R();const o=s[0];if(o.isFoundDocument())return new $i(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new $i(this._firestore,i,r._key,null,r.converter);throw R()})}set(t,r,i){const s=Vt(t,this._firestore),o=ua(s.converter,r,i),a=ra(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(t,r,i,...s){const o=Vt(t,this._firestore);let a;return a=typeof(r=S(r))=="string"||r instanceof Kt?fl(this._dataReader,"Transaction.update",o._key,r,i,s):dl(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=Vt(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Vt(e,this._firestore),r=new $n(this._firestore);return super.get(e).then(i=>new vt(this._firestore,r,t._key,i._document,new pn(!1,!1),t.converter))}};function Gb(n,e,t){n=U(n,re);const r=Object.assign(Object.assign({},qb),t);return function(s){if(s.maxAttempts<1)throw new g(p.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const c=new me;return s.asyncQueue.enqueueAndForget(async()=>{const u=await YP(s);new HP(s.asyncQueue,u,a,o,c).ja()}),c.promise}(ye(n),i=>e(new jb(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(){return new ps("deleteField")}function Wb(){return new cl("serverTimestamp")}function Kb(...n){return new ul("arrayUnion",n)}function Hb(...n){return new ll("arrayRemove",n)}function Qb(n){return new hl("increment",n)}(function(e,t=!0){(function(i){Dr=i})(Qt),Ut(new ut("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new re(new sA(r.getProvider("auth-internal")),new uA(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new g(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jt(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),at(fh,"4.4.1",e),at(fh,"4.4.1","esm2017")})();const Yb="@firebase/firestore-compat",Jb="0.3.24";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new g("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(){if(typeof Uint8Array>"u")throw new g("unimplemented","Uint8Arrays are not available in this environment.")}function wd(){if(!xA())throw new g("unimplemented","Blobs are unavailable in Firestore in this environment.")}class ji{constructor(e){this._delegate=e}static fromBase64String(e){return wd(),new ji(dt.fromBase64String(e))}static fromUint8Array(e){return vd(),new ji(dt.fromUint8Array(e))}toBase64(){return wd(),this._delegate.toBase64()}toUint8Array(){return vd(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n){return Xb(n,["next","error","complete"])}function Xb(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{enableIndexedDbPersistence(e,t){return ub(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return lb(e._delegate)}clearIndexedDbPersistence(e){return hb(e._delegate)}}class Zg{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof jt||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Ye("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){ib(this._delegate,e,t,r)}enableNetwork(){return fb(this._delegate)}disableNetwork(){return mb(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,kg("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return db(this._delegate)}onSnapshotsInSync(e){return Bb(this._delegate,e)}get app(){if(!this._appCompat)throw new g("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Tr(this,Og(this._delegate,e))}catch(t){throw Ce(t,"collection()","Firestore.collection()")}}doc(e){try{return new We(this,mo(this._delegate,e))}catch(t){throw Ce(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Se(this,sb(this._delegate,e))}catch(t){throw Ce(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Gb(this._delegate,t=>e(new e_(this,t)))}batch(){return ye(this._delegate),new t_(new $b(this._delegate,e=>_s(this._delegate,e)))}loadBundle(e){return pb(this._delegate,e)}namedQuery(e){return gb(this._delegate,e).then(t=>t?new Se(this,t):null)}}class la extends Il{constructor(e){super(),this.firestore=e}convertBytes(e){return new ji(new dt(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return We.forKey(t,this.firestore,null)}}function eS(n){tA(n)}class e_{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new la(e)}get(e){const t=gn(e);return this._delegate.get(t).then(r=>new Gi(this._firestore,new vt(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=gn(e);return r?(wl("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=gn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=gn(e);return this._delegate.delete(t),this}}class t_{constructor(e){this._delegate=e}set(e,t,r){const i=gn(e);return r?(wl("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=gn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=gn(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Nn{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new fi(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new zi(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Nn.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new Nn(e,new la(e),t),i.set(t,s)),s}}Nn.INSTANCES=new WeakMap;class We{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new la(e)}static forPath(e,t,r){if(e.length%2!==0)throw new g("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new We(t,new Z(t._delegate,r,new I(e)))}static forKey(e,t,r){return new We(t,new Z(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Tr(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Tr(this.firestore,Og(this._delegate,e))}catch(t){throw Ce(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=S(e),e instanceof Z?Lg(this._delegate,e):!1}set(e,t){t=wl("DocumentReference.set",t);try{return t?yd(this._delegate,e,t):yd(this._delegate,e)}catch(r){throw Ce(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?Id(this._delegate,e):Id(this._delegate,e,t,...r)}catch(i){throw Ce(i,"updateDoc()","DocumentReference.update()")}}delete(){return Fb(this._delegate)}onSnapshot(...e){const t=n_(e),r=r_(e,i=>new Gi(this.firestore,new vt(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return Xg(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=Nb(this._delegate):(e==null?void 0:e.source)==="server"?t=xb(this._delegate):t=Vb(this._delegate),t.then(r=>new Gi(this.firestore,new vt(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new We(this.firestore,e?this._delegate.withConverter(Nn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ce(n,e,t){return n.message=n.message.replace(e,t),n}function n_(n){for(const e of n)if(typeof e=="object"&&!Ac(e))return e;return{}}function r_(n,e){var t,r;let i;return Ac(n[0])?i=n[0]:Ac(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Gi{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new We(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Jg(this._delegate,e._delegate)}}class zi extends Gi{data(e){const t=this._delegate.data(e);return this._delegate._converter||nA(t!==void 0),t}}class Se{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new la(e)}where(e,t,r){try{return new Se(this.firestore,kt(this._delegate,Eb(e,t,r)))}catch(i){throw Ce(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Se(this.firestore,kt(this._delegate,Tb(e,t)))}catch(r){throw Ce(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Se(this.firestore,kt(this._delegate,Ab(e)))}catch(t){throw Ce(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Se(this.firestore,kt(this._delegate,Rb(e)))}catch(t){throw Ce(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Se(this.firestore,kt(this._delegate,Pb(...e)))}catch(t){throw Ce(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Se(this.firestore,kt(this._delegate,bb(...e)))}catch(t){throw Ce(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Se(this.firestore,kt(this._delegate,Sb(...e)))}catch(t){throw Ce(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Se(this.firestore,kt(this._delegate,Cb(...e)))}catch(t){throw Ce(t,"endAt()","Query.endAt()")}}isEqual(e){return Mg(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=Lb(this._delegate):(e==null?void 0:e.source)==="server"?t=Mb(this._delegate):t=Ob(this._delegate),t.then(r=>new Rc(this.firestore,new Ht(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=n_(e),r=r_(e,i=>new Rc(this.firestore,new Ht(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return Xg(this._delegate,t,r)}withConverter(e){return new Se(this.firestore,e?this._delegate.withConverter(Nn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class tS{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new zi(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Rc{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Se(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new zi(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new tS(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new zi(this._firestore,r))})}isEqual(e){return Jg(this._delegate,e._delegate)}}class Tr extends Se{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new We(this.firestore,e):null}doc(e){try{return e===void 0?new We(this.firestore,mo(this._delegate)):new We(this.firestore,mo(this._delegate,e))}catch(t){throw Ce(t,"doc()","CollectionReference.doc()")}}add(e){return Ub(this._delegate,e).then(t=>new We(this.firestore,t))}isEqual(e){return Lg(this._delegate,e._delegate)}withConverter(e){return new Tr(this.firestore,e?this._delegate.withConverter(Nn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function gn(n){return U(n,Z)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(...e){this._delegate=new Kt(...e)}static documentId(){return new El(Q.keyField().canonicalString())}isEqual(e){return e=S(e),e instanceof Kt?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this._delegate=e}static serverTimestamp(){const e=Wb();return e._methodName="FieldValue.serverTimestamp",new hn(e)}static delete(){const e=zb();return e._methodName="FieldValue.delete",new hn(e)}static arrayUnion(...e){const t=Kb(...e);return t._methodName="FieldValue.arrayUnion",new hn(t)}static arrayRemove(...e){const t=Hb(...e);return t._methodName="FieldValue.arrayRemove",new hn(t)}static increment(e){const t=Qb(e);return t._methodName="FieldValue.increment",new hn(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS={Firestore:Zg,GeoPoint:ta,Timestamp:J,Blob:ji,Transaction:e_,WriteBatch:t_,DocumentReference:We,DocumentSnapshot:Gi,Query:Se,QueryDocumentSnapshot:zi,QuerySnapshot:Rc,CollectionReference:Tr,FieldPath:El,FieldValue:hn,setLogLevel:eS,CACHE_SIZE_UNLIMITED:cb};function rS(n,e){n.INTERNAL.registerComponent(new ut("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},nS)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(n){rS(n,(e,t)=>new Zg(e,t,new Zb)),n.registerVersion(Yb,Jb)}iS(On);const sS={apiKey:"**********",authDomain:"**********",projectId:"**********",storageBucket:"**********",messagingSenderId:"**********",appId:"**********",measurementId:"**********"},oS=On.initializeApp(sS);oS.firestore();const ES=On.auth();export{ES as a};
