// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        fontFamily: {
          // 기본 폰트 설정
          sans: ['var(--font-playfair)', 'var(--font-noto-serif-kr)','serif'],
          // 제목용 서체 (영문)
          brush: ['var(--font-great-vibes)', 'cursive'], // 영문 제목용
          // 한글 폰트 설정
          korean: ['var(--font-noto-serif-kr)', 'serif'], // 한글 기본 텍스트
          'korean-title': ['var(--font-nanum-myeongjo)', 'serif'], // 한글 제목용
        },
      },
    },
    plugins: [],
  }