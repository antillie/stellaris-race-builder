// Friends don't let friends write bad javascript.
"use strict";

// jquery stuff to make tool tips look nicer.
$(document).ready(function(){$(document).tooltip({show: {delay:0}});});

// Arrays of the various racial traits/ethics/governments.
var individuality = [
    "fanatic-collectivist",
    "collectivist",
    "individualist",
    "fanatic-individualist"
];

var spirituality = [
    "fanatic-spiritualist",
    "spiritualist",
    "materialist",
    "fanatic-materialist"
];

var militarisim = [
    "fanatic-pacifist",
    "pacifist",
    "militarist",
    "fanatic-militarist"
];

var xenophobia = [
    "fanatic-xenophile",
    "xenophile",
    "xenophobe",
    "fanatic-xenophobe"
];

var governments = [
    "indirect-democracy",
    "plutocratic-oligarchy",
    "despotic-empire",
    "military-dictatorship",
    "science-directorate",
    "despotic-hegemony",
    "military-junta",
    "theocratic-oligarchy",
    "direct-democracy",
    "military-republic",
    "theocratic-republic",
    "divine-mandate",
    "moral-democracy",
    "enlightened-monarchy",
    "peaceful-bureaucracy"
];

// List of trait groups for clearing them all at once.
var all_traits = [
    "adaptive",
    "agrarian",
    "charismatic",
    "communal",
    "conformists",
    "enduring",
    "extremely-adaptive",
    "industrious",
    "intelligent",
    "natural-engineers",
    "natural-physicists",
    "natural-sociologists",
    "nomadic",
    "quick-learners",
    "rapid-breeders",
    "resilient",
    "strong",
    "talented",
    "thrifty",
    "venerable",
    "very-strong",
    "decadent",
    "deviants",
    "fleeting",
    "nonadaptive",
    "repugnant",
    "sedentary",
    "slow-breeders",
    "slow-learners",
    "solitary",
    "weak"
];

// Traits sub-arrays for lateral selection checking.
var strong_traits = [
    "very-strong",
    "strong",
    "weak"
];

var learner_traits = [
    "quick-learners",
    "slow-learners"
];

var adaptive_traits = [
    "extremely-adaptive",
    "adaptive",
    "nonadaptive"
];

var charismatic_traits = [
    "charismatic",
    "repugnant"
];

var communal_traits = [
    "communal",
    "solitary"
];

var nomadic_traits = [
    "nomadic",
    "sedentary"
];

var breeder_traits = [
    "rapid-breeders",
    "slow-breeders"
];

var enduring_traits = [
    "venerable",
    "enduring",
    "fleeting"
];

var science_traits = [
    "natural-engineers",
    "natural-physicists",
    "natural-sociologists"
];

var conformist_traits = [
    "conformists",
    "deviants"
];

// Global variables for readout and function coordination purposes.
var individuality_pick = 0;
var spirituality_pick = 0;
var militarisim_pick = 0;
var xenophobia_pick = 0;

var government_pick = "none";
var ethics_summary = "Nothing selected.";
var government_summary = "Nothing selected.";
var traits_summary = "Nothing selected.";

var strong_pick = 0;
var enduring_pick = 0;
var decadent_pick = 0;
var learner_pick = 0;
var adaptive_pick = 0;
var agrarian_pick = 0;
var charismatic_pick = 0;
var communal_pick = 0;
var conformist_pick = 0;
var industrious_pick = 0;
var intelligent_pick = 0;
var science_pick = 0;
var nomadic_pick = 0;
var breeder_pick = 0;
var resilient_pick = 0;
var talented_pick = 0;
var thrifty_pick = 0;

// Max allowed point/pick values.
var ethics_points = 3;
var trait_points = 2;
var max_traits = 4;

function spend_ethics_points(x) {
    if (ethics_points >= x) {
        ethics_points = ethics_points - x;
        return true;
    }
    else {
        return false;
    };
};

function spend_traits_points(x) {
    if (trait_points >= x) {
        trait_points = trait_points - x;
        return true;
    }
    else {
        return false;
    };
};

function spend_traits_picks() {
    if (max_traits >= 1) {
        max_traits = max_traits - 1;
        return true;
    }
    else {
        return false;
    };
};

function display_ethics_points() {
    document.getElementById("ethics_points").innerHTML = "Ethics points remaining: " + ethics_points
};

function display_traits_points() {
    document.getElementById("trait_points").innerHTML = "Traits points remaining: " + trait_points;
    document.getElementById("trait_picks").innerHTML = "Traits picks remaining: " + max_traits;
};

