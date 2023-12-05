// FINAL CODE ✨

// Step 1: Get necessary DOM elements
const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");

// Step 2: Start with an introduction and ask for user's name
addMessage(`Hi there, I am MAKA the chatbot. I am a Mindful Assistant for Kinder Assertiveness. What is your name?`);

// Step 3: Add event listener to handle user input
function handleUserInput(event) {
  if (event.key === "Enter") {
    processUserInput();
    userInput.removeEventListener("keydown", handleUserInput);
  }
}
userInput.addEventListener("keydown", handleUserInput);

// Step 4: Ask to see if the user wants to change the background
function processUserInput() {
  userName = userInput.value; // storing user's name to add more personalizaiton later on
  addMessage(`💁🏻‍♀️ Hey ${userName}, it's so nice to meet you! 
  Would you like to change the background to a color that makes you feel more comfortable? 🤗`);
  userInput.value = "";
}

// Step 5: Responding to the change background request
function addMessage(message) {
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  if (message.toLowerCase().includes("background")) {
    const buttonPink = createResponseButton("bubble gum pink");
    const buttonBlue = createResponseButton("sky blue");
    const buttonGreen = createResponseButton("green");
    const buttonPurple = createResponseButton("purple")
    const buttonBlack = createResponseButton("black");
    const buttonAsis = createResponseButton("keep it as is");

    buttonPink.addEventListener("click", function() {
      changeBackgroundColor("pink", "black");
      askConversationQuestion();
    });
    buttonBlue.addEventListener("click", function() {
      changeBackgroundColor("PaleTurquoise", "black");
      askConversationQuestion();
    });
    buttonGreen.addEventListener("click", function() {
      changeBackgroundColor("YellowGreen", "black");
      askConversationQuestion();
    }); 
    buttonPurple.addEventListener("click", function() {
      changeBackgroundColor("plum", "black");
      askConversationQuestion();
    }); 
    buttonBlack.addEventListener("click", function() {
      changeBackgroundColor("black", "white");
      askConversationQuestion();
    });
    buttonAsis.addEventListener("click", function() {
      changeBackgroundColor("white", "black");
      askConversationQuestion();
    });

    chatWindow.appendChild(buttonPink);
    chatWindow.appendChild(buttonBlue);
    chatWindow.appendChild(buttonGreen);
    chatWindow.appendChild(buttonPurple);
    chatWindow.appendChild(buttonBlack);
    chatWindow.appendChild(buttonAsis);
  }
}

