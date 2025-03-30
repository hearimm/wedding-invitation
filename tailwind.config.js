// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        fontFamily: {
          // 기본 폰트 설정
          sans: ['Poppins', 'sans-serif'], // 기본 폰트 변경
          // 제목용 서체 추가
          brush: ['Nanum Brush Script', 'cursive'],
          // 영문 서체 별도 설정 (필요시)
          eng: ['Great Vibes', 'cursive']
        },
      },
    },
    plugins: [],
  }