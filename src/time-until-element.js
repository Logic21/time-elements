/* @flow strict */

import RelativeTime from './relative-time'
import RelativeTimeElement from './relative-time-element'

export default class TimeUntilElement extends RelativeTimeElement {
  getFormattedDate() {
    const format = this.getAttribute('format')
    if (!this._date) return
    if (format === 'micro') {
      return new RelativeTime(this._date).microTimeUntil()
    } else {
      return new RelativeTime(this._date).timeUntil()
    }
  }
}

if (!window.customElements.get('time-until')) {
  window.TimeUntilElement = TimeUntilElement
  window.customElements.define('time-until', TimeUntilElement)
}
