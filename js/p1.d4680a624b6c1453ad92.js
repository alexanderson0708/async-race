(()=>{"use strict";var n={d:(e,t)=>{for(var c in t)n.o(t,c)&&!n.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:t[c]})},o:(n,e)=>Object.prototype.hasOwnProperty.call(n,e)};n.d({},{Y:()=>_,h:()=>$});const e=(n,e,t,c)=>{document.querySelector(".garage__text").innerHTML=`Garage ( ${c} )`;const a=document.getElementById("cars__container"),s=document.createElement("div"),o=document.createElement("div");s.className="car__container",s.id=`${t}`,a.append(s),o.className="car__box",s.append(o);const i=document.createElement("div");i.className="car__title-container",o.append(i);const r=document.createElement("button");r.className="select-btn",r.innerHTML="select",r.id=`${t}`;const d=document.createElement("button");d.className="remove-btn",d.innerHTML="remove",d.id=`${t}`;const l=document.createElement("span");l.className="brand",l.innerHTML=`${n}`,l.id=`brand-${t}`;const m=document.createElement("span");m.className="model",m.id=`model-${t}`,m.innerHTML="",i.append(r,d,l,m);const u=document.createElement("div");u.className="car__main",o.append(u);const p=document.createElement("div"),h=document.createElement("button");h.className="start-btn",h.innerHTML="A",h.id=`start-btn-${t}`,h.disabled=!1,h.dataset.status="started";const g=document.createElement("button");g.className="stop-btn",g.innerHTML="B",g.id=`stop-btn-${t}`,g.disabled=!0,g.dataset.status="stopped",p.append(h,g);const z=document.createElement("img");z.src="../images/flag.png",z.style.width="80px",z.className="flag",z.id=`flag-${t}`,z.alt="finish";const y=document.createElement("div");y.className="car",y.innerHTML=`<svg id="car-${t}"  width="200pt" height="60pt" viewBox="0 0 300.000000 779.000000"\n    preserveAspectRatio="xMidYMid meet">\n   <g id="color-${t}"transform="translate(-1200,800) scale(0.4,-0.4)"\n   fill="${e}" stroke="none">\n   <path d="M1890 1741 c-5 -11 -10 -31 -10 -45 0 -22 -10 -28 -127 -67 -180 -59\n   -406 -151 -634 -258 -108 -50 -209 -91 -225 -91 -16 0 -80 -7 -143 -17 -69\n   -10 -116 -13 -118 -7 -2 5 -39 72 -82 149 l-78 140 58 7 c65 7 79 13 78 31 0\n   9 -2 9 -6 0 -3 -9 -28 -13 -75 -13 -58 0 -71 3 -74 18 -5 15 -15 17 -80 14\n   -71 -4 -74 -3 -74 18 0 19 4 21 28 15 42 -10 254 -7 266 5 22 22 -15 29 -174\n   32 -107 2 -172 7 -185 15 -16 10 18 12 177 13 l197 0 4 -37 4 -38 1 43 2 42\n   -220 0 -220 0 0 -70 c0 -66 1 -71 26 -80 14 -6 47 -10 74 -10 29 0 50 -5 53\n   -12 3 -7 32 -80 66 -162 34 -82 61 -150 61 -152 0 -1 -20 -6 -45 -10 -61 -9\n   -75 -31 -75 -116 0 -54 3 -68 15 -68 20 0 20 -158 0 -215 -21 -57 -18 -66 5\n   -22 11 20 20 55 20 77 0 29 4 40 15 40 18 0 19 -21 5 -72 -14 -48 -41 -80 -71\n   -84 -40 -4 -77 -22 -87 -41 -15 -27 4 -202 24 -224 8 -9 18 -36 21 -59 5 -32\n   2 -44 -13 -55 -19 -15 -19 -15 1 -30 10 -9 26 -34 35 -58 l16 -42 104 -11\n   c413 -45 723 -75 726 -71 3 2 0 35 -7 73 -6 38 -11 127 -11 199 0 202 44 335\n   141 432 65 65 194 124 271 122 14 0 -4 -8 -40 -17 -83 -22 -152 -62 -215 -127\n   -174 -178 -181 -454 -16 -637 51 -57 145 -122 194 -135 18 -5 -195 -10 -503\n   -13 -294 -3 806 -5 2445 -5 1639 0 2753 2 2475 5 -278 3 -498 6 -489 8 44 6\n   141 67 193 122 165 173 165 427 0 601 -65 67 -150 114 -235 128 -44 7 -48 9\n   -19 10 119 3 278 -100 343 -223 68 -130 87 -226 87 -451 l0 -175 188 0 c104 0\n   277 3 386 7 l197 6 -3 36 c-3 33 -6 36 -38 39 -67 4 -158 33 -180 57 -18 19\n   -24 40 -28 96 -5 69 -4 72 24 94 l28 22 -11 109 c-12 119 -43 214 -94 284 -45\n   62 -208 132 -478 204 -51 14 -131 41 -176 61 -100 43 -211 60 -485 75 -107 6\n   -242 15 -300 19 -61 5 -130 5 -165 -1 l-60 -9 -210 126 c-236 142 -609 331\n   -730 370 -195 63 -529 90 -985 80 -151 -3 -331 -12 -400 -20 -118 -13 -128\n   -13 -180 5 -75 26 -166 27 -180 1z m130 0 l45 -7 -78 -12 c-101 -16 -100 -16\n   -87 8 12 22 39 24 120 11z m1295 -17 c133 -14 290 -45 322 -62 12 -7 10 -12\n   -12 -26 -24 -16 -30 -16 -73 -2 -138 46 -413 76 -697 76 -343 0 -574 -22 -810\n   -76 -147 -33 -146 -33 -140 -25 2 5 -8 14 -23 20 -23 11 -24 14 -10 22 22 12\n   230 55 343 70 204 27 857 29 1100 3z m-1285 -21 c-14 -3 -51 -11 -83 -18 -42\n   -10 -57 -10 -54 -2 5 16 43 25 107 25 30 -1 44 -3 30 -5z m1115 -13 c166 -16\n   308 -39 383 -62 102 -31 259 -109 562 -279 151 -85 287 -160 302 -168 14 -7\n   29 -24 32 -36 3 -13 9 -30 12 -39 5 -13 -2 -16 -40 -16 -41 0 -53 6 -138 75\n   -51 41 -97 75 -103 75 -5 0 6 -13 25 -30 19 -16 30 -29 24 -30 -12 0 -66 53\n   -67 67 -1 24 -224 166 -395 253 -230 115 -384 149 -767 166 -161 7 -405 -6\n   -570 -31 -218 -33 -510 -124 -641 -201 -49 -29 -104 -87 -104 -110 0 -37 48\n   -98 98 -123 12 -7 82 -16 155 -21 100 -7 54 -8 -193 -4 -179 2 -482 4 -674 4\n   -192 0 -347 2 -345 5 3 2 68 11 145 19 189 21 292 53 615 191 476 204 570 235\n   814 270 229 33 654 45 870 25z m-2900 -22 c34 -17 45 -28 45 -45 0 -13 7 -26\n   15 -29 35 -14 11 -25 -47 -22 l-63 3 -3 58 c-2 31 -1 57 2 57 3 0 26 -10 51\n   -22z m335 -18 c0 -6 -43 -10 -112 -9 -173 2 -197 16 -30 18 89 1 142 -3 142\n   -9z m2495 0 c389 -25 562 -83 922 -308 40 -25 71 -47 70 -49 -2 -2 -64 31\n   -138 73 -266 151 -376 199 -531 233 -136 29 -294 41 -543 41 -409 0 -690 -56\n   -980 -194 -112 -54 -165 -93 -165 -121 0 -27 27 -71 62 -100 30 -25 31 -27 8\n   -20 -38 12 -67 36 -90 77 -19 34 -20 40 -6 65 36 70 234 162 490 228 279 72\n   571 96 901 75z m623 -9 c11 -6 7 -13 -15 -28 -22 -16 -33 -18 -51 -10 -23 11\n   -23 11 10 28 39 21 39 21 56 10z m-1828 -16 c14 -8 21 -14 15 -14 -5 0 -21 6\n   -35 14 -14 8 -20 14 -15 14 6 0 21 -6 35 -14z m-20 -11 c22 -9 40 -19 40 -23\n   0 -3 -28 -17 -62 -30 -35 -13 -198 -82 -364 -153 -300 -128 -387 -155 -405\n   -127 -6 10 -9 10 -9 2 0 -9 -14 -13 -42 -12 l-43 2 40 7 c38 6 39 6 10 11 -26\n   3 -11 13 113 72 240 114 623 267 669 267 7 0 31 -7 53 -16z m1325 5 c242 -21\n   391 -66 620 -190 72 -39 136 -76 143 -83 14 -13 15 -41 6 -130 -3 -32 -2 -62\n   4 -68 6 -6 7 9 4 40 -2 27 0 58 6 68 8 15 9 10 5 -23 -3 -23 -1 -55 5 -71 l10\n   -29 -67 -2 c-62 -2 -712 20 -1043 35 l-148 7 -34 111 c-82 265 -98 329 -84\n   337 19 12 430 11 573 -2z m-630 -9 c7 -12 135 -434 132 -436 -3 -3 -699 24\n   -785 30 -40 3 -84 12 -97 19 -30 15 -75 75 -75 98 0 79 450 251 765 292 17 2\n   35 5 42 6 6 0 15 -3 18 -9z m95 -213 c34 -114 60 -210 57 -213 -6 -6 -7 -2\n   -82 244 -58 195 -60 201 -46 187 5 -6 37 -104 71 -218z m1302 127 c191 -96\n   372 -197 501 -280 37 -24 72 -44 77 -44 5 0 12 -4 15 -10 4 -6 -19 -9 -62 -8\n   -64 1 -66 1 -23 8 l45 7 -59 1 c-57 2 -71 8 -315 146 -141 79 -296 165 -346\n   191 -49 26 -92 50 -95 52 -8 7 32 33 52 33 10 0 105 -43 210 -96z m-3502 56\n   c0 -5 -25 -10 -55 -10 -30 0 -55 5 -55 10 0 6 25 10 55 10 30 0 55 -4 55 -10z\n   m106 -190 c47 -89 85 -163 83 -165 -3 -2 -38 -5 -78 -7 l-74 -3 -68 168 -67\n   167 58 0 59 0 87 -160z m3442 -79 c3 -8 -1 -12 -9 -9 -7 2 -15 10 -17 17 -3 8\n   1 12 9 9 7 -2 15 -10 17 -17z m70 -30 c20 -11 50 -33 66 -50 l30 -31 -25 1\n   c-13 0 -50 4 -81 8 -32 4 -58 4 -58 0 0 -4 34 -10 75 -14 51 -4 75 -11 75 -20\n   0 -19 -62 -45 -108 -45 -37 0 -41 3 -51 33 -12 36 -10 127 2 127 5 0 5 -6 1\n   -12 -4 -7 2 -5 12 5 22 21 17 21 62 -2z m-3070 -17 c28 -4 52 -10 52 -14 0\n   -26 -561 -75 -597 -52 -6 4 34 8 90 8 76 1 103 5 111 16 7 9 49 21 106 30 110\n   18 164 20 238 12z m-523 -81 c44 -6 45 -7 29 -24 -10 -11 -25 -19 -35 -19 -24\n   0 -99 30 -99 39 0 15 15 22 37 16 13 -3 43 -8 68 -12z m3750 -28 l40 -35 -85\n   0 -85 0 33 20 c18 11 35 27 38 35 8 21 13 19 59 -20z m765 -13 c96 -17 274\n   -45 395 -61 121 -17 253 -36 293 -42 186 -27 537 -156 537 -197 0 -7 7 -17 15\n   -22 13 -8 13 -10 -2 -10 -9 0 -19 6 -21 13 -4 9 -8 9 -15 -2 -17 -24 -152 11\n   -647 170 l-130 42 -230 8 c-126 4 -297 14 -380 23 -82 8 -193 18 -246 21 l-96\n   7 -11 36 c-6 20 -10 37 -9 38 1 1 56 -5 122 -13 1002 -118 1320 -176 1540\n   -285 44 -21 69 -30 55 -19 -43 35 -183 90 -307 120 -224 56 -468 96 -913 151\n   -140 17 -280 35 -310 39 l-55 7 65 10 c76 11 116 7 350 -34z m-715 2 c39 -35\n   39 -35 7 -17 -35 19 -71 53 -56 53 5 0 27 -16 49 -36z m-2311 16 c396 -6 721\n   -12 723 -14 3 -2 -6 -21 -19 -43 -13 -21 -29 -51 -36 -67 -13 -28 -13 -28 -85\n   -22 -40 3 -180 7 -312 10 l-240 4 190 -9 c105 -5 245 -12 312 -15 l121 -6 7\n   -36 c14 -77 108 -371 145 -455 24 -52 34 -87 27 -87 -35 0 -584 41 -593 44 -6\n   2 -14 28 -17 58 -31 256 -161 435 -362 497 -87 27 -268 30 -359 6 -132 -35\n   -257 -134 -306 -243 -22 -48 -24 -50 -59 -46 -20 2 -121 11 -225 20 -228 19\n   -255 27 -256 76 0 13 13 18 54 23 67 9 123 52 156 120 l22 45 161 1 c89 1 196\n   5 237 9 41 4 -33 5 -165 3 -223 -5 -244 -4 -300 15 -33 11 -94 24 -135 28 -61\n   5 -136 29 -159 50 -2 2 7 12 20 23 23 19 39 20 379 20 195 1 679 -4 1074 -9z\n   m3151 0 c249 -16 390 -37 457 -67 101 -45 103 -45 -387 28 -348 53 -356 57\n   -70 39z m-4678 -26 c35 -14 37 -38 3 -49 -9 -3 -25 -14 -35 -25 -33 -36 -45\n   -25 -45 41 0 67 -2 66 77 33z m2738 -4 c248 -11 522 -18 610 -16 120 2 136 2\n   65 -4 -58 -4 -7 -5 130 -3 124 2 254 0 290 -5 51 -7 26 -8 -110 -6 l-175 2\n   135 -8 c74 -4 158 -8 187 -9 l52 -1 41 -81 c22 -45 39 -84 37 -86 -2 -2 -132\n   6 -288 17 -156 12 -466 31 -689 44 -367 21 -411 25 -465 46 -38 15 -80 23\n   -115 22 -74 -1 -153 -12 -165 -23 -13 -13 -75 -11 -75 1 0 24 64 130 78 130 4\n   0 210 -9 457 -20z m-2655 -30 c11 -7 7 -10 -18 -10 -20 0 -31 4 -27 10 8 13\n   26 13 45 0z m65 -51 c19 -19 19 -19 -54 -19 -63 0 -72 2 -67 16 3 9 6 20 6 26\n   0 17 93 -1 115 -23z m4265 0 c118 -12 292 -22 385 -23 l170 -3 165 -52 c91\n   -29 203 -65 250 -81 l85 -28 -60 -3 c-33 -2 -80 -4 -105 -4 -25 -1 -64 -5 -87\n   -9 -38 -7 -49 -4 -100 28 -105 64 -231 86 -360 62 -108 -19 -181 -53 -247\n   -116 -109 -103 -143 -219 -152 -509 -3 -102 -6 -186 -7 -188 -5 -4 -2636 13\n   -2641 18 -2 2 -2 73 1 157 5 118 9 152 20 152 10 0 13 -30 14 -142 l2 -143 9\n   140 c5 77 10 141 12 142 1 1 137 -7 302 -18 l299 -21 43 -49 c24 -27 50 -49\n   58 -49 8 0 14 -4 14 -9 0 -5 -70 -10 -157 -10 -225 -2 -451 -30 -502 -62 -14\n   -8 -13 -9 4 -5 195 51 340 60 850 52 585 -9 1576 -34 1581 -39 3 -2 0 -16 -5\n   -31 l-11 -26 -197 0 c-398 0 -1481 21 -1596 30 -107 9 -239 31 -285 47 -13 5\n   -14 3 -6 -6 7 -7 61 -21 120 -32 141 -25 455 -36 1305 -45 l656 -7 16 24 c14\n   19 17 48 17 145 0 162 -2 164 -136 175 -54 4 -100 8 -101 9 -2 0 -3 67 -3 150\n   l0 149 103 -5 c119 -7 127 -8 127 -29 0 -12 -16 -15 -92 -16 -108 -1 -94 -17\n   15 -18 83 -1 126 16 162 63 42 55 29 62 -165 81 -91 8 -166 19 -168 23 -1 4\n   -20 42 -41 86 l-38 79 131 -7 c72 -4 228 -16 346 -27z m-4397 3 c-2 -10 -14\n   -22 -26 -27 -28 -13 -36 -55 -10 -56 15 -1 15 -2 2 -6 -11 -3 -15 -11 -12 -24\n   3 -11 0 -19 -7 -19 -21 0 -8 120 15 136 26 19 44 17 38 -4z m297 -6 l55 -14\n   -46 -1 c-25 -1 -67 -4 -93 -7 -40 -6 -46 -10 -46 -30 0 -23 2 -24 84 -24 80 0\n   84 1 102 27 9 15 19 22 21 16 6 -18 -21 -65 -58 -98 -17 -16 -29 -25 -25 -18\n   4 8 -14 13 -61 18 -101 9 -106 13 -25 14 51 1 78 6 88 16 14 13 6 15 -66 15\n   l-81 0 6 34 c4 20 2 43 -5 56 -12 22 -12 23 41 16 30 -4 79 -13 109 -20z\n   m2180 -16 c12 -8 12 -10 -5 -9 -11 0 -38 4 -60 8 l-40 9 45 1 c25 0 52 -4 60\n   -9z m-1131 -15 c214 -57 346 -232 378 -505 5 -41 3 -50 -10 -50 -11 0 -17 16\n   -22 62 -31 269 -187 449 -411 477 -83 10 -231 -2 -294 -24 -102 -36 -199 -120\n   -236 -206 -11 -25 -24 -39 -36 -39 -24 0 -23 6 13 69 62 107 169 187 292 217\n   72 17 260 17 326 -1z m-1201 -12 c-3 -15 -16 -19 -77 -21 -56 -2 -72 0 -69 10\n   5 13 52 24 116 27 27 1 33 -2 30 -16z m202 9 c0 -22 -29 -32 -97 -32 -57 0\n   -73 3 -73 15 0 10 16 15 58 18 31 2 69 4 85 5 15 1 27 -2 27 -6z m1973 1 c-7\n   -2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z m226 -9 c9 -8 -175 -2\n   -194 7 -13 5 19 6 85 3 58 -4 107 -8 109 -10z m-2559 -9 c0 -8 -7 -15 -15 -15\n   -16 0 -20 12 -8 23 11 12 23 8 23 -8z m2266 -5 c14 -14 147 -50 186 -50 17 0\n   45 4 62 9 113 34 107 34 428 17 354 -19 888 -53 993 -64 67 -7 70 -8 76 -37\n   16 -75 4 -583 -14 -601 -4 -4 -630 8 -1214 25 l-271 7 -48 30 c-40 24 -54 42\n   -90 114 -61 120 -192 529 -177 553 6 11 57 9 69 -3z m69 0 c4 -6 -5 -10 -19\n   -10 -14 0 -26 5 -26 10 0 6 9 10 19 10 11 0 23 -4 26 -10z m-963 -20 c183 -56\n   283 -198 323 -457 6 -35 4 -43 -9 -43 -13 0 -16 12 -16 65 0 77 -28 168 -72\n   238 -63 99 -196 189 -298 202 -45 5 -45 5 10 -10 214 -60 350 -235 350 -451 0\n   -186 -113 -353 -286 -423 -27 -11 -41 -20 -30 -20 32 -1 134 60 186 111 60 58\n   95 116 124 204 12 36 26 65 32 65 10 -1 12 -226 2 -283 l-7 -37 42 -5 c23 -3\n   626 -8 1339 -11 l1298 -5 4 22 c3 13 7 113 9 223 3 172 7 209 26 267 57 175\n   194 288 366 304 50 4 50 4 -12 -10 -87 -20 -153 -59 -218 -127 -214 -224 -135\n   -586 152 -705 l58 -24 -1830 3 -1830 2 -76 36 c-287 137 -356 504 -138 734 80\n   84 179 130 315 144 118 12 117 12 186 -9z m1208 11 c0 -5 -18 -12 -40 -15 -22\n   -3 -57 -9 -77 -12 -21 -3 -49 -1 -63 5 -21 8 -13 10 45 12 l70 3 -85 6 -85 6\n   118 2 c64 1 117 -2 117 -7z m-2472 -18 c-15 -2 -42 -2 -60 0 -18 2 -6 4 27 4\n   33 0 48 -2 33 -4z m-11 -40 c-20 -2 -52 -2 -70 0 -17 2 0 4 38 4 39 0 53 -2\n   32 -4z m153 -22 l45 -8 -35 -6 c-19 -3 -88 -8 -152 -11 -111 -4 -118 -3 -118\n   15 0 18 8 19 108 18 59 0 127 -4 152 -8z m4782 -28 c170 -80 264 -259 237\n   -449 -25 -179 -168 -321 -358 -356 -123 -23 -265 25 -361 122 -129 131 -161\n   311 -85 478 48 105 117 170 232 218 51 21 71 24 163 22 94 -3 112 -6 172 -35z\n   m-729 -2 c5 -1 5 -5 2 -11 -3 -5 -2 -10 4 -10 5 0 13 5 16 10 9 15 25 12 25\n   -5 0 -14 -19 -15 -142 -12 -89 2 -122 1 -88 -4 30 -4 93 -7 140 -8 56 -1 81\n   -4 74 -11 -14 -14 -280 4 -299 20 -8 7 -15 22 -15 34 l0 22 138 -12 c75 -7\n   141 -13 145 -13z m-4085 -8 c-10 -2 -28 -2 -40 0 -13 2 -5 4 17 4 22 1 32 -1\n   23 -4z m-118 -29 c0 -9 -17 -34 -39 -55 -41 -42 -40 -52 2 -19 14 11 32 36 38\n   55 11 29 18 35 41 35 23 0 28 -4 28 -23 0 -26 23 -51 55 -61 11 -3 119 -15\n   239 -26 120 -11 221 -21 223 -23 2 -3 -1 -16 -7 -31 -9 -26 -12 -26 -72 -21\n   -82 7 -724 55 -752 56 -19 0 -19 1 3 10 14 5 30 8 37 5 20 -8 60 30 78 74 16\n   40 16 40 71 40 44 0 55 -3 55 -16z m5440 6 c36 -6 87 -18 113 -26 41 -14 51\n   -22 72 -64 22 -43 23 -50 9 -61 -24 -20 -165 -24 -199 -6 -26 13 -29 19 -28\n   63 l2 49 -11 -42 c-6 -24 -14 -43 -17 -43 -3 0 -37 28 -76 63 l-69 62 30 6\n   c46 10 104 10 174 -1z m-192 -65 c166 -140 225 -165 389 -165 l93 0 -6 28 c-4\n   15 -15 44 -26 65 -10 20 -16 37 -13 37 2 0 16 -24 31 -52 14 -29 37 -65 50\n   -79 43 -45 45 -189 3 -189 -5 0 -10 28 -11 63 -1 54 -2 56 -5 16 l-4 -46 -79\n   -6 c-126 -10 -149 -29 -190 -152 -12 -38 -24 -73 -27 -77 -5 -10 -79 18 -116\n   44 -32 22 -32 22 -13 0 10 -11 42 -31 72 -43 56 -24 59 -26 46 -46 -10 -16\n   -57 -4 -109 27 -20 11 -38 19 -40 16 -3 -2 17 -17 44 -33 43 -25 57 -28 138\n   -28 79 0 94 3 119 23 16 12 43 22 60 22 18 0 41 6 51 14 18 13 18 14 -1 19\n   -10 3 -36 9 -56 13 -34 5 -38 10 -38 35 0 26 3 29 34 29 19 0 37 4 40 9 7 10\n   -17 21 -45 21 -15 0 -19 7 -19 39 0 33 -4 40 -22 43 -13 2 -1 6 25 9 40 3 45\n   2 30 -8 -22 -17 -9 -16 48 1 l47 14 4 -98 c3 -88 6 -102 28 -125 21 -22 22\n   -28 10 -35 -29 -19 -86 -30 -155 -30 -38 0 -77 -5 -85 -10 -19 -12 -6 -12 118\n   0 60 5 104 15 125 28 25 14 39 17 57 10 14 -5 52 -13 85 -16 53 -6 60 -10 63\n   -30 l4 -23 -309 7 c-270 5 -313 9 -352 25 -33 15 -41 15 -31 4 22 -26 82 -35\n   253 -35 104 0 167 -4 167 -10 0 -6 -86 -10 -238 -10 l-238 0 0 173 c1 245 -35\n   382 -134 513 -38 51 -39 53 -17 57 56 11 69 6 145 -58z m21 13 c31 -28 83 -69\n   115 -90 55 -35 64 -38 133 -38 77 0 143 19 143 42 0 7 -9 26 -19 42 -20 30\n   -18 56 3 56 15 0 39 -47 31 -60 -3 -4 6 -32 20 -62 l25 -53 -68 -3 c-82 -4\n   -182 13 -233 38 -20 11 -72 48 -114 82 -43 35 -87 71 -99 80 -13 11 -16 18 -7\n   18 7 0 39 -23 70 -52z m-1064 2 c-3 -5 -13 -10 -21 -10 -8 0 -14 5 -14 10 0 6\n   9 10 21 10 11 0 17 -4 14 -10z m1526 -35 c11 -25 19 -59 17 -76 -3 -28 -6 -25\n   -40 45 -35 71 -37 76 -17 76 14 0 26 -13 40 -45z m-5101 -44 c0 -6 -8 -40 -17\n   -78 -19 -78 -22 -325 -5 -408 6 -27 9 -51 8 -53 -8 -7 -670 93 -680 103 -7 7\n   -21 49 -31 94 -10 45 -20 79 -23 77 -2 -2 4 -40 13 -83 18 -79 34 -108 64\n   -116 9 -3 -6 -2 -34 1 -27 3 -65 5 -83 4 -29 -2 -35 2 -48 34 -22 52 -13 61\n   16 14 14 -22 28 -40 33 -40 4 0 -6 20 -23 45 -24 34 -37 45 -58 45 -25 1 -25\n   2 -9 14 25 19 23 89 -4 125 -27 37 -42 221 -17 221 15 0 613 -44 759 -56 l76\n   -7 -3 -46 -4 -46 10 40 c24 101 33 125 46 125 8 0 14 -4 14 -9z m5154 -81 c4\n   -24 3 -31 -4 -24 -6 6 -13 28 -16 50 -6 48 10 26 20 -26z m-1643 -147 c4 -5\n   10 -18 14 -30 6 -23 5 -23 -94 -23 -54 0 -106 3 -115 6 -15 6 -23 54 -11 65 7\n   7 198 -10 206 -18z m-3 -69 c17 -5 22 -14 22 -40 l0 -34 -89 0 c-127 0 -151 6\n   -151 40 0 14 3 30 7 33 8 9 180 9 211 1z m1472 -34 c0 -29 -1 -30 -51 -30 -52\n   0 -54 4 -21 43 8 9 28 17 44 17 24 0 28 -4 28 -30z m0 -49 l45 -8 -60 -2 c-33\n   0 -67 4 -75 9 -19 12 24 12 90 1z m-1450 -42 l0 -41 -122 7 c-68 4 -124 8\n   -124 9 -1 0 1 16 3 34 l5 32 119 0 119 0 0 -41z m1440 -9 l0 -30 -60 0 c-62 0\n   -68 5 -50 41 8 15 22 19 60 19 49 0 50 -1 50 -30z m-5500 -50 c52 -9 51 -9\n   -20 -4 -41 3 -79 10 -85 15 -6 6 2 7 20 4 17 -3 55 -10 85 -15z m5550 1 c73\n   -9 44 -18 -87 -26 -100 -7 -102 -7 -96 14 5 19 12 21 67 20 33 -1 86 -4 116\n   -8z m-5453 -17 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m5373\n   -39 c-14 -8 -46 -14 -72 -15 -38 0 -46 3 -42 15 5 11 23 15 73 15 62 -1 65 -2\n   41 -15z"/>\n   <path d="M1794 1605 c11 -8 17 -17 15 -20 -3 -2 -86 -38 -185 -79 -98 -40\n   -231 -97 -294 -126 -63 -29 -146 -63 -185 -77 -49 -16 -58 -22 -31 -18 21 4\n   90 29 152 56 182 79 332 143 439 188 133 55 135 56 110 75 -11 9 -24 15 -30\n   15 -5 0 -1 -6 9 -14z"/>\n   <path d="M5103 971 c-127 -37 -235 -126 -293 -241 -32 -63 -70 -182 -69 -214\n   0 -11 11 15 23 59 32 116 70 188 136 259 101 108 224 152 400 144 116 -6 188\n   -26 304 -84 37 -19 70 -33 73 -30 7 7 -131 75 -201 98 -88 30 -287 35 -373 9z"/>\n   <path d="M1539 857 c-103 -29 -181 -96 -228 -197 -22 -46 -26 -69 -26 -145 0\n   -78 4 -97 28 -147 36 -73 119 -150 192 -177 86 -32 193 -29 270 8 77 36 140\n   98 173 169 23 49 27 70 27 152 0 113 -19 163 -89 238 -84 90 -230 132 -347 99z\n   m210 -22 c63 -22 124 -71 164 -132 114 -172 49 -401 -142 -495 -37 -18 -63\n   -23 -136 -23 -77 0 -98 4 -147 27 -251 118 -261 478 -16 604 91 46 182 53 277\n   19z"/>\n   <path d="M1555 831 c-89 -23 -167 -87 -212 -174 -24 -45 -28 -64 -28 -137 0\n   -99 20 -152 80 -219 34 -38 66 -57 49 -29 -4 7 -3 8 5 4 6 -4 9 -12 5 -17 -3\n   -5 20 -21 50 -35 63 -29 153 -35 221 -14 50 15 121 63 117 79 -1 7 2 10 7 7\n   13 -8 63 54 57 70 -3 8 0 13 6 11 17 -4 36 64 37 133 1 73 -7 112 -20 104 -5\n   -3 -6 2 -3 10 7 18 -24 79 -36 71 -5 -3 -12 0 -16 6 -4 8 -3 9 4 5 7 -4 12 -4\n   12 0 0 10 -52 64 -61 64 -13 0 -4 -28 16 -50 19 -20 18 -21 -35 -75 -30 -30\n   -59 -55 -66 -55 -6 0 -19 9 -29 19 -16 19 -16 21 4 49 11 16 37 44 58 63 21\n   19 38 41 38 49 0 8 -21 25 -46 38 -51 25 -162 37 -214 23z m113 -97 c-2 -60\n   -7 -79 -20 -88 -13 -8 -23 -8 -35 0 -14 9 -19 28 -21 88 l-3 76 41 0 41 0 -3\n   -76z m-106 10 l-4 -56 -39 38 c-21 20 -35 42 -32 47 4 6 -1 8 -11 4 -10 -4\n   -15 -3 -11 4 4 5 14 7 23 5 10 -3 24 -1 32 4 36 23 45 12 42 -46z m205 42 c13\n   -2 25 -6 28 -9 3 -4 2 -5 -1 -3 -6 5 -84 -77 -78 -83 2 -2 12 2 21 10 10 7 2\n   -4 -17 -24 -33 -36 -34 -39 -20 -65 23 -41 56 -40 99 2 21 20 40 33 44 30 4\n   -4 12 -2 19 3 25 20 43 11 45 -24 l3 -33 -52 0 c-49 0 -50 1 -35 18 26 29 20\n   38 -8 12 -14 -13 -25 -27 -25 -31 0 -4 19 -10 43 -12 l42 -4 -50 -1 c-58 -3\n   -70 -9 -79 -39 -9 -29 9 -63 34 -63 12 0 17 -5 14 -14 -3 -8 -1 -17 5 -21 6\n   -3 11 -1 11 4 0 7 23 11 55 11 l55 0 -15 -37 c-21 -50 -21 -50 -55 -18 -17 16\n   -37 30 -46 31 -9 1 -24 10 -33 18 -23 21 -30 20 -58 -6 -29 -27 -29 -38 -1\n   -74 12 -16 15 -23 8 -16 -23 20 -29 14 -33 -31 -3 -37 -4 -35 -5 15 -2 45 -6\n   59 -21 68 -42 22 -80 0 -82 -48 -1 -17 -3 -21 -6 -9 -6 23 -12 22 -47 -10 -19\n   -17 -16 -12 8 14 31 34 37 46 32 68 -8 30 -49 53 -68 38 -9 -6 -25 -5 -48 3\n   l-35 12 44 4 c49 3 67 22 58 59 -8 31 -68 59 -125 59 -46 0 -50 6 -26 52 l16\n   30 37 -36 c20 -20 40 -34 43 -31 3 4 9 1 14 -6 4 -8 3 -10 -4 -5 -7 4 -12 3\n   -12 -2 0 -16 73 -12 92 5 20 18 24 48 8 58 -5 3 -10 11 -10 16 0 6 4 8 9 4 5\n   -3 12 9 14 27 3 30 4 30 5 -8 2 -47 16 -64 52 -64 30 0 50 17 50 42 0 10 5 15\n   13 13 9 -4 11 10 9 56 -4 61 -4 62 20 54 12 -4 33 -8 45 -9z m-328 -33 c-12\n   -15 -12 -16 3 -11 11 5 32 -9 67 -47 28 -30 51 -57 51 -61 0 -12 -32 -44 -45\n   -44 -7 0 -38 27 -70 61 l-58 60 29 30 c30 31 45 39 23 12z m6 -123 c10 -11 16\n   -20 13 -20 -3 0 -13 9 -23 20 -10 11 -16 20 -13 20 3 0 13 -9 23 -20z m55 -85\n   c7 -8 10 -25 6 -40 -6 -24 -9 -25 -86 -25 l-80 0 0 40 0 40 74 0 c53 0 77 -4\n   86 -15z m425 -25 l0 -35 -73 -3 c-95 -4 -128 21 -86 63 13 12 32 15 88 13 l71\n   -3 0 -35z m-506 -114 c-37 -35 -44 -48 -37 -63 9 -17 9 -17 -6 0 -8 11 -12 26\n   -9 35 4 8 2 13 -3 10 -5 -3 -10 9 -11 28 l-2 34 57 0 57 0 -46 -44z m135 12\n   c9 -15 2 -27 -46 -75 l-57 -57 -25 23 c-32 30 -29 52 12 94 25 25 40 33 68 32\n   24 0 41 -6 48 -17z m261 -28 l49 -50 -27 -27 -27 -27 -50 49 c-46 45 -61 80\n   -43 98 18 18 53 3 98 -43z m-147 -88 l-3 -77 -35 0 -35 0 -3 60 c-5 96 13 126\n   61 103 15 -8 17 -20 15 -86z m-108 -17 l0 -55 -36 15 c-20 8 -40 12 -45 9 -5\n   -3 -9 -2 -9 2 0 6 81 84 87 84 2 0 3 -25 3 -55z m192 37 c7 -7 8 -12 3 -12 -4\n   0 0 -9 10 -20 21 -23 21 -25 -28 -45 l-37 -15 0 55 c0 49 2 55 20 52 11 -2 26\n   -9 32 -15z m-175 -74 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z"/>\n   <path d="M1590 560 c-24 -24 -25 -48 -4 -78 19 -27 64 -29 87 -4 24 26 21 68\n   -5 86 -30 21 -54 20 -78 -4z m70 -8 c31 -25 21 -69 -17 -78 -20 -5 -31 -2 -45\n   16 -23 28 -23 35 2 60 25 25 32 25 60 2z"/>\n   <path d="M1409 723 c-13 -16 -12 -17 4 -4 9 7 17 15 17 17 0 8 -8 3 -21 -13z"/>\n   <path d="M1439 393 l-34 -38 38 34 c20 19 37 36 37 38 0 8 -8 0 -41 -34z"/>\n   <path d="M5169 806 c-87 -31 -158 -98 -198 -187 -16 -33 -21 -65 -21 -130 0\n   -76 4 -93 30 -147 85 -168 286 -235 454 -150 197 100 238 380 80 535 -68 66\n   -137 93 -237 93 -40 -1 -88 -7 -108 -14z m241 -22 c73 -34 126 -86 161 -159\n   24 -50 29 -73 29 -135 0 -62 -5 -85 -29 -135 -55 -115 -148 -178 -273 -183\n   -101 -5 -161 15 -229 76 -139 124 -148 333 -21 466 20 21 64 51 97 67 82 40\n   184 41 265 3z"/>\n   <path d="M5229 789 c-25 -4 -63 -16 -85 -27 -53 -28 -107 -79 -98 -94 4 -7 3\n   -8 -5 -4 -7 5 -20 -12 -37 -49 -34 -73 -36 -179 -6 -247 11 -25 25 -49 32 -53\n   9 -6 11 -4 5 5 -5 9 -4 11 4 6 6 -4 9 -12 5 -18 -3 -5 6 -23 22 -39 27 -29 52\n   -40 38 -17 -4 7 -3 8 5 4 6 -4 9 -12 5 -17 -3 -5 16 -19 42 -31 72 -31 183\n   -30 249 4 28 14 49 30 48 36 -2 6 3 9 10 6 16 -6 61 41 53 55 -4 5 -1 13 5 17\n   8 4 9 3 5 -4 -4 -7 -4 -12 -1 -12 3 0 18 25 32 57 36 78 37 167 2 243 -30 64\n   -83 125 -100 114 -8 -4 -9 -3 -5 5 9 15 -84 57 -139 63 -22 2 -61 1 -86 -3z\n   m91 -76 c0 -85 -7 -103 -40 -103 -34 0 -40 14 -40 96 l0 64 40 0 40 0 0 -57z\n   m-96 25 c3 -13 6 -43 6 -69 0 -51 13 -69 50 -69 40 0 50 18 51 89 0 46 3 60 9\n   46 8 -19 9 -19 9 4 1 18 5 22 19 16 9 -4 25 -10 35 -12 25 -8 22 -17 -23 -57\n   -44 -39 -49 -49 -22 -39 15 6 15 4 -2 -16 -38 -42 16 -107 59 -71 10 8 14 8\n   17 -2 3 -7 20 5 42 30 21 23 42 42 46 42 4 0 11 -11 14 -25 4 -14 11 -23 15\n   -20 5 3 7 -3 4 -14 -4 -15 -18 -19 -70 -24 -75 -7 -93 -18 -93 -56 0 -36 17\n   -51 60 -52 29 -2 30 -3 8 -6 -20 -3 -25 -8 -21 -21 6 -16 5 -16 -14 1 -25 21\n   -41 22 -65 0 -22 -20 -23 -41 -2 -64 15 -17 15 -18 -5 -16 -12 1 -21 7 -21 14\n   0 7 -11 20 -25 29 -23 15 -27 15 -50 0 -21 -14 -25 -25 -25 -61 0 -25 -4 -45\n   -10 -45 -5 0 -10 -11 -10 -25 0 -14 -2 -25 -4 -25 -11 0 -66 23 -66 28 0 3 19\n   26 43 50 28 29 35 41 22 37 -19 -6 -19 -6 -2 8 9 8 17 23 17 34 0 26 -35 57\n   -57 51 -10 -3 -39 -2 -63 2 l-45 7 46 2 c52 1 69 14 69 52 0 35 -13 43 -89 57\n   -35 6 -65 13 -67 15 -6 6 17 67 26 67 4 0 24 -18 44 -40 20 -22 39 -40 43 -40\n   4 0 2 5 -5 12 -23 23 -12 31 12 9 18 -17 32 -22 50 -17 30 7 45 48 26 71 -9\n   10 -9 15 -1 15 6 0 11 15 10 33 -1 27 -2 29 -7 9 -7 -23 -7 -23 -40 11 -34 35\n   -32 45 8 60 28 10 38 7 44 -15z m-117 -14 c-6 -6 51 -59 64 -59 9 0 24 -14 25\n   -23 0 -4 4 -15 8 -24 19 -44 -20 -70 -62 -42 -15 10 -31 17 -35 16 -5 -1 -6 1\n   -3 6 3 5 -6 19 -19 32 -26 24 -28 65 -4 65 8 0 15 6 15 13 2 19 4 22 11 22 3\n   0 4 -3 0 -6z m358 -24 c4 -6 11 -8 16 -4 5 3 8 0 7 -7 -2 -7 2 -13 9 -14 6 0\n   15 -4 20 -9 4 -5 3 -6 -3 -3 -11 6 -29 -18 -26 -34 1 -8 -54 -61 -62 -60 -3 0\n   -13 -2 -22 -6 -39 -15 -68 35 -40 66 9 10 13 21 9 26 -5 4 -3 5 3 2 6 -3 24 7\n   39 23 31 32 40 36 50 20z m99 -204 l-7 -47 -76 3 c-76 3 -76 3 -79 32 -5 38\n   10 46 91 46 44 0 67 4 67 12 0 6 2 9 5 6 3 -2 2 -26 -1 -52z m-410 18 c11 -28\n   6 -52 -10 -58 -9 -3 -45 -6 -80 -6 l-64 0 0 33 c0 19 3 37 7 40 3 4 37 7 74 7\n   52 0 68 -4 73 -16z m-75 -130 c-36 -37 -52 -33 -64 16 -6 25 -5 25 46 21 l51\n   -3 -33 -34z m119 24 c16 -16 15 -43 -3 -58 -8 -7 -13 -16 -10 -20 3 -4 -2 -13\n   -10 -20 -8 -7 -15 -9 -15 -4 0 4 -11 -3 -25 -16 l-26 -24 -26 27 -27 27 49 50\n   c50 51 71 60 93 38z m257 -38 l49 -50 -27 -27 -27 -27 -50 49 c-51 50 -60 71\n   -38 93 22 22 43 13 93 -38z m95 45 c0 -10 -30 -78 -33 -74 -1 2 -18 21 -36 42\n   l-35 37 52 0 c29 0 52 -2 52 -5z m-89 -32 c13 -16 12 -17 -3 -4 -17 13 -22 21\n   -14 21 2 0 10 -8 17 -17z m-153 -25 c14 -14 16 -116 3 -136 -5 -8 -21 -12 -37\n   -10 -28 3 -29 6 -32 57 -4 76 3 101 31 101 13 0 28 -5 35 -12z m83 -45 c13\n   -16 12 -17 -3 -4 -17 13 -22 21 -14 21 2 0 10 -8 17 -17z m29 -64 c0 -5 -53\n   -29 -65 -29 -8 0 -14 54 -9 76 l7 25 33 -32 c19 -18 34 -36 34 -40z"/>\n   <path d="M5241 526 c-41 -43 -4 -106 53 -92 49 12 53 81 6 106 -27 14 -34 13\n   -59 -14z m68 -5 c36 -36 -4 -95 -48 -72 -44 24 -29 85 22 90 4 1 16 -8 26 -18z"/>\n   <path d="M5449 603 l-24 -28 28 24 c25 23 32 31 24 31 -2 0 -14 -12 -28 -27z"/>\n   <path d="M5980 761 c0 -28 5 -51 10 -51 6 0 10 20 10 44 0 25 -4 48 -10 51 -6\n   4 -10 -13 -10 -44z"/>\n   <path d="M6175 760 c10 -11 20 -20 22 -20 2 0 -1 9 -7 20 -6 11 -16 20 -22 20\n   -6 0 -3 -9 7 -20z"/>\n   <path d="M478 536 c-70 -35 11 -177 137 -239 79 -40 316 -92 386 -85 28 2 34\n   7 36 28 1 22 1 22 -4 3 -6 -29 -25 -29 -170 -3 -162 29 -338 87 -227 74 50 -6\n   378 -34 393 -34 8 0 11 26 9 88 l-3 87 -115 6 c-63 4 -193 10 -287 14 -158 7\n   -173 9 -173 26 0 10 5 21 11 25 13 8 303 6 417 -2 69 -6 89 -11 113 -31 16\n   -14 29 -20 29 -14 0 24 -64 50 -134 55 -159 12 -395 13 -418 2z m317 -80 l230\n   -11 3 -32 c4 -39 17 -38 -223 -23 -317 19 -314 18 -331 51 l-15 29 53 -1 c29\n   -1 157 -6 283 -13z m50 -80 l180 -11 3 -38 c3 -38 3 -38 -30 -33 -18 3 -121\n   13 -228 22 -179 14 -198 18 -227 40 -18 14 -33 27 -33 30 0 7 140 3 335 -10z"/>\n   </g>\n   </svg>\n   `,u.append(p,y,z);const b=document.createElement("hr");o.append(b)},t=n=>{let t=n.count,c=+t<=7?+t:7;for(let a=0;a<=c-1;a++){let c=n.items[a].color,s=n.items[a].name,o=n.items[a].id;e(s,c,o,+t)}},c="http://127.0.0.1:3000",a=`${c}/garage`,s=`${c}/engine`,o=`${c}/winners`,i=async(n,e=7)=>{const t=await fetch(`${a}?_page=${n}&_limit=${e}`);return{items:await t.json(),count:t.headers.get("X-Total-Count")}},r=async n=>{const e=await fetch(`${a}/${n}`);return await e.json()},d=async({page:n,limit:e=10,sort:t,order:c})=>{const a=await fetch(`${o}?_page=${n}&_limit=${e}&${((n,e)=>n&&e?`&_sort=${n}&_order=${e}`:"")(t,c)}`),s=await a.json();return{items:await Promise.all(s.map((async n=>({...n,car:await i(n.id)})))),count:a.headers.get("X-Total-Count")}},l=async n=>{const e=await fetch(`${o}/${n}`);return await e.json()},m=async(n,e)=>{const t=await fetch(`${o}/${n}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return await t.json()},u=async({id:n,time:e})=>{const t=await(async n=>(await fetch(`${o}/${n}`)).status)(n);if(404===t)await(async n=>{const e=await fetch(`${o}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return await e.json()})({id:n,wins:1,time:e});else{const t=await l(n);await m(n,{id:n,wins:t.wins+1,time:e<t.time?e:t.time})}},p=async n=>{const t=await(async n=>{const e=await fetch(`${a}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return await e.json()})(n),c=document.querySelector(".garage__text"),s=Number(c.textContent?.split(" ")[2])+1;e(t.name,t.color,t.id,s),$.cars.push(t)};function h(n){const{top:e,left:t,width:c,height:a}=n.getBoundingClientRect();return{x:t+c/2,y:e+a/2}}const g=async(n,e)=>{const{success:t,id:c,time:a}=await Promise.race(n),s=await Promise.race(n);if(console.log(s),!t){const t=e.findIndex((n=>n===c)),a=[...n.slice(0,t),...n.slice(t+1,n.length)],s=[...e.slice(0,t),...e.slice(t+1,e.length)];return g(a,s)}return{...$.cars.find((n=>n.id===c)),time:+(a/1e3).toFixed(2)}},z=["Tesla","BMW","MERSEDES","JAGUAR","SUBARU","MAZDA","VOLVO","CHEVROLET","HYUNDAI","KIA","LEXUS","TOYOTA","CADILAC","PORSCHE","MITSUBISHI","NISSAN","SUZUKI","FERRARI","LAMBORGHINI","FORD","AUDI"],y=["Model S","MODEL X","7","Camry 3.5","SEDAN","9","AVENTADOR","MURCELAGO","HURRACAN","X5","X6","M5","M3","LAND CRUSER","MUSTANG","GENTRA ЧЁЕРНЫЙ","COBALT SHAMPAGNE","SPARK","DAMAS SERGEYA","NEXIA 3","GENTRA TONIROVANNIY"],b=()=>{let n="#";for(var e=0;e<6;e++)n+="0123456789ABCDEF"[Math.floor(16*Math.random())];return n},E=async n=>{const e=document.getElementById(`start-btn-${n}`);e.disabled=!0,document.getElementById(`stop-btn-${n}`).disabled=!1;const t=e.dataset.status,c=document.getElementById(`car-${n}`),a=document.getElementById(`flag-${n}`),o=Math.floor(function(n,e){const t=h(n),c=h(e);return Math.hypot(t.x-c.x,t.y-c.y)}(c,a)),{velocity:i,distance:r}=await(async(n,e)=>{const t=await fetch(`${s}?id=${n}&status=${e}`,{method:"PATCH"});return await t.json()})(n,t),d=Math.round(r/i);$.animation[n]=function(n,e,t){let c=null;const a={};return a.id=window.requestAnimationFrame((function s(o){c||(c=o);const i=o-c,r=Math.round(i*(e/t));n.style.transform=`translateX(${Math.min(r,e)}px)`,r<e&&(a.id=window.requestAnimationFrame(s))})),a}(c,o,d);const{success:l}=await(async n=>{const e=await fetch(`${s}?id=${n}&status=drive`,{method:"PATCH"}).catch();return 200!==e.status?{success:!1}:{...await e.json()}})(n);return l||window.cancelAnimationFrame($.animation[n].id),{success:l,id:n,time:d}},w=async n=>{document.getElementById(`.start-btn-${n}`).disabled=!1;const e=document.getElementById(`stop-btn-${n}`);e.disabled=!0;const t=e.dataset.status;await(async(n,e)=>{const t=await fetch(`${s}?id=${n}&status=${e}`,{method:"PATCH"});return await t.json()})(n,t),document.getElementById(`car-${n}`).style.transform="translateX(0)",$.animation[n]&&window.cancelAnimationFrame($.animation[n].id)};(new class{constructor(){this.container=document.body,this.Header=new class{constructor(n){this.container=document.createElement("header"),this.container.id=n}createHeader(n){const e=document.createElement("div");e.className="headerBtn__container",this.container.append(e);const t=document.createElement("button");t.className=`${n}-1`,t.id=`${n}-1`,t.innerText="TO GARAGE",t.disabled=!0;const c=document.createElement("button");c.className=`${n}-2`,c.id=`${n}-2`,c.innerText="TO WINNERS",e.append(t,c);const a=document.createElement("div");a.className="inputs__container",this.container.append(a);const s=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div");s.className="create__container",o.className="update__container",i.className="btn__container",a.append(s,o,i);const r=document.createElement("input");r.className="create-text",r.id="create-text",r.type="text";const d=document.createElement("input");d.className="create-color",d.id="create-color",d.type="color";const l=document.createElement("button");l.className="create-btn",l.innerHTML="create",s.append(r,d,l);const m=document.createElement("input");m.className="update-text",m.id="update-text",m.type="text",m.disabled=!0;const u=document.createElement("input");u.className="update-color",u.id="update-color",u.type="color",u.disabled=!0;const p=document.createElement("button");p.className="update-btn",p.id="update-btn",p.innerHTML="update",p.disabled=!0,o.append(m,u,p);const h=document.createElement("button");h.className="race-btn",h.innerHTML="RACE";const g=document.createElement("button");g.className="reset-btn",g.innerHTML="RESET";const z=document.createElement("button");z.className="generate-btn",z.innerHTML="GENERATE CARS",i.append(h,g,z)}render(){return this.createHeader("header__btn"),this.container}}("header-container"),this.Main=new class{constructor(n){this.container=document.createElement("main"),this.container.id=n}Main(){const n=document.createElement("div");this.container.append(n);const e=document.createElement("p");e.id="message",e.innerHTML="",this.container.append(e),n.id="garage__container";const t=document.createElement("div"),c=document.createElement("div");c.id="cars__container",this.container.append(t),t.id="winners__container",t.style.display="none";const a=document.createElement("h2");a.className="garage__text",a.innerText="Garage ( 999 )",n.append(a);const s=document.createElement("h3");s.className="page__number",s.innerText="Page #1",n.append(s),n.append(c)}render(){return this.Main(),this.container}}("main__container"),this.Footer=new class{constructor(n){this.currentPage=1,this.container=document.createElement("footer"),this.container.id=n}createFooter(n){const e=document.createElement("button");e.className=`${n} 1`,e.innerText="prev",this.container.append(e),e.addEventListener("click",(()=>{this.currentPage<=1?(this.currentPage=1,_(this.currentPage)):(--this.currentPage,_(this.currentPage))}));const t=document.createElement("button");t.className=`${n} 2`,t.innerText="next",t.addEventListener("click",(()=>{this.currentPage<=1?(this.currentPage=1,_(this.currentPage)):(++this.currentPage,(()=>{const n=document.querySelectorAll(".car__container");console.log(n),n.forEach((n=>{n.remove()}))})(),_(this.currentPage))})),this.container.append(t)}render(){return this.createFooter("footer__btn"),this.container}}("footer-container")}run(){const n=this.Header.render(),e=this.Main.render(),t=this.Footer.render();this.container.append(n),this.container.append(e),this.container.append(t)}}).run();let $={carsPage:1,cars:[{id:1,color:"#ffff",name:"Tesla"}],carsCount:999,winnersPage:1,winners:0,winnersCount:0,animation:{},view:"garage",sortBy:null,sortOrder:null};const _=async n=>{const e=await i(n,7);return t(e),e.count};let f=null;(async()=>{const n=await i(1,7),e=await d({page:1});t(n),$.cars=n.items,$.carsCount=n.count,$.winners=e.items,$.winnersCount=e.count})(),document.body.addEventListener("click",(async n=>{let e=n.target;console.log(e);const t=Number(e.id);if(e?.classList.contains("select-btn")&&(r(t),document.getElementById("update-text").disabled=!1,document.getElementById("update-color").disabled=!1,document.getElementById("update-btn").disabled=!1),e?.classList.contains("create-btn")){let n=document.getElementById("create-text"),e=document.getElementById("create-color"),t={name:n.value,color:e.value};p(t)}if(e?.classList.contains("remove-btn")&&(async()=>{await(async n=>{const e=await fetch(`${a}/${n}`,{method:"DELETE"});return await e.json()})(Number(e.id)),document.getElementById(`${e.id}`)?.remove();const n=document.querySelector(".garage__text"),t=Number(n.textContent?.split(" ")[2])-1;n.innerHTML=`Garage ( ${t} )`;const c=await i(1,7);$.cars=c.items})(),e?.classList.contains("start-btn")&&E(+e.id.split("-").slice(-1)),e?.classList.contains("stop-btn")&&w(+e.id.split("-").slice(-1)),e?.classList.contains("select-btn")&&(f=await r(+e.id)),e?.classList.contains("update-btn")){const n={name:document.getElementById("update-text").value,color:document.getElementById("update-color").value},e=await(async(n,e)=>{const t=await fetch(`${a}/${n}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return await t.json()})(f.id,n);document.getElementById(`brand-${e.id}`).innerText=`${e.name}`,document.getElementById(`color-${e.id}`).style.fill=`${e.color}`,document.getElementById("update-text").disabled=!0,document.getElementById("update-color").disabled=!0,document.getElementById("update-btn").disabled=!0}if(e?.classList.contains("race-btn")){n.target.disabled=!0;const e=await(async n=>{const e=$.cars.map((({id:e})=>n(e)));return await g(e,$.cars.map((n=>n.id)))})(E);await u(e);const t=document.getElementById("message");t.style.display="flex",t.innerHTML=`${e.name} went first ${e.time}s !`,n.target.disabled=!1,setTimeout((()=>{t.style.display="none"}),5e3)}if(e?.classList.contains("reset-btn")&&$.cars.map((({id:n})=>w(n))),e?.classList.contains("generate-btn")){n.target.disabled=!0;const e=((n=100)=>new Array(n).fill(1).map((n=>({name:`(${z[Math.floor(Math.random()*z.length)]})${y[Math.floor(Math.random()*z.length)]}`,color:b()}))))();await Promise.all(e.map((async n=>await p(n)))),n.target.disabled=!1}if(e?.classList.contains("header__btn-2")){const n=document.getElementById("winners__container"),e=document.getElementById("garage__container"),t=document.getElementById("header__btn-1"),c=document.getElementById("header__btn-2");n.style.display="block",e.style.display="none",c.disabled=!0,t.disabled=!1,await(async()=>{const{items:n,count:e}=await d({page:$.winnersPage,sort:$.sortBy,order:$.sortOrder});console.log({items:n,count:e}),$.winners=n,$.winnersCount=e})(),(()=>{const n=document.createElement("div");n.className="winners__container",n.innerHTML=`\n  <h2>Page #${$.winnersPage}</h2>\n  <table class="table" cellspacing="0" border="0" cellpadding="0">\n  <thead>\n  <th>Number</th>\n  <th>Car</th>\n  <th>Name</th>\n  <th class="table-button table-wins ${"wins"===$.sortBy?$.sortOrder:""}" id="sort-by-wins">Wins</th>\n  <th class="table-button table-time ${"time"===$.sortBy?$.sortOrder:""}" id="sort-by-time">Best time (seconds)</th>\n  </thead>\n  <tbody>\n  ${$.winners.map(((n,e)=>`\n  <tr>\n  <td>${e+1}</td>\n  <td>${n.car.id}</td>\n  <td>${n.wins}</td>\n  <td>${n.time}</td>\n  </tr>\n  `)).join("")}\n  </tbody>\n  </table>\n  `,document.getElementById("winners__container").append(n)})()}if(e?.classList.contains("header__btn-1")){const n=document.getElementById("winners__container"),e=document.getElementById("garage__container"),t=document.getElementById("header__btn-1"),c=document.getElementById("header__btn-2");e.style.display="flex",c.disabled=!1,t.disabled=!0,n.firstChild.remove()}}))})();