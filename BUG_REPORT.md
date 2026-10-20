# Volunteer Page Bug Report

| # | Where | What was wrong | Caught by validator? | How I fixed it |
|---|---|---|---|---|
| 1 | Doctype | The doctype contained a language attribute, causing two errors. | Yes | Changed it to <!DOCTYPE html>. |
| 2 | html element | The page language was missing. | Yes | Added lang="en" to the html tag. |
| 3 | First list item | A div was placed inside a span. | Yes | Removed the unnecessary div and span. |
| 4 | Why section | The section had no closing tag. | Yes | Added </section> before closing main. |
| 5 | Main content | There were two visible main elements. | Yes | Combined the content inside one main element. |
| 6 | Signup section and form | Both used the same ID. | Yes | Changed the form ID to volunteer-form. |
| 7 | Email label | The label's for attribute did not match the input ID. | Yes | Changed the label to for="email". |
| 8 | Roles heading | The heading jumped from h1 to h3. | Yes | Changed h3 to h2. |
| 9 | Phone input | It only had a placeholder and no real label. | No | Added a label connected to id="phone". |
| 10 | Top bar | A div was used for the page header. | No | Replaced the div with header. |
| 11 | Bottom bar | A div was used for the page footer. | No | Replaced the div with footer. |