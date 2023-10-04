"use strict";
// ==UserScript==
// @name         SMB GenAI Tag
// @description  Helps tag SA/CSM Activity with GenAI
// @author       wchemz@amzon.com
// @namespace    smb
// @version      0.1.0
// @match        https://aws-crm.lightning.force.com/lightning/*
// @updateURL    https://github.com/wchemz/SMBGenAITag/raw/main/scripts/genai.user.js
// @downloadURL  https://github.com/wchemz/SMBGenAITag/raw/main/scripts/genai.user.js
// ==/UserScript==

const genai_banner = "https://wchemz-customer-share.s3.amazonaws.com/GenAI-logo.jpeg",
    genai_banner_style = "width: 25px; height: 25px;",
    imgElement = document.createElement("img");
imgElement.src = genai_banner, imgElement.style = genai_banner_style, document.body.appendChild(imgElement);
var __awaiter = this && this.__awaiter || function (A, f, P, n) {
    return new (P || (P = Promise))((function (r, v) {
        function t(A) {
            try {
                H(n.next(A))
            } catch (A) {
                v(A)
            }
        }

        function e(A) {
            try {
                H(n.throw(A))
            } catch (A) {
                v(A)
            }
        }

        function H(A) {
            var f;
            A.done ? r(A.value) : (f = A.value, f instanceof P ? f : new P((function (A) {
                A(f)
            }))).then(t, e)
        }
        H((n = n.apply(A, f || [])).next())
    }))
},
    __generator = this && this.__generator || function (A, f) {
        var P, n, r, v, t = {
            label: 0,
            sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return v = {
            next: e(0),
            throw: e(1),
            return: e(2)
        }, "function" == typeof Symbol && (v[Symbol.iterator] = function () {
            return this
        }), v;

        function e(v) {
            return function (e) {
                return function (v) {
                    if (P) throw new TypeError("Generator is already executing.");
                    for (; t;) try {
                        if (P = 1, n && (r = 2 & v[0] ? n.return : v[0] ? n.throw || ((r = n.return) && r
                                                                                      .call(n), 0) : n.next) && !(r = r.call(n, v[1])).done) return r;
                        switch (n = 0, r && (v = [2 & v[0], r.value]), v[0]) {
                            case 0:
                            case 1:
                                r = v;
                                break;
                            case 4:
                                return t.label++, {
                                    value: v[1],
                                    done: !1
                                };
                            case 5:
                                t.label++, n = v[1], v = [0];
                                continue;
                            case 7:
                                v = t.ops.pop(), t.trys.pop();
                                continue;
                            default:
                                if (!(r = t.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== v[0] &&
                                      2 !== v[0])) {
                                    t = 0;
                                    continue
                                }
                                if (3 === v[0] && (!r || v[1] > r[0] && v[1] < r[3])) {
                                    t.label = v[1];
                                    break
                                }
                                if (6 === v[0] && t.label < r[1]) {
                                    t.label = r[1], r = v;
                                    break
                                }
                                if (r && t.label < r[2]) {
                                    t.label = r[2], t.ops.push(v);
                                    break
                                }
                                r[2] && t.ops.pop(), t.trys.pop();
                                continue
                        }
                        v = f.call(A, t)
                    } catch (A) {
                        v = [6, A], n = 0
                    } finally {
                        P = r = 0
                    }
                    if (5 & v[0]) throw v[1];
                    return {
                        value: v[0] ? v[1] : void 0,
                        done: !0
                    }
                }([v, e])
            }
        }
    },
    SelectorPrefix =
    "body > div.desktop.container.forceStyle.oneOne.navexDesktopLayoutContainer.lafAppLayoutHost.forceAccess.tablet > div.viewport > section > div.flexipagePage > div.oneUtilityBarContainer.oneUtilityBar",
    FormPrefix = "".concat(SelectorPrefix,
                           " > div.panel.scrollable.slds-utility-panel.slds-grid.slds-grid--vertical.oneUtilityBarPanel.DOCKED.slds-is-open > div > div > c-bts-edit-task-lwc"
                          ),
    ActivitySelectors = {
        FormFrame: FormPrefix,
        activity: "".concat(FormPrefix, " > div > div > div:nth-child(7) > lightning-input > div > div > input"),
        subjectTextArea: "".concat(FormPrefix, " > div > div > div:nth-child(8) > div > div > textarea"),
        //subjectTextArea: "".concat(FormPrefix, " > div > div > div.slds-col.slds-size_3-of-3.slds-p-bottom_x-small > lightning-input > div > div > input"),
        SaveButton: "".concat(FormPrefix,
                              " > div > div > div.slds-col.slds-size_1-of-1.slds-text-align_right.bts-buttons-footer > lightning-button.slds-m-right_small"
                             ),
        UtilityButton: "".concat(SelectorPrefix,
                                 " > div.oneUtilityBar.slds-utility-bar_container.oneUtilityBarContent > ul > li:nth-child(1) > div > div > button"
                                )
    };

 console.log("ActivitySelectors.activity:" + ActivitySelectors.activity);
 console.log("ActivitySelectors.subjectTextArea:" + ActivitySelectors.subjectTextArea);

function createInvocationButton(A, f, P) {
    return __awaiter(this, void 0, void 0, (function () {
        var A, n, r;
        return __generator(this, (function (v) {
            switch (v.label) {
                case 0:
                    return [4, waitAndGetElementOnLoad(ActivitySelectors.SaveButton, f
                                                       .shadowRoot)];
                case 1:
                    return A = v.sent(), (n = document.createElement("button")).className =
                        "slds-button slds-button_neutral", n.innerText = "GenAI Tags", (r =
                                                                                        document.createElement("lightning-button")).className =
                        "slds-m-right_small", r.appendChild(n), n.addEventListener("click", P),
                        A.parentNode.insertBefore(r, A), [2]
            }
        }))
    }))
}

function createLogo(A) {
    var f = document.createElement("img");
    f.src = genai_banner, A.appendChild(f)
}

function createHyperLink(A, f, P) {
    var n = document.createElement("a");
    return n.title = A, n.href = f, P.appendChild(n), n
}

function createTextInput(A) {
    var f = document.createElement("lightning-input");
    f.className = "slds-input";
    var P = document.createElement("input");
    return P.className = "slds-input", f.appendChild(P), A.appendChild(P), P
}

function createSelect(A, f) {
    var P = document.createElement("div");
    P.className = "slds-p-vertical_small slds-text-title_caps", P.innerText = A, f.appendChild(P);
    var n = document.createElement("lightning-base-combobox");
    n.className = "slds-combobox_container";
    var r = document.createElement("select");
    return r.className = "slds-input slds-combobox__input", n.appendChild(r), f.appendChild(n), r
}

function addOptionItem(A, f) {
    var P = document.createElement("option");
    P.text = f.title, P.value = f.title, A.add(P)
}

function createButton(A, f) {
    var P = document.createElement("button");
    return P.className = "slds-button slds-button_neutral", P.innerText = A, P
}

function waitAndGetElementOnLoad(A, f) {
    return void 0 === f && (f = document), __awaiter(this, void 0, void 0, (function () {
        var P;
        return __generator(this, (function (n) {
            switch (n.label) {
                case 0:
                    return [4, sleep(5)];
                case 1:
                    return n.sent(), (P = f.querySelector(A)) ? [2, P] : [2, new Promise((
                        function (P) {
                            var n = new MutationObserver((function () {
                                var r = f.querySelector(A);
                                r && (n.disconnect(), P(r))
                            }));
                            n.observe(f, {
                                attributes: !0,
                                childList: !0,
                                subtree: !0
                            })
                        }))]
            }
        }))
    }))
}

function sleep(A) {
    return new Promise((function (f) {
        return setTimeout(f, A)
    }))
}

function getShadowElement(A) {
    console.log(A[1]);
    return __awaiter(this, void 0, void 0, (function () {
        var f, P;
        return __generator(this, (function (n) {
            switch (n.label) {
                case 0:
                    f = A[0], P = 1, n.label = 1;
                case 1:
                    return P < A.length ? (console.log("getShadowElement"), console.log(P),
                                           console.log(A[P]), console.log(f), f.shadowRoot ? [4,
                                                                                              waitAndGetElementOnLoad(A[P], f.shadowRoot)
                                                                                             ] : [3, 3]) : [3, 7];
                case 2:
                    return f = n.sent(), [3, 5];
                case 3:
                    return [4, waitAndGetElementOnLoad(A[P], f)];
                case 4:
                    f = n.sent(), n.label = 5;
                case 5:
                    console.log(f), n.label = 6;
                case 6:
                    return P++, [3, 1];
                case 7:
                    return [2, f]
            }
        }))
    }))
}

function simulateClick(A) {
    return A.dispatchEvent(new PointerEvent("pointerdown", {
        bubbles: !0
    })), A.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0
    })), A.dispatchEvent(new PointerEvent("pointerup", {
        bubbles: !0
    })), A.dispatchEvent(new MouseEvent("mouseup", {
        bubbles: !0
    })), A.dispatchEvent(new MouseEvent("mouseout", {
        bubbles: !0
    })), A.dispatchEvent(new MouseEvent("click", {
        bubbles: !0
    })), A.dispatchEvent(new Event("change", {
        bubbles: !0
    })), !0
}
var genaioutreach = ['GenAi-Outreach']