// Step 6a: Function to ask conversation question
function askConversationQuestion() {
  addMessage(`Great choice, 💁🏻‍♀️ ${userName}! Now that's done, shall we practice some conversations today?`);
  const yesButton = createResponseButton("Yes");
  const noButton = createResponseButton("No");

  yesButton.addEventListener("click", function() {
    const messages = [
    `Great! 💁🏻‍♀️ ${userName}, let's get started!`, 
    `Today, let's practice meeting someone new.`,
    `Take a look at the three scenarios below.`,
    `When you are in a new place and you don't know anyone,`,
    `💁🏻‍♀️ ${userName}, what makes you feel hesitant to talk to new people?`,
    `Click on one of the buttons to keep going.`,
    ];
    
    let messageIndex = 0; 
    
      function displayNextMessage() {
        if (messageIndex < messages.length) {
          addMessage(messages[messageIndex]);
          messageIndex++; 
          setTimeout(displayNextMessage, 1000); // Time to wait before displaying next message
        } else {
        const button1 = createResponseButton("I don't know what to say");
        const button2 = createResponseButton("I don't speak the language well");
        const button3 = createResponseButton("I feel shy about talking to new people");
      
        button1.addEventListener("click", function() {
          const button1Messages = [
          `💁🏻‍♀️ ${userName}, that's completely understandable and very common.`,
          `It can be challenging to come up with things to say when we are in new situations.`,
          `Practice can help improve your conversation skills!`,
          `Here are a few pointers for you to try:`,
          `👖 Have some conversation topics in your back pocket. For example, the weather, latest shows, etc.`,
          `💬 Have relevant conversation topics that are related to the event you are at.`,
          `For example, if you are at a JavaScript conference,`,
          `you can ask people about what they think about the conference, new product announcement, tips, etc.`,
          `🙋🏻‍♀️ Ask people open-ended questions and listen.`,
          `If all else fails, smile and nod always work pretty well.😊😉`,
          `To prepare yourself before attending the event, you can start by thinking a topic that you are comfortable with.`,
          `Then, come up with three things you can chat to people about that topic.`,
          `Then, come up with another new topic, then three things about that topic, and so on.`,
          ];

          let button1MessageIndex = 0; 

          function displayButton1NextMessage() {
            if (button1MessageIndex < button1Messages.length) {
              addMessage(button1Messages[button1MessageIndex]);
              button1MessageIndex++; 
              setTimeout(displayButton1NextMessage, 1000); 
            }
            else {
              askAdditionalChoices(); // Once all messages are displayed, call this function
            }
          }
        
          displayButton1NextMessage(); // Start displaying messages
        });      
      
        button2.addEventListener("click", function() {
          const button2Messages = [
          `Hey 💁🏻‍♀️ ${userName}, believe it or not, many people share the same fear around this!`,
          `Language barriers can make it difficult to communicate effectively,`,
          `because we are afraid to say the wrong things.`,
          `But that's totally okay! Even native speakers can make very common mistakes.`,
          `🗣️ The key is to practice!`,
          `With practice, you can overcome this challenge and become more confident with speaking a foreign language.`,
          ``,
          `Here are a few tips from the personal experiences of Cindy Lin, the creator of this chatbot.`,
          `Cindy was an immigrant to the United States from Taiwan in the mid 90s. At the time,`,
          `her English level was only at a 4th grader's level.`,
          `She was able to utilize these strategies below to excel to a 12th grader's level within a year.`,
          `"📺 I learned English by watching the TV show Friends with subtitles on."`,
          `"This way, I learned conversational English while learning new vocabulary, tone and how people communicate, make jokes, etc."`,
          `"📚 I also read children's books, one book a day."`,
          `When Cindy moved to France in 2017 to study photography, she had only learned French for one semester in high school.`,
          `This was 20 years ago!`,
          `She used the strategies below to speak French for doing day-to-day things like`, 
          `ordering food in a restaurant, buying groceries, hold simple conversations, etc.`,
          `"💻 I used meetup.com to find language meetups where I can meet new friends and practice the language."`,
          `"I tried reading local newspapers and looked up any words I didn't understand."`,
          `"I listened to a lot of radio and songs and watched shows in French to get the tone."`,
          `"👩🏻‍🏫 I found a tutor and start practicing speaking, especially for the day-to-day conversations."`,
          `"The French people can seem intimidating but I usually tried to speak French as much as I could."`,
          `"I also apologize for my poor French at the start. A lot of people find that endearing and help me practice."`,
          `"I also find that a lot of French people actually want to practice English, so I would speak French and they responded in English."`,
          `Ultimately, the more you use the language every day, the easier it will be.`,
          `Most people are a lot friendlier than you think, and they are happy to help you.`,
          `Of course, there are also terrible poeple who would laugh at you.`,
          `But they are strangers and you will never see them again! So don't worry about what they think. 😜`,
          ``,
          `Regardless your reason for feeling uncomfortable to speak in a new setting,`,
          `we can start by preparing ourselves with conversation topics that can help to break the ice.🧊`,
          ];
          
          let button2MessageIndex = 0; 

          function displayButton2NextMessage() {
            if (button2MessageIndex < button2Messages.length) {
            addMessage(button2Messages[button2MessageIndex]);
            button2MessageIndex++; 
            setTimeout(displayButton2NextMessage, 1000); 
            }
            else {
              askAdditionalChoices();
            }
          }

          displayButton2NextMessage(); 
        });

      
        button3.addEventListener("click", function() {
          const button3Messages = [
          `💁🏻‍♀️ ${userName}, I get you. Feeling shy is natural, especially when interacting with new people.`,
          `🎗️ Remember, everyone feels a little nervous at times. Take small steps and gradually build your confidence.`,
          `Here are a few strategies for you:`,
          `👂🏻 Start small, actively listen for clues on what they are interested in.`,
          `💁🏻‍♀️ Ask open-ended questions to get more information.`,
          `🫱🏼 Use your common grounds and start conversations from there.`,
          `Regardless your reason for feeling uncomfortable to speak in a new setting,`,
          `we can start by preparing ourselves with conversation topics that can help to break the ice.`
          ];

          let button3MessageIndex = 0; 

          function displayButton3NextMessage() {
            if (button3MessageIndex < button3Messages.length) {
            addMessage(button3Messages[button3MessageIndex]);
            button3MessageIndex++; 
            setTimeout(displayButton3NextMessage, 1000); 
            }
            else {
              askAdditionalChoices(); 
            }
          }

          displayButton3NextMessage(); 
        });
        
        
        chatWindow.appendChild(button1);
        chatWindow.appendChild(button2);
        chatWindow.appendChild(button3);
      }
    }
    
    displayNextMessage(); 
  });

    // Response when the user clicks "no"
    noButton.addEventListener("click", function() {
      addMessage(`Awww 💁🏻‍♀️ ${userName}! Bummer. I was hoping to practice some conversations today. Have a great day! 😊👋`);
    });
  
    // Yes/ no button for practicing conversations
    chatWindow.appendChild(yesButton);
    chatWindow.appendChild(noButton);

  }


