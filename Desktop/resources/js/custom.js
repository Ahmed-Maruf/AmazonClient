/*==================

	SERVICES
*==================*/

/*document ready method */



(function (g, h, K, la) {
	function U(a) {
		t && t.tag && t.tag(q(":", "aui", a))
	}

	function u(a, b) {
		t && t.count && t.count("aui:" + a, 0 === b ? 0 : b || (t.count("aui:" + a) || 0) + 1)
	}

	function m(a) {
		try {
			return a.test(navigator.userAgent)
		} catch (b) {
			return !1
		}
	}

	function v(a, b, c) {
		a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
	}

	function q(a, b, c, e) {
		b = b && c ? b + a + c : b || c;
		return e ? q(a, b, e) : b
	}

	function A(a, b, c) {
		try {
			Object.defineProperty(a, b, {
				value: c,
				writable: !1
			})
		} catch (e) {
			a[b] = c
		}
		return c
	}

	function L() {
		return setTimeout(V, 0)
	}

	function ma(a, b) {
		var c = a.length,
			e = c,
			f = function () {
				e-- || (M.push(b),
				N || (L(),
					N = !0))
			};
		for (f(); c--;)
			W[a[c]] ? f() : (w[a[c]] = w[a[c]] || []).push(f)
	}

	function na(a, b, c, e, f) {
		var d = h.createElement(a ? "script" : "link");
		v(d, "error", e);
		f && v(d, "load", f);
		if (a) {
			d.type = "text/javascript";
			d.async = !0;
			if (a = c)
				a = -1 !== b.indexOf("images/I") || /AUIClients/.test(b);
			a && d.setAttribute("crossorigin", "anonymous");
			d.src = b
		} else
			d.rel = "stylesheet",
				d.href = b;
		h.getElementsByTagName("head")[0].appendChild(d)
	}

	function X(a, b) {
		function c(c, e) {
			function f() {
				na(b, c, h, function (b) {
					!B && h ? (h = !1,
						u("resource_retry"),
						f()) : (u("resource_error"),
						a.log("Asset failed to load: " + c, B ? "WARN" : void 0));
					b && b.stopPropagation ? b.stopPropagation() : g.event && (g.event.cancelBubble = !0)
				}, e)
			}

			if (Y[c])
				return !1;
			Y[c] = !0;
			u("resource_count");
			var h = !0;
			return !f()
		}

		if (b) {
			var e = 0,
				f = 0;
			c.andConfirm = function (a, b) {
				return c(a, function () {
					e++;
					b && b.apply(this, arguments)
				})
			};
			c.confirm = function () {
				f++
			};
			c.getCsriCounters = function () {
				return {
					reqs: e,
					full: f
				}
			}
		}
		return c
	}

	function oa(a, b, c) {
		for (var e = {
			name: a,
			guard: function (c) {
				return b.guardFatal(a, c)
			},
			logError: function (c, d, e) {
				b.logError(c, d, e, a)
			}
		}, f = [], d = 0; d < c.length; d++)
			C.hasOwnProperty(c[d]) && (f[d] = O.hasOwnProperty(c[d]) ? O[c[d]](C[c[d]], e) : C[c[d]]);
		return f
	}

	function x(a, b, c, e, f) {
		return function (d, h) {
			function l() {
				var a = null;
				e ? a = h : "function" === typeof h && (p.start = y(),
					a = h.apply(g, oa(d, k, m)),
					p.end = y());
				if (b) {
					C[d] = a;
					a = d;
					for (W[a] = !0;
						 (w[a] || []).length;)
						w[a].shift()();
					delete w[a]
				}
				p.done = !0
			}

			var k = f || this;
			"function" === typeof d && (h = d,
				d = void 0);
			b && (d = (d || "__NONAME__").replace(/^prv:/, ""),
			P.hasOwnProperty(d) && k.error(q(", reregistered by ", q(" by ", d + " already registered", P[d]), k.attribution), d),
				P[d] = k.attribution);
			for (var m = [], n = 0; n < a.length; n++)
				m[n] = a[n].replace(/^prv:/, "");
			var p = Z[d || "anon" + ++pa] = {
				depend: m,
				registered: y(),
				namespace: k.namespace
			};
			c ? l() : ma(m, k.guardFatal(d, l));
			return {
				decorate: function (a) {
					O[d] = k.guardFatal(d, a)
				}
			}
		}
	}

	function aa(a) {
		return function () {
			var b = Array.prototype.slice.call(arguments);
			return {
				execute: x(b, !1, a, !1, this),
				register: x(b, !0, a, !1, this)
			}
		}
	}

	function ba(a, b) {
		return function (c, e) {
			e || (e = c,
				c = void 0);
			var f = this.attribution;
			return function () {
				D.push(b || {
					attribution: f,
					name: c,
					logLevel: a
				});
				var d = e.apply(this, arguments);
				D.pop();
				return d
			}
		}
	}

	function E(a, b) {
		this.load = {
			js: X(this, !0),
			css: X(this)
		};
		A(this, "namespace", b);
		A(this, "attribution", a)
	}

	function ca() {
		h.body ? n.trigger("a-bodyBegin") : setTimeout(ca, 20)
	}

	function z(a, b) {
		if (b) {
			for (var c = a.className.split(" "), e = c.length; e--;)
				if (c[e] === b)
					return;
			a.className += " " + b
		}
	}

	function da(a, b) {
		for (var c = a.className.split(" "), e = [], f; void 0 !== (f = c.pop());)
			f && f !== b && e.push(f);
		a.className = e.join(" ")
	}

	function ea(a) {
		try {
			return a()
		} catch (b) {
			return !1
		}
	}

	function F() {
		if (G) {
			var a = g.innerWidth ? {
				w: g.innerWidth,
				h: g.innerHeight
			} : {
				w: k.clientWidth,
				h: k.clientHeight
			};
			5 < Math.abs(a.w - Q.w) || 50 < a.h - Q.h ? (Q = a,
				H = 4, (a = l.mobile || l.tablet ? 450 < a.w && a.w > a.h : 1250 <= a.w) ? z(k, "a-ws") : da(k, "a-ws")) : 0 < H && (H--,
				fa = setTimeout(F, 16))
		}
	}

	function qa(a) {
		(G = void 0 === a ? !G : !!a) && F()
	}

	function ra() {
		return G
	}

	"use strict";
	var I = K.now = K.now || function () {
			return +new K
		},
		y = function (a) {
			return a && a.now ? a.now.bind(a) : I
		}(g.performance);
	la = y();
	var p = g.AmazonUIPageJS || g.P;
	if (p && p.when && p.register)
		throw Error("A copy of P has already been loaded on this page.");
	var t = g.ue;
	U();
	U("aui_build_date:3.17.18.5-2017-11-07");
	var M = [],
		N = !1,
		V;
	V = function () {
		for (var a = L(), b = I(); M.length;)
			if (M.shift()(),
				50 < I() - b)
				return;
		clearTimeout(a);
		N = !1
	};
	m(/OS 6_[0-9]+ like Mac OS X/i) && v(g, "scroll", L);
	var W = {},
		w = {},
		Y = {},
		B = !1;
	v(g, "beforeunload", function () {
		B = !0;
		setTimeout(function () {
			B = !1
		}, 1E4)
	});
	var P = {},
		C = {},
		O = {},
		Z = {},
		pa = 0,
		R, D = [],
		ga = g.onerror;
	g.onerror = function (a, b, c, e, f) {
		f && "object" === typeof f || (f = Error(a, b, c),
			f.columnNumber = e,
			f.stack = b || c || e ? q(String.fromCharCode(92), f.message, "at " + q(":", b, c, e)) : void 0);
		var d = D.pop() || {};
		f.attribution = q(":", f.attribution || d.attribution, d.name);
		f.logLevel = d.logLevel;
		f.attribution && console && console.log && console.log([f.logLevel || "ERROR", a, "thrown by", f.attribution].join(" "));
		D = [];
		ga && (d = [].slice.call(arguments),
			d[4] = f,
			ga.apply(g, d))
	};
	E.prototype = {
		logError: function (a, b, c, e) {
			b = {
				message: b,
				logLevel: c || "ERROR",
				attribution: q(":", this.attribution, e)
			};
			if (g.ueLogError)
				return g.ueLogError(a || b, a ? b : null), !0;
			console && console.error && (console.log(b),
				console.error(a));
			return !1
		},
		error: function (a, b, c, e) {
			a = Error(q(":", e, a, c));
			a.attribution = q(":", this.attribution, b);
			throw a;
		},
		guardError: ba(),
		guardFatal: ba("FATAL"),
		log: function (a, b, c) {
			return this.logError(null, a, b, c)
		},
		declare: x([], !0, !0, !0),
		register: x([], !0),
		execute: x([]),
		AUI_BUILD_DATE: "3.17.18.5-2017-11-07",
		when: aa(),
		now: aa(!0),
		trigger: function (a, b, c) {
			var e = I();
			this.declare(a, {
				data: b,
				pageElapsedTime: e - (g.aPageStart || NaN),
				triggerTime: e
			});
			c && c.instrument && R.when("prv:a-logTrigger").execute(function (b) {
				b(a)
			})
		},
		handleTriggers: function () {
			this.log("handleTriggers deprecated")
		},
		attributeErrors: function (a) {
			return new E(a)
		},
		_namespace: function (a, b) {
			return new E(a, b)
		}
	};
	var n = A(g, "AmazonUIPageJS", new E);
	R = n._namespace("PageJS", "AmazonUI");
	R.declare("prv:p-debug", Z);
	n.declare("p-recorder-events", []);
	n.declare("p-recorder-stop", function () {
	});
	A(g, "P", n);
	ca();
	if (h.addEventListener) {
		var ha;
		h.addEventListener("DOMContentLoaded", ha = function () {
			n.trigger("a-domready");
			h.removeEventListener("DOMContentLoaded", ha, !1)
		}, !1)
	}
	var k = h.documentElement,
		S = function () {
			var a = ["O", "ms", "Moz", "Webkit"],
				b = h.createElement("div");
			return {
				testGradients: function () {
					b.style.cssText = ("background-image:-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:" + a.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0, -17);
					return -1 < b.style.backgroundImage.indexOf("gradient")
				},
				test: function (c) {
					var e = c.charAt(0).toUpperCase() + c.substr(1);
					c = (a.join(e + " ") + e + " " + c).split(" ");
					for (e = c.length; e--;)
						if ("" === b.style[c[e]])
							return !0;
					return !1
				},
				testTransform3d: function () {
					var a = !1;
					g.matchMedia && (a = g.matchMedia("(-webkit-transform-3d)").matches);
					return a
				}
			}
		}(),
		p = k.className,
		ia = /(^| )a-mobile( |$)/.test(p),
		ja = /(^| )a-tablet( |$)/.test(p),
		l = {
			audio: function () {
				return !!h.createElement("audio").canPlayType
			},
			video: function () {
				return !!h.createElement("video").canPlayType
			},
			canvas: function () {
				return !!h.createElement("canvas").getContext
			},
			svg: function () {
				return !!h.createElementNS && !!h.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
			},
			offline: function () {
				return navigator.hasOwnProperty && navigator.hasOwnProperty("onLine") && navigator.onLine
			},
			dragDrop: function () {
				return "draggable" in h.createElement("span")
			},
			geolocation: function () {
				return !!navigator.geolocation
			},
			history: function () {
				return !(!g.history || !g.history.pushState)
			},
			webworker: function () {
				return !!g.Worker
			},
			autofocus: function () {
				return "autofocus" in h.createElement("input")
			},
			inputPlaceholder: function () {
				return "placeholder" in h.createElement("input")
			},
			textareaPlaceholder: function () {
				return "placeholder" in h.createElement("textarea")
			},
			localStorage: function () {
				return "localStorage" in g && null !== g.localStorage
			},
			orientation: function () {
				return "orientation" in g
			},
			touch: function () {
				return "ontouchend" in h
			},
			gradients: function () {
				return S.testGradients()
			},
			hires: function () {
				var a = g.devicePixelRatio && 1.5 <= g.devicePixelRatio || g.matchMedia && g.matchMedia("(min-resolution:144dpi)").matches;
				u("hiRes" + (ia ? "Mobile" : ja ? "Tablet" : "Desktop"), a ? 1 : 0);
				return a
			},
			transform3d: function () {
				return S.testTransform3d()
			},
			touchScrolling: function () {
				return m(/Windowshop|android.([3-9]|[L-Z])|OS ([5-9]|[1-9][0-9]+)(_[0-9]{1,2})+ like Mac OS X|Chrome|Silk|Firefox|Trident.+?; Touch/i)
			},
			ios: function () {
				return m(/OS [1-9][0-9]*(_[0-9]*)+ like Mac OS X/i) && !m(/trident|Edge/i)
			},
			android: function () {
				return m(/android.([1-9]|[L-Z])/i) && !m(/trident|Edge/i)
			},
			mobile: function () {
				return ia
			},
			tablet: function () {
				return ja
			}
		},
		r;
	for (r in l)
		l.hasOwnProperty(r) && (l[r] = ea(l[r]));
	for (var T = "textShadow textStroke boxShadow borderRadius borderImage opacity transform transition".split(" "), J = 0; J < T.length; J++)
		l[T[J]] = ea(function () {
			return S.test(T[J])
		});
	var G = !0,
		fa = 0,
		Q = {
			w: 0,
			h: 0
		},
		H = 4;
	F();
	v(g, "resize", function () {
		clearTimeout(fa);
		H = 4;
		F()
	});
	var ka = {
		getItem: function (a) {
			try {
				return g.localStorage.getItem(a)
			} catch (b) {
			}
		},
		setItem: function (a, b) {
			try {
				return g.localStorage.setItem(a, b)
			} catch (c) {
			}
		}
	};
	da(k, "a-no-js");
	z(k, "a-js");
	!m(/OS [1-8](_[0-9]*)+ like Mac OS X/i) || g.navigator.standalone || m(/safari/i) || z(k, "a-ember");
	p = [];
	for (r in l)
		l.hasOwnProperty(r) && l[r] && p.push("a-" + r.replace(/([A-Z])/g, function (a) {
			return "-" + a.toLowerCase()
		}));
	z(k, p.join(" "));
	k.setAttribute("data-aui-build-date", "3.17.18.5-2017-11-07");
	n.register("p-detect", function () {
		return {
			capabilities: l,
			localStorage: l.localStorage && ka,
			toggleResponsiveGrid: qa,
			responsiveGridEnabled: ra
		}
	});
	m(/UCBrowser/i) || l.localStorage && z(k, ka.getItem("a-font-class"));
	n.declare("a-event-revised-handling", !1);
	n.declare("a-fix-event-off", !1);
	u("pagejs:pkgExecTime", y() - NaN)
})(window, document, Date);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('sp.load.js').execute(function () {
	(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/61ea4y7yPdL._RC|11IYhapguOL.js,614nPrPPL-L.js,21dmoxZTACL.js,012FVc3131L.js,31fv8bqHLoL.js,31ReKJl2X6L.js,51nK0kUyg2L.js,11+vNCgC1cL.js,01xMsWWFUQL.js,11KkQiUpBPL.js,113pP0Sfh0L.js,21auxuI+dRL.js,01PoLXBDXWL.js,612Ozn6EcSL.js,01ezj5Rkz1L.js,01rpauTep4L.js,01cEguceG-L.js_.js?AUIClients/AmazonUI');
});



// =============================================================================
// Function Class: Show/Hide product promotions & special offers link
// =============================================================================

function showElement(id) {
	var elm = document.getElementById(id);
	if (elm) {
		elm.style.visibility = 'visible';
		if (elm.getAttribute('name') == 'heroQuickPromoDiv') {
			elm.style.display = 'block';
		}
	}
}

function hideElement(id) {
	var elm = document.getElementById(id);
	if (elm) {
		elm.style.visibility = 'hidden';
		if (elm.getAttribute('name') == 'heroQuickPromoDiv') {
			elm.style.display = 'none';
		}
	}
}

function showHideElement(h_id, div_id) {
	var hiddenTag = document.getElementById(h_id);
	if (hiddenTag) {
		showElement(div_id);
	} else {
		hideElement(div_id);
	}
}

if (typeof P === 'object' && typeof P.when === 'function') {
	P.register("isLazyLoadWeblabEnabled", function() {
		var isWeblabEnabled = 1;
		return isWeblabEnabled;
	});
}

window.isBowserFeatureCleanup = 0;

var touchDeviceDetected = false;


P.when('atf').register('sp.load.js');


var CSMReqs = {
	af: {
		c: 2,
		p: 'atf'
	},
	cf: {
		c: 2,
		p: 'cf'
	},
	x1: {
		c: 1,
		p: 'x1'
	},
	x2: {
		c: 1,
		p: 'x2'
	}
};

function setCSMReq(a) {
	a = a.toLowerCase();
	var b = CSMReqs[a];
	if (b && --b.c == 0) {
		if (typeof uet == 'function') {
			uet(a);
			(a == 'af') && (typeof replaceImg === 'function') && replaceImg();
		};
		if (typeof P != 'undefined') {
			P.register(b.p);
			if (a == 'af') {
				if (typeof uet === 'function') {
					uet('bb', 'TwisterAUIWait', {
						wb: 1
					});
				}
			}
		};
	}
}
if (typeof P != 'undefined') {
	P.when('A').execute(function(A) {
		if (typeof uet === 'function') {
			uet('af', 'TwisterAUIWait', {
				wb: 1
			});
		}
	});
}

var addlongPoleTag = function(marker, customtag) {
	marker = marker.toLowerCase();
	var b = CSMReqs[marker];
	if (b.c == 0) {
		if (window.ue && typeof ue.tag === 'function') {
			ue.tag(customtag);
		}
	}
};

window.isACRJumplLinkAnimated = 2;


var gbEnableTwisterJS = 0;
var isTwisterPage = 0;


if (typeof CSMReqs !== 'undefined') {
	if (CSMReqs.hasOwnProperty('af')) {
		CSMReqs.af.c = 1;
	}
	if (CSMReqs.hasOwnProperty('cf')) {
		CSMReqs.cf.c = 1;
	}
}


if (typeof uet === 'function') {
	uet('be', 'udpV3atfwait', {
		wb: 1
	});
};
if (typeof uex === 'function') {
	uex('ld', 'udpV3atfwait', {
		wb: 1
	});
};


/*INIIT*/



P.when('jQuery', 'cf').execute(function($, cf) {

});

P.when('A', 'jQuery', 'ImageBlockATF', 'cf').register('ImageBlockBTF', function(A, $, imageBlockATF, cf) {
	var data = {
		"indexToColor": ["initial"],
		"disableHoverOnAltImages": 0,
		"displayVideoBanner": 0,
		"burjImageBlock": 0,
		"isLargeSCLVideoThumbnail": 0,
		"isSwatchHoverConsistent": 1,
		"heroFocalPoint": null,
		"visualDimensions": [],
		"productGroupID": "ce_display_on_website",
		"thumbnailLeftAlignmentEnabled": 1,
		"newVideoMissing": 0,
		"useIV": 1,
		"useClickZoom": null,
		"fullScreenImmersiveView": 0,
		"useChildVideos": 1,
		"redesignedImmersiveView": 0,
		"numColors": 1,
		"logMetrics": 1,
		"defaultColor": "initial",
		"imgTagWrapperClasses": null,
		"showMagnifierOnHover": 0,
		"airyConfig": {
			"enableContinuousPlay": 0,
			"installFlashButtonText": "Install Flash Player",
			"contentTitle": null,
			"autoplayCutOffTimeSeconds": null,
			"cssUrl": "https://images-eu.ssl-images-amazon.com/images/G/02/vap/video/airy2/prod/2.0.1351.0/css/beacon._CB301816270_.css",
			"ageGate": {
				"monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				"deniedPrompt": "We are sorry. You are not old enough to watch this video.",
				"submitText": "Submit",
				"prompt": "This video is not intended for all audiences. What is your birthdate?"
			},
			"videoAds": null,
			"videoUnsupportedPrompt": "Sorry, this video is unsupported on this browser.",
			"desiredMode": null,
			"swfUrl": "https://images-eu.ssl-images-amazon.com/images/G/02/vap/video/airy2/prod/2.0.1351.0/flash/AiryBasicRenderer._CB301816270_.swf",
			"isAutoplayEnabled": null,
			"installFlashPrompt": "Adobe Flash Player is required to watch this video.",
			"isLiveStream": null,
			"regionCode": "EU",
			"contentId": null,
			"playbackErrorPrompt": "Sorry, an error has occurred while attempting video playback. Please try again later.",
			"contentMinAge": null,
			"isForesterTrackingDisabled": null,
			"streamingUrls": null,
			"parentId": null,
			"foresterMetadataParams": {
				"client": "Dpx",
				"requestId": "MTSS0HN1KEGPK1CP5Z2S",
				"marketplaceId": "A1F83G8C2ARO7P",
				"session": "258-3185108-3428604",
				"method": "Ce.ImageBlock"
			},
			"jsUrl": "https://images-eu.ssl-images-amazon.com/images/G/02/vap/video/airy2/prod/2.0.1351.0/js/airy.skin._CB301816265_.js"
		},
		"mainImageMaxSizes": null,
		"naturalMainImageSize": null,
		"isMultipleHeroImagesReady": 1,
		"staticStrings": {
			"playVideo": "Click to play video",
			"rollOverToZoom": "Roll over image to zoom in",
			"images": "Images",
			"singleVideo": "VIDEO",
			"dragToSpin": null,
			"video": "video",
			"clickToZoom": "Click on image to zoom in",
			"touchToZoom": "Touch the image to zoom in",
			"videos": "Videos",
			"close": "Close",
			"pleaseSelect": "Please select",
			"watchMoreVideos": "Click to see more videos",
			"allMedia": "All Media",
			"clickToExpand": "Click to open expanded view",
			"multipleVideos": " VIDEOS"
		},
		"notThumbnailClickImmersiveView": 1,
		"gIsNewTwister": 0,
		"title": "Freeview Box Recorder HD - August DVB415 - HDMI Set Top Box with PVR",
		"fadeMagnifier": null,
		"ivRepresentativeAsin": {},
		"repositionHeroImage": null,
		"useAltIngress": 0,
		"heroVideoVariant": null,
		"mainImageSizes": [
			[355, 355],
			[450, 450],
			[425, 550],
			[466, 606],
			[522, 679]
		],
		"views": ["ImageBlockMagnifierView", "ImageBlockAltImageView", "ImageBlockVideoView", "ImageBlockTwisterView", "ImageBlockImmersiveView"],
		"isQuickview": 0,
		"productTypeName": "AUDIO_OR_VIDEO",
		"ipadVideoSizes": [
			[340, 444],
			[384, 500]
		],
		"isSoftlinesEnhancedHoverZoom": 0,
		"colorToAsin": {},
		"thumbExperimentEnabledValue": 1,
		"showLITBOnClick": 0,
		"isSuperleaf": 0,
		"videoSizes": [
			[342, 445],
			[384, 500]
		],
		"stretchyGoodnessWidth": [1280, 1440, 1640, 1800],
		"usePeekHover": null,
		"overrideAltImageClickAction": 0,
		"autoplayVideo": 0,
		"prioritizeVideos": null,
		"hoverZoomIndicator": "",
		"sitbReftag": "",
		"enhancedHoverOverlay": 0,
		"useHoverZoom": 1,
		"staticImages": {
			"zoomOut": "",
			"hoverZoomIcon": "",
			"zoomIn": "",
			"zoomLensBackground": "",
			"grabbing": "",
			"videoThumbIcon": "",
			"spinner": "",
			"spinnerNoLabel": "",
			"icon360": "",
			"zoomInCur": "",
			"videoSWFPath": "",
			"arrow": "",
			"grab": "",
			"zoomOutCur": ""
		},
		"videos": [],
		"isAUIPopoverEnabled": 1,
		"gPreferChildVideos": 1,
		"altsOnLeft": 1,
		"useHoverZoomIpad": "",
		"ivImageSetKeys": {
			"initial": 0
		},
		"isUDP": 1,
		"alwaysIncludeVideo": 1,
		"widths": [1280, 1440, 1640, 1800],
		"maxAlts": 7,
		"useChromelessVideoPlayer": 0,
		"mainImageHeightPartitions": null
	};
	data["customerImages"] = eval('[]');
	data["colorImages"] = {};
	data["heroImage"] = {};
	data["spin360ColorEnabled"] = {};
	data["landingAsinColor"] = 'initial';
	data["shouldApplyResizeFix"] = false;
	data["lazyLoadExperienceDisabled"] = true;
	data["lazyLoadExperienceOnHoverDisabled"] = false;
	data["videoIngressExperimentTreatment"] = imageBlockATF.videoIngressExperimentTreatment;

	return data;
});

var isAUI = typeof P === 'object' && typeof P.when === 'function';
if (typeof setCSMReq == 'function') {
	setCSMReq('cf');
} else {
	if (typeof uet == 'function') {
		uet('cf');
	}
	if (isAUI) {
		P.trigger("cf");
	} else {
		amznJQ.completedStage('amznJQ.criticalFeature');
	}
}

(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/51wk1M1FqtL.js?AUIClients/DetailPageImageBlockAssets');


(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('cf').execute(function() {
	(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/21DlWyPZJcL._RC|11kQzvTVp8L.js,11ysvk9FL7L.js,01qR+QDj1XL.js_.js?AUIClients/HardlinesFeatureDetailPageMetaAsset');
});




if (typeof P !== "undefined" && typeof P.when === "function") {
	P.when('cf').execute(function() {
		P.when('search-js-jq').execute(function() {});
		P.when('amazonShoveler').execute(function() {});
		P.when('simsJS').execute(function() {});
		P.when('cmuAnnotations').execute(function() {});
		P.when('externalJS.tagging').execute(function() {});
		P.when('amzn-ratings-bar').execute(function() {});
		P.when('accessoriesJS').execute(function() {});
		P.when('priceformatterJS').execute(function() {});
		P.when('CustomerPopover').execute(function() {});

	});
}


