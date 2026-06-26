import { n as __toESM } from "./chunks/rolldown-runtime.js";
import { C as BookOpen, D as Accessibility, E as ArrowLeft, O as require_react, S as ChartColumn, T as ArrowRight, _ as Clock3, a as Sun, b as ChevronRight, c as Settings, d as Moon, f as Monitor, g as History, h as LockKeyhole, i as Target, l as Save, m as LogOut, n as User, o as Sparkles, p as Menu, r as Trophy, s as ShieldCheck, t as X, u as Palette, v as CircleX, w as Award, x as Check, y as CircleCheck } from "./chunks/icons.js";
import { n as require_client, t as require_jsx_runtime } from "./chunks/react.js";
//#region frontend/src/appData.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_client = require_client();
var appData = JSON.parse(document.getElementById("ots-data").textContent);
var csrfToken = document.getElementById("root").dataset.csrf;
//#endregion
//#region frontend/src/preferences.js
var defaults = {
	theme: "system",
	quizSize: 5,
	reducedMotion: false
};
function readPreferences() {
	try {
		const saved = JSON.parse(localStorage.getItem("quizly-preferences"));
		return {
			...defaults,
			...saved
		};
	} catch {
		return defaults;
	}
}
function applyPreferences(preferences) {
	const systemUsesDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const useDark = preferences.theme === "dark" || preferences.theme === "system" && systemUsesDark;
	document.documentElement.dataset.theme = useDark ? "dark" : "light";
	document.documentElement.dataset.motion = preferences.reducedMotion ? "reduced" : "full";
}
function savePreferences(preferences) {
	localStorage.setItem("quizly-preferences", JSON.stringify(preferences));
	applyPreferences(preferences);
}
//#endregion
//#region frontend/src/components.jsx
var import_jsx_runtime = require_jsx_runtime();
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		className: "logo",
		href: appData.urls.welcome,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "logo-mark",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 18 })
		}), "Testing System"]
	});
}
function Header({ simple = false }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const loggedIn = Boolean(appData.name);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "site-header",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), !simple && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "menu-button",
			onClick: () => setOpen(!open),
			"aria-label": "Toggle navigation",
			children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: open ? "nav open" : "nav",
			children: loggedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: appData.urls.home,
					children: "Dashboard"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: appData.urls.history,
					children: "History"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: appData.urls.settings,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { size: 16 }), " Settings"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "outline-button",
					href: appData.urls.logout,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { size: 16 }), " Log out"]
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#features",
					children: "Features"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: appData.urls.login,
					children: "Log in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "primary-button small",
					href: appData.urls.signup,
					children: ["Get started ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
				})
			] })
		})] })]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Learn. Practice. Grow." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Testing System" })
	] });
}
function Field({ label, ...inputProps }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "field",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			required: true,
			...inputProps
		})]
	});
}
function Feature({ icon, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "feature",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "feature-icon",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text })
		]
	});
}
function Stat({ label, value, icon, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stat",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: tone,
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: value }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: label })] })]
	});
}
function SettingsCard({ icon, title, description, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "settings-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "settings-card-head",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: icon }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: description })] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "settings-card-body",
			children
		})]
	});
}
//#endregion
//#region frontend/main.jsx
applyPreferences(readPreferences());
function Welcome() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "hero",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 15 }), " A smarter way to practice"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: ["Turn knowledge into ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "confidence." })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lead",
						children: "Focused quizzes, instant feedback, and a clear view of your progress—all in one calm place."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "primary-button",
							href: appData.urls.signup,
							children: ["Start learning free ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "text-link",
							href: appData.urls.login,
							children: ["I have an account ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 17 })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "trust",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {}), " No credit card"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {}), " Instant results"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {}), " Track progress"] })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-visual",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "blob blob-one" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "blob blob-two" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "quiz-card tilted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-top",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Quick quiz" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "3 of 5" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "progress",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { width: "60%" } })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Which planet is known as the Red Planet?" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "fake-option",
								children: ["A ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Venus" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "fake-option active",
								children: [
									"B ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mars" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 17 })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "fake-option",
								children: ["C ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Jupiter" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "score-bubble",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Great work!" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "4 / 5 correct" })] })]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "feature-section",
			id: "features",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "EVERYTHING YOU NEED" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Practice that actually moves you forward" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "feature-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, {}),
						title: "Focused practice",
						text: "Choose your challenge and build momentum one question at a time."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {}),
						title: "Instant feedback",
						text: "See your score right away and know exactly where you stand."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, {}),
						title: "Visible progress",
						text: "Your complete test history makes improvement easy to spot."
					})
				]
			})]
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
function AuthLayout({ mode }) {
	const signup = mode === "signup";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "auth-page",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { simple: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "auth-wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "auth-art",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow light",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 15 }), " YOUR NEXT CHAPTER"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: signup ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"A little practice.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "A lot of progress." })
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Good to see",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "you again." })
					] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: signup ? "Create your account and make every question count." : "Your progress is right where you left it." })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", { children: ["“Success is the sum of small efforts, repeated day in and day out.”", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cite", { children: "— Robert Collier" })] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "auth-form-panel",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "form-box",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mobile-logo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: signup ? "Create your account" : "Welcome back" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: signup ? "Start practicing in less than a minute." : "Enter your details to continue learning." }),
						appData.loginError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "alert error",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { size: 18 }), appData.loginError]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							method: "post",
							action: signup ? appData.urls.register : appData.urls.login,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "hidden",
									name: "csrfmiddlewaretoken",
									value: csrfToken
								}),
								signup && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Full name",
									name: "name",
									placeholder: "e.g. Maya Sharma",
									autoComplete: "name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Username",
									name: "username",
									placeholder: "Choose a username",
									autoComplete: "username"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Password",
									name: "password",
									placeholder: "At least 6 characters",
									type: "password",
									autoComplete: signup ? "new-password" : "current-password"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "primary-button submit",
									type: "submit",
									children: [
										signup ? "Create account" : "Log in",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "switch-auth",
							children: [
								signup ? "Already have an account?" : "New to Testing System?",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: signup ? appData.urls.login : appData.urls.signup,
									children: signup ? "Log in" : "Create account"
								})
							]
						})
					]
				})
			})]
		})]
	});
}
function Status() {
	const success = appData.userStatus === 2;
	const improper = appData.userStatus === 3;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "center-page",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "status-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: success ? "status-icon success" : "status-icon danger",
					children: success ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: success ? "You’re all set!" : improper ? "That request didn’t work" : "Username already taken" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: success ? "Your Testing System account is ready. Log in to take your first quiz." : improper ? "Please return to sign up and try again." : "That username belongs to someone else. Try another one." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "primary-button",
					href: success ? appData.urls.login : appData.urls.signup,
					children: [
						success ? "Continue to login" : "Back to sign up",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })
					]
				})
			]
		})
	})] });
}
function Dashboard() {
	const firstName = appData.name.split(" ")[0];
	const preferredSize = Number(readPreferences().quizSize);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "dashboard container",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "welcome-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "kicker",
							children: "YOUR LEARNING SPACE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
							"Good to see you, ",
							firstName,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "👋" })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Pick a challenge and keep your streak moving." })
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mini-stats",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: appData.attempts }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tests taken" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [appData.average, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "/10" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Average score" })] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-title",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Choose your challenge" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A little practice goes a long way." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: appData.urls.history,
						children: ["View history ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "challenge-grid",
					children: [
						{
							n: 1,
							label: "Quick warm-up",
							time: "~1 min",
							icon: "01"
						},
						{
							n: 5,
							label: "Focused practice",
							time: "~5 min",
							icon: "05"
						},
						{
							n: 10,
							label: "Full challenge",
							time: "~10 min",
							icon: "10"
						},
						{
							n: 20,
							label: "Deep dive",
							time: "~20 min",
							icon: "20"
						}
					].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: c.n === preferredSize ? "challenge-card preferred" : "challenge-card",
						href: `${appData.urls.test}?n=${c.n}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `number-tile shade-${i}`,
								children: c.icon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [c.label, c.n === preferredSize && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
								className: "preference-badge",
								children: "Your default"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								c.n,
								" ",
								c.n === 1 ? "question" : "questions",
								" · ",
								c.time
							] })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "card-arrow" })
						]
					}, c.n))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "tip",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Take your time" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "There’s no timer. Read each question carefully and trust what you know." })] })]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
function TestPage() {
	const questions = appData.questions || [];
	const [answers, setAnswers] = (0, import_react.useState)({});
	const [current, setCurrent] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => window.scrollTo({
		top: 0,
		behavior: "smooth"
	}), [current]);
	if (!questions.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "center-page",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "status-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "large-icon" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "No questions yet" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Add some questions in Django admin, then come back for a quiz." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "primary-button",
					href: appData.urls.home,
					children: "Back to dashboard"
				})
			]
		})
	})] });
	const q = questions[current], picked = answers[q.qid];
	const select = (value) => setAnswers({
		...answers,
		[q.qid]: value
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "test-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "test-header",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						current + 1,
						" of ",
						questions.length
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "test-progress",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { width: `${(current + 1) / questions.length * 100}%` } })
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: appData.urls.home,
						"aria-label": "Exit test",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "test-main",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					method: "post",
					action: appData.urls.calculate,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "hidden",
							name: "csrfmiddlewaretoken",
							value: csrfToken
						}),
						Object.entries(answers).map(([id, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "hidden",
							name: `q${id}`,
							value
						}, id)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "question-meta",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["QUESTION ", String(current + 1).padStart(2, "0")] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { size: 16 }), " Take your time"] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: q.question }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "option-list",
							children: q.options.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: picked === o.value ? "option selected" : "option",
								type: "button",
								onClick: () => select(o.value),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String.fromCharCode(65 + i) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: o.label }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: picked === o.value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 18 }) })
								]
							}, o.value))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "test-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "back-button",
								disabled: current === 0,
								onClick: () => setCurrent(current - 1),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), " Previous"]
							}), current < questions.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "primary-button",
								disabled: !picked,
								onClick: () => setCurrent(current + 1),
								children: ["Next question ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "primary-button",
								type: "submit",
								disabled: !picked,
								children: ["Finish quiz ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {})]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "answered-count",
				children: [
					Object.keys(answers).length,
					" of ",
					questions.length,
					" answered"
				]
			})
		]
	});
}
function ResultPage() {
	const r = appData.result;
	if (!r) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "center-page",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "status-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "large-icon" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "No result yet" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Complete a quiz to see your score here." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "primary-button",
					href: appData.urls.home,
					children: "Take a quiz"
				})
			]
		})
	})] });
	const percent = r.attempt ? Math.round(r.right / r.attempt * 100) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "result-page container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "result-hero",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "result-trophy",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "kicker",
						children: "QUIZ COMPLETE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: percent >= 80 ? "Excellent work!" : percent >= 50 ? "Nice progress!" : "Keep practicing!" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You completed the quiz. Every attempt is a step forward." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "score-ring",
						style: { "--score": `${percent * 3.6}deg` },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: r.point }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "out of 10" })] })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "result-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Your results" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "result-grid",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Correct",
								value: r.right,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {}),
								tone: "green"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Incorrect",
								value: r.wrong,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, {}),
								tone: "red"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Answered",
								value: r.attempt,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {}),
								tone: "blue"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "result-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "primary-button",
							href: `${appData.urls.test}?n=${Math.max(r.attempt, 1)}`,
							children: ["Try another quiz ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "outline-button",
							href: appData.urls.history,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, {}), " View history"]
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
function HistoryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "history-page container",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "history-head",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "kicker",
							children: "YOUR PROGRESS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Test history" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every attempt tells a story. Here’s yours." })
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "primary-button",
						href: `${appData.urls.test}?n=5`,
						children: ["Take a new quiz ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "history-summary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Tests completed", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: appData.attempts })] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Average score", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [appData.average, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "/10" })] })] })] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "table-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "table-title",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Recent attempts" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [appData.results.length, " total"] })]
					}), appData.results.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "table-scroll",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Date" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Answered" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Correct" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Incorrect" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Score" })
						] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: appData.results.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: r.date }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: r.time })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.attempt }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "correct",
								children: r.right
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "incorrect",
								children: r.wrong
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: r.point >= 7 ? "score good" : "score",
								children: r.point
							}) })
						] }, r.id)) })] })
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "empty",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "No attempts yet" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your completed quizzes will appear here." })
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
function SettingsPage() {
	const [preferences, setPreferences] = (0, import_react.useState)(readPreferences);
	const [saved, setSaved] = (0, import_react.useState)(false);
	const updatePreference = (key, value) => {
		const next = {
			...preferences,
			[key]: value
		};
		setPreferences(next);
		savePreferences(next);
		setSaved(true);
		window.setTimeout(() => setSaved(false), 1800);
	};
	(0, import_react.useEffect)(() => {
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const sync = () => preferences.theme === "system" && applyPreferences(preferences);
		media.addEventListener("change", sync);
		return () => media.removeEventListener("change", sync);
	}, [preferences]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "settings-page container",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "settings-heading",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "kicker",
							children: "MAKE TESTING SYSTEM YOURS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Settings" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Manage your account, learning defaults, and accessibility preferences." })
					]
				}),
				appData.message && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `settings-notice ${appData.messageType}`,
					role: "status",
					children: [appData.messageType === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: appData.message })]
				}),
				saved && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "preference-saved",
					role: "status",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 16 }), " Preferences saved"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "settings-grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "settings-column",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsCard, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {}),
							title: "Profile",
							description: "The name shown around your learning space.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								method: "post",
								action: appData.urls.settings,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "hidden",
										name: "csrfmiddlewaretoken",
										value: csrfToken
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "hidden",
										name: "action",
										value: "profile"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Display name",
										name: "name",
										defaultValue: appData.name,
										maxLength: "30",
										autoComplete: "name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "field",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Username" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: appData.username,
												disabled: true
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Usernames cannot be changed." })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "primary-button settings-save",
										type: "submit",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { size: 17 }), " Save profile"]
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsCard, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, {}),
							title: "Password",
							description: "Use at least six characters and keep it private.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								method: "post",
								action: appData.urls.settings,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "hidden",
										name: "csrfmiddlewaretoken",
										value: csrfToken
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "hidden",
										name: "action",
										value: "password"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Current password",
										name: "current_password",
										type: "password",
										autoComplete: "current-password"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "two-fields",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "New password",
											name: "new_password",
											type: "password",
											minLength: "6",
											autoComplete: "new-password"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Confirm password",
											name: "confirm_password",
											type: "password",
											minLength: "6",
											autoComplete: "new-password"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "primary-button settings-save",
										type: "submit",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { size: 17 }), " Change password"]
									})
								]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "settings-column",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsCard, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, {}),
								title: "Appearance",
								description: "Choose how Testing System looks on this device.",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "choice-grid theme-choices",
									children: [
										[
											"light",
											"Light",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {})
										],
										[
											"dark",
											"Dark",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {})
										],
										[
											"system",
											"System",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, {})
										]
									].map(([value, label, icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: preferences.theme === value ? "choice active" : "choice",
										onClick: () => updatePreference("theme", value),
										children: [
											icon,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }),
											preferences.theme === value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {})
										]
									}, value))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsCard, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {}),
								title: "Quiz defaults",
								description: "Set the quiz length highlighted on your dashboard.",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "choice-grid quiz-choices",
									children: [
										1,
										5,
										10,
										20
									].map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: Number(preferences.quizSize) === size ? "choice active" : "choice",
										onClick: () => updatePreference("quizSize", size),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: size }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: size === 1 ? "question" : "questions" }),
											Number(preferences.quizSize) === size && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {})
										]
									}, size))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsCard, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accessibility, {}),
								title: "Accessibility",
								description: "Reduce interface movement and animation.",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "toggle-row",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Reduced motion" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Minimizes transitions and animated scrolling." })] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: preferences.reducedMotion,
											onChange: (e) => updatePreference("reducedMotion", e.target.checked)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { "aria-hidden": "true" })
									]
								})
							})
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
function App() {
	return {
		welcome: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Welcome, {}),
		signup: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, { mode: "signup" }),
		login: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, { mode: "login" }),
		"registration-status": /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Status, {}),
		home: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, {}),
		test: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestPage, {}),
		result: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultPage, {}),
		history: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HistoryPage, {}),
		settings: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsPage, {})
	}[appData.page] || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Welcome, {});
}
(0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {}));
//#endregion
