# corporate event management

Answer here of MCQ TEST : 
1.
Answer: A: {}
Explain: We know that let variable is a block scope and cannot be redeclared. Here defined a variable (greeting) with let and assign a value ({}). Which is right decleare so when we console that the answer is the assigned value which is {}.

2.
Answer: C: "12"
Explain: Here declare a function named sum which is two parameter a and b. When call this function and set two value 1 and "2" and when run it answer is "12".Because here 1 is a number but "2" is a string. We know that if any number declare in the "" that is a string. That's why the answer is "12". 

3. 
Answer: A: ['🍕', '🍫', '🥑', '🍔']
Explain: Here declare an array named food which is 4 items and an object named info which is a property that's key is favoriteFood and value is food[0] that means "🍕". In the 3rd line reassign a value of info.favoriteFood to "🍝" then change the value of favoriteFood in the info object from "🍕" to "🍝".But when console the array food then it's value is not change.Because When reassigning the value of info.favoriteFood dose not effect the orginal food array. Because they are separate value with there own values.
4.
Answer: B: Hi there, undefined
Explain: Here declare a function named sayHi which is a parameter `name`. The function return `Hi there, ${name}`. When console the function or call then answer is `Hi there, undefined`.Because when call the function by sayHi() then no parameter pass the function that means parameter is not defined that's why the result is 'Hi there, undefined'.
5. 
Answer: C: 3
Explain: There is an array it contains 4 elements [0,1,2,3] and a variable initilized  to 0. Then use the forEach method to iterate through each element of the nums array and increment the count variable by 1 if the element num is truthy.
 At first num set 0 that is first element of the array and the condition `if(num)` evalutes to false. Because 0 is a falsy value in javaScript and count remain 0. The num set 1,2,3 one by one and every time the condition `if(num)` evalutes to true Because every element is truthy value and at the same time count is incremented by 1 in three times that's why `count` contains the value is 3.

Explanation 5 features of my 'corporate event management' project:

*introduction: My project name is 'corporate event management'. When a user come to my project
 then he/she will see a navbar which 4 pages 'Home', 'Services', 'Our Works',
 'Location' and will see a 'Login' button in the right side and a logo in the left
 side of our company. If the user registered or logged in so will see two extra 
pages named 'Client Feedback' and 'Team Members' and at the same time will see a 
'Log Out' button, user name and user profile in the right side of navbar if user put
his name and his photoURL when registered. When user click on the 'Home' will see 
'Home Page' content where are a 'Banner',a 'Our Services' Section, a 'Our Works' 
section, 'Location' section and a 'Footer'.In the same way when click on the 'Client
 Feedback' or 'Team Members' will see the specific routes data.
2. When a user click on the 'Services' in the navbar will see the Service Cards, 
when click on the 'Our Works' in the navbar will see the work cards and if click on 
the 'Location' will see our location. 
3.In the 'Services' section every service card have a 'View Details' Button. If a
 user registerd or logged in will see the card details.If not registered or logged in
will not see the card details.
4. When a user go to log in and click on the 'Login' button then he/she will go to log in
page. If the user already registered so user will log in successfully and show a sweet
alert 'Thank You!' 'Your logged in successfully.' But if the user is not registered or
put wrong email or password then show a sweet alert 'Oh!' and firebase own error message.
If the user not registered so he/she will go to registration page by clicking 'Register' in 
the below of the 'Login' button of the Log in form.When a user will be registration would have 
user name, photoURL, email, password and must accept checkbox. If the user will not accept 
the checkbox will show a sweet alert 'Oh!' and 'Please accept our Terms and Conditions'.
5. When a user try to registration and in the time of put his password he/she would have at least 
6 character, a capital letter and a special letter.If the user will not put at least 
6 character , a capital letter and a special letter then show a sweet alert 'Please should be at least 
6 character, a capital letter and a special letter.
Thank you! For read my project features.Best wishes for you.



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
