/**
 * Japan Plane Rectangular
 * (日本の各測地系の平面直角座標をWGS84系の緯度経度に変換するライブラリ)
 *
 * 参考
 * http://www.gsi.go.jp/sokuchikijun/jpc.html
 * http://blog.godo-tys.jp/2012/11/21/999/
 * http://epsg.io/
 * http://d.hatena.ne.jp/yellow_73/20121206/p1
 * http://d.hatena.ne.jp/hfu/20080131/1201758508
 * https://www.mk-mode.com/octopress/2014/03/21/about-datum/
 * https://sites.google.com/site/qgisnoiriguchi/crs/01/04
 * http://osgeo-org.1560.x6.nabble.com/GDAL-JGD2011-td5179972.html
 * http://d.hatena.ne.jp/tmizu23/20091215/1260868350
 */

const proj4 = require('proj4')
  ;

/**
 * 測地系: WGS84系(lat,lng)
 */
proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");

/**
 * 測地系: Tokyo (平面直角座標)
 */
// 1  Tokyo / Japan Plane Rectangular CS I
proj4.defs("EPSG:30161","+proj=tmerc +lat_0=33 +lon_0=129.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs");
// 2  Tokyo / Japan Plane Rectangular CS II
proj4.defs("EPSG:30162","+proj=tmerc +lat_0=33 +lon_0=131 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs");
// 3  Tokyo / Japan Plane Rectangular CS III
proj4.defs("EPSG:30163","+proj=tmerc +lat_0=36 +lon_0=132.1666666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs");
// 4  Tokyo / Japan Plane Rectangular CS IV
proj4.defs("EPSG:30164","+proj=tmerc +lat_0=33 +lon_0=133.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs");
// 5  Tokyo / Japan Plane Rectangular CS V
proj4.defs("EPSG:30165","+proj=tmerc +lat_0=36 +lon_0=134.3333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs");
// 6  Tokyo / Japan Plane Rectangular CS VI
proj4.defs("EPSG:30166","+proj=tmerc +lat_0=36 +lon_0=136 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs");
// 7  Tokyo / Japan Plane Rectangular CS VII
proj4.defs("EPSG:30167","+proj=tmerc +lat_0=36 +lon_0=137.1666666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs");
// 8  Tokyo / Japan Plane Rectangular CS VIII
proj4.defs("EPSG:30168","+proj=tmerc +lat_0=36 +lon_0=138.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs");
// 9  Tokyo / Japan Plane Rectangular CS IX
proj4.defs("EPSG:30169","+proj=tmerc +lat_0=36 +lon_0=139.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs");
// 10 Tokyo / Japan Plane Rectangular CS X
proj4.defs("EPSG:30170","+proj=tmerc +lat_0=40 +lon_0=140.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs");
// 11 Tokyo / Japan Plane Rectangular CS XI
proj4.defs("EPSG:30171","+proj=tmerc +lat_0=44 +lon_0=140.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs");
// 12 Tokyo / Japan Plane Rectangular CS XII
proj4.defs("EPSG:30172","+proj=tmerc +lat_0=44 +lon_0=142.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs");
// 13 Tokyo / Japan Plane Rectangular CS XIII
proj4.defs("EPSG:30173","+proj=tmerc +lat_0=44 +lon_0=144.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs");
// 14 Tokyo / Japan Plane Rectangular CS XIV
proj4.defs("EPSG:30174","+proj=tmerc +lat_0=26 +lon_0=142 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs");
// 15 Tokyo / Japan Plane Rectangular CS XV
proj4.defs("EPSG:30175","+proj=tmerc +lat_0=26 +lon_0=127.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs");
// 16 Tokyo / Japan Plane Rectangular CS XVI
proj4.defs("EPSG:30176","+proj=tmerc +lat_0=26 +lon_0=124 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs");
// 17 Tokyo / Japan Plane Rectangular CS XVII
proj4.defs("EPSG:30177","+proj=tmerc +lat_0=26 +lon_0=131 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs");
// 18 Tokyo / Japan Plane Rectangular CS XVIII
proj4.defs("EPSG:30178","+proj=tmerc +lat_0=20 +lon_0=136 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs");
// 19 Tokyo / Japan Plane Rectangular CS XIX
proj4.defs("EPSG:30179","+proj=tmerc +lat_0=26 +lon_0=154 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs");


/**
 * 測地系: JGD2000 (平面直角座標)
 */
