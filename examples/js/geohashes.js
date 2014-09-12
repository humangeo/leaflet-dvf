
$(document).ready(function() {
	var map;

	// create a map in the "map" div, set the view to a given place and zoom
	map = L.map('map').setView([0.0, 0.0], 2);
	
	var baseLayer = new L.StamenTileLayer('toner', {
		detectRetina: true
	});
	
	baseLayer.addTo(map);
	
	var geohashData = {
		      "_type": "terms", 
		      "total": 638222, 
		      "terms": [
		        {
		          "count": 34677, 
		          "term": "tnk"
		        }, 
		        {
		          "count": 21076, 
		          "term": "svz"
		        }, 
		        {
		          "count": 17655, 
		          "term": "s00"
		        }, 
		        {
		          "count": 7082, 
		          "term": "w30"
		        }, 
		        {
		          "count": 6662, 
		          "term": "sv8"
		        }, 
		        {
		          "count": 5964, 
		          "term": "syq"
		        }, 
		        {
		          "count": 5594, 
		          "term": "xn7"
		        }, 
		        {
		          "count": 5123, 
		          "term": "tq8"
		        }, 
		        {
		          "count": 4472, 
		          "term": "tq6"
		        }, 
		        {
		          "count": 4015, 
		          "term": "xn0"
		        }, 
		        {
		          "count": 3753, 
		          "term": "syp"
		        }, 
		        {
		          "count": 3463, 
		          "term": "tnb"
		        }, 
		        {
		          "count": 3432, 
		          "term": "tjm"
		        }, 
		        {
		          "count": 3398, 
		          "term": "tw4"
		        }, 
		        {
		          "count": 3074, 
		          "term": "syr"
		        }, 
		        {
		          "count": 2914, 
		          "term": "w1p"
		        }, 
		        {
		          "count": 2459, 
		          "term": "t02"
		        }, 
		        {
		          "count": 2082, 
		          "term": "tc9"
		        }, 
		        {
		          "count": 2032, 
		          "term": "wyd"
		        }, 
		        {
		          "count": 2008, 
		          "term": "w4r"
		        }, 
		        {
		          "count": 2002, 
		          "term": "wh6"
		        }, 
		        {
		          "count": 1817, 
		          "term": "tmy"
		        }, 
		        {
		          "count": 1801, 
		          "term": "tw1"
		        }, 
		        {
		          "count": 1772, 
		          "term": "twj"
		        }, 
		        {
		          "count": 1770, 
		          "term": "wvu"
		        }, 
		        {
		          "count": 1716, 
		          "term": "ttc"
		        }, 
		        {
		          "count": 1682, 
		          "term": "xn1"
		        }, 
		        {
		          "count": 1667, 
		          "term": "tjw"
		        }, 
		        {
		          "count": 1664, 
		          "term": "tj6"
		        }, 
		        {
		          "count": 1659, 
		          "term": "tmr"
		        }, 
		        {
		          "count": 1651, 
		          "term": "tjd"
		        }, 
		        {
		          "count": 1637, 
		          "term": "tmw"
		        }, 
		        {
		          "count": 1595, 
		          "term": "tp8"
		        }, 
		        {
		          "count": 1594, 
		          "term": "tnh"
		        }, 
		        {
		          "count": 1529, 
		          "term": "sv9"
		        }, 
		        {
		          "count": 1493, 
		          "term": "xn6"
		        }, 
		        {
		          "count": 1463, 
		          "term": "tne"
		        }, 
		        {
		          "count": 1462, 
		          "term": "szx"
		        }, 
		        {
		          "count": 1410, 
		          "term": "wyp"
		        }, 
		        {
		          "count": 1402, 
		          "term": "wyn"
		        }, 
		        {
		          "count": 1389, 
		          "term": "xn3"
		        }, 
		        {
		          "count": 1309, 
		          "term": "tn4"
		        }, 
		        {
		          "count": 1300, 
		          "term": "wsq"
		        }, 
		        {
		          "count": 1287, 
		          "term": "d29"
		        }, 
		        {
		          "count": 1280, 
		          "term": "tn0"
		        }, 
		        {
		          "count": 1275, 
		          "term": "ttb"
		        }, 
		        {
		          "count": 1271, 
		          "term": "ucf"
		        }, 
		        {
		          "count": 1266, 
		          "term": "tm2"
		        }, 
		        {
		          "count": 1259, 
		          "term": "twh"
		        }, 
		        {
		          "count": 1252, 
		          "term": "w4x"
		        }, 
		        {
		          "count": 1233, 
		          "term": "tnm"
		        }, 
		        {
		          "count": 1198, 
		          "term": "u15"
		        }, 
		        {
		          "count": 1194, 
		          "term": "svy"
		        }, 
		        {
		          "count": 1180, 
		          "term": "tn5"
		        }, 
		        {
		          "count": 1176, 
		          "term": "tn8"
		        }, 
		        {
		          "count": 1173, 
		          "term": "tmt"
		        }, 
		        {
		          "count": 1169, 
		          "term": "sfx"
		        }, 
		        {
		          "count": 1155, 
		          "term": "u0n"
		        }, 
		        {
		          "count": 1145, 
		          "term": "tc8"
		        }, 
		        {
		          "count": 1138, 
		          "term": "ttf"
		        }, 
		        {
		          "count": 1138, 
		          "term": "6gy"
		        }, 
		        {
		          "count": 1137, 
		          "term": "tp9"
		        }, 
		        {
		          "count": 1113, 
		          "term": "tw5"
		        }, 
		        {
		          "count": 1111, 
		          "term": "tuu"
		        }, 
		        {
		          "count": 1104, 
		          "term": "dr4"
		        }, 
		        {
		          "count": 1072, 
		          "term": "u0v"
		        }, 
		        {
		          "count": 1048, 
		          "term": "u09"
		        }, 
		        {
		          "count": 1040, 
		          "term": "gcp"
		        }, 
		        {
		          "count": 1038, 
		          "term": "sy1"
		        }, 
		        {
		          "count": 1023, 
		          "term": "sfr"
		        }, 
		        {
		          "count": 1018, 
		          "term": "tnd"
		        }, 
		        {
		          "count": 1007, 
		          "term": "svc"
		        }, 
		        {
		          "count": 993, 
		          "term": "ttv"
		        }, 
		        {
		          "count": 954, 
		          "term": "tn1"
		        }, 
		        {
		          "count": 941, 
		          "term": "u1h"
		        }, 
		        {
		          "count": 934, 
		          "term": "u0m"
		        }, 
		        {
		          "count": 933, 
		          "term": "u0w"
		        }, 
		        {
		          "count": 924, 
		          "term": "tug"
		        }, 
		        {
		          "count": 913, 
		          "term": "u0q"
		        }, 
		        {
		          "count": 909, 
		          "term": "u1j"
		        }, 
		        {
		          "count": 904, 
		          "term": "dr7"
		        }, 
		        {
		          "count": 874, 
		          "term": "u2m"
		        }, 
		        {
		          "count": 810, 
		          "term": "dqc"
		        }, 
		        {
		          "count": 717, 
		          "term": "tn7"
		        }, 
		        {
		          "count": 695, 
		          "term": "d2f"
		        }, 
		        {
		          "count": 694, 
		          "term": "u0u"
		        }, 
		        {
		          "count": 692, 
		          "term": "tjf"
		        }, 
		        {
		          "count": 686, 
		          "term": "xnd"
		        }, 
		        {
		          "count": 671, 
		          "term": "u0y"
		        }, 
		        {
		          "count": 667, 
		          "term": "drt"
		        }, 
		        {
		          "count": 665, 
		          "term": "u1w"
		        }, 
		        {
		          "count": 552, 
		          "term": "wc2"
		        }, 
		        {
		          "count": 526, 
		          "term": "u30"
		        }, 
		        {
		          "count": 523, 
		          "term": "tnt"
		        }, 
		        {
		          "count": 508, 
		          "term": "xne"
		        }, 
		        {
		          "count": 499, 
		          "term": "xps"
		        }, 
		        {
		          "count": 495, 
		          "term": "tjb"
		        }, 
		        {
		          "count": 489, 
		          "term": "dp3"
		        }, 
		        {
		          "count": 484, 
		          "term": "dr5"
		        }, 
		        {
		          "count": 357, 
		          "term": "u28"
		        }
		      ], 
		      "other": 406994, 
		      "missing": 50
		    };
	
	var geohashData2 = {
			data: ['ebz', 's0b', 's0c', 's0f', 's0g', 's0u', 's0v', 's0y', 's0z', 's2b', 's2c', 's2f', 's2g', 's2u', 's2v', 's2y', 's2z', 's8b', 's8c', 's8f', 's8g', 's8u', 's8v', 's8y', 's8z', 'sbb', 'sbc', 'sbf', 'sbg', 'ebx', 's08', 's09', 's0d', 's0e', 's0s', 's0t', 's0w', 's0x', 's28', 's29', 's2d', 's2e', 's2s', 's2t', 's2w', 's2x', 's88', 's89', 's8d', 's8e', 's8s', 's8t', 's8w', 's8x', 'sb8', 'sb9', 'sbd', 'sbe', 'ebr', 's02', 's03', 's06', 's07', 's0k', 's0m', 's0q', 's0r', 's22', 's23', 's26', 's27', 's2k', 's2m', 's2q', 's2r', 's82', 's83', 's86', 's87', 's8k', 's8m', 's8q', 's8r', 'sb2', 'sb3', 'sb6', 'sb7', 'ebp', 's00', 's01', 's04', 's05', 's0h', 's0j', 's0n', 's0p', 's20', 's21', 's24', 's25', 's2h', 's2j', 's2n', 's2p', 's80', 's81', 's84', 's85', 's8h', 's8j', 's8n', 's8p', 'sb0', 'sb1', 'sb4', 'sb5', '7zz', 'kpb', 'kpc', 'kpf', 'kpg', 'kpu', 'kpv', 'kpy', 'kpz', 'krb', 'krc', 'krf', 'krg', 'kru', 'krv', 'kry', 'krz', 'kxb', 'kxc', 'kxf', 'kxg', 'kxu', 'kxv', 'kxy', 'kxz', 'kzb', 'kzc', 'kzf', 'kzg', '7zx', 'kp8', 'kp9', 'kpd', 'kpe', 'kps', 'kpt', 'kpw', 'kpx', 'kr8', 'kr9', 'krd', 'kre', 'krs', 'krt', 'krw', 'krx', 'kx8', 'kx9', 'kxd', 'kxe', 'kxs', 'kxt', 'kxw', 'kxx', 'kz8', 'kz9', 'kzd', 'kze', '7zr', 'kp2', 'kp3', 'kp6', 'kp7', 'kpk', 'kpm', 'kpq', 'kpr', 'kr2', 'kr3', 'kr6', 'kr7', 'krk', 'krm', 'krq', 'krr', 'kx2', 'kx3', 'kx6', 'kx7', 'kxk', 'kxm', 'kxq', 'kxr', 'kz2', 'kz3', 'kz6', 'kz7', '7zp', 'kp0', 'kp1', 'kp4', 'kp5', 'kph', 'kpj', 'kpn', 'kpp', 'kr0', 'kr1', 'kr4', 'kr5', 'krh', 'krj', 'krn', 'krp', 'kx0', 'kx1', 'kx4', 'kx5', 'kxh', 'kxj', 'kxn', 'kxp', 'kz0', 'kz1', 'kz4', 'kz5', '7yz', 'knb', 'knc', 'knf', 'kng', 'knu', 'knv', 'kny', 'knz', 'kqb', 'kqc', 'kqf', 'kqg', 'kqu', 'kqv', 'kqy', 'kqz', 'kwb', 'kwc', 'kwf', 'kwg', 'kwu', 'kwv', 'kwy', 'kwz', 'kyb', 'kyc', 'kyf', 'kyg', '7yx', 'kn8', 'kn9', 'knd', 'kne', 'kns', 'knt', 'knw', 'knx', 'kq8', 'kq9', 'kqd', 'kqe', 'kqs', 'kqt', 'kqw', 'kqx', 'kw8', 'kw9', 'kwd', 'kwe', 'kws', 'kwt', 'kww', 'kwx', 'ky8', 'ky9', 'kyd', 'kye', '7yr', 'kn2', 'kn3', 'kn6', 'kn7', 'knk', 'knm', 'knq', 'knr', 'kq2', 'kq3', 'kq6', 'kq7', 'kqk', 'kqm', 'kqq', 'kqr', 'kw2', 'kw3', 'kw6', 'kw7', 'kwk', 'kwm', 'kwq', 'kwr', 'ky2', 'ky3', 'ky6', 'ky7', '7yp', 'kn0', 'kn1', 'kn4', 'kn5', 'knh', 'knj', 'knn', 'knp', 'kq0', 'kq1', 'kq4', 'kq5', 'kqh', 'kqj', 'kqn', 'kqp', 'kw0', 'kw1', 'kw4', 'kw5', 'kwh', 'kwj', 'kwn', 'kwp', 'ky0', 'ky1', 'ky4', 'ky5', '7vz', 'kjb', 'kjc', 'kjf', 'kjg', 'kju', 'kjv', 'kjy', 'kjz', 'kmb', 'kmc', 'kmf', 'kmg', 'kmu', 'kmv', 'kmy', 'kmz', 'ktb', 'ktc', 'ktf', 'ktg', 'ktu', 'ktv', 'kty', 'ktz', 'kvb', 'kvc', 'kvf', 'kvg', '7vx', 'kj8', 'kj9', 'kjd', 'kje', 'kjs', 'kjt', 'kjw', 'kjx', 'km8', 'km9', 'kmd', 'kme', 'kms', 'kmt', 'kmw', 'kmx', 'kt8', 'kt9', 'ktd', 'kte', 'kts', 'ktt', 'ktw', 'ktx', 'kv8', 'kv9', 'kvd', 'kve', '7vr', 'kj2', 'kj3', 'kj6', 'kj7', 'kjk', 'kjm', 'kjq', 'kjr', 'km2', 'km3', 'km6', 'km7', 'kmk', 'kmm', 'kmq', 'kmr', 'kt2', 'kt3', 'kt6', 'kt7', 'ktk', 'ktm', 'ktq', 'ktr', 'kv2', 'kv3', 'kv6', 'kv7', '7vp', 'kj0', 'kj1', 'kj4', 'kj5', 'kjh', 'kjj', 'kjn', 'kjp', 'km0', 'km1', 'km4', 'km5', 'kmh', 'kmj', 'kmn', 'kmp', 'kt0', 'kt1', 'kt4', 'kt5', 'kth', 'ktj', 'ktn', 'ktp', 'kv0', 'kv1', 'kv4', 'kv5', '7uz', 'khb', 'khc', 'khf', 'khg', 'khu', 'khv', 'khy', 'khz', 'kkb', 'kkc', 'kkf', 'kkg', 'kku', 'kkv', 'kky', 'kkz', 'ksb', 'ksc', 'ksf', 'ksg', 'ksu', 'ksv', 'ksy', 'ksz', 'kub', 'kuc', 'kuf', 'kug', '7ux', 'kh8', 'kh9', 'khd', 'khe', 'khs', 'kht', 'khw', 'khx', 'kk8', 'kk9', 'kkd', 'kke', 'kks', 'kkt', 'kkw', 'kkx', 'ks8', 'ks9', 'ksd', 'kse', 'kss', 'kst', 'ksw', 'ksx', 'ku8', 'ku9', 'kud', 'kue', '7ur', 'kh2', 'kh3', 'kh6', 'kh7', 'khk', 'khm', 'khq', 'khr', 'kk2', 'kk3', 'kk6', 'kk7', 'kkk', 'kkm', 'kkq', 'kkr', 'ks2', 'ks3', 'ks6', 'ks7', 'ksk', 'ksm', 'ksq', 'ksr', 'ku2', 'ku3', 'ku6', 'ku7', '7up', 'kh0', 'kh1', 'kh4', 'kh5', 'khh', 'khj', 'khn', 'khp', 'kk0', 'kk1', 'kk4', 'kk5', 'kkh', 'kkj', 'kkn', 'kkp', 'ks0', 'ks1', 'ks4', 'ks5', 'ksh', 'ksj', 'ksn', 'ksp', 'ku0', 'ku1', 'ku4', 'ku5']
	};
	var colorFunction = new L.HSLHueFunction(new L.Point(357,200), new L.Point(34677,0), {outputSaturation: '100%', outputLuminosity: '25%'});
	var fillColorFunction = new L.HSLHueFunction(new L.Point(357,200), new L.Point(34677,0), {outputSaturation: '100%', outputLuminosity: '50%'});
	
	var options = {
		recordsField: 'terms',
		geohashField: 'term',
		displayOptions: {
			count: {
				color: colorFunction,
				fillColor: fillColorFunction,
				gradient: true
			}
		},
		layerOptions: {
			fillOpacity: 0.7,
			opacity: 1,
			weight: 1,
			gradient: true
		}
	};
	
	var options2 = {
		recordsField: 'data',
		geohashField: null,
		layerOptions: {
			fillOpacity: 0.7,
			opacity: 1,
			weight: 1
		}
	};
	
	var layer = new L.GeohashDataLayer(geohashData,options);
	
	map.addLayer(layer);
	
	$('#legend').append(layer.getLegend({
		numSegments: 20,
		width: 80,
		className: 'well'
	}));
});