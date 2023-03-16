# Project: bloodBank_API

# 📁 Collection: Auth

## End-point: Register User

### Method: POST

> ```
> {{BaseUrl}}/auth/register/user
> ```

### Body (**raw**)

```json
{
    "name": "AKS",
    "phone": "+916290949425",
    "gender": "Male",
    "email": "usertest@gmail.com",
    "address": "Salkia,Howrah",
    "password": "testing",
    "bloodGroup": "O+"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login User

### Method: POST

> ```
> {{BaseUrl}}/auth/login/user/
> ```

### Body (**raw**)

```json
{
    "email": "usertest@gmail.com",
    "password": "testing"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Register Hospital

### Method: POST

> ```
> {{BaseUrl}}/auth/register/hospital/
> ```

### Body (**raw**)

```json
{
    "name": "City Hospital",
    "email": "cityhospital@howrah.com",
    "phone": "+919999999999",
    "address": "City Hospital Howrah By Road Ac market",
    "password": "1234567890",
    "bloodSamples": {
        "bloodGroup": "O+",
        "units": "11"
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login Hospital

### Method: POST

> ```
> {{BaseUrl}}/auth/login/hospital
> ```

### Body (**raw**)

```json
{
    "email": "cityhospital@howrah.com",
    "password": "1234567890"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: BloodBank

## End-point: Get all Bloodbank data

### Method: GET

> ```
> {{BaseUrl}}/bloodbank/all
> ```

### Body (**raw**)

```json
{
    "bloodGroup": "O+",
    "units": 5
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Bloodbank data by Hospital

### Method: GET

> ```
> {{BaseUrl}}/bloodbank/
> ```

### Body (**raw**)

```json
{
    "bloodGroup": "O+",
    "units": 5
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Create Bloodbank data

### Method: POST

> ```
> {{BaseUrl}}/bloodbank
> ```

### Body (**raw**)

```json
{
    "bloodGroup": "O+",
    "units": 5
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Bloodbank data

### Method: DELETE

> ```
> {{BaseUrl}}/bloodbank/64121f23cfacf8e5b9ba226c
> ```

### Body (**raw**)

```json
{
    "bloodGroup": "O+",
    "units": 5
}
```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                       | Type   |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTFlYjA4YTU3Yjg5YjZmNjc1MjA1OCIsImlhdCI6MTY3ODk2Mjk4MiwiZXhwIjoxNjgxNTU0OTgyfQ.pzoK44sajH2D4LtCn4t8QeZ19GaiKTCFZqo3UK7dsbw | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Bloodbank data

### Method: PUT

> ```
> {{BaseUrl}}/bloodbank/64121f23cfacf8e5b9ba226c
> ```

### Body (**raw**)

```json
{
    "units": 55
}
```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                       | Type   |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTFlYjA4YTU3Yjg5YjZmNjc1MjA1OCIsImlhdCI6MTY3ODkwODc1MywiZXhwIjoxNjgxNTAwNzUzfQ.HKs3cOp9J8dPuKBnd8TXckxVNPOtoSeSVWioDCTfKXc | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Receiver

## End-point: Request a blood sample

### Method: POST

> ```
> {{BaseUrl}}/request/
> ```

### Body (**raw**)

```json
{
    "bloodGroup": "A+",
    "hospital": "6411eb08a57b89b6f6752058"
}
```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                       | Type   |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTJkYmEzMzJlOGMxOGMwNThhMzY4NSIsImlhdCI6MTY3ODk1ODUxMiwiZXhwIjoxNjgxNTUwNTEyfQ.ko5CfSg1BI1NQ2hoHOcL4cpGd2ANIsck8pKmL9KfuAo | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Receiver Details by respective hospital

### Method: GET

> ```
> {{BaseUrl}}/request/
> ```

### Body (**raw**)

```json
{
    "bloodGroup": "A+",
    "hospital": "6411eb08a57b89b6f6752058"
}
```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                       | Type   |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTFlYjA4YTU3Yjg5YjZmNjc1MjA1OCIsImlhdCI6MTY3ODk1ODc5MSwiZXhwIjoxNjgxNTUwNzkxfQ.k2qMh6Z5j7cZQTlNpt2uPn751xv6rVXci3gH0X7sJfw | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

---

Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
