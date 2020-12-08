# Autocomplete

> #### Notice !
> Results are cached for 10 minutes and changes (like updating a document) will not be applied for the same query until 10 minutes pass.

**GET** */api/v1/{project}/collections/{collection}/autocomplete/*

OR

**GET** */api/v1/{project}/collections/{collection}/autocomplete/{handler}*

You can use the first endpoint to access an autocomplete query configured with a request handler called “suggest”. Otherwise, you must specify the request handler as in the second endpoint.

Where:

- *{project}* is your project name, e.x *wptest*.
- *{collection}* is the name of collection of documents you want to search in, e.x *posts*.
- *{handler}* OPTIONAL - is the autocomplete handler name, *suggest* by default.

#### **Querystring parameters**:

- *q*: the search query, e.x *?q=la*.
- *session_id*: a unique identifier for a user session, e.x *?session_id=1xHsxW342*.
- *user_id*: a unique identifier for a user, e.x *?user_id=1*.
- *user_ip*: user ip address, e.x *?user_ip=192.111.24.21*.
- *user_country*: user country code, e.x *?user_country=DE*.

#### **Example request**:

```
http://api-bahuth.lableb.com/api/v1/wptest/collections/posts/autocomplete/suggest
  ?q=ex
  &session_id=1c4Hb23
  &token=qxDFI791xxxx-8wmxIBIONYiEK44PGnxxxxxx
```

#### **Example response**:

```json
{
  "time": 12,
  "code": 200,
  "response": {
    "found_documents": 1,
    "results": [
      {
        "date": "2017-05-15T14:38:08.000+0000",
        "phrase": "Example using the autocomplete api",
        "suggestion_type": "navigational",
        "id": "5147",
        "category": ["Travel"],
        "url": "http://mysite.com/posts/example-auto-api/"
      },
      {
        "phrase": "posts by Example",
        "suggestion_type": "filter",
        "filters": ["authors_sa:\"Example\""]
      }
    ],
    "facets": null,
    "spelling": null
  }
}
```


There are two suggestion types:

1. navigational: this type has a direct link for a post in your website.
2. filter: this types has a list of filters which you should use in the search query if the user hits this suggestion.


[Example Link @stackblitz](https://stackblitz.com/github/Lableb-Labs/restful-api-examples/tree/v2-auto-complete)
