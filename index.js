'use strict'

module.exports = function (opts) {
  if (!Number.isFinite(opts.total)) throw new Error('missing required opts.total')

  var width = opts.width || 42
  var total = opts.total
  var incomplete = Array(width + 1).join(opts.incomplete || '-')
  var complete = Array(width + 1).join(opts.complete || '=')
  var unit = total / width

  return function (value) {
    var chars = unit === 0 ? width : Math.floor(value / unit)
    return complete.slice(0, chars) + incomplete.slice(chars)
  }
}
