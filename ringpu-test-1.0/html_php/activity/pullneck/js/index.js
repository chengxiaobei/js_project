function FastClick(a) {
    "use strict";
    var b, c = this;
    if (this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = 10, this.layer = a, !a || !a.nodeType) throw new TypeError("Layer must be a document node");
    this.onClick = function () {
        return FastClick.prototype.onClick.apply(c, arguments)
    }, this.onMouse = function () {
        return FastClick.prototype.onMouse.apply(c, arguments)
    }, this.onTouchStart = function () {
        return FastClick.prototype.onTouchStart.apply(c, arguments)
    }, this.onTouchEnd = function () {
        return FastClick.prototype.onTouchEnd.apply(c, arguments);
       
    }, this.onTouchCancel = function () {
        return FastClick.prototype.onTouchCancel.apply(c, arguments)
    }, FastClick.notNeeded(a) || (this.deviceIsAndroid && (a.addEventListener("mouseover", this.onMouse, !0), a.addEventListener("mousedown", this.onMouse, !0), a.addEventListener("mouseup", this.onMouse, !0)), a.addEventListener("click", this.onClick, !0), a.addEventListener("touchstart", this.onTouchStart, !1), a.addEventListener("touchend", this.onTouchEnd, !1), a.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (a.removeEventListener = function (b, c, d) {
        var e = Node.prototype.removeEventListener;
        "click" === b ? e.call(a, b, c.hijacked || c, d) : e.call(a, b, c, d)
    }, a.addEventListener = function (b, c, d) {
        var e = Node.prototype.addEventListener;
        "click" === b ? e.call(a, b, c.hijacked || (c.hijacked = function (a) {
            a.propagationStopped || c(a)
        }), d) : e.call(a, b, c, d)
    }), "function" == typeof a.onclick && (b = a.onclick, a.addEventListener("click", function (a) {
        b(a)
    }, !1), a.onclick = null))
}

function BLACKOUT(a) {
    var b = {
        duration: 400,
        easing: "easeOutCubic",
        color: "rgba(0,0,0,1)",
        click: !1
    };
    if (void 0 === a) var a = {};
    $.extend(b, a), a = b;
    var c = $("<div class='BLACKOUT'></div>");
    return a.insertBefore ? c.insertBefore(a.insertBefore) : c.appendTo("body"), c.css({
        height: "100%",
        width: "100%",
        position: "fixed",
        "background-color": a.color,
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        display: "none"
    }), c.fadeIn(a.duration, a.easing), $("body").css({
        overflow: "hidden"
    }).on("touchmove.handler1", function (a) {
        a.preventDefault()
    }), c.clear = function () {
        c.trigger("clearStart"), c.fadeOut(a.duration, a.easing, function () {
            c.trigger("clearEnd"), c.remove()
        }), $("body").css({
            overflow: "auto"
        }).off("touchmove.handler1")
    }, a.click && c.click(function () {
        return c.clear()
    }), c
}

function commitScore() {
    $.ajax({
        url: "http://whistle.ohsame.com:7777/scores/" + highRank,
        beforeSend: function (a) {
            a.setRequestHeader("Authorization", "Token " + user_token)
        }, type: "POST",
        dataType: "json"
    })
}
//成绩距离动物头部的距离
function heightControl(a) {
	a =  a + 53;
    scrollStartValue = a / responsiveScale - 500, $("body").height(a), $(".character-wrapper").css({
        transform: "translate3d(0,0,0) scale(" + responsiveScale + ")"
    })
}

function cssAnimationKicker(a, b, c) {
    a.css(b), setTimeout(function () {
        a.css(c)
    })
}

function shareToUnlockPanel() {
    var a = BLACKOUT({
        click: !0,
        insertBefore: $(".unshare-panel"),
        color: "rgba(66,33,11,0.8)"
    });
    cssAnimationKicker($(".unshare-panel"), {
        transform: "translate3d(0,200%,0)",
        display: "block",
        opacity: "0",
        transition: "0.3s ease-out"
    }, {
        transform: "translate3d(0,0,0)",
        opacity: "1"
    }), a.one("clearStart", function () {
        cssAnimationKicker($(".unshare-panel"), {
            transform: "translate3d(0,0,0)",
            display: "block",
            opacity: "1",
            transition: "0.3s ease-out"
        }, {
            transform: "translate3d(0,200%,0)",
            opacity: "0"
        })
    }), $(".close-share-panel").one("click", function () {
        a.clear()
    }), $(".unshare-panel-button").one("click", function () {
        a.clear(), is_same || $(".share-button").trigger("touchend")
    })
}


