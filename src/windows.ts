import { UniversalNotification } from '@utils/parse-universal-notification'
import { spawn } from 'child_process'
import { waitForEventEmitter } from '@blackglory/wait-for'

export async function notify(notification: UniversalNotification): Promise<void> {
  const options: string[] = []
  if (notification.title && notification.message) {
    options.push('-Text', escape(notification.title), ',', escape(notification.message))
  } else if (notification.title) {
    options.push('-Text', escape(notification.title))
  } else if (notification.message) {
    options.push('-Text', escape(notification.message))
  }
  if (notification.url) options.push('-ActivatedAction', `{ Start-Process ${escape(notification.url)} }`)
  if (notification.iconUrl) options.push('-AppLogo', escape(notification.iconUrl))
  if (notification.imageUrl) options.push('-HeroImage', escape(notification.imageUrl))

  const proc = spawn('pwsh.exe', ['--Command', `New-BurntToastNotification ${options.join(' ')}`], { stdio: 'inherit' })
  await waitForEventEmitter(proc, 'close')
}

function escape(str: string): string {
  const result = str.replace(/\\/g, '\\\\')
                    .replace(/'/g, "\\'")
  return `'${result}'`
}
