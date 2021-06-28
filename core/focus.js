export default function registeredFocus(app) {
    app.directive('focus', {
        mounted(el) {
            el.focus()
        }
    })
}