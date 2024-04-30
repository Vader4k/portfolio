import array from '../assets/images/array.jpg'
import keyboard from '../assets/images/keyboard.jpg'
import loop from '../assets/images/loop.jpg'
import tethral from '../assets/images/tethral.jpg' 

export const NavLinks = [
    {
        id: 1,
        text: 'G H',
        path: 'https://github.com/vader2k'
    },
    {
        id: 2,
        text: 'L I',
        path: 'https://www.linkedin.com/in/odukwe-daniel-09920a286/'
    },
    {
        id: 3,
        text: 'T W',
        path: 'https://twitter.com/kingdanny295'
    }
]

export const pages = [
    {
        id: 1,
        text: 'WORKS',
        path: '/works'
    },
    {
        id: 2,
        text: 'ABOUT',
        path: '/about'
    },
    {
        id: 3,
        text: 'ARTICLES',
        path: '/articles'
    },
    {
        id: 4,
        text: 'CONTACT',
        path: '/contact'
    }
]

export const projetcs = [
    {
        id: 1,
        text: 'SUMMARIZER',
        path: '/project/summarizer'
    },
    {
        id: 2,
        text: 'ANONSTORE',
        path: '/project/anon'
    },
    {
        id: 3,
        text: 'MEDICARE',
        path: '/project/medicare'
    },
    {
        id: 4,
        text: 'HOOBANK',
        path: '/project/hoobank'
    },
    {
        id: 5,
        text: 'FRIENDS',
        path: '/project/friends'
    },
    {
        id: 6,
        text: 'Dreally',
        path: '/project/dreally'
    },
    {
        id: 7,
        text: 'COINKING',
        path: '/project/coinking'
    },
    {
        id: 8,
        text: 'DICTIONARY',
        path: '/project/dictionary'
    }
]

export const articles = [
    {
        id: 1,
        title: 'The secrets to mastering any framework with ease.',
        path: 'https://tethral.com/the-secrets-to-mastering-any-framework-with-ease/',
        text: "Welcome to the exciting world of software engineering, where the learning journey never really stops! Let’s dive into 10 super-friendly roadmap to grasp any technology and become a maestro in record time.",
        timer: '3 Minutes Read',
        img: tethral
    },
    {
        id:2,
        title: 'Understanding keyboard events in javascript',
        path: 'https://www.showwcase.com/article/34387/understanding-keyboard-events-in-javascript',
        text: 'In JavaScript, keyboard events are used to detect when a user presses or releases a key on their keyboard. This is useful in various scenarios, particularly in web applications where users may need to input text or navigate through keyboard shortcuts',
        timer: '3 Minutes Read',
        img: keyboard
    },
    {
        id: 3,
        title: 'manipulating arrays using array methods in JavaScript',
        path: 'https://kingvader.hashnode.dev/how-to-manipulate-arrays-using-array-methods-in-javascript',
        text: 'An array is a data structure that stores a collection of values such as numbers, strings, objects, and other arrays.The values in an array are organized linearly and can be accessed by their index, which is their numerical position on the array.This article will closely examine some of the most commonly used array methods and their functions.',
        timer: '5 Minutes Read',
        img: array
    },
    {
        id: 4,
        title: 'Understanding Loops in JavaScript.',
        path: 'https://www.showwcase.com/article/34525/understanding-loops-in-javascript',
        text: 'Loops in JavaScript are control structures that allows for the execution of a block of code repeatedly. Basically, loops are useful when running a particular operation multiple times. Loops are very useful in programming because it automates task that would take a lot of time and effort to manually accomplish.',
        timer: '3 Minutes Read',
        img: loop
    }
]