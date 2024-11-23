 !function(t,e){"object"==typeof
  exports&amp;&amp;"undefined"!=typeof
  module?e(exports):"function"==typeof
  define&amp;&amp;define.amd?define(["exports"],e):e((t="undefined"!=typeof
  globalThis?globalThis:t||self).THREE={})}(this,(function(t){"use
  strict";const
  e="128",n=100,i=300,r=301,s=302,a=303,o=304,l=306,c=307,h=1e3,u=1001,d=1002,p=1003,m=1004,f=1005,g=1006,v=1007,y=1008,x=1009,_=1012,w=1014,b=1015,M=1016,S=1020,T=1022,E=1023,A=1026,L=1027,R=33776,C=33777,P=33778,D=33779,I=35840,N=35841,B=35842,z=35843,F=37492,O=37496,H=2300,G=2301,U=2302,k=2400,V=2401,W=2402,j=2500,q=2501,X=3e3,Y=3001,Z=3007,J=3002,Q=3004,K=3005,$=3006,tt=7680,et=35044,nt=35048,it="300
  es";class rt{addEventListener(t,e){void
  0===this._listeners&amp;&amp;(this._listeners={});const
  n=this._listeners;void
  0===n[t]&amp;&amp;(n[t]=[]),-1===n[t].indexOf(e)&amp;&amp;n[t].push(e)}hasEventListener(t,e){if(void
  0===this._listeners)return!1;const n=this._listeners;return void
  0!==n[t]&amp;&amp;-1!==n[t].indexOf(e)}removeEventListener(t,e){if(void
  0===this._listeners)return;const n=this._listeners[t];if(void
  0!==n){const
  t=n.indexOf(e);-1!==t&amp;&amp;n.splice(t,1)}}dispatchEvent(t){if(void
  0===this._listeners)return;const
  e=this._listeners[t.type];if(void 0!==e){t.target=this;const
  n=e.slice(0);for(let e=0,i=n.length;e<i st="[];for(let" t=
  "0;t">&lt;256;t++)st[t]=(t&lt;16?"0":"")+t.toString(16);let
  at=1234567;const ot=Math.PI/180,lt=180/Math.PI;function
  ct(){const
  t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,n=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(st[255&amp;t]+st[t&gt;&gt;8&amp;255]+st[t&gt;&gt;16&amp;255]+st[t&gt;&gt;24&amp;255]+"-"+st[255&amp;e]+st[e&gt;&gt;8&amp;255]+"-"+st[e&gt;&gt;16&amp;15|64]+st[e&gt;&gt;24&amp;255]+"-"+st[63&amp;n|128]+st[n&gt;&gt;8&amp;255]+"-"+st[n&gt;&gt;16&amp;255]+st[n&gt;&gt;24&amp;255]+st[255&amp;i]+st[i&gt;&gt;8&amp;255]+st[i&gt;&gt;16&amp;255]+st[i&gt;&gt;24&amp;255]).toUpperCase()}function
  ht(t,e,n){return Math.max(e,Math.min(n,t))}function
  ut(t,e){return(t%e+e)%e}function
  dt(t,e,n){return(1-n)*t+n*e}function pt(t){return
  0==(t&amp;t-1)&amp;&amp;0!==t}function mt(t){return
  Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function ft(t){return
  Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}var
  gt=Object.freeze({__proto__:null,DEG2RAD:ot,RAD2DEG:lt,generateUUID:ct,clamp:ht,euclideanModulo:ut,mapLinear:function(t,e,n,i,r){return
  i+(t-e)*(r-i)/(n-e)},inverseLerp:function(t,e,n){return
  t!==e?(n-t)/(e-t):0},lerp:dt,damp:function(t,e,n,i){return
  dt(t,e,1-Math.exp(-n*i))},pingpong:function(t,e=1){return
  e-Math.abs(ut(t,2*e)-e)},smoothstep:function(t,e,n){return
  t&lt;=e?0:t&gt;=n?1:(t=(t-e)/(n-e))*t*(3-2*t)},smootherstep:function(t,e,n){return
  t&lt;=e?0:t&gt;=n?1:(t=(t-e)/(n-e))*t*t*(t*(6*t-15)+10)},randInt:function(t,e){return
  t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return
  t+Math.random()*(e-t)},randFloatSpread:function(t){return
  t*(.5-Math.random())},seededRandom:function(t){return void
  0!==t&amp;&amp;(at=t%2147483647),at=16807*at%2147483647,(at-1)/2147483646},degToRad:function(t){return
  t*ot},radToDeg:function(t){return
  t*lt},isPowerOfTwo:pt,ceilPowerOfTwo:mt,floorPowerOfTwo:ft,setQuaternionFromProperEuler:function(t,e,n,i,r){const
  s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),m=a((i-e)/2);switch(r){case"XYX":t.set(o*h,l*u,l*d,o*c);break;case"YZY":t.set(l*d,o*h,l*u,o*c);break;case"ZXZ":t.set(l*u,l*d,o*h,o*c);break;case"XZX":t.set(o*h,l*m,l*p,o*c);break;case"YXY":t.set(l*p,o*h,l*m,o*c);break;case"ZYZ":t.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils:
  .setQuaternionFromProperEuler() encountered an unknown order:
  "+r)}}});class vt{constructor(t=0,e=0){this.x=t,this.y=e}get
  width(){return this.x}set width(t){this.x=t}get height(){return
  this.y}set height(t){this.y=t}set(t,e){return
  this.x=t,this.y=e,this}setScalar(t){return
  this.x=t,this.y=t,this}setX(t){return
  this.x=t,this}setY(t){return
  this.y=t,this}setComponent(t,e){switch(t){case
  0:this.x=e;break;case 1:this.y=e;break;default:throw new
  Error("index is out of range: "+t)}return
  this}getComponent(t){switch(t){case 0:return this.x;case 1:return
  this.y;default:throw new Error("index is out of range:
  "+t)}}clone(){return new
  this.constructor(this.x,this.y)}copy(t){return
  this.x=t.x,this.y=t.y,this}add(t,e){return void
  0!==e?(console.warn("THREE.Vector2: .add() now only accepts one
  argument. Use .addVectors( a, b )
  instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return
  this.x+=t,this.y+=t,this}addVectors(t,e){return
  this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return
  this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return void
  0!==e?(console.warn("THREE.Vector2: .sub() now only accepts one
  argument. Use .subVectors( a, b )
  instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return
  this.x-=t,this.y-=t,this}subVectors(t,e){return
  this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return
  this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return
  this.x*=t,this.y*=t,this}divide(t){return
  this.x/=t.x,this.y/=t.y,this}divideScalar(t){return
  this.multiplyScalar(1/t)}applyMatrix3(t){const
  e=this.x,n=this.y,i=t.elements;return
  this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return
  this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return
  this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return
  this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return
  this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const
  n=this.length();return
  this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return
  this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return
  this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return
  this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return
  this.x=this.x&lt;0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y&lt;0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return
  this.x=-this.x,this.y=-this.y,this}dot(t){return
  this.x*t.x+this.y*t.y}cross(t){return
  this.x*t.y-this.y*t.x}lengthSq(){return
  this.x*this.x+this.y*this.y}length(){return
  Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return
  Math.abs(this.x)+Math.abs(this.y)}normalize(){return
  this.divideScalar(this.length()||1)}angle(){return
  Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return
  Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const
  e=this.x-t.x,n=this.y-t.y;return
  e*e+n*n}manhattanDistanceTo(t){return
  Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return
  this.normalize().multiplyScalar(t)}lerp(t,e){return
  this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return
  this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return
  t.x===this.x&amp;&amp;t.y===this.y}fromArray(t,e=0){return
  this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return
  t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,n){return
  void 0!==n&amp;&amp;console.warn("THREE.Vector2: offset has been
  removed from
  .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const
  n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return
  this.x=r*n-s*i+t.x,this.y=r*i+s*n+t.y,this}random(){return
  this.x=Math.random(),this.y=Math.random(),this}}vt.prototype.isVector2=!0;class
  yt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length&gt;0&amp;&amp;console.error("THREE.Matrix3:
  the constructor no longer reads arguments. use .set()
  instead.")}set(t,e,n,i,r,s,a,o,l){const c=this.elements;return
  c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=r,c[5]=o,c[6]=n,c[7]=s,c[8]=l,this}identity(){return
  this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const
  e=this.elements,n=t.elements;return
  e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return
  t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const
  e=t.elements;return
  this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return
  this.multiplyMatrices(this,t)}premultiply(t){return
  this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const
  n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[3],o=n[6],l=n[1],c=n[4],h=n[7],u=n[2],d=n[5],p=n[8],m=i[0],f=i[3],g=i[6],v=i[1],y=i[4],x=i[7],_=i[2],w=i[5],b=i[8];return
  r[0]=s*m+a*v+o*_,r[3]=s*f+a*y+o*w,r[6]=s*g+a*x+o*b,r[1]=l*m+c*v+h*_,r[4]=l*f+c*y+h*w,r[7]=l*g+c*x+h*b,r[2]=u*m+d*v+p*_,r[5]=u*f+d*y+p*w,r[8]=u*g+d*x+p*b,this}multiplyScalar(t){const
  e=this.elements;return
  e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const
  t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return
  e*s*c-e*a*l-n*r*c+n*a*o+i*r*l-i*s*o}invert(){const
  t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=c*s-a*l,u=a*o-c*r,d=l*r-s*o,p=e*h+n*u+i*d;if(0===p)return
  this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return
  t[0]=h*m,t[1]=(i*l-c*n)*m,t[2]=(a*n-i*s)*m,t[3]=u*m,t[4]=(c*e-i*o)*m,t[5]=(i*r-a*e)*m,t[6]=d*m,t[7]=(n*o-l*e)*m,t[8]=(s*e-n*r)*m,this}transpose(){let
  t;const e=this.elements;return
  t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return
  this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const
  e=this.elements;return
  t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,s,a){const
  o=Math.cos(r),l=Math.sin(r);return
  this.set(n*o,n*l,-n*(o*s+l*a)+s+t,-i*l,i*o,-i*(-l*s+o*a)+a+e,0,0,1),this}scale(t,e){const
  n=this.elements;return
  n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const
  e=Math.cos(t),n=Math.sin(t),i=this.elements,r=i[0],s=i[3],a=i[6],o=i[1],l=i[4],c=i[7];return
  i[0]=e*r+n*o,i[3]=e*s+n*l,i[6]=e*a+n*c,i[1]=-n*r+e*o,i[4]=-n*s+e*l,i[7]=-n*a+e*c,this}translate(t,e){const
  n=this.elements;return
  n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const
  e=this.elements,n=t.elements;for(let
  t=0;t&lt;9;t++)if(e[t]!==n[t])return!1;return!0}fromArray(t,e=0){for(let
  n=0;n&lt;9;n++)this.elements[n]=t[n+e];return
  this}toArray(t=[],e=0){const n=this.elements;return
  t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return(new
  this.constructor).fromArray(this.elements)}}let
  xt;yt.prototype.isMatrix3=!0;class _t{static
  getDataURL(t){if(/^data:/i.test(t.src))return
  t.src;if("undefined"==typeof HTMLCanvasElement)return t.src;let
  e;if(t instanceof HTMLCanvasElement)e=t;else{void
  0===xt&amp;&amp;(xt=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),xt.width=t.width,xt.height=t.height;const
  n=xt.getContext("2d");t instanceof
  ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=xt}return
  e.width&gt;2048||e.height&gt;2048?(console.warn("THREE.ImageUtils.getDataURL:
  Image converted to jpg for performance
  reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}}let
  wt=0;class bt extends
  rt{constructor(t=bt.DEFAULT_IMAGE,e=bt.DEFAULT_MAPPING,n=1001,i=1001,r=1006,s=1008,a=1023,o=1009,l=1,c=3e3){super(),Object.defineProperty(this,"id",{value:wt++}),this.uuid=ct(),this.name="",this.image=t,this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new
  vt(0,0),this.repeat=new vt(1,1),this.center=new
  vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new
  yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return(new
  this.constructor).copy(this)}copy(t){return
  this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this}toJSON(t){const
  e=void 0===t||"string"==typeof t;if(!e&amp;&amp;void
  0!==t.textures[this.uuid])return t.textures[this.uuid];const
  n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(void
  0!==this.image){const i=this.image;if(void
  0===i.uuid&amp;&amp;(i.uuid=ct()),!e&amp;&amp;void
  0===t.images[i.uuid]){let e;if(Array.isArray(i)){e=[];for(let
  t=0,n=i.length;t&lt;0||t.x&gt;1)switch(this.wrapS){case
  h:t.x=t.x-Math.floor(t.x);break;case
  u:t.x=t.x&lt;0?0:1;break;case
  d:1===Math.abs(Math.floor(t.x)%2)?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y&lt;0||t.y&gt;1)switch(this.wrapT){case
  h:t.y=t.y-Math.floor(t.y);break;case
  u:t.y=t.y&lt;0?0:1;break;case
  d:1===Math.abs(Math.floor(t.y)%2)?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return
  this.flipY&amp;&amp;(t.y=1-t.y),t}set
  needsUpdate(t){!0===t&amp;&amp;this.version++}}function
  Mt(t){return"undefined"!=typeof HTMLImageElement&amp;&amp;t
  instanceof HTMLImageElement||"undefined"!=typeof
  HTMLCanvasElement&amp;&amp;t instanceof
  HTMLCanvasElement||"undefined"!=typeof ImageBitmap&amp;&amp;t
  instanceof
  ImageBitmap?_t.getDataURL(t):t.data?{data:Array.prototype.slice.call(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture:
  Unable to serialize Texture."),{})}bt.DEFAULT_IMAGE=void
  0,bt.DEFAULT_MAPPING=i,bt.prototype.isTexture=!0;class
  St{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get
  width(){return this.z}set width(t){this.z=t}get height(){return
  this.w}set height(t){this.w=t}set(t,e,n,i){return
  this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return
  this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return
  this.x=t,this}setY(t){return this.y=t,this}setZ(t){return
  this.z=t,this}setW(t){return
  this.w=t,this}setComponent(t,e){switch(t){case
  0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case
  3:this.w=e;break;default:throw new Error("index is out of range:
  "+t)}return this}getComponent(t){switch(t){case 0:return
  this.x;case 1:return this.y;case 2:return this.z;case 3:return
  this.w;default:throw new Error("index is out of range:
  "+t)}}clone(){return new
  this.constructor(this.x,this.y,this.z,this.w)}copy(t){return
  this.x=t.x,this.y=t.y,this.z=t.z,this.w=void
  0!==t.w?t.w:1,this}add(t,e){return void
  0!==e?(console.warn("THREE.Vector4: .add() now only accepts one
  argument. Use .addVectors( a, b )
  instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return
  this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return
  this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return
  this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return
  void 0!==e?(console.warn("THREE.Vector4: .sub() now only accepts
  one argument. Use .subVectors( a, b )
  instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return
  this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return
  this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return
  this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return
  this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const
  e=this.x,n=this.y,i=this.z,r=this.w,s=t.elements;return
  this.x=s[0]*e+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(t){return
  this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const
  e=Math.sqrt(1-t.w*t.w);return
  e&lt;1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let
  e,n,i,r;const
  s=.01,a=.1,o=t.elements,l=o[0],c=o[4],h=o[8],u=o[1],d=o[5],p=o[9],m=o[2],f=o[6],g=o[10];if(Math.abs(c-u)<s><s><s><a return=""
  t="">o&amp;&amp;t&gt;v?t<s>v?o</s><s v=
  "Math.sqrt((f-p)*(f-p)+(h-m)*(h-m)+(u-c)*(u-c));return">&lt;.001&amp;&amp;(v=1),this.x=(f-p)/v,this.y=(h-m)/v,this.z=(u-c)/v,this.w=Math.acos((l+d+g-1)/2),this}min(t){return
  this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return
  this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return
  this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return
  this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const
  n=this.length();return
  this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return
  this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return
  this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return
  this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return
  this.x=this.x&lt;0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y&lt;0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z&lt;0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w&lt;0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return
  this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return
  this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return
  this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return
  Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return
  Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return
  this.divideScalar(this.length()||1)}setLength(t){return
  this.normalize().multiplyScalar(t)}lerp(t,e){return
  this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return
  this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return
  t.x===this.x&amp;&amp;t.y===this.y&amp;&amp;t.z===this.z&amp;&amp;t.w===this.w}fromArray(t,e=0){return
  this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return
  t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,n){return
  void 0!==n&amp;&amp;console.warn("THREE.Vector4: offset has been
  removed from
  .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return
  this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}St.prototype.isVector4=!0;class
  Tt extends
  rt{constructor(t,e,n){super(),this.width=t,this.height=e,this.depth=1,this.scissor=new
  St(0,0,t,e),this.scissorTest=!1,this.viewport=new
  St(0,0,t,e),n=n||{},this.texture=new bt(void
  0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=1,this.texture.generateMipmaps=void
  0!==n.generateMipmaps&amp;&amp;n.generateMipmaps,this.texture.minFilter=void
  0!==n.minFilter?n.minFilter:g,this.depthBuffer=void
  0===n.depthBuffer||n.depthBuffer,this.stencilBuffer=void
  0!==n.stencilBuffer&amp;&amp;n.stencilBuffer,this.depthTexture=void
  0!==n.depthTexture?n.depthTexture:null}setTexture(t){t.image={width:this.width,height:this.height,depth:this.depth},this.texture=t}setSize(t,e,n=1){this.width===t&amp;&amp;this.height===e&amp;&amp;this.depth===n||(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return(new
  this.constructor).copy(this)}copy(t){return
  this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Tt.prototype.isWebGLRenderTarget=!0;class
  Et extends
  Tt{constructor(t,e,n){super(t,e,n),this.samples=4}copy(t){return
  super.copy.call(this,t),this.samples=t.samples,this}}Et.prototype.isWebGLMultisampleRenderTarget=!0;class
  At{constructor(t=0,e=0,n=0,i=1){this._x=t,this._y=e,this._z=n,this._w=i}static
  slerp(t,e,n,i){return console.warn("THREE.Quaternion: Static
  .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t
  ) instead."),n.slerpQuaternions(t,e,i)}static
  slerpFlat(t,e,n,i,r,s,a){let
  o=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3];const
  u=r[s+0],d=r[s+1],p=r[s+2],m=r[s+3];if(0===a)return
  t[e+0]=o,t[e+1]=l,t[e+2]=c,void(t[e+3]=h);if(1===a)return
  t[e+0]=u,t[e+1]=d,t[e+2]=p,void(t[e+3]=m);if(h!==m||o!==u||l!==d||c!==p){let
  t=1-a;const
  e=o*u+l*d+c*p+h*m,n=e&gt;=0?1:-1,i=1-e*e;if(i&gt;Number.EPSILON){const
  r=Math.sqrt(i),s=Math.atan2(r,e*n);t=Math.sin(t*s)/r,a=Math.sin(a*s)/r}const
  r=a*n;if(o=o*t+u*r,l=l*t+d*r,c=c*t+p*r,h=h*t+m*r,t===1-a){const
  t=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=t,l*=t,c*=t,h*=t}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=h}static
  multiplyQuaternionsFlat(t,e,n,i,r,s){const
  a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],h=r[s],u=r[s+1],d=r[s+2],p=r[s+3];return
  t[e]=a*p+c*h+o*d-l*u,t[e+1]=o*p+c*u+l*h-a*d,t[e+2]=l*p+c*d+a*u-o*h,t[e+3]=c*p-a*h-o*u-l*d,t}get
  x(){return this._x}set
  x(t){this._x=t,this._onChangeCallback()}get y(){return
  this._y}set y(t){this._y=t,this._onChangeCallback()}get
  z(){return this._z}set
  z(t){this._z=t,this._onChangeCallback()}get w(){return
  this._w}set
  w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return
  this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return
  new
  this.constructor(this._x,this._y,this._z,this._w)}copy(t){return
  this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!t||!t.isEuler)throw
  new Error("THREE.Quaternion: .setFromEuler() now expects an Euler
  rotation rather than a Vector3 and order.");const
  n=t._x,i=t._y,r=t._z,s=t._order,a=Math.cos,o=Math.sin,l=a(n/2),c=a(i/2),h=a(r/2),u=o(n/2),d=o(i/2),p=o(r/2);switch(s){case"XYZ":this._x=u*c*h+l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h-u*d*p;break;case"YXZ":this._x=u*c*h+l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h+u*d*p;break;case"ZXY":this._x=u*c*h-l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h-u*d*p;break;case"ZYX":this._x=u*c*h-l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h+u*d*p;break;case"YZX":this._x=u*c*h+l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h-u*d*p;break;case"XZY":this._x=u*c*h-l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h+u*d*p;break;default:console.warn("THREE.Quaternion:
  .setFromEuler() encountered an unknown order:
  "+s)}return!1!==e&amp;&amp;this._onChangeCallback(),this}setFromAxisAngle(t,e){const
  n=e/2,i=Math.sin(n);return
  this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const
  e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10],u=n+a+h;if(u&gt;0){const
  t=.5/Math.sqrt(u+1);this._w=.25/t,this._x=(c-o)*t,this._y=(r-l)*t,this._z=(s-i)*t}else
  if(n&gt;a&amp;&amp;n&gt;h){const
  t=2*Math.sqrt(1+n-a-h);this._w=(c-o)/t,this._x=.25*t,this._y=(i+s)/t,this._z=(r+l)/t}else
  if(a&gt;h){const
  t=2*Math.sqrt(1+a-n-h);this._w=(r-l)/t,this._x=(i+s)/t,this._y=.25*t,this._z=(o+c)/t}else{const
  t=2*Math.sqrt(1+h-n-a);this._w=(s-i)/t,this._x=(r+l)/t,this._y=(o+c)/t,this._z=.25*t}return
  this._onChangeCallback(),this}setFromUnitVectors(t,e){let
  n=t.dot(e)+1;return
  nMath.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return
  2*Math.acos(Math.abs(ht(this.dot(t),-1,1)))}rotateTowards(t,e){const
  n=this.angleTo(t);if(0===n)return this;const
  i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return
  this.set(0,0,0,1)}invert(){return
  this.conjugate()}conjugate(){return
  this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return
  this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return
  this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return
  Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let
  t=this.length();return
  0===t?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return
  void 0!==e?(console.warn("THREE.Quaternion: .multiply() now only
  accepts one argument. Use .multiplyQuaternions( a, b )
  instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return
  this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const
  n=t._x,i=t._y,r=t._z,s=t._w,a=e._x,o=e._y,l=e._z,c=e._w;return
  this._x=n*c+s*a+i*l-r*o,this._y=i*c+s*o+r*a-n*l,this._z=r*c+s*l+n*o-i*a,this._w=s*c-n*a-i*o-r*l,this._onChangeCallback(),this}slerp(t,e){if(0===e)return
  this;if(1===e)return this.copy(t);const
  n=this._x,i=this._y,r=this._z,s=this._w;let
  a=s*t._w+n*t._x+i*t._y+r*t._z;if(a&lt;0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a&gt;=1)return
  this._w=s,this._x=n,this._y=i,this._z=r,this;const
  o=1-a*a;if(o&lt;=Number.EPSILON){const t=1-e;return
  this._w=t*s+e*this._w,this._x=t*n+e*this._x,this._y=t*i+e*this._y,this._z=t*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const
  l=Math.sqrt(o),c=Math.atan2(l,a),h=Math.sin((1-e)*c)/l,u=Math.sin(e*c)/l;return
  this._w=s*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){this.copy(t).slerp(e,n)}equals(t){return
  t._x===this._x&amp;&amp;t._y===this._y&amp;&amp;t._z===this._z&amp;&amp;t._w===this._w}fromArray(t,e=0){return
  this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return
  t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return
  this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return
  this._onChangeCallback=t,this}_onChangeCallback(){}}At.prototype.isQuaternion=!0;class
  Lt{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return
  void
  0===n&amp;&amp;(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return
  this.x=t,this.y=t,this.z=t,this}setX(t){return
  this.x=t,this}setY(t){return this.y=t,this}setZ(t){return
  this.z=t,this}setComponent(t,e){switch(t){case
  0:this.x=e;break;case 1:this.y=e;break;case
  2:this.z=e;break;default:throw new Error("index is out of range:
  "+t)}return this}getComponent(t){switch(t){case 0:return
  this.x;case 1:return this.y;case 2:return this.z;default:throw
  new Error("index is out of range: "+t)}}clone(){return new
  this.constructor(this.x,this.y,this.z)}copy(t){return
  this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return void
  0!==e?(console.warn("THREE.Vector3: .add() now only accepts one
  argument. Use .addVectors( a, b )
  instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return
  this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return
  this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return
  this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return
  void 0!==e?(console.warn("THREE.Vector3: .sub() now only accepts
  one argument. Use .subVectors( a, b )
  instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return
  this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return
  this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return
  void 0!==e?(console.warn("THREE.Vector3: .multiply() now only
  accepts one argument. Use .multiplyVectors( a, b )
  instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return
  this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return
  this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return
  t&amp;&amp;t.isEuler||console.error("THREE.Vector3: .applyEuler()
  now expects an Euler rotation rather than a Vector3 and
  order."),this.applyQuaternion(Ct.setFromEuler(t))}applyAxisAngle(t,e){return
  this.applyQuaternion(Ct.setFromAxisAngle(t,e))}applyMatrix3(t){const
  e=this.x,n=this.y,i=this.z,r=t.elements;return
  this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return
  this.applyMatrix3(t).normalize()}applyMatrix4(t){const
  e=this.x,n=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return
  this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(t){const
  e=this.x,n=this.y,i=this.z,r=t.x,s=t.y,a=t.z,o=t.w,l=o*e+s*i-a*n,c=o*n+a*e-r*i,h=o*i+r*n-s*e,u=-r*e-s*n-a*i;return
  this.x=l*o+u*-r+c*-a-h*-s,this.y=c*o+u*-s+h*-r-l*-a,this.z=h*o+u*-a+l*-s-c*-r,this}project(t){return
  this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return
  this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const
  e=this.x,n=this.y,i=this.z,r=t.elements;return
  this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return
  this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return
  this.multiplyScalar(1/t)}min(t){return
  this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return
  this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return
  this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return
  this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const
  n=this.length();return
  this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return
  this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return
  this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return
  this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return
  this.x=this.x&lt;0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y&lt;0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z&lt;0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return
  this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return
  this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return
  this.x*this.x+this.y*this.y+this.z*this.z}length(){return
  Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return
  Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return
  this.divideScalar(this.length()||1)}setLength(t){return
  this.normalize().multiplyScalar(t)}lerp(t,e){return
  this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return
  this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t,e){return
  void 0!==e?(console.warn("THREE.Vector3: .cross() now only
  accepts one argument. Use .crossVectors( a, b )
  instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const
  n=t.x,i=t.y,r=t.z,s=e.x,a=e.y,o=e.z;return
  this.x=i*o-r*a,this.y=r*s-n*o,this.z=n*a-i*s,this}projectOnVector(t){const
  e=t.lengthSq();if(0===e)return this.set(0,0,0);const
  n=t.dot(this)/e;return
  this.copy(t).multiplyScalar(n)}projectOnPlane(t){return
  Rt.copy(this).projectOnVector(t),this.sub(Rt)}reflect(t){return
  this.sub(Rt.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const
  e=Math.sqrt(this.lengthSq()*t.lengthSq());if(0===e)return
  Math.PI/2;const n=this.dot(t)/e;return
  Math.acos(ht(n,-1,1))}distanceTo(t){return
  Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const
  e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return
  e*e+n*n+i*i}manhattanDistanceTo(t){return
  Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return
  this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const
  i=Math.sin(e)*t;return
  this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return
  this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return
  this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const
  e=t.elements;return
  this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const
  e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return
  this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return
  this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return
  this.fromArray(t.elements,3*e)}equals(t){return
  t.x===this.x&amp;&amp;t.y===this.y&amp;&amp;t.z===this.z}fromArray(t,e=0){return
  this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return
  t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,n){return
  void 0!==n&amp;&amp;console.warn("THREE.Vector3: offset has been
  removed from
  .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return
  this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}Lt.prototype.isVector3=!0;const
  Rt=new Lt,Ct=new At;class Pt{constructor(t=new
  Lt(1/0,1/0,1/0),e=new
  Lt(-1/0,-1/0,-1/0)){this.min=t,this.max=e}set(t,e){return
  this.min.copy(t),this.max.copy(e),this}setFromArray(t){let
  e=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let
  o=0,l=t.length;o<i>r&amp;&amp;(r=l),c&gt;s&amp;&amp;(s=c),h&gt;a&amp;&amp;(a=h)}return
  this.min.set(e,n,i),this.max.set(r,s,a),this}setFromBufferAttribute(t){let
  e=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let
  o=0,l=t.count;o</i>r&amp;&amp;(r=l),c&gt;s&amp;&amp;(s=c),h&gt;a&amp;&amp;(a=h)}return
  this.min.set(e,n,i),this.max.set(r,s,a),this}setFromPoints(t){this.makeEmpty();for(let
  e=0,n=t.length;ethis.max.x||t.ythis.max.y||t.zthis.max.z)}containsBox(t){return
  this.min.x&lt;=t.min.x&amp;&amp;t.max.x&lt;=this.max.x&amp;&amp;this.min.y&lt;=t.min.y&amp;&amp;t.max.y&lt;=this.max.y&amp;&amp;this.min.z&lt;=t.min.z&amp;&amp;t.max.z&lt;=this.max.z}getParameter(t,e){return
  void 0===e&amp;&amp;(console.warn("THREE.Box3: .getParameter()
  target is now required"),e=new
  Lt),e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.xthis.max.x||t.max.ythis.max.y||t.max.zthis.max.z)}intersectsSphere(t){return
  this.clampPoint(t.center,It),It.distanceToSquared(t.center)&lt;=t.radius*t.radius}intersectsPlane(t){let
  e,n;return
  t.normal.x&gt;0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y&gt;0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z&gt;0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e&lt;=-t.constant&amp;&amp;n&gt;=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ut),kt.subVectors(this.max,Ut),Bt.subVectors(t.a,Ut),zt.subVectors(t.b,Ut),Ft.subVectors(t.c,Ut),Ot.subVectors(zt,Bt),Ht.subVectors(Ft,zt),Gt.subVectors(Bt,Ft);let
  e=[0,-Ot.z,Ot.y,0,-Ht.z,Ht.y,0,-Gt.z,Gt.y,Ot.z,0,-Ot.x,Ht.z,0,-Ht.x,Gt.z,0,-Gt.x,-Ot.y,Ot.x,0,-Ht.y,Ht.x,0,-Gt.y,Gt.x,0];return!!jt(e,Bt,zt,Ft,kt)&amp;&amp;(e=[1,0,0,0,1,0,0,0,1],!!jt(e,Bt,zt,Ft,kt)&amp;&amp;(Vt.crossVectors(Ot,Ht),e=[Vt.x,Vt.y,Vt.z],jt(e,Bt,zt,Ft,kt)))}clampPoint(t,e){return
  void 0===e&amp;&amp;(console.warn("THREE.Box3: .clampPoint()
  target is now required"),e=new
  Lt),e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return
  It.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return
  void 0===t&amp;&amp;console.error("THREE.Box3:
  .getBoundingSphere() target is now
  required"),this.getCenter(t.center),t.radius=.5*this.getSize(It).length(),t}intersect(t){return
  this.min.max(t.min),this.max.min(t.max),this.isEmpty()&amp;&amp;this.makeEmpty(),this}union(t){return
  this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return
  this.isEmpty()||(Dt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dt)),this}translate(t){return
  this.min.add(t),this.max.add(t),this}equals(t){return
  t.min.equals(this.min)&amp;&amp;t.max.equals(this.max)}}Pt.prototype.isBox3=!0;const
  Dt=[new Lt,new Lt,new Lt,new Lt,new Lt,new Lt,new Lt,new
  Lt],It=new Lt,Nt=new Pt,Bt=new Lt,zt=new Lt,Ft=new Lt,Ot=new
  Lt,Ht=new Lt,Gt=new Lt,Ut=new Lt,kt=new Lt,Vt=new Lt,Wt=new
  Lt;function jt(t,e,n,i,r){for(let
  s=0,a=t.length-3;s&lt;=a;s+=3){Wt.fromArray(t,s);const
  a=r.x*Math.abs(Wt.x)+r.y*Math.abs(Wt.y)+r.z*Math.abs(Wt.z),o=e.dot(Wt),l=n.dot(Wt),c=i.dot(Wt);if(Math.max(-Math.max(o,l,c),Math.min(o,l,c))&gt;a)return!1}return!0}const
  qt=new Pt,Xt=new Lt,Yt=new Lt,Zt=new Lt;class
  Jt{constructor(t=new
  Lt,e=-1){this.center=t,this.radius=e}set(t,e){return
  this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const
  n=this.center;void
  0!==e?n.copy(e):qt.setFromPoints(t).getCenter(n);let i=0;for(let
  e=0,r=t.length;e&lt;0}makeEmpty(){return
  this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return
  t.distanceToSquared(this.center)&lt;=this.radius*this.radius}distanceToPoint(t){return
  t.distanceTo(this.center)-this.radius}intersectsSphere(t){const
  e=this.radius+t.radius;return
  t.center.distanceToSquared(this.center)&lt;=e*e}intersectsBox(t){return
  t.intersectsSphere(this)}intersectsPlane(t){return
  Math.abs(t.distanceToPoint(this.center))&lt;=this.radius}clampPoint(t,e){const
  n=this.center.distanceToSquared(t);return void
  0===e&amp;&amp;(console.warn("THREE.Sphere: .clampPoint() target
  is now required"),e=new
  Lt),e.copy(t),n&gt;this.radius*this.radius&amp;&amp;(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return
  void 0===t&amp;&amp;(console.warn("THREE.Sphere:
  .getBoundingBox() target is now required"),t=new
  Pt),this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return
  this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return
  this.center.add(t),this}expandByPoint(t){Zt.subVectors(t,this.center);const
  e=Zt.lengthSq();if(e&gt;this.radius*this.radius){const
  t=Math.sqrt(e),n=.5*(t-this.radius);this.center.add(Zt.multiplyScalar(n/t)),this.radius+=n}return
  this}union(t){return
  Yt.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(Xt.copy(t.center).add(Yt)),this.expandByPoint(Xt.copy(t.center).sub(Yt)),this}equals(t){return
  t.center.equals(this.center)&amp;&amp;t.radius===this.radius}clone(){return(new
  this.constructor).copy(this)}}const Qt=new Lt,Kt=new Lt,$t=new
  Lt,te=new Lt,ee=new Lt,ne=new Lt,ie=new Lt;class
  re{constructor(t=new Lt,e=new
  Lt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return
  this.origin.copy(t),this.direction.copy(e),this}copy(t){return
  this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return
  void 0===e&amp;&amp;(console.warn("THREE.Ray: .at() target is now
  required"),e=new
  Lt),e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return
  this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return
  this.origin.copy(this.at(t,Qt)),this}closestPointToPoint(t,e){void
  0===e&amp;&amp;(console.warn("THREE.Ray: .closestPointToPoint()
  target is now required"),e=new
  Lt),e.subVectors(t,this.origin);const
  n=e.dot(this.direction);return
  n&lt;0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return
  Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const
  e=Qt.subVectors(t,this.origin).dot(this.direction);return
  e&lt;0?this.origin.distanceToSquared(t):(Qt.copy(this.direction).multiplyScalar(e).add(this.origin),Qt.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Kt.copy(t).add(e).multiplyScalar(.5),$t.copy(e).sub(t).normalize(),te.copy(this.origin).sub(Kt);const
  r=.5*t.distanceTo(e),s=-this.direction.dot($t),a=te.dot(this.direction),o=-te.dot($t),l=te.lengthSq(),c=Math.abs(1-s*s);let
  h,u,d,p;if(c&gt;0)if(h=s*o-a,u=s*a-o,p=r*c,h&gt;=0)if(u&gt;=-p)if(u&lt;=p){const
  t=1/c;h*=t,u*=t,d=h*(h+s*u+2*a)+u*(s*h+u+2*o)+l}else
  u=r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;else
  u=-r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;else
  u&lt;=-p?(h=Math.max(0,-(-s*r+a)),u=h&gt;0?-r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l):u&lt;=p?(h=0,u=Math.min(Math.max(-r,-o),r),d=u*(u+2*o)+l):(h=Math.max(0,-(s*r+a)),u=h&gt;0?r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l);else
  u=s&gt;0?-r:r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;return
  n&amp;&amp;n.copy(this.direction).multiplyScalar(h).add(this.origin),i&amp;&amp;i.copy($t).multiplyScalar(u).add(Kt),d}intersectSphere(t,e){Qt.subVectors(t.center,this.origin);const
  n=Qt.dot(this.direction),i=Qt.dot(Qt)-n*n,r=t.radius*t.radius;if(i&gt;r)return
  null;const s=Math.sqrt(r-i),a=n-s,o=n+s;return
  a&lt;0&amp;&amp;o&lt;0?null:a&lt;0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return
  this.distanceSqToPoint(t.center)&lt;=t.radius*t.radius}distanceToPlane(t){const
  e=t.normal.dot(this.direction);if(0===e)return
  0===t.distanceToPoint(this.origin)?0:null;const
  n=-(this.origin.dot(t.normal)+t.constant)/e;return
  n&gt;=0?n:null}intersectPlane(t,e){const
  n=this.distanceToPlane(t);return
  null===n?null:this.at(n,e)}intersectsPlane(t){const
  e=t.distanceToPoint(this.origin);if(0===e)return!0;return
  t.normal.dot(this.direction)*e&lt;0}intersectBox(t,e){let
  n,i,r,s,a,o;const
  l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return
  l&gt;=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),c&gt;=0?(r=(t.min.y-u.y)*c,s=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,s=(t.min.y-u.y)*c),n&gt;s||r&gt;i?null:((r&gt;n||n!=n)&amp;&amp;(n=r),(s<i>=0?(a=(t.min.z-u.z)*h,o=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,o=(t.min.z-u.z)*h),n&gt;o||a&gt;i?null:((a&gt;n||n!=n)&amp;&amp;(n=a),(o</i>&lt;0?null:this.at(n&gt;=0?n:i,e)))}intersectsBox(t){return
  null!==this.intersectBox(t,Qt)}intersectTriangle(t,e,n,i,r){ee.subVectors(e,t),ne.subVectors(n,t),ie.crossVectors(ee,ne);let
  s,a=this.direction.dot(ie);if(a&gt;0){if(i)return
  null;s=1}else{if(!(a&lt;0))return
  null;s=-1,a=-a}te.subVectors(this.origin,t);const
  o=s*this.direction.dot(ne.crossVectors(te,ne));if(o&lt;0)return
  null;const l=s*this.direction.dot(ee.cross(te));if(l&lt;0)return
  null;if(o+l&gt;a)return null;const c=-s*te.dot(ie);return
  c&lt;0?null:this.at(c/a,r)}applyMatrix4(t){return
  this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return
  t.origin.equals(this.origin)&amp;&amp;t.direction.equals(this.direction)}clone(){return(new
  this.constructor).copy(this)}}class
  se{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length&gt;0&amp;&amp;console.error("THREE.Matrix4:
  the constructor no longer reads arguments. use .set()
  instead.")}set(t,e,n,i,r,s,a,o,l,c,h,u,d,p,m,f){const
  g=this.elements;return
  g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=s,g[9]=a,g[13]=o,g[2]=l,g[6]=c,g[10]=h,g[14]=u,g[3]=d,g[7]=p,g[11]=m,g[15]=f,this}identity(){return
  this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return(new
  se).fromArray(this.elements)}copy(t){const
  e=this.elements,n=t.elements;return
  e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const
  e=this.elements,n=t.elements;return
  e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const
  e=t.elements;return
  this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return
  t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return
  this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const
  e=this.elements,n=t.elements,i=1/ae.setFromMatrixColumn(t,0).length(),r=1/ae.setFromMatrixColumn(t,1).length(),s=1/ae.setFromMatrixColumn(t,2).length();return
  e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&amp;&amp;t.isEuler||console.error("THREE.Matrix4:
  .makeRotationFromEuler() now expects a Euler rotation rather than
  a Vector3 and order.");const
  e=this.elements,n=t.x,i=t.y,r=t.z,s=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),h=Math.sin(r);if("XYZ"===t.order){const
  t=s*c,n=s*h,i=a*c,r=a*h;e[0]=o*c,e[4]=-o*h,e[8]=l,e[1]=n+i*l,e[5]=t-r*l,e[9]=-a*o,e[2]=r-t*l,e[6]=i+n*l,e[10]=s*o}else
  if("YXZ"===t.order){const
  t=o*c,n=o*h,i=l*c,r=l*h;e[0]=t+r*a,e[4]=i*a-n,e[8]=s*l,e[1]=s*h,e[5]=s*c,e[9]=-a,e[2]=n*a-i,e[6]=r+t*a,e[10]=s*o}else
  if("ZXY"===t.order){const
  t=o*c,n=o*h,i=l*c,r=l*h;e[0]=t-r*a,e[4]=-s*h,e[8]=i+n*a,e[1]=n+i*a,e[5]=s*c,e[9]=r-t*a,e[2]=-s*l,e[6]=a,e[10]=s*o}else
  if("ZYX"===t.order){const
  t=s*c,n=s*h,i=a*c,r=a*h;e[0]=o*c,e[4]=i*l-n,e[8]=t*l+r,e[1]=o*h,e[5]=r*l+t,e[9]=n*l-i,e[2]=-l,e[6]=a*o,e[10]=s*o}else
  if("YZX"===t.order){const
  t=s*o,n=s*l,i=a*o,r=a*l;e[0]=o*c,e[4]=r-t*h,e[8]=i*h+n,e[1]=h,e[5]=s*c,e[9]=-a*c,e[2]=-l*c,e[6]=n*h+i,e[10]=t-r*h}else
  if("XZY"===t.order){const
  t=s*o,n=s*l,i=a*o,r=a*l;e[0]=o*c,e[4]=-h,e[8]=l*c,e[1]=t*h+r,e[5]=s*c,e[9]=n*h-i,e[2]=i*h-n,e[6]=a*c,e[10]=r*h+t}return
  e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return
  this.compose(le,t,ce)}lookAt(t,e,n){const i=this.elements;return
  de.subVectors(t,e),0===de.lengthSq()&amp;&amp;(de.z=1),de.normalize(),he.crossVectors(n,de),0===he.lengthSq()&amp;&amp;(1===Math.abs(n.z)?de.x+=1e-4:de.z+=1e-4,de.normalize(),he.crossVectors(n,de)),he.normalize(),ue.crossVectors(de,he),i[0]=he.x,i[4]=ue.x,i[8]=de.x,i[1]=he.y,i[5]=ue.y,i[9]=de.y,i[2]=he.z,i[6]=ue.z,i[10]=de.z,this}multiply(t,e){return
  void 0!==e?(console.warn("THREE.Matrix4: .multiply() now only
  accepts one argument. Use .multiplyMatrices( a, b )
  instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return
  this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const
  n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[4],o=n[8],l=n[12],c=n[1],h=n[5],u=n[9],d=n[13],p=n[2],m=n[6],f=n[10],g=n[14],v=n[3],y=n[7],x=n[11],_=n[15],w=i[0],b=i[4],M=i[8],S=i[12],T=i[1],E=i[5],A=i[9],L=i[13],R=i[2],C=i[6],P=i[10],D=i[14],I=i[3],N=i[7],B=i[11],z=i[15];return
  r[0]=s*w+a*T+o*R+l*I,r[4]=s*b+a*E+o*C+l*N,r[8]=s*M+a*A+o*P+l*B,r[12]=s*S+a*L+o*D+l*z,r[1]=c*w+h*T+u*R+d*I,r[5]=c*b+h*E+u*C+d*N,r[9]=c*M+h*A+u*P+d*B,r[13]=c*S+h*L+u*D+d*z,r[2]=p*w+m*T+f*R+g*I,r[6]=p*b+m*E+f*C+g*N,r[10]=p*M+m*A+f*P+g*B,r[14]=p*S+m*L+f*D+g*z,r[3]=v*w+y*T+x*R+_*I,r[7]=v*b+y*E+x*C+_*N,r[11]=v*M+y*A+x*P+_*B,r[15]=v*S+y*L+x*D+_*z,this}multiplyScalar(t){const
  e=this.elements;return
  e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const
  t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],s=t[1],a=t[5],o=t[9],l=t[13],c=t[2],h=t[6],u=t[10],d=t[14];return
  t[3]*(+r*o*h-i*l*h-r*a*u+n*l*u+i*a*d-n*o*d)+t[7]*(+e*o*d-e*l*u+r*s*u-i*s*d+i*l*c-r*o*c)+t[11]*(+e*l*h-e*a*d-r*s*h+n*s*d+r*a*c-n*l*c)+t[15]*(-i*a*c-e*o*h+e*a*u+i*s*h-n*s*u+n*o*c)}transpose(){const
  t=this.elements;let e;return
  e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const
  i=this.elements;return
  t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const
  t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=t[9],u=t[10],d=t[11],p=t[12],m=t[13],f=t[14],g=t[15],v=h*f*l-m*u*l+m*o*d-a*f*d-h*o*g+a*u*g,y=p*u*l-c*f*l-p*o*d+s*f*d+c*o*g-s*u*g,x=c*m*l-p*h*l+p*a*d-s*m*d-c*a*g+s*h*g,_=p*h*o-c*m*o-p*a*u+s*m*u+c*a*f-s*h*f,w=e*v+n*y+i*x+r*_;if(0===w)return
  this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return
  t[0]=v*b,t[1]=(m*u*r-h*f*r-m*i*d+n*f*d+h*i*g-n*u*g)*b,t[2]=(a*f*r-m*o*r+m*i*l-n*f*l-a*i*g+n*o*g)*b,t[3]=(h*o*r-a*u*r-h*i*l+n*u*l+a*i*d-n*o*d)*b,t[4]=y*b,t[5]=(c*f*r-p*u*r+p*i*d-e*f*d-c*i*g+e*u*g)*b,t[6]=(p*o*r-s*f*r-p*i*l+e*f*l+s*i*g-e*o*g)*b,t[7]=(s*u*r-c*o*r+c*i*l-e*u*l-s*i*d+e*o*d)*b,t[8]=x*b,t[9]=(p*h*r-c*m*r-p*n*d+e*m*d+c*n*g-e*h*g)*b,t[10]=(s*m*r-p*a*r+p*n*l-e*m*l-s*n*g+e*a*g)*b,t[11]=(c*a*r-s*h*r-c*n*l+e*h*l+s*n*d-e*a*d)*b,t[12]=_*b,t[13]=(c*m*i-p*h*i+p*n*u-e*m*u-c*n*f+e*h*f)*b,t[14]=(p*a*i-s*m*i-p*n*o+e*m*o+s*n*f-e*a*f)*b,t[15]=(s*h*i-c*a*i+c*n*o-e*h*o-s*n*u+e*a*u)*b,this}scale(t){const
  e=this.elements,n=t.x,i=t.y,r=t.z;return
  e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const
  t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return
  Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return
  this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const
  e=Math.cos(t),n=Math.sin(t);return
  this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const
  e=Math.cos(t),n=Math.sin(t);return
  this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const
  e=Math.cos(t),n=Math.sin(t);return
  this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const
  n=Math.cos(e),i=Math.sin(e),r=1-n,s=t.x,a=t.y,o=t.z,l=r*s,c=r*a;return
  this.set(l*s+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*s,0,l*o-i*a,c*o+i*s,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return
  this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n){return
  this.set(1,e,n,0,t,1,n,0,t,e,1,0,0,0,0,1),this}compose(t,e,n){const
  i=this.elements,r=e._x,s=e._y,a=e._z,o=e._w,l=r+r,c=s+s,h=a+a,u=r*l,d=r*c,p=r*h,m=s*c,f=s*h,g=a*h,v=o*l,y=o*c,x=o*h,_=n.x,w=n.y,b=n.z;return
  i[0]=(1-(m+g))*_,i[1]=(d+x)*_,i[2]=(p-y)*_,i[3]=0,i[4]=(d-x)*w,i[5]=(1-(u+g))*w,i[6]=(f+v)*w,i[7]=0,i[8]=(p+y)*b,i[9]=(f-v)*b,i[10]=(1-(u+m))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const
  i=this.elements;let r=ae.set(i[0],i[1],i[2]).length();const
  s=ae.set(i[4],i[5],i[6]).length(),a=ae.set(i[8],i[9],i[10]).length();this.determinant()&lt;0&amp;&amp;(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],oe.copy(this);const
  o=1/r,l=1/s,c=1/a;return
  oe.elements[0]*=o,oe.elements[1]*=o,oe.elements[2]*=o,oe.elements[4]*=l,oe.elements[5]*=l,oe.elements[6]*=l,oe.elements[8]*=c,oe.elements[9]*=c,oe.elements[10]*=c,e.setFromRotationMatrix(oe),n.x=r,n.y=s,n.z=a,this}makePerspective(t,e,n,i,r,s){void
  0===s&amp;&amp;console.warn("THREE.Matrix4: .makePerspective()
  has been redefined and has a new signature. Please check the
  docs.");const
  a=this.elements,o=2*r/(e-t),l=2*r/(n-i),c=(e+t)/(e-t),h=(n+i)/(n-i),u=-(s+r)/(s-r),d=-2*s*r/(s-r);return
  a[0]=o,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,r,s){const
  a=this.elements,o=1/(e-t),l=1/(n-i),c=1/(s-r),h=(e+t)*o,u=(n+i)*l,d=(s+r)*c;return
  a[0]=2*o,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const
  e=this.elements,n=t.elements;for(let
  t=0;t&lt;16;t++)if(e[t]!==n[t])return!1;return!0}fromArray(t,e=0){for(let
  n=0;n&lt;16;n++)this.elements[n]=t[n+e];return
  this}toArray(t=[],e=0){const n=this.elements;return
  t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}se.prototype.isMatrix4=!0;const
  ae=new Lt,oe=new se,le=new Lt(0,0,0),ce=new Lt(1,1,1),he=new
  Lt,ue=new Lt,de=new Lt,pe=new se,me=new At;class
  fe{constructor(t=0,e=0,n=0,i=fe.DefaultOrder){this._x=t,this._y=e,this._z=n,this._order=i}get
  x(){return this._x}set
  x(t){this._x=t,this._onChangeCallback()}get y(){return
  this._y}set y(t){this._y=t,this._onChangeCallback()}get
  z(){return this._z}set
  z(t){this._z=t,this._onChangeCallback()}get order(){return
  this._order}set
  order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i){return
  this._x=t,this._y=e,this._z=n,this._order=i||this._order,this._onChangeCallback(),this}clone(){return
  new
  this.constructor(this._x,this._y,this._z,this._order)}copy(t){return
  this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e,n){const
  i=t.elements,r=i[0],s=i[4],a=i[8],o=i[1],l=i[5],c=i[9],h=i[2],u=i[6],d=i[10];switch(e=e||this._order){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)&lt;.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(c,-1,1)),Math.abs(c)&lt;.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(u,-1,1)),Math.abs(u)&lt;.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-ht(h,-1,1)),Math.abs(h)&lt;.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(ht(o,-1,1)),Math.abs(o)&lt;.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ht(s,-1,1)),Math.abs(s)&lt;.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler:
  .setFromRotationMatrix() encountered an unknown order:
  "+e)}return
  this._order=e,!1!==n&amp;&amp;this._onChangeCallback(),this}setFromQuaternion(t,e,n){return
  pe.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pe,e,n)}setFromVector3(t,e){return
  this.set(t.x,t.y,t.z,e||this._order)}reorder(t){return
  me.setFromEuler(this),this.setFromQuaternion(me,t)}equals(t){return
  t._x===this._x&amp;&amp;t._y===this._y&amp;&amp;t._z===this._z&amp;&amp;t._order===this._order}fromArray(t){return
  this._x=t[0],this._y=t[1],this._z=t[2],void
  0!==t[3]&amp;&amp;(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return
  t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}toVector3(t){return
  t?t.set(this._x,this._y,this._z):new
  Lt(this._x,this._y,this._z)}_onChange(t){return
  this._onChangeCallback=t,this}_onChangeCallback(){}}fe.prototype.isEuler=!0,fe.DefaultOrder="XYZ",fe.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class
  ge{constructor(){this.mask=1}set(t){this.mask=1&lt;&lt;&lt;&lt;1){for(let
  t=0;t1){for(let t=0;t<i i=
  "this.children[n].getObjectByProperty(t,e);if(void" void=""
  target="" is="" now="" e="this.children;for(let" n=
  "0,i=e.length;n">0){i.children=[];for(let
  e=0;e0){i.animations=[];for(let
  e=0;e0&amp;&amp;(n.geometries=e),i.length&gt;0&amp;&amp;(n.materials=i),r.length&gt;0&amp;&amp;(n.textures=r),a.length&gt;0&amp;&amp;(n.images=a),o.length&gt;0&amp;&amp;(n.shapes=o),l.length&gt;0&amp;&amp;(n.skeletons=l),c.length&gt;0&amp;&amp;(n.animations=c)}return
  n.object=i,n;function s(t){const e=[];for(const n in t){const
  i=t[n];delete i.metadata,e.push(i)}return e}}clone(t){return(new
  this.constructor).copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),!0===e)for(let
  e=0;e&lt;0||r&gt;1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const
  e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return
  e&lt;0&amp;&amp;n&gt;0||n&lt;0&amp;&amp;e&gt;0}intersectsBox(t){return
  t.intersectsPlane(this)}intersectsSphere(t){return
  t.intersectsPlane(this)}coplanarPoint(t){return void
  0===t&amp;&amp;(console.warn("THREE.Plane: .coplanarPoint()
  target is now required"),t=new
  Lt),t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const
  n=e||Ie.getNormalMatrix(t),i=this.coplanarPoint(Pe).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return
  this.constant=-i.dot(r),this}translate(t){return
  this.constant-=t.dot(this.normal),this}equals(t){return
  t.normal.equals(this.normal)&amp;&amp;t.constant===this.constant}clone(){return(new
  this.constructor).copy(this)}}Ne.prototype.isPlane=!0;const
  Be=new Lt,ze=new Lt,Fe=new Lt,Oe=new Lt,He=new Lt,Ge=new
  Lt,Ue=new Lt,ke=new Lt,Ve=new Lt,We=new Lt;class
  je{constructor(t=new Lt,e=new Lt,n=new
  Lt){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){void
  0===i&amp;&amp;(console.warn("THREE.Triangle: .getNormal() target
  is now required"),i=new
  Lt),i.subVectors(n,e),Be.subVectors(t,e),i.cross(Be);const
  r=i.lengthSq();return
  r&gt;0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static
  getBarycoord(t,e,n,i,r){Be.subVectors(i,e),ze.subVectors(n,e),Fe.subVectors(t,e);const
  s=Be.dot(Be),a=Be.dot(ze),o=Be.dot(Fe),l=ze.dot(ze),c=ze.dot(Fe),h=s*l-a*a;if(void
  0===r&amp;&amp;(console.warn("THREE.Triangle: .getBarycoord()
  target is now required"),r=new Lt),0===h)return
  r.set(-2,-1,-1);const u=1/h,d=(l*o-a*c)*u,p=(s*c-a*o)*u;return
  r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return
  this.getBarycoord(t,e,n,i,Oe),Oe.x&gt;=0&amp;&amp;Oe.y&gt;=0&amp;&amp;Oe.x+Oe.y&lt;=1}static
  getUV(t,e,n,i,r,s,a,o){return
  this.getBarycoord(t,e,n,i,Oe),o.set(0,0),o.addScaledVector(r,Oe.x),o.addScaledVector(s,Oe.y),o.addScaledVector(a,Oe.z),o}static
  isFrontFacing(t,e,n,i){return
  Be.subVectors(n,e),ze.subVectors(t,e),Be.cross(ze).dot(i)&lt;0}set(t,e,n){return
  this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return
  this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}clone(){return(new
  this.constructor).copy(this)}copy(t){return
  this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return
  Be.subVectors(this.c,this.b),ze.subVectors(this.a,this.b),.5*Be.cross(ze).length()}getMidpoint(t){return
  void 0===t&amp;&amp;(console.warn("THREE.Triangle: .getMidpoint()
  target is now required"),t=new
  Lt),t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return
  je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return void
  0===t&amp;&amp;(console.warn("THREE.Triangle: .getPlane() target
  is now required"),t=new
  Ne),t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return
  je.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return
  je.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return
  je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return
  je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return
  t.intersectsTriangle(this)}closestPointToPoint(t,e){void
  0===e&amp;&amp;(console.warn("THREE.Triangle:
  .closestPointToPoint() target is now required"),e=new Lt);const
  n=this.a,i=this.b,r=this.c;let
  s,a;He.subVectors(i,n),Ge.subVectors(r,n),ke.subVectors(t,n);const
  o=He.dot(ke),l=Ge.dot(ke);if(o&lt;=0&amp;&amp;l&lt;=0)return
  e.copy(n);Ve.subVectors(t,i);const
  c=He.dot(Ve),h=Ge.dot(Ve);if(c&gt;=0&amp;&amp;h&lt;=c)return
  e.copy(i);const
  u=o*h-c*l;if(u&lt;=0&amp;&amp;o&gt;=0&amp;&amp;c&lt;=0)return
  s=o/(o-c),e.copy(n).addScaledVector(He,s);We.subVectors(t,r);const
  d=He.dot(We),p=Ge.dot(We);if(p&gt;=0&amp;&amp;d&lt;=p)return
  e.copy(r);const
  m=d*l-o*p;if(m&lt;=0&amp;&amp;l&gt;=0&amp;&amp;p&lt;=0)return
  a=l/(l-p),e.copy(n).addScaledVector(Ge,a);const
  f=c*p-d*h;if(f&lt;=0&amp;&amp;h-c&gt;=0&amp;&amp;d-p&gt;=0)return
  Ue.subVectors(r,i),a=(h-c)/(h-c+(d-p)),e.copy(i).addScaledVector(Ue,a);const
  g=1/(f+m+u);return
  s=m*g,a=u*g,e.copy(n).addScaledVector(He,s).addScaledVector(Ge,a)}equals(t){return
  t.a.equals(this.a)&amp;&amp;t.b.equals(this.b)&amp;&amp;t.c.equals(this.c)}}let
  qe=0;function
  Xe(){Object.defineProperty(this,"id",{value:qe++}),this.uuid=ct(),this.name="",this.type="Material",this.fog=!0,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tt,this.stencilZFail=tt,this.stencilZPass=tt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}Xe.prototype=Object.assign(Object.create(rt.prototype),{constructor:Xe,isMaterial:!0,onBuild:function(){},onBeforeCompile:function(){},customProgramCacheKey:function(){return
  this.onBeforeCompile.toString()},setValues:function(t){if(void
  0!==t)for(const e in t){const n=t[e];if(void
  0===n){console.warn("THREE.Material: '"+e+"' parameter is
  undefined.");continue}if("shading"===e){console.warn("THREE."+this.type+":
  .shading has been removed. Use the boolean .flatShading
  instead."),this.flatShading=1===n;continue}const i=this[e];void
  0!==i?i&amp;&amp;i.isColor?i.set(n):i&amp;&amp;i.isVector3&amp;&amp;n&amp;&amp;n.isVector3?i.copy(n):this[e]=n:console.warn("THREE."+this.type+":
  '"+e+"' is not a property of this
  material.")}},toJSON:function(t){const e=void
  0===t||"string"==typeof
  t;e&amp;&amp;(t={textures:{},images:{}});const
  n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function
  i(t){const e=[];for(const n in t){const i=t[n];delete
  i.metadata,e.push(i)}return
  e}if(n.uuid=this.uuid,n.type=this.type,""!==this.name&amp;&amp;(n.name=this.name),this.color&amp;&amp;this.color.isColor&amp;&amp;(n.color=this.color.getHex()),void
  0!==this.roughness&amp;&amp;(n.roughness=this.roughness),void
  0!==this.metalness&amp;&amp;(n.metalness=this.metalness),this.sheen&amp;&amp;this.sheen.isColor&amp;&amp;(n.sheen=this.sheen.getHex()),this.emissive&amp;&amp;this.emissive.isColor&amp;&amp;(n.emissive=this.emissive.getHex()),this.emissiveIntensity&amp;&amp;1!==this.emissiveIntensity&amp;&amp;(n.emissiveIntensity=this.emissiveIntensity),this.specular&amp;&amp;this.specular.isColor&amp;&amp;(n.specular=this.specular.getHex()),void
  0!==this.shininess&amp;&amp;(n.shininess=this.shininess),void
  0!==this.clearcoat&amp;&amp;(n.clearcoat=this.clearcoat),void
  0!==this.clearcoatRoughness&amp;&amp;(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&amp;&amp;this.clearcoatMap.isTexture&amp;&amp;(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&amp;&amp;this.clearcoatRoughnessMap.isTexture&amp;&amp;(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&amp;&amp;this.clearcoatNormalMap.isTexture&amp;&amp;(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&amp;&amp;this.map.isTexture&amp;&amp;(n.map=this.map.toJSON(t).uuid),this.matcap&amp;&amp;this.matcap.isTexture&amp;&amp;(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&amp;&amp;this.alphaMap.isTexture&amp;&amp;(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&amp;&amp;this.lightMap.isTexture&amp;&amp;(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&amp;&amp;this.aoMap.isTexture&amp;&amp;(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&amp;&amp;this.bumpMap.isTexture&amp;&amp;(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&amp;&amp;this.normalMap.isTexture&amp;&amp;(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&amp;&amp;this.displacementMap.isTexture&amp;&amp;(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&amp;&amp;this.roughnessMap.isTexture&amp;&amp;(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&amp;&amp;this.metalnessMap.isTexture&amp;&amp;(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&amp;&amp;this.emissiveMap.isTexture&amp;&amp;(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&amp;&amp;this.specularMap.isTexture&amp;&amp;(n.specularMap=this.specularMap.toJSON(t).uuid),this.envMap&amp;&amp;this.envMap.isTexture&amp;&amp;(n.envMap=this.envMap.toJSON(t).uuid,void
  0!==this.combine&amp;&amp;(n.combine=this.combine)),void
  0!==this.envMapIntensity&amp;&amp;(n.envMapIntensity=this.envMapIntensity),void
  0!==this.reflectivity&amp;&amp;(n.reflectivity=this.reflectivity),void
  0!==this.refractionRatio&amp;&amp;(n.refractionRatio=this.refractionRatio),this.gradientMap&amp;&amp;this.gradientMap.isTexture&amp;&amp;(n.gradientMap=this.gradientMap.toJSON(t).uuid),void
  0!==this.size&amp;&amp;(n.size=this.size),null!==this.shadowSide&amp;&amp;(n.shadowSide=this.shadowSide),void
  0!==this.sizeAttenuation&amp;&amp;(n.sizeAttenuation=this.sizeAttenuation),1!==this.blending&amp;&amp;(n.blending=this.blending),0!==this.side&amp;&amp;(n.side=this.side),this.vertexColors&amp;&amp;(n.vertexColors=!0),this.opacity&lt;1&amp;&amp;(n.opacity=this.opacity),!0===this.transparent&amp;&amp;(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&amp;&amp;0!==this.rotation&amp;&amp;(n.rotation=this.rotation),!0===this.polygonOffset&amp;&amp;(n.polygonOffset=!0),0!==this.polygonOffsetFactor&amp;&amp;(n.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&amp;&amp;(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&amp;&amp;1!==this.linewidth&amp;&amp;(n.linewidth=this.linewidth),void
  0!==this.dashSize&amp;&amp;(n.dashSize=this.dashSize),void
  0!==this.gapSize&amp;&amp;(n.gapSize=this.gapSize),void
  0!==this.scale&amp;&amp;(n.scale=this.scale),!0===this.dithering&amp;&amp;(n.dithering=!0),this.alphaTest&gt;0&amp;&amp;(n.alphaTest=this.alphaTest),!0===this.alphaToCoverage&amp;&amp;(n.alphaToCoverage=this.alphaToCoverage),!0===this.premultipliedAlpha&amp;&amp;(n.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&amp;&amp;(n.wireframe=this.wireframe),this.wireframeLinewidth&gt;1&amp;&amp;(n.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&amp;&amp;(n.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&amp;&amp;(n.wireframeLinejoin=this.wireframeLinejoin),!0===this.morphTargets&amp;&amp;(n.morphTargets=!0),!0===this.morphNormals&amp;&amp;(n.morphNormals=!0),!0===this.skinning&amp;&amp;(n.skinning=!0),!0===this.flatShading&amp;&amp;(n.flatShading=this.flatShading),!1===this.visible&amp;&amp;(n.visible=!1),!1===this.toneMapped&amp;&amp;(n.toneMapped=!1),"{}"!==JSON.stringify(this.userData)&amp;&amp;(n.userData=this.userData),e){const
  e=i(t.textures),r=i(t.images);e.length&gt;0&amp;&amp;(n.textures=e),r.length&gt;0&amp;&amp;(n.images=r)}return
  n},clone:function(){return(new
  this.constructor).copy(this)},copy:function(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const
  e=t.clippingPlanes;let n=null;if(null!==e){const t=e.length;n=new
  Array(t);for(let i=0;i!==t;++i)n[i]=e[i].clone()}return
  this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),Object.defineProperty(Xe.prototype,"needsUpdate",{set:function(t){!0===t&amp;&amp;this.version++}});const
  Ye={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ze={h:0,s:0,l:0},Je={h:0,s:0,l:0};function
  Qe(t,e,n){return
  n&lt;0&amp;&amp;(n+=1),n&gt;1&amp;&amp;(n-=1),n&lt;1/6?t+6*(e-t)*n:n&lt;.5?e:n&lt;2/3?t+6*(e-t)*(2/3-n):t}function
  Ke(t){return
  t&lt;.04045?.0773993808*t:Math.pow(.9478672986*t+.0521327014,2.4)}function
  $e(t){return
  t&lt;.0031308?12.92*t:1.055*Math.pow(t,.41666)-.055}class
  tn{constructor(t,e,n){return void 0===e&amp;&amp;void
  0===n?this.set(t):this.setRGB(t,e,n)}set(t){return
  t&amp;&amp;t.isColor?this.copy(t):"number"==typeof
  t?this.setHex(t):"string"==typeof
  t&amp;&amp;this.setStyle(t),this}setScalar(t){return
  this.r=t,this.g=t,this.b=t,this}setHex(t){return
  t=Math.floor(t),this.r=(t&gt;&gt;16&amp;255)/255,this.g=(t&gt;&gt;8&amp;255)/255,this.b=(255&amp;t)/255,this}setRGB(t,e,n){return
  this.r=t,this.g=e,this.b=n,this}setHSL(t,e,n){if(t=ut(t,1),e=ht(e,0,1),n=ht(n,0,1),0===e)this.r=this.g=this.b=n;else{const
  i=n&lt;=.5?n*(1+e):n+e-n*e,r=2*n-i;this.r=Qe(r,i,t+1/3),this.g=Qe(r,i,t),this.b=Qe(r,i,t-1/3)}return
  this}setStyle(t){function e(e){void
  0!==e&amp;&amp;parseFloat(e)&lt;1&amp;&amp;console.warn("THREE.Color:
  Alpha component of "+t+" will be ignored.")}let
  n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let t;const
  i=n[1],r=n[2];switch(i){case"rgb":case"rgba":if(t=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return
  this.r=Math.min(255,parseInt(t[1],10))/255,this.g=Math.min(255,parseInt(t[2],10))/255,this.b=Math.min(255,parseInt(t[3],10))/255,e(t[4]),this;if(t=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return
  this.r=Math.min(100,parseInt(t[1],10))/100,this.g=Math.min(100,parseInt(t[2],10))/100,this.b=Math.min(100,parseInt(t[3],10))/100,e(t[4]),this;break;case"hsl":case"hsla":if(t=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const
  n=parseFloat(t[1])/360,i=parseInt(t[2],10)/100,r=parseInt(t[3],10)/100;return
  e(t[4]),this.setHSL(n,i,r)}}}else
  if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const
  t=n[1],e=t.length;if(3===e)return
  this.r=parseInt(t.charAt(0)+t.charAt(0),16)/255,this.g=parseInt(t.charAt(1)+t.charAt(1),16)/255,this.b=parseInt(t.charAt(2)+t.charAt(2),16)/255,this;if(6===e)return
  this.r=parseInt(t.charAt(0)+t.charAt(1),16)/255,this.g=parseInt(t.charAt(2)+t.charAt(3),16)/255,this.b=parseInt(t.charAt(4)+t.charAt(5),16)/255,this}return
  t&amp;&amp;t.length&gt;0?this.setColorName(t):this}setColorName(t){const
  e=Ye[t.toLowerCase()];return void
  0!==e?this.setHex(e):console.warn("THREE.Color: Unknown color
  "+t),this}clone(){return new
  this.constructor(this.r,this.g,this.b)}copy(t){return
  this.r=t.r,this.g=t.g,this.b=t.b,this}copyGammaToLinear(t,e=2){return
  this.r=Math.pow(t.r,e),this.g=Math.pow(t.g,e),this.b=Math.pow(t.b,e),this}copyLinearToGamma(t,e=2){const
  n=e&gt;0?1/e:1;return
  this.r=Math.pow(t.r,n),this.g=Math.pow(t.g,n),this.b=Math.pow(t.b,n),this}convertGammaToLinear(t){return
  this.copyGammaToLinear(this,t),this}convertLinearToGamma(t){return
  this.copyLinearToGamma(this,t),this}copySRGBToLinear(t){return
  this.r=Ke(t.r),this.g=Ke(t.g),this.b=Ke(t.b),this}copyLinearToSRGB(t){return
  this.r=$e(t.r),this.g=$e(t.g),this.b=$e(t.b),this}convertSRGBToLinear(){return
  this.copySRGBToLinear(this),this}convertLinearToSRGB(){return
  this.copyLinearToSRGB(this),this}getHex(){return
  255*this.r&lt;&lt;16^255*this.g&lt;&lt;8^255*this.b&lt;&lt;0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(t){void
  0===t&amp;&amp;(console.warn("THREE.Color: .getHSL() target is
  now required"),t={h:0,s:0,l:0});const
  e=this.r,n=this.g,i=this.b,r=Math.max(e,n,i),s=Math.min(e,n,i);let
  a,o;const l=(s+r)/2;if(s===r)a=0,o=0;else{const
  t=r-s;switch(o=l&lt;=.5?t/(r+s):t/(2-r-s),r){case
  e:a=(n-i)/t+(ne&amp;&amp;(e=t[n]);return e}const
  vn={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:Uint8ClampedArray,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};function
  yn(t,e){return new vn[t](e)}let xn=0;const _n=new se,wn=new
  Ce,bn=new Lt,Mn=new Pt,Sn=new Pt,Tn=new Lt;class En extends
  rt{constructor(){super(),Object.defineProperty(this,"id",{value:xn++}),this.uuid=ct(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return
  this.index}setIndex(t){return
  Array.isArray(t)?this.index=new(gn(t)&gt;65535?dn:hn)(t,1):this.index=t,this}getAttribute(t){return
  this.attributes[t]}setAttribute(t,e){return
  this.attributes[t]=e,this}deleteAttribute(t){return delete
  this.attributes[t],this}hasAttribute(t){return void
  0!==this.attributes[t]}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const
  e=this.attributes.position;void
  0!==e&amp;&amp;(e.applyMatrix4(t),e.needsUpdate=!0);const
  n=this.attributes.normal;if(void 0!==n){const e=(new
  yt).getNormalMatrix(t);n.applyNormalMatrix(e),n.needsUpdate=!0}const
  i=this.attributes.tangent;return void
  0!==i&amp;&amp;(i.transformDirection(t),i.needsUpdate=!0),null!==this.boundingBox&amp;&amp;this.computeBoundingBox(),null!==this.boundingSphere&amp;&amp;this.computeBoundingSphere(),this}rotateX(t){return
  _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return
  _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return
  _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return
  _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return
  _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return
  wn.lookAt(t),wn.updateMatrix(),this.applyMatrix4(wn.matrix),this}center(){return
  this.computeBoundingBox(),this.boundingBox.getCenter(bn).negate(),this.translate(bn.x,bn.y,bn.z),this}setFromPoints(t){const
  e=[];for(let n=0,i=t.length;n</i></s></a><a h="new" r=
  "1/(m.x*f.y-f.x*m.y);isFinite(r)&amp;&amp;(g.copy(u).multiplyScalar(f.y).addScaledVector(d,-m.y).multiplyScalar(r),v.copy(d).multiplyScalar(m.x).addScaledVector(u,-f.x).multiplyScalar(r),l[t].add(g),l[e].add(g),l[n].add(g),c[t].add(v),c[e].add(v),c[n].add(v))}let"
  x=
  "this.groups;0===x.length&amp;&amp;(x=[{start:0,count:n.length}]);for(let"
  t=
  "0,e=x.length;t">&lt;0?-1:1;o[4*t]=_.x,o[4*t+1]=_.y,o[4*t+2]=_.z,o[4*t+3]=n}for(let
  t=0,e=x.length;t</a><a void="" geometry="" not="" an="" instance=
  "" of="" overwriting="" original="" starting="" at="" offset="0."
  use="" for="" lossless="" n="this.attributes;for(const" i="" in=
  "" r=
  "n[i].array,s=t.attributes[i],a=s.array,o=s.itemSize*e,l=Math.min(a.length,r.length-o);for(let"
  t="0,e=o;t"><i new="" buffergeometry="" is="" already="" r=
  "this.morphAttributes;for(const" i="" in="" s="[],a=r[i];for(let"
  e="0,i=a.length;e">0&amp;&amp;(t.userData=this.userData),void
  0!==this.parameters){const e=this.parameters;for(const n in
  e)void 0!==e[n]&amp;&amp;(t[n]=e[n]);return
  t}t.data={attributes:{}};const
  e=this.index;null!==e&amp;&amp;(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const
  n=this.attributes;for(const e in n){const
  i=n[e];t.data.attributes[e]=i.toJSON(t.data)}const i={};let
  r=!1;for(const e in this.morphAttributes){const
  n=this.morphAttributes[e],s=[];for(let
  e=0,i=n.length;e0&amp;&amp;(i[e]=s,r=!0)}r&amp;&amp;(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const
  s=this.groups;s.length&gt;0&amp;&amp;(t.data.groups=JSON.parse(JSON.stringify(s)));const
  a=this.boundingSphere;return
  null!==a&amp;&amp;(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return(new
  En).copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const
  e={};this.name=t.name;const
  n=t.index;null!==n&amp;&amp;this.setIndex(n.clone(e));const
  i=t.attributes;for(const t in i){const
  n=i[t];this.setAttribute(t,n.clone(e))}const
  r=t.morphAttributes;for(const t in r){const n=[],i=r[t];for(let
  t=0,r=i.length;t0){const t=e[n[0]];if(void
  0!==t){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let
  e=0,n=t.length;e0&amp;&amp;console.error("THREE.Mesh.updateMorphTargets()
  no longer supports THREE.Geometry. Use THREE.BufferGeometry
  instead.")}}raycast(t,e){const
  n=this.geometry,i=this.material,r=this.matrixWorld;if(void
  0===i)return;if(null===n.boundingSphere&amp;&amp;n.computeBoundingSphere(),Rn.copy(n.boundingSphere),Rn.applyMatrix4(r),!1===t.ray.intersectsSphere(Rn))return;if(An.copy(r).invert(),Ln.copy(t.ray).applyMatrix4(An),null!==n.boundingBox&amp;&amp;!1===Ln.intersectsBox(n.boundingBox))return;let
  s;if(n.isBufferGeometry){const
  r=n.index,a=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative,c=n.attributes.uv,h=n.attributes.uv2,u=n.groups,d=n.drawRange;if(null!==r)if(Array.isArray(i))for(let
  n=0,p=u.length;n</i>
  <p p="u[n],m=i[p.materialIndex];for(let" n=
  "Math.max(p.start,d.start),i=Math.min(p.start+p.count,d.start+d.count);n">
  <i i="this.children[n].getObjectByProperty(t,e);if(void" void=""
  target="" is="" now="" e="this.children;for(let" n=
  "0,i=e.length;n"><s s="e[r],a=this.morphTargetsRelative;for(let"
  e="0,r=s.count;e"><i i=
  "r.getX(n),u=r.getX(n+1),d=r.getX(n+2);s=jn(this,m,t,Ln,a,o,l,c,h,i,u,d),s&amp;&amp;(s.faceIndex=Math.floor(n/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{for(let"
  n=
  "Math.max(0,d.start),u=Math.min(r.count,d.start+d.count);n"><u u=
  "r.getX(n),d=r.getX(n+1),p=r.getX(n+2);s=jn(this,i,t,Ln,a,o,l,c,h,u,d,p),s&amp;&amp;(s.faceIndex=Math.floor(n/3),e.push(s))}}else"
  n="0,r=u.length;n"><i n=
  "Math.max(0,d.start),r=Math.min(a.count,d.start+d.count);n">n.far?null:{distance:c,point:Vn.clone(),object:t}}(t,e,n,i,Cn,Pn,Dn,kn);if(p){o&amp;&amp;(Hn.fromBufferAttribute(o,c),Gn.fromBufferAttribute(o,h),Un.fromBufferAttribute(o,u),p.uv=je.getUV(kn,Cn,Pn,Dn,Hn,Gn,Un,new
  vt)),l&amp;&amp;(Hn.fromBufferAttribute(l,c),Gn.fromBufferAttribute(l,h),Un.fromBufferAttribute(l,u),p.uv2=je.getUV(kn,Cn,Pn,Dn,Hn,Gn,Un,new
  vt));const t={a:c,b:h,c:u,normal:new
  Lt,materialIndex:0};je.getNormal(Cn,Pn,Dn,t.normal),p.face=t}return
  p}Wn.prototype.isMesh=!0;class qn extends
  En{constructor(t=1,e=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const
  a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const
  o=[],l=[],c=[],h=[];let u=0,d=0;function
  p(t,e,n,i,r,s,p,m,f,g,v){const
  y=s/f,x=p/g,_=s/2,w=p/2,b=m/2,M=f+1,S=g+1;let T=0,E=0;const A=new
  Lt;for(let s=0;s<s a="s*x-w;for(let" o=
  "0;o">0?1:-1,c.push(A.x,A.y,A.z),h.push(o/f),h.push(1-s/g),T+=1}}for(let
  t=0;t0&amp;&amp;(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const
  n={};for(const t in
  this.extensions)!0===this.extensions[t]&amp;&amp;(n[t]=!0);return
  Object.keys(n).length&gt;0&amp;&amp;(e.extensions=n),e}}Jn.prototype.isShaderMaterial=!0;class
  Qn extends
  Ce{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new
  se,this.projectionMatrix=new se,this.projectionMatrixInverse=new
  se}copy(t,e){return
  super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){void
  0===t&amp;&amp;(console.warn("THREE.Camera: .getWorldDirection()
  target is now required"),t=new
  Lt),this.updateWorldMatrix(!0,!1);const
  e=this.matrixWorld.elements;return
  t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return(new
  this.constructor).copy(this)}}Qn.prototype.isCamera=!0;class Kn
  extends
  Qn{constructor(t=50,e=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return
  super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=null===t.view?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const
  e=.5*this.getFilmHeight()/t;this.fov=2*lt*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const
  t=Math.tan(.5*ot*this.fov);return.5*this.getFilmHeight()/t}getEffectiveFOV(){return
  2*lt*Math.atan(Math.tan(.5*ot*this.fov)/this.zoom)}getFilmWidth(){return
  this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return
  this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,s){this.aspect=t/e,null===this.view&amp;&amp;(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&amp;&amp;(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const
  t=this.near;let
  e=t*Math.tan(.5*ot*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const
  s=this.view;if(null!==this.view&amp;&amp;this.view.enabled){const
  t=s.fullWidth,a=s.fullHeight;r+=s.offsetX*i/t,e-=s.offsetY*n/a,i*=s.width/t,n*=s.height/a}const
  a=this.filmOffset;0!==a&amp;&amp;(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const
  e=super.toJSON(t);return
  e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,null!==this.view&amp;&amp;(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}Kn.prototype.isPerspectiveCamera=!0;const
  $n=90;class ti extends
  Ce{constructor(t,e,n){if(super(),this.type="CubeCamera",!0!==n.isWebGLCubeRenderTarget)return
  void console.error("THREE.CubeCamera: The constructor now expects
  an instance of WebGLCubeRenderTarget as third
  parameter.");this.renderTarget=n;const i=new
  Kn($n,1,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new
  Lt(1,0,0)),this.add(i);const r=new
  Kn($n,1,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new
  Lt(-1,0,0)),this.add(r);const s=new
  Kn($n,1,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new
  Lt(0,1,0)),this.add(s);const a=new
  Kn($n,1,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new
  Lt(0,-1,0)),this.add(a);const o=new
  Kn($n,1,t,e);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new
  Lt(0,0,1)),this.add(o);const l=new
  Kn($n,1,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new
  Lt(0,0,-1)),this.add(l)}update(t,e){null===this.parent&amp;&amp;this.updateMatrixWorld();const
  n=this.renderTarget,[i,r,s,a,o,l]=this.children,c=t.xr.enabled,h=t.getRenderTarget();t.xr.enabled=!1;const
  u=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,s),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,o),n.texture.generateMipmaps=u,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.xr.enabled=c}}class
  ei extends bt{constructor(t,e,n,i,s,a,o,l,c,h){super(t=void
  0!==t?t:[],e=void 0!==e?e:r,n,i,s,a,o=void
  0!==o?o:T,l,c,h),this._needsFlipEnvMap=!0,this.flipY=!1}get
  images(){return this.image}set
  images(t){this.image=t}}ei.prototype.isCubeTexture=!0;class ni
  extends
  Tt{constructor(t,e,n){Number.isInteger(e)&amp;&amp;(console.warn("THREE.WebGLCubeRenderTarget:
  constructor signature is now WebGLCubeRenderTarget( size, options
  )"),e=n),super(t,t,e),e=e||{},this.texture=new ei(void
  0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.generateMipmaps=void
  0!==e.generateMipmaps&amp;&amp;e.generateMipmaps,this.texture.minFilter=void
  0!==e.minFilter?e.minFilter:g,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.format=E,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const
  n={uniforms:{tEquirect:{value:null}},vertexShader:"\n\n\t\t\t\tvarying
  vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3
  dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix *
  vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main()
  {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position,
  modelMatrix );\n\n\t\t\t\t\t#include \n\t\t\t\t\t#include
  \n\n\t\t\t\t}\n\t\t\t",fragmentShader:"\n\n\t\t\t\tuniform
  sampler2D tEquirect;\n\n\t\t\t\tvarying vec3
  vWorldDirection;\n\n\t\t\t\t#include \n\n\t\t\t\tvoid main()
  {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection
  );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction
  );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV
  );\n\n\t\t\t\t}\n\t\t\t"},i=new qn(5,5,5),r=new
  Jn({name:"CubemapFromEquirect",uniforms:Xn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const
  s=new
  Wn(i,r),a=e.minFilter;e.minFilter===y&amp;&amp;(e.minFilter=g);return
  new
  ti(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,n,i){const
  r=t.getRenderTarget();for(let
  r=0;r&lt;6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(r)}}ni.prototype.isWebGLCubeRenderTarget=!0;class
  ii extends
  bt{constructor(t,e,n,i,r,s,a,o,l,c,h,u){super(null,s,a,o,l,c,i,r,h,u),this.image={data:t||null,width:e||1,height:n||1},this.magFilter=void
  0!==l?l:p,this.minFilter=void
  0!==c?c:p,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}ii.prototype.isDataTexture=!0;const
  ri=new Jt,si=new Lt;class ai{constructor(t=new Ne,e=new Ne,n=new
  Ne,i=new Ne,r=new Ne,s=new
  Ne){this.planes=[t,e,n,i,r,s]}set(t,e,n,i,r,s){const
  a=this.planes;return
  a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){const
  e=this.planes;for(let
  n=0;n&lt;6;n++)e[n].copy(t.planes[n]);return
  this}setFromProjectionMatrix(t){const
  e=this.planes,n=t.elements,i=n[0],r=n[1],s=n[2],a=n[3],o=n[4],l=n[5],c=n[6],h=n[7],u=n[8],d=n[9],p=n[10],m=n[11],f=n[12],g=n[13],v=n[14],y=n[15];return
  e[0].setComponents(a-i,h-o,m-u,y-f).normalize(),e[1].setComponents(a+i,h+o,m+u,y+f).normalize(),e[2].setComponents(a+r,h+l,m+d,y+g).normalize(),e[3].setComponents(a-r,h-l,m-d,y-g).normalize(),e[4].setComponents(a-s,h-c,m-p,y-v).normalize(),e[5].setComponents(a+s,h+c,m+p,y+v).normalize(),this}intersectsObject(t){const
  e=t.geometry;return
  null===e.boundingSphere&amp;&amp;e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSprite(t){return
  ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){const
  e=this.planes,n=t.center,i=-t.radius;for(let
  t=0;t&lt;6;t++){if(e[t].distanceToPoint(n)<i e=
  "this.planes;for(let" n="0;n">&lt;6;n++){const
  i=e[n];if(si.x=i.normal.x&gt;0?t.max.x:t.min.x,si.y=i.normal.y&gt;0?t.max.y:t.min.y,si.z=i.normal.z&gt;0?t.max.z:t.min.z,i.distanceToPoint(si)&lt;0)return!1}return!0}containsPoint(t){const
  e=this.planes;for(let
  n=0;n&lt;6;n++)if(e[n].distanceToPoint(t)&lt;0)return!1;return!0}clone(){return(new
  this.constructor).copy(this)}}function oi(){let
  t=null,e=!1,n=null,i=null;function
  r(e,s){n(e,s),i=t.requestAnimationFrame(r)}return{start:function(){!0!==e&amp;&amp;null!==n&amp;&amp;(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(t){n=t},setContext:function(e){t=e}}}function
  li(t,e){const n=e.isWebGL2,i=new
  WeakMap;return{get:function(t){return
  t.isInterleavedBufferAttribute&amp;&amp;(t=t.data),i.get(t)},remove:function(e){e.isInterleavedBufferAttribute&amp;&amp;(e=e.data);const
  n=i.get(e);n&amp;&amp;(t.deleteBuffer(n.buffer),i.delete(e))},update:function(e,r){if(e.isGLBufferAttribute){const
  t=i.get(e);return
  void((!t||t.version</i></s></i></u></i></s></i></p></a><a n=
  "e+l*t,i=e+l*(t+1),r=e+1+l*(t+1),s=e+1+l*t;d.push(n,i,s),d.push(i,r,s)}this.setIndex(d),this.setAttribute(&quot;position&quot;,new"
  hi="{alphamap_fragment:&quot;#ifdef" vuv="" sampler2d=""
  diffusecolor.a="">&lt; ALPHATEST )
  discard;\n#endif",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat
  ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) *
  aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *=
  ambientOcclusion;\n\t#if defined( USE_ENVMAP ) &amp;& defined(
  STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal,
  geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *=
  computeSpecularOcclusion( dotNV, ambientOcclusion,
  material.specularRoughness
  );\n\t#endif\n#endif",aomap_pars_fragment:"#ifdef
  USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float
  aoMapIntensity;\n#endif",begin_vertex:"vec3 transformed = vec3(
  position );",beginnormal_vertex:"vec3 objectNormal = vec3( normal
  );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz
  );\n#endif",bsdfs:"vec2 integrateSpecularBRDF( const in float
  dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1,
  - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425,
  1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 =
  min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn
  vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat
  punctualLightIntensityToIrradianceFactor( const in float
  lightDistance, const in float cutoffDistance, const in float
  decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS
  )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance,
  decayExponent ), 0.01 );\n\tif( cutoffDistance &gt; 0.0 )
  {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4(
  lightDistance / cutoffDistance ) ) );\n\t}\n\treturn
  distanceFalloff;\n#else\n\tif( cutoffDistance &gt; 0.0 &amp;&
  decayExponent &gt; 0.0 ) {\n\t\treturn pow( saturate(
  -lightDistance / cutoffDistance + 1.0 ), decayExponent
  );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert(
  const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI *
  diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor,
  const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 *
  dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) *
  fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent(
  const in vec3 F0, const in float dotNV, const in float roughness
  ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) *
  dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) -
  F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in
  float alpha, const in float dotNL, const in float dotNV )
  {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + (
  1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + (
  1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv
  );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const
  in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2(
  alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2(
  dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2(
  dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat
  D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2
  = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) +
  1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3
  BRDF_Specular_GGX( const in IncidentLight incidentLight, const in
  vec3 viewDir, const in vec3 normal, const in vec3 specularColor,
  const in float roughness ) {\n\tfloat alpha = pow2( roughness
  );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir
  );\n\tfloat dotNL = saturate( dot( normal,
  incidentLight.direction ) );\n\tfloat dotNV = saturate( dot(
  normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal,
  halfDir ) );\n\tfloat dotLH = saturate( dot(
  incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick(
  specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated(
  alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH
  );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N,
  const in vec3 V, const in float roughness ) {\n\tconst float
  LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) /
  LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat
  dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness,
  sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE +
  LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor(
  const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l
  * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3
  LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 )
  {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a =
  0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b =
  3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat
  theta_sintheta = ( x &gt; 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0
  - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) *
  theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in
  vec3 V, const in vec3 P, const in mat3 mInv, const in vec3
  rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0
  ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3
  lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P -
  rectCoords[ 0 ] ) &lt; 0.0 ) return vec3( 0.0 );\n\tvec3 T1,
  T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N,
  T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N )
  );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ]
  - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[
  2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * (
  rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ]
  );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] =
  normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ]
  );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor +=
  LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ]
  );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ],
  coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor(
  coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor +=
  LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat
  result = LTC_ClippedSphereFormFactor( vectorFormFactor
  );\n\treturn vec3( result );\n}\nvec3
  BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in
  vec3 normal, const in vec3 specularColor, const in float
  roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir )
  );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness
  );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid
  BRDF_Specular_Multiscattering_Environment( const in
  GeometricContext geometry, const in vec3 specularColor, const in
  float roughness, inout vec3 singleScatter, inout vec3
  multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal,
  geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent(
  specularColor, dotNV, roughness );\n\tvec2 brdf =
  integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F *
  brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems =
  1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor )
  * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg
  );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms *
  Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn
  0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in
  float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0
  ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong(
  const in IncidentLight incidentLight, const in GeometricContext
  geometry, const in vec3 specularColor, const in float shininess )
  {\n\tvec3 halfDir = normalize( incidentLight.direction +
  geometry.viewDir );\n\tfloat dotNH = saturate( dot(
  geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot(
  incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick(
  specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit(
  );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * (
  G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float
  ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 )
  - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float
  blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 )
  );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness,
  float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h
  = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h,
  0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5)
  / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL)
  {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL *
  NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness,
  const in vec3 L, const in GeometricContext geometry, vec3
  specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V =
  geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH
  = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie(
  roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L)
  );\n}\n#endif",bumpmap_pars_fragment:"#ifdef
  USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float
  bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv
  );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale *
  texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale *
  texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy =
  bumpScale * texture2D( bumpMap, vUv + dSTdy ).x -
  Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb(
  vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection )
  {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y
  ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy(
  surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3
  vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2
  = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) *
  faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 +
  dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm -
  vGrad );\n\t}\n#endif",clipping_planes_fragment:"#if
  NUM_CLIPPING_PLANES &gt; 0\n\tvec4 plane;\n\t#pragma
  unroll_loop_start\n\tfor ( int i = 0; i &lt;
  UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i
  ];\n\t\tif ( dot( vClipPosition, plane.xyz ) &gt; plane.w )
  discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if
  UNION_CLIPPING_PLANES &lt; NUM_CLIPPING_PLANES\n\t\tbool clipped
  = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i =
  UNION_CLIPPING_PLANES; i &lt; NUM_CLIPPING_PLANES; i ++ )
  {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot(
  vClipPosition, plane.xyz ) &gt; plane.w ) &amp;&
  clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped )
  discard;\n\t#endif\n#endif",clipping_planes_pars_fragment:"#if
  NUM_CLIPPING_PLANES &gt; 0\n\tvarying vec3
  vClipPosition;\n\tuniform vec4 clippingPlanes[
  NUM_CLIPPING_PLANES ];\n#endif",clipping_planes_pars_vertex:"#if
  NUM_CLIPPING_PLANES &gt; 0\n\tvarying vec3
  vClipPosition;\n#endif",clipping_planes_vertex:"#if
  NUM_CLIPPING_PLANES &gt; 0\n\tvClipPosition = -
  mvPosition.xyz;\n#endif",color_fragment:"#if defined(
  USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined(
  USE_COLOR )\n\tdiffuseColor.rgb *=
  vColor;\n#endif",color_pars_fragment:"#if defined(
  USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined(
  USE_COLOR )\n\tvarying vec3
  vColor;\n#endif",color_pars_vertex:"#if defined( USE_COLOR_ALPHA
  )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined(
  USE_INSTANCING_COLOR )\n\tvarying vec3
  vColor;\n#endif",color_vertex:"#if defined( USE_COLOR_ALPHA
  )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) ||
  defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0
  );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef
  USE_INSTANCING_COLOR\n\tvColor.xyz *=
  instanceColor.xyz;\n#endif",common:"#define PI
  3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF
  1.5707963267948966\n#define RECIPROCAL_PI
  0.3183098861837907\n#define RECIPROCAL_PI2
  0.15915494309189535\n#define EPSILON 1e-6\n#ifndef
  saturate\n#define saturate(a) clamp( a, 0.0, 1.0
  )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a )
  )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3(
  const in float x ) { return x*x*x; }\nfloat pow4( const in float
  x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in
  vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp
  float rand( const in vec2 uv ) {\n\tconst highp float a =
  12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot(
  uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn)
  * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength(
  vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) {
  return max( max( v.x, v.y ), v.z ); }\n\tfloat
  precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3(
  abs( v ) );\n\t\treturn length( v / maxComponent ) *
  maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3
  color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct
  ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3
  directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3
  indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3
  position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef
  CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3
  transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn
  normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3
  inverseTransformDirection( in vec3 dir, in mat4 matrix )
  {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz
  );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane,
  in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal,
  point - pointOnPlane );\n\treturn - distance * planeNormal +
  point;\n}\nfloat sideOfPlane( in vec3 point, in vec3
  pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point
  - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in
  vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in
  vec3 planeNormal ) {\n\treturn lineDirection * ( dot(
  planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal,
  lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in
  mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x,
  m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y
  );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn
  tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color )
  {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn
  dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m )
  {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3
  dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 +
  0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) *
  RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v
  );\n}",cube_uv_reflection_fragment:"#ifdef
  ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define
  cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize
  256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3
  direction ) {\n\t\tvec3 absDirection = abs( direction
  );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x &gt;
  absDirection.z ) {\n\t\t\tif ( absDirection.x &gt; absDirection.y
  )\n\t\t\t\tface = direction.x &gt; 0.0 ? 0.0 :
  3.0;\n\t\t\telse\n\t\t\t\tface = direction.y &gt; 0.0 ? 1.0 :
  4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z &gt; absDirection.y
  )\n\t\t\t\tface = direction.z &gt; 0.0 ? 2.0 :
  5.0;\n\t\t\telse\n\t\t\t\tface = direction.y &gt; 0.0 ? 1.0 :
  4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction,
  float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv
  = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t}
  else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, -
  direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0
  ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs(
  direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2(
  - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if
  ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z )
  / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2(
  direction.x, direction.y ) / abs( direction.z
  );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3
  bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt )
  {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt =
  max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max(
  mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt
  );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize
  );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0
  );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face
  &gt; 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -=
  3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt &lt;
  cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 *
  cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 *
  cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0,
  cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *=
  texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap,
  uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr =
  envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y +=
  texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap,
  uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl =
  envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm
  = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x
  );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0
  1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1
  0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4
  0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5
  0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6
  0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat
  roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif
  ( roughness &gt;= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 -
  m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness &gt;= r4 )
  {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) +
  m1;\n\t\t} else if ( roughness &gt;= r5 ) {\n\t\t\tmip = ( r4 -
  roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if (
  roughness &gt;= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 -
  m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2(
  1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4
  textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness
  ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0,
  cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat
  mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap,
  sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn
  vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 =
  bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn
  vec4( mix( color0, color1, mipF ), 1.0
  );\n\t\t}\n\t}\n#endif",defaultnormal_vertex:"vec3
  transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3
  m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[
  0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] )
  );\n\ttransformedNormal = m *
  transformedNormal;\n#endif\ntransformedNormal = normalMatrix *
  transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = -
  transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3
  transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0
  ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = -
  transformedTangent;\n\t#endif\n#endif",displacementmap_pars_vertex:"#ifdef
  USE_DISPLACEMENTMAP\n\tuniform sampler2D
  displacementMap;\n\tuniform float displacementScale;\n\tuniform
  float displacementBias;\n#endif",displacementmap_vertex:"#ifdef
  USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) *
  ( texture2D( displacementMap, vUv ).x * displacementScale +
  displacementBias );\n#endif",emissivemap_fragment:"#ifdef
  USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap,
  vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear(
  emissiveColor ).rgb;\n\ttotalEmissiveRadiance *=
  emissiveColor.rgb;\n#endif",emissivemap_pars_fragment:"#ifdef
  USE_EMISSIVEMAP\n\tuniform sampler2D
  emissiveMap;\n#endif",encodings_fragment:"gl_FragColor =
  linearToOutputTexel( gl_FragColor
  );",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value
  ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in
  float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3(
  gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4
  value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb,
  vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in
  vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986
  + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808,
  vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a
  );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix(
  pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ),
  value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3(
  0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4
  value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 -
  128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat
  maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat
  fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0
  );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) /
  255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange
  ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0
  );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange )
  {\n\tfloat maxRGB = max( value.r, max( value.g, value.b )
  );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM =
  ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M *
  maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float
  maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) /
  value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float
  maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g,
  value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD =
  clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb
  * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM =
  mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102,
  0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3
  Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp,
  vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy =
  Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y)
  + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - (
  floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn
  vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008,
  -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268
  );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z
  * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le
  - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y /
  value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB =
  cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0
  ), 1.0 );\n}",envmap_fragment:"#ifdef USE_ENVMAP\n\t#ifdef
  ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic )
  {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ],
  - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else
  {\n\t\t\tcameraToFrag = normalize( vWorldPosition -
  cameraPosition );\n\t\t}\n\t\tvec3 worldNormal =
  inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef
  ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect(
  cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec =
  refract( cameraToFrag, worldNormal, refractionRatio
  );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec =
  vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor
  = textureCube( envMap, vec3( flipEnvMap * reflectVec.x,
  reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV
  )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0
  );\n\t#else\n\t\tvec4 envColor = vec4( 0.0
  );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor =
  envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef
  ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight,
  outgoingLight * envColor.xyz, specularStrength * reflectivity
  );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight =
  mix( outgoingLight, envColor.xyz, specularStrength * reflectivity
  );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight +=
  envColor.xyz * specularStrength *
  reflectivity;\n\t#endif\n#endif",envmap_common_pars_fragment:"#ifdef
  USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float
  flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef
  ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube
  envMap;\n\t#else\n\t\tuniform sampler2D
  envMap;\n\t#endif\n\t\n#endif",envmap_pars_fragment:"#ifdef
  USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined(
  USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG
  )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef
  ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float
  refractionRatio;\n\t#else\n\t\tvarying vec3
  vReflect;\n\t#endif\n#endif",envmap_pars_vertex:"#ifdef
  USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined(
  USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define
  ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying
  vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3
  vReflect;\n\t\tuniform float
  refractionRatio;\n\t#endif\n#endif",envmap_physical_pars_fragment:"#if
  defined( USE_ENVMAP )\n\t#ifdef
  ENVMAP_MODE_REFRACTION\n\t\tuniform float
  refractionRatio;\n\t#endif\n\tvec3
  getLightProbeIndirectIrradiance( const in GeometricContext
  geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal =
  inverseTransformDirection( geometry.normal, viewMatrix
  );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3(
  flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef
  TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT(
  envMap, queryVec, float( maxMIPLevel )
  );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap,
  queryVec, float( maxMIPLevel )
  );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear(
  envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV
  )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal,
  1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0
  );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb *
  envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in
  float roughness, const in int maxMIPLevel ) {\n\t\tfloat
  maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI *
  roughness * roughness / ( 1.0 + roughness );\n\t\tfloat
  desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn
  clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3
  getLightProbeIndirectRadiance( const in vec3 viewDir, const in
  vec3 normal, const in float roughness, const in int maxMIPLevel )
  {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec =
  reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix(
  reflectVec, normal, roughness * roughness)
  );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal,
  refractionRatio );\n\t\t#endif\n\t\treflectVec =
  inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat
  specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel
  );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec =
  vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef
  TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT(
  envMap, queryReflectVec, specularMIPLevel
  );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap,
  queryReflectVec, specularMIPLevel
  );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear(
  envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV
  )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec,
  roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb *
  envMapIntensity;\n\t}\n#endif",envmap_vertex:"#ifdef
  USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition =
  worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif (
  isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( -
  viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][
  2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize(
  worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3
  worldNormal = inverseTransformDirection( transformedNormal,
  viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect
  = reflect( cameraToVertex, worldNormal
  );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex,
  worldNormal, refractionRatio
  );\n\t\t#endif\n\t#endif\n#endif",fog_vertex:"#ifdef
  USE_FOG\n\tfogDepth = -
  mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n\tvarying
  float fogDepth;\n#endif",fog_fragment:"#ifdef USE_FOG\n\t#ifdef
  FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity *
  fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor
  = smoothstep( fogNear, fogFar, fogDepth
  );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb,
  fogColor, fogFactor );\n#endif",fog_pars_fragment:"#ifdef
  USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float
  fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float
  fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform
  float
  fogFar;\n\t#endif\n#endif",gradientmap_pars_fragment:"#ifdef
  USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3
  getGradientIrradiance( vec3 normal, vec3 lightDirection )
  {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord =
  vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef
  USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord
  ).rgb;\n\t#else\n\t\treturn ( coord.x &lt; 0.7 ) ? vec3( 0.7 ) :
  vec3( 1.0 );\n\t#endif\n}",lightmap_fragment:"#ifdef
  USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2
  );\n\treflectedLight.indirectDiffuse += PI *
  lightMapTexelToLinear( lightMapTexel ).rgb *
  lightMapIntensity;\n#endif",lightmap_pars_fragment:"#ifdef
  USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float
  lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse =
  vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position =
  mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal
  );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) :
  normalize( -mvPosition.xyz );\nGeometricContext
  backGeometry;\nbackGeometry.position =
  geometry.position;\nbackGeometry.normal =
  -geometry.normal;\nbackGeometry.viewDir =
  geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront =
  vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0
  );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight
  directLight;\nfloat dotNL;\nvec3
  directLightColor_Diffuse;\nvIndirectFront +=
  getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront
  += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef
  DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance(
  ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance(
  lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS &gt;
  0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i &lt;
  NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance(
  pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot(
  geometry.normal, directLight.direction
  );\n\t\tdirectLightColor_Diffuse = PI *
  directLight.color;\n\t\tvLightFront += saturate( dotNL ) *
  directLightColor_Diffuse;\n\t\t#ifdef
  DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) *
  directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma
  unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS &gt; 0\n\t#pragma
  unroll_loop_start\n\tfor ( int i = 0; i &lt; NUM_SPOT_LIGHTS; i
  ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ],
  geometry, directLight );\n\t\tdotNL = dot( geometry.normal,
  directLight.direction );\n\t\tdirectLightColor_Diffuse = PI *
  directLight.color;\n\t\tvLightFront += saturate( dotNL ) *
  directLightColor_Diffuse;\n\t\t#ifdef
  DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) *
  directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma
  unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS &gt; 0\n\t#pragma
  unroll_loop_start\n\tfor ( int i = 0; i &lt; NUM_DIR_LIGHTS; i ++
  ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[
  i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal,
  directLight.direction );\n\t\tdirectLightColor_Diffuse = PI *
  directLight.color;\n\t\tvLightFront += saturate( dotNL ) *
  directLightColor_Diffuse;\n\t\t#ifdef
  DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) *
  directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma
  unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS &gt; 0\n\t#pragma
  unroll_loop_start\n\tfor ( int i = 0; i &lt; NUM_HEMI_LIGHTS; i
  ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance(
  hemisphereLights[ i ], geometry );\n\t\t#ifdef
  DOUBLE_SIDED\n\t\t\tvIndirectBack +=
  getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry
  );\n\t\t#endif\n\t}\n\t#pragma
  unroll_loop_end\n#endif",lights_pars_begin:"uniform bool
  receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3
  lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3
  shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z =
  normal.z;\n\tvec3 result = shCoefficients[ 0 ] *
  0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 *
  y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 *
  z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 *
  x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x *
  y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y *
  z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z -
  0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x
  * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y *
  y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in
  vec3 lightProbe[ 9 ], const in GeometricContext geometry )
  {\n\tvec3 worldNormal = inverseTransformDirection(
  geometry.normal, viewMatrix );\n\tvec3 irradiance =
  shGetIrradianceAt( worldNormal, lightProbe );\n\treturn
  irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3
  ambientLightColor ) {\n\tvec3 irradiance =
  ambientLightColor;\n\t#ifndef
  PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *=
  PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS &gt;
  0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3
  color;\n\t};\n\tuniform DirectionalLight directionalLights[
  NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance(
  const in DirectionalLight directionalLight, const in
  GeometricContext geometry, out IncidentLight directLight )
  {\n\t\tdirectLight.color =
  directionalLight.color;\n\t\tdirectLight.direction =
  directionalLight.direction;\n\t\tdirectLight.visible =
  true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS &gt; 0\n\tstruct
  PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat
  distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight
  pointLights[ NUM_POINT_LIGHTS ];\n\tvoid
  getPointDirectLightIrradiance( const in PointLight pointLight,
  const in GeometricContext geometry, out IncidentLight directLight
  ) {\n\t\tvec3 lVector = pointLight.position -
  geometry.position;\n\t\tdirectLight.direction = normalize(
  lVector );\n\t\tfloat lightDistance = length( lVector
  );\n\t\tdirectLight.color =
  pointLight.color;\n\t\tdirectLight.color *=
  punctualLightIntensityToIrradianceFactor( lightDistance,
  pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible
  = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if
  NUM_SPOT_LIGHTS &gt; 0\n\tstruct SpotLight {\n\t\tvec3
  position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat
  distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat
  penumbraCos;\n\t};\n\tuniform SpotLight spotLights[
  NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in
  SpotLight spotLight, const in GeometricContext geometry, out
  IncidentLight directLight ) {\n\t\tvec3 lVector =
  spotLight.position -
  geometry.position;\n\t\tdirectLight.direction = normalize(
  lVector );\n\t\tfloat lightDistance = length( lVector
  );\n\t\tfloat angleCos = dot( directLight.direction,
  spotLight.direction );\n\t\tif ( angleCos &gt; spotLight.coneCos
  ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos,
  spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color =
  spotLight.color;\n\t\t\tdirectLight.color *= spotEffect *
  punctualLightIntensityToIrradianceFactor( lightDistance,
  spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible
  = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0
  );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if
  NUM_RECT_AREA_LIGHTS &gt; 0\n\tstruct RectAreaLight {\n\t\tvec3
  color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3
  halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D
  ltc_2;\n\tuniform RectAreaLight rectAreaLights[
  NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS &gt;
  0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3
  skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight
  hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3
  getHemisphereLightIrradiance( const in HemisphereLight hemiLight,
  const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot(
  geometry.normal, hemiLight.direction );\n\t\tfloat
  hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance =
  mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight
  );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *=
  PI;\n\t\t#endif\n\t\treturn
  irradiance;\n\t}\n#endif",lights_toon_fragment:"ToonMaterial
  material;\nmaterial.diffuseColor =
  diffuseColor.rgb;",lights_toon_pars_fragment:"varying vec3
  vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3
  vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3
  diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight
  directLight, const in GeometricContext geometry, const in
  ToonMaterial material, inout ReflectedLight reflectedLight )
  {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal,
  directLight.direction ) * directLight.color;\n\t#ifndef
  PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *=
  PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance *
  BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid
  RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in
  GeometricContext geometry, const in ToonMaterial material, inout
  ReflectedLight reflectedLight )
  {\n\treflectedLight.indirectDiffuse += irradiance *
  BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define
  RE_Direct\t\t\t\tRE_Direct_Toon\n#define
  RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define
  Material_LightProbeLOD( material
  )\t(0)",lights_phong_fragment:"BlinnPhongMaterial
  material;\nmaterial.diffuseColor =
  diffuseColor.rgb;\nmaterial.specularColor =
  specular;\nmaterial.specularShininess =
  shininess;\nmaterial.specularStrength =
  specularStrength;",lights_phong_pars_fragment:"varying vec3
  vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3
  vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3
  diffuseColor;\n\tvec3 specularColor;\n\tfloat
  specularShininess;\n\tfloat specularStrength;\n};\nvoid
  RE_Direct_BlinnPhong( const in IncidentLight directLight, const
  in GeometricContext geometry, const in BlinnPhongMaterial
  material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL
  = saturate( dot( geometry.normal, directLight.direction )
  );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef
  PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *=
  PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance *
  BRDF_Diffuse_Lambert( material.diffuseColor
  );\n\treflectedLight.directSpecular += irradiance *
  BRDF_Specular_BlinnPhong( directLight, geometry,
  material.specularColor, material.specularShininess ) *
  material.specularStrength;\n}\nvoid
  RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in
  GeometricContext geometry, const in BlinnPhongMaterial material,
  inout ReflectedLight reflectedLight )
  {\n\treflectedLight.indirectDiffuse += irradiance *
  BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define
  RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define
  RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define
  Material_LightProbeLOD( material
  )\t(0)",lights_physical_fragment:"PhysicalMaterial
  material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 -
  metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal )
  ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness =
  max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness =
  max( roughnessFactor, 0.0525 );material.specularRoughness +=
  geometryRoughness;\nmaterial.specularRoughness = min(
  material.specularRoughness, 1.0 );\n#ifdef
  REFLECTIVITY\n\tmaterial.specularColor = mix( vec3(
  MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ),
  diffuseColor.rgb, metalnessFactor
  );\n#else\n\tmaterial.specularColor = mix( vec3(
  DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor
  );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat =
  clearcoat;\n\tmaterial.clearcoatRoughness =
  clearcoatRoughness;\n\t#ifdef
  USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D(
  clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef
  USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *=
  texture2D( clearcoatRoughnessMap, vUv
  ).y;\n\t#endif\n\tmaterial.clearcoat = saturate(
  material.clearcoat );\tmaterial.clearcoatRoughness = max(
  material.clearcoatRoughness, 0.0525
  );\n\tmaterial.clearcoatRoughness +=
  geometryRoughness;\n\tmaterial.clearcoatRoughness = min(
  material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef
  USE_SHEEN\n\tmaterial.sheenColor =
  sheen;\n#endif",lights_physical_pars_fragment:"struct
  PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat
  specularRoughness;\n\tvec3 specularColor;\n#ifdef
  CLEARCOAT\n\tfloat clearcoat;\n\tfloat
  clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3
  sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT
  0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat
  clearcoatDHRApprox( const in float roughness, const in float
  dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 -
  DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow(
  1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS &gt;
  0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight
  rectAreaLight, const in GeometricContext geometry, const in
  PhysicalMaterial material, inout ReflectedLight reflectedLight )
  {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir =
  geometry.viewDir;\n\t\tvec3 position =
  geometry.position;\n\t\tvec3 lightPos =
  rectAreaLight.position;\n\t\tvec3 halfWidth =
  rectAreaLight.halfWidth;\n\t\tvec3 halfHeight =
  rectAreaLight.halfHeight;\n\t\tvec3 lightColor =
  rectAreaLight.color;\n\t\tfloat roughness =
  material.specularRoughness;\n\t\tvec3 rectCoords[ 4
  ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth -
  halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth -
  halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth +
  halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth +
  halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness
  );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 =
  texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x,
  0, t1.y ),\n\t\t\tvec3(\t\t0, 1,\t\t0 ),\n\t\t\tvec3( t1.z, 0,
  t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor *
  t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y
  );\n\t\treflectedLight.directSpecular += lightColor * fresnel *
  LTC_Evaluate( normal, viewDir, position, mInv, rectCoords
  );\n\t\treflectedLight.directDiffuse += lightColor *
  material.diffuseColor * LTC_Evaluate( normal, viewDir, position,
  mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical(
  const in IncidentLight directLight, const in GeometricContext
  geometry, const in PhysicalMaterial material, inout
  ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot(
  geometry.normal, directLight.direction ) );\n\tvec3 irradiance =
  dotNL * directLight.color;\n\t#ifndef
  PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *=
  PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate(
  dot( geometry.clearcoatNormal, directLight.direction )
  );\n\t\tvec3 ccIrradiance = ccDotNL *
  directLight.color;\n\t\t#ifndef
  PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *=
  PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat *
  clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL
  );\n\t\treflectedLight.directSpecular += ccIrradiance *
  material.clearcoat * BRDF_Specular_GGX( directLight,
  geometry.viewDir, geometry.clearcoatNormal, vec3(
  DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness
  );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef
  USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 -
  clearcoatDHR ) * irradiance *
  BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular
  += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX(
  directLight, geometry.viewDir, geometry.normal,
  material.specularColor,
  material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse
  += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert(
  material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical(
  const in vec3 irradiance, const in GeometricContext geometry,
  const in PhysicalMaterial material, inout ReflectedLight
  reflectedLight ) {\n\treflectedLight.indirectDiffuse +=
  irradiance * BRDF_Diffuse_Lambert( material.diffuseColor
  );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance,
  const in vec3 irradiance, const in vec3 clearcoatRadiance, const
  in GeometricContext geometry, const in PhysicalMaterial material,
  inout ReflectedLight reflectedLight) {\n\t#ifdef
  CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot(
  geometry.clearcoatNormal, geometry.viewDir )
  );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance *
  material.clearcoat * BRDF_Specular_GGX_Environment(
  geometry.viewDir, geometry.clearcoatNormal, vec3(
  DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness
  );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR =
  material.clearcoat * clearcoatDHRApprox(
  material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat
  clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 -
  clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3
  multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance =
  irradiance *
  RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment(
  geometry, material.specularColor, material.specularRoughness,
  singleScattering, multiScattering );\n\tvec3 diffuse =
  material.diffuseColor * ( 1.0 - ( singleScattering +
  multiScattering ) );\n\treflectedLight.indirectSpecular +=
  clearcoatInv * radiance *
  singleScattering;\n\treflectedLight.indirectSpecular +=
  multiScattering *
  cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse +=
  diffuse * cosineWeightedIrradiance;\n}\n#define
  RE_Direct\t\t\t\tRE_Direct_Physical\n#define
  RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define
  RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define
  RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat
  computeSpecularOcclusion( const in float dotNV, const in float
  ambientOcclusion, const in float roughness ) {\n\treturn
  saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness
  - 1.0 ) ) - 1.0 + ambientOcclusion
  );\n}",lights_fragment_begin:"\nGeometricContext
  geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal
  = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1
  ) : normalize( vViewPosition );\n#ifdef
  CLEARCOAT\n\tgeometry.clearcoatNormal =
  clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if (
  NUM_POINT_LIGHTS &gt; 0 ) &amp;& defined( RE_Direct
  )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP )
  &amp;& NUM_POINT_LIGHT_SHADOWS &gt; 0\n\tPointLightShadow
  pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor (
  int i = 0; i &lt; NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight =
  pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight,
  geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) &amp;&
  ( UNROLLED_LOOP_INDEX &lt; NUM_POINT_LIGHT_SHADOWS
  )\n\t\tpointLightShadow = pointLightShadows[ i
  ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible,
  receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ],
  pointLightShadow.shadowMapSize, pointLightShadow.shadowBias,
  pointLightShadow.shadowRadius, vPointShadowCoord[ i ],
  pointLightShadow.shadowCameraNear,
  pointLightShadow.shadowCameraFar ) :
  1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material,
  reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if (
  NUM_SPOT_LIGHTS &gt; 0 ) &amp;& defined( RE_Direct )\n\tSpotLight
  spotLight;\n\t#if defined( USE_SHADOWMAP ) &amp;&
  NUM_SPOT_LIGHT_SHADOWS &gt; 0\n\tSpotLightShadow
  spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor (
  int i = 0; i &lt; NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight =
  spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight,
  geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) &amp;&
  ( UNROLLED_LOOP_INDEX &lt; NUM_SPOT_LIGHT_SHADOWS
  )\n\t\tspotLightShadow = spotLightShadows[ i
  ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible,
  receiveShadow ) ) ? getShadow( spotShadowMap[ i ],
  spotLightShadow.shadowMapSize, spotLightShadow.shadowBias,
  spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) :
  1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material,
  reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if (
  NUM_DIR_LIGHTS &gt; 0 ) &amp;& defined( RE_Direct
  )\n\tDirectionalLight directionalLight;\n\t#if defined(
  USE_SHADOWMAP ) &amp;& NUM_DIR_LIGHT_SHADOWS &gt;
  0\n\tDirectionalLightShadow
  directionalLightShadow;\n\t#endif\n\t#pragma
  unroll_loop_start\n\tfor ( int i = 0; i &lt; NUM_DIR_LIGHTS; i ++
  ) {\n\t\tdirectionalLight = directionalLights[ i
  ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight,
  geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) &amp;&
  ( UNROLLED_LOOP_INDEX &lt; NUM_DIR_LIGHT_SHADOWS
  )\n\t\tdirectionalLightShadow = directionalLightShadows[ i
  ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible,
  receiveShadow ) ) ? getShadow( directionalShadowMap[ i ],
  directionalLightShadow.shadowMapSize,
  directionalLightShadow.shadowBias,
  directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ]
  ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry,
  material, reflectedLight );\n\t}\n\t#pragma
  unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS &gt; 0 )
  &amp;& defined( RE_Direct_RectArea )\n\tRectAreaLight
  rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i
  &lt; NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight =
  rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight,
  geometry, material, reflectedLight );\n\t}\n\t#pragma
  unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse
  )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance =
  getAmbientLightIrradiance( ambientLightColor );\n\tirradiance +=
  getLightProbeIrradiance( lightProbe, geometry );\n\t#if (
  NUM_HEMI_LIGHTS &gt; 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor
  ( int i = 0; i &lt; NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance
  += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry
  );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if
  defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0
  );\n\tvec3 clearcoatRadiance = vec3( 0.0
  );\n#endif",lights_fragment_maps:"#if defined( RE_IndirectDiffuse
  )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D(
  lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance =
  lightMapTexelToLinear( lightMapTexel ).rgb *
  lightMapIntensity;\n\t\t#ifndef
  PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *=
  PI;\n\t\t#endif\n\t\tirradiance +=
  lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) &amp;&
  defined( STANDARD ) &amp;& defined( ENVMAP_TYPE_CUBE_UV
  )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance(
  geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined(
  USE_ENVMAP ) &amp;& defined( RE_IndirectSpecular )\n\tradiance +=
  getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal,
  material.specularRoughness, maxMipLevel );\n\t#ifdef
  CLEARCOAT\n\t\tclearcoatRadiance +=
  getLightProbeIndirectRadiance( geometry.viewDir,
  geometry.clearcoatNormal, material.clearcoatRoughness,
  maxMipLevel );\n\t#endif\n#endif",lights_fragment_end:"#if
  defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance,
  geometry, material, reflectedLight );\n#endif\n#if defined(
  RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance,
  iblIrradiance, clearcoatRadiance, geometry, material,
  reflectedLight );\n#endif",logdepthbuf_fragment:"#if defined(
  USE_LOGDEPTHBUF ) &amp;& defined( USE_LOGDEPTHBUF_EXT
  )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z :
  log2( vFragDepth ) * logDepthBufFC *
  0.5;\n#endif",logdepthbuf_pars_fragment:"#if defined(
  USE_LOGDEPTHBUF ) &amp;& defined( USE_LOGDEPTHBUF_EXT
  )\n\tuniform float logDepthBufFC;\n\tvarying float
  vFragDepth;\n\tvarying float
  vIsPerspective;\n#endif",logdepthbuf_pars_vertex:"#ifdef
  USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float
  vFragDepth;\n\t\tvarying float
  vIsPerspective;\n\t#else\n\t\tuniform float
  logDepthBufFC;\n\t#endif\n#endif",logdepthbuf_vertex:"#ifdef
  USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth =
  1.0 + gl_Position.w;\n\t\tvIsPerspective = float(
  isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif (
  isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z
  = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC -
  1.0;\n\t\t\tgl_Position.z *=
  gl_Position.w;\n\t\t}\n\t#endif\n#endif",map_fragment:"#ifdef
  USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor
  = mapTexelToLinear( texelColor );\n\tdiffuseColor *=
  texelColor;\n#endif",map_pars_fragment:"#ifdef USE_MAP\n\tuniform
  sampler2D map;\n#endif",map_particle_fragment:"#if defined(
  USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform *
  vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 )
  ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map,
  uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel
  );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D(
  alphaMap, uv ).g;\n#endif",map_particle_pars_fragment:"#if
  defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3
  uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D
  map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D
  alphaMap;\n#endif",metalnessmap_fragment:"float metalnessFactor =
  metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness =
  texture2D( metalnessMap, vUv );\n\tmetalnessFactor *=
  texelMetalness.b;\n#endif",metalnessmap_pars_fragment:"#ifdef
  USE_METALNESSMAP\n\tuniform sampler2D
  metalnessMap;\n#endif",morphnormal_vertex:"#ifdef
  USE_MORPHNORMALS\n\tobjectNormal *=
  morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 *
  morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 *
  morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 *
  morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 *
  morphTargetInfluences[ 3
  ];\n#endif",morphtarget_pars_vertex:"#ifdef
  USE_MORPHTARGETS\n\tuniform float
  morphTargetBaseInfluence;\n\t#ifndef
  USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8
  ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4
  ];\n\t#endif\n#endif",morphtarget_vertex:"#ifdef
  USE_MORPHTARGETS\n\ttransformed *=
  morphTargetBaseInfluence;\n\ttransformed += morphTarget0 *
  morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 *
  morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 *
  morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 *
  morphTargetInfluences[ 3 ];\n\t#ifndef
  USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 *
  morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 *
  morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 *
  morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 *
  morphTargetInfluences[ 7
  ];\n\t#endif\n#endif",normal_fragment_begin:"float faceDirection
  = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx =
  vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx(
  vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ),
  dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3
  normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal =
  normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal
  * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3
  tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize(
  vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent *
  faceDirection;\n\t\t\tbitangent = bitangent *
  faceDirection;\n\t\t#endif\n\t\t#if defined(
  TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP
  )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal
  );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal =
  normal;",normal_fragment_maps:"#ifdef
  OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz
  * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = -
  normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal *
  faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix *
  normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN =
  texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *=
  normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN
  * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb(
  -vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif
  defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb(
  -vViewPosition, normal, dHdxy_fwd(), faceDirection
  );\n#endif",normalmap_pars_fragment:"#ifdef
  USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2
  normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform
  mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) &amp;&
  ( defined ( TANGENTSPACE_NORMALMAP ) || defined (
  USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3
  eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection )
  {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ),
  dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ),
  dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx(
  vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N =
  surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp =
  cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp *
  st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat
  det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det
  == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn
  normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N *
  mapN.z );\n\t}\n#endif",clearcoat_normal_fragment_begin:"#ifdef
  CLEARCOAT\n\tvec3 clearcoatNormal =
  geometryNormal;\n#endif",clearcoat_normal_fragment_maps:"#ifdef
  USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D(
  clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *=
  clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal
  = normalize( vTBN * clearcoatMapN
  );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( -
  vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection
  );\n\t#endif\n#endif",clearcoat_pars_fragment:"#ifdef
  USE_CLEARCOATMAP\n\tuniform sampler2D
  clearcoatMap;\n#endif\n#ifdef
  USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D
  clearcoatRoughnessMap;\n#endif\n#ifdef
  USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D
  clearcoatNormalMap;\n\tuniform vec2
  clearcoatNormalScale;\n#endif",packing:"vec3 packNormalToRGB(
  const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 +
  0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn
  2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. /
  255.;const float UnpackDownscale = 255. / 256.;\nconst vec3
  PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256.
  );\nconst vec4 UnpackFactors = UnpackDownscale / vec4(
  PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4
  packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v
  * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r
  * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v )
  {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA(
  vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y,
  fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y,
  r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v )
  {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 )
  );\n}\nfloat viewZToOrthographicDepth( const in float viewZ,
  const in float near, const in float far ) {\n\treturn ( viewZ +
  near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ(
  const in float linearClipZ, const in float near, const in float
  far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat
  viewZToPerspectiveDepth( const in float viewZ, const in float
  near, const in float far ) {\n\treturn (( near + viewZ ) * far )
  / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ(
  const in float invClipZ, const in float near, const in float far
  ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far
  );\n}",premultiplied_alpha_fragment:"#ifdef
  PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *=
  gl_FragColor.a;\n#endif",project_vertex:"vec4 mvPosition = vec4(
  transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition =
  instanceMatrix * mvPosition;\n#endif\nmvPosition =
  modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix *
  mvPosition;",dithering_fragment:"#ifdef
  DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb
  );\n#endif",dithering_pars_fragment:"#ifdef DITHERING\n\tvec3
  dithering( vec3 color ) {\n\t\tfloat grid_position = rand(
  gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 /
  255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB =
  mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB,
  grid_position );\n\t\treturn color +
  dither_shift_RGB;\n\t}\n#endif",roughnessmap_fragment:"float
  roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4
  texelRoughness = texture2D( roughnessMap, vUv
  );\n\troughnessFactor *=
  texelRoughness.g;\n#endif",roughnessmap_pars_fragment:"#ifdef
  USE_ROUGHNESSMAP\n\tuniform sampler2D
  roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef
  USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS &gt; 0\n\t\tuniform
  sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS
  ];\n\t\tvarying vec4 vDirectionalShadowCoord[
  NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow
  {\n\t\t\tfloat shadowBias;\n\t\t\tfloat
  shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2
  shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow
  directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS
  ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS &gt; 0\n\t\tuniform
  sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying
  vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct
  SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat
  shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2
  shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow
  spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if
  NUM_POINT_LIGHT_SHADOWS &gt; 0\n\t\tuniform sampler2D
  pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4
  vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct
  PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat
  shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2
  shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat
  shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow
  pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat
  texture2DCompare( sampler2D depths, vec2 uv, float compare )
  {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D(
  depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D
  shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D(
  shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2
  uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2
  distribution = texture2DDistribution( shadow, uv );\n\t\tfloat
  hard_shadow = step( compare , distribution.x );\n\t\tif
  (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare -
  distribution.x ;\n\t\t\tfloat variance = max( 0.00000,
  distribution.y * distribution.y );\n\t\t\tfloat
  softness_probability = variance / (variance + distance * distance
  );\t\t\tsoftness_probability = clamp( ( softness_probability -
  0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max(
  hard_shadow, softness_probability ), 0.0, 1.0
  );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow(
  sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float
  shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow =
  1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z +=
  shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x &gt;=
  0.0, shadowCoord.x &lt;= 1.0, shadowCoord.y &gt;= 0.0,
  shadowCoord.y &lt;= 1.0 );\n\t\tbool inFrustum = all(
  inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum,
  shadowCoord.z &lt;= 1.0 );\n\t\tbool frustumTest = all(
  frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined(
  SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) /
  shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x *
  shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y *
  shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x *
  shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y *
  shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 =
  dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 /
  2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap,
  shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z )
  +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2(
  0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare(
  shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z )
  +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2(
  dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare(
  shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z )
  +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2(
  dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare(
  shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z )
  +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2(
  dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare(
  shadowMap, shadowCoord.xy, shadowCoord.z )
  +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2(
  dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare(
  shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z )
  +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2(
  dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare(
  shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z )
  +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2(
  dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare(
  shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z )
  +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2(
  0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare(
  shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z
  )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined(
  SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) /
  shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy =
  texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f =
  fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f *
  texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare(
  shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare(
  shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z )
  +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ),
  shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv +
  texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare(
  shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t
  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ),
  shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix(
  texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z
  ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx,
  dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix(
  texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z
  ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0
  * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix(
  texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z
  ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 *
  dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix(
  texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z
  ), \n\t\t\t\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 2.0 *
  dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t\tf.x ),\n\t\t\t\t\t
  mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ),
  shadowCoord.z ), \n\t\t\t\t\t\t\ttexture2DCompare( shadowMap, uv
  + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t\tf.x
  ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif
  defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow(
  shadowMap, shadowCoord.xy, shadowCoord.z
  );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap,
  shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn
  shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY )
  {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max(
  absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv
  *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar =
  v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat
  almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z &gt;= almostOne
  ) {\n\t\t\tif ( v.z &gt; 0.0 )\n\t\t\t\tplanar.x = 4.0 -
  v.x;\n\t\t} else if ( absV.x &gt;= almostOne ) {\n\t\t\tfloat
  signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 *
  signX;\n\t\t} else if ( absV.y &gt;= almostOne ) {\n\t\t\tfloat
  signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY +
  2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn
  vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat
  getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float
  shadowBias, float shadowRadius, vec4 shadowCoord, float
  shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize =
  vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3
  lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length(
  lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar -
  shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D =
  normalize( lightToPosition );\n\t\t#if defined(
  SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) ||
  defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 )
  * shadowRadius * texelSize.y;\n\t\t\treturn
  (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D +
  offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare(
  shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp )
  +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D +
  offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare(
  shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp )
  +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D,
  texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap,
  cubeToUV( bd3D + offset.xxy, texelSize.y ), dp )
  +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D +
  offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare(
  shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp )
  +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D +
  offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0
  );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap,
  cubeToUV( bd3D, texelSize.y ), dp
  );\n\t\t#endif\n\t}\n#endif",shadowmap_pars_vertex:"#ifdef
  USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS &gt; 0\n\t\tuniform
  mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS
  ];\n\t\tvarying vec4 vDirectionalShadowCoord[
  NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow
  {\n\t\t\tfloat shadowBias;\n\t\t\tfloat
  shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2
  shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow
  directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS
  ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS &gt; 0\n\t\tuniform
  mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying
  vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct
  SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat
  shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2
  shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow
  spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if
  NUM_POINT_LIGHT_SHADOWS &gt; 0\n\t\tuniform mat4
  pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4
  vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct
  PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat
  shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2
  shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat
  shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow
  pointLightShadows[ NUM_POINT_LIGHT_SHADOWS
  ];\n\t#endif\n#endif",shadowmap_vertex:"#ifdef
  USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS &gt; 0 ||
  NUM_SPOT_LIGHT_SHADOWS &gt; 0 || NUM_POINT_LIGHT_SHADOWS &gt;
  0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection(
  transformedNormal, viewMatrix );\n\t\tvec4
  shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS &gt;
  0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i &lt;
  NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition =
  worldPosition + vec4( shadowWorldNormal *
  directionalLightShadows[ i ].shadowNormalBias, 0
  );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i
  ] * shadowWorldPosition;\n\t}\n\t#pragma
  unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS &gt;
  0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i &lt;
  NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition =
  worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i
  ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] =
  spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma
  unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS &gt;
  0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i &lt;
  NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition =
  worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i
  ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] =
  pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma
  unroll_loop_end\n\t#endif\n#endif",shadowmask_pars_fragment:"float
  getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef
  USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS &gt;
  0\n\tDirectionalLightShadow directionalLight;\n\t#pragma
  unroll_loop_start\n\tfor ( int i = 0; i &lt;
  NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight =
  directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ?
  getShadow( directionalShadowMap[ i ],
  directionalLight.shadowMapSize, directionalLight.shadowBias,
  directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) :
  1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if
  NUM_SPOT_LIGHT_SHADOWS &gt; 0\n\tSpotLightShadow
  spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i
  &lt; NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight =
  spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow(
  spotShadowMap[ i ], spotLight.shadowMapSize,
  spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i
  ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if
  NUM_POINT_LIGHT_SHADOWS &gt; 0\n\tPointLightShadow
  pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i
  &lt; NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight =
  pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ?
  getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize,
  pointLight.shadowBias, pointLight.shadowRadius,
  vPointShadowCoord[ i ], pointLight.shadowCameraNear,
  pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma
  unroll_loop_end\n\t#endif\n\t#endif\n\treturn
  shadow;\n}",skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX
  = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix(
  skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z
  );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w
  );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform
  mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef
  BONE_TEXTURE\n\t\tuniform highp sampler2D
  boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4
  getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i *
  4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize )
  );\n\t\t\tfloat y = floor( j / float( boneTextureSize )
  );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat
  dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5
  );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5
  ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x
  + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx
  * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture,
  vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2,
  v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4
  boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in
  float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i)
  ];\n\t\t\treturn
  bone;\n\t\t}\n\t#endif\n#endif",skinning_vertex:"#ifdef
  USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed,
  1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX *
  skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex *
  skinWeight.y;\n\tskinned += boneMatZ * skinVertex *
  skinWeight.z;\n\tskinned += boneMatW * skinVertex *
  skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned
  ).xyz;\n#endif",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4
  skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x *
  boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix
  += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w *
  boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix *
  bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4(
  objectNormal, 0.0 ) ).xyz;\n\t#ifdef
  USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4(
  objectTangent, 0.0 )
  ).xyz;\n\t#endif\n#endif",specularmap_fragment:"float
  specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular =
  texture2D( specularMap, vUv );\n\tspecularStrength =
  texelSpecular.r;\n#else\n\tspecularStrength =
  1.0;\n#endif",specularmap_pars_fragment:"#ifdef
  USE_SPECULARMAP\n\tuniform sampler2D
  specularMap;\n#endif",tonemapping_fragment:"#if defined(
  TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping(
  gl_FragColor.rgb );\n#endif",tonemapping_pars_fragment:"#ifndef
  saturate\n#define saturate(a) clamp( a, 0.0, 1.0
  )\n#endif\nuniform float toneMappingExposure;\nvec3
  LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure *
  color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *=
  toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) +
  color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color )
  {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ),
  color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) )
  / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 )
  );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v +
  0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v +
  0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3
  ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat
  = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458,
  0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777
  )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(\t1.60475,
  -0.10208, -0.00327 ),\t\tvec3( -0.53108,\t1.10813, -0.07276
  ),\n\t\tvec3( -0.07367, -0.00605,\t1.07602 )\n\t);\n\tcolor *=
  toneMappingExposure / 0.6;\n\tcolor = ACESInputMat *
  color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat
  * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping(
  vec3 color ) { return color; }",transmissionmap_fragment:"#ifdef
  USE_TRANSMISSIONMAP\n\ttotalTransmission *= texture2D(
  transmissionMap, vUv
  ).r;\n#endif",transmissionmap_pars_fragment:"#ifdef
  USE_TRANSMISSIONMAP\n\tuniform sampler2D
  transmissionMap;\n#endif",uv_pars_fragment:"#if ( defined( USE_UV
  ) &amp;& ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2
  vUv;\n#endif",uv_pars_vertex:"#ifdef USE_UV\n\t#ifdef
  UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2
  vUv;\n\t#endif\n\tuniform mat3
  uvTransform;\n#endif",uv_vertex:"#ifdef USE_UV\n\tvUv = (
  uvTransform * vec3( uv, 1 ) ).xy;\n#endif",uv2_pars_fragment:"#if
  defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2
  vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) ||
  defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2
  vUv2;\n\tuniform mat3 uv2Transform;\n#endif",uv2_vertex:"#if
  defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = (
  uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",worldpos_vertex:"#if
  defined( USE_ENVMAP ) || defined( DISTANCE ) || defined (
  USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0
  );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix *
  worldPosition;\n\t#endif\n\tworldPosition = modelMatrix *
  worldPosition;\n#endif",background_frag:"uniform sampler2D
  t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor =
  texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear(
  texColor );\n\t#include \n\t#include
  \n}",background_vert:"varying vec2 vUv;\nuniform mat3
  uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1
  ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0
  );\n}",cube_frag:"#include \nuniform float opacity;\nvarying vec3
  vWorldDirection;\n#include \nvoid main() {\n\tvec3 vReflect =
  vWorldDirection;\n\t#include \n\tgl_FragColor =
  envColor;\n\tgl_FragColor.a *= opacity;\n\t#include \n\t#include
  \n}",cube_vert:"varying vec3 vWorldDirection;\n#include \nvoid
  main() {\n\tvWorldDirection = transformDirection( position,
  modelMatrix );\n\t#include \n\t#include \n\tgl_Position.z =
  gl_Position.w;\n}",depth_frag:"#if DEPTH_PACKING ==
  3200\n\tuniform float opacity;\n#endif\n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \nvarying
  vec2 vHighPrecisionZW;\nvoid main() {\n\t#include \n\tvec4
  diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING ==
  3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include
  \n\t#include \n\t#include \n\t#include \n\tfloat fragCoordZ = 0.5
  * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if
  DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 -
  fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING ==
  3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ
  );\n\t#endif\n}",depth_vert:"#include \n#include \n#include
  \n#include \n#include \n#include \n#include \nvarying vec2
  vHighPrecisionZW;\nvoid main() {\n\t#include \n\t#include
  \n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include \n\t\t#include
  \n\t\t#include \n\t#endif\n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include
  \n\tvHighPrecisionZW =
  gl_Position.zw;\n}",distanceRGBA_frag:"#define DISTANCE\nuniform
  vec3 referencePosition;\nuniform float nearDistance;\nuniform
  float farDistance;\nvarying vec3 vWorldPosition;\n#include
  \n#include \n#include \n#include \n#include \n#include \nvoid
  main () {\n\t#include \n\tvec4 diffuseColor = vec4( 1.0
  );\n\t#include \n\t#include \n\t#include \n\tfloat dist = length(
  vWorldPosition - referencePosition );\n\tdist = ( dist -
  nearDistance ) / ( farDistance - nearDistance );\n\tdist =
  saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist
  );\n}",distanceRGBA_vert:"#define DISTANCE\nvarying vec3
  vWorldPosition;\n#include \n#include \n#include \n#include
  \n#include \n#include \nvoid main() {\n\t#include \n\t#include
  \n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include \n\t\t#include
  \n\t\t#include \n\t#endif\n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include
  \n\tvWorldPosition =
  worldPosition.xyz;\n}",equirect_frag:"uniform sampler2D
  tEquirect;\nvarying vec3 vWorldDirection;\n#include \nvoid main()
  {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2
  sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D(
  tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear(
  texColor );\n\t#include \n\t#include \n}",equirect_vert:"varying
  vec3 vWorldDirection;\n#include \nvoid main()
  {\n\tvWorldDirection = transformDirection( position, modelMatrix
  );\n\t#include \n\t#include \n}",linedashed_frag:"uniform vec3
  diffuse;\nuniform float opacity;\nuniform float
  dashSize;\nuniform float totalSize;\nvarying float
  vLineDistance;\n#include \n#include \n#include \n#include
  \n#include \nvoid main() {\n\t#include \n\tif ( mod(
  vLineDistance, totalSize ) &gt; dashSize )
  {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4
  diffuseColor = vec4( diffuse, opacity );\n\t#include \n\t#include
  \n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4(
  outgoingLight, diffuseColor.a );\n\t#include \n\t#include
  \n\t#include \n\t#include \n}",linedashed_vert:"uniform float
  scale;\nattribute float lineDistance;\nvarying float
  vLineDistance;\n#include \n#include \n#include \n#include
  \n#include \n#include \nvoid main() {\n\tvLineDistance = scale *
  lineDistance;\n\t#include \n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include
  \n}",meshbasic_frag:"uniform vec3 diffuse;\nuniform float
  opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3
  vNormal;\n#endif\n#include \n#include \n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \n#include
  \nvoid main() {\n\t#include \n\tvec4 diffuseColor = vec4(
  diffuse, opacity );\n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\tReflectedLight
  reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3(
  0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4
  lightMapTexel= texture2D( lightMap, vUv2
  );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear(
  lightMapTexel ).rgb *
  lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse
  += vec3( 1.0 );\n\t#endif\n\t#include
  \n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3
  outgoingLight = reflectedLight.indirectDiffuse;\n\t#include
  \n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a
  );\n\t#include \n\t#include \n\t#include \n\t#include
  \n\t#include \n}",meshbasic_vert:"#include \n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \n#include
  \n#include \nvoid main() {\n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#ifdef USE_ENVMAP\n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#endif\n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n}",meshlambert_frag:"uniform vec3
  diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying
  vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef
  DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3
  vIndirectBack;\n#endif\n#include \n#include \n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \n#include
  \nvoid main() {\n\t#include \n\tvec4 diffuseColor = vec4(
  diffuse, opacity );\n\tReflectedLight reflectedLight =
  ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0
  ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#ifdef
  DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += (
  gl_FrontFacing ) ? vIndirectFront :
  vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse +=
  vIndirectFront;\n\t#endif\n\t#include
  \n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert(
  diffuseColor.rgb );\n\t#ifdef
  DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing
  ) ? vLightFront :
  vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse =
  vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *=
  BRDF_Diffuse_Lambert( diffuseColor.rgb ) *
  getShadowMask();\n\t#include \n\tvec3 outgoingLight =
  reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
  totalEmissiveRadiance;\n\t#include \n\tgl_FragColor = vec4(
  outgoingLight, diffuseColor.a );\n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include
  \n}",meshlambert_vert:"#define LAMBERT\nvarying vec3
  vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef
  DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3
  vIndirectBack;\n#endif\n#include \n#include \n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \n#include
  \n#include \n#include \n#include \nvoid main() {\n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include
  \n}",meshmatcap_frag:"#define MATCAP\nuniform vec3
  diffuse;\nuniform float opacity;\nuniform sampler2D
  matcap;\nvarying vec3 vViewPosition;\n#ifndef
  FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \n#include
  \n#include \n#include \n#include \nvoid main() {\n\t#include
  \n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include \n\t#include
  \n\t#include \n\tvec3 viewDir = normalize( vViewPosition
  );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x )
  );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x,
  normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef
  USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv
  );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor
  );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0
  );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb *
  matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight,
  diffuseColor.a );\n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n}",meshmatcap_vert:"#define
  MATCAP\nvarying vec3 vViewPosition;\n#ifndef
  FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \n#include
  \n#include \nvoid main() {\n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include \n\t#ifndef
  FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal
  );\n\t#endif\n\t#include \n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include
  \n\tvViewPosition = - mvPosition.xyz;\n}",meshtoon_frag:"#define
  TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform
  float opacity;\n#include \n#include \n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \nvoid
  main() {\n\t#include \n\tvec4 diffuseColor = vec4( diffuse,
  opacity );\n\tReflectedLight reflectedLight = ReflectedLight(
  vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3
  totalEmissiveRadiance = emissive;\n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include \n\t#include
  \n\t#include \n\tvec3 outgoingLight =
  reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
  totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight,
  diffuseColor.a );\n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n}",meshtoon_vert:"#define
  TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying
  vec3 vNormal;\n#endif\n#include \n#include \n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \n#include
  \n#include \nvoid main() {\n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include \n\t#include
  \n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal
  );\n#endif\n\t#include \n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\tvViewPosition = -
  mvPosition.xyz;\n\t#include \n\t#include \n\t#include
  \n}",meshphong_frag:"#define PHONG\nuniform vec3
  diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform
  float shininess;\nuniform float opacity;\n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \n#include
  \n#include \n#include \n#include \n#include \nvoid main()
  {\n\t#include \n\tvec4 diffuseColor = vec4( diffuse, opacity
  );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0
  ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3
  totalEmissiveRadiance = emissive;\n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n\tvec3 outgoingLight =
  reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
  reflectedLight.directSpecular + reflectedLight.indirectSpecular +
  totalEmissiveRadiance;\n\t#include \n\tgl_FragColor = vec4(
  outgoingLight, diffuseColor.a );\n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include
  \n}",meshphong_vert:"#define PHONG\nvarying vec3
  vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3
  vNormal;\n#endif\n#include \n#include \n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \n#include
  \n#include \n#include \nvoid main() {\n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include \n\t#include
  \n\t#include \n#ifndef FLAT_SHADED\n\tvNormal = normalize(
  transformedNormal );\n#endif\n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include \n\t#include
  \n\tvViewPosition = - mvPosition.xyz;\n\t#include \n\t#include
  \n\t#include \n\t#include \n}",meshphysical_frag:"#define
  STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define
  CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3
  diffuse;\nuniform vec3 emissive;\nuniform float
  roughness;\nuniform float metalness;\nuniform float
  opacity;\n#ifdef TRANSMISSION\n\tuniform float
  transmission;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float
  reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float
  clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef
  USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3
  vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3
  vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3
  vTangent;\n\t\tvarying vec3
  vBitangent;\n\t#endif\n#endif\n#include \n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \n#include
  \nvoid main() {\n\t#include \n\tvec4 diffuseColor = vec4(
  diffuse, opacity );\n\tReflectedLight reflectedLight =
  ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0
  ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef
  TRANSMISSION\n\t\tfloat totalTransmission =
  transmission;\n\t#endif\n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include \n\t#include
  \n\tvec3 outgoingLight = reflectedLight.directDiffuse +
  reflectedLight.indirectDiffuse + reflectedLight.directSpecular +
  reflectedLight.indirectSpecular +
  totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a
  *= mix( saturate( 1. - totalTransmission +
  linearToRelativeLuminance( reflectedLight.directSpecular +
  reflectedLight.indirectSpecular ) ), 1.0, metalness
  );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight,
  diffuseColor.a );\n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n}",meshphysical_vert:"#define
  STANDARD\nvarying vec3 vViewPosition;\n#ifndef
  FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef
  USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3
  vBitangent;\n\t#endif\n#endif\n#include \n#include \n#include
  \n#include \n#include \n#include \n#include \n#include \n#include
  \n#include \n#include \nvoid main() {\n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include \n\t#include
  \n\t#include \n#ifndef FLAT_SHADED\n\tvNormal = normalize(
  transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent =
  normalize( transformedTangent );\n\t\tvBitangent = normalize(
  cross( vNormal, vTangent ) * tangent.w
  );\n\t#endif\n#endif\n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include
  \n\tvViewPosition = - mvPosition.xyz;\n\t#include \n\t#include
  \n\t#include \n}",normal_frag:"#define NORMAL\nuniform float
  opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) ||
  defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3
  vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3
  vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3
  vTangent;\n\t\tvarying vec3
  vBitangent;\n\t#endif\n#endif\n#include \n#include \n#include
  \n#include \n#include \n#include \nvoid main() {\n\t#include
  \n\t#include \n\t#include \n\t#include \n\tgl_FragColor = vec4(
  packNormalToRGB( normal ), opacity );\n}",normal_vert:"#define
  NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) ||
  defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3
  vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3
  vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3
  vTangent;\n\t\tvarying vec3
  vBitangent;\n\t#endif\n#endif\n#include \n#include \n#include
  \n#include \n#include \n#include \n#include \nvoid main()
  {\n\t#include \n\t#include \n\t#include \n\t#include \n\t#include
  \n\t#include \n#ifndef FLAT_SHADED\n\tvNormal = normalize(
  transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent =
  normalize( transformedTangent );\n\t\tvBitangent = normalize(
  cross( vNormal, vTangent ) * tangent.w
  );\n\t#endif\n#endif\n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include \n#if
  defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined(
  TANGENTSPACE_NORMALMAP )\n\tvViewPosition = -
  mvPosition.xyz;\n#endif\n}",points_frag:"uniform vec3
  diffuse;\nuniform float opacity;\n#include \n#include \n#include
  \n#include \n#include \n#include \nvoid main() {\n\t#include
  \n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor =
  vec4( diffuse, opacity );\n\t#include \n\t#include \n\t#include
  \n\t#include \n\toutgoingLight =
  diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight,
  diffuseColor.a );\n\t#include \n\t#include \n\t#include
  \n\t#include \n}",points_vert:"uniform float size;\nuniform float
  scale;\n#include \n#include \n#include \n#include \n#include
  \n#include \nvoid main() {\n\t#include \n\t#include \n\t#include
  \n\t#include \n\tgl_PointSize = size;\n\t#ifdef
  USE_SIZEATTENUATION\n\t\tbool isPerspective =
  isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective
  ) gl_PointSize *= ( scale / - mvPosition.z
  );\n\t#endif\n\t#include \n\t#include \n\t#include \n\t#include
  \n}",shadow_frag:"uniform vec3 color;\nuniform float
  opacity;\n#include \n#include \n#include \n#include \n#include
  \n#include \n#include \nvoid main() {\n\tgl_FragColor = vec4(
  color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include
  \n\t#include \n\t#include \n}",shadow_vert:"#include \n#include
  \n#include \nvoid main() {\n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n\t#include \n\t#include \n\t#include
  \n\t#include \n\t#include \n}",sprite_frag:"uniform vec3
  diffuse;\nuniform float opacity;\n#include \n#include \n#include
  \n#include \n#include \n#include \n#include \nvoid main()
  {\n\t#include \n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4
  diffuseColor = vec4( diffuse, opacity );\n\t#include \n\t#include
  \n\t#include \n\t#include \n\toutgoingLight =
  diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight,
  diffuseColor.a );\n\t#include \n\t#include \n\t#include
  \n}",sprite_vert:"uniform float rotation;\nuniform vec2
  center;\n#include \n#include \n#include \n#include \n#include
  \nvoid main() {\n\t#include \n\tvec4 mvPosition = modelViewMatrix
  * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length(
  vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z
  ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[
  1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef
  USE_SIZEATTENUATION\n\t\tbool isPerspective =
  isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective
  ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = (
  position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2
  rotatedPosition;\n\trotatedPosition.x = cos( rotation ) *
  alignedPosition.x - sin( rotation ) *
  alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) *
  alignedPosition.x + cos( rotation ) *
  alignedPosition.y;\n\tmvPosition.xy +=
  rotatedPosition;\n\tgl_Position = projectionMatrix *
  mvPosition;\n\t#include \n\t#include \n\t#include
  \n}"},ui={common:{diffuse:{value:new
  tn(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new
  yt},uv2Transform:{value:new
  yt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new
  vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new
  tn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new
  tn(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new
  yt}},sprite:{diffuse:{value:new
  tn(15658734)},opacity:{value:1},center:{value:new
  vt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new
  yt}}},di={basic:{uniforms:Yn([ui.common,ui.specularmap,ui.envmap,ui.aomap,ui.lightmap,ui.fog]),vertexShader:hi.meshbasic_vert,fragmentShader:hi.meshbasic_frag},lambert:{uniforms:Yn([ui.common,ui.specularmap,ui.envmap,ui.aomap,ui.lightmap,ui.emissivemap,ui.fog,ui.lights,{emissive:{value:new
  tn(0)}}]),vertexShader:hi.meshlambert_vert,fragmentShader:hi.meshlambert_frag},phong:{uniforms:Yn([ui.common,ui.specularmap,ui.envmap,ui.aomap,ui.lightmap,ui.emissivemap,ui.bumpmap,ui.normalmap,ui.displacementmap,ui.fog,ui.lights,{emissive:{value:new
  tn(0)},specular:{value:new
  tn(1118481)},shininess:{value:30}}]),vertexShader:hi.meshphong_vert,fragmentShader:hi.meshphong_frag},standard:{uniforms:Yn([ui.common,ui.envmap,ui.aomap,ui.lightmap,ui.emissivemap,ui.bumpmap,ui.normalmap,ui.displacementmap,ui.roughnessmap,ui.metalnessmap,ui.fog,ui.lights,{emissive:{value:new
  tn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:hi.meshphysical_vert,fragmentShader:hi.meshphysical_frag},toon:{uniforms:Yn([ui.common,ui.aomap,ui.lightmap,ui.emissivemap,ui.bumpmap,ui.normalmap,ui.displacementmap,ui.gradientmap,ui.fog,ui.lights,{emissive:{value:new
  tn(0)}}]),vertexShader:hi.meshtoon_vert,fragmentShader:hi.meshtoon_frag},matcap:{uniforms:Yn([ui.common,ui.bumpmap,ui.normalmap,ui.displacementmap,ui.fog,{matcap:{value:null}}]),vertexShader:hi.meshmatcap_vert,fragmentShader:hi.meshmatcap_frag},points:{uniforms:Yn([ui.points,ui.fog]),vertexShader:hi.points_vert,fragmentShader:hi.points_frag},dashed:{uniforms:Yn([ui.common,ui.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:hi.linedashed_vert,fragmentShader:hi.linedashed_frag},depth:{uniforms:Yn([ui.common,ui.displacementmap]),vertexShader:hi.depth_vert,fragmentShader:hi.depth_frag},normal:{uniforms:Yn([ui.common,ui.bumpmap,ui.normalmap,ui.displacementmap,{opacity:{value:1}}]),vertexShader:hi.normal_vert,fragmentShader:hi.normal_frag},sprite:{uniforms:Yn([ui.sprite,ui.fog]),vertexShader:hi.sprite_vert,fragmentShader:hi.sprite_frag},background:{uniforms:{uvTransform:{value:new
  yt},t2D:{value:null}},vertexShader:hi.background_vert,fragmentShader:hi.background_frag},cube:{uniforms:Yn([ui.envmap,{opacity:{value:1}}]),vertexShader:hi.cube_vert,fragmentShader:hi.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:hi.equirect_vert,fragmentShader:hi.equirect_frag},distanceRGBA:{uniforms:Yn([ui.common,ui.displacementmap,{referencePosition:{value:new
  Lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:hi.distanceRGBA_vert,fragmentShader:hi.distanceRGBA_frag},shadow:{uniforms:Yn([ui.lights,ui.fog,{color:{value:new
  tn(0)},opacity:{value:1}}]),vertexShader:hi.shadow_vert,fragmentShader:hi.shadow_frag}};function
  pi(t,e,n,i,r){const s=new tn(0);let
  a,o,c=0,h=null,u=0,d=null;function
  p(t,e){n.buffers.color.setClear(t.r,t.g,t.b,e,r)}return{getClearColor:function(){return
  s},setClearColor:function(t,e=1){s.set(t),c=e,p(s,c)},getClearAlpha:function(){return
  c},setClearAlpha:function(t){c=t,p(s,c)},render:function(n,r,m,f){let
  g=!0===r.isScene?r.background:null;g&amp;&amp;g.isTexture&amp;&amp;(g=e.get(g));const
  v=t.xr,y=v.getSession&amp;&amp;v.getSession();y&amp;&amp;"additive"===y.environmentBlendMode&amp;&amp;(g=null),null===g?p(s,c):g&amp;&amp;g.isColor&amp;&amp;(p(g,1),f=!0),(t.autoClear||f)&amp;&amp;t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&amp;&amp;(g.isCubeTexture||g.mapping===l)?(void
  0===o&amp;&amp;(o=new Wn(new qn(1,1,1),new
  Jn({name:"BackgroundCubeMaterial",uniforms:Xn(di.cube.uniforms),vertexShader:di.cube.vertexShader,fragmentShader:di.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(t,e,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return
  this.uniforms.envMap.value}}),i.update(o)),o.material.uniforms.envMap.value=g,o.material.uniforms.flipEnvMap.value=g.isCubeTexture&amp;&amp;g._needsFlipEnvMap?-1:1,h===g&amp;&amp;u===g.version&amp;&amp;d===t.toneMapping||(o.material.needsUpdate=!0,h=g,u=g.version,d=t.toneMapping),n.unshift(o,o.geometry,o.material,0,0,null)):g&amp;&amp;g.isTexture&amp;&amp;(void
  0===a&amp;&amp;(a=new Wn(new ci(2,2),new
  Jn({name:"BackgroundMaterial",uniforms:Xn(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return
  this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=g,!0===g.matrixAutoUpdate&amp;&amp;g.updateMatrix(),a.material.uniforms.uvTransform.value.copy(g.matrix),h===g&amp;&amp;u===g.version&amp;&amp;d===t.toneMapping||(a.material.needsUpdate=!0,h=g,u=g.version,d=t.toneMapping),n.unshift(a,a.geometry,a.material,0,0,null))}}}function
  mi(t,e,n,i){const
  r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||null!==s,o={},l=d(null);let
  c=l;function h(e){return
  i.isWebGL2?t.bindVertexArray(e):s.bindVertexArrayOES(e)}function
  u(e){return
  i.isWebGL2?t.deleteVertexArray(e):s.deleteVertexArrayOES(e)}function
  d(t){const e=[],n=[],i=[];for(let t=0;t=0){const s=l[e];if(void
  0!==s){const e=s.normalized,r=s.itemSize,a=n.get(s);if(void
  0===a)continue;const
  l=a.buffer,c=a.type,h=a.bytesPerElement;if(s.isInterleavedBufferAttribute){const
  n=s.data,a=n.stride,u=s.offset;n&amp;&amp;n.isInstancedInterleavedBuffer?(f(i,n.meshPerAttribute),void
  0===o._maxInstanceCount&amp;&amp;(o._maxInstanceCount=n.meshPerAttribute*n.count)):m(i),t.bindBuffer(34962,l),v(i,r,c,e,a*h,u*h)}else
  s.isInstancedBufferAttribute?(f(i,s.meshPerAttribute),void
  0===o._maxInstanceCount&amp;&amp;(o._maxInstanceCount=s.meshPerAttribute*s.count)):m(i),t.bindBuffer(34962,l),v(i,r,c,e,0,0)}else
  if("instanceMatrix"===e){const e=n.get(r.instanceMatrix);if(void
  0===e)continue;const
  s=e.buffer,a=e.type;f(i+0,1),f(i+1,1),f(i+2,1),f(i+3,1),t.bindBuffer(34962,s),t.vertexAttribPointer(i+0,4,a,!1,64,0),t.vertexAttribPointer(i+1,4,a,!1,64,16),t.vertexAttribPointer(i+2,4,a,!1,64,32),t.vertexAttribPointer(i+3,4,a,!1,64,48)}else
  if("instanceColor"===e){const e=n.get(r.instanceColor);if(void
  0===e)continue;const
  s=e.buffer,a=e.type;f(i,1),t.bindBuffer(34962,s),t.vertexAttribPointer(i,3,a,!1,12,0)}else
  if(void 0!==h){const n=h[e];if(void 0!==n)switch(n.length){case
  2:t.vertexAttrib2fv(i,n);break;case
  3:t.vertexAttrib3fv(i,n);break;case
  4:t.vertexAttrib4fv(i,n);break;default:t.vertexAttrib1fv(i,n)}}}}g()}(r,l,u,y),null!==x&amp;&amp;t.bindBuffer(34963,n.get(x).buffer))},reset:y,resetDefaultState:x,dispose:function(){y();for(const
  t in o){const e=o[t];for(const t in e){const n=e[t];for(const t
  in n)u(n[t].object),delete n[t];delete e[t]}delete
  o[t]}},releaseStatesOfGeometry:function(t){if(void
  0===o[t.id])return;const e=o[t.id];for(const t in e){const
  n=e[t];for(const t in n)u(n[t].object),delete n[t];delete
  e[t]}delete o[t.id]},releaseStatesOfProgram:function(t){for(const
  e in o){const n=o[e];if(void 0===n[t.id])continue;const
  i=n[t.id];for(const t in i)u(i[t].object),delete i[t];delete
  n[t.id]}},initAttributes:p,enableAttribute:m,disableUnusedAttributes:g}}function
  fi(t,e,n,i){const r=i.isWebGL2;let
  s;this.setMode=function(t){s=t},this.render=function(e,i){t.drawArrays(s,e,i),n.update(i,s,1)},this.renderInstances=function(i,a,o){if(0===o)return;let
  l,c;if(r)l=t,c="drawArraysInstanced";else
  if(l=e.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",null===l)return
  void console.error("THREE.WebGLBufferRenderer: using
  THREE.InstancedBufferGeometry but hardware does not support
  extension
  ANGLE_instanced_arrays.");l[c](s,i,a,o),n.update(a,s,o)}}function
  gi(t,e,n){let i;function
  r(e){if("highp"===e){if(t.getShaderPrecisionFormat(35633,36338).precision&gt;0&amp;&amp;t.getShaderPrecisionFormat(35632,36338).precision&gt;0)return"highp";e="mediump"}return"mediump"===e&amp;&amp;t.getShaderPrecisionFormat(35633,36337).precision&gt;0&amp;&amp;t.getShaderPrecisionFormat(35632,36337).precision&gt;0?"mediump":"lowp"}const
  s="undefined"!=typeof WebGL2RenderingContext&amp;&amp;t
  instanceof WebGL2RenderingContext||"undefined"!=typeof
  WebGL2ComputeRenderingContext&amp;&amp;t instanceof
  WebGL2ComputeRenderingContext;let a=void
  0!==n.precision?n.precision:"highp";const
  o=r(a);o!==a&amp;&amp;(console.warn("THREE.WebGLRenderer:",a,"not
  supported, using",o,"instead."),a=o);const
  l=!0===n.logarithmicDepthBuffer,c=t.getParameter(34930),h=t.getParameter(35660),u=t.getParameter(3379),d=t.getParameter(34076),p=t.getParameter(34921),m=t.getParameter(36347),f=t.getParameter(36348),g=t.getParameter(36349),v=h&gt;0,y=s||e.has("OES_texture_float");return{isWebGL2:s,getMaxAnisotropy:function(){if(void
  0!==i)return
  i;if(!0===e.has("EXT_texture_filter_anisotropic")){const
  n=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else
  i=0;return
  i},getMaxPrecision:r,precision:a,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:h,maxTextureSize:u,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:v&amp;&amp;y,maxSamples:s?t.getParameter(36183):0}}function
  vi(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ne,o=new
  yt,l={value:null,needsUpdate:!1};function
  c(){l.value!==n&amp;&amp;(l.value=n,l.needsUpdate=i&gt;0),e.numPlanes=i,e.numIntersection=0}function
  h(t,n,i,r){const s=null!==t?t.length:0;let
  c=null;if(0!==s){if(c=l.value,!0!==r||null===c){const
  e=i+4*s,r=n.matrixWorldInverse;o.getNormalMatrix(r),(null===c||c.length0){const
  a=t.getRenderTarget(),o=new ni(s.height/2);return
  o.fromEquirectangularTexture(t,r),e.set(r,o),t.setRenderTarget(a),r.addEventListener("dispose",i),n(o.texture,r.mapping)}return
  null}}}return r},dispose:function(){e=new WeakMap}}}function
  xi(t){const e={};function n(n){if(void 0!==e[n])return e[n];let
  i;switch(n){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(n)}return
  e[n]=i,i}return{has:function(t){return
  null!==n(t)},init:function(t){t.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float")},get:function(t){const
  e=n(t);return
  null===e&amp;&amp;console.warn("THREE.WebGLRenderer: "+t+"
  extension not supported."),e}}}function _i(t,e,n,i){const
  r={},s=new WeakMap;function a(t){const
  o=t.target;null!==o.index&amp;&amp;e.remove(o.index);for(const t
  in
  o.attributes)e.remove(o.attributes[t]);o.removeEventListener("dispose",a),delete
  r[o.id];const
  l=s.get(o);l&amp;&amp;(e.remove(l),s.delete(o)),i.releaseStatesOfGeometry(o),!0===o.isInstancedBufferGeometry&amp;&amp;delete
  o._maxInstanceCount,n.memory.geometries--}function o(t){const
  n=[],i=t.index,r=t.attributes.position;let a=0;if(null!==i){const
  t=i.array;a=i.version;for(let e=0,i=t.length;e<i i=
  "t[e+0],r=t[e+1],s=t[e+2];n.push(i,r,r,s,s,i)}}else{const" t=
  "r.array;a=r.version;for(let" e=
  "0,i=t.length/3-1;e">65535?dn:hn)(n,1);o.version=a;const
  l=s.get(t);l&amp;&amp;e.remove(l),s.set(t,o)}return{get:function(t,e){return!0===r[e.id]||(e.addEventListener("dispose",a),r[e.id]=!0,n.memory.geometries++),e},update:function(t){const
  n=t.attributes;for(const t in n)e.update(n[t],34962);const
  i=t.morphAttributes;for(const t in i){const n=i[t];for(let
  t=0,i=n.length;t&lt;8;t++)i[t]=[t,0];return{update:function(r,s,a,o){const
  l=r.morphTargetInfluences,c=void 0===l?0:l.length;let
  h=e[s.id];if(void 0===h){h=[];for(let
  t=0;t&lt;8;t++)t&lt;8;t++){const
  e=i[t],r=e[0],a=e[1];r!==Number.MAX_SAFE_INTEGER&amp;&amp;a?(u&amp;&amp;s.getAttribute("morphTarget"+t)!==u[r]&amp;&amp;s.setAttribute("morphTarget"+t,u[r]),d&amp;&amp;s.getAttribute("morphNormal"+t)!==d[r]&amp;&amp;s.setAttribute("morphNormal"+t,d[r]),n[t]=a,p+=a):(u&amp;&amp;!0===s.hasAttribute("morphTarget"+t)&amp;&amp;s.deleteAttribute("morphTarget"+t),d&amp;&amp;!0===s.hasAttribute("morphNormal"+t)&amp;&amp;s.deleteAttribute("morphNormal"+t),n[t]=0)}const
  m=s.morphTargetsRelative?1:1-p;o.getUniforms().setValue(t,"morphTargetBaseInfluence",m),o.getUniforms().setValue(t,"morphTargetInfluences",n)}}}function
  Ei(t,e,n,i){let r=new WeakMap;function s(t){const
  e=t.target;e.removeEventListener("dispose",s),n.remove(e.instanceMatrix),null!==e.instanceColor&amp;&amp;n.remove(e.instanceColor)}return{update:function(t){const
  a=i.render.frame,o=t.geometry,l=e.get(t,o);return
  r.get(l)!==a&amp;&amp;(e.update(l),r.set(l,a)),t.isInstancedMesh&amp;&amp;(!1===t.hasEventListener("dispose",s)&amp;&amp;t.addEventListener("dispose",s),n.update(t.instanceMatrix,34962),null!==t.instanceColor&amp;&amp;n.update(t.instanceColor,34962)),l},dispose:function(){r=new
  WeakMap}}}di.physical={uniforms:Yn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new
  vt(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new
  tn(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:hi.meshphysical_vert,fragmentShader:hi.meshphysical_frag};class
  Ai extends
  bt{constructor(t=null,e=1,n=1,i=1){super(null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=p,this.minFilter=p,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Ai.prototype.isDataTexture2DArray=!0;class
  Li extends
  bt{constructor(t=null,e=1,n=1,i=1){super(null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=p,this.minFilter=p,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Li.prototype.isDataTexture3D=!0;const
  Ri=new bt,Ci=new Ai,Pi=new Li,Di=new ei,Ii=[],Ni=[],Bi=new
  Float32Array(16),zi=new Float32Array(9),Fi=new
  Float32Array(4);function Oi(t,e,n){const
  i=t[0];if(i&lt;=0||i&gt;0)return t;const r=e*n;let
  s=Ii[r];if(void 0===s&amp;&amp;(s=new
  Float32Array(r),Ii[r]=s),0!==e){i.toArray(s,0);for(let
  i=1,r=0;i!==e;++i)r+=n,t[i].toArray(s,r)}return s}function
  Hi(t,e){if(t.length!==e.length)return!1;for(let
  n=0,i=t.length;n&lt;([\w\d./]+)&gt;/gm;function kr(t){return
  t.replace(Ur,Vr)}function Vr(t,e){const n=hi[e];if(void
  0===n)throw new Error("Can not resolve #include
  &lt;"+e+"&gt;");return kr(n)}const Wr=/#pragma
  unroll_loop[\s]+?for \( int i \= (\d+)\; i &lt; (\d+)\; i \+\+ \)
  \{([\s\S]+?)(?=\})\}/g,jr=/#pragma
  unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*&lt;\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma
  unroll_loop_end/g;function qr(t){return
  t.replace(jr,Yr).replace(Wr,Xr)}function Xr(t,e,n,i){return
  console.warn("WebGLProgram: #pragma unroll_loop shader syntax is
  deprecated. Please use #pragma unroll_loop_start syntax
  instead."),Yr(t,e,n,i)}function Yr(t,e,n,i){let r="";for(let
  t=parseInt(e);t0?t.gammaFactor:1,v=n.isWebGL2?"":function(t){return[t.extensionDerivatives||t.envMapCubeUV||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||"physical"===t.shaderID?"#extension
  GL_OES_standard_derivatives :
  enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&amp;&amp;t.rendererExtensionFragDepth?"#extension
  GL_EXT_frag_depth :
  enable":"",t.extensionDrawBuffers&amp;&amp;t.rendererExtensionDrawBuffers?"#extension
  GL_EXT_draw_buffers :
  require":"",(t.extensionShaderTextureLOD||t.envMap)&amp;&amp;t.rendererExtensionShaderTextureLod?"#extension
  GL_EXT_shader_texture_lod :
  enable":""].filter(Or).join("\n")}(n),y=function(t){const
  e=[];for(const n in t){const
  i=t[n];!1!==i&amp;&amp;e.push("#define "+n+" "+i)}return
  e.join("\n")}(o),x=a.createProgram();let
  _,w,b=n.glslVersion?"#version
  "+n.glslVersion+"\n":"";n.isRawShaderMaterial?(_=[y].filter(Or).join("\n"),_.length&gt;0&amp;&amp;(_+="\n"),w=[v,y].filter(Or).join("\n"),w.length&gt;0&amp;&amp;(w+="\n")):(_=[Zr(n),"#define
  SHADER_NAME "+n.shaderName,y,n.instancing?"#define
  USE_INSTANCING":"",n.instancingColor?"#define
  USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define
  VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+g,"#define MAX_BONES
  "+n.maxBones,n.useFog&amp;&amp;n.fog?"#define
  USE_FOG":"",n.useFog&amp;&amp;n.fogExp2?"#define
  FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define
  USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define
  USE_LIGHTMAP":"",n.aoMap?"#define
  USE_AOMAP":"",n.emissiveMap?"#define
  USE_EMISSIVEMAP":"",n.bumpMap?"#define
  USE_BUMPMAP":"",n.normalMap?"#define
  USE_NORMALMAP":"",n.normalMap&amp;&amp;n.objectSpaceNormalMap?"#define
  OBJECTSPACE_NORMALMAP":"",n.normalMap&amp;&amp;n.tangentSpaceNormalMap?"#define
  TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define
  USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define
  USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define
  USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&amp;&amp;n.supportsVertexTextures?"#define
  USE_DISPLACEMENTMAP":"",n.specularMap?"#define
  USE_SPECULARMAP":"",n.roughnessMap?"#define
  USE_ROUGHNESSMAP":"",n.metalnessMap?"#define
  USE_METALNESSMAP":"",n.alphaMap?"#define
  USE_ALPHAMAP":"",n.transmissionMap?"#define
  USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define
  USE_TANGENT":"",n.vertexColors?"#define
  USE_COLOR":"",n.vertexAlphas?"#define
  USE_COLOR_ALPHA":"",n.vertexUvs?"#define
  USE_UV":"",n.uvsVertexOnly?"#define
  UVS_VERTEX_ONLY":"",n.flatShading?"#define
  FLAT_SHADED":"",n.skinning?"#define
  USE_SKINNING":"",n.useVertexTexture?"#define
  BONE_TEXTURE":"",n.morphTargets?"#define
  USE_MORPHTARGETS":"",n.morphNormals&amp;&amp;!1===n.flatShading?"#define
  USE_MORPHNORMALS":"",n.doubleSided?"#define
  DOUBLE_SIDED":"",n.flipSided?"#define
  FLIP_SIDED":"",n.shadowMapEnabled?"#define
  USE_SHADOWMAP":"",n.shadowMapEnabled?"#define
  "+d:"",n.sizeAttenuation?"#define
  USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define
  USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&amp;&amp;n.rendererExtensionFragDepth?"#define
  USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4
  modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4
  viewMatrix;","uniform mat3 normalMatrix;","uniform vec3
  cameraPosition;","uniform bool isOrthographic;","#ifdef
  USE_INSTANCING","\tattribute mat4
  instanceMatrix;","#endif","#ifdef
  USE_INSTANCING_COLOR","\tattribute vec3
  instanceColor;","#endif","attribute vec3 position;","attribute
  vec3 normal;","attribute vec2 uv;","#ifdef
  USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined(
  USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined(
  USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef
  USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute
  vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute
  vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute
  vec3 morphNormal0;","\t\tattribute vec3
  morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute
  vec3 morphNormal3;","\t#else","\t\tattribute vec3
  morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute
  vec3 morphTarget6;","\t\tattribute vec3
  morphTarget7;","\t#endif","#endif","#ifdef
  USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4
  skinWeight;","#endif","\n"].filter(Or).join("\n"),w=[v,Zr(n),"#define
  SHADER_NAME "+n.shaderName,y,n.alphaTest?"#define ALPHATEST
  "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR
  "+g,n.useFog&amp;&amp;n.fog?"#define
  USE_FOG":"",n.useFog&amp;&amp;n.fogExp2?"#define
  FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define
  USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define
  "+p:"",n.envMap?"#define "+m:"",n.envMap?"#define
  "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define
  USE_AOMAP":"",n.emissiveMap?"#define
  USE_EMISSIVEMAP":"",n.bumpMap?"#define
  USE_BUMPMAP":"",n.normalMap?"#define
  USE_NORMALMAP":"",n.normalMap&amp;&amp;n.objectSpaceNormalMap?"#define
  OBJECTSPACE_NORMALMAP":"",n.normalMap&amp;&amp;n.tangentSpaceNormalMap?"#define
  TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define
  USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define
  USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define
  USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define
  USE_SPECULARMAP":"",n.roughnessMap?"#define
  USE_ROUGHNESSMAP":"",n.metalnessMap?"#define
  USE_METALNESSMAP":"",n.alphaMap?"#define
  USE_ALPHAMAP":"",n.sheen?"#define
  USE_SHEEN":"",n.transmissionMap?"#define
  USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define
  USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define
  USE_COLOR":"",n.vertexAlphas?"#define
  USE_COLOR_ALPHA":"",n.vertexUvs?"#define
  USE_UV":"",n.uvsVertexOnly?"#define
  UVS_VERTEX_ONLY":"",n.gradientMap?"#define
  USE_GRADIENTMAP":"",n.flatShading?"#define
  FLAT_SHADED":"",n.doubleSided?"#define
  DOUBLE_SIDED":"",n.flipSided?"#define
  FLIP_SIDED":"",n.shadowMapEnabled?"#define
  USE_SHADOWMAP":"",n.shadowMapEnabled?"#define
  "+d:"",n.premultipliedAlpha?"#define
  PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define
  PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define
  USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&amp;&amp;n.rendererExtensionFragDepth?"#define
  USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&amp;&amp;n.rendererExtensionShaderTextureLod?"#define
  TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3
  cameraPosition;","uniform bool
  isOrthographic;",0!==n.toneMapping?"#define
  TONE_MAPPING":"",0!==n.toneMapping?hi.tonemapping_pars_fragment:"",0!==n.toneMapping?Fr("toneMapping",n.toneMapping):"",n.dithering?"#define
  DITHERING":"",hi.encodings_pars_fragment,n.map?Br("mapTexelToLinear",n.mapEncoding):"",n.matcap?Br("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?Br("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?Br("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?Br("lightMapTexelToLinear",n.lightMapEncoding):"",zr("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define
  DEPTH_PACKING
  "+n.depthPacking:"","\n"].filter(Or).join("\n")),h=kr(h),h=Hr(h,n),h=Gr(h,n),u=kr(u),u=Hr(u,n),u=Gr(u,n),h=qr(h),u=qr(u),n.isWebGL2&amp;&amp;!0!==n.isRawShaderMaterial&amp;&amp;(b="#version
  300 es\n",_=["#define attribute in","#define varying
  out","#define texture2D texture"].join("\n")+"\n"+_,w=["#define
  varying in",n.glslVersion===it?"":"out highp vec4
  pc_fragColor;",n.glslVersion===it?"":"#define gl_FragColor
  pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define
  texture2D texture","#define textureCube texture","#define
  texture2DProj textureProj","#define texture2DLodEXT
  textureLod","#define texture2DProjLodEXT textureProjLod","#define
  textureCubeLodEXT textureLod","#define texture2DGradEXT
  textureGrad","#define texture2DProjGradEXT
  textureProjGrad","#define textureCubeGradEXT
  textureGrad"].join("\n")+"\n"+w);const
  M=b+w+u,S=Pr(a,35633,b+_+h),T=Pr(a,35632,M);if(a.attachShader(x,S),a.attachShader(x,T),void
  0!==n.index0AttributeName?a.bindAttribLocation(x,0,n.index0AttributeName):!0===n.morphTargets&amp;&amp;a.bindAttribLocation(x,0,"position"),a.linkProgram(x),t.debug.checkShaderErrors){const
  t=a.getProgramInfoLog(x).trim(),e=a.getShaderInfoLog(S).trim(),n=a.getShaderInfoLog(T).trim();let
  i=!0,r=!0;if(!1===a.getProgramParameter(x,35714)){i=!1;const
  e=Nr(a,S,"vertex"),n=Nr(a,T,"fragment");console.error("THREE.WebGLProgram:
  shader error:
  ",a.getError(),"35715",a.getProgramParameter(x,35715),"gl.getProgramInfoLog",t,e,n)}else""!==t?console.warn("THREE.WebGLProgram:
  gl.getProgramInfoLog()",t):""!==e&amp;&amp;""!==n||(r=!1);r&amp;&amp;(this.diagnostics={runnable:i,programLog:t,vertexShader:{log:e,prefix:_},fragmentShader:{log:n,prefix:w}})}let
  E,A;return
  a.deleteShader(S),a.deleteShader(T),this.getUniforms=function(){return
  void 0===E&amp;&amp;(E=new
  Cr(a,x)),E},this.getAttributes=function(){return void
  0===A&amp;&amp;(A=function(t,e){const
  n={},i=t.getProgramParameter(e,35721);for(let
  r=0;r0,maxBones:S,useVertexTexture:u,morphTargets:r.morphTargets,morphNormals:r.morphNormals,numDirLights:a.directional.length,numPointLights:a.point.length,numSpotLights:a.spot.length,numRectAreaLights:a.rectArea.length,numHemiLights:a.hemi.length,numDirLightShadows:a.directionalShadowMap.length,numPointLightShadows:a.pointShadowMap.length,numSpotLightShadows:a.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:r.dithering,shadowMapEnabled:t.shadowMap.enabled&amp;&amp;g.length&gt;0,shadowMapType:t.shadowMap.type,toneMapping:r.toneMapped?t.toneMapping:0,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:r.premultipliedAlpha,alphaTest:r.alphaTest,doubleSided:2===r.side,flipSided:1===r.side,depthPacking:void
  0!==r.depthPacking&amp;&amp;r.depthPacking,index0AttributeName:r.index0AttributeName,extensionDerivatives:r.extensions&amp;&amp;r.extensions.derivatives,extensionFragDepth:r.extensions&amp;&amp;r.extensions.fragDepth,extensionDrawBuffers:r.extensions&amp;&amp;r.extensions.drawBuffers,extensionShaderTextureLOD:r.extensions&amp;&amp;r.extensions.shaderTextureLOD,rendererExtensionFragDepth:o||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:o||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:o||n.has("EXT_shader_texture_lod"),customProgramCacheKey:r.customProgramCacheKey()}},getProgramCacheKey:function(e){const
  n=[];if(e.shaderID?n.push(e.shaderID):(n.push(e.fragmentShader),n.push(e.vertexShader)),void
  0!==e.defines)for(const t in
  e.defines)n.push(t),n.push(e.defines[t]);if(!1===e.isRawShaderMaterial){for(let
  t=0;t1&amp;&amp;i.sort(t||$r),r.length&gt;1&amp;&amp;r.sort(e||ts)}}}function
  ns(t){let e=new WeakMap;return{get:function(n,i){let
  r;return!1===e.has(n)?(r=new
  es(t),e.set(n,[r])):i&gt;=e.get(n).length?(r=new
  es(t),e.get(n).push(r)):r=e.get(n)[i],r},dispose:function(){e=new
  WeakMap}}}function is(){const t={};return{get:function(e){if(void
  0!==t[e.id])return t[e.id];let
  n;switch(e.type){case"DirectionalLight":n={direction:new
  Lt,color:new tn};break;case"SpotLight":n={position:new
  Lt,direction:new Lt,color:new
  tn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new
  Lt,color:new
  tn,distance:0,decay:0};break;case"HemisphereLight":n={direction:new
  Lt,skyColor:new tn,groundColor:new
  tn};break;case"RectAreaLight":n={color:new tn,position:new
  Lt,halfWidth:new Lt,halfHeight:new Lt}}return t[e.id]=n,n}}}let
  rs=0;function
  ss(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function
  as(t,e){const n=new is,i=function(){const
  t={};return{get:function(e){if(void 0!==t[e.id])return
  t[e.id];let
  n;switch(e.type){case"DirectionalLight":case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new
  vt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new
  vt,shadowCameraNear:1,shadowCameraFar:1e3}}return
  t[e.id]=n,n}}}(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let
  t=0;t&lt;9;t++)r.probe.push(new Lt);const s=new Lt,a=new se,o=new
  se;return{setup:function(s){let a=0,o=0,l=0;for(let
  t=0;t&lt;9;t++)r.probe[t].set(0,0,0);let
  c=0,h=0,u=0,d=0,p=0,m=0,f=0,g=0;s.sort(ss);for(let
  t=0,e=s.length;t&lt;9;t++)r.probe[t].addScaledVector(e.sh.coefficients[t],y);else
  if(e.isDirectionalLight){const
  t=n.get(e);if(t.color.copy(e.color).multiplyScalar(e.intensity),e.castShadow){const
  t=e.shadow,n=i.get(e);n.shadowBias=t.bias,n.shadowNormalBias=t.normalBias,n.shadowRadius=t.radius,n.shadowMapSize=t.mapSize,r.directionalShadow[c]=n,r.directionalShadowMap[c]=_,r.directionalShadowMatrix[c]=e.shadow.matrix,m++}r.directional[c]=t,c++}else
  if(e.isSpotLight){const
  t=n.get(e);if(t.position.setFromMatrixPosition(e.matrixWorld),t.color.copy(v).multiplyScalar(y),t.distance=x,t.coneCos=Math.cos(e.angle),t.penumbraCos=Math.cos(e.angle*(1-e.penumbra)),t.decay=e.decay,e.castShadow){const
  t=e.shadow,n=i.get(e);n.shadowBias=t.bias,n.shadowNormalBias=t.normalBias,n.shadowRadius=t.radius,n.shadowMapSize=t.mapSize,r.spotShadow[u]=n,r.spotShadowMap[u]=_,r.spotShadowMatrix[u]=e.shadow.matrix,g++}r.spot[u]=t,u++}else
  if(e.isRectAreaLight){const
  t=n.get(e);t.color.copy(v).multiplyScalar(y),t.halfWidth.set(.5*e.width,0,0),t.halfHeight.set(0,.5*e.height,0),r.rectArea[d]=t,d++}else
  if(e.isPointLight){const
  t=n.get(e);if(t.color.copy(e.color).multiplyScalar(e.intensity),t.distance=e.distance,t.decay=e.decay,e.castShadow){const
  t=e.shadow,n=i.get(e);n.shadowBias=t.bias,n.shadowNormalBias=t.normalBias,n.shadowRadius=t.radius,n.shadowMapSize=t.mapSize,n.shadowCameraNear=t.camera.near,n.shadowCameraFar=t.camera.far,r.pointShadow[h]=n,r.pointShadowMap[h]=_,r.pointShadowMatrix[h]=e.shadow.matrix,f++}r.point[h]=t,h++}else
  if(e.isHemisphereLight){const
  t=n.get(e);t.skyColor.copy(e.color).multiplyScalar(y),t.groundColor.copy(e.groundColor).multiplyScalar(y),r.hemi[p]=t,p++}}d&gt;0&amp;&amp;(e.isWebGL2||!0===t.has("OES_texture_float_linear")?(r.rectAreaLTC1=ui.LTC_FLOAT_1,r.rectAreaLTC2=ui.LTC_FLOAT_2):!0===t.has("OES_texture_half_float_linear")?(r.rectAreaLTC1=ui.LTC_HALF_1,r.rectAreaLTC2=ui.LTC_HALF_2):console.error("THREE.WebGLRenderer:
  Unable to use RectAreaLight. Missing WebGL
  extensions.")),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=l;const
  v=r.hash;v.directionalLength===c&amp;&amp;v.pointLength===h&amp;&amp;v.spotLength===u&amp;&amp;v.rectAreaLength===d&amp;&amp;v.hemiLength===p&amp;&amp;v.numDirectionalShadows===m&amp;&amp;v.numPointShadows===f&amp;&amp;v.numSpotShadows===g||(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=h,r.hemi.length=p,r.directionalShadow.length=m,r.directionalShadowMap.length=m,r.pointShadow.length=f,r.pointShadowMap.length=f,r.spotShadow.length=g,r.spotShadowMap.length=g,r.directionalShadowMatrix.length=m,r.pointShadowMatrix.length=f,r.spotShadowMatrix.length=g,v.directionalLength=c,v.pointLength=h,v.spotLength=u,v.rectAreaLength=d,v.hemiLength=p,v.numDirectionalShadows=m,v.numPointShadows=f,v.numSpotShadows=g,r.version=rs++)},setupView:function(t,e){let
  n=0,i=0,l=0,c=0,h=0;const u=e.matrixWorldInverse;for(let
  e=0,d=t.length;e=n.get(i).length?(s=new
  os(t,e),n.get(i).push(s)):s=n.get(i)[r],s},dispose:function(){n=new
  WeakMap}}}class cs extends
  Xe{constructor(t){super(),this.type="MeshDepthMaterial",this.depthPacking=3200,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}copy(t){return
  super.copy(t),this.depthPacking=t.depthPacking,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}cs.prototype.isMeshDepthMaterial=!0;class
  hs extends
  Xe{constructor(t){super(),this.type="MeshDistanceMaterial",this.referencePosition=new
  Lt,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}copy(t){return
  super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}hs.prototype.isMeshDistanceMaterial=!0;function
  us(t,e,n){let i=new ai;const r=new vt,s=new vt,a=new
  St,o=[],l=[],c={},h=n.maxTextureSize,u={0:1,1:0,2:2},d=new
  Jn({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new
  vt},radius:{value:4}},vertexShader:"void main() {\n\tgl_Position
  = vec4( position, 1.0 );\n}",fragmentShader:"uniform sampler2D
  shadow_pass;\nuniform vec2 resolution;\nuniform float
  radius;\n#include \nvoid main() {\n\tfloat mean = 0.0;\n\tfloat
  squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth(
  texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution )
  );\n\tfor ( float i = -1.0; i &lt; 1.0 ; i += SAMPLE_RATE)
  {\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution =
  unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy +
  vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean +=
  distribution.x;\n\t\t\tsquared_mean += distribution.y *
  distribution.y + distribution.x *
  distribution.x;\n\t\t#else\n\t\t\tfloat depth =
  unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy +
  vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean +=
  depth;\n\t\t\tsquared_mean += depth *
  depth;\n\t\t#endif\n\t}\n\tmean = mean *
  HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean *
  HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean *
  mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev )
  );\n}"}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const f=new
  En;f.setAttribute("position",new sn(new
  Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new
  Wn(f,d),y=this;function x(n,i){const
  r=e.update(v);d.uniforms.shadow_pass.value=n.map.texture,d.uniforms.resolution.value=n.mapSize,d.uniforms.radius.value=n.radius,t.setRenderTarget(n.mapPass),t.clear(),t.renderBufferDirect(i,null,r,d,v,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,t.setRenderTarget(n.map),t.clear(),t.renderBufferDirect(i,null,r,m,v,null)}function
  _(t,e,n){const i=t&lt;&lt;0|e&lt;&lt;1|n&lt;&lt;2;let
  r=o[i];return void 0===r&amp;&amp;(r=new
  cs({depthPacking:3201,morphTargets:t,skinning:e}),o[i]=r),r}function
  w(t,e,n){const i=t&lt;&lt;0|e&lt;&lt;1|n&lt;&lt;2;let
  r=l[i];return void 0===r&amp;&amp;(r=new
  hs({morphTargets:t,skinning:e}),l[i]=r),r}function
  b(e,n,i,r,s,a,o){let
  l=null,h=_,d=e.customDepthMaterial;if(!0===r.isPointLight&amp;&amp;(h=w,d=e.customDistanceMaterial),void
  0===d){let
  t=!1;!0===i.morphTargets&amp;&amp;(t=n.morphAttributes&amp;&amp;n.morphAttributes.position&amp;&amp;n.morphAttributes.position.length&gt;0);let
  r=!1;!0===e.isSkinnedMesh&amp;&amp;(!0===i.skinning?r=!0:console.warn("THREE.WebGLShadowMap:
  THREE.SkinnedMesh with material.skinning set to
  false:",e));l=h(t,r,!0===e.isInstancedMesh)}else
  l=d;if(t.localClippingEnabled&amp;&amp;!0===i.clipShadows&amp;&amp;0!==i.clippingPlanes.length){const
  t=l.uuid,e=i.uuid;let n=c[t];void
  0===n&amp;&amp;(n={},c[t]=n);let r=n[e];void
  0===r&amp;&amp;(r=l.clone(),n[e]=r),l=r}return
  l.visible=i.visible,l.wireframe=i.wireframe,l.side=3===o?null!==i.shadowSide?i.shadowSide:i.side:null!==i.shadowSide?i.shadowSide:u[i.side],l.clipShadows=i.clipShadows,l.clippingPlanes=i.clippingPlanes,l.clipIntersection=i.clipIntersection,l.wireframeLinewidth=i.wireframeLinewidth,l.linewidth=i.linewidth,!0===r.isPointLight&amp;&amp;!0===l.isMeshDistanceMaterial&amp;&amp;(l.referencePosition.setFromMatrixPosition(r.matrixWorld),l.nearDistance=s,l.farDistance=a),l}function
  M(n,r,s,a,o){if(!1===n.visible)return;if(n.layers.test(r.layers)&amp;&amp;(n.isMesh||n.isLine||n.isPoints)&amp;&amp;(n.castShadow||n.receiveShadow&amp;&amp;3===o)&amp;&amp;(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse,n.matrixWorld);const
  i=e.update(n),r=n.material;if(Array.isArray(r)){const
  e=i.groups;for(let
  l=0,c=e.length;lh||r.y&gt;h)&amp;&amp;(r.x&gt;h&amp;&amp;(s.x=Math.floor(h/m.x),r.x=s.x*m.x,u.mapSize.x=s.x),r.y&gt;h&amp;&amp;(s.y=Math.floor(h/m.y),r.y=s.y*m.y,u.mapSize.y=s.y)),null===u.map&amp;&amp;!u.isPointLightShadow&amp;&amp;3===this.type){const
  t={minFilter:g,magFilter:g,format:E};u.map=new
  Tt(r.x,r.y,t),u.map.texture.name=c.name+".shadowMap",u.mapPass=new
  Tt(r.x,r.y,t),u.camera.updateProjectionMatrix()}if(null===u.map){const
  t={minFilter:p,magFilter:p,format:E};u.map=new
  Tt(r.x,r.y,t),u.map.texture.name=c.name+".shadowMap",u.camera.updateProjectionMatrix()}t.setRenderTarget(u.map),t.clear();const
  f=u.getViewportCount();for(let t=0;t=1):-1!==R.indexOf("OpenGL
  ES")&amp;&amp;(L=parseFloat(/^OpenGL ES
  (\d)/.exec(R)[1]),A=L&gt;=2);let C=null,P={};const D=new
  St(0,0,t.canvas.width,t.canvas.height),I=new
  St(0,0,t.canvas.width,t.canvas.height);function N(e,n,i){const
  r=new
  Uint8Array(4),s=t.createTexture();t.bindTexture(e,s),t.texParameteri(e,10241,9728),t.texParameteri(e,10240,9728);for(let
  e=0;ei||t.height&gt;i)&amp;&amp;(r=i/Math.max(t.width,t.height)),r&lt;1||!0===e){if("undefined"!=typeof
  HTMLImageElement&amp;&amp;t instanceof
  HTMLImageElement||"undefined"!=typeof
  HTMLCanvasElement&amp;&amp;t instanceof
  HTMLCanvasElement||"undefined"!=typeof ImageBitmap&amp;&amp;t
  instanceof ImageBitmap){const
  i=e?ft:Math.floor,s=i(r*t.width),a=i(r*t.height);void
  0===P&amp;&amp;(P=I(s,a));const
  o=n?I(s,a):P;o.width=s,o.height=a;return
  o.getContext("2d").drawImage(t,0,0,s,a),console.warn("THREE.WebGLRenderer:
  Texture has been resized from ("+t.width+"x"+t.height+") to
  ("+s+"x"+a+")."),o}return"data"in
  t&amp;&amp;console.warn("THREE.WebGLRenderer: Image in
  DataTexture is too big ("+t.width+"x"+t.height+")."),t}return
  t}function B(t){return pt(t.width)&amp;&amp;pt(t.height)}function
  z(t,e){return
  t.generateMipmaps&amp;&amp;e&amp;&amp;t.minFilter!==p&amp;&amp;t.minFilter!==g}function
  F(e,n,r,s){t.generateMipmap(e);i.get(n).__maxMipLevel=Math.log2(Math.max(r,s))}function
  O(n,i,r){if(!1===o)return i;if(null!==n){if(void 0!==t[n])return
  t[n];console.warn("THREE.WebGLRenderer: Attempt to use
  non-existing WebGL internal format '"+n+"'")}let s=i;return
  6403===i&amp;&amp;(5126===r&amp;&amp;(s=33326),5131===r&amp;&amp;(s=33325),5121===r&amp;&amp;(s=33321)),6407===i&amp;&amp;(5126===r&amp;&amp;(s=34837),5131===r&amp;&amp;(s=34843),5121===r&amp;&amp;(s=32849)),6408===i&amp;&amp;(5126===r&amp;&amp;(s=34836),5131===r&amp;&amp;(s=34842),5121===r&amp;&amp;(s=32856)),33325!==s&amp;&amp;33326!==s&amp;&amp;34842!==s&amp;&amp;34836!==s||e.get("EXT_color_buffer_float"),s}function
  H(t){return t===p||t===m||t===f?9728:9729}function G(e){const
  n=e.target;n.removeEventListener("dispose",G),function(e){const
  n=i.get(e);if(void
  0===n.__webglInit)return;t.deleteTexture(n.__webglTexture),i.remove(e)}(n),n.isVideoTexture&amp;&amp;C.delete(n),a.memory.textures--}function
  U(e){const
  n=e.target;n.removeEventListener("dispose",U),function(e){const
  n=e.texture,r=i.get(e),s=i.get(n);if(!e)return;void
  0!==s.__webglTexture&amp;&amp;t.deleteTexture(s.__webglTexture);e.depthTexture&amp;&amp;e.depthTexture.dispose();if(e.isWebGLCubeRenderTarget)for(let
  e=0;e&lt;6;e++)t.deleteFramebuffer(r.__webglFramebuffer[e]),r.__webglDepthbuffer&amp;&amp;t.deleteRenderbuffer(r.__webglDepthbuffer[e]);else
  t.deleteFramebuffer(r.__webglFramebuffer),r.__webglDepthbuffer&amp;&amp;t.deleteRenderbuffer(r.__webglDepthbuffer),r.__webglMultisampledFramebuffer&amp;&amp;t.deleteFramebuffer(r.__webglMultisampledFramebuffer),r.__webglColorRenderbuffer&amp;&amp;t.deleteRenderbuffer(r.__webglColorRenderbuffer),r.__webglDepthRenderbuffer&amp;&amp;t.deleteRenderbuffer(r.__webglDepthRenderbuffer);i.remove(n),i.remove(e)}(n),a.memory.textures--}let
  k=0;function V(t,e){const
  r=i.get(t);if(t.isVideoTexture&amp;&amp;function(t){const
  e=a.render.frame;C.get(t)!==e&amp;&amp;(C.set(t,e),t.update())}(t),t.version&gt;0&amp;&amp;r.__version!==t.version){const
  n=t.image;if(void 0===n)console.warn("THREE.WebGLRenderer:
  Texture marked for update but image is
  undefined");else{if(!1!==n.complete)return void
  Z(r,t,e);console.warn("THREE.WebGLRenderer: Texture marked for
  update but image is
  incomplete")}}n.activeTexture(33984+e),n.bindTexture(3553,r.__webglTexture)}function
  W(e,r){const
  a=i.get(e);e.version&gt;0&amp;&amp;a.__version!==e.version?function(e,i,r){if(6!==i.image.length)return;Y(e,i),n.activeTexture(33984+r),n.bindTexture(34067,e.__webglTexture),t.pixelStorei(37440,i.flipY),t.pixelStorei(37441,i.premultiplyAlpha),t.pixelStorei(3317,i.unpackAlignment),t.pixelStorei(37443,0);const
  a=i&amp;&amp;(i.isCompressedTexture||i.image[0].isCompressedTexture),l=i.image[0]&amp;&amp;i.image[0].isDataTexture,h=[];for(let
  t=0;t&lt;6;t++)h[t]=a||l?l?i.image[t].image:i.image[t]:N(i.image[t],!1,!0,c);const
  u=h[0],d=B(u)||o,p=s.convert(i.format),m=s.convert(i.type),f=O(i.internalFormat,p,m);let
  g;if(X(34067,i,d),a){for(let
  t=0;t&lt;6;t++){g=h[t].mipmaps;for(let
  e=0;e&lt;6;t++)if(l){n.texImage2D(34069+t,0,f,h[t].width,h[t].height,0,p,m,h[t].data);for(let
  e=0;e1||i.get(s).__currentAnisotropy)&amp;&amp;(t.texParameterf(n,a.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(s.anisotropy,r.getMaxAnisotropy())),i.get(s).__currentAnisotropy=s.anisotropy)}}function
  Y(e,n){void
  0===e.__webglInit&amp;&amp;(e.__webglInit=!0,n.addEventListener("dispose",G),e.__webglTexture=t.createTexture(),a.memory.textures++)}function
  Z(e,i,r){let
  a=3553;i.isDataTexture2DArray&amp;&amp;(a=35866),i.isDataTexture3D&amp;&amp;(a=32879),Y(e,i),n.activeTexture(33984+r),n.bindTexture(a,e.__webglTexture),t.pixelStorei(37440,i.flipY),t.pixelStorei(37441,i.premultiplyAlpha),t.pixelStorei(3317,i.unpackAlignment),t.pixelStorei(37443,0);const
  l=function(t){return!o&amp;&amp;(t.wrapS!==u||t.wrapT!==u||t.minFilter!==p&amp;&amp;t.minFilter!==g)}(i)&amp;&amp;!1===B(i.image),c=N(i.image,l,!1,x),h=B(c)||o,d=s.convert(i.format);let
  m,f=s.convert(i.type),v=O(i.internalFormat,d,f);X(a,i,h);const
  y=i.mipmaps;if(i.isDepthTexture)v=6402,o?v=i.type===b?36012:i.type===w?33190:i.type===S?35056:33189:i.type===b&amp;&amp;console.error("WebGLRenderer:
  Floating point depth texture requires
  WebGL2."),i.format===A&amp;&amp;6402===v&amp;&amp;i.type!==_&amp;&amp;i.type!==w&amp;&amp;(console.warn("THREE.WebGLRenderer:
  Use UnsignedShortType or UnsignedIntType for DepthFormat
  DepthTexture."),i.type=_,f=s.convert(i.type)),i.format===L&amp;&amp;6402===v&amp;&amp;(v=34041,i.type!==S&amp;&amp;(console.warn("THREE.WebGLRenderer:
  Use UnsignedInt248Type for DepthStencilFormat
  DepthTexture."),i.type=S,f=s.convert(i.type))),n.texImage2D(3553,0,v,c.width,c.height,0,d,f,null);else
  if(i.isDataTexture)if(y.length&gt;0&amp;&amp;h){for(let
  t=0,e=y.length;t0&amp;&amp;h){for(let
  t=0,e=y.length;t&lt;6;i++)n.bindFramebuffer(36160,r.__webglFramebuffer[i]),r.__webglDepthbuffer[i]=t.createRenderbuffer(),Q(r.__webglDepthbuffer[i],e,!1)}else
  n.bindFramebuffer(36160,r.__webglFramebuffer),r.__webglDepthbuffer=t.createRenderbuffer(),Q(r.__webglDepthbuffer,e,!1);n.bindFramebuffer(36160,null)}function
  $(t){return
  o&amp;&amp;t.isWebGLMultisampleRenderTarget?Math.min(R,t.samples):0}let
  tt=!1,et=!1;this.allocateTextureUnit=function(){const t=k;return
  t&gt;=l&amp;&amp;console.warn("THREE.WebGLTextures: Trying to use
  "+t+" texture units while this GPU supports only
  "+l),k+=1,t},this.resetTextureUnits=function(){k=0},this.setTexture2D=V,this.setTexture2DArray=function(t,e){const
  r=i.get(t);t.version&gt;0&amp;&amp;r.__version!==t.version?Z(r,t,e):(n.activeTexture(33984+e),n.bindTexture(35866,r.__webglTexture))},this.setTexture3D=function(t,e){const
  r=i.get(t);t.version&gt;0&amp;&amp;r.__version!==t.version?Z(r,t,e):(n.activeTexture(33984+e),n.bindTexture(32879,r.__webglTexture))},this.setTextureCube=W,this.setupRenderTarget=function(e){const
  r=e.texture,l=i.get(e),c=i.get(r);e.addEventListener("dispose",U),c.__webglTexture=t.createTexture(),c.__version=r.version,a.memory.textures++;const
  h=!0===e.isWebGLCubeRenderTarget,u=!0===e.isWebGLMultisampleRenderTarget,d=r.isDataTexture3D||r.isDataTexture2DArray,p=B(e)||o;if(!o||r.format!==T||r.type!==b&amp;&amp;r.type!==M||(r.format=E,console.warn("THREE.WebGLRenderer:
  Rendering to textures with RGB format is not supported. Using
  RGBA format instead.")),h){l.__webglFramebuffer=[];for(let
  e=0;e&lt;6;e++)l.__webglFramebuffer[e]=t.createFramebuffer()}else
  if(l.__webglFramebuffer=t.createFramebuffer(),u)if(o){l.__webglMultisampledFramebuffer=t.createFramebuffer(),l.__webglColorRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(36161,l.__webglColorRenderbuffer);const
  i=s.convert(r.format),a=s.convert(r.type),o=O(r.internalFormat,i,a),c=$(e);t.renderbufferStorageMultisample(36161,c,o,e.width,e.height),n.bindFramebuffer(36160,l.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064,36161,l.__webglColorRenderbuffer),t.bindRenderbuffer(36161,null),e.depthBuffer&amp;&amp;(l.__webglDepthRenderbuffer=t.createRenderbuffer(),Q(l.__webglDepthRenderbuffer,e,!0)),n.bindFramebuffer(36160,null)}else
  console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget
  can only be used with
  WebGL2.");if(h){n.bindTexture(34067,c.__webglTexture),X(34067,r,p);for(let
  t=0;t&lt;6;t++)J(l.__webglFramebuffer[t],e,36064,34069+t);z(r,p)&amp;&amp;F(34067,r,e.width,e.height),n.bindTexture(34067,null)}else{let
  t=3553;if(d)if(o){t=r.isDataTexture3D?32879:35866}else
  console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray
  only supported with
  WebGL2.");n.bindTexture(t,c.__webglTexture),X(t,r,p),J(l.__webglFramebuffer,e,36064,t),z(r,p)&amp;&amp;F(3553,r,e.width,e.height),n.bindTexture(3553,null)}e.depthBuffer&amp;&amp;K(e)},this.updateRenderTargetMipmap=function(t){const
  e=t.texture;if(z(e,B(t)||o)){const
  r=t.isWebGLCubeRenderTarget?34067:3553,s=i.get(e).__webglTexture;n.bindTexture(r,s),F(r,e,t.width,t.height),n.bindTexture(r,null)}},this.updateMultisampleRenderTarget=function(e){if(e.isWebGLMultisampleRenderTarget)if(o){const
  r=e.width,s=e.height;let
  a=16384;e.depthBuffer&amp;&amp;(a|=256),e.stencilBuffer&amp;&amp;(a|=1024);const
  o=i.get(e);n.bindFramebuffer(36008,o.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,o.__webglFramebuffer),t.blitFramebuffer(0,0,r,s,0,0,r,s,a,9728),n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,o.__webglMultisampledFramebuffer)}else
  console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget
  can only be used with
  WebGL2.")},this.safeSetTexture2D=function(t,e){t&amp;&amp;t.isWebGLRenderTarget&amp;&amp;(!1===tt&amp;&amp;(console.warn("THREE.WebGLTextures.safeSetTexture2D:
  don't use render targets as textures. Use their .texture property
  instead."),tt=!0),t=t.texture),V(t,e)},this.safeSetTextureCube=function(t,e){t&amp;&amp;t.isWebGLCubeRenderTarget&amp;&amp;(!1===et&amp;&amp;(console.warn("THREE.WebGLTextures.safeSetTextureCube:
  don't use cube render targets as textures. Use their .texture
  property instead."),et=!0),t=t.texture),W(t,e)}}function
  ms(t,e,n){const i=n.isWebGL2;return{convert:function(t){let
  n;if(t===x)return 5121;if(1017===t)return
  32819;if(1018===t)return 32820;if(1019===t)return
  33635;if(1010===t)return 5120;if(1011===t)return
  5122;if(t===_)return 5123;if(1013===t)return 5124;if(t===w)return
  5125;if(t===b)return 5126;if(t===M)return
  i?5131:(n=e.get("OES_texture_half_float"),null!==n?n.HALF_FLOAT_OES:null);if(1021===t)return
  6406;if(t===T)return 6407;if(t===E)return 6408;if(1024===t)return
  6409;if(1025===t)return 6410;if(t===A)return 6402;if(t===L)return
  34041;if(1028===t)return 6403;if(1029===t)return
  36244;if(1030===t)return 33319;if(1031===t)return
  33320;if(1032===t)return 36248;if(1033===t)return
  36249;if(t===R||t===C||t===P||t===D){if(n=e.get("WEBGL_compressed_texture_s3tc"),null===n)return
  null;if(t===R)return
  n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===C)return
  n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===P)return
  n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===D)return
  n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===I||t===N||t===B||t===z){if(n=e.get("WEBGL_compressed_texture_pvrtc"),null===n)return
  null;if(t===I)return
  n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===N)return
  n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===B)return
  n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===z)return
  n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(36196===t)return
  n=e.get("WEBGL_compressed_texture_etc1"),null!==n?n.COMPRESSED_RGB_ETC1_WEBGL:null;if((t===F||t===O)&amp;&amp;(n=e.get("WEBGL_compressed_texture_etc"),null!==n)){if(t===F)return
  n.COMPRESSED_RGB8_ETC2;if(t===O)return
  n.COMPRESSED_RGBA8_ETC2_EAC}return
  37808===t||37809===t||37810===t||37811===t||37812===t||37813===t||37814===t||37815===t||37816===t||37817===t||37818===t||37819===t||37820===t||37821===t||37840===t||37841===t||37842===t||37843===t||37844===t||37845===t||37846===t||37847===t||37848===t||37849===t||37850===t||37851===t||37852===t||37853===t?(n=e.get("WEBGL_compressed_texture_astc"),null!==n?t:null):36492===t?(n=e.get("EXT_texture_compression_bptc"),null!==n?t:null):t===S?i?34042:(n=e.get("WEBGL_depth_texture"),null!==n?n.UNSIGNED_INT_24_8_WEBGL:null):void
  0}}}class fs extends
  Kn{constructor(t=[]){super(),this.cameras=t}}fs.prototype.isArrayCamera=!0;class
  gs extends
  Ce{constructor(){super(),this.type="Group"}}gs.prototype.isGroup=!0;const
  vs={type:"move"};class
  ys{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return
  null===this._hand&amp;&amp;(this._hand=new
  gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return
  null===this._targetRay&amp;&amp;(this._targetRay=new
  gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new
  Lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new
  Lt),this._targetRay}getGripSpace(){return
  null===this._grip&amp;&amp;(this._grip=new
  gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new
  Lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new
  Lt),this._grip}dispatchEvent(t){return
  null!==this._targetRay&amp;&amp;this._targetRay.dispatchEvent(t),null!==this._grip&amp;&amp;this._grip.dispatchEvent(t),null!==this._hand&amp;&amp;this._hand.dispatchEvent(t),this}disconnect(t){return
  this.dispatchEvent({type:"disconnected",data:t}),null!==this._targetRay&amp;&amp;(this._targetRay.visible=!1),null!==this._grip&amp;&amp;(this._grip.visible=!1),null!==this._hand&amp;&amp;(this._hand.visible=!1),this}update(t,e,n){let
  i=null,r=null,s=null;const
  a=this._targetRay,o=this._grip,l=this._hand;if(t&amp;&amp;"visible-blurred"!==e.session.visibilityState)if(null!==a&amp;&amp;(i=e.getPose(t.targetRaySpace,n),null!==i&amp;&amp;(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vs))),l&amp;&amp;t.hand){s=!0;for(const
  i of t.hand.values()){const t=e.getJointPose(i,n);if(void
  0===l.joints[i.jointName]){const t=new
  gs;t.matrixAutoUpdate=!1,t.visible=!1,l.joints[i.jointName]=t,l.add(t)}const
  r=l.joints[i.jointName];null!==t&amp;&amp;(r.matrix.fromArray(t.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.jointRadius=t.radius),r.visible=null!==t}const
  i=l.joints["index-finger-tip"],r=l.joints["thumb-tip"],a=i.position.distanceTo(r.position),o=.02,c=.005;l.inputState.pinching&amp;&amp;a&gt;o+c?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&amp;&amp;a&lt;=o-c&amp;&amp;(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else
  null!==o&amp;&amp;t.gripSpace&amp;&amp;(r=e.getPose(t.gripSpace,n),null!==r&amp;&amp;(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));return
  null!==a&amp;&amp;(a.visible=null!==i),null!==o&amp;&amp;(o.visible=null!==r),null!==l&amp;&amp;(l.visible=null!==s),this}}class
  xs extends rt{constructor(t,e){super();const n=this,i=t.state;let
  r=null,s=1,a=null,o="local-floor",l=null;const c=[],h=new
  Map,u=new Kn;u.layers.enable(1),u.viewport=new St;const d=new
  Kn;d.layers.enable(2),d.viewport=new St;const p=[u,d],m=new
  fs;m.layers.enable(1),m.layers.enable(2);let
  f=null,g=null;function v(t){const
  e=h.get(t.inputSource);e&amp;&amp;e.dispatchEvent({type:t.type,data:t.inputSource})}function
  y(){h.forEach((function(t,e){t.disconnect(e)})),h.clear(),f=null,g=null,i.bindXRFramebuffer(null),t.setRenderTarget(t.getRenderTarget()),S.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function
  x(t){const e=r.inputSources;for(let
  t=0;t&lt;0,o=It(t,e,i,r);q.setMaterial(i,a);let l=n.index;const
  c=n.attributes.position;if(null===l){if(void
  0===c||0===c.count)return}else if(0===l.count)return;let
  h,u=1;!0===i.wireframe&amp;&amp;(l=$.getWireframeAttribute(n),u=2),(i.morphTargets||i.morphNormals)&amp;&amp;lt.update(r,n,i,o),dt.setup(r,i,o,n,l);let
  d=ct;null!==l&amp;&amp;(h=K.get(l),d=ht,d.setIndex(h));const
  p=null!==l?l.count:c.count,m=n.drawRange.start*u,f=n.drawRange.count*u,g=null!==s?s.start*u:0,v=null!==s?s.count*u:1/0,y=Math.max(m,g),x=Math.min(p,m+f,g+v)-1,_=Math.max(0,x-y+1);if(0!==_){if(r.isMesh)!0===i.wireframe?(q.setLineWidth(i.wireframeLinewidth*V()),d.setMode(1)):d.setMode(4);else
  if(r.isLine){let t=i.linewidth;void
  0===t&amp;&amp;(t=1),q.setLineWidth(t*V()),r.isLineSegments?d.setMode(1):r.isLineLoop?d.setMode(2):d.setMode(3)}else
  r.isPoints?d.setMode(0):r.isSprite&amp;&amp;d.setMode(4);if(r.isInstancedMesh)d.renderInstances(y,_,r.count);else
  if(n.isInstancedBufferGeometry){const
  t=Math.min(n.instanceCount,n._maxInstanceCount);d.renderInstances(y,_,t)}else
  d.render(y,_)}},this.compile=function(t,e){d=rt.get(t),d.init(),t.traverseVisible((function(t){t.isLight&amp;&amp;t.layers.test(e.layers)&amp;&amp;(d.pushLight(t),t.castShadow&amp;&amp;d.pushShadow(t))})),d.setupLights(),t.traverse((function(e){const
  n=e.material;if(n)if(Array.isArray(n))for(let i=0;i</i></a><a a=
  "i[s],o=r[a.materialIndex];o&amp;&amp;o.visible&amp;&amp;u.push(t,e,o,n,U.z,a)}}else"
  r="t.children;for(let" t="0,s=r.length;t"><s i=
  "!0===e.isScene?e.overrideMaterial:null;for(let" r=
  "0,s=t.length;r"><s s=
  "t[r],a=s.object,o=s.geometry,l=null===i?s.material:i,c=s.group;if(n.isArrayCamera){const"
  t="n.cameras;for(let" n="0,i=t.length;n"><i c=
  "i.programs;i.environment=t.isMeshStandardMaterial?e.environment:null,i.fog=e.fog,i.envMap=Q.get(t.envMap||i.environment),void"
  h="c.get(l);if(void" o.uniforms=
  "et.getUniforms(t),t.onBuild(o,f),t.onBeforeCompile(o,f),h=et.acquireProgram(o,l),c.set(l,h),i.uniforms=o.uniforms;const"
  i.currentprogram="h,i.uniformsList=m,h}function" u=
  "!1;n.version===c.__version?c.needsLights&amp;&amp;c.lightsStateVersion!==h.state.version||c.outputEncoding!==a||i.isInstancedMesh&amp;&amp;!1===c.instancing?u=!0:i.isInstancedMesh||!0!==c.instancing?c.envMap!==o||n.fog&amp;&amp;c.fog!==r?u=!0:void"
  p="c.currentProgram;!0===u&amp;&amp;(p=Pt(n,e,i));let" m=
  "!1,g=!1,v=!1;const" y=
  "p.getUniforms(),x=c.uniforms;if(q.useProgram(p.program)&amp;&amp;(m=!0,g=!0,v=!0),n.id!==w&amp;&amp;(w=n.id,g=!0),m||S!==t){if(y.setValue(pt,&quot;projectionMatrix&quot;,t.projectionMatrix),j.logarithmicDepthBuffer&amp;&amp;y.setValue(pt,&quot;logDepthBufFC&quot;,2/(Math.log(t.far+1)/Math.LN2)),S!==t&amp;&amp;(S=t,g=!0,v=!0),n.isShaderMaterial||n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshStandardMaterial||n.envMap){const"
  t="i.skeleton;if(t){const" e=
  "t.bones;if(j.floatVertexTextures){if(null===t.boneTexture){let"
  n="Math.sqrt(4*e.length);n=mt(n),n=Math.max(n,4);const" i="new"
  rendertarget="" the="" forceclear="" argument="" has="" been=""
  removed.="" use="" void="" camera="" is="" not="" an="" instance=
  "" of="" r=
  "d.state.shadowsArray;at.render(r,t,e),d.setupLights(),d.setupLightsView(e),!0===O&amp;&amp;st.endShadows(),!0===this.info.autoReset&amp;&amp;this.info.reset(),void"
  s=
  "u.opaque,a=u.transparent;s.length">0&amp;&amp;Rt(s,t,e),a.length&gt;0&amp;&amp;Rt(a,t,e),null!==_&amp;&amp;(J.updateRenderTargetMipmap(_),J.updateMultisampleRenderTarget(_)),!0===t.isScene&amp;&amp;t.onAfterRender(f,t,e),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1),dt.resetDefaultState(),w=-1,S=null,m.pop(),d=m.length&gt;0?m[m.length-1]:null,p.pop(),u=p.length&gt;0?p[p.length-1]:null},this.getActiveCubeFace=function(){return
  v},this.getActiveMipmapLevel=function(){return
  y},this.getRenderTarget=function(){return
  _},this.setRenderTarget=function(t,e=0,n=0){_=t,v=e,y=n,t&amp;&amp;void
  0===Z.get(t).__webglFramebuffer&amp;&amp;J.setupRenderTarget(t);let
  i=null,r=!1,s=!1;if(t){const
  n=t.texture;(n.isDataTexture3D||n.isDataTexture2DArray)&amp;&amp;(s=!0);const
  a=Z.get(t).__webglFramebuffer;t.isWebGLCubeRenderTarget?(i=a[e],r=!0):i=t.isWebGLMultisampleRenderTarget?Z.get(t).__webglMultisampledFramebuffer:a,T.copy(t.viewport),A.copy(t.scissor),L=t.scissorTest}else
  T.copy(N).multiplyScalar(P).floor(),A.copy(B).multiplyScalar(P).floor(),L=z;if(q.bindFramebuffer(36160,i),q.viewport(T),q.scissor(A),q.setScissorTest(L),r){const
  i=Z.get(t.texture);pt.framebufferTexture2D(36160,36064,34069+e,i.__webglTexture,n)}else
  if(s){const
  i=Z.get(t.texture),r=e||0;pt.framebufferTextureLayer(36160,36064,i.__webglTexture,n||0,r)}},this.readRenderTargetPixels=function(t,e,n,i,r,s,a){if(!t||!t.isWebGLRenderTarget)return
  void console.error("THREE.WebGLRenderer.readRenderTargetPixels:
  renderTarget is not THREE.WebGLRenderTarget.");let
  o=Z.get(t).__webglFramebuffer;if(t.isWebGLCubeRenderTarget&amp;&amp;void
  0!==a&amp;&amp;(o=o[a]),o){q.bindFramebuffer(36160,o);try{const
  a=t.texture,o=a.format,l=a.type;if(o!==E&amp;&amp;ut.convert(o)!==pt.getParameter(35739))return
  void console.error("THREE.WebGLRenderer.readRenderTargetPixels:
  renderTarget is not in RGBA or implementation defined
  format.");const
  c=l===M&amp;&amp;(W.has("EXT_color_buffer_half_float")||j.isWebGL2&amp;&amp;W.has("EXT_color_buffer_float"));if(!(l===x||ut.convert(l)===pt.getParameter(35738)||l===b&amp;&amp;(j.isWebGL2||W.has("OES_texture_float")||W.has("WEBGL_color_buffer_float"))||c))return
  void console.error("THREE.WebGLRenderer.readRenderTargetPixels:
  renderTarget is not in UnsignedByteType or implementation defined
  type.");36053===pt.checkFramebufferStatus(36160)?e&gt;=0&amp;&amp;e&lt;=t.width-i&amp;&amp;n&gt;=0&amp;&amp;n&lt;=t.height-r&amp;&amp;pt.readPixels(e,n,i,r,ut.convert(o),ut.convert(l),s):console.error("THREE.WebGLRenderer.readRenderTargetPixels:
  readPixels from renderTarget failed. Framebuffer not
  complete.")}finally{const
  t=null!==_?Z.get(_).__webglFramebuffer:null;q.bindFramebuffer(36160,t)}}},this.copyFramebufferToTexture=function(t,e,n=0){const
  i=Math.pow(2,-n),r=Math.floor(e.image.width*i),s=Math.floor(e.image.height*i),a=ut.convert(e.format);J.setTexture2D(e,0),pt.copyTexImage2D(3553,n,a,t.x,t.y,r,s,0),q.unbindTexture()},this.copyTextureToTexture=function(t,e,n,i=0){const
  r=e.image.width,s=e.image.height,a=ut.convert(n.format),o=ut.convert(n.type);J.setTexture2D(n,0),pt.pixelStorei(37440,n.flipY),pt.pixelStorei(37441,n.premultiplyAlpha),pt.pixelStorei(3317,n.unpackAlignment),e.isDataTexture?pt.texSubImage2D(3553,i,t.x,t.y,r,s,a,o,e.image.data):e.isCompressedTexture?pt.compressedTexSubImage2D(3553,i,t.x,t.y,e.mipmaps[0].width,e.mipmaps[0].height,a,e.mipmaps[0].data):pt.texSubImage2D(3553,i,t.x,t.y,a,o,e.image),0===i&amp;&amp;n.generateMipmaps&amp;&amp;pt.generateMipmap(3553),q.unbindTexture()},this.copyTextureToTexture3D=function(t,e,n,i,r=0){if(f.isWebGL1Renderer)return
  void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D:
  can only be used with
  WebGL2.");const{width:s,height:a,data:o}=n.image,l=ut.convert(i.format),c=ut.convert(i.type);let
  h;if(i.isDataTexture3D)J.setTexture3D(i,0),h=32879;else{if(!i.isDataTexture2DArray)return
  void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D:
  only supports THREE.DataTexture3D and
  THREE.DataTexture2DArray.");J.setTexture2DArray(i,0),h=35866}pt.pixelStorei(37440,i.flipY),pt.pixelStorei(37441,i.premultiplyAlpha),pt.pixelStorei(3317,i.unpackAlignment);const
  u=pt.getParameter(3314),d=pt.getParameter(32878),p=pt.getParameter(3316),m=pt.getParameter(3315),g=pt.getParameter(32877);pt.pixelStorei(3314,s),pt.pixelStorei(32878,a),pt.pixelStorei(3316,t.min.x),pt.pixelStorei(3315,t.min.y),pt.pixelStorei(32877,t.min.z),pt.texSubImage3D(h,r,e.x,e.y,e.z,t.max.x-t.min.x+1,t.max.y-t.min.y+1,t.max.z-t.min.z+1,l,c,o),pt.pixelStorei(3314,u),pt.pixelStorei(32878,d),pt.pixelStorei(3316,p),pt.pixelStorei(3315,m),pt.pixelStorei(32877,g),0===r&amp;&amp;i.generateMipmaps&amp;&amp;pt.generateMipmap(h),q.unbindTexture()},this.initTexture=function(t){J.setTexture2D(t,0),q.unbindTexture()},this.resetState=function(){v=0,y=0,_=null,q.reset(),dt.reset()},"undefined"!=typeof
  __THREE_DEVTOOLS__&amp;&amp;__THREE_DEVTOOLS__.dispatchEvent(new
  CustomEvent("observe",{detail:this}))}class bs extends
  ws{}bs.prototype.isWebGL1Renderer=!0;class
  Ms{constructor(t,e=25e-5){this.name="",this.color=new
  tn(t),this.density=e}clone(){return new
  Ms(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}Ms.prototype.isFogExp2=!0;class
  Ss{constructor(t,e=1,n=1e3){this.name="",this.color=new
  tn(t),this.near=e,this.far=n}clone(){return new
  Ss(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}Ss.prototype.isFog=!0;class
  Ts extends
  Ce{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,"undefined"!=typeof
  __THREE_DEVTOOLS__&amp;&amp;__THREE_DEVTOOLS__.dispatchEvent(new
  CustomEvent("observe",{detail:this}))}copy(t,e){return
  super.copy(t,e),null!==t.background&amp;&amp;(this.background=t.background.clone()),null!==t.environment&amp;&amp;(this.environment=t.environment.clone()),null!==t.fog&amp;&amp;(this.fog=t.fog.clone()),null!==t.overrideMaterial&amp;&amp;(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const
  e=super.toJSON(t);return
  null!==this.background&amp;&amp;(e.object.background=this.background.toJSON(t)),null!==this.environment&amp;&amp;(e.object.environment=this.environment.toJSON(t)),null!==this.fog&amp;&amp;(e.object.fog=this.fog.toJSON()),e}}Ts.prototype.isScene=!0;class
  Es{constructor(t,e){this.array=t,this.stride=e,this.count=void
  0!==t?t.length/e:0,this.usage=et,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ct(),this.onUploadCallback=function(){}}set
  needsUpdate(t){!0===t&amp;&amp;this.version++}setUsage(t){return
  this.usage=t,this}copy(t){return this.array=new
  t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let
  i=0,r=this.stride;it.far||e.push({distance:o,point:Ps.clone(),uv:je.getUV(Ps,Fs,Os,Hs,Gs,Us,ks,new
  vt),face:null,object:this})}copy(t){return super.copy(t),void
  0!==t.center&amp;&amp;this.center.copy(t.center),this.material=t.material,this}}function
  Ws(t,e,n,i,r,s){Ns.subVectors(t,n).addScalar(.5).multiply(i),void
  0!==r?(Bs.x=s*Ns.x-r*Ns.y,Bs.y=r*Ns.x+s*Ns.y):Bs.copy(Ns),t.copy(e),t.x+=Bs.x,t.y+=Bs.y,t.applyMatrix4(zs)}Vs.prototype.isSprite=!0;const
  js=new Lt,qs=new Lt;class Xs extends
  Ce{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const
  e=t.levels;for(let t=0,n=e.length;t0){let
  n,i;for(n=1,i=e.length;n</i>0){js.setFromMatrixPosition(this.matrixWorld);const
  n=t.ray.origin.distanceTo(js);this.getObjectForDistance(n).raycast(t,e)}}update(t){const
  e=this.levels;if(e.length&gt;1){js.setFromMatrixPosition(t.matrixWorld),qs.setFromMatrixPosition(this.matrixWorld);const
  n=js.distanceTo(qs)/t.zoom;let
  i,r;for(e[0].object.visible=!0,i=1,r=e.length;i=e[i].distance;i++)e[i-1].object.visible=!1,e[i].object.visible=!0;for(this._currentLevel=i-1;i<i i="n[t];e.object.levels.push({object:i.object.uuid,distance:i.distance})}return"
  ys="new" extends="" t="new" n="0,i=e.count;n">&lt;4;t++){const
  i=Js.getComponent(t);if(0!==i){const
  r=Zs.getComponent(t);Ks.multiplyMatrices(n.bones[r].matrixWorld,n.boneInverses[r]),e.addScaledVector(Qs.copy(Ys).applyMatrix4(Ks),i)}}return
  e.applyMatrix4(this.bindMatrixInverse)}}$s.prototype.isSkinnedMesh=!0;class
  ta extends
  Ce{constructor(){super(),this.type="Bone"}}ta.prototype.isBone=!0;const
  ea=new se,na=new se;class
  ia{constructor(t=[],e=[]){this.uuid=ct(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const
  t=this.bones,e=this.boneInverses;if(this.boneMatrices=new
  Float32Array(16*t.length),0===e.length)this.calculateInverses();else
  if(t.length!==e.length){console.warn("THREE.Skeleton: Number of
  inverse bone matrices does not match amount of
  bones."),this.boneInverses=[];for(let
  t=0,e=this.bones.length;t</i></s></s></a><a s=
  "i.getX(n),a=i.getX(n+1);l.fromBufferAttribute(r,s),c.fromBufferAttribute(r,a);if(pa.distanceSqToSegment(l,c,u,h)">o)continue;u.applyMatrix4(this.matrixWorld);const
  d=t.ray.origin.distanceTo(u);dt.far||e.push({distance:d,point:h.clone().applyMatrix4(this.matrixWorld),index:n,face:null,faceIndex:null,object:this})}}else{for(let
  n=Math.max(0,s.start),i=Math.min(r.count,s.start+s.count)-1;n<i>o)continue;u.applyMatrix4(this.matrixWorld);const
  i=t.ray.origin.distanceTo(u);it.far||e.push({distance:i,point:h.clone().applyMatrix4(this.matrixWorld),index:n,face:null,faceIndex:null,object:this})}}}else
  n.isGeometry&amp;&amp;console.error("THREE.Line.raycast() no
  longer supports THREE.Geometry. Use THREE.BufferGeometry
  instead.")}updateMorphTargets(){const
  t=this.geometry;if(t.isBufferGeometry){const
  e=t.morphAttributes,n=Object.keys(e);if(n.length&gt;0){const
  t=e[n[0]];if(void
  0!==t){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let
  e=0,n=t.length;e0&amp;&amp;console.error("THREE.Line.updateMorphTargets()
  does not support THREE.Geometry. Use THREE.BufferGeometry
  instead.")}}}fa.prototype.isLine=!0;const ga=new Lt,va=new
  Lt;class ya extends
  fa{constructor(t,e){super(t,e),this.type="LineSegments"}computeLineDistances(){const
  t=this.geometry;if(t.isBufferGeometry)if(null===t.index){const
  e=t.attributes.position,n=[];for(let t=0,i=e.count;t0){const
  t=e[n[0]];if(void
  0!==t){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let
  e=0,n=t.length;e0&amp;&amp;console.error("THREE.Points.updateMorphTargets()
  does not support THREE.Geometry. Use THREE.BufferGeometry
  instead.")}}}function Ea(t,e,n,i,r,s,a){const
  o=ba.distanceSqToPoint(t);if(or.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:n,index:e,face:null,object:a})}}Ta.prototype.isPoints=!0;class
  Aa extends
  bt{constructor(t,e,n,i,r,s,a,o,l){super(t,e,n,i,r,s,a,o,l),this.format=void
  0!==a?a:T,this.minFilter=void 0!==s?s:g,this.magFilter=void
  0!==r?r:g,this.generateMipmaps=!1;const
  c=this;"requestVideoFrameCallback"in
  t&amp;&amp;t.requestVideoFrameCallback((function
  e(){c.needsUpdate=!0,t.requestVideoFrameCallback(e)}))}clone(){return
  new this.constructor(this.image).copy(this)}update(){const
  t=this.image;!1==="requestVideoFrameCallback"in
  t&amp;&amp;t.readyState&gt;=t.HAVE_CURRENT_DATA&amp;&amp;(this.needsUpdate=!0)}}Aa.prototype.isVideoTexture=!0;class
  La extends
  bt{constructor(t,e,n,i,r,s,a,o,l,c,h,u){super(null,s,a,o,l,c,i,r,h,u),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}La.prototype.isCompressedTexture=!0;class
  Ra extends
  bt{constructor(t,e,n,i,r,s,a,o,l){super(t,e,n,i,r,s,a,o,l),this.needsUpdate=!0}}Ra.prototype.isCanvasTexture=!0;class
  Ca extends bt{constructor(t,e,n,i,r,s,a,o,l,c){if((c=void
  0!==c?c:A)!==A&amp;&amp;c!==L)throw new Error("DepthTexture
  format must be either THREE.DepthFormat or
  THREE.DepthStencilFormat");void
  0===n&amp;&amp;c===A&amp;&amp;(n=_),void
  0===n&amp;&amp;c===L&amp;&amp;(n=S),super(null,i,r,s,a,o,c,n,l),this.image={width:t,height:e},this.magFilter=void
  0!==a?a:p,this.minFilter=void
  0!==o?o:p,this.flipY=!1,this.generateMipmaps=!1}}Ca.prototype.isDepthTexture=!0;class
  Pa extends
  En{constructor(t=1,e=8,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const
  r=[],s=[],a=[],o=[],l=new Lt,c=new
  vt;s.push(0,0,0),a.push(0,0,1),o.push(.5,.5);for(let
  r=0,h=3;r&lt;=e;r++,h+=3){const
  u=n+r/e*i;l.x=t*Math.cos(u),l.y=t*Math.sin(u),s.push(l.x,l.y,l.z),a.push(0,0,1),c.x=(s[h]/t+1)/2,c.y=(s[h+1]/t+1)/2,o.push(c.x,c.y)}for(let
  t=1;t&lt;=e;t++)r.push(t,t+1,0);this.setIndex(r),this.setAttribute("position",new
  mn(s,3)),this.setAttribute("normal",new
  mn(a,3)),this.setAttribute("uv",new mn(o,2))}}class Da extends
  En{constructor(t=1,e=1,n=1,i=8,r=1,s=!1,a=0,o=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o};const
  l=this;i=Math.floor(i),r=Math.floor(r);const
  c=[],h=[],u=[],d=[];let p=0;const m=[],f=n/2;let g=0;function
  v(n){const r=p,s=new vt,m=new Lt;let v=0;const
  y=!0===n?t:e,x=!0===n?1:-1;for(let
  t=1;t&lt;=i;t++)h.push(0,f*x,0),u.push(0,x,0),d.push(.5,.5),p++;const
  _=p;for(let t=0;t&lt;=i;t++){const
  e=t/i*o+a,n=Math.cos(e),r=Math.sin(e);m.x=y*r,m.y=f*x,m.z=y*n,h.push(m.x,m.y,m.z),u.push(0,x,0),s.x=.5*n+.5,s.y=.5*r*x+.5,d.push(s.x,s.y),p++}for(let
  t=0;t&lt;=r;l++){const c=[],g=l/r,y=g*(e-t)+t;for(let
  t=0;t&lt;=i;t++){const
  e=t/i,r=e*o+a,l=Math.sin(r),m=Math.cos(r);v.x=y*l,v.y=-g*n+f,v.z=y*m,h.push(v.x,v.y,v.z),s.set(l,x,m).normalize(),u.push(s.x,s.y,s.z),d.push(e,1-g),c.push(p++)}m.push(c)}for(let
  t=0;t0&amp;&amp;v(!0),e&gt;0&amp;&amp;v(!1)),this.setIndex(c),this.setAttribute("position",new
  mn(h,3)),this.setAttribute("normal",new
  mn(u,3)),this.setAttribute("uv",new mn(d,2))}}class Ia extends
  Da{constructor(t=1,e=1,n=8,i=1,r=!1,s=0,a=2*Math.PI){super(0,t,e,n,i,r,s,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:a}}}class
  Na extends
  En{constructor(t,e,n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const
  r=[],s=[];function a(t,e,n,i){const r=i+1,s=[];for(let
  i=0;i&lt;=r;i++){s[i]=[];const
  a=t.clone().lerp(n,i/r),o=e.clone().lerp(n,i/r),l=r-i;for(let
  t=0;t&lt;=l;t++)s[i][t]=0===t&amp;&amp;i===r?a:a.clone().lerp(o,t/l)}for(let
  t=0;t&lt;2*(r-t)-1;e++){const
  n=Math.floor(e/2);e%2==0?(o(s[t][n+1]),o(s[t+1][n]),o(s[t][n])):(o(s[t][n+1]),o(s[t+1][n+1]),o(s[t+1][n]))}}function
  o(t){r.push(t.x,t.y,t.z)}function l(e,n){const
  i=3*e;n.x=t[i+0],n.y=t[i+1],n.z=t[i+2]}function
  c(t,e,n,i){i&lt;0&amp;&amp;1===t.x&amp;&amp;(s[e]=t.x-1),0===n.x&amp;&amp;0===n.z&amp;&amp;(s[e]=i/2/Math.PI+.5)}function
  h(t){return Math.atan2(t.z,-t.x)}!function(t){const n=new
  Lt,i=new Lt,r=new Lt;for(let
  s=0;s.9&amp;&amp;a&lt;.1&amp;&amp;(e&lt;.2&amp;&amp;(s[t+0]+=1),n&lt;.2&amp;&amp;(s[t+2]+=1),i&lt;.2&amp;&amp;(s[t+4]+=1))}}()}(),this.setAttribute("position",new
  mn(r,3)),this.setAttribute("normal",new
  mn(r.slice(),3)),this.setAttribute("uv",new
  mn(s,2)),0===i?this.computeVertexNormals():this.normalizeNormals()}}class
  Ba extends Na{constructor(t=1,e=0){const
  n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}}const
  za=new Lt,Fa=new Lt,Oa=new Lt,Ha=new je;class Ga extends
  En{constructor(t,e){if(super(),this.type="EdgesGeometry",this.parameters={thresholdAngle:e},e=void
  0!==e?e:1,!0===t.isGeometry)return void
  console.error("THREE.EdgesGeometry no longer supports
  THREE.Geometry. Use THREE.BufferGeometry instead.");const
  n=Math.pow(10,4),i=Math.cos(ot*e),r=t.getIndex(),s=t.getAttribute("position"),a=r?r.count:s.count,o=[0,0,0],l=["a","b","c"],c=new
  Array(3),h={},u=[];for(let t=0;t</i></a><a t=
  "0;t">&lt;3;t++){const
  e=(t+1)%3,n=c[t],r=c[e],s=Ha[l[t]],a=Ha[l[e]],d=`${n}_${r}`,p=`${r}_${n}`;p
  in
  h&amp;&amp;h[p]?(Oa.dot(h[p].normal)&lt;=i&amp;&amp;(u.push(s.x,s.y,s.z),u.push(a.x,a.y,a.z)),h[p]=null):d
  in
  h||(h[d]={index0:o[t],index1:o[e],normal:Oa.clone()})}}for(const
  t in
  h)if(h[t]){const{index0:e,index1:n}=h[t];za.fromBufferAttribute(s,e),Fa.fromBufferAttribute(s,n),u.push(za.x,za.y,za.z),u.push(Fa.x,Fa.y,Fa.z)}this.setAttribute("position",new
  mn(u,3))}}const Ua=function(t,e,n){n=n||2;const
  i=e&amp;&amp;e.length,r=i?e[0]*n:t.length;let
  s=ka(t,0,r,n,!0);const a=[];if(!s||s.next===s.prev)return a;let
  o,l,c,h,u,d,p;if(i&amp;&amp;(s=function(t,e,n,i){const r=[];let
  s,a,o,l,c;for(s=0,a=e.length;s</a>80*n){o=c=t[0],l=h=t[1];for(let
  e=n;ec&amp;&amp;(c=u),d&gt;h&amp;&amp;(h=d);p=Math.max(c-o,h-l),p=0!==p?1/p:0}return
  Wa(s,a,n,o,l,p),a};function ka(t,e,n,i,r){let
  s,a;if(r===function(t,e,n,i){let r=0;for(let
  s=e,a=n-i;s0)for(s=e;s=e;s-=i)a=co(s,t[s],t[s+1],a);return
  a&amp;&amp;io(a,a.next)&amp;&amp;(ho(a),a=a.next),a}function
  Va(t,e){if(!t)return t;e||(e=t);let
  n,i=t;do{if(n=!1,i.steiner||!io(i,i.next)&amp;&amp;0!==no(i.prev,i,i.next))i=i.next;else{if(ho(i),i=e=i.prev,i===i.next)break;n=!0}}while(n||i!==e);return
  e}function
  Wa(t,e,n,i,r,s,a){if(!t)return;!a&amp;&amp;s&amp;&amp;function(t,e,n,i){let
  r=t;do{null===r.z&amp;&amp;(r.z=Ka(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,function(t){let
  e,n,i,r,s,a,o,l,c=1;do{for(n=t,t=null,s=null,a=0;n;){for(a++,i=n,o=0,e=0;e0||l&gt;0&amp;&amp;i;)0!==o&amp;&amp;(0===l||!i||n.z&lt;=i.z)?(r=n,n=n.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(a&gt;1)}(r)}(t,i,r,s);let
  o,l,c=t;for(;t.prev!==t.next;)if(o=t.prev,l=t.next,s?qa(t,i,r,s):ja(t))e.push(o.i/n),e.push(t.i/n),e.push(l.i/n),ho(t),t=l.next,c=l.next;else
  if((t=l)===c){a?1===a?Wa(t=Xa(Va(t),e,n),e,n,i,r,s,2):2===a&amp;&amp;Ya(t,e,n,i,r,s):Wa(Va(t),e,n,i,r,s,1);break}}function
  ja(t){const e=t.prev,n=t,i=t.next;if(no(e,n,i)&gt;=0)return!1;let
  r=t.next.next;for(;r!==t.prev;){if(to(e.x,e.y,n.x,n.y,i.x,i.y,r.x,r.y)&amp;&amp;no(r.prev,r,r.next)&gt;=0)return!1;r=r.next}return!0}function
  qa(t,e,n,i){const
  r=t.prev,s=t,a=t.next;if(no(r,s,a)&gt;=0)return!1;const
  o=r.xs.x?r.x&gt;a.x?r.x:a.x:s.x&gt;a.x?s.x:a.x,h=r.y&gt;s.y?r.y&gt;a.y?r.y:a.y:s.y&gt;a.y?s.y:a.y,u=Ka(o,l,e,n,i),d=Ka(c,h,e,n,i);let
  p=t.prevZ,m=t.nextZ;for(;p&amp;&amp;p.z&gt;=u&amp;&amp;m&amp;&amp;m.z&lt;=d;){if(p!==t.prev&amp;&amp;p!==t.next&amp;&amp;to(r.x,r.y,s.x,s.y,a.x,a.y,p.x,p.y)&amp;&amp;no(p.prev,p,p.next)&gt;=0)return!1;if(p=p.prevZ,m!==t.prev&amp;&amp;m!==t.next&amp;&amp;to(r.x,r.y,s.x,s.y,a.x,a.y,m.x,m.y)&amp;&amp;no(m.prev,m,m.next)&gt;=0)return!1;m=m.nextZ}for(;p&amp;&amp;p.z&gt;=u;){if(p!==t.prev&amp;&amp;p!==t.next&amp;&amp;to(r.x,r.y,s.x,s.y,a.x,a.y,p.x,p.y)&amp;&amp;no(p.prev,p,p.next)&gt;=0)return!1;p=p.prevZ}for(;m&amp;&amp;m.z&lt;=d;){if(m!==t.prev&amp;&amp;m!==t.next&amp;&amp;to(r.x,r.y,s.x,s.y,a.x,a.y,m.x,m.y)&amp;&amp;no(m.prev,m,m.next)&gt;=0)return!1;m=m.nextZ}return!0}function
  Xa(t,e,n){let i=t;do{const
  r=i.prev,s=i.next.next;!io(r,s)&amp;&amp;ro(r,i,i.next,s)&amp;&amp;oo(r,s)&amp;&amp;oo(s,r)&amp;&amp;(e.push(r.i/n),e.push(i.i/n),e.push(s.i/n),ho(i),ho(i.next),i=t=s),i=i.next}while(i!==t);return
  Va(i)}function Ya(t,e,n,i,r,s){let a=t;do{let
  t=a.next.next;for(;t!==a.prev;){if(a.i!==t.i&amp;&amp;eo(a,t)){let
  o=lo(a,t);return
  a=Va(a,a.next),o=Va(o,o.next),Wa(a,e,n,i,r,s),void
  Wa(o,e,n,i,r,s)}t=t.next}a=a.next}while(a!==t)}function
  Za(t,e){return t.x-e.x}function Ja(t,e){if(e=function(t,e){let
  n=e;const i=t.x,r=t.y;let
  s,a=-1/0;do{if(r&lt;=n.y&amp;&amp;r&gt;=n.next.y&amp;&amp;n.next.y!==n.y){const
  t=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(t&lt;=i&amp;&amp;t&gt;a){if(a=t,t===i){if(r===n.y)return
  n;if(r===n.next.y)return
  n.next}s=n.x=n.x&amp;&amp;n.x&gt;=l&amp;&amp;i!==n.x&amp;&amp;to(r<u>s.x||n.x===s.x&amp;&amp;Qa(s,n)))&amp;&amp;(s=n,u=h)),n=n.next}while(n!==o);return
  s}(t,e)){const n=lo(e,t);Va(e,e.next),Va(n,n.next)}}function
  Qa(t,e){return
  no(t.prev,t,e.prev)&lt;0&amp;&amp;no(e.next,t,t.next)&lt;0}function
  Ka(t,e,n,i,r){return(t=1431655765&amp;((t=858993459&amp;((t=252645135&amp;((t=16711935&amp;((t=32767*(t-n)*r)|t&lt;&lt;8))|t&lt;&lt;4))|t&lt;&lt;2))|t&lt;&lt;1))|(e=1431655765&amp;((e=858993459&amp;((e=252645135&amp;((e=16711935&amp;((e=32767*(e-i)*r)|e&lt;&lt;8))|e&lt;&lt;4))|e&lt;&lt;2))|e&lt;&lt;1))&lt;&lt;1}function
  $a(t){let
  e=t,n=t;do{(e.x=0&amp;&amp;(t-a)*(i-o)-(n-a)*(e-o)&gt;=0&amp;&amp;(n-a)*(s-o)-(r-a)*(i-o)&gt;=0}function
  eo(t,e){return
  t.next.i!==e.i&amp;&amp;t.prev.i!==e.i&amp;&amp;!function(t,e){let
  n=t;do{if(n.i!==t.i&amp;&amp;n.next.i!==t.i&amp;&amp;n.i!==e.i&amp;&amp;n.next.i!==e.i&amp;&amp;ro(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}(t,e)&amp;&amp;(oo(t,e)&amp;&amp;oo(e,t)&amp;&amp;function(t,e){let
  n=t,i=!1;const
  r=(t.x+e.x)/2,s=(t.y+e.y)/2;do{n.y&gt;s!=n.next.y&gt;s&amp;&amp;n.next.y!==n.y&amp;&amp;r&lt;(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&amp;&amp;(i=!i),n=n.next}while(n!==t);return
  i}(t,e)&amp;&amp;(no(t.prev,t,e.prev)||no(t,e.prev,e))||io(t,e)&amp;&amp;no(t.prev,t,t.next)&gt;0&amp;&amp;no(e.prev,e,e.next)&gt;0)}function
  no(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function
  io(t,e){return t.x===e.x&amp;&amp;t.y===e.y}function
  ro(t,e,n,i){const
  r=ao(no(t,e,n)),s=ao(no(t,e,i)),a=ao(no(n,i,t)),o=ao(no(n,i,e));return
  r!==s&amp;&amp;a!==o||(!(0!==r||!so(t,n,e))||(!(0!==s||!so(t,i,e))||(!(0!==a||!so(n,t,i))||!(0!==o||!so(n,e,i)))))}function
  so(t,e,n){return
  e.x&lt;=Math.max(t.x,n.x)&amp;&amp;e.x&gt;=Math.min(t.x,n.x)&amp;&amp;e.y&lt;=Math.max(t.y,n.y)&amp;&amp;e.y&gt;=Math.min(t.y,n.y)}function
  ao(t){return t&gt;0?1:t&lt;0?-1:0}function oo(t,e){return
  no(t.prev,t,t.next)&lt;0?no(t,e,t.next)&gt;=0&amp;&amp;no(t,t.prev,e)&gt;=0:no(t,e,t.prev)&lt;0||no(t,t.next,e)&lt;0}function
  lo(t,e){const n=new uo(t.i,t.x,t.y),i=new
  uo(e.i,e.x,e.y),r=t.next,s=e.prev;return
  t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function
  co(t,e,n,i){const r=new uo(t,e,n);return
  i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function
  ho(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&amp;&amp;(t.prevZ.nextZ=t.nextZ),t.nextZ&amp;&amp;(t.nextZ.prevZ=t.prevZ)}function
  uo(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}class
  po{static area(t){const e=t.length;let n=0;for(let
  i=e-1,r=0;r&lt;0}static triangulateShape(t,e){const
  n=[],i=[],r=[];mo(t),fo(n,t);let s=t.length;e.forEach(mo);for(let
  t=0;t2&amp;&amp;t[e-1].equals(t[0])&amp;&amp;t.pop()}function
  fo(t,e){for(let n=0;nNumber.EPSILON){const
  u=Math.sqrt(h),d=Math.sqrt(l*l+c*c),p=e.x-o/u,m=e.y+a/u,f=((n.x-c/d-p)*c-(n.y+l/d-m)*l)/(a*c-o*l);i=p+a*f-t.x,r=m+o*f-t.y;const
  g=i*i+r*r;if(g&lt;=2)return new vt(i,r);s=Math.sqrt(g/2)}else{let
  t=!1;a&gt;Number.EPSILON?l&gt;Number.EPSILON&amp;&amp;(t=!0):a&lt;-Number.EPSILON?l&lt;-Number.EPSILON&amp;&amp;(t=!0):Math.sign(o)===Math.sign(c)&amp;&amp;(t=!0),t?(i=-o,r=a,s=Math.sqrt(h)):(i=a,r=o,s=Math.sqrt(h/2))}return
  new vt(i/s,r/s)}const P=[];for(let
  t=0,e=E.length,n=e-1,i=t+1;t</u></s></s></s></i>
  <p e=
  "t/p,n=h*Math.cos(e*Math.PI/2),i=u*Math.sin(e*Math.PI/2)+d;for(let"
  t="0,e=E.length;t"><i i=
  "this.children[n].getObjectByProperty(t,e);if(void" void=""
  target="" is="" now="" e="this.children;for(let" n=
  "0,i=e.length;n"><s s="e[r],a=this.morphTargetsRelative;for(let"
  e="0,r=s.count;e"><u>&lt;=o;t++)for(let e=0;e=0;t--){const
  e=t/p,n=h*Math.cos(e*Math.PI/2),i=u*Math.sin(e*Math.PI/2)+d;for(let
  t=0,e=E.length;t=0;){const i=n;let
  r=n-1;r&lt;0&amp;&amp;(r=t.length-1);for(let t=0,n=o+2*p;t<i i=
  "t[e];n.shapes.push(i.uuid)}else" vo=
  "{generateTopUV:function(t,e,n,i,r){const" s=
  "e[3*n],a=e[3*n+1],o=e[3*i],l=e[3*i+1],c=e[3*r],h=e[3*r+1];return[new"
  a=
  "e[3*n],o=e[3*n+1],l=e[3*n+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*r],p=e[3*r+1],m=e[3*r+2],f=e[3*s],g=e[3*s+1],v=e[3*s+2];return">&lt;.01?[new
  vt(a,1-l),new vt(c,1-u),new vt(d,1-m),new vt(f,1-v)]:[new
  vt(o,1-l),new vt(h,1-u),new vt(p,1-m),new vt(g,1-v)]}};class yo
  extends Na{constructor(t=1,e=0){const
  n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}}class
  xo extends
  En{constructor(t,e=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ht(i,0,2*Math.PI);const
  r=[],s=[],a=[],o=1/e,l=new Lt,c=new vt;for(let
  r=0;r&lt;=e;r++){const
  h=n+r*o*i,u=Math.sin(h),d=Math.cos(h);for(let
  n=0;n&lt;=t.length-1;n++)l.x=t[n].x*u,l.y=t[n].y,l.z=t[n].x*d,s.push(l.x,l.y,l.z),c.x=r/e,c.y=n/(t.length-1),a.push(c.x,c.y)}for(let
  n=0;n&lt;3&amp;&amp;console.error("THREE.ParametricGeometry:
  Function must now modify a Vector3 as third parameter.");const
  p=e+1;for(let i=0;i&lt;=n;i++){const p=i/n;for(let
  n=0;n&lt;=e;n++){const
  i=n/e;t(i,p,c),r.push(c.x,c.y,c.z),i-o&gt;=0?(t(i-o,p,h),u.subVectors(c,h)):(t(i+o,p,h),u.subVectors(h,c)),p-o&gt;=0?(t(i,p-o,h),d.subVectors(c,h)):(t(i,p+o,h),d.subVectors(h,c)),l.crossVectors(u,d).normalize(),s.push(l.x,l.y,l.z),a.push(i,p)}}for(let
  t=0;t&lt;=i;t++){for(let t=0;t&lt;=n;t++){const
  i=r+t/n*s;d.x=h*Math.cos(i),d.y=h*Math.sin(i),o.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,c.push(p.x,p.y)}h+=u}for(let
  t=0;t&lt;=n;d++){const g=[],v=d/n;let
  y=0;0==d&amp;&amp;0==s?y=.5/e:d==n&amp;&amp;o==Math.PI&amp;&amp;(y=-.5/e);for(let
  n=0;n&lt;=e;n++){const
  o=n/e;h.x=-t*Math.cos(i+o*r)*Math.sin(s+v*a),h.y=t*Math.cos(s+v*a),h.z=t*Math.sin(i+o*r)*Math.sin(s+v*a),p.push(h.x,h.y,h.z),u.copy(h).normalize(),m.push(u.x,u.y,u.z),f.push(o+y,1-v),g.push(l++)}c.push(g)}for(let
  t=0;t0)&amp;&amp;d.push(e,r,l),(t!==n-1||o&lt;=n;s++)for(let
  d=0;d&lt;=i;d++){const
  p=d/i*r,m=s/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(p),h.y=(t+e*Math.cos(m))*Math.sin(p),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),c.x=t*Math.cos(p),c.y=t*Math.sin(p),u.subVectors(h,c).normalize(),o.push(u.x,u.y,u.z),l.push(d/i),l.push(s/n)}for(let
  t=1;t&lt;=n;t++)for(let e=1;e&lt;=i;e++){const
  n=(i+1)*t+e-1,r=(i+1)*(t-1)+e-1,a=(i+1)*(t-1)+e,o=(i+1)*t+e;s.push(n,r,o),s.push(r,a,o)}this.setIndex(s),this.setAttribute("position",new
  mn(a,3)),this.setAttribute("normal",new
  mn(o,3)),this.setAttribute("uv",new mn(l,2))}}class Lo extends
  En{constructor(t=1,e=.4,n=64,i=8,r=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:s},n=Math.floor(n),i=Math.floor(i);const
  a=[],o=[],l=[],c=[],h=new Lt,u=new Lt,d=new Lt,p=new Lt,m=new
  Lt,f=new Lt,g=new Lt;for(let a=0;a&lt;=n;++a){const
  y=a/n*r*Math.PI*2;v(y,r,s,t,d),v(y+.01,r,s,t,p),f.subVectors(p,d),g.addVectors(p,d),m.crossVectors(f,g),g.crossVectors(m,f),m.normalize(),g.normalize();for(let
  t=0;t&lt;=i;++t){const
  r=t/i*Math.PI*2,s=-e*Math.cos(r),p=e*Math.sin(r);h.x=d.x+(s*g.x+p*m.x),h.y=d.y+(s*g.y+p*m.y),h.z=d.z+(s*g.z+p*m.z),o.push(h.x,h.y,h.z),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(a/n),c.push(t/i)}}for(let
  t=1;t&lt;=n;t++)for(let e=1;e&lt;=i;e++){const
  n=(i+1)*(t-1)+(e-1),r=(i+1)*t+(e-1),s=(i+1)*t+e,o=(i+1)*(t-1)+e;a.push(n,r,o),a.push(r,s,o)}function
  v(t,e,n,i,r){const
  s=Math.cos(t),a=Math.sin(t),o=n/e*t,l=Math.cos(o);r.x=i*(2+l)*.5*s,r.y=i*(2+l)*a*.5,r.z=i*Math.sin(o)*.5}this.setIndex(a),this.setAttribute("position",new
  mn(o,3)),this.setAttribute("normal",new
  mn(l,3)),this.setAttribute("uv",new mn(c,2))}}class Ro extends
  En{constructor(t,e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const
  s=t.computeFrenetFrames(e,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const
  a=new Lt,o=new Lt,l=new vt;let c=new Lt;const
  h=[],u=[],d=[],p=[];function m(r){c=t.getPointAt(r/e,c);const
  l=s.normals[r],d=s.binormals[r];for(let t=0;t&lt;=i;t++){const
  e=t/i*Math.PI*2,r=Math.sin(e),s=-Math.cos(e);o.x=s*l.x+r*d.x,o.y=s*l.y+r*d.y,o.z=s*l.z+r*d.z,o.normalize(),u.push(o.x,o.y,o.z),a.x=c.x+n*o.x,a.y=c.y+n*o.y,a.z=c.z+n*o.z,h.push(a.x,a.y,a.z)}}!function(){for(let
  t=0;t&lt;=e;t++)for(let
  n=0;n&lt;=i;n++)l.x=t/e,l.y=n/i,d.push(l.x,l.y)}(),function(){for(let
  t=1;t&lt;=e;t++)for(let e=1;e&lt;=i;e++){const
  n=(i+1)*(t-1)+(e-1),r=(i+1)*t+(e-1),s=(i+1)*t+e,a=(i+1)*(t-1)+e;p.push(n,r,a),p.push(r,s,a)}}()}(),this.setIndex(p),this.setAttribute("position",new
  mn(h,3)),this.setAttribute("normal",new
  mn(u,3)),this.setAttribute("uv",new mn(d,2))}toJSON(){const
  t=En.prototype.toJSON.call(this);return
  t.path=this.parameters.path.toJSON(),t}}class Co extends
  En{constructor(t){if(super(),this.type="WireframeGeometry",!0===t.isGeometry)return
  void console.error("THREE.WireframeGeometry no longer supports
  THREE.Geometry. Use THREE.BufferGeometry instead.");const
  e=[],n=[0,0],i={},r=new Lt;if(null!==t.index){const
  s=t.attributes.position,a=t.index;let
  o=t.groups;0===o.length&amp;&amp;(o=[{start:0,count:a.count,materialIndex:0}]);for(let
  t=0,e=o.length;t<s e="0;e">&lt;3;e++){const
  r=a.getX(t+e),s=a.getX(t+(e+1)%3);n[0]=Math.min(r,s),n[1]=Math.max(r,s);const
  o=n[0]+","+n[1];void
  0===i[o]&amp;&amp;(i[o]={index1:n[0],index2:n[1]})}}for(const t
  in i){const
  n=i[t];r.fromBufferAttribute(s,n.index1),e.push(r.x,r.y,r.z),r.fromBufferAttribute(s,n.index2),e.push(r.x,r.y,r.z)}}else{const
  n=t.attributes.position;for(let t=0,i=n.count/3;t<i i=
  "0;i">&lt;3;i++){const
  s=3*t+i;r.fromBufferAttribute(n,s),e.push(r.x,r.y,r.z);const
  a=3*t+(i+1)%3;r.fromBufferAttribute(n,a),e.push(r.x,r.y,r.z)}}this.setAttribute("position",new
  mn(e,3))}}var
  Po=Object.freeze({__proto__:null,BoxGeometry:qn,BoxBufferGeometry:qn,CircleGeometry:Pa,CircleBufferGeometry:Pa,ConeGeometry:Ia,ConeBufferGeometry:Ia,CylinderGeometry:Da,CylinderBufferGeometry:Da,DodecahedronGeometry:Ba,DodecahedronBufferGeometry:Ba,EdgesGeometry:Ga,ExtrudeGeometry:go,ExtrudeBufferGeometry:go,IcosahedronGeometry:yo,IcosahedronBufferGeometry:yo,LatheGeometry:xo,LatheBufferGeometry:xo,OctahedronGeometry:_o,OctahedronBufferGeometry:_o,ParametricGeometry:wo,ParametricBufferGeometry:wo,PlaneGeometry:ci,PlaneBufferGeometry:ci,PolyhedronGeometry:Na,PolyhedronBufferGeometry:Na,RingGeometry:bo,RingBufferGeometry:bo,ShapeGeometry:Mo,ShapeBufferGeometry:Mo,SphereGeometry:So,SphereBufferGeometry:So,TetrahedronGeometry:To,TetrahedronBufferGeometry:To,TextGeometry:Eo,TextBufferGeometry:Eo,TorusGeometry:Ao,TorusBufferGeometry:Ao,TorusKnotGeometry:Lo,TorusKnotBufferGeometry:Lo,TubeGeometry:Ro,TubeBufferGeometry:Ro,WireframeGeometry:Co});class
  Do extends
  Xe{constructor(t){super(),this.type="ShadowMaterial",this.color=new
  tn(0),this.transparent=!0,this.setValues(t)}copy(t){return
  super.copy(t),this.color.copy(t.color),this}}Do.prototype.isShadowMaterial=!0;class
  Io extends
  Jn{constructor(t){super(t),this.type="RawShaderMaterial"}}Io.prototype.isRawShaderMaterial=!0;class
  No extends
  Xe{constructor(t){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new
  tn(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new
  tn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new
  vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(t)}copy(t){return
  super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.flatShading=t.flatShading,this.vertexTangents=t.vertexTangents,this}}No.prototype.isMeshStandardMaterial=!0;class
  Bo extends
  No{constructor(t){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new
  vt(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=ht(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(t)}copy(t){return
  super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.reflectivity=t.reflectivity,t.sheen?this.sheen=(this.sheen||new
  tn).copy(t.sheen):this.sheen=null,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this}}Bo.prototype.isMeshPhysicalMaterial=!0;class
  zo extends
  Xe{constructor(t){super(),this.type="MeshPhongMaterial",this.color=new
  tn(16777215),this.specular=new
  tn(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new
  tn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new
  vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(t)}copy(t){return
  super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.flatShading=t.flatShading,this}}zo.prototype.isMeshPhongMaterial=!0;class
  Fo extends
  Xe{constructor(t){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new
  tn(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new
  tn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new
  vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}copy(t){return
  super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this}}Fo.prototype.isMeshToonMaterial=!0;class
  Oo extends
  Xe{constructor(t){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new
  vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(t)}copy(t){return
  super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.flatShading=t.flatShading,this}}Oo.prototype.isMeshNormalMaterial=!0;class
  Ho extends
  Xe{constructor(t){super(),this.type="MeshLambertMaterial",this.color=new
  tn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new
  tn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}copy(t){return
  super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this}}Ho.prototype.isMeshLambertMaterial=!0;class
  Go extends
  Xe{constructor(t){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new
  tn(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new
  vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(t)}copy(t){return
  super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.flatShading=t.flatShading,this}}Go.prototype.isMeshMatcapMaterial=!0;class
  Uo extends
  ca{constructor(t){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return
  super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}Uo.prototype.isLineDashedMaterial=!0;var
  ko=Object.freeze({__proto__:null,ShadowMaterial:Do,SpriteMaterial:Rs,RawShaderMaterial:Io,ShaderMaterial:Jn,PointsMaterial:_a,MeshPhysicalMaterial:Bo,MeshStandardMaterial:No,MeshPhongMaterial:zo,MeshToonMaterial:Fo,MeshNormalMaterial:Oo,MeshLambertMaterial:Ho,MeshDepthMaterial:cs,MeshDistanceMaterial:hs,MeshBasicMaterial:en,MeshMatcapMaterial:Go,LineDashedMaterial:Uo,LineBasicMaterial:ca,Material:Xe});const
  Vo={arraySlice:function(t,e,n){return Vo.isTypedArray(t)?new
  t.constructor(t.subarray(e,void
  0!==n?n:t.length)):t.slice(e,n)},convertArray:function(t,e,n){return!t||!n&amp;&amp;t.constructor===e?t:"number"==typeof
  e.BYTES_PER_ELEMENT?new
  e(t):Array.prototype.slice.call(t)},isTypedArray:function(t){return
  ArrayBuffer.isView(t)&amp;&amp;!(t instanceof
  DataView)},getKeyframeOrder:function(t){const e=t.length,n=new
  Array(e);for(let t=0;t!==e;++t)n[t]=t;return
  n.sort((function(e,n){return
  t[e]-t[n]})),n},sortedArray:function(t,e,n){const
  i=t.length,r=new t.constructor(i);for(let
  s=0,a=0;a!==i;++s){const i=n[s]*e;for(let
  n=0;n!==e;++n)r[a++]=t[i+n]}return
  r},flattenJSON:function(t,e,n,i){let r=1,s=t[0];for(;void
  0!==s&amp;&amp;void 0===s[i];)s=t[r++];if(void 0===s)return;let
  a=s[i];if(void 0!==a)if(Array.isArray(a))do{a=s[i],void
  0!==a&amp;&amp;(e.push(s.time),n.push.apply(n,a)),s=t[r++]}while(void
  0!==s);else if(void 0!==a.toArray)do{a=s[i],void
  0!==a&amp;&amp;(e.push(s.time),a.toArray(n,n.length)),s=t[r++]}while(void
  0!==s);else do{a=s[i],void
  0!==a&amp;&amp;(e.push(s.time),n.push(a)),s=t[r++]}while(void
  0!==s)},subclip:function(t,e,n,i,r=30){const
  s=t.clone();s.name=e;const a=[];for(let
  t=0;t=i)){l.push(e.times[t]);for(let
  n=0;ns.tracks[t].times[0]&amp;&amp;(o=s.tracks[t].times[0]);for(let
  t=0;t&lt;=0&amp;&amp;(i=30);const r=n.tracks.length,s=e/i;for(let
  e=0;e&lt;=i.times[0]){const
  t=o,e=l-o;d=Vo.arraySlice(i.values,t,e)}else
  if(s&gt;=i.times[u]){const
  t=u*l+o,e=t+l-o;d=Vo.arraySlice(i.values,t,e)}else{const
  t=i.createInterpolant(),e=o,n=l-o;t.evaluate(s),d=Vo.arraySlice(t.resultBuffer,e,n)}if("quaternion"===r){(new
  At).fromArray(d).normalize().conjugate().toArray(d)}const
  p=a.times.length;for(let t=0;t</i></s></i></u></s></i></p>
  <p e=
  "t*h+c;if(&quot;quaternion&quot;===r)At.multiplyQuaternionsFlat(a.values,e,d,0,a.values,e);else{const"
  t="h-2*c;for(let" n="0;n"><i i=
  "this.children[n].getObjectByProperty(t,e);if(void" void=""
  target="" is="" now="" e="this.children;for(let" n=
  "0,i=e.length;n"><s s="e[r],a=this.morphTargetsRelative;for(let"
  e="0,r=s.count;e"><u><i s="n+2;;){if(void">=r)break t;{const
  a=e[1];t<a s="n-2;;){if(void" this._cachedindex=
  "0,this.beforeStart_(0,t,i);if(n===s)break;if(i=r,r=e[--n-1],t">=r)break
  e}s=n,n=0}}for(;n<s i=
  "n+s">&gt;&gt;1;te;)--s;if(++s,0!==r||s!==i){r&gt;=s&amp;&amp;(s=Math.max(s,1),r=s-1);const
  t=this.getValueSize();this.times=Vo.arraySlice(n,r,s),this.values=Vo.arraySlice(this.values,r*t,s*t)}return
  this}validate(){let t=!0;const
  e=this.getValueSize();e-Math.floor(e)!=0&amp;&amp;(console.error("THREE.KeyframeTrack:
  Invalid value size in track.",this),t=!1);const
  n=this.times,i=this.values,r=n.length;0===r&amp;&amp;(console.error("THREE.KeyframeTrack:
  Track is empty.",this),t=!1);let s=null;for(let
  e=0;e!==r;e++){const i=n[e];if("number"==typeof
  i&amp;&amp;isNaN(i)){console.error("THREE.KeyframeTrack: Time is
  not a valid
  number.",this,e,i),t=!1;break}if(null!==s&amp;&amp;s&gt;i){console.error("THREE.KeyframeTrack:
  Out of order keys.",this,e,i,s),t=!1;break}s=i}if(void
  0!==i&amp;&amp;Vo.isTypedArray(i))for(let
  e=0,n=i.length;e!==n;++e){const
  n=i[e];if(isNaN(n)){console.error("THREE.KeyframeTrack: Value is
  not a valid number.",this,e,n),t=!1;break}}return
  t}optimize(){const
  t=Vo.arraySlice(this.times),e=Vo.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===U,r=t.length-1;let
  s=1;for(let a=1;a0){t[s]=t[r];for(let
  t=r*n,i=s*n,a=0;a!==n;++a)e[i+a]=e[t+a];++s}return
  s!==t.length?(this.times=Vo.arraySlice(t,0,s),this.values=Vo.arraySlice(e,0,s*n)):(this.times=t,this.values=e),this}clone(){const
  t=Vo.arraySlice(this.times,0),e=Vo.arraySlice(this.values,0),n=new(0,this.constructor)(this.name,t,e);return
  n.createInterpolant=this.createInterpolant,n}}Yo.prototype.TimeBufferType=Float32Array,Yo.prototype.ValueBufferType=Float32Array,Yo.prototype.DefaultInterpolation=G;class
  Zo extends
  Yo{}Zo.prototype.ValueTypeName="bool",Zo.prototype.ValueBufferType=Array,Zo.prototype.DefaultInterpolation=H,Zo.prototype.InterpolantFactoryMethodLinear=void
  0,Zo.prototype.InterpolantFactoryMethodSmooth=void 0;class Jo
  extends Yo{}Jo.prototype.ValueTypeName="color";class Qo extends
  Yo{}Qo.prototype.ValueTypeName="number";class Ko extends
  Wo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const
  r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e);let
  l=t*a;for(let
  t=l+a;l!==t;l+=4)At.slerpFlat(r,0,s,l-a,s,l,o);return r}}class $o
  extends Yo{InterpolantFactoryMethodLinear(t){return new
  Ko(this.times,this.values,this.getValueSize(),t)}}$o.prototype.ValueTypeName="quaternion",$o.prototype.DefaultInterpolation=G,$o.prototype.InterpolantFactoryMethodSmooth=void
  0;class tl extends
  Yo{}tl.prototype.ValueTypeName="string",tl.prototype.ValueBufferType=Array,tl.prototype.DefaultInterpolation=H,tl.prototype.InterpolantFactoryMethodLinear=void
  0,tl.prototype.InterpolantFactoryMethodSmooth=void 0;class el
  extends Yo{}el.prototype.ValueTypeName="vector";class
  nl{constructor(t,e=-1,n,i=2500){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=ct(),this.duration&lt;0&amp;&amp;this.resetDuration()}static
  parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let
  t=0,r=n.length;t!==r;++t)e.push(il(n[t]).scale(i));const r=new
  this(t.name,t.duration,e,t.blendMode);return
  r.uuid=t.uuid,r}static toJSON(t){const
  e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let
  t=0,i=n.length;t!==i;++t)e.push(Yo.toJSON(n[t]));return i}static
  CreateFromMorphTargetSequence(t,e,n,i){const
  r=e.length,s=[];for(let t=0;t1){const t=s[1];let
  e=i[t];e||(i[t]=e=[]),e.push(n)}}const s=[];for(const t in
  i)s.push(this.CreateFromMorphTargetSequence(t,i[t],e,n));return
  s}static parseAnimation(t,e){if(!t)return
  console.error("THREE.AnimationClip: No animation in JSONLoader
  data."),null;const n=function(t,e,n,i,r){if(0!==n.length){const
  s=[],a=[];Vo.flattenJSON(n,s,a,i),0!==s.length&amp;&amp;r.push(new
  t(e,s,a))}},i=[],r=t.name||"default",s=t.fps||30,a=t.blendMode;let
  o=t.length||-1;const l=t.hierarchy||[];for(let t=0;t<i i=
  "n[t];i.onProgress&amp;&amp;i.onProgress(e)}}),!1),o.addEventListener(&quot;error&quot;,(function(e){const"
  n="ll[t];delete" t=
  "0,i=n.length;t">0||0===t.search(/^data\:image\/jpeg/);r.format=i?T:E,r.needsUpdate=!0,void
  0!==e&amp;&amp;e(r)}),n,i),r}}class
  ml{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return
  console.warn("THREE.Curve: .getPoint() not
  implemented."),null}getPointAt(t,e){const
  n=this.getUtoTmapping(t);return
  this.getPoint(n,e)}getPoints(t=5){const e=[];for(let
  n=0;n&lt;=t;n++)e.push(this.getPoint(n/t));return
  e}getSpacedPoints(t=5){const e=[];for(let
  n=0;n&lt;=t;n++)e.push(this.getPointAt(n/t));return
  e}getLength(){const t=this.getLengths();return
  t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&amp;&amp;this.cacheArcLengths.length===t+1&amp;&amp;!this.needsUpdate)return
  this.cacheArcLengths;this.needsUpdate=!1;const e=[];let
  n,i=this.getPoint(0),r=0;e.push(0);for(let
  s=1;s&lt;=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n;return
  this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const
  n=this.getLengths();let i=0;const r=n.length;let
  s;s=e||t*n[r-1];let
  a,o=0,l=r-1;for(;o&lt;=l;)if(i=Math.floor(o+(l-o)/2),a=n[i]-s,a&lt;0)o=i+1;else{if(!(a&gt;0)){l=i;break}l=i-1}if(i=l,n[i]===s)return
  i/(r-1);const
  c=n[i];return(i+(s-c)/(n[i+1]-c))/(r-1)}getTangent(t,e){const
  n=1e-4;let
  i=t-n,r=t+n;i&lt;0&amp;&amp;(i=0),r&gt;1&amp;&amp;(r=1);const
  s=this.getPoint(i),a=this.getPoint(r),o=e||(s.isVector2?new
  vt:new Lt);return
  o.copy(a).sub(s).normalize(),o}getTangentAt(t,e){const
  n=this.getUtoTmapping(t);return
  this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new
  Lt,i=[],r=[],s=[],a=new Lt,o=new se;for(let
  e=0;e&lt;=t;e++){const n=e/t;i[e]=this.getTangentAt(n,new
  Lt),i[e].normalize()}r[0]=new Lt,s[0]=new Lt;let
  l=Number.MAX_VALUE;const
  c=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);c&lt;=l&amp;&amp;(l=c,n.set(1,0,0)),h&lt;=l&amp;&amp;(l=h,n.set(0,1,0)),u&lt;=l&amp;&amp;n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),s[0].crossVectors(i[0],r[0]);for(let
  e=1;e&lt;=t;e++){if(r[e]=r[e-1].clone(),s[e]=s[e-1].clone(),a.crossVectors(i[e-1],i[e]),a.length()&gt;Number.EPSILON){a.normalize();const
  t=Math.acos(ht(i[e-1].dot(i[e]),-1,1));r[e].applyMatrix4(o.makeRotationAxis(a,t))}s[e].crossVectors(i[e],r[e])}if(!0===e){let
  e=Math.acos(ht(r[0].dot(r[t]),-1,1));e/=t,i[0].dot(a.crossVectors(r[0],r[t]))&gt;0&amp;&amp;(e=-e);for(let
  n=1;n&lt;=t;n++)r[n].applyMatrix4(o.makeRotationAxis(i[n],e*n)),s[n].crossVectors(i[n],r[n])}return{tangents:i,normals:r,binormals:s}}clone(){return(new
  this.constructor).copy(this)}copy(t){return
  this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const
  t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return
  t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return
  this.arcLengthDivisions=t.arcLengthDivisions,this}}class fl
  extends
  ml{constructor(t=0,e=0,n=1,i=1,r=0,s=2*Math.PI,a=!1,o=0){super(),this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=o}getPoint(t,e){const
  n=e||new vt,i=2*Math.PI;let
  r=this.aEndAngle-this.aStartAngle;const
  s=Math.abs(r)&lt;0;)r+=i;for(;r&gt;i;)r-=i;r0?0:(Math.floor(Math.abs(l)/r)+1)*r:0===c&amp;&amp;l===r-1&amp;&amp;(l=r-2,c=1),this.closed||l&gt;0?a=i[(l-1)%r]:(yl.subVectors(i[0],i[1]).add(i[0]),a=yl);const
  h=i[l%r],u=i[(l+1)%r];if(this.closed||l+2&lt;1e-4&amp;&amp;(n=1),e&lt;1e-4&amp;&amp;(e=n),i&lt;1e-4&amp;&amp;(i=n),xl.initNonuniformCatmullRom(a.x,h.x,u.x,o.x,e,n,i),_l.initNonuniformCatmullRom(a.y,h.y,u.y,o.y,e,n,i),wl.initNonuniformCatmullRom(a.z,h.z,u.z,o.z,e,n,i)}else"catmullrom"===this.curveType&amp;&amp;(xl.initCatmullRom(a.x,h.x,u.x,o.x,this.tension),_l.initCatmullRom(a.y,h.y,u.y,o.y,this.tension),wl.initCatmullRom(a.z,h.z,u.z,o.z,this.tension));return
  n.set(xl.calc(c),_l.calc(c),wl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let
  e=0,n=t.points.length;ei.length-2?i.length-1:s+1],h=i[s&gt;i.length-3?i.length-1:s+2];return
  n.set(Ml(a,o.x,l.x,c.x,h.x),Ml(a,o.y,l.y,c.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let
  e=0,n=t.points.length;e=e){const
  t=n[i]-e,r=this.curves[i],s=r.getLength(),a=0===s?0:1-t/s;return
  r.getPointAt(a)}i++}return null}getLength(){const
  t=this.getCurveLengths();return
  t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&amp;&amp;this.cacheLengths.length===this.curves.length)return
  this.cacheLengths;const t=[];let e=0;for(let
  n=0,i=this.curves.length;n&lt;=t;n++)e.push(this.getPoint(n/t));return
  this.autoClose&amp;&amp;e.push(e[0]),e}getPoints(t=12){const
  e=[];let n;for(let
  i=0,r=this.curves;i1&amp;&amp;!e[e.length-1].equals(e[0])&amp;&amp;e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let
  e=0,n=t.curves.length;e0){const
  t=l.getPoint(0);t.equals(this.currentPoint)||this.lineTo(t.x,t.y)}this.curves.push(l);const
  c=l.getPoint(1);return
  this.currentPoint.copy(c),this}copy(t){return
  super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const
  t=super.toJSON();return
  t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return
  super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class
  zl extends
  Bl{constructor(t){super(t),this.uuid=ct(),this.type="Shape",this.holes=[]}getPointsHoles(t){const
  e=[];for(let
  n=0,i=this.holes.length;n&lt;9;t++)this.coefficients.push(new
  Lt)}set(t){for(let
  e=0;e&lt;9;e++)this.coefficients[e].copy(t[e]);return
  this}zero(){for(let
  t=0;t&lt;9;t++)this.coefficients[t].set(0,0,0);return
  this}getAt(t,e){const
  n=t.x,i=t.y,r=t.z,s=this.coefficients;return
  e.copy(s[0]).multiplyScalar(.282095),e.addScaledVector(s[1],.488603*i),e.addScaledVector(s[2],.488603*r),e.addScaledVector(s[3],.488603*n),e.addScaledVector(s[4],n*i*1.092548),e.addScaledVector(s[5],i*r*1.092548),e.addScaledVector(s[6],.315392*(3*r*r-1)),e.addScaledVector(s[7],n*r*1.092548),e.addScaledVector(s[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const
  n=t.x,i=t.y,r=t.z,s=this.coefficients;return
  e.copy(s[0]).multiplyScalar(.886227),e.addScaledVector(s[1],1.023328*i),e.addScaledVector(s[2],1.023328*r),e.addScaledVector(s[3],1.023328*n),e.addScaledVector(s[4],.858086*n*i),e.addScaledVector(s[5],.858086*i*r),e.addScaledVector(s[6],.743125*r*r-.247708),e.addScaledVector(s[7],.858086*n*r),e.addScaledVector(s[8],.429043*(n*n-i*i)),e}add(t){for(let
  e=0;e&lt;9;e++)this.coefficients[e].add(t.coefficients[e]);return
  this}addScaledSH(t,e){for(let
  n=0;n&lt;9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return
  this}scale(t){for(let
  e=0;e&lt;9;e++)this.coefficients[e].multiplyScalar(t);return
  this}lerp(t,e){for(let
  n=0;n&lt;9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return
  this}equals(t){for(let
  e=0;e&lt;9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return
  this.set(t.coefficients)}clone(){return(new
  this.constructor).copy(this)}fromArray(t,e=0){const
  n=this.coefficients;for(let
  i=0;i&lt;9;i++)n[i].fromArray(t,e+3*i);return
  this}toArray(t=[],e=0){const n=this.coefficients;for(let
  i=0;i&lt;9;i++)n[i].toArray(t,e+3*i);return t}static
  getBasisAt(t,e){const
  n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}ec.prototype.isSphericalHarmonics3=!0;class
  nc extends Fl{constructor(t=new ec,e=1){super(void
  0,e),this.sh=t}copy(t){return
  super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return
  this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const
  e=super.toJSON(t);return
  e.object.sh=this.sh.toArray(),e}}nc.prototype.isLightProbe=!0;class
  ic extends
  ol{constructor(t){super(t),this.textures={}}load(t,e,n,i){const
  r=this,s=new
  cl(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,(function(n){try{e(r.parse(JSON.parse(n)))}catch(e){i?i(e):console.error(e),r.manager.itemError(t)}}),n,i)}parse(t){const
  e=this.textures;function n(t){return void
  0===e[t]&amp;&amp;console.warn("THREE.MaterialLoader: Undefined
  texture",t),e[t]}const i=new ko[t.type];if(void
  0!==t.uuid&amp;&amp;(i.uuid=t.uuid),void
  0!==t.name&amp;&amp;(i.name=t.name),void
  0!==t.color&amp;&amp;void
  0!==i.color&amp;&amp;i.color.setHex(t.color),void
  0!==t.roughness&amp;&amp;(i.roughness=t.roughness),void
  0!==t.metalness&amp;&amp;(i.metalness=t.metalness),void
  0!==t.sheen&amp;&amp;(i.sheen=(new tn).setHex(t.sheen)),void
  0!==t.emissive&amp;&amp;void
  0!==i.emissive&amp;&amp;i.emissive.setHex(t.emissive),void
  0!==t.specular&amp;&amp;void
  0!==i.specular&amp;&amp;i.specular.setHex(t.specular),void
  0!==t.shininess&amp;&amp;(i.shininess=t.shininess),void
  0!==t.clearcoat&amp;&amp;(i.clearcoat=t.clearcoat),void
  0!==t.clearcoatRoughness&amp;&amp;(i.clearcoatRoughness=t.clearcoatRoughness),void
  0!==t.fog&amp;&amp;(i.fog=t.fog),void
  0!==t.flatShading&amp;&amp;(i.flatShading=t.flatShading),void
  0!==t.blending&amp;&amp;(i.blending=t.blending),void
  0!==t.combine&amp;&amp;(i.combine=t.combine),void
  0!==t.side&amp;&amp;(i.side=t.side),void
  0!==t.shadowSide&amp;&amp;(i.shadowSide=t.shadowSide),void
  0!==t.opacity&amp;&amp;(i.opacity=t.opacity),void
  0!==t.transparent&amp;&amp;(i.transparent=t.transparent),void
  0!==t.alphaTest&amp;&amp;(i.alphaTest=t.alphaTest),void
  0!==t.depthTest&amp;&amp;(i.depthTest=t.depthTest),void
  0!==t.depthWrite&amp;&amp;(i.depthWrite=t.depthWrite),void
  0!==t.colorWrite&amp;&amp;(i.colorWrite=t.colorWrite),void
  0!==t.stencilWrite&amp;&amp;(i.stencilWrite=t.stencilWrite),void
  0!==t.stencilWriteMask&amp;&amp;(i.stencilWriteMask=t.stencilWriteMask),void
  0!==t.stencilFunc&amp;&amp;(i.stencilFunc=t.stencilFunc),void
  0!==t.stencilRef&amp;&amp;(i.stencilRef=t.stencilRef),void
  0!==t.stencilFuncMask&amp;&amp;(i.stencilFuncMask=t.stencilFuncMask),void
  0!==t.stencilFail&amp;&amp;(i.stencilFail=t.stencilFail),void
  0!==t.stencilZFail&amp;&amp;(i.stencilZFail=t.stencilZFail),void
  0!==t.stencilZPass&amp;&amp;(i.stencilZPass=t.stencilZPass),void
  0!==t.wireframe&amp;&amp;(i.wireframe=t.wireframe),void
  0!==t.wireframeLinewidth&amp;&amp;(i.wireframeLinewidth=t.wireframeLinewidth),void
  0!==t.wireframeLinecap&amp;&amp;(i.wireframeLinecap=t.wireframeLinecap),void
  0!==t.wireframeLinejoin&amp;&amp;(i.wireframeLinejoin=t.wireframeLinejoin),void
  0!==t.rotation&amp;&amp;(i.rotation=t.rotation),1!==t.linewidth&amp;&amp;(i.linewidth=t.linewidth),void
  0!==t.dashSize&amp;&amp;(i.dashSize=t.dashSize),void
  0!==t.gapSize&amp;&amp;(i.gapSize=t.gapSize),void
  0!==t.scale&amp;&amp;(i.scale=t.scale),void
  0!==t.polygonOffset&amp;&amp;(i.polygonOffset=t.polygonOffset),void
  0!==t.polygonOffsetFactor&amp;&amp;(i.polygonOffsetFactor=t.polygonOffsetFactor),void
  0!==t.polygonOffsetUnits&amp;&amp;(i.polygonOffsetUnits=t.polygonOffsetUnits),void
  0!==t.skinning&amp;&amp;(i.skinning=t.skinning),void
  0!==t.morphTargets&amp;&amp;(i.morphTargets=t.morphTargets),void
  0!==t.morphNormals&amp;&amp;(i.morphNormals=t.morphNormals),void
  0!==t.dithering&amp;&amp;(i.dithering=t.dithering),void
  0!==t.alphaToCoverage&amp;&amp;(i.alphaToCoverage=t.alphaToCoverage),void
  0!==t.premultipliedAlpha&amp;&amp;(i.premultipliedAlpha=t.premultipliedAlpha),void
  0!==t.vertexTangents&amp;&amp;(i.vertexTangents=t.vertexTangents),void
  0!==t.visible&amp;&amp;(i.visible=t.visible),void
  0!==t.toneMapped&amp;&amp;(i.toneMapped=t.toneMapped),void
  0!==t.userData&amp;&amp;(i.userData=t.userData),void
  0!==t.vertexColors&amp;&amp;("number"==typeof
  t.vertexColors?i.vertexColors=t.vertexColors&gt;0:i.vertexColors=t.vertexColors),void
  0!==t.uniforms)for(const e in t.uniforms){const
  r=t.uniforms[e];switch(i.uniforms[e]={},r.type){case"t":i.uniforms[e].value=n(r.value);break;case"c":i.uniforms[e].value=(new
  tn).setHex(r.value);break;case"v2":i.uniforms[e].value=(new
  vt).fromArray(r.value);break;case"v3":i.uniforms[e].value=(new
  Lt).fromArray(r.value);break;case"v4":i.uniforms[e].value=(new
  St).fromArray(r.value);break;case"m3":i.uniforms[e].value=(new
  yt).fromArray(r.value);break;case"m4":i.uniforms[e].value=(new
  se).fromArray(r.value);break;default:i.uniforms[e].value=r.value}}if(void
  0!==t.defines&amp;&amp;(i.defines=t.defines),void
  0!==t.vertexShader&amp;&amp;(i.vertexShader=t.vertexShader),void
  0!==t.fragmentShader&amp;&amp;(i.fragmentShader=t.fragmentShader),void
  0!==t.extensions)for(const e in
  t.extensions)i.extensions[e]=t.extensions[e];if(void
  0!==t.shading&amp;&amp;(i.flatShading=1===t.shading),void
  0!==t.size&amp;&amp;(i.size=t.size),void
  0!==t.sizeAttenuation&amp;&amp;(i.sizeAttenuation=t.sizeAttenuation),void
  0!==t.map&amp;&amp;(i.map=n(t.map)),void
  0!==t.matcap&amp;&amp;(i.matcap=n(t.matcap)),void
  0!==t.alphaMap&amp;&amp;(i.alphaMap=n(t.alphaMap)),void
  0!==t.bumpMap&amp;&amp;(i.bumpMap=n(t.bumpMap)),void
  0!==t.bumpScale&amp;&amp;(i.bumpScale=t.bumpScale),void
  0!==t.normalMap&amp;&amp;(i.normalMap=n(t.normalMap)),void
  0!==t.normalMapType&amp;&amp;(i.normalMapType=t.normalMapType),void
  0!==t.normalScale){let
  e=t.normalScale;!1===Array.isArray(e)&amp;&amp;(e=[e,e]),i.normalScale=(new
  vt).fromArray(e)}return void
  0!==t.displacementMap&amp;&amp;(i.displacementMap=n(t.displacementMap)),void
  0!==t.displacementScale&amp;&amp;(i.displacementScale=t.displacementScale),void
  0!==t.displacementBias&amp;&amp;(i.displacementBias=t.displacementBias),void
  0!==t.roughnessMap&amp;&amp;(i.roughnessMap=n(t.roughnessMap)),void
  0!==t.metalnessMap&amp;&amp;(i.metalnessMap=n(t.metalnessMap)),void
  0!==t.emissiveMap&amp;&amp;(i.emissiveMap=n(t.emissiveMap)),void
  0!==t.emissiveIntensity&amp;&amp;(i.emissiveIntensity=t.emissiveIntensity),void
  0!==t.specularMap&amp;&amp;(i.specularMap=n(t.specularMap)),void
  0!==t.envMap&amp;&amp;(i.envMap=n(t.envMap)),void
  0!==t.envMapIntensity&amp;&amp;(i.envMapIntensity=t.envMapIntensity),void
  0!==t.reflectivity&amp;&amp;(i.reflectivity=t.reflectivity),void
  0!==t.refractionRatio&amp;&amp;(i.refractionRatio=t.refractionRatio),void
  0!==t.lightMap&amp;&amp;(i.lightMap=n(t.lightMap)),void
  0!==t.lightMapIntensity&amp;&amp;(i.lightMapIntensity=t.lightMapIntensity),void
  0!==t.aoMap&amp;&amp;(i.aoMap=n(t.aoMap)),void
  0!==t.aoMapIntensity&amp;&amp;(i.aoMapIntensity=t.aoMapIntensity),void
  0!==t.gradientMap&amp;&amp;(i.gradientMap=n(t.gradientMap)),void
  0!==t.clearcoatMap&amp;&amp;(i.clearcoatMap=n(t.clearcoatMap)),void
  0!==t.clearcoatRoughnessMap&amp;&amp;(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),void
  0!==t.clearcoatNormalMap&amp;&amp;(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),void
  0!==t.clearcoatNormalScale&amp;&amp;(i.clearcoatNormalScale=(new
  vt).fromArray(t.clearcoatNormalScale)),void
  0!==t.transmission&amp;&amp;(i.transmission=t.transmission),void
  0!==t.transmissionMap&amp;&amp;(i.transmissionMap=n(t.transmissionMap)),i}setTextures(t){return
  this.textures=t,this}}class rc{static
  decodeText(t){if("undefined"!=typeof TextDecoder)return(new
  TextDecoder).decode(t);let e="";for(let
  n=0,i=t.length;nNumber.EPSILON){if(l&lt;0&amp;&amp;(n=e[s],o=-o,a=e[r],l=-l),t.ya.y)continue;if(t.y===n.y){if(t.x===n.x)return!0}else{const
  e=l*(t.x-n.x)-o*(t.y-n.y);if(0===e)return!0;if(e&lt;0)continue;i=!i}}else{if(t.y!==n.y)continue;if(a.x&lt;=t.x&amp;&amp;t.x&lt;=n.x||n.x&lt;=t.x&amp;&amp;t.x&lt;=a.x)return!0}}return
  i}const
  r=po.isClockWise,s=this.subPaths;if(0===s.length)return[];if(!0===e)return
  n(s);let a,o,l;const c=[];if(1===s.length)return o=s[0],l=new
  zl,l.curves=o.curves,c.push(l),c;let
  h=!r(s[0].getPoints());h=t?!h:h;const u=[],d=[];let
  p,m,f=[],g=0;d[g]=void 0,f[g]=[];for(let e=0,n=s.length;e1){let
  t=!1;const e=[];for(let
  t=0,e=d.length;t0&amp;&amp;(t||(f=u))}for(let
  t=0,e=d.length;t<s gc="{getContext:function(){return" vc="" r=
  "this,s=new" yc="" i="(new" xc="" n="(new" t=
  "0;if(this.autoStart&amp;&amp;!this.running)return" sc="new" lc=
  "" extends="" this.hasplaybackcontrol=
  "!1,this.sourceType=&quot;mediaStreamNode&quot;,this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return"
  this.buffer=
  "t,this.sourceType=&quot;buffer&quot;,this.autoplay&amp;&amp;this.play(),this}play(t=0){if(!0===this.isPlaying)return"
  is="" already="" void="" e=
  "this.context.createBufferSource();return" e.buffer=
  "this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(!1!==this.hasPlaybackControl)return!0===this.isPlaying&amp;&amp;(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,!0===this.loop&amp;&amp;(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;console.warn(&quot;THREE.Audio:"
  this._progress=
  "0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this;console.warn(&quot;THREE.Audio:"
  this="" audio="" has="" no="" playback=
  "">0){this.source.connect(this.filters[0]);for(let
  t=1,e=this.filters.length;t0){this.source.disconnect(this.filters[0]);for(let
  t=1,e=this.filters.length;t&lt;1){const
  t=e*this._origIndex;this._mixBufferRegion(n,i,t,1-r,e)}s&gt;0&amp;&amp;this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let
  t=e,r=e+e;t!==r;++t)if(n[t]!==n[t+e]){a.setValue(n,i);break}}saveOriginalState(){const
  t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let
  t=n,r=i;t!==r;++t)e[t]=e[i+t%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const
  t=3*this.valueSize;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const
  t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let
  n=t;n=.5)for(let
  i=0;i!==r;++i)t[e+i]=t[n+i]}_slerp(t,e,n,i){At.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const
  s=this._workIndex*r;At.multiplyQuaternionsFlat(t,s,t,e,t,n),At.slerpFlat(t,e,t,e,t,s,i)}_lerp(t,e,n,i,r){const
  s=1-i;for(let a=0;a!==r;++a){const
  r=e+a;t[r]=t[r]*s+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let
  s=0;s!==r;++s){const r=e+s;t[r]=t[r]+t[n+s]*i}}}const
  Bc="\\[\\]\\.:\\/",zc=new
  RegExp("[\\[\\]\\.:\\/]","g"),Fc="[^\\[\\]\\.:\\/]",Oc="[^"+Bc.replace("\\.","")+"]",Hc=/((?:WC+[\/:])*)/.source.replace("WC",Fc),Gc=/(WCOD+)?/.source.replace("WCOD",Oc),Uc=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fc),kc=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fc),Vc=new
  RegExp("^"+Hc+Gc+Uc+kc+"$"),Wc=["material","materials","bones"];class
  jc{constructor(t,e,n){this.path=e,this.parsedPath=n||jc.parseTrackName(e),this.node=jc.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static
  create(t,e,n){return t&amp;&amp;t.isAnimationObjectGroup?new
  jc.Composite(t,e,n):new jc(t,e,n)}static
  sanitizeNodeName(t){return
  t.replace(/\s/g,"_").replace(zc,"")}static
  parseTrackName(t){const e=Vc.exec(t);if(!e)throw new
  Error("PropertyBinding: Cannot parse trackName: "+t);const
  n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&amp;&amp;n.nodeName.lastIndexOf(".");if(void
  0!==i&amp;&amp;-1!==i){const
  t=n.nodeName.substring(i+1);-1!==Wc.indexOf(t)&amp;&amp;(n.nodeName=n.nodeName.substring(0,i),n.objectName=t)}if(null===n.propertyName||0===n.propertyName.length)throw
  new Error("PropertyBinding: can not parse propertyName from
  trackName: "+t);return n}static
  findNode(t,e){if(!e||""===e||"."===e||-1===e||e===t.name||e===t.uuid)return
  t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(void
  0!==n)return n}if(t.children){const n=function(t){for(let
  i=0;i=r){const
  s=r++,c=t[s];e[c.uuid]=l,t[l]=c,e[o]=s,t[s]=a;for(let
  t=0,e=i;t!==e;++t){const
  e=n[t],i=e[s],r=e[l];e[l]=i,e[s]=r}}}this.nCachedObjects_=r}uncache(){const
  t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let
  r=this.nCachedObjects_,s=t.length;for(let
  a=0,o=arguments.length;a!==o;++a){const
  o=arguments[a].uuid,l=e[o];if(void 0!==l)if(delete
  e[o],l0&amp;&amp;(e[a.uuid]=l),t[l]=a,t.pop();for(let
  t=0,e=i;t!==e;++t){const
  e=n[t];e[l]=e[r],e.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){const
  n=this._bindingsIndicesByPath;let i=n[t];const
  r=this._bindings;if(void 0!==i)return r[i];const
  s=this._paths,a=this._parsedPaths,o=this._objects,l=o.length,c=this.nCachedObjects_,h=new
  Array(l);i=r.length,n[t]=i,s.push(t),a.push(e),r.push(h);for(let
  n=c,i=o.length;n!==i;++n){const i=o[n];h[n]=new jc(i,t,e)}return
  h}unsubscribe_(t){const
  e=this._bindingsIndicesByPath,n=e[t];if(void 0!==n){const
  i=this._paths,r=this._parsedPaths,s=this._bindings,a=s.length-1,o=s[a];e[t[a]]=n,s[n]=o,s.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}}qc.prototype.isAnimationObjectGroup=!0;class
  Xc{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const
  r=e.tracks,s=r.length,a=new
  Array(s),o={endingStart:k,endingEnd:k};for(let
  t=0;t!==s;++t){const
  e=r[t].createInterpolant(null);a[t]=e,e.settings=o}this._interpolantSettings=o,this._interpolants=a,this._propertyBindings=new
  Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return
  this._mixer._activateAction(this),this}stop(){return
  this._mixer._deactivateAction(this),this.reset()}reset(){return
  this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return
  this.enabled&amp;&amp;!this.paused&amp;&amp;0!==this.timeScale&amp;&amp;null===this._startTime&amp;&amp;this._mixer._isActiveAction(this)}isScheduled(){return
  this._mixer._isActiveAction(this)}startAt(t){return
  this._startTime=t,this}setLoop(t,e){return
  this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return
  this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return
  this._effectiveWeight}fadeIn(t){return
  this._scheduleFading(t,0,1)}fadeOut(t){return
  this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const
  n=this._clip.duration,i=t._clip.duration,r=i/n,s=n/i;t.warp(1,r,e),this.warp(s,1,e)}return
  this}crossFadeTo(t,e,n){return
  t.crossFadeFrom(this,e,n)}stopFading(){const
  t=this._weightInterpolant;return
  null!==t&amp;&amp;(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return
  this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return
  this._effectiveTimeScale}setDuration(t){return
  this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return
  this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return
  this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const
  i=this._mixer,r=i.time,s=this.timeScale;let
  a=this._timeScaleInterpolant;null===a&amp;&amp;(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const
  o=a.parameterPositions,l=a.sampleValues;return
  o[0]=r,o[1]=r+n,l[0]=t/s,l[1]=e/s,this}stopWarping(){const
  t=this._timeScaleInterpolant;return
  null!==t&amp;&amp;(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return
  this._mixer}getClip(){return this._clip}getRoot(){return
  this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled)return
  void this._updateWeight(t);const
  r=this._startTime;if(null!==r){const
  i=(t-r)*n;if(i&lt;0||0===n)return;this._startTime=null,e=n*i}e*=this._updateTimeScale(t);const
  s=this._updateTime(e),a=this._updateWeight(t);if(a&gt;0){const
  t=this._interpolants,e=this._propertyBindings;switch(this.blendMode){case
  q:for(let
  n=0,i=t.length;n!==i;++n)t[n].evaluate(s),e[n].accumulateAdditive(a);break;case
  j:default:for(let
  n=0,r=t.length;n!==r;++n)t[n].evaluate(s),e[n].accumulate(i,a)}}}_updateWeight(t){let
  e=0;if(this.enabled){e=this.weight;const
  n=this._weightInterpolant;if(null!==n){const
  i=n.evaluate(t)[0];e*=i,t&gt;n.parameterPositions[1]&amp;&amp;(this.stopFading(),0===i&amp;&amp;(this.enabled=!1))}}return
  this._effectiveWeight=e,e}_updateTimeScale(t){let
  e=0;if(!this.paused){e=this.timeScale;const
  n=this._timeScaleInterpolant;if(null!==n){e*=n.evaluate(t)[0],t&gt;n.parameterPositions[1]&amp;&amp;(this.stopWarping(),0===e?this.paused=!0:this.timeScale=e)}}return
  this._effectiveTimeScale=e,e}_updateTime(t){const
  e=this._clip.duration,n=this.loop;let
  i=this.time+t,r=this._loopCount;const
  s=2202===n;if(0===t)return-1===r?i:s&amp;&amp;1==(1&amp;r)?e-i:i;if(2200===n){-1===r&amp;&amp;(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i&gt;=e)i=e;else{if(!(i&lt;0)){this.time=i;break
  t}i=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t&lt;0?-1:1})}}else{if(-1===r&amp;&amp;(t&gt;=0?(r=0,this._setEndings(!0,0===this.repetitions,s)):this._setEndings(0===this.repetitions,!0,s)),i&gt;=e||i&lt;0){const
  n=Math.floor(i/e);i-=e*n,r+=Math.abs(n);const
  a=this.repetitions-r;if(a&lt;=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t&gt;0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t&gt;0?1:-1});else{if(1===a){const
  e=t&lt;0;this._setEndings(e,!e,s)}else
  this._setEndings(!1,!1,s);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:n})}}else
  this.time=i;if(s&amp;&amp;1==(1&amp;r))return e-i}return
  i}_setEndings(t,e,n){const
  i=this._interpolantSettings;n?(i.endingStart=V,i.endingEnd=V):(i.endingStart=t?this.zeroSlopeAtStart?V:k:W,i.endingEnd=e?this.zeroSlopeAtEnd?V:k:W)}_scheduleFading(t,e,n){const
  i=this._mixer,r=i.time;let
  s=this._weightInterpolant;null===s&amp;&amp;(s=i._lendControlInterpolant(),this._weightInterpolant=s);const
  a=s.parameterPositions,o=s.sampleValues;return
  a[0]=r,o[0]=e,a[1]=r+t,o[1]=n,this}}class Yc extends
  rt{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const
  n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,s=t._propertyBindings,a=t._interpolants,o=n.uuid,l=this._bindingsByRootAndName;let
  c=l[o];void 0===c&amp;&amp;(c={},l[o]=c);for(let
  t=0;t!==r;++t){const r=i[t],l=r.name;let h=c[l];if(void
  0!==h)s[t]=h;else{if(h=s[t],void
  0!==h){null===h._cacheIndex&amp;&amp;(++h.referenceCount,this._addInactiveBinding(h,o,l));continue}const
  i=e&amp;&amp;e._propertyBindings[t].binding.parsedPath;h=new
  Nc(jc.create(n,l,i),r.ValueTypeName,r.getValueSize()),++h.referenceCount,this._addInactiveBinding(h,o,l),s[t]=h}a[t].resultBuffer=h.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(null===t._cacheIndex){const
  e=(t._localRoot||this._root).uuid,n=t._clip.uuid,i=this._actionsByClip[n];this._bindAction(t,i&amp;&amp;i.knownActions[0]),this._addInactiveAction(t,n,e)}const
  e=t._propertyBindings;for(let t=0,n=e.length;t!==n;++t){const
  n=e[t];0==n.useCount++&amp;&amp;(this._lendBinding(n),n.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const
  e=t._propertyBindings;for(let t=0,n=e.length;t!==n;++t){const
  n=e[t];0==--n.useCount&amp;&amp;(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const
  t=this;this.stats={actions:{get total(){return
  t._actions.length},get inUse(){return
  t._nActiveActions}},bindings:{get total(){return
  t._bindings.length},get inUse(){return
  t._nActiveBindings}},controlInterpolants:{get total(){return
  t._controlInterpolants.length},get inUse(){return
  t._nActiveControlInterpolants}}}}_isActiveAction(t){const
  e=t._cacheIndex;return
  null!==e&amp;&amp;e=0;--e)t[e].stop();return
  this}update(t){t*=this.timeScale;const
  e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),s=this._accuIndex^=1;for(let
  a=0;a!==n;++a){e[a]._update(i,t,r,s)}const
  a=this._bindings,o=this._nActiveBindings;for(let
  t=0;t!==o;++t)a[t].apply(s);return
  this}setTime(t){this.time=0;for(let
  t=0;tthis.max.x||t.ythis.max.y)}containsBox(t){return
  this.min.x&lt;=t.min.x&amp;&amp;t.max.x&lt;=this.max.x&amp;&amp;this.min.y&lt;=t.min.y&amp;&amp;t.max.y&lt;=this.max.y}getParameter(t,e){return
  void 0===e&amp;&amp;(console.warn("THREE.Box2: .getParameter()
  target is now required"),e=new
  vt),e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.xthis.max.x||t.max.ythis.max.y)}clampPoint(t,e){return
  void 0===e&amp;&amp;(console.warn("THREE.Box2: .clampPoint()
  target is now required"),e=new
  vt),e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return
  th.copy(t).clamp(this.min,this.max).sub(t).length()}intersect(t){return
  this.min.max(t.min),this.max.min(t.max),this}union(t){return
  this.min.min(t.min),this.max.max(t.max),this}translate(t){return
  this.min.add(t),this.max.add(t),this}equals(t){return
  t.min.equals(this.min)&amp;&amp;t.max.equals(this.max)}}eh.prototype.isBox2=!0;const
  nh=new Lt,ih=new Lt;class rh{constructor(t=new Lt,e=new
  Lt){this.start=t,this.end=e}set(t,e){return
  this.start.copy(t),this.end.copy(e),this}copy(t){return
  this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return
  void 0===t&amp;&amp;(console.warn("THREE.Line3: .getCenter()
  target is now required"),t=new
  Lt),t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return
  void 0===t&amp;&amp;(console.warn("THREE.Line3: .delta() target
  is now required"),t=new
  Lt),t.subVectors(this.end,this.start)}distanceSq(){return
  this.start.distanceToSquared(this.end)}distance(){return
  this.start.distanceTo(this.end)}at(t,e){return void
  0===e&amp;&amp;(console.warn("THREE.Line3: .at() target is now
  required"),e=new
  Lt),this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){nh.subVectors(t,this.start),ih.subVectors(this.end,this.start);const
  n=ih.dot(ih);let i=ih.dot(nh)/n;return
  e&amp;&amp;(i=ht(i,0,1)),i}closestPointToPoint(t,e,n){const
  i=this.closestPointToPointParameter(t,e);return void
  0===n&amp;&amp;(console.warn("THREE.Line3: .closestPointToPoint()
  target is now required"),n=new
  Lt),this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return
  this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return
  t.start.equals(this.start)&amp;&amp;t.end.equals(this.end)}clone(){return(new
  this.constructor).copy(this)}}class sh extends
  Ce{constructor(t){super(),this.material=t,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}sh.prototype.isImmediateRenderObject=!0;const
  ah=new Lt;const oh=new Lt,lh=new se,ch=new se;class hh extends
  ya{constructor(t){const e=uh(t),n=new En,i=[],r=[],s=new
  tn(0,0,1),a=new tn(0,1,0);for(let
  t=0;t&lt;=e;t++,h+=s){o.push(-a,0,h,a,0,h),o.push(h,0,-a,h,0,a);const
  e=t===r?n:i;e.toArray(l,c),c+=3,e.toArray(l,c),c+=3,e.toArray(l,c),c+=3,e.toArray(l,c),c+=3}const
  c=new En;c.setAttribute("position",new
  mn(o,3)),c.setAttribute("color",new mn(l,3));super(c,new
  ca({vertexColors:!0,toneMapped:!1})),this.type="GridHelper"}}const
  gh=new Lt,vh=new Lt,yh=new Lt;const xh=new Lt,_h=new Qn;function
  wh(t,e,n,i,r,s,a){xh.set(r,s,a).unproject(i);const o=e[t];if(void
  0!==o){const t=n.getAttribute("position");for(let
  e=0,n=o.length;e4?a=Ph[r-8+4-1]:0==r&amp;&amp;(a=0),n.push(a);const
  o=1/(s-1),l=-o/2,c=1+o/2,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,p=3,m=2,f=1,g=new
  Float32Array(p*d*u),v=new Float32Array(m*d*u),y=new
  Float32Array(f*d*u);for(let t=0;t<u e=
  "t%3*2/3-1,n=t">2?0:-1,i=[e,n,0,e+2/3,n,0,e+2/3,n+1,0,e,n,0,e+2/3,n+1,0,e,n+1,0];g.set(i,p*d*t),v.set(h,m*d*t);const
  r=[t,t,t,t,t,t];y.set(r,f*d*t)}const x=new
  En;x.setAttribute("position",new sn(g,p)),x.setAttribute("uv",new
  sn(v,m)),x.setAttribute("faceIndex",new
  sn(y,f)),t.push(x),i&gt;4&amp;&amp;i--}return{_lodPlanes:t,_sizeLods:e,_sigmas:n}}function
  Zh(t){const e=new Tt(3*Ch,3*Ch,t);return
  e.texture.mapping=l,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function
  Jh(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function
  Qh(){const t=new vt(1,1);return new
  Io({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:t},inputEncoding:{value:Nh[3e3]},outputEncoding:{value:Nh[3e3]}},vertexShader:$h(),fragmentShader:`\n\n\t\t\tprecision
  mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying
  vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D
  envMap;\n\t\t\tuniform vec2
  texelSize;\n\n\t\t\t${tu()}\n\n\t\t\t#include \n\n\t\t\tvoid
  main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0
  );\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection
  );\n\t\t\t\tvec2 uv = equirectUv( outputDirection
  );\n\n\t\t\t\tvec2 f = fract( uv / texelSize - 0.5 );\n\t\t\t\tuv
  -= f * texelSize;\n\t\t\t\tvec3 tl = envMapTexelToLinear(
  texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x +=
  texelSize.x;\n\t\t\t\tvec3 tr = envMapTexelToLinear( texture2D (
  envMap, uv ) ).rgb;\n\t\t\t\tuv.y += texelSize.y;\n\t\t\t\tvec3
  br = envMapTexelToLinear( texture2D ( envMap, uv )
  ).rgb;\n\t\t\t\tuv.x -= texelSize.x;\n\t\t\t\tvec3 bl =
  envMapTexelToLinear( texture2D ( envMap, uv )
  ).rgb;\n\n\t\t\t\tvec3 tm = mix( tl, tr, f.x );\n\t\t\t\tvec3 bm
  = mix( bl, br, f.x );\n\t\t\t\tgl_FragColor.rgb = mix( tm, bm,
  f.y );\n\n\t\t\t\tgl_FragColor = linearToOutputTexel(
  gl_FragColor
  );\n\n\t\t\t}\n\t\t`,blending:0,depthTest:!1,depthWrite:!1})}function
  Kh(){return new
  Io({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Nh[3e3]},outputEncoding:{value:Nh[3e3]}},vertexShader:$h(),fragmentShader:`\n\n\t\t\tprecision
  mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying
  vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube
  envMap;\n\n\t\t\t${tu()}\n\n\t\t\tvoid main()
  {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0
  );\n\t\t\t\tgl_FragColor.rgb = envMapTexelToLinear( textureCube(
  envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) )
  ).rgb;\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor
  );\n\n\t\t\t}\n\t\t`,blending:0,depthTest:!1,depthWrite:!1})}function
  $h(){return"\n\n\t\tprecision mediump float;\n\t\tprecision
  mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2
  uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3
  vOutputDirection;\n\n\t\t// RH coordinate system; PMREM
  face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float
  face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction =
  vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 )
  {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos
  x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection =
  direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v )
  pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x
  *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 )
  {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *=
  -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 )
  {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *=
  -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 )
  {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg
  z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid
  main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex
  );\n\t\t\tgl_Position = vec4( position, 1.0
  );\n\n\t\t}\n\t"}function tu(){return"\n\n\t\tuniform int
  inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include
  \n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif (
  inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else
  if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value
  );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn
  RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 )
  {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else
  if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear(
  value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 )
  {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else
  {\n\n\t\t\t\treturn GammaToLinear( value, 2.2
  );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4
  value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn
  value;\n\n\t\t\t} else if ( outputEncoding == 1 )
  {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if (
  outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value
  );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn
  LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding
  == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0
  );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn
  LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn
  LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4
  envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn
  inputTexelToLinear( color
  );\n\n\t\t}\n\t"}ml.create=function(t,e){return
  console.log("THREE.Curve.create() has been
  deprecated"),t.prototype=Object.create(ml.prototype),t.prototype.constructor=t,t.prototype.getPoint=e,t},Bl.prototype.fromPoints=function(t){return
  console.warn("THREE.Path: .fromPoints() has been renamed to
  .setFromPoints()."),this.setFromPoints(t)},fh.prototype.setColors=function(){console.error("THREE.GridHelper:
  setColors() has been deprecated, pass them in the constructor
  instead.")},hh.prototype.update=function(){console.error("THREE.SkeletonHelper:
  update() no longer needs to be
  called.")},ol.prototype.extractUrlBase=function(t){return
  console.warn("THREE.Loader: .extractUrlBase() has been
  deprecated. Use THREE.LoaderUtils.extractUrlBase()
  instead."),rc.extractUrlBase(t)},ol.Handlers={add:function(){console.error("THREE.Loader:
  Handlers.add() has been removed. Use LoadingManager.addHandler()
  instead.")},get:function(){console.error("THREE.Loader:
  Handlers.get() has been removed. Use LoadingManager.getHandler()
  instead.")}},eh.prototype.center=function(t){return
  console.warn("THREE.Box2: .center() has been renamed to
  .getCenter()."),this.getCenter(t)},eh.prototype.empty=function(){return
  console.warn("THREE.Box2: .empty() has been renamed to
  .isEmpty()."),this.isEmpty()},eh.prototype.isIntersectionBox=function(t){return
  console.warn("THREE.Box2: .isIntersectionBox() has been renamed
  to
  .intersectsBox()."),this.intersectsBox(t)},eh.prototype.size=function(t){return
  console.warn("THREE.Box2: .size() has been renamed to
  .getSize()."),this.getSize(t)},Pt.prototype.center=function(t){return
  console.warn("THREE.Box3: .center() has been renamed to
  .getCenter()."),this.getCenter(t)},Pt.prototype.empty=function(){return
  console.warn("THREE.Box3: .empty() has been renamed to
  .isEmpty()."),this.isEmpty()},Pt.prototype.isIntersectionBox=function(t){return
  console.warn("THREE.Box3: .isIntersectionBox() has been renamed
  to
  .intersectsBox()."),this.intersectsBox(t)},Pt.prototype.isIntersectionSphere=function(t){return
  console.warn("THREE.Box3: .isIntersectionSphere() has been
  renamed to
  .intersectsSphere()."),this.intersectsSphere(t)},Pt.prototype.size=function(t){return
  console.warn("THREE.Box3: .size() has been renamed to
  .getSize()."),this.getSize(t)},Jt.prototype.empty=function(){return
  console.warn("THREE.Sphere: .empty() has been renamed to
  .isEmpty()."),this.isEmpty()},ai.prototype.setFromMatrix=function(t){return
  console.warn("THREE.Frustum: .setFromMatrix() has been renamed to
  .setFromProjectionMatrix()."),this.setFromProjectionMatrix(t)},rh.prototype.center=function(t){return
  console.warn("THREE.Line3: .center() has been renamed to
  .getCenter()."),this.getCenter(t)},yt.prototype.flattenToArrayOffset=function(t,e){return
  console.warn("THREE.Matrix3: .flattenToArrayOffset() has been
  deprecated. Use .toArray()
  instead."),this.toArray(t,e)},yt.prototype.multiplyVector3=function(t){return
  console.warn("THREE.Matrix3: .multiplyVector3() has been removed.
  Use vector.applyMatrix3( matrix )
  instead."),t.applyMatrix3(this)},yt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3:
  .multiplyVector3Array() has been
  removed.")},yt.prototype.applyToBufferAttribute=function(t){return
  console.warn("THREE.Matrix3: .applyToBufferAttribute() has been
  removed. Use attribute.applyMatrix3( matrix )
  instead."),t.applyMatrix3(this)},yt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3:
  .applyToVector3Array() has been
  removed.")},yt.prototype.getInverse=function(t){return
  console.warn("THREE.Matrix3: .getInverse() has been removed. Use
  matrixInv.copy( matrix ).invert();
  instead."),this.copy(t).invert()},se.prototype.extractPosition=function(t){return
  console.warn("THREE.Matrix4: .extractPosition() has been renamed
  to
  .copyPosition()."),this.copyPosition(t)},se.prototype.flattenToArrayOffset=function(t,e){return
  console.warn("THREE.Matrix4: .flattenToArrayOffset() has been
  deprecated. Use .toArray()
  instead."),this.toArray(t,e)},se.prototype.getPosition=function(){return
  console.warn("THREE.Matrix4: .getPosition() has been removed. Use
  Vector3.setFromMatrixPosition( matrix ) instead."),(new
  Lt).setFromMatrixColumn(this,3)},se.prototype.setRotationFromQuaternion=function(t){return
  console.warn("THREE.Matrix4: .setRotationFromQuaternion() has
  been renamed to
  .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(t)},se.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4:
  .multiplyToArray() has been
  removed.")},se.prototype.multiplyVector3=function(t){return
  console.warn("THREE.Matrix4: .multiplyVector3() has been removed.
  Use vector.applyMatrix4( matrix )
  instead."),t.applyMatrix4(this)},se.prototype.multiplyVector4=function(t){return
  console.warn("THREE.Matrix4: .multiplyVector4() has been removed.
  Use vector.applyMatrix4( matrix )
  instead."),t.applyMatrix4(this)},se.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4:
  .multiplyVector3Array() has been
  removed.")},se.prototype.rotateAxis=function(t){console.warn("THREE.Matrix4:
  .rotateAxis() has been removed. Use Vector3.transformDirection(
  matrix )
  instead."),t.transformDirection(this)},se.prototype.crossVector=function(t){return
  console.warn("THREE.Matrix4: .crossVector() has been removed. Use
  vector.applyMatrix4( matrix )
  instead."),t.applyMatrix4(this)},se.prototype.translate=function(){console.error("THREE.Matrix4:
  .translate() has been
  removed.")},se.prototype.rotateX=function(){console.error("THREE.Matrix4:
  .rotateX() has been
  removed.")},se.prototype.rotateY=function(){console.error("THREE.Matrix4:
  .rotateY() has been
  removed.")},se.prototype.rotateZ=function(){console.error("THREE.Matrix4:
  .rotateZ() has been
  removed.")},se.prototype.rotateByAxis=function(){console.error("THREE.Matrix4:
  .rotateByAxis() has been
  removed.")},se.prototype.applyToBufferAttribute=function(t){return
  console.warn("THREE.Matrix4: .applyToBufferAttribute() has been
  removed. Use attribute.applyMatrix4( matrix )
  instead."),t.applyMatrix4(this)},se.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4:
  .applyToVector3Array() has been
  removed.")},se.prototype.makeFrustum=function(t,e,n,i,r,s){return
  console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use
  .makePerspective( left, right, top, bottom, near, far )
  instead."),this.makePerspective(t,e,i,n,r,s)},se.prototype.getInverse=function(t){return
  console.warn("THREE.Matrix4: .getInverse() has been removed. Use
  matrixInv.copy( matrix ).invert();
  instead."),this.copy(t).invert()},Ne.prototype.isIntersectionLine=function(t){return
  console.warn("THREE.Plane: .isIntersectionLine() has been renamed
  to
  .intersectsLine()."),this.intersectsLine(t)},At.prototype.multiplyVector3=function(t){return
  console.warn("THREE.Quaternion: .multiplyVector3() has been
  removed. Use is now vector.applyQuaternion( quaternion )
  instead."),t.applyQuaternion(this)},At.prototype.inverse=function(){return
  console.warn("THREE.Quaternion: .inverse() has been renamed to
  invert()."),this.invert()},re.prototype.isIntersectionBox=function(t){return
  console.warn("THREE.Ray: .isIntersectionBox() has been renamed to
  .intersectsBox()."),this.intersectsBox(t)},re.prototype.isIntersectionPlane=function(t){return
  console.warn("THREE.Ray: .isIntersectionPlane() has been renamed
  to
  .intersectsPlane()."),this.intersectsPlane(t)},re.prototype.isIntersectionSphere=function(t){return
  console.warn("THREE.Ray: .isIntersectionSphere() has been renamed
  to
  .intersectsSphere()."),this.intersectsSphere(t)},je.prototype.area=function(){return
  console.warn("THREE.Triangle: .area() has been renamed to
  .getArea()."),this.getArea()},je.prototype.barycoordFromPoint=function(t,e){return
  console.warn("THREE.Triangle: .barycoordFromPoint() has been
  renamed to
  .getBarycoord()."),this.getBarycoord(t,e)},je.prototype.midpoint=function(t){return
  console.warn("THREE.Triangle: .midpoint() has been renamed to
  .getMidpoint()."),this.getMidpoint(t)},je.prototypenormal=function(t){return
  console.warn("THREE.Triangle: .normal() has been renamed to
  .getNormal()."),this.getNormal(t)},je.prototype.plane=function(t){return
  console.warn("THREE.Triangle: .plane() has been renamed to
  .getPlane()."),this.getPlane(t)},je.barycoordFromPoint=function(t,e,n,i,r){return
  console.warn("THREE.Triangle: .barycoordFromPoint() has been
  renamed to
  .getBarycoord()."),je.getBarycoord(t,e,n,i,r)},je.normal=function(t,e,n,i){return
  console.warn("THREE.Triangle: .normal() has been renamed to
  .getNormal()."),je.getNormal(t,e,n,i)},zl.prototype.extractAllPoints=function(t){return
  console.warn("THREE.Shape: .extractAllPoints() has been removed.
  Use .extractPoints()
  instead."),this.extractPoints(t)},zl.prototype.extrude=function(t){return
  console.warn("THREE.Shape: .extrude() has been removed. Use
  ExtrudeGeometry() instead."),new
  go(this,t)},zl.prototype.makeGeometry=function(t){return
  console.warn("THREE.Shape: .makeGeometry() has been removed. Use
  ShapeGeometry() instead."),new
  Mo(this,t)},vt.prototype.fromAttribute=function(t,e,n){return
  console.warn("THREE.Vector2: .fromAttribute() has been renamed to
  .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},vt.prototype.distanceToManhattan=function(t){return
  console.warn("THREE.Vector2: .distanceToManhattan() has been
  renamed to
  .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},vt.prototype.lengthManhattan=function(){return
  console.warn("THREE.Vector2: .lengthManhattan() has been renamed
  to
  .manhattanLength()."),this.manhattanLength()},Lt.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3:
  .setEulerFromRotationMatrix() has been removed. Use
  Euler.setFromRotationMatrix()
  instead.")},Lt.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3:
  .setEulerFromQuaternion() has been removed. Use
  Euler.setFromQuaternion()
  instead.")},Lt.prototype.getPositionFromMatrix=function(t){return
  console.warn("THREE.Vector3: .getPositionFromMatrix() has been
  renamed to
  .setFromMatrixPosition()."),this.setFromMatrixPosition(t)},Lt.prototype.getScaleFromMatrix=function(t){return
  console.warn("THREE.Vector3: .getScaleFromMatrix() has been
  renamed to
  .setFromMatrixScale()."),this.setFromMatrixScale(t)},Lt.prototype.getColumnFromMatrix=function(t,e){return
  console.warn("THREE.Vector3: .getColumnFromMatrix() has been
  renamed to
  .setFromMatrixColumn()."),this.setFromMatrixColumn(e,t)},Lt.prototype.applyProjection=function(t){return
  console.warn("THREE.Vector3: .applyProjection() has been removed.
  Use .applyMatrix4( m )
  instead."),this.applyMatrix4(t)},Lt.prototype.fromAttribute=function(t,e,n){return
  console.warn("THREE.Vector3: .fromAttribute() has been renamed to
  .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},Lt.prototype.distanceToManhattan=function(t){return
  console.warn("THREE.Vector3: .distanceToManhattan() has been
  renamed to
  .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},Lt.prototype.lengthManhattan=function(){return
  console.warn("THREE.Vector3: .lengthManhattan() has been renamed
  to
  .manhattanLength()."),this.manhattanLength()},St.prototype.fromAttribute=function(t,e,n){return
  console.warn("THREE.Vector4: .fromAttribute() has been renamed to
  .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},St.prototype.lengthManhattan=function(){return
  console.warn("THREE.Vector4: .lengthManhattan() has been renamed
  to
  .manhattanLength()."),this.manhattanLength()},Ce.prototype.getChildByName=function(t){return
  console.warn("THREE.Object3D: .getChildByName() has been renamed
  to
  .getObjectByName()."),this.getObjectByName(t)},Ce.prototype.renderDepth=function(){console.warn("THREE.Object3D:
  .renderDepth has been removed. Use .renderOrder,
  instead.")},Ce.prototype.translate=function(t,e){return
  console.warn("THREE.Object3D: .translate() has been removed. Use
  .translateOnAxis( axis, distance )
  instead."),this.translateOnAxis(e,t)},Ce.prototype.getWorldRotation=function(){console.error("THREE.Object3D:
  .getWorldRotation() has been removed. Use
  THREE.Object3D.getWorldQuaternion( target )
  instead.")},Ce.prototype.applyMatrix=function(t){return
  console.warn("THREE.Object3D: .applyMatrix() has been renamed to
  .applyMatrix4()."),this.applyMatrix4(t)},Object.defineProperties(Ce.prototype,{eulerOrder:{get:function(){return
  console.warn("THREE.Object3D: .eulerOrder is now
  .rotation.order."),this.rotation.order},set:function(t){console.warn("THREE.Object3D:
  .eulerOrder is now
  .rotation.order."),this.rotation.order=t}},useQuaternion:{get:function(){console.warn("THREE.Object3D:
  .useQuaternion has been removed. The library now uses quaternions
  by default.")},set:function(){console.warn("THREE.Object3D:
  .useQuaternion has been removed. The library now uses quaternions
  by
  default.")}}}),Wn.prototype.setDrawMode=function(){console.error("THREE.Mesh:
  .setDrawMode() has been removed. The renderer now always assumes
  THREE.TrianglesDrawMode. Transform your geometry via
  BufferGeometryUtils.toTrianglesDrawMode() if
  necessary.")},Object.defineProperties(Wn.prototype,{drawMode:{get:function(){return
  console.error("THREE.Mesh: .drawMode has been removed. The
  renderer now always assumes
  THREE.TrianglesDrawMode."),0},set:function(){console.error("THREE.Mesh:
  .drawMode has been removed. The renderer now always assumes
  THREE.TrianglesDrawMode. Transform your geometry via
  BufferGeometryUtils.toTrianglesDrawMode() if
  necessary.")}}}),$s.prototype.initBones=function(){console.error("THREE.SkinnedMesh:
  initBones() has been
  removed.")},Kn.prototype.setLens=function(t,e){console.warn("THREE.PerspectiveCamera.setLens
  is deprecated. Use .setFocalLength and .filmGauge for a
  photographic setup."),void
  0!==e&amp;&amp;(this.filmGauge=e),this.setFocalLength(t)},Object.defineProperties(Fl.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light:
  .onlyShadow has been
  removed.")}},shadowCameraFov:{set:function(t){console.warn("THREE.Light:
  .shadowCameraFov is now
  .shadow.camera.fov."),this.shadow.camera.fov=t}},shadowCameraLeft:{set:function(t){console.warn("THREE.Light:
  .shadowCameraLeft is now
  .shadow.camera.left."),this.shadow.camera.left=t}},shadowCameraRight:{set:function(t){console.warn("THREE.Light:
  .shadowCameraRight is now
  .shadow.camera.right."),this.shadow.camera.right=t}},shadowCameraTop:{set:function(t){console.warn("THREE.Light:
  .shadowCameraTop is now
  .shadow.camera.top."),this.shadow.camera.top=t}},shadowCameraBottom:{set:function(t){console.warn("THREE.Light:
  .shadowCameraBottom is now
  .shadow.camera.bottom."),this.shadow.camera.bottom=t}},shadowCameraNear:{set:function(t){console.warn("THREE.Light:
  .shadowCameraNear is now
  .shadow.camera.near."),this.shadow.camera.near=t}},shadowCameraFar:{set:function(t){console.warn("THREE.Light:
  .shadowCameraFar is now
  .shadow.camera.far."),this.shadow.camera.far=t}},shadowCameraVisible:{set:function(){console.warn("THREE.Light:
  .shadowCameraVisible has been removed. Use new
  THREE.CameraHelper( light.shadow.camera )
  instead.")}},shadowBias:{set:function(t){console.warn("THREE.Light:
  .shadowBias is now
  .shadow.bias."),this.shadow.bias=t}},shadowDarkness:{set:function(){console.warn("THREE.Light:
  .shadowDarkness has been
  removed.")}},shadowMapWidth:{set:function(t){console.warn("THREE.Light:
  .shadowMapWidth is now
  .shadow.mapSize.width."),this.shadow.mapSize.width=t}},shadowMapHeight:{set:function(t){console.warn("THREE.Light:
  .shadowMapHeight is now
  .shadow.mapSize.height."),this.shadow.mapSize.height=t}}}),Object.defineProperties(sn.prototype,{length:{get:function(){return
  console.warn("THREE.BufferAttribute: .length has been deprecated.
  Use .count
  instead."),this.array.length}},dynamic:{get:function(){return
  console.warn("THREE.BufferAttribute: .dynamic has been
  deprecated. Use .usage
  instead."),this.usage===nt},set:function(){console.warn("THREE.BufferAttribute:
  .dynamic has been deprecated. Use .usage
  instead."),this.setUsage(nt)}}}),sn.prototype.setDynamic=function(t){return
  console.warn("THREE.BufferAttribute: .setDynamic() has been
  deprecated. Use .setUsage()
  instead."),this.setUsage(!0===t?nt:et),this},sn.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute:
  .copyIndicesArray() has been
  removed.")},sn.prototype.setArray=function(){console.error("THREE.BufferAttribute:
  .setArray has been removed. Use BufferGeometry .setAttribute to
  replace/resize attribute
  buffers")},En.prototype.addIndex=function(t){console.warn("THREE.BufferGeometry:
  .addIndex() has been renamed to
  .setIndex()."),this.setIndex(t)},En.prototype.addAttribute=function(t,e){return
  console.warn("THREE.BufferGeometry: .addAttribute() has been
  renamed to
  .setAttribute()."),e&amp;&amp;e.isBufferAttribute||e&amp;&amp;e.isInterleavedBufferAttribute?"index"===t?(console.warn("THREE.BufferGeometry.addAttribute:
  Use .setIndex() for index
  attribute."),this.setIndex(e),this):this.setAttribute(t,e):(console.warn("THREE.BufferGeometry:
  .addAttribute() now expects ( name, attribute
  )."),this.setAttribute(t,new
  sn(arguments[1],arguments[2])))},En.prototype.addDrawCall=function(t,e,n){void
  0!==n&amp;&amp;console.warn("THREE.BufferGeometry: .addDrawCall()
  no longer supports
  indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall()
  is now
  .addGroup()."),this.addGroup(t,e)},En.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry:
  .clearDrawCalls() is now
  .clearGroups()."),this.clearGroups()},En.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry:
  .computeOffsets() has been
  removed.")},En.prototype.removeAttribute=function(t){return
  console.warn("THREE.BufferGeometry: .removeAttribute() has been
  renamed to
  .deleteAttribute()."),this.deleteAttribute(t)},En.prototype.applyMatrix=function(t){return
  console.warn("THREE.BufferGeometry: .applyMatrix() has been
  renamed to
  .applyMatrix4()."),this.applyMatrix4(t)},Object.defineProperties(En.prototype,{drawcalls:{get:function(){return
  console.error("THREE.BufferGeometry: .drawcalls has been renamed
  to .groups."),this.groups}},offsets:{get:function(){return
  console.warn("THREE.BufferGeometry: .offsets has been renamed to
  .groups."),this.groups}}}),Es.prototype.setDynamic=function(t){return
  console.warn("THREE.InterleavedBuffer: .setDynamic() has been
  deprecated. Use .setUsage()
  instead."),this.setUsage(!0===t?nt:et),this},Es.prototype.setArray=function(){console.error("THREE.InterleavedBuffer:
  .setArray has been removed. Use BufferGeometry .setAttribute to
  replace/resize attribute
  buffers")},go.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry:
  .getArrays() has been
  removed.")},go.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry:
  .addShapeList() has been
  removed.")},go.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry:
  .addShape() has been
  removed.")},Ts.prototype.dispose=function(){console.error("THREE.Scene:
  .dispose() has been
  removed.")},Zc.prototype.onUpdate=function(){return
  console.warn("THREE.Uniform: .onUpdate() has been removed. Use
  object.onBeforeRender()
  instead."),this},Object.defineProperties(Xe.prototype,{wrapAround:{get:function(){console.warn("THREE.Material:
  .wrapAround has been
  removed.")},set:function(){console.warn("THREE.Material:
  .wrapAround has been
  removed.")}},overdraw:{get:function(){console.warn("THREE.Material:
  .overdraw has been
  removed.")},set:function(){console.warn("THREE.Material:
  .overdraw has been removed.")}},wrapRGB:{get:function(){return
  console.warn("THREE.Material: .wrapRGB has been removed."),new
  tn}},shading:{get:function(){console.error("THREE."+this.type+":
  .shading has been removed. Use the boolean .flatShading
  instead.")},set:function(t){console.warn("THREE."+this.type+":
  .shading has been removed. Use the boolean .flatShading
  instead."),this.flatShading=1===t}},stencilMask:{get:function(){return
  console.warn("THREE."+this.type+": .stencilMask has been removed.
  Use .stencilFuncMask
  instead."),this.stencilFuncMask},set:function(t){console.warn("THREE."+this.type+":
  .stencilMask has been removed. Use .stencilFuncMask
  instead."),this.stencilFuncMask=t}}}),Object.defineProperties(Jn.prototype,{derivatives:{get:function(){return
  console.warn("THREE.ShaderMaterial: .derivatives has been moved
  to
  .extensions.derivatives."),this.extensions.derivatives},set:function(t){console.warn("THREE.
  ShaderMaterial: .derivatives has been moved to
  .extensions.derivatives."),this.extensions.derivatives=t}}}),ws.prototype.clearTarget=function(t,e,n,i){console.warn("THREE.WebGLRenderer:
  .clearTarget() has been deprecated. Use .setRenderTarget() and
  .clear()
  instead."),this.setRenderTarget(t),this.clear(e,n,i)},ws.prototype.animate=function(t){console.warn("THREE.WebGLRenderer:
  .animate() is now
  .setAnimationLoop()."),this.setAnimationLoop(t)},ws.prototype.getCurrentRenderTarget=function(){return
  console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is
  now
  .getRenderTarget()."),this.getRenderTarget()},ws.prototype.getMaxAnisotropy=function(){return
  console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now
  .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},ws.prototype.getPrecision=function(){return
  console.warn("THREE.WebGLRenderer: .getPrecision() is now
  .capabilities.precision."),this.capabilities.precision},ws.prototype.resetGLState=function(){return
  console.warn("THREE.WebGLRenderer: .resetGLState() is now
  .state.reset()."),this.state.reset()},ws.prototype.supportsFloatTextures=function(){return
  console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is
  now .extensions.get( 'OES_texture_float'
  )."),this.extensions.get("OES_texture_float")},ws.prototype.supportsHalfFloatTextures=function(){return
  console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures()
  is now .extensions.get( 'OES_texture_half_float'
  )."),this.extensions.get("OES_texture_half_float")},ws.prototype.supportsStandardDerivatives=function(){return
  console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives()
  is now .extensions.get( 'OES_standard_derivatives'
  )."),this.extensions.get("OES_standard_derivatives")},ws.prototype.supportsCompressedTextureS3TC=function(){return
  console.warn("THREE.WebGLRenderer:
  .supportsCompressedTextureS3TC() is now .extensions.get(
  'WEBGL_compressed_texture_s3tc'
  )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},ws.prototype.supportsCompressedTexturePVRTC=function(){return
  console.warn("THREE.WebGLRenderer:
  .supportsCompressedTexturePVRTC() is now .extensions.get(
  'WEBGL_compressed_texture_pvrtc'
  )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},ws.prototype.supportsBlendMinMax=function(){return
  console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now
  .extensions.get( 'EXT_blend_minmax'
  )."),this.extensions.get("EXT_blend_minmax")},ws.prototype.supportsVertexTextures=function(){return
  console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is
  now
  .capabilities.vertexTextures."),this.capabilities.vertexTextures},ws.prototype.supportsInstancedArrays=function(){return
  console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is
  now .extensions.get( 'ANGLE_instanced_arrays'
  )."),this.extensions.get("ANGLE_instanced_arrays")},ws.prototype.enableScissorTest=function(t){console.warn("THREE.WebGLRenderer:
  .enableScissorTest() is now
  .setScissorTest()."),this.setScissorTest(t)},ws.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer:
  .initMaterial() has been
  removed.")},ws.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer:
  .addPrePlugin() has been
  removed.")},ws.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer:
  .addPostPlugin() has been
  removed.")},ws.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer:
  .updateShadowMap() has been
  removed.")},ws.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer:
  .setFaceCulling() has been
  removed.")},ws.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer:
  .allocTextureUnit() has been
  removed.")},ws.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer:
  .setTexture() has been
  removed.")},ws.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer:
  .setTexture2D() has been
  removed.")},ws.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer:
  .setTextureCube() has been
  removed.")},ws.prototype.getActiveMipMapLevel=function(){return
  console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now
  .getActiveMipmapLevel()."),this.getActiveMipmapLevel()},Object.defineProperties(ws.prototype,{shadowMapEnabled:{get:function(){return
  this.shadowMap.enabled},set:function(t){console.warn("THREE.WebGLRenderer:
  .shadowMapEnabled is now
  .shadowMap.enabled."),this.shadowMap.enabled=t}},shadowMapType:{get:function(){return
  this.shadowMap.type},set:function(t){console.warn("THREE.WebGLRenderer:
  .shadowMapType is now
  .shadowMap.type."),this.shadowMap.type=t}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer:
  .shadowMapCullFace has been removed. Set Material.shadowSide
  instead.")},set:function(){console.warn("THREE.WebGLRenderer:
  .shadowMapCullFace has been removed. Set Material.shadowSide
  instead.")}},context:{get:function(){return
  console.warn("THREE.WebGLRenderer: .context has been removed. Use
  .getContext()
  instead."),this.getContext()}},vr:{get:function(){return
  console.warn("THREE.WebGLRenderer: .vr has been renamed to
  .xr"),this.xr}},gammaInput:{get:function(){return
  console.warn("THREE.WebGLRenderer: .gammaInput has been removed.
  Set the encoding for textures via Texture.encoding
  instead."),!1},set:function(){console.warn("THREE.WebGLRenderer:
  .gammaInput has been removed. Set the encoding for textures via
  Texture.encoding instead.")}},gammaOutput:{get:function(){return
  console.warn("THREE.WebGLRenderer: .gammaOutput has been removed.
  Set WebGLRenderer.outputEncoding
  instead."),!1},set:function(t){console.warn("THREE.WebGLRenderer:
  .gammaOutput has been removed. Set WebGLRenderer.outputEncoding
  instead."),this.outputEncoding=!0===t?Y:X}},toneMappingWhitePoint:{get:function(){return
  console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has
  been
  removed."),1},set:function(){console.warn("THREE.WebGLRenderer:
  .toneMappingWhitePoint has been
  removed.")}}}),Object.defineProperties(us.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer:
  .shadowMap.cullFace has been removed. Set Material.shadowSide
  instead.")},set:function(){console.warn("THREE.WebGLRenderer:
  .shadowMap.cullFace has been removed. Set Material.shadowSide
  instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer:
  .shadowMap.renderReverseSided has been removed. Set
  Material.shadowSide
  instead.")},set:function(){console.warn("THREE.WebGLRenderer:
  .shadowMap.renderReverseSided has been removed. Set
  Material.shadowSide
  instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer:
  .shadowMap.renderSingleSided has been removed. Set
  Material.shadowSide
  instead.")},set:function(){console.warn("THREE.WebGLRenderer:
  .shadowMap.renderSingleSided has been removed. Set
  Material.shadowSide
  instead.")}}}),Object.defineProperties(Tt.prototype,{wrapS:{get:function(){return
  console.warn("THREE.WebGLRenderTarget: .wrapS is now
  .texture.wrapS."),this.texture.wrapS},set:function(t){console.warn("THREE.WebGLRenderTarget:
  .wrapS is now
  .texture.wrapS."),this.texture.wrapS=t}},wrapT:{get:function(){return
  console.warn("THREE.WebGLRenderTarget: .wrapT is now
  .texture.wrapT."),this.texture.wrapT},set:function(t){console.warn("THREE.WebGLRenderTarget:
  .wrapT is now
  .texture.wrapT."),this.texture.wrapT=t}},magFilter:{get:function(){return
  console.warn("THREE.WebGLRenderTarget: .magFilter is now
  .texture.magFilter."),this.texture.magFilter},set:function(t){console.warn("THREE.WebGLRenderTarget:
  .magFilter is now
  .texture.magFilter."),this.texture.magFilter=t}},minFilter:{get:function(){return
  console.warn("THREE.WebGLRenderTarget: .minFilter is now
  .texture.minFilter."),this.texture.minFilter},set:function(t){console.warn("THREE.WebGLRenderTarget:
  .minFilter is now
  .texture.minFilter."),this.texture.minFilter=t}},anisotropy:{get:function(){return
  console.warn("THREE.WebGLRenderTarget: .anisotropy is now
  .texture.anisotropy."),this.texture.anisotropy},set:function(t){console.warn("THREE.WebGLRenderTarget:
  .anisotropy is now
  .texture.anisotropy."),this.texture.anisotropy=t}},offset:{get:function(){return
  console.warn("THREE.WebGLRenderTarget: .offset is now
  .texture.offset."),this.texture.offset},set:function(t){console.warn("THREE.WebGLRenderTarget:
  .offset is now
  .texture.offset."),this.texture.offset=t}},repeat:{get:function(){return
  console.warn("THREE.WebGLRenderTarget: .repeat is now
  .texture.repeat."),this.texture.repeat},set:function(t){console.warn("THREE.WebGLRenderTarget:
  .repeat is now
  .texture.repeat."),this.texture.repeat=t}},format:{get:function(){return
  console.warn("THREE.WebGLRenderTarget: .format is now
  .texture.format."),this.texture.format},set:function(t){console.warn("THREE.WebGLRenderTarget:
  .format is now
  .texture.format."),this.texture.format=t}},type:{get:function(){return
  console.warn("THREE.WebGLRenderTarget: .type is now
  .texture.type."),this.texture.type},set:function(t){console.warn("THREE.WebGLRenderTarget:
  .type is now
  .texture.type."),this.texture.type=t}},generateMipmaps:{get:function(){return
  console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now
  .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(t){console.warn("THREE.WebGLRenderTarget:
  .generateMipmaps is now
  .texture.generateMipmaps."),this.texture.generateMipmaps=t}}}),Lc.prototype.load=function(t){console.warn("THREE.Audio:
  .load has been deprecated. Use THREE.AudioLoader instead.");const
  e=this;return(new
  vc).load(t,(function(t){e.setBuffer(t)})),this},Ic.prototype.getData=function(){return
  console.warn("THREE.AudioAnalyser: .getData() is now
  .getFrequencyData()."),this.getFrequencyData()},ti.prototype.updateCubeMap=function(t,e){return
  console.warn("THREE.CubeCamera: .updateCubeMap() is now
  .update()."),this.update(t,e)},ti.prototype.clear=function(t,e,n,i){return
  console.warn("THREE.CubeCamera: .clear() is now
  .renderTarget.clear()."),this.renderTarget.clear(t,e,n,i)},_t.crossOrigin=void
  0,_t.loadTexture=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTexture
  has been deprecated. Use THREE.TextureLoader() instead.");const
  r=new pl;r.setCrossOrigin(this.crossOrigin);const
  s=r.load(t,n,void 0,i);return
  e&amp;&amp;(s.mapping=e),s},_t.loadTextureCube=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTextureCube
  has been deprecated. Use THREE.CubeTextureLoader()
  instead.");const r=new
  ul;r.setCrossOrigin(this.crossOrigin);const s=r.load(t,n,void
  0,i);return
  e&amp;&amp;(s.mapping=e),s},_t.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture
  has been removed. Use THREE.DDSLoader
  instead.")},_t.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube
  has been removed. Use THREE.DDSLoader instead.")};const
  eu={createMultiMaterialObject:function(){console.error("THREE.SceneUtils
  has been moved to
  /examples/jsm/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils
  has been moved to
  /examples/jsm/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils
  has been moved to
  /examples/jsm/utils/SceneUtils.js")}};"undefined"!=typeof
  __THREE_DEVTOOLS__&amp;&amp;__THREE_DEVTOOLS__.dispatchEvent(new
  CustomEvent("register",{detail:{revision:e}})),"undefined"!=typeof
  window&amp;&amp;(window.__THREE__?console.warn("WARNING: Multiple
  instances of Three.js being
  imported."):window.__THREE__=e),t.ACESFilmicToneMapping=4,t.AddEquation=n,t.AddOperation=2,t.AdditiveAnimationBlendMode=q,t.AdditiveBlending=2,t.AlphaFormat=1021,t.AlwaysDepth=1,t.AlwaysStencilFunc=519,t.AmbientLight=$l,t.AmbientLightProbe=xc,t.AnimationClip=nl,t.AnimationLoader=class
  extends ol{constructor(t){super(t)}load(t,e,n,i){const
  r=this,s=new
  cl(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,(function(n){try{e(r.parse(JSON.parse(n)))}catch(e){i?i(e):console.error(e),r.manager.itemError(t)}}),n,i)}parse(t){const
  e=[];for(let n=0;n.99999)this.quaternion.set(0,0,0,1);else
  if(t.y&lt;-.99999)this.quaternion.set(1,0,0,0);else{Sh.set(t.z,0,-t.x).normalize();const
  e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Sh,e)}}setLength(t,e=.2*t,n=.2*e){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return
  super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}},t.Audio=Lc,t.AudioAnalyser=Ic,t.AudioContext=gc,t.AudioListener=class
  extends
  Ce{constructor(){super(),this.type="AudioListener",this.context=gc.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new
  bc}getInput(){return this.gain}removeFilter(){return
  null!==this.filter&amp;&amp;(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return
  this.filter}setFilter(t){return
  null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return
  this.gain.gain.value}setMasterVolume(t){return
  this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const
  e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Sc,Tc,Ec),Ac.set(0,0,-1).applyQuaternion(Tc),e.positionX){const
  t=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Sc.x,t),e.positionY.linearRampToValueAtTime(Sc.y,t),e.positionZ.linearRampToValueAtTime(Sc.z,t),e.forwardX.linearRampToValueAtTime(Ac.x,t),e.forwardY.linearRampToValueAtTime(Ac.y,t),e.forwardZ.linearRampToValueAtTime(Ac.z,t),e.upX.linearRampToValueAtTime(n.x,t),e.upY.linearRampToValueAtTime(n.y,t),e.upZ.linearRampToValueAtTime(n.z,t)}else
  e.setPosition(Sc.x,Sc.y,Sc.z),e.setOrientation(Ac.x,Ac.y,Ac.z,n.x,n.y,n.z)}},t.AudioLoader=vc,t.AxesHelper=Ah,t.AxisHelper=function(t){return
  console.warn("THREE.AxisHelper has been renamed to
  THREE.AxesHelper."),new
  Ah(t)},t.BackSide=1,t.BasicDepthPacking=3200,t.BasicShadowMap=0,t.BinaryTextureLoader=function(t){return
  console.warn("THREE.BinaryTextureLoader has been renamed to
  THREE.DataTextureLoader."),new
  dl(t)},t.Bone=ta,t.BooleanKeyframeTrack=Zo,t.BoundingBoxHelper=function(t,e){return
  console.warn("THREE.BoundingBoxHelper has been deprecated.
  Creating a THREE.BoxHelper instead."),new
  Mh(t,e)},t.Box2=eh,t.Box3=Pt,t.Box3Helper=class extends
  ya{constructor(t,e=16776960){const n=new
  Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new
  En;i.setIndex(new sn(n,1)),i.setAttribute("position",new
  mn([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3)),super(i,new
  ca({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const
  e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}},t.BoxBufferGeometry=qn,t.BoxGeometry=qn,t.BoxHelper=Mh,t.BufferAttribute=sn,t.BufferGeometry=En,t.BufferGeometryLoader=oc,t.ByteType=1010,t.Cache=rl,t.Camera=Qn,t.CameraHelper=class
  extends ya{constructor(t){const e=new En,n=new
  ca({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],s={},a=new
  tn(16755200),o=new tn(16711680),l=new tn(43775),c=new
  tn(16777215),h=new tn(3355443);function
  u(t,e,n){d(t,n),d(e,n)}function
  d(t,e){i.push(0,0,0),r.push(e.r,e.g,e.b),void
  0===s[t]&amp;&amp;(s[t]=[]),s[t].push(i.length/3-1)}u("n1","n2",a),u("n2","n4",a),u("n4","n3",a),u("n3","n1",a),u("f1","f2",a),u("f2","f4",a),u("f4","f3",a),u("f3","f1",a),u("n1","f1",a),u("n2","f2",a),u("n3","f3",a),u("n4","f4",a),u("p","n1",o),u("p","n2",o),u("p","n3",o),u("p","n4",o),u("u1","u2",l),u("u2","u3",l),u("u3","u1",l),u("c","t",c),u("p","c",h),u("cn1","cn2",h),u("cn3","cn4",h),u("cf1","cf2",h),u("cf3","cf4",h),e.setAttribute("position",new
  mn(i,3)),e.setAttribute("color",new
  mn(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&amp;&amp;this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update()}update(){const
  t=this.geometry,e=this.pointMap;_h.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),wh("c",e,t,_h,0,0,-1),wh("t",e,t,_h,0,0,1),wh("n1",e,t,_h,-1,-1,-1),wh("n2",e,t,_h,1,-1,-1),wh("n3",e,t,_h,-1,1,-1),wh("n4",e,t,_h,1,1,-1),wh("f1",e,t,_h,-1,-1,1),wh("f2",e,t,_h,1,-1,1),wh("f3",e,t,_h,-1,1,1),wh("f4",e,t,_h,1,1,1),wh("u1",e,t,_h,.7,1.1,-1),wh("u2",e,t,_h,-.7,1.1,-1),wh("u3",e,t,_h,0,2,-1),wh("cf1",e,t,_h,-1,0,1),wh("cf2",e,t,_h,1,0,1),wh("cf3",e,t,_h,0,-1,1),wh("cf4",e,t,_h,0,1,1),wh("cn1",e,t,_h,-1,0,-1),wh("cn2",e,t,_h,1,0,-1),wh("cn3",e,t,_h,0,-1,-1),wh("cn4",e,t,_h,0,1,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}},t.CanvasRenderer=function(){console.error("THREE.CanvasRenderer
  has been
  removed")},t.CanvasTexture=Ra,t.CatmullRomCurve3=bl,t.CineonToneMapping=3,t.CircleBufferGeometry=Pa,t.CircleGeometry=Pa,t.ClampToEdgeWrapping=u,t.Clock=bc,t.Color=tn,t.ColorKeyframeTrack=Jo,t.CompressedTexture=La,t.CompressedTextureLoader=class
  extends ol{constructor(t){super(t)}load(t,e,n,i){const
  r=this,s=[],a=new La,o=new
  cl(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(r.withCredentials);let
  l=0;function c(c){o.load(t[c],(function(t){const
  n=r.parse(t,!0);s[c]={width:n.width,height:n.height,format:n.format,mipmaps:n.mipmaps},l+=1,6===l&amp;&amp;(1===n.mipmapCount&amp;&amp;(a.minFilter=g),a.image=s,a.format=n.format,a.needsUpdate=!0,e&amp;&amp;e(a))}),n,i)}if(Array.isArray(t))for(let
  e=0,n=t.length;e&gt;16&amp;32768,i=e&gt;&gt;12&amp;2047;const
  r=e&gt;&gt;23&amp;255;return
  r&lt;103?n:r&gt;142?(n|=31744,n|=(255==r?0:1)&amp;&amp;8388607&amp;e,n):r&lt;113?(i|=2048,n|=(i&gt;&gt;114-r)+(i&gt;&gt;113-r&amp;1),n):(n|=r-112&lt;&lt;10|i&gt;&gt;1,n+=1&amp;i,n)}},t.DecrementStencilOp=7683,t.DecrementWrapStencilOp=34056,t.DefaultLoadingManager=al,t.DepthFormat=A,t.DepthStencilFormat=L,t.DepthTexture=Ca,t.DirectionalLight=Kl,t.DirectionalLightHelper=class
  extends
  Ce{constructor(t,e,n){super(),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,void
  0===e&amp;&amp;(e=1);let i=new En;i.setAttribute("position",new
  mn([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new
  ca({fog:!1,toneMapped:!1});this.lightPlane=new
  fa(i,r),this.add(this.lightPlane),i=new
  En,i.setAttribute("position",new
  mn([0,0,0,0,0,1],3)),this.targetLine=new
  fa(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){gh.setFromMatrixPosition(this.light.matrixWorld),vh.setFromMatrixPosition(this.light.target.matrixWorld),yh.subVectors(vh,gh),this.lightPlane.lookAt(vh),void
  0!==this.color?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(vh),this.targetLine.scale.z=yh.length()}},t.DiscreteInterpolant=Xo,t.DodecahedronBufferGeometry=Ba,t.DodecahedronGeometry=Ba,t.DoubleSide=2,t.DstAlphaFactor=206,t.DstColorFactor=208,t.DynamicBufferAttribute=function(t,e){return
  console.warn("THREE.DynamicBufferAttribute has been removed. Use
  new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage )
  instead."),new
  sn(t,e).setUsage(nt)},t.DynamicCopyUsage=35050,t.DynamicDrawUsage=nt,t.DynamicReadUsage=35049,t.EdgesGeometry=Ga,t.EdgesHelper=function(t,e){return
  console.warn("THREE.EdgesHelper has been removed. Use
  THREE.EdgesGeometry instead."),new ya(new Ga(t.geometry),new
  ca({color:void
  0!==e?e:16777215}))},t.EllipseCurve=fl,t.EqualDepth=4,t.EqualStencilFunc=514,t.EquirectangularReflectionMapping=a,t.EquirectangularRefractionMapping=o,t.Euler=fe,t.EventDispatcher=rt,t.ExtrudeBufferGeometry=go,t.ExtrudeGeometry=go,t.FaceColors=1,t.FileLoader=cl,t.FlatShading=1,t.Float16BufferAttribute=pn,t.Float32Attribute=function(t,e){return
  console.warn("THREE.Float32Attribute has been removed. Use new
  THREE.Float32BufferAttribute() instead."),new
  mn(t,e)},t.Float32BufferAttribute=mn,t.Float64Attribute=function(t,e){return
  console.warn("THREE.Float64Attribute has been removed. Use new
  THREE.Float64BufferAttribute() instead."),new
  fn(t,e)},t.Float64BufferAttribute=fn,t.FloatType=b,t.Fog=Ss,t.FogExp2=Ms,t.Font=pc,t.FontLoader=class
  extends ol{constructor(t){super(t)}load(t,e,n,i){const
  r=this,s=new
  cl(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,(function(t){let
  n;try{n=JSON.parse(t)}catch(e){console.warn("THREE.FontLoader:
  typeface.js support is being deprecated. Use typeface.json
  instead."),n=JSON.parse(t.substring(65,t.length-2))}const
  i=r.parse(n);e&amp;&amp;e(i)}),n,i)}parse(t){return new
  pc(t)}},t.FrontSide=0,t.Frustum=ai,t.GLBufferAttribute=Qc,t.GLSL1="100",t.GLSL3=it,t.GammaEncoding=Z,t.GreaterDepth=6,t.GreaterEqualDepth=5,t.GreaterEqualStencilFunc=518,t.GreaterStencilFunc=516,t.GridHelper=fh,t.Group=gs,t.HalfFloatType=M,t.HemisphereLight=Ol,t.HemisphereLightHelper=class
  extends
  Ce{constructor(t,e,n){super(),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n;const
  i=new _o(e);i.rotateY(.5*Math.PI),this.material=new
  en({wireframe:!0,fog:!1,toneMapped:!1}),void
  0===this.color&amp;&amp;(this.material.vertexColors=!0);const
  r=i.getAttribute("position"),s=new
  Float32Array(3*r.count);i.setAttribute("color",new
  sn(s,3)),this.add(new
  Wn(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const
  t=this.children[0];if(void
  0!==this.color)this.material.color.set(this.color);else{const
  e=t.geometry.getAttribute("color");ph.copy(this.light.color),mh.copy(this.light.groundColor);for(let
  t=0,n=e.count;t</u></s></i></s></a><a o=
  "t[s];switch(o.type){case&quot;PlaneGeometry&quot;:case&quot;PlaneBufferGeometry&quot;:a=new"
  t="0,n=o.shapes.length;t"><s s=
  "t[e];if(&quot;MultiMaterial&quot;===s.type){const" t=
  "[];for(let" e="0;e">0){const n=new sl(e);r=new
  hl(n),r.setCrossOrigin(this.crossOrigin);for(let
  e=0,n=t.length;e<s s="t[r];let" no="image&quot;" specified="" o=
  "e[s.image];Array.isArray(o)?(a=new" void="" undefined="" e=
  "[];for(let" i="0,r=t.length;i">\n\n\t\t\tvec3 getSample( float
  theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta
  );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3
  sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross(
  axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot(
  axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn
  bilinearCubeUV( envMap, sampleDirection, mipInt
  );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis =
  latitudinal ? poleAxis : cross( poleAxis, vOutputDirection
  );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) )
  {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, -
  vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize(
  axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0
  );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0,
  axis );\n\n\t\t\t\tfor ( int i = 1; i &lt; n; i++ )
  {\n\n\t\t\t\t\tif ( i &gt;= samples )
  {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta =
  dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ]
  * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb +=
  weights[ i ] * getSample( theta, axis
  );\n\n\t\t\t\t}\n\n\t\t\t\tgl_FragColor = linearToOutputTexel(
  gl_FragColor
  );\n\n\t\t\t}\n\t\t`,blending:0,depthTest:!1,depthWrite:!1})}(Ih),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){kh=this._renderer.getRenderTarget();const
  r=this._allocateTargets();return
  this._sceneToCubeUV(t,n,i,r),e&gt;0&amp;&amp;this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t){return
  this._fromTexture(t)}fromCubemap(t){return
  this._fromTexture(t)}compileCubemapShader(){null===this._cubemapShader&amp;&amp;(this._cubemapShader=Kh(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){null===this._equirectShader&amp;&amp;(this._equirectShader=Qh(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),null!==this._cubemapShader&amp;&amp;this._cubemapShader.dispose(),null!==this._equirectShader&amp;&amp;this._equirectShader.dispose();for(let
  t=0;t&lt;6;e++){const
  n=e%3;0==n?(r.up.set(0,s[e],0),r.lookAt(a[e],0,0)):1==n?(r.up.set(0,0,s[e]),r.lookAt(0,a[e],0)):(r.up.set(0,s[e],0),r.lookAt(0,0,a[e])),Jh(i,n*Ch,e&gt;2?Ch:0,Ch,Ch),o.setRenderTarget(i),u&amp;&amp;o.render(zh,r),o.render(t,r)}o.toneMapping=h,o.outputEncoding=c,o.autoClear=l}_textureToCubeUV(t,e){const
  n=this._renderer;t.isCubeTexture?null==this._cubemapShader&amp;&amp;(this._cubemapShader=Kh()):null==this._equirectShader&amp;&amp;(this._equirectShader=Qh());const
  i=t.isCubeTexture?this._cubemapShader:this._equirectShader,r=new
  Wn(Oh[0],i),s=i.uniforms;s.envMap.value=t,t.isCubeTexture||s.texelSize.value.set(1/t.image.width,1/t.image.height),s.inputEncoding.value=Nh[t.encoding],s.outputEncoding.value=Nh[e.texture.encoding],Jh(e,0,0,3*Ch,2*Ch),n.setRenderTarget(e),n.render(r,Fh)}_applyPMREM(t){const
  e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let
  e=1;eIh&amp;&amp;console.warn(`sigmaRadians, ${r}, is too large
  and will clip, as it requested ${m} samples when the maximum is
  set to 20`);const f=[];let g=0;for(let
  t=0;t4?i-8+4:0),3*v,2*v),o.setRenderTarget(e),o.render(c,Fh)}},t.ParametricBufferGeometry=wo,t.ParametricGeometry=wo,t.Particle=function(t){return
  console.warn("THREE.Particle has been renamed to
  THREE.Sprite."),new
  Vs(t)},t.ParticleBasicMaterial=function(t){return
  console.warn("THREE.ParticleBasicMaterial has been renamed to
  THREE.PointsMaterial."),new
  _a(t)},t.ParticleSystem=function(t,e){return
  console.warn("THREE.ParticleSystem has been renamed to
  THREE.Points."),new
  Ta(t,e)},t.ParticleSystemMaterial=function(t){return
  console.warn("THREE.ParticleSystemMaterial has been renamed to
  THREE.PointsMaterial."),new
  _a(t)},t.Path=Bl,t.PerspectiveCamera=Kn,t.Plane=Ne,t.PlaneBufferGeometry=ci,t.PlaneGeometry=ci,t.PlaneHelper=class
  extends fa{constructor(t,e=1,n=16776960){const i=n,r=new
  En;r.setAttribute("position",new
  mn([1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],3)),r.computeBoundingSphere(),super(r,new
  ca({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const
  s=new En;s.setAttribute("position",new
  mn([1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],3)),s.computeBoundingSphere(),this.add(new
  Wn(s,new
  en({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){let
  e=-this.plane.constant;Math.abs(e)&lt;1e-8&amp;&amp;(e=1e-8),this.scale.set(.5*this.size,.5*this.size,e),this.children[0].material.side=e&lt;0?1:0,this.lookAt(this.plane.normal),super.updateMatrixWorld(t)}},t.PointCloud=function(t,e){return
  console.warn("THREE.PointCloud has been renamed to
  THREE.Points."),new
  Ta(t,e)},t.PointCloudMaterial=function(t){return
  console.warn("THREE.PointCloudMaterial has been renamed to
  THREE.PointsMaterial."),new
  _a(t)},t.PointLight=Zl,t.PointLightHelper=class extends
  Wn{constructor(t,e,n){super(new So(e,4,2),new
  en({wireframe:!0,fog:!1,toneMapped:!1})),this.light=t,this.light.updateMatrixWorld(),this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){void
  0!==this.color?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},t.Points=Ta,t.PointsMaterial=_a,t.PolarGridHelper=class
  extends
  ya{constructor(t=10,e=16,n=8,i=64,r=4473924,s=8947848){r=new
  tn(r),s=new tn(s);const a=[],o=[];for(let n=0;n&lt;=e;n++){const
  i=n/e*(2*Math.PI),l=Math.sin(i)*t,c=Math.cos(i)*t;a.push(0,0,0),a.push(l,0,c);const
  h=1&amp;n?r:s;o.push(h.r,h.g,h.b),o.push(h.r,h.g,h.b)}for(let
  e=0;e&lt;=n;e++){const l=1&amp;e?r:s,c=t-t/n*e;for(let
  t=0;t