function rankUpdate() {
    rank = parseInt(-idol.data.y / 3), rankObj.html(rank + " m"), rank > highRank && (highRank = rank), rank > rankSingle && (rankSingle = rank)
    
}
function bast(){
	return highRank;
}
function showSingleRank() {
    $(".single-rank").html(rankSingle + " m").css({
        opacity: 1
    }), shareEnable && rankSingle == highRank && (is_same && commitScore(), highRank > 200 && (rankSingle = 0, $(".share-button").trigger("touchend"))),rankSingle = 0
}

function hideSingleRank() {
	
    $(".single-rank").css({
        opacity: 0
    })
}

function GAME_START() {
    function a() {
        var a = 0,
            c = 100,
            d = idol.data.y,
            e = 0;
        0 != d && (scrollResetTimer = setInterval(function () {
            return a > c ? (clearInterval(scrollResetTimer), idol.data.y = 0, void idol.css({
                transform: "translate3d(0,0,0)"
            })) : (idol.data.y = $.easing.easeOutElastic(null, a, d, e - d, c), 0 > d && idol.data.y > 0 && (gameover || (gameover = !0, showSingleRank())), a++, b(), void rankUpdate())
        }, 16))
    }

    function b() {
        idol.css({
            transform: "translate3d(0," + idol.data.y + "px,0)",
            transition: "none"
        }), scrollValue = -idol.data.y - scrollStartValue, scrollerWrapper.css(idol.data.y < -scrollStartValue ? {
            transform: "translate3d(0," + scrollValue * responsiveScale + "px,0)",
            transition: "none"
        } : {
            transform: "translate3d(0,0,0)",
            transition: "none"
        }), $(".cloud-wrapper").each(function () {
            var a = $(this).index(),
                b = -Math.round((scrollValue + 80 * a) / height) * height * responsiveScale;
            $(this).css({
                transform: "translate3d(0," + b + "px,0)"
            })
        });
        var a = -idol.data.y,
            b = 0;
        switch (a > 1800 && (b = 1800 - a, a = 1800), characterIndex) {
        case 0:
            scale = a > 0 ? a / 30.5 + 1 : a / 31.5 + 1;
            break;
        case 1:
            scale = a > 0 ? a / 31.5 + 1 : a / 32.5 + 1;
            break;
        case 2:
            scale = a > 0 ? a / 39.5 + 1 : a / 40.5 + 1;
            break;
        case 3:
            scale = a > 0 ? a / 37.5 + 1 : a / 38.5 + 1
        }
        idolBody.css({
            transform: "translate3d(0," + b + "px,0) scaleY(" + scale + ")"
        })
    }
    container.on("touchmove.drag mousemove.drag", function (c) {
        function d(a, b) {
            return a > 100 ? a = 100 : -1800 > a && (a = -1800), b *= .3, 0 > a ? b * $.easing.easeOutSine(null, a, 1, -.9, -1800) : a > 0 ? b * $.easing.easeOutSine(null, a, 1, -1, 100) : b
        }
        if (hideSingleRank(), gameover = !1, is_draging = !0, clearInterval(scrollResetTimer), c.originalEvent.touches || (c.originalEvent.touches = [c.originalEvent]), c.originalEvent.touches[0]) {
            if (touches[0] = {
                x: c.originalEvent.touches[0].pageX,
                y: c.originalEvent.touches[0].pageY
            }, touches[0].y < 30) return void a()
        } else touches[0] = {
            x: null,
            y: null
        }; if (c.originalEvent.touches[1]) return touches[1] = {
            x: c.originalEvent.touches[1].pageX,
            y: c.originalEvent.touches[1].pageY
        }, void(touches[1].y < 30 && a());
        touches[1] = {
            x: null,
            y: null
        }, null == dragLast[0] && (dragLast[0] = touches[0]), dragIncrement = touches[0].y - dragLast[0].y, Math.abs(touches[0].x - dragLast[0].x) > 40 && (dragIncrement = 0), dragLast[0] = touches[0], dragIncrement = d(idol.data.y, dragIncrement), idol.data.y += dragIncrement, null == dragLast[1] && (dragLast[1] = touches[1]), dragIncrement = touches[1].y - dragLast[1].y, Math.abs(touches[1].x - dragLast[1].x) > 40 && (dragIncrement = 0), dragLast[1] = touches[1], dragIncrement = d(idol.data.y, dragIncrement), idol.data.y += dragIncrement;
        idol.data.y;
        b(), rankUpdate()
    }), container.on("touchend.drag mouseup.drag", function (b) {
        b.preventDefault(), b.stopPropagation(), b.originalEvent.touches || (b.originalEvent.touches = [b.originalEvent]), is_draging = !1, clearInterval(scrollResetTimer), dragLast = new Array, (0 === b.originalEvent.touches.length || "mouseup" == b.type) && a()
    })
}

