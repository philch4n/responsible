---------------------------------
---------------------------------
JSCS for Sublime 3
---------------------------------
---------------------------------
~ Plugin for SublimeLinter to utilize jscs (linting)
~ Used for files with the following syntax: 
  - Javascript “
  - JavaScript Next
  - JavaScript (JSX)
  - JavaScript (Babel) 

---------------------------------
Installation
---------------------------------
~ Must have jcsc installed on system
  1. Install Node.js (and npm on Linux)
  2. Install jscs: 
    $ npm install -g jscs
    - If you are using zsh and on-my-zsh, do not load the nvm plugin for oh-my-zsh
    - Note: This plugin requires jscs 1.0.10 or later, though it requires 1.9.0 or later for JSX support 
~ Must have SublimeLinter 3
~ To Install Plugin
  1. In SublimeText, open Command Palette (shift + command + P)
  2. Type 'install'
  3. Click on 'Package Control: Install Package'
  4. When plugin list appears, type 'jscs'
  5. Click on 'SublimeLinter-jscs'