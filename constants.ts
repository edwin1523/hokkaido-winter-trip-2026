
import { DaySchedule } from './types';

export const TRIP_DATA: DaySchedule[] = [
  {
    date: '2月14日',
    dayOfWeek: '星期六',
    items: [
      { id: 'd1-1', icon: '✈️', time: '14:20 - 19:15', activity: '香港 (T1) → 東京羽田 (T3)', details: { note: '航班: NH860' } },
      { id: 'd1-2', icon: '✈️', time: '21:00 - 22:35', activity: '東京羽田 (T2) → 新千歲 (TD)', details: { note: '航班: NH4739' } },
      { id: 'd1-3', icon: '🚆', time: '23:21 - 23:54', activity: '新千歲 → 札幌', details: { note: '搭乘 JR 快速電車' } },
      { id: 'd1-4', icon: '🏨', time: '深夜', activity: '入住: 札幌大通公園SAN GRAN酒店', details: { address: '札幌大通公園SAN GRAN酒店', note: 'Check-in: 15:00 (預計深夜抵達)，地點：地下街12號出口', link: { text: 'Google Maps', url: 'https://maps.app.goo.gl/goD6a1ZGXKB1WjM87' } } }
    ]
  },
  {
    date: '2月15日',
    dayOfWeek: '星期日',
    items: [
      { id: 'd2-1', icon: '🚇', time: '早上', activity: '酒店 → 札幌工廠', details: { address: '札幌工廠', note: '電鐵東西線，巴士中心前8出口', link: { text: '查看地點', url: 'https://maps.app.goo.gl/wum5L6nhyqqWVCLR7' } } },
      { id: 'd2-2', icon: '🚌', time: '上午', activity: '札幌工廠 → Ario札幌', details: { address: 'Ario札幌', note: '巴士 東３苗穗線', link: { text: '查看地點', url: 'https://maps.app.goo.gl/yXyjZZy5rcuFKE1n8' } } },
      { id: 'd2-3', icon: '🍽️', time: '11:00', activity: '午餐: 一夜干海鮮丼', details: { address: '一夜干海鮮丼', link: { text: '餐廳位置', url: 'https://maps.app.goo.gl/sDkuoS8JtaAsNpPe6' } } },
      { id: 'd2-4', icon: '🥩', time: '20:00', activity: '晚餐: SAPPORO NIKUAZABU (燒肉)', details: { address: 'SAPPORO NIKUAZABU', link: { text: '餐廳位置', url: 'https://maps.app.goo.gl/pDJge3oBUvwHdCeD6' } } }
    ]
  },
  {
    date: '2月16日',
    dayOfWeek: '星期一',
    items: [
      { id: 'd3-1', icon: '🛍️', time: '全天', activity: '地下街 Shopping', details: { note: '札幌地下街指南', link: { text: '地下街攻略', url: 'https://kaikk.tw/sapporo-chikaho/' } } },
      { id: 'd3-2', icon: '🍽️', time: '12:00', activity: '午餐: Sushi-Don (海鮮丼)', details: { address: 'Sushi-Don', link: { text: '餐廳位置', url: 'https://maps.app.goo.gl/HqF4RQjxQHBYJHmAA' } } },
      { id: 'd3-3', icon: '🦀', time: '18:00', activity: '晚餐: 蟹座 (蟹放題)', details: { address: '蟹座', link: { text: '餐廳位置', url: 'https://maps.app.goo.gl/11HoiYdewA7f2cyf7' } } }
    ]
  },
  {
    date: '2月17日',
    dayOfWeek: '星期二',
    items: [
      { id: 'd4-1', icon: '🏨', time: '11:00', activity: '酒店 Check-out', details: { note: '準備移動至登別' } },
      { id: 'd4-2', icon: '🍛', time: '11:45', activity: '午餐: Soup curry syabazo', details: { address: 'Soup curry syabazo', link: { text: '餐廳位置', url: 'https://maps.app.goo.gl/t2chSTvbmx9zgxMz5' } } },
      { id: 'd4-3', icon: '🚌', time: '13:40 - 15:23', activity: '札幌 → 登別', details: { note: '預約號碼: 40883687', link: { text: '道南巴士位置', url: 'https://maps.app.goo.gl/ee2NTPfbVdgTUte2A' } } },
      { id: 'd4-4', icon: '♨️', time: '下午', activity: '入住: 第一瀧本館', details: { address: '第一瀧本館', note: 'Check-in: 14:00，可以帶泳衣泡湯', link: { text: '酒店位置', url: 'https://maps.app.goo.gl/SmWLtSEgRZmSKXg39' } } }
    ]
  },
  {
    date: '2月18日',
    dayOfWeek: '星期三',
    items: [
      { id: 'd5-1', icon: '🍽️', time: '07:00', activity: '酒店早餐', details: { note: '享受精緻日式早餐' } },
      { id: 'd5-2', icon: '🧳', time: '上午', activity: '寄送行李', details: { note: '可以寄行李去函館酒店，輕鬆旅遊' } },
      { id: 'd5-3', icon: '♨️', time: '全天', activity: '登別溫泉放鬆', details: { address: '第一瀧本館', note: '享受多種泉質' } }
    ]
  },
  {
    date: '2月19日',
    dayOfWeek: '星期四',
    items: [
      { id: 'd6-1', icon: '🚌', time: '09:03 - 09:30', activity: '第一瀧本前 → 登別站', details: { note: '注意: 僅收現金 (Cash only)' } },
      { id: 'd6-2', icon: '🛒', time: '上午', activity: '登別站超市買餸', details: { address: '登別站超市', link: { text: '超市位置', url: 'https://maps.app.goo.gl/uZAr4f6P9Tg3bvTY8' } } },
      { id: 'd6-3', icon: '🚆', time: '11:00 - 13:19', activity: '登別站 → 新函館北斗站', details: { note: '搭乘 JR 北斗特急' } },
      { id: 'd6-4', icon: '🚗', time: '13:30', activity: '新函館北斗站租車', details: { address: '新函館北斗站', link: { text: '租車點位置', url: 'https://maps.app.goo.gl/bW9eHAuEQCuKMshi6' } } },
      { id: 'd6-5', icon: '🏨', time: '15:00', activity: '入住: LiVE MAX度假村函館Geenpia大沼', details: { address: 'LiVE MAX度假村函館Geenpia大沼', note: '自己動手煮晚餐', link: { text: '度假村位置', url: 'https://maps.app.goo.gl/fxnNxL1CgTBxPG9E9' } } }
    ]
  },
  {
    date: '2月20日',
    dayOfWeek: '星期五',
    items: [
      { id: 'd7-1', icon: '🚗', time: '16:00', activity: '新函館北斗站還車', details: { address: '新函館北斗站' } },
      { id: 'd7-2', icon: '🚆', time: '16:07', activity: '新函館北斗 → 函館', details: { note: '前往市區' } },
      { id: 'd7-3', icon: '🎆', time: '18:00', activity: '函館花火大會', details: { note: '冬季璀璨花火' } },
      { id: 'd7-4', icon: '🚠', time: '晚上', activity: '函館山觀景台', details: { note: '搭乘巴士 (2, 3號線) 或纜車' } },
      { id: 'd7-5', icon: '🍔', time: '晚上', activity: '晚餐: 幸運小丑漢堡', details: { address: '幸運小丑漢堡', link: { text: '餐廳位置', url: 'https://maps.app.goo.gl/5sLjnkxYbrQT4hfL8' } } },
      { id: 'd7-6', icon: '🏨', time: '15:00', activity: '入住: 北海道函館站前柔婕閣酒店', details: { address: '北海道函館站前柔婕閣酒店', link: { text: '酒店位置', url: 'https://maps.app.goo.gl/AxDnipUNGC8K71tf8' } } }
    ]
  },
  {
    date: '2月21日',
    dayOfWeek: '星期六',
    items: [
      { id: 'd8-1', icon: '🏯', time: '上午', activity: '五稜郭公園', details: { address: '五稜郭', link: { text: '景點位置', url: 'https://maps.app.goo.gl/fjKJEV5XowL8B4f19' } } },
      { id: 'd8-2', icon: '🐟', time: '上午', activity: '函館朝市', details: { address: '函館朝市', link: { text: '市場位置', url: 'https://maps.app.goo.gl/9Rn5gTLEueR9uqrW7' } } },
      { id: 'd8-3', icon: '🥩', time: '18:00', activity: '晚餐: 大黑屋', details: { address: '大黑屋', link: { text: '餐廳位置', url: 'https://maps.app.goo.gl/3CyJezEJrUyjmFpg6' } } }
    ]
  },
  {
    date: '2月22日',
    dayOfWeek: '星期日',
    items: [
      { id: 'd9-1', icon: '🍣', time: '09:00', activity: '海鮮餐: 世壱屋 (うにむらかみ)', details: { address: '世壱屋', link: { text: '餐廳位置', url: 'https://maps.app.goo.gl/yq6uQuxCsaf9qX1x9' } } },
      { id: 'd9-2', icon: '🍣', time: '午餐', activity: '根室花丸迴轉壽司', details: { address: '根室花丸', link: { text: '餐廳位置', url: 'https://maps.app.goo.gl/xPqdtbqizCxcVhFbA' } } },
      { id: 'd9-3', icon: '🚌', time: '17:20', activity: '函館站 → 函館機場', details: { note: '預留時間辦理登機' } },
      { id: 'd9-4', icon: '✈️', time: '19:05 - 20:35', activity: '函館 → 東京羽田 (T2)', details: { note: '航班: NH558' } }
    ]
  },
  {
    date: '2月23日',
    dayOfWeek: '星期一',
    items: [
      { id: 'd10-1', icon: '✈️', time: '02:00 - 05:45', activity: '東京羽田 (T2) → 香港 (T1)', details: { note: '航班: NH813' } },
      { id: 'd10-2', icon: '🏠', time: '早上', activity: '返回溫暖的家', details: { note: '結束完美的旅程' } }
    ]
  }
];