function initSharePanel() {
    $(".share-button").show(), $(".share-button").on("touchend mouseup", function (a) {
        a.preventDefault();
        var b = BLACKOUT({
            click: !0,
            insertBefore: $(".share-panel"),
            color: "rgba(66,33,11,0.8)"
        });
        $(".share-rank").html(highRank + "m"), cssAnimationKicker($(".share-panel"), {
            transform: "translate3d(0,200%,0)",
            display: "block",
            opacity: "0",
            transition: "0.3s ease-out"
        }, {
            transform: "translate3d(0,0,0)",
            opacity: "1"
        }), b.one("clearStart", function () {
            cssAnimationKicker($(".share-panel"), {
                transform: "translate3d(0,0,0)",
                display: "block",
                opacity: "1",
                transition: "0.3s ease-out"
            }, {
                transform: "translate3d(0,200%,0)",
                opacity: "0"
            })
        }), is_same ? $(".share-panel .close-share-panel").one("click", function (a) {
            a.preventDefault(), window.location.assign("Xmas-2014-rank.html")
        }) : $(".share-panel .close-share-panel").one("click", function (a) {
            a.preventDefault(), b.clear()
        })
    })
}

function onShare() {
    $("#idol-d").removeClass("void")
}

function enableShare() {
    shareEnable = !0, initSharePanel()
}

function connectWebViewJavascriptBridge(a) {
    window.WebViewJavascriptBridge ? a(WebViewJavascriptBridge) : document.addEventListener("WebViewJavascriptBridgeReady", function () {
        a(WebViewJavascriptBridge), is_same = !0, enableShare(), $("#idol-d").addClass("void"), heightControl(height), $(".share-panel .close-share-panel").addClass("rank-button").html("")
    }, !1)
}

FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0, FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent), FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), FastClick.prototype.needsClick = function (a) {
        "use strict";
        switch (a.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (a.disabled) return !0;
            break;
        case "input":
            if (this.deviceIsIOS && "file" === a.type || a.disabled) return !0;
            break;
        case "label":
        case "video":
            return !0
        }
        return /\bneedsclick\b/.test(a.className)
    }, FastClick.prototype.needsFocus = function (a) {
        "use strict";
        switch (a.nodeName.toLowerCase()) {
        case "textarea":
        case "select":
            return !0;
        case "input":
            switch (a.type) {
            case "button":
            case "checkbox":
            case "file":
            case "image":
            case "radio":
            case "submit":
                return !1
            }
            return !a.disabled && !a.readOnly;
        default:
            return /\bneedsfocus\b/.test(a.className)
        }
    }, FastClick.prototype.sendClick = function (a, b) {
        "use strict";
        var c, d;
        document.activeElement && document.activeElement !== a && document.activeElement.blur(), d = b.changedTouches[0], c = document.createEvent("MouseEvents"), c.initMouseEvent("click", !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), c.forwardedTouchEvent = !0, a.dispatchEvent(c)
    }, FastClick.prototype.focus = function (a) {
        "use strict";
        var b;
        this.deviceIsIOS && a.setSelectionRange ? (b = a.value.length, a.setSelectionRange(b, b)) : a.focus()
    }, FastClick.prototype.updateScrollParent = function (a) {
        "use strict";
        var b, c;
        if (b = a.fastClickScrollParent, !b || !b.contains(a)) {
            c = a;
            do {
                if (c.scrollHeight > c.offsetHeight) {
                    b = c, a.fastClickScrollParent = c;
                    break
                }
                c = c.parentElement
            } while (c)
        }
        b && (b.fastClickLastScrollTop = b.scrollTop)
    }, FastClick.prototype.getTargetElementFromEventTarget = function (a) {
        "use strict";
        return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
    }, FastClick.prototype.onTouchStart = function (a) {
        "use strict";
        var b, c, d;
        if (a.targetTouches.length > 1) return !0;
        if (b = this.getTargetElementFromEventTarget(a.target), c = a.targetTouches[0], this.deviceIsIOS) {
            if (d = window.getSelection(), d.rangeCount && !d.isCollapsed) return !1;
            if (!this.deviceIsIOS4) {
                if (c.identifier === this.lastTouchIdentifier) return a.preventDefault(), !0;
                this.lastTouchIdentifier = c.identifier, this.updateScrollParent(b)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = a.timeStamp, this.targetElement = b, this.touchStartX = c.pageX, this.touchStartY = c.pageY, a.timeStamp - this.lastClickTime < 200 && a.preventDefault(), !0
    }, FastClick.prototype.touchHasMoved = function (a) {
        "use strict";
        var b = a.changedTouches[0],
            c = this.touchBoundary;
        return Math.abs(b.pageX - this.touchStartX) > c || Math.abs(b.pageY - this.touchStartY) > c ? !0 : !1
    }, FastClick.prototype.findControl = function (a) {
        "use strict";
        return void 0 !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, FastClick.prototype.onTouchEnd = function (a) {
        "use strict";
        var b, c, d, e, f, g = this.targetElement;
        if (this.touchHasMoved(a) && (this.trackingClick = !1, this.targetElement = null), !this.trackingClick) return !0;
        if (a.timeStamp - this.lastClickTime < 200) return this.cancelNextClick = !0, !0;
        if (this.lastClickTime = a.timeStamp, c = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, this.deviceIsIOSWithBadTarget && (f = a.changedTouches[0], g = document.elementFromPoint(f.pageX - window.pageXOffset, f.pageY - window.pageYOffset)), d = g.tagName.toLowerCase(), "label" === d) {
            if (b = this.findControl(g)) {
                if (this.focus(g), this.deviceIsAndroid) return !1;
                g = b
            }
        } else if (this.needsFocus(g)) return a.timeStamp - c > 100 || this.deviceIsIOS && window.top !== window && "input" === d ? (this.targetElement = null, !1) : (this.focus(g), this.deviceIsIOS4 && "select" === d || (this.targetElement = null, a.preventDefault()), !1);
        return this.deviceIsIOS && !this.deviceIsIOS4 && (e = g.fastClickScrollParent, e && e.fastClickLastScrollTop !== e.scrollTop) ? !0 : (this.needsClick(g) || (a.preventDefault(), this.sendClick(g, a)), !1)
    }, FastClick.prototype.onTouchCancel = function () {
        "use strict";
        this.trackingClick = !1, this.targetElement = null
    }, FastClick.prototype.onMouse = function (a) {
        "use strict";
        return this.targetElement ? a.forwardedTouchEvent ? !0 : a.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, a.stopPropagation(), a.preventDefault(), !1) : !0 : !0
    }, FastClick.prototype.onClick = function (a) {
        "use strict";
        var b;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === a.target.type && 0 === a.detail ? !0 : (b = this.onMouse(a), b || (this.targetElement = null), b)
    }, FastClick.prototype.destroy = function () {
        "use strict";
        var a = this.layer;
        this.deviceIsAndroid && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0)), a.removeEventListener("click", this.onClick, !0), a.removeEventListener("touchstart", this.onTouchStart, !1), a.removeEventListener("touchend", this.onTouchEnd, !1), a.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, FastClick.notNeeded = function (a) {
        "use strict";
        var b;
        if ("undefined" == typeof window.ontouchstart) return !0;
        if (/Chrome\/[0-9]+/.test(navigator.userAgent)) {
            if (!FastClick.prototype.deviceIsAndroid) return !0;
            if (b = document.querySelector("meta[name=viewport]"), b && -1 !== b.content.indexOf("user-scalable=no")) return !0
        }
        return "none" === a.style.msTouchAction ? !0 : !1
    }, FastClick.attach = function (a) {
        "use strict";
        return new FastClick(a)
    }, "undefined" != typeof define && define.amd ? define(function () {
        "use strict";
        return FastClick
    }) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick, jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (a, b, c, d, e) {
            return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
        }, easeInQuad: function (a, b, c, d, e) {
            return d * (b /= e) * b + c
        }, easeOutQuad: function (a, b, c, d, e) {
            return -d * (b /= e) * (b - 2) + c
        }, easeInOutQuad: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
        }, easeInCubic: function (a, b, c, d, e) {
            return d * (b /= e) * b * b + c
        }, easeOutCubic: function (a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b + 1) + c
        }, easeInOutCubic: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
        }, easeInQuart: function (a, b, c, d, e) {
            return d * (b /= e) * b * b * b + c
        }, easeOutQuart: function (a, b, c, d, e) {
            return -d * ((b = b / e - 1) * b * b * b - 1) + c
        }, easeInOutQuart: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
        }, easeInQuint: function (a, b, c, d, e) {
            return d * (b /= e) * b * b * b * b + c
        }, easeOutQuint: function (a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b * b * b + 1) + c
        }, easeInOutQuint: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
        }, easeInSine: function (a, b, c, d, e) {
            return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
        }, easeOutSine: function (a, b, c, d, e) {
            return d * Math.sin(b / e * (Math.PI / 2)) + c
        }, easeInOutSine: function (a, b, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
        }, easeInExpo: function (a, b, c, d, e) {
            return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
        }, easeOutExpo: function (a, b, c, d, e) {
            return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
        }, easeInOutExpo: function (a, b, c, d, e) {
            return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
        }, easeInCirc: function (a, b, c, d, e) {
            return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
        }, easeOutCirc: function (a, b, c, d, e) {
            return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
        }, easeInOutCirc: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
        }, easeInElastic: function (a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g)) + c
        }, easeOutElastic: function (a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return h * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - f) * Math.PI / g) + d + c
        }, easeInOutElastic: function (a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (2 == (b /= e / 2)) return c + d;
            if (g || (g = .3 * e * 1.5), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return 1 > b ? -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) * .5 + d + c
        }, easeInBack: function (a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
        }, easeOutBack: function (a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
        }, easeInOutBack: function (a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
        }, easeInBounce: function (a, b, c, d, e) {
            return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
        }, easeOutBounce: function (a, b, c, d, e) {
            return (b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
        }, easeInOutBounce: function (a, b, c, d, e) {
            return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
        }
    }),
    function (a) {
        "use strict";
        var b = {
            version: 3.2
        };
        a.WeixinApi = b, "function" == typeof define && (define.amd || define.cmd) && (define.amd ? define(function () {
            return b
        }) : define.cmd && define(function (a, c, d) {
            d.exports = b
        }));
        var c = function () {
                for (var a, b, c = {}, d = 0, e = arguments.length; e > d; d++)
                    if (a = arguments[d], "object" == typeof a)
                        for (b in a) c[b] = a[b];
                return c
            },
            d = function (a, d, e) {
                e = e || {};
                var f = function (a) {
                        switch (!0) {
                        case /\:cancel$/i.test(a.err_msg):
                            e.cancel && e.cancel(a);
                            break;
                        case /\:(confirm|ok)$/i.test(a.err_msg):
                            e.confirm && e.confirm(a);
                            break;
                        case /\:fail$/i.test(a.err_msg):
                        default:
                            e.fail && e.fail(a)
                        }
                        e.all && e.all(a)
                    },
                    g = function (b, c) {
                        if ("menu:general:share" === a.menu) {
                            if (("favorite" == c.shareTo || "favorite" == c.scene) && e.favorite === !1) return c.generalShare(b, function () {});
                            c.generalShare(b, f)
                        } else WeixinJSBridge.invoke(a.action, b, f)
                    };
                WeixinJSBridge.on(a.menu, function (f) {
                    e.async && e.ready ? (b._wx_loadedCb_ = e.dataLoaded || new Function, b._wx_loadedCb_.toString().indexOf("_wx_loadedCb_") > 0 && (b._wx_loadedCb_ = new Function), e.dataLoaded = function (e) {
                        var h = c(d, e);
                        ("menu:share:timeline" == a.menu || "menu:general:share" == a.menu && "timeline" == f.shareTo) && (h = {
                            appid: h.appId ? h.appId : "",
                            img_url: h.imgUrl,
                            link: h.link,
                            desc: h.title,
                            title: h.desc,
                            img_width: "640",
                            img_height: "640"
                        }), b._wx_loadedCb_(h), g(h, f)
                    }, (!f || "favorite" != f.shareTo && "favorite" != f.scene || e.favorite !== !1) && e.ready && e.ready(f, d)) : ((!f || "favorite" != f.shareTo && "favorite" != f.scene || e.favorite !== !1) && e.ready && e.ready(f, d), g(d, f))
                })
            };
        b.shareToTimeline = function (a, b) {
            d({
                menu: "menu:share:timeline",
                action: "shareTimeline"
            }, {
                appid: a.appId ? a.appId : "",
                img_url: a.imgUrl,
                link: a.link,
                desc: a.title,
                title: a.desc,
                img_width: "640",
                img_height: "640"
            }, b)
        }, b.shareToFriend = function (a, b) {
            d({
                menu: "menu:share:appmessage",
                action: "sendAppMessage"
            }, {
                appid: a.appId ? a.appId : "",
                img_url: a.imgUrl,
                link: a.link,
                desc: a.desc,
                title: a.title,
                img_width: "640",
                img_height: "640"
            }, b)
        }, b.shareToWeibo = function (a, b) {
            d({
                menu: "menu:share:weibo",
                action: "shareWeibo"
            }, {
                content: a.desc,
                url: a.link
            }, b)
        }, b.generalShare = function (a, b) {
            d({
                menu: "menu:general:share"
            }, {
                appid: a.appId ? a.appId : "",
                img_url: a.imgUrl,
                link: a.link,
                desc: a.desc,
                title: a.title,
                img_width: "640",
                img_height: "640"
            }, b)
        }, b.addContact = function (a, b) {
            b = b || {}, WeixinJSBridge.invoke("addContact", {
                webtype: "1",
                username: a
            }, function (a) {
                var c = !a.err_msg || "add_contact:ok" == a.err_msg || "add_contact:added" == a.err_msg;
                c ? b.success && b.success(a) : b.fail && b.fail(a)
            })
        }, b.imagePreview = function (a, b) {
            a && b && 0 != b.length && WeixinJSBridge.invoke("imagePreview", {
                current: a,
                urls: b
            })
        }, b.showOptionMenu = function () {
            WeixinJSBridge.call("showOptionMenu")
        }, b.hideOptionMenu = function () {
            WeixinJSBridge.call("hideOptionMenu")
        }, b.showToolbar = function () {
            WeixinJSBridge.call("showToolbar")
        }, b.hideToolbar = function () {
            WeixinJSBridge.call("hideToolbar")
        }, b.getNetworkType = function (a) {
            a && "function" == typeof a && WeixinJSBridge.invoke("getNetworkType", {}, function (b) {
                a(b.err_msg)
            })
        }, b.closeWindow = function (a) {
            a = a || {}, WeixinJSBridge.invoke("closeWindow", {}, function (b) {
                switch (b.err_msg) {
                case "close_window:ok":
                    a.success && a.success(b);
                    break;
                default:
                    a.fail && a.fail(b)
                }
            })
        }, b.ready = function (b) {
            if (b && "function" == typeof b) {
                var c = this,
                    d = function () {
                        b(c)
                    };
                "undefined" == typeof a.WeixinJSBridge ? document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", d, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", d), document.attachEvent("onWeixinJSBridgeReady", d)) : d()
            }
        }, b.openInWeixin = function () {
            return /MicroMessenger/i.test(navigator.userAgent)
        }, b.scanQRCode = function (a) {
            a = a || {}, WeixinJSBridge.invoke("scanQRCode", {}, function (b) {
                switch (b.err_msg) {
                case "scan_qrcode:ok":
                    a.success && a.success(b);
                    break;
                default:
                    a.fail && a.fail(b)
                }
            })
        }, b.getInstallState = function (a, b) {
            b = b || {}, WeixinJSBridge.invoke("getInstallState", {
                packageUrl: a.packageUrl || "",
                packageName: a.packageName || ""
            }, function (a) {
                var c = a.err_msg,
                    d = c.match(/state:yes_?(.*)$/);
                d ? (a.version = d[1] || "", b.success && b.success(a)) : b.fail && b.fail(a), b.all && b.all(a)
            })
        }, b.openLocation = function (a, b) {
            b = b || {}, WeixinJSBridge.invoke("openLocation", {
                latitude: a.latitude,
                longitude: a.longitude,
                name: a.name,
                address: a.address,
                scale: a.scale || 14,
                infoUrl: a.infoUrl || ""
            }, function (a) {
                "open_location:ok" === a.err_msg ? b.success && b.success(a) : b.fail && b.fail(a), b.all && b.all(a)
            })
        }, b.sendEmail = function (a, b) {
            b = b || {}, WeixinJSBridge.invoke("sendEmail", {
                title: a.subject,
                content: a.body
            }, function (a) {
                "send_email:sent" === a.err_msg ? b.success && b.success(a) : b.fail && b.fail(a), b.all && b.all(a)
            })
        }, b.enableDebugMode = function (b) {
            a.onerror = function (a, c, d, e) {
                if ("function" == typeof b) b({
                    message: a,
                    script: c,
                    line: d,
                    column: e
                });
                else {
                    var f = [];
                    f.push("额，代码有错。。。"), f.push("\n错误信息：", a), f.push("\n出错文件：", c), f.push("\n出错位置：", d + "行，" + e + "列"), alert(f.join(""))
                }
            }
        }
    }(window);
