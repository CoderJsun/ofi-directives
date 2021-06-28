import registeredFocus from './focus'
import registeredFormatTime from './format-time'

export default function registeredDirectives(app) {
    registeredFocus(app)
    registeredFormatTime(app)
}