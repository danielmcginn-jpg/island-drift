(()=>{var an=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var Om=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function Bm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function km(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nf(){let i=pr("canvas");return i.style.display="block",i}function aa(...i){let e="THREE."+i.shift();mr?mr("log",e,...i):console.log(e,...i)}function Ff(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=Ff(i);let e="THREE."+i.shift();if(mr)mr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function He(...i){i=Ff(i);let e="THREE."+i.shift();if(mr)mr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ws(...i){let e=i.join(" ");e in fd||(fd[e]=!0,Ie(...i))}function Uf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function bi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function Sh(i,e){return(i%e+e)%e}function zm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Gm(i,e,t){return i!==e?(t-i)/(e-i):0}function ia(i,e,t){return(1-t)*i+t*e}function Hm(i,e,t,n){return ia(i,e,1-Math.exp(-t*n))}function Vm(i,e=1){return e-Math.abs(Sh(i,e*2)-e)}function Wm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function qm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Xm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function jm(i,e){return i+Math.random()*(e-i)}function Km(i){return i*(.5-Math.random())}function Ym(i){i!==void 0&&(pd=i);let e=pd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jm(i){return i*na}function Zm(i){return i*Cs}function $m(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Qm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Eh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function eg(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*f,o*h,o*l);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Kc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Th(i,e){if(e.constructor===Float32Array)return i;let t=Kc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function wh(i,e){if(e.constructor===Float32Array)return i;let t=Kc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}function tg(){let i={enabled:!0,workingColorSpace:yn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ht&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(s.r=hr(s.r),s.g=hr(s.g),s.b=hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?ra:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[yn]:{primaries:e,whitePoint:n,transfer:ra,toXYZ:gd,fromXYZ:xd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:gd,fromXYZ:xd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),i}function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}function Pl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Bl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vs.fromArray(i,r);let o=s.x*Math.abs(vs.x)+s.y*Math.abs(vs.y)+s.z*Math.abs(vs.z),c=e.dot(vs),l=t.dot(vs),h=n.dot(vs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function wd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=bi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}function xg(i,e,t,n,s,r,a,o){let c;if(e.side===Zt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===gi,o),c===null)return null;yo.copy(o),yo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(yo);return l<t.near||l>t.far?null:{distance:l,point:yo.clone(),object:i}}function vo(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,go),i.getVertexPosition(c,xo),i.getVertexPosition(l,bo);let h=xg(i,e,t,n,go,xo,bo,Cd);if(h){let u=new N;is.getBarycoord(Cd,go,xo,bo,u),s&&(h.uv=is.getInterpolatedAttribute(s,o,c,l,u,new Le)),r&&(h.uv1=is.getInterpolatedAttribute(r,o,c,l,u,new Le)),a&&(h.normal=is.getInterpolatedAttribute(a,o,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new N,materialIndex:0};is.getNormal(go,xo,bo,d.normal),h.face=d,h.barycoord=u}return h}function wo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Wo.fromBufferAttribute(o,s),qo.fromBufferAttribute(o,r),t.distanceSqToSegment(Wo,qo,Xl,kd)>n)return;Xl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Xl);if(!(l<e.near||l>e.far))return{distance:l,point:kd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}function Vd(i,e,t,n,s,r,a){let o=Zl.distanceSqToPoint(i);if(o<t){let c=new N;Zl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function Ws(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Wd(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Wd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function xn(i){let e={};for(let t=0;t<i.length;t++){let n=Ws(i[t]);for(let s in n)e[s]=n[s]}return e}function Wd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ah(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}function ns(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ta(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Tg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function qd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function wg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}function kf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Ag(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Rg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=kf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Ag(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}function Xd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function jd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function Cg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fi;case"vector":case"vector2":case"vector3":case"vector4":return as;case"color":return va;case"quaternion":return Ui;case"bool":case"boolean":return Ni;case"string":return Oi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Pg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Cg(i.type);if(i.times===void 0){let n=[],s=[];wg(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),ta(i.settings)&&(t.settings={inTangents:ns(i.settings.inTangents,Float32Array),outTangents:ns(i.settings.outTangents,Float32Array)}),t}function Kd(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function Ig(){this._document.hidden===!1&&this.reset()}function Ph(i,e,t,n){let s=Gg(n);switch(t){case ph:return i*e;case uc:return i*e/s.components*s.byteLength;case dc:return i*e/s.components*s.byteLength;case cs:return i*e*2/s.components*s.byteLength;case fc:return i*e*2/s.components*s.byteLength;case mh:return i*e*3/s.components*s.byteLength;case jn:return i*e*4/s.components*s.byteLength;case pc:return i*e*4/s.components*s.byteLength;case Fa:case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:case bc:return Math.max(i,16)*Math.max(e,8)/4;case mc:case xc:return Math.max(i,8)*Math.max(e,8)/2;case _c:case yc:case Mc:case Sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vc:case ka:case Ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Bc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case kc:case zc:case Gc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Hc:case Vc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case za:case Wc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gg(i){switch(i){case Rn:case hh:return{byteLength:1,components:1};case Dr:case uh:case hn:return{byteLength:2,components:1};case lc:case hc:return{byteLength:2,components:4};case ni:case cc:case Fn:return{byteLength:4,components:1};case dh:case fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var Qd,sh,ef,zi,tf,Rr,gi,Zt,Ut,Gi,Cr,Ra,rh,ah,nf,ks,sf,rf,af,of,cf,lf,hf,uf,oh,ch,df,ff,pf,mf,gf,xf,bf,_f,yf,Lo,No,Fo,ur,Uo,Oo,Bo,ko,sc,vf,Mf,xi,Ca,Pa,Ia,zs,Da,La,Na,Yl,Sf,lh,Gs,Pr,rc,ac,Nn,Wn,dr,Bt,oc,Hs,Kt,Ir,Xn,Rn,hh,uh,Dr,cc,ni,Fn,hn,lc,hc,Vs,dh,fh,ph,mh,jn,Ii,Hi,uc,dc,cs,fc,pc,Fa,Ua,Oa,Ba,mc,gc,xc,bc,_c,yc,vc,Mc,Sc,ka,Ec,Tc,wc,Ac,Rc,Cc,Pc,Ic,Dc,Lc,Nc,Fc,Uc,Oc,Bc,kc,zc,Gc,Hc,Vc,za,Wc,qc,Xc,Ef,As,Rs,Io,Jl,Es,Ts,sa,jc,Tf,gh,Ga,Lr,wf,Ha,Af,Un,Tt,yn,ra,ht,Do,Rf,Cf,Pf,If,xh,Df,Lf,bh,_h,yh,vh,Mh,qn,fr,fd,mr,Of,ei,pn,pd,na,Cs,At,Ih,Le,gn,Dh,N,Tl,md,Lh,qe,wl,gd,xd,Ze,Js,zo,ng,gr,ig,Rl,Ft,Nh,mt,Go,Yt,oa,Ho,ic,Ve,Zs,Jn,sg,rg,Zi,ro,Dn,bd,_d,ui,ca,ag,yd,$s,Ei,ao,jr,og,cg,vd,Md,Sd,Ed,lg,Qs,Cl,xt,tt,hg,xr,Bf,$i,oo,Me,mn,la,ha,Zn,Ti,Il,wi,er,tr,Td,Dl,Ll,Nl,Fl,Ul,Ol,is,kt,Ai,$n,co,nr,ir,sr,Qi,es,ys,Kr,lo,ho,vs,Vt,uo,ug,Ot,ua,da,lt,dg,Yr,kl,Tn,fg,Vn,zl,rr,Ln,Jr,on,wt,br,_n,_r,Gl,pg,mg,Qn,gg,vn,Ri,Hl,fo,po,Ps,Jt,Ad,Ms,mo,Rd,go,xo,bo,Vl,_o,Cd,yo,Ue,Zr,Pd,Id,bg,Dd,Mo,Wl,Ld,ql,fa,yr,vr,Nd,_g,pa,Di,ar,Fd,So,Ud,yg,$r,Qr,ti,Ss,vg,Eo,ss,Od,Vo,Mr,Wo,qo,Bd,ea,To,Xl,kd,Is,zd,Gd,ma,ga,rs,Hd,Zl,Ao,Ro,Ds,xa,Ls,Li,ba,_a,Ae,Sr,Qe,wn,di,Pt,fi,ii,Sg,Eg,Lt,Er,Ns,Mn,St,Xo,jo,pi,Ko,ya,Yo,Jo,An,Ni,va,Fi,Zo,Ui,Oi,as,Fs,hi,$o,zf,mi,Ci,$l,Tr,or,Qo,Us,Os,Ma,jl,Yd,Jd,wr,Co,Po,li,Sa,ts,Zd,$d,jt,Ql,Ea,eh,Bs,Bi,th,os,ki,Kl,Ta,cr,lr,Ar,ec,wa,tc,Rh,Dg,Ch,Lg,Ng,Fg,Ug,Og,Bg,kg,nh,gt,nc,zg,Aa,Fh,ih,Uh=an(()=>{Qd=0,sh=1,ef=2,zi=1,tf=2,Rr=3,gi=0,Zt=1,Ut=2,Gi=0,Cr=1,Ra=2,rh=3,ah=4,nf=5,ks=100,sf=101,rf=102,af=103,of=104,cf=200,lf=201,hf=202,uf=203,oh=204,ch=205,df=206,ff=207,pf=208,mf=209,gf=210,xf=211,bf=212,_f=213,yf=214,Lo=0,No=1,Fo=2,ur=3,Uo=4,Oo=5,Bo=6,ko=7,sc=0,vf=1,Mf=2,xi=0,Ca=1,Pa=2,Ia=3,zs=4,Da=5,La=6,Na=7,Yl="attached",Sf="detached",lh=300,Gs=301,Pr=302,rc=303,ac=304,Nn=1e3,Wn=1001,dr=1002,Bt=1003,oc=1004,Hs=1005,Kt=1006,Ir=1007,Xn=1008,Rn=1009,hh=1010,uh=1011,Dr=1012,cc=1013,ni=1014,Fn=1015,hn=1016,lc=1017,hc=1018,Vs=1020,dh=35902,fh=35899,ph=1021,mh=1022,jn=1023,Ii=1026,Hi=1027,uc=1028,dc=1029,cs=1030,fc=1031,pc=1033,Fa=33776,Ua=33777,Oa=33778,Ba=33779,mc=35840,gc=35841,xc=35842,bc=35843,_c=36196,yc=37492,vc=37496,Mc=37488,Sc=37489,ka=37490,Ec=37491,Tc=37808,wc=37809,Ac=37810,Rc=37811,Cc=37812,Pc=37813,Ic=37814,Dc=37815,Lc=37816,Nc=37817,Fc=37818,Uc=37819,Oc=37820,Bc=37821,kc=36492,zc=36494,Gc=36495,Hc=36283,Vc=36284,za=36285,Wc=36286,qc=2200,Xc=2201,Ef=2202,As=2300,Rs=2301,Io=2302,Jl=2303,Es=2400,Ts=2401,sa=2402,jc=2500,Tf=2501,gh=0,Ga=1,Lr=2,wf=3200,Ha=0,Af=1,Un="",Tt="srgb",yn="srgb-linear",ra="linear",ht="srgb",Do=7680,Rf=519,Cf=512,Pf=513,If=514,xh=515,Df=516,Lf=517,bh=518,_h=519,yh=35044,vh=35048,Mh="300 es",qn=2e3,fr=2001;fd={},mr=null;Of={[Lo]:Lo,[Fo]:Bo,[Uo]:Uo,[ur]:Oo,[No]:No,[Bo]:Fo,[ko]:ko,[Oo]:ur},ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pd=1234567,na=Math.PI/180,Cs=180/Math.PI;At={DEG2RAD:na,RAD2DEG:Cs,generateUUID:bi,clamp:it,euclideanModulo:Sh,mapLinear:zm,inverseLerp:Gm,lerp:ia,damp:Hm,pingpong:Vm,smoothstep:Wm,smootherstep:qm,randInt:Xm,randFloat:jm,randFloatSpread:Km,seededRandom:Ym,degToRad:Jm,radToDeg:Zm,isPowerOfTwo:$m,ceilPowerOfTwo:Qm,floorPowerOfTwo:Eh,setQuaternionFromProperEuler:eg,normalize:wh,denormalize:Th},Ih=class Ih{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ih.prototype.isVector2=!0;Le=Ih,gn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],b=r[a+3];if(u!==b||c!==d||l!==f||h!==m){let g=c*d+l*f+h*m+u*b;g<0&&(d=-d,f=-f,m=-m,b=-b,g=-g);let p=1-o;if(g<.9995){let _=Math.acos(g),S=Math.sin(_);p=Math.sin(p*_)/S,o=Math.sin(o*_)/S,c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+b*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+b*o;let _=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=_,l*=_,h*=_,u*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Dh=class Dh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(md.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(md.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tl.copy(this).projectOnVector(e),this.sub(Tl)}reflect(e){return this.sub(Tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dh.prototype.isVector3=!0;N=Dh,Tl=new N,md=new gn,Lh=class Lh{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],b=s[0],g=s[3],p=s[6],_=s[1],S=s[4],v=s[7],T=s[2],w=s[5],x=s[8];return r[0]=a*b+o*_+c*T,r[3]=a*g+o*S+c*w,r[6]=a*p+o*v+c*x,r[1]=l*b+h*_+u*T,r[4]=l*g+h*S+u*w,r[7]=l*p+h*v+u*x,r[2]=d*b+f*_+m*T,r[5]=d*g+f*S+m*w,r[8]=d*p+f*v+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=u*b,e[1]=(s*l-h*n)*b,e[2]=(o*n-s*a)*b,e[3]=d*b,e[4]=(h*t-s*c)*b,e[5]=(s*r-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wl.makeScale(e,t)),this}rotate(e){return ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wl.makeRotation(-e)),this}translate(e,t){return ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lh.prototype.isMatrix3=!0;qe=Lh,wl=new qe,gd=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xd=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze=tg();zo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Js===void 0&&(Js=pr("canvas")),Js.width=e.width,Js.height=e.height;let s=Js.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Js}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=pr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ng=0,gr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Al(s[a].image)):r.push(Al(s[a]))}else r=Al(s);n.url=r}return t||(e.images[this.uuid]=n),n}};ig=0,Rl=new N,Ft=class i extends ei{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=Kt,a=Xn,o=jn,c=Rn,l=i.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=bi(),this.name="",this.source=new gr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Rl).x}get height(){return this.source.getSize(Rl).y}get depth(){return this.source.getSize(Rl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nn:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nn:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=lh;Ft.DEFAULT_ANISOTROPY=1;Nh=class Nh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],b=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,v=(f+1)/2,T=(p+1)/2,w=(h+d)/4,x=(u+b)/4,E=(m+g)/4;return S>v&&S>T?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=w/n,r=x/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=E/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=x/r,s=E/r),this.set(n,s,r,t),this}let _=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-b)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nh.prototype.isVector4=!0;mt=Nh,Go=class extends ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ft({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new gr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends Go{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},oa=class extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ho=class extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},ic=class ic{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,m,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,m,b,g)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,m,b,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ic().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Zs.setFromMatrixColumn(e,0).length(),r=1/Zs.setFromMatrixColumn(e,1).length(),a=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,m=l*h,b=l*u;t[0]=d+b*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,m=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,b=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*c,f=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sg,e,rg)}lookAt(e,t,n){let s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Zi.crossVectors(n,Dn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Zi.crossVectors(n,Dn)),Zi.normalize(),ro.crossVectors(Dn,Zi),s[0]=Zi.x,s[4]=ro.x,s[8]=Dn.x,s[1]=Zi.y,s[5]=ro.y,s[9]=Dn.y,s[2]=Zi.z,s[6]=ro.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],b=n[6],g=n[10],p=n[14],_=n[3],S=n[7],v=n[11],T=n[15],w=s[0],x=s[4],E=s[8],U=s[12],R=s[1],L=s[5],O=s[9],V=s[13],P=s[2],q=s[6],K=s[10],W=s[14],re=s[3],j=s[7],te=s[11],ne=s[15];return r[0]=a*w+o*R+c*P+l*re,r[4]=a*x+o*L+c*q+l*j,r[8]=a*E+o*O+c*K+l*te,r[12]=a*U+o*V+c*W+l*ne,r[1]=h*w+u*R+d*P+f*re,r[5]=h*x+u*L+d*q+f*j,r[9]=h*E+u*O+d*K+f*te,r[13]=h*U+u*V+d*W+f*ne,r[2]=m*w+b*R+g*P+p*re,r[6]=m*x+b*L+g*q+p*j,r[10]=m*E+b*O+g*K+p*te,r[14]=m*U+b*V+g*W+p*ne,r[3]=_*w+S*R+v*P+T*re,r[7]=_*x+S*L+v*q+T*j,r[11]=_*E+S*O+v*K+T*te,r[15]=_*U+S*V+v*W+T*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],b=e[7],g=e[11],p=e[15],_=c*f-l*d,S=o*f-l*u,v=o*d-c*u,T=a*f-l*h,w=a*d-c*h,x=a*u-o*h;return t*(b*_-g*S+p*v)-n*(m*_-g*T+p*w)+s*(m*S-b*T+p*x)-r*(m*v-b*w+g*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],b=e[13],g=e[14],p=e[15],_=t*o-n*a,S=t*c-s*a,v=t*l-r*a,T=n*c-s*o,w=n*l-r*o,x=s*l-r*c,E=h*b-u*m,U=h*g-d*m,R=h*p-f*m,L=u*g-d*b,O=u*p-f*b,V=d*p-f*g,P=_*V-S*O+v*L+T*R-w*U+x*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/P;return e[0]=(o*V-c*O+l*L)*q,e[1]=(s*O-n*V-r*L)*q,e[2]=(b*x-g*w+p*T)*q,e[3]=(d*w-u*x-f*T)*q,e[4]=(c*R-a*V-l*U)*q,e[5]=(t*V-s*R+r*U)*q,e[6]=(g*v-m*x-p*S)*q,e[7]=(h*x-d*v+f*S)*q,e[8]=(a*O-o*R+l*E)*q,e[9]=(n*R-t*O-r*E)*q,e[10]=(m*w-b*v+p*_)*q,e[11]=(u*v-h*w-f*_)*q,e[12]=(o*U-a*L-c*E)*q,e[13]=(t*L-n*U+s*E)*q,e[14]=(b*S-m*T-g*_)*q,e[15]=(h*T-u*S+d*_)*q,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,b=a*h,g=a*u,p=o*u,_=c*l,S=c*h,v=c*u,T=n.x,w=n.y,x=n.z;return s[0]=(1-(b+p))*T,s[1]=(f+v)*T,s[2]=(m-S)*T,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(d+p))*w,s[6]=(g+_)*w,s[7]=0,s[8]=(m+S)*x,s[9]=(g-_)*x,s[10]=(1-(d+b))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Zs.set(s[0],s[1],s[2]).length(),o=Zs.set(s[4],s[5],s[6]).length(),c=Zs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Jn.copy(this);let l=1/a,h=1/o,u=1/c;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,t.setFromRotationMatrix(Jn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=qn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,b;if(c)m=r/(a-r),b=a*r/(a-r);else if(o===qn)m=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===fr)m=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=qn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,b;if(c)m=1/(a-r),b=a/(a-r);else if(o===qn)m=-2/(a-r),b=-(a+r)/(a-r);else if(o===fr)m=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ic.prototype.isMatrix4=!0;Ve=ic,Zs=new N,Jn=new Ve,sg=new N(0,0,0),rg=new N(1,1,1),Zi=new N,ro=new N,Dn=new N,bd=new Ve,_d=new gn,ui=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _d.setFromEuler(this),this.setFromQuaternion(_d,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";ca=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ag=0,yd=new N,$s=new gn,Ei=new Ve,ao=new N,jr=new N,og=new N,cg=new gn,vd=new N(1,0,0),Md=new N(0,1,0),Sd=new N(0,0,1),Ed={type:"added"},lg={type:"removed"},Qs={type:"childadded",child:null},Cl={type:"childremoved",child:null},xt=class i extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new ui,n=new gn,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new qe}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(vd,e)}rotateY(e){return this.rotateOnAxis(Md,e)}rotateZ(e){return this.rotateOnAxis(Sd,e)}translateOnAxis(e,t){return yd.copy(e).applyQuaternion(this.quaternion),this.position.add(yd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vd,e)}translateY(e){return this.translateOnAxis(Md,e)}translateZ(e){return this.translateOnAxis(Sd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ao.copy(e):ao.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(jr,ao,this.up):Ei.lookAt(ao,jr,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Ei),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ed),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lg),Cl.child=e,this.dispatchEvent(Cl),Cl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ed),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,og),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,cg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xt.DEFAULT_UP=new N(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;tt=class extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},hg={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),p=this._getHandJoint(l,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},oo={h:0,s:0,l:0};Me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=Sh(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Pl(a,r,e+1/3),this.g=Pl(a,r,e),this.b=Pl(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=Bf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Ze.workingToColorSpace(mn.copy(this),e),Math.round(it(mn.r*255,0,255))*65536+Math.round(it(mn.g*255,0,255))*256+Math.round(it(mn.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(mn.copy(this),t);let n=mn.r,s=mn.g,r=mn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Tt){Ze.workingToColorSpace(mn.copy(this),e);let t=mn.r,n=mn.g,s=mn.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(oo);let n=ia($i.h,oo.h,t),s=ia($i.s,oo.s,t),r=ia($i.l,oo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new Me;Me.NAMES=Bf;la=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Me(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ha=class extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zn=new N,Ti=new N,Il=new N,wi=new N,er=new N,tr=new N,Td=new N,Dl=new N,Ll=new N,Nl=new N,Fl=new mt,Ul=new mt,Ol=new mt,is=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zn.subVectors(e,t),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Zn.subVectors(s,t),Ti.subVectors(n,t),Il.subVectors(e,t);let a=Zn.dot(Zn),o=Zn.dot(Ti),c=Zn.dot(Il),l=Ti.dot(Ti),h=Ti.dot(Il),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,wi.x),c.addScaledVector(a,wi.y),c.addScaledVector(o,wi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Fl.setScalar(0),Ul.setScalar(0),Ol.setScalar(0),Fl.fromBufferAttribute(e,t),Ul.fromBufferAttribute(e,n),Ol.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Fl,r.x),a.addScaledVector(Ul,r.y),a.addScaledVector(Ol,r.z),a}static isFrontFacing(e,t,n,s){return Zn.subVectors(n,t),Ti.subVectors(e,t),Zn.cross(Ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Zn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;er.subVectors(s,n),tr.subVectors(r,n),Dl.subVectors(e,n);let c=er.dot(Dl),l=tr.dot(Dl);if(c<=0&&l<=0)return t.copy(n);Ll.subVectors(e,s);let h=er.dot(Ll),u=tr.dot(Ll);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(er,a);Nl.subVectors(e,r);let f=er.dot(Nl),m=tr.dot(Nl);if(m>=0&&f<=m)return t.copy(r);let b=f*l-c*m;if(b<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(tr,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Td.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(Td,o);let p=1/(g+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(er,a).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},kt=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(r,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),lo.subVectors(this.max,Kr),nr.subVectors(e.a,Kr),ir.subVectors(e.b,Kr),sr.subVectors(e.c,Kr),Qi.subVectors(ir,nr),es.subVectors(sr,ir),ys.subVectors(nr,sr);let t=[0,-Qi.z,Qi.y,0,-es.z,es.y,0,-ys.z,ys.y,Qi.z,0,-Qi.x,es.z,0,-es.x,ys.z,0,-ys.x,-Qi.y,Qi.x,0,-es.y,es.x,0,-ys.y,ys.x,0];return!Bl(t,nr,ir,sr,lo)||(t=[1,0,0,0,1,0,0,0,1],!Bl(t,nr,ir,sr,lo))?!1:(ho.crossVectors(Qi,es),t=[ho.x,ho.y,ho.z],Bl(t,nr,ir,sr,lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ai=[new N,new N,new N,new N,new N,new N,new N,new N],$n=new N,co=new kt,nr=new N,ir=new N,sr=new N,Qi=new N,es=new N,ys=new N,Kr=new N,lo=new N,ho=new N,vs=new N;Vt=new N,uo=new Le,ug=0,Ot=class extends ei{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ug++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yh,this.updateRanges=[],this.gpuType=Fn,this.version=0,this._normalizationScale=e!==void 0?Kc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)uo.fromBufferAttribute(this,t),uo.applyMatrix3(e),this.setXY(t,uo.x,uo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Th(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):wh(e,this.array)}},ua=class extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}},da=class extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}},lt=class extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},dg=new kt,Yr=new N,kl=new N,Tn=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):dg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);let t=Yr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Yr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(kl)),this.expandByPoint(Yr.copy(e.center).sub(kl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},fg=0,Vn=new Ve,zl=new xt,rr=new N,Ln=new kt,Jr=new kt,on=new N,wt=class i extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bm(e)?da:ua)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return zl.lookAt(e),zl.updateMatrix(),this.applyMatrix4(zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Jr.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(Ln.min,Jr.min),Ln.expandByPoint(on),on.addVectors(Ln.max,Jr.max),Ln.expandByPoint(on)):(Ln.expandByPoint(Jr.min),Ln.expandByPoint(Jr.max))}Ln.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)on.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(on));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)on.fromBufferAttribute(o,l),c&&(rr.fromBufferAttribute(e,l),on.add(rr)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ot(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new N,c[U]=new N;let h=new N,u=new N,d=new N,f=new Le,m=new Le,b=new Le,g=new N,p=new N;function _(U,R,L){l[U]=l[R]=l[L]=1,h.fromBufferAttribute(n,U),u.fromBufferAttribute(n,R),d.fromBufferAttribute(n,L),f.fromBufferAttribute(r,U),m.fromBufferAttribute(r,R),b.fromBufferAttribute(r,L),u.sub(h),d.sub(h),m.sub(f),b.sub(f);let O=1/(m.x*b.y-b.x*m.y);isFinite(O)&&(g.copy(u).multiplyScalar(b.y).addScaledVector(d,-m.y).multiplyScalar(O),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-b.x).multiplyScalar(O),o[U].add(g),o[R].add(g),o[L].add(g),c[U].add(p),c[R].add(p),c[L].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let U=0,R=S.length;U<R;++U){let L=S[U],O=L.start,V=L.count;for(let P=O,q=O+V;P<q;P+=3)_(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let v=new N,T=new N,w=new N,x=new N;function E(U){w.fromBufferAttribute(s,U),x.copy(w);let R=o[U];v.copy(R),v.sub(w.multiplyScalar(w.dot(R))).normalize(),T.crossVectors(x,R);let O=T.dot(c[U])<0?-1:1;a.setXYZW(U,v.x,v.y,v.z,O)}for(let U=0,R=n.count;U<R;++U)l[U]&&E(U);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let b=0,g=c.length;b<g;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Ot(d,h,u)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},br=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yh,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=wd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=wd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};_n=new N,_r=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Kc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){aa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){aa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Th(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):wh(e,this.data.array)}},Gl=new N,pg=new N,mg=new qe,Qn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Gl.subVectors(n,t).cross(pg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Gl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||mg.getNormalMatrix(e),s=this.coplanarPoint(Gl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},gg=0,vn=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Cr,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=ch,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Do,this.stencilZFail=Do,this.stencilZPass=Do,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Me().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Qn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Le().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ri=new N,Hl=new N,fo=new N,po=new N,Ps=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Hl.copy(e).add(t).multiplyScalar(.5),fo.copy(t).sub(e).normalize(),po.copy(this.origin).sub(Hl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(fo),o=po.dot(this.direction),c=-po.dot(fo),l=po.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Hl).addScaledVector(fo,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);let n=Ri.dot(this.direction),s=Ri.dot(Ri)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,m=t.x-a.x,b=t.y-a.y,g=t.z-a.z,p=n.x-a.x,_=n.y-a.y,S=n.z-a.z,v=Math.abs(c),T=Math.abs(l),w=Math.abs(h),x,E,U,R,L,O,V,P,q,K,W,re;if(v>=T&&v>=w?(U=c,O=u,q=m,re=p,c>=0?(x=l,E=h,R=d,L=f,V=b,P=g,K=_,W=S):(x=h,E=l,R=f,L=d,V=g,P=b,K=S,W=_)):T>=w?(U=l,O=d,q=b,re=_,l>=0?(x=h,E=c,R=f,L=u,V=g,P=m,K=S,W=p):(x=c,E=h,R=u,L=f,V=m,P=g,K=p,W=S)):(U=h,O=f,q=g,re=S,h>=0?(x=c,E=l,R=u,L=d,V=m,P=b,K=p,W=_):(x=l,E=c,R=d,L=u,V=b,P=m,K=_,W=p)),U===0)return null;let j=x/U,te=E/U,ne=1/U,Ce=R-j*O,je=L-te*O,Z=V-j*q,_e=P-te*q,Ee=K-j*re,ke=W-te*re,ye=Ee*_e-ke*Z,Ye=Ce*ke-je*Ee,Gt=Z*je-_e*Ce;if(s){if(ye<0||Ye<0||Gt<0)return null}else if((ye<0||Ye<0||Gt<0)&&(ye>0||Ye>0||Gt>0))return null;let Ge=ye+Ye+Gt;if(Ge===0)return null;let ft=ne*(ye*O+Ye*q+Gt*re);return(Ge>0?ft<0:ft>0)?null:this.at(ft/Ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ad=new Ve,Ms=new Ps,mo=new Tn,Rd=new N,go=new N,xo=new N,bo=new N,Vl=new N,_o=new N,Cd=new N,yo=new N,Ue=class extends xt{constructor(e=new wt,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){_o.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Vl.fromBufferAttribute(u,e),a?_o.addScaledVector(Vl,h):_o.addScaledVector(Vl.sub(t),h))}t.add(_o)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(r),Ms.copy(e.ray).recast(e.near),!(mo.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(mo,Rd)===null||Ms.origin.distanceToSquared(Rd)>(e.far-e.near)**2))&&(Ad.copy(r).invert(),Ms.copy(e.ray).applyMatrix4(Ad),!(n.boundingBox!==null&&Ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],_=Math.max(g.start,f.start),S=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=_,T=S;v<T;v+=3){let w=o.getX(v),x=o.getX(v+1),E=o.getX(v+2);s=vo(this,p,e,n,l,h,u,w,x,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let _=o.getX(g),S=o.getX(g+1),v=o.getX(g+2);s=vo(this,a,e,n,l,h,u,_,S,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],_=Math.max(g.start,f.start),S=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=_,T=S;v<T;v+=3){let w=v,x=v+1,E=v+2;s=vo(this,p,e,n,l,h,u,w,x,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let _=g,S=g+1,v=g+2;s=vo(this,a,e,n,l,h,u,_,S,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};Zr=new mt,Pd=new mt,Id=new mt,bg=new mt,Dd=new Ve,Mo=new N,Wl=new Tn,Ld=new Ve,ql=new Ps,fa=class extends Ue{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yl,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new kt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mo),this.boundingBox.expandByPoint(Mo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Tn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mo),this.boundingSphere.expandByPoint(Mo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wl.copy(this.boundingSphere),Wl.applyMatrix4(s),e.ray.intersectsSphere(Wl)!==!1&&(Ld.copy(s).invert(),ql.copy(e.ray).applyMatrix4(Ld),!(this.boundingBox!==null&&ql.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ql)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Pd.fromBufferAttribute(s.attributes.skinIndex,e),Id.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Zr.copy(t),t.set(0,0,0,0)):(Zr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Zr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Id.getComponent(r);if(a!==0){let o=Pd.getComponent(r);Dd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(bg.copy(Zr).applyMatrix4(Dd),a)}}return t.isVector4&&(t.w=Zr.w),t.applyMatrix4(this.bindMatrixInverse)}},yr=class extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}},vr=class extends Ft{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Bt,h=Bt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Nd=new Ve,_g=new Ve,pa=class i{constructor(e=[],t=[]){this.uuid=bi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:_g;Nd.multiplyMatrices(o,t[r]),Nd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new vr(t,e,e,jn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ie("Skeleton: No bone found with UUID:",r),a=new yr),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Di=class extends Ot{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ar=new Ve,Fd=new Ve,So=[],Ud=new kt,yg=new Ve,$r=new Ue,Qr=new Tn,ti=class extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Di(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ar),Ud.copy(e.boundingBox).applyMatrix4(ar),this.boundingBox.union(Ud)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ar),Qr.copy(e.boundingSphere).applyMatrix4(ar),this.boundingSphere.union(Qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qr.copy(this.boundingSphere),Qr.applyMatrix4(n),e.ray.intersectsSphere(Qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ar),Fd.multiplyMatrices(n,ar),$r.matrixWorld=Fd,$r.raycast(e,So);for(let a=0,o=So.length;a<o;a++){let c=So[a];c.instanceId=r,c.object=this,t.push(c)}So.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Di(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vr(new Float32Array(s*this.count),s,this.count,uc,Fn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ss=new Tn,vg=new Le(.5,.5),Eo=new N,ss=class{constructor(e=new Qn,t=new Qn,n=new Qn,s=new Qn,r=new Qn,a=new Qn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],b=r[9],g=r[10],p=r[11],_=r[12],S=r[13],v=r[14],T=r[15];if(s[0].setComponents(l-a,f-h,p-m,T-_).normalize(),s[1].setComponents(l+a,f+h,p+m,T+_).normalize(),s[2].setComponents(l+o,f+u,p+b,T+S).normalize(),s[3].setComponents(l-o,f-u,p-b,T-S).normalize(),n)s[4].setComponents(c,d,g,v).normalize(),s[5].setComponents(l-c,f-d,p-g,T-v).normalize();else if(s[4].setComponents(l-c,f-d,p-g,T-v).normalize(),t===qn)s[5].setComponents(l+c,f+d,p+g,T+v).normalize();else if(t===fr)s[5].setComponents(c,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);let t=vg.distanceTo(e.center);return Ss.radius=.7071067811865476+t,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Eo.x=s.normal.x>0?e.max.x:e.min.x,Eo.y=s.normal.y>0?e.max.y:e.min.y,Eo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Eo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Od=new Ve,Vo=class i{constructor(){this.coordinateSystem=qn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Od.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ss),n[s].setFromProjectionMatrix(Od,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ss),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}},Mr=class extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Wo=new N,qo=new N,Bd=new Ve,ea=new Ps,To=new Tn,Xl=new N,kd=new N,Is=class extends xt{constructor(e=new wt,t=new Mr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Wo.fromBufferAttribute(t,s-1),qo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Wo.distanceTo(qo);e.setAttribute("lineDistance",new lt(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(s),To.radius+=r,e.ray.intersectsSphere(To)===!1)return;Bd.copy(s).invert(),ea.copy(e.ray).applyMatrix4(Bd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=l){let p=h.getX(b),_=h.getX(b+1),S=wo(this,e,ea,c,p,_,b);S&&t.push(S)}if(this.isLineLoop){let b=h.getX(m-1),g=h.getX(f),p=wo(this,e,ea,c,b,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=l){let p=wo(this,e,ea,c,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){let b=wo(this,e,ea,c,m-1,f,m-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};zd=new N,Gd=new N,ma=class extends Is{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)zd.fromBufferAttribute(t,s),Gd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zd.distanceTo(Gd);e.setAttribute("lineDistance",new lt(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ga=class extends Is{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},rs=class extends vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hd=new Ve,Zl=new Ps,Ao=new Tn,Ro=new N,Ds=class extends xt{constructor(e=new wt,t=new rs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(s),Ao.radius+=r,e.ray.intersectsSphere(Ao)===!1)return;Hd.copy(s).invert(),Zl.copy(e.ray).applyMatrix4(Hd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,b=f;m<b;m++){let g=l.getX(m);Ro.fromBufferAttribute(u,g),Vd(Ro,g,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,b=f;m<b;m++)Ro.fromBufferAttribute(u,m),Vd(Ro,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};xa=class extends Ft{constructor(e=[],t=Gs,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ls=class extends Ft{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Li=class extends Ft{constructor(e,t,n=ni,s,r,a,o=Bt,c=Bt,l,h=Ii,u=1){if(h!==Ii&&h!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ba=class extends Li{constructor(e,t=ni,n=Gs,s,r,a=Bt,o=Bt,c,l=Ii){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},_a=class extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ae=class i extends wt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function m(b,g,p,_,S,v,T,w,x,E,U){let R=v/x,L=T/E,O=v/2,V=T/2,P=w/2,q=x+1,K=E+1,W=0,re=0,j=new N;for(let te=0;te<K;te++){let ne=te*L-V;for(let Ce=0;Ce<q;Ce++){let je=Ce*R-O;j[b]=je*_,j[g]=ne*S,j[p]=P,l.push(j.x,j.y,j.z),j[b]=0,j[g]=0,j[p]=w>0?1:-1,h.push(j.x,j.y,j.z),u.push(Ce/x),u.push(1-te/E),W+=1}}for(let te=0;te<E;te++)for(let ne=0;ne<x;ne++){let Ce=d+ne+q*te,je=d+ne+q*(te+1),Z=d+(ne+1)+q*(te+1),_e=d+(ne+1)+q*te;c.push(Ce,je,_e),c.push(je,Z,_e),re+=6}o.addGroup(f,re,U),f+=re,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Sr=class i extends wt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new N,h=new Le;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(o,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Qe=class i extends wt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,b=[],g=n/2,p=0;_(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(f,2));function _(){let v=new N,T=new N,w=0,x=(t-e)/n;for(let E=0;E<=r;E++){let U=[],R=E/r,L=R*(t-e)+e;for(let O=0;O<=s;O++){let V=O/s,P=V*c+o,q=Math.sin(P),K=Math.cos(P);T.x=L*q,T.y=-R*n+g,T.z=L*K,u.push(T.x,T.y,T.z),v.set(q,x,K).normalize(),d.push(v.x,v.y,v.z),f.push(V,1-R),U.push(m++)}b.push(U)}for(let E=0;E<s;E++)for(let U=0;U<r;U++){let R=b[U][E],L=b[U+1][E],O=b[U+1][E+1],V=b[U][E+1];(e>0||U!==0)&&(h.push(R,L,V),w+=3),(t>0||U!==r-1)&&(h.push(L,O,V),w+=3)}l.addGroup(p,w,0),p+=w}function S(v){let T=m,w=new Le,x=new N,E=0,U=v===!0?e:t,R=v===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,g*R,0),d.push(0,R,0),f.push(.5,.5),m++;let L=m;for(let O=0;O<=s;O++){let P=O/s*c+o,q=Math.cos(P),K=Math.sin(P);x.x=U*K,x.y=g*R,x.z=U*q,u.push(x.x,x.y,x.z),d.push(0,R,0),w.x=q*.5+.5,w.y=K*.5*R+.5,f.push(w.x,w.y),m++}for(let O=0;O<s;O++){let V=T+O,P=L+O;v===!0?h.push(P,P+1,V):h.push(P+1,P,V),E+=3}l.addGroup(p,E,v===!0?1:2),p+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},wn=class i extends Qe{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},di=class i extends wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],b=[],g=[];for(let p=0;p<h;p++){let _=p*d-a;for(let S=0;S<l;S++){let v=S*u-r;m.push(v,-_,0),b.push(0,0,1),g.push(S/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){let S=_+l*p,v=_+l*(p+1),T=_+1+l*(p+1),w=_+1+l*p;f.push(S,v,w),f.push(v,T,w)}this.setIndex(f),this.setAttribute("position",new lt(m,3)),this.setAttribute("normal",new lt(b,3)),this.setAttribute("uv",new lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Pt=class i extends wt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new N,d=new N,f=[],m=[],b=[],g=[];for(let p=0;p<=n;p++){let _=[],S=p/n,v=a+S*o,T=e*Math.cos(v),w=Math.sqrt(e*e-T*T),x=0;p===0&&a===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){let U=E/t,R=s+U*r;u.x=-w*Math.cos(R),u.y=T,u.z=w*Math.sin(R),m.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),g.push(U+x,1-S),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let S=h[p][_+1],v=h[p][_],T=h[p+1][_],w=h[p+1][_+1];(p!==0||a>0)&&f.push(S,v,w),(p!==n-1||c<Math.PI)&&f.push(v,T,w)}this.setIndex(f),this.setAttribute("position",new lt(m,3)),this.setAttribute("normal",new lt(b,3)),this.setAttribute("uv",new lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},fi=class i extends wt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new N,f=new N,m=new N;for(let b=0;b<=n;b++){let g=a+b/n*o;for(let p=0;p<=s;p++){let _=p/s*r;f.x=(e+t*Math.cos(g))*Math.cos(_),f.y=(e+t*Math.cos(g))*Math.sin(_),f.z=t*Math.sin(g),l.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(p/s),u.push(b/n)}}for(let b=1;b<=n;b++)for(let g=1;g<=s;g++){let p=(s+1)*b+g-1,_=(s+1)*(b-1)+g-1,S=(s+1)*(b-1)+g,v=(s+1)*b+g;c.push(p,_,v),c.push(_,S,v)}this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};ii={clone:Ws,merge:xn},Sg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=class extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sg,this.fragmentShader=Eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=Mg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Me().setHex(s.value);break;case"v2":this.uniforms[n].value=new Le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Er=class extends Lt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ns=class extends vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ha,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Mn=class extends Ns{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ws('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ws('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},St=class extends vn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ha,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=sc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xo=class extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jo=class extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};pi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ko=class extends pi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Es,endingEnd:Es}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ts:r=e,o=2*t-n;break;case sa:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ts:a=e,c=2*n-t;break;case sa:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),b=m*m,g=b*m,p=-d*g+2*d*b-d*m,_=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*m+1,S=(-1-f)*g+(1.5+f)*b+.5*m,v=f*g-f*b;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+_*a[l+T]+S*a[c+T]+v*a[u+T];return r}},ya=class extends pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Yo=class extends pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Jo=class extends pi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(s-t),b=1-m;for(let g=0;g!==o;++g)r[g]=a[l+g]*b+a[c+g]*m;return r}let d=o*2,f=e-1;for(let m=0;m!==o;++m){let b=a[l+m],g=a[c+m],p=f*d+m*2,_=u[p],S=u[p+1],v=e*d+m*2,T=h[v],w=h[v+1],x=Rg(n,t,_,T,s);r[m]=kf(x,b,S,w,g)}return r}};An=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ns(t,this.TimeBufferType),this.values=ns(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ns(e.times,Array),values:ns(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ta(e.settings)&&(n.settings={inTangents:ns(e.settings.inTangents,Array),outTangents:ns(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Jo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case As:t=this.InterpolantFactoryMethodDiscrete;break;case Rs:t=this.InterpolantFactoryMethodLinear;break;case Io:t=this.InterpolantFactoryMethodSmooth;break;case Jl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return As;case this.InterpolantFactoryMethodLinear:return Rs;case this.InterpolantFactoryMethodSmooth:return Io;case this.InterpolantFactoryMethodBezier:return Jl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;ta(this.settings)&&(Xd(this.settings.inTangents,e),Xd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ta(this.settings)&&(jd(this.settings.inTangents,e),jd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){He("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){He("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&km(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){He("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Io,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let b=t[u+m];if(b!==t[d+m]||b!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ta(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Rs;Ni=class extends An{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=As;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;va=class extends An{constructor(e,t,n,s){super(e,t,n,s)}};va.prototype.ValueTypeName="color";Fi=class extends An{constructor(e,t,n,s){super(e,t,n,s)}};Fi.prototype.ValueTypeName="number";Zo=class extends pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)gn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ui=class extends An{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Zo(this.times,this.values,this.getValueSize(),e)}};Ui.prototype.ValueTypeName="quaternion";Ui.prototype.InterpolantFactoryMethodSmooth=void 0;Oi=class extends An{constructor(e,t,n){super(e,t,n)}};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=As;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;as=class extends An{constructor(e,t,n,s){super(e,t,n,s)}};as.prototype.ValueTypeName="vector";Fs=class{constructor(e="",t=-1,n=[],s=jc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=bi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Pg(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(An.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=Tg(c);c=qd(c,1,h),l=qd(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Fi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};hi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Kd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Kd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};$o=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zf=new $o,mi=class{constructor(e){this.manager=e!==void 0?e:zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};mi.DEFAULT_MATERIAL_NAME="__DEFAULT";Ci={},$l=class extends Error{constructor(e,t){super(e),this.response=t}},Tr=class extends mi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=hi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ci[e]!==void 0){Ci[e].push({onLoad:t,onProgress:n,onError:s});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ci[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,b=0,g=new ReadableStream({start(p){_();function _(){u.read().then(({done:S,value:v})=>{if(S)p.close();else{b+=v.byteLength;let T=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:f});for(let w=0,x=h.length;w<x;w++){let E=h[w];E.onProgress&&E.onProgress(T)}p.enqueue(v),_()}},S=>{p.error(S)})}}});return new Response(g)}else throw new $l(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{hi.add(`file:${e}`,l);let h=Ci[e];delete Ci[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Ci[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ci[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},or=new WeakMap,Qo=class extends mi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=hi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=or.get(a);u===void 0&&(u=[],or.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=pr("img");function c(){h(),t&&t(this);let u=or.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}or.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),hi.remove(`image:${e}`);let d=or.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}or.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),hi.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}},Us=class extends mi{constructor(e){super(e)}load(e,t,n,s){let r=new Ft,a=new Qo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Os=class extends xt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ma=class extends Os{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},jl=new Ve,Yd=new N,Jd=new N,wr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ss,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Yd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yd),Jd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){jl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(jl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===fr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Co=new N,Po=new gn,li=new N,Sa=class extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Co,Po,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Po,li.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Co,Po,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Po,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ts=new N,Zd=new Le,$d=new Le,jt=class extends Sa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ts.x,ts.y).multiplyScalar(-e/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ts.x,ts.y).multiplyScalar(-e/ts.z)}getViewSize(e,t){return this.getViewBounds(e,Zd,$d),t.subVectors($d,Zd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(na*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ql=class extends wr{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Cs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ea=class extends Os{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ql}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},eh=class extends wr{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}},Bs=class extends Os{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new eh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Bi=class extends Sa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},th=class extends wr{constructor(){super(new Bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},os=class extends Os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new th}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ki=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Kl=new WeakMap,Ta=class extends mi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=hi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Kl.has(a)===!0?(s&&s(Kl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return hi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Kl.set(c,l),hi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});hi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},cr=-90,lr=1,Ar=class extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jt(cr,lr,e,t);s.layers=this.layers,this.add(s);let r=new jt(cr,lr,e,t);r.layers=this.layers,this.add(r);let a=new jt(cr,lr,e,t);a.layers=this.layers,this.add(a);let o=new jt(cr,lr,e,t);o.layers=this.layers,this.add(o);let c=new jt(cr,lr,e,t);c.layers=this.layers,this.add(c);let l=new jt(cr,lr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=b,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ec=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},wa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ig.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};tc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){gn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let a=this._workIndex*r;gn.multiplyQuaternionsFlat(e,a,e,t,e,n),gn.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*s}}},Rh="\\[\\]\\.:\\/",Dg=new RegExp("["+Rh+"]","g"),Ch="[^"+Rh+"]",Lg="[^"+Rh.replace("\\.","")+"]",Ng=/((?:WC+[\/:])*)/.source.replace("WC",Ch),Fg=/(WCOD+)?/.source.replace("WCOD",Lg),Ug=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ch),Og=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ch),Bg=new RegExp("^"+Ng+Fg+Ug+Og+"$"),kg=["material","materials","bones","map"],nh=class{constructor(e,t,n){let s=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dg,"")}static parseTrackName(e){let t=Bg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;He("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=nh;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];nc=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Es,endingEnd:Es};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Xc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Tf:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case jc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,a=n===Ef;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===qc){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Ts,s.endingEnd=Ts):(e?s.endingStart=this.zeroSlopeAtStart?Ts:Es:s.endingStart=sa,t?s.endingEnd=this.zeroSlopeAtEnd?Ts:Es:s.endingEnd=sa)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},zg=new Float32Array(1),Aa=class extends ei{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}let b=t&&t._propertyBindings[u].binding.parsedPath;m=new tc(gt.create(n,f,b),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ya(new Float32Array(2),new Float32Array(2),1,zg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,a=typeof e=="string"?Fs.findByName(s,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=jc),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new nc(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Fs.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Fh=class Fh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Fh.prototype.isMatrix2=!0;ih=Fh;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function cp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Vg(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],b=u[f];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let b=u[f];i.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}function Eb(i,e,t,n,s,r){let a=new Me(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){let v=_.backgroundBlurriness>0;S=e.get(S,v)}return S}function m(_){let S=!1,v=f(_);v===null?g(a,o):v&&v.isColor&&(g(v,1),S=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(_,S){let v=f(S);v&&v.isCubeTexture?(l===void 0&&(l=new Ue(new Ae(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:Ws(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Sb.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(lp),l.material.toneMapped=Ze.getTransfer(v.colorSpace)!==ht,(h!==v||u!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ue(new di(2,2),new Lt({name:"BackgroundMaterial",uniforms:Ws(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(v.colorSpace)!==ht,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function g(_,S){_.getRGB(Yc,Ah(i)),t.buffers.color.setClear(Yc.r,Yc.g,Yc.b,S,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,S=1){a.set(_),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:m,addToRenderList:b,dispose:p}}function Tb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(L,O,V,P,q){let K=!1,W=u(L,P,V,O);r!==W&&(r=W,l(r.object)),K=f(L,P,V,q),K&&m(L,P,V,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,v(L,O,V,P),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function u(L,O,V,P){let q=P.wireframe===!0,K=n[O.id];K===void 0&&(K={},n[O.id]=K);let W=L.isInstancedMesh===!0?L.id:0,re=K[W];re===void 0&&(re={},K[W]=re);let j=re[V.id];j===void 0&&(j={},re[V.id]=j);let te=j[q];return te===void 0&&(te=d(c()),j[q]=te),te}function d(L){let O=[],V=[],P=[];for(let q=0;q<t;q++)O[q]=0,V[q]=0,P[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:P,object:L,attributes:{},index:null}}function f(L,O,V,P){let q=r.attributes,K=O.attributes,W=0,re=V.getAttributes();for(let j in re)if(re[j].location>=0){let ne=q[j],Ce=K[j];if(Ce===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(Ce=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(Ce=L.instanceColor)),ne===void 0||ne.attribute!==Ce||Ce&&ne.data!==Ce.data)return!0;W++}return r.attributesNum!==W||r.index!==P}function m(L,O,V,P){let q={},K=O.attributes,W=0,re=V.getAttributes();for(let j in re)if(re[j].location>=0){let ne=K[j];ne===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor));let Ce={};Ce.attribute=ne,ne&&ne.data&&(Ce.data=ne.data),q[j]=Ce,W++}r.attributes=q,r.attributesNum=W,r.index=P}function b(){let L=r.newAttributes;for(let O=0,V=L.length;O<V;O++)L[O]=0}function g(L){p(L,0)}function p(L,O){let V=r.newAttributes,P=r.enabledAttributes,q=r.attributeDivisors;V[L]=1,P[L]===0&&(i.enableVertexAttribArray(L),P[L]=1),q[L]!==O&&(i.vertexAttribDivisor(L,O),q[L]=O)}function _(){let L=r.newAttributes,O=r.enabledAttributes;for(let V=0,P=O.length;V<P;V++)O[V]!==L[V]&&(i.disableVertexAttribArray(V),O[V]=0)}function S(L,O,V,P,q,K,W){W===!0?i.vertexAttribIPointer(L,O,V,q,K):i.vertexAttribPointer(L,O,V,P,q,K)}function v(L,O,V,P){b();let q=P.attributes,K=V.getAttributes(),W=O.defaultAttributeValues;for(let re in K){let j=K[re];if(j.location>=0){let te=q[re];if(te===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(te=L.instanceColor)),te!==void 0){let ne=te.normalized,Ce=te.itemSize,je=e.get(te);if(je===void 0)continue;let Z=je.buffer,_e=je.type,Ee=je.bytesPerElement,ke=_e===i.INT||_e===i.UNSIGNED_INT||te.gpuType===cc;if(te.isInterleavedBufferAttribute){let ye=te.data,Ye=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,Gt=te.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let Ge=0;Ge<j.locationSize;Ge++)p(j.location+Ge,ye.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ge=0;Ge<j.locationSize;Ge++)g(j.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Ge=0;Ge<j.locationSize;Ge++)S(j.location+Ge,Ce/j.locationSize,_e,ne,Ye*Ee,(Gt+Ce/j.locationSize*Ge)*Ee,ke)}else{if(te.isInstancedBufferAttribute){for(let ye=0;ye<j.locationSize;ye++)p(j.location+ye,te.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ye=0;ye<j.locationSize;ye++)g(j.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let ye=0;ye<j.locationSize;ye++)S(j.location+ye,Ce/j.locationSize,_e,ne,Ce*Ee,Ce/j.locationSize*ye*Ee,ke)}}else if(W!==void 0){let ne=W[re];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(j.location,ne);break;case 3:i.vertexAttrib3fv(j.location,ne);break;case 4:i.vertexAttrib4fv(j.location,ne);break;default:i.vertexAttrib1fv(j.location,ne)}}}}_()}function T(){U();for(let L in n){let O=n[L];for(let V in O){let P=O[V];for(let q in P){let K=P[q];for(let W in K)h(K[W].object),delete K[W];delete P[q]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;let O=n[L.id];for(let V in O){let P=O[V];for(let q in P){let K=P[q];for(let W in K)h(K[W].object),delete K[W];delete P[q]}}delete n[L.id]}function x(L){for(let O in n){let V=n[O];for(let P in V){let q=V[P];if(q[L.id]===void 0)continue;let K=q[L.id];for(let W in K)h(K[W].object),delete K[W];delete q[L.id]}}}function E(L){for(let O in n){let V=n[O],P=L.isInstancedMesh===!0?L.id:0,q=V[P];if(q!==void 0){for(let K in q){let W=q[K];for(let re in W)h(W[re].object),delete W[re];delete q[K]}delete V[P],Object.keys(V).length===0&&delete n[O]}}}function U(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:E,releaseStatesOfProgram:x,initAttributes:b,enableAttribute:g,disableUnusedAttributes:_}}function wb(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ab(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==jn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let E=x===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Rn&&x!==Fn&&!E&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ie("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:v,maxSamples:T,samples:w}}function Rb(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Qn,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let _=r?0:n,S=_*4,v=p.clippingState||null;c.value=v,v=h(m,d,S,f);for(let T=0;T!==S;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=c.value,m!==!0||g===null){let p=f+b*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,v=f;S!==b;++S,v+=4)a.copy(u[S]).applyMatrix4(_,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function Hf(i,e,t){return new qa(i,{minFilter:Xn,generateMipmaps:e,type:hn,colorSpace:yn,depthBuffer:t})}function Xa(i,e,t){return new Lt({name:i,uniforms:e,vertexShader:et.cube_vert,fragmentShader:t,side:Zt,blending:Gi,depthTest:!1,depthWrite:!1})}function Nb(){return Xa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${hp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Fb(){return Xa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:up}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ub(){return Xa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Pb}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Vf(){return Xa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Wf(){return Xa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ob(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===rc||f===ac)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let b=new qa(m.height);return b.fromEquirectangularTexture(i,d),e.set(d,b),d.addEventListener("dispose",l),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,m=f===rc||f===ac,b=f===Gs||f===Pr;if(m||b){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Zc(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let _=d.image;return m&&_&&_.height>0||b&&_&&c(_)?(n===null&&(n=new Zc(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===rc?d.mapping=Gs:f===ac&&(d.mapping=Pr),d}function c(d){let f=0,m=6;for(let b=0;b<m;b++)d[b]!==void 0&&f++;return f===m}function l(d){let f=d.target;f.removeEventListener("dispose",l);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Bb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ws("WebGLRenderer: "+n+" extension not supported."),s}}}function kb(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){c(m.target)}function c(m){m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let b=r.get(m);b&&(e.remove(b),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(m,b){return s[b.id]!==void 0||(b.addEventListener("dispose",o),s[b.id]=new WeakRef(b),a.register(b,b.id,b),t.memory.geometries++),b}function h(m){let b=m.attributes;for(let g in b)e.update(b[g],i.ARRAY_BUFFER)}function u(m){let b=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let _=b!==null?b.array.length:g.array.length/3-1,S=g.count>=65535?da:ua,v=new S(Math.ceil(_/3)*6,1),T=v.array;if(b!==null){let x=b.array;p=b.version;for(let E=0,U=0;E<_;E+=3){let R=x[E+0],L=x[E+1],O=x[E+2];T[U++]=R,T[U++]=L,T[U++]=L,T[U++]=O,T[U++]=O,T[U++]=R}}else{p=g.version;for(let x=0,E=0;x<_;x+=3){let U=x+0,R=x+1,L=x+2;T[E++]=U,T[E++]=R,T[E++]=R,T[E++]=L,T[E++]=L,T[E++]=U}}v.version=p;let w=r.get(m);w&&e.remove(w),r.set(m,v)}function d(m){let b=r.get(m);if(b){let g=m.index;g!==null&&b.version<g.version&&u(m)}else u(m);return r.get(m)}function f(){for(let m in s){let b=s[m].deref();b!==void 0&&c(b)}}return{get:l,update:h,getWireframeAttribute:d,dispose:f}}function zb(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let b=0;for(let g=0;g<f;g++)b+=d[g];t.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Gb(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Hb(i,e,t){let n=new WeakMap,s=new mt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let U=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",U)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],S=0;f===!0&&(S=1),m===!0&&(S=2),b===!0&&(S=3);let v=o.attributes.position.count*S,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*T*4*u),x=new oa(w,v,T,u);x.type=Fn,x.needsUpdate=!0;let E=S*4;for(let R=0;R<u;R++){let L=g[R],O=p[R],V=_[R],P=v*T*4*R;for(let q=0;q<L.count;q++){let K=q*E;f===!0&&(s.fromBufferAttribute(L,q),w[P+K+0]=s.x,w[P+K+1]=s.y,w[P+K+2]=s.z,w[P+K+3]=0),m===!0&&(s.fromBufferAttribute(O,q),w[P+K+4]=s.x,w[P+K+5]=s.y,w[P+K+6]=s.z,w[P+K+7]=0),b===!0&&(s.fromBufferAttribute(V,q),w[P+K+8]=s.x,w[P+K+9]=s.y,w[P+K+10]=s.z,w[P+K+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new Le(v,T)},n.set(o,d),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Vb(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}function qb(i,e,t,n,s,r){let a=new Yt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new wt;h.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new lt([0,2,0,0,2,0],2));let u=new Er({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ue(h,u),f=new Bi(-1,1,1,-1,0,1),m=null,b=null,g=!1,p,_=null,S=[],v=!1;this.setSize=function(T,w){a.setSize(T,w),o!==null&&o.setSize(T,w),c!==null&&c.setSize(T,w);for(let x=0;x<S.length;x++){let E=S[x];E.setSize&&E.setSize(T,w)}},this.setEffects=function(T){S=T,v=S.length>0&&S[0].isRenderPass===!0;let w=a.width,x=a.height;S.length>0&&o===null&&(o=new Yt(w,x,{type:hn,depthBuffer:!1,stencilBuffer:!1}),c=new Yt(w,x,{type:hn,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&S.some(U=>U.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&l===null&&(l=new Li(w,x),r===!0&&(l.format=Hi,l.type=Vs)),a.dispose(),a.depthTexture=E?l:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let U=0;U<S.length;U++){let R=S[U];R.setSize&&R.setSize(w,x),E&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(T,w){if(g||T.toneMapping===xi&&S.length===0)return!1;if(_=w,w!==null){let x=w.width,E=w.height;(a.width!==x||a.height!==E)&&this.setSize(x,E)}return v===!1&&T.setRenderTarget(a),p=T.toneMapping,T.toneMapping=xi,!0},this.hasRenderPass=function(){return v},this.end=function(T,w){T.toneMapping=p,g=!0;let x=a,E=o;for(let U=0;U<S.length;U++){let R=S[U];R.enabled!==!1&&(R.render(T,E,x,w),R.needsSwap!==!1&&(x=E,E=E===o?c:o))}if(m!==T.outputColorSpace||b!==T.toneMapping){m=T.outputColorSpace,b=T.toneMapping,u.defines={},Ze.getTransfer(m)===ht&&(u.defines.SRGB_TRANSFER="");let U=Wb[b];U&&(u.defines[U]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(_),T.render(d,f),_=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}function Fr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=qf[s];if(r===void 0&&(r=new Float32Array(s),qf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qc(i,e){let t=Xf[e];t===void 0&&(t=new Int32Array(e),Xf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Xb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function jb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),Qt(t,e)}}function Kb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),Qt(t,e)}}function Yb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),Qt(t,e)}}function Jb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if($t(t,n))return;Yf.set(n),i.uniformMatrix2fv(this.addr,!1,Yf),Qt(t,n)}}function Zb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if($t(t,n))return;Kf.set(n),i.uniformMatrix3fv(this.addr,!1,Kf),Qt(t,n)}}function $b(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if($t(t,n))return;jf.set(n),i.uniformMatrix4fv(this.addr,!1,jf),Qt(t,n)}}function Qb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),Qt(t,e)}}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),Qt(t,e)}}function n_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),Qt(t,e)}}function i_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),Qt(t,e)}}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),Qt(t,e)}}function a_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),Qt(t,e)}}function el(i){return i.version===0&&(i.compareFunction=_h,i.needsUpdate=!0),i}function o_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=el(fp):r=dp,t.setTexture2D(e||r,s)}function c_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||gp,s)}function l_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=el(pp):r=xp,t.setTextureCube(e||r,s)}function h_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||mp,s)}function u_(i){switch(i){case 5126:return Xb;case 35664:return jb;case 35665:return Kb;case 35666:return Yb;case 35674:return Jb;case 35675:return Zb;case 35676:return $b;case 5124:case 35670:return Qb;case 35667:case 35671:return e_;case 35668:case 35672:return t_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return s_;case 36295:return r_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return h_}}function d_(i,e){i.uniform1fv(this.addr,e)}function f_(i,e){let t=Fr(e,this.size,2);i.uniform2fv(this.addr,t)}function p_(i,e){let t=Fr(e,this.size,3);i.uniform3fv(this.addr,t)}function m_(i,e){let t=Fr(e,this.size,4);i.uniform4fv(this.addr,t)}function g_(i,e){let t=Fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function x_(i,e){let t=Fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function b_(i,e){let t=Fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function __(i,e){i.uniform1iv(this.addr,e)}function y_(i,e){i.uniform2iv(this.addr,e)}function v_(i,e){i.uniform3iv(this.addr,e)}function M_(i,e){i.uniform4iv(this.addr,e)}function S_(i,e){i.uniform1uiv(this.addr,e)}function E_(i,e){i.uniform2uiv(this.addr,e)}function T_(i,e){i.uniform3uiv(this.addr,e)}function w_(i,e){i.uniform4uiv(this.addr,e)}function A_(i,e,t){let n=this.cache,s=e.length,r=Qc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=el(fp):a=dp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function R_(i,e,t){let n=this.cache,s=e.length,r=Qc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||gp,r[a])}function C_(i,e,t){let n=this.cache,s=e.length,r=Qc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=el(pp):a=xp;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function P_(i,e,t){let n=this.cache,s=e.length,r=Qc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||mp,r[a])}function I_(i){switch(i){case 5126:return d_;case 35664:return f_;case 35665:return p_;case 35666:return m_;case 35674:return g_;case 35675:return x_;case 35676:return b_;case 5124:case 35670:return __;case 35667:case 35671:return y_;case 35668:case 35672:return v_;case 35669:case 35673:return M_;case 5125:return S_;case 36294:return E_;case 36295:return T_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return P_}}function Jf(i,e){i.seq.push(e),i.map[e.id]=e}function D_(i,e,t){let n=i.name,s=n.length;for(Oh.lastIndex=0;;){let r=Oh.exec(n),a=Oh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Jf(t,l===void 0?new kh(o,i,e):new zh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Gh(o),Jf(t,u)),t=u}}}function Zf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function F_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function U_(i){Ze._getMatrix($f,Ze.workingColorSpace,i);let e=`mat3( ${$f.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case ra:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Qf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+F_(i.getShaderSource(e),o)}else return r}function O_(i,e){let t=U_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function k_(i,e){let t=B_[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function z_(){Ze.getLuminanceCoefficients(Jc);let i=Jc.x.toFixed(4),e=Jc.y.toFixed(4),t=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function H_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function V_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Wa(i){return i!==""}function ep(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function tp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Hh(i){return i.replace(W_,q_)}function q_(i,e){let t=et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Hh(t)}function np(i){return i.replace(X_,j_)}function j_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ip(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Y_(i){return K_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Z_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":J_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Q_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":$_[i.combine]||"ENVMAP_BLENDING_NONE"}function ey(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Y_(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Z_(t),u=Q_(t),d=G_(t),f=H_(r),m=s.createProgram(),b,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Wa).join(`
`),b.length>0&&(b+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Wa).join(`
`),g.length>0&&(g+=`
`)):(b=[ip(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),g=[ip(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?et.tonemapping_pars_fragment:"",t.toneMapping!==xi?k_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,O_("linearToOutputTexel",t.outputColorSpace),z_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wa).join(`
`)),a=Hh(a),a=ep(a,t),a=tp(a,t),o=Hh(o),o=ep(o,t),o=tp(o,t),a=np(a),o=np(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,b=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,g=["#define varying in",t.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=p+b+a,S=p+g+o,v=Zf(s,s.VERTEX_SHADER,_),T=Zf(s,s.FRAGMENT_SHADER,S);s.attachShader(m,v),s.attachShader(m,T),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function w(R){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(m)||"",O=s.getShaderInfoLog(v)||"",V=s.getShaderInfoLog(T)||"",P=L.trim(),q=O.trim(),K=V.trim(),W=!0,re=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,v,T);else{let j=Qf(s,v,"vertex"),te=Qf(s,T,"fragment");He("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+j+`
`+te)}else P!==""?Ie("WebGLProgram: Program Info Log:",P):(q===""||K==="")&&(re=!1);re&&(R.diagnostics={runnable:W,programLog:P,vertexShader:{log:q,prefix:b},fragmentShader:{log:K,prefix:g}})}s.deleteShader(v),s.deleteShader(T),x=new Nr(s,m),E=V_(s,m)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(m,L_)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=N_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=T,this}function ny(i){return i===cs||i===ka||i===za}function iy(i,e,t,n,s,r){let a=new ca,o=new Vh,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,E,U,R,L,O){let V=R.fog,P=L.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=e.get(x.envMap||q,K),re=d[x.type],j=n.precision;x.precision!==null&&(j=n.getMaxPrecision(x.precision),j!==x.precision&&Ie("WebGLProgram.getParameters:",x.precision,"not supported, using",j,"instead."));let te=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ne=te!==void 0?te.length:0,Ce=0;P.morphAttributes.position!==void 0&&(Ce=1),P.morphAttributes.normal!==void 0&&(Ce=2),P.morphAttributes.color!==void 0&&(Ce=3);let je,Z,_e,Ee;if(re){let ge=yi[re];je=ge.vertexShader,Z=ge.fragmentShader}else{je=x.vertexShader,Z=x.fragmentShader;let ge=o.getVertexShaderStage(x),pt=o.getFragmentShaderStage(x);o.update(x,ge,pt),_e=ge.id,Ee=pt.id}let ke=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Ye=L.isInstancedMesh===!0,Gt=L.isBatchedMesh===!0,Ge=!!x.map,ft=!!x.matcap,yt=!!W,st=yt&&W.isPMREMTexture===!0,cn=!!x.aoMap,qt=!!x.lightMap,En=!!x.bumpMap&&x.wireframe===!1,It=!!x.normalMap,ci=!!x.displacementMap,nn=!!x.emissiveMap,kn=!!x.metalnessMap,zn=!!x.roughnessMap,Gn=x.anisotropy>0,F=x.clearcoat>0,Hn=x.diffuseRoughness>0,Rt=x.dispersion>0,Ct=x.retroreflectivity>0,me=x.iridescence>0,Xt=x.sheen>0,ze=x.transmission>0,Xe=Gn&&!!x.anisotropyMap,A=F&&!!x.clearcoatMap,y=F&&!!x.clearcoatNormalMap,k=F&&!!x.clearcoatRoughnessMap,ie=Hn&&!!x.diffuseRoughnessMap,ee=me&&!!x.iridescenceMap,ce=me&&!!x.iridescenceThicknessMap,fe=Xt&&!!x.sheenColorMap,Y=Xt&&!!x.sheenRoughnessMap,J=!!x.specularMap,he=!!x.specularColorMap,C=!!x.specularIntensityMap,$=ze&&!!x.transmissionMap,X=ze&&!!x.thicknessMap,ue=!!x.gradientMap,oe=!!x.alphaMap,le=x.alphaTest>0,De=!!x.alphaHash,$e=!!x.extensions,ae=xi;x.toneMapped&&(ke===null||ke.isXRRenderTarget===!0)&&(ae=i.toneMapping);let Fe=st?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,Je={shaderID:re,shaderType:x.type,shaderName:x.name,vertexShader:je,fragmentShader:Z,defines:x.defines,customVertexShaderID:_e,customFragmentShaderID:Ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:j,batching:Gt,batchingColor:Gt&&L._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&L.instanceColor!==null,instancingMorph:Ye&&L.morphTexture!==null,outputColorSpace:ke===null?i.outputColorSpace:ke.isXRRenderTarget===!0?ke.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ge,matcap:ft,envMap:yt,envMapMode:yt&&W.mapping,envMapPMREM:st,envMapMaxLod:st?Fe.length-1:null,envMapSize:st?Fe[0].width:null,aoMap:cn,lightMap:qt,bumpMap:En,normalMap:It,displacementMap:ci,emissiveMap:nn,normalMapObjectSpace:It&&x.normalMapType===Af,normalMapTangentSpace:It&&x.normalMapType===Ha,packedNormalMap:It&&x.normalMapType===Ha&&ny(x.normalMap.format),metalnessMap:kn,roughnessMap:zn,anisotropy:Gn,anisotropyMap:Xe,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:y,clearcoatRoughnessMap:k,diffuseRoughness:Hn,diffuseRoughnessMap:ie,dispersion:Rt,retroreflection:Ct,iridescence:me,iridescenceMap:ee,iridescenceThicknessMap:ce,sheen:Xt,sheenColorMap:fe,sheenRoughnessMap:Y,specularMap:J,specularColorMap:he,specularIntensityMap:C,transmission:ze,transmissionMap:$,thicknessMap:X,gradientMap:ue,opaque:x.transparent===!1&&x.blending===Cr&&x.alphaToCoverage===!1,alphaMap:oe,alphaTest:le,alphaHash:De,combine:x.combine,mapUv:Ge&&f(x.map.channel),aoMapUv:cn&&f(x.aoMap.channel),lightMapUv:qt&&f(x.lightMap.channel),bumpMapUv:En&&f(x.bumpMap.channel),normalMapUv:It&&f(x.normalMap.channel),displacementMapUv:ci&&f(x.displacementMap.channel),emissiveMapUv:nn&&f(x.emissiveMap.channel),metalnessMapUv:kn&&f(x.metalnessMap.channel),roughnessMapUv:zn&&f(x.roughnessMap.channel),anisotropyMapUv:Xe&&f(x.anisotropyMap.channel),clearcoatMapUv:A&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:y&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(x.sheenRoughnessMap.channel),specularMapUv:J&&f(x.specularMap.channel),specularColorMapUv:he&&f(x.specularColorMap.channel),specularIntensityMapUv:C&&f(x.specularIntensityMap.channel),transmissionMapUv:$&&f(x.transmissionMap.channel),thicknessMapUv:X&&f(x.thicknessMap.channel),alphaMapUv:oe&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(It||Gn),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!P.attributes.uv&&(Ge||oe),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&It===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Ce,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:O.filter(ge=>ge.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ge&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===ht,decodeVideoTextureEmissive:nn&&x.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(x.emissiveMap.colorSpace)===ht,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ut,flipSided:x.side===Zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:$e&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&x.extensions.multiDraw===!0||Gt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function b(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let U in x.defines)E.push(U),E.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(g(E,x),p(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function g(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapPMREM),x.push(E.envMapMaxLod),x.push(E.envMapSize),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.diffuseRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.numLightProbeGrids),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function p(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function _(x){let E=d[x.type],U;if(E){let R=yi[E];U=ii.clone(R.uniforms)}else U=x.uniforms;return U}function S(x,E){let U=h.get(E);return U!==void 0?++U.usedTimes:(U=new ey(i,E,x,s),l.push(U),h.set(E,U)),U}function v(x){if(--x.usedTimes===0){let E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function w(){o.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:_,acquireProgram:S,releaseProgram:v,releaseShaderCache:T,programs:l,dispose:w}}function sy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ry(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function sp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function rp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,b,g,p){let _=i[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:g,group:p},i[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=m,_.materialVariant=a(d),_.groupOrder=b,_.renderOrder=d.renderOrder,_.z=g,_.group=p),e++,_}function c(d,f,m,b,g,p,_){_.reversedDepth===!0&&(g=-g);let S=o(d,f,m,b,g,p);m.transmission>0?n.push(S):m.transparent===!0?s.push(S):t.push(S)}function l(d,f,m,b,g,p){let _=o(d,f,m,b,g,p);m.transmission>0?n.unshift(_):m.transparent===!0?s.unshift(_):t.unshift(_)}function h(d,f){t.length>1&&t.sort(d||ry),n.length>1&&n.sort(f||sp),s.length>1&&s.sort(f||sp)}function u(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function ay(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new rp,i.set(n,[a])):s>=r.length?(a=new rp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function oy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new Me};break;case"SpotLight":t={position:new N,direction:new N,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function cy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function hy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function uy(i){let e=new oy,t=cy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,r=new Ve,a=new Ve;function o(l){let h=0,u=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,m=0,b=0,g=0,p=0,_=0,S=0,v=0,T=0,w=0,x=0,E=0,U=0,R=0;l.sort(hy);for(let O=0,V=l.length;O<V;O++){let P=l[O],q=P.color,K=P.intensity,W=P.distance,re=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===cs?re=P.shadow.map.texture:re=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=q.r*K,u+=q.g*K,d+=q.b*K;else if(P.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(P.sh.coefficients[j],K);R++}else if(P.isSunLight){let j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let te=P.shadow,ne=t.get(P);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[m]=ne,n.sunShadowMap[m]=re;let Ce=te.getViewportCount();for(let je=0;je<Ce;je++)n.sunShadowMatrix[b+je]=te.getMatrix(je),n.sunShadowCascade[b+je]=te._cascadeData[je];b+=Ce,m++}n.sun[f]=j,f++}else if(P.isDirectionalLight){let j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let te=P.shadow,ne=t.get(P);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,n.directionalShadow[g]=ne,n.directionalShadowMap[g]=re,n.directionalShadowMatrix[g]=P.shadow.matrix,T++}n.directional[g]=j,g++}else if(P.isSpotLight){let j=e.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(q).multiplyScalar(K),j.distance=W,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,n.spot[_]=j;let te=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,te.updateMatrices(P),P.castShadow&&U++),n.spotLightMatrix[_]=te.matrix,P.castShadow){let ne=t.get(P);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,n.spotShadow[_]=ne,n.spotShadowMap[_]=re,x++}_++}else if(P.isRectAreaLight){let j=e.get(P);j.color.copy(q).multiplyScalar(K),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),n.rectArea[S]=j,S++}else if(P.isPointLight){let j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),j.distance=P.distance,j.decay=P.decay,P.castShadow){let te=P.shadow,ne=t.get(P);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,ne.shadowCameraNear=te.camera.near,ne.shadowCameraFar=te.camera.far,n.pointShadow[p]=ne,n.pointShadowMap[p]=re,n.pointShadowMatrix[p]=P.shadow.matrix,w++}n.point[p]=j,p++}else if(P.isHemisphereLight){let j=e.get(P);j.skyColor.copy(P.color).multiplyScalar(K),j.groundColor.copy(P.groundColor).multiplyScalar(K),n.hemi[v]=j,v++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.sunLength!==f||L.directionalLength!==g||L.pointLength!==p||L.spotLength!==_||L.rectAreaLength!==S||L.hemiLength!==v||L.numSunShadows!==m||L.numDirectionalShadows!==T||L.numPointShadows!==w||L.numSpotShadows!==x||L.numSpotMaps!==E||L.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=_,n.rectArea.length=S,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+E-U,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=R,L.sunLength=f,L.directionalLength=g,L.pointLength=p,L.spotLength=_,L.rectAreaLength=S,L.hemiLength=v,L.numSunShadows=m,L.numDirectionalShadows=T,L.numPointShadows=w,L.numSpotShadows=x,L.numSpotMaps=E,L.numLightProbes=R,n.version=ly++)}function c(l,h){let u=0,d=0,f=0,m=0,b=0,g=0,p=h.matrixWorldInverse;for(let _=0,S=l.length;_<S;_++){let v=l[_];if(v.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),d++}else if(v.isSpotLight){let T=n.spot[m];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let T=n.rectArea[b];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),b++}else if(v.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let T=n.hemi[g];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function ap(i){let e=new uy(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function c(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function dy(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new ap(i),e.set(s,[o])):r>=a.length?(o=new ap(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function xy(i,e,t){let n=new ss,s=new Le,r=new Le,a=new mt,o=new Xo,c=new jo,l={},h=t.maxTextureSize,u={[gi]:Zt,[Zt]:gi,[Ut]:Ut},d=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:fy,fragmentShader:py}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new wt;m.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ue(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zi;let p=this.type;this.render=function(w,x,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===tf&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zi);let U=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Gi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let V=p!==this.type;V&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(q=>q.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,q=w.length;P<q;P++){let K=w[P],W=K.shadow;if(W===void 0){Ie("WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let re=W.getFrameExtents();s.multiply(re),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,W.mapSize.y=r.y));let j=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=j,W.map===null||V===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Rr){if(K.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Yt(s.x,s.y,{format:cs,type:hn,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),W.map.texture.name=K.name+".shadowMap",W.map.depthTexture=new Li(s.x,s.y,Fn),W.map.depthTexture.name=K.name+".shadowMapDepth",W.map.depthTexture.format=Ii,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Bt,W.map.depthTexture.magFilter=Bt}else K.isPointLight?(W.map=new qa(s.x),W.map.depthTexture=new ba(s.x,ni)):(W.map=new Yt(s.x,s.y),W.map.depthTexture=new Li(s.x,s.y,ni)),W.map.depthTexture.name=K.name+".shadowMap",W.map.depthTexture.format=Ii,this.type===zi?(W.map.depthTexture.compareFunction=j?bh:xh,W.map.depthTexture.minFilter=Kt,W.map.depthTexture.magFilter=Kt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Bt,W.map.depthTexture.magFilter=Bt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let te=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();K.isPointLight!==!0&&W.updateMatrices(K,E);let ne=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:E.layers;for(let Ce=0;Ce<te;Ce++){let je=W.getCamera(Ce);if(K.isPointLight){let Z=W.camera,_e=W.matrix,Ee=K.distance||Z.far;Ee!==Z.far&&(Z.far=Ee,Z.updateProjectionMatrix()),Va.setFromMatrixPosition(K.matrixWorld),Z.position.copy(Va),Bh.copy(Z.position),Bh.add(my[Ce]),Z.up.copy(gy[Ce]),Z.lookAt(Bh),Z.updateMatrixWorld(),_e.makeTranslation(-Va.x,-Va.y,-Va.z),op.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),W._frustum.setFromProjectionMatrix(op,Z.coordinateSystem,Z.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,Ce),i.clear();else{Ce===0&&(i.setRenderTarget(W.map),i.clear());let Z=W.getViewport(Ce);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),O.viewport(a)}n=W.getFrustum(Ce),v(x,E,je,K,ne,this.type)}W.isPointLightShadow!==!0&&this.type===Rr&&_(W,E),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(U,R,L)};function _(w,x){let E=e.update(b);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Yt(s.x,s.y,{format:cs,type:hn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(x,null,E,d,b,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(x,null,E,f,b,null)}function S(w,x,E,U){let R=null,L=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)R=L;else if(R=E.isPointLight===!0?c:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let O=R.uuid,V=x.uuid,P=l[O];P===void 0&&(P={},l[O]=P);let q=P[V];q===void 0&&(q=R.clone(),P[V]=q,x.addEventListener("dispose",T)),R=q}if(R.visible=x.visible,R.wireframe=x.wireframe,U===Rr?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:u[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=i.properties.get(R);O.light=E}return R}function v(w,x,E,U,R,L){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===Rr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);let P=e.update(w),q=w.material;if(Array.isArray(q)){let K=P.groups;for(let W=0,re=K.length;W<re;W++){let j=K[W],te=q[j.materialIndex];if(te&&te.visible){let ne=S(w,te,U,L);w.onBeforeShadow(i,w,x,E,P,ne,j),i.renderBufferDirect(E,null,P,ne,w,j),w.onAfterShadow(i,w,x,E,P,ne,j)}}}else if(q.visible){let K=S(w,q,U,L);w.onBeforeShadow(i,w,x,E,P,K,null),i.renderBufferDirect(E,null,P,K,w,null),w.onAfterShadow(i,w,x,E,P,K,null)}}let V=w.children;for(let P=0,q=V.length;P<q;P++)v(V[P],x,E,U,R,L)}function T(w){w.target.removeEventListener("dispose",T);for(let E in l){let U=l[E],R=w.target.uuid;R in U&&(U[R].dispose(),delete U[R])}}}function by(i,e){function t(){let C=!1,$=new mt,X=null,ue=new mt(0,0,0,0);return{setMask:function(oe){X!==oe&&!C&&(i.colorMask(oe,oe,oe,oe),X=oe)},setLocked:function(oe){C=oe},setClear:function(oe,le,De,$e,ae){ae===!0&&(oe*=$e,le*=$e,De*=$e),$.set(oe,le,De,$e),ue.equals($)===!1&&(i.clearColor(oe,le,De,$e),ue.copy($))},reset:function(){C=!1,X=null,ue.set(-1,0,0,0)}}}function n(){let C=!1,$=!1,X=null,ue=null,oe=null;return{setReversed:function(le){if($!==le){let De=e.get("EXT_clip_control");le?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),$=le;let $e=oe;oe=null,this.setClear($e)}},getReversed:function(){return $},setTest:function(le){le?ye(i.DEPTH_TEST):Ye(i.DEPTH_TEST)},setMask:function(le){X!==le&&!C&&(i.depthMask(le),X=le)},setFunc:function(le){if($&&(le=Of[le]),ue!==le){switch(le){case Lo:i.depthFunc(i.NEVER);break;case No:i.depthFunc(i.ALWAYS);break;case Fo:i.depthFunc(i.LESS);break;case ur:i.depthFunc(i.LEQUAL);break;case Uo:i.depthFunc(i.EQUAL);break;case Oo:i.depthFunc(i.GEQUAL);break;case Bo:i.depthFunc(i.GREATER);break;case ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=le}},setLocked:function(le){C=le},setClear:function(le){oe!==le&&(oe=le,$&&(le=1-le),i.clearDepth(le))},reset:function(){C=!1,X=null,ue=null,oe=null,$=!1}}}function s(){let C=!1,$=null,X=null,ue=null,oe=null,le=null,De=null,$e=null,ae=null;return{setTest:function(Fe){C||(Fe?ye(i.STENCIL_TEST):Ye(i.STENCIL_TEST))},setMask:function(Fe){$!==Fe&&!C&&(i.stencilMask(Fe),$=Fe)},setFunc:function(Fe,Je,ge){(X!==Fe||ue!==Je||oe!==ge)&&(i.stencilFunc(Fe,Je,ge),X=Fe,ue=Je,oe=ge)},setOp:function(Fe,Je,ge){(le!==Fe||De!==Je||$e!==ge)&&(i.stencilOp(Fe,Je,ge),le=Fe,De=Je,$e=ge)},setLocked:function(Fe){C=Fe},setClear:function(Fe){ae!==Fe&&(i.clearStencil(Fe),ae=Fe)},reset:function(){C=!1,$=null,X=null,ue=null,oe=null,le=null,De=null,$e=null,ae=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],b=null,g=!1,p=null,_=null,S=null,v=null,T=null,w=null,x=null,E=new Me(0,0,0),U=0,R=!1,L=null,O=null,V=null,P=null,q=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,re=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(j)[1]),W=re>=1):j.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),W=re>=2);let te=null,ne={},Ce=i.getParameter(i.SCISSOR_BOX),je=i.getParameter(i.VIEWPORT),Z=new mt().fromArray(Ce),_e=new mt().fromArray(je);function Ee(C,$,X,ue){let oe=new Uint8Array(4),le=i.createTexture();i.bindTexture(C,le),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<X;De++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D($+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return le}let ke={};ke[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),ke[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ke[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ke[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ye(i.DEPTH_TEST),a.setFunc(ur),En(!1),It(sh),ye(i.CULL_FACE),cn(Gi);function ye(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function Ye(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function Gt(C,$){return d[C]!==$?(i.bindFramebuffer(C,$),d[C]=$,C===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=$),C===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Ge(C,$){let X=m,ue=!1;if(C){X=f.get($),X===void 0&&(X=[],f.set($,X));let oe=C.textures;if(X.length!==oe.length||X[0]!==i.COLOR_ATTACHMENT0){for(let le=0,De=oe.length;le<De;le++)X[le]=i.COLOR_ATTACHMENT0+le;X.length=oe.length,ue=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,ue=!0);ue&&i.drawBuffers(X)}function ft(C){return b!==C?(i.useProgram(C),b=C,!0):!1}let yt={[ks]:i.FUNC_ADD,[sf]:i.FUNC_SUBTRACT,[rf]:i.FUNC_REVERSE_SUBTRACT};yt[af]=i.MIN,yt[of]=i.MAX;let st={[cf]:i.ZERO,[lf]:i.ONE,[hf]:i.SRC_COLOR,[oh]:i.SRC_ALPHA,[gf]:i.SRC_ALPHA_SATURATE,[pf]:i.DST_COLOR,[df]:i.DST_ALPHA,[uf]:i.ONE_MINUS_SRC_COLOR,[ch]:i.ONE_MINUS_SRC_ALPHA,[mf]:i.ONE_MINUS_DST_COLOR,[ff]:i.ONE_MINUS_DST_ALPHA,[xf]:i.CONSTANT_COLOR,[bf]:i.ONE_MINUS_CONSTANT_COLOR,[_f]:i.CONSTANT_ALPHA,[yf]:i.ONE_MINUS_CONSTANT_ALPHA};function cn(C,$,X,ue,oe,le,De,$e,ae,Fe){if(C===Gi){g===!0&&(Ye(i.BLEND),g=!1);return}if(g===!1&&(ye(i.BLEND),g=!0),C!==nf){if(C!==p||Fe!==R){if((_!==ks||T!==ks)&&(i.blendEquation(i.FUNC_ADD),_=ks,T=ks),Fe)switch(C){case Cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ra:i.blendFunc(i.ONE,i.ONE);break;case rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ah:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:He("WebGLState: Invalid blending: ",C);break}else switch(C){case Cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ra:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case rh:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ah:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",C);break}S=null,v=null,w=null,x=null,E.set(0,0,0),U=0,p=C,R=Fe}return}oe=oe||$,le=le||X,De=De||ue,($!==_||oe!==T)&&(i.blendEquationSeparate(yt[$],yt[oe]),_=$,T=oe),(X!==S||ue!==v||le!==w||De!==x)&&(i.blendFuncSeparate(st[X],st[ue],st[le],st[De]),S=X,v=ue,w=le,x=De),($e.equals(E)===!1||ae!==U)&&(i.blendColor($e.r,$e.g,$e.b,ae),E.copy($e),U=ae),p=C,R=!1}function qt(C,$){C.side===Ut?Ye(i.CULL_FACE):ye(i.CULL_FACE);let X=C.side===Zt;$&&(X=!X),En(X),C.blending===Cr&&C.transparent===!1?cn(Gi):cn(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let ue=C.stencilWrite;o.setTest(ue),ue&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),nn(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):Ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function En(C){L!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),L=C)}function It(C){C!==Qd?(ye(i.CULL_FACE),C!==O&&(C===sh?i.cullFace(i.BACK):C===ef?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ye(i.CULL_FACE),O=C}function ci(C){C!==V&&(W&&i.lineWidth(C),V=C)}function nn(C,$,X){C?(ye(i.POLYGON_OFFSET_FILL),(P!==$||q!==X)&&(P=$,q=X,a.getReversed()&&($=-$,X=-X),i.polygonOffset($,X))):Ye(i.POLYGON_OFFSET_FILL)}function kn(C){C?ye(i.SCISSOR_TEST):Ye(i.SCISSOR_TEST)}function zn(C){C===void 0&&(C=i.TEXTURE0+K-1),te!==C&&(i.activeTexture(C),te=C)}function Gn(C,$,X){X===void 0&&(te===null?X=i.TEXTURE0+K-1:X=te);let ue=ne[X];ue===void 0&&(ue={type:void 0,texture:void 0},ne[X]=ue),(ue.type!==C||ue.texture!==$)&&(te!==X&&(i.activeTexture(X),te=X),i.bindTexture(C,$||ke[C]),ue.type=C,ue.texture=$)}function F(){let C=ne[te];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Hn(){try{i.compressedTexImage2D(...arguments)}catch(C){He("WebGLState:",C)}}function Rt(){try{i.compressedTexImage3D(...arguments)}catch(C){He("WebGLState:",C)}}function Ct(){try{i.texSubImage2D(...arguments)}catch(C){He("WebGLState:",C)}}function me(){try{i.texSubImage3D(...arguments)}catch(C){He("WebGLState:",C)}}function Xt(){try{i.compressedTexSubImage2D(...arguments)}catch(C){He("WebGLState:",C)}}function ze(){try{i.compressedTexSubImage3D(...arguments)}catch(C){He("WebGLState:",C)}}function Xe(){try{i.texStorage2D(...arguments)}catch(C){He("WebGLState:",C)}}function A(){try{i.texStorage3D(...arguments)}catch(C){He("WebGLState:",C)}}function y(){try{i.texImage2D(...arguments)}catch(C){He("WebGLState:",C)}}function k(){try{i.texImage3D(...arguments)}catch(C){He("WebGLState:",C)}}function ie(C){return u[C]!==void 0?u[C]:i.getParameter(C)}function ee(C,$){u[C]!==$&&(i.pixelStorei(C,$),u[C]=$)}function ce(C){Z.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Z.copy(C))}function fe(C){_e.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),_e.copy(C))}function Y(C,$){let X=l.get($);X===void 0&&(X=new WeakMap,l.set($,X));let ue=X.get(C);ue===void 0&&(ue=i.getUniformBlockIndex($,C.name),i.uniformBlockBinding($,ue,ue),X.set(C,ue))}function J(C,$,X){let oe=l.get($).get(C);c[oe]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,oe,X),c[oe]=X)}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},te=null,ne={},d={},c={},f=new WeakMap,m=[],b=null,g=!1,p=null,_=null,S=null,v=null,T=null,w=null,x=null,E=new Me(0,0,0),U=0,R=!1,L=null,O=null,V=null,P=null,q=null,Z.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ye,disable:Ye,bindFramebuffer:Gt,drawBuffers:Ge,useProgram:ft,setBlending:cn,setMaterial:qt,setFlipSided:En,setCullFace:It,setLineWidth:ci,setPolygonOffset:nn,setScissorTest:kn,activeTexture:zn,bindTexture:Gn,unbindTexture:F,compressedTexImage2D:Hn,compressedTexImage3D:Rt,texImage2D:y,texImage3D:k,pixelStorei:ee,getParameter:ie,updateUBOMapping:Y,uniformBlockBinding:J,texStorage2D:Xe,texStorage3D:A,texSubImage2D:Ct,texSubImage3D:me,compressedTexSubImage2D:Xt,compressedTexSubImage3D:ze,scissor:ce,viewport:fe,reset:he}}function _y(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Le,h=new WeakMap,u=new Set,d,f=new WeakMap,m=new Set,b=new FinalizationRegistry(A=>m.delete(A)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,y){return g?new OffscreenCanvas(A,y):pr("canvas")}function _(A,y,k){let ie=1,ee=Xe(A);if((ee.width>k||ee.height>k)&&(ie=k/Math.max(ee.width,ee.height)),ie<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ce=Math.floor(ie*ee.width),fe=Math.floor(ie*ee.height);d===void 0&&(d=p(ce,fe));let Y=y?p(ce,fe):d;return Y.width=ce,Y.height=fe,Y.getContext("2d").drawImage(A,0,0,ce,fe),Ie("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ce+"x"+fe+")."),Y}else return"data"in A&&Ie("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function S(A){return A.generateMipmaps}function v(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(A,y,k,ie,ee,ce=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe;ie&&(fe=e.get("EXT_texture_norm16"),fe||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=y;if(y===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8),k===i.UNSIGNED_SHORT&&fe&&(Y=fe.R16_EXT),k===i.SHORT&&fe&&(Y=fe.R16_SNORM_EXT)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),y===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8),k===i.UNSIGNED_SHORT&&fe&&(Y=fe.RG16_EXT),k===i.SHORT&&fe&&(Y=fe.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),y===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),y===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),y===i.RGB&&(k===i.UNSIGNED_SHORT&&fe&&(Y=fe.RGB16_EXT),k===i.SHORT&&fe&&(Y=fe.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),y===i.RGBA){let J=ce?ra:Ze.getTransfer(ee);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=J===ht?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&fe&&(Y=fe.RGBA16_EXT),k===i.SHORT&&fe&&(Y=fe.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(A,y){let k;return A?y===null||y===ni||y===Vs?k=i.DEPTH24_STENCIL8:y===Fn?k=i.DEPTH32F_STENCIL8:y===Dr&&(k=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ni||y===Vs?k=i.DEPTH_COMPONENT24:y===Fn?k=i.DEPTH_COMPONENT32F:y===Dr&&(k=i.DEPTH_COMPONENT16),k}function E(A,y){return S(A)===!0||A.isFramebufferTexture&&A.minFilter!==Bt&&A.minFilter!==Kt?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function U(A){let y=new WeakRef(A);n.get(A).__ref=y,m.add(y),b.register(A,y,y)}function R(A){let y=n.get(A).__ref;y!==void 0&&(m.delete(y),b.unregister(y))}function L(A){V(A.target)}function O(A){P(A.target)}function V(A){A.removeEventListener("dispose",L),R(A),K(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function P(A){A.removeEventListener("dispose",O),R(A),re(A)}function q(){for(let A of m){let y=A.deref();y!==void 0&&(y.isRenderTarget===!0?P(y):V(y))}m.clear(),u.clear()}function K(A){let y=n.get(A);if(y.__webglInit===void 0)return;let k=A.source,ie=f.get(k);if(ie){let ee=ie[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&W(A),Object.keys(ie).length===0&&f.delete(k)}n.remove(A)}function W(A){let y=n.get(A);i.deleteTexture(y.__webglTexture);let k=A.source,ie=f.get(k);delete ie[y.__cacheKey],a.memory.textures--}function re(A){let y=n.get(A);y.__depthDisposeCallback&&y.__depthDisposeCallback();let k=A.depthTexture;if(k&&k.renderTarget===A&&V(k),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(y.__webglFramebuffer[ee]))for(let ce=0;ce<y.__webglFramebuffer[ee].length;ce++)i.deleteFramebuffer(y.__webglFramebuffer[ee][ce]);else i.deleteFramebuffer(y.__webglFramebuffer[ee]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[ee])}else{if(Array.isArray(y.__webglFramebuffer))for(let ee=0;ee<y.__webglFramebuffer.length;ee++)i.deleteFramebuffer(y.__webglFramebuffer[ee]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ee=0;ee<y.__webglColorRenderbuffer.length;ee++)y.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[ee]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let ie=A.textures;for(let ee=0,ce=ie.length;ee<ce;ee++){let fe=n.get(ie[ee]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(ie[ee])}n.remove(A)}let j=0;function te(){j=0}function ne(){return j}function Ce(A){j=A}function je(){let A=j;return A>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),j+=1,A}function Z(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.mipmapsAutoUpdate),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function _e(A,y){let k=n.get(A);if(A.isVideoTexture&&Xt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let ie=A.image;if(ie===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{qt(k,A,y);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function Ee(A,y){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){qt(k,A,y);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function ke(A,y){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){qt(k,A,y);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function ye(A,y){let k=n.get(A);if(A.version>0&&k.__version!==A.version){En(k,A,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}let Ye={[Nn]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[dr]:i.MIRRORED_REPEAT},Gt={[Bt]:i.NEAREST,[oc]:i.NEAREST_MIPMAP_NEAREST,[Hs]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[Ir]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},Ge={[Cf]:i.NEVER,[_h]:i.ALWAYS,[Pf]:i.LESS,[xh]:i.LEQUAL,[If]:i.EQUAL,[bh]:i.GEQUAL,[Df]:i.GREATER,[Lf]:i.NOTEQUAL};function ft(A,y){if(y.type===Fn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Kt||y.magFilter===Ir||y.magFilter===Hs||y.magFilter===Xn||y.minFilter===Kt||y.minFilter===Ir||y.minFilter===Hs||y.minFilter===Xn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ye[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ye[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ye[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Gt[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Gt[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ge[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Bt||y.minFilter!==Hs&&y.minFilter!==Xn||y.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function yt(A,y){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",L),U(y));let ie=y.source,ee=f.get(ie);ee===void 0&&(ee={},f.set(ie,ee));let ce=Z(y);if(ce!==A.__cacheKey){ee[ce]===void 0&&(ee[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ee[ce].usedTimes++;let fe=ee[A.__cacheKey];fe!==void 0&&(ee[A.__cacheKey].usedTimes--,fe.usedTimes===0&&W(y)),A.__cacheKey=ce,A.__webglTexture=ee[ce].texture}return k}function st(A,y,k){return Math.floor(Math.floor(A/k)/y)}function cn(A,y,k,ie){let ce=A.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,k,ie,y.data);else{ce.sort((C,$)=>C.start-$.start);let fe=0;for(let C=1;C<ce.length;C++){let $=ce[fe],X=ce[C],ue=$.start+$.count,oe=st(X.start,y.width,4),le=st($.start,y.width,4);X.start<=ue+1&&oe===le&&st(X.start+X.count-1,y.width,4)===oe?$.count=Math.max($.count,X.start+X.count-$.start):(++fe,ce[fe]=X)}ce.length=fe+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let C=0,$=ce.length;C<$;C++){let X=ce[C],ue=Math.floor(X.start/4),oe=Math.ceil(X.count/4),le=ue%y.width,De=Math.floor(ue/y.width),$e=oe,ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,le),t.pixelStorei(i.UNPACK_SKIP_ROWS,De),t.texSubImage2D(i.TEXTURE_2D,0,le,De,$e,ae,k,ie,y.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function qt(A,y,k){let ie=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ie=i.TEXTURE_3D);let ee=yt(A,y),ce=y.source;t.bindTexture(ie,A.__webglTexture,i.TEXTURE0+k);let fe=n.get(ce);if(ce.version!==fe.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ae=Ze.getPrimaries(Ze.workingColorSpace),Fe=y.colorSpace===Un?null:Ze.getPrimaries(y.colorSpace),Je=y.colorSpace===Un||ae===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let J=_(y.image,!1,s.maxTextureSize);J=ze(y,J);let he=r.convert(y.format,y.colorSpace),C=r.convert(y.type),$=w(y.internalFormat,he,C,y.normalized,y.colorSpace,y.isVideoTexture);ft(ie,y);let X,ue=y.mipmaps,oe=y.isVideoTexture!==!0,le=fe.__version===void 0||ee===!0,De=ce.dataReady,$e=E(y,J);if(y.isDepthTexture)$=x(y.format===Hi,y.type),le&&(oe?t.texStorage2D(i.TEXTURE_2D,1,$,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,$,J.width,J.height,0,he,C,null));else if(y.isDataTexture)if(ue.length>0){oe&&le&&t.texStorage2D(i.TEXTURE_2D,$e,$,ue[0].width,ue[0].height);for(let ae=0,Fe=ue.length;ae<Fe;ae++)X=ue[ae],oe?De&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,X.width,X.height,he,C,X.data):t.texImage2D(i.TEXTURE_2D,ae,$,X.width,X.height,0,he,C,X.data);y.generateMipmaps=!1}else oe?(le&&t.texStorage2D(i.TEXTURE_2D,$e,$,J.width,J.height),De&&cn(y,J,he,C)):t.texImage2D(i.TEXTURE_2D,0,$,J.width,J.height,0,he,C,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){oe&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$e,$,ue[0].width,ue[0].height,J.depth);for(let ae=0,Fe=ue.length;ae<Fe;ae++)if(X=ue[ae],y.format!==jn)if(he!==null)if(oe){if(De)if(y.layerUpdates.size>0){let Je=Ph(X.width,X.height,y.format,y.type);for(let ge of y.layerUpdates){let pt=X.data.subarray(ge*Je/X.data.BYTES_PER_ELEMENT,(ge+1)*Je/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,ge,X.width,X.height,1,he,pt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,X.width,X.height,J.depth,he,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,$,X.width,X.height,J.depth,0,X.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?De&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,X.width,X.height,J.depth,he,C,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,$,X.width,X.height,J.depth,0,he,C,X.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{oe&&le&&t.texStorage2D(i.TEXTURE_2D,$e,$,ue[0].width,ue[0].height);for(let ae=0,Fe=ue.length;ae<Fe;ae++)X=ue[ae],y.format!==jn?he!==null?oe?De&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,X.width,X.height,he,X.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,$,X.width,X.height,0,X.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?De&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,X.width,X.height,he,C,X.data):t.texImage2D(i.TEXTURE_2D,ae,$,X.width,X.height,0,he,C,X.data)}else if(y.isDataArrayTexture)if(oe){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$e,$,J.width,J.height,J.depth),De)if(y.layerUpdates.size>0){let ae=Ph(J.width,J.height,y.format,y.type);for(let Fe of y.layerUpdates){let Je=J.data.subarray(Fe*ae/J.data.BYTES_PER_ELEMENT,(Fe+1)*ae/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Fe,J.width,J.height,1,he,C,Je)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,he,C,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,$,J.width,J.height,J.depth,0,he,C,J.data);else if(y.isData3DTexture)oe?(le&&t.texStorage3D(i.TEXTURE_3D,$e,$,J.width,J.height,J.depth),De&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,he,C,J.data)):t.texImage3D(i.TEXTURE_3D,0,$,J.width,J.height,J.depth,0,he,C,J.data);else if(y.isFramebufferTexture){if(le)if(oe)t.texStorage2D(i.TEXTURE_2D,$e,$,J.width,J.height);else{let ae=J.width,Fe=J.height;for(let Je=0;Je<$e;Je++)t.texImage2D(i.TEXTURE_2D,Je,$,ae,Fe,0,he,C,null),ae>>=1,Fe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),J.parentNode!==ae){ae.appendChild(J),u.add(y),ae.onpaint=Fe=>{let Je=Fe.changedElements;for(let ge of u)Je.includes(ge.image)&&(ge.needsUpdate=!0)},ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let Je=i.RGBA,ge=i.RGBA,pt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Je,ge,pt,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ue.length>0){if(oe&&le){let ae=Xe(ue[0]);t.texStorage2D(i.TEXTURE_2D,$e,$,ae.width,ae.height)}for(let ae=0,Fe=ue.length;ae<Fe;ae++)X=ue[ae],oe?De&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,he,C,X):t.texImage2D(i.TEXTURE_2D,ae,$,he,C,X);y.generateMipmaps=!1}else if(oe){if(le){let ae=Xe(J);t.texStorage2D(i.TEXTURE_2D,$e,$,ae.width,ae.height)}De&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,C,J)}else t.texImage2D(i.TEXTURE_2D,0,$,he,C,J);S(y)&&y.mipmapsAutoUpdate===!0&&v(ie),fe.__version=ce.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function En(A,y,k){if(y.image.length!==6)return;let ie=yt(A,y),ee=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);let ce=n.get(ee);if(ee.version!==ce.__version||ie===!0){t.activeTexture(i.TEXTURE0+k);let fe=Ze.getPrimaries(Ze.workingColorSpace),Y=y.colorSpace===Un?null:Ze.getPrimaries(y.colorSpace),J=y.colorSpace===Un||fe===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let he=y.isCompressedTexture||y.image[0].isCompressedTexture,C=y.image[0]&&y.image[0].isDataTexture,$=[];for(let ge=0;ge<6;ge++)!he&&!C?$[ge]=_(y.image[ge],!0,s.maxCubemapSize):$[ge]=C?y.image[ge].image:y.image[ge],$[ge]=ze(y,$[ge]);let X=$[0],ue=r.convert(y.format,y.colorSpace),oe=r.convert(y.type),le=w(y.internalFormat,ue,oe,y.normalized,y.colorSpace),De=y.isVideoTexture!==!0,$e=ce.__version===void 0||ie===!0,ae=ee.dataReady,Fe=E(y,X);ft(i.TEXTURE_CUBE_MAP,y);let Je;if(y.isDepthTexture){if(le=x(y.format===Hi,y.type),$e)if(De)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,le,X.width,X.height);else for(let ge=0;ge<6;ge++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,X.width,X.height,0,ue,oe,null)}else if(he){De&&$e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,le,X.width,X.height);for(let ge=0;ge<6;ge++){Je=$[ge].mipmaps;for(let pt=0;pt<Je.length;pt++){let sn=Je[pt];y.format!==jn?ue!==null?De?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,pt,0,0,sn.width,sn.height,ue,sn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,pt,le,sn.width,sn.height,0,sn.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,pt,0,0,sn.width,sn.height,ue,oe,sn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,pt,le,sn.width,sn.height,0,ue,oe,sn.data)}}}else{if(Je=y.mipmaps,De&&$e){Je.length>0&&Fe++;let ge=Xe($[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,le,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(C){De?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,$[ge].width,$[ge].height,ue,oe,$[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,$[ge].width,$[ge].height,0,ue,oe,$[ge].data);for(let pt=0;pt<Je.length;pt++){let Yi=Je[pt].image[ge].image;De?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,pt+1,0,0,Yi.width,Yi.height,ue,oe,Yi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,pt+1,le,Yi.width,Yi.height,0,ue,oe,Yi.data)}}else{De?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ue,oe,$[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,ue,oe,$[ge]);for(let pt=0;pt<Je.length;pt++){let sn=Je[pt];De?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,pt+1,0,0,ue,oe,sn.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,pt+1,le,ue,oe,sn.image[ge])}}}S(y)&&y.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),ce.__version=ee.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function It(A,y,k,ie,ee,ce){let fe=r.convert(k.format,k.colorSpace),Y=r.convert(k.type),J=w(k.internalFormat,fe,Y,k.normalized,k.colorSpace),he=n.get(y),C=n.get(k);if(C.__renderTarget=y,!he.__hasExternalTextures){let $=Math.max(1,y.width>>ce),X=Math.max(1,y.height>>ce);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,ce,J,$,X,y.depth,0,fe,Y,null):t.texImage2D(ee,ce,J,$,X,0,fe,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),me(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ee,C.__webglTexture,0,Ct(y)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ee,C.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ci(A,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){let ie=y.depthTexture,ee=ie&&ie.isDepthTexture?ie.type:null,ce=x(y.stencilBuffer,ee),fe=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct(y),ce,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct(y),ce,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ce,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,A)}else{let ie=y.textures;for(let ee=0;ee<ie.length;ee++){let ce=ie[ee],fe=r.convert(ce.format,ce.colorSpace),Y=r.convert(ce.type),J=w(ce.internalFormat,fe,Y,ce.normalized,ce.colorSpace);me(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct(y),J,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct(y),J,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,J,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function nn(A,y,k){let ie=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(y.depthTexture);ee.__renderTarget=y;let ce=ie?y.depthTexture.image[0]:y.depthTexture.image;(!ee.__webglTexture||ce.width!==y.width||ce.height!==y.height)&&(ce.width=y.width,ce.height=y.height,y.depthTexture.needsUpdate=!0),ie?ye(y.depthTexture,0):_e(y.depthTexture,0);let fe=ee.__webglTexture,Y=Ct(y),J=ie?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,he=y.depthTexture.format===Hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ii)me(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,J,fe,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,he,J,fe,0);else if(y.depthTexture.format===Hi)me(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,J,fe,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,he,J,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function kn(A){let y=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let ie=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ie){let ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ie.removeEventListener("dispose",ee)};ie.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=ie}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let ie=0;ie<6;ie++)nn(y.__webglFramebuffer[ie],A,ie);else A.texture.mipmaps.length>0?nn(y.__webglFramebuffer[0],A,0):nn(y.__webglFramebuffer,A,0);else if(k){y.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[ie]),y.__webglDepthbuffer[ie]===void 0)y.__webglDepthbuffer[ie]=i.createRenderbuffer(),ci(y.__webglDepthbuffer[ie],A,!1);else{let ee=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ce)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ci(y.__webglDepthbuffer,A,!1);else{let ee=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ce)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function zn(A,y,k){let ie=n.get(A);y!==void 0&&It(ie.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&kn(A)}function Gn(A){let y=A.texture,k=n.get(A),ie=n.get(y);A.addEventListener("dispose",O),U(A);let ee=A.textures,ce=A.isWebGLCubeRenderTarget===!0,fe=ee.length>1;if(fe||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=y.version,a.memory.textures++),ce){k.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(y.mipmaps.length>0){k.__webglFramebuffer[Y]=[];for(let J=0;J<y.mipmaps.length;J++)k.__webglFramebuffer[Y][J]=i.createFramebuffer()}else k.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(y.mipmaps.length>0){k.__webglFramebuffer=[];for(let Y=0;Y<y.mipmaps.length;Y++)k.__webglFramebuffer[Y]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(fe)for(let Y=0,J=ee.length;Y<J;Y++){let he=n.get(ee[Y]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&me(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Y=0;Y<ee.length;Y++){let J=ee[Y];k.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[Y]);let he=r.convert(J.format,J.colorSpace),C=r.convert(J.type),$=w(J.internalFormat,he,C,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),X=Ct(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,$,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,k.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ci(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),ft(i.TEXTURE_CUBE_MAP,y);for(let Y=0;Y<6;Y++)if(y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)It(k.__webglFramebuffer[Y][J],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else It(k.__webglFramebuffer[Y],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);S(y)?v(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(fe){for(let Y=0,J=ee.length;Y<J;Y++){let he=ee[Y],C=n.get(he),$=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,C.__webglTexture),ft($,he),It(k.__webglFramebuffer,A,he,i.COLOR_ATTACHMENT0+Y,$,0),S(he)&&v($)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,ie.__webglTexture),ft(Y,y),y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)It(k.__webglFramebuffer[J],A,y,i.COLOR_ATTACHMENT0,Y,J);else It(k.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,Y,0);S(y)?v(Y):y.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&kn(A)}function F(A){let y=A.textures;for(let k=0,ie=y.length;k<ie;k++){let ee=y[k];if(S(ee)&&ee.mipmapsAutoUpdate===!0){let ce=T(A),fe=n.get(ee).__webglTexture;t.bindTexture(ce,fe),v(ce),t.unbindTexture()}}}let Hn=[];function Rt(A){if(A.samples>0){if(me(A)===!1){let y=A.textures,k=A.width,ie=A.height,ee=i.COLOR_BUFFER_BIT,ce=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(A),Y=y.length>1;if(Y)for(let he=0;he<y.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let he=0;he<y.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);let C=n.get(y[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,k,ie,0,0,k,ie,ee,i.NEAREST),c===!0&&(Hn.length=0,Hn.push(i.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Hn.push(ce),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Hn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let he=0;he<y.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);let C=n.get(y[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,C,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ct(A){return Math.min(s.maxSamples,A.samples)}function me(A){let y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Xt(A){let y=a.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function ze(A,y){let k=A.colorSpace,ie=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==yn&&k!==Un&&(Ze.getTransfer(k)===ht?(ie!==jn||ee!==Rn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",k)),y}function Xe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=je,this.resetTextureUnits=te,this.getTextureUnits=ne,this.setTextureUnits=Ce,this.setTexture2D=_e,this.setTexture2DArray=Ee,this.setTexture3D=ke,this.setTextureCube=ye,this.rebindTextures=zn,this.setupRenderTarget=Gn,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=kn,this.setupFrameBufferTexture=It,this.useMultisampledRTT=me,this.dispose=q}function yy(i,e){function t(n,s=Un){let r,a=Ze.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===lc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hh)return i.BYTE;if(n===uh)return i.SHORT;if(n===Dr)return i.UNSIGNED_SHORT;if(n===cc)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===ph)return i.ALPHA;if(n===mh)return i.RGB;if(n===jn)return i.RGBA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===uc)return i.RED;if(n===dc)return i.RED_INTEGER;if(n===cs)return i.RG;if(n===fc)return i.RG_INTEGER;if(n===pc)return i.RGBA_INTEGER;if(n===Fa||n===Ua||n===Oa||n===Ba)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mc||n===gc||n===xc||n===bc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_c||n===yc||n===vc||n===Mc||n===Sc||n===ka||n===Ec)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_c||n===yc)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Mc)return r.COMPRESSED_R11_EAC;if(n===Sc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ka)return r.COMPRESSED_RG11_EAC;if(n===Ec)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Tc||n===wc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Dc||n===Lc||n===Nc||n===Fc||n===Uc||n===Oc||n===Bc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ac)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ic)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kc||n===zc||n===Gc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===kc)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hc||n===Vc||n===za||n===Wc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Hc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function Ey(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ah(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,_,S,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),b(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,_,S):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Zt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Zt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=e.get(p),S=_.envMap,v=_.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(Sy.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(bp),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,_,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=S*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,_){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let _=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ty(i,e,t,n){let s={},r={};function a(_,S){let v=S.program;n.uniformBlockBinding(_,v,s[_.id])}function o(_,S){let v=s[_.id];v===void 0&&(m(_),v=c(_),s[_.id]=v,_.addEventListener("dispose",g));let T=S.program;n.updateUBOMapping(_,T);let w=e.render.frame;r[_.id]!==w&&(l(_),r[_.id]=w)}function c(_){let S=i.createBuffer(),v=_.__size,T=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,v,T),i.bindBuffer(i.UNIFORM_BUFFER,null),S}function l(_){let S=s[_.id],v=_.uniforms,T=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let w=0,x=v.length;w<x;w++){let E=v[w];if(Array.isArray(E))for(let U=0,R=E.length;U<R;U++)h(E[U],w,U,T);else h(E,w,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,S,v,T){if(d(_,S,v,T)===!0){let w=_.__offset,x=_.value;if(Array.isArray(x)){let E=0;for(let U=0;U<x.length;U++){let R=x[U],L=b(R,!0);u(R,_.__data,E),E+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,_.__data)}}function u(_,S,v){typeof _=="number"||typeof _=="boolean"?S[v]=_:_.isMatrix3?(S[v]=_.elements[0],S[v+1]=_.elements[1],S[v+2]=_.elements[2],S[v+3]=0,S[v+4]=_.elements[3],S[v+5]=_.elements[4],S[v+6]=_.elements[5],S[v+7]=0,S[v+8]=_.elements[6],S[v+9]=_.elements[7],S[v+10]=_.elements[8],S[v+11]=0):ArrayBuffer.isView(_)?S.set(_.subarray(0,S.length-v),v):_.toArray(S,v)}function d(_,S,v,T){let w=_.value,x=S+"_"+v;if(Array.isArray(w)){T[x]===void 0&&(T[x]=[]);let E=T[x],U=!1;for(let R=0;R<w.length;R++)f(w[R],E,R)===!0&&(U=!0);return U}return f(w,T,x)}function f(_,S,v){if(S[v]===void 0)return typeof _=="number"||typeof _=="boolean"?S[v]=_:ArrayBuffer.isView(_)?S[v]=_.slice():S[v]=_.clone(),!0;{let T=S[v];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return S[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function m(_){let S=_.uniforms,v=0,T=16;for(let x=0,E=S.length;x<E;x++){let U=Array.isArray(S[x])?S[x]:[S[x]];for(let R=0,L=U.length;R<L;R++){let O=U[R],V=Array.isArray(O.value)?O.value:[O.value],P=Array.isArray(S[x])||Array.isArray(O.value),q=v;for(let W=0,re=V.length;W<re;W++){let j=V[W],te=b(j,P),ne=v%T,Ce=ne%te.boundary,je=ne+Ce;v+=Ce,je!==0&&T-je<te.storage&&(v+=T-je),W===0&&(q=v),v+=te.storage}let K=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new K((v-q)/Float32Array.BYTES_PER_ELEMENT),O.__offset=q}}let w=v%T;return w>0&&(v+=T-w),_.__size=v,_.__cache={},this}function b(_,S){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",_),S===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function g(_){let S=_.target;S.removeEventListener("dispose",g),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:o,dispose:p}}function Ay(){return _i===null&&(_i=new vr(wy,16,16,cs,hn),_i.name="DFG_LUT",_i.minFilter=Kt,_i.magFilter=Kt,_i.wrapS=Wn,_i.wrapT=Wn,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}var Wg,qg,Xg,jg,Kg,Yg,Jg,Zg,$g,Qg,e0,t0,n0,i0,s0,r0,a0,o0,c0,l0,h0,u0,d0,f0,p0,m0,g0,x0,b0,_0,y0,v0,M0,S0,E0,T0,w0,A0,R0,C0,P0,I0,D0,L0,N0,F0,U0,O0,B0,k0,z0,G0,H0,V0,W0,q0,X0,j0,K0,Y0,J0,Z0,$0,Q0,ex,tx,nx,ix,sx,rx,ax,ox,cx,lx,hx,ux,dx,fx,px,mx,gx,xx,bx,_x,yx,vx,Mx,Sx,Ex,Tx,wx,Ax,Rx,Cx,Px,Ix,Dx,Lx,Nx,Fx,Ux,Ox,Bx,kx,zx,Gx,Hx,Vx,Wx,qx,Xx,jx,Kx,Yx,Jx,Zx,$x,Qx,eb,tb,nb,ib,sb,rb,ab,ob,cb,lb,hb,ub,db,fb,pb,mb,gb,xb,bb,_b,yb,vb,Mb,et,xe,yi,Yc,Sb,lp,qa,Gf,Cb,Pb,hp,up,Ib,Db,Lb,Zc,Wb,dp,fp,pp,mp,gp,xp,qf,Xf,jf,Kf,Yf,kh,zh,Gh,Oh,Nr,L_,N_,$f,B_,Jc,W_,X_,K_,J_,$_,ty,Vh,Wh,ly,fy,py,my,gy,op,Va,Bh,vy,My,qh,Xh,Sy,bp,wy,_i,$c,On=an(()=>{Uh();Uh();Wg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$g=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,i0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,s0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,h0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,u0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,d0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,f0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,p0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_0="gl_FragColor = linearToOutputTexel( gl_FragColor );",y0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,w0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,I0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,F0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,U0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,G0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,V0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,X0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Q0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ix=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ax=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,px=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ex=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Px=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ux=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ox=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$x=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ib=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ab=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ob=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ub=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,db=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_b=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:Wg,alphahash_pars_fragment:qg,alphamap_fragment:Xg,alphamap_pars_fragment:jg,alphatest_fragment:Kg,alphatest_pars_fragment:Yg,aomap_fragment:Jg,aomap_pars_fragment:Zg,batching_pars_vertex:$g,batching_vertex:Qg,begin_vertex:e0,beginnormal_vertex:t0,bsdfs:n0,iridescence_fragment:i0,bumpmap_pars_fragment:s0,clipping_planes_fragment:r0,clipping_planes_pars_fragment:a0,clipping_planes_pars_vertex:o0,clipping_planes_vertex:c0,color_fragment:l0,color_pars_fragment:h0,color_pars_vertex:u0,color_vertex:d0,common:f0,defaultnormal_vertex:p0,displacementmap_pars_vertex:m0,displacementmap_vertex:g0,emissivemap_fragment:x0,emissivemap_pars_fragment:b0,colorspace_fragment:_0,colorspace_pars_fragment:y0,envmap_fragment:v0,envmap_common_pars_fragment:M0,envmap_pars_fragment:S0,envmap_pars_vertex:E0,envmap_physical_pars_fragment:F0,envmap_vertex:T0,fog_vertex:w0,fog_pars_vertex:A0,fog_fragment:R0,fog_pars_fragment:C0,gradientmap_pars_fragment:P0,lightmap_pars_fragment:I0,lights_lambert_fragment:D0,lights_lambert_pars_fragment:L0,lights_pars_begin:N0,lights_toon_fragment:U0,lights_toon_pars_fragment:O0,lights_phong_fragment:B0,lights_phong_pars_fragment:k0,lights_physical_fragment:z0,lights_physical_pars_fragment:G0,lights_fragment_begin:H0,lights_fragment_maps:V0,lights_fragment_end:W0,lightprobes_pars_fragment:q0,logdepthbuf_fragment:X0,logdepthbuf_pars_fragment:j0,logdepthbuf_pars_vertex:K0,logdepthbuf_vertex:Y0,map_fragment:J0,map_pars_fragment:Z0,map_particle_fragment:$0,map_particle_pars_fragment:Q0,metalnessmap_fragment:ex,metalnessmap_pars_fragment:tx,morphinstance_vertex:nx,morphcolor_vertex:ix,morphnormal_vertex:sx,morphtarget_pars_vertex:rx,morphtarget_vertex:ax,normal_fragment_begin:ox,normal_fragment_maps:cx,normal_pars_fragment:lx,normal_pars_vertex:hx,normal_vertex:ux,normalmap_pars_fragment:dx,clearcoat_normal_fragment_begin:fx,clearcoat_normal_fragment_maps:px,clearcoat_pars_fragment:mx,iridescence_pars_fragment:gx,opaque_fragment:xx,packing:bx,premultiplied_alpha_fragment:_x,project_vertex:yx,dithering_fragment:vx,dithering_pars_fragment:Mx,roughnessmap_fragment:Sx,roughnessmap_pars_fragment:Ex,shadowmap_pars_fragment:Tx,shadowmap_pars_vertex:wx,shadowmap_vertex:Ax,shadowmask_pars_fragment:Rx,skinbase_vertex:Cx,skinning_pars_vertex:Px,skinning_vertex:Ix,skinnormal_vertex:Dx,specularmap_fragment:Lx,specularmap_pars_fragment:Nx,tonemapping_fragment:Fx,tonemapping_pars_fragment:Ux,transmission_fragment:Ox,transmission_pars_fragment:Bx,uv_pars_fragment:kx,uv_pars_vertex:zx,uv_vertex:Gx,worldpos_vertex:Hx,background_vert:Vx,background_frag:Wx,backgroundCube_vert:qx,backgroundCube_frag:Xx,cube_vert:jx,cube_frag:Kx,depth_vert:Yx,depth_frag:Jx,distance_vert:Zx,distance_frag:$x,equirect_vert:Qx,equirect_frag:eb,linedashed_vert:tb,linedashed_frag:nb,meshbasic_vert:ib,meshbasic_frag:sb,meshlambert_vert:rb,meshlambert_frag:ab,meshmatcap_vert:ob,meshmatcap_frag:cb,meshnormal_vert:lb,meshnormal_frag:hb,meshphong_vert:ub,meshphong_frag:db,meshphysical_vert:fb,meshphysical_frag:pb,meshtoon_vert:mb,meshtoon_frag:gb,points_vert:xb,points_frag:bb,shadow_vert:_b,shadow_frag:yb,sprite_vert:vb,sprite_frag:Mb},xe={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},yi={basic:{uniforms:xn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:xn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:xn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:xn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:xn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Me(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:xn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:xn([xe.points,xe.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:xn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:xn([xe.common,xe.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:xn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:xn([xe.sprite,xe.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:xn([xe.common,xe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:xn([xe.lights,xe.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};yi.physical={uniforms:xn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};Yc={r:0,b:0,g:0},Sb=new Ve,lp=new qe;lp.set(-1,0,0,0,1,0,0,0,1);qa=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new xa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ae(5,5,5),r=new Lt({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Gi});r.uniforms.tEquirect.value=t;let a=new Ue(s,r),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=Kt),new Ar(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Gf=256,Cb=3,Pb=20,hp=256,up=16,Ib=3,Db=new N,Lb=new Me,Zc=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ar(1,10,null),this._boxMesh=new Ue(new Ae(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Db}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,m=c.autoClearStencil,b=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,b===null&&(e.background=c.getClearColor(Lb));let g=new Ar(n,s,h);return g.position.copy(o),g.update(c,e),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=m,e.background=b,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Gf,Eh(e))}_fromTexture(e,t){e.mapping===Gs||e.mapping===Pr?this._setSize(e.image.length===0?Gf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Hf(e,!1,!1),n=Math.log2(e)-Cb;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Hf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Gs||e.mapping===Pr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Vf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Nb(),this._integrationMaterial=Fb());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/up);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Ib)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(hp*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Ub());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};Wb={[Ca]:"LINEAR_TONE_MAPPING",[Pa]:"REINHARD_TONE_MAPPING",[Ia]:"CINEON_TONE_MAPPING",[zs]:"ACES_FILMIC_TONE_MAPPING",[La]:"AGX_TONE_MAPPING",[Na]:"NEUTRAL_TONE_MAPPING",[Da]:"CUSTOM_TONE_MAPPING"};dp=new Ft,fp=new Li(1,1),pp=new ba(1),mp=new oa,gp=new Ho,xp=new xa,qf=[],Xf=[],jf=new Float32Array(16),Kf=new Float32Array(9),Yf=new Float32Array(4);kh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=u_(t.type)}},zh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=I_(t.type)}},Gh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Oh=/(\w+)(\])?(\[|\.)?/g;Nr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);D_(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};L_=37297,N_=0;$f=new qe;B_={[Ca]:"Linear",[Pa]:"Reinhard",[Ia]:"Cineon",[zs]:"ACESFilmic",[La]:"AgX",[Na]:"Neutral",[Da]:"Custom"};Jc=new N;W_=/^[ \t]*#include +<([\w\d./]+)>/gm;X_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;K_={[zi]:"SHADOWMAP_TYPE_PCF",[Rr]:"SHADOWMAP_TYPE_VSM"};J_={[Pr]:"ENVMAP_MODE_REFRACTION"};$_={[sc]:"ENVMAP_BLENDING_MULTIPLY",[vf]:"ENVMAP_BLENDING_MIX",[Mf]:"ENVMAP_BLENDING_ADD"};ty=0,Vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wh(e),t.set(e,n)),n}},Wh=class{constructor(e){this.id=ty++,this.code=e,this.usedTimes=0}};ly=0;fy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,py=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,my=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],gy=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],op=new Ve,Va=new N,Bh=new N;vy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,My=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new _a(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Lt({vertexShader:vy,fragmentShader:My,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xh=class extends ei{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,b=typeof XRWebGLBinding<"u",g=new qh,p={},_=t.getContextAttributes(),S=null,v=null,T=[],w=[],x=new Le,E=null,U=null,R=new jt;R.viewport=new mt;let L=new jt;L.viewport=new mt;let O=[R,L],V=new ec,P=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let _e=T[Z];return _e===void 0&&(_e=new xr,T[Z]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(Z){let _e=T[Z];return _e===void 0&&(_e=new xr,T[Z]=_e),_e.getGripSpace()},this.getHand=function(Z){let _e=T[Z];return _e===void 0&&(_e=new xr,T[Z]=_e),_e.getHandSpace()};function K(Z){let _e=w.indexOf(Z.inputSource);if(_e===-1)return;let Ee=T[_e];Ee!==void 0&&(Ee.update(Z.inputSource,Z.frame,l||a),Ee.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",re);for(let Z=0;Z<T.length;Z++){let _e=w[Z];_e!==null&&(w[Z]=null,T[Z].disconnect(_e))}P=null,q=null,g.reset();for(let Z in p)delete p[Z];if(e.setRenderTarget(S),f=null,d=null,u=null,s=null,v=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(x.width,x.height,!1),U!==null){let Z=U.camera;Z.fov=U.fov,Z.zoom=U.zoom,Z.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",W),s.addEventListener("inputsourceschange",re),_.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(x),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,ke=null,ye=null;_.depth&&(ye=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=_.stencil?Hi:Ii,ke=_.stencil?Vs:ni);let Ye={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ye),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Yt(d.textureWidth,d.textureHeight,{format:jn,type:Rn,depthTexture:new Li(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ee={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Yt(f.framebufferWidth,f.framebufferHeight,{format:jn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function re(Z){for(let _e=0;_e<Z.removed.length;_e++){let Ee=Z.removed[_e],ke=w.indexOf(Ee);ke>=0&&(w[ke]=null,T[ke].disconnect(Ee))}for(let _e=0;_e<Z.added.length;_e++){let Ee=Z.added[_e],ke=w.indexOf(Ee);if(ke===-1){for(let Ye=0;Ye<T.length;Ye++)if(Ye>=w.length){w.push(Ee),ke=Ye;break}else if(w[Ye]===null){w[Ye]=Ee,ke=Ye;break}if(ke===-1)break}let ye=T[ke];ye&&ye.connect(Ee)}}function j(Z,_e){_e===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(_e.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let _e=Z.near,Ee=Z.far;g.texture!==null&&(g.depthNear>0&&(_e=g.depthNear),g.depthFar>0&&(Ee=g.depthFar)),V.near=L.near=R.near=_e,V.far=L.far=R.far=Ee,(P!==V.near||q!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),P=V.near,q=V.far),V.layers.mask=Z.layers.mask|6,R.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;let ke=Z.parent,ye=V.cameras;j(V,ke);for(let Ye=0;Ye<ye.length;Ye++)j(ye[Ye],ke);V.projectionMatrix.copy(R.projectionMatrix),V.projectionMatrixInverse.copy(R.projectionMatrixInverse),U===null&&Z.isPerspectiveCamera&&(U={camera:Z,fov:Z.fov,zoom:Z.zoom}),te(Z,V,ke)};function te(Z,_e,Ee){Ee===null?Z.matrix.copy(_e.matrixWorld):(Z.matrix.copy(Ee.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(_e.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(_e.projectionMatrix),Z.projectionMatrixInverse.copy(_e.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Cs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(Z){return p[Z]};let ne=null;function Ce(Z,_e){if(h=_e.getViewerPose(l||a),m=_e,h!==null){let Ee=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ke=!1;Ee.length!==V.cameras.length&&(V.cameras.length=0,ke=!0);for(let Ge=0;Ge<Ee.length;Ge++){let ft=Ee[Ge],yt=null;if(f!==null)yt=f.getViewport(ft);else{let cn=u.getViewSubImage(d,ft);yt=cn.viewport,Ge===0&&(e.setRenderTargetTextures(v,cn.colorTexture,cn.depthStencilTexture),e.setRenderTarget(v))}let st=O[Ge];st===void 0&&(st=new jt,st.layers.enable(Ge),st.viewport=new mt,O[Ge]=st),st.matrix.fromArray(ft.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(ft.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(yt.x,yt.y,yt.width,yt.height),Ge===0&&(V.matrix.copy(st.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),ke===!0&&V.cameras.push(st)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let Ge=u.getDepthInformation(Ee[0]);Ge&&Ge.isValid&&Ge.texture&&g.init(Ge,s.renderState)}if(ye&&ye.includes("camera-access")&&b){e.state.unbindTexture(),u=n.getBinding();for(let Ge=0;Ge<Ee.length;Ge++){let ft=Ee[Ge].camera;if(ft){let yt=p[ft];yt||(yt=new _a,p[ft]=yt);let st=u.getCameraImage(ft);yt.sourceTexture=st}}}}for(let Ee=0;Ee<T.length;Ee++){let ke=w[Ee],ye=T[Ee];ke!==null&&ye!==void 0&&ye.update(ke,_e,l||a)}ne&&ne(Z,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),m=null}let je=new cp;je.setAnimationLoop(Ce),this.setAnimationLoop=function(Z){ne=Z},this.dispose=function(){}}},Sy=new Ve,bp=new qe;bp.set(-1,0,0,0,1,0,0,0,1);wy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_i=null;$c=class{constructor(e={}){let{canvas:t=Nf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Rn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let b=f,g=new Set([pc,fc,dc]),p=new Set([Rn,ni,Dr,Vs,lc,hc]),_=new Uint32Array(4),S=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},T=null,w=null,x=[],E=[],U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,O=null,V=null,P=null,q=null;this._outputColorSpace=Tt;let K=0,W=0,re=null,j=-1,te=null,ne=new mt,Ce=new mt,je=null,Z=new Me(0),_e=0,Ee=t.width,ke=t.height,ye=1,Ye=null,Gt=null,Ge=new mt(0,0,Ee,ke),ft=new mt(0,0,Ee,ke),yt=!1,st=new ss,cn=new Vo,qt=!1,En=!1,It=new Ve,ci=new N,nn=new mt,kn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},zn=!1;function Gn(){return re===null?ye:1}let F=n;function Hn(M,I){return t.getContext(M,I)}let Rt,Ct,me,Xt,ze,Xe,A,y,k,ie,ee,ce,fe,Y,J,he,C,$,X,ue,oe,le,De;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",ge,!1),F===null){let I="webgl2";if(F=Hn(I,M),F===null)throw Hn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(M){throw t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),He("WebGLRenderer: "+M.message),M}function $e(){Rt=new Bb(F),Rt.init(),oe=new yy(F,Rt),Ct=new Ab(F,Rt,e,oe),me=new by(F,Rt),Ct.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),V=F.createFramebuffer(),P=F.createFramebuffer(),q=F.createFramebuffer(),Xt=new Gb(F),ze=new sy,Xe=new _y(F,Rt,me,ze,Ct,oe,Xt),A=new Ob(R),y=new Vg(F),le=new Tb(F,y),k=new kb(F,y,Xt,le),ie=new Vb(F,k,y,le,Xt),$=new Hb(F,Ct,Xe),J=new Rb(ze),ee=new iy(R,A,Rt,Ct,le,J),ce=new Ey(R,ze),fe=new ay,Y=new dy(Rt),C=new Eb(R,A,me,ie,m,c),he=new xy(R,ie,Ct),De=new Ty(F,Xt,Ct,me),X=new wb(F,Rt,Xt),ue=new zb(F,Rt,Xt),Xt.programs=ee.programs,R.capabilities=Ct,R.extensions=Rt,R.properties=ze,R.renderLists=fe,R.shadowMap=he,R.state=me,R.info=Xt}b!==Rn&&(U=new qb(b,t.width,t.height,o,s,r));let ae=new Xh(R,F);this.xr=ae,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let M=Rt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Rt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(M){M!==void 0&&(ye=M,this.setSize(Ee,ke,!1))},this.getSize=function(M){return M.set(Ee,ke)},this.setSize=function(M,I,H=!0){if(ae.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=M,ke=I,t.width=Math.floor(M*ye),t.height=Math.floor(I*ye),H===!0&&(t.style.width=M+"px",t.style.height=I+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(Ee*ye,ke*ye).floor()},this.setDrawingBufferSize=function(M,I,H){Ee=M,ke=I,ye=H,t.width=Math.floor(M*H),t.height=Math.floor(I*H),this.setViewport(0,0,M,I)},this.setEffects=function(M){if(b===Rn){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let I=0;I<M.length;I++)if(M[I].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ne)},this.getViewport=function(M){return M.copy(Ge)},this.setViewport=function(M,I,H,B){M.isVector4?Ge.set(M.x,M.y,M.z,M.w):Ge.set(M,I,H,B),me.viewport(ne.copy(Ge).multiplyScalar(Gn()).round())},this.getScissor=function(M){return M.copy(ft)},this.setScissor=function(M,I,H,B){M.isVector4?ft.set(M.x,M.y,M.z,M.w):ft.set(M,I,H,B),me.scissor(Ce.copy(ft).multiplyScalar(Gn()).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(M){me.setScissorTest(yt=M)},this.setOpaqueSort=function(M){Ye=M},this.setTransparentSort=function(M){Gt=M},this.getClearColor=function(M){return M.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(M=!0,I=!0,H=!0){let B=0;if(M){let z=!1;if(re!==null){let pe=re.texture.format;z=g.has(pe)}if(z){let pe=re.texture.type,Se=p.has(pe),de=C.getClearColor(),ve=C.getClearAlpha(),Pe=de.r,Ke=de.g,rt=de.b;Se?(_[0]=Pe,_[1]=Ke,_[2]=rt,_[3]=ve,F.clearBufferuiv(F.COLOR,0,_)):(S[0]=Pe,S[1]=Ke,S[2]=rt,S[3]=ve,F.clearBufferiv(F.COLOR,0,S))}else B|=F.COLOR_BUFFER_BIT}I&&(B|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),C.dispose(),fe.dispose(),Y.dispose(),Xe.dispose(),ze.dispose(),A.dispose(),ie.dispose(),k.dispose(),le.dispose(),De.dispose(),ee.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",id),ae.removeEventListener("sessionend",sd),xs.stop()};function Fe(M){M.preventDefault(),aa("WebGLRenderer: Context Lost."),L=!0}function Je(){aa("WebGLRenderer: Context Restored."),L=!1;let M=Xt.autoReset,I=he.enabled,H=he.autoUpdate,B=he.needsUpdate,z=he.type;$e(),Xt.autoReset=M,he.enabled=I,he.autoUpdate=H,he.needsUpdate=B,he.type=z}function ge(M){He("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function pt(M){let I=M.target;I.removeEventListener("dispose",pt),sn(I)}function sn(M){Yi(M),ze.remove(M)}function Yi(M){let I=ze.get(M).programs;I!==void 0&&(I.forEach(function(H){ee.releaseProgram(H)}),M.isShaderMaterial&&ee.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,H,B,z,pe){I===null&&(I=kn);let Se=z.isMesh&&z.matrixWorld.determinantAffine()<0,de=Nm(M,I,H,B,z);me.setMaterial(B,Se);let ve=H.index,Pe=1;if(B.wireframe===!0){if(ve=k.getWireframeAttribute(H),ve===void 0)return;Pe=2}let Ke=H.drawRange,rt=H.attributes.position,Te=Ke.start*Pe,at=(Ke.start+Ke.count)*Pe;pe!==null&&(Te=Math.max(Te,pe.start*Pe),at=Math.min(at,(pe.start+pe.count)*Pe)),ve!==null?(Te=Math.max(Te,0),at=Math.min(at,ve.count)):rt!=null&&(Te=Math.max(Te,0),at=Math.min(at,rt.count));let Ht=at-Te;if(Ht<0||Ht===1/0)return;le.setup(z,B,de,H,ve);let Mt,vt=X;if(ve!==null&&(Mt=y.get(ve),vt=ue,vt.setIndex(Mt)),z.isMesh)B.wireframe===!0?(me.setLineWidth(B.wireframeLinewidth*Gn()),vt.setMode(F.LINES)):vt.setMode(F.TRIANGLES);else if(z.isLine){let dn=B.linewidth;dn===void 0&&(dn=1),me.setLineWidth(dn*Gn()),z.isLineSegments?vt.setMode(F.LINES):z.isLineLoop?vt.setMode(F.LINE_LOOP):vt.setMode(F.LINE_STRIP)}else z.isPoints?vt.setMode(F.POINTS):z.isSprite&&vt.setMode(F.TRIANGLES);if(z.isBatchedMesh)if(Rt.get("WEBGL_multi_draw"))vt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let dn=z._multiDrawStarts,we=z._multiDrawCounts,bn=z._multiDrawCount,ut=ve?y.get(ve).bytesPerElement:1,bs=ze.get(B).currentProgram.getUniforms();for(let fn=0;fn<bn;fn++)bs.setValue(F,"_gl_DrawID",fn),vt.render(dn[fn]/ut,we[fn])}else if(z.isInstancedMesh)vt.renderInstances(Te,Ht,z.count);else if(H.isInstancedBufferGeometry){let dn=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,we=Math.min(H.instanceCount,dn);vt.renderInstances(Te,Ht,we)}else vt.render(Te,Ht)};function nd(M,I,H,B){O!==null&&M.isNodeMaterial&&O.setObject(B,M),qt===!0&&J.setState(M,H,!1),M.transparent===!0&&M.side===Ut&&M.forceSinglePass===!1?(M.side=Zt,M.needsUpdate=!0,Xr(M,I,B),M.side=gi,M.needsUpdate=!0,Xr(M,I,B),M.side=Ut):Xr(M,I,B)}this.compile=function(M,I,H=null){H===null&&(H=M),O!==null&&O.renderStart(M,I,H),w=Y.get(H),w.init(I),E.push(w),H.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),M!==H&&M.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),En=this.localClippingEnabled,qt=J.init(this.clippingPlanes,En),qt===!0&&J.setGlobalState(this.clippingPlanes,I),O!==null&&he.render(w.state.shadowsArray,H,I);let B=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let pe=z.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){let de=pe[Se];nd(de,H,I,z),B.add(de)}else nd(pe,H,I,z),B.add(pe)}),w=E.pop(),O!==null&&O.renderEnd(),B},this.compileAsync=function(M,I,H=null){let B=this.compile(M,I,H);return new Promise(z=>{function pe(){if(B.forEach(function(Se){let ve=ze.get(Se).currentProgram;(ve===void 0||ve.isReady())&&B.delete(Se)}),B.size===0){z(M);return}setTimeout(pe,10)}Rt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Sl=null;function Dm(M){Sl&&Sl(M)}function id(){xs.stop()}function sd(){xs.start()}let xs=new cp;xs.setAnimationLoop(Dm),typeof self<"u"&&xs.setContext(self),this.setAnimationLoop=function(M){Sl=M,ae.setAnimationLoop(M),M===null?xs.stop():xs.start()},ae.addEventListener("sessionstart",id),ae.addEventListener("sessionend",sd),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(M,I);let H=ae.enabled===!0&&ae.isPresenting===!0,B=U!==null&&(re===null||H)&&U.begin(R,re);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(I),I=ae.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,I,re),w=Y.get(M,E.length),w.init(I),w.state.textureUnits=Xe.getTextureUnits(),E.push(w),It.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?cn.setFromArrayCamera(I):st.setFromProjectionMatrix(It,qn,I.reversedDepth),En=this.localClippingEnabled,qt=J.init(this.clippingPlanes,En),T=fe.get(M,x.length),T.init(),x.push(T),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){let Se=R.xr.getDepthSensingMesh();Se!==null&&El(Se,I,-1/0,R.sortObjects)}El(M,I,0,R.sortObjects),T.finish(),O!==null&&O.updateLights(w.state.lightsArray),R.sortObjects===!0&&T.sort(Ye,Gt),zn=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,zn&&C.addToRenderList(T,M),this.info.autoReset===!0&&this.info.reset(),qt===!0&&J.beginShadows();let z=w.state.shadowsArray;if(he.render(z,M,I),qt===!0&&J.endShadows(),(B&&U.hasRenderPass())===!1){let Se=T.opaque,de=T.transmissive;if(w.setupLights(),I.isArrayCamera){let ve=I.cameras;if(de.length>0)for(let Pe=0,Ke=ve.length;Pe<Ke;Pe++){let rt=ve[Pe];ad(Se,de,M,rt)}zn&&C.render(M);for(let Pe=0,Ke=ve.length;Pe<Ke;Pe++){let rt=ve[Pe];rd(T,M,rt,rt.viewport)}}else de.length>0&&ad(Se,de,M,I),zn&&C.render(M),rd(T,M,I)}re!==null&&W===0&&(Xe.updateMultisampleRenderTarget(re),Xe.updateRenderTargetMipmap(re)),B&&U.end(R),M.isScene===!0&&M.onAfterRender(R,M,I),le.resetDefaultState(),j=-1,te=null,E.pop(),E.length>0?(w=E[E.length-1],Xe.setTextureUnits(w.state.textureUnits),qt===!0&&J.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,O!==null&&O.renderEnd()};function El(M,I,H,B){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){let Se=I.isArrayCamera?cn:st;if(!M.frustumCulled||M.intersectsFrustum(Se)){B&&nn.setFromMatrixPosition(M.matrixWorld).applyMatrix4(It);let de=ie.update(M),ve=M.material;ve.visible&&T.push(M,de,ve,H,nn.z,null,I)}}else if(M.isMesh||M.isLine||M.isPoints){let Se=I.isArrayCamera?cn:st;if(!M.frustumCulled||M.intersectsFrustum(Se)){let de=ie.update(M),ve=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),nn.copy(M.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),nn.copy(de.boundingSphere.center)),nn.applyMatrix4(M.matrixWorld).applyMatrix4(It)),Array.isArray(ve)){let Pe=de.groups;for(let Ke=0,rt=Pe.length;Ke<rt;Ke++){let Te=Pe[Ke],at=ve[Te.materialIndex];at&&at.visible&&T.push(M,de,at,H,nn.z,Te,I)}}else ve.visible&&T.push(M,de,ve,H,nn.z,null,I)}}}let pe=M.children;for(let Se=0,de=pe.length;Se<de;Se++)El(pe[Se],I,H,B)}function rd(M,I,H,B){let{opaque:z,transmissive:pe,transparent:Se}=M;w.setupLightsView(H),qt===!0&&J.setGlobalState(R.clippingPlanes,H),B&&me.viewport(ne.copy(B)),z.length>0&&io(z,I,H),pe.length>0&&io(pe,I,H),Se.length>0&&io(Se,I,H),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function ad(M,I,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){let Te=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new Yt(1,1,{generateMipmaps:!0,type:Te?hn:Rn,minFilter:Xn,samples:Math.max(4,Ct.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let pe=w.state.transmissionRenderTarget[B.id],Se=B.viewport||ne;pe.setSize(Se.z*R.transmissionResolutionScale,Se.w*R.transmissionResolutionScale);let de=R.getRenderTarget(),ve=R.getActiveCubeFace(),Pe=R.getActiveMipmapLevel();R.setRenderTarget(pe),R.getClearColor(Z),_e=R.getClearAlpha(),_e<1&&R.setClearColor(16777215,.5),R.clear(),zn&&C.render(H);let Ke=R.toneMapping;R.toneMapping=xi;let rt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),qt===!0&&J.setGlobalState(R.clippingPlanes,B),io(M,H,B),Xe.updateMultisampleRenderTarget(pe),Xe.updateRenderTargetMipmap(pe),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let at=0,Ht=I.length;at<Ht;at++){let Mt=I[at],{object:vt,geometry:dn,material:we,group:bn}=Mt;if(we.side===Ut&&vt.layers.test(B.layers)){let ut=we.side;we.side=Zt,we.needsUpdate=!0,od(vt,H,B,dn,we,bn),we.side=ut,we.needsUpdate=!0,Te=!0}}Te===!0&&(Xe.updateMultisampleRenderTarget(pe),Xe.updateRenderTargetMipmap(pe))}R.setRenderTarget(de,ve,Pe),R.setClearColor(Z,_e),rt!==void 0&&(B.viewport=rt),R.toneMapping=Ke}function io(M,I,H){let B=I.isScene===!0?I.overrideMaterial:null;for(let z=0,pe=M.length;z<pe;z++){let Se=M[z],{object:de,geometry:ve,group:Pe}=Se,Ke=Se.material;Ke.allowOverride===!0&&B!==null&&(Ke=B),de.layers.test(H.layers)&&od(de,I,H,ve,Ke,Pe)}}function od(M,I,H,B,z,pe){O!==null&&z.isNodeMaterial&&O.setObject(M,z),M.onBeforeRender(R,I,H,B,z,pe),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(R,I,H,B,M,pe),z.transparent===!0&&z.side===Ut&&z.forceSinglePass===!1?(z.side=Zt,z.needsUpdate=!0,R.renderBufferDirect(H,I,B,z,M,pe),z.side=gi,z.needsUpdate=!0,R.renderBufferDirect(H,I,B,z,M,pe),z.side=Ut):R.renderBufferDirect(H,I,B,z,M,pe),M.onAfterRender(R,I,H,B,z,pe)}function cd(M){let I=0;for(let H of M)H.texture!==null&&I++;return I}function Xr(M,I,H){I.isScene!==!0&&(I=kn);let B=ze.get(M),z=w.state.lights,pe=w.state.shadowsArray,Se=z.state.version,de=ee.getParameters(M,z.state,pe,I,H,w.state.lightProbeGridArray),ve=ee.getProgramCacheKey(de),Pe=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,B.fog=I.fog;let Ke=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=A.get(M.envMap||B.environment,Ke),B.envMapRotation=B.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Pe===void 0&&(M.addEventListener("dispose",pt),Pe=new Map,B.programs=Pe,B.programVariants=new Map);let rt=Pe.get(ve);if(rt!==void 0){if(B.currentProgram===rt&&B.lightsStateVersion===Se)return hd(M,de),rt}else de.uniforms=ee.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,H,de),M.onBeforeCompile(de,R),rt=ee.acquireProgram(de,ve),Pe.set(ve,rt),B.uniforms=de.uniforms;let Te=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Te.clippingPlanes=J.uniform),hd(M,de),B.needsLights=Um(M),B.lightsStateVersion=Se,B.needsLights&&(Te.ambientLightColor.value=z.state.ambient,Te.lightProbe.value=z.state.probe,Te.sunLights.value=z.state.sun,Te.sunLightShadows.value=z.state.sunShadow,Te.directionalLights.value=z.state.directional,Te.directionalLightShadows.value=z.state.directionalShadow,Te.spotLights.value=z.state.spot,Te.spotLightShadows.value=z.state.spotShadow,Te.rectAreaLights.value=z.state.rectArea,Te.ltc_1.value=z.state.rectAreaLTC1,Te.ltc_2.value=z.state.rectAreaLTC2,Te.pointLights.value=z.state.point,Te.pointLightShadows.value=z.state.pointShadow,Te.hemisphereLights.value=z.state.hemi,Te.sunShadowMatrix.value=z.state.sunShadowMatrix,Te.sunShadowCascade.value=z.state.sunShadowCascade,Te.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Te.spotLightMatrix.value=z.state.spotLightMatrix,Te.spotLightMap.value=z.state.spotLightMap,Te.pointShadowMatrix.value=z.state.pointShadowMatrix),B.numLightProbeGrids=cd(w.state.lightProbeGridArray),B.currentProgram=rt,B.uniformsList=null,rt}function Lm(M,I,H,B,z){let pe=ze.get(M),Se=pe.currentProgram.id+","+B+","+z,de=pe.programVariants.get(Se);return de===void 0?(de=Xr(M,I,H),pe.programVariants.set(Se,de)):(pe.currentProgram=de,pe.uniformsList=null,pe.outputColorSpace=B,pe.toneMapping=z),de}function ld(M){if(M.uniformsList===null){let I=M.currentProgram.getUniforms();M.uniformsList=Nr.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function hd(M,I){let H=ze.get(M);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function Nm(M,I,H,B,z){I.isScene!==!0&&(I=kn),Xe.resetTextureUnits();let pe=I.fog,Se=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?I.environment:null,de=re===null?R.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ze.workingColorSpace,ve=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Pe=A.get(B.envMap||Se,ve),Ke=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,rt=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Te=!!H.morphAttributes.position,at=!!H.morphAttributes.normal,Ht=!!H.morphAttributes.color,Mt=xi;B.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Mt=R.toneMapping);let vt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,dn=vt!==void 0?vt.length:0,we=ze.get(B),bn=w.state.lights;if(qt===!0&&(En===!0||M!==te)){let Dt=M===te&&B.id===j;J.setState(B,M,Dt)}let ut=!1,bs=!1;B.version===we.__version?we.needsLights&&we.lightsStateVersion!==bn.state.version||z.isBatchedMesh&&we.batching===!1||!z.isBatchedMesh&&we.batching===!0||z.isBatchedMesh&&we.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&we.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&we.instancing===!1||!z.isInstancedMesh&&we.instancing===!0||z.isSkinnedMesh&&we.skinning===!1||!z.isSkinnedMesh&&we.skinning===!0||z.isInstancedMesh&&we.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&we.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&we.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&we.instancingMorph===!1&&z.morphTexture!==null||we.envMap!==Pe||B.fog===!0&&we.fog!==pe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==J.numPlanes||we.numIntersection!==J.numIntersection)||we.vertexAlphas!==Ke||we.vertexTangents!==rt||we.morphTargets!==Te||we.morphNormals!==at||we.morphColors!==Ht||we.morphTargetsCount!==dn||we.numLightProbeGrids!==cd(w.state.lightProbeGridArray)?ut=!0:(we.outputColorSpace!==de||we.toneMapping!==Mt)&&(bs=!0):(ut=!0,we.__version=B.version);let fn=we.currentProgram;(ut===!0||bs===!0)&&(fn=bs===!0?Lm(B,I,z,de,Mt):Xr(B,I,z),O&&B.isNodeMaterial&&O.onUpdateProgram(B,fn,we));let so=!1,Ji=!1,_s=!1,ct=fn.getUniforms(),ln=we.uniforms;if(me.useProgram(fn.program)&&(so=!0,Ji=!0,_s=!0),B.id!==j&&(j=B.id,Ji=!0),so||te!==M){me.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ct.setValue(F,"projectionMatrix",M.projectionMatrix),ct.setValue(F,"viewMatrix",M.matrixWorldInverse);let rn=ct.map.cameraPosition;rn!==void 0&&rn.setValue(F,ci.setFromMatrixPosition(M.matrixWorld)),Ct.logarithmicDepthBuffer&&ct.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ct.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),te!==M&&(te=M,Ji=!0,_s=!0)}if(we.needsLights&&(bn.state.sunShadowMap.length>0&&ct.setValue(F,"sunShadowMap",bn.state.sunShadowMap,Xe),bn.state.directionalShadowMap.length>0&&ct.setValue(F,"directionalShadowMap",bn.state.directionalShadowMap,Xe),bn.state.spotShadowMap.length>0&&ct.setValue(F,"spotShadowMap",bn.state.spotShadowMap,Xe),bn.state.pointShadowMap.length>0&&ct.setValue(F,"pointShadowMap",bn.state.pointShadowMap,Xe)),z.isSkinnedMesh){ct.setOptional(F,z,"bindMatrix"),ct.setOptional(F,z,"bindMatrixInverse");let Dt=z.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),ct.setValue(F,"boneTexture",Dt.boneTexture,Xe))}z.isBatchedMesh&&(ct.setOptional(F,z,"batchingTexture"),ct.setValue(F,"batchingTexture",z._matricesTexture,Xe),ct.setOptional(F,z,"batchingIdTexture"),ct.setValue(F,"batchingIdTexture",z._indirectTexture,Xe),ct.setOptional(F,z,"batchingColorTexture"),z._colorsTexture!==null&&ct.setValue(F,"batchingColorTexture",z._colorsTexture,Xe));let Yn=H.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&$.update(z,H,fn),(Ji||we.receiveShadow!==z.receiveShadow)&&(we.receiveShadow=z.receiveShadow,ct.setValue(F,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&I.environment!==null&&(ln.envMapIntensity.value=I.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=Ay()),Ji){if(ct.setValue(F,"toneMappingExposure",R.toneMappingExposure),we.needsLights&&Fm(ln,_s),pe&&B.fog===!0&&ce.refreshFogUniforms(ln,pe),ce.refreshMaterialUniforms(ln,B,ye,ke,w.state.transmissionRenderTarget[M.id]),we.needsLights&&we.numLightProbeGrids>0){let Dt=v,rn=0;for(let Si of w.state.lightProbeGridArray)Si.texture!==null&&(Dt.textures[rn]=Si.texture,Dt.min[rn]=Si.boundingBox.min,Dt.max[rn]=Si.boundingBox.max,Dt.resolution[rn]=Si.resolution,rn++);for(let Si in Dt)Dt[Si].length=rn;ln.probesSH.value=Dt.textures,ln.probesMin.value=Dt.min,ln.probesMax.value=Dt.max,ln.probesResolution.value=Dt.resolution}Nr.upload(F,ld(we),ln,Xe)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Nr.upload(F,ld(we),ln,Xe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ct.setValue(F,"center",z.center),ct.setValue(F,"modelViewMatrix",z.modelViewMatrix),ct.setValue(F,"normalMatrix",z.normalMatrix),ct.setValue(F,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let Dt=B.uniformsGroups;for(let rn=0,Si=Dt.length;rn<Si;rn++){let dd=Dt[rn];De.update(dd,fn),De.bind(dd,fn)}}return fn}function Fm(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.sunLights.needsUpdate=I,M.sunLightShadows.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Um(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(M,I,H){let B=ze.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),ze.get(M.texture).__webglTexture=I,ze.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,I){let H=ze.get(M);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,H=0){re=M,K=I,W=H;let B=null,z=!1,pe=!1;if(M){let de=ze.get(M);if(de.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(F.FRAMEBUFFER,de.__webglFramebuffer),ne.copy(M.viewport),Ce.copy(M.scissor),je=M.scissorTest,me.viewport(ne),me.scissor(Ce),me.setScissorTest(je),j=-1;return}else if(de.__webglFramebuffer===void 0)Xe.setupRenderTarget(M);else if(de.__hasExternalTextures)Xe.rebindTextures(M,ze.get(M.texture).__webglTexture,ze.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ke=M.depthTexture;if(de.__boundDepthTexture!==Ke){if(Ke!==null&&ze.has(Ke)&&(M.width!==Ke.image.width||M.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(M)}}let ve=M.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(pe=!0);let Pe=ze.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?B=Pe[I][H]:B=Pe[I],z=!0):M.samples>0&&Xe.useMultisampledRTT(M)===!1?B=ze.get(M).__webglMultisampledFramebuffer:Array.isArray(Pe)?B=Pe[H]:B=Pe,ne.copy(M.viewport),Ce.copy(M.scissor),je=M.scissorTest}else ne.copy(Ge).multiplyScalar(ye).floor(),Ce.copy(ft).multiplyScalar(ye).floor(),je=yt;if(H!==0&&(B=V),me.bindFramebuffer(F.FRAMEBUFFER,B)&&me.drawBuffers(M,B),me.viewport(ne),me.scissor(Ce),me.setScissorTest(je),z){let de=ze.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,de.__webglTexture,H)}else if(pe){let de=I;for(let ve=0;ve<M.textures.length;ve++){let Pe=ze.get(M.textures[ve]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+ve,Pe.__webglTexture,H,de)}}else if(M!==null&&H!==0){let de=ze.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,de.__webglTexture,H)}j=-1};function ud(M){let I=ze.get(M);return(I.__readFormat!==M.format||I.__readType!==M.type)&&(I.__readFormat=M.format,I.__readType=M.type,I.__formatReadable=Ct.textureFormatReadable(M.format),I.__typeReadable=Ct.textureTypeReadable(M.type)),I}this.readRenderTargetPixels=function(M,I,H,B,z,pe,Se,de=0){if(!(M&&M.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=ze.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(ve=ve[Se],Array.isArray(ve)&&(ve=ve[0])),ve){me.bindFramebuffer(F.FRAMEBUFFER,ve);try{let Pe=M.textures[de],Ke=Pe.format,rt=Pe.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+de);let Te=ud(Pe);if(Te.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-B&&H>=0&&H<=M.height-z&&F.readPixels(I,H,B,z,oe.convert(Ke),oe.convert(rt),pe)}finally{let Pe=re!==null?ze.get(re).__webglFramebuffer:null;me.bindFramebuffer(F.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(M,I,H,B,z,pe,Se,de=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=ze.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(ve=ve[Se],Array.isArray(ve)&&(ve=ve[0])),ve)if(I>=0&&I<=M.width-B&&H>=0&&H<=M.height-z){me.bindFramebuffer(F.FRAMEBUFFER,ve);let Pe=M.textures[de],Ke=Pe.format,rt=Pe.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+de);let Te=ud(Pe);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,at),F.bufferData(F.PIXEL_PACK_BUFFER,pe.byteLength,F.STREAM_READ),F.readPixels(I,H,B,z,oe.convert(Ke),oe.convert(rt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ht=re!==null?ze.get(re).__webglFramebuffer:null;me.bindFramebuffer(F.FRAMEBUFFER,Ht);let Mt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Uf(F,Mt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,at),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,pe),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(at),F.deleteSync(Mt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,I=null,H=0){let B=Math.pow(2,-H),z=Math.floor(M.image.width*B),pe=Math.floor(M.image.height*B),Se=I!==null?I.x:0,de=I!==null?I.y:0;Xe.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,Se,de,z,pe),me.unbindTexture()},this.copyTextureToTexture=function(M,I,H=null,B=null,z=0,pe=0){let Se,de,ve,Pe,Ke,rt,Te,at,Ht,Mt=M.isCompressedTexture?M.mipmaps[pe]:M.image;if(H!==null)Se=H.max.x-H.min.x,de=H.max.y-H.min.y,ve=H.isBox3?H.max.z-H.min.z:1,Pe=H.min.x,Ke=H.min.y,rt=H.isBox3?H.min.z:0;else{let ct=Math.pow(2,-z);Se=Math.floor(Mt.width*ct),de=Math.floor(Mt.height*ct),M.isDataArrayTexture?ve=Mt.depth:M.isData3DTexture?ve=Math.floor(Mt.depth*ct):ve=1,Pe=0,Ke=0,rt=0}B!==null?(Te=B.x,at=B.y,Ht=B.z):(Te=0,at=0,Ht=0);let vt=oe.convert(I.format),dn=oe.convert(I.type),we;I.isData3DTexture?(Xe.setTexture3D(I,0),we=F.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Xe.setTexture2DArray(I,0),we=F.TEXTURE_2D_ARRAY):(Xe.setTexture2D(I,0),we=F.TEXTURE_2D),me.activeTexture(F.TEXTURE0),me.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),me.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),me.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);let bn=me.getParameter(F.UNPACK_ROW_LENGTH),ut=me.getParameter(F.UNPACK_IMAGE_HEIGHT),bs=me.getParameter(F.UNPACK_SKIP_PIXELS),fn=me.getParameter(F.UNPACK_SKIP_ROWS),so=me.getParameter(F.UNPACK_SKIP_IMAGES);me.pixelStorei(F.UNPACK_ROW_LENGTH,Mt.width),me.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mt.height),me.pixelStorei(F.UNPACK_SKIP_PIXELS,Pe),me.pixelStorei(F.UNPACK_SKIP_ROWS,Ke),me.pixelStorei(F.UNPACK_SKIP_IMAGES,rt);let Ji=M.isDataArrayTexture||M.isData3DTexture,_s=I.isDataArrayTexture||I.isData3DTexture;if(M.isDepthTexture){let ct=ze.get(M),ln=ze.get(I),Yn=ze.get(ct.__renderTarget),Dt=ze.get(ln.__renderTarget);me.bindFramebuffer(F.READ_FRAMEBUFFER,Yn.__webglFramebuffer),me.bindFramebuffer(F.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let rn=0;rn<ve;rn++)Ji&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ze.get(M).__webglTexture,z,rt+rn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ze.get(I).__webglTexture,pe,Ht+rn)),F.blitFramebuffer(Pe,Ke,Pe+Se,Ke+de,Te,at,Te+Se,at+de,F.DEPTH_BUFFER_BIT,F.NEAREST);me.bindFramebuffer(F.READ_FRAMEBUFFER,null),me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||ze.has(M)){let ct=ze.get(M),ln=ze.get(I);me.bindFramebuffer(F.READ_FRAMEBUFFER,P),me.bindFramebuffer(F.DRAW_FRAMEBUFFER,q);for(let Yn=0;Yn<ve;Yn++)Ji?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ct.__webglTexture,z,rt+Yn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ct.__webglTexture,z),_s?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ln.__webglTexture,pe,Ht+Yn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ln.__webglTexture,pe),z!==0?F.blitFramebuffer(Pe,Ke,Pe+Se,Ke+de,Te,at,Te+Se,at+de,F.COLOR_BUFFER_BIT,F.NEAREST):_s?F.copyTexSubImage3D(we,pe,Te,at,Ht+Yn,Pe,Ke,Se,de):F.copyTexSubImage2D(we,pe,Te,at,Pe,Ke,Se,de);me.bindFramebuffer(F.READ_FRAMEBUFFER,null),me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else _s?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(we,pe,Te,at,Ht,Se,de,ve,vt,dn,Mt.data):I.isCompressedArrayTexture?F.compressedTexSubImage3D(we,pe,Te,at,Ht,Se,de,ve,vt,Mt.data):F.texSubImage3D(we,pe,Te,at,Ht,Se,de,ve,vt,dn,Mt):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,pe,Te,at,Se,de,vt,dn,Mt.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,pe,Te,at,Mt.width,Mt.height,vt,Mt.data):F.texSubImage2D(F.TEXTURE_2D,pe,Te,at,Se,de,vt,dn,Mt);me.pixelStorei(F.UNPACK_ROW_LENGTH,bn),me.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ut),me.pixelStorei(F.UNPACK_SKIP_PIXELS,bs),me.pixelStorei(F.UNPACK_SKIP_ROWS,fn),me.pixelStorei(F.UNPACK_SKIP_IMAGES,so),pe===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&F.generateMipmap(we),me.unbindTexture()},this.initRenderTarget=function(M){ze.get(M).__webglFramebuffer===void 0&&Xe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Xe.setTextureCube(M,0):M.isData3DTexture?Xe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Xe.setTexture2DArray(M,0):Xe.setTexture2D(M,0),me.unbindTexture()},this.resetState=function(){K=0,W=0,re=null,me.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}});function vp(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new wt;c.morphTargetsRelative=o;let l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[m].length!==i[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(u.morphAttributes[m]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,m,h),l+=m}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=yp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let b=0;b<a[h].length;++b)f.push(a[h][b][d]);let m=yp(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function yp(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Ot(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let b=h.getComponent(d,m);o.setComponent(d+u,m,b)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function jh(i,e){if(e===gh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Lr||e===Ga){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Lr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Kh=an(()=>{On()});function tl(i){let e=new Map,t=new Map,n=i.clone();return Mp(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Mp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Mp(i.children[n],e.children[n],t)}var Yh=an(()=>{});function Ry(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Nt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}function Iy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ns({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:gi})),i.DefaultMaterial}function qs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Dy(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Ly(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ny(i){let e,t=i.extensions&&i.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$h(t.attributes):e=i.indices+":"+$h(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+$h(i.targets[n]);return e}function $h(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Su(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Fy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function Oy(i,e,t){let n=e.attributes,s=new kt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),o.normalized){let h=Su(Ur[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new N,c=new N;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let b=Su(Ur[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Tn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function wp(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Mu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Ze.workingColorSpace!==yn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),vi(i,e),Oy(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Dy(i,e.targets,t):i})}var nl,nt,Qh,eu,tu,nu,iu,su,ru,au,ou,cu,lu,hu,uu,du,fu,pu,mu,il,gu,Ap,ja,Sp,xu,bu,_u,yu,sl,Cy,vu,Kn,Ur,Ep,Tp,Jh,Mu,ls,Py,Zh,Uy,Eu,Rp=an(()=>{On();Kh();Yh();nl=class extends mi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new il(t,nt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new il(t,nt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new gu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=ki.extractUrlBase(e);a=ki.resolveURL(l,this.path)}else a=ki.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Tr(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ap){try{a[nt.KHR_BINARY_GLTF]=new xu(e)}catch(u){s&&s(u);return}r=JSON.parse(a[nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Eu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case nt.KHR_MATERIALS_UNLIT:a[u]=new eu;break;case nt.KHR_DRACO_MESH_COMPRESSION:a[u]=new bu(r,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:a[u]=new _u;break;case nt.KHR_MESH_QUANTIZATION:a[u]=new yu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Qh=class{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Me(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],yn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new os(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Bs(h),l.distance=u;break;case"spot":l=new Ea(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),vi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},eu=class{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return Jt}extendParams(e,t,n){let s=[];e.color=new Me(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],yn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(s)}},tu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},nu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Le(r,r)}return Promise.all(s)}},iu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},su=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},ru=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},au=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],yn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Tt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},ou=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},cu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(r[0],r[1],r[2],yn),Promise.all(s)}},lu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},hu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(r[0],r[1],r[2],yn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Tt)),Promise.all(s)}},uu=class{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},du=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Mn:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},fu=class{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},pu=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},mu=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},il=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},gu=class{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Kn.TRIANGLES&&l.mode!==Kn.TRIANGLE_STRIP&&l.mode!==Kn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let m of u){let b=new Ve,g=new N,p=new gn,_=new N(1,1,1),S=new ti(m.geometry,m.material,d);for(let T=0;T<d;T++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,T),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,T),c.SCALE&&_.fromBufferAttribute(c.SCALE,T),S.setMatrixAt(T,b.compose(g,p,_));let v=null;for(let T in c)if(T==="_COLOR_0"){let w=c[T];S.instanceColor=new Di(w.array,w.itemSize,w.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(v===null){let x=S.geometry;v=new wt,v.name=x.name;for(let E in x.attributes)v.setAttribute(E,x.attributes[E]);for(let E in x.morphAttributes)v.morphAttributes[E]=x.morphAttributes[E];x.index!==null&&v.setIndex(x.index),v.morphTargetsRelative=x.morphTargetsRelative;for(let E of x.groups)v.addGroup(E.start,E.count,E.materialIndex);x.boundingBox!==null&&(v.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(v.boundingSphere=x.boundingSphere.clone()),v.drawRange.start=x.drawRange.start,v.drawRange.count=x.drawRange.count,v.userData=Object.assign({},x.userData),S.geometry=v}let w=c[T];v.setAttribute(T,new Di(w.array,w.itemSize,w.normalized))}xt.prototype.copy.call(S,m),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Ap="glTF",ja=12,Sp={JSON:1313821514,BIN:5130562},xu=class{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ja),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ap)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ja,r=new DataView(e,ja),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Sp.JSON){let l=new Uint8Array(e,ja+a,o);this.content=n.decode(l)}else if(c===Sp.BIN){let l=ja+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},bu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Mu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Mu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Ur[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let m in f.attributes){let b=f.attributes[m],g=c[m];g!==void 0&&(b.normalized=g)}u(f)},o,l,yn,d)})})}},_u=class{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},yu=class{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}},sl=class extends pi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,b=m-l,g=-2*f+3*d,p=f-d,_=1-g,S=p-d+u;for(let v=0;v!==o;v++){let T=a[b+v+o],w=a[b+v+c]*h,x=a[m+v+o],E=a[m+v]*h;r[v]=_*T+S*w+g*x+p*E}return r}},Cy=new gn,vu=class extends sl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Cy.fromArray(r).normalize().toArray(r),r}},Kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ep={9728:Bt,9729:Kt,9984:oc,9985:Ir,9986:Hs,9987:Xn},Tp={33071:Wn,33648:dr,10497:Nn},Jh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Mu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ls={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Py={CUBICSPLINE:void 0,LINEAR:Rs,STEP:As},Zh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};Uy=new Ve,Eu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ry,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?(this.textureLoader=new Us(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Ta(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Tr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return qs(r,o,s),vi(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(ki.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Jh[s.type],o=Ur[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Ot(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Jh[s.type],l=Ur[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,b,g;if(f&&f!==u){let p=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,S=t.cache.get(_);S||(b=new l(o,p*f,s.count*f/h),S=new br(b,f/h),t.cache.add(_,S)),g=new _r(S,c,d%f/h,m)}else o===null?b=new l(s.count*c):b=new l(o,d,s.count*c),g=new Ot(b,c,m);if(s.sparse!==void 0){let p=Jh.SCALAR,_=Ur[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,T=new _(a[1],S,s.sparse.count*p),w=new l(a[2],v,s.sparse.count*c);o!==null&&(g=new Ot(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let x=0,E=T.length;x<E;x++){let U=T[x];if(g.setX(U,w[x*c]),c>=2&&g.setY(U,w[x*c+1]),c>=3&&g.setZ(U,w[x*c+2]),c>=4&&g.setW(U,w[x*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Ep[d.magFilter]||Kt,h.minFilter=Ep[d.minFilter]||Xn,h.wrapS=Tp[d.wrapS]||Nn,h.wrapT=Tp[d.wrapT]||Nn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Bt&&h.minFilter!==Kt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,m){t.parse(d,f,m)})});else{if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let f=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(d){return new Promise(function(f,m){let b=f;t.isImageBitmapLoader===!0&&(b=function(g){let p=new Ft(g);p.needsUpdate=!0,f(p)}),t.load(ki.resolveURL(d,r.path),b,void 0,m)})})}let u=h.then(function(d){return l===!0&&o.revokeObjectURL(c),vi(d,a),d.userData.mimeType=a.mimeType||Fy(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[nt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new rs,vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Mr,vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ns}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[nt.KHR_MATERIALS_UNLIT]){let u=s[nt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Me(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],yn),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Tt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ut);let h=r.alphaMode||Zh.OPAQUE;if(h===Zh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Zh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Jt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Le(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Jt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Jt){let u=r.emissiveFactor;o.emissive=new Me().setRGB(u[0],u[1],u[2],yn)}return r.emissiveTexture!==void 0&&a!==Jt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),vi(u,r),t.associations.set(u,{materials:e}),r.extensions&&qs(s,u,r),u})}createUniqueName(e){let t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return wp(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Ny(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=wp(new wt,l,t),l.mode===Kn.TRIANGLE_STRIP?d=d.then(f=>jh(f,Ga)):l.mode===Kn.TRIANGLE_FAN&&(d=d.then(f=>jh(f,Lr))),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Iy(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let b=h[f],g=a[f],p,_=l[f];if(g.mode===Kn.TRIANGLES||g.mode===Kn.TRIANGLE_STRIP||g.mode===Kn.TRIANGLE_FAN||g.mode===void 0){let S=r.isSkinnedMesh===!0,v=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");S&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=S&&v?new fa(b,_):new Ue(b,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===Kn.LINES)p=new ma(b,_);else if(g.mode===Kn.LINE_STRIP)p=new Is(b,_);else if(g.mode===Kn.LINE_LOOP)p=new ga(b,_);else if(g.mode===Kn.POINTS)p=new Ds(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Ly(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),vi(p,r),g.extensions&&qs(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&qs(s,u[0],r),u[0];let d=new tt;r.extensions&&qs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(At.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Bi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Ve;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new pa(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],m=s.samplers[f.sampler],b=f.target,g=b.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,_=s.parameters!==void 0?s.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",_)),l.push(m),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],b=u[3],g=u[4],p=[];for(let S=0,v=d.length;S<v;S++){let T=d[S],w=f[S],x=m[S],E=b[S],U=g[S];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let R=n._createAnimationTracks(T,w,x,E,U);if(R)for(let L=0;L<R.length;L++)p.push(R[L])}let _=new Fs(r,void 0,p);return vi(_,s),_})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Uy)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,m=u[0];h.pivot=new N().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new yr:l.length>1?h=new tt:l.length===1?h=l[0]:h=new xt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),vi(h,r),r.extensions&&qs(n,h,r),r.matrix!==void 0){let u=new Ve;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new tt;n.name&&(r.name=s.createUniqueName(n.name)),vi(r,n),n.extensions&&qs(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(tl(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof vn||d instanceof Ft)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}ls[r.path]===ls.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(ls[r.path]){case ls.weights:h=Fi;break;case ls.rotation:h=Ui;break;case ls.translation:case ls.scale:h=as;break;default:n.itemSize===1?h=Fi:h=as;break}let u=s.interpolation!==void 0?Py[s.interpolation]:Rs,d=this._getArrayFromAccessor(n);for(let f=0,m=c.length;f<m;f++){let b=new h(c[f]+"."+ls[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Su(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ui?vu:sl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});var Ka,Cp=an(()=>{On();Ka=class i extends Ue{constructor(){let e=i.SkyShader,t=new Lt({name:e.name,uniforms:ii.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Zt,depthWrite:!1});super(new Ae(1,1,1),t),this.isSky=!0}};Ka.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new N},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`}});var Or,Tu=an(()=>{Or={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}});var Bn,By,wu,ky,hs,Br=an(()=>{On();Bn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},By=new Bi(-1,1,1,-1,0,1),wu=class extends wt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}},ky=new wu,hs=class{constructor(e){this._mesh=new Ue(ky,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,By)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var rl,Pp=an(()=>{On();Br();rl=class extends Bn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ii.clone(e.uniforms),this.material=new Lt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new hs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}});var Ya,al,Ip=an(()=>{Br();Ya=class extends Bn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},al=class extends Bn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var ol,Dp=an(()=>{On();Tu();Pp();Ip();ol=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Le);this._width=n.width,this._height=n.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new rl(Or),this.copyPass.material.blending=Gi,this.timer=new wa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ya!==void 0&&(a instanceof Ya?n=!0:a instanceof al&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var cl,Lp=an(()=>{On();Br();cl=class extends Bn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Me}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}});var Np,Fp=an(()=>{On();Np={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Me(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`}});var kr,Up=an(()=>{On();Br();Tu();Fp();kr=class i extends Bn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Le(e.x,e.y):new Le(256,256),this.clearColor=new Me(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Yt(r,a,{type:hn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Yt(r,a,{type:hn,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Yt(r,a,{type:hn,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Np;this.highPassUniforms=ii.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Le(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ii.clone(Or.uniforms),this.blendMaterial=new Lt({uniforms:this.copyUniforms,vertexShader:Or.vertexShader,fragmentShader:Or.fragmentShader,premultipliedAlpha:!0,blending:Ra,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Me,this._oldClearAlpha=1,this._basic=new Jt,this._fsQuad=new hs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new Lt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Le(.5,.5)},direction:{value:new Le(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Lt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};kr.BlurDirectionX=new Le(1,0);kr.BlurDirectionY=new Le(0,1)});var Ja,Op=an(()=>{Ja={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`}});var ll,Bp=an(()=>{On();Br();Op();ll=class extends Bn{constructor(){super(),this.isOutputPass=!0,this.uniforms=ii.clone(Ja.uniforms),this.material=new Er({name:Ja.name,uniforms:this.uniforms,vertexShader:Ja.vertexShader,fragmentShader:Ja.fragmentShader}),this._fsQuad=new hs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ca?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Pa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ia?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===La?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Na?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Da&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}});var Za,kp=an(()=>{Za=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var _=new Uint8Array(p.length),S=0;S<p.length;++S){var v=p.charCodeAt(S);_[S]=v>96?v-97:v>64?v-39:v+4}for(var T=0,S=0;S<p.length;++S)_[T++]=_[S]<60?n[_[S]]:(_[S]-60)*64+_[++S];return _.buffer.slice(0,T)}function c(p,_,S,v,T,w,x){var E=p.exports.sbrk,U=v+3&-4,R=E(U*T),L=E(w.length),O=new Uint8Array(p.exports.memory.buffer);O.set(w,L);var V=_(R,v,T,L,w.length);if(V==0&&x&&x(R,U,T),S.set(O.subarray(R,R+v*T)),E(R-E(0)),V!=0)throw new Error("Malformed buffer data: "+V)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var _={object:new Worker(p),pending:0,requests:{}};return _.object.onmessage=function(S){var v=S.data;_.pending-=v.count,_.requests[v.id][v.action](v.value),delete _.requests[v.id]},_}function m(p){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),S=new Blob([_],{type:"text/javascript"}),v=URL.createObjectURL(S),T=u.length;T<p;++T)u[T]=f(v);for(var T=p;T<u.length;++T)u[T].object.postMessage({});u.length=p,URL.revokeObjectURL(v)}function b(p,_,S,v,T){for(var w=u[0],x=1;x<u.length;++x)u[x].pending<w.pending&&(w=u[x]);return new Promise(function(E,U){var R=new Uint8Array(S),L=++d;w.pending+=p,w.requests[L]={resolve:E,reject:U},w.object.postMessage({id:L,count:p,size:_,source:R,mode:v,filter:T},[R.buffer])})}function g(p){var _=p.data;self.ready.then(function(S){if(!_.id)return self.close();try{var v=new Uint8Array(_.count*_.size);c(S,S.exports[_.mode],v,_.count,_.size,_.source,S.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:v},[v.buffer])}catch(T){self.postMessage({id:_.id,count:_.count,action:"reject",value:T})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,_,S,v,T){c(r,r.exports.meshopt_decodeVertexBuffer,p,_,S,v,r.exports[l[T]])},decodeIndexBuffer:function(p,_,S,v){c(r,r.exports.meshopt_decodeIndexBuffer,p,_,S,v)},decodeIndexSequence:function(p,_,S,v){c(r,r.exports.meshopt_decodeIndexSequence,p,_,S,v)},decodeGltfBuffer:function(p,_,S,v,T,w){c(r,r.exports[h[T]],p,_,S,v,r.exports[l[w]])},decodeGltfBufferAsync:function(p,_,S,v,T){return u.length>0?b(p,_,S,h[v],l[T]):a.then(function(){var w=new Uint8Array(p*_);return c(r,r.exports[h[v]],w,p,_,S,r.exports[l[T]]),w})}}})()});function Hp(i){return"assets/"+i}function Wp(){try{let e=localStorage.getItem("islandDriftQuality");if(e==="low"||e==="high")return e}catch{}return navigator.maxTouchPoints>0&&matchMedia("(pointer: coarse)").matches||matchMedia("(hover: none) and (pointer: coarse)").matches?"low":"high"}function hl(i){Ne.quality=i;try{localStorage.setItem("islandDriftQuality",i)}catch{}}async function qp(i){let e=new nl;if(Za&&Za.ready)try{await Za.ready,e.setMeshoptDecoder(Za)}catch(c){console.warn(c)}let t=new Us,n=zp.length+Gp.length,s=0,r=()=>{s++,Ne.progress=s/n,i&&i(Ne.progress,s,n)},a=c=>new Promise(l=>{e.load(Hp(c),h=>{let u=c.replace(/\.glb$/,"");Ne.models[u]=h.scene;let d=h.animations||[];d.length&&(Ne.clips[u]=d),h.scene.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0,f.material&&(f.material.side=Ut,f.material.metalness=.05,f.material.roughness=.85))}),r(),l()},void 0,h=>{console.warn("Asset failed:",c,h),r(),l()})}),o=c=>new Promise(l=>{t.load(Hp(c),h=>{h.colorSpace=Tt,h.wrapS=h.wrapT=Nn,h.anisotropy=8,Ne.textures[c.replace(/\.[^.]+$/,"")]=h,r(),l()},void 0,()=>{r(),l()})});return Ne.textures["water-normal"],Promise.all([...zp.map(a),...Gp.map(o)]).then(()=>{let c=Ne.textures["water-normal"];return c&&(c.colorSpace=Un,c.wrapS=c.wrapT=Nn),Ne.loaded=!0,Ne}).catch(c=>(console.warn(c),Ne.failed=!0,Ne.loaded=!0,Ne))}function Vi(i){let e=Ne.models[i];if(!e)return null;let t=Ne.clips[i];return t&&t.length?tl(e):e.clone(!0)}function Au(i,e,t){let n=Ne.models[i];if(!n)return null;n.updateMatrixWorld(!0);let s=[];if(n.traverse(c=>{c.isMesh&&s.push(c)}),!s.length)return null;let r=new Ve().copy(n.matrixWorld).invert(),a=new tt;a.userData.isInstancedPack=!0;for(let c of s){let l=c.material,h;Array.isArray(l)?h=l.map(f=>f.clone()):(h=l.clone(),t!=null&&(h.color=new Me(t)));let u=f=>{f&&(f.side=Ut,f.map&&f.alphaTest<.05&&(f.alphaTest=.35,f.transparent=!1))};Array.isArray(h)?h.forEach(u):u(h);let d=new ti(c.geometry,Array.isArray(h)?h[0]:h,e);d.castShadow=d.receiveShadow=!0,d.instanceMatrix.setUsage(vh),d.userData.local=new Ve().multiplyMatrices(r,c.matrixWorld),a.add(d)}let o=new Ve;return a.setMatrixAt=(c,l)=>{a.children.forEach(h=>{o.multiplyMatrices(l,h.userData.local),h.setMatrixAt(c,o)})},Object.defineProperty(a,"count",{set(c){a.children.forEach(l=>{l.count=c,l.instanceMatrix.needsUpdate=!0})},get(){return a.children[0]?a.children[0].count:0}}),a}function Xp(i){i&&i.traverse(e=>{if(!e.isMesh||!e.material)return;let n=e.material.clone(),s=n.map;if(s&&s.image)try{let r=s.image,a=document.createElement("canvas");a.width=r.width||256,a.height=r.height||256;let o=a.getContext("2d");o.drawImage(r,0,0);let c=o.getImageData(0,0,a.width,a.height),l=c.data;for(let u=0;u<l.length;u+=4){let d=l[u],f=l[u+1],m=l[u+2];d>90&&d>f+25&&d>m+20&&f<180&&(l[u]=236,l[u+1]=238,l[u+2]=232)}o.putImageData(c,0,0);let h=new Ls(a);h.colorSpace=Tt,h.flipY=s.flipY,h.needsUpdate=!0,n.map=h}catch{n.color=new Me(16052714)}else n.color=new Me(16052714);e.material=n})}function Vp(i,e){let t=null;return i.traverse(n=>{t||n.isBone&&e.test(n.name)&&(t=n)}),t||i.traverse(n=>{t||e.test(n.name)&&(n.isBone||n.isObject3D)&&(t=n)}),t}function zy(i,e){i.traverse(t=>{if(!t.isMesh||!t.material)return;(Array.isArray(t.material)?t.material:[t.material]).forEach((s,r)=>{let a=(s.name||"").toLowerCase(),o=null,c=null;if(a.includes("skin")||a.includes("face")?o=e.skin:a.includes("shirt")?(o=e.shirt,c=e.shirtMap):a.includes("pant")||a.includes("short")?o=e.shorts||e.pants:a.includes("hair")?o=e.hair:(a.includes("belt")||a.includes("shoe"))&&(o=e.shoes||e.belt),o!=null){let l=s.clone();l.color=new Me(o),c&&(l.map=c,l.color.set(16777215)),l.side=Ut,Array.isArray(t.material)?t.material[r]=l:t.material=l}})})}function Gy(i,e){let t=Vp(i,/head$/i)||Vp(i,/head/i),n=t||i,s=t?.08:1.85;if(e.beanie){let r=new tt,a=new Ue(new Pt(.19,10,8),new St({color:e.beanie}));a.scale.set(1.2,.62,1.2),a.position.y=s+.16,r.add(a);let o=new Ue(new Qe(.2,.2,.05,10),new St({color:e.beanie}));o.position.y=s+.07,r.add(o),r.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),n.add(r)}if(e.tam){let r=new tt;[2001978,15778816,12597547].forEach((c,l)=>{let h=new Ue(new Qe(.19,.19,.05,12),new St({color:c}));h.position.y=s+.08+l*.05,r.add(h)});let o=new Ue(new Pt(.2,10,8),new St({color:2001978}));o.scale.set(1.1,.55,1.1),o.position.y=s+.26,r.add(o),n.add(r)}if(e.dreads&&t)for(let r=0;r<9;r++){let a=-.5+r/8*(Math.PI+1),o=.34+r%3*.1,c=new Ue(new Qe(.022,.018,o,5),new St({color:e.hair||2759184}));c.position.set(Math.cos(a)*.14,s-o*.28,Math.sin(a)*.13),c.rotation.z=Math.cos(a)*.4,c.rotation.x=.3,t.add(c)}if(e.sunglasses){let r=new tt,a=new St({color:1710612}),o=new Ue(new Ae(.08,.04,.02),a);o.position.set(-.06,s-.02,.14),r.add(o);let c=new Ue(new Ae(.08,.04,.02),a);c.position.set(.06,s-.02,.14),r.add(c);let l=new Ue(new Ae(.04,.012,.012),new St({color:546}));l.position.set(0,s-.02,.14),r.add(l),n.add(r)}if(e.chain){let r=new Ue(new fi(.09,.012,6,12),new St({color:15778816}));r.position.set(0,t?-.55:1.35,.05),r.rotation.x=.55,(t||i).add(r)}}function Hy(i,e){let t=new kt().setFromObject(i),n=t.max.y-t.min.y;if(n>.2){let s=e/n;i.scale.multiplyScalar(s);let r=new kt().setFromObject(i);i.position.y-=r.min.y}}function Vy(i={}){let t=!!i.female?"char-female":"char-male";if(!Ne.models[t])return null;let n=new tt,s=Vi(t);if(!s)return null;n.add(s),Hy(s,1.85*(i.scale||1)),zy(s,i),Gy(s,i);let r=Ne.clips[t]||[],a=new Aa(s),o={};for(let c of r){let l=a.clipAction(c);l.enabled=!0,c.name==="Jump"?(l.setLoop(qc,1),l.clampWhenFinished=!0):l.setLoop(Xc,1/0),o[c.name.toLowerCase()]=l}return o.idle&&(o.idle.play(),o.idle.setEffectiveWeight(1)),o.walk&&(o.walk.play(),o.walk.setEffectiveWeight(0)),o.run&&(o.run.play(),o.run.setEffectiveWeight(0)),n.userData.mixer=a,n.userData.actions=o,n.userData.rigged=!0,n.userData.walk=0,n.userData.animSpeed=0,n}function Ru(i,e){let t=Vy(e);if(!t)return!1;let n=[];for(let s of[...i.children])i.remove(s),n.push(s);return i.add(t),i.userData.mixer=t.userData.mixer,i.userData.actions=t.userData.actions,i.userData.rigged=!0,i.userData.fallbackKids=n,i.userData.walk=i.userData.walk||0,!0}function Cu(i,e,t={}){let n=i.userData&&i.userData.mixer,s=i.userData&&i.userData.actions;if(!n||!s)return!1;let r=t.speed||0,a=!!t.jumping,o=!!t.seated,c=0,l=0,h=0;if(o||a)c=1;else if(r<.35)c=1;else if(r<6.2){let u=At.clamp((r-.35)/4.5,0,1);c=1-u,l=u}else{let u=At.clamp((r-6.2)/3,0,1);l=1-u,h=u}return s.idle&&s.idle.setEffectiveWeight(At.damp(s.idle.getEffectiveWeight(),c,8,e)),s.walk&&(s.walk.setEffectiveWeight(At.damp(s.walk.getEffectiveWeight(),l,8,e)),s.walk.setEffectiveTimeScale(At.clamp(r/4.4,.8,1.4))),s.run&&(s.run.setEffectiveWeight(At.damp(s.run.getEffectiveWeight(),h,8,e)),s.run.setEffectiveTimeScale(At.clamp(r/8.6,.8,1.35))),a&&s.jump&&!i.userData.jumping&&(s.jump.reset().play(),i.userData.jumping=!0),a||(i.userData.jumping=!1),n.update(e),!0}function jp(i){let e=Ne.textures.sand,t=Ne.textures.grass;if(!i||!e||!t)return!1;e.repeat.set(48,48),t.repeat.set(36,36);let n=new St({vertexColors:!0});return n.onBeforeCompile=s=>{s.uniforms.uSand={value:e},s.uniforms.uGrass={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed,1.0)).xyz;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
        uniform sampler2D uSand, uGrass;
        varying vec3 vWPos;
      `).replace("#include <map_fragment>",`#include <map_fragment>
        vec2 uvw = vWPos.xz * 0.08;
        vec3 sandC = texture2D(uSand, uvw).rgb;
        vec3 grassC = texture2D(uGrass, uvw * 0.85 + 0.15).rgb;
        float greenery = clamp((vColor.g - vColor.r) * 2.2 + (vColor.g - 0.25), 0.0, 1.0);
        vec3 tex = mix(sandC, grassC, greenery);
        diffuseColor.rgb *= mix(vec3(1.0), tex, 0.72);
      `)},i.material=n,i.material.needsUpdate=!0,!0}function Kp(i,e){let t=new Ka;t.scale.setScalar(2e3),i.add(t);let n=t.material.uniforms;return n.turbidity.value=4,n.rayleigh.value=1.6,n.mieCoefficient.value=.005,n.mieDirectionalG.value=.7,e.v3sky=t,t}function Yp(i,e,t){if(!i.v3sky)return;let n=i.v3sky.material.uniforms;n.sunPosition.value.copy(e).multiplyScalar(400);let s=Math.max(0,-e.y);n.rayleigh.value=At.lerp(1.8,.2,s),n.turbidity.value=At.lerp(3.5,8,Math.max(0,1-Math.abs(e.y)))}function Jp(i,e,t){let n=new ol(i);n.addPass(new cl(e,t));let s=new kr(new Le(innerWidth,innerHeight),.18,.5,.88);return n.addPass(s),n.addPass(new ll),Ne.composer=n,Ne.bloom=s,n}function zr(i,e){Ne.quality=i;let{renderer:t,sun:n,waterSeg:s}=e,r=i==="high";t.setPixelRatio(Math.min(devicePixelRatio,r?1.75:1)),t.shadowMap.type=zi;let a=r?1536:512;if(n&&n.shadow){n.shadow.mapSize.set(a,a),n.shadow.map&&(n.shadow.map.dispose(),n.shadow.map=null);let o=r?70:48;n.shadow.camera.left=-o,n.shadow.camera.right=o,n.shadow.camera.top=o,n.shadow.camera.bottom=-o,n.shadow.camera.near=2,n.shadow.camera.far=260,n.shadow.camera.updateProjectionMatrix(),n.shadow.bias=-6e-4}Ne.softwareGL=Wy(t),Ne.bloom&&(Ne.bloom.enabled=r&&!Ne.softwareGL),Ne.composer&&Ne.composer.setSize(innerWidth,innerHeight)}function Zp(i,e){if(!i||!e)return;let t=i.position.clone().normalize(),n=80,s=new N(e.x,e.y,e.z);i.target.position.lerp(s,.15),i.position.copy(i.target.position).add(t.multiplyScalar(n)),i.target.updateMatrixWorld()}function Wy(i){try{let e=i.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),n=t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):"";return/swiftshader|llvmpipe|softpipe|software/i.test(n||"")}catch{return!1}}function qy(i){return Ne.quality==="high"&&!!Ne.bloom&&!Ne.softwareGL&&!Ne.forceNoBloom}function $p(i,e,t){qy(i)&&Ne.composer?Ne.composer.render():i.render(e,t)}var Ne,zp,Gp,Qp=an(()=>{On();Rp();Yh();Cp();Dp();Lp();Up();Bp();kp();Ne={loaded:!1,failed:!1,models:{},textures:{},clips:{},quality:"high",composer:null,bloom:null,progress:0},zp=["char-male.glb","char-female.glb","palm-a.glb","palm-b.glb","palm-c.glb","palm-d.glb","rock-a.glb","rock-b.glb","rock-c.glb","bush-a.glb","bush-b.glb","bush-c.glb","foliage-sand.glb","grass-tuft.glb","dock.glb","dock-small.glb","dock-planks.glb","dock-long.glb","shelter.glb","shelter-roof.glb","hut-a.glb","hut-b.glb","hut-tropic.glb","bar-shop.glb","boat.glb","lounge.glb","lounge-relax.glb","stool.glb","coconut.glb","barrel.glb","crate.glb"],Gp=["sand.jpg","grass.jpg","water-normal.jpg"]});var yM=Om(()=>{On();Kh();Qp();var Xy=360*1e3,jy=0,Ky=10,Pu=520,Yy=4.4,Jy=8.6,Zy=2.7,$y=22,em=20,Qy=2.5,ev=26,tm=14,tv=1.55,ai={x:108,z:358},Ki={x:10,z:-22},Be=i=>document.getElementById(i);function Ks(i){return 240+40*Math.sin(i*2+.3)+18*Math.sin(i*3+1.1)+10*Math.sin(i*5+2.2)}function en(i,e){let t=Ks(i)-e;return{x:Math.cos(i)*t,z:Math.sin(i)*t,angle:i}}function nv(i,e){let t=Math.hypot(i-ai.x,e-ai.z);if(t>22)return 0;let n=1-t/22;return .85*n*n}function pm(i,e){let t=0,n=[[70,280,28,1.6],[-90,250,22,1.4],[160,120,24,1.5],[-200,40,20,1.2],[40,-260,26,1.3],[-140,-180,18,1.1],[210,-40,22,1.3],[200,200,16,1]];for(let[s,r,a,o]of n){let c=Math.hypot(i-s,e-r);if(c<a){let l=1-c/a;t+=o*l*l}}return t}function _t(i,e){let t=Math.atan2(e,i),n=Math.hypot(i,e),r=Ks(t)-n,a;if(r<0)a=Math.max(r*.22,-28),n>520&&(a-=(n-520)*.04),a+=pm(i,e),a+=nv(i,e);else{r<16?a=.12+r/16*1.05:a=1.17+Math.min(5.2,(r-16)*.032);let c=i-Ki.x,l=e-Ki.z,h=Math.hypot(c,l);r>6&&(a+=26*Math.exp(-(h*h)/6084)),a+=2.2*Math.exp(-((i+90)**2+(e+40)**2)/900),a+=1.6*Math.exp(-((i-70)**2+(e+80)**2)/700)}return a}function mm(i,e,t){return Math.sin(i*.12+t*1.4)*Math.cos(e*.1+t*1.1)*.28+Math.sin((i+e)*.07+t*.7)*.12}function gl(i,e){return _t(i,e)>.08}var ot=en(Math.PI/2,34),ps=en(Math.PI/2+.18,8),ms=en(Math.PI/2+.18,-28),ri={x:Ki.x+6,z:Ki.z+8},Lu=en(Math.PI/2,22),ds=en(Math.PI/2-.52,12),js=en(Math.PI/2-.66,9);function yl(i){return Ks(i)-20}function Vu(i){let e=yl(i),t=Math.cos(i)*e,n=Math.sin(i)*e;return{x:t,z:n,y:Math.max(_t(t,n),.4)+.14,a:i}}var Cn=[];for(let i=0;i<160;i++)Cn.push(Vu(i/160*Math.PI*2));var gm=[.15,-1.85,2.55];function Xi(i){return new Me(i)}function be(i,e={}){return new St({color:i,...e})}function Mi(i,e={}){return new Jt({color:i,...e})}function no(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new Ls(n);return s.colorSpace=Tt,s.needsUpdate=!0,s}function xm(){return no(256,256,(i,e,t)=>{i.fillStyle="#f0c94a",i.fillRect(0,0,e,t);let n=["#ef6b3a","#3aa0d8","#f7f1de","#d94c7a","#3c8c4a"];for(let s=0;s<40;s++){let r=Math.random()*e,a=Math.random()*t;i.fillStyle=n[s%n.length],i.beginPath(),i.arc(r,a,6+Math.random()*10,0,Math.PI*2),i.fill(),i.fillStyle="#fff6c8",i.beginPath(),i.arc(r,a,2,0,Math.PI*2),i.fill()}})}function bm(){return no(256,256,(i,e,t)=>{i.fillStyle="#d9a441",i.fillRect(0,0,e,t);for(let n=0;n<70;n++){let s=Math.random()*e,r=Math.random()*t,a=7+Math.random()*10,o=5+Math.random()*8;i.fillStyle="#3a2414",i.beginPath(),i.ellipse(s,r,a,o,Math.random()*Math.PI,0,Math.PI*2),i.fill(),i.fillStyle="#e8b85a",i.beginPath(),i.ellipse(s+1,r,a*.4,o*.35,0,0,Math.PI*2),i.fill()}})}function Wu(){return no(128,128,(i,e,t)=>{i.fillStyle="#8a5a32",i.fillRect(0,0,e,t);for(let n=0;n<t;n++)i.fillStyle="rgba(40,20,8,"+(.08+Math.random()*.12)+")",i.fillRect(0,n,e,1);for(let n=0;n<8;n++)i.fillStyle="rgba(60,30,10,0.25)",i.fillRect(n*16,0,2,t)})}function iv(){return no(128,128,(i,e,t)=>{i.fillStyle="#8a6a28",i.fillRect(0,0,e,t);for(let n=0;n<80;n++){i.strokeStyle=Math.random()>.5?"#c4a24a":"#6a4a18",i.lineWidth=2;let s=Math.random()*e;i.beginPath(),i.moveTo(s,0),i.lineTo(s+(Math.random()-.5)*8,t),i.stroke()}})}function sv(i){return no(512,256,(e,t,n)=>{e.fillStyle="#c8b089",e.fillRect(0,0,t,n),e.strokeStyle="#5a3e22",e.lineWidth=10,e.strokeRect(8,8,t-16,n-16),e.fillStyle="#2a1c10",e.font="bold 64px Trebuchet MS, sans-serif",e.textAlign="center",e.fillText(i,t/2,140)})}var Wt=Object.create(null),Hr=Object.create(null),Sn=Math.PI,fs=.38,oi=9,Vr=!1,Oe={joyX:0,joyZ:0,active:!1,joyId:null,lookId:null,looking:!1,lastLX:0,lastLY:0,boost:!1,time:!1,fullscreenTried:!1,originX:0,originY:0},Pn={x:0,z:0,boost:!1,looking:!1},si={a:!1,b:!1,start:!1,xbtn:!1},qu=!1,Wr=!1;function rv(){return qu?!0:navigator.maxTouchPoints>0&&matchMedia("(pointer: coarse)").matches||matchMedia("(hover: none) and (pointer: coarse)").matches}function xl(){return!!document.body.classList.contains("touch-ui")}function Xu(i){document.body.classList.toggle("touch-ui",!!i);let e=Be("touch-ui");e&&Q.started&&i?e.classList.remove("hidden"):e&&!i&&e.classList.add("hidden")}function _m(){return!!(Wt.Space||Oe.boost||Pn.boost)}function av(){return!!(Wt.ShiftLeft||Wt.ShiftRight||Oe.active&&Math.hypot(Oe.joyX,Oe.joyZ)>.82)}function ov(){return!!(Wt.KeyT||Oe.time)}function ym(i,e){let t=i.code;["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t)&&i.preventDefault(),e?i.repeat||(Wt[t]=!0,Hr[t]=!0,t==="Escape"&&Q.started&&to()):Wt[t]=!1}window.addEventListener("keydown",i=>ym(i,!0));window.addEventListener("keyup",i=>ym(i,!1));window.addEventListener("blur",()=>{for(let i of Object.keys(Wt))Wt[i]=!1});function cv(i){return!!(i&&i.closest&&i.closest("#touch-btns, #btn-pause, #pause-menu, #controls-overlay, #intro, button, a, #app-drift"))}function Nu(){if(Oe.fullscreenTried)return;Oe.fullscreenTried=!0;let i=document.documentElement,e=i.requestFullscreen||i.webkitRequestFullscreen;if(e)try{e.call(i)}catch{}}function vl(i,e,t,n,s){let r=Be("joy-base"),a=Be("joy-knob");if(!(!r||!a)){if(!s){r.classList.remove("show");return}r.classList.add("show"),r.style.left=i+"px",r.style.top=e+"px",a.style.transform="translate(calc(-50% + "+t+"px), calc(-50% + "+n+"px))"}}function nm(i,e,t,n){let s=t-i,r=n-e,a=52,o=Math.hypot(s,r)||1,c=Math.min(1,o/a),l=s/o*c,h=r/o*c;Oe.joyX=l,Oe.joyZ=h,vl(i,e,l*a,h*a,!0)}function lv(i){let e=new Map;i.addEventListener("wheel",n=>{!Vr||Q.paused||(oi=At.clamp(oi+n.deltaY*.01,5,24))},{passive:!0}),window.addEventListener("pointerdown",n=>{if(!Vr||Q.paused||cv(n.target))return;if(Nu(),xl()&&n.pointerType!=="mouse"&&n.clientX<innerWidth*.5&&Oe.joyId==null){Oe.joyId=n.pointerId,Oe.active=!0,Oe.originX=n.clientX,Oe.originY=n.clientY,nm(n.clientX,n.clientY,n.clientX,n.clientY);try{i.setPointerCapture(n.pointerId)}catch{}n.preventDefault();return}if(Oe.lookId==null){if(Oe.lookId=n.pointerId,Oe.looking=!0,Oe.lastLX=n.clientX,Oe.lastLY=n.clientY,n.pointerType==="mouse"&&!xl()&&n.detail===2)try{i.requestPointerLock&&i.requestPointerLock()}catch{}try{i.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}},{passive:!1}),window.addEventListener("pointermove",n=>{if(!(!Vr||Q.paused)){if(document.pointerLockElement){Sn-=n.movementX*.004,fs=At.clamp(fs+n.movementY*.0035,.08,1.15);return}if(n.pointerId===Oe.joyId)nm(Oe.originX,Oe.originY,n.clientX,n.clientY),n.preventDefault();else if(n.pointerId===Oe.lookId&&Oe.looking){let s=n.clientX-Oe.lastLX,r=n.clientY-Oe.lastLY;Oe.lastLX=n.clientX,Oe.lastLY=n.clientY,Sn-=s*.005,fs=At.clamp(fs+r*.004,.08,1.15),n.preventDefault()}}},{passive:!1});let t=n=>{n.pointerId===Oe.joyId&&(Oe.joyId=null,Oe.active=!1,Oe.joyX=0,Oe.joyZ=0,vl(0,0,0,0,!1)),n.pointerId===Oe.lookId&&(Oe.lookId=null,Oe.looking=!1)};window.addEventListener("pointerup",t),window.addEventListener("pointercancel",t),window.addEventListener("touchstart",n=>{Xu(!0),Q.started&&n.preventDefault()},{passive:!1}),window.addEventListener("touchmove",n=>{Q.started&&n.preventDefault()},{passive:!1}),["gesturestart","gesturechange"].forEach(n=>{window.addEventListener(n,s=>s.preventDefault(),{passive:!1})})}function ju(){let i=0,e=0;(Wt.KeyW||Wt.ArrowUp)&&(e-=1),(Wt.KeyS||Wt.ArrowDown)&&(e+=1),(Wt.KeyA||Wt.ArrowLeft)&&(i-=1),(Wt.KeyD||Wt.ArrowRight)&&(i+=1),Oe.active&&(i+=Oe.joyX,e+=Oe.joyZ),Math.hypot(Pn.x,Pn.z)>.12&&(i+=Pn.x,e+=Pn.z);let t=Math.hypot(i,e);return t>1&&(i/=t,e/=t),{x:i,z:e,mag:Math.min(1,t)}}function hv(i){Pn.x=0,Pn.z=0,Pn.boost=!1;let e=navigator.getGamepads?navigator.getGamepads():[],t=null;for(let o=0;o<e.length;o++)if(e[o]){t=e[o];break}if(!t||!Vr){si.a=si.b=si.start=!1;return}let n=o=>Math.abs(o)<.18?0:o;Pn.x=n(t.axes[0]||0),Pn.z=n(t.axes[1]||0);let s=n(t.axes[2]||0),r=n(t.axes[3]||0);Pn.looking=!!(s||r),Pn.looking&&(Sn-=s*2.1*i,fs=At.clamp(fs+r*1.6*i,.08,1.15));let a=o=>!!(t.buttons[o]&&t.buttons[o].pressed);Pn.boost=a(2)||a(7),a(2)&&!si.xbtn&&Q.mode==="foot"&&!Q.paused&&(Wr=!0),a(0)&&!si.a&&!Q.paused&&Ml(),a(1)&&!si.b&&!Q.paused&&Q.mode!=="foot"&&_l(),a(9)&&!si.start&&to(),si.a=a(0),si.b=a(1),si.start=a(9),si.xbtn=a(2)}function uv(i,e,t){let n=(e-i+Math.PI)%(Math.PI*2);return n<0&&(n+=Math.PI*2),n-=Math.PI,i+n*t}var Q={started:!1,mode:"foot",cash:0,hours:Ky,dayMs:Xy,carrying:null,toastT:0,party:!1,confettiT:0,paused:!1},Re={mango:{stage:"idle"},speaker:{stage:"idle"},video:{stage:"idle",rings:[!1,!1,!1]},coconut:{stage:"idle"}},We=new ha;We.background=Xi(6211824);We.fog=new la(9426159,420,2200);var ji=new jt(55,innerWidth/innerHeight,.2,4e3),tn=new $c({antialias:!0,powerPreference:"high-performance"});tn.setPixelRatio(Math.min(devicePixelRatio,1.75));tn.setSize(innerWidth,innerHeight);tn.shadowMap.enabled=!0;tn.shadowMap.type=zi;tn.outputColorSpace=Tt;tn.toneMapping=zs;tn.toneMappingExposure=1.05;tn.domElement.id="gl";document.body.prepend(tn.domElement);lv(tn.domElement);var dl=new Ma(10476031,4024882,.7);We.add(dl);var zt=new os(16773840,1.35);zt.castShadow=!0;zt.shadow.mapSize.set(1536,1536);zt.shadow.camera.near=10;zt.shadow.camera.far=900;zt.shadow.camera.left=-280;zt.shadow.camera.right=280;zt.shadow.camera.top=280;zt.shadow.camera.bottom=-280;zt.shadow.bias=-4e-4;We.add(zt);We.add(zt.target);var Fu=new os(10533119,0);We.add(Fu);var Ku=new Bs(16757850,0,42,1.6);We.add(Ku);var im={_last:performance.now(),elapsedTime:0,getDelta(){let i=performance.now(),e=(i-this._last)/1e3;return this._last=i,this.elapsedTime+=e,e}},qi=new N,dv=new N;window.addEventListener("resize",()=>{ji.aspect=innerWidth/innerHeight,ji.updateProjectionMatrix(),tn.setSize(innerWidth,innerHeight),Ne.composer&&Ne.composer.setSize(innerWidth,innerHeight)});var G={waterTime:{value:0},sunDir:new N(0,1,0),stars:null,lights:[],windows:[],clouds:[],wake:[],confetti:[],rings:[],items:{},npcs:[]};function se(i,e,t,n,s=We){let r=new Ue(i,e);return t&&r.position.set(t.x||0,t.y||0,t.z||0),n&&r.rotation.set(n.x||0,n.y||0,n.z||0),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}function fv(){let t=new di(2e3,2e3,220,220);t.rotateX(-Math.PI/2);let n=t.attributes.position,s=new Float32Array(n.count*3),r=new Me;for(let o=0;o<n.count;o++){let c=n.getX(o),l=n.getZ(o),h=_t(c,l);n.setY(o,h);let u=Math.atan2(l,c),d=Ks(u)-Math.hypot(c,l);if(h<=.05){let f=At.clamp(-h/12,0,1);r.set(15786680).lerp(Xi(13219975),f),pm(c,l)>.35&&r.set(3111522)}else if(d<18)r.set(16249300);else{let f=At.clamp((h-1.2)/22,0,1);r.set(4105030).lerp(Xi(1927730),f),Math.hypot(c-Ki.x,l-Ki.z)<18&&h>14&&r.set(4880952)}s[o*3]=r.r,s[o*3+1]=r.g,s[o*3+2]=r.b}t.setAttribute("color",new Ot(s,3)),t.computeVertexNormals();let a=new Ue(t,new St({vertexColors:!0}));a.receiveShadow=!0,We.add(a),G.terrainMesh=a}function pv(){let i=new di(2600,2600,120,120);i.rotateX(-Math.PI/2);let e=new Lt({uniforms:{uTime:G.waterTime,uSunDir:{value:G.sunDir},uShallow:{value:Xi(4187081)},uMid:{value:Xi(1947849)},uDeep:{value:Xi(740502)},uFoam:{value:Xi(15269880)},uNormal:{value:new Ft},uHasNrm:{value:0}},transparent:!0,depthWrite:!1,vertexShader:`
      uniform float uTime;
      varying vec3 vWorld;
      varying vec3 vN;
      void main() {
        vec3 p = position;
        float w1 = sin(p.x * 0.12 + uTime * 1.4) * cos(p.z * 0.10 + uTime * 1.1) * 0.28;
        float w2 = sin((p.x + p.z) * 0.07 + uTime * 0.7) * 0.12;
        p.y += w1 + w2;
        float dx = 0.12 * cos(p.x * 0.12 + uTime * 1.4) * cos(p.z * 0.10 + uTime * 1.1) * 0.28;
        float dz = -0.10 * sin(p.x * 0.12 + uTime * 1.4) * sin(p.z * 0.10 + uTime * 1.1) * 0.28;
        vN = normalize(vec3(-dx, 1.0, -dz));
        vec4 wp = modelMatrix * vec4(p, 1.0);
        vWorld = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      uniform vec3 uSunDir, uShallow, uMid, uDeep, uFoam;
      uniform sampler2D uNormal;
      uniform float uHasNrm;
      uniform float uTime;
      varying vec3 vWorld;
      varying vec3 vN;
      float coastR(float a) {
        return 240.0 + 40.0 * sin(a * 2.0 + 0.3) + 18.0 * sin(a * 3.0 + 1.1) + 10.0 * sin(a * 5.0 + 2.2);
      }
      void main() {
        float a = atan(vWorld.z, vWorld.x);
        float r = length(vWorld.xz);
        float d = r - coastR(a);
        float shallow = 1.0 - smoothstep(2.0, 90.0, d);
        float mid = 1.0 - smoothstep(50.0, 220.0, d);
        vec3 colr = mix(uDeep, uMid, mid);
        colr = mix(colr, uShallow, shallow * 0.85);
        float reef = 0.0;
        vec2 reefs[6];
        reefs[0] = vec2(70.0, 280.0); reefs[1] = vec2(-90.0, 250.0); reefs[2] = vec2(160.0, 120.0);
        reefs[3] = vec2(40.0, -260.0); reefs[4] = vec2(210.0, -40.0); reefs[5] = vec2(200.0, 200.0);
        for (int i = 0; i < 6; i++) {
          float dd = length(vWorld.xz - reefs[i]);
          reef += smoothstep(28.0, 6.0, dd);
        }
        colr = mix(colr, vec3(0.12, 0.42, 0.36), clamp(reef, 0.0, 0.7) * (1.0 - smoothstep(8.0, 80.0, d)));
        float foam = 1.0 - smoothstep(0.0, 9.0, abs(d));
        foam *= 0.6 + 0.4 * sin(vWorld.x * 3.1 + uTime * 2.2) * sin(vWorld.z * 2.6 + uTime * 1.7);
        colr = mix(colr, uFoam, clamp(foam * 0.5, 0.0, 0.55));
        vec3 N = normalize(vN);
        if (uHasNrm > 0.5) {
          vec2 uv1 = vWorld.xz * 0.06 + vec2(uTime * 0.03, uTime * 0.02);
          vec2 uv2 = vWorld.xz * 0.11 - vec2(uTime * 0.025, uTime * 0.018);
          vec3 n1 = texture2D(uNormal, uv1).xyz * 2.0 - 1.0;
          vec3 n2 = texture2D(uNormal, uv2).xyz * 2.0 - 1.0;
          N = normalize(N + (n1 + n2) * 0.35);
        }
        vec3 V = normalize(cameraPosition - vWorld);
        float fres = pow(1.0 - max(dot(N, V), 0.0), 3.0);
        colr += vec3(0.55, 0.8, 1.0) * fres * 0.28;
        float spec = pow(max(dot(reflect(-normalize(uSunDir), N), V), 0.0), 80.0);
        colr += vec3(1.0, 0.98, 0.9) * spec * 0.55;
        float alpha = mix(0.92, 0.72, shallow);
        gl_FragColor = vec4(colr, alpha);
      }
    `}),t=new Ue(i,e);t.position.y=jy+.02,t.renderOrder=1,We.add(t),G.waterMesh=t,G.waterMat=e}function sm(i,e,t,n,s=0){let r=i.length,a=[],o=[];for(let b=0;b<r;b++){let g=i[b],p=i[(b+1)%r],_=Math.hypot(p.x-g.x,p.z-g.z)||1,S=-(p.z-g.z)/_,v=(p.x-g.x)/_;a.push(g.x+S*e,g.y+t,g.z+v*e),o.push(g.x-S*e,g.y+t,g.z-v*e)}if(!s){let b=[],g=[];for(let S=0;S<r;S++)b.push(a[S*3],a[S*3+1],a[S*3+2]),b.push(o[S*3],o[S*3+1],o[S*3+2]);for(let S=0;S<r;S++){let v=S*2,T=v+1,w=(S+1)%r*2,x=w+1;g.push(v,T,w,T,x,w)}let p=new wt;p.setAttribute("position",new lt(b,3)),p.setIndex(g),p.computeVertexNormals();let _=new Ue(p,n);return _.receiveShadow=!0,We.add(_),_}let c=new tt,l=s,h=s,u=0,d=!0,f=[],m=()=>{if(f.length<2){f=[];return}let b=[],g=[];for(let _ of f)b.push(..._.l,..._.r);for(let _=0;_<f.length-1;_++){let S=_*2,v=S+1,T=S+2,w=S+3;g.push(S,v,T,v,w,T)}let p=new wt;p.setAttribute("position",new lt(b,3)),p.setIndex(g),p.computeVertexNormals(),c.add(new Ue(p,n)),f=[]};for(let b=0;b<r;b++){let g=i[b],p=i[(b+1)%r],_=Math.hypot(p.x-g.x,p.z-g.z);d&&f.push({l:[a[b*3],a[b*3+1],a[b*3+2]],r:[o[b*3],o[b*3+1],o[b*3+2]]}),u+=_,d&&u>l?(m(),d=!1,u=0):!d&&u>h&&(d=!0,u=0)}return m(),We.add(c),c}function mv(){let i=new St({color:4868686,side:Ut,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});sm(Cn,3.4,.02,i);let e=new St({color:16053490,side:Ut,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),t=r=>{let a=Cn.map((o,c)=>{let l=Cn[(c+1)%Cn.length],h=Math.hypot(l.x-o.x,l.z-o.z)||1,u=-(l.z-o.z)/h,d=(l.x-o.x)/h;return{x:o.x+u*2.95*r,z:o.z+d*2.95*r,y:o.y}});sm(a,.08,.05,e)};t(1),t(-1);let n=new Jt({color:15778816,side:Ut,polygonOffset:!0,polygonOffsetFactor:-8,polygonOffsetUnits:-8}),s=new Ae(.16,.03,2.4);for(let r=0;r<Cn.length;r+=1){let a=Cn[r],o=Cn[(r+1)%Cn.length],c=o.x-a.x,l=o.z-a.z,h=new Ue(s,n);h.position.set((a.x+o.x)/2,a.y+.04,(a.z+o.z)/2),h.rotation.y=Math.atan2(c,l),h.receiveShadow=!0,We.add(h)}}function gv(){let i=new Qe(.16,.26,5.2,6);i.translate(0,2.6,0);let e=[];for(let f=0;f<6;f++){let m=new wn(1.6,2.4,5,1,!0);m.translate(0,-.4,0),m.rotateX(-.95),m.rotateY(f/6*Math.PI*2),m.translate(0,5.3,0),e.push(m)}let t=vp(e,!1),n=130,s=new ti(i,be(9067058),n),r=new ti(t,be(2067002),n);s.castShadow=r.castShadow=!0,s.receiveShadow=r.receiveShadow=!0;let a=new xt,o=0,c=0;for(;o<n&&c<4e3;){c++;let f=Math.random()*Math.PI*2,m=26+Math.random()*150,b=en(f,m),g=_t(b.x,b.z);g<1.1||Math.abs(Math.hypot(b.x,b.z)-yl(f))<6||Math.hypot(b.x-ot.x,b.z-ot.z)<22||Math.hypot(b.x-ri.x,b.z-ri.z)<10||(a.position.set(b.x,g,b.z),a.rotation.set(0,Math.random()*Math.PI*2,0),a.scale.setScalar(.75+Math.random()*.55),a.updateMatrix(),s.setMatrixAt(o,a.matrix),r.setMatrixAt(o,a.matrix),o++)}s.count=r.count=o;let l=new tt;l.add(s,r),We.add(l),G.palmGroup=l;let h=new ti(new Pt(1.1,6,5),be(1731374),80);h.castShadow=!0;let u=0,d=0;for(;u<80&&d<2e3;){d++;let f=Math.random()*Math.PI*2,m=en(f,24+Math.random()*140),b=_t(m.x,m.z);b<1||Math.hypot(m.x-ot.x,m.z-ot.z)<18||(a.position.set(m.x,b+.5,m.z),a.rotation.set(0,0,0),a.scale.set(.7+Math.random()*.8,.55+Math.random()*.5,.7+Math.random()*.8),a.updateMatrix(),h.setMatrixAt(u++,a.matrix))}h.count=u,We.add(h),G.bushMesh=h}function xv(){let i=new St({color:16777215}),e=new Pt(1,8,6);for(let t=0;t<10;t++){let n=new tt;n.position.set((Math.random()-.5)*900,90+Math.random()*50,(Math.random()-.5)*900);for(let s=0;s<5;s++){let r=new Ue(e,i);r.position.set((Math.random()-.5)*28,(Math.random()-.5)*8,(Math.random()-.5)*16),r.scale.set(10+Math.random()*12,5+Math.random()*5,8+Math.random()*10),n.add(r)}n.userData.dr=1.5+Math.random()*2,We.add(n),G.clouds.push(n)}}function bv(){let e=new Float32Array(2100);for(let s=0;s<700;s++){let r=Math.random()*Math.PI*2,a=.15+Math.random()*1.2,o=1200;e[s*3]=Math.cos(r)*Math.cos(a)*o,e[s*3+1]=Math.sin(a)*o,e[s*3+2]=Math.sin(r)*Math.cos(a)*o}let t=new wt;t.setAttribute("position",new Ot(e,3));let n=new Ds(t,new rs({color:16775392,size:2.4,sizeAttenuation:!1,transparent:!0,opacity:0}));We.add(n),G.stars=n}function _v(){let i=[{x:-620,z:-980,s:2.4,rot:.2},{x:200,z:-1100,s:3.1,rot:-.3},{x:820,z:-700,s:2.2,rot:.5},{x:1100,z:100,s:2.6,rot:.1},{x:-1e3,z:-200,s:2,rot:.8},{x:-780,z:700,s:1.8,rot:-.4},{x:900,z:850,s:2.1,rot:.3}];for(let e of i){let t=new tt,n=new Ue(new wn(70,28,7),be(3050052));n.position.y=8,t.add(n);let s=new Ue(new wn(28,70,6),be(2059058));s.position.set(8,40,-6),t.add(s);let r=new Ue(new wn(18,46,6),be(2390584));r.position.set(-16,28,10),t.add(r);let a=new Ue(new Qe(90,110,10,8),be(3842134));a.position.y=2,t.add(a);let o=new Ue(new Qe(100,120,3,8),be(15984834));o.position.y=-1,t.add(o),t.position.set(e.x,0,e.z),t.scale.setScalar(e.s),t.rotation.y=e.rot,We.add(t)}}function yv(i,e,t,n,s=0){let r=_t(i,e),a=new tt;a.position.set(i,r,e),a.rotation.y=s,se(new Ae(6.2,3.2,5.4),be(n),{y:1.7},null,a),se(new wn(5.4,2.6,4),be(t),{y:4.4},{y:Math.PI/4},a);let o=se(new Ae(1.2,1,.12),Mi(6982314),{y:2,z:2.73},null,a);return o.castShadow=!1,G.windows.push(o),We.add(a),G.huts=G.huts||[],G.huts.push(a),a}function vv(){let i=new tt;return se(new Pt(.28,8,6),be(13849642),{x:.05},{z:.4,x:.2},i).scale.set(1.6,.7,.8),se(new Pt(.16,6,5),be(14711354),{x:-.4,y:-.05},{z:.6},i).scale.set(1.3,.5,.6),se(new Pt(.16,6,5),be(16765818),{x:.35,y:.08,z:.08},null,i),se(new Qe(.015,.015,.5,4),be(2760728),{x:.52,y:.28,z:.1},{z:-.7},i),se(new Qe(.015,.015,.5,4),be(2760728),{x:.52,y:.28,z:-.05},{z:-.7,x:.2},i),i}function Mv(){let i=_t(ot.x,ot.z),e=new tt;e.position.set(ot.x,i,ot.z),e.rotation.y=0;let t=be(9263666),n=new St({map:Wu(),color:12886122}),s=new St({map:iv(),color:14532730});se(new Ae(14,3.4,10),n,{y:1.7,z:-.4},null,e),se(new Ae(12.5,2.6,.2),be(3810328),{y:1.6,z:4.6},null,e);for(let l of[-6.6,6.6])se(new Qe(.22,.25,4.4,6),t,{x:l,y:2.2,z:5},null,e);let r=se(new wn(11.2,4.2,4),s,{y:5.5,z:-.2},{y:Math.PI/4},e);r.scale.z=.85,se(new Ae(10,1.1,1.6),n,{y:1.1,z:4.2},null,e);for(let l of[-3.5,-1.2,1.2,3.5])se(new Qe(.32,.28,.9,8),be(5913122),{x:l,y:.55,z:5.8},null,e),se(new Qe(.36,.36,.1,8),be(3810324),{x:l,y:1.02,z:5.8},null,e);let a=[3842208,12868138,15787696,3828440,9054794];for(let l=0;l<8;l++)se(new Qe(.08,.1,.5,6),be(a[l%5]),{x:-3.5+l*.9,y:1.9,z:3.7},null,e);se(new Ae(5.6,2.2,.15),new St({map:sv("The Salty Prawn")}),{y:5.6,z:5.4},null,e);let o=vv();o.position.set(-3.55,5.85,5.55),o.scale.setScalar(1.05),e.add(o);for(let l of[-4.5,4.5]){let h=se(new Ae(1.6,1.1,.08),Mi(8032426),{x:l,y:2.1,z:-5.45},null,e);h.castShadow=!1,G.windows.push(h)}se(new Qe(.1,.12,3.6,5),t,{x:-8,y:1.8,z:6.5},null,e),se(new Qe(.1,.12,3.6,5),t,{x:8,y:1.8,z:6.5},null,e);for(let l=0;l<=12;l++){let h=l/12,u=Math.sin(h*Math.PI)*.7,d=se(new Pt(.09,6,5),Mi(9075285),{x:-8+16*h,y:3.5-u,z:6.5},null,e);d.castShadow=!1,G.lights.push(d)}function c(l,h,u){let d=new tt;se(new Qe(.06,.06,3,5),be(14540253),{y:1.5},null,d),se(new wn(2.4,.7,10,1,!0),be(u),{y:3.05},null,d),d.position.set(l,0,h),e.add(d)}c(-9.5,8.5,16052454),c(10.2,9.2,3828440),se(new Ae(1.2,.15,1.2),be(15657176),{x:-9.5,y:.45,z:8.5},null,e),We.add(e),Ku.position.set(ot.x,i+3.2,ot.z+3),G.barGroup=e,G.barY=i}function Sv(){let i=new St({map:Wu(),color:12687970}),e=new tt,t=ps.x,n=ps.z,s=ms.x,r=ms.z,a=s-t,o=r-n,c=Math.hypot(a,o),l=Math.atan2(a,o),h=(t+s)/2,u=(n+r)/2;se(new Ae(4.2,.28,c+1.5),i,{x:h,y:.55,z:u},{y:l},e);let d=6;for(let f=0;f<d;f++){let m=f/(d-1),b=t+a*m,g=n+o*m;se(new Qe(.16,.2,2.4,6),be(5913122),{x:b+1.7,y:-.2,z:g+.1},null,e),se(new Qe(.16,.2,2.4,6),be(5913122),{x:b-1.7,y:-.2,z:g},null,e)}se(new Qe(.18,.18,1.6,6),be(4861464),{x:s+1.5,y:1.1,z:r},null,e),se(new Qe(.18,.18,1.6,6),be(4861464),{x:s-1.5,y:1.1,z:r},null,e),We.add(e),G.dockGroup=e,G.dockPos={x:s,z:r,shoreX:t,shoreZ:n,midX:h,midZ:u,ang:l}}function Ev(){let i=[en(Math.PI/2-.7,40),en(Math.PI/2+.7,42),en(-.4,50),en(3.4,48)],e=[13788474,2793640,15778890,15261904],t=[15986660,16242616,15266024,15787720];i.forEach((n,s)=>yv(n.x,n.z,e[s],t[s],-n.angle+Math.PI))}function Tv(){let i=new tt;se(new Ae(.9,.7,.7),be(10119730),{y:0},null,i);for(let e=0;e<4;e++)se(new Pt(.16,6,5),be(15769632),{x:e%2*.22-.1,y:.42,z:(e>>1)*.2-.1},null,i).castShadow=!1;return i.userData.kind="mango",i}function wv(){let i=new tt;return se(new Ae(.8,1.1,.55),be(1710620),{y:.15},null,i),se(new Sr(.22,10),Mi(2236968),{y:.35,z:.28},null,i),se(new Sr(.14,10),Mi(3355448),{y:-.15,z:.28},null,i),se(new Ae(.85,.08,.58),be(12868250),{y:.55},null,i),i.userData.kind="speaker",i}function Av(){let i=new tt;return se(new Pt(.18,8,6),be(7027224),{y:0},null,i).scale.set(1,.9,1),se(new Pt(.045,6,5),be(3810320),{y:.13},null,i),i.userData.kind="coconut",i}function Rv(i=1){let e=new tt;se(new Qe(.16,.26,5.2,6),be(9067058),{y:2.6},null,e);for(let t=0;t<6;t++){let n=se(new wn(1.6,2.4,5,1,!0),be(2067002),{y:5},{x:-.95,y:t/6*Math.PI*2},e);n.castShadow=!0}return e.scale.setScalar(i),e}function Cv(){let i=new tt;se(new Qe(.07,.09,2.4,6),be(6961692),{x:-1.35,y:1.2},null,i),se(new Qe(.07,.09,2.4,6),be(6961692),{x:1.35,y:1.2},null,i);let e=se(new Ae(2.3,.06,.9),be(12868138),{y:.95},null,i);e.scale.set(1,1,1),e.rotation.z=0;let t=se(new Ae(1.6,.05,.85),be(13920824),{y:.72},null,i);return t.rotation.x=.08,i}function Pv(){let i=new tt;return se(new Qe(.28,.3,.42,10),be(5911064),{y:.22},null,i),se(new Qe(.27,.27,.04,10),be(15786176),{y:.44},null,i),se(new Qe(.29,.29,.04,10),be(3809808),{y:.04},null,i),i}function Iv(){let i=Rv(.95),e=_t(js.x,js.z);i.position.set(js.x,e,js.z),i.rotation.y=.6,We.add(i),G.coconutPalm=i;let t=Av();t.position.set(js.x+1.05,e+.18,js.z+.45),We.add(t),G.items.coconut=t,G.coconutHome=t.position.clone();let n=Cv(),s=ds.x+1.8,r=ds.z-.8;n.position.set(s,_t(s,r),r),n.rotation.y=ds.angle+Math.PI/2,We.add(n);let a=Pv(),o=ds.x-1.1,c=ds.z+.7;a.position.set(o,_t(o,c),c),We.add(a)}function Dv(){let i=_t(ri.x,ri.z),e=new tt;e.position.set(ri.x,i,ri.z),se(new Ae(4.2,2.4,3.4),be(14207136),{y:1.2},null,e),se(new wn(3.2,1.6,4),be(9062952),{y:2.8},{y:Math.PI/4},e),We.add(e);let t=Tv();t.position.set(ri.x+2.4,i+.55,ri.z+1.6),We.add(t),G.items.mango=t,G.mangoHome=t.position.clone()}function Lv(){let i=Math.max(_t(ai.x,ai.z),.35),e=wv();e.position.set(ai.x,i+.55,ai.z),We.add(e),G.items.speaker=e,G.speakerHome=e.position.clone()}function Nv(i){let e=gm[i],t=Vu(e),n=new tt,s=new Ue(new fi(2.2,.14,8,24),new Jt({color:16737996,transparent:!0,opacity:.9}));s.rotation.y=e+Math.PI/2,n.add(s);let r=new Ue(new fi(2.2,.28,8,24),new Jt({color:16765802,transparent:!0,opacity:.28}));r.rotation.copy(s.rotation),n.add(r);let a=new Ue(new Ae(.4,.3,.45),Mi(2236968));a.position.set(0,2.2,0),n.add(a),n.position.set(t.x,t.y+1.7,t.z),n.userData={index:i,torus:s,glow:r,collected:!1},n.visible=!1,We.add(n),G.rings.push(n)}function Fv(){G.sunMesh=new Ue(new Pt(18,16,12),Mi(16773552)),We.add(G.sunMesh),G.moonMesh=new Ue(new Pt(12,16,12),Mi(15265528)),We.add(G.moonMesh);let i=new Lt({side:Zt,depthWrite:!1,uniforms:{uZenith:{value:Xi(3843296)},uHorizon:{value:Xi(12118271)},uSunDir:{value:G.sunDir}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position.z = gl_Position.w;
      }
    `,fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir;
      varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = mix(uHorizon, uZenith, smoothstep(-0.05, 0.6, d.y));
        float sun = pow(max(dot(d, normalize(uSunDir)), 0.0), 180.0);
        c += vec3(1.0, 0.92, 0.7) * sun * 0.85;
        float glow = pow(max(dot(d, normalize(uSunDir)), 0.0), 8.0);
        c += vec3(1.0, 0.7, 0.4) * glow * 0.18;
        gl_FragColor = vec4(c, 1.0);
      }
    `});We.add(new Ue(new Pt(1800,24,16),i)),G.skyMat=i}function gs(i={}){let{skin:e=12880474,shirt:t=2793640,shorts:n=4872810,hair:s=1709072,scale:r=1,shirtMap:a=null,openShirt:o=!1,bun:c=!1,spiky:l=!1,beanie:h=null,sunglasses:u=!1,chain:d=!1,shoes:f=null,backpack:m=!1,tam:b=!1,dreads:g=!1}=i,p=new tt,_=be(e),S=a?new St({map:a}):be(t);se(new Ae(.42,.2,.24),be(n),{y:.95},null,p);let v=se(new Ae(.16,.7,.16),be(n),{x:-.12,y:.55},null,p),T=se(new Ae(.16,.7,.16),be(n),{x:.12,y:.55},null,p),w=se(new Ae(.14,.45,.14),_,{x:-.12,y:.18},null,p),x=se(new Ae(.14,.45,.14),_,{x:.12,y:.18},null,p);f&&(se(new Ae(.18,.1,.28),be(f),{x:-.12,y:.05,z:.04},null,p),se(new Ae(.18,.1,.28),be(f),{x:.12,y:.05,z:.04},null,p)),se(new Ae(.5,.7,.28),o?_:S,{y:1.4},null,p),o&&(se(new Ae(.2,.65,.08),S,{x:-.2,y:1.4,z:.12},{y:.15},p),se(new Ae(.2,.65,.08),S,{x:.2,y:1.4,z:.12},{y:-.15},p));let E=se(new Ae(.12,.62,.12),S,{x:-.34,y:1.32},null,p),U=se(new Ae(.12,.62,.12),S,{x:.34,y:1.32},null,p);if(se(new Ae(.1,.14,.1),_,{x:-.34,y:.96},null,p),se(new Ae(.1,.14,.1),_,{x:.34,y:.96},null,p),se(new Pt(.23,10,8),_,{y:1.92},null,p),l)for(let R=0;R<7;R++){let L=R/7*Math.PI*2;se(new wn(.08,.28,4),be(s),{x:Math.cos(L)*.12,y:2.16,z:Math.sin(L)*.12},{x:.25},p)}else se(new Pt(.24,10,8),be(s),{y:2},null,p).scale.set(1,c?.7:.75,1);if(c&&se(new Pt(.12,8,6),be(s),{y:2.16,z:-.12},null,p),h&&(se(new Pt(.25,10,8),be(h),{y:2.1},null,p).scale.set(1,.55,1),se(new Qe(.26,.26,.1,10),be(h),{y:2.02},null,p)),g)for(let R=0;R<9;R++){let L=-.4+R/8*(Math.PI+.8),O=.45+R%3*.12,V=se(new Qe(.035,.028,O,5),be(2759184),{x:Math.cos(L)*.2,y:1.95-O*.35,z:Math.sin(L)*.2-.02},{z:Math.cos(L)*.35,x:.35},p)}if(b&&(se(new Qe(.27,.27,.07,12),be(2001978),{y:2.06},null,p),se(new Qe(.27,.27,.055,12),be(15778816),{y:2.12},null,p),se(new Qe(.27,.27,.055,12),be(12597547),{y:2.17},null,p),se(new Pt(.26,10,8),be(2001978),{y:2.28},null,p).scale.set(1,.55,1)),u&&se(new Ae(.38,.1,.08),Mi(1447446),{y:1.94,z:.18},null,p),d){let R=new Ue(new fi(.16,.018,6,12),Mi(15778816));R.position.y=1.72,R.rotation.x=.5,R.castShadow=!1,p.add(R)}return m&&se(new Ae(.32,.4,.16),be(6965800),{y:1.4,z:-.24},null,p),p.scale.setScalar(r),p.userData.parts={legL:v,legR:T,armL:E,armR:U,calfL:w,calfR:x},p.userData.walk=0,p}function Uv(){let i=new tt,e=be(6280136),t=be(15985360),n=be(13158608),s=be(5913128);se(new Ae(.7,.45,1.35),e,{y:.7,z:-.05},null,i),se(new Ae(.72,.28,.7),t,{y:.72,z:-.15},null,i),se(new Ae(.22,.35,.7),e,{y:.85,z:.55},{x:.15},i),se(new Ae(.55,.12,.7),s,{y:.98,z:-.2},null,i),se(new Qe(.04,.04,.7,6),n,{y:1.15,z:.7},{x:.25},i),se(new Qe(.03,.03,.7,6),n,{y:1.48,z:.62},{z:Math.PI/2},i);let r=()=>{let c=new Ue(new fi(.28,.08,8,16),be(1710618)),l=new Ue(new Qe(.12,.12,.12,8),n);return l.rotation.z=Math.PI/2,c.add(l),c.rotation.y=Math.PI/2,c},a=r();a.position.set(0,.3,.72),i.add(a);let o=r();return o.position.set(0,.3,-.7),i.add(o),se(new Ae(.28,.16,.04),be(15790312),{y:.55,z:-.75},null,i),i.userData.wheels=[a,o],i}function Ov(){let i=new tt,e=be(16054008),t=new St({map:Wu(),color:12886122});se(new Ae(2.2,.7,5.6),e,{y:.15},null,i),se(new Ae(1.6,.5,.9),e,{y:.35,z:2.6},null,i),se(new Ae(1.4,.55,1),e,{y:.25,z:2.9},null,i).scale.set(.85,1,1),se(new Ae(1.9,.08,4.6),t,{y:.52,z:.1},null,i),se(new Ae(1.5,.28,.7),be(3816002),{y:.72,z:.2},null,i),se(new Ae(1.5,.28,.55),be(3816002),{y:.72,z:-1.1},null,i);let n=se(new Ae(1.5,.55,.05),new St({color:11063528,transparent:!0,opacity:.45}),{y:1.05,z:1.15},{x:-.15},i);n.castShadow=!1,se(new Qe(.12,.12,.08,10),be(2763306),{y:.85,z:.85},null,i),se(new Ae(.08,.16,4.8),t,{x:1.05,y:.62},null,i),se(new Ae(.08,.16,4.8),t,{x:-1.05,y:.62},null,i);let s=new tt;return se(new Ae(.45,.7,.4),be(1710618),{y:.5},null,s),se(new Ae(.12,.9,.18),be(1710618),{y:-.2,z:.05},null,s),se(new Ae(.25,.15,.35),be(2763306),{y:-.6,z:.15},null,s),s.position.set(0,.4,-2.7),i.add(s),i}function Bv(){let i=new Jt({color:16121854,transparent:!0,opacity:.5,depthWrite:!1,side:Ut});for(let e=0;e<36;e++){let t=new Ue(new di(.8,1.4),i.clone());t.rotation.x=-Math.PI/2,t.visible=!1,t.renderOrder=2,We.add(t),G.wake.push({mesh:t,life:0,x:0,z:0})}G.wakeI=0,G.wakeAcc=0}var Et=gs({skin:13010516,shirt:14710122,shorts:4873850,hair:1708560,bun:!0,backpack:!0,shoes:3811874});We.add(Et);var D={x:Lu.x,z:Lu.z,y:0,yaw:Math.PI,speed:0,lean:0,vy:0,airY:0},bt=Uv();bt.scale.setScalar(1.2);var eo=en(Math.PI/2-.12,24);bt.position.set(eo.x,_t(eo.x,eo.z)+.02,eo.z);bt.rotation.y=Math.PI+.4;We.add(bt);var hw=bt.position.clone(),uw=bt.rotation.y,dt=Ov();dt.position.set(ms.x+3.2,.2,ms.z+1.5);dt.rotation.y=Math.PI/2+.18;We.add(dt);var Iu=dt.position.clone(),rm=dt.rotation.y;function Ys(i,e,t,n,s){let r=Math.max(_t(e,t),0);i.position.set(e,r,t),i.rotation.y=n,We.add(i);let a={mesh:i,x:e,z:t,y:r,yaw:n,...s};return G.npcs.push(a),a}var am=Ys(gs({skin:11893064,shirt:13916794,shorts:8006218,hair:3809816,bun:!0,scale:1.05,shoes:4860440}),ot.x+2.2,ot.z+7.2,Math.PI,{id:"mama",name:"Mama Lulu",radius:3.6}),bl=Ys(gs({skin:9263672,shirtMap:xm(),shorts:14711354,hair:1708048,spiky:!0,sunglasses:!0,chain:!0,shoes:15918792,scale:1.08}),ot.x-3.4,ot.z+8.4,Math.PI*.15,{id:"bula",name:"DJ Bula-Bula",radius:3.6}),om=Ys(gs({skin:12880474,shirtMap:bm(),openShirt:!0,shorts:15755936,hair:1708048,beanie:15747722,sunglasses:!0,chain:!0,shoes:16053488,scale:1.08}),ot.x-5.8,ot.z+7.6,-.2,{id:"rico",name:"DJ Rico Flex",radius:3.6});Ys(gs({skin:13213812,shirt:15261904,shorts:5925450,hair:12566463,shoes:3811864}),ps.x-3,ps.z-2,.4,{id:"fish",name:"Uncle Pico",radius:3.2,idle:"The fish are on island time too. Come back later, or never. Both work."});Ys(gs({skin:14727316,shirt:16045800,shorts:6982314,hair:6961688,bun:!0,shoes:16052456}),en(Math.PI/2-.35,14).x,en(Math.PI/2-.35,14).z,2.2,{id:"tourist",name:"Mira",radius:3.2,idle:"I came for a week. That was four months ago. Tell my office I sank, nicely."});Ys(gs({skin:11172424,shirt:3837034,shorts:3815994,hair:1710618,shoes:2236962}),en(Math.PI/2+.55,18).x,en(Math.PI/2+.55,18).z,-1.2,{id:"local",name:"Koji",radius:3.2,idle:"If you see a mint scooter, it is probably yours now. Island rules. Also my cousin's. Island rules are messy."});var cm=Ys(gs({skin:7027234,shirt:15259304,shorts:3103814,hair:2759184,tam:!0,dreads:!0,shoes:3811864,scale:1.06}),ds.x,ds.z,Math.PI,{id:"greate",name:"Greate",radius:3.6});bl.mesh.userData.parts.armR.rotation.x=-2.2;bl.mesh.userData.parts.armR.position.y=1.55;function vm(){Q.confettiT=5;let i=new N(ot.x,G.barY+3,ot.z+6);for(let e of G.confetti)e.mesh.position.copy(i),e.v.set((Math.random()-.5)*8,6+Math.random()*7,(Math.random()-.5)*8),e.life=2+Math.random()*3,e.mesh.visible=!0,e.mesh.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3)}var $a=null,Gr=[];function Yu(){return $a||($a=new(window.AudioContext||window.webkitAudioContext)),$a.state==="suspended"&&$a.resume(),$a}function kv(){if(Q.party=!1,Gr[1]&&clearInterval(Gr[1]),Gr[0])try{Gr[0].disconnect()}catch{}Gr=[]}function Mm(){let i=Yu();kv(),Q.party=!0;let e=i.createGain();e.gain.value=.08,e.connect(i.destination);let t=60/108,n=i.currentTime+.05;function s(h){let u=i.createOscillator(),d=i.createGain();u.type="sine",u.frequency.setValueAtTime(140,h),u.frequency.exponentialRampToValueAtTime(42,h+.12),d.gain.setValueAtTime(1,h),d.gain.exponentialRampToValueAtTime(.001,h+.22),u.connect(d).connect(e),u.start(h),u.stop(h+.23)}function r(h){let u=i.createOscillator(),d=i.createGain();u.type="triangle",u.frequency.value=220,d.gain.setValueAtTime(.3,h),d.gain.exponentialRampToValueAtTime(.001,h+.12),u.connect(d).connect(e),u.start(h),u.stop(h+.13);let f=i.createBuffer(1,2200,i.sampleRate),m=f.getChannelData(0);for(let p=0;p<m.length;p++)m[p]=Math.random()*2-1;let b=i.createBufferSource();b.buffer=f;let g=i.createGain();g.gain.setValueAtTime(.22,h),g.gain.exponentialRampToValueAtTime(.001,h+.1),b.connect(g).connect(e),b.start(h),b.stop(h+.1)}function a(h,u){let d=i.createOscillator(),f=i.createGain();d.type="triangle",d.frequency.value=u,f.gain.setValueAtTime(.18,h),f.gain.exponentialRampToValueAtTime(.001,h+.28),d.connect(f).connect(e),d.start(h),d.stop(h+.3)}let o=[0,3,5,7,10,12],c=196;function l(){if(!Q.party)return;let h=i.currentTime,u=Math.floor((h-n)/t);for(let d=u;d<u+16;d++){let f=n+d*t;if(f<h-.01)continue;let m=d%4;(m===0||m===2)&&s(f),(m===1||m===3)&&r(f),d%2===0&&a(f,c*Math.pow(2,o[d/2%o.length]/12))}}l(),Gr=[e,setInterval(l,1400)]}var Xs=[{h:0,zenith:329498,horizon:791088,sun:820,amb:.16,sunI:0,hemi:.2,exp:.78,fog:659488},{h:5,zenith:1710656,horizon:16739179,sun:16746598,amb:.2,sunI:.15,hemi:.25,exp:.8,fog:4862048},{h:6.4,zenith:6000585,horizon:16757642,sun:16765088,amb:.4,sunI:.6,hemi:.45,exp:.95,fog:16760992},{h:8,zenith:3843296,horizon:13166847,sun:16773840,amb:.65,sunI:1.15,hemi:.7,exp:1.05,fog:9426159},{h:12,zenith:3121120,horizon:12119295,sun:16775392,amb:.75,sunI:1.4,hemi:.8,exp:1.08,fog:10148082},{h:16.8,zenith:15628874,horizon:16756848,sun:16760960,amb:.65,sunI:1.15,hemi:.7,exp:1.05,fog:16756864},{h:18.3,zenith:12864110,horizon:16747099,sun:16751216,amb:.5,sunI:.75,hemi:.5,exp:1,fog:12872320},{h:19.6,zenith:1709376,horizon:3809376,sun:8930406,amb:.22,sunI:.12,hemi:.28,exp:.82,fog:1710136},{h:24,zenith:329498,horizon:791088,sun:820,amb:.16,sunI:0,hemi:.2,exp:.78,fog:659488}];function zv(i){let e=(i%24+24)%24,t=Xs[0],n=Xs[1];for(let a=0;a<Xs.length-1;a++)if(e>=Xs[a].h&&e<=Xs[a+1].h){t=Xs[a],n=Xs[a+1];break}let s=(e-t.h)/Math.max(1e-4,n.h-t.h),r=(a,o)=>new Me(a).lerp(new Me(o),s);return{zenith:r(t.zenith,n.zenith),horizon:r(t.horizon,n.horizon),sun:r(t.sun,n.sun),amb:t.amb+(n.amb-t.amb)*s,sunI:t.sunI+(n.sunI-t.sunI)*s,hemi:t.hemi+(n.hemi-t.hemi)*s,exp:t.exp+(n.exp-t.exp)*s,fog:r(t.fog,n.fog)}}function Gv(i){let e=(i-6)/12*Math.PI;return new N(-Math.cos(e),Math.sin(e),.28).normalize()}function fl(i){let e=(i%24+24)%24;return e<5.5||e>19.8?1:e<7?1-(e-5.5)/1.5:e>18.2?(e-18.2)/1.6:0}function Ju(i){let e=zv(i),t=Gv(i);G.sunDir.copy(t),G.skyMat.uniforms.uZenith.value.copy(e.zenith),G.skyMat.uniforms.uHorizon.value.copy(e.horizon),G.skyMat.uniforms.uSunDir.value.copy(t),We.fog.color.copy(e.fog),We.background.copy(e.horizon),dl.color.copy(e.horizon),dl.groundColor.set(4024882).multiplyScalar(.5+.5*(1-fl(i))),dl.intensity=e.hemi,zt.color.copy(e.sun),zt.intensity=e.sunI,zt.position.copy(t).multiplyScalar(420),zt.target.position.set(0,0,0),Fu.intensity=fl(i)*.35,Fu.position.copy(t).multiplyScalar(-420),tn.toneMappingExposure=e.exp,Yp(G,t,i),G.sunMesh.position.copy(t).multiplyScalar(700),G.sunMesh.visible=t.y>-.05,G.moonMesh.position.copy(t).multiplyScalar(-700),G.moonMesh.visible=t.y<.2;let n=fl(i);G.stars&&(G.stars.material.opacity=n);for(let s of G.lights)s.material.color.set(n>.25?16769162:9075285);for(let s of G.windows)s.material.color.set(n>.3?16764006:6982314);Ku.intensity=n*7.5}function Hv(i){let e=(i%24+24)%24,t=Math.floor(e),n=Math.floor((e-t)*60),s=t<12,r=t%12;return r===0&&(r=12),(fl(i)>.55?"\u263E":"\u2600")+" "+r+":"+String(n).padStart(2,"0")+" "+(s?"AM":"PM")}function un(i){let e=Be("toast");e.textContent=i,e.classList.add("show"),Q.toastT=2.6}function Sm(i,e){let t=Cn[0],n=1/0;for(let s of Cn){let r=(s.x-i)**2+(s.z-e)**2;r<n&&(n=r,t=s)}return t}function Vv(i,e){if(Math.hypot(i-ot.x,e-ot.z)<28)return"The Salty Prawn";if(Math.hypot(i-ps.x,e-ps.z)<18||Math.hypot(i-ms.x,e-ms.z)<16)return"Salty Prawn Dock";if(Math.hypot(i-ai.x,e-ai.z)<28)return"Wavecrest Sandbar";if(Math.hypot(i-Ki.x,e-Ki.z)<40&&_t(i,e)>8)return"Mango Hill";if(!gl(i,e))return Math.hypot(i,e)-Ks(Math.atan2(e,i))<70?"The Shallows":"Bluewater Reach";let t=Math.atan2(e,i);return Ks(t)-Math.hypot(i,e)<28?Math.abs(t-Math.PI/2)<.7?"Sunset Strand":"Coast Road":"Coconut Key"}function qr(){return Re.video.rings.filter(Boolean).length}function Wv(){if(Re.mango.stage==="accepted")return{label:"Island Drift",title:"Fresh mangoes",body:"Pick up the crate at the farm on Mango Hill."};if(Re.mango.stage==="carrying")return{label:"Island Drift",title:"Fresh mangoes",body:"Bring the mango crate back to Mama Lulu at The Salty Prawn."};if(Re.speaker.stage==="accepted")return{label:"Island Drift",title:"Lost frequencies",body:"Find DJ Bula-Bula's speaker on Wavecrest Sandbar. You'll need the boat."};if(Re.speaker.stage==="carrying")return{label:"Island Drift",title:"Lost frequencies",body:"Bring the speaker back to DJ Bula-Bula at The Salty Prawn."};if(Re.video.stage==="accepted"){let i=qr();return{label:"Island Drift",title:"Music video",body:i<3?"Ride the scooter through the glowing camera rings on the coast road. ("+i+"/3)":"Head back to DJ Rico Flex at The Salty Prawn."}}return Re.coconut.stage==="accepted"?{label:"Island Drift",title:"A coconut for Greate",body:"Pick up the fallen coconut under the palm on Sunset Strand."}:Re.coconut.stage==="carrying"?{label:"Island Drift",title:"A coconut for Greate",body:"Bring the coconut back to Greate on Sunset Strand."}:Re.mango.stage!=="done"?{label:"Island Drift",title:"On island time",body:"Wander Coconut Key, or talk to someone at The Salty Prawn."}:Re.speaker.stage!=="done"?{label:"Island Drift",title:"On island time",body:"DJ Bula-Bula looks like he could use a favor."}:Re.video.stage!=="done"?{label:"Island Drift",title:"On island time",body:"DJ Rico Flex is already framing a shot. Maybe say hi."}:Re.coconut.stage!=="done"?{label:"Island Drift",title:"On island time",body:"Greate is lounging on Sunset Strand if you want a chat."}:{label:"Island Drift",title:"On island time",body:"That's the whole brief. The island is still open. Go get a sunset."}}function qv(i){return i?/Park scooter|Leave boat/.test(i)?"Get off":/Ride scooter|Board boat/.test(i)?"Ride":/^Pick up/.test(i)?"Pick up":/^Drop/.test(i)?"Drop":/^Talk/.test(i)?"Talk":/Deliver|Return/.test(i)?"Deliver":i:"Action"}function Xv(){let i=Be("btn-action"),e=Be("btn-action-lab"),t=Be("btn-boost-lab");if(!i)return;let n=Tm();n.length?(i.disabled=!1,e&&(e.textContent=qv(n[0].label))):(i.disabled=!0,e&&(e.textContent="Action")),t&&(t.textContent=Q.mode==="foot"?"Jump":"Boost")}function jv(){let i=Wv();Be("qlabel").textContent=i.label,Be("qtitle").textContent=i.title,Be("qbody").textContent=i.body,Be("cash").textContent="$ "+Q.cash.toLocaleString(),Be("clock").textContent=Hv(Q.hours),Be("place-name").textContent=Vv(D.x,D.z),Xv()}function Kv(i){let e=Be("prompt");if(!i||!i.length){e.classList.remove("show"),e.innerHTML="";return}e.innerHTML=i.map(t=>'<div class="row"><kbd>'+t.key+"</kbd> "+t.label+"</div>").join(""),e.classList.add("show")}function In(i,e,t,n){return(i-t)**2+(e-n)**2}function pl(i){Q.carrying=i,i==="mango"&&(Re.mango.stage="carrying"),i==="speaker"&&(Re.speaker.stage="carrying"),i==="coconut"&&(Re.coconut.stage="carrying")}function Yv(){let i=Q.carrying;if(!i)return;let e=G.items[i],t,n;Q.mode==="scooter"?(t=bt,n=new N(.55,1.15,-.1)):Q.mode==="boat"?(t=dt,n=new N(.6,1,.2)):(t=Et,n=new N(.35,1.15,.15)),t.updateWorldMatrix(!0,!1),qi.copy(n).applyMatrix4(t.matrixWorld),e.position.copy(qi),e.rotation.y=t.rotation.y}function Em(i){let e=Q.carrying;if(!e)return;let t=G.items[e],n=i&&i.x!=null?i.x:D.x,s=i&&i.z!=null?i.z:D.z,r=Math.max(_t(n,s),mm(n,s,G.waterTime.value)+.15);t.position.set(n,r+.5,s),Q.carrying=null,e==="mango"&&Re.mango.stage==="carrying"&&(Re.mango.stage="accepted"),e==="speaker"&&Re.speaker.stage==="carrying"&&(Re.speaker.stage="accepted"),e==="coconut"&&Re.coconut.stage==="carrying"&&(Re.coconut.stage="accepted"),un("Left it here. It'll keep.")}function ml(i){Q.cash+=i,un("+$"+i+" island cash")}function Jv(){let i=qr();return i>=3?"Did you SEE that tracking shot? I mean, I haven't, but I can feel it. Eighty island bucks. Don't start a label with it. That's my thing.":i===0?"Zero rings, zero footage, maximum potential. That's a compliment. Want to pause? I can wait. I have a hat for that.":"That's "+i+" of 3 rings in the can. Keep riding. Or take a coconut break. Either way, I stay in frame."}var Zu={mama:{idle:{line:"Morning, sweetheart -- or whenever it is. I'm Mama Lulu, and my mango situation is tragic. There's a fresh crate up on Mango Hill. Bring it down and I'll slip you fifty. No rush. Fruit understands.",start:()=>{Re.mango.stage="accepted",un("Mango Hill is up the middle.")}},accepted:{line:"Still no mangoes, hon. They're on the hill, not gonna walk down themselves. Or take a break -- I'll be right here, judging the fruit from afar.",start:()=>{Re.mango.stage="idle",un("Job parked. Island time.")}},carrying:{line:"Now THAT is a mango. Sweet as gossip. Here's $50, hon. Spend it on something cold, or don't. I'm not your accountant.",start:()=>{Re.mango.stage="done",Q.carrying=null,G.items.mango.visible=!1,ml(50)}},done:{line:"You saved brunch. The island owes you a nap."}},bula:{idle:{line:"Yo yo YO -- DJ Bula-Bula, internationally recognized in at least this cove. My speaker took a vacation without me. Sandbar. Offshore. Very rude. You got a boat? I believe in you. I also believed in that speaker.",start:()=>{Re.speaker.stage="accepted",un("Wavecrest Sandbar is offshore. Take the boat.")}},accepted:{line:"Still missing those bass frequencies. No pressure, no clock, just a party politely waiting. Want to pause the quest? I'll improvise with two coconuts. It will be bad.",start:()=>{Re.speaker.stage="idle",un("Quest on pause. The party can wait.")}},carrying:{line:"THE FREQUENCIES ARE BACK, PEOPLE. I would hug you but these sunglasses might poke an eye. $120. Don't spend it on a rival DJ. There are no rival DJs. (Rico, if you're listening, that was a joke. Mostly.)",start:()=>{Re.speaker.stage="done",Q.carrying=null,G.items.speaker.visible=!1,ml(120),vm(),Mm(),un("The Salty Prawn has a beat now.")}},done:{line:"This beat? I invented it. Pretty sure. History is messy. Rico can remix it if he asks nicely, which he won't."}},rico:{idle:{line:"Whoa, whoa, WHOA -- hold the frame. DJ Rico Flex. You've heard the remix. Everyone has. I need a music video, and the scooter is the cinematographer. Hit those three glowing camera rings on the coast road. No clock. Art takes time. Then come back and try not to cry when you see the footage.",start:()=>{Re.video.stage="accepted",Re.video.rings=[!1,!1,!1];for(let i of G.rings)i.visible=!0,i.userData.collected=!1,i.userData.torus.material.color.set(16737996);un("Three camera rings are waiting on the coast road.")}},accepted:{line:Jv,start:()=>{Re.video.stage="idle";for(let i of G.rings)i.visible=!1;un("Rings on pause. The cut can wait.")}},done:{line:"The cut is in the can. I'm already famous-er. Tell Bula-Bula the speaker can be in the B-roll if it behaves."}},greate:{idle:{line:"Easy now. People call me Greate \u2014 like create, with a G. I am not a typo, I am a vibe. You look like someone who could fetch that coconut under the palm just up the strand. I'll make it worth thirty island bucks. No rush. Coconuts understand.",start:()=>{Re.coconut.stage="accepted",G.items.coconut&&(G.items.coconut.visible=!0),un("A coconut is waiting under the palm on Sunset Strand.")}},accepted:{line:"Still coconut-less, but spiritually hydrated. It's right there under the palm, pretending to be shy. Or we can keep talking about the weather, which is excellent, always.",start:()=>{Re.coconut.stage="idle",un("Job parked. The coconut can wait.")}},carrying:{line:"Now that is a coconut with character. Here's thirty. Don't spend it all on scooters. Or do. I'm not the boss of joy.",start:()=>{Re.coconut.stage="done",Q.carrying=null,G.items.coconut&&(G.items.coconut.visible=!1),ml(30)}},done:{line:"You ever notice the ocean doesn't hurry, and it still gets everywhere? That's the whole lesson. Also, excellent coconut work."}}};function Zv(i){return i.id==="mama"?Re.mango.stage:i.id==="bula"?Re.speaker.stage:i.id==="rico"?Re.video.stage:i.id==="greate"?Re.coconut.stage:"idle"}function $v(i){let e=Zu[i.id];if(!e)return;let t=Zv(i);i.id==="mama"&&t==="carrying"&&Q.carrying!=="mango"&&(t="accepted"),i.id==="bula"&&t==="carrying"&&Q.carrying!=="speaker"&&(t="accepted"),i.id==="greate"&&t==="carrying"&&Q.carrying!=="coconut"&&(t="accepted");let n=e[t]||e.done||e.idle,s=typeof n.line=="function"?n.line():n.line;if(i.id==="rico"&&Re.video.stage==="accepted"&&qr()>=3){Re.video.stage="done",ml(80);for(let r of G.rings)r.visible=!1;return un("Rico already sees the Oscar. Or something adjacent."),s}return n.start&&n.start(),s}var Wi=null;function Ml(){if(Re.mango.stage==="accepted"&&!Q.carrying){let t=G.items.mango;if(t.visible&&In(D.x,D.z,t.position.x,t.position.z)<3.5*3.5){pl("mango"),un("Mango crate acquired. It smells like a good decision.");return}}if(Re.speaker.stage==="accepted"&&!Q.carrying){let t=G.items.speaker;if(t.visible&&In(D.x,D.z,t.position.x,t.position.z)<3.8*3.8){pl("speaker"),un("Still smells faintly of coconut and bass.");return}}if(Re.coconut.stage==="accepted"&&!Q.carrying){let t=G.items.coconut;if(t&&t.visible&&In(D.x,D.z,t.position.x,t.position.z)<3.4*3.4){pl("coconut"),un("Coconut acquired. It has a very relaxed energy.");return}}let i=null,e=16;for(let t of G.npcs){let n=In(D.x,D.z,t.x,t.z);n<t.radius*t.radius&&n<e&&(i=t,e=n)}if(i&&Zu[i.id]){let t=$v(i);t&&(Wi={npc:i,line:t,t:8});return}if(Q.carrying&&Q.mode==="foot"){Em();return}if(Q.mode==="foot"){if(In(D.x,D.z,bt.position.x,bt.position.z)<4.2*4.2){Ou("scooter");return}if(In(D.x,D.z,dt.position.x,dt.position.z)<6.5*6.5){Ou("boat");return}}else _l()}function Tm(){let i=[];if(Q.mode==="scooter")i.push({key:"E",label:"Park scooter"});else if(Q.mode==="boat")i.push({key:"E",label:"Leave boat"});else if(Re.mango.stage==="accepted"&&!Q.carrying&&G.items.mango.visible&&In(D.x,D.z,G.items.mango.position.x,G.items.mango.position.z)<3.5*3.5)i.push({key:"E",label:"Pick up mango crate"});else if(Re.speaker.stage==="accepted"&&!Q.carrying&&G.items.speaker.visible&&In(D.x,D.z,G.items.speaker.position.x,G.items.speaker.position.z)<3.8*3.8)i.push({key:"E",label:"Pick up speaker"});else if(Re.coconut.stage==="accepted"&&!Q.carrying&&G.items.coconut&&G.items.coconut.visible&&In(D.x,D.z,G.items.coconut.position.x,G.items.coconut.position.z)<3.4*3.4)i.push({key:"E",label:"Pick up coconut"});else{let e=null,t=16;for(let n of G.npcs){let s=In(D.x,D.z,n.x,n.z);s<n.radius*n.radius&&s<t&&(e=n,t=s)}e?e.id==="mama"&&Re.mango.stage==="carrying"&&Q.carrying==="mango"?i.push({key:"E",label:"Deliver mangoes"}):e.id==="bula"&&Re.speaker.stage==="carrying"&&Q.carrying==="speaker"?i.push({key:"E",label:"Return the speaker"}):e.id==="rico"&&Re.video.stage==="accepted"&&qr()>=3?i.push({key:"E",label:"Deliver the footage"}):e.id==="greate"&&Re.coconut.stage==="carrying"&&Q.carrying==="coconut"?i.push({key:"E",label:"Deliver coconut"}):i.push({key:"E",label:"Talk to "+e.name}):In(D.x,D.z,bt.position.x,bt.position.z)<4.2*4.2?i.push({key:"E",label:"Ride scooter"}):In(D.x,D.z,dt.position.x,dt.position.z)<6.5*6.5?i.push({key:"E",label:"Board boat"}):Q.carrying&&i.push({key:"E",label:Q.carrying==="mango"?"Drop crate":Q.carrying==="speaker"?"Drop speaker":"Drop coconut"})}return i}function Uu(){Be("bubble").classList.remove("show")}function lm(i,e,t){qi.set(0,2.35,0),i.updateWorldMatrix(!0,!1),qi.applyMatrix4(i.matrixWorld),qi.project(ji);let n=Be("bubble");if(qi.z>1){Uu();return}n.style.left=(qi.x*.5+.5)*innerWidth+"px",n.style.top=(-qi.y*.5+.5)*innerHeight-12+"px",n.querySelector(".who").textContent=e,n.querySelector(".line").textContent=t,n.classList.add("show")}function Qv(i){if(Wi&&Wi.t>0){Wi.t-=i,lm(Wi.npc.mesh,Wi.npc.name,Wi.line),Wi.t<=0&&(Wi=null,Uu());return}let e=null,t=11;for(let n of G.npcs){if(!n.idle)continue;let s=In(D.x,D.z,n.x,n.z);s<n.radius*n.radius&&s<t&&(e=n,t=s)}e?lm(e.mesh,e.name,e.idle):Uu()}function Ou(i){Q.mode=i,i==="scooter"?(D.x=bt.position.x,D.z=bt.position.z,D.yaw=bt.rotation.y,D.speed=0,oi=Math.max(oi,10)):(D.x=dt.position.x,D.z=dt.position.z,D.yaw=dt.rotation.y,D.speed=0,oi=Math.max(oi,14))}function _l(){if(Q.mode==="scooter"){let i=bt.position.x+Math.cos(bt.rotation.y)*1.4,e=bt.position.z-Math.sin(bt.rotation.y)*1.4;if(gl(i,e))D.x=i,D.z=e;else{let t=Sm(bt.position.x,bt.position.z);D.x=t.x,D.z=t.z}D.speed=0}else if(Q.mode==="boat"){let i=[{x:G.dockPos.shoreX,z:G.dockPos.shoreZ},{x:G.dockPos.midX,z:G.dockPos.midZ}],e=null,t=22;for(let n=0;n<16;n++){let s=n/16*Math.PI*2,r=dt.position.x+Math.cos(s)*6,a=dt.position.z+Math.sin(s)*6;if(gl(r,a)||_t(r,a)>.2){let o=Math.hypot(r-dt.position.x,a-dt.position.z);o<t&&(t=o,e={x:r,z:a})}}for(let n of i){let s=Math.hypot(n.x-dt.position.x,n.z-dt.position.z);s<24&&s<t+4&&(e=n,t=s)}e?(D.x=e.x,D.z=e.z):(D.x=dt.position.x+3,D.z=dt.position.z),D.speed=0}Q.mode="foot",oi=9}function eM(){if(Q.mode==="boat")D.x=Iu.x,D.z=Iu.z,D.yaw=rm,D.speed=0,dt.position.copy(Iu),dt.rotation.y=rm;else{let i=Sm(D.x,D.z),e=In(D.x,D.z,G.dockPos.shoreX,G.dockPos.shoreZ);e<(i.x-D.x)**2+(i.z-D.z)**2&&e<6400?(D.x=G.dockPos.shoreX,D.z=G.dockPos.shoreZ):(D.x=i.x,D.z=i.z),D.y=_t(D.x,D.z),D.speed=0,D.airY=0,D.vy=0,Q.mode==="scooter"&&bt.position.set(D.x,D.y,D.z)}un("Back on solid island time.")}function $u(){let i=Math.hypot(D.x,D.z);return i>Pu?(D.x*=Pu/i,D.z*=Pu/i,!0):!1}function tM(i){let e=ju(),t=!gl(D.x,D.z)&&_t(D.x,D.z)<.08,n=!t&&av(),s=t?Zy:n?Jy:Yy;if(Hr.Space&&(Wr=!0),!t&&D.airY<=0&&Wr&&(D.vy=7.4,D.airY=.02),Wr=!1,(D.airY>0||D.vy!==0)&&(D.vy-=22*i,D.airY+=D.vy*i,D.airY<=0&&(D.airY=0,D.vy=0)),e.mag){let r=-Math.sin(Sn)*-e.z+Math.cos(Sn)*e.x,a=-Math.cos(Sn)*-e.z+-Math.sin(Sn)*e.x,o=D.airY>.05?.85:1;D.x+=r*s*o*i,D.z+=a*s*o*i,D.yaw=Math.atan2(-r,-a),Et.userData.walk+=i*(t?4:8)*(n?1.4:1),D.footSpeed=s*e.mag}else Et.userData.walk*=Math.max(0,1-i*6),D.footSpeed=0;$u()}function nM(i){let e=ju(),t=-e.z,n=_m()?1.45:1;if(t>0?D.speed+=em*n*t*i:t<0?D.speed+=em*t*.7*i:D.speed*=Math.pow(.12,i),D.speed=At.clamp(D.speed,-8,$y*(n>1?1.12:1)),Math.abs(e.x)){let a=Qy*(.35+.65*Math.min(1,Math.abs(D.speed)/10));D.yaw-=e.x*a*Math.sign(D.speed||1)*i}D.lean=At.damp(D.lean,-e.x*Math.min(1,Math.abs(D.speed)/12)*.35,6,i);let s=D.x-Math.sin(D.yaw)*D.speed*i,r=D.z-Math.cos(D.yaw)*D.speed*i;if(_t(s,r)<.15?D.speed*=Math.pow(.04,i):(D.x=s,D.z=r),$u()&&(D.speed*=.5),Re.video.stage==="accepted")for(let a of G.rings)a.userData.collected||Math.hypot(D.x-a.position.x,D.z-a.position.z)<2.6&&(a.userData.collected=!0,Re.video.rings[a.userData.index]=!0,a.userData.torus.material.color.set(8191898),a.userData.glow.material.color.set(13631450),un("Camera ring "+qr()+" of 3. Rico is already nodding."))}function iM(i){let e=ju(),t=-e.z,n=_m()?1.45:1;if(t>0?D.speed+=tm*n*t*i:t<0?D.speed+=tm*t*.6*i:D.speed*=Math.pow(.25,i),D.speed=At.clamp(D.speed,-10,ev*(n>1?1.12:1)),Math.abs(e.x)){let a=tv*(.3+.7*Math.min(1,Math.abs(D.speed)/10));D.yaw-=e.x*a*Math.sign(D.speed||1)*i}let s=D.x-Math.sin(D.yaw)*D.speed*i,r=D.z-Math.cos(D.yaw)*D.speed*i;if(_t(s,r)>.35?D.speed*=Math.pow(.05,i):(D.x=s,D.z=r),$u()&&(D.speed*=.4),G.wakeAcc+=i,Math.abs(D.speed)>3&&G.wakeAcc>.05){G.wakeAcc=0;let a=G.wake[G.wakeI%G.wake.length];G.wakeI++,a.life=1,a.x=D.x+Math.sin(D.yaw)*2.4,a.z=D.z+Math.cos(D.yaw)*2.4,a.mesh.visible=!0,a.mesh.position.set(a.x,.08,a.z),a.mesh.rotation.z=D.yaw,a.mesh.scale.set(1,1,1)}}function sM(i){for(let e of G.wake){if(e.life<=0){e.mesh.visible=!1;continue}e.life-=i*.55,e.mesh.material.opacity=Math.max(0,e.life*.45),e.mesh.scale.set(1+(1-e.life)*1.8,1+(1-e.life)*2.2,1),e.life<=0&&(e.mesh.visible=!1)}}function Du(i,e){let t=i.userData.parts;t&&(e?(t.legL.rotation.x=-1.15,t.legR.rotation.x=-1.15,t.calfL.rotation.x=.7,t.calfR.rotation.x=.7,t.armL.rotation.x=-.85,t.armR.rotation.x=-.85):(t.calfL.rotation.x=0,t.calfR.rotation.x=0))}function rM(i,e){let t=i.userData.parts;if(!t)return;let n=Math.sin(e)*.55;t.legL.rotation.x=n,t.legR.rotation.x=-n,t.armL.rotation.x=-n*.7,t.armR.rotation.x=n*.7}function wm(i){let e=_t(D.x,D.z),t=mm(D.x,D.z,i);if(Q.mode==="foot"){let n=e>.05?e:Math.max(t,0)-.15;D.y=n+(D.airY||0),Et.visible=!0,Et.position.set(D.x,D.y,D.z),Et.rotation.set(0,D.yaw,0),Du(Et,!1),rM(Et,D.airY>.05?0:Et.userData.walk);let s=D.airY>.05?0:Math.abs(Math.sin(Et.userData.walk*2))*.04;Et.position.y=D.y+s,bt.rotation.z=0}else if(Q.mode==="scooter"){D.y=e,bt.position.set(D.x,D.y,D.z),bt.rotation.y=D.yaw,bt.rotation.z=D.lean,Et.visible=!0,Et.position.copy(bt.position),Et.position.y+=.7,Et.rotation.copy(bt.rotation),Du(Et,!0);for(let n of bt.userData.wheels)n.rotation.x+=D.speed*.04}else D.y=.15+t+Math.sin(i*1.6)*.06,dt.position.set(D.x,D.y,D.z),dt.rotation.y=D.yaw,dt.rotation.z=Math.sin(i*1.3)*.03,dt.rotation.x=Math.sin(i*1.1)*.03+At.clamp(D.speed*.002,-.05,.08),Et.visible=!0,Et.position.set(D.x,D.y+.55,D.z),Et.rotation.set(0,D.yaw,0),Du(Et,!0);Yv()}function aM(i,e,t){if(e){let f=.18+Math.sin(t*.2)*.1,m=new N(ot.x,G.barY+2.6,ot.z+3);ji.position.set(ot.x+Math.sin(f)*10,7.2,ot.z+32+Math.cos(t*.15)*2),ji.lookAt(m);return}let n=Q.mode==="boat"?Math.max(oi,13):Q.mode==="scooter"?Math.max(oi,10):oi,s=Q.mode==="boat"?5.5:3.2,r=Q.mode==="boat"?1.4:1.5;Wt.KeyQ&&(Sn+=1.4*i),Wt.KeyC&&(Sn-=1.4*i);let a=Oe.looking||Pn.looking||!!document.pointerLockElement||Wt.KeyQ||Wt.KeyC;Q.mode!=="foot"&&!a&&(Sn=uv(Sn,D.yaw,1-Math.pow(.08,i)));let o=fs,c=Math.sin(Sn)*Math.cos(o)*n,l=Math.sin(o)*n+s*.15,h=Math.cos(Sn)*Math.cos(o)*n,u=dv.set(D.x+c,D.y+s+l*.15,D.z+h),d=_t(u.x,u.z);u.y<d+1.5&&(u.y=d+1.5),ji.position.lerp(u,1-Math.pow(8e-4,i)),ji.lookAt(qi.set(D.x,D.y+r,D.z))}var Bu=Be("minimap"),oM=Bu.getContext("2d"),hm=420;function cM(){let i=oM,e=Bu.width,t=Bu.height;i.clearRect(0,0,e,t);let n=i.createRadialGradient(e/2,t/2,20,e/2,t/2,e*.7);n.addColorStop(0,"#3fe0d0"),n.addColorStop(.45,"#1aa7c4"),n.addColorStop(1,"#0b4c96"),i.fillStyle=n,i.fillRect(0,0,e,t);let s=l=>(l/hm*.5+.5)*e,r=l=>(l/hm*.5+.5)*t;i.beginPath();for(let l=0;l<=96;l++){let h=l/96*Math.PI*2,u=Ks(h),d=s(Math.cos(h)*u),f=r(Math.sin(h)*u);l===0?i.moveTo(d,f):i.lineTo(d,f)}i.closePath(),i.fillStyle="#3da346",i.fill(),i.strokeStyle="#f3ecd0",i.lineWidth=4,i.stroke(),i.fillStyle="#efe4b8",i.beginPath(),i.arc(s(ai.x),r(ai.z),5,0,Math.PI*2),i.fill(),i.beginPath();for(let l=0;l<=Cn.length;l++){let h=Cn[l%Cn.length];l===0?i.moveTo(s(h.x),r(h.z)):i.lineTo(s(h.x),r(h.z))}i.strokeStyle="#5a5a60",i.lineWidth=2.2,i.stroke(),i.fillStyle="#c45a2a",i.fillRect(s(ot.x)-3,r(ot.z)-3,6,6),i.strokeStyle="#8a5a32",i.lineWidth=2,i.beginPath(),i.moveTo(s(ps.x),r(ps.z)),i.lineTo(s(ms.x),r(ms.z)),i.stroke();for(let l of G.npcs)Zu[l.id]&&(i.fillStyle=l.id==="greate"?"#7dffb0":"#f4f1e4",i.beginPath(),i.arc(s(l.x),r(l.z),3.2,0,Math.PI*2),i.fill(),i.strokeStyle="#152028",i.lineWidth=1,i.stroke());let a=[];if(Re.mango.stage==="accepted"&&Q.carrying!=="mango"&&a.push(G.items.mango.position),Re.mango.stage==="carrying"&&a.push({x:am.x,z:am.z}),Re.speaker.stage==="accepted"&&Q.carrying!=="speaker"&&a.push(G.items.speaker.position),Re.speaker.stage==="carrying"&&a.push({x:bl.x,z:bl.z}),Re.video.stage==="accepted")if(qr()<3)for(let l of G.rings)l.userData.collected||a.push(l.position);else a.push({x:om.x,z:om.z});Re.coconut.stage==="accepted"&&Q.carrying!=="coconut"&&G.items.coconut&&a.push(G.items.coconut.position),Re.coconut.stage==="carrying"&&a.push({x:cm.x,z:cm.z});for(let l of a)i.fillStyle="#f5c400",i.beginPath(),i.arc(s(l.x),r(l.z),4,0,Math.PI*2),i.fill(),i.fillStyle="#1a1408",i.font="bold 8px sans-serif",i.textAlign="center",i.fillText("!",s(l.x),r(l.z)+3);let o=s(D.x),c=r(D.z);i.save(),i.translate(o,c),i.rotate(-D.yaw),i.fillStyle="#fff",i.strokeStyle="#152028",i.lineWidth=1,i.beginPath(),i.moveTo(0,-7),i.lineTo(4.5,5),i.lineTo(0,3),i.lineTo(-4.5,5),i.closePath(),i.fill(),i.stroke(),i.restore()}function lM(i,e){for(let t of G.clouds)t.position.x+=t.userData.dr*i,t.position.x>600&&(t.position.x=-600);for(let t of G.rings){if(!t.visible)continue;t.rotation.y+=i*.4;let n=1+Math.sin(e*3+t.userData.index)*.06;t.scale.setScalar(n),t.userData.glow.material.opacity=t.userData.collected?.15:.22+Math.sin(e*4)*.1}Q.confettiT>0&&(Q.confettiT-=i);for(let t of G.confetti){if(t.life<=0){t.mesh.visible=!1;continue}t.life-=i,t.v.y-=12*i,t.mesh.position.addScaledVector(t.v,i),t.mesh.rotation.x+=i*4,t.mesh.rotation.z+=i*3,t.life<=0&&(t.mesh.visible=!1)}Q.toastT>0&&(Q.toastT-=i,Q.toastT<=0&&Be("toast").classList.remove("show"))}function hM(){fv(),pv(),mv(),gv(),xv(),bv(),_v(),Mv(),Sv(),Ev(),Dv(),Lv(),Iv(),Fv();for(let e=0;e<3;e++)Nv(e);Bv();let i=[16739179,16767293,7064427,5164484,16737996,16053488];for(let e=0;e<70;e++){let t=new Ue(new di(.18,.28),new Jt({color:i[e%i.length],side:Ut}));t.visible=!1,We.add(t),G.confetti.push({mesh:t,v:new N,life:0})}Ju(Q.hours)}var Am="islandDriftIntroSeen";function um(){try{return localStorage.getItem(Am)==="1"}catch{return!1}}function uM(){try{localStorage.setItem(Am,"1")}catch{}}function dM(){try{let i=Yu(),e=i.currentTime,t=i.createOscillator(),n=i.createGain(),s=i.createBiquadFilter();t.type="sawtooth",t.frequency.setValueAtTime(140,e),t.frequency.exponentialRampToValueAtTime(780,e+.45),t.frequency.exponentialRampToValueAtTime(180,e+.9),s.type="lowpass",s.frequency.setValueAtTime(400,e),s.frequency.exponentialRampToValueAtTime(2400,e+.4),n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(.12,e+.08),n.gain.exponentialRampToValueAtTime(1e-4,e+1),t.connect(s).connect(n).connect(i.destination),t.start(e),t.stop(e+1.05);let r=i.createBuffer(1,Math.floor(i.sampleRate*.8),i.sampleRate),a=r.getChannelData(0);for(let l=0;l<a.length;l++)a[l]=(Math.random()*2-1)*(1-l/a.length);let o=i.createBufferSource();o.buffer=r;let c=i.createGain();c.gain.value=.06,o.connect(c).connect(i.destination),o.start(e)}catch{}}function ku(){let i=Be("controls-overlay");i&&i.classList.add("hidden")}function Rm(){return xl()?'<ul class="controls"><li>Left half: drag where your thumb lands to move (push far to run)</li><li>Right half: drag to look around. The camera eases behind vehicles when you let go.</li><li>Orange button: Ride, Talk, Pick up, or Get off</li><li>Jump on foot \xB7 Boost on the scooter and boat</li><li>Hold Time to fast-forward the day \xB7 menu button to pause</li></ul>':'<ul class="controls"><li><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> or arrows \u2014 walk and steer</li><li><kbd>Shift</kbd> run \xB7 <kbd>Space</kbd> jump / boost \xB7 <kbd>E</kbd> ride, talk, pick up</li><li>Drag mouse to look (double-click to lock pointer) \xB7 <kbd>Q</kbd><kbd>C</kbd> orbit</li><li><kbd>T</kbd> hold to fast-forward time \xB7 <kbd>R</kbd> unstick \xB7 <kbd>Esc</kbd> pause</li><li>Gamepad: left stick move, right stick look, A interact, X / RT boost, B get off, Start pause</li></ul>'}function fM(){let i=Be("controls-overlay");if(!i)return;let e=i.querySelector(".controls");e&&(e.outerHTML=Rm()),i.classList.remove("hidden");let t=Be("controls-ok");t&&(t.onclick=ku),setTimeout(ku,1e4)}function to(i){if(!Q.started)return;Q.paused=i==null?!Q.paused:!!i,Vr=!Q.paused;let e=Be("pause-menu");if(e)if(Q.paused)e.classList.remove("hidden"),Oe.active=!1,Oe.joyX=0,Oe.joyZ=0,Oe.joyId=null,Oe.lookId=null,Oe.looking=!1,vl(0,0,0,0,!1);else{e.classList.add("hidden");let t=Be("pause-help");t&&t.classList.add("hidden")}}function zu(){if(zu.done)return;zu.done=!0;let i=(c,l)=>{let h=Be(c);if(!h)return;let u=f=>{f.preventDefault(),f.stopPropagation(),Nu(),l(!0),c==="btn-boost"&&Q.mode==="foot"&&(Wr=!0),h.classList.add("held")},d=()=>{l(!1),h.classList.remove("held")};h.addEventListener("pointerdown",u),h.addEventListener("pointerup",d),h.addEventListener("pointercancel",d),h.addEventListener("contextmenu",f=>f.preventDefault())};i("btn-time",c=>{Oe.time=c}),i("btn-boost",c=>{Oe.boost=c});let e=Be("btn-action");e&&e.addEventListener("pointerdown",c=>{c.preventDefault(),c.stopPropagation(),Nu(),!e.disabled&&!Q.paused&&Ml()});let t=Be("btn-pause");t&&t.addEventListener("pointerdown",c=>{c.preventDefault(),c.stopPropagation(),to()});let n=Be("pause-resume");n&&n.addEventListener("click",()=>to(!1));let s=Be("pause-controls");s&&s.addEventListener("click",()=>{let c=Be("pause-help");c&&(c.innerHTML=Rm(),c.classList.toggle("hidden"))});let r=Be("quality-low"),a=Be("quality-high"),o=()=>{r&&r.classList.toggle("on",Ne.quality==="low"),a&&a.classList.toggle("on",Ne.quality==="high")};r&&r.addEventListener("click",()=>{hl("low"),zr("low",{renderer:tn,sun:zt}),o()}),a&&a.addEventListener("click",()=>{hl("high"),zr("high",{renderer:tn,sun:zt}),o()}),o()}function Qu(){if(!ed){Im(!0),td().then(()=>Qu());return}if(Q.started)return;Q.started=!0,Q.paused=!1,Vr=!0;let i=Be("intro");i&&(i.classList.add("done"),i.style.display="none");let e=Be("whoosh");e&&e.classList.remove("on"),Be("game-hud").classList.remove("hidden"),zu(),Xu(rv()||qu);try{Yu()}catch{}Sn=D.yaw}function Cm(){if(Q.started)return;uM();let i=Be("tap-finger");i&&(i.classList.remove("show","press"),i.style.display="none"),Qu(),fM()}function Gu(){if(Q.started||Q.introPhase&&Q.introPhase!=="home")return;Q.introPhase="splash";let i=Be("intro-hint");i&&i.classList.add("hidden");let e=Be("intro");e.classList.add("reveal-world","splashing"),setTimeout(()=>{if(Q.started)return;Q.introPhase="zoom",e.classList.remove("splashing"),e.classList.add("zooming");let t=Be("whoosh");t&&t.classList.add("on"),dM(),setTimeout(()=>Cm(),1150)},900)}function pM(){if(Q.introPhase="home",um()){let s=Be("skip-hint");s&&s.classList.remove("hidden")}let e=s=>{Q.started||um()&&(s&&s.type==="click"&&s.target&&s.target.closest&&s.target.closest("#app-drift")||Cm())};window.addEventListener("keydown",e);let t=Be("intro");t&&t.addEventListener("click",e);let n=Be("app-drift");n&&n.addEventListener("click",s=>{s.preventDefault(),s.stopPropagation(),Gu()}),setTimeout(()=>{if(Q.introPhase!=="home"||Q.started)return;let s=Be("app-drift");if(!s)return;let r=s.getBoundingClientRect(),a=Be("tap-finger");a&&(a.style.left=r.left+r.width/2+"px",a.style.top=r.top+r.height/2+"px",a.classList.add("show"),setTimeout(()=>a.classList.add("press"),280),setTimeout(()=>a.classList.remove("show","press"),900)),Gu()},2400)}var Hu=!1;function Pm(){requestAnimationFrame(Pm);let i=Math.min(.05,im.getDelta()),e=im.elapsedTime;if(G.waterTime.value=e,!!Hu){if(Q.started&&!Q.paused&&hv(i),Q.started&&!Q.paused){Hr.KeyE&&Ml(),Hr.KeyR&&eM();let t=ov()?48:1;Q.hours+=i*1e3*t/Q.dayMs*24,Q.mode==="foot"?tM(i):Q.mode==="scooter"?nM(i):iM(i)}if(Q.paused||(Ju(Q.hours),wm(e),sM(i),lM(i,e),aM(i,!Q.started,e)),Q.started&&(jv(),Kv(Tm()),Q.paused||Qv(i)),cM(),Hu){let t=Q.mode==="foot"&&D.footSpeed||0;Cu(Et,i,{speed:t,jumping:(D.airY||0)>.05,seated:Q.mode!=="foot"});for(let n of G.npcs)Cu(n.mesh,i,{speed:0});Q.started&&Zp(zt,D)}for(let t of Object.keys(Hr))Hr[t]=!1;$p(tn,We,ji)}}window.__game={start(){let i=Be("intro");i&&i.classList.add("done");let e=Be("whoosh");e&&e.classList.remove("on"),ku(),Qu()},playIntro:Gu,introPhase:()=>Q.introPhase||"boot",setTime(i){Q.hours=i,Ju(i)},setDayLength(i){Q.dayMs=i},teleport(i,e,t){D.x=i,D.z=e,t!=null&&(D.yaw=t),wm(G.waterTime.value)},mount(i){i==="scooter"||i==="boat"?Ou(i):i||_l()},dismount:_l,setCash(i){Q.cash=i},setCamera(i,e,t){i!=null&&(Sn=i),e!=null&&(fs=e),t!=null&&(oi=t)},give(i){(i==="mango"||i==="speaker"||i==="coconut")&&pl(i)},drop:Em,setMission(i,e,t){if(Re[i]){if(Re[i].stage=e,i==="video"){t&&t.rings&&(Re.video.rings=t.rings.slice());for(let n of G.rings)n.visible=e==="accepted",t&&t.rings&&(n.userData.collected=!!t.rings[n.userData.index])}i==="coconut"&&G.items.coconut&&(G.items.coconut.visible=e!=="done",e==="accepted"&&G.coconutHome&&G.items.coconut.position.copy(G.coconutHome))}},setTouchUI(i){qu=!!i,Xu(!!i)},touchJoy(i,e){Oe.active=Math.hypot(i,e)>.01,Oe.joyX=i,Oe.joyZ=e,Oe.active||vl(0,0,0,0,!1)},tapAction(){Q.paused||Ml()},tapBoost(i){Oe.boost=!!i,i&&Q.mode==="foot"&&(Wr=!0)},togglePause:to,party:Mm,confetti:vm,getState(){return{mode:Q.mode,cash:Q.cash,hours:Q.hours,carrying:Q.carrying,paused:Q.paused,missions:JSON.parse(JSON.stringify(Re)),player:{x:D.x,y:D.y,z:D.z,yaw:D.yaw,speed:D.speed,airY:D.airY},touchUI:xl(),rigged:!!(Et.userData&&Et.userData.rigged),quality:Ne.quality,assets:{loaded:!!Ne.loaded,modelCount:Object.keys(Ne.models||{}).length,models:Object.keys(Ne.models||{})},locations:{bar:ot,dock:G.dockPos,farm:ri,sandbar:ai,hill:Ki,spawn:Lu,scootPark:eo,greate:ds,coconutPalm:js,rings:gm.map(Vu)}}},locations(){return window.__game.getState().locations},whenReady(){return td()},assetsReady(){return ed},setQuality(i){hl(i==="low"?"low":"high"),zr(Ne.quality,{renderer:tn,sun:zt})},quality(){return Ne.quality}};function Qa(i,e,{minY:t=.8,inlandMin:n=22,inlandMax:s=160,scaleMin:r=.8,scaleMax:a=1.6,avoidBar:o=18}={}){let c=Au(i,e);if(!c)return;let l=new xt,h=0,u=0;for(;h<e&&u<4e3;){u++;let d=Math.random()*Math.PI*2,f=n+Math.random()*(s-n),m=en(d,f),b=_t(m.x,m.z);b<t||Math.abs(Math.hypot(m.x,m.z)-yl(d))<5||Math.hypot(m.x-ot.x,m.z-ot.z)<o||(l.position.set(m.x,b,m.z),l.rotation.set(0,Math.random()*Math.PI*2,0),l.scale.setScalar(r+Math.random()*(a-r)),l.updateMatrix(),c.setMatrixAt(h,l.matrix),h++)}c.count=h,We.add(c),G.v3decor=G.v3decor||[],G.v3decor.push(c)}function dm(i,e,t,n,s,r,a){let o=new xt;i.forEach((c,l)=>{let h=Au(c,Math.ceil(e/i.length)+4);if(!h)return;let u=0,d=0,f=Math.ceil(e/i.length);for(;u<f&&d<5e3;){d++;let m=(Math.random()+l*.19)*Math.PI*2,b=t+Math.random()*(n-t),g=en(m,b),p=_t(g.x,g.z);p<s||Math.abs(Math.hypot(g.x,g.z)-yl(m))<5.5||Math.hypot(g.x-ot.x,g.z-ot.z)<18||Math.hypot(g.x-ri.x,g.z-ri.z)<10||(o.position.set(g.x,p,g.z),o.rotation.set(0,Math.random()*Math.PI*2,0),o.scale.setScalar(r+Math.random()*(a-r)),o.updateMatrix(),h.setMatrixAt(u,o.matrix),u++)}h.count=u,We.add(h),G.v3palms=G.v3palms||[],G.v3palms.push(h)})}function mM(){if(!Ne.models["palm-a"])return;G.palmGroup&&(G.palmGroup.visible=!1),G.bushMesh&&(G.bushMesh.visible=!1);let i=["palm-a","palm-b","palm-c","palm-d"].filter(e=>Ne.models[e]);dm(i,90,28,160,1.1,1.15,1.7),dm(i,46,8,24,.35,1.05,1.55),Qa("rock-a",28,{minY:.2,inlandMin:8,inlandMax:40,scaleMin:.45,scaleMax:.85,avoidBar:14}),Qa("rock-b",22,{minY:.2,inlandMin:8,inlandMax:50,scaleMin:.4,scaleMax:.8,avoidBar:14}),Qa("bush-a",40,{minY:1.2,inlandMin:30,inlandMax:140,scaleMin:1.2,scaleMax:2.2}),Qa("bush-b",24,{minY:1.2,inlandMin:32,inlandMax:140,scaleMin:1.1,scaleMax:2}),Qa("foliage-sand",30,{minY:.15,inlandMin:6,inlandMax:22,scaleMin:1,scaleMax:1.8,avoidBar:10})}function gM(){let i=["hut-tropic","hut-a","hut-b"].filter(n=>Ne.models[n]);(G.huts||[]).forEach((n,s)=>{let r=i[s%i.length];if(!r)return;let a=Vi(r);if(!a)return;n.children.forEach(l=>{l.visible=!1});let o=new kt().setFromObject(a),c=o.max.y-o.min.y||1;a.scale.setScalar(5.6/c),a.position.y=-o.min.y*(5.6/c),n.add(a)});let e=Vi("dock-long")||Vi("dock");if(e&&G.dockPos){G.dockGroup&&(G.dockGroup.visible=!1);let n=G.dockPos.shoreX,s=G.dockPos.shoreZ,r=G.dockPos.x,a=G.dockPos.z,o=(n+r)/2,c=(s+a)/2,l=Math.atan2(r-n,a-s),h=new kt().setFromObject(e),u=Math.max(h.max.z-h.min.z,h.max.x-h.min.x,1),d=Math.hypot(r-n,a-s)||30;e.scale.setScalar(d/u),e.position.set(o,Math.max(_t(o,c),.05),c),e.rotation.y=l,We.add(e),G.v3dock=e}let t=_t(ot.x,ot.z);[["lounge",5.4,8.4,.4],["lounge-relax",7.4,8.8,-.6],["lounge",-8.8,8.2,.2],["stool",2.2,5.6,0],["stool",.4,5.6,0],["stool",-1.4,5.6,0],["barrel",7.6,4.6,.8],["crate",-7.2,5,.4]].forEach(([n,s,r,a],o)=>{let c=Vi(n);if(!c)return;let l=new kt().setFromObject(c),h=l.max.y-l.min.y||1,u=n.startsWith("lounge")?.85:n==="stool"?.7:.9;c.scale.setScalar(u/h),c.position.set(ot.x+s,t-l.min.y*(u/h),ot.z+r),c.rotation.y=a+o*.15,We.add(c)})}function xM(){if(Ne.models.boat){let i=Vi("boat");if(i){dt.children.forEach(n=>{n.userData.keep||(n.visible=!1)});let e=new kt().setFromObject(i),t=e.max.z-e.min.z||1;i.scale.setScalar(5.4/t),i.position.y=-e.min.y*(5.4/t),i.userData.v3model="boat",Xp(i),dt.add(i),dt.userData.v3=!0}}if(Ne.models.coconut&&G.items.coconut){let i=Vi("coconut");i&&(G.items.coconut.children.forEach(e=>{e.visible=!1}),i.scale.setScalar(1.4),G.items.coconut.add(i))}if(Ne.models["palm-a"]&&G.coconutPalm){let i=Vi("palm-a");i&&(G.coconutPalm.children.forEach(e=>{e.visible=!1}),i.scale.setScalar(1.15),G.coconutPalm.add(i))}}var us={kai:{female:!0,skin:13010516,shirt:14710122,shorts:4873850,hair:1708560,backpack:!0,shoes:3811874,scale:1},mama:{female:!0,skin:11893064,shirt:13916794,shorts:8006218,hair:3809816,shoes:4860440,scale:1.05},bula:{female:!1,skin:9263672,shirt:16777215,shorts:14711354,hair:1708048,sunglasses:!0,chain:!0,shoes:15918792,scale:1.08},rico:{female:!1,skin:12880474,shirt:16777215,shorts:15755936,hair:1708048,beanie:15747722,sunglasses:!0,chain:!0,shoes:16053488,scale:1.08},fish:{female:!1,skin:13213812,shirt:15261904,shorts:5925450,hair:12566463,shoes:3811864,scale:1},tourist:{female:!0,skin:14727316,shirt:16045800,shorts:6982314,hair:6961688,shoes:16052456,scale:1},local:{female:!1,skin:11172424,shirt:3837034,shorts:3815994,hair:1710618,shoes:2236962,scale:1},greate:{female:!1,skin:7027234,shirt:15259304,shorts:3103814,hair:2759184,tam:!0,dreads:!0,shoes:3811864,scale:1.06}};function bM(){let i={...us.bula,shirtMap:xm()},e={...us.rico,shirtMap:bm()};Ru(Et,us.kai);let t={mama:us.mama,bula:i,rico:e,fish:us.fish,tourist:us.tourist,local:us.local,greate:us.greate};for(let n of G.npcs){let s=t[n.id];s&&Ru(n.mesh,s)}}function _M(){try{if(jp(G.terrainMesh),G.waterMat){let i=Ne.textures["water-normal"];i&&(i.wrapS=i.wrapT=Nn,i.colorSpace=Un,G.waterMat.uniforms.uNormal.value=i,G.waterMat.uniforms.uHasNrm.value=1)}Kp(We,G),mM(),gM(),xM(),bM(),zr(Ne.quality,{renderer:tn,sun:zt})}catch(i){console.warn("Visual upgrade fallback:",i)}}var ed=!1,ul=null;function fm(i){let e=Be("load-fill"),t=Be("load-pct"),n=Be("loading-overlay");e&&(e.style.width=Math.round(i*100)+"%"),t&&(t.textContent=Math.round(i*100)+"%");let s=Be("intro-load");if(s){s.classList.remove("hidden");let r=s.querySelector(".fill");r&&(r.style.width=Math.round(i*100)+"%")}}function Im(i){let e=Be("loading-overlay");e&&e.classList.toggle("hidden",!i)}function td(){return ul||(ul=qp(i=>fm(i)).then(()=>{_M(),ed=!0,fm(1),Im(!1);let i=Be("intro-load");return i&&i.classList.add("hidden"),!0}),ul)}try{Ne.quality=Wp(),Jp(tn,We,ji),zr(Ne.quality,{renderer:tn,sun:zt}),hM(),D.y=_t(D.x,D.z),Et.position.set(D.x,D.y,D.z),Hu=!0,pM(),td(),Pm()}catch(i){console.error(i);let e=Be("intro-hint");e&&(e.textContent="Something got sandy: "+i.message)}});yM();})();
