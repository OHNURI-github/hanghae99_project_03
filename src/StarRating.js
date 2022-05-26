import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

function random(n) {
  return Math.ceil(Math.random() * n);
}
console.log(random(5));

const StarRating = () => {
  const [day, setDay] = useState(['월', '화', '수', '목', '금', '토', '일']);
  const [rate, setRate] = useState(0);

  const history = useHistory();
  const count = [0, 1, 2, 3, 4];

  const Name = day.map((item, idx) => {
    return {
      Day: item,
      random: random(5),
    };
  });

  // 랜덤 정수 배열 구하기
  const randomNum = Name.map((i, idx) => {
    return i.random;
  });
  console.log(randomNum);

  // 랜덤 배열의 평균값 구하기
  const aver = (arr) => arr.reduce((acc, cur) => acc + cur) / arr.length;

  useEffect(() => {
    setRate(aver(randomNum).toFixed(1));
  }, []);

  return (
    <Wrap>
      {Name.map((item, idx) => {
        return (
          <Star key={idx}>
            <div style={{ marginRight: '10px' }}>{item.Day}</div>
            {count.map((el, idx) => {
              return (
                <FaStar
                  style={{
                    color: item.random > idx ? 'yellow' : '#eee',
                  }}
                  key={idx}
                  size='30px'
                />
              );
            })}
            <button
              onClick={() => {
                history.push('/detail');
              }}
              style={{ margin: '0px 0px 0px 10px' }}
            >
              Go
            </button>
          </Star>
        );
      })}
      <div style={{ marginTop: '10px' }}>
        <h1 style={{ textAlign: 'center' }}>평균 평점 {rate}</h1>
        <ResetBtn
          onClick={() => {
            setRate(0);
          }}
        >
          Reset
        </ResetBtn>
      </div>
    </Wrap>
  );
};

export default StarRating;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Star = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const ResetBtn = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 30px;
  border: none;
  margin-bottom: 10px;
  background-color: orange;
`;
