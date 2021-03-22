/**
 * Returns number part from css time
 * @param source
 * @returns
 */
const getNumberPart = (source: string, unit: string, positive: boolean = true) => {
  const numberPart = parseFloat(source.replace(unit, ''))
  if (isNaN(numberPart)) throw new TypeError(`${source} did not have number`)
  return numberPart
}
/**
 * CSS transition-duration <time> is support ms, s
 * https://drafts.csswg.org/css-values-3/#time
 * @param source {String}
 * @returns {Number} - milliseconds
 */
function dtms(source: string) {
  const isValid = source.includes('s') || source.includes('ms')
  if (!isValid) throw new TypeError('It support only [ms] and [s]')

  if (source.endsWith('ms')) {
    return getNumberPart(source, 'ms')
  }
  const milliseconds = getNumberPart(source, 's')
  const SECOND = 1000
  return milliseconds * SECOND
}

export { dtms }
