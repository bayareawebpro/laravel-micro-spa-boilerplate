# Http Client 

> /resources/js/Services/Http/*

The `Http` directory contains auto-loaded classes that resolve the `Http` Axios client wrapper and it's 
Axios Progress Bar service. 

## Http.get

```javascript
this.$app.make('Http').get(...);
```

## Http.post

```javascript
this.$app.make('Http').post(...);
```

## Http.postUpload

> Converts a simple flat non-nested Object to FormData and sets the _method field.

```javascript
this.$app.make('Http').postUpload(...);
```

## Http.put

```javascript
this.$app.make('Http').put(...);
```
## Http.putUpload

> Converts a simple flat non-nested Object to FormData and sets the _method field.

```javascript
this.$app.make('Http').putUpload(...);
```


## Http.patch

```javascript
this.$app.make('Http').patch(...);
```

## Http.delete

```javascript
this.$app.make('Http').delete(...);
```
