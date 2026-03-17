import { spawn } from 'node:child_process'

const command = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm'
const child = spawn(command, ['build'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
  env: {
    ...process.env,
    FRONTEND_ONLY: 'true',
  },
})

child.on('exit', (code) => {
  process.exit(code ?? 1)
})
