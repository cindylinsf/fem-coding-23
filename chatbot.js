// current progress: conversations finished;
// line by line convo works in the buttons, but not for the topic conversations yet

// Step 1: Get necessary DOM elements
const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");
let userName;

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
  addMessage(`Hey ${userName}, it's so nice to meet you! 
  Would you like to change the background to something that makes you feel more comfortable? 🤗`);
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
    const buttonAsis = createResponseButton("Keep as is");

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

// Step 6: Function to ask conversation question
function askConversationQuestion() {
  addMessage(`Great choice, ${userName}!\nNow that's done, shall we practice some conversations today?`);
  const yesButton = createResponseButton("Yes");
  const noButton = createResponseButton("No");

  yesButton.addEventListener("click", function() {
    const messages = [
      `Great ${userName}, let's get started! We are going to start by practicing meeting someone new.
      When you are in a new place and you don't know anyone, ${userName}, what makes you feel hesitant to talk to people?`,
    ];
  
    let messageIndex = 0;
  
    function displayNextMessage() {
      if (messageIndex < messages.length) {
        addMessage(messages[messageIndex]);
        messageIndex++;
        setTimeout(displayNextMessage, 1000);
      }
    }
  
    displayNextMessage();

    const button1 = createResponseButton("I don't know what to say");
    const button2 = createResponseButton("I don't speak the language well");
    const button3 = createResponseButton("I feel shy to talk to new people");

    button1.addEventListener("click", function() {
      const messages = [
        `${userName}, that's completely understandable and very common.`,
        `It can be challenging to come up with things to say in new situations.`,
        `Practice and experience can help improve your conversation skills!`,
        `Can we try a few things here:`,
        `1. Have some conversation topics in your back pocket. For example, the weather, latest shows, etc.`,
        `2. Have relevant conversation topics that relate to the event.`
        `For example, if you are at a JavaScript conference,`,
        `you can talk about what others think about the new announcements.`,
        `3. Ask people questions and listen.`,
        `4. If all else fails, a smile and nod work pretty well. 😊`,
        `To do this, start by thinking a topic that you are comfortable with.`,
        `Then, come up with three things you can chat to people about.`,
      ];
    
      let messageIndex = 0; // Start with the first message
    
      function displayNextMessage() {
        if (messageIndex < messages.length) {
          addMessage(messages[messageIndex]);
          messageIndex++; // Move to the next message
          setTimeout(displayNextMessage, 1000); // Wait before display message
        } else {
          askAdditionalChoices(); // Once all messages are displayed, call this function
        }
      }
    
      displayNextMessage(); // Start displaying messages
    
    });

  
    button2.addEventListener("click", function() {
      const messages = [
        `Hey ${userName}, believe it or not, many people share the same fear around this!`,
        `Language barriers can make it difficult to communicate effectively,`,
        `because we are afraid to say the wrong things.`,
        `But that's totally okay! Even native speakers can make very common mistakes.`,
        `The key is to practice!`,
        `With practice, you can overcome this challenge and become more confident with speaking a foreign language.`,
        ``,
        `Here are a few tips from the personal experiences of Cindy Lin, the creator of this chatbot:`,
        `1) I learned English by watching the TV show Friends with subtitles on.`,
        `This way, I learned conversational English while learning new vocabulary, tone and how people communicate, make jokes, etc.`,
        `2) I started by reading children's books, one book a day.`,
        `3) I used meetup.com to find language meetups where I can meet new friends and practice language.`,
        `4) Find a language tutor and start practicing speaking, especially for the day-to-day conversations.`,
        `The more you use the language every day, the easier it will be.`,
        ``,
        `Regardless your reason for feeling uncomfortable to speak in a new setting,`,
        `we can start by preparing ourselves with conversation topics that can help to break the ice.`
      ];
    
      let messageIndex = 0; // Start with the first message
    
      function displayNextMessage() {
        if (messageIndex < messages.length) {
          addMessage(messages[messageIndex]);
          messageIndex++; // Move to the next message
          setTimeout(displayNextMessage, 1000); // Wait before displaying next message
        } else {
          askAdditionalChoices(); // Once all messages are displayed, call this function
        }
      }
    
      displayNextMessage(); // Start displaying messages
    });
    
      
    button3.addEventListener("click", function() {
      const messages = [
        `${userName}, I get you. Feeling shy is natural, especially when interacting with new people.`,
        `Remember, everyone feels a little nervous at times. Take small steps and gradually build your confidence.`,
        `Here are a few strategies for you:`,
        `Start small, actively listen for clues on what they are interested in.`,
        `Ask open-ended questions to get more information.`,
        `Use your common grounds and start conversations from there.`,
        `Regardless your reason for feeling uncomfortable to speak in a new setting,`,
        `we can start by preparing ourselves with conversation topics that can help to break the ice.`
      ];
    
      let messageIndex = 0; // Start with the first message
    
      function displayNextMessage() {
        if (messageIndex < messages.length) {
          addMessage(messages[messageIndex]);
          messageIndex++; // Move to the next message
          setTimeout(displayNextMessage, 1000); // Wait before displaying next message
        } else {
          askAdditionalChoices(); // Once all messages are displayed, call this function
        }
      }
    
      displayNextMessage(); // Start displaying messages
    });
    


      chatWindow.appendChild(button1);
      chatWindow.appendChild(button2);
      chatWindow.appendChild(button3);
  
      
    });
  

    
    noButton.addEventListener("click", function() {
      addMessage("Awww! Bummer. I was hoping to practice some conversations today. Have a great day! 😊👋");
    });
  
    // Yes/ no button for practicing conversations
    chatWindow.appendChild(yesButton);
    chatWindow.appendChild(noButton);

  }



