// These variables fetch some HTML elements for you to use in the exercise
import {StoryGenerator} from "./StoryGenerator";

const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const NAMES = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const PLACES = ['the soup kitchen', 'Disneyland', 'the White House'];
const ACTIONS = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
const STORY_TEMPLATE = `It was :temperature: outside, so :name: went for a walk. When they got to :place:, they stared in horror for a few moments, then :action:. :nameBox: saw the whole thing, but was not surprised. :name: weighs :weight:, and it was a hot day.`;

const storyGenerator = new StoryGenerator(STORY_TEMPLATE, NAMES, PLACES, ACTIONS);

// This function is used to generate a random background color for the story placeholder
function setRandomBackgroundOn(element) {
  element.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

/*
  This part of the code adds a click event listener to the randomize button
  and executes some demo code
*/
randomize.addEventListener('click', () => {
  story.textContent = storyGenerator.generateRandomStory();
  setRandomBackgroundOn(story);
});

// These variables contain some random names, places and actions, and the story template with placeholders in the form of :placeholder:
