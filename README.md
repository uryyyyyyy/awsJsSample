# AwsJsSample


## set up

```
npm install

export AWS_ACCESS_KEY_ID='AKID'
export AWS_SECRET_ACCESS_KEY='SECRET'
```

## build

```
./node_modules/typescript/bin/tsc -p ./
```

## run

```
node build/main.js
```

## develop

```
./node_modules/tsd/build/cli.js install aws-sdk --save

```