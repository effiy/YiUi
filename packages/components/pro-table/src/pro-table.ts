import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'

export const proTableProps = buildProps({} as const)
export type ProTableProps = ExtractPropTypes<typeof proTableProps>

export const proTableEmits = {}
export type ProTableEmits = typeof proTableEmits