var nua = navigator.userAgent,
    is_android_browser = nua.indexOf("Mozilla/5.0") > -1 && nua.indexOf("Android ") > -1 && nua.indexOf("AppleWebKit") > -1 && !(nua.indexOf("Chrome") > -1),
    container = $(".content"),
    idol = $(".idol-head"),
    idolBody = $(".idol-body"),
    rank = 0,
    rankObj = $(".rank"),
    highRank = 0,
    highRankObj = $(".high-rank"),
    touches = new Array,
    dragDistance, dragStart, dragLast = new Array,
    scrollResetTimer, gameover = !1,
    is_draging = !1,
    scrollerWrapper = $(".scroller-wrapper"),
    characterWrapper = $(".character-wrapper"),
    responsiveScale = 1,
    characterIndex = 0,
    scale = 1,
    scrollStartValue, rankSingle = 0,
    shareEnable = !1,
    is_same = !1,
    height, scrollValue = 0;
idol.data.y = 0, $.ajaxSetup({
    headers: {
        Authorization: "Token " + user_token
    }
   
}), $(document).on("touchmove", function (a) {
	
	console.log(1);
    a.preventDefault()
}), $(".guide-ok").on("touchend mouseup", function (a) {
	//倒计时轮播
    a.preventDefault(),$(".BLACKOUT").css({"z-index":"100"}).fadeOut(),$(".lunbo").css({"display":"block"}),$(".lb-0").css({"display":"block"}), $(".guide").fadeOut()
}), ! function () {
    var a = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        b = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
        c = Math.min(a, b) / 32;
    c > 16 && (c = 16), responsiveScale = c / 10, height = b
}(), heightControl(height), GAME_START(), $(".idols").on("touchend mouseup", function () {
     var a = $(this);
    return 3 == a.index() && a.hasClass("void") ? void shareToUnlockPanel() : (characterIndex = a.index(), $(".idols").addClass("grey"), a.removeClass("grey"), characterWrapper.css({
        transform: "scale(" + responsiveScale + ") translate3d(0,200px,0)",
        transition: "200ms ease-out"
    }), setTimeout(function () {
        $(".pipe-wrapper").css({
            transform: "translate3d(" + -32 * characterIndex + "rem,0,0)",
            transition: "400ms ease-in-out"
        })
    }, 60), void setTimeout(function () {
        characterWrapper.css({
            transform: "scale(" + responsiveScale + ") translate3d(0,0,0)",
            transition: "200ms ease-out"
        }), setTimeout(function () {
            characterWrapper.css({
                transition: "none"
            })
        }, 200), idol.removeClass("idol-head-0 idol-head-1 idol-head-2 idol-head-3").addClass("idol-head-" + characterIndex), idolBody.removeClass("idol-body-0 idol-body-1 idol-body-2 idol-body-3").addClass("idol-body-" + characterIndex)
    }, 300))
}), $(".guide-button").on("touchend mouseup", function (a) {
    a.preventDefault(), a.stopPropagation();
    var b = BLACKOUT({
        click: !0,
        insertBefore: $(".guide"),
        color: "rgba(66,33,11,0.8)"
    });
    cssAnimationKicker($(".guide"), {
        transform: "translate3d(0,200%,0)",
        display: "block",
        opacity: "0",
        transition: "0.3s ease-out"
    }, {
        transform: "translate3d(0,0,0)",
        opacity: "1"
    }), b.one("clearStart", function () {
        cssAnimationKicker($(".guide"), {
            transform: "translate3d(0,0,0)",
            display: "block",
            opacity: "1",
            transition: "0.3s ease-out"
        }, {
            transform: "translate3d(0,200%,0)",
            opacity: "0"
        })
    }), $(".guide-ok").one("click", function () {
        b.clear()
    })
}), $(".guide-button").trigger("touchend").on("touchend", function (e) {
    e.stopPropagation()
}), WeixinApi.openInWeixin() && ($(".share-panel-footer").hide(), $(".share-panel").css({
    height: "25rem"
}), enableShare(), $(".share-text").html("点击右上角分享自己的最好成就，让你的朋友来 挑战 你吧!")), heightControl(height - 50), WeixinApi.ready(function (a) {
    var b = {
        async: !0,
        ready: function () {
            var a = {
                appId: "wx529f6ff7e993ee99",
                imgUrl: "https://ohsame.com/src/images/activity/Xmas-2014/share_cover-01.png",
                link: "https://ohsame.com/Xmas-2014-1.html",
                desc: "我将圣诞老人拔高了" + highRank + "米 还是没救出来T T 要不你来试试？",
                title: "圣诞老人拯救计划"
            };
            this.dataLoaded(a)
        }, cancel: function () {}, fail: function () {}, confirm: function () {
            $("#idol-d").removeClass("void")
        }, all: function () {}
    };
    a.shareToFriend({}, b), a.shareToTimeline({}, b)
}), window.onerror = function (a) {
    log("window.onerror: " + a)
}, connectWebViewJavascriptBridge(function (a) {
    function b(a, b) {
        var d = document.getElementById("log"),
            e = document.createElement("div");
        e.className = "logLine", e.innerHTML = c+++". " + a + ":<br/>" + JSON.stringify(b), d.children.length ? d.insertBefore(e, d.children[0]) : d.appendChild(e)
    }
    var c = 1;
    a.init(function (a, c) {
        b("JS got a message", a);
        var d = {
            "Javascript Responds": "Wee!"
        };
        b("JS responding with", d), c(d)
    }), a.registerHandler("testJavascriptHandler", function (a, c) {
        b("ObjC called testJavascriptHandler with", a);
        var d = {
            "Javascript Says": "Right back atcha!"
        };
        b("JS responding with", d), c(d)
    }), a.registerHandler("onShare", function (a) {
        onShare()
    });
//  var d = document.getElementById("share-weibo");
//  d.onclick = function (c) {
//      c.preventDefault(), b('JS calling handler "fire weibo"'), a.callHandler("shareWithApp", {
//          link: "https://ohsame.com/Xmas-2014-1.html",
//          desc: "我将圣诞老人拔高了" + highRank + "米 还是没救出来T T 要不你来试试？",
//          thumb: "http://same.u.qiniudn.com/xmas.png",
//          type: "weibo"
//      }, function () {})
//  };
//  var d = document.getElementById("share-weixin");
//  d.onclick = function (c) {
//      c.preventDefault(), b('JS calling handler "shareWithApp"'), a.callHandler("shareWithApp", {
//          link: "https://ohsame.com/Xmas-2014-1.html",
//          desc: "我将圣诞老人拔高了" + highRank + "米 还是没救出来T T 要不你来试试？",
//          thumb: "https://ohsame.com/src/images/activity/Xmas-2014/share_cover-01.png",
//          type: "wxsession"
//      }, function () {})
//  };
//  var d = document.getElementById("share-weixin-timeline");
//  d.onclick = function (c) {
//      c.preventDefault(), b('JS calling handler "shareWithApp"'), a.callHandler("shareWithApp", {
//          link: "https://ohsame.com/Xmas-2014-1.html",
//          desc: "我将圣诞老人拔高了" + highRank + "米 还是没救出来T T 要不你来试试？",
//          thumb: "https://ohsame.com/src/images/activity/Xmas-2014/share_cover-01.png",
//          type: "wxtimeline"
//      }, function () {})
//  };
//  var d = document.getElementById("share-contact");
//  d.onclick = function (c) {
//      c.preventDefault(), b('JS calling handler "shareWithApp"'), a.callHandler("shareWithApp", {
//          link: "https://ohsame.com/Xmas-2014-1.html",
//          desc: "我将圣诞老人拔高了" + highRank + "米 还是没救出来T T 要不你来试试？",
//          thumb: "https://ohsame.com/src/images/activity/Xmas-2014/share_cover-01.png",
//          type: "catalog"
//      }, function () {})
//  };
//  var d = document.getElementById("unshare-panel-button");
//  d.onclick = function (c) {
//      c.preventDefault(), b('JS calling handler "shareWithApp"'), a.callHandler("shareWithApp", {
//          link: "https://ohsame.com/Xmas-2014-1.html",
//          desc: "我将圣诞老人拔高了" + highRank + "米 还是没救出来T T 要不你来试试？",
//          thumb: "https://ohsame.com/src/images/activity/Xmas-2014/share_cover-01.png",
//          type: "wxtimeline"
//      }, function () {})
//  }

});