import React, {useEffect} from 'react';

export default function useOnClickOutside(ref, handler) {
    useEffect(()=> {

        const listener = (event) => {

            // 모달 안을 클릭했는지 
            if(!ref.current || ref.current.contains(event.target)){
                return ;
            }

            // 모달 밖을 클릭했다면 false로 설정
            handler();
        }

        document.addEventListener('mousedown', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
        }
    },[ref, handler]);
}