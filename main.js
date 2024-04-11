import './styles.scss'
import './bootstrap/dist/css/bootstrap.css'
import './bootstrap/dist/js/bootstrap.js'
import './assets/css/main.css'

// Skills section - selecting a skill will display a description of that skill
var skillCSharp = document.getElementById('skill-c-sharp');
var skillJS = document.getElementById('skill-js');
var skillC = document.getElementById('skill-c');
var skillCplusplus = document.getElementById('skill-c-plusplus');

var skillDescription = document.getElementById('skill-description');

skillDescription.style.display = 'none';

skillCSharp.addEventListener('click', function() {
  skillDescription.style.display = 'block';
  skillDescription.innerHTML = 'C# is a general-purpose, multi-paradigm programming language encompassing strong typing, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.';
});

skillJS.addEventListener('click', function() {
  skillDescription.style.display = 'block';
  skillDescription.innerHTML = 'JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.';
});

skillC.addEventListener('click', function() {
  skillDescription.style.display = 'block';
  skillDescription.innerHTML = 'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.';
});

skillCplusplus.addEventListener('click', function() {
  skillDescription.style.display = 'block';
  skillDescription.innerHTML = 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".';
});

