# Delete Documents

**DELETE** */api/v2/projects/{project}/collections/{collection}/documents/{id}*

Where:

- *{project}* is your project name, e.x *wptest*.
- *{collection}* is the name of collection of documents you want to search in, e.x *posts*.
- *{id}* is the id of the document to be deleted.

#### **Example request**:

DELETE */api/v2/projects/wptest/collections/posts/documents/1?token=qxDFI791xxxx-8wmxIBIONYiEK44PGnxxxxxx*

#### **Example response**:

```json
{
  "time": 10,
  "code": 200,
  "response": "Deleted"
}
```
