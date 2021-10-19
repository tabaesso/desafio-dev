import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 20px;
`;

export const CardContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-top: -160px;
`;

export const Card = styled.div`
  flex: 0.3;
  background: #292929;
  padding: 18px 32px;
  border-radius: 5px;
  color: #fff;
  
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;

export const TableContainer = styled.section`
  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #03DAC5;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #292929;
      font-size: 16px;
      color: #fff;
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
