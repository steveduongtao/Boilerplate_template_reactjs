import React, { useEffect, useState } from 'react';
import image1 from './img/image1.jpg';
import image2 from './img/image2.jpg';
import image3 from './img/image3.jpg';
import image4 from './img/image4.jpg';

function ExportTableToExcel(props) {
  const { id } = props;

  return (
    <div
      id={id}
      style={{
        fontSize: '13px',
        position: 'absolute',
        top: '-1000000px',
        overflow: 'hidden',
      }}
    >
      Với nhiều chủ đề khác nhau khi viết thư gửi cho người bạn thân thiết, tài
      liệu "Bài viết tiếng Anh theo 32 chủ đề" sẽ giúp các bạn chuẩn bị và luyện
      tập kỹ năng viết Tiếng Anh hiệu quả, giúp các bạn phát triển khả năng
      viết, từ đó đạt thành công trong học tập và công việc, giúp các bạn ôn thi
      IELTS, TOEFL, THPT Quốc gia... hiệu quả. Mời các bạn tham khảo. Viết đoạn
      văn tiếng Anh theo chủ đề I. Cấu trúc một đoạn văn tiếng Anh ngắn II. TOP
      32 Các đoạn văn tiếng Anh theo chủ đề thường gặp 1. Viết đoạn văn về ngày
      Tết bằng tiếng Anh có dịch 2. Write about your hobby 3 Write about your
      ideal lover in future 4. Write about your favorite subject at school 5.
      Write about your favorite sport 6. Write about a person you love most 7.
      Write about the subject you hate most at school 8. Write about your
      idolVới nhiều chủ đề khác nhau khi viết thư gửi cho người bạn thân thiết,
      tài liệu "Bài viết tiếng Anh theo 32 chủ đề" sẽ giúp các bạn chuẩn bị và
      luyện tập kỹ năng viết Tiếng Anh hiệu quả, giúp các bạn phát triển khả
      năng viết, từ đó đạt thành công trong học tập và công việc, giúp các bạn
      ôn thi IELTS, TOEFL, THPT Quốc gia... hiệu quả. Mời các bạn tham khảo.
      Viết đoạn văn tiếng Anh theo chủ đề I. Cấu trúc một đoạn văn tiếng Anh
      ngắn II. TOP 32 Các đoạn văn tiếng Anh theo chủ đề thường gặp 1. Viết đoạn
      văn về ngày Tết bằng tiếng Anh có dịch 2. Write about your hobby 3 Write
      about your ideal lover in future 4. Write about your favorite subject at
      school 5. Write about your favorite sport 6. Write about a person you love
      most 7. Write about the subject you hate most at school 8. Write about
      your idolVới nhiều chủ đề khác nhau khi viết thư gửi cho người bạn thân
      thiết, tài liệu "Bài viết tiếng Anh theo 32 chủ đề" sẽ giúp các bạn chuẩn
      bị và luyện tập kỹ năng viết Tiếng Anh hiệu quả, giúp các bạn phát triển
      khả năng viết, từ đó đạt thành công trong học tập và công việc, giúp các
      bạn ôn thi IELTS, TOEFL, THPT Quốc gia... hiệu quả. Mời các bạn tham khảo.
      Viết đoạn văn tiếng Anh theo chủ đề I. Cấu trúc một đoạn văn tiếng Anh
      ngắn II. TOP 32 Các đoạn văn tiếng Anh theo chủ đề thường gặp 1. Viết đoạn
      văn về ngày Tết bằng tiếng Anh có dịch 2. Write about your hobby 3 Write
      about your ideal lover in future 4. Write about your favorite subject at
      school 5. Write about your favorite sport 6. Write about a person you love
      most 7. Write about the subject you hate most at school 8. Write about
      your idolVới nhiều chủ đề khác nhau khi viết thư gửi cho người bạn thân
      thiết, tài liệu "Bài viết tiếng Anh theo 32 chủ đề" sẽ giúp các bạn chuẩn
      bị và luyện tập kỹ năng viết Tiếng Anh hiệu quả, giúp các bạn phát triển
      khả năng viết, từ đó đạt thành công trong học tập và công việc, giúp các
      bạn ôn thi IELTS, TOEFL, THPT Quốc gia... hiệu quả. Mời các bạn tham khảo.
      Viết đoạn văn tiếng Anh theo chủ đề I. Cấu trúc một đoạn văn tiếng Anh
      ngắn II. TOP 32 Các đoạn văn tiếng Anh theo chủ đề thường gặp 1. Viết đoạn
      văn về ngày Tết bằng tiếng Anh có dịch 2. Write about your hobby 3 Write
      about your ideal lover in future 4. Write about your favorite subject at
      school 5. Write about your favorite sport 6. Write about a person you love
      most 7. Write about the subject you hate most at school 8. Write about
      your idolVới nhiều chủ đề khác nhau khi viết thư gửi cho người bạn thân
      thiết, tài liệu "Bài viết tiếng Anh theo 32 chủ đề" sẽ giúp các bạn chuẩn
      bị và luyện tập kỹ năng viết Tiếng Anh hiệu quả, giúp các bạn phát triển
      khả năng viết, từ đó đạt thành công trong học tập và công việc, giúp các
      bạn ôn thi IELTS, TOEFL, THPT Quốc gia... hiệu quả. Mời các bạn tham khảo.
      Viết đoạn văn tiếng Anh theo chủ đề I. Cấu trúc một đoạn văn tiếng Anh
      ngắn II. TOP 32 Các đoạn văn tiếng Anh theo chủ đề thường gặp 1. Viết đoạn
      văn về ngày Tết bằng tiếng Anh có dịch 2. Write about your hobby 3 Write
      about your ideal lover in future 4. Write about your favorite subject at
      school 5. Write about your favorite sport 6. Write about a person you love
      most 7. Write about the subject you hate most at school 8. Write about
      your idolVới nhiều chủ đề khác nhau khi viết thư gửi cho người bạn thân
      thiết, tài liệu "Bài viết tiếng Anh theo 32 chủ đề" sẽ ghool 5. Write
      about your favorite sport 6. Write about a person you love most 7. Write
      about the subject you hate most at school 8. Write about your idolVới
      nhiều chủ đề khác nhau khi viết thư gửi cho người bạn thân thiết, tài liệu
      "Bài viết tiếng Anh theo 32 chủ đề" sẽ giúp các bạn chuẩn bị và luyện tập
      kỹ năng viết Tiếng Anh hiệu quả, giúp các bạn phát triển khả năng viết, từ
      đó đạt thành công trong học tập và công việc, giúp các bạn ôn thi IELTS,
      TOEFL, THPT Quốc gia... hiệu quả. Mời các bạn tham khảo. Viết đoạn văn
      tiếng Anh theo chủ đề I. Cấu trúc một đoạn văn tiếng Anh ngắn II. TOP 32
      Các đoạn văn tiếng Anh theo chủ đề thường gặp 1. Viết đoạn văn về ngày Tết
      bằng tiếng Anh có dịch 2. Write about your hobby 3 Write about your ideal
      lover in future 4. Write about your favorite subject at school 5. Write
      about your favorite sport 6. Write about a person you love most 7. Write
      about the subject you hate most at school 8. Write about your idolVới
      nhiều chủ đề khác nhau khi viết thư gửi cho người bạn thân thiết, tài liệu
      "Bài viết tiếng Anh theo 32 chủ đề" sẽ giúp các bạn chuẩn bị và luyện tập
      kỹ năng viết Tiếng Anh hiệu quả, giúp các bạn phát triển khả năng viết, từ
      đó đạt thành công trong học tập và công việc, giúp các bạn ôn thi IELTS,
      TOEFL, THPT Quốc gia... hiệu quả. Mời các bạn tham khảo. Viết đoạn văn
      tiếng Anh theo chủ đề I. Cấu trúc một đoạn văn tiếng Anh ngắn II. TOP 32
      Các đoạn văn tiếng Anh theo chủ đề thường gặp 1. Viết đoạn văn về ngày Tết
      bằng tiếng Anh có dịch 2. Write about your hobby 3 Write about your ideal
      lover in future 4. Write about your favorite subject at school 5. Write
      about your favorite sport 6. Write about a person you love most 7. Write
      about the subject you hate most at school 8. Write about your idolVới
      nhiều chủ đề khác nhau khi viết thư gửi cho người bạn thân thiết, tài liệu
      "Bài viết tiếng Anh theo 32 chủ đề" sẽ ghool 5. Write about your favorite
      sport 6. Write about a person you love most 7. Write about the subject you
      hate most at school 8. Write about your idolVới nhiều chủ đề khác nhau khi
      viết thư gửi cho người bạn thân thiết, tài liệu "Bài viết tiếng Anh theo
      32 chủ đề" sẽ giúp các bạn chuẩn bị và luyện tập kỹ năng viết Tiếng Anh
      hiệu quả, giúp các bạn phát triển khả năng viết, từ đó đạt thành công
      trong học tập và công việc, giúp các bạn ôn thi IELTS, TOEFL, THPT Quốc
      gia... hiệu quả. Mời các bạn tham khảo. Viết đoạn văn tiếng Anh theo chủ
      đề I. Cấu trúc một đoạn văn tiếng Anh ngắn II. TOP 32 Các đoạn văn tiếng
      Anh theo chủ đề thường gặp 1. Viết đoạn văn về ngày Tết bằng tiếng Anh có
      dịch 2. Write about your hobby 3 Write about your ideal lover in future 4.
      Write about your favorite subject at school 5. Write about your favorite
      sport 6. Write about a person you love most 7. Write about the subject you
      hate most at school 8. Write about your idolVới nhiều chủ đề khác nhau khi
      viết thư gửi cho người bạn thân thiết, tài liệu "Bài viết tiếng Anh theo
      32 chủ đề" sẽ giúp các bạn chuẩn bị và luyện tập kỹ năng viết Tiếng Anh
      hiệu quả, giúp các bạn phát triển khả năng viết, từ đó đạt thành công
      trong học tập và công việc, giúp các bạn ôn thi IELTS, TOEFL, THPT Quốc
      gia... hiệu quả. Mời các bạn tham khảo. Viết đoạn văn tiếng Anh theo chủ
      đề I. Cấu trúc một đoạn văn tiếng Anh ngắn II. TOP 32 Các đoạn văn tiếng
      Anh theo chủ đề thường gặp 1. Viết đoạn văn về ngày Tết bằng tiếng Anh có
      dịch 2. Write about your hobby 3 Write about your ideal lover in future 4.
      Write about your favorite subject at school 5. Write about your favorite
      sport 6. Write about a person you love most 7. Write about the subject you
      hate most at school 8. Write about your idolVới nhiều chủ đề khác nhau khi
      viết thư gửi cho người bạn thân thiết, tài liệu "Bài viết tiếng Anh theo
      32 chủ đề" sẽ ghool 5. Write about your favorite sport 6. Write about a
      person you love most 7. Write about the subject you hate most at school 8.
      Write about your idolVới nhiều chủ đề khác nhau khi viết thư gửi cho người
      bạn thân thiết, tài liệu "Bài viết tiếng Anh theo 32 chủ đề" sẽ giúp các
      bạn chuẩn bị và luyện tập kỹ năng viết Tiếng Anh hiệu quả, giúp các bạn
      phát triển khả năng viết, từ đó đạt thành công trong học tập và công việc,
      giúp các bạn ôn thi IELTS, TOEFL, THPT Quốc gia... hiệu quả. Mời các bạn
      tham khảo. Viết đoạn văn tiếng Anh theo chủ đề I. Cấu trúc một đoạn văn
      tiếng Anh ngắn II. TOP 32 Các đoạn văn tiếng Anh theo chủ đề thường gặp 1.
      Viết đoạn văn về ngày Tết bằng tiếng Anh có dịch 2. Write about your hobby
      3 Write about your ideal lover in future 4. Write about your favorite
      subject at school 5. Write about your favorite sport 6. Write about a
      person you love most 7. Write about the subject you hate most at school 8.
      Write about your idolVới nhiều chủ đề khác nhau khi viết thư gửi cho người
      bạn thân thiết, tài liệu "Bài viết tiếng Anh theo 32 chủ đề" sẽ giúp các
      bạn chuẩn bị và luyện tập kỹ năng viết Tiếng Anh hiệu quả, giúp các bạn
      phát triển khả năng viết, từ đó đạt thành công trong học tập và công việc,
      giúp các bạn ôn thi IELTS, TOEFL, THPT Quốc gia... hiệu quả. Mời các bạn
      tham khảo. Viết đoạn văn tiếng Anh theo chủ đề I. Cấu trúc một đoạn văn
      tiếng Anh ngắn II. TOP 32 Các đoạn văn tiếng Anh theo chủ đề thường gặp 1.
      Viết đoạn văn về ngày Tết bằng tiếng Anh có dịch 2. Write about your hobby
      3 Write about your ideal lover in future 4. Write about your favorite
      subject at school 5. Write about your favorite sport 6. Write about a
      person you love most 7. Write about the subject you hate most at school 8.
      Write about your idolVới nhiều chủ đề khác nhau khi viết thư gửi cho người
      bạn thân thiết, tài liệu "Bài viết tiếng Anh theo 32 chủ đề" sẽ ghool 5.
      Write about your favorite sport 6. Write about a person you love most 7.
      Write about the subject you hate most at school 8. Write about your
      idolVới nhiều chủ đề khác nhau khi viết thư gửi cho người bạn thân thiết,
      tài liệu "Bài viết tiếng Anh theo 32 chủ đề" sẽ giúp các bạn chuẩn bị và
      luyện tập kỹ năng viết Tiếng Anh hiệu quả, giúp các bạn phát triển khả
      năng viết, từ đó đạt thành công trong học tập và công việc, giúp các bạn
      ôn thi IELTS, TOEFL, THPT Quốc gia... hiệu quả. Mời các bạn tham khảo.
      Viết đoạn văn tiếng Anh theo chủ đề I. Cấu trúc một đoạn văn tiếng Anh
      ngắn II. TOP 32 Các đoạn văn tiếng Anh theo chủ đề thường gặp 1. Viết đoạn
      văn về ngày Tết bằng tiếng Anh có dịch 2. Write about your hobby 3 Write
      about your ideal lover in future 4. Write about your favorite subject at
      school 5. Write about your favorite sport 6. Write about a person you love
      most 7. Write about the subject you hate most at school 8. Write about
      your idolVới nhiều chủ đề khác nhau khi viết thư gửi cho người bạn thân
      thiết, tài liệu "Bài viết tiếng Anh theo 32 chủ đề" sẽ giúp các bạn chuẩn
      bị và luyện tập kỹ năng viết Tiếng Anh hiệu quả, giúp các bạn phát triển
      khả năng viết, từ đó đạt thành công trong học tập và công việc, giúp các
      bạn ôn thi IELTS, TOEFL, THPT Quốc gia... hiệu quả. Mời các bạn tham khảo.
      Viết đoạn văn tiếng Anh theo chủ đề I. Cấu trúc một đoạn văn tiếng Anh
      ngắn II. TOP 32 Các đoạn văn tiếng Anh theo chủ đề thường gặp 1. Viết đoạn
      văn về ngày Tết bằng tiếng Anh có dịch 2. Write about your hobby 3 Write
      about your ideal lover in future 4. Write about your favorite subject at
      school 5. Write about your favorite sport 6. Write about a person you love
      most 7. Write about the subject you hate most at school 8. Write about
      your idolVới nhiều chủ đề khác nhau khi viết thư gửi cho người bạn thân
      thiết, tài liệu "Bài viết tiếng Anh theo 32 chủ đề" sẽ ghool 5. Write
      about your favorite sport 6. Write about a person you love most 7. Write
      about the subject you hate most at school 8. Write about your idolVới
      nhiều chủ đề khác nhau khi viết thư gửi cho người bạn thân thiết, tài liệu
      "Bài viết tiếng Anh theo 32 chủ đề" sẽ giúp các bạn chuẩn bị và luyện tập
      kỹ năng viết Tiếng Anh hiệu quả, giúp các bạn phát triển khả năng viết, từ
      đó đạt thành công trong học tập và công việc, giúp các bạn ôn thi IELTS,
      TOEFL, THPT Quốc gia... hiệu quả. Mời các bạn tham khảo. Viết đoạn văn
      tiếng Anh theo chủ đề I. Cấu trúc một đoạn văn tiếng Anh ngắn II. TOP 32
      Các đoạn văn tiếng Anh theo chủ đề thường gặp 1. Viết đoạn văn về ngày Tết
      bằng tiếng Anh có dịch 2. Write about your hobby 3 Write about your ideal
      lover in future 4. Write about your favorite subject at school 5. Write
      about your favorite sport 6. Write about a person you love most 7. Write
      about the subject you hate most at school 8. Write about your idolVới
      nhiều chủ đề khác nhau khi viết thư gửi cho người bạn thân thiết, tài liệu
      "Bài viết tiếng Anh theo 32 chủ đề" sẽ giúp các bạn chuẩn bị và luyện tập
      kỹ năng viết Tiếng Anh hiệu quả, giúp các bạn phát triển khả năng viết, từ
      đó đạt thành công trong học tập và công việc, giúp các bạn ôn thi IELTS,
      TOEFL, THPT Quốc gia... hiệu quả. Mời các bạn tham khảo. Viết đoạn văn
      tiếng Anh theo chủ đề I. Cấu trúc một đoạn văn tiếng Anh ngắn II. TOP 32
      Các đoạn văn tiếng Anh theo chủ đề thường gặp 1. Viết đoạn văn về ngày Tết
      bằng tiếng Anh có dịch 2. Write about your hobby 3 Write about your ideal
      lover in future 4. Write about your favorite subject at school 5. Write
      about your favorite sport 6. Write about a person you love most 7. Write
      about the subject you hate most at school 8. Write about your idolVới
      nhiều chủ đề khác nhau khi viết thư gửi cho người bạn thân thiết, tài liệu
      "Bài viết tiếng Anh theo 32 chủ đề" sẽ ghool 5. Write about your favorite
      sport 6. Write about a person you love most 7. Write about the subject you
      hate most at school 8. Write about your idolVới nhiều chủ đề khác nhau khi
      viết thư gửi cho người bạn thân thiết, tài liệu "Bài viết tiếng Anh theo
      32 chủ đề" sẽ giúp các bạn chuẩn bị và luyện tập kỹ năng viết Tiếng Anh
      hiệu quả, giúp các bạn phát triển khả năng viết, từ đó đạt thành công
      trong học tập và công việc, giúp các bạn ôn thi IELTS, TOEFL, THPT Quốc
      gia... hiệu quả. Mời các bạn tham khảo. Viết đoạn văn tiếng Anh theo chủ
      đề I. Cấu trúc một đoạn văn tiếng Anh ngắn II. TOP 32 Các đoạn văn tiếng
      Anh theo chủ đề thường gặp 1. Viết đoạn văn về ngày Tết bằng tiếng Anh có
      dịch 2. Write about your hobby 3 Write about your ideal lover in future 4.
      Write about your favorite subject at school 5. Write about your favorite
      sport 6. Write about a person you love most 7. Write about the subject you
      hate most at school 8. Write about your idolVới nhiều chủ đề khác nhau khi
      viết thư gửi cho người bạn thân thiết, tài liệu "Bài viết tiếng Anh theo
      32 chủ đề" sẽ giúp các bạn chuẩn bị và luyện tập kỹ năng viết Tiếng Anh
      hiệu quả, giúp các bạn phát triển khả năng viết, từ đó đạt thành công
      trong học tập và công việc, giúp các bạn ôn thi IELTS, TOEFL, THPT Quốc
      gia... hiệu quả. Mời các bạn tham khảo. Viết đoạn văn tiếng Anh theo chủ
      đề I. Cấu trúc một đoạn văn tiếng Anh ngắn II. TOP 32 Các đoạn văn tiếng
      Anh theo chủ đề thường gặp 1. Viết đoạn văn về ngày Tết bằng tiếng Anh có
      dịch 2. Write about your hobby 3 Write about your ideal lover in future 4.
      Write about your favorite subject at school 5. Write about your favorite
      sport 6. Write about a person you love most 7. Write about the subject you
      hate most at school 8. Write about your idolVới nhiều chủ đề khác nhau khi
      viết thư gửi cho người bạn thân thiết, tài liệu "Bài viết tiếng Anh theo
      32 chủ đề" sẽ ghool 5. Write about your favorite sport 6. Write about a
      person you love most 7. Write about the subject you hate most at school 8.
      Write about your idolVới nhiều chủ đề khác nhau khi viết thư gửi cho người
      bạn thân thiết, tài liệu "Bài viết tiếng Anh theo 32 chủ đề" sẽ giúp các
      bạn chuẩn bị và luyện tập kỹ năng viết Tiếng Anh hiệu quả, giúp các bạn
      phát triển khả năng viết, từ đó đạt thành công trong học tập và công việc,
      giúp các bạn ôn thi IELTS, TOEFL, THPT Quốc gia... hiệu quả. Mời các bạn
      tham khảo. Viết đoạn văn tiếng Anh theo chủ đề I. Cấu trúc một đoạn văn
      tiếng Anh ngắn II. TOP 32 Các đoạn văn tiếng Anh theo chủ đề thường gặp 1.
      Viết đoạn văn về ngày Tết bằng tiếng Anh có dịch 2. Write about your hobby
      3 Write about your ideal lover in future 4. Write about your favorite
      subject at school 5. Write about your favorite sport 6. Write about a
      person you love most 7. Write about the subject you hate most at school 8.
      Write about your idolVới nhiều chủ đề khác nhau khi viết thư gửi cho người
      bạn thân thiết, tài liệu "Bài viết tiếng Anh theo 32 chủ đề" sẽ giúp các
      bạn chuẩn bị và luyện tập kỹ năng viết Tiếng Anh hiệu quả, giúp các bạn
      phát triển khả năng viết, từ đó đạt thành công trong học tập và công việc,
      giúp các bạn ôn thi IELTS, TOEFL, THPT Quốc gia... hiệu quả. Mời các bạn
      tham khảo. Viết đoạn văn tiếng Anh theo chủ đề I. Cấu trúc một đoạn văn
      tiếng Anh ngắn II. TOP 32 Các đoạn văn tiếng Anh theo chủ đề thường gặp 1.
      Viết đoạn văn về ngày Tết bằng tiếng Anh có dịch 2. Write about your hobby
      3 Write about your ideal lover in future 4. Write about your favorite
      subject at school 5. Write about your favorite sport 6. Write about a
      person you love most 7. Write about the subject you hate most at school 8.
      Write about your idolVới nhiều chủ đề khác nhau khi viết thư gửi cho người
      bạn thân thiết, tài liệu "Bài viết tiếng Anh theo 32 chủ đề" sẽ ghool 5.
      Write about your favorite sport 6. Write about a person you love most 7.
      Write about the subject you hate most at school 8. Write about your
      idolVới nhiều chủ đề khác nhau khi viết thư gửi cho người bạn thân thiết,
      tài liệu "Bài viết tiếng Anh theo 32 chủ đề" sẽ giúp các bạn chuẩn bị và
      luyện tập kỹ năng viết Tiếng Anh hiệu quả, giúp các bạn phát triển khả
      năng viết, từ đó đạt thành công trong học tập và công việc, giúp các bạn
      ôn thi IELTS, TOEFL, THPT Quốc gia... hiệu quả. Mời các bạn tham khảo.
      Viết đoạn văn tiếng Anh theo chủ đề I. Cấu trúc một đoạn văn tiếng Anh
      ngắn II. TOP 32 Các đoạn văn tiếng Anh theo chủ đề thường gặp 1. Viết đoạn
      văn về ngày Tết bằng tiếng Anh có dịch 2. Write about your hobby 3 Write
      about your ideal lover in future 4. Write about your favorite subject at
      school 5. Write about your favorite sport 6. Write about a person you love
      most 7. Write about the subject you hate most at school 8. Write about
      your idolVới nhiều chủ đề khác nhau khi viết thư gửi cho người bạn thân
      thiết, tài liệu "Bài viết tiếng Anh theo 32 chủ đề" sẽ giúp các bạn chuẩn
      bị và luyện tập kỹ năng viết Tiếng Anh hiệu quả, giúp các bạn phát triển
      khả năng viết, từ đó đạt thành công trong học tập và công việc, giúp các
      bạn ôn thi IELTS, TOEFL, THPT Quốc gia... hiệu quả. Mời các bạn tham khảo.
      Viết đoạn văn tiếng Anh theo chủ đề I. Cấu trúc một đoạn văn tiếng Anh
      ngắn II. TOP 32 Các đoạn văn tiếng Anh theo chủ đề thường gặp 1. Viết đoạn
      văn về ngày Tết bằng tiếng Anh có dịch 2. Write about your hobby 3 Write
      about your ideal lover in future 4. Write about your favorite subject at
      school 5. Write about your favorite sport 6. Write about a person you love
      most 7. Write about the subject you hate most at school 8. Write about
      your idolVới nhiều chủ đề khác nhau khi viết thư gửi cho người bạn thân
      thiết, tài liệu "Bài viết tiếng Anh theo 32 chủ đề" sẽ giúp các bạn chuẩn
      bị và luyện tập kỹ năng viết Tiếng Anh hiệu quả, giúp các bạn phát triển
      khả năng viết, từ đó đạt thành công trong học tập và công việc, giúp các
      bạn ôn thi IELTS, TOEFL, THPT Quốc gia... hiệu quả. Mời các bạn tham khảo.
      Viết đoạn văn tiếng Anh theo chủ đề I. Cấu trúc một đoạn văn tiếng Anh
      ngắn II. TOP 32 Các đoạn văn tiếng Anh theo chủ đề thường gặp 1. Viết đoạn
      văn về ngày Tết bằng tiếng Anh có dịch 2. Write about your hobby 3 Write
      about your ideal lover in future 4. Write about your favorite subject at
      school 5. Write about your favorite sport 6. Write about a person you love
      most 7. Write about the subject you hate most at school 8. Write about
      your idolVới nhiều chủ đề khác nhau khi viết thư gửi cho người bạn thân
      thiết, tài liệu "Bài viết tiếng Anh theo 32 chủ đề" sẽ giúp các bạn chuẩn
      bị và luyện tập kỹ năng viết Tiếng Anh hiệu quả, giúp các bạn phát triển
      khả năng viết, từ đó đạt thành công trong học tập và công việc, giúp các
      bạn ôn thi IELTS, TOEFL, THPT Quốc gia... hiệu quả. Mời các bạn tham khảo.
      Viết đoạn văn tiếng Anh theo chủ đề I. Cấu trúc một đoạn văn tiếng Anh
      ngắn II. TOP 32 Các đoạn văn tiếng Anh theo chủ đề thường gặp 1. Viết đoạn
      văn về ngày Tết bằng tiếng Anh có dịch 2. Write about your hobby 3 Write
      about your ideal lover in future 4. Write about your favorite subject at
      school 5. Write about your favorite sport 6. Write about a person you love
      most 7. Write about the subject you hate most at school 8. Write about
      your idolVới nhiều chủ đề khác nhau khi viết thư gửi cho người bạn thân
      thiết, tài liệu "Bài viết tiếng Anh theo 32 chủ đề" sẽ giúp các bạn chuẩn
      bị và luyện tập kỹ năng viết Tiếng Anh hiệu quả, giúp các bạn phát triển
      khả năng viết, từ đó đạt thành công trong học tập và công việc, giúp các
      bạn ôn thi IELTS, TOEFL, THPT Quốc gia... hiệu quả. Mời các bạn tham khảo.
      Viết đoạn văn tiếng Anh theo chủ đề I. Cấu trúc một đoạn văn tiếng Anh
      ngắn II. TOP 32 Các đoạn văn tiếng Anh theo chủ đề thường gặp 1. Viết đoạn
      văn về ngày Tết bằng tiếng Anh có dịch 2. Write about your hobby 3 Write
      about your ideal lover in future 4. Write about your favorite subject at
      school 5. Write about your favorite sport 6. Write about a person you love
      most 7. Write about the subject you hate most at school 8. Write about
      your idolVới nhiều chủ đề khác nhau khi viết thư gửi cho người bạn thân
      thiết, tài liệu "Bài viết tiếng Anh theo 32 chủ đề" sẽ giúp các bạn chuẩn
      bị và luyện tập kỹ năng viết Tiếng Anh hiệu quả, giúp các bạn phát triển
      khả năng viết, từ đó đạt thành công trong học tập và công việc, giúp các
      bạn ôn thi IELTS, TOEFL, THPT Quốc gia... hiệu quả. Mời các bạn tham khảo.
      Viết đoạn văn tiếng Anh theo chủ đề I. Cấu trúc một đoạn văn tiếng Anh
      ngắn II. TOP 32 Các đoạn văn tiếng Anh theo chủ đề thường gặp 1. Viết đoạn
      văn về ngày Tết bằng tiếng Anh có dịch 2. Write about your hobby 3 Write
      about your ideal lover in future 4. Write about your favorite subject at
      school 5. Write about your favorite sport 6. Write about a person you love
      most 7. Write about the subject you hate most at school 8. Write about
      your idol
      <img src={image1} alt="Logo" />
      {/* <img src={image2} alt="Logo" />
      <img src={image3} alt="Logo" />
      <img src={image4} alt="Logo" /> */}
    </div>
  );
}

export default ExportTableToExcel;