// 1  JGD2000 / Japan Plane Rectangular CS I  EPSG:2443
proj4.defs("EPSG:2443","+proj=tmerc +lat_0=33 +lon_0=129.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
// 2  JGD2000 / Japan Plane Rectangular CS II EPSG:2444
proj4.defs("EPSG:2444","+proj=tmerc +lat_0=33 +lon_0=131 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
// 3  JGD2000 / Japan Plane Rectangular CS III  EPSG:2445
proj4.defs("EPSG:2445","+proj=tmerc +lat_0=36 +lon_0=132.1666666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
// 4  JGD2000 / Japan Plane Rectangular CS IV EPSG:2446
proj4.defs("EPSG:2446","+proj=tmerc +lat_0=33 +lon_0=133.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
// 5  JGD2000 / Japan Plane Rectangular CS V  EPSG:2447
proj4.defs("EPSG:2447","+proj=tmerc +lat_0=36 +lon_0=134.3333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
// 6  JGD2000 / Japan Plane Rectangular CS VI EPSG:2448
proj4.defs("EPSG:2448","+proj=tmerc +lat_0=36 +lon_0=136 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
// 7  JGD2000 / Japan Plane Rectangular CS VII  EPSG:2449
proj4.defs("EPSG:2449","+proj=tmerc +lat_0=36 +lon_0=137.1666666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
// 8  JGD2000 / Japan Plane Rectangular CS VIII EPSG:2450
proj4.defs("EPSG:2450","+proj=tmerc +lat_0=36 +lon_0=138.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
// 9  JGD2000 / Japan Plane Rectangular CS IX EPSG:2451
proj4.defs("EPSG:2451","+proj=tmerc +lat_0=36 +lon_0=139.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
// 10 JGD2000 / Japan Plane Rectangular CS X  EPSG:2452
proj4.defs("EPSG:2452","+proj=tmerc +lat_0=40 +lon_0=140.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
// 11 JGD2000 / Japan Plane Rectangular CS XI EPSG:2453
proj4.defs("EPSG:2453","+proj=tmerc +lat_0=44 +lon_0=140.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
// 12 JGD2000 / Japan Plane Rectangular CS XII  EPSG:2454
proj4.defs("EPSG:2454","+proj=tmerc +lat_0=44 +lon_0=142.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
// 13 JGD2000 / Japan Plane Rectangular CS XIII EPSG:2455
proj4.defs("EPSG:2455","+proj=tmerc +lat_0=44 +lon_0=144.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
// 14 JGD2000 / Japan Plane Rectangular CS XIV  EPSG:2456
proj4.defs("EPSG:2456","+proj=tmerc +lat_0=26 +lon_0=142 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
// 15 JGD2000 / Japan Plane Rectangular CS XV EPSG:2457
proj4.defs("EPSG:2457","+proj=tmerc +lat_0=26 +lon_0=127.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
// 16 JGD2000 / Japan Plane Rectangular CS XVI  EPSG:2458
proj4.defs("EPSG:2458","+proj=tmerc +lat_0=26 +lon_0=124 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
// 17 JGD2000 / Japan Plane Rectangular CS XVII EPSG:2459
proj4.defs("EPSG:2459","+proj=tmerc +lat_0=26 +lon_0=131 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
// 18 JGD2000 / Japan Plane Rectangular CS XVIII  EPSG:2460
proj4.defs("EPSG:2460","+proj=tmerc +lat_0=20 +lon_0=136 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
// 19 JGD2000 / Japan Plane Rectangular CS XIX  EPSG:2461
proj4.defs("EPSG:2461","+proj=tmerc +lat_0=26 +lon_0=154 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");


/**
 * 測地系: JGD2011 (平面直角座標)
 */
// 1  JGD2011 / Japan Plane Rectangular CS I
proj4.defs("EPSG:6669","+proj=tmerc +lat_0=33 +lon_0=129.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs");
// 2  JGD2011 / Japan Plane Rectangular CS II
proj4.defs("EPSG:6670","+proj=tmerc +lat_0=33 +lon_0=131 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs");
// 3  JGD2011 / Japan Plane Rectangular CS III
proj4.defs("EPSG:6671","+proj=tmerc +lat_0=36 +lon_0=132.1666666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs");
// 4  JGD2011 / Japan Plane Rectangular CS IV
proj4.defs("EPSG:6672","+proj=tmerc +lat_0=33 +lon_0=133.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs");
// 5  JGD2011 / Japan Plane Rectangular CS V
proj4.defs("EPSG:6673","+proj=tmerc +lat_0=36 +lon_0=134.3333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs");
// 6  JGD2011 / Japan Plane Rectangular CS VI
proj4.defs("EPSG:6674","+proj=tmerc +lat_0=36 +lon_0=136 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs");
// 7  JGD2011 / Japan Plane Rectangular CS VII
proj4.defs("EPSG:6675","+proj=tmerc +lat_0=36 +lon_0=137.1666666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs");
// 8  JGD2011 / Japan Plane Rectangular CS VIII
proj4.defs("EPSG:6676","+proj=tmerc +lat_0=36 +lon_0=138.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs");
// 9  JGD2011 / Japan Plane Rectangular CS IX
proj4.defs("EPSG:6677","+proj=tmerc +lat_0=36 +lon_0=139.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs");
// 10 JGD2011 / Japan Plane Rectangular CS X
proj4.defs("EPSG:6678","+proj=tmerc +lat_0=40 +lon_0=140.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs");
// 11 JGD2011 / Japan Plane Rectangular CS XI
proj4.defs("EPSG:6679","+proj=tmerc +lat_0=44 +lon_0=140.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs");
// 12 JGD2011 / Japan Plane Rectangular CS XII
proj4.defs("EPSG:6680","+proj=tmerc +lat_0=44 +lon_0=142.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs");
// 13 JGD2011 / Japan Plane Rectangular CS XIII
proj4.defs("EPSG:6681","+proj=tmerc +lat_0=44 +lon_0=144.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs");
// 14 JGD2011 / Japan Plane Rectangular CS XIV
proj4.defs("EPSG:6682","+proj=tmerc +lat_0=26 +lon_0=142 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs");
// 15 JGD2011 / Japan Plane Rectangular CS XV
proj4.defs("EPSG:6683","+proj=tmerc +lat_0=26 +lon_0=127.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs");
// 16 JGD2011 / Japan Plane Rectangular CS XVI
proj4.defs("EPSG:6684","+proj=tmerc +lat_0=26 +lon_0=124 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs");
// 17 JGD2011 / Japan Plane Rectangular CS XVII
proj4.defs("EPSG:6685","+proj=tmerc +lat_0=26 +lon_0=131 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs");
// 18 JGD2011 / Japan Plane Rectangular CS XVIII
proj4.defs("EPSG:6686","+proj=tmerc +lat_0=20 +lon_0=136 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs");
// 19 JGD2011 / Japan Plane Rectangular CS XIX
proj4.defs("EPSG:6687","+proj=tmerc +lat_0=26 +lon_0=154 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs");


let basePoints = {
  "Tokyo": {
    1 :'EPSG:30161',
    2 :'EPSG:30162',
    3 :'EPSG:30163',
    4 :'EPSG:30164',
    5 :'EPSG:30165',
    6 :'EPSG:30166',
    7 :'EPSG:30167',
    8 :'EPSG:30168',
    9 :'EPSG:30169',
    10:'EPSG:30170',
    11:'EPSG:30171',
    12:'EPSG:30172',
    13:'EPSG:30173',
    14:'EPSG:30174',
    15:'EPSG:30175',
    16:'EPSG:30176',
    17:'EPSG:30177',
    18:'EPSG:30178',
    19:'EPSG:30179',
  },
  "JGD2000": {
    1 :'EPSG:2443',
    2 :'EPSG:2444',
    3 :'EPSG:2445',
    4 :'EPSG:2446',
    5 :'EPSG:2447',
    6 :'EPSG:2448',
    7 :'EPSG:2449',
    8 :'EPSG:2450',
    9 :'EPSG:2451',
    10:'EPSG:2452',
    11:'EPSG:2453',
    12:'EPSG:2454',
    13:'EPSG:2455',
    14:'EPSG:2456',
    15:'EPSG:2457',
    16:'EPSG:2458',
    17:'EPSG:2459',
    18:'EPSG:2460',
    19:'EPSG:2461',
  },
  "JGD2011": {
    1 :'EPSG:6669',
    2 :'EPSG:6670',
    3 :'EPSG:6671',
    4 :'EPSG:6672',
    5 :'EPSG:6673',
    6 :'EPSG:6674',
    7 :'EPSG:6675',
    8 :'EPSG:6676',
    9 :'EPSG:6677',
    10:'EPSG:6678',
    11:'EPSG:6679',
    12:'EPSG:6680',
    13:'EPSG:6681',
    14:'EPSG:6682',
    15:'EPSG:6683',
    16:'EPSG:6684',
    17:'EPSG:6685',
    18:'EPSG:6686',
    19:'EPSG:6687',
  }
}

exports.versions = function () {
  return Object.keys(basePoints);
};

/**
 * 平面直角座標系をWGS84準拠の座標[lng, lat]に変換する
 * 測地系のサポート: Tokyo, JGD2000, JGD2011
 *
 * @param {Array} yx  平面直角座標
 * @param {Number} pointSystemNumber 系番号[1-19]
 * @param {String} 測地系の種類[Tokyo/JGD2000/JGD2011]
 * @return {Array}
 * @config {Number} WGS84: lng
 * @config {Number} WGS84: lat
 */
exports.toWGS84LngLat = function (yx, pointSystemNumber, pointSystemVer) {
  let ver = pointSystemVer || 'Tokyo'
    , base = basePoints[ver] || {}
    ;

  if (exports.versions().indexOf(ver) === -1) {
    throw new Error('JGDのバージョンが不正です');
  }

  if (!base[pointSystemNumber]) {
    throw new Error('指定したバージョンに該当する座標系がありません');
  }

  return proj4(base[pointSystemNumber], "EPSG:4326", yx);
};
