"use strict";exports.id=553,exports.ids=[553],exports.modules={73553:(e,t,r)=>{r.d(t,{CreateTokenCommand:()=>L,SSOOIDCClient:()=>Le});var o=r(99389),s=r(1208),n=r(47385);const i={UseFIPS:{type:"builtInParams",name:"useFipsEndpoint"},Endpoint:{type:"builtInParams",name:"endpoint"},Region:{type:"builtInParams",name:"region"},UseDualStack:{type:"builtInParams",name:"useDualstackEndpoint"}};class a extends n.TJ{constructor(e){super(e),Object.setPrototypeOf(this,a.prototype)}}class c extends a{constructor(e){super({name:"AccessDeniedException",$fault:"client",...e}),this.name="AccessDeniedException",this.$fault="client",Object.setPrototypeOf(this,c.prototype),this.error=e.error,this.error_description=e.error_description}}class d extends a{constructor(e){super({name:"AuthorizationPendingException",$fault:"client",...e}),this.name="AuthorizationPendingException",this.$fault="client",Object.setPrototypeOf(this,d.prototype),this.error=e.error,this.error_description=e.error_description}}class p extends a{constructor(e){super({name:"ExpiredTokenException",$fault:"client",...e}),this.name="ExpiredTokenException",this.$fault="client",Object.setPrototypeOf(this,p.prototype),this.error=e.error,this.error_description=e.error_description}}class u extends a{constructor(e){super({name:"InternalServerException",$fault:"server",...e}),this.name="InternalServerException",this.$fault="server",Object.setPrototypeOf(this,u.prototype),this.error=e.error,this.error_description=e.error_description}}class l extends a{constructor(e){super({name:"InvalidClientException",$fault:"client",...e}),this.name="InvalidClientException",this.$fault="client",Object.setPrototypeOf(this,l.prototype),this.error=e.error,this.error_description=e.error_description}}class h extends a{constructor(e){super({name:"InvalidGrantException",$fault:"client",...e}),this.name="InvalidGrantException",this.$fault="client",Object.setPrototypeOf(this,h.prototype),this.error=e.error,this.error_description=e.error_description}}class m extends a{constructor(e){super({name:"InvalidRequestException",$fault:"client",...e}),this.name="InvalidRequestException",this.$fault="client",Object.setPrototypeOf(this,m.prototype),this.error=e.error,this.error_description=e.error_description}}class y extends a{constructor(e){super({name:"InvalidScopeException",$fault:"client",...e}),this.name="InvalidScopeException",this.$fault="client",Object.setPrototypeOf(this,y.prototype),this.error=e.error,this.error_description=e.error_description}}class f extends a{constructor(e){super({name:"SlowDownException",$fault:"client",...e}),this.name="SlowDownException",this.$fault="client",Object.setPrototypeOf(this,f.prototype),this.error=e.error,this.error_description=e.error_description}}class g extends a{constructor(e){super({name:"UnauthorizedClientException",$fault:"client",...e}),this.name="UnauthorizedClientException",this.$fault="client",Object.setPrototypeOf(this,g.prototype),this.error=e.error,this.error_description=e.error_description}}class w extends a{constructor(e){super({name:"UnsupportedGrantTypeException",$fault:"client",...e}),this.name="UnsupportedGrantTypeException",this.$fault="client",Object.setPrototypeOf(this,w.prototype),this.error=e.error,this.error_description=e.error_description}}class x extends a{constructor(e){super({name:"InvalidRequestRegionException",$fault:"client",...e}),this.name="InvalidRequestRegionException",this.$fault="client",Object.setPrototypeOf(this,x.prototype),this.error=e.error,this.error_description=e.error_description,this.endpoint=e.endpoint,this.region=e.region}}class v extends a{constructor(e){super({name:"InvalidClientMetadataException",$fault:"client",...e}),this.name="InvalidClientMetadataException",this.$fault="client",Object.setPrototypeOf(this,v.prototype),this.error=e.error,this.error_description=e.error_description}}const b=e=>({...e,...e.clientSecret&&{clientSecret:n.$H},...e.refreshToken&&{refreshToken:n.$H}}),E=e=>({...e,...e.accessToken&&{accessToken:n.$H},...e.refreshToken&&{refreshToken:n.$H},...e.idToken&&{idToken:n.$H}});var S=r(84966);const P=async(e,t)=>{const r=(0,S.lI)(e,t);let o;return r.bp("/token"),o=JSON.stringify((0,n.s)(e,{clientId:[],clientSecret:[],code:[],deviceCode:[],grantType:[],redirectUri:[],refreshToken:[],scope:e=>(0,n.Ss)(e)})),r.m("POST").h({"content-type":"application/json"}).b(o),r.build()},I=async(e,t)=>{if(200!==e.statusCode&&e.statusCode>=300)return O(e,t);const r=(0,n.Tj)({$metadata:H(e)}),o=(0,n.Y0)((0,n.Xk)(await F(e.body,t)),"body"),s=(0,n.s)(o,{accessToken:n.lK,expiresIn:n.ET,idToken:n.lK,refreshToken:n.lK,tokenType:n.lK});return Object.assign(r,s),r},O=async(e,t)=>{const r={...e,body:await G(e.body,t)},o=B(e,r.body);switch(o){case"AccessDeniedException":case"com.amazonaws.ssooidc#AccessDeniedException":throw await $(r,t);case"AuthorizationPendingException":case"com.amazonaws.ssooidc#AuthorizationPendingException":throw await j(r,t);case"ExpiredTokenException":case"com.amazonaws.ssooidc#ExpiredTokenException":throw await T(r,t);case"InternalServerException":case"com.amazonaws.ssooidc#InternalServerException":throw await C(r,t);case"InvalidClientException":case"com.amazonaws.ssooidc#InvalidClientException":throw await _(r,t);case"InvalidGrantException":case"com.amazonaws.ssooidc#InvalidGrantException":throw await A(r,t);case"InvalidRequestException":case"com.amazonaws.ssooidc#InvalidRequestException":throw await K(r,t);case"InvalidScopeException":case"com.amazonaws.ssooidc#InvalidScopeException":throw await R(r,t);case"SlowDownException":case"com.amazonaws.ssooidc#SlowDownException":throw await M(r,t);case"UnauthorizedClientException":case"com.amazonaws.ssooidc#UnauthorizedClientException":throw await q(r,t);case"UnsupportedGrantTypeException":case"com.amazonaws.ssooidc#UnsupportedGrantTypeException":throw await U(r,t);case"InvalidRequestRegionException":case"com.amazonaws.ssooidc#InvalidRequestRegionException":throw await z(r,t);case"InvalidClientMetadataException":case"com.amazonaws.ssooidc#InvalidClientMetadataException":throw await D(r,t);default:const s=r.body;return k({output:e,parsedBody:s,errorCode:o})}},k=(0,n.jr)(a),$=async(e,t)=>{const r=(0,n.Tj)({}),o=e.body,s=(0,n.s)(o,{error:n.lK,error_description:n.lK});Object.assign(r,s);const i=new c({$metadata:H(e),...r});return(0,n.Mw)(i,e.body)},j=async(e,t)=>{const r=(0,n.Tj)({}),o=e.body,s=(0,n.s)(o,{error:n.lK,error_description:n.lK});Object.assign(r,s);const i=new d({$metadata:H(e),...r});return(0,n.Mw)(i,e.body)},T=async(e,t)=>{const r=(0,n.Tj)({}),o=e.body,s=(0,n.s)(o,{error:n.lK,error_description:n.lK});Object.assign(r,s);const i=new p({$metadata:H(e),...r});return(0,n.Mw)(i,e.body)},C=async(e,t)=>{const r=(0,n.Tj)({}),o=e.body,s=(0,n.s)(o,{error:n.lK,error_description:n.lK});Object.assign(r,s);const i=new u({$metadata:H(e),...r});return(0,n.Mw)(i,e.body)},_=async(e,t)=>{const r=(0,n.Tj)({}),o=e.body,s=(0,n.s)(o,{error:n.lK,error_description:n.lK});Object.assign(r,s);const i=new l({$metadata:H(e),...r});return(0,n.Mw)(i,e.body)},D=async(e,t)=>{const r=(0,n.Tj)({}),o=e.body,s=(0,n.s)(o,{error:n.lK,error_description:n.lK});Object.assign(r,s);const i=new v({$metadata:H(e),...r});return(0,n.Mw)(i,e.body)},A=async(e,t)=>{const r=(0,n.Tj)({}),o=e.body,s=(0,n.s)(o,{error:n.lK,error_description:n.lK});Object.assign(r,s);const i=new h({$metadata:H(e),...r});return(0,n.Mw)(i,e.body)},K=async(e,t)=>{const r=(0,n.Tj)({}),o=e.body,s=(0,n.s)(o,{error:n.lK,error_description:n.lK});Object.assign(r,s);const i=new m({$metadata:H(e),...r});return(0,n.Mw)(i,e.body)},z=async(e,t)=>{const r=(0,n.Tj)({}),o=e.body,s=(0,n.s)(o,{endpoint:n.lK,error:n.lK,error_description:n.lK,region:n.lK});Object.assign(r,s);const i=new x({$metadata:H(e),...r});return(0,n.Mw)(i,e.body)},R=async(e,t)=>{const r=(0,n.Tj)({}),o=e.body,s=(0,n.s)(o,{error:n.lK,error_description:n.lK});Object.assign(r,s);const i=new y({$metadata:H(e),...r});return(0,n.Mw)(i,e.body)},M=async(e,t)=>{const r=(0,n.Tj)({}),o=e.body,s=(0,n.s)(o,{error:n.lK,error_description:n.lK});Object.assign(r,s);const i=new f({$metadata:H(e),...r});return(0,n.Mw)(i,e.body)},q=async(e,t)=>{const r=(0,n.Tj)({}),o=e.body,s=(0,n.s)(o,{error:n.lK,error_description:n.lK});Object.assign(r,s);const i=new g({$metadata:H(e),...r});return(0,n.Mw)(i,e.body)},U=async(e,t)=>{const r=(0,n.Tj)({}),o=e.body,s=(0,n.s)(o,{error:n.lK,error_description:n.lK});Object.assign(r,s);const i=new w({$metadata:H(e),...r});return(0,n.Mw)(i,e.body)},H=e=>({httpStatusCode:e.statusCode,requestId:e.headers["x-amzn-requestid"]??e.headers["x-amzn-request-id"]??e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}),F=(e,t)=>((e,t)=>(0,n.Px)(e,t).then((e=>t.utf8Encoder(e))))(e,t).then((e=>e.length?JSON.parse(e):{})),G=async(e,t)=>{const r=await F(e,t);return r.message=r.message??r.Message,r},B=(e,t)=>{const r=e=>{let t=e;return"number"==typeof t&&(t=t.toString()),t.indexOf(",")>=0&&(t=t.split(",")[0]),t.indexOf(":")>=0&&(t=t.split(":")[0]),t.indexOf("#")>=0&&(t=t.split("#")[1]),t},o=(s=e.headers,"x-amzn-errortype",Object.keys(s).find((e=>e.toLowerCase()==="x-amzn-errortype".toLowerCase())));var s;return void 0!==o?r(e.headers[o]):void 0!==t.code?r(t.code):void 0!==t.__type?r(t.__type):void 0};class L extends(n.uB.classBuilder().ep({...i}).m((function(e,t,r,n){return[(0,s.TM)(r,this.serialize,this.deserialize),(0,o.rD)(r,e.getEndpointParameterInstructions())]})).s("AWSSSOOIDCService","CreateToken",{}).n("SSOOIDCClient","CreateTokenCommand").f(b,E).ser(P).de(I).build()){}var N=r(81095),Z=r(39359),J=r(48377),V=r(71731),W=r(11487),Y=r(70649),X=r(91010),Q=r(2211),ee=r(47135);const te=async(e,t,r)=>({operation:(0,ee.u)(t).operation,region:await(0,ee.t)(e.region)()||(()=>{throw new Error("expected `region` to be configured for `aws.auth#sigv4`")})()}),re=e=>{const t=[];switch(e.operation){case"CreateToken":case"RegisterClient":case"StartDeviceAuthorization":t.push({schemeId:"smithy.api#noAuth"});break;default:t.push(function(e){return{schemeId:"aws.auth#sigv4",signingProperties:{name:"sso-oauth",region:e.region},propertiesExtractor:(e,t)=>({signingProperties:{config:e,context:t}})}}(e))}return t},oe=e=>()=>Promise.resolve().then(r.bind(r,38257)).then((({defaultProvider:t})=>t(e)()));var se=r(12458),ne=r(94041),ie=r(91701),ae=r(51881),ce=r(94029),de=r(7809),pe=r(3323),ue=r(11228),le=r(82641),he=r(94572),me=r(33197),ye=r(23875);const fe="required",ge="fn",we="argv",xe="ref",ve="isSet",be="booleanEquals",Ee="error",Se="endpoint",Pe="tree",Ie="PartitionResult",Oe="getAttr",ke={[fe]:!1,type:"String"},$e={[fe]:!0,default:!1,type:"Boolean"},je={[xe]:"Endpoint"},Te={[ge]:be,[we]:[{[xe]:"UseFIPS"},!0]},Ce={[ge]:be,[we]:[{[xe]:"UseDualStack"},!0]},_e={},De={[ge]:Oe,[we]:[{[xe]:Ie},"supportsFIPS"]},Ae={[xe]:Ie},Ke={[ge]:be,[we]:[!0,{[ge]:Oe,[we]:[Ae,"supportsDualStack"]}]},ze=[Te],Re=[Ce],Me=[{[xe]:"Region"}],qe={version:"1.0",parameters:{Region:ke,UseDualStack:$e,UseFIPS:$e,Endpoint:ke},rules:[{conditions:[{[ge]:ve,[we]:[je]}],rules:[{conditions:ze,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:Ee},{conditions:Re,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:Ee},{endpoint:{url:je,properties:_e,headers:_e},type:Se}],type:Pe},{conditions:[{[ge]:ve,[we]:Me}],rules:[{conditions:[{[ge]:"aws.partition",[we]:Me,assign:Ie}],rules:[{conditions:[Te,Ce],rules:[{conditions:[{[ge]:be,[we]:[!0,De]},Ke],rules:[{endpoint:{url:"https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:_e,headers:_e},type:Se}],type:Pe},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:Ee}],type:Pe},{conditions:ze,rules:[{conditions:[{[ge]:be,[we]:[De,!0]}],rules:[{conditions:[{[ge]:"stringEquals",[we]:[{[ge]:Oe,[we]:[Ae,"name"]},"aws-us-gov"]}],endpoint:{url:"https://oidc.{Region}.amazonaws.com",properties:_e,headers:_e},type:Se},{endpoint:{url:"https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}",properties:_e,headers:_e},type:Se}],type:Pe},{error:"FIPS is enabled but this partition does not support FIPS",type:Ee}],type:Pe},{conditions:Re,rules:[{conditions:[Ke],rules:[{endpoint:{url:"https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:_e,headers:_e},type:Se}],type:Pe},{error:"DualStack is enabled but this partition does not support DualStack",type:Ee}],type:Pe},{endpoint:{url:"https://oidc.{Region}.{PartitionResult#dnsSuffix}",properties:_e,headers:_e},type:Se}],type:Pe}],type:Pe},{error:"Invalid Configuration: Missing Region",type:Ee}]},Ue=(e,t={})=>(0,ye.sO)(qe,{endpointParams:e,logger:t.logger});var He=r(44321);var Fe=r(56928),Ge=r(75479);const Be=e=>{const t=e.httpAuthSchemes;let r=e.httpAuthSchemeProvider,o=e.credentials;return{setHttpAuthScheme(e){const r=t.findIndex((t=>t.schemeId===e.schemeId));-1===r?t.push(e):t.splice(r,1,e)},httpAuthSchemes:()=>t,setHttpAuthSchemeProvider(e){r=e},httpAuthSchemeProvider:()=>r,setCredentials(e){o=e},credentials:()=>o}};class Le extends n.Kj{constructor(...[e]){const t=(e=>{(0,n.I9)(process.version);const t=(0,He.I)(e),r=()=>t().then(n.lT),o=(e=>({apiVersion:"2019-06-10",base64Decoder:e?.base64Decoder??he.E,base64Encoder:e?.base64Encoder??he.n,disableHostPrefix:e?.disableHostPrefix??!1,endpointProvider:e?.endpointProvider??Ue,extensions:e?.extensions??[],httpAuthSchemeProvider:e?.httpAuthSchemeProvider??re,httpAuthSchemes:e?.httpAuthSchemes??[{schemeId:"aws.auth#sigv4",identityProvider:e=>e.getIdentityProvider("aws.auth#sigv4"),signer:new ue.f},{schemeId:"smithy.api#noAuth",identityProvider:e=>e.getIdentityProvider("smithy.api#noAuth")||(async()=>({})),signer:new S.mR}],logger:e?.logger??new n.N4,serviceId:e?.serviceId??"SSO OIDC",urlParser:e?.urlParser??le.D,utf8Decoder:e?.utf8Decoder??me.ar,utf8Encoder:e?.utf8Encoder??me.Pq}))(e);return(0,se.I)(process.version),{...o,...e,runtime:"node",defaultsMode:t,bodyLengthChecker:e?.bodyLengthChecker??de.n,credentialDefaultProvider:e?.credentialDefaultProvider??oe,defaultUserAgentProvider:e?.defaultUserAgentProvider??(0,ne.mJ)({serviceId:o.serviceId,clientVersion:"3.523.0"}),maxAttempts:e?.maxAttempts??(0,ae.Z)(X.qs),region:e?.region??(0,ae.Z)(W.GG,W.zH),requestHandler:ce.$c.create(e?.requestHandler??r),retryMode:e?.retryMode??(0,ae.Z)({...X.kN,default:async()=>(await r()).retryMode||pe.L0}),sha256:e?.sha256??ie.V.bind(null,"sha256"),streamCollector:e?.streamCollector??ce.kv,useDualstackEndpoint:e?.useDualstackEndpoint??(0,ae.Z)(W.e$),useFipsEndpoint:e?.useFipsEndpoint??(0,ae.Z)(W.Ko)}})(e||{}),r=(s=t,{...s,useDualstackEndpoint:s.useDualstackEndpoint??!1,useFipsEndpoint:s.useFipsEndpoint??!1,defaultSigningName:"sso-oauth"});var s;const i=(0,W.TD)(r),a=(0,o.Co)(i),c=(0,X.$z)(a),d=(0,N.OV)(c);var p;const u=((e,t)=>{const r={...(0,Fe.Rq)(e),...(0,n.xA)(e),...(0,Ge.eS)(e),...Be(e)};return t.forEach((e=>e.configure(r))),{...e,...(0,Fe.$3)(r),...(0,n.uv)(r),...(0,Ge.jt)(r),...(o=r,{httpAuthSchemes:o.httpAuthSchemes(),httpAuthSchemeProvider:o.httpAuthSchemeProvider(),credentials:o.credentials()})};var o})((p=(0,V.Dc)(d),{...(0,Q.h)(p)}),e?.extensions||[]);super(u),this.config=u,this.middlewareStack.use((0,X.ey)(this.config)),this.middlewareStack.use((0,Y.vK)(this.config)),this.middlewareStack.use((0,N.TC)(this.config)),this.middlewareStack.use((0,Z.Y7)(this.config)),this.middlewareStack.use((0,J.n4)(this.config)),this.middlewareStack.use((0,V.sM)(this.config)),this.middlewareStack.use((0,S.wB)(this.config,{httpAuthSchemeParametersProvider:this.getDefaultHttpAuthSchemeParametersProvider(),identityProviderConfigProvider:this.getIdentityProviderConfigProvider()})),this.middlewareStack.use((0,S.lW)(this.config))}destroy(){super.destroy()}getDefaultHttpAuthSchemeParametersProvider(){return te}getIdentityProviderConfigProvider(){return async e=>new S.h$({"aws.auth#sigv4":e.credentials})}}}};