var customerJourneyMaps = [{
    title: "Sends GenAI outreach email",
    tag: ["#genai-outreach"],
}, {
    title: "GenAI FCD/Demo",
    tag: ["#genai-fcd-demo"],
}, {
    title: "GenAI use case",
    tag: ["#genai-usecase"],
}, {
    title: "GenAI architecture design",
    tag: ["#genai-arch"],
}, {
    title: "GenAI POC",
    tag: ["#genai-poc"],
},{
    title: "Demo Squad",
    tag: ["#smb-demo-squad"],
},{
    title: "TRP",
    tag: ["~TRP~"],
}];
!function () {
    __awaiter(this, void 0, void 0, (function () {
        function addTagsToTextArea() {
            return __awaiter(this, void 0, void 0, (function () {
                var formFrame, formShadowRoot, containerDiv, tableContainerDiv, selectElement, otherTagsDiv, otherTagsText, addTagButton, backButton, self = this;
                return __generator(this, (function (_context) {
                    formFrame = document.querySelector(ActivitySelectors.FormFrame);
                    formShadowRoot = formFrame.shadowRoot.firstChild;
                    containerDiv = document.createElement("div");
                    containerDiv.className = "slds-grid slds-wrap slds-p-around_medium";
                    tableContainerDiv = document.createElement("div");
                    tableContainerDiv.className = "bts-table-container";
                    containerDiv.appendChild(tableContainerDiv);
                    createLogo(tableContainerDiv);
                    selectElement = createSelect("GenAI activity type", tableContainerDiv);
                    customerJourneyMaps.forEach((function (tag) {
                        addOptionItem(selectElement, tag);
                    }));
                    otherTagsDiv = document.createElement("div");
                    otherTagsDiv.className = "slds-p-vertical_small slds-text-title_caps";
                    otherTagsDiv.innerText = "Other";
                    otherTagsDiv.style.display = "none";
                    tableContainerDiv.appendChild(otherTagsDiv);
                    otherTagsText = createTextInput(tableContainerDiv);
                    otherTagsText.style.display = "none";
                    selectElement.dispatchEvent(new Event("change"));
                    createHyperLink("Customer Journey Maps WIKI", "https://w.amazon.com/bin/view/AWS_UKIR_SA_SMB/Initiatives/CustomerJourneyMaps", tableContainerDiv);
                    addTagButton = createButton("Add Tag", formFrame);
                    addTagButton.addEventListener("click", (function () {
                        return __awaiter(self, void 0, void 0, (function () {
                            var subjectTextArea, selectedTag;
                            return __generator(this, (function (_context2) {
                                switch (_context2.label) {
                                    case 0:
                                        console.log(ActivitySelectors.subjectTextArea);
                                        return [4, getShadowElement([formFrame, ActivitySelectors.subjectTextArea])];
                                    case 1:
                                        console.log("case 1 line 324");
                                        console.log(ActivitySelectors.activity);
                                        subjectTextArea = _context2.sent();
                                        selectedTag = customerJourneyMaps[selectElement.selectedIndex].tag;
                                        subjectTextArea.value += selectedTag + "\n";
                                        simulateClick(subjectTextArea);
                                        formFrame.removeChild(containerDiv);
                                        formShadowRoot.style.display = "";
                                        return [2];
                                }
                            }));
                        }));
                    }));
                    backButton = createButton("Back", formFrame);
                    backButton.addEventListener("click", (function () {
                        formFrame.removeChild(containerDiv);
                        formShadowRoot.style.display = "";
                    }));
                    var buttonsFooterDiv = document.createElement("div");
                    buttonsFooterDiv.className = "slds-col slds-size_1-of-1 slds-text-align_right bts-buttons-footer";
                    buttonsFooterDiv.appendChild(addTagButton);
                    buttonsFooterDiv.appendChild(backButton);
                    containerDiv.appendChild(buttonsFooterDiv);
                    formShadowRoot.style.display = "none";
                    formFrame.appendChild(containerDiv);
                    return [2];
                }));
            }))
        }
        return __generator(this, (function (_context3) {
            switch (_context3.label) {
                case 0:
                    return [4, waitAndGetElementOnLoad(ActivitySelectors.FormFrame)];
                case 1:
                    createInvocationButton("CJM", _context3.sent(), addTagsToTextArea);
                    return [2];
            }
        }))
    }))
}();
