const admin = require("firebase-admin");

// firebase service account pk
const type = "service_account";
const project_id = "bankingtieredapp-dl";
const private_key_id = "a5d680aa05b6ac2a282f72358f4ddd41186445c6";
const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDKDfWJUEkEJmKK\n2E1ah+dh4meWmZvYDhkTFqgbRSQvi6sCw0cFbRc8Utdp97vMMve6v+kwVuFwtJ5k\nozeUQlKjzpmV16EdsfZxkww9WBt/WeL2qDBGiT6YjZ6xC7BXwVx+UWLC+WxVj+Vh\nKwiTk6WCT3eK25SrS7G2U8ME+wgeSwCCIykvQVyrTczXpzChy8qZhnXog1eUj8HJ\nc1DQ9mWIhInEwHstgukYfr2rMbIZzUbYnNP+2mrJ0femXT0TUg6YQpfZVY/uIgI5\nKoZb43d5bh/Sf7PmRrNFOxwQLqyYUXtYOVNtzq5THzzF8fvjtzMnwLh8PpecdT3Z\nzrYEbO67AgMBAAECggEAHXKmX/JfCedMQl8e+vxGqTn1jfnqQDVhyynoqzzK9tD8\nxgTO44gQNF8AfTW5XZvqBgI1SrHG3oW8df9huM5nu+7+7FtGZI0M1WWwiXo/W7Ku\nhPNjQcx73oD5aWVCOK/6OoDDC5aNhvTXYe+DKvsASrspOYgiJUr9ZgzUJfQuLTfP\n07i2CKTSMRHdupqAQQdliaJO/2P3vIzVIQeU3NZo5ERMPsV19LYYHTZhVXg1xS00\niocHhL/u6QlE6CsDveoXbX+PkTGqeTuiKmhsc9juMFcSKdliRtYXJIizHe8nG7Gn\nfS3Vc07ZBiZS45jSkxFs6peVAQcco+0jiBJNIg3LnQKBgQDp3eml9AHfLoz0dAWC\nw4sTkNUBvHiTHXSV/i7ZPLEyTj8KfdtVW5KcwhEKfHAS3R9h+yd1G/W3OA6LqdCi\nfKQgynh9ZSFvOHfHuqAKSu8bGDTWSdBXJPZ4Gc23zqe5ZiA1kHR4tXaCGnlSMthb\nZP/XbaewjYyvMGsIHcJYPuLbjQKBgQDdLU2G5NCx3/kYRdJNTKxdHLfsR7rChYmG\nGAlN7lFm/bhzcSSfUpnFurjWmwkYwrsB/iDZXUJv+bJuSw362aKtIMhK3XL5YVst\nsfjD+AuOnO6MsEwVhdD9JXRldV5X/Uc0hjdBa/2gXj36EX415IYfkbhyd7sYtHcK\ndPyx6649ZwKBgQCsKS3YejFqj8U6K7Lm2Xand6Ym+gy1GCj8RjtMto4nX0yvN4lg\nY+IhPgf3dTW33Uo+AfrBDk0rjLvAeslY5HKapRJgFTOwwZwDz1IDYbh1dLNo0Lvr\new1pym0Tk7ELHbA2Xlovhj5wdna7WSzG0yo398RLh1h6myUfu3CXL+wm/QKBgQC8\ncOW1wWvhsP7M5GgaPfI43sgBQtfm9dlG62G6CQtH4XHuwX4/VCP5qG3lQnAMrZSh\nTQB10ZRSTP7uI3pEuHp2YRDlYCmeOYlytEhLxyEpn6FLMsWQLNPzap7x9n6sHvo0\n0Qlw7u5HXSQW1CKhDhQL/56TwFki4lbuDOBjQnbQjwKBgQDgjinOF/p0Ykf6iE0w\nAGtTpIGcmlr0QJtmTsumNs51muAudcz0qs8isSGnbThN1+9/zJ0IZfnflhCu3274\noEU4hTWafYF1zbhha1hrKqoTzvyFn0pETwBydIytUyCz8yQrf8DrSyb14QNnXX64\n56624uKqH3p6AJwc4FVV9jyiJQ==\n-----END PRIVATE KEY-----\n";
const client_email = "firebase-adminsdk-dmy60@bankingtieredapp-dl.iam.gserviceaccount.com";
const client_id = "116448324551660822332";
const auth_uri = "https://accounts.google.com/o/oauth2/auth";
const token_uri = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-dmy60%40bankingtieredapp-dl.iam.gserviceaccount.com";


admin.initializeApp({
  credential: admin.credential.cert({
    type,
    project_id,
    private_key_id,
    private_key:
      private_key.replace(/\\n/g, '\n'),
    client_email,
    client_id,
    auth_uri,
    token_uri,
    auth_provider_x509_cert_url,
    client_x509_cert_url
  }),
});

module.exports = admin;