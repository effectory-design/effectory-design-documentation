// proto-config-ac.js — what the Action Center · Manager prototype puts in the shared
// prototype toolbar (toolbar/prototype-bar.js). This repo hosts several prototypes, so the
// config is per prototype and each prototype's pages load their own before toolbar/load.js.
// Every field's shape: toolbar/README.md.
(function () {
  var STEPPER = "action-center-manager-stepper.html";

  // Screens are tabs inside one page, so an href keeps the current file and sets ?view=.
  // That way a screen works whichever version a colleague is looking at.
  function file(u) { return (u.pathname.split("/").pop() || STEPPER); }
  function view(v) { return function (u) { return file(u) + "?view=" + v; }; }
  function isView(v, isDefault) {
    return function (u) {
      var got = u.searchParams.get("view");
      return got ? got === v : !!isDefault;
    };
  }
  // Switching version keeps the screen you were on.
  function go(target) {
    return function (u) {
      var v = u.searchParams.get("view");
      return target + (v ? "?view=" + v : "");
    };
  }

  window.PROTO_TOOLBAR = {
    prefix: "ac",
    name: "Action Center · Manager",
    live: "https://effectory-design.github.io/effectory-design-documentation/",

    versions: [
      { key: "stepper", label: "Stepper · tested winner",
        desc: "Choose a focus area, choose a response, plan it. Won both usability rounds.",
        match: STEPPER, go: go(STEPPER) },
      { key: "v1", label: "V1 · inline triage",
        desc: "Superseded. Respond on the card itself, without a dialog.",
        match: "action-center-manager.html", go: go("action-center-manager.html") },
      { key: "v4", label: "V4 · multi select wizard",
        desc: "Superseded. Select several areas, then respond to them in sequence.",
        match: "action-center-manager-v4.html", go: go("action-center-manager-v4.html") },
      { key: "v5", label: "V5 · multi select page",
        desc: "Superseded. Select several areas, then work through a full page list.",
        match: "action-center-manager-v5.html", go: go("action-center-manager-v5.html") }
    ],

    screens: [
      { key: "focus", label: "Focus view", default: true,
        desc: "The areas worth attention, each with a smart tag and a Choose button.",
        href: view("focus"), match: isView("focus", true) },
      { key: "respond", label: "Respond dialog",
        desc: "The decision moment: four responses for one focus area.",
        href: function (u) { return file(u) + "?view=focus&respond=1"; },
        match: function (u) { return u.searchParams.get("respond") === "1"; } },
      { key: "actions", label: "Actions",
        desc: "Everything decided so far, with progress or an Add action button.",
        href: view("actions"), match: isView("actions") },
      { key: "overview", label: "Overview",
        desc: "The real design system Overview, where a single question can be pinned.",
        href: view("overview"), match: isView("overview") }
    ],

    edgeCases: [
      { key: "seeded", on: false, label: "Some responses already recorded",
        desc: "Starts with three responses in place, one of them deferred, so the Actions page and the Add action button are visible without clicking through first." }
    ],

    variants: []
  };
})();
