export const cases = [
  {
    id: 1,
    title: "런던 브리지의 미스터리",
    scenario: "런던 브리지 근처에서 한 남성의 시체가 발견되었습니다. 피해자는 유명한 보석상이었습니다.",
    background: "/images/background/london-bridge.png",
    suspects: [
      { 
        name: "존 스미스", 
        image: "/images/characters/john-smith.png", 
        alibi: "범행 시간에 pub에 있었다고 주장" 
      },
      { 
        name: "메리 존슨", 
        image: "/images/characters/mary-johnson.png", 
        alibi: "피해자의 전 연인이지만, 범행 당일 출장 중이었다고 함" 
      },
      { 
        name: "윌리엄 브라운", 
        image: "/images/characters/william-brown.png", 
        alibi: "피해자의 사업 파트너로, 함께 저녁 식사를 했다고 진술" 
      },
    ],
    weapons: [
      { name: "독약", image: "/images/weapons/poison.png" },
      { name: "권총", image: "/images/weapons/gun.png" },
      { name: "칼", image: "/images/weapons/knife.png" },
    ],
    clues: [
      "피해자의 주머니에서 이상한 향이 나는 손수건이 발견되었습니다.",
      "범행 현장 근처에서 권총 소리를 들었다는 목격자가 있습니다.",
      "피해자의 손에 깊은 칼자국이 있었습니다.",
      "피해자의 마지막 통화 기록이 윌리엄 브라운과의 것이었습니다.",
      "메리 존슨의 출장 일정이 갑자기 변경되었다는 정보가 있습니다.",
    ],
    solution: { suspect: "윌리엄 브라운", weapon: "칼" }
  },
  {
    id: 2,
    title: "오페라 하우스의 비극",
    scenario: "런던 오페라 하우스에서 유명 소프라노 가수가 공연 중 독살당했습니다.",
    background: "/images/backgrounds/opera-house.jpg",
    suspects: [
      { name: "에밀리 로즈", image: "/images/characters/emily-rose.jpg", alibi: "분장실에서 메이크업 중이었다고 주장" },
      { name: "리처드 그레이", image: "/images/characters/richard-gray.jpg", alibi: "무대 뒤에서 다음 공연을 준비 중이었다고 함" },
      { name: "올리비아 그린", image: "/images/characters/olivia-green.jpg", alibi: "관객석에서 공연을 관람 중이었다고 진술" },
    ],
    weapons: [
      { name: "독약", image: "/images/weapons/poison.jpg" },
      { name: "비수", image: "/images/weapons/dagger.jpg" },
      { name: "독침", image: "/images/weapons/poison-needle.jpg" },
    ],
    clues: [
      "피해자의 음료에서 미량의 독성 물질이 검출되었습니다.",
      "에밀리 로즈의 가방에서 독약 병이 발견되었습니다.",
      "에밀리 로즈가 최근 피해자와 주역을 두고 경쟁했다는 소문이 있습니다.",
      "에밀리 로즈의 알리바이에 몇 가지 모순점이 발견되었습니다.",
      "피해자의 일기장에 에밀리 로즈를 경계하는 내용이 적혀있었습니다.",
    ],
    solution: { suspect: "에밀리 로즈", weapon: "독약" }
  },
  {
    id: 3,
    title: "박물관의 도난 사건",
    scenario: "대영 박물관에서 귀중한 다이아몬드가 도난당했습니다.",
    background: "/images/backgrounds/museum.jpg",
    suspects: [
      { name: "토마스 블랙", image: "/images/characters/thomas-black.jpg", alibi: "보안 순찰 중이었다고 주장" },
      { name: "사라 화이트", image: "/images/characters/sarah-white.jpg", alibi: "exhibition 준비로 바빴다고 진술" },
      { name: "마이클 브라운", image: "/images/characters/michael-brown.jpg", alibi: "박물관 카페에서 휴식 중이었다고 함" },
    ],
    weapons: [
      { name: "가스총", image: "/images/weapons/gas-gun.jpg" },
      { name: "전기충격기", image: "/images/weapons/taser.jpg" },
      { name: "마취제", image: "/images/weapons/anesthetic.jpg" },
    ],
    clues: [
      "도난 현장 근처에서 마이클 브라운의 지문이 발견되었습니다.",
      "마이클 브라운의 집에서 박물관 내부 도면이 발견되었습니다.",
      "CCTV에 마이클 브라운이 의심스러운 행동을 하는 모습이 찍혔습니다.",
      "마이클 브라운에게 거액의 빚이 있다는 사실이 밝혀졌습니다.",
      "도난 당일 마이클 브라운이 평소와 다르게 긴장한 모습을 보였다는 증언이 있습니다.",
    ],
    solution: { suspect: "마이클 브라운", weapon: "가스총" }
  },
  {
    id: 4,
    title: "호텔의 미스터리",
    scenario: "런던의 고급 호텔에서 유명 정치인이 살해당했습니다.",
    background: "/images/backgrounds/hotel.jpg",
    suspects: [
      { name: "제임스 윌슨", image: "/images/characters/james-wilson.jpg", alibi: "호텔 바에서 술을 마시고 있었다고 주장" },
      { name: "엘리자베스 테일러", image: "/images/characters/elizabeth-taylor.jpg", alibi: "룸서비스 담당이었다고 진술" },
      { name: "로버트 킹", image: "/images/characters/robert-king.jpg", alibi: "옆방에서 휴식 중이었다고 함" },
    ],
    weapons: [
      { name: "로프", image: "/images/weapons/rope.jpg" },
      { name: "독침", image: "/images/weapons/poison-needle.jpg" },
      { name: "권총", image: "/images/weapons/gun.jpg" },
    ],
    clues: [
      "현장에서 로버트 킹의 지문이 묻은 로프가 발견되었습니다.",
      "피해자와 로버트 킹 사이에 정치적 갈등이 있었다는 사실이 밝혀졌습니다.",
      "로버트 킹의 방에서 피해자에 대한 조사 자료가 발견되었습니다.",
      "목격자가 로버트 킹이 피해자의 방으로 들어가는 것을 봤다고 증언했습니다.",
      "로버트 킹의 알리바이에 심각한 모순이 발견되었습니다.",
    ],
    solution: { suspect: "로버트 킹", weapon: "로프" }
  },
  {
    id: 5,
    title: "극장의 비극",
    scenario: "웨스트엔드 극장에서 유명 배우가 공연 중 살해당했습니다.",
    background: "/images/backgrounds/theater.jpg",
    suspects: [
      { name: "다니엘 스미스", image: "/images/characters/daniel-smith.jpg", alibi: "분장실에서 대본을 연습하고 있었다고 주장" },
      { name: "소피아 존슨", image: "/images/characters/sophia-johnson.jpg", alibi: "무대 뒤에서 의상을 정리하고 있었다고 진술" },
      { name: "알렉스 브라운", image: "/images/characters/alex-brown.jpg", alibi: "관객석에서 공연을 관람 중이었다고 함" },
    ],
    weapons: [
      { name: "독약", image: "/images/weapons/poison.jpg" },
      { name: "비수", image: "/images/weapons/dagger.jpg" },
      { name: "전기충격기", image: "/images/weapons/taser.jpg" },
    ],
    clues: [
      "피해자의 의상에서 소피아 존슨의 머리카락이 발견되었습니다.",
      "소피아 존슨의 분장실에서 독약 병이 발견되었습니다.",
      "소피아 존슨이 최근 피해자와 심각한 언쟁을 벌였다는 목격담이 있습니다.",
      "소피아 존슨의 알리바이에 허점이 발견되었습니다.",
      "피해자가 소피아 존슨에게 불리한 증거를 가지고 있었다는 소문이 있습니다.",
    ],
    solution: { suspect: "소피아 존슨", weapon: "독약" }
  },
  {
    id: 6,
    title: "고급 레스토랑의 비극",
    scenario: "런던의 미슐랭 3스타 레스토랑에서 유명 음식 평론가가 독살당했습니다.",
    background: "/images/backgrounds/restaurant.jpg",
    suspects: [
      { name: "고든 램지", image: "/images/characters/gordon-ramsey.jpg", alibi: "주방에서 요리 중이었다고 주장" },
      { name: "제이미 올리버", image: "/images/characters/jamie-oliver.jpg", alibi: "와인 선별 중이었다고 진술" },
      { name: "나이젤 슬레이터", image: "/images/characters/nigel-slater.jpg", alibi: "레스토랑 입구에서 손님을 맞이하고 있었다고 함" },
    ],
    weapons: [
      { name: "독약", image: "/images/weapons/poison.jpg" },
      { name: "칼", image: "/images/weapons/knife.jpg" },
      { name: "알레르기 유발 물질", image: "/images/weapons/allergen.jpg" },
    ],
    clues: [
      "피해자의 음식에서 미량의 독성 물질이 검출되었습니다.",
      "제이미 올리버의 주방 락커에서 독약 병이 발견되었습니다.",
      "제이미 올리버가 최근 피해자로부터 심한 비평을 받았다는 사실이 밝혀졌습니다.",
      "제이미 올리버의 알리바이에 몇 가지 모순점이 발견되었습니다.",
      "피해자의 노트북에 제이미 올리버에 대한 추가 비평 내용이 작성 중이었습니다.",
    ],
    solution: { suspect: "제이미 올리버", weapon: "독약" }
  }
];