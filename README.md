# Factorial Time
Factorial Time is an Angular web application that uses the OpenAI API to determine the time complexity of code. Currently only supports Python (Syntax-highlighting wise, raw input of any language still works)
<br>
<br>
TODO
<ul>
  <li>Establish a rate limit per user</li>
  <li>Write an algorithm that parses input and saves tokens by converting variable names, methods, etc... into single letters.</li>
  <li>More input sanitization</li>
  <li>More language support (beyond Python)</li>
  <li>Provide user input after time complexity is calculated, allowing the user to give a confidence score for the answer. This data will likely be given back to OpenAI to improve modeling, get put into a database, or both.</li>
  <li>Store code snippets in database. Check if snippets exist before making a request to the API. If the snippet exists in the database, and it has a high enough confidence score, the stored time complexity value should be returned.</li>
</ul>
