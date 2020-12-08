# Search


> #### Notice !
> Results are cached for 2 minutes and changes (like updating a document) will not be applied for the same query until 10 minutes pass.

**GET** */api/v2/projects/{project}/collections/{collection}/search/{handler}*

Where:

- *{project}* is your project name, e.x *wptest*.
- *{collection}* is the name of collection of documents you want to search in, e.x *posts*.
- *{handler}* search handler name, e.x *default*.






#### **Querystring parameters**:

- *q*: the search query, e.x *?q=lableb*.
- *filter*: a list of filters, e.x *?filter=meta:"Tech"&filter=meta:"Computer"*.
- *skip*: how many documents to skip (used for pagination), e.x *?skip=10*.
- *limit*: how many documents to fetch (used for pagination), e.x *?limit=5*.
- *session_id*: a unique identifier for a user session, e.x *?session_id=1xHsxW342*.
- *user_id*: a unique identifier for a user, e.x *?user_id=1*.
- *user_ip*: user ip address, e.x *?user_ip=192.111.24.21*.
- *user_country*: user country code, e.x *?user_country=DE*.





#### **Example request**:



```
http://api-bahuth.lableb.com/api/v2/projects/wptest/collections/posts/search/default
  ?q=lableb
  &skip=5
  &limit=10
  &session_id=1c4Hb23
  &token=qxDFI791xxxx-8wmxIBIONYiEK44PGnxxxxxx
```




#### **Example response**:



```json
{
  "time": 11,
  "code": 200,
  "response": {
    "found_documents": 53,
    "results": [
      {
        "date": "2018-12-25T10:24:00.000+0000",
        "image": "https://example.com/static/example.jpg",
        "categories": ["Search"],
        "id": "1",
        "title": "Example title content",
        "content": "Example post content",
        "url": "http://mysite.com/posts/labelb-cloud-search/"
      }
    ],
    "facets": {
      "count": 3,
      "categories": {
        "buckets": [{ "value": "Search", "count": 3 }]
      },
      "tags": {
        "buckets": [{ "value": "Tech", "count": 1 }]
      },
      "authors": { "buckets": [] },
      "year": {
        "buckets": [{ "value": 2019, "count": 5 }]
      }
    },
    "spelling": null
  }
}
```

[Example Link @stackblitz](https://stackblitz.com/github/Lableb-Labs/restful-api-examples/tree/v2-search)
