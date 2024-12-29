import { withInstall } from '@element-plus/utils'
import ProTable from './src/pro-table.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const YiProTable: SFCWithInstall<typeof ProTable> = withInstall(ProTable)
export default YiProTable

export * from './src/pro-table'
export type { ProTableInstance } from './src/instance'