// Step 6b: askAdditionalChoices() function: Additional convo topics to practice for the user
// The askAdditionalChoices() function is called at the end of each of the three scenairos
// Using the same function/code structure in Step 6, just changing the variable names
// At the end of each choice, the conversation is wrapped up with encouragement

function askAdditionalChoices() {
  const convoTopicIntro = [
    `Now 💁🏻‍♀️ ${userName}, let's explore some common topics for breaking the ice with strangers.`, 
    `These topics are fantastic icebreakers because they are relatable and provide common ground for conversation.`,
    `They allow people to share their opinions, preferences, and experiences,`,
    `fostering a sense of connection and sparking engaging discussions.`,
    `Whether it's discussing the latest episode of a popular show or sharing thoughts on a trending song,`,
    `these topics can help initiate conversations and create a friendly atmosphere for people to connect and get to know each other better.`,
    `Go ahead and pick one that works for you. ❤️`];

  let convoTopicIntroIndex = 0;

  function displayConvoTopicIntro() {
    if (convoTopicIntroIndex < convoTopicIntro.length) {
      addMessage(convoTopicIntro[convoTopicIntroIndex]);
      convoTopicIntroIndex++;
      setTimeout(displayConvoTopicIntro, 1000);
    } else {
      const buttonWeather = createResponseButton("⛈️ weather");
      const buttonNews = createResponseButton("📰 current news");
      const buttonEntertainment = createResponseButton("👯‍♀️ entertainment");
      const buttonThings = createResponseButton("👋 how are things");
      const buttonExpertise = createResponseButton("🧪 expertise");

      buttonWeather.addEventListener("click", function () {
        const buttonWeatherMessages = [
        `Discussin the weather is a very common topic!`,
        `People often bond over this, especially if you live somewhere that has bad weather all the time.`,
        `For example, London 🇬🇧`,
        `Do you notice how the British always like to start the conversation by complaining about the weather?`,
        `The shared hatred towards gloomy weather forms an instant bond 🤣`,
        `Here are some examples you can use: "I heard it's going to rain tomorrow. Do you have any plans?"`,
        `"I love this weather. It's perfect for a walk in the park. How about you? Anything exciting today?"`,
        `"The weather forecast says it's going to be hot this weekend. Any weekends plan ahead?"`,
        `"I can't wait for spring to arrive. I miss seeing flowers in bloom. What are some of your favorite flowers?"`,
        ``,
        `Notice that we end each sentence with a question that keeps the conversation going. 😉`,
        `Or, you can simply do what the Brits do and say:`,
        `"OH THIS BLOODY WEATHER!"`,
        `People will most likely start agreeing with you and then you can complain about the weather together to break the ice.`,
        ``,
        `This is a great way to learn more about the person you are talking to and`,
        `keeping the conversation going by asking open-ended questions.`,
        ``,
        `💁🏻‍♀️ ${userName}, it's been a wonderful chatting with you today!`,
          `Remember, having conversations is a tool to help you broadening your horizons.`,
          `If you ever feel uncomfortable or overwhelmed during a conversation,`,
          `it is PERFECTLY OKAY to step away from the conversation.`,
          `Simply excuse yourself and walk away. Regroup in a quiet space, breathe, drink water, whatever you need to do.`,
          `Here are a few things you can say:`,
          `"Hey, it was so great chatting with you. Excuse me, I need to make a quick call."`,
          `"It was so nice meeting you. I need to get a refill of my drink."`,
          `"Excuse me, I need to use the bathroom."`,
          `If you ever need someone to talk to or practice conversations with, I'll be here.`,
          `You are doing great, and I believe in you! (*•̀ᴗ•́*)و ̑̑ (*^▽^*) ┌(˘⌣˘)ʃ (👍^_^)👍 `,
          `Take care and have a wonderful day! 🌟👋`
        ];

        let buttonWeatherMessageIndex = 0;

        function displayButtonWeatherNextMessage() {
          if (buttonWeatherMessageIndex < buttonWeatherMessages.length) {
            addMessage(buttonWeatherMessages[buttonWeatherMessageIndex]);
            buttonWeatherMessageIndex++;
            setTimeout(displayButtonWeatherNextMessage, 1000);
          }
        }

        displayButtonWeatherNextMessage();
      });

      buttonNews.addEventListener("click", function () {
        const buttonNewsMessages = [
         `Discussing current news is also another way to get people talking. For example:`,
         `"It seems like there's a new story every day about the impact of [TOPIC] on society. What do you think about it?"`,
         `"I read an interesting article today about [TOPIC]. It's fascinating how fast things are changing. What do you think?"`,
         `"Did you hear about [AN EVENT]? What do you think about it?"`,
         ``,  
         `Notice that we end each sentence with a question that keeps the conversation going. 😉`,
         ``,  
         `This is a great way to learn more about the person you are talking to and keeping the conversation going by asking open-ended questions.`,
         ``,  
         `Keep in mind the current news can be controversial,`,
         `usually around the topic of politics and religion.`,
         `You can also stay on the general side of things to avoid possible conflicts.`,
         ``,
         `💁🏻‍♀️ ${userName}, it's been a wonderful chatting with you today!`,
          `Remember, having conversations is a tool to help you broadening your horizons.`,
          `If you ever feel uncomfortable or overwhelmed during a conversation,`,
          `it is PERFECTLY OKAY to step away from the conversation.`,
          `Simply excuse yourself and walk away. Regroup in a quiet space, breathe, drink water, whatever you need to do.`,
          `Here are a few things you can say:`,
          `"Hey, it was so great chatting with you. Excuse me, I need to make a quick call."`,
          `"It was so nice meeting you. I need to get a refill of my drink."`,
          `"Excuse me, I need to use the bathroom."`,
          `If you ever need someone to talk to or practice conversations with, I'll be here.`,
          `You are doing great, and I believe in you! (*•̀ᴗ•́*)و ̑̑ (*^▽^*) ┌(˘⌣˘)ʃ (👍^_^)👍 `,
          `Take care and have a wonderful day! 🌟👋`
        ];

        let buttonNewsMessageIndex = 0;

        function displayButtonNewsNextMessage() {
          if (buttonNewsMessageIndex < buttonNewsMessages.length) {
            addMessage(buttonNewsMessages[buttonNewsMessageIndex]);
            buttonNewsMessageIndex++;
            setTimeout(displayButtonNewsNextMessage, 1000);
          }
        }

        displayButtonNewsNextMessage();
      });

      buttonEntertainment.addEventListener("click", function () {
        const buttonEntertainmentMessages = [
          `Let's dive into the world of entertainment!`,
          `Whether it's the latest hit songs, the most talked-about TV shows, the latest exhibitions, or the must-see movies,`,
          `there's always something exciting to chat about and get everyone excited and engaged quickly.`,
          `Here are some things you can say to get it started:`,
          `"Have you seen the latest episode of [popular TV show]? The plot twists are mind-blowing!"`,
          `"I recently [saw/wathced] [movie/exhibition/live show/tv show]. It was so good! Have you seen it?"`,
          `"There's a new series everyone is talking about called [popular show]. I've heard great things about it! Have you seen it?"`,
          `"What's your favorite [movie/TV shows/books]? I'm always on the lookout for recommendations."`,
          ``,  
          `Notice that there is always an open-ended question in the sentence that keeps the conversation going. 😉`,
          ``,
          `This is a great way to learn more about the person you are talking to and`,
          `keeping the conversation going by asking open-ended questions.`,
          ``,  
          `💁🏻‍♀️ ${userName}, it's been a wonderful chatting with you today!`,
          `Remember, having conversations is a tool to help you broadening your horizons.`,
          `If you ever feel uncomfortable or overwhelmed during a conversation,`,
          `it is PERFECTLY OKAY to step away from the conversation.`,
          `Simply excuse yourself and walk away. Regroup in a quiet space, breathe, drink water, whatever you need to do.`,
          `Here are a few things you can say:`,
          `"Hey, it was so great chatting with you. Excuse me, I need to make a quick call."`,
          `"It was so nice meeting you. I need to get a refill of my drink."`,
          `"Excuse me, I need to use the bathroom."`,
          `If you ever need someone to talk to or practice conversations with, I'll be here.`,
          `You are doing great, and I believe in you! (*•̀ᴗ•́*)و ̑̑ (*^▽^*) ┌(˘⌣˘)ʃ (👍^_^)👍 `,
          `Take care and have a wonderful day! 🌟👋`
        ];

        let buttonEntertainmentMessageIndex = 0;

        function displayButtonEntertainmentNextMessage() {
          if (buttonEntertainmentMessageIndex < buttonEntertainmentMessages.length) {
            addMessage(buttonEntertainmentMessages[buttonEntertainmentMessageIndex]);
            buttonEntertainmentMessageIndex++;
            setTimeout(displayButtonEntertainmentNextMessage, 1000);
          }
        }

        displayButtonEntertainmentNextMessage();
      });

      buttonThings.addEventListener("click", function () {
        const buttonThingsMessages = [
          `Commiserating together is often a great way to bond.`,
          `This is also why complaining about the weather is great.`,
          `It is a common experience and there is no risk in offending anyone.`,
          `Whether it's about work, personal life, or simply how you're feeling today,`,
          `discussing "how are things?" can open the door to meaningful conversations and provide an opportunity to share and connect.`,
          ``,
          `Here are a few examples for you to try:`,
          `"UGH, it's been such a long week. How about you?"`,
          `"I've been taking up knitting to help me decompress. How about you? What do you do to decompress?"`,
          `"Work has been so hectic, but I'm managing. I'm looking forward to some downtime this weekend. What are you up to this weekend?"`,
          `"I've always wanted to try/learn [A HOBBY, SKILL, ETC.], have you done it before?"`,
          ``,
          `Notice that we end each sentence with a question that keeps the conversation going. 😉`,
          ``,  
          `This is a great way to learn more about the person you are talking to and`,
          `keeping the conversation going by asking open-ended questions.`,
          ``,  
          `💁🏻‍♀️ ${userName}, it's been a wonderful chatting with you today!`,
          `Remember, having conversations is a tool to help you broadening your horizons.`,
          `If you ever feel uncomfortable or overwhelmed during a conversation,`,
          `it is PERFECTLY OKAY to step away from the conversation.`,
          `Simply excuse yourself and walk away. Regroup in a quiet space, breathe, drink water, whatever you need to do.`,
          `Here are a few things you can say:`,
          `"Hey, it was so great chatting with you. Excuse me, I need to make a quick call."`,
          `"It was so nice meeting you. I need to get a refill of my drink."`,
          `"Excuse me, I need to use the bathroom."`,
          `If you ever need someone to talk to or practice conversations with, I'll be here.`,
          `You are doing great, and I believe in you! (*•̀ᴗ•́*)و ̑̑ (*^▽^*) ┌(˘⌣˘)ʃ (👍^_^)👍 `,
          `Take care and have a wonderful day! 🌟👋`
        ];

        let buttonThingsMessageIndex = 0;

        function displayButtonThingsNextMessage() {
          if (buttonThingsMessageIndex < buttonThingsMessages.length) {
            addMessage(buttonThingsMessages[buttonThingsMessageIndex]);
            buttonThingsMessageIndex++;
            setTimeout(displayButtonThingsNextMessage, 1000);
          }
        }

        displayButtonThingsNextMessage();
      });

      buttonExpertise.addEventListener("click", function () {
        const buttonExpertiseMessages = [
          `Asking people about their expertise is a great way to engage with them.`,
          `Whether it is a topic about their work, hobbies, favorite shows/books/movies,`,
          `they are sharing something they are passionate about with you. Just like the entertainment topic we explored before.`,
          ``,
          `Here are some of the things you can ask:`,
          `"Can you tell me a little bit more about [TOPIC]? I heard you are an expert on this."`,
          `"How do you find inspirations/ stay up to date about [TOPIC]?"`,
          `"Do you recommend any resources about [TOPIC]?"`,
          `"If I want to learn more about [TOPIC], how should I get started? What are your recommendations?"`,
          ``,
          `💁🏻‍♀️ ${userName}, it's been a wonderful chatting with you today!`,
          `Remember, having conversations is a tool to help you broadening your horizons.`,
          `If you ever feel uncomfortable or overwhelmed during a conversation,`,
          `it is PERFECTLY OKAY to step away from the conversation.`,
          `Simply excuse yourself and walk away. Regroup in a quiet space, breathe, drink water, whatever you need to do.`,
          `Here are a few things you can say:`,
          `"Hey, it was so great chatting with you. Excuse me, I need to make a quick call."`,
          `"It was so nice meeting you. I need to get a refill of my drink."`,
          `"Excuse me, I need to use the bathroom."`,
          `If you ever need someone to talk to or practice conversations with, I'll be here.`,
          `You are doing great, and I believe in you! (*•̀ᴗ•́*)و ̑̑ (*^▽^*) ┌(˘⌣˘)ʃ (👍^_^)👍 `,
          `Take care and have a wonderful day! 🌟👋`
        ];

        let buttonExpertiseMessageIndex = 0;

        function displayButtonExpertiseNextMessage() {
          if (buttonExpertiseMessageIndex < buttonExpertiseMessages.length) {
            addMessage(buttonExpertiseMessages[buttonExpertiseMessageIndex]);
            buttonExpertiseMessageIndex++;
            setTimeout(displayButtonExpertiseNextMessage, 1000);
          }
        }

        displayButtonExpertiseNextMessage();
      });
    

      chatWindow.appendChild(buttonWeather);
      chatWindow.appendChild(buttonNews);
      chatWindow.appendChild(buttonEntertainment);
      chatWindow.appendChild(buttonThings);
      chatWindow.appendChild(buttonExpertise);
    }
  }

  displayConvoTopicIntro();
  
}



// Helper function to change background color and text color
function changeBackgroundColor(backgroundColor, textColor) {
  document.body.style.backgroundColor = backgroundColor;
  document.body.style.color = textColor;
}

// Helper function to create response buttons
function createResponseButton(text) {
  const button = document.createElement("button");
  button.textContent = text;
  return button;
}


