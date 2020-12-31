export enum TabFilterStatus {
  all = 1,
  active = 2,
  completed = 3
}

export interface Tab {
  id: TabFilterStatus
  label: string
}

export interface TabItemPropsDefine {
  tab: Tab
  checked: TabFilterStatus
  onClick: (tab: Tab) => void
}
