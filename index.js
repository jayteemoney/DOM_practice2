/*practice 1
1. Create a text input field and a button.
2. Add an event listener to the button.
3. Write JavaScript to toggle the disabled state of the text input when the button is clicked
*/
// solution
// selecting the elements
const toggleBtn = document.getElementById("toggleButton");
const toggleDiv = document.getElementById("textInput");

toggleBtn.addEventListener('click',function(){
    inputField.classList.toggle("input")
});

/*Practice 2
1. Create a link in your HTML.
2. Add an event listener for the 'click' event on the link.
3. Use event.preventDefault( ) to prevent the default navigation.
4. Log a message to the console indicating the link was clicked
 */
// solution
const myLink = document.getElementById("myLink");


myLink.addEventListener('click', function (e) {
   e.preventDefault();
   console.log("link was clicked");
   
});

/*practice 3
1. Create a <div> element in your HTML.
2. Add multiple dynamically created buttons inside the <div>.
3. Use event delegation to manage click events on these buttons.
4. Log a message identifying which button was clicked
 */
const buttonDiv = document.getElementById('buttonContainer');

buttonDiv.addEventListener('click', function (e){
    e.target.textContent = "button was clicked";
    console.log(e.target.textContent);
    
});


/*practice 4
1. Create a form with an input field.
2. Add an event listener for the 'focus' event on the input.
3. Log a message when the input field gains focus.
 */

const inputField = document.getElementById('inputField');

inputField.addEventListener('focus', function(e){
    console.log("i am focused");
    
});

/*practice 7
1. Create an HTML form with various input fields.
2. Write JavaScript to check for empty fields on form submission.
3. Display a message if any fields are empty
 */
// solution
const loginForm = document.getElementById('loginForm')
loginForm.addEventListener('submit', function(e){
    e.preventDefault();
const inputOne = document.getElementById('inputOne').value;
const inputTwo = document.getElementById('inputTwo').value;
const errMessage = document.getElementById('errMessage');

errMessage.textContent = "";
 
    if(inputOne===""){
        errMessage.textContent = "field1 is empty"
        e.preventDefault();
    }else if(inputTwo===""){
        errMessage.textContent = "field2 is empty"
        e.preventDefault();
    }
});
/*practice 8
1. Create an HTML structure with a parent and child element.

2. Add an event listener to the child element.

3. In the listener, use stopPropagation( ) to prevent the event from reaching the parent.

4. Log a message indicating that bubbling was stopped.
 */
// solution
const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', function(){});

child.addEventListener('click', function(e){
    e.stopPropagation();
    console.log("bubbling was stopped");
    

});

/*practice 9
1. Create a new HTML file.

2. Add nested elements (e.g., <div> and <p>).

3. Write JavaScript code to add event listeners to both elements.

4. Log the event order to the console when an event is triggered
 */
// 
const parentDiv = document.getElementById('parentDiv');
const childParagraph = document.getElementById('childParagraph');

parentDiv.addEventListener('click', function(e){
    console.log('click');
    
});

childParagraph.addEventListener('click', function(e){
    console.log('click');
    

});
/*practice 10
1. Create a <ul> element in your HTML.
2. Add a button that, when clicked, adds new <li> elements to the <ul>.
3. Use event delegation to handle clicks on all <li> elements, including the newly added ones.
 */
// solution