function select_ethics(ethic) {
    var i = 0;

    if (ethic == "fanatic-collectivist") {
        if (individuality_pick == -2) {
            clear_ethics("individuality");
            toggle_governments();
            display_ethics();
            return true;
        };
        for (i = 0; i < individuality.length; i++) {
            var target = document.getElementById(individuality[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (individuality[i].includes("fanatic")) {
                    clear_ethics("individuality");
                    if (spend_ethics_points(2)) {
                        for (i = 0; i < individuality.length; i++) {
                            var target = document.getElementById(individuality[i]);
                            target.style.backgroundColor = "#040904";
                        };
                        var target = document.getElementById(ethic);
                        target.style.backgroundColor = "#30bbbb";
                        display_ethics_points();
                        individuality_pick = -2;
                        toggle_governments();
                        display_ethics();
                        return true;
                    };
                };
            };
        };
        for (i = 0; i < individuality.length; i++) {
            var target = document.getElementById(individuality[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)" && ethics_points >= 1) {
                clear_ethics("individuality");
                if (spend_ethics_points(2)) {
                    for (i = 0; i < individuality.length; i++) {
                        var target = document.getElementById(individuality[i]);
                        target.style.backgroundColor = "#040904";
                    };
                    var target = document.getElementById(ethic);
                    target.style.backgroundColor = "#30bbbb";
                    display_ethics_points();
                    individuality_pick = -2;
                    toggle_governments();
                    display_ethics();
                    return true;
                };
            };
        };
        if (spend_ethics_points(2)) {
            for (i = 0; i < individuality.length; i++) {
                var target = document.getElementById(individuality[i]);
                target.style.backgroundColor = "#040904";
            };
            var target = document.getElementById(ethic);
            target.style.backgroundColor = "#30bbbb";
            display_ethics_points();
            individuality_pick = -2;
            toggle_governments();
            display_ethics();
            return true;
        };
    };

    if (ethic == "collectivist") {
        if (individuality_pick == -1) {
            clear_ethics("individuality");
            toggle_governments();
            display_ethics();
            return true;
        };
        for (i = 0; i < individuality.length; i++) {
            var target = document.getElementById(individuality[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                clear_ethics("individuality");
                if (spend_ethics_points(1)) {
                    for (i = 0; i < individuality.length; i++) {
                        var target = document.getElementById(individuality[i]);
                        target.style.backgroundColor = "#040904";
                    };
                    var target = document.getElementById(ethic);
                    target.style.backgroundColor = "#30bbbb";
                    display_ethics_points();
                    individuality_pick = -1;
                    toggle_governments();
                    display_ethics();
                    return true;
                };
            };
        };
        if (spend_ethics_points(1)) {
            clear_ethics("individuality");
            for (i = 0; i < individuality.length; i++) {
                var target = document.getElementById(individuality[i]);
                target.style.backgroundColor = "#040904";
            };
            var target = document.getElementById(ethic);
            target.style.backgroundColor = "#30bbbb";
        display_ethics_points();
        individuality_pick = -1;
        toggle_governments();
        display_ethics();
        return true;
        };
    };

    if (ethic == "individualist") {
        if (individuality_pick == 1) {
            clear_ethics("individuality");
            toggle_governments();
            display_ethics();
            return true;
        };
        for (i = 0; i < individuality.length; i++) {
            var target = document.getElementById(individuality[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                clear_ethics("individuality");
                if (spend_ethics_points(1)) {
                    for (i = 0; i < individuality.length; i++) {
                        var target = document.getElementById(individuality[i]);
                        target.style.backgroundColor = "#040904";
                    };
                    var target = document.getElementById(ethic);
                    target.style.backgroundColor = "#30bbbb";
                    display_ethics_points();
                    individuality_pick = 1;
                    toggle_governments();
                    display_ethics();
                    return true;
                };
            };
        };
        if (spend_ethics_points(1)) {
            clear_ethics("individuality");
            for (i = 0; i < individuality.length; i++) {
                var target = document.getElementById(individuality[i]);
                target.style.backgroundColor = "#040904";
            };
            var target = document.getElementById(ethic);
            target.style.backgroundColor = "#30bbbb";
        display_ethics_points();
        individuality_pick = 1;
        toggle_governments();
        display_ethics();
        return true;
        };
    };

    if (ethic == "fanatic-individualist") {
        if (individuality_pick == 2) {
            clear_ethics("individuality");
            toggle_governments();
            display_ethics();
            return true;
        };
        for (i = 0; i < individuality.length; i++) {
            var target = document.getElementById(individuality[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (individuality[i].includes("fanatic")) {
                    clear_ethics("individuality");
                    if (spend_ethics_points(2)) {
                        for (i = 0; i < individuality.length; i++) {
                            var target = document.getElementById(individuality[i]);
                            target.style.backgroundColor = "#040904";
                        };
                        var target = document.getElementById(ethic);
                        target.style.backgroundColor = "#30bbbb";
                        display_ethics_points();
                        individuality_pick = 2;
                        toggle_governments();
                        display_ethics();
                        return true;
                    };
                };
            };
        };
        for (i = 0; i < individuality.length; i++) {
            var target = document.getElementById(individuality[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)" && ethics_points >= 1) {
                clear_ethics("individuality");
                if (spend_ethics_points(2)) {
                    for (i = 0; i < individuality.length; i++) {
                        var target = document.getElementById(individuality[i]);
                        target.style.backgroundColor = "#040904";
                    };
                    var target = document.getElementById(ethic);
                    target.style.backgroundColor = "#30bbbb";
                    display_ethics_points();
                    individuality_pick = 2;
                    toggle_governments();
                    display_ethics();
                    return true;
                };
            };
        };
        if (spend_ethics_points(2)) {
            for (i = 0; i < individuality.length; i++) {
                var target = document.getElementById(individuality[i]);
                target.style.backgroundColor = "#040904";
            };
            var target = document.getElementById(ethic);
            target.style.backgroundColor = "#30bbbb";
            display_ethics_points();
            individuality_pick = 2;
            toggle_governments();
            display_ethics();
            return true;
        };
    };

    if (ethic == "fanatic-spiritualist") {
        if (spirituality_pick == -2) {
            clear_ethics("spirituality");
            toggle_governments();
            display_ethics();
            return true;
        };
        for (i = 0; i < spirituality.length; i++) {
            var target = document.getElementById(spirituality[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (spirituality[i].includes("fanatic")) {
                    clear_ethics("spirituality");
                    if (spend_ethics_points(2)) {
                        for (i = 0; i < spirituality.length; i++) {
                            var target = document.getElementById(spirituality[i]);
                            target.style.backgroundColor = "#040904";
                        };
                        var target = document.getElementById(ethic);
                        target.style.backgroundColor = "#30bbbb";
                        display_ethics_points();
                        spirituality_pick = -2;
                        toggle_governments();
                        display_ethics();
                        return true;
                    };
                };
            };
        };
        for (i = 0; i < spirituality.length; i++) {
            var target = document.getElementById(spirituality[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)" && ethics_points >= 1) {
                clear_ethics("spirituality");
                if (spend_ethics_points(2)) {
                    for (i = 0; i < spirituality.length; i++) {
                        var target = document.getElementById(spirituality[i]);
                        target.style.backgroundColor = "#040904";
                    };
                    var target = document.getElementById(ethic);
                    target.style.backgroundColor = "#30bbbb";
                    display_ethics_points();
                    spirituality_pick = -2;
                    toggle_governments();
                    display_ethics();
                    return true;
                };
            };
        };
        if (spend_ethics_points(2)) {
            for (i = 0; i < spirituality.length; i++) {
                var target = document.getElementById(spirituality[i]);
                target.style.backgroundColor = "#040904";
            };
            var target = document.getElementById(ethic);
            target.style.backgroundColor = "#30bbbb";
            display_ethics_points();
            spirituality_pick = -2;
            toggle_governments();
            display_ethics();
            return true;
        };
    };

    if (ethic == "spiritualist") {
        if (spirituality_pick == -1) {
            clear_ethics("spirituality");
            toggle_governments();
            display_ethics();
            return true;
        };
        for (i = 0; i < spirituality.length; i++) {
            var target = document.getElementById(spirituality[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                clear_ethics("spirituality");
                if (spend_ethics_points(1)) {
                    for (i = 0; i < spirituality.length; i++) {
                        var target = document.getElementById(spirituality[i]);
                        target.style.backgroundColor = "#040904";
                    };
                    var target = document.getElementById(ethic);
                    target.style.backgroundColor = "#30bbbb";
                    display_ethics_points();
                    spirituality_pick = -1;
                    toggle_governments();
                    display_ethics();
                    return true;
                };
            };
        };
        if (spend_ethics_points(1)) {
            clear_ethics("spirituality");
            for (i = 0; i < spirituality.length; i++) {
                var target = document.getElementById(spirituality[i]);
                target.style.backgroundColor = "#040904";
            };
            var target = document.getElementById(ethic);
            target.style.backgroundColor = "#30bbbb";
        display_ethics_points();
        spirituality_pick = -1;
        toggle_governments();
        display_ethics();
        return true;
        };
    };

    if (ethic == "materialist") {
        if (spirituality_pick == 1) {
            clear_ethics("spirituality");
            toggle_governments();
            display_ethics();
            return true;
        };
        for (i = 0; i < spirituality.length; i++) {
            var target = document.getElementById(spirituality[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                clear_ethics("spirituality");
                if (spend_ethics_points(1)) {
                    for (i = 0; i < spirituality.length; i++) {
                        var target = document.getElementById(spirituality[i]);
                        target.style.backgroundColor = "#040904";
                    };
                    var target = document.getElementById(ethic);
                    target.style.backgroundColor = "#30bbbb";
                    display_ethics_points();
                    spirituality_pick = 1;
                    toggle_governments();
                    display_ethics();
                    return true;
                };
            };
        };
        if (spend_ethics_points(1)) {
            clear_ethics("spirituality");
            for (i = 0; i < spirituality.length; i++) {
                var target = document.getElementById(spirituality[i]);
                target.style.backgroundColor = "#040904";
            };
            var target = document.getElementById(ethic);
            target.style.backgroundColor = "#30bbbb";
        display_ethics_points();
        spirituality_pick = 1;
        toggle_governments();
        display_ethics();
        return true;
        };
    };

    if (ethic == "fanatic-materialist") {
        if (spirituality_pick == 2) {
            clear_ethics("spirituality");
            toggle_governments();
            display_ethics();
            return true;
        };
        for (i = 0; i < spirituality.length; i++) {
            var target = document.getElementById(spirituality[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (spirituality[i].includes("fanatic")) {
                    clear_ethics("spirituality");
                    if (spend_ethics_points(2)) {
                        for (i = 0; i < spirituality.length; i++) {
                            var target = document.getElementById(spirituality[i]);
                            target.style.backgroundColor = "#040904";
                        };
                        var target = document.getElementById(ethic);
                        target.style.backgroundColor = "#30bbbb";
                        display_ethics_points();
                        spirituality_pick = 2;
                        toggle_governments();
                        display_ethics();
                        return true;
                    };
                };
            };
        };
        for (i = 0; i < spirituality.length; i++) {
            var target = document.getElementById(spirituality[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)" && ethics_points >= 1) {
                clear_ethics("spirituality");
                if (spend_ethics_points(2)) {
                    for (i = 0; i < spirituality.length; i++) {
                        var target = document.getElementById(spirituality[i]);
                        target.style.backgroundColor = "#040904";
                    };
                    var target = document.getElementById(ethic);
                    target.style.backgroundColor = "#30bbbb";
                    display_ethics_points();
                    spirituality_pick = 2;
                    toggle_governments();
                    display_ethics();
                    return true;
                };
            };
        };
        if (spend_ethics_points(2)) {
            for (i = 0; i < spirituality.length; i++) {
                var target = document.getElementById(spirituality[i]);
                target.style.backgroundColor = "#040904";
            };
            var target = document.getElementById(ethic);
            target.style.backgroundColor = "#30bbbb";
            display_ethics_points();
            spirituality_pick = 2;
            toggle_governments();
            display_ethics();
            return true;
        };
    };

    if (ethic == "fanatic-pacifist") {
        if (militarisim_pick == -2) {
            clear_ethics("militarisim");
            toggle_governments();
            display_ethics();
            return true;
        };
        for (i = 0; i < militarisim.length; i++) {
            var target = document.getElementById(militarisim[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (militarisim[i].includes("fanatic")) {
                    clear_ethics("militarisim");
                    if (spend_ethics_points(2)) {
                        for (i = 0; i < militarisim.length; i++) {
                            var target = document.getElementById(militarisim[i]);
                            target.style.backgroundColor = "#040904";
                        };
                        var target = document.getElementById(ethic);
                        target.style.backgroundColor = "#30bbbb";
                        display_ethics_points();
                        militarisim_pick = -2;
                        toggle_governments();
                        display_ethics();
                        return true;
                    };
                };
            };
        };
        for (i = 0; i < militarisim.length; i++) {
            var target = document.getElementById(militarisim[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)" && ethics_points >= 1) {
                clear_ethics("militarisim");
                if (spend_ethics_points(2)) {
                    for (i = 0; i < militarisim.length; i++) {
                        var target = document.getElementById(militarisim[i]);
                        target.style.backgroundColor = "#040904";
                    };
                    var target = document.getElementById(ethic);
                    target.style.backgroundColor = "#30bbbb";
                    display_ethics_points();
                    militarisim_pick = -2;
                    toggle_governments();
                    display_ethics();
                    return true;
                };
            };
        };
        if (spend_ethics_points(2)) {
            for (i = 0; i < militarisim.length; i++) {
                var target = document.getElementById(militarisim[i]);
                target.style.backgroundColor = "#040904";
            };
            var target = document.getElementById(ethic);
            target.style.backgroundColor = "#30bbbb";
            display_ethics_points();
            militarisim_pick = -2;
            toggle_governments();
            display_ethics();
            return true;
        };
    };

    if (ethic == "pacifist") {
        if (militarisim_pick == -1) {
            clear_ethics("militarisim");
            toggle_governments();
            display_ethics();
            return true;
        };
        for (i = 0; i < militarisim.length; i++) {
            var target = document.getElementById(militarisim[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                clear_ethics("militarisim");
                if (spend_ethics_points(1)) {
                    for (i = 0; i < militarisim.length; i++) {
                        var target = document.getElementById(militarisim[i]);
                        target.style.backgroundColor = "#040904";
                    };
                    var target = document.getElementById(ethic);
                    target.style.backgroundColor = "#30bbbb";
                    display_ethics_points();
                    militarisim_pick = -1;
                    toggle_governments();
                    display_ethics();
                    return true;
                };
            };
        };
        if (spend_ethics_points(1)) {
            clear_ethics("militarisim");
            for (i = 0; i < militarisim.length; i++) {
                var target = document.getElementById(militarisim[i]);
                target.style.backgroundColor = "#040904";
            };
            var target = document.getElementById(ethic);
            target.style.backgroundColor = "#30bbbb";
        display_ethics_points();
        militarisim_pick = -1;
        toggle_governments();
        display_ethics();
        return true;
        };
    };

    if (ethic == "militarist") {
        if (militarisim_pick == 1) {
            clear_ethics("militarisim");
            toggle_governments();
            display_ethics();
            return true;
        };
        for (i = 0; i < militarisim.length; i++) {
            var target = document.getElementById(militarisim[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                clear_ethics("militarisim");
                if (spend_ethics_points(1)) {
                    for (i = 0; i < militarisim.length; i++) {
                        var target = document.getElementById(militarisim[i]);
                        target.style.backgroundColor = "#040904";
                    };
                    var target = document.getElementById(ethic);
                    target.style.backgroundColor = "#30bbbb";
                    display_ethics_points();
                    militarisim_pick = 1;
                    toggle_governments();
                    display_ethics();
                    return true;
                };
            };
        };
        if (spend_ethics_points(1)) {
            clear_ethics("militarisim");
            for (i = 0; i < militarisim.length; i++) {
                var target = document.getElementById(militarisim[i]);
                target.style.backgroundColor = "#040904";
            };
            var target = document.getElementById(ethic);
            target.style.backgroundColor = "#30bbbb";
        display_ethics_points();
        militarisim_pick = 1;
        toggle_governments();
        display_ethics();
        return true;
        };
    };

    if (ethic == "fanatic-militarist") {
        if (militarisim_pick == 2) {
            clear_ethics("militarisim");
            toggle_governments();
            display_ethics();
            return true;
        };
        for (i = 0; i < militarisim.length; i++) {
            var target = document.getElementById(militarisim[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (militarisim[i].includes("fanatic")) {
                    clear_ethics("militarisim");
                    if (spend_ethics_points(2)) {
                        for (i = 0; i < militarisim.length; i++) {
                            var target = document.getElementById(militarisim[i]);
                            target.style.backgroundColor = "#040904";
                        };
                        var target = document.getElementById(ethic);
                        target.style.backgroundColor = "#30bbbb";
                        display_ethics_points();
                        militarisim_pick = 2;
                        toggle_governments();
                        display_ethics();
                        return true;
                    };
                };
            };
        };
        for (i = 0; i < militarisim.length; i++) {
            var target = document.getElementById(militarisim[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)" && ethics_points >= 1) {
                clear_ethics("militarisim");
                if (spend_ethics_points(2)) {
                    for (i = 0; i < militarisim.length; i++) {
                        var target = document.getElementById(militarisim[i]);
                        target.style.backgroundColor = "#040904";
                    };
                    var target = document.getElementById(ethic);
                    target.style.backgroundColor = "#30bbbb";
                    display_ethics_points();
                    militarisim_pick = 2;
                    toggle_governments();
                    display_ethics();
                    return true;
                };
            };
        };
        if (spend_ethics_points(2)) {
            for (i = 0; i < militarisim.length; i++) {
                var target = document.getElementById(militarisim[i]);
                target.style.backgroundColor = "#040904";
            };
            var target = document.getElementById(ethic);
            target.style.backgroundColor = "#30bbbb";
            display_ethics_points();
            militarisim_pick = 2;
            toggle_governments();
            display_ethics();
            return true;
        };
    };

    if (ethic == "fanatic-xenophile") {
        if (xenophobia_pick == -2) {
            clear_ethics("xenophobia");
            toggle_governments();
            display_ethics();
            return true;
        };
        for (i = 0; i < xenophobia.length; i++) {
            var target = document.getElementById(xenophobia[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (xenophobia[i].includes("fanatic")) {
                    clear_ethics("xenophobia");
                    if (spend_ethics_points(2)) {
                        for (i = 0; i < xenophobia.length; i++) {
                            var target = document.getElementById(xenophobia[i]);
                            target.style.backgroundColor = "#040904";
                        };
                        var target = document.getElementById(ethic);
                        target.style.backgroundColor = "#30bbbb";
                        display_ethics_points();
                        xenophobia_pick = -2;
                        display_ethics();
                        return true;
                    };
                };
            };
        };
        for (i = 0; i < xenophobia.length; i++) {
            var target = document.getElementById(xenophobia[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)" && ethics_points >= 1) {
                clear_ethics("xenophobia");
                if (spend_ethics_points(2)) {
                    for (i = 0; i < xenophobia.length; i++) {
                        var target = document.getElementById(xenophobia[i]);
                        target.style.backgroundColor = "#040904";
                    };
                    var target = document.getElementById(ethic);
                    target.style.backgroundColor = "#30bbbb";
                    display_ethics_points();
                    xenophobia_pick = -2;
                    display_ethics();
                    return true;
                };
            };
        };
        if (spend_ethics_points(2)) {
            for (i = 0; i < xenophobia.length; i++) {
                var target = document.getElementById(xenophobia[i]);
                target.style.backgroundColor = "#040904";
            };
            var target = document.getElementById(ethic);
            target.style.backgroundColor = "#30bbbb";
            display_ethics_points();
            xenophobia_pick = -2;
            display_ethics();
            return true;
        };
    };

    if (ethic == "xenophile") {
        if (xenophobia_pick == -1) {
            clear_ethics("xenophobia");
            toggle_governments();
            display_ethics();
            return true;
        };
        for (i = 0; i < xenophobia.length; i++) {
            var target = document.getElementById(xenophobia[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                clear_ethics("xenophobia");
                if (spend_ethics_points(1)) {
                    for (i = 0; i < xenophobia.length; i++) {
                        var target = document.getElementById(xenophobia[i]);
                        target.style.backgroundColor = "#040904";
                    };
                    var target = document.getElementById(ethic);
                    target.style.backgroundColor = "#30bbbb";
                    display_ethics_points();
                    xenophobia_pick = -1;
                    display_ethics();
                    return true;
                };
            };
        };
        if (spend_ethics_points(1)) {
            clear_ethics("xenophobia");
            for (i = 0; i < xenophobia.length; i++) {
                var target = document.getElementById(xenophobia[i]);
                target.style.backgroundColor = "#040904";
            };
            var target = document.getElementById(ethic);
            target.style.backgroundColor = "#30bbbb";
        display_ethics_points();
        xenophobia_pick = -1;
        display_ethics();
        return true;
        };
    };

    if (ethic == "xenophobe") {
        if (xenophobia_pick == 1) {
            clear_ethics("xenophobia");
            toggle_governments();
            display_ethics();
            return true;
        };
        for (i = 0; i < xenophobia.length; i++) {
            var target = document.getElementById(xenophobia[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                clear_ethics("xenophobia");
                if (spend_ethics_points(1)) {
                    for (i = 0; i < xenophobia.length; i++) {
                        var target = document.getElementById(xenophobia[i]);
                        target.style.backgroundColor = "#040904";
                    };
                    var target = document.getElementById(ethic);
                    target.style.backgroundColor = "#30bbbb";
                    display_ethics_points();
                    xenophobia_pick = 1;
                    display_ethics();
                    return true;
                };
            };
        };
        if (spend_ethics_points(1)) {
            clear_ethics("xenophobia");
            for (i = 0; i < xenophobia.length; i++) {
                var target = document.getElementById(xenophobia[i]);
                target.style.backgroundColor = "#040904";
            };
            var target = document.getElementById(ethic);
            target.style.backgroundColor = "#30bbbb";
        display_ethics_points();
        xenophobia_pick = 1;
        display_ethics();
        return true;
        };
    };

    if (ethic == "fanatic-xenophobe") {
        if (xenophobia_pick == 2) {
            clear_ethics("xenophobia");
            toggle_governments();
            display_ethics();
            return true;
        };
        for (i = 0; i < xenophobia.length; i++) {
            var target = document.getElementById(xenophobia[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (xenophobia[i].includes("fanatic")) {
                    clear_ethics("xenophobia");
                    if (spend_ethics_points(2)) {
                        for (i = 0; i < xenophobia.length; i++) {
                            var target = document.getElementById(xenophobia[i]);
                            target.style.backgroundColor = "#040904";
                        };
                        var target = document.getElementById(ethic);
                        target.style.backgroundColor = "#30bbbb";
                        display_ethics_points();
                        xenophobia_pick = 2;
                        display_ethics();
                        return true;
                    };
                };
            };
        };
        for (i = 0; i < xenophobia.length; i++) {
            var target = document.getElementById(xenophobia[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)" && ethics_points >= 1) {
                clear_ethics("xenophobia");
                if (spend_ethics_points(2)) {
                    for (i = 0; i < xenophobia.length; i++) {
                        var target = document.getElementById(xenophobia[i]);
                        target.style.backgroundColor = "#040904";
                    };
                    var target = document.getElementById(ethic);
                    target.style.backgroundColor = "#30bbbb";
                    display_ethics_points();
                    xenophobia_pick = 2;
                    display_ethics();
                    return true;
                };
            };
        };
        if (spend_ethics_points(2)) {
            for (i = 0; i < xenophobia.length; i++) {
                var target = document.getElementById(xenophobia[i]);
                target.style.backgroundColor = "#040904";
            };
            var target = document.getElementById(ethic);
            target.style.backgroundColor = "#30bbbb";
            display_ethics_points();
            xenophobia_pick = 2;
            display_ethics();
            return true;
        };
    };
};

function refund_ethics_points(ethic) {
    if (ethic.includes("fanatic")) {
        ethics_points = ethics_points + 2;
    }
    else {
        ethics_points = ethics_points + 1;
    };
    document.getElementById("ethics_points").innerHTML = "Ethics points remaining: " + ethics_points

};

function clear_ethics(ethic, flag) {
    var i = 0;
    if (ethic == "individuality") {
        individuality_pick = 0;
        for (i = 0; i < individuality.length; i++) {
            var target = document.getElementById(individuality[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                refund_ethics_points(individuality[i]);
            };
            target.style.backgroundColor = "#040904";
        };
    };
    if (ethic == "spirituality") {
        spirituality_pick = 0;
        for (i = 0; i < spirituality.length; i++) {
            var target = document.getElementById(spirituality[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                refund_ethics_points(individuality[i]);
            };
            target.style.backgroundColor = "#040904";
        };
    };
    if (ethic == "militarisim") {
        militarisim_pick = 0;
        for (i = 0; i < militarisim.length; i++) {
            var target = document.getElementById(militarisim[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                refund_ethics_points(individuality[i]);
            };
            target.style.backgroundColor = "#040904";
        };
    };
    if (ethic == "xenophobia") {
        xenophobia_pick = 0;
        for (i = 0; i < xenophobia.length; i++) {
            var target = document.getElementById(xenophobia[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                refund_ethics_points(individuality[i]);
            };
            target.style.backgroundColor = "#040904";
        };
    };
    if (flag == 1) {
        toggle_governments();
        display_ethics();
    };
};

function clear_all_ethics() {
    clear_ethics("individuality", 0);
    clear_ethics("spirituality", 0);
    clear_ethics("militarisim", 0);
    clear_ethics("xenophobia", 0);
    toggle_governments();
    display_ethics();
};

function toggle_governments() {
    if (militarisim_pick > 0) {
        document.getElementById("military-dictatorship").style.opacity = "1.0";
        document.getElementById("military-junta").style.opacity = "1.0";
        document.getElementById("military-republic").style.opacity = "1.0";
        document.getElementById("enlightened-monarchy").style.opacity = "0.4";
        document.getElementById("enlightened-monarchy").style.backgroundColor = "#040904";
        document.getElementById("peaceful-bureaucracy").style.opacity = "0.4";
        document.getElementById("peaceful-bureaucracy").style.backgroundColor = "#040904";
        document.getElementById("moral-democracy").style.opacity = "0.4";
        document.getElementById("moral-democracy").style.backgroundColor = "#040904";
    };
    if (militarisim_pick == 0) {
        document.getElementById("military-dictatorship").style.opacity = "0.4";
        document.getElementById("military-dictatorship").style.backgroundColor = "#040904";
        document.getElementById("military-junta").style.opacity = "0.4";
        document.getElementById("military-junta").style.backgroundColor = "#040904";
        document.getElementById("military-republic").style.opacity = "0.4";
        document.getElementById("military-republic").style.backgroundColor = "#040904";
        document.getElementById("enlightened-monarchy").style.opacity = "0.4";
        document.getElementById("enlightened-monarchy").style.backgroundColor = "#040904";
        document.getElementById("peaceful-bureaucracy").style.opacity = "0.4";
        document.getElementById("peaceful-bureaucracy").style.backgroundColor = "#040904";
        document.getElementById("moral-democracy").style.opacity = "0.4";
        document.getElementById("moral-democracy").style.backgroundColor = "#040904";
    };
    if (militarisim_pick < 0) {
        document.getElementById("enlightened-monarchy").style.opacity = "1.0";
        document.getElementById("peaceful-bureaucracy").style.opacity = "1.0";
        document.getElementById("moral-democracy").style.opacity = "1.0";
        document.getElementById("military-dictatorship").style.opacity = "0.4";
        document.getElementById("military-dictatorship").style.backgroundColor = "#040904";
        document.getElementById("military-junta").style.opacity = "0.4";
        document.getElementById("military-junta").style.backgroundColor = "#040904";
        document.getElementById("military-republic").style.opacity = "0.4";
        document.getElementById("military-republic").style.backgroundColor = "#040904";
    };
    if (spirituality_pick > 0) {
        document.getElementById("despotic-hegemony").style.opacity = "1.0";
        document.getElementById("science-directorate").style.opacity = "1.0";
        document.getElementById("direct-democracy").style.opacity = "1.0";
        document.getElementById("divine-mandate").style.opacity = "0.4";
        document.getElementById("divine-mandate").style.backgroundColor = "#040904";
        document.getElementById("theocratic-oligarchy").style.opacity = "0.4";
        document.getElementById("theocratic-oligarchy").style.backgroundColor = "#040904";
        document.getElementById("theocratic-republic").style.opacity = "0.4";
        document.getElementById("theocratic-republic").style.backgroundColor = "#040904";
    };
    if (spirituality_pick == 0) {
        document.getElementById("divine-mandate").style.opacity = "0.4";
        document.getElementById("divine-mandate").style.backgroundColor = "#040904";
        document.getElementById("theocratic-oligarchy").style.opacity = "0.4";
        document.getElementById("theocratic-oligarchy").style.backgroundColor = "#040904";
        document.getElementById("theocratic-republic").style.opacity = "0.4";
        document.getElementById("theocratic-republic").style.backgroundColor = "#040904";
        document.getElementById("despotic-hegemony").style.opacity = "0.4";
        document.getElementById("despotic-hegemony").style.backgroundColor = "#040904";
        document.getElementById("science-directorate").style.opacity = "0.4";
        document.getElementById("science-directorate").style.backgroundColor = "#040904";
        document.getElementById("direct-democracy").style.opacity = "0.4";
        document.getElementById("direct-democracy").style.backgroundColor = "#040904";
    };
    if (spirituality_pick < 0) {
        document.getElementById("divine-mandate").style.opacity = "1.0";
        document.getElementById("theocratic-oligarchy").style.opacity = "1.0";
        document.getElementById("theocratic-republic").style.opacity = "1.0";
        document.getElementById("despotic-hegemony").style.opacity = "0.4";
        document.getElementById("despotic-hegemony").style.backgroundColor = "#040904";
        document.getElementById("science-directorate").style.opacity = "0.4";
        document.getElementById("science-directorate").style.backgroundColor = "#040904";
        document.getElementById("direct-democracy").style.opacity = "0.4";
        document.getElementById("direct-democracy").style.backgroundColor = "#040904";
    };
    if (individuality_pick < 0) {
        document.getElementById("military-republic").style.opacity = "0.4";
        document.getElementById("military-republic").style.backgroundColor = "#040904";
        document.getElementById("theocratic-republic").style.opacity = "0.4";
        document.getElementById("theocratic-republic").style.backgroundColor = "#040904";
        document.getElementById("direct-democracy").style.opacity = "0.4";
        document.getElementById("direct-democracy").style.backgroundColor = "#040904";
        document.getElementById("moral-democracy").style.opacity = "0.4";
        document.getElementById("moral-democracy").style.backgroundColor = "#040904";
        document.getElementById("indirect-democracy").style.opacity = "0.4";
        document.getElementById("indirect-democracy").style.backgroundColor = "#040904";
        document.getElementById("despotic-empire").style.opacity = "1.0";
        document.getElementById("plutocratic-oligarchy").style.opacity = "1.0";
    };
    if (individuality_pick < -1) {
        document.getElementById("military-junta").style.opacity = "0.4";
        document.getElementById("military-junta").style.backgroundColor = "#040904";
        document.getElementById("theocratic-oligarchy").style.opacity = "0.4";
        document.getElementById("theocratic-oligarchy").style.backgroundColor = "#040904";
        document.getElementById("science-directorate").style.opacity = "0.4";
        document.getElementById("science-directorate").style.backgroundColor = "#040904";
        document.getElementById("peaceful-bureaucracy").style.opacity = "0.4";
        document.getElementById("peaceful-bureaucracy").style.backgroundColor = "#040904";
        document.getElementById("plutocratic-oligarchy").style.opacity = "0.4";
        document.getElementById("plutocratic-oligarchy").style.backgroundColor = "#040904";
    };
    if (individuality_pick > 0) {
        document.getElementById("military-dictatorship").style.opacity = "0.4";
        document.getElementById("military-dictatorship").style.backgroundColor = "#040904";
        document.getElementById("divine-mandate").style.opacity = "0.4";
        document.getElementById("divine-mandate").style.backgroundColor = "#040904";
        document.getElementById("despotic-hegemony").style.opacity = "0.4";
        document.getElementById("despotic-hegemony").style.backgroundColor = "#040904";
        document.getElementById("enlightened-monarchy").style.opacity = "0.4";
        document.getElementById("enlightened-monarchy").style.backgroundColor = "#040904";
        document.getElementById("despotic-empire").style.opacity = "0.4";
        document.getElementById("despotic-empire").style.backgroundColor = "#040904";
        document.getElementById("indirect-democracy").style.opacity = "1.0";
        document.getElementById("plutocratic-oligarchy").style.opacity = "1.0";
    };
    if (individuality_pick > 1) {
        document.getElementById("military-junta").style.opacity = "0.4";
        document.getElementById("military-junta").style.backgroundColor = "#040904";
        document.getElementById("theocratic-oligarchy").style.opacity = "0.4";
        document.getElementById("theocratic-oligarchy").style.backgroundColor = "#040904";
        document.getElementById("science-directorate").style.opacity = "0.4";
        document.getElementById("science-directorate").style.backgroundColor = "#040904";
        document.getElementById("peaceful-bureaucracy").style.opacity = "0.4";
        document.getElementById("peaceful-bureaucracy").style.backgroundColor = "#040904";
        document.getElementById("plutocratic-oligarchy").style.opacity = "0.4";
        document.getElementById("plutocratic-oligarchy").style.backgroundColor = "#040904";
    };
    if (individuality_pick == 0) {
        document.getElementById("indirect-democracy").style.opacity = "1.0";
        document.getElementById("plutocratic-oligarchy").style.opacity = "1.0";
        document.getElementById("despotic-empire").style.opacity = "1.0";
    };
    var i = 0;
    for (i = 0; i < governments.length; i++) {
        var target = document.getElementById(governments[i]);
        if (target.style.backgroundColor == "rgb(48, 187, 187)") {
            government_pick = governments[i];
            government_bonuses();
            return;
        }
        else {
            government_pick = "none";
            government_bonuses();
        };
    };
};

function select_government(government) {
    var i = 0;
    var target = document.getElementById(government);

    if (target.style.opacity == 1) {
        for (i = 0; i < governments.length; i++) {
            var target = document.getElementById(governments[i]);
            target.style.backgroundColor = "#040904";
        };
        var target = document.getElementById(government);
        target.style.backgroundColor = "#30bbbb";
        government_pick = government;
        government_bonuses();
    };
};

function government_bonuses() {
    if (government_pick == "none") {
        document.getElementById("adv_gov_image").innerHTML = "<img src='images/grey-circle.png' alt='None'>";
        document.getElementById("adv_gov").innerHTML = "Nothing selected.";
        document.getElementById("government_summary").innerHTML = "Nothing selected.";
        government_summary = "Nothing selected.";
    }
    else {
        document.getElementById("adv_gov_image").innerHTML = "<img src='images/governments/advanced/" + government_pick + "-adv.png" + "' alt='Advanced Government'>";

        if(government_pick == "military-dictatorship") {
            document.getElementById("adv_gov").innerHTML = "Martial Empire<br><br><span class='green_txt'>+20%<\/span> Naval Capacity<br><span class='green_txt'>-20%<\/span> Ship Build Cost<br><span class='green_txt'>+50%<\/span> Rivalry Influence Gain";
            government_summary = "Military Dictatorship<br><br><span class='green_txt'>+10%<\/span> Naval Capacity<br><span class='green_txt'>-10%<\/span> Ship Build Cost<br><span class='green_txt'>+25%<\/span> Rivalry Influence Gain<br>";
        };
        if(government_pick == "military-junta") {
            document.getElementById("adv_gov").innerHTML = "Ordered Stratocracy<br><br><span class='green_txt'>-10%<\/span> Ship Upkeep<br><span class='green_txt'>+2<\/span> Admiral Starting Levels<br><span class='green_txt'>-50%<\/span> Ship Upgrade Cost";
            government_summary = "Military Junta<br><br><span class='green_txt'>-5%<\/span> Ship Upkeep<br><span class='green_txt'>+1<\/span> Admiral Starting Levels<br><span class='green_txt'>-25%<\/span> Ship Upgrade Cost<br>";
        };
        if(government_pick == "military-republic") {
            document.getElementById("adv_gov").innerHTML = "Martial Demarchy<br><br><span class='green_txt'>-40%<\/span> Army Upkeep<br><span class='green_txt'>+20%<\/span> Army Damage<br><span class='green_txt'>-30%<\/span> Military Station Build Cost<br><span class='green_txt'>+20%<\/span> Military Station Damage";
            government_summary = "Military Republic<br><br><span class='green_txt'>-20%<\/span> Army Upkeep<br><span class='green_txt'>+10%<\/span> Army Damage<br><span class='green_txt'>-15%<\/span> Military Station Build Cost<br><span class='green_txt'>+10%<\/span> Military Station Damage<br>";
        };
        if(government_pick == "divine-mandate") {
            document.getElementById("adv_gov").innerHTML = "Transcendent Empire<br><br><span class='green_txt'>-30%<\/span> Edict Influence Cost<br><span class='green_txt'>+30%<\/span> Edict Duration<br><span class='green_txt'>-20%<\/span> Ethics Divergence";
            government_summary = "Divine Mandate<br><br><span class='green_txt'>-15%<\/span> Edict Influence Cost<br><span class='green_txt'>+15%<\/span> Edict Duration<br><span class='green_txt'>-10%<\/span> Ethics Divergence<br>Unlocks building: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Buildings#Ethos_.26_Government' target='_blank'>Grand Mausoleum<\/a><\/span><br>";
        };
        if(government_pick == "theocratic-oligarchy") {
            document.getElementById("adv_gov").innerHTML = "Transcendent Oligarchy<br><br><span class='green_txt'>+40<\/span> Years Leader Lifespan<br><span class='green_txt'>-30%<\/span> Resettlement Cost";
            government_summary = "Theocratic Oligarchy<br><br><span class='green_txt'>+20<\/span> Years Leader Lifespan<br><span class='green_txt'>-15%<\/span> Resettlement Cost<br>";
        };
        if(government_pick == "theocratic-republic") {
            document.getElementById("adv_gov").innerHTML = "Transcendent Republic<br><br><span class='green_txt'>+10%<\/span> Happiness<br><span class='green_txt'>-20%<\/span> Food Requirement";
            government_summary = "Theocratic Republic<br><br><span class='green_txt'>+5%<\/span> Happiness<br><span class='green_txt'>-10%<\/span> Food Requirement<br>";
        };
        if(government_pick == "despotic-hegemony") {
            document.getElementById("adv_gov").innerHTML = "Neural Network Administration<br><br><span class='green_txt'>+10%<\/span> Research Speed<br><span class='green_txt'>-50%<\/span> Research Station Cost";
            government_summary = "Despotic Hegemony<br><br><span class='green_txt'>+5%<\/span> Research Speed<br><span class='green_txt'>-25%<\/span> Research Station Cost<br>";
        };
        if(government_pick == "science-directorate") {
            document.getElementById("adv_gov").innerHTML = "Illuminated Technocracy<br><br><span class='green_txt'>+2<\/span> Research Alternatives<br><span class='green_txt'>+2<\/span> Empire Leader Capacity";
            government_summary = "Science Directorate<br><br><span class='green_txt'>+1<\/span> Research Alternatives<br><span class='green_txt'>+1<\/span> Empire Leader Capacity<br>";
        };
        if(government_pick == "direct-democracy") {
            document.getElementById("adv_gov").innerHTML = "Subconscious Consensus<br><br><span class='green_txt'>+10%<\/span> Happiness<br><span class='green_txt'>+30%<\/span> Leader Experience Gain";
            government_summary = "Direct Democracy<br><br><span class='green_txt'>+5%<\/span> Happiness<br><span class='green_txt'>+15%<\/span> Leader Experience Gain<br>";
        };
        if(government_pick == "enlightened-monarchy") {
            document.getElementById("adv_gov").innerHTML = "Irenic Monarchy<br><br><span class='green_txt'>-30%<\/span> Edict Influence Cost<br><span class='green_txt'>+30%<\/span> Edict Duration<br><span class='green_txt'>+4<\/span> Core Systems";
            government_summary = "Enlightened Monarchy<br><br><span class='green_txt'>-15%<\/span> Edict Influence Cost<br><span class='green_txt'>+15%<\/span> Edict Duration<br><span class='green_txt'>+2<\/span> Core Systems<br>Unlocks building: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Buildings#Ethos_.26_Government' target='_blank'>Royal Gardens<\/a><\/span><br>";
        };
        if(government_pick == "peaceful-bureaucracy") {
            document.getElementById("adv_gov").innerHTML = "Irenic Protectorate<br><br><span class='green_txt'>+10<\/span> Core Systems";
            government_summary = "Peaceful Bureaucracy<br><br><span class='green_txt'>+5<\/span> Core Systems<br>";
        };
        if(government_pick == "moral-democracy") {
            document.getElementById("adv_gov").innerHTML = "Irenic Democracy<br><br><span class='green_txt'>+2<\/span> Leader Pool Size<br><span class='green_txt'>+2<\/span> Empire Leader Capacity<br><span class='green_txt'>+4<\/span> Core Systems";
            government_summary = "Moral Democracy<br><br><span class='green_txt'>+1<\/span> Leader Pool Size<br><span class='green_txt'>+1<\/span> Empire Leader Capacity<br><span class='green_txt'>+2<\/span> Core Systems<br>";
        };
        if(government_pick == "despotic-empire") {
            document.getElementById("adv_gov").innerHTML = "Star Empire<br><br><span class='green_txt'>-30%<\/span> Building Cost<br><span class='green_txt'>+20%<\/span> Slave Mineral Output<br><span class='green_txt'>+20%<\/span> Slave Food Output";
            government_summary = "Despotic Empire<br><br><span class='green_txt'>-15%<\/span> Building Cost<br><span class='green_txt'>+10%<\/span> Slave Mineral Output<br><span class='green_txt'>+10%<\/span> Slave Food Output<br>";
        };
        if(government_pick == "plutocratic-oligarchy") {
            document.getElementById("adv_gov").innerHTML = "Mega Corporation<br><br><span class='green_txt'>+10%<\/span> Energy Credits<br><span class='green_txt'>+10%<\/span> Minerals<br><span class='green_txt'>-50%<\/span> Mining Station Build Cost";
            government_summary = "Plutocratic Oligarchy<br><br><span class='green_txt'>+5%<\/span> Energy Credits<br><span class='green_txt'>+5%<\/span> Minerals<br><span class='green_txt'>-25%<\/span> Mining Station Build Cost<br>";
        };
        if(government_pick == "indirect-democracy") {
            document.getElementById("adv_gov").innerHTML = "Democratic Utopia<br><br><span class='green_txt'>+2<\/span> Leader Starting Levels<br><span class='green_txt'>-30%<\/span> Leader Recruitment Cost";
            government_summary = "Indirect Democracy<br><br><span class='green_txt'>+1<\/span> Leader Starting Levels<br><span class='green_txt'>-15%<\/span> Leader Recruitment Cost<br>";
        };
        document.getElementById("government_summary").innerHTML = government_summary;
    };
    display_bonus_summary();
};

function display_ethics() {
    var ethics_picks = [];

    if (individuality_pick == -2) {
        ethics_picks.push("<span class='green_txt'>+100%<\/span> Slavery Tolerance<br><span class='green_txt'>-15%<\/span> Food Consumption<br>Unlocks building: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Buildings#Ethos_.26_Government' target='_blank'>Ministry of Benevolence<\/a><\/span><br>Unlocks edict: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Edicts#Fanatic' target='_blank'>Social Engineering<\/a><\/span><br>Unlocks tech: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Frontier_Collectives' target='_blank'>Frontier Collectives<\/a><\/span><br>Unlocks tech: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Frontier_Commissars' target='_blank'>Frontier Commissars<\/a><\/span><br>");
    };
    if (individuality_pick == -1) {
        ethics_picks.push("<span class='green_txt'>+100%<\/span> Slavery Tolerance<br><span class='green_txt'>-5%<\/span> Food Consumption<br>Unlocks building: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Buildings#Ethos_.26_Government' target='_blank'>Ministry of Benevolence<\/a><\/span><br>Unlocks tech: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Frontier_Collectives' target='_blank'>Frontier Collectives<\/a><\/span><br>Unlocks tech: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Frontier_Commissars' target='_blank'>Frontier Commissars<\/a><\/span><br>");
    };
    if (individuality_pick == 1) {
        ethics_picks.push("<span class='green_txt'>+5%<\/span> Energy Credits<br><span class='red_txt'>-33%<\/span> Slavery Tolerance<br>Unlocks building: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Buildings#Ethos_.26_Government' target='_blank'>Hyper-Entertainment Forum<\/a><\/span><br>Unlocks building: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Buildings#Ethos_.26_Government' target='_blank'>Galactic Stock Exchange<\/a><\/span><br>Unlocks tech: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Frontier_Initiatives' target='_blank'>Frontier Initiatives<\/a><\/span><br>Unlocks tech: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Frontier_Traditions' target='_blank'>Frontier Traditions<\/a><\/span><br>Locks tech: <span class='red_txt'><a href='https://stellaris.paradoxwikis.com/The_Collective_Self' target='_blank' class='red'>The Collective Self<\/a><\/span><br>");
    };
    if (individuality_pick == 2) {
        ethics_picks.push("<span class='green_txt'>+15%<\/span> Energy Credits<br><span class='red_txt'>-100%<\/span> Slavery Tolerance<br>Unlocks building: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Buildings#Ethos_.26_Government' target='_blank'>Hyper-Entertainment Forum<\/a><\/span><br>Unlocks building: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Buildings#Ethos_.26_Government' target='_blank'>Galactic Stock Exchange<\/a><\/span><br>Unlocks edict: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Edicts#Fanatic' target='_blank'>Grassroots Administration<\/a><\/span><br>Unlocks tech: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Frontier_Initiatives' target='_blank'>Frontier Initiatives<\/a><\/span><br>Unlocks tech: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Frontier_Traditions' target='_blank'>Frontier Traditions<\/a><\/span><br>Locks tech: <span class='red_txt'><a href='https://stellaris.paradoxwikis.com/The_Collective_Self' target='_blank' class='red'>The Collective Self<\/a><\/span><br>");
    };
    if (spirituality_pick == -2) {
        ethics_picks.push("<span class='green_txt'>-30%<\/span> Ethics Divergence<br><span class='green_txt'>-15%<\/span> Growth Requirement<br>Unlocks building: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Buildings#Ethos_.26_Government' target='_blank'>Symbol of Unity<\/a><\/span><br>Unlocks edict: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Edicts#Fanatic' target='_blank'>Spiritual Unity<\/a><\/span><br>");
    };
    if (spirituality_pick == -1) {
        ethics_picks.push("<span class='green_txt'>-10%<\/span> Ethics Divergence<br><span class='green_txt'>-5%<\/span> Growth Requirement<br>Unlocks building: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Buildings#Ethos_.26_Government' target='_blank'>Symbol of Unity<\/a><\/span><br>");
    };
    if (spirituality_pick == 1) {
        ethics_picks.push("<span class='green_txt'>+5%<\/span> Physics, Society, and Engineering Output<br>Unlocks building: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Buildings#Ethos_.26_Government' target='_blank'>Research Institute<\/a><\/span><br>Unlocks edict: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Edicts#Empire' target='_blank'>Map the Stars<\/a><\/span><br>");
    };
    if (spirituality_pick == 2) {
        ethics_picks.push("<span class='green_txt'>+15%<\/span> Physics, Society, and Engineering Output<br>Unlocks building: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Buildings#Ethos_.26_Government' target='_blank'>Research Institute<\/a><\/span><br>Unlocks edict: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Edicts#Empire' target='_blank'>Map the Stars<\/a><\/span><br>Unlocks edict: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Edicts#Fanatic' target='_blank'>Spirit of Science<\/a><\/span><br>");
    };
    if (militarisim_pick == -2) {
        ethics_picks.push("<span class='red_txt'>-15%<\/span> War Happiness<br><span class='green_txt'>+15%<\/span> Peace Happiness<br><span class='red_txt'>-3<\/span> Max Rivalries (cannot have rivals)<br><span class='green_txt'>+75%<\/span> Trust Growth<br>Unlocks building: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Buildings#Ethos_.26_Government' target='_blank'>Paradise Dome<\/a><\/span><br>Unlocks edict: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Edicts#Fanatic' target='_blank'>Peace Festivals<\/a><\/span><br>");
    };
    if (militarisim_pick == -1) {
        ethics_picks.push("<span class='red_txt'>-5%<\/span> War Happiness<br><span class='green_txt'>+5%<\/span> Peace Happiness<br><span class='red_txt'>-1<\/span> Max Rivalries<br><span class='green_txt'>+25%<\/span> Trust Growth<br>Unlocks building: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Buildings#Ethos_.26_Government' target='_blank'>Paradise Dome<\/a><\/span><br>");
    };
    if (militarisim_pick == 1) {
        ethics_picks.push("<span class='green_txt'>+10%<\/span> War Happiness<br><span class='green_txt'>+3%<\/span> Ship Damage<br><span class='green_txt'>+1<\/span> Max Rivalries<br><span class='red_txt'>-20%<\/span> Trust Growth<br>Unlocks building: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Buildings#Ethos_.26_Government' target='_blank'>Virtual Combat Arena<\/a><\/span><br>");
    };
    if (militarisim_pick == 2) {
        ethics_picks.push("<span class='green_txt'>+10%<\/span> War Happiness<br><span class='green_txt'>+10%<\/span> Ship Damage<br><span class='green_txt'>+3<\/span> Max Rivalries<br><span class='red_txt'>-60%<\/span> Trust Growth<br>Unlocks building: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Buildings#Ethos_.26_Government' target='_blank'>Virtual Combat Arena<\/a><\/span><br>Unlocks edict: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Edicts#Fanatic' target='_blank'>Arms Race<\/a><\/span><br>");
    };
    if (xenophobia_pick == -2) {
        ethics_picks.push("<span class='green_txt'>-15%<\/span> Xenophobia<br><span class='green_txt'>-75%<\/span> Diplomatic Influence Cost<br><span class='red_txt'>-75%<\/span> Rivaly Influence Gain<br>Unlocks building: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Buildings#Ethos_.26_Government' target='_blank'>Visitor Center<\/a><\/span><br>Unlocks edict: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Edicts#Fanatic' target='_blank'>Legal Aliens<\/a><\/span><br>");
    };
    if (xenophobia_pick == -1) {
        ethics_picks.push("<span class='green_txt'>-5%<\/span> Xenophobia<br><span class='green_txt'>-25%<\/span> Diplomatic Influence Cost<br><span class='red_txt'>-25%<\/span> Rivaly Influence Gain<br>Unlocks building: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Buildings#Ethos_.26_Government' target='_blank'>Visitor Center<\/a><\/span><br>");
    };
    if (xenophobia_pick == 1) {
        ethics_picks.push("<span class='red_txt'>+5%<\/span> Xenophobia<br><span class='green_txt'>+100%<\/span> Alien Slavery Tolerance<br><span class='green_txt'>+25%<\/span> Rivaly Influence Gain<br>Unlocks building: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Buildings#Ethos_.26_Government' target='_blank'>Monument to Purity<\/a><\/span><br>Locks tech: <span class='red_txt'><a href='https://stellaris.paradoxwikis.com/Xeno_Zoo' target='_blank' class='red'>Xeno Zoo<\/a><\/span><br>Locks tech: <span class='red_txt'><a href='https://stellaris.paradoxwikis.com/Xeno_Integration' target='_blank' class='red'>Xeno Integration<\/a><\/span><br>");
    };
    if (xenophobia_pick == 2) {
        ethics_picks.push("<span class='red_txt'>+15%<\/span> Xenophobia<br><span class='green_txt'>+100%<\/span> Alien Slavery Tolerance<br><span class='green_txt'>+75%<\/span> Rivaly Influence Gain<br>Unlocks building: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Buildings#Ethos_.26_Government' target='_blank'>Monument to Purity<\/a><\/span><br>Unlocks edict: <span class='green_txt'><a href='https://stellaris.paradoxwikis.com/Edicts#Fanatic' target='_blank'>Illegal Aliens<\/a><\/span><br>Locks tech: <span class='red_txt'><a href='https://stellaris.paradoxwikis.com/Xeno_Zoo' target='_blank' class='red'>Xeno Zoo<\/a><\/span><br>Locks tech: <span class='red_txt'><a href='https://stellaris.paradoxwikis.com/Xeno_Integration' target='_blank' class='red'>Xeno Integration<\/a><\/span><br>");
    };

    if (ethics_picks.length == 0) {
        ethics_summary = "Nothing selected.";
        document.getElementById("ethics_summary").innerHTML = "Nothing selected.";
    }
    else {
        var i = 0;
        ethics_summary = "";
        for (i = 0; i < ethics_picks.length; i++) {
            ethics_summary = ethics_summary + ethics_picks[i];
            document.getElementById("ethics_summary").innerHTML = ethics_summary;
        };
    };
    display_bonus_summary();
};

function find_duplicates(array) {
    var len=array.length,
    out=[],
    counts={};

    for (var i=0; i < len; i++) {
        var item = array[i];
        counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
    };

    for (var item in counts) {
        if(counts[item] > 1)
            out.push(item);
    };
    return out;
};

function strip_html(markup_text) {
   var tmp = document.createElement("DIV");
   tmp.innerHTML = markup_text;
   return tmp.textContent || tmp.innerText || "";
};

function replace_all(search, replacement, target) {
    return target.split(search).join(replacement);
};

function display_bonus_summary() {

    if (government_summary == "Nothing selected." && ethics_summary != "Nothing selected." && traits_summary == "Nothing selected.") {
        document.getElementById("bonus_summary").innerHTML = ethics_summary;
    }
    else if (government_summary != "Nothing selected." && ethics_summary == "Nothing selected." && traits_summary == "Nothing selected.") {
        document.getElementById("bonus_summary").innerHTML = government_summary;
    }
    else if (government_summary == "Nothing selected." && ethics_summary == "Nothing selected." && traits_summary != "Nothing selected.") {
        document.getElementById("bonus_summary").innerHTML = traits_summary;
    }
    else if (government_summary == "Nothing selected." && ethics_summary == "Nothing selected." && traits_summary == "Nothing selected.") {
        document.getElementById("bonus_summary").innerHTML = "Nothing selected.";
    }
    else if (government_summary != "Nothing selected." && ethics_summary != "Nothing selected." && traits_summary == "Nothing selected.") {
        var total_summary = government_summary + ethics_summary;
        calculate_bonus_summary(total_summary);
    }
    else if (government_summary != "Nothing selected." && ethics_summary == "Nothing selected." && traits_summary != "Nothing selected.") {
        var total_summary = government_summary + traits_summary;
        calculate_bonus_summary(total_summary);
    }
    else if (government_summary == "Nothing selected." && ethics_summary != "Nothing selected." && traits_summary != "Nothing selected.") {
        var total_summary = ethics_summary + traits_summary;
        calculate_bonus_summary(total_summary);
    }
    else if (government_summary != "Nothing selected." && ethics_summary != "Nothing selected." && traits_summary != "Nothing selected.") {
        var total_summary = government_summary + ethics_summary + traits_summary;
        calculate_bonus_summary(total_summary);
    };
    update_url();
    check_policies();
};

function calculate_bonus_summary(total_summary) {

    // Logic to dynamically detect bonuses stacked on the same attribute and add them together.
    var processed_summary = replace_all("<br>", "|", total_summary);
    var processed_summary2 = replace_all("||", "|", processed_summary);
    
    processed_summary2 = replace_all("+", "", processed_summary2);
    processed_summary2 = replace_all("-", "", processed_summary2);
    processed_summary2 = replace_all("%", "", processed_summary2);
    processed_summary2 = processed_summary2.replace(/[0-9]/g, "");
    processed_summary2 = strip_html(processed_summary2);
    
    var summary_dupes = processed_summary2.split("|");
    summary_dupes = find_duplicates(summary_dupes);
    
    if (summary_dupes.length > 0) {
        total_summary = "";
        var i = 0;
        var x = 0;
        
        processed_summary = processed_summary.split("|");
        
        for (i = 0; i < summary_dupes.length; i++) {
            var total_bonus = 0;
            var plus_good = 0;
            var neg_good = 0;
            
            for (x = 0; x < processed_summary.length; x++) {
                if (processed_summary[x].includes(summary_dupes[i])) {
                    var temp = strip_html(processed_summary[x]);
                    
                    var percent = 0;
                    if (temp.includes("%")) {
                        percent = 1;
                    };
                    
                    if (processed_summary[x].includes("green") && processed_summary[x].includes("+")) {
                        plus_good = 1;
                    };
                    
                    if (processed_summary[x].includes("green") && processed_summary[x].includes("-")) {
                        neg_good = 1;
                    };
                    temp = replace_all("%", "", temp);
                    temp = replace_all(" ", "", temp);
                    temp = replace_all("+", "", temp);
                    temp = replace_all(",", "", temp);
                    temp = temp.replace(/[a-z]/g, "");
                    temp = temp.replace(/[A-Z]/g, "");
                    total_bonus = total_bonus + Number(temp);
                }
                else if (i == 0) {
                    if (x == 1) {
                        total_summary = total_summary + processed_summary[x] + "<br>"
                        
                    }
                    else if (processed_summary[x] != "") {
                        total_summary = total_summary + processed_summary[x] + "<br>"
                    };
                };
            };
            if (plus_good == 1) {
                if (total_bonus > 0) {
                    total_bonus = "<span class='green_txt'>+" + total_bonus;
                }
                else {
                    total_bonus = "<span class='red_txt'>" + total_bonus;
                };
            };
            if (neg_good == 1) {
                if (total_bonus < 0) {
                    total_bonus = "<span class='green_txt'>" + total_bonus;
                }
                else {
                    total_bonus = "<span class='red_txt'>+" + total_bonus;
                };
            };
            if (percent == 1) {
                total_bonus = total_bonus + "%";
            };
            total_bonus = total_bonus + "<\/span>";
            total_summary = total_summary + total_bonus + " " + summary_dupes[i] + "<br>"
        };
        var new_summary = total_summary.split("<br>");;
        var new_summary_dupes = find_duplicates(new_summary);
        
        var y = 0;
        var z = 0;
        for (y = 0; y < new_summary.length; y++) {
            for (z = 0; z < new_summary_dupes.length; z++) {
                if (new_summary[y] == new_summary_dupes[z]) {
                    new_summary[y] = "x";
                };
            };
        };
        total_summary = "";
        for (y = 0; y < new_summary.length; y++) {
            if (new_summary[y] != "x") {
                
                if (y == 0) {
                    total_summary = total_summary + new_summary[y] + "<br><br>";
                    
                }
                else {
                      total_summary = total_summary + new_summary[y] + "<br>";
                };
            };
        };
        // You're off the edge of the map mate.
        var raw_summary = replace_all("<br>", "|", total_summary);
        var processed_summary_mk2 = strip_html(raw_summary);
        
        processed_summary_mk2 = replace_all("%", "", processed_summary_mk2);
        processed_summary_mk2 = replace_all("+", "", processed_summary_mk2);
        processed_summary_mk2 = replace_all("-", "", processed_summary_mk2);
        processed_summary_mk2 = replace_all(" ", "", processed_summary_mk2);
        processed_summary_mk2 = processed_summary_mk2.replace(/[0-9]/g, "");
        processed_summary_mk2 = processed_summary_mk2.split("|")
        
        var final_dupes = find_duplicates(processed_summary_mk2);
        
        var dupe_array = [];
        var q = 0;
        var r = 0;
        
        for (q = 0; q < final_dupes.length; q++) {
            var count = 0;
            for (r = 0; r < processed_summary_mk2.length; r++) {
                
                if (processed_summary_mk2[r].includes(final_dupes[q])) {
                    count = count + 1;
                };
            };
            dupe_array.push(final_dupes[q] + "|" + count);
        };
        dupe_array.shift();
        
        // Here there be monsters.
        var foo = 0;
        var glork = 0;
        
        for (foo = 0; foo < dupe_array.length; foo++) {
            var dupe_data = dupe_array[foo].split("|")
            var counter = 1;
            
            
            for (glork = 0; glork < new_summary.length; glork++) {
                if (counter < dupe_data[1] && new_summary[glork].includes(dupe_data[0])) {
                    counter = counter + 1;
                    new_summary[glork] = "x";
                };
            };
        };
        total_summary = "";
        for (y = 0; y < new_summary.length; y++) {
            if (new_summary[y] != "x") {
                
                if (y == 0) {
                    total_summary = total_summary + new_summary[y] + "<br><br>";
                }
                else {
                      total_summary = total_summary + new_summary[y] + "<br>";
                };
            };
        };
        document.getElementById("bonus_summary").innerHTML = total_summary;
    }
    else {
        document.getElementById("bonus_summary").innerHTML = total_summary;
    };
};

function display_traits() {
    var traits_picks = [];

    if (strong_pick == -1) {
        traits_picks.push("<span class='red_txt'>-20%<\/span> Army Damage<br><span class='red_txt'>-5%<\/span> Minerals<br>");
    };
    if (strong_pick == 1) {
        traits_picks.push("<span class='green_txt'>+20%<\/span> Army Damage<br><span class='green_txt'>+5%<\/span> Minerals<br>");
    };
    if (strong_pick == 2) {
        traits_picks.push("<span class='green_txt'>+40%<\/span> Army Damage<br><span class='green_txt'>+10%<\/span> Minerals<br>");
    };
    if (enduring_pick == -1) {
        traits_picks.push("<span class='red_txt'>-15<\/span> Years Leader Lifespan<br>");
    };
    if (enduring_pick == 1) {
        traits_picks.push("<span class='green_txt'>+30<\/span> Years Leader Lifespan<br>");
    };
    if (enduring_pick == 2) {
        traits_picks.push("<span class='green_txt'>+90<\/span> Years Leader Lifespan<br>");
    };
    if (decadent_pick == -1) {
        traits_picks.push("<span class='red_txt'>-10%<\/span> Resource Output without Slaves<br>");
    };
    if (learner_pick == -1) {
        traits_picks.push("<span class='red_txt'>-25%<\/span> Leader Experience Gain<br>");
    };
    if (learner_pick == 1) {
        traits_picks.push("<span class='green_txt'>+25%<\/span> Leader Experience Gain<br>");
    };
    if (adaptive_pick == -1) {
        traits_picks.push("<span class='red_txt'>-10%<\/span> Habitability<br>");
    };
    if (adaptive_pick == 1) {
        traits_picks.push("<span class='green_txt'>+10%<\/span> Habitability<br>");
    };
    if (adaptive_pick == 2) {
        traits_picks.push("<span class='green_txt'>+20%<\/span> Habitability<br>");
    };
    if (agrarian_pick == 1) {
        traits_picks.push("<span class='green_txt'>+15%<\/span> Food Output<br>");
    };
    if (charismatic_pick == -1) {
        traits_picks.push("<span class='red_txt'>-1%<\/span> Other Species Happiness per Pop<br><span class='red_txt'>-10<\/span> Diplomatic Standing<br>");
    };
    if (charismatic_pick == 1) {
        traits_picks.push("<span class='green_txt'>+1%<\/span> Other Species Happiness per Pop<br><span class='green_txt'>+10<\/span> Diplomatic Standing<br>");
    };
    if (communal_pick == -1) {
        traits_picks.push("<span class='red_txt'>-5%<\/span> Happiness<br>");
    };
    if (communal_pick == 1) {
        traits_picks.push("<span class='green_txt'>+5%<\/span> Happiness<br>");
    };
    if (conformist_pick == -1) {
        traits_picks.push("<span class='red_txt'>+15%<\/span> Ethics Divergence<br>");
    };
    if (conformist_pick == 1) {
        traits_picks.push("<span class='green_txt'>-20%<\/span> Ethics Divergence<br>");
    };
    if (industrious_pick == 1) {
        traits_picks.push("<span class='green_txt'>+15%<\/span> Minerals<br>");
    };
    if (intelligent_pick == 1) {
        traits_picks.push("<span class='green_txt'>+10%<\/span> Physics, Society, and Engineering Output<br>");
    };
    if (science_pick == 1) {
        traits_picks.push("<span class='green_txt'>+15%<\/span> Engineering Output<br>");
    };
    if (science_pick == 2) {
        traits_picks.push("<span class='green_txt'>+15%<\/span> Physics Output<br>");
    };
    if (science_pick == 3) {
        traits_picks.push("<span class='green_txt'>+15%<\/span> Society Output<br>");
    };
    if (nomadic_pick == -1) {
        traits_picks.push("<span class='red_txt'>+50%<\/span> Migration Time<br><span class='red_txt'>+33%<\/span> Resettlement Cost<br>");
    };
    if (nomadic_pick == 1) {
        traits_picks.push("<span class='green_txt'>-50%<\/span> Migration Time<br><span class='green_txt'>-33%<\/span> Resettlement Cost<br>");
    };
    if (breeder_pick == -1) {
        traits_picks.push("<span class='red_txt'>+15%<\/span> Growth Time<br>");
    };
    if (breeder_pick == 1) {
        traits_picks.push("<span class='green_txt'>-10%<\/span> Growth Time<br>");
    };
    if (resilient_pick == 1) {
        traits_picks.push("<span class='green_txt'>+100%<\/span> Garrison Health<br><span class='green_txt'>+50%<\/span> Fortification Defensive Bonus<br>");
    };
    if (talented_pick == 1) {
        traits_picks.push("<span class='green_txt'>+1<\/span> Leader Starting Levels<br>");
    };
    if (thrifty_pick == 1) {
        traits_picks.push("<span class='green_txt'>+15%<\/span> Energy Credits<br>");
    };
    // End of bonus listings.
    if (traits_picks.length == 0) {
        traits_summary = "Nothing selected.";
        document.getElementById("traits_summary").innerHTML = "Nothing selected.";
    }
    else {
        var i = 0;
        traits_summary = "";
        for (i = 0; i < traits_picks.length; i++) {
            traits_summary = traits_summary + traits_picks[i];
            document.getElementById("traits_summary").innerHTML = traits_summary;
        };
    };
    display_bonus_summary();
};

function select_traits(trait) {
    var i = 0;
    
    if (trait == "weak") {
        if (strong_pick == -1 && trait_points >= 1) {
            clear_traits("strong");
            return true;
        };
        if (strong_pick == -1 && trait_points == 0) {
            return true;
        };
        for (i = 0; i < strong_traits.length; i++) {
            var target = document.getElementById(strong_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (strong_traits[i].includes("strong")) {
                    clear_traits("strong");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(-1)) {
                            for (i = 0; i < strong_traits.length; i++) {
                                var target = document.getElementById(strong_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        strong_pick = -1;
                        display_traits();
                        return true;
                    };
                };
            };
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(-1)) {
                for (i = 0; i < strong_traits.length; i++) {
                    var target = document.getElementById(strong_traits[i]);
                    target.style.backgroundColor = "#040904";
                };
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                strong_pick = -1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "strong") {
        if (strong_pick == 1) {
            clear_traits("strong");
            return true;
        };
        for (i = 0; i < strong_traits.length; i++) {
            var target = document.getElementById(strong_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (strong_traits[i].includes("very")) {
                    clear_traits("strong");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(1)) {
                            for (i = 0; i < strong_traits.length; i++) {
                                var target = document.getElementById(strong_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        strong_pick = 1;
                        display_traits();
                        return true;
                    };
                }
                else if (strong_traits[i].includes("weak") && trait_points >= 2) {
                    clear_traits("strong");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(1)) {
                            for (i = 0; i < strong_traits.length; i++) {
                                var target = document.getElementById(strong_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        strong_pick = 1;
                        display_traits();
                        return true;
                    };
                };
            };
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(1)) {
                for (i = 0; i < strong_traits.length; i++) {
                    var target = document.getElementById(strong_traits[i]);
                    target.style.backgroundColor = "#040904";
                };
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                strong_pick = 1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "very-strong") {
        if (strong_pick == 2) {
            clear_traits("strong");
            return true;
        };
        for (i = 0; i < strong_traits.length; i++) {
            var target = document.getElementById(strong_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (strong_traits[i].includes("strong") && trait_points >= 2) {
                    clear_traits("strong");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(3)) {
                            for (i = 0; i < strong_traits.length; i++) {
                                var target = document.getElementById(strong_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        strong_pick = 2;
                        display_traits();
                        return true;
                    }
                    else {
                        max_traits = max_traits + 1;
                    };
                }
                else if (strong_traits[i].includes("weak") && trait_points >= 4) {
                    clear_traits("strong");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(3)) {
                            for (i = 0; i < strong_traits.length; i++) {
                                var target = document.getElementById(strong_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        strong_pick = 2;
                        display_traits();
                        return true;
                    }
                    else {
                        max_traits = max_traits + 1;
                    };
                };
            };
        };
        if (spend_traits_picks()) {
             if ((strong_pick != -1 && spend_traits_points(3)) || spend_traits_points(4)) {
                for (i = 0; i < strong_traits.length; i++) {
                    var target = document.getElementById(strong_traits[i]);
                    target.style.backgroundColor = "#040904";
                };
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                strong_pick = 2;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "fleeting") {
        if (enduring_pick == -1 && trait_points >= 1) {
            clear_traits("enduring");
            return true;
        };
        if (enduring_pick == -1 && trait_points == 0) {
            return true;
        };
        for (i = 0; i < enduring_traits.length; i++) {
            var target = document.getElementById(enduring_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (enduring_traits[i].includes("enduring")) {
                    clear_traits("enduring");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(-1)) {
                            for (i = 0; i < enduring_traits.length; i++) {
                                var target = document.getElementById(enduring_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        enduring_pick = -1;
                        display_traits();
                        return true;
                    };
                };
                if (enduring_traits[i].includes("venerable")) {
                    clear_traits("enduring");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(-1)) {
                            for (i = 0; i < enduring_traits.length; i++) {
                                var target = document.getElementById(enduring_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        enduring_pick = -1;
                        display_traits();
                        return true;
                    };
                };
            };
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(-1)) {
                for (i = 0; i < enduring_traits.length; i++) {
                    var target = document.getElementById(enduring_traits[i]);
                    target.style.backgroundColor = "#040904";
                };
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                enduring_pick = -1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "enduring") {
        if (enduring_pick == 1) {
            clear_traits("enduring");
            return true;
        };
        for (i = 0; i < enduring_traits.length; i++) {
            var target = document.getElementById(enduring_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (enduring_traits[i].includes("venerable")) {
                    clear_traits("enduring");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(1)) {
                            for (i = 0; i < enduring_traits.length; i++) {
                                var target = document.getElementById(enduring_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        enduring_pick = 1;
                        display_traits();
                        return true;
                    };
                }
                else if (enduring_traits[i].includes("fleeting") && trait_points >= 2) {
                    clear_traits("enduring");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(1)) {
                            for (i = 0; i < enduring_traits.length; i++) {
                                var target = document.getElementById(enduring_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        enduring_pick = 1;
                        display_traits();
                        return true;
                    };
                };
            };
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(1)) {
                for (i = 0; i < enduring_traits.length; i++) {
                    var target = document.getElementById(enduring_traits[i]);
                    target.style.backgroundColor = "#040904";
                };
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                enduring_pick = 1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "venerable") {
        if (enduring_pick == 2) {
            clear_traits("enduring");
            return true;
        };
        for (i = 0; i < enduring_traits.length; i++) {
            var target = document.getElementById(enduring_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (enduring_traits[i].includes("enduring") && trait_points >= 4) {
                    clear_traits("enduring");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(5)) {
                            for (i = 0; i < enduring_traits.length; i++) {
                                var target = document.getElementById(enduring_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        enduring_pick = 2;
                        display_traits();
                        return true;
                    }
                    else {
                        max_traits = max_traits + 1;
                    };
                }
                else if (enduring_traits[i].includes("fleeting") && trait_points >= 6) {
                    clear_traits("enduring");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(5)) {
                            for (i = 0; i < enduring_traits.length; i++) {
                                var target = document.getElementById(enduring_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        enduring_pick = 2;
                        display_traits();
                        return true;
                    }
                    else {
                        max_traits = max_traits + 1;
                    };
                };
            };
        };
        if (spend_traits_picks()) { 
            if ((enduring_pick != -1 && spend_traits_points(5)) || spend_traits_points(6)) {
                for (i = 0; i < enduring_traits.length; i++) {
                    var target = document.getElementById(enduring_traits[i]);
                    target.style.backgroundColor = "#040904";
                };
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                enduring_pick = 2;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "decadent") {
        if (decadent_pick == -1 && trait_points >= 1) {
            clear_traits("decadent");
            return true;
        };
        if (decadent_pick == -1 && trait_points == 0) {
            return true;
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(-1)) {
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                decadent_pick = -1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "slow-learners") {
        if (learner_pick == -1 && trait_points >= 1) {
            clear_traits("learner");
            return true;
        };
        if (learner_pick == -1 && trait_points == 0) {
            return true;
        };
        for (i = 0; i < learner_traits.length; i++) {
            var target = document.getElementById(learner_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (learner_traits[i].includes("quick")) {
                    clear_traits("learner");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(-1)) {
                            for (i = 0; i < learner_traits.length; i++) {
                                var target = document.getElementById(learner_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        learner_pick = -1;
                        display_traits();
                        return true;
                    };
                };
            };
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(-1)) {
                for (i = 0; i < learner_traits.length; i++) {
                    var target = document.getElementById(learner_traits[i]);
                    target.style.backgroundColor = "#040904";
                };
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                learner_pick = -1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "quick-learners") {
        if (learner_pick == 1) {
            clear_traits("learner");
            return true;
        };
        for (i = 0; i < learner_traits.length; i++) {
            var target = document.getElementById(learner_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (learner_traits[i].includes("slow") && trait_points >= 2) {
                    clear_traits("learner");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(1)) {
                            for (i = 0; i < learner_traits.length; i++) {
                                var target = document.getElementById(learner_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        learner_pick = 1;
                        display_traits();
                        return true;
                    };
                };
            };
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(1)) {
                for (i = 0; i < learner_traits.length; i++) {
                    var target = document.getElementById(learner_traits[i]);
                    target.style.backgroundColor = "#040904";
                };
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                learner_pick = 1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "nonadaptive") {
        if (adaptive_pick == -1 && trait_points >= 2) {
            clear_traits("adaptive");
            return true;
        };
        if (adaptive_pick == -1 && trait_points <= 1) {
            return true;
        };
        for (i = 0; i < adaptive_traits.length; i++) {
            var target = document.getElementById(adaptive_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (adaptive_traits[i] == "adaptive" || adaptive_traits[i] == "extremely-adaptive") {
                    clear_traits("adaptive");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(-2)) {
                            for (i = 0; i < adaptive_traits.length; i++) {
                                var target = document.getElementById(adaptive_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        adaptive_pick = -1;
                        display_traits();
                        return true;
                    };
                };
            };
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(-2)) {
                for (i = 0; i < adaptive_traits.length; i++) {
                    var target = document.getElementById(adaptive_traits[i]);
                    target.style.backgroundColor = "#040904";
                };
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                adaptive_pick = -1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "adaptive") {
         if (adaptive_pick == 1) {
            clear_traits("adaptive");
            return true;
        };
        for (i = 0; i < adaptive_traits.length; i++) {
            var target = document.getElementById(adaptive_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (adaptive_traits[i].includes("extremely")) {
                    clear_traits("adaptive");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(2)) {
                            for (i = 0; i < adaptive_traits.length; i++) {
                                var target = document.getElementById(adaptive_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        adaptive_pick = 1;
                        display_traits();
                        return true;
                    };
                }
                else if (adaptive_traits[i].includes("nonadaptive") && trait_points >= 3) {
                    clear_traits("adaptive");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(2)) {
                            for (i = 0; i < adaptive_traits.length; i++) {
                                var target = document.getElementById(adaptive_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        adaptive_pick = 1;
                        display_traits();
                        return true;
                    };
                };
            };
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(2)) {
                for (i = 0; i < adaptive_traits.length; i++) {
                    var target = document.getElementById(adaptive_traits[i]);
                    target.style.backgroundColor = "#040904";
                };
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                adaptive_pick = 1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "extremely-adaptive") {
        if (adaptive_pick == 2) {
            clear_traits("adaptive");
            return true;
        };
        for (i = 0; i < adaptive_traits.length; i++) {
            var target = document.getElementById(adaptive_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if ((adaptive_traits[i] == "adaptive") && trait_points >= 2) {
                    clear_traits("adaptive");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(4)) {
                            for (i = 0; i < adaptive_traits.length; i++) {
                                var target = document.getElementById(adaptive_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        adaptive_pick = 2;
                        display_traits();
                        return true;
                    }
                    else {
                        max_traits = max_traits + 1;
                    };
                }
                else if (adaptive_traits[i].includes("nonadaptive") && trait_points >= 4) {
                    clear_traits("adaptive");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(4)) {
                            for (i = 0; i < adaptive_traits.length; i++) {
                                var target = document.getElementById(adaptive_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        adaptive_pick = 2;
                        display_traits();
                        return true;
                    }
                    else {
                        max_traits = max_traits + 1;
                    };
                };
            };
        };
        if (spend_traits_picks()) {
             if ((adaptive_pick != -1 && spend_traits_points(4)) || spend_traits_points(5)) {
                for (i = 0; i < adaptive_traits.length; i++) {
                    var target = document.getElementById(adaptive_traits[i]);
                    target.style.backgroundColor = "#040904";
                };
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                adaptive_pick = 2;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "agrarian") {
        if (agrarian_pick == 1) {
            clear_traits("agrarian");
            return true;
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(2)) {
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                agrarian_pick = 1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "repugnant") {
        if (charismatic_pick == -1 && trait_points >= 1) {
            clear_traits("charismatic");
            return true;
        };
        if (charismatic_pick == -1 && trait_points == 0) {
            return true;
        };
        for (i = 0; i < charismatic_traits.length; i++) {
            var target = document.getElementById(charismatic_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (charismatic_traits[i].includes("charismatic")) {
                    clear_traits("charismatic");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(-1)) {
                            for (i = 0; i < charismatic_traits.length; i++) {
                                var target = document.getElementById(charismatic_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        charismatic_pick = -1;
                        display_traits();
                        return true;
                    };
                };
            };
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(-1)) {
                for (i = 0; i < charismatic_traits.length; i++) {
                    var target = document.getElementById(charismatic_traits[i]);
                    target.style.backgroundColor = "#040904";
                };
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                charismatic_pick = -1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "charismatic") {
        if (charismatic_pick == 1) {
            clear_traits("charismatic");
            return true;
        };
        for (i = 0; i < charismatic_traits.length; i++) {
            var target = document.getElementById(charismatic_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (charismatic_traits[i].includes("repugnant") && trait_points >= 2) {
                    clear_traits("charismatic");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(1)) {
                            for (i = 0; i < charismatic_traits.length; i++) {
                                var target = document.getElementById(charismatic_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        charismatic_pick = 1;
                        display_traits();
                        return true;
                    };
                };
            };
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(1)) {
                for (i = 0; i < charismatic_traits.length; i++) {
                    var target = document.getElementById(charismatic_traits[i]);
                    target.style.backgroundColor = "#040904";
                };
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                charismatic_pick = 1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "solitary") {
        if (communal_pick == -1 && trait_points >= 1) {
            clear_traits("communal");
            return true;
        };
        if (communal_pick == -1 && trait_points == 0) {
            return true;
        };
        for (i = 0; i < communal_traits.length; i++) {
            var target = document.getElementById(communal_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (communal_traits[i].includes("communal")) {
                    clear_traits("communal");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(-1)) {
                            for (i = 0; i < communal_traits.length; i++) {
                                var target = document.getElementById(communal_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        communal_pick = -1;
                        display_traits();
                        return true;
                    };
                };
            };
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(-1)) {
                for (i = 0; i < communal_traits.length; i++) {
                    var target = document.getElementById(communal_traits[i]);
                    target.style.backgroundColor = "#040904";
                };
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                communal_pick = -1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "communal") {
        if (communal_pick == 1) {
            clear_traits("communal");
            return true;
        };
        for (i = 0; i < communal_traits.length; i++) {
            var target = document.getElementById(communal_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (communal_traits[i].includes("solitary") && trait_points >= 2) {
                    clear_traits("communal");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(1)) {
                            for (i = 0; i < communal_traits.length; i++) {
                                var target = document.getElementById(communal_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        communal_pick = 1;
                        display_traits();
                        return true;
                    };
                };
            };
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(1)) {
                for (i = 0; i < communal_traits.length; i++) {
                    var target = document.getElementById(communal_traits[i]);
                    target.style.backgroundColor = "#040904";
                };
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                communal_pick = 1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "deviants") {
        if (conformist_pick == -1 && trait_points >= 1) {
            clear_traits("conformist");
            return true;
        };
        if (conformist_pick == -1 && trait_points == 0) {
            return true;
        };
        for (i = 0; i < conformist_traits.length; i++) {
            var target = document.getElementById(conformist_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (conformist_traits[i].includes("conformist")) {
                    clear_traits("conformist");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(-1)) {
                            for (i = 0; i < conformist_traits.length; i++) {
                                var target = document.getElementById(conformist_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        conformist_pick = -1;
                        display_traits();
                        return true;
                    };
                };
            };
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(-1)) {
                for (i = 0; i < conformist_traits.length; i++) {
                    var target = document.getElementById(conformist_traits[i]);
                    target.style.backgroundColor = "#040904";
                };
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                conformist_pick = -1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "conformists") {
        if (conformist_pick == 1) {
            clear_traits("conformist");
            return true;
        };
        for (i = 0; i < conformist_traits.length; i++) {
            var target = document.getElementById(conformist_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (conformist_traits[i].includes("deviants") && trait_points >= 3) {
                    clear_traits("conformist");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(2)) {
                            for (i = 0; i < conformist_traits.length; i++) {
                                var target = document.getElementById(conformist_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        conformist_pick = 1;
                        display_traits();
                        return true;
                    };
                };
            };
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(2)) {
                for (i = 0; i < conformist_traits.length; i++) {
                    var target = document.getElementById(conformist_traits[i]);
                    target.style.backgroundColor = "#040904";
                };
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                conformist_pick = 1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "industrious") {
        if (industrious_pick == 1) {
            clear_traits("industrious");
            return true;
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(2)) {
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                industrious_pick = 1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "intelligent") {
        if (intelligent_pick == 1) {
            clear_traits("intelligent");
            return true;
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(2)) {
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                intelligent_pick = 1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "natural-engineers") {
        if (science_pick == 1) {
            clear_traits("science");
            return true;
        };
        if (science_pick == 0) {
            if (spend_traits_picks()) {
                if (spend_traits_points(1)) {
                    var target = document.getElementById(trait);
                    target.style.backgroundColor = "#30bbbb";
                    display_traits_points();
                    science_pick = 1;
                    display_traits();
                    return true;
                }
                else {
                    max_traits = max_traits + 1;
                };
            };
        };
    };
    if (trait == "natural-physicists") {
        if (science_pick == 2) {
            clear_traits("science");
            return true;
        };
        if (science_pick == 0) {
            if (spend_traits_picks()) {
                if (spend_traits_points(1)) {
                    var target = document.getElementById(trait);
                    target.style.backgroundColor = "#30bbbb";
                    display_traits_points();
                    science_pick = 2;
                    display_traits();
                    return true;
                }
                else {
                    max_traits = max_traits + 1;
                };
            };
        };
    };
    if (trait == "natural-sociologists") {
        if (science_pick == 3) {
            clear_traits("science");
            return true;
        };
        if (science_pick == 0) {
            if (spend_traits_picks()) {
                if (spend_traits_points(1)) {
                    var target = document.getElementById(trait);
                    target.style.backgroundColor = "#30bbbb";
                    display_traits_points();
                    science_pick = 3;
                    display_traits();
                    return true;
                }
                else {
                    max_traits = max_traits + 1;
                };
            };
        };
    };
    if (trait == "sedentary") {
        if (nomadic_pick == -1 && trait_points >= 1) {
            clear_traits("nomadic");
            return true;
        };
        if (nomadic_pick == -1 && trait_points == 0) {
            return true;
        };
        for (i = 0; i < nomadic_traits.length; i++) {
            var target = document.getElementById(nomadic_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (nomadic_traits[i].includes("nomadic")) {
                    clear_traits("nomadic");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(-1)) {
                            for (i = 0; i < nomadic_traits.length; i++) {
                                var target = document.getElementById(nomadic_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        nomadic_pick = -1;
                        display_traits();
                        return true;
                    };
                };
            };
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(-1)) {
                for (i = 0; i < nomadic_traits.length; i++) {
                    var target = document.getElementById(nomadic_traits[i]);
                    target.style.backgroundColor = "#040904";
                };
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                nomadic_pick = -1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "nomadic") {
        if (nomadic_pick == 1) {
            clear_traits("nomadic");
            return true;
        };
        for (i = 0; i < nomadic_traits.length; i++) {
            var target = document.getElementById(nomadic_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (nomadic_traits[i].includes("sedentary") && trait_points >= 2) {
                    clear_traits("nomadic");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(1)) {
                            for (i = 0; i < nomadic_traits.length; i++) {
                                var target = document.getElementById(nomadic_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        nomadic_pick = 1;
                        display_traits();
                        return true;
                    };
                };
            };
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(1)) {
                for (i = 0; i < nomadic_traits.length; i++) {
                    var target = document.getElementById(nomadic_traits[i]);
                    target.style.backgroundColor = "#040904";
                };
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                nomadic_pick = 1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "slow-breeders") {
        if (breeder_pick == -1 && trait_points >= 1) {
            clear_traits("breeder");
            return true;
        };
        if (breeder_pick == -1 && trait_points == 0) {
            return true;
        };
        for (i = 0; i < breeder_traits.length; i++) {
            var target = document.getElementById(breeder_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (breeder_traits[i].includes("rapid")) {
                    clear_traits("breeder");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(-1)) {
                            for (i = 0; i < breeder_traits.length; i++) {
                                var target = document.getElementById(breeder_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        breeder_pick = -1;
                        display_traits();
                        return true;
                    };
                };
            };
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(-1)) {
                for (i = 0; i < breeder_traits.length; i++) {
                    var target = document.getElementById(breeder_traits[i]);
                    target.style.backgroundColor = "#040904";
                };
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                breeder_pick = -1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "rapid-breeders") {
        if (breeder_pick == 1) {
            clear_traits("breeder");
            return true;
        };
        for (i = 0; i < breeder_traits.length; i++) {
            var target = document.getElementById(breeder_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (breeder_traits[i].includes("slow") && trait_points >= 2) {
                    clear_traits("breeder");
                    if (spend_traits_picks()) {
                        if (spend_traits_points(1)) {
                            for (i = 0; i < breeder_traits.length; i++) {
                                var target = document.getElementById(breeder_traits[i]);
                                target.style.backgroundColor = "#040904";
                            };
                        };
                        var target = document.getElementById(trait);
                        target.style.backgroundColor = "#30bbbb";
                        display_traits_points();
                        breeder_pick = 1;
                        display_traits();
                        return true;
                    };
                };
            };
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(1)) {
                for (i = 0; i < breeder_traits.length; i++) {
                    var target = document.getElementById(breeder_traits[i]);
                    target.style.backgroundColor = "#040904";
                };
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                breeder_pick = 1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "resilient") {
        if (resilient_pick == 1) {
            clear_traits("resilient");
            return true;
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(1)) {
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                resilient_pick = 1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "talented") {
        if (talented_pick == 1) {
            clear_traits("talented");
            return true;
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(2)) {
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                talented_pick = 1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
    if (trait == "thrifty") {
        if (thrifty_pick == 1) {
            clear_traits("thrifty");
            return true;
        };
        if (spend_traits_picks()) {
            if (spend_traits_points(2)) {
                var target = document.getElementById(trait);
                target.style.backgroundColor = "#30bbbb";
                display_traits_points();
                thrifty_pick = 1;
                display_traits();
                return true;
            }
            else {
                max_traits = max_traits + 1;
            };
        };
    };
};

function refund_trait_points(trait) {

    if (trait == "weak" && trait_points >= 1) {
        trait_points = trait_points - 1;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "strong") {
        trait_points = trait_points + 1;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "very-strong") {
        trait_points = trait_points + 3;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "fleeting" && trait_points >= 1) {
        trait_points = trait_points - 1;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "enduring") {
        trait_points = trait_points + 1;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "venerable") {
        trait_points = trait_points + 5;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "decadent" && trait_points >= 1) {
        trait_points = trait_points - 1;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "slow-learners" && trait_points >= 1) {
        trait_points = trait_points - 1;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "quick-learners") {
        trait_points = trait_points + 1;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "nonadaptive" && trait_points >= 2) {
        trait_points = trait_points - 2;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "adaptive") {
        trait_points = trait_points + 2;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "extremely-adaptive") {
        trait_points = trait_points + 4;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "agrarian") {
        trait_points = trait_points + 2;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "repugnant" && trait_points >= 1) {
        trait_points = trait_points - 1;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "charismatic") {
        trait_points = trait_points + 1;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "solitary" && trait_points >= 1) {
        trait_points = trait_points - 1;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "communal") {
        trait_points = trait_points + 1;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "deviants" && trait_points >= 1) {
        trait_points = trait_points - 1;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "conformists") {
        trait_points = trait_points + 2;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "industrious") {
        trait_points = trait_points + 2;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "intelligent") {
        trait_points = trait_points + 2;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "natural-engineers") {
        trait_points = trait_points + 1;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "natural-physicists") {
        trait_points = trait_points + 1;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "natural-sociologists") {
        trait_points = trait_points + 1;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "sedentary" && trait_points >= 1) {
        trait_points = trait_points - 1;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "nomadic") {
        trait_points = trait_points + 1;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "slow-breeders" && trait_points >= 1) {
        trait_points = trait_points - 1;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "rapid-breeders") {
        trait_points = trait_points + 1;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "resilient") {
        trait_points = trait_points + 1;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "talented") {
        trait_points = trait_points + 2;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    if (trait == "thrifty") {
        trait_points = trait_points + 2;
        max_traits = max_traits + 1;
        display_traits_points();
        return true;
    };
    return false;
};

function clear_traits(trait) {
    var i = 0;    
    
    if (trait == "strong") {
        for (i = 0; i < strong_traits.length; i++) {
            var target = document.getElementById(strong_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (refund_trait_points(strong_traits[i])) {
                    strong_pick = 0;
                    target.style.backgroundColor = "#040904";
                };
            };
        };
    };
    if (trait == "enduring") {
        for (i = 0; i < enduring_traits.length; i++) {
            var target = document.getElementById(enduring_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (refund_trait_points(enduring_traits[i])) {
                    enduring_pick = 0;
                    target.style.backgroundColor = "#040904";
                };
            };
        };
    };
    if (trait == "decadent") {
        var target = document.getElementById("decadent");
        if (target.style.backgroundColor == "rgb(48, 187, 187)") {
            if (refund_trait_points("decadent")) {
                decadent_pick = 0;
                target.style.backgroundColor = "#040904";
            };
        };
    };
    if (trait == "learner") {
        for (i = 0; i < learner_traits.length; i++) {
            var target = document.getElementById(learner_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (refund_trait_points(learner_traits[i])) {
                    learner_pick = 0;
                    target.style.backgroundColor = "#040904";
                };
            };
        };
    };
    if (trait == "adaptive") {
        for (i = 0; i < adaptive_traits.length; i++) {
            var target = document.getElementById(adaptive_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (refund_trait_points(adaptive_traits[i])) {
                    adaptive_pick = 0;
                    target.style.backgroundColor = "#040904";
                };
            };
        };
    };
    if (trait == "agrarian") {
        var target = document.getElementById("agrarian");
        if (target.style.backgroundColor == "rgb(48, 187, 187)") {
            if (refund_trait_points("agrarian")) {
                agrarian_pick = 0;
                target.style.backgroundColor = "#040904";
            };
        };
    };
    if (trait == "charismatic") {
        for (i = 0; i < charismatic_traits.length; i++) {
            var target = document.getElementById(charismatic_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (refund_trait_points(charismatic_traits[i])) {
                    charismatic_pick = 0;
                    target.style.backgroundColor = "#040904";
                };
            };
        };
    };
    if (trait == "communal") {
        for (i = 0; i < communal_traits.length; i++) {
            var target = document.getElementById(communal_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (refund_trait_points(communal_traits[i])) {
                    communal_pick = 0;
                    target.style.backgroundColor = "#040904";
                };
            };
        };
    };
    if (trait == "conformist") {
        for (i = 0; i < conformist_traits.length; i++) {
            var target = document.getElementById(conformist_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (refund_trait_points(conformist_traits[i])) {
                    conformist_pick = 0;
                    target.style.backgroundColor = "#040904";
                };
            };
        };
    };
    if (trait == "industrious") {
        var target = document.getElementById("industrious");
        if (target.style.backgroundColor == "rgb(48, 187, 187)") {
            if (refund_trait_points("industrious")) {
                industrious_pick = 0;
                target.style.backgroundColor = "#040904";
            };
        };
    };
    if (trait == "intelligent") {
        var target = document.getElementById("intelligent");
        if (target.style.backgroundColor == "rgb(48, 187, 187)") {
            if (refund_trait_points("intelligent")) {
                intelligent_pick = 0;
                target.style.backgroundColor = "#040904";
            };
        };
    };
    if (trait == "science") {
        for (i = 0; i < science_traits.length; i++) {
            var target = document.getElementById(science_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (refund_trait_points(science_traits[i])) {
                    science_pick = 0;
                    target.style.backgroundColor = "#040904";
                };
            };
        };
    };
    if (trait == "nomadic") {
        for (i = 0; i < nomadic_traits.length; i++) {
            var target = document.getElementById(nomadic_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (refund_trait_points(nomadic_traits[i])) {
                    nomadic_pick = 0;
                    target.style.backgroundColor = "#040904";
                };
            };
        };
    };
    if (trait == "breeder") {
        for (i = 0; i < breeder_traits.length; i++) {
            var target = document.getElementById(breeder_traits[i]);
            if (target.style.backgroundColor == "rgb(48, 187, 187)") {
                if (refund_trait_points(breeder_traits[i])) {
                    breeder_pick = 0;
                    target.style.backgroundColor = "#040904";
                };
            };
        };
    };
    if (trait == "resilient") {
        var target = document.getElementById("resilient");
        if (target.style.backgroundColor == "rgb(48, 187, 187)") {
            if (refund_trait_points("resilient")) {
                resilient_pick = 0;
                target.style.backgroundColor = "#040904";
            };
        };
    };
    if (trait == "talented") {
        var target = document.getElementById("talented");
        if (target.style.backgroundColor == "rgb(48, 187, 187)") {
            if (refund_trait_points("talented")) {
                talented_pick = 0;
                target.style.backgroundColor = "#040904";
            };
        };
    };
    if (trait == "thrifty") {
        var target = document.getElementById("thrifty");
        if (target.style.backgroundColor == "rgb(48, 187, 187)") {
            if (refund_trait_points("thrifty")) {
                thrifty_pick = 0;
                target.style.backgroundColor = "#040904";
            };
        };
    };
    display_traits();
};

function clear_all_traits() {
    var i = 0;
    for (i = 0; i < all_traits.length; i++) {
        var target = document.getElementById(all_traits[i]);
        target.style.backgroundColor = "#040904";
    };
    strong_pick = 0;
    enduring_pick = 0;
    decadent_pick = 0;
    learner_pick = 0;
    adaptive_pick = 0;
    agrarian_pick = 0;
    charismatic_pick = 0;
    communal_pick = 0;
    conformist_pick = 0;
    industrious_pick = 0;
    intelligent_pick = 0;
    science_pick = 0;
    nomadic_pick = 0;
    breeder_pick = 0;
    resilient_pick = 0;
    talented_pick = 0;
    thrifty_pick = 0;
    trait_points = 2;
    max_traits = 4;
    
    display_traits_points();
    display_traits();
};

function random_number(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

function random_build(traits_only) {
    
    // Clear the current build.
    clear_all_ethics();
    clear_all_traits();
    clear_government();
    
    // Generate a random set of traits.
    while (trait_points != 0) {
        if (max_traits == 0) {
            break;
        };
        var random_trait = all_traits[(random_number(0, all_traits.length))];
        select_traits(random_trait);
    };
    // Redo the traits if our traits build is handicapped by unspent points.
    if (max_traits == 0 && trait_points > 0) {
        random_build(1)
    };
    
    // Don't bother with ethics and governments if we are just redoing the traits.
    if (traits_only == 0) {
        
        while (ethics_points != 0) {
           // Pick a random ethics family to skip.
            var skipped_row = random_number(1, 5);
            
            // The order we go through our three randomly selected ethics families here matters. Each one should be first once, second once, and third once. Otherwise it will bias the generator toward certain ethics over others.
            if (skipped_row == 1) {
                random_ethic("spirituality");
                random_ethic("militarisim");
                random_ethic("xenophobia");
            };
            if (skipped_row == 2) {
                random_ethic("militarisim");
                random_ethic("xenophobia");
                random_ethic("individuality");
            };
            if (skipped_row == 3) {
                random_ethic("xenophobia");
                random_ethic("individuality");
                random_ethic("spirituality");
            };
            if (skipped_row == 4) {
                random_ethic("individuality");
                random_ethic("spirituality");
                random_ethic("militarisim");
            }; 
        };
        
        // Pick a random govenment that is allowed by our ethics.
        var government_choices = [];
        var i = 0;
        for (i = 0; i < governments.length; i++) {
            var target = document.getElementById(governments[i]);
            if (target.style.opacity == 1) {
                government_choices.push(governments[i]);
            };
        };
        select_government(government_choices[(random_number(0, government_choices.length))]);
    };
};

function clear_government() {
    var i = 0;
    for (i = 0; i < governments.length; i++) {
        var target = document.getElementById(governments[i]);
        target.style.opacity == "1.0"
        target.style.backgroundColor = "#040904";
    };
    government_pick = "none";
    government_bonuses();
};

function random_ethic(ethic) {
    if (ethic == "individuality") {
        if (ethics_points > 1) {
            var pick = random_number(-2, 3);
        }
        else {
            var pick = random_number(-1, 2);
        };
        if (pick == -2) {
                select_ethics("fanatic-collectivist");
            };
        if (pick == -1) {
            select_ethics("collectivist");
        };
        if (pick == 1) {
            select_ethics("individualist");
        };
        if (pick == 2) {
            select_ethics("fanatic-individualist");
        };
    };
    if (ethic == "spirituality") {
        if (ethics_points > 1) {
            var pick = random_number(-2, 3);
        }
        else {
            var pick = random_number(-1, 2);
        };
        if (pick == -2) {
                select_ethics("fanatic-spiritualist");
            };
        if (pick == -1) {
            select_ethics("spiritualist");
        };
        if (pick == 1) {
            select_ethics("materialist");
        };
        if (pick == 2) {
            select_ethics("fanatic-materialist");
        };
    };
    if (ethic == "militarisim") {
        if (ethics_points > 1) {
            var pick = random_number(-2, 3);
        }
        else {
            var pick = random_number(-1, 2);
        };
        if (pick == -2) {
                select_ethics("fanatic-pacifist");
            };
        if (pick == -1) {
            select_ethics("pacifist");
        };
        if (pick == 1) {
            select_ethics("militarist");
        };
        if (pick == 2) {
            select_ethics("fanatic-militarist");
        };
    };
    if (ethic == "xenophobia") {
        if (ethics_points > 1) {
            var pick = random_number(-2, 3);
        }
        else {
            var pick = random_number(-1, 2);
        };
        if (pick == -2) {
                select_ethics("fanatic-xenophile");
            };
        if (pick == -1) {
            select_ethics("xenophile");
        };
        if (pick == 1) {
            select_ethics("xenophobe");
        };
        if (pick == 2) {
            select_ethics("fanatic-xenophobe");
        };
    };
};

function read_url() {
    
    var url = window.location.href;
    
    if (url.includes("#")) {
        
        var params = url.split("#");
        var build = params[1].split("&");
        var ethics = [];
        var traits = [];
        var gov = "";
        var i = 0;
        
        for (i = 0; i < build.length; i++) {
            if (build[i].includes("ethic")) {
                var ethic_data = build[i].split("=");
                ethics.push(ethic_data[1]);
            };
            if (build[i].includes("trait")) {
                var trait_data = build[i].split("=");
                traits.push(trait_data[1]);
            };
            if (build[i].includes("gov")) {
                var gov_data = build[i].split("=");
                gov = gov_data[1];
            };
        };
        
        for (i = 0; i < ethics.length; i++) {
            select_ethics(ethics[i]);
        };
        
        if (gov != "") {
            select_government(gov);
        };
        
        var neg_traits = [
            "decadent",
            "deviants",
            "fleeting",
            "nonadaptive",
            "repugnant",
            "sedentary",
            "slow-breeders",
            "slow-learners",
            "solitary",
            "weak"
        ];
        
        for (i = 0; i < neg_traits.length; i++) {
            var x = 0;
            for (x = 0; x < traits.length; x++) {
                if (neg_traits[i] == traits[x]) {
                    select_traits(traits[x]);
                    traits[x] = "none";
                };
            };
        };
        for (i = 0; i < traits.length; i++) {
            select_traits(traits[i]);
        };
    };
};

function update_url() {
    
    var hash = "";
    var ethics = [];
    var traits = [];
    
    var all_ethics = [
        "fanatic-collectivist",
        "collectivist",
        "individualist",
        "fanatic-individualist",
        "fanatic-spiritualist",
        "spiritualist",
        "materialist",
        "fanatic-materialist",
        "fanatic-pacifist",
        "pacifist",
        "militarist",
        "fanatic-militarist",
        "fanatic-xenophile",
        "xenophile",
        "xenophobe",
        "fanatic-xenophobe"
    ];
    
    var i = 0;
    
    for (i = 0; i < all_traits.length; i++) {
        var target = document.getElementById(all_traits[i]);
        if (target.style.backgroundColor == "rgb(48, 187, 187)") {
            traits.push(all_traits[i]);
        };
    };
    
    for (i = 0; i < traits.length; i++) {
        hash = hash + "trait=" + traits[i] + "&";
    };
    
    for (i = 0; i < all_ethics.length; i++) {
        var target = document.getElementById(all_ethics[i]);
        if (target.style.backgroundColor == "rgb(48, 187, 187)") {
            ethics.push(all_ethics[i]);
        };
    };
    
    for (i = 0; i < ethics.length; i++) {
        hash = hash + "ethic=" + ethics[i] + "&";
    };
    
    if (government_pick != "none") {
        hash = hash + "gov=" + government_pick;
    };
    
    document.location.hash = hash;
};

function check_policies() {
    slavery();
    slave_procreation();
    purge();
    bombardment();
    interference();
    enlightenment();
    migration();
    resettle();
    voting();
    leadership();
    enhancement();
    contact();
    ai();
};

function slavery() {
    // individualisim
    if (individuality_pick > 0) {
        document.getElementById("slave_none").style.opacity = "1.0";
        document.getElementById("slave_none").style.fontWeight = "bold";
        document.getElementById("slave_none").style.color = "#30bbbb";
        document.getElementById("slave_xeno").style.opacity = "0.4";
        document.getElementById("slave_xeno_reg").style.opacity = "0.4";
        document.getElementById("slave_allow").style.opacity = "0.4";
        document.getElementById("slave_allow").style.fontWeight = "normal";
        document.getElementById("slave_allow").style.color = "#40cb90";
        document.getElementById("slave_allow_reg").style.opacity = "0.4";
    };
    if (individuality_pick < 0) {
        document.getElementById("slave_none").style.opacity = "1.0";
        document.getElementById("slave_none").style.fontWeight = "normal";
        document.getElementById("slave_none").style.color = "#40cb90";
        document.getElementById("slave_xeno").style.opacity = "1.0";
        document.getElementById("slave_xeno_reg").style.opacity = "1.0";
        document.getElementById("slave_allow").style.opacity = "1.0";
        document.getElementById("slave_allow").style.fontWeight = "bold";
        document.getElementById("slave_allow").style.color = "#30bbbb";
        document.getElementById("slave_allow_reg").style.opacity = "1.0";
        document.getElementById("slave_procreate").style.fontWeight = "bold";
        document.getElementById("slave_procreate").style.color = "#30bbbb";
        document.getElementById("slave_procreate").style.opacity = "1.0";
        document.getElementById("slave_no_procreate").style.opacity = "1.0";
    };
    if (individuality_pick == 0) {
        document.getElementById("slave_none").style.opacity = "1.0";
        document.getElementById("slave_none").style.fontWeight = "bold";
        document.getElementById("slave_none").style.color = "#30bbbb";
        document.getElementById("slave_xeno").style.opacity = "0.4";
        document.getElementById("slave_xeno_reg").style.opacity = "0.4";
        document.getElementById("slave_allow").style.opacity = "0.4";
        document.getElementById("slave_allow").style.fontWeight = "normal";
        document.getElementById("slave_allow").style.color = "#40cb90";
        document.getElementById("slave_allow_reg").style.opacity = "0.4";
        document.getElementById("slave_procreate").style.fontWeight = "bold";
        document.getElementById("slave_procreate").style.color = "#30bbbb";
        document.getElementById("slave_procreate").style.opacity = "1.0";
        document.getElementById("slave_no_procreate").style.opacity = "1.0";
    };
    // xenophobia
    if (xenophobia_pick > 0) {
        document.getElementById("slave_xeno").style.fontWeight = "normal";
        document.getElementById("slave_xeno").style.color = "#40cb90";
        document.getElementById("slave_xeno").style.opacity = "1.0";
        document.getElementById("slave_xeno_reg").style.fontWeight = "normal";
        document.getElementById("slave_xeno_reg").style.color = "#40cb90";
        document.getElementById("slave_xeno_reg").style.opacity = "1.0";
    };
};

function slave_procreation() {
    if (individuality_pick >= 0) {
        document.getElementById("slave_procreate").style.fontWeight = "normal";
        document.getElementById("slave_procreate").style.color = "#40cb90";
        document.getElementById("slave_procreate").style.opacity = "0.4";
        document.getElementById("slave_no_procreate").style.opacity = "0.4";
    };
    if (individuality_pick < 0 || xenophobia_pick > 0) {
        document.getElementById("slave_procreate").style.fontWeight = "bold";
        document.getElementById("slave_procreate").style.color = "#30bbbb";
        document.getElementById("slave_procreate").style.opacity = "1.0";
        document.getElementById("slave_no_procreate").style.opacity = "1.0";
    };
};

function purge() {
     // individualisim
     if (individuality_pick >= 0) {
        document.getElementById("purge_none").style.fontWeight = "bold";
        document.getElementById("purge_none").style.color = "#30bbbb";
        document.getElementById("purge_none").style.opacity = "1.0";
        document.getElementById("purge_xeno").style.opacity = "0.4";
        document.getElementById("purge_xeno").style.color = "#40cb90";
        document.getElementById("purge_xeno").style.fontWeight = "normal";
        document.getElementById("purge_allow").style.opacity = "0.4";
        document.getElementById("purge_allow").style.color = "#40cb90";
        document.getElementById("purge_allow").style.fontWeight = "normal";
    };
    if (individuality_pick < 0) {
        document.getElementById("purge_none").style.fontWeight = "normal";
        document.getElementById("purge_none").style.color = "#40cb90";
        document.getElementById("purge_none").style.opacity = "1.0";
        document.getElementById("purge_xeno").style.fontWeight = "normal";
        document.getElementById("purge_xeno").style.color = "#40cb90";
        document.getElementById("purge_xeno").style.opacity = "1.0";
        document.getElementById("purge_allow").style.opacity = "1.0";
        document.getElementById("purge_allow").style.fontWeight = "bold";
        document.getElementById("purge_allow").style.color = "#30bbbb";
    };
    // xenophobia
    if (xenophobia_pick > 0) {
        document.getElementById("purge_xeno").style.fontWeight = "normal";
        document.getElementById("purge_xeno").style.color = "#40cb90";
        document.getElementById("purge_xeno").style.opacity = "1.0";
    };
    if (xenophobia_pick <= 0 && individuality_pick >= 0) {
        document.getElementById("purge_xeno").style.fontWeight = "normal";
        document.getElementById("purge_xeno").style.color = "#40cb90";
        document.getElementById("purge_xeno").style.opacity = "0.4";
    };
};

function bombardment() {
    if (militarisim_pick < 0) {
        document.getElementById("bombard_light").style.fontWeight = "bold";
        document.getElementById("bombard_light").style.color = "#30bbbb";
        document.getElementById("bombard_light").style.opacity = "1.0";
        document.getElementById("bombard_limit").style.opacity = "1.0";
        document.getElementById("bombard_limit").style.color = "#40cb90";
        document.getElementById("bombard_limit").style.fontWeight = "normal";
        document.getElementById("bombard_full").style.opacity = "0.4";
        document.getElementById("bombard_full").style.color = "#40cb90";
        document.getElementById("bombard_full").style.fontWeight = "normal";
    };
    if (militarisim_pick > 0) {
        document.getElementById("bombard_light").style.fontWeight = "normal";
        document.getElementById("bombard_light").style.color = "#40cb90";
        document.getElementById("bombard_light").style.opacity = "1.0";
        document.getElementById("bombard_limit").style.opacity = "1.0";
        document.getElementById("bombard_limit").style.color = "#40cb90";
        document.getElementById("bombard_limit").style.fontWeight = "normal";
        document.getElementById("bombard_full").style.opacity = "1.0";
        document.getElementById("bombard_full").style.color = "#30bbbb";
        document.getElementById("bombard_full").style.fontWeight = "bold";
    };
    if (militarisim_pick == 0) {
        document.getElementById("bombard_light").style.fontWeight = "normal";
        document.getElementById("bombard_light").style.color = "#40cb90";
        document.getElementById("bombard_light").style.opacity = "1.0";
        document.getElementById("bombard_limit").style.opacity = "1.0";
        document.getElementById("bombard_limit").style.color = "#30bbbb";
        document.getElementById("bombard_limit").style.fontWeight = "bold";
        document.getElementById("bombard_full").style.opacity = "0.4";
        document.getElementById("bombard_full").style.color = "#40cb90";
        document.getElementById("bombard_full").style.fontWeight = "bold";
    };
};

function interference() {
    document.getElementById("native_passive").style.opacity = "1.0";
    document.getElementById("native_active").style.opacity = "1.0";
    document.getElementById("native_full").style.opacity = "1.0";
    document.getElementById("native_passive").style.fontWeight = "normal";
    document.getElementById("native_active").style.fontWeight = "normal";
    document.getElementById("native_full").style.fontWeight = "bold";
    document.getElementById("native_passive").style.color = "#40cb90";
    document.getElementById("native_active").style.color = "#40cb90";
    document.getElementById("native_full").style.color = "#30bbbb";
    
    if (xenophobia_pick > 1) {
        document.getElementById("native_passive").style.opacity = "0.4";
        document.getElementById("native_active").style.opacity = "0.4";
        document.getElementById("native_full").style.fontWeight = "bold";
        document.getElementById("native_full").style.color = "#30bbbb";
    };
    if (xenophobia_pick == 1) {
        document.getElementById("native_passive").style.opacity = "1.0";
        document.getElementById("native_active").style.opacity = "1.0";
        document.getElementById("native_full").style.fontWeight = "bold";
        document.getElementById("native_full").style.color = "#30bbbb";
    };
    if (xenophobia_pick < 0 || militarisim_pick < 0) {
        document.getElementById("native_full").style.fontWeight = "normal";
        document.getElementById("native_full").style.color = "#40cb90";
        document.getElementById("native_full").style.opacity = "0.4";
        document.getElementById("native_passive").style.fontWeight = "bold";
        document.getElementById("native_passive").style.color = "#30bbbb";
    };
};

function enlightenment() {
    document.getElementById("enlightenment_allow").style.opacity = "1.0";
    document.getElementById("enlightenment_not_allow").style.opacity = "1.0";
    document.getElementById("enlightenment_not_allow").style.fontWeight = "bold";
    document.getElementById("enlightenment_not_allow").style.color = "#30bbbb";
    
    if (xenophobia_pick > 1) {
        document.getElementById("enlightenment_allow").style.opacity = "0.4";
        document.getElementById("enlightenment_allow").style.fontWeight = "normal";
        document.getElementById("enlightenment_allow").style.color = "#40cb90";
    };
};

function migration() {
    document.getElementById("no_migrate").style.opacity = "1.0";
    document.getElementById("no_migrate").style.fontWeight = "bold";
    document.getElementById("no_migrate").style.color = "#30bbbb";
    document.getElementById("primary_migrate").style.opacity = "1.0";
    document.getElementById("primary_migrate").style.fontWeight = "normal";
    document.getElementById("primary_migrate").style.color = "#40cb90";
    document.getElementById("free_migrate").style.opacity = "1.0";
    document.getElementById("free_migrate").style.fontWeight = "normal";
    document.getElementById("free_migrate").style.color = "#40cb90";
    
    // individualisim and xenophilia
    if (individuality_pick > 0 || xenophobia_pick < 0) {
        document.getElementById("no_migrate").style.fontWeight = "normal";
        document.getElementById("no_migrate").style.color = "#40cb90";
        document.getElementById("free_migrate").style.fontWeight = "bold";
        document.getElementById("free_migrate").style.color = "#30bbbb";
    };
    if (individuality_pick > 1) {
        document.getElementById("no_migrate").style.fontWeight = "normal";
        document.getElementById("no_migrate").style.color = "#40cb90";
        document.getElementById("no_migrate").style.opacity = "0.4";
    };
    // xenophobia
    if (xenophobia_pick > 0) {
        document.getElementById("no_migrate").style.fontWeight = "normal";
        document.getElementById("no_migrate").style.color = "#40cb90";
        document.getElementById("primary_migrate").style.fontWeight = "bold";
        document.getElementById("primary_migrate").style.color = "#30bbbb";
        document.getElementById("free_migrate").style.fontWeight = "normal";
        document.getElementById("free_migrate").style.color = "#40cb90";
    };
    if (xenophobia_pick > 1) {
        document.getElementById("free_migrate").style.opacity = "0.4";
        document.getElementById("free_migrate").style.fontWeight = "normal";
        document.getElementById("free_migrate").style.color = "#40cb90";
    };
    // collectivisim
    if (individuality_pick < 0) {
        document.getElementById("no_migrate").style.opacity = "1.0";
        document.getElementById("no_migrate").style.fontWeight = "bold";
        document.getElementById("no_migrate").style.color = "#30bbbb";
        document.getElementById("primary_migrate").style.opacity = "1.0";
        document.getElementById("primary_migrate").style.fontWeight = "normal";
        document.getElementById("primary_migrate").style.color = "#40cb90";
        
        // collectivisim interacting with xenophobia and xenophilia
        if (xenophobia_pick > 1) {
            document.getElementById("free_migrate").style.opacity = "0.4";
            document.getElementById("free_migrate").style.fontWeight = "normal";
            document.getElementById("free_migrate").style.color = "#40cb90";
        };
        if (xenophobia_pick < 0) {
            document.getElementById("free_migrate").style.opacity = "1.0";
            document.getElementById("free_migrate").style.fontWeight = "normal";
            document.getElementById("free_migrate").style.color = "#40cb90";
        };
    };
};

function resettle() {
    document.getElementById("no_resettle").style.opacity = "1.0";
    document.getElementById("no_resettle").style.fontWeight = "bold";
    document.getElementById("no_resettle").style.color = "#30bbbb";
    document.getElementById("resettle").style.opacity = "1.0";
    document.getElementById("resettle").style.fontWeight = "normal";
    document.getElementById("resettle").style.color = "#40cb90";
    
    if (individuality_pick < 0 || xenophobia_pick > 0) {
        document.getElementById("resettle").style.opacity = "1.0";
        document.getElementById("resettle").style.fontWeight = "bold";
        document.getElementById("resettle").style.color = "#30bbbb";
        document.getElementById("no_resettle").style.opacity = "1.0";
        document.getElementById("no_resettle").style.fontWeight = "normal";
        document.getElementById("no_resettle").style.color = "#40cb90";
    };
    if (individuality_pick > 0) {
        document.getElementById("resettle").style.opacity = "0.4";
        document.getElementById("resettle").style.fontWeight = "normal";
        document.getElementById("resettle").style.color = "#40cb90";
        document.getElementById("no_resettle").style.opacity = "1.0";
        document.getElementById("no_resettle").style.fontWeight = "bold";
        document.getElementById("no_resettle").style.color = "#30bbbb";
    };
};

function voting() {
    document.getElementById("voting_none").style.opacity = "0.4";
    document.getElementById("voting_none").style.fontWeight = "normal";
    document.getElementById("voting_none").style.color = "#40cb90";
    
    document.getElementById("voting_elite").style.opacity = "0.4";
    document.getElementById("voting_elite").style.fontWeight = "normal";
    document.getElementById("voting_elite").style.color = "#40cb90";
    
    document.getElementById("voting_primary").style.opacity = "0.4";
    document.getElementById("voting_primary").style.fontWeight = "normal";
    document.getElementById("voting_primary").style.color = "#40cb90";
    
    document.getElementById("voting_free").style.opacity = "0.4";
    document.getElementById("voting_free").style.fontWeight = "normal";
    document.getElementById("voting_free").style.color = "#40cb90";
    
    var autocracies = [
        "despotic-empire",
        "despotic-hegemony",
        "divine-mandate",
        "enlightened-monarchy"
    ];
    var oligarchies  = [
        "plutocratic-oligarchy",
        "military-dictatorship", // The game counts this as an oligarchy for voting policy purposes even though it is really an autocracy.
        "theocratic-oligarchy",
        "science-directorate",
        "military-junta",
        "peaceful-bureaucracy"
    ];
    var democracies = [
        "indirect-democracy",
        "direct-democracy",
        "military-republic",
        "theocratic-republic",
        "moral-democracy",
    ];
    
    var i = 0;
    
    for (i = 0; i < autocracies.length; i++) {
        if (government_pick == autocracies[i]) {
            document.getElementById("voting_none").style.opacity = "1.0";
            document.getElementById("voting_none").style.fontWeight = "bold";
            document.getElementById("voting_none").style.color = "#30bbbb";
            break;
        };
    };
    for (i = 0; i < oligarchies.length; i++) {
        if (government_pick == oligarchies[i]) {
            document.getElementById("voting_elite").style.opacity = "1.0";
            document.getElementById("voting_elite").style.fontWeight = "bold";
            document.getElementById("voting_elite").style.color = "#30bbbb";
            break;
        };
    };
    for (i = 0; i < democracies.length; i++) {
        if (government_pick == democracies[i]) {
            document.getElementById("voting_free").style.opacity = "1.0";
            document.getElementById("voting_free").style.fontWeight = "bold";
            document.getElementById("voting_free").style.color = "#30bbbb";
            document.getElementById("voting_primary").style.opacity = "1.0";
            // xenophobia interacting with a democratic government
            if (xenophobia_pick > 0) {
                document.getElementById("voting_free").style.opacity = "1.0";
                document.getElementById("voting_free").style.fontWeight = "normal";
                document.getElementById("voting_free").style.color = "#40cb90";
                document.getElementById("voting_primary").style.opacity = "1.0";
                document.getElementById("voting_primary").style.fontWeight = "bold";
                document.getElementById("voting_primary").style.color = "#30bbbb";
            };
            if (xenophobia_pick > 1) {
                document.getElementById("voting_free").style.opacity = "0.4";
            };
            break;
        };
    };
};

function leadership() {
    document.getElementById("leaders_primary").style.opacity = "1.0";
    document.getElementById("leaders_primary").style.fontWeight = "bold";
    document.getElementById("leaders_primary").style.color = "#30bbbb";
    document.getElementById("leaders_xenos").style.opacity = "1.0";
    document.getElementById("leaders_xenos").style.fontWeight = "normal";
    document.getElementById("leaders_xenos").style.color = "#40cb90";
    document.getElementById("leaders_robots").style.opacity = "1.0";
    document.getElementById("leaders_robots").style.fontWeight = "normal";
    document.getElementById("leaders_robots").style.color = "#40cb90";
    document.getElementById("leaders_all").style.opacity = "1.0";
    document.getElementById("leaders_all").style.fontWeight = "normal";
    document.getElementById("leaders_all").style.color = "#40cb90";
    
    if (xenophobia_pick > 1) {
        document.getElementById("leaders_xenos").style.opacity = "0.4";
        document.getElementById("leaders_all").style.opacity = "0.4";
    };
};

function enhancement() {
    document.getElementById("leaders_natural").style.opacity = "1.0";
    document.getElementById("leaders_natural").style.fontWeight = "bold";
    document.getElementById("leaders_natural").style.color = "#30bbbb";
    document.getElementById("leaders_selected").style.opacity = "1.0";
    document.getElementById("leaders_selected").style.fontWeight = "normal";
    document.getElementById("leaders_selected").style.color = "#40cb90";
    document.getElementById("leaders_capacity").style.opacity = "1.0";
    document.getElementById("leaders_capacity").style.fontWeight = "normal";
    document.getElementById("leaders_capacity").style.color = "#40cb90";
};

function contact(){
    document.getElementById("contact_peaceful").style.opacity = "1.0";
    document.getElementById("contact_peaceful").style.fontWeight = "bold";
    document.getElementById("contact_peaceful").style.color = "#30bbbb";
    document.getElementById("contact_aggressive").style.opacity = "1.0";
    document.getElementById("contact_aggressive").style.fontWeight = "normal";
    document.getElementById("contact_aggressive").style.color = "#40cb90";
    
    if (militarisim_pick > 0 || xenophobia_pick > 0) {
        document.getElementById("contact_aggressive").style.opacity = "1.0";
        document.getElementById("contact_aggressive").style.fontWeight = "bold";
        document.getElementById("contact_aggressive").style.color = "#30bbbb";
        document.getElementById("contact_peaceful").style.opacity = "1.0";
        document.getElementById("contact_peaceful").style.fontWeight = "normal";
        document.getElementById("contact_peaceful").style.color = "#40cb90"
    };
};

function ai(){
    document.getElementById("ai_outlawed").style.opacity = "1.0";
    document.getElementById("ai_outlawed").style.fontWeight = "bold";
    document.getElementById("ai_outlawed").style.color = "#30bbbb";
    document.getElementById("ai_servitude").style.opacity = "1.0";
    document.getElementById("ai_servitude").style.fontWeight = "normal";
    document.getElementById("ai_servitude").style.color = "#40cb90";
    document.getElementById("ai_citizen").style.opacity = "1.0";
    document.getElementById("ai_citizen").style.fontWeight = "normal";
    document.getElementById("ai_citizen").style.color = "#40cb90";
    
    if (spirituality_pick > 0) {
        document.getElementById("ai_servitude").style.opacity = "1.0";
        document.getElementById("ai_servitude").style.fontWeight = "bold";
        document.getElementById("ai_servitude").style.color = "#30bbbb";
        document.getElementById("ai_outlawed").style.opacity = "1.0";
        document.getElementById("ai_outlawed").style.fontWeight = "normal";
        document.getElementById("ai_outlawed").style.color = "#40cb90";
    };
};