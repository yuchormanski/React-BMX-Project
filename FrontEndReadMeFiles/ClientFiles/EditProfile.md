###### [Back to Content](/FrontEndReadMeFiles/README.md)

### Client - Edit customer information

#### Content

- [Front-end](/FrontEndReadMeFiles/README.md)
- [Back-end](/FrontEndReadMeFiles/README.md)
- [Main](/README.md)

Има възможност за редактиране на данните, добавяне на допълнителна сума в сметката му . както и избор на снимка от локалната му машина. Допустимите файлово разширения са jpeg и png.

Редактираната информация се изпраща към базата с данни на адрес:

### `PUT / MISSING ENDPOINT!!!!!!! /:id`

във формат:

```json
{
  "role": "",
  "email": "",
  "firstName": "",
  "lastName": "",
  "iban": "",
  "balance": "",
  "phone": "",
  "city": "",
  "imageUrl": base64,
  "address": {
    "country": "",
    "district": "",
    "postCode": "",
    "block": "",
    "apartment": "",
    "street": "",
    "strNumber": 1,
    "floor": ""
  }
}
```

- Файла със снимката се изпраща във формат `base64`
