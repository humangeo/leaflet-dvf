/*
 * @preserve Code updated/borrowed from:  http://www.crispymtn.com/stories/the-algorithm-for-a-perfectly-balanced-photo-gallery
 */
var linearPartition,
  _this = this;

linearPartition = function(seq, k) {
  var ans, i, j, m, n, solution, table, x, y, _i, _j, _k, _l;
  n = seq.length;
  if (k <= 0) {
    return [];
  }
  if (k > n) {
    return seq.map(function(x) {
      return [x];
    });
  }
  table = (function() {
    var _i, _results;
    _results = [];
    for (y = _i = 0; 0 <= n ? _i < n : _i > n; y = 0 <= n ? ++_i : --_i) {
      _results.push((function() {
        var _j, _results1;
        _results1 = [];
        for (x = _j = 0; 0 <= k ? _j < k : _j > k; x = 0 <= k ? ++_j : --_j) {
          _results1.push(0);
        }
        return _results1;
      })());
    }
    return _results;
  })();
  solution = (function() {
    var _i, _ref, _results;
    _results = [];
    for (y = _i = 0, _ref = n - 1; 0 <= _ref ? _i < _ref : _i > _ref; y = 0 <= _ref ? ++_i : --_i) {
      _results.push((function() {
        var _j, _ref1, _results1;
        _results1 = [];
        for (x = _j = 0, _ref1 = k - 1; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; x = 0 <= _ref1 ? ++_j : --_j) {
          _results1.push(0);
        }
        return _results1;
      })());
    }
    return _results;
  })();
  for (i = _i = 0; 0 <= n ? _i < n : _i > n; i = 0 <= n ? ++_i : --_i) {
    table[i][0] = seq[i] + (i ? table[i - 1][0] : 0);
  }
  for (j = _j = 0; 0 <= k ? _j < k : _j > k; j = 0 <= k ? ++_j : --_j) {
    table[0][j] = seq[0];
  }
  for (i = _k = 1; 1 <= n ? _k < n : _k > n; i = 1 <= n ? ++_k : --_k) {
    for (j = _l = 1; 1 <= k ? _l < k : _l > k; j = 1 <= k ? ++_l : --_l) {
      m = _.min((function() {
        var _m, _results;
        _results = [];
        for (x = _m = 0; 0 <= i ? _m < i : _m > i; x = 0 <= i ? ++_m : --_m) {
          _results.push([_.max([table[x][j - 1], table[i][0] - table[x][0]]), x]);
        }
        return _results;
      })(), function(o) {
        return o[0];
      });
      table[i][j] = m[0];
      solution[i - 1][j - 1] = m[1];
    }
  }
  n = n - 1;
  k = k - 2;
  ans = [];
  while (k >= 0) {
    ans = [
      (function() {
        var _m, _ref, _ref1, _results;
        _results = [];
        for (i = _m = _ref = solution[n - 1][k] + 1, _ref1 = n + 1; _ref <= _ref1 ? _m < _ref1 : _m > _ref1; i = _ref <= _ref1 ? ++_m : --_m) {
          _results.push(seq[i]);
        }
        return _results;
      })()
    ].concat(ans);
    n = solution[n - 1][k];
    k = k - 1;
  }
  return [
    (function() {
      var _m, _ref, _results;
      _results = [];
      for (i = _m = 0, _ref = n + 1; 0 <= _ref ? _m < _ref : _m > _ref; i = 0 <= _ref ? ++_m : --_m) {
        _results.push(seq[i]);
      }
      return _results;
    })()
  ].concat(ans);
};

var layoutPhotos = function (elementSelector, photos, getAspectRatio, resize) {
	var idealHeight, index, partition, rowBuffer, rows, summedWidth, viewportWidth, weights;
	var $element = $(elementSelector);
	
	viewportWidth = $element.width();

	idealHeight = parseInt($element.height() / 3);

	summedWidth = _.reduce(photos, function(sum, p) {
	  return sum += getAspectRatio(p) * idealHeight;
	}, 0);

	rows = Math.round(summedWidth / viewportWidth);

	if (rows < 1) {
	  _.each(photos, function(photo) {
		return resize(photo, parseInt(idealHeight * getAspectRatio(photo)), idealHeight);
	  });
	} 
	else {
	  weights = _.map(photos, function(p) {
		return parseInt(getAspectRatio(p) * 100);
	  });
	  partition = linearPartition(weights, rows);
	  index = 0;
	  _.each(partition, function(row) {
		var summed_ratios;
		rowBuffer = [];
		_.each(row, function() {
		  var photo = photos[index++];
		  rowBuffer.push(photo);
		  return photo;
		});
		summed_ratios = _.reduce(rowBuffer, function(sum, p) {
		  return sum += getAspectRatio(p);
		}, 0);
		return _.each(rowBuffer, function(photo) {
		  return resize(photo, parseInt(viewportWidth / summed_ratios * getAspectRatio(photo)), parseInt(viewportWidth / summed_ratios));
		});
	  });
	}
	
	$element.empty();
	
	_.each(photos, function (photo) {
		$(_.template('<img src="<%= photo_file_url %>" width="<%= width %>" height="<%= height %>"/>', photo)).hide().appendTo($element).fadeIn('slow');
	});
}