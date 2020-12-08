# Index Documents

**POST** */api/v2/projects/{project}/collections/{collection}/documents*

Where:

- *{project}* is your project name, e.x *wptest*.
- *{collection}* is the name of collection of documents you want to search in, e.x *posts*.



#### **Request body**:

When you create a project on Lableb dashboard, your documents will have the following schema by default:

<!-- prettier-ignore -->
- *id*: a unique identifier for a document.
- *title*: the document title.
- *content*: the document content.
- *image*: document image url.
- *url*: document url on your site.
- *tags*: an array of tags.
- *category*: an array of categories.
- *author*: an array of author names.
- *date*: an **ISO-8601** date string.


#### **Example request**:

POST */api/v2/projects/wptest/collections/posts/documents?token=qxDFI791xxxx-8wmxIBIONYiEK44PGnxxxxxx*

##### **Body**:

```

[
    {    
        "id": 1,
        "title": "Lableb is awesome",
        "content": "example contnet goes here",
        "image": "https://mysite.com/static/images/lableb.png",
        "url": "https://mysite.com/posts/lableb-is-awesome",
        "tags": ["Fast", "Accurate"],
        "category": ["Search", "Cloud"],
        "authors": ["Lableb"],
        "date": "2011-07-01T10:50:23Z"
    }
]
```







#### **Example response**:

```
{
    "time": 100,
    "code": 200,
    "response": null
}
```





## Update Indexed Documents

To update indexed document, just re-index it with the same ID.


[Example Link @stackblitz](https://stackblitz.com/github/Lableb-Labs/restful-api-examples/tree/v2-index-documents)
