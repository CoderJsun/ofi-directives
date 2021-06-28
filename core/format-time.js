// 将时间转换成指定时间显示指令
import dayjs from 'dayjs'
export default function registeredFormatTime(app) {
    app.directive('format-time', {
        mounted(el, bindings) {
            let timstamp = parseInt(el.textContent)
            const formatString = bindings.value
            el.textContent.length === 10 ? timstamp = timstamp * 1000 : timstamp
            // 通过 dayjs 格式化
            const realFormat = formatString ? formatString : 'YYYY-MM-DD HH:mm:ss'
            el.textContent = dayjs(timstamp).format(realFormat)
        }
    })
}