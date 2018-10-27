import Styled from "styled-components";

export const Card = Styled.li`
  .username{
    padding-top: 0.8rem;
    padding-left: 2rem;
  }
  .container { 
    padding: 1.3rem 1.3rem 0 1.3rem;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07);
    background: white;
    .shotImg {
        position: relative;
        overflow: hidden;
        img {
            width: 100%
        } 
        &:hover div {
            visibility: visible
        }
        .shotInfo {
            background-color: white;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 98%;
            visibility: hidden;
            display: flex;
            flex-direction: column;
            text-align: start;
            justify-content: space-around;
            padding: 1rem;
            font-weight: inherit
            .shotName {
                font-size: 1.5rem;
                color: ${props => props.theme.gray3};
            }
            .shotDescription {
                font-weight: 300
                font-size: 1.1rem;
            }
        }
    }
    .shotInfo {
        display: flex;
        justify-content: space-between;
        padding: 0.2rem 0 0.8rem 0;
        font-size: 1.1rem
        .like {
            display: flex;
            align-items: center;
            .likesNum {
                line-height: 1;
                padding: 0 3px 0 0;
                font-size: 1.3rem;
            }
        }
    }
  }
`;