import styled from "styled-components";

//////

const Info= styled.div`
    opacity: 0;

    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container=styled.div`
    flex: 1;
    /* margin: 5px; */
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle= styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;
const Image= styled.img`
    z-index: 2;

    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Title= styled.div`
    width: 100px;
    height: 100px;
    
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    transition: all 0.5s ease;

    &:hover{
        transform: scale(1.1);


    }
`;


//////

// const Container = styled.div`
//     font: 1;
//     margin: 3px;
//     height: 70vh;
//     position: relative;
    
// `;
// const Image=styled.img`
    // width: 100%;
    // height: 100%;
    // object-fit: cover;
    

// `;



// const Info=styled.div`
//     position: absolute;
//     top:0;
//     left:0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// `;
// const Title=styled.h1`
//     color: whitesmoke;
//     margin-bottom: 20px;

// `;
const Button=styled.button`
    border: none;
    padding: 10px;
    background-color: whitesmoke;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    transform: skew(-20deg);

`;


const CategoryItem = ({item})=> {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title><h1>SHOP</h1></Title>
            
        </Info>
    </Container>
  );
};

export default CategoryItem;

{/* <Button>SHOP NOW</Button> */}