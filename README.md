# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Ethan Wong

Time spent: 30 hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

https://glitch.com/edit/#!/blossom-noble-darkness

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Added a counter to display the number of strikes remaining

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

Win game feature (2x Speed) 
![](gif1-link-here) ![](https://i.imgur.com/89GPfjT.gif)


Strikes feature 
![](gif2-link-here) ![](https://i.imgur.com/1Ddxp1r.gif)


Timer feature
![](gif3-link-here) ![](https://i.imgur.com/yve76so.gif)


Start and stop feature 
![](gif4-link-here) ![](https://i.imgur.com/5mNLQhp.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
https://www.w3schools.com/jsref/met_win_clearinterval.asp
https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

 One of the challenges I came across was when I was implementing my own sound for the buttons. One of the issues I delt with was first finding an audio file that would work appropriately. I realized I needed a sound that was continuous and clear and didnt trail off as those sounds could confuse the user. Another issue I ran into was I didn't know how to start and pause my audio. I was able to find out how to do this just by reseraching the topic which led me to the play and pause methods. The next problem I ran into was that my audio wouldn't reset so in order to fix that issue I used currentTime to reset the time on my audio to 0 after everytime I stopped it. 
  The second challenge I ran into was creating the timer. I found writing the function for the timer to be relatively easy as I simply needed to decriment the timer by 1 and display the value every second using the setInterval method. The part I found tricky was knowing when to set, stop and reset the timer. One of the biggest issues with this was I had a problem where the timer would start counting down before the computer was done giving out the pattern. I eventually realized that the setTimeout method was causing a delay that I needed to account for. Therefore I had to use another setTimeout method on my startTimer funciton in order to account for this delay to make sure my timer only started counting down after the computer had finished playing the sequence. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

One question I would have is how a webpage becomes public and how certain webpages appear first before others when doing a search online. Another question I would have is which languages are most commonly used in web development and what their specific advantages and purposes are. I was wondering if there are any other uses for HTML, Javascript, and CSS other than web development. I am also curious about how certain websites can obtain a users data or track its users. 
 
4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I would make it so that the game would continue until failure, and I would do so by implementing a stack with a singly linked list. I would randomly generate a number and place it in the stack to continually add to the sequence. I would also let the user customize some aspects of the game such as the number of buttons from a certain range or the number of strikes allowed. This would allow the user to add to or lessen the difficulty of the game. I would also change how the buttons are pressed by mapping the buttons to keys. This way the user won't have to drag their cursor to press them allowing them to press each button much faster. I would most likley want to map the buttons to the numeric keyboard. I would also take the time to add a ticking noise to the timer that gets louder or changes sound when the time is about to expire. If I chose to make my game continue until failure I would also need to make sure I increase the time given to appropriately match the length of the sequence needed.



## Interview Recording URL Link

[My 5-minute Interview Recording] https://www.loom.com/share/8c990c2f68a244769e2dd36a39b6b67a


## License

    Copyright Ethan Wong

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.






