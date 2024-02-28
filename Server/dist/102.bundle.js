"use strict";exports.id=102,exports.ids=[102],exports.modules={23102:(e,t,n)=>{n.d(t,{CognitoIdentityClient:()=>ie,GetCredentialsForIdentityCommand:()=>Ke,GetIdCommand:()=>He});var o=n(81095),i=n(39359),s=n(48377),r=n(71731),a=n(11487),c=n(84966),d=n(70649),u=n(99389),p=n(91010),l=n(47385),h=n(2211),y=n(47135);const m=async(e,t,n)=>({operation:(0,y.u)(t).operation,region:await(0,y.t)(e.region)()||(()=>{throw new Error("expected `region` to be configured for `aws.auth#sigv4`")})()}),f=e=>{const t=[];switch(e.operation){case"GetCredentialsForIdentity":case"GetId":case"GetOpenIdToken":case"UnlinkIdentity":t.push({schemeId:"smithy.api#noAuth"});break;default:t.push(function(e){return{schemeId:"aws.auth#sigv4",signingProperties:{name:"cognito-identity",region:e.region},propertiesExtractor:(e,t)=>({signingProperties:{config:e,context:t}})}}(e))}return t},g={UseFIPS:{type:"builtInParams",name:"useFipsEndpoint"},Endpoint:{type:"builtInParams",name:"endpoint"},Region:{type:"builtInParams",name:"region"},UseDualStack:{type:"builtInParams",name:"useDualstackEndpoint"}};var x=n(12458),v=n(38257),w=n(94041),E=n(91701),S=n(51881),P=n(94029),I=n(7809),b=n(3323),C=n(11228),$=n(82641),A=n(94572),O=n(33197),k=n(23875);const D="required",R="fn",z="argv",M="ref",F="isSet",j="booleanEquals",q="error",N="endpoint",G="tree",T="PartitionResult",U={[D]:!1,type:"String"},K={[D]:!0,default:!1,type:"Boolean"},H={[M]:"Endpoint"},L={[R]:j,[z]:[{[M]:"UseFIPS"},!0]},B={[R]:j,[z]:[{[M]:"UseDualStack"},!0]},J={},W={[R]:"getAttr",[z]:[{[M]:T},"supportsFIPS"]},Z={[R]:j,[z]:[!0,{[R]:"getAttr",[z]:[{[M]:T},"supportsDualStack"]}]},V=[L],_=[B],Y=[{[M]:"Region"}],Q={version:"1.0",parameters:{Region:U,UseDualStack:K,UseFIPS:K,Endpoint:U},rules:[{conditions:[{[R]:F,[z]:[H]}],rules:[{conditions:V,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:q},{conditions:_,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:q},{endpoint:{url:H,properties:J,headers:J},type:N}],type:G},{conditions:[{[R]:F,[z]:Y}],rules:[{conditions:[{[R]:"aws.partition",[z]:Y,assign:T}],rules:[{conditions:[L,B],rules:[{conditions:[{[R]:j,[z]:[!0,W]},Z],rules:[{endpoint:{url:"https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:J,headers:J},type:N}],type:G},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:q}],type:G},{conditions:V,rules:[{conditions:[{[R]:j,[z]:[W,!0]}],rules:[{endpoint:{url:"https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}",properties:J,headers:J},type:N}],type:G},{error:"FIPS is enabled but this partition does not support FIPS",type:q}],type:G},{conditions:_,rules:[{conditions:[Z],rules:[{endpoint:{url:"https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:J,headers:J},type:N}],type:G},{error:"DualStack is enabled but this partition does not support DualStack",type:q}],type:G},{endpoint:{url:"https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}",properties:J,headers:J},type:N}],type:G}],type:G},{error:"Invalid Configuration: Missing Region",type:q}]},X=(e,t={})=>(0,k.sO)(Q,{endpointParams:e,logger:t.logger});var ee=n(44321);var te=n(56928),ne=n(75479);const oe=e=>{const t=e.httpAuthSchemes;let n=e.httpAuthSchemeProvider,o=e.credentials;return{setHttpAuthScheme(e){const n=t.findIndex((t=>t.schemeId===e.schemeId));-1===n?t.push(e):t.splice(n,1,e)},httpAuthSchemes:()=>t,setHttpAuthSchemeProvider(e){n=e},httpAuthSchemeProvider:()=>n,setCredentials(e){o=e},credentials:()=>o}};class ie extends l.Kj{constructor(...[e]){const t=(e=>{(0,l.I9)(process.version);const t=(0,ee.I)(e),n=()=>t().then(l.lT),o=(e=>({apiVersion:"2014-06-30",base64Decoder:e?.base64Decoder??A.E,base64Encoder:e?.base64Encoder??A.n,disableHostPrefix:e?.disableHostPrefix??!1,endpointProvider:e?.endpointProvider??X,extensions:e?.extensions??[],httpAuthSchemeProvider:e?.httpAuthSchemeProvider??f,httpAuthSchemes:e?.httpAuthSchemes??[{schemeId:"aws.auth#sigv4",identityProvider:e=>e.getIdentityProvider("aws.auth#sigv4"),signer:new C.f},{schemeId:"smithy.api#noAuth",identityProvider:e=>e.getIdentityProvider("smithy.api#noAuth")||(async()=>({})),signer:new c.mR}],logger:e?.logger??new l.N4,serviceId:e?.serviceId??"Cognito Identity",urlParser:e?.urlParser??$.D,utf8Decoder:e?.utf8Decoder??O.ar,utf8Encoder:e?.utf8Encoder??O.Pq}))(e);return(0,x.I)(process.version),{...o,...e,runtime:"node",defaultsMode:t,bodyLengthChecker:e?.bodyLengthChecker??I.n,credentialDefaultProvider:e?.credentialDefaultProvider??v.defaultProvider,defaultUserAgentProvider:e?.defaultUserAgentProvider??(0,w.mJ)({serviceId:o.serviceId,clientVersion:"3.523.0"}),maxAttempts:e?.maxAttempts??(0,S.Z)(p.qs),region:e?.region??(0,S.Z)(a.GG,a.zH),requestHandler:P.$c.create(e?.requestHandler??n),retryMode:e?.retryMode??(0,S.Z)({...p.kN,default:async()=>(await n()).retryMode||b.L0}),sha256:e?.sha256??E.V.bind(null,"sha256"),streamCollector:e?.streamCollector??P.kv,useDualstackEndpoint:e?.useDualstackEndpoint??(0,S.Z)(a.e$),useFipsEndpoint:e?.useFipsEndpoint??(0,S.Z)(a.Ko)}})(e||{}),n=(y=t,{...y,useDualstackEndpoint:y.useDualstackEndpoint??!1,useFipsEndpoint:y.useFipsEndpoint??!1,defaultSigningName:"cognito-identity"});var y;const m=(0,a.TD)(n),g=(0,u.Co)(m),k=(0,p.$z)(g),D=(0,o.OV)(k);var R;const z=((e,t)=>{const n={...(0,te.Rq)(e),...(0,l.xA)(e),...(0,ne.eS)(e),...oe(e)};return t.forEach((e=>e.configure(n))),{...e,...(0,te.$3)(n),...(0,l.uv)(n),...(0,ne.jt)(n),...(o=n,{httpAuthSchemes:o.httpAuthSchemes(),httpAuthSchemeProvider:o.httpAuthSchemeProvider(),credentials:o.credentials()})};var o})((R=(0,r.Dc)(D),{...(0,h.h)(R)}),e?.extensions||[]);super(z),this.config=z,this.middlewareStack.use((0,p.ey)(this.config)),this.middlewareStack.use((0,d.vK)(this.config)),this.middlewareStack.use((0,o.TC)(this.config)),this.middlewareStack.use((0,i.Y7)(this.config)),this.middlewareStack.use((0,s.n4)(this.config)),this.middlewareStack.use((0,r.sM)(this.config)),this.middlewareStack.use((0,c.wB)(this.config,{httpAuthSchemeParametersProvider:this.getDefaultHttpAuthSchemeParametersProvider(),identityProviderConfigProvider:this.getIdentityProviderConfigProvider()})),this.middlewareStack.use((0,c.lW)(this.config))}destroy(){super.destroy()}getDefaultHttpAuthSchemeParametersProvider(){return m}getIdentityProviderConfigProvider(){return async e=>new c.h$({"aws.auth#sigv4":e.credentials})}}var se=n(1208);class re extends l.TJ{constructor(e){super(e),Object.setPrototypeOf(this,re.prototype)}}class ae extends re{constructor(e){super({name:"InternalErrorException",$fault:"server",...e}),this.name="InternalErrorException",this.$fault="server",Object.setPrototypeOf(this,ae.prototype)}}class ce extends re{constructor(e){super({name:"InvalidParameterException",$fault:"client",...e}),this.name="InvalidParameterException",this.$fault="client",Object.setPrototypeOf(this,ce.prototype)}}class de extends re{constructor(e){super({name:"LimitExceededException",$fault:"client",...e}),this.name="LimitExceededException",this.$fault="client",Object.setPrototypeOf(this,de.prototype)}}class ue extends re{constructor(e){super({name:"NotAuthorizedException",$fault:"client",...e}),this.name="NotAuthorizedException",this.$fault="client",Object.setPrototypeOf(this,ue.prototype)}}class pe extends re{constructor(e){super({name:"ResourceConflictException",$fault:"client",...e}),this.name="ResourceConflictException",this.$fault="client",Object.setPrototypeOf(this,pe.prototype)}}class le extends re{constructor(e){super({name:"TooManyRequestsException",$fault:"client",...e}),this.name="TooManyRequestsException",this.$fault="client",Object.setPrototypeOf(this,le.prototype)}}class he extends re{constructor(e){super({name:"ResourceNotFoundException",$fault:"client",...e}),this.name="ResourceNotFoundException",this.$fault="client",Object.setPrototypeOf(this,he.prototype)}}class ye extends re{constructor(e){super({name:"ExternalServiceException",$fault:"client",...e}),this.name="ExternalServiceException",this.$fault="client",Object.setPrototypeOf(this,ye.prototype)}}class me extends re{constructor(e){super({name:"InvalidIdentityPoolConfigurationException",$fault:"client",...e}),this.name="InvalidIdentityPoolConfigurationException",this.$fault="client",Object.setPrototypeOf(this,me.prototype)}}class fe extends re{constructor(e){super({name:"DeveloperUserAlreadyRegisteredException",$fault:"client",...e}),this.name="DeveloperUserAlreadyRegisteredException",this.$fault="client",Object.setPrototypeOf(this,fe.prototype)}}class ge extends re{constructor(e){super({name:"ConcurrentModificationException",$fault:"client",...e}),this.name="ConcurrentModificationException",this.$fault="client",Object.setPrototypeOf(this,ge.prototype)}}const xe=async(e,t)=>{const n=Ne("GetCredentialsForIdentity");let o;return o=JSON.stringify((0,l.Ss)(e)),qe(t,n,"/",void 0,o)},ve=async(e,t)=>{const n=Ne("GetId");let o;return o=JSON.stringify((0,l.Ss)(e)),qe(t,n,"/",void 0,o)},we=async(e,t)=>{if(e.statusCode>=300)return Se(e,t);const n=await Ge(e.body,t);let o={};return o=Me(n,t),{$metadata:Fe(e),...o}},Ee=async(e,t)=>{if(e.statusCode>=300)return Se(e,t);const n=await Ge(e.body,t);let o={};return o=(0,l.Ss)(n),{$metadata:Fe(e),...o}},Se=async(e,t)=>{const n={...e,body:await Te(e.body,t)},o=Ue(e,n.body);switch(o){case"InternalErrorException":case"com.amazonaws.cognitoidentity#InternalErrorException":throw await Ce(n,t);case"InvalidParameterException":case"com.amazonaws.cognitoidentity#InvalidParameterException":throw await Ae(n,t);case"LimitExceededException":case"com.amazonaws.cognitoidentity#LimitExceededException":throw await Oe(n,t);case"NotAuthorizedException":case"com.amazonaws.cognitoidentity#NotAuthorizedException":throw await ke(n,t);case"ResourceConflictException":case"com.amazonaws.cognitoidentity#ResourceConflictException":throw await De(n,t);case"TooManyRequestsException":case"com.amazonaws.cognitoidentity#TooManyRequestsException":throw await ze(n,t);case"ResourceNotFoundException":case"com.amazonaws.cognitoidentity#ResourceNotFoundException":throw await Re(n,t);case"ExternalServiceException":case"com.amazonaws.cognitoidentity#ExternalServiceException":throw await be(n,t);case"InvalidIdentityPoolConfigurationException":case"com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":throw await $e(n,t);case"DeveloperUserAlreadyRegisteredException":case"com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":throw await Ie(n,t);case"ConcurrentModificationException":case"com.amazonaws.cognitoidentity#ConcurrentModificationException":throw await Pe(n,t);default:const i=n.body;return je({output:e,parsedBody:i,errorCode:o})}},Pe=async(e,t)=>{const n=e.body,o=(0,l.Ss)(n),i=new ge({$metadata:Fe(e),...o});return(0,l.Mw)(i,n)},Ie=async(e,t)=>{const n=e.body,o=(0,l.Ss)(n),i=new fe({$metadata:Fe(e),...o});return(0,l.Mw)(i,n)},be=async(e,t)=>{const n=e.body,o=(0,l.Ss)(n),i=new ye({$metadata:Fe(e),...o});return(0,l.Mw)(i,n)},Ce=async(e,t)=>{const n=e.body,o=(0,l.Ss)(n),i=new ae({$metadata:Fe(e),...o});return(0,l.Mw)(i,n)},$e=async(e,t)=>{const n=e.body,o=(0,l.Ss)(n),i=new me({$metadata:Fe(e),...o});return(0,l.Mw)(i,n)},Ae=async(e,t)=>{const n=e.body,o=(0,l.Ss)(n),i=new ce({$metadata:Fe(e),...o});return(0,l.Mw)(i,n)},Oe=async(e,t)=>{const n=e.body,o=(0,l.Ss)(n),i=new de({$metadata:Fe(e),...o});return(0,l.Mw)(i,n)},ke=async(e,t)=>{const n=e.body,o=(0,l.Ss)(n),i=new ue({$metadata:Fe(e),...o});return(0,l.Mw)(i,n)},De=async(e,t)=>{const n=e.body,o=(0,l.Ss)(n),i=new pe({$metadata:Fe(e),...o});return(0,l.Mw)(i,n)},Re=async(e,t)=>{const n=e.body,o=(0,l.Ss)(n),i=new he({$metadata:Fe(e),...o});return(0,l.Mw)(i,n)},ze=async(e,t)=>{const n=e.body,o=(0,l.Ss)(n),i=new le({$metadata:Fe(e),...o});return(0,l.Mw)(i,n)},Me=(e,t)=>(0,l.s)(e,{Credentials:e=>((e,t)=>(0,l.s)(e,{AccessKeyId:l.lK,Expiration:e=>(0,l.Y0)((0,l.l3)((0,l.r$)(e))),SecretKey:l.lK,SessionToken:l.lK}))(e),IdentityId:l.lK}),Fe=e=>({httpStatusCode:e.statusCode,requestId:e.headers["x-amzn-requestid"]??e.headers["x-amzn-request-id"]??e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}),je=(0,l.jr)(re),qe=async(e,t,n,o,i)=>{const{hostname:s,protocol:r="https",port:a,path:c}=await e.endpoint(),d={protocol:r,hostname:s,port:a,method:"POST",path:c.endsWith("/")?c.slice(0,-1)+n:c+n,headers:t};return void 0!==o&&(d.hostname=o),void 0!==i&&(d.body=i),new ne.Kd(d)};function Ne(e){return{"content-type":"application/x-amz-json-1.1","x-amz-target":`AWSCognitoIdentityService.${e}`}}const Ge=(e,t)=>((e,t)=>(0,l.Px)(e,t).then((e=>t.utf8Encoder(e))))(e,t).then((e=>e.length?JSON.parse(e):{})),Te=async(e,t)=>{const n=await Ge(e,t);return n.message=n.message??n.Message,n},Ue=(e,t)=>{const n=e=>{let t=e;return"number"==typeof t&&(t=t.toString()),t.indexOf(",")>=0&&(t=t.split(",")[0]),t.indexOf(":")>=0&&(t=t.split(":")[0]),t.indexOf("#")>=0&&(t=t.split("#")[1]),t},o=(i=e.headers,"x-amzn-errortype",Object.keys(i).find((e=>e.toLowerCase()==="x-amzn-errortype".toLowerCase())));var i;return void 0!==o?n(e.headers[o]):void 0!==t.code?n(t.code):void 0!==t.__type?n(t.__type):void 0};class Ke extends(l.uB.classBuilder().ep({...g}).m((function(e,t,n,o){return[(0,se.TM)(n,this.serialize,this.deserialize),(0,u.rD)(n,e.getEndpointParameterInstructions())]})).s("AWSCognitoIdentityService","GetCredentialsForIdentity",{}).n("CognitoIdentityClient","GetCredentialsForIdentityCommand").f(void 0,void 0).ser(xe).de(we).build()){}class He extends(l.uB.classBuilder().ep({...g}).m((function(e,t,n,o){return[(0,se.TM)(n,this.serialize,this.deserialize),(0,u.rD)(n,e.getEndpointParameterInstructions())]})).s("AWSCognitoIdentityService","GetId",{}).n("CognitoIdentityClient","GetIdCommand").f(void 0,void 0).ser(ve).de(Ee).build()){}}};