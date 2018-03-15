# Japan Plane Rectangular

日本測地系(Tokyo/JGD2000/JGD2011)の平面直角座標をWGS84系の緯度経度に変換するライブラリ

## How To Use

長崎付近のTokyo測地系の座標をWGS84に変換する例

```js
let jpr = require('jpr');

console.log(jpr.toWGS84LngLat([-2862, 29086], 1, 'Tokyo'))
// [129.46702893433056, 33.26558876847196]
```

## Set up

npmからinstallします

```js
npm install jpr
```

## API

### `@toWGS84LngLat(yx, pointSystemNumber, pointSystemVer)`

```text
@param {Array} yx 日本測地系の平面直角座標
@param {Number} pointSystemNumber 系番号[1-9]
@param {String} 測地系の種類[Tokyo/JGD2000/JGD2011]
@return {Array}
@config {Number} WGS84: lng
@config {Number} WGS84: lat
```

歴代の日本測地系(平面直角座標)をWGS84の緯度経度(lng, lat)に変換する

