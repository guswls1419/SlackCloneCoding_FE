import { ReactElement, useState } from 'react';
import 'src/css/List.css' 


const List = (): ReactElement => {
    
    const [close, setClose] = useState<boolean>(false); // 메뉴닫기 상태 
    const [hide, setHide] = useState<boolean>(true); // 메뉴접기 상태

    return ( 
    <div className={`list ${close ? 'close' : 'open'}`}  
    onMouseEnter={() => {setHide(false)}} 
    onMouseLeave={() => {setHide(true)}} 
    > 
    
    <button className={ `hover-close ${close ? '' : 'open'}  
    ${hide ? 'hide' : '' }`  } onClick={() => {setClose(!close)}} > 
    <img src={icoArrowLeft} alt="" /> 
    </button>

        {!close && ( 
        <div className="content"> 
            <div className="menu">전체글보기</div>
            <div className="menu">리액트</div>
            <div className="menu">리덕스</div>
        </div> 
    )} 
        
</div>
 );
 }; 
        
        
        export default List;
