---
title: Your first transaction
---
# Your first transaction

If you followed along the previous page, you should have a Numary instance up & read to accept transactions. Woohoo! Let's get started.

## Without Numscript
```shell
curl -X POST \
-H 'Content-Type: application/json' \
-d '{
"postings": [
{
"source": "world",
"destination": "central_bank",
"asset": "GEM",
"amount": 100
},
{
"source": "central_bank",
"destination": "users:001",
"asset": "GEM",
"amount": 100
}
],
"metadata": {
"description": "Wohoo! a first transaction."
}
}' http://localhost:3068/quickstart/transactions
```

## With Numscript
```shell
echo "
send [COIN 100] (
  source = @world
  destination = @central_bank
)
send [COIN 100] (
  source = @central_bank
  destination = @users:001
)
" > example.num

numary exec quickstart example.num
```


Assuming your call succeeded, it's time to go check the transaction. You can do so using the API or alternatively you can head to the integrated dashboard for visual confirmation, conveniently hosted at control.numary.com
