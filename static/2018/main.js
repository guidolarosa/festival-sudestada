(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
    // Scroll to animation for the navbar

    $('.navbar a').click(function () {
        let target = $(this)[0].attributes[1].nodeValue;
        $([document.documentElement, document.body]).animate({
            scrollTop: $("." + target).offset().top
        }, 1000);
    });

    // Show navbar when clicking the menu container

    $('.display-menu-container').click(function () {
        $('.navbar-container').toggleClass('navbar-show');
    });

    // Do when all images are loaded

    setTimeout(function () {
        $('.loading-overlay').css({ opacity: 0 });
        // Load AOS
        AOS.init();
        // Remove overlay
    }, 500);

    setTimeout(function () {
        $('.loading-overlay').css({ display: "none" });
    }, 1000);

    // Créditos

    console.log("Diseño por Pablo Picyk");
    console.log("http://www.pablopicyk.com.ar/");
    console.log('');
    console.log("Desarrollo web por Guido La Rosa");
    console.log("http://www.guidolarosa.tumblr.com");
});
},{}]},{},[1])