Paws-Haven – Bug Report
Project: Northern Paws Rescue – Operation Adoption Day
File reviewed: volunteers.html
HTML Bugs and Fixes

# Where (line or element) What was wrong Caught by validator? (Yes/No) How I fixed it

1 DOCTYPE declaration The HTML document was missing a proper DOCTYPE declaration. Yes Added <!DOCTYPE html> at the beginning of the file.
2 <html> element The language attribute was missing. No Added lang="en" to specify the document language.
3 <span> element A <div> was incorrectly placed inside a <span>. Yes Corrected the invalid nesting.
4 <section> element A closing </section> tag was missing. Yes Added the missing closing tag.
5 <main> element The page contained more than one <main> element. Yes Kept only one main content area.
6 Signup section The same id="signup" was used more than once. Yes Made the IDs unique.
7 Email input label The label's for attribute did not match the email input's ID. No Matched the label's for value to the input ID.
8 Heading elements The heading structure jumped from <h1> to <h3>. No Changed the heading levels to follow a logical order.
9 Phone input The phone input did not have a properly associated label. No Added a <label> associated with the phone input.
10 Top-bar element A generic <div> was used for the page header. No Replaced the container with a semantic <header> element.
11 Bottom-bar element A generic <div> was used for the page footer. No Replaced the container with a semantic <footer>
