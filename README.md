# Recommendation

> #### Notice !
> Results are cached for 2 minutes and changes (like updating a document) will not be applied for the same query until 10 minutes pass.


**GET** */api/v2/projects/{project}/collections/{collection}/recommend/*.

OR

**GET** */api/v2/projects/{project}/collections/{collection}/recommend/{handler}*.

You can use the first endpoint to access a recommendations query configured with a request handler called “recommend”. Otherwise, you must specify the request handler as in the second endpoint.

Where:

- *{project}* is your project name, e.x *wptest*.
- *{collection}* is the name of collection of documents you want to search in, e.x *posts*.
- *{handler}* OPTIONAL - recommendation handler name - *recommend* by default.

#### **Querystring parameters**:

- *id*: ID of the source document **REQUIRED**.
- *title*: the title of the source document, e.x *?title=lableb engine is awesome*.
- *url*: the url of the source document, e.x *?url=http://mysite.com/posts/lableb-is-awesome*.
- *limit*: number of returned documents, e.x *?limit=3*.
- *session_id*: a unique identifier for a user session, e.x *?session_id=1xHsxW342*.
- *user_id*: a unique identifier for a user, e.x *?user_id=1*.
- *user_ip*: user ip address, e.x *?user_ip=192.111.24.21*.
- *user_country*: user country code, e.x *?user_country=DE*.

#### **Example request**:

```
https://api-bahuth.lableb.com/api/v2/projects/wptest/collections/posts/recommend/default
  ?id=1
  &title=lableb engine is awesome
  &session_id=1c4Hb23
  &token=qxDFI791xxxx-8wmxIBIONYiEK44PGnxxxxxx
```

#### **Example response**:

```json
{
  "time": 66,
  "code": 200,
  "response": {
    "found_documents": 20,
    "results": [
      {
        "date": "2019-04-29T08:29:30.000+0000",
        "image": "http://example.com/static/images/lableb.png",
        "categories": ["Tech", "Search"],
        "id": "1",
        "title": "Million reason to use Lableb cloud search",
        "content": "Example content",
        "url": "http://mysite.com/posts/million-reason-to-use-lableb",
        "tags": ["Fast", "Accurate"]
      }
    ],
    "facets": {
      "count": 3,
      "categories": {
        "buckets": [{ "value": "Cloud Search", "count": 25 }]
      },
      "tags": { "buckets": [] },
      "year": { "buckets": [] },
      "authors": { "buckets": [] }
    },
    "spelling": null
  }
}
```