// Step 7: Additional convo topics to practice for the user
function askAdditionalChoices() {
  addMessage(`Great job so far, ${userName}!`,
  `Now, let's explore some common topics for breaking the ice with strangers.`, 
  `These topics are fantastic icebreakers because they are relatable and provide common ground for conversation.`,
  `They allow people to share their opinions, preferences, and experiences, fostering a sense of connection and sparking engaging discussions.`,
  `Whether it's discussing the latest episode of a popular show or sharing thoughts on a trending song,`,
  `these topics can help initiate conversations and create a friendly atmosphere for people to connect and get to know each other better.`,
  `Go ahead and pick one that works for you. ❤️`);

  const buttonWeather = createResponseButton("weather");
  const buttonNews = createResponseButton("current news");
  const buttonEntertainment = createResponseButton("entertainment");
  const buttonThings = createResponseButton("how are things");
  const buttonExpertise = createResponseButton("expertise");


  buttonWeather.addEventListener("click", function() {
    addMessage(`This is a very common topic! People often bond over this, especially if the area you are living has bad weather all the time.
    Here are some examples you can use: "I heard it's going to rain tomorrow. Do you have any plans?"
    "I love this weather. It's perfect for a walk in the park. How about you? What do you like to do?"
    "The weather forecast says it's going to be hot this weekend. Any weekends plan ahead?"
    "I can't wait for spring to arrive. I miss seeing flowers in bloom. What are some of your favorite flowers?"
    
    Notice that we end each sentence with a question that keeps the conversation going. 😉
    
    This is a great way to learn more about the person you are talking to and keeping the conversation going by asking open-ended questions.
    
    It's been a wonderful chatting with you today!
    If you ever need someone to talk to or practice conversations with, I'll be here.
    Take care and have a wonderful day! 🌟👋`);
  });

  buttonNews.addEventListener("click", function() {
    addMessage(`Current news is also another way to get people talking. For example: 
    "It seems like there's a new story every day about the impact of [TOPIC] on society. What do you think about it?" 
    "I read an interesting article today about [TOPIC]. It's fascinating how fast things are changing. What do you think?"
    "Did you hear about [AN EVENT]? What do you think about it?"
    
    Notice that we end each sentence with a question that keeps the conversation going. 😉
    
    This is a great way to learn more about the person you are talking to and keeping the conversation going by asking open-ended questions.
    
    Keep in mind the current news can be controversial, usually around the topic of politics and religion, you can stay on the general side of things to avoid possible conflicts.

    It's been a wonderful chatting with you today!
    If you ever need someone to talk to or practice conversations with, I'll be here.
    Take care and have a wonderful day! 🌟👋`);
  });

  buttonEntertainment.addEventListener("click", function() {
    addMessage(`Let's dive into the world of entertainment!
    Whether it's the latest chart-topping songs, the most talked-about TV shows, or the must-see movies,
    there's always something exciting to explore and discuss and able to get everyone excited and engaged quickly.
    Here are some things you can say to get it started:
    "Have you seen the latest episode of [popular TV show]? The plot twists are mind-blowing!"
    "I recently watched [recently released movie]. It was so captivating! Have you seen it?"
    "There's a new series everyone is talking about called [popular show]. I've heard great things about it! Have you seen it?"
    "What's your favorite [movie/TV shows/books]? I'm always on the lookout for recommendations."
    
    Notice that there is always an open-ended question in the sentence that keeps the conversation going. 😉
    
    This is a great way to learn more about the person you are talking to and keeping the conversation going by asking open-ended questions.
    
    It's been a wonderful chatting with you today!
    If you ever need someone to talk to or practice conversations with, I'll be here.
    Take care and have a wonderful day! 🌟👋`);
  });

  buttonThings.addEventListener("click", function() {
    addMessage(`Commiserating together is often a great way to bond.
    This is also why complaining about the weather is great.
    It is a common experience and there is no risk in offending anyone. 
    Whether it's about work, personal life, or simply how you're feeling today,
    discussing 'how are things?' can open the door to meaningful conversations and provide an opportunity to share and connect.
    Here are a few examples for you to try:
    "UGH, it's been such a long week. How about you?"
    "I've been taking up knitting to help me decompress. HOw about you? What do you do to decompress?"
    "Work has been hectic, but I'm managing. I'm looking forward to some downtime this weekend. What are you up to this weekend?"
    "I've always wanted to try/learn [A HOBBY, SKILL, ETC.], have you done it before?"

    Notice that we end each sentence with a question that keeps the conversation going. 😉
    
    This is a great way to learn more about the person you are talking to and keeping the conversation going by asking open-ended questions.
    
    Keep in mind the current news can be controversial, usually around the topic of politics and religion, you can stay on the general side of things to avoid possible conflicts.
    
    It's been a wonderful chatting with you today!
    If you ever need someone to talk to or practice conversations with, I'll be here.
    Take care and have a wonderful day! 🌟👋`);

  });

  buttonExpertise.addEventListener("click", function() {
    addMessage(`Asking people about their expertise is a great way to engage with them.
    Whether it is a topic about their work, hobbies, favorite shows/books/movies,
    they are sharing something they are passionate about with you.
    
    Here are some of the things you can ask:
    "Can you tell me a little bit more about [TOPIC]? I've heard you are an expert on this."
    "How do you find inspirations/ stay up to date about [TOPIC]?"
    "Do you recommend any resources about [TOPIC]?"
    "If I want to learn more about [TOPIC], how should I get started? What is your recommendations?"
    
    It's been a wonderful chatting with you today!
    If you ever need someone to talk to or practice conversations with, I'll be here.
    Take care and have a wonderful day! 🌟👋`);
  });

  chatWindow.appendChild(buttonWeather);
  chatWindow.appendChild(buttonNews);
  chatWindow.appendChild(buttonEntertainment);
  chatWindow.appendChild(buttonThings);
  chatWindow.appendChild(buttonExpertise);

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


