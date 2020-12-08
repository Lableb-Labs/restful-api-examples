# Getting Started

In order to use Lableb API, you need 2 tokens, one for search, and one for indexing.

To generate needed tokens:

1. Go to [Lableb Cloud Search Dashboard](https://cse.lableb.com).
2. Click on your project.
3. Navigate to **Tokens** section.
4. Generate search token:
   1. Type a name for your token, for example *wp-search*
   2. Check **Search** checkbox.
   3. Click **Generate** button.
5. Generate indexing token the same way, but check **Indexing** checkbox instead of Search checkbox.



> ### Notice
> You can check both **Search** and **Indexing** checkboxes to use the same token for indexing and search.


* * *


# Authentication

To authentication your requests, provide *token* query string parameter in your request urls.

For example:
*?token=qxDFI791xxxx-8wmxIBIONYiEK44PGnxxxxxx*

For **Search**, **Autocomplete**, **Recommendations** and **Feedbacks**, use **Search** token.

For **Indexing** and **Deleting**, use **Indexing** token.
