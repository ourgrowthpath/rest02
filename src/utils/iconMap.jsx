import {
  LuTarget, LuHandshake, LuZap, LuRocket,
  LuGlobe, LuSettings2, LuChartBar, LuBrain,
  LuMail, LuPhone, LuMapPin, LuClock,
  LuLightbulb, LuCircleCheck, LuChevronRight,
  LuTrendingUp, LuShield, LuUsers, LuStar,
} from 'react-icons/lu'

export const iconMap = {
  // 핵심 가치
  target:    LuTarget,
  handshake: LuHandshake,
  zap:       LuZap,
  rocket:    LuRocket,

  // 서비스
  globe:     LuGlobe,
  settings:  LuSettings2,
  barChart:  LuChartBar,
  brain:     LuBrain,

  // 연락처
  mail:      LuMail,
  phone:     LuPhone,
  mapPin:    LuMapPin,
  clock:     LuClock,

  // 기타
  lightbulb: LuLightbulb,
  check:     LuCircleCheck,
  chevron:   LuChevronRight,
  trending:  LuTrendingUp,
  shield:    LuShield,
  users:     LuUsers,
  star:      LuStar,
}

export function Icon({ name, size = 22, className = '', style = {} }) {
  const C = iconMap[name]
  if (!C) return null
  return <C size={size} className={className} style={style} strokeWidth={1.6} />
